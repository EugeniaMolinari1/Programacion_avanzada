import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';

import { CreatePaymentSessionDto } from './dto/create-payment-session.dto.js';

@Injectable()
export class PaymentsService {
    private readonly stripe: Stripe;

    constructor(private readonly configService: ConfigService) {
        this.stripe = new Stripe(
            this.configService.getOrThrow<string>('STRIPE_SECRET'),
        );
    }

    async createPaymentSession(dto: CreatePaymentSessionDto) {
        const session = await this.stripe.checkout.sessions.create({
            mode: 'payment',

            line_items: dto.items.map((item) => ({
                price_data: {
                    currency: dto.currency,
                    product_data: {
                        name: item.name,
                    },
                    unit_amount: Math.round(item.price * 100),
                },
                quantity: item.quantity,
            })),

            payment_intent_data: {
                metadata: {
                    orderId: dto.orderId,
                },
            },

            success_url:
                this.configService.getOrThrow<string>('STRIPE_SUCCESS_URL'),

            cancel_url:
                this.configService.getOrThrow<string>('STRIPE_CANCEL_UR'),
        });

        return session;
    }

    handleWebhook(rawBody: Buffer, signature: string) {
        let event: Stripe.Event;

        try {
            event = this.stripe.webhooks.constructEvent(
                rawBody,
                signature,
                this.configService.getOrThrow<string>('STRIPE_ENDPOINT_SECRET'),
            );
        } catch {
            throw new BadRequestException('Invalid Stripe signature');
        }

        if (event.type === 'charge.succeeded') {
            const charge = event.data.object;

            console.log('charge.succeeded');
            console.log('orderId:', charge.metadata.orderId);
        } else {
            console.log(`Evento no manejado: ${event.type}`);
        }

        return { received: true };
    }
}
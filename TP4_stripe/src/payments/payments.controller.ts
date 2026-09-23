import {
    Body,
    Controller,
    Get,
    Headers,
    Post,
    Req,
} from '@nestjs/common';

import type { RawBodyRequest } from '@nestjs/common';
import { Request } from 'express';
import Stripe from 'stripe';

import { CreatePaymentSessionDto } from './dto/create-payment-session.dto.js';
import { PaymentsService } from './payments.service.js';

@Controller('payments')
export class PaymentsController {
    constructor(private readonly paymentsService: PaymentsService) { }

    @Post('create-payment-session')
    createPaymentSession(
        @Body() dto: CreatePaymentSessionDto,
    ): Promise<Stripe.Checkout.Session> {
        return this.paymentsService.createPaymentSession(dto);
    }

    @Get('success')
    success() {
        return {
            ok: true,
            message: 'Payment successful',
        };
    }

    @Get('cancel')
    cancel() {
        return {
            ok: false,
            message: 'Payment cancelled',
        };
    }

    @Post('webhook')
    webhook(
        @Req() req: RawBodyRequest<Request>,
        @Headers('stripe-signature') signature: string,
    ) {
        return this.paymentsService.handleWebhook(req.rawBody!, signature);
    }
}
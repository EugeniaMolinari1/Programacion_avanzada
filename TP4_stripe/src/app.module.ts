import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PaymentsModule } from './payments/payments.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: (config: Record<string, string | undefined>) => {
        const requiredVariables = [
          'PORT',
          'STRIPE_SECRET',
          'STRIPE_SUCCESS_URL',
          'STRIPE_CANCEL_UR',
          'STRIPE_ENDPOINT_SECRET',
        ];

        for (const variable of requiredVariables) {
          if (!config[variable]) {
            throw new Error(`Falta la variable de entorno ${variable}`);
          }
        }

        return config;
      },
    }),
    PaymentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
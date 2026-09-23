# TP4 - Sesiones de pago y Webhook con Stripe

Trabajo práctico de Programación Avanzada.

Microservicio desarrollado con NestJS que permite crear sesiones de pago mediante Stripe Checkout y recibir notificaciones de pagos completados mediante un webhook.

## Instalación

Instalar las dependencias:

```bash
npm install
```

Copiar `.env.template` como `.env` y completar las variables de entorno correspondientes.

## Ejecutar el proyecto

```bash
npm run start:dev
```

El microservicio se ejecuta en el puerto `3003`.

## Rutas principales

### Crear sesión de pago

```http
POST /payments/create-payment-session
```

Ejemplo de body:

```json
{
  "orderId": "ord-1",
  "currency": "usd",
  "items": [
    {
      "name": "Producto",
      "price": 20,
      "quantity": 1
    }
  ]
}
```

### Webhook de Stripe

```http
POST /payments/webhook
```

Recibe los eventos enviados por Stripe y verifica su firma. Para el evento `charge.succeeded`, muestra en el log el `orderId` asociado al pago.

Para probar el webhook localmente:

```bash
stripe listen --events charge.succeeded --forward-to localhost:3003/payments/webhook
```
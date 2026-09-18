import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)
const ACADEMY_PRICE = 82500

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const {
      name,
      email,
      tradingViewUser,
      accepted,
      digitalContentConsent,
    } = body

    if (
      !name ||
      !email ||
      !tradingViewUser ||
      accepted !== true ||
      digitalContentConsent !== true
    ) {
      return NextResponse.json(
        {
          error: "Faltan datos obligatorios o consentimientos requeridos.",
        },
        {
          status: 400,
        }
      )
    }

    const acceptedAt = new Date().toISOString()

    const session = await stripe.checkout.sessions.create({
      mode: "payment",

      branding_settings: {
        display_name: "Trader Run Academy",
      },

      customer_email: email,

      line_items: [
        {
          price_data: {
            currency: "eur",

          product_data: {
  name: "Curso de Oferta y Demanda · Trader Run Academy",
  description:
    "Curso de 10 módulos + indicador Trader Run para TradingView + 2 meses de soporte",
},

            unit_amount: ACADEMY_PRICE,
          },

          quantity: 1,
        },
      ],

      metadata: {
        productCode: "trader_run_academy",
        name,
        email,
        tradingViewUser,

        termsAccepted: "true",
        termsVersion: "academy-2026-09-v2",
        termsAcceptedAt: acceptedAt,

        digitalContentConsent: "true",
        digitalContentConsentVersion: "academy-2026-09-v2",
        digitalContentConsentAt: acceptedAt,
      },

      success_url:
        `${process.env.NEXT_PUBLIC_SITE_URL}/compra-completada?session_id={CHECKOUT_SESSION_ID}`,

      cancel_url:
        `${process.env.NEXT_PUBLIC_SITE_URL}/checkout-academy`,
    })

    if (!session.url) {
      return NextResponse.json(
        {
          error: "No se ha podido crear la sesión de pago.",
        },
        {
          status: 500,
        }
      )
    }

    return NextResponse.json({
      url: session.url,
    })
  } catch (error) {
    console.error("Error creando Stripe Checkout:", error)

    return NextResponse.json(
      {
        error: "Error interno al crear el pago.",
      },
      {
        status: 500,
      }
    )
  }
}
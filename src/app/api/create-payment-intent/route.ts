import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2024-06-20" as any, // Use latest compatible version
});

const BASE_AMOUNT = 15999; // 159.99 CAD en cents
const PROMO_CODES: Record<string, number> = {
  TP2026: 6000, // 60 $ de rabais
};

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const promoCode = (body.promoCode as string)?.toUpperCase().trim();
    const discountCents = promoCode && PROMO_CODES[promoCode] ? PROMO_CODES[promoCode] : 0;
    const amount = Math.max(0, BASE_AMOUNT - discountCents);

    // Créer un PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "cad",
      // Activer les méthodes de paiement automatiques (inclut Apple Pay, Google Pay, Cartes, etc.)
      automatic_payment_methods: {
        enabled: true,
      },
      description: "Edupad XENX X1-640 - Pack complet pour tuteur",
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error: any) {
    console.error("Erreur lors de la création du PaymentIntent:", error);
    return NextResponse.json(
      { error: error.message || "Une erreur est survenue" },
      { status: 500 }
    );
  }
}

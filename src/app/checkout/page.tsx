"use client";

import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/components/CheckoutForm";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Tag } from "lucide-react";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "pk_test_placeholder");

const BASE_PRICE = 159.99;

export default function CheckoutPage() {
  const [clientSecret, setClientSecret] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<{ code: string; discount: number } | null>(null);

  const createPaymentIntent = (promoCode?: string) => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "edupad-x1-640" }], promoCode: promoCode || undefined }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.clientSecret) setClientSecret(data.clientSecret);
      });
  };

  useEffect(() => {
    createPaymentIntent();
  }, []);

  const handlePromoApplied = (code: string, discount: number) => {
    setAppliedPromo({ code, discount });
    createPaymentIntent(code);
  };

  const appearance = {
    theme: 'stripe' as const,
    variables: {
      colorPrimary: '#0265BF',
      colorBackground: '#ffffff',
      colorText: '#30313d',
      colorDanger: '#df1b41',
      colorTextPlaceholder: '#9ca3af',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      spacingUnit: '4px',
      borderRadius: '8px',
    },
    rules: {
      '.Input': {
        borderColor: '#d1d5db',
        boxShadow: 'none',
      },
      '.Input:focus': {
        borderColor: '#0265BF',
        boxShadow: '0 0 0 1px #0265BF',
      },
      '.Input--empty::placeholder': {
        color: '#9ca3af',
      },
    },
  };
  const options = {
    clientSecret,
    appearance,
    locale: 'fr-CA' as const,
  };

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row font-sans">
      {/* Mobile Order Summary Accordion */}
      <div className="md:hidden bg-slate-50/80 border-b border-slate-200/80 w-full transition-colors duration-200">
        <details className="group">
          <summary className="flex justify-between items-center p-4 cursor-pointer list-none text-sm text-[#0265BF] hover:bg-slate-50/50 transition-colors duration-150 select-none">
            <span className="flex items-center gap-2 font-medium">
              <svg className="w-4 h-4 transition-transform duration-200 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              Afficher le sommaire
            </span>
            <span className="font-bold text-slate-900 text-lg tabular-nums transition-all duration-300">{appliedPromo ? "99,99 $" : "159,99 $"}</span>
          </summary>
          <div className="p-4 border-t border-slate-200/80 bg-slate-50/50 pb-6">
            <OrderSummaryContent appliedPromo={appliedPromo} onPromoApplied={handlePromoApplied} />
          </div>
        </details>
      </div>

      {/* Left Column - Checkout Form */}
      <div className="w-full md:w-1/2 lg:w-[55%] flex justify-end bg-white pb-24 md:pb-0">
        <div className="w-full max-w-xl p-6 md:p-10 lg:p-12 lg:pr-16 xl:pr-24">
          {/* Logo & Breadcrumb */}
          <div className="mb-6">
            <Link href="/" className="inline-block mb-4">
              <Image src="/images/edupad_black_png.png" alt="Edupad" width={150} height={38} className="h-8 w-auto" />
            </Link>
            <nav className="flex items-center text-sm text-slate-500 mb-4">
              <Link href="/" className="hover:text-[#0265BF] transition-colors">Accueil</Link>
              <span className="mx-2">/</span>
              <span className="text-slate-900 font-medium">Paiement</span>
            </nav>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              Finalisez votre commande
            </h1>
            <p className="text-slate-600 mt-1 text-sm md:text-base">
              En moins de 2 minutes — paiement sécurisé
            </p>
          </div>

          {clientSecret ? (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm amount={appliedPromo ? 99.99 : 159.99} />
            </Elements>
          ) : (
            <div className="flex flex-col justify-center items-center py-20 gap-4">
              <div className="w-8 h-8 border-2 border-[#0265BF]/20 border-t-[#0265BF] rounded-full animate-spin"></div>
              <p className="text-sm text-slate-500">Préparation du paiement...</p>
            </div>
          )}

          {/* Footer links */}
          <div className="mt-12 pt-6 border-t border-slate-200 flex flex-wrap gap-4 md:gap-6 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Paiement 100% sécurisé
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Garantie satisfait ou remboursé 30 jours
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Chiffrement SSL 256-bit
            </span>
          </div>
        </div>
      </div>

      {/* Right Column - Order Summary (Desktop) */}
      <div className="hidden md:block w-full md:w-1/2 lg:w-[45%] bg-slate-50 border-l border-slate-200">
        <div className="w-full max-w-lg p-6 md:p-10 lg:p-12 lg:pl-12 xl:pl-16 sticky top-0">
          <OrderSummaryContent appliedPromo={appliedPromo} onPromoApplied={handlePromoApplied} />
        </div>
      </div>

      {/* Mobile sticky CTA */}
      {clientSecret && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-4 bg-white/95 backdrop-blur-sm border-t border-slate-200/80 shadow-[0_-4px_24px_rgba(0,0,0,0.06)] safe-area-pb">
          <button
            form="payment-form"
            type="submit"
            className="w-full bg-[#0265BF] text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-[#0254a3] active:bg-[#024a8f] active:scale-[0.99] transition-all duration-200 shadow-[0_4px_14px_rgba(2,101,191,0.3)] flex justify-center items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Payer {appliedPromo ? "99,99 $" : "159,99 $"}
          </button>
        </div>
      )}
    </div>
  );
}

function PromoCodeField({
  appliedPromo,
  onPromoApplied,
}: {
  appliedPromo: { code: string; discount: number } | null;
  onPromoApplied: (code: string, discount: number) => void;
}) {
  const [code, setCode] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleApply = () => {
    if (!code.trim()) return;
    setStatus("loading");
    setTimeout(() => {
      const normalized = code.trim().toUpperCase();
      if (normalized === "TP2026") {
        setStatus("success");
        onPromoApplied?.("tp2026", 60);
      } else {
        setStatus("error");
      }
    }, 600);
  };

  if (appliedPromo) {
    return (
      <div className="border-t border-slate-200 pt-4">
        <div className="flex items-center gap-2 text-sm text-emerald-700 bg-emerald-50 rounded-lg px-3 py-2 border border-emerald-200 transition-all duration-200">
          <Tag className="w-3.5 h-3.5 shrink-0" />
          <span>Code <strong>{appliedPromo.code}</strong> appliqué • -{appliedPromo.discount.toFixed(2)} $</span>
        </div>
      </div>
    );
  }

  return (
    <div className="border-t border-slate-200 pt-4">
      <label className="flex items-center gap-1.5 text-sm font-medium text-slate-700 mb-2">
        <Tag className="w-3.5 h-3.5" />
        Code promo
      </label>
      <div className="flex gap-2">
        <input
          type="text"
          value={code}
          onChange={(e) => {
            setCode(e.target.value.toUpperCase());
            if (status !== "idle") setStatus("idle");
          }}
          placeholder="Ex: TP2026"
          className="flex-1 px-3 py-2.5 text-sm text-black border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#0265BF]/20 focus:border-[#0265BF] transition-all duration-150 placeholder:text-slate-400"
          onKeyDown={(e) => e.key === "Enter" && handleApply()}
        />
        <button
          onClick={handleApply}
          disabled={!code.trim() || status === "loading"}
          className="px-4 py-2.5 text-sm font-semibold border border-slate-300 rounded-lg hover:bg-slate-50 active:bg-slate-100 active:scale-[0.98] transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100 text-slate-700"
        >
          {status === "loading" ? (
            <span className="w-4 h-4 border-2 border-slate-400 border-t-transparent rounded-full animate-spin inline-block" />
          ) : (
            "Appliquer"
          )}
        </button>
      </div>
      {status === "error" && (
        <p className="text-xs text-red-600 mt-1.5">Ce code promo n&apos;est pas valide</p>
      )}
      {status === "success" && (
        <p className="text-xs text-emerald-600 mt-1.5">Code promo appliqué avec succès!</p>
      )}
    </div>
  );
}

function OrderSummaryContent({
  appliedPromo,
  onPromoApplied,
}: {
  appliedPromo: { code: string; discount: number } | null;
  onPromoApplied: (code: string, discount: number) => void;
}) {
  const total = appliedPromo ? BASE_PRICE - appliedPromo.discount : BASE_PRICE;

  return (
    <div className="space-y-6">
      {/* Social proof badge */}
      <div className="flex items-center gap-2 text-sm text-slate-600 bg-white rounded-lg px-3 py-2 border border-slate-200">
        <span className="flex -space-x-2">
          <span className="w-7 h-7 rounded-full border-2 border-white bg-slate-200 overflow-hidden z-3 shadow-sm shrink-0">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-full h-full object-cover" />
          </span>
          <span className="w-7 h-7 rounded-full border-2 border-white bg-slate-200 overflow-hidden z-2 shadow-sm shrink-0">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-full h-full object-cover" />
          </span>
          <span className="w-7 h-7 rounded-full border-2 border-white bg-slate-200 overflow-hidden z-1 shadow-sm shrink-0">
            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="User" className="w-full h-full object-cover" />
          </span>
        </span>
        <span><strong className="text-slate-900">148+ tuteurs</strong> ont choisi l&apos;Edupad ce mois-ci</span>
      </div>

      {/* Product Item */}
      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16 bg-white rounded-lg border border-slate-200 flex items-center justify-center p-2 shrink-0">
          <Image 
            src="/images/Sans titre (1000 x 1000 px) (2).png" 
            alt="Edupad XENX X1-640" 
            width={64} 
            height={64} 
            className="object-contain"
          />
          <span className="absolute -top-2 -right-2 bg-slate-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
            1
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-medium text-slate-900">Edupad XENX X1-640</h3>
            <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border border-emerald-200/80">
              En stock
            </span>
          </div>
          <p className="text-sm text-slate-500 mt-0.5">Pack complet pour tuteur</p>
        </div>
        <div className="font-medium text-slate-900">
          159,99 $
        </div>
      </div>

      <div className="border-t border-slate-200 pt-4 space-y-3">
        <div className="flex justify-between text-sm text-slate-600">
          <span>Sous-total</span>
          <span className="font-medium text-slate-900">159,99 $</span>
        </div>
        {appliedPromo && (
          <div className="flex justify-between text-sm text-emerald-600">
            <span>Réduction ({appliedPromo.code})</span>
            <span className="font-medium">-{appliedPromo.discount.toFixed(2)} $</span>
          </div>
        )}
        <div className="flex justify-between text-sm text-slate-600">
          <span>Expédition</span>
          <span className="font-medium text-emerald-600">Gratuit</span>
        </div>
        <div className="flex justify-between text-sm text-slate-600">
          <span>Taxes estimées</span>
          <span className="font-medium text-slate-900">0,00 $</span>
        </div>
      </div>

      <PromoCodeField appliedPromo={appliedPromo} onPromoApplied={onPromoApplied} />

      <div className="border-t border-slate-200 pt-4 flex justify-between items-center mb-6">
        <span className="text-base font-medium text-slate-900">Total</span>
        <div className="flex items-baseline gap-2">
          <span className="text-xs text-slate-500">CAD</span>
          <span className="text-2xl font-bold text-slate-900 tabular-nums transition-all duration-300">{total.toFixed(2)} $</span>
        </div>
      </div>

      {/* Urgency */}
      <div className="flex items-center gap-2 text-sm text-amber-800 bg-amber-50 rounded-lg px-3 py-2 border border-amber-200">
        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
        <span>Expédition sous 24-48h — Livraison gratuite au Canada</span>
      </div>

      <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
        <h4 className="text-sm font-bold text-emerald-800 mb-2 flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Inclus dans votre commande :
        </h4>
        <ul className="text-sm text-emerald-700 space-y-1.5 ml-6 list-disc">
          <li>Tablette Edupad XENX X1-640</li>
          <li>Stylet EMR sans pile (8192 niveaux)</li>
          <li>Câble USB-C tressé renforcé</li>
          <li>Livraison gratuite — expédié sous 24-48h</li>
          <li>Garantie 30 jours sans risque</li>
        </ul>
      </div>
    </div>
  );
}

"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements,
  AddressElement
} from "@stripe/react-stripe-js";

function formatPhoneDisplay(digits: string): string {
  const d = digits.replace(/\D/g, '');
  if (d.length <= 3) return d ? `(${d}` : '';
  if (d.length <= 6) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6, 10)}`;
}

export default function CheckoutForm({ amount = 159.99 }: { amount?: number }) {
  const stripe = useStripe();
  const elements = useElements();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [phone, setPhone] = useState<string | null>(null);
  const errorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (message && errorRef.current) {
      errorRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [message]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    if (!phone || !phone.trim()) {
      setMessage("Le numéro de téléphone est obligatoire pour la livraison.");
      return;
    }

    setIsLoading(true);
    setMessage(null);

    const phoneE164 = phone && phone.length >= 10
      ? (phone.length === 11 && phone.startsWith('1') ? `+${phone}` : `+1${phone}`)
      : undefined;

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/success`,
        receipt_email: email,
        ...(phoneE164 && { shipping: { phone: phoneE164 } }),
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message || "Une erreur est survenue.");
    } else {
      setMessage("Une erreur inattendue est survenue.");
    }

    setIsLoading(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit} className="w-full max-w-xl mx-auto">
      {/* Contact Information */}
      <section className="space-y-3 pb-8 border-b border-slate-100">
        <h2 className="text-lg font-semibold text-gray-900">Contact</h2>
        <LinkAuthenticationElement
          id="link-authentication-element"
          onChange={(e) => setEmail(e.value.email)}
        />
      </section>

      {/* Shipping Address */}
      <section className="space-y-3 pt-8 pb-8 border-b border-slate-100">
        <h2 className="text-lg font-semibold text-gray-900">Livraison</h2>
        <AddressElement
          options={{
            mode: 'shipping',
            allowedCountries: ['CA'],
            autocomplete: { mode: 'google_maps_api', apiKey: process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY || '' },
            fields: { phone: 'never' },
            display: { name: 'full' },
            defaultValues: {
              name: '',
              address: {
                line1: '',
                line2: '',
                city: '',
                state: '',
                postal_code: '',
                country: 'CA',
              },
            },
          }}
        />
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
            Numéro de téléphone
          </label>
          <input
            id="phone"
            type="tel"
            value={phone ? formatPhoneDisplay(phone) : ''}
            onChange={(e) => {
              const digits = e.target.value.replace(/\D/g, '').slice(0, 11);
              setPhone(digits || null);
              if (message) setMessage(null);
            }}
            placeholder="(514) 555-1234"
            className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#0265BF]/20 focus:border-[#0265BF] transition-shadow duration-150"
          />
        </div>
      </section>

      {/* Payment Details */}
      <section className="space-y-3 pt-8 pb-8">
        <h2 className="text-lg font-semibold text-gray-900">Paiement</h2>
        <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm transition-shadow duration-150 hover:shadow-md">
          <PaymentElement id="payment-element" options={{ layout: "tabs" }} />
        </div>
      </section>

      {/* Submit Button */}
      <div className="space-y-3">
        <button
          disabled={isLoading || !stripe || !elements}
          id="submit"
          className="w-full bg-[#0265BF] text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-[#0254a3] active:bg-[#024a8f] active:scale-[0.99] transition-all duration-200 ease-out disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 shadow-[0_4px_14px_rgba(2,101,191,0.25)] hover:shadow-[0_6px_20px_rgba(2,101,191,0.3)] flex justify-center items-center gap-2 group"
        >
          <svg className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span id="button-text">
            {isLoading ? (
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              `Payer ${amount.toFixed(2)} $`
            )}
          </span>
        </button>
        <p className="text-center text-xs text-slate-500 flex items-center justify-center gap-1.5">
          <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Paiement crypté et sécurisé par Stripe
        </p>
      </div>

      {/* Error Message */}
      {message && (
        <div
          ref={errorRef}
          id="payment-message"
          className="text-red-600 text-sm mt-6 text-center bg-red-50 p-4 rounded-lg border border-red-100"
          role="alert"
        >
          {message}
        </div>
      )}
    </form>
  );
}

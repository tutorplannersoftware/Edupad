"use client";

import Link from "next/link";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function SuccessPage() {
  useEffect(() => {
    // Trigger confetti on load
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults, particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults, particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-emerald-50 to-white"></div>
        
        <div className="relative z-10">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-emerald-600" />
          </div>
          
          <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Merci pour votre commande !</h1>
          <p className="text-slate-600 mb-8">
            Votre paiement a été traité avec succès. Un reçu et les détails de livraison ont été envoyés à votre adresse courriel.
          </p>

          <div className="bg-slate-50 rounded-xl p-4 mb-8 text-left border border-slate-100">
            <h3 className="font-semibold text-slate-900 mb-3 border-b border-slate-200 pb-2">Résumé</h3>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded border border-slate-200 flex items-center justify-center p-1 shrink-0">
                <Image 
                  src="/images/Sans titre (1000 x 1000 px) (2).png" 
                  alt="Edupad" 
                  width={40} 
                  height={40} 
                  className="object-contain"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-900">Edupad XENX X1-640</p>
                <p className="text-xs text-slate-500">Quantité: 1</p>
              </div>
              <div className="text-sm font-bold text-slate-900">159,99 $</div>
            </div>
          </div>

          <Link 
            href="/"
            className="inline-block bg-[#0265BF] text-white px-8 py-3.5 rounded-xl font-bold hover:bg-[#0254a3] transition-colors w-full shadow-md hover:shadow-lg"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

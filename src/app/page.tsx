"use client";

import { motion, useInView } from "framer-motion";
import {
  ChevronDown,
  TrendingUp,
  Plus,
  Star,
  Package,
  Video,
  Share2,
  Monitor,
  Layers,
  GraduationCap,
  Usb,
  Check,
  ShieldCheck,
  Truck,
  RefreshCcw,
  Minus,
  Heart,
  Cable
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const faqs = [
  { q: "Qu'est-ce qui différencie l'Edupad des autres tablettes ?", a: "L'Edupad n'est pas juste une autre tablette graphique. Elle est conçue pour la transparence, la facilité d'utilisation et l'enseignement à long terme. Avec sa surface texturée auditable, son stylet sans pile et son architecture Plug & Play, vous gardez le contrôle total de vos cours sans dépendre de pilotes complexes." },
  { q: "Que signifie une architecture Plug & Play ?", a: "Une architecture Plug & Play signifie que l'Edupad est conçu pour fonctionner instantanément sur n'importe quel système (Windows, Mac, ChromeOS) sans aucune installation préalable. Branchez simplement le câble USB-C et commencez à enseigner." },
  { q: "L'Edupad fonctionne-t-il avec Zoom et d'autres applications ?", a: "Oui. L'Edupad est compatible avec une large gamme d'applications tierces telles que Zoom, Teams, Google Meet, Lessonspace, ainsi que des tableaux blancs comme Miro et OpenBoard. Il crée une connexion fluide entre votre main et l'écran." },
  { q: "Quelle est la durée de vie du stylet ?", a: "Le stylet de l'Edupad utilise la technologie EMR (résonance électromagnétique), ce qui signifie qu'il ne contient aucune pile ni batterie. Sa durée de vie est virtuellement illimitée, vous assurant de ne jamais tomber en panne au milieu d'un cours." },
];

export default function LandingPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const bigTextRef = useRef(null);
  const bigTextInView = useInView(bigTextRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-brand/30 selection:text-white overflow-x-hidden">

      {/* ===== GLOBAL NAV (Trezor Style) ===== */}
      <div className="fixed top-4 left-0 right-0 z-50 px-3 md:px-8 flex justify-center">
        <nav className="w-full max-w-[1400px] bg-white rounded-full h-14 md:h-16 flex items-center justify-between px-4 md:px-6 shadow-sm border border-gray-100">
          {/* Left: Logo (plus petit sur mobile) */}
          <Link href="/" className="flex items-center shrink-0">
            <Image src="/images/edupad_black_png.png" alt="Edupad" width={180} height={46} className="h-7 sm:h-8 md:h-10 w-auto" />
          </Link>

          {/* Center: Links */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="#features" className="text-[14px] font-medium text-black hover:text-gray-500 transition-colors">
              Caractéristiques
            </Link>
            <Link href="#specs" className="text-[14px] font-medium text-black hover:text-gray-500 transition-colors">
              Spécifications
            </Link>
            <Link href="/checkout" className="text-[14px] font-medium text-black hover:text-gray-500 transition-colors">
              Prix
            </Link>
            <Link href="#faq" className="text-[14px] font-medium text-black hover:text-gray-500 transition-colors">
              FAQ
            </Link>
          </div>

          {/* Right: CTA (bouton d'achat toujours visible, pas de menu mobile) */}
          <div className="flex items-center gap-4">
            <Link href="/checkout" className="flex items-center justify-center bg-[#0265BF] text-white px-4 py-2.5 sm:px-5 rounded-full text-[13px] sm:text-[14px] font-bold hover:bg-[#0254a3] transition-all shadow-[0_4px_14px_-2px_rgba(2,101,191,0.4)] hover:shadow-[0_6px_20px_-2px_rgba(2,101,191,0.5)] hover:-translate-y-0.5 whitespace-nowrap">
              Commander — 159,99 $
            </Link>
          </div>
        </nav>
      </div>

      {/* ===== HERO ===== */}
      <section className="pt-28 pb-32 md:pt-32 md:pb-48 px-4 md:px-6 lg:min-h-[90vh] flex items-center bg-white text-slate-900 relative z-10 border-b border-slate-200">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-100/50 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto w-full grid lg:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
          {/* Left Column */}
          <div className="flex flex-col justify-center h-full pt-6 md:pt-10 lg:pt-0 lg:col-span-5">
            <Reveal>
              <div className="hidden md:flex flex-wrap items-center gap-2 md:gap-3 mb-6">
                <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-slate-100 border border-slate-200">
                  <Truck className="w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-600" />
                  <span className="text-[13px] md:text-sm font-semibold text-slate-700">Livraison gratuite au Canada</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-[#0265BF]/10 border border-[#0265BF]/30">
                  <TrendingUp className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#0265BF]" />
                  <span className="text-[13px] md:text-sm font-semibold text-[#0265BF]">Plus de clients, meilleure rétention</span>
                </div>
              </div>
              
              <h1 className="text-[clamp(2.25rem,8vw,3.75rem)] font-extrabold tracking-tighter leading-[1.1] mb-4 md:mb-6 text-slate-900">
                L&apos;outil secret des <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0265BF] to-blue-500">pros</span> du tutorat en ligne
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg mb-6 font-medium">
                La tablette graphique conçue pour les tuteurs. Écrivez comme au tableau, sans pilote, sans batterie — des cours en ligne qui captivent. Obtenez plus de clients et améliorez votre rétention.
              </p>
              <p className="text-base text-slate-500 mb-8 md:mb-10 font-medium">
                <strong className="text-slate-700">159,99 $</strong> — Paiement unique. Livraison gratuite au Canada.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex flex-col gap-6">
                <div className="flex flex-wrap items-center gap-4">
                  <Link href="/checkout" className="bg-[#0265BF] text-white px-8 py-4 rounded-full text-[16px] font-bold hover:bg-[#0254a3] transition-all shadow-[0_8px_20px_-6px_rgba(2,101,191,0.4)] hover:shadow-[0_12px_25px_-6px_rgba(2,101,191,0.5)] hover:-translate-y-0.5 flex items-center gap-2">
                    Commander — 159,99 $
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                  <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
                    <div className="flex -space-x-3">
                      <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden z-[3] shadow-sm">
                        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-full h-full object-cover" />
                      </div>
                      <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden z-[2] shadow-sm">
                        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-full h-full object-cover" />
                      </div>
                      <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden z-[1] shadow-sm">
                        <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="User" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center gap-1 text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-[13px] font-semibold text-slate-600 mt-0.5">Note 4,9/5 — +2000 tuteurs</span>
                      <span className="text-[12px] text-slate-500 mt-0.5">&laquo; Changé ma façon d&apos;enseigner &raquo; Marie L., tuteur</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-6 text-[13px] font-medium text-slate-500 bg-slate-50/80 backdrop-blur-sm p-4 rounded-2xl border border-slate-200 w-fit shadow-sm">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" /> Livraison gratuite au Canada
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" /> Paiement sécurisé
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column */}
          <Reveal delay={0.1} className="relative w-full max-w-3xl mx-auto lg:col-span-7 mt-12 md:mt-16 lg:mt-0">
            <div className="relative flex flex-col md:block group">
              
              <Image
                src="/images/Sans titre (1000 x 1000 px) (2).png"
                alt="Edupad XENX X1-640"
                width={1000}
                height={1000}
                className="w-[90%] sm:w-[80%] lg:w-[75%] h-auto drop-shadow-2xl origin-center object-contain mx-auto relative z-10 transform translate-y-0 md:-translate-y-8 lg:-translate-y-12 group-hover:scale-[1.02] transition-transform duration-700"
                priority
              />
              
              {/* Floating Buy Card - séparé sur mobile, superposé sur desktop */}
              <div className="relative mt-4 mx-3 md:absolute md:mt-0 md:mx-0 md:-bottom-4 lg:-bottom-6 md:left-12 md:right-12 bg-white/98 backdrop-blur-xl rounded-[20px] md:rounded-[28px] p-4 sm:p-7 shadow-[0_16px_48px_-12px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.04)] md:shadow-[0_24px_80px_-12px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.04)] border-2 border-[#0265BF]/20 z-30 transform transition-all duration-300 md:hover:-translate-y-1.5 md:hover:shadow-[0_28px_90px_-12px_rgba(2,101,191,0.2)] hover:border-[#0265BF]/40">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
                  {/* Left: Product info + Price */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 md:flex-1 min-w-0">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-0.5 md:mb-1">
                        <h3 className="text-base sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight leading-tight">Edupad XENX X1-640</h3>
                        <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-2 py-0.5 md:px-2.5 md:py-1 rounded-full border border-emerald-200/80 shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-wider">En stock</span>
                        </span>
                      </div>
                      <p className="text-[12px] sm:text-[13px] md:text-[14px] text-slate-500 font-medium">Pack complet pour tuteur</p>
                    </div>
                    <div className="flex items-baseline gap-1.5 md:gap-2">
                      <span className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">159,99</span>
                      <span className="text-sm md:text-lg font-bold text-slate-700">$</span>
                    </div>
                  </div>
                  {/* Right: CTA */}
                  <div className="shrink-0 mt-1 md:mt-0">
                    <Link
                      href="/checkout"
                      className="flex items-center justify-center gap-2 w-full md:w-auto bg-[#0265BF] text-white px-6 py-3.5 md:px-8 md:py-4 rounded-xl md:rounded-2xl text-[14px] md:text-[15px] font-bold hover:bg-[#0254a3] transition-all duration-300 shadow-[0_8px_24px_-6px_rgba(2,101,191,0.45)] hover:shadow-[0_12px_32px_-6px_rgba(2,101,191,0.5)] hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98] group/btn focus:outline-none focus:ring-2 focus:ring-[#0265BF]/50 focus:ring-offset-2 min-h-[48px]"
                    >
                      Commander maintenant
                      <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                    <p className="mt-2 md:mt-2 text-center md:text-left text-[11px] md:text-[12px] text-slate-500 font-medium flex items-center justify-center md:justify-start gap-1">
                      <svg className="w-3.5 h-3.5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Livraison gratuite au Canada
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== SUB-HERO STATEMENT ===== */}
      <section className="py-16 md:py-32 px-4 md:px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <h2 className="text-[clamp(1.5rem,5vw,3.5rem)] font-bold tracking-tighter leading-[1.15] md:leading-[1.1] mb-8 md:mb-20 max-w-4xl text-slate-900">
              Pourquoi les meilleurs tuteurs choisissent l&apos;Edupad ?
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-4 md:gap-12 lg:gap-16 md:items-stretch">
            <Reveal delay={0.1} className="h-full">
              <div className="p-5 md:p-6 rounded-xl md:rounded-2xl bg-white border-2 border-slate-200 shadow-sm hover:border-slate-300 transition-colors h-full flex flex-col">
                <h3 className="font-bold text-[20px] md:text-[22px] mb-3 md:mb-4 tracking-tight text-slate-900">Écrivez comme au tableau</h3>
                <p className="text-slate-600 text-[16px] md:text-[17px] leading-relaxed">
                  Surface texturée anti-glisse. Vos équations et schémas sont nets, fluides — vos élèves suivent sans effort.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2} className="h-full">
              <div className="p-5 md:p-6 rounded-xl md:rounded-2xl bg-white border-2 border-slate-200 shadow-sm hover:border-slate-300 transition-colors h-full flex flex-col">
                <h3 className="font-bold text-[20px] md:text-[22px] mb-3 md:mb-4 tracking-tight text-slate-900">Zéro panne en cours</h3>
                <p className="text-slate-600 text-[16px] md:text-[17px] leading-relaxed">
                  Stylet EMR sans pile. Plus de batterie à charger, plus de stress — branchez et enseignez.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.3} className="h-full">
              <div className="p-5 md:p-6 rounded-xl md:rounded-2xl bg-white border-2 border-slate-200 shadow-sm hover:border-slate-300 transition-colors h-full flex flex-col">
                <h3 className="font-bold text-[20px] md:text-[22px] mb-3 md:mb-4 tracking-tight text-slate-900">Prêt en 5 secondes</h3>
                <p className="text-slate-600 text-[16px] md:text-[17px] leading-relaxed">
                  Plug & Play. Mac, PC, Chromebook — aucun pilote. Branchez le câble USB-C et commencez.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.4}>
            <div className="mt-8 md:mt-16 overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-br from-[#0265BF]/8 via-[#0265BF]/5 to-transparent border border-[#0265BF]/25 shadow-sm">
              <div className="p-5 md:p-10">
                <p className="text-slate-500 text-[11px] md:text-[13px] font-medium text-center uppercase tracking-wider mb-6 md:mb-8">
                  Sondage novembre 2024 — 148 utilisateurs de l&apos;Edupad (valeurs moyennes)
                </p>
                <div className="grid grid-cols-2 gap-4 md:gap-12 max-w-xl mx-auto">
                  <div className="text-center p-4 md:p-6 rounded-lg md:rounded-xl bg-white/80 backdrop-blur-sm border border-[#0265BF]/10 shadow-sm">
                    <div className="text-[2rem] md:text-[3.5rem] font-black text-[#0265BF] tracking-tighter leading-none">+104&nbsp;%</div>
                    <div className="text-slate-600 text-[13px] md:text-[15px] font-semibold mt-2 md:mt-3">de clients en plus</div>
                  </div>
                  <div className="text-center p-4 md:p-6 rounded-lg md:rounded-xl bg-white/80 backdrop-blur-sm border border-[#0265BF]/10 shadow-sm">
                    <div className="text-[2rem] md:text-[3.5rem] font-black text-[#0265BF] tracking-tighter leading-none">+71&nbsp;%</div>
                    <div className="text-slate-600 text-[13px] md:text-[15px] font-semibold mt-2 md:mt-3">de rétention</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== BIG TEXT (L'ÉCRITURE COMPTE) ===== */}
      <section className="py-20 md:py-32 text-center overflow-hidden relative border-t border-[#222]" ref={bigTextRef}>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={bigTextInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(3.5rem,15vw,14rem)] font-black tracking-tighter leading-[0.85] text-[#444]"
        >
          L&apos;ÉCRITURE
        </motion.h2>
        <div className="relative z-10 -my-8 md:-my-16 lg:-my-32 max-w-3xl mx-auto px-4 md:px-6">
          <Image src="/images/Sans titre (1000 x 1000 px) (1).png" alt="Edupad Box" width={1000} height={1000} className="w-full h-auto drop-shadow-2xl" />
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={bigTextInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(3.5rem,15vw,14rem)] font-black tracking-tighter leading-[0.85] text-white relative z-20"
        >
          COMPTE
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={bigTextInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-20 mt-6 md:mt-8 text-slate-400 text-base md:text-lg font-medium max-w-md mx-auto px-4"
        >
          Quand vos élèves voient votre main écrire, ils comprennent mieux.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={bigTextInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative z-20 mt-8 md:mt-6"
        >
          <Link href="/checkout" className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-[14px] md:text-[15px] hover:bg-slate-100 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group/btn">
            Équipez-vous maintenant
            <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </section>

      {/* ===== VIDEO SHOWCASE ===== */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-black border-t border-[#222]">
        <div className="max-w-[1000px] mx-auto">
          <Reveal>
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-[clamp(1.75rem,5vw,3rem)] font-bold tracking-tighter leading-[1.1] mb-4 text-white">
                Voyez pourquoi +2000 tuteurs nous font confiance.
              </h2>
              <p className="text-[#86868b] text-base md:text-lg font-medium">L&apos;Edupad en action — précision et fluidité.</p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-[#333] max-w-[560px] mx-auto w-full">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
              >
                <source src="/images/566ce3539c6aecfddbf5b605f8c1b3b504eb3db1gs2CV.f30.mp4" type="video/mp4" />
              </video>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== PRECISION & DESIGN ===== */}
      <section id="features" className="py-16 md:py-24 px-4 md:px-6 border-t border-[#222] scroll-mt-24">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold tracking-tighter leading-[1.1] mb-12 md:mb-20">
              Précision sans précédent.<br />
              <span className="text-[#86868b]">Conception sans compromis.</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            <Reveal delay={0.1}>
              <h3 className="text-[24px] md:text-[28px] font-bold mb-4 md:mb-6 tracking-tight">Puce de traitement révolutionnaire</h3>
              <p className="text-[#86868b] text-[16px] md:text-[18px] leading-relaxed">
                Le processeur ARM Cortex M33 à 160MHz est le premier ouvert à tous pour auditer et vérifier exactement comment il traite vos tracés, offrant la latence la plus faible jamais créée pour l'enseignement.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <h3 className="text-[24px] md:text-[28px] font-bold mb-4 md:mb-6 tracking-tight">Double protection anti-glisse</h3>
              <p className="text-[#86868b] text-[16px] md:text-[18px] leading-relaxed">
                L'Edupad combine une surface texturée spécifique avec des mines de stylet adaptées pour offrir la protection physique la plus forte de l'industrie contre l'écriture tremblante.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== HIGH-RES SURFACE (Grey Background) ===== */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-[#111]">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold tracking-tighter leading-[1.1] mb-6">
              Surface texturée haute précision
            </h2>
            <p className="text-[#86868b] text-[18px] md:text-[20px] mb-12 md:mb-20 max-w-3xl leading-relaxed">
              Révisez chaque détail et signez toutes vos équations avec une confiance absolue sur notre surface la plus réactive à ce jour.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-16 md:mb-20">
            <Reveal delay={0.1}>
              <div className="border-l-2 border-[#333] pl-5 md:pl-6">
                <h4 className="font-bold text-[18px] md:text-[20px] mb-2 md:mb-3">Perfection à chaque trait</h4>
                <p className="text-[#86868b] text-[15px] md:text-[16px]">Détails nets, 8192 niveaux de pression</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="border-l-2 border-[#333] pl-5 md:pl-6">
                <h4 className="font-bold text-[18px] md:text-[20px] mb-2 md:mb-3">Protection anti-rayures</h4>
                <p className="text-[#86868b] text-[15px] md:text-[16px]">Résistant à l'usure et aux traces de doigts</p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="border-l-2 border-[#333] pl-5 md:pl-6">
                <h4 className="font-bold text-[18px] md:text-[20px] mb-2 md:mb-3">Retour haptique naturel</h4>
                <p className="text-[#86868b] text-[15px] md:text-[16px]">Toucher rassurant à chaque interaction</p>
              </div>
            </Reveal>
          </div>

          <div className="flex flex-col md:flex-row flex-wrap gap-10 md:gap-16 items-start md:items-end">
            <Reveal delay={0.4}>
              <div className="text-[4rem] md:text-[5rem] lg:text-[7rem] font-bold tracking-tighter leading-none mb-2">6 x 3.74"</div>
              <div className="text-[#86868b] text-[16px] md:text-[18px] font-medium">152 x 95 mm — Format optimisé</div>
            </Reveal>
            <Reveal delay={0.5}>
              <div className="text-[4rem] md:text-[5rem] lg:text-[7rem] font-bold tracking-tighter leading-none mb-2">60°</div>
              <div className="text-[#86868b] text-[16px] md:text-[18px] font-medium">Détection d'inclinaison</div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== SPECS ===== */}
      <section id="specs" className="py-20 md:py-28 px-4 md:px-6 bg-black border-t border-[#222] scroll-mt-24">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold tracking-tighter leading-[1.1] mb-4 md:mb-6">
              Spécifications
            </h2>
            <p className="text-[#86868b] text-[18px] md:text-[20px] mb-12 md:mb-20">Conçu pour l'excellence. Pensé pour inspirer.</p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-8 md:gap-12 lg:gap-24 mb-16 md:mb-20 border-b border-[#222] pb-16 md:pb-20">
              <div className="w-[45%] md:w-auto">
                <div className="text-[24px] md:text-[28px] font-bold mb-1 md:mb-2 tracking-tight">207 mm</div>
                <div className="text-[#86868b] text-[14px] md:text-[15px]">Longueur totale</div>
              </div>
              <div className="w-[45%] md:w-auto">
                <div className="text-[24px] md:text-[28px] font-bold mb-1 md:mb-2 tracking-tight">115 mm</div>
                <div className="text-[#86868b] text-[14px] md:text-[15px]">Largeur totale</div>
              </div>
              <div className="w-[45%] md:w-auto">
                <div className="text-[24px] md:text-[28px] font-bold mb-1 md:mb-2 tracking-tight">152 x 95 mm</div>
                <div className="text-[#86868b] text-[14px] md:text-[15px]">Surface active</div>
              </div>
              <div className="w-[45%] md:w-auto">
                <div className="text-[24px] md:text-[28px] font-bold mb-1 md:mb-2 tracking-tight">2.8 - 7 mm</div>
                <div className="text-[#86868b] text-[14px] md:text-[15px]">Épaisseur</div>
              </div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-x-20 gap-y-12 md:gap-y-16">
            <Reveal delay={0.2}>
              <h3 className="text-[20px] md:text-[22px] font-bold mb-6 md:mb-8">Aperçu rapide</h3>
              <ul className="space-y-6 md:space-y-8">
                <li>
                  <div className="font-bold text-[16px] md:text-[17px] mb-1">Puce de traitement ARM</div>
                  <div className="text-[#86868b] text-[14px] md:text-[15px]">Nouveau standard pour une latence ultra-faible</div>
                </li>
                <li>
                  <div className="font-bold text-[16px] md:text-[17px] mb-1">Architecture Plug & Play</div>
                  <div className="text-[#86868b] text-[14px] md:text-[15px]">Spécifiquement conçu pour fonctionner sans pilote</div>
                </li>
                <li>
                  <div className="font-bold text-[16px] md:text-[17px] mb-1">Connectivité filaire</div>
                  <div className="text-[#86868b] text-[14px] md:text-[15px]">Se connecte en USB-C de manière sécurisée</div>
                </li>
                <li>
                  <div className="font-bold text-[16px] md:text-[17px] mb-1">Surface active 6 x 3.74 pouces (152 x 95 mm)</div>
                  <div className="text-[#86868b] text-[14px] md:text-[15px]">Format compact idéal pour le bureau et la mobilité</div>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={0.3}>
              <h3 className="text-[20px] md:text-[22px] font-bold mb-6 md:mb-8">Dans la boîte</h3>
              <ul className="space-y-4 md:space-y-5 text-[#86868b] text-[15px] md:text-[16px]">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#333] shrink-0" /> Tablette graphique Edupad XENX X1-640</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#333] shrink-0" /> Stylet EMR sans pile</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#333] shrink-0" /> Câble USB-C vers USB-A/C</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#333] shrink-0" /> Gant de dessin anti-friction</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#333] shrink-0" /> Guide de démarrage rapide</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section id="pricing" className="py-20 md:py-32 px-4 md:px-6 relative overflow-hidden bg-white scroll-mt-24 border-t border-slate-200">
        {/* Premium Light Background */}
        <div className="absolute inset-0 bg-slate-50/50 z-0" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0265BF]/5 blur-[120px] rounded-full pointer-events-none z-0" />
        
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-24">
            <Reveal>
              <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tighter leading-[1.05] mb-4 md:mb-6 text-slate-900">
                Un investissement qui paie.
              </h2>
              <p className="text-slate-500 text-[18px] md:text-[22px] max-w-2xl mx-auto font-medium leading-relaxed">
                159,99 $ une seule fois. Pas d&apos;abonnement. Le choix évident pour les tuteurs sérieux.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="max-w-[1000px] mx-auto relative">
              {/* Premium Card Container */}
              <div className="relative rounded-[32px] md:rounded-[48px] bg-white border border-slate-200 shadow-[0_20px_80px_-15px_rgba(0,0,0,0.05)] overflow-hidden">
                
                {/* Subtle top highlight */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#0265BF] via-blue-400 to-[#0265BF]" />

                <div className="flex flex-col lg:flex-row">
                  {/* Left Column - Pricing & CTA */}
                  <div className="flex-1 p-8 md:p-16 flex flex-col justify-center relative bg-white">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/50 to-transparent pointer-events-none" />
                    
                    <div className="relative z-10">
                      {/* Social Proof */}
                      <div className="flex items-center gap-2 mb-6 md:mb-8">
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg key={star} className="w-4 h-4 md:w-5 md:h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-slate-600 text-[13px] md:text-sm font-medium">4.9/5 par +500 tuteurs</span>
                      </div>

                      <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-2 tracking-tight">Edupad XENX X1-640</h3>
                      <p className="text-slate-500 mb-8 md:mb-10 text-lg md:text-xl">Le standard de l'industrie.</p>
                      
                      <div className="mb-8 md:mb-10">
                        <div className="flex items-start gap-2 text-slate-900">
                          <span className="text-6xl md:text-7xl font-black tracking-tighter leading-none">159,99</span>
                          <div className="flex flex-col justify-start pt-1 md:pt-2">
                            <span className="text-xl md:text-2xl font-bold">$</span>
                            <span className="text-[#0265BF] text-[12px] md:text-sm font-bold uppercase tracking-wider mt-1">Paiement unique</span>
                          </div>
                        </div>
                      </div>

                      <Link href="/checkout" className="w-full bg-[#0265BF] text-white hover:bg-[#0254a3] px-6 py-4 md:px-8 md:py-5 rounded-xl md:rounded-2xl text-[16px] md:text-xl font-bold transition-all duration-300 flex items-center justify-center gap-3 group/btn shadow-[0_10px_30px_-10px_rgba(2,101,191,0.5)] hover:shadow-[0_20px_40px_-15px_rgba(2,101,191,0.6)] hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#0265BF]/50 focus:ring-offset-2">
                        Commander — 159,99 $
                        <svg className="w-5 h-5 md:w-6 md:h-6 group-hover/btn:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                      
                      <div className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-6 text-slate-500 text-[13px] md:text-sm font-medium">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 md:w-5 md:h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          Livraison gratuite au Canada
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Column - Features */}
                  <div className="flex-1 bg-slate-50 border-t lg:border-t-0 lg:border-l border-slate-200 p-8 md:p-16">
                    <h4 className="text-slate-900 font-bold mb-6 md:mb-8 text-xl md:text-2xl">L'écosystème complet</h4>
                    <div className="grid gap-5 md:gap-6">
                      {[
                        { title: "Tablette Edupad XENX X1-640", desc: "Surface active 6 x 3.74 pouces haute précision", highlight: true },
                        { title: "Stylet EMR Avancé", desc: "8192 niveaux de pression, sans pile", highlight: true },
                        { title: "Kit de connectivité", desc: "Câble USB-C tressé ultra-résistant", highlight: false },
                        { title: "Suite logicielle", desc: "Compatible Windows, Mac, Android", highlight: false }
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 md:gap-4">
                          <div className={`mt-1 w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center shrink-0 ${item.highlight ? 'bg-[#0265BF] text-white shadow-md' : 'bg-slate-200 text-slate-500'}`}>
                            <svg className="w-3 h-3 md:w-3.5 md:h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <div className={`font-bold text-[16px] md:text-lg ${item.highlight ? 'text-slate-900' : 'text-slate-700'}`}>
                              {item.title}
                            </div>
                            <div className="text-slate-500 text-[13px] md:text-sm mt-0.5 md:mt-1">
                              {item.desc}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Trust Badge */}
                    <div className="mt-8 md:mt-10 p-4 md:p-5 rounded-xl md:rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-[#0265BF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-slate-900 font-bold text-[14px] md:text-base">Paiement 100% sécurisé</div>
                        <div className="text-slate-500 text-[12px] md:text-sm">Vos données sont chiffrées de bout en bout.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== TESTIMONIAL STRIP ===== */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-slate-900 border-t border-slate-700 border-b border-slate-800">
        <div className="max-w-[1000px] mx-auto">
          <Reveal>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
              <div className="text-center md:text-left">
                <p className="text-white text-[18px] md:text-[22px] font-medium leading-relaxed italic">
                  &laquo; Depuis que j&apos;enseigne avec l&apos;Edupad, mes élèves comprennent beaucoup mieux et ils restent. J&apos;ai doublé ma clientèle en trois mois. C&apos;est mon meilleur investissement. &raquo;
                </p>
                <p className="text-slate-400 mt-3 font-semibold text-[14px] md:text-[16px]">Sophie M., tuteur en mathématiques</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 md:w-6 md:h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-slate-300 font-bold text-base md:text-lg">4,9/5</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="py-20 md:py-28 px-4 md:px-6 bg-[#111] scroll-mt-24 border-t border-[#222]">
        <div className="max-w-[800px] mx-auto">
          <Reveal>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tighter leading-[1.1] mb-12 md:mb-16">
              Questions fréquentes
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="divide-y divide-[#333]">
              {faqs.map((faq, i) => (
                <div key={i} className="py-5 md:py-7">
                  <button
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full text-left flex justify-between items-center text-white font-bold text-[16px] md:text-[18px] tracking-tight group"
                  >
                    <span className="pr-6 md:pr-8 group-hover:text-[#a1a1a6] transition-colors">{faq.q}</span>
                    <Plus className={`w-5 h-5 md:w-6 md:h-6 shrink-0 transition-transform duration-300 ${activeFaq === i ? 'rotate-45' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === i ? "max-h-60 opacity-100 mt-4 md:mt-5" : "max-h-0 opacity-0"}`}>
                    <p className="text-[#86868b] text-[15px] md:text-[16px] leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-white py-10 md:py-12 px-4 md:px-6 border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 mb-8">
            <Link href="/" className="flex items-center">
              <Image src="/images/edupad_black_png.png" alt="Edupad" width={160} height={42} className="h-8 md:h-9 w-auto" />
            </Link>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-[13px] md:text-[14px] font-medium text-slate-600">
              <Link href="#features" className="hover:text-slate-900 transition-colors">Caractéristiques</Link>
              <Link href="#specs" className="hover:text-slate-900 transition-colors">Spécifications</Link>
              <Link href="/checkout" className="hover:text-slate-900 transition-colors">Prix</Link>
              <Link href="#faq" className="hover:text-slate-900 transition-colors">FAQ</Link>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-[13px] font-medium">
            <div>© {new Date().getFullYear()} Edupad. Tous droits réservés.</div>
            <div className="flex items-center gap-2 text-slate-600">
              sales@edupad.store
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

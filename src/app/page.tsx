"use client";

import { motion, useInView } from "framer-motion";
import {
  ChevronDown,
  Menu as MenuIcon,
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
  { q: "L'Edupad fonctionne-t-il avec Zoom et d'autres applications ?", a: "Oui. L'Edupad est compatible avec une large gamme d'applications tierces telles que Zoom, Teams, Google Meet, ainsi que des tableaux blancs comme Miro et OpenBoard. Il crée une connexion fluide entre votre main et l'écran." },
  { q: "Quelle est la durée de vie du stylet ?", a: "Le stylet de l'Edupad utilise la technologie EMR (résonance électromagnétique), ce qui signifie qu'il ne contient aucune pile ni batterie. Sa durée de vie est virtuellement illimitée, vous assurant de ne jamais tomber en panne au milieu d'un cours." },
];

export default function LandingPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const bigTextRef = useRef(null);
  const bigTextInView = useInView(bigTextRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-brand/30 selection:text-white overflow-x-hidden">

      {/* ===== GLOBAL NAV (Trezor Style) ===== */}
      <div className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8 flex justify-center">
        <nav className="w-full max-w-[1400px] bg-white rounded-full h-14 md:h-16 flex items-center justify-between px-6 shadow-sm border border-gray-100">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Image src="/images/edupad_black_png.png" alt="Edupad" width={140} height={36} className="h-7 w-auto" />
          </div>

          {/* Center: Links */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="#features" className="text-[14px] font-medium text-black hover:text-gray-500 transition-colors">
              Caractéristiques
            </Link>
            <Link href="#specs" className="text-[14px] font-medium text-black hover:text-gray-500 transition-colors">
              Spécifications
            </Link>
            <Link href="#pricing" className="text-[14px] font-medium text-black hover:text-gray-500 transition-colors">
              Prix
            </Link>
            <Link href="#faq" className="text-[14px] font-medium text-black hover:text-gray-500 transition-colors">
              FAQ
            </Link>
          </div>

          {/* Right: CTA & Menu */}
          <div className="flex items-center gap-4">
            <Link href="#pricing" className="hidden sm:flex items-center justify-center bg-[#0265BF] text-white px-5 py-2 rounded-full text-[14px] font-bold hover:bg-[#0254a3] transition-colors shadow-sm">
              Acheter maintenant
            </Link>
            <button className="text-[14px] font-medium text-black hover:text-gray-500 transition-colors flex items-center gap-2 lg:hidden">
              Menu
              <MenuIcon className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </div>

      {/* ===== HERO ===== */}
      <section className="pt-32 pb-48 px-6 lg:min-h-[90vh] flex items-center bg-white text-slate-900 rounded-b-[40px] relative z-10 overflow-visible border-b border-slate-100">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-100/50 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto w-full grid lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Column */}
          <div className="flex flex-col justify-center h-full pt-10 lg:pt-0 lg:col-span-5">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6 w-fit">
                <span className="flex h-2 w-2 rounded-full bg-[#0265BF] animate-pulse"></span>
                <span className="text-xs font-bold text-[#0265BF] tracking-wide uppercase">Démarquez-vous des autres tuteurs avec la tablette #1</span>
              </div>
              
              <h1 className="text-[clamp(3.5rem,6vw,5rem)] font-extrabold tracking-tighter leading-[1.05] mb-6 text-slate-900">
                La tablette <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0265BF] to-blue-500">ultime</span> pour enseigner.
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-lg mb-10 font-medium">
                Oubliez la souris. Écrivez, dessinez et annotez naturellement. L'outil indispensable pour des cours en ligne captivants.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex flex-col gap-6">
                <div className="flex flex-wrap items-center gap-4">
                  <Link href="#pricing" className="bg-[#0265BF] text-white px-8 py-4 rounded-full text-[16px] font-bold hover:bg-[#0254a3] transition-all shadow-[0_8px_20px_-6px_rgba(2,101,191,0.4)] hover:shadow-[0_12px_25px_-6px_rgba(2,101,191,0.5)] hover:-translate-y-0.5 flex items-center gap-2">
                    Commander maintenant
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
                      <span className="text-[13px] font-semibold text-slate-600 mt-0.5">+2000 tuteurs équipés</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-6 text-[13px] font-medium text-slate-500 bg-slate-50/80 backdrop-blur-sm p-4 rounded-2xl border border-slate-200 w-fit shadow-sm">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#0265BF]" /> Livraison gratuite au Canada
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column */}
          <Reveal delay={0.1} className="relative w-full max-w-3xl mx-auto lg:col-span-7 mt-16 lg:mt-0">
            <div className="relative flex justify-center items-center group">
              
              <Image
                src="/images/Sans titre (1000 x 1000 px) (2).png"
                alt="Edupad Pro"
                width={1000}
                height={1000}
                className="w-[80%] lg:w-[75%] h-auto drop-shadow-2xl origin-center object-contain mx-auto relative z-10 transform group-hover:scale-[1.02] transition-transform duration-700"
                priority
              />
              
              {/* Floating Buy Card */}
              <div className="absolute -bottom-8 lg:-bottom-12 left-4 right-4 sm:left-12 sm:right-12 bg-white/95 backdrop-blur-xl rounded-3xl p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-slate-100 z-30 transform transition-transform hover:-translate-y-1 duration-300">
                <div className="flex justify-between items-center mb-5 pb-5 border-b border-slate-100">
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-slate-900">Edupad Pro</span>
                    <span className="text-[13px] text-slate-500 font-medium">Le pack complet pour tuteur</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex items-center gap-1.5 bg-green-50 text-green-700 px-2.5 py-1 rounded-full border border-green-100">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[11px] font-bold uppercase tracking-wider">En stock</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-black text-slate-900">129 $</span>
                    <span className="text-sm text-slate-400 font-medium line-through">159 $</span>
                  </div>
                  <Link href="#pricing" className="w-full sm:w-auto bg-[#0265BF] text-white px-8 py-3.5 rounded-full text-[15px] font-bold hover:bg-[#0254a3] transition-all shadow-[0_8px_20px_-6px_rgba(2,101,191,0.4)] hover:shadow-[0_12px_25px_-6px_rgba(2,101,191,0.5)] hover:-translate-y-0.5 text-center">
                    Acheter maintenant
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== SUB-HERO STATEMENT ===== */}
      <section className="py-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tighter leading-[1.1] mb-20 max-w-4xl">
              Vos explications, parfaitement claires —<br />
              <span className="text-[#86868b]">aujourd'hui, demain, et au-delà.</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            <Reveal delay={0.1}>
              <h3 className="font-bold text-[22px] mb-4 tracking-tight">La première surface texturée auditable</h3>
              <p className="text-[#86868b] text-[17px] leading-relaxed">
                Notre texture micro-grainée est ouverte à tous pour vérifier exactement comment elle capture vos traits, offrant la protection anti-glisse la plus avancée jamais créée.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <h3 className="font-bold text-[22px] mb-4 tracking-tight">Le premier stylet sans pile EMR</h3>
              <p className="text-[#86868b] text-[17px] leading-relaxed">
                L'Edupad utilise la résonance électromagnétique pour alimenter le stylet, vous protégeant contre les pannes de batterie en plein cours et garantissant une fiabilité absolue.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <h3 className="font-bold text-[22px] mb-4 tracking-tight">Connectivité universelle</h3>
              <p className="text-[#86868b] text-[17px] leading-relaxed">
                Gérez vos cours de manière transparente sur n'importe quel appareil (Mac, PC, ChromeOS) avec notre connexion USB-C Plug & Play ultra-rapide et sécurisée.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== BIG TEXT (L'ÉCRITURE COMPTE) ===== */}
      <section className="py-32 text-center overflow-hidden relative" ref={bigTextRef}>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={bigTextInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(4rem,15vw,14rem)] font-black tracking-tighter leading-[0.85] text-[#111]"
        >
          L'ÉCRITURE
        </motion.h2>
        <div className="relative z-10 -my-16 lg:-my-32 max-w-3xl mx-auto px-6">
          <Image src="/images/Sans titre (1000 x 1000 px) (1).png" alt="Edupad Box" width={1000} height={1000} className="w-full h-auto drop-shadow-2xl" />
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={bigTextInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(4rem,15vw,14rem)] font-black tracking-tighter leading-[0.85] text-white relative z-20"
        >
          COMPTE
        </motion.h2>
      </section>

      {/* ===== VIDEO SHOWCASE ===== */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-[1000px] mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tighter leading-[1.1] mb-4 text-white">
                Voyez la différence.
              </h2>
              <p className="text-[#86868b] text-lg font-medium">L'Edupad Pro en action.</p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-[#333]">
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
      <section id="features" className="py-24 px-6 border-t border-[#222] scroll-mt-24">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tighter leading-[1.1] mb-20">
              Précision sans précédent.<br />
              <span className="text-[#86868b]">Conception sans compromis.</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            <Reveal delay={0.1}>
              <h3 className="text-[28px] font-bold mb-6 tracking-tight">Puce de traitement révolutionnaire</h3>
              <p className="text-[#86868b] text-[18px] leading-relaxed">
                Le processeur ARM Cortex M33 à 160MHz est le premier ouvert à tous pour auditer et vérifier exactement comment il traite vos tracés, offrant la latence la plus faible jamais créée pour l'enseignement.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <h3 className="text-[28px] font-bold mb-6 tracking-tight">Double protection anti-glisse</h3>
              <p className="text-[#86868b] text-[18px] leading-relaxed">
                L'Edupad combine une surface texturée spécifique avec des mines de stylet adaptées pour offrir la protection physique la plus forte de l'industrie contre l'écriture tremblante.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== HIGH-RES SURFACE (Grey Background) ===== */}
      <section className="py-28 px-6 bg-[#111]">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tighter leading-[1.1] mb-6">
              Surface texturée haute précision
            </h2>
            <p className="text-[#86868b] text-[20px] mb-20 max-w-3xl leading-relaxed">
              Révisez chaque détail et signez toutes vos équations avec une confiance absolue sur notre surface la plus réactive à ce jour.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-12 mb-20">
            <Reveal delay={0.1}>
              <div className="border-l-2 border-[#333] pl-6">
                <h4 className="font-bold text-[20px] mb-3">Perfection à chaque trait</h4>
                <p className="text-[#86868b] text-[16px]">Détails nets, 8192 niveaux de pression</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="border-l-2 border-[#333] pl-6">
                <h4 className="font-bold text-[20px] mb-3">Protection anti-rayures</h4>
                <p className="text-[#86868b] text-[16px]">Résistant à l'usure et aux traces de doigts</p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="border-l-2 border-[#333] pl-6">
                <h4 className="font-bold text-[20px] mb-3">Retour haptique naturel</h4>
                <p className="text-[#86868b] text-[16px]">Toucher rassurant à chaque interaction</p>
              </div>
            </Reveal>
          </div>

          <div className="flex flex-wrap gap-16 items-end">
            <Reveal delay={0.4}>
              <div className="text-[5rem] lg:text-[7rem] font-bold tracking-tighter leading-none mb-2">6 x 3.74"</div>
              <div className="text-[#86868b] text-[18px] font-medium">Format optimisé</div>
            </Reveal>
            <Reveal delay={0.5}>
              <div className="text-[5rem] lg:text-[7rem] font-bold tracking-tighter leading-none mb-2">60°</div>
              <div className="text-[#86868b] text-[18px] font-medium">Détection d'inclinaison</div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== DO MORE WITH EDUPAD ===== */}
      <section className="py-28 px-6 bg-black">
        <div className="max-w-[1200px] mx-auto text-center">
          <Reveal>
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tighter leading-[1.1] mb-20">
              Faites plus<br />avec l'Edupad
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <Reveal delay={0.1}>
              <div className="bg-[#111] rounded-[32px] p-10 lg:p-14 h-full border border-[#222]">
                <div className="text-white font-bold mb-5 uppercase tracking-widest text-[13px]">Application tout-en-un</div>
                <h3 className="text-[26px] font-bold mb-6 tracking-tight leading-[1.3]">
                  Votre centre de contrôle pour gérer, configurer et personnaliser vos raccourcis sur bureau.
                </h3>
                <p className="text-[#86868b] mb-10 text-[16px]">Disponible pour Mac et Windows</p>
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#1a1a1a]">
                  <Image src="/images/whiteboard-app.png" alt="App" fill className="object-cover opacity-80" />
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="bg-[#111] rounded-[32px] p-10 lg:p-14 h-full border border-[#222] flex flex-col">
                <div className="text-white font-bold mb-5 uppercase tracking-widest text-[13px]">Des milliers d'heures</div>
                <h3 className="text-[26px] font-bold mb-6 tracking-tight leading-[1.3]">
                  Gérez facilement vos cours de Mathématiques, Physique, Chimie, et bien plus avec une seule tablette.
                </h3>
                <div className="mt-auto pt-10">
                  <Link href="#" className="text-white underline underline-offset-8 decoration-[#333] hover:decoration-white transition-colors font-bold text-[16px]">
                    Voir les matières compatibles
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== SPECS ===== */}
      <section id="specs" className="py-28 px-6 bg-black border-t border-[#222] scroll-mt-24">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tighter leading-[1.1] mb-6">
              Spécifications
            </h2>
            <p className="text-[#86868b] text-[20px] mb-20">Conçu pour l'excellence. Pensé pour inspirer.</p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-12 lg:gap-24 mb-20 border-b border-[#222] pb-20">
              <div>
                <div className="text-[28px] font-bold mb-2 tracking-tight">254 mm / 10 in</div>
                <div className="text-[#86868b] text-[15px]">Longueur</div>
              </div>
              <div>
                <div className="text-[28px] font-bold mb-2 tracking-tight">158 mm / 6.2 in</div>
                <div className="text-[#86868b] text-[15px]">Largeur</div>
              </div>
              <div>
                <div className="text-[28px] font-bold mb-2 tracking-tight">8 mm / 0.3 in</div>
                <div className="text-[#86868b] text-[15px]">Épaisseur</div>
              </div>
              <div>
                <div className="text-[28px] font-bold mb-2 tracking-tight">245 g / 8.6 oz</div>
                <div className="text-[#86868b] text-[15px]">Poids</div>
              </div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
            <Reveal delay={0.2}>
              <h3 className="text-[22px] font-bold mb-8">Aperçu rapide</h3>
              <ul className="space-y-8">
                <li>
                  <div className="font-bold text-[17px] mb-1">Puce de traitement ARM</div>
                  <div className="text-[#86868b] text-[15px]">Nouveau standard pour une latence ultra-faible</div>
                </li>
                <li>
                  <div className="font-bold text-[17px] mb-1">Architecture Plug & Play</div>
                  <div className="text-[#86868b] text-[15px]">Spécifiquement conçu pour fonctionner sans pilote</div>
                </li>
                <li>
                  <div className="font-bold text-[17px] mb-1">Connectivité filaire</div>
                  <div className="text-[#86868b] text-[15px]">Se connecte en USB-C de manière sécurisée</div>
                </li>
                <li>
                  <div className="font-bold text-[17px] mb-1">Surface active 6 x 3.74 pouces</div>
                  <div className="text-[#86868b] text-[15px]">Format compact idéal pour le bureau et la mobilité</div>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={0.3}>
              <h3 className="text-[22px] font-bold mb-8">Dans la boîte</h3>
              <ul className="space-y-5 text-[#86868b] text-[16px]">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#333]" /> Tablette graphique Edupad Pro</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#333]" /> Stylet EMR sans pile</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#333]" /> Câble USB-C vers USB-A/C</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#333]" /> 10x mines de rechange</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#333]" /> Gant de dessin anti-friction</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#333]" /> Guide de démarrage rapide</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section id="pricing" className="py-32 px-6 relative overflow-hidden bg-white scroll-mt-24">
        {/* Premium Light Background */}
        <div className="absolute inset-0 bg-slate-50/50 z-0" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0265BF]/5 blur-[120px] rounded-full pointer-events-none z-0" />
        
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="text-center mb-24">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-8">
                <span className="flex h-2 w-2 rounded-full bg-[#0265BF] animate-pulse"></span>
                <span className="text-sm font-semibold text-[#0265BF] tracking-wide uppercase">En stock & prêt à expédier</span>
              </div>
              <h2 className="text-[clamp(3rem,6vw,5rem)] font-bold tracking-tighter leading-[1.05] mb-6 text-slate-900">
                L'excellence au service<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#0265BF] to-blue-400">
                  de votre enseignement.
                </span>
              </h2>
              <p className="text-slate-500 text-[22px] max-w-2xl mx-auto font-medium leading-relaxed">
                Un investissement unique. Une qualité professionnelle. Tout ce dont vous avez besoin pour des cours en ligne parfaits.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="max-w-[1000px] mx-auto relative">
              {/* Premium Card Container */}
              <div className="relative rounded-[48px] bg-white border border-slate-200 shadow-[0_20px_80px_-15px_rgba(0,0,0,0.05)] overflow-hidden">
                
                {/* Subtle top highlight */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#0265BF] via-blue-400 to-[#0265BF]" />

                <div className="flex flex-col lg:flex-row">
                  {/* Left Column - Pricing & CTA */}
                  <div className="flex-1 p-10 md:p-16 flex flex-col justify-center relative bg-white">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/50 to-transparent pointer-events-none" />
                    
                    <div className="relative z-10">
                      {/* Social Proof */}
                      <div className="flex items-center gap-2 mb-8">
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg key={star} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-slate-600 text-sm font-medium">4.9/5 par +500 tuteurs</span>
                      </div>

                      <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 tracking-tight">Edupad Pro</h3>
                      <p className="text-slate-500 mb-10 text-xl">Le standard de l'industrie.</p>
                      
                      <div className="mb-10">
                        <div className="flex items-start gap-2 text-slate-900">
                          <span className="text-7xl font-black tracking-tighter leading-none">129</span>
                          <div className="flex flex-col justify-start pt-2">
                            <span className="text-2xl font-bold">$ CAD</span>
                            <span className="text-[#0265BF] text-sm font-bold uppercase tracking-wider mt-1">Paiement unique</span>
                          </div>
                        </div>
                      </div>

                      <button className="w-full bg-[#0265BF] text-white hover:bg-[#0254a3] px-8 py-5 rounded-2xl text-xl font-bold transition-all duration-300 flex items-center justify-center gap-3 group/btn shadow-[0_10px_30px_-10px_rgba(2,101,191,0.5)] hover:shadow-[0_20px_40px_-15px_rgba(2,101,191,0.6)] hover:-translate-y-1">
                        Commander maintenant
                        <svg className="w-6 h-6 group-hover/btn:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                      
                      <div className="mt-8 flex flex-col sm:flex-row items-center gap-6 text-slate-500 text-sm font-medium">
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-[#0265BF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          Livraison gratuite 48h
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Column - Features */}
                  <div className="flex-1 bg-slate-50 border-t lg:border-t-0 lg:border-l border-slate-200 p-10 md:p-16">
                    <h4 className="text-slate-900 font-bold mb-8 text-2xl">L'écosystème complet</h4>
                    <div className="grid gap-6">
                      {[
                        { title: "Tablette Edupad Pro", desc: "Surface active 6 x 3.74 pouces haute précision", highlight: true },
                        { title: "Stylet EMR Avancé", desc: "8192 niveaux de pression, sans pile", highlight: true },
                        { title: "Kit de connectivité", desc: "Câble USB-C tressé ultra-résistant", highlight: false },
                        { title: "Accessoires pro", desc: "Gant anti-friction & 10 mines incluses", highlight: false },
                        { title: "Suite logicielle", desc: "Compatible Windows, Mac, Android", highlight: false }
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4">
                          <div className={`mt-1 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${item.highlight ? 'bg-[#0265BF] text-white shadow-md' : 'bg-slate-200 text-slate-500'}`}>
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <div className={`font-bold text-lg ${item.highlight ? 'text-slate-900' : 'text-slate-700'}`}>
                              {item.title}
                            </div>
                            <div className="text-slate-500 text-sm mt-1">
                              {item.desc}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Trust Badge */}
                    <div className="mt-10 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-[#0265BF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-slate-900 font-bold">Paiement 100% sécurisé</div>
                        <div className="text-slate-500 text-sm">Vos données sont chiffrées de bout en bout.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="py-28 px-6 bg-[#111] scroll-mt-24">
        <div className="max-w-[800px] mx-auto">
          <Reveal>
            <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold tracking-tighter leading-[1.1] mb-16">
              Questions fréquentes
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="divide-y divide-[#333]">
              {faqs.map((faq, i) => (
                <div key={i} className="py-7">
                  <button
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full text-left flex justify-between items-center text-white font-bold text-[18px] tracking-tight group"
                  >
                    <span className="pr-8 group-hover:text-[#a1a1a6] transition-colors">{faq.q}</span>
                    <Plus className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${activeFaq === i ? 'rotate-45' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === i ? "max-h-60 opacity-100 mt-5" : "max-h-0 opacity-0"}`}>
                    <p className="text-[#86868b] text-[16px] leading-relaxed">
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
      <footer className="bg-black py-12 px-6 border-t border-[#222]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <Image src="/images/edupad_white_png.png" alt="Edupad" width={120} height={32} className="h-6 w-auto" />
            <div className="flex items-center gap-8 text-[14px] font-medium text-[#86868b]">
              <Link href="#features" className="hover:text-white transition-colors">Caractéristiques</Link>
              <Link href="#specs" className="hover:text-white transition-colors">Spécifications</Link>
              <Link href="#pricing" className="hover:text-white transition-colors">Prix</Link>
              <Link href="#faq" className="hover:text-white transition-colors">FAQ</Link>
            </div>
          </div>
          <div className="border-t border-[#222] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[#86868b] text-[13px] font-medium">
            <div>© {new Date().getFullYear()} Edupad. Tous droits réservés.</div>
            <div className="flex items-center gap-2 text-[#555]">
              info@edupad.ca
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

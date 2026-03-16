"use client";

import { motion, useInView } from "framer-motion";
import {
  PenTool,
  Monitor,
  Zap,
  Battery,
  CheckCircle2,
  Star,
  ArrowRight,
  Video,
  MousePointer2,
  Share2,
  Layers,
  Sparkles,
  ShieldCheck,
  Wifi,
  Clock,
  Package,
  Users,
  GraduationCap,
  BookOpen,
  ChevronDown,
  Globe,
  Lock,
  Server,
  RefreshCcw,
  Fingerprint,
  Eye,
  Award,
  TrendingUp,
  Heart,
  Send,
} from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const featureTabs = [
  {
    id: "writing",
    label: "Écriture",
    icon: PenTool,
    features: [
      { title: "Surface texture papier", desc: "Texture micro-grainée qui reproduit la friction naturelle d'un stylo sur du papier. Fini l'écriture qui glisse." },
      { title: "8192 niveaux de pression", desc: "Chaque trait reflète votre intention — des lignes fines pour les indices aux traits épais pour les résultats." },
      { title: "Inclinaison 60°", desc: "Inclinez le stylet naturellement pour varier l'épaisseur, exactement comme un vrai marqueur." },
    ],
  },
  {
    id: "performance",
    label: "Performance",
    icon: Zap,
    features: [
      { title: "Latence < 8ms", desc: "Notre puce dédiée assure que votre écriture apparaît instantanément — plus rapide que l'œil humain ne peut percevoir." },
      { title: "Taux de rapport 266 PPS", desc: "266 points par seconde pour une fluidité absolue, même lors d'écritures rapides au tableau." },
      { title: "Zéro décalage Bluetooth", desc: "Connexion USB-C filaire : aucune interférence, aucun appairage, aucune latence sans fil." },
    ],
  },
  {
    id: "compatibility",
    label: "Compatibilité",
    icon: Monitor,
    features: [
      { title: "Windows, Mac, Linux, ChromeOS", desc: "Plug & play sur tous les systèmes d'exploitation. Aucun pilote complexe à installer." },
      { title: "Zoom, Teams, Meet, Miro", desc: "Fonctionne parfaitement avec les tableaux blancs intégrés de toutes les plateformes de visio." },
      { title: "OpenBoard, Jamboard, Whiteboard", desc: "Compatible avec tous les logiciels de tableau blanc éducatif du marché." },
    ],
  },
  {
    id: "design",
    label: "Conception",
    icon: Package,
    features: [
      { title: "Stylet sans pile (EMR)", desc: "Technologie de résonance électromagnétique — votre stylet n'a jamais besoin d'être rechargé." },
      { title: "4 boutons programmables", desc: "Changez de couleur, effacez, annulez ou zoomez en une fraction de seconde." },
      { title: "Format A5 compact", desc: "Assez grand pour écrire confortablement, assez compact pour votre bureau." },
    ],
  },
];

const testimonials = [
  {
    quote: "Avant l'Edupad, j'utilisais ma souris pour expliquer des équations sur Zoom. C'était un cauchemar. Maintenant, mes élèves me disent que c'est comme si j'écrivais au tableau devant eux.",
    author: "Marc Dubois",
    role: "Professeur de Mathématiques",
    company: "Tutorat Pro",
    rating: 5,
  },
  {
    quote: "La surface texturée change tout. J'ai essayé des iPad et des tablettes Wacom, mais l'Edupad est le seul qui me donne vraiment l'impression d'écrire sur du papier.",
    author: "Sophie Laurent",
    role: "Tutrice en Physique-Chimie",
    company: "Betterprof",
    rating: 5,
  },
  {
    quote: "Le fait qu'il n'y ait pas de batterie dans le stylet est génial. Je donne parfois 6h de cours d'affilée, je n'ai plus à m'inquiéter de tomber en panne.",
    author: "Thomas Martin",
    role: "Professeur d'Anglais",
    company: "ABC Tutoring",
    rating: 5,
  },
];

const faqs = [
  { q: "Est-ce compatible avec mon Mac / PC ?", a: "Oui, l'Edupad est 100% compatible avec Windows (10 et 11), macOS (10.12 et supérieur), ChromeOS et Linux. Il fonctionne en plug & play sur la plupart des systèmes — branchez et commencez à enseigner." },
  { q: "Ai-je besoin d'installer des logiciels ?", a: "Non. Pour les fonctions de base, branchez simplement la tablette via USB-C. Si vous souhaitez personnaliser les boutons de raccourcis, un petit utilitaire léger est disponible au téléchargement." },
  { q: "Est-ce que ça marche avec Zoom et Teams ?", a: "Absolument. L'Edupad est reconnu comme un périphérique de pointage standard. Il fonctionne parfaitement avec la fonction « Tableau Blanc » de Zoom, Teams, Google Meet, et des outils comme Miro ou Microsoft Whiteboard." },
  { q: "Quelle est la différence avec une tablette Wacom ?", a: "Les tablettes Wacom sont conçues pour les artistes. L'Edupad est optimisé pour l'enseignement : surface papier pour l'écriture (pas le dessin), raccourcis pédagogiques, et un guide de démarrage spécifique aux tuteurs." },
  { q: "Que se passe-t-il si je n'aime pas la tablette ?", a: "Vous bénéficiez d'une garantie satisfait ou remboursé de 30 jours. Si l'Edupad ne révolutionne pas vos cours en ligne, renvoyez-le nous et nous vous rembourserons intégralement, sans poser de questions." },
];

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState("writing");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const currentTab = featureTabs.find((t) => t.id === activeTab)!;

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
      {/* ==================== NAVIGATION ==================== */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-18">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-sm shadow-blue-600/20">
                <PenTool className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">Edupad</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Fonctionnalités</Link>
              <Link href="#how-it-works" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Comment ça marche</Link>
              <Link href="#testimonials" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Témoignages</Link>
              <Link href="#pricing" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Tarifs</Link>
            </div>
            <div className="flex items-center gap-3">
              <Link href="#pricing" className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-sm shadow-blue-600/20 hover:shadow-md hover:shadow-blue-600/30">
                Acheter maintenant
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* ==================== HERO ==================== */}
      <section className="pt-32 pb-16 lg:pt-44 lg:pb-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-blue-50 to-transparent rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-8 border border-blue-100"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
              </span>
              La tablette #1 pour l'enseignement en ligne
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]"
            >
              La tablette graphique conçue pour{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
                les enseignants
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg lg:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Zéro latence, stylet sans pile, surface texture papier. L'Edupad transforme vos cours en ligne en une expérience naturelle et fluide — comme si vous écriviez au tableau.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
            >
              <Link
                href="#pricing"
                className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
              >
                Commander mon Edupad <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#how-it-works"
                className="w-full sm:w-auto text-slate-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-100 transition-all flex items-center justify-center gap-2 border border-slate-200"
              >
                Voir comment ça marche
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-sm text-slate-400 font-medium"
            >
              Satisfait ou remboursé 30 jours. Aucun risque.
            </motion.p>
          </div>

          {/* Product Visual */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 relative mx-auto max-w-5xl"
          >
            <div className="aspect-[16/9] rounded-2xl bg-slate-900 shadow-2xl overflow-hidden border border-slate-700/50 relative">
              <div className="absolute inset-0 bg-[#1a1a2e] flex flex-col">
                <div className="h-11 bg-[#16213e] border-b border-[#0f3460]/50 flex items-center px-4 gap-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#e94560]" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="flex-1 text-center text-xs text-slate-400 font-medium font-mono">
                    Cours de Mathématiques — Tableau Blanc Interactif
                  </div>
                  <div className="flex gap-3 text-slate-500">
                    <Video className="w-4 h-4" />
                    <Share2 className="w-4 h-4" />
                    <Users className="w-4 h-4" />
                  </div>
                </div>
                <div className="flex-1 relative bg-[#0a0a1a]">
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{ backgroundImage: "radial-gradient(#1e3a5f 1px, transparent 1px)", backgroundSize: "24px 24px" }}
                  />
                  <svg className="w-full h-full relative z-10" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid meet">
                    {/* Equation */}
                    <motion.text
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5, duration: 0.5 }}
                      x="80" y="80" fill="#3b82f6" fontSize="24" fontFamily="serif" fontStyle="italic"
                    >
                      f(x) = x² + 2x + 1
                    </motion.text>
                    <motion.text
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2, duration: 0.5 }}
                      x="80" y="120" fill="#94a3b8" fontSize="16" fontFamily="sans-serif"
                    >
                      Factorisation :
                    </motion.text>
                    <motion.text
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.5, duration: 0.5 }}
                      x="80" y="155" fill="#10b981" fontSize="22" fontFamily="serif" fontStyle="italic"
                    >
                      f(x) = (x + 1)²
                    </motion.text>
                    {/* Parabola */}
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 3, duration: 2, ease: "easeInOut" }}
                      d="M450,350 Q500,300 550,260 Q600,230 650,260 Q700,300 750,350"
                      fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round"
                    />
                    {/* Axes */}
                    <motion.line
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 2.8, duration: 0.5 }}
                      x1="430" y1="350" x2="770" y2="350" stroke="#334155" strokeWidth="1.5"
                    />
                    <motion.line
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 2.8, duration: 0.5 }}
                      x1="600" y1="200" x2="600" y2="370" stroke="#334155" strokeWidth="1.5"
                    />
                    <motion.text
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 5, duration: 0.5 }}
                      x="580" y="395" fill="#64748b" fontSize="12" fontFamily="sans-serif"
                    >
                      x
                    </motion.text>
                    <motion.text
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 5, duration: 0.5 }}
                      x="605" y="215" fill="#64748b" fontSize="12" fontFamily="sans-serif"
                    >
                      y
                    </motion.text>
                    {/* Vertex dot */}
                    <motion.circle
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 5, duration: 0.3 }}
                      cx="600" cy="260" r="5" fill="#10b981"
                    />
                    <motion.text
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 5.5, duration: 0.5 }}
                      x="610" y="255" fill="#10b981" fontSize="12" fontFamily="sans-serif"
                    >
                      sommet (-1, 0)
                    </motion.text>
                  </svg>
                  {/* Cursor */}
                  <motion.div
                    animate={{ x: [0, 60, 120, 60, 0], y: [0, -30, 0, 30, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 w-5 h-5 -ml-2.5 -mt-2.5 text-white drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] z-20"
                  >
                    <MousePointer2 className="w-full h-full" />
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/15 to-indigo-500/15 blur-3xl -z-10 rounded-3xl" />
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
          >
            {[
              { value: "10 000+", label: "Tuteurs équipés" },
              { value: "< 8ms", label: "Latence" },
              { value: "4.9/5", label: "Note moyenne" },
              { value: "99.8%", label: "Satisfaction" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl lg:text-3xl font-extrabold text-slate-900">{stat.value}</div>
                <div className="text-sm text-slate-500 mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==================== LOGOS ==================== */}
      <section className="py-12 border-y border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold text-slate-400 mb-8 uppercase tracking-[0.2em]">
            Adopté par des centaines d'entreprises de tutorat
          </p>
          <div className="flex flex-wrap justify-center gap-10 md:gap-16 items-center opacity-40 hover:opacity-70 transition-opacity duration-500">
            {["Tutorat Pro", "Betterprof", "ABC Tutoring", "Tuteur Scolaire", "Academos"].map((name) => (
              <div key={name} className="text-lg font-bold text-slate-700">{name}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FEATURES (TABBED) ==================== */}
      <section id="features" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-bold text-blue-600 uppercase tracking-[0.15em] mb-4">Conçu pour l'enseignement</p>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
              Des caractéristiques pensées pour les tuteurs
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              Contrairement aux tablettes graphiques traditionnelles conçues pour les artistes, l'Edupad est optimisé pour l'écriture, les mathématiques et l'annotation en temps réel.
            </p>
          </AnimatedSection>

          {/* Tabs */}
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {featureTabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {currentTab.features.map((feature, i) => (
                <motion.div
                  key={`${activeTab}-${i}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ==================== HOW IT WORKS ==================== */}
      <section id="how-it-works" className="py-24 lg:py-32 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-sm font-bold text-blue-600 uppercase tracking-[0.15em] mb-4">Simple comme bonjour</p>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Prêt en 3 étapes
            </h2>
            <p className="text-lg text-slate-500">
              Une expérience fluide et sans friction, de la commande à votre premier cours.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                icon: Package,
                title: "Commandez en ligne",
                desc: "Choisissez votre kit Edupad et recevez-le chez vous en 48h avec livraison gratuite. Paiement sécurisé via Stripe.",
              },
              {
                step: "02",
                icon: Monitor,
                title: "Branchez et c'est parti",
                desc: "Connectez le câble USB-C à votre ordinateur. Aucun pilote à installer — votre tablette est reconnue instantanément.",
              },
              {
                step: "03",
                icon: GraduationCap,
                title: "Enseignez naturellement",
                desc: "Ouvrez Zoom, Teams ou Meet et commencez à écrire sur le tableau blanc. Vos élèves voient tout en temps réel.",
              },
            ].map((item, i) => (
              <AnimatedSection key={i}>
                <div className="relative bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 h-full">
                  <div className="text-6xl font-extrabold text-blue-100 mb-6">{item.step}</div>
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-5">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section id="testimonials" className="py-24 lg:py-32 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <p className="text-sm font-bold text-blue-600 uppercase tracking-[0.15em] mb-4">Témoignages</p>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Ils ont transformé leurs cours
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Découvrez ce que les tuteurs et les enseignants pensent de notre tablette.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i}>
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 h-full flex flex-col">
                  <div className="flex gap-1 mb-5">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-8 flex-1">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
                    <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{t.author}</h4>
                      <p className="text-xs text-slate-500">{t.role}</p>
                    </div>
                    <div className="ml-auto">
                      <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                        Client vérifié
                      </span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECURITY ==================== */}
      <section className="py-24 lg:py-32 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-bold text-blue-600 uppercase tracking-[0.15em] mb-4">Qualité garantie</p>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Un produit fiable et durable
            </h2>
            <p className="text-lg text-slate-500">
              Nous concevons l'Edupad avec les mêmes standards de qualité que les leaders de l'industrie.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: ShieldCheck, title: "Garantie 2 ans", desc: "Remplacement gratuit en cas de défaut de fabrication pendant 24 mois." },
              { icon: Award, title: "Certifié CE & FCC", desc: "Conforme aux normes de sécurité européennes et nord-américaines." },
              { icon: RefreshCcw, title: "Remboursement 30 jours", desc: "Pas satisfait ? Retournez votre Edupad pour un remboursement complet." },
              { icon: Lock, title: "Paiement sécurisé", desc: "Transactions protégées par Stripe avec chiffrement SSL 256-bit." },
              { icon: Globe, title: "Livraison mondiale", desc: "Expédition depuis le Canada vers le monde entier en 2-7 jours ouvrables." },
              { icon: Heart, title: "Support réactif", desc: "Notre équipe répond à vos questions en moins de 24h, 7 jours sur 7." },
            ].map((item, i) => (
              <AnimatedSection key={i}>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 flex gap-4 hover:shadow-md transition-shadow">
                  <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PRICING ==================== */}
      <section id="pricing" className="py-24 lg:py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-bold text-blue-400 uppercase tracking-[0.15em] mb-4">Tarification simple</p>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 tracking-tight">
              Choisissez votre kit Edupad
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Un investissement unique. Pas d'abonnement, pas de frais cachés.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Starter */}
            <AnimatedSection>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-full flex flex-col">
                <h3 className="text-xl font-bold text-white mb-1">Edupad Lite</h3>
                <p className="text-slate-400 text-sm mb-6">Pour commencer à enseigner en ligne.</p>
                <div className="mb-8">
                  <span className="text-4xl font-extrabold text-white">59€</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {[
                    "Tablette Edupad Lite (A6)",
                    "Stylet sans pile",
                    "Câble USB-C (1.5m)",
                    "2 mines de rechange",
                    "Garantie 1 an",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3.5 rounded-xl font-semibold text-sm border border-white/20 text-white hover:bg-white/10 transition-all">
                  Commander
                </button>
              </div>
            </AnimatedSection>

            {/* Pro (Featured) */}
            <AnimatedSection>
              <div className="relative bg-white text-slate-900 rounded-3xl p-8 shadow-2xl h-full flex flex-col">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-5 py-1.5 rounded-full text-xs font-bold shadow-lg uppercase tracking-wider">
                  Le plus populaire
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Edupad Pro</h3>
                <p className="text-slate-500 text-sm mb-6">Le choix des tuteurs professionnels.</p>
                <div className="mb-8 flex items-end gap-2">
                  <span className="text-2xl text-slate-400 line-through font-medium">129€</span>
                  <span className="text-4xl font-extrabold text-slate-900">89€</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {[
                    "Tablette Edupad Pro (A5)",
                    "Stylet sans pile (8192 niveaux)",
                    "Câble USB-C tressé (2m)",
                    "Gant anti-friction",
                    "10 mines de rechange",
                    "Garantie 2 ans",
                    "Support prioritaire",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3.5 rounded-xl font-bold text-sm bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 group">
                  Commander <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
                <p className="text-center text-xs text-slate-400 mt-3 font-medium">Livraison gratuite en 48h</p>
              </div>
            </AnimatedSection>

            {/* Enterprise */}
            <AnimatedSection>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-full flex flex-col">
                <h3 className="text-xl font-bold text-white mb-1">Entreprise</h3>
                <p className="text-slate-400 text-sm mb-6">Pour les écoles et entreprises de tutorat.</p>
                <div className="mb-8">
                  <span className="text-4xl font-extrabold text-white">Sur mesure</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {[
                    "10+ tablettes Edupad Pro",
                    "Tarifs dégressifs (-15% à -40%)",
                    "Facture corporative",
                    "Livraison express offerte",
                    "Gestionnaire de compte dédié",
                    "Formation en ligne incluse",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3.5 rounded-xl font-semibold text-sm border border-white/20 text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" /> Contacter les ventes
                </button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section id="faq" className="py-24 lg:py-32 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-bold text-blue-600 uppercase tracking-[0.15em] mb-4">FAQ</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Questions fréquentes
            </h2>
            <p className="text-lg text-slate-500">Trouvez les réponses à vos questions.</p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden transition-all hover:border-slate-200">
                  <button
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none gap-4"
                  >
                    <span className="font-semibold text-slate-900">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${activeFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${activeFaq === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <div className="px-6 pb-5 text-slate-500 leading-relaxed">{faq.a}</div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="py-24 lg:py-32 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-8 border border-blue-100">
              <Sparkles className="w-4 h-4" />
              Offre de lancement limitée
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Prêt à donner de meilleurs cours ?
            </h2>
            <p className="text-lg text-slate-500 mb-10 max-w-xl mx-auto">
              Arrêtez de galérer avec votre souris. Rejoignez les milliers de tuteurs qui enseignent comme s'ils étaient dans la même pièce que leurs élèves.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#pricing"
                className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
              >
                Commander mon Edupad <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:hello@edupad.ca"
                className="w-full sm:w-auto text-slate-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-100 transition-all flex items-center justify-center gap-2 border border-slate-200"
              >
                Contacter les ventes
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-white py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center">
                <PenTool className="text-white w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-slate-900">Edupad</span>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-500">
              <Link href="#features" className="hover:text-blue-600 transition-colors">Fonctionnalités</Link>
              <Link href="#pricing" className="hover:text-blue-600 transition-colors">Tarifs</Link>
              <Link href="#faq" className="hover:text-blue-600 transition-colors">FAQ</Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">Conditions Générales</Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">Confidentialité</Link>
            </div>
            <p className="text-sm text-slate-400">© {new Date().getFullYear()} Edupad. Tous droits réservés.</p>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-100 text-center">
            <p className="text-xs text-slate-400 flex items-center justify-center gap-1.5">
              Conçu avec <Heart className="w-3 h-3 text-red-400 fill-red-400" /> au Canada 🍁
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

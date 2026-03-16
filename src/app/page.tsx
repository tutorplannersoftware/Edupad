"use client";

import { motion } from "framer-motion";
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
  ShieldCheck
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function LandingPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <PenTool className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">Edupad</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Fonctionnalités</Link>
              <Link href="#testimonials" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Témoignages</Link>
              <Link href="#faq" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">FAQ</Link>
            </div>
            <div className="flex items-center gap-4">
              <Link href="#pricing" className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Connexion</Link>
              <Link href="#pricing" className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-all shadow-sm shadow-blue-600/20">
                Acheter maintenant
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden relative">
        {/* Background elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-8 border border-blue-200 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              La tablette #1 pour l'enseignement en ligne
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight"
            >
              Enseignez comme si vous étiez <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">dans la même pièce.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg lg:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              L'Edupad est la première tablette graphique conçue spécifiquement pour les tuteurs et les enseignants. Zéro latence, stylet sans pile, et intégration parfaite avec vos outils de visio.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="#pricing" className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 hover:scale-105 active:scale-95">
                Commander mon Edupad <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="text-sm text-slate-500 sm:ml-4 flex items-center gap-2 font-medium">
                <ShieldCheck className="w-5 h-5 text-emerald-500" /> Garantie 30 jours
              </p>
            </motion.div>
          </div>

          {/* Product Image Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-20 relative mx-auto max-w-5xl"
          >
            <div className="aspect-[16/9] rounded-2xl bg-slate-900 shadow-2xl overflow-hidden border border-slate-800 relative group">
              {/* Fake UI for the tablet screen */}
              <div className="absolute inset-0 bg-[#1e1e1e] flex flex-col">
                <div className="h-12 bg-[#2d2d2d] border-b border-[#3d3d3d] flex items-center px-4 gap-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 text-center text-xs text-slate-400 font-medium font-mono">Tableau Blanc - Cours de Mathématiques</div>
                  <div className="flex gap-3 text-slate-400">
                    <Share2 className="w-4 h-4" />
                    <Monitor className="w-4 h-4" />
                  </div>
                </div>
                <div className="flex-1 relative p-8 bg-[#1a1a1a]">
                  {/* Grid background */}
                  <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                  
                  <svg className="w-full h-full relative z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                    {/* Hand-drawn style math equation */}
                    <motion.path 
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
                      d="M20,30 Q30,20 40,30 T60,30" 
                      fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" 
                    />
                    <motion.path 
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 3, ease: "easeInOut" }}
                      d="M20,50 L80,50" 
                      fill="none" stroke="#e2e8f0" strokeWidth="0.5" 
                    />
                    <motion.text 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 4.5 }}
                      x="35" y="45" fill="#3b82f6" fontSize="6" fontFamily="sans-serif" fontWeight="bold"
                    >
                      f(x) = x² + 2x + 1
                    </motion.text>
                    
                    {/* Graph */}
                    <motion.path 
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 5, ease: "easeInOut" }}
                      d="M40,80 Q50,60 60,80" 
                      fill="none" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" 
                    />
                  </svg>
                  
                  {/* Floating pen cursor */}
                  <motion.div 
                    animate={{ 
                      x: [0, 100, 50, 0],
                      y: [0, -50, 50, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 w-6 h-6 -ml-3 -mt-3 text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.8)] z-20"
                  >
                    <MousePointer2 className="w-full h-full" />
                  </motion.div>
                </div>
              </div>
            </div>
            
            {/* Decorative blur behind image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-20 blur-2xl -z-10 rounded-3xl"></div>
          </motion.div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-12 border-y border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-bold text-slate-400 mb-8 uppercase tracking-widest">Compatible avec vos outils préférés</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-xl font-bold flex items-center gap-2 text-slate-800"><Video className="w-7 h-7 text-blue-500"/> Zoom</div>
            <div className="text-xl font-bold flex items-center gap-2 text-slate-800"><Monitor className="w-7 h-7 text-green-500"/> Google Meet</div>
            <div className="text-xl font-bold flex items-center gap-2 text-slate-800"><Share2 className="w-7 h-7 text-purple-600"/> MS Teams</div>
            <div className="text-xl font-bold flex items-center gap-2 text-slate-800"><Layers className="w-7 h-7 text-indigo-500"/> Miro</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Pensé pour l'enseignement.<br/>Pas pour le dessin.</h2>
            <p className="text-lg text-slate-600">Contrairement aux tablettes graphiques traditionnelles conçues pour les artistes, l'Edupad est optimisé pour l'écriture, les mathématiques et l'annotation en temps réel.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-7 h-7 text-blue-600" />,
                title: "Zéro Latence",
                desc: "Une puce dédiée assure que votre écriture apparaît instantanément à l'écran, sans le décalage frustrant des tablettes Bluetooth."
              },
              {
                icon: <Battery className="w-7 h-7 text-blue-600" />,
                title: "Stylet Sans Pile",
                desc: "Notre technologie de résonance électromagnétique signifie que votre stylet n'a jamais besoin d'être rechargé. Toujours prêt."
              },
              {
                icon: <Monitor className="w-7 h-7 text-blue-600" />,
                title: "Surface Papier",
                desc: "Une texture micro-grainée qui reproduit la friction d'un stylo sur du papier. Fini l'écriture glissante et illisible."
              },
              {
                icon: <Sparkles className="w-7 h-7 text-blue-600" />,
                title: "Raccourcis Intégrés",
                desc: "4 boutons programmables pour changer de couleur, effacer, ou annuler en une fraction de seconde."
              },
              {
                icon: <Layers className="w-7 h-7 text-blue-600" />,
                title: "Plug & Play",
                desc: "Branchez le câble USB-C et commencez à enseigner. Aucun pilote complexe à installer sur Windows ou Mac."
              },
              {
                icon: <ShieldCheck className="w-7 h-7 text-blue-600" />,
                title: "Conception Robuste",
                desc: "Conçu pour résister à des années d'utilisation quotidienne intensive. Garanti 2 ans."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section id="testimonials" className="py-24 bg-white border-t border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Ils ont transformé leurs cours</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Rejoignez plus de 10 000 tuteurs qui ont arrêté de galérer avec leur souris.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Avant l'Edupad, j'utilisais ma souris pour expliquer des équations sur Zoom. C'était un cauchemar. Maintenant, mes élèves me disent que c'est comme si j'écrivais au tableau devant eux.",
                author: "Marc Dubois",
                role: "Professeur de Mathématiques",
                rating: 5
              },
              {
                quote: "La surface texturée change tout. J'ai essayé des iPad et des tablettes Wacom, mais l'Edupad est le seul qui me donne vraiment l'impression d'écrire sur du papier. Un investissement rentabilisé en une semaine.",
                author: "Sophie Laurent",
                role: "Tuteur en Physique-Chimie",
                rating: 5
              },
              {
                quote: "Le fait qu'il n'y ait pas de batterie dans le stylet est génial. Je donne parfois 6h de cours d'affilée, je n'ai plus à m'inquiéter de tomber en panne au milieu d'une explication.",
                author: "Thomas Martin",
                role: "Professeur d'Anglais",
                rating: 5
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative">
                <div className="absolute top-8 right-8 text-slate-200">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21L16.411 14.182L16.994 12.5H14.5H10.5V3H21.5V12.5L18.665 21H14.017ZM3.517 21L5.911 14.182L6.494 12.5H4H0V3H11V12.5L8.165 21H3.517Z" />
                  </svg>
                </div>
                <div className="flex gap-1 mb-6 relative z-10">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 text-lg mb-8 relative z-10 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonial.author}</h4>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / CTA */}
      <section id="pricing" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight">Prêt à donner de meilleurs cours ?</h2>
            <p className="text-xl text-slate-300">Rejoignez l'élite des tuteurs en ligne.</p>
          </div>

          <div className="bg-white text-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl max-w-3xl mx-auto relative">
            {/* Badge */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg uppercase tracking-wider">
              Offre Spéciale Lancement
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10 pb-10 border-b border-slate-100">
              <div>
                <h3 className="text-3xl font-extrabold mb-2">Edupad Pro</h3>
                <p className="text-slate-500 text-lg">Le kit complet pour enseigner.</p>
              </div>
              <div className="text-right">
                <div className="flex items-end gap-2 justify-end">
                  <span className="text-3xl text-slate-400 line-through font-medium mb-1">129€</span>
                  <span className="text-6xl font-extrabold text-blue-600">89€</span>
                </div>
                <p className="text-sm text-emerald-600 font-bold mt-2 flex items-center justify-end gap-1">
                  <CheckCircle2 className="w-4 h-4" /> Livraison gratuite en 48h
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <ul className="space-y-4">
                {[
                  "Tablette Edupad Pro (Format A5)",
                  "Stylet sans pile (8192 niveaux)",
                  "Câble USB-C tressé (2m)",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-4">
                {[
                  "Gant de dessin anti-friction",
                  "10 mines de rechange incluses",
                  "Garantie 2 ans & Support 7/7",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="w-full bg-slate-900 text-white py-5 rounded-2xl text-xl font-bold hover:bg-blue-600 transition-all shadow-xl shadow-slate-900/20 hover:shadow-blue-600/30 flex items-center justify-center gap-3 group">
              Ajouter au panier <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div className="mt-6 flex items-center justify-center gap-6 text-sm text-slate-500">
              <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> Paiement sécurisé</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> Satisfait ou remboursé 30j</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Questions Fréquentes</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Est-ce compatible avec mon Mac / PC ?",
                a: "Oui, l'Edupad est 100% compatible avec Windows (10 et 11), macOS (10.12 et supérieur), ChromeOS et Linux. Il fonctionne en plug & play sur la plupart des systèmes."
              },
              {
                q: "Ai-je besoin d'installer des logiciels compliqués ?",
                a: "Non. Pour les fonctions de base, branchez simplement la tablette. Si vous souhaitez personnaliser les boutons de raccourcis, un petit utilitaire très simple est disponible au téléchargement."
              },
              {
                q: "Est-ce que ça marche avec Zoom et Teams ?",
                a: "Absolument. L'Edupad est reconnu comme un périphérique de pointage standard. Il fonctionne parfaitement avec la fonction 'Tableau Blanc' de Zoom, Teams, Google Meet, et des outils comme Miro ou Microsoft Whiteboard."
              },
              {
                q: "Que se passe-t-il si je n'aime pas la tablette ?",
                a: "Vous bénéficiez d'une garantie satisfait ou remboursé de 30 jours. Si l'Edupad ne révolutionne pas vos cours en ligne, renvoyez-le nous et nous vous rembourserons intégralement, sans poser de questions."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="font-bold text-slate-900">{faq.q}</span>
                  <span className={`transform transition-transform ${activeFaq === i ? 'rotate-180' : ''}`}>
                    <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                {activeFaq === i && (
                  <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <PenTool className="text-white w-4 h-4" />
            </div>
            <span className="text-xl font-bold text-slate-900">Edupad</span>
          </div>
          <div className="flex gap-8 text-sm font-medium text-slate-500">
            <Link href="#" className="hover:text-blue-600 transition-colors">Conditions Générales</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">Confidentialité</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">Contact</Link>
          </div>
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Edupad. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

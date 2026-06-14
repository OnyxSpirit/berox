import React, { useState } from 'react';
import { Eye, Code, Layers, Calendar, ExternalLink, Filter, FolderKanban, CheckCircle, Smartphone, Flame, Gamepad, Award } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  longDescription: string;
  challenge: string;
  solution: string;
  tech: string[];
  year: string;
  client: string;
  isHot?: boolean;
}

const projects: Project[] = [
  {
    id: "proj_3d",
    title: "Le Pavillon Helix",
    category: "Design 3D",
    image: "/3d.jpg",
    description: "Conception architecturale et visite virtuelle 3D immersive en ultra-haute fidélité d'un pavillon écologique futuriste.",
    longDescription: "Un projet pilote architectural visant à combiner esthétique aérienne (en hélice) et autonomie carbone totale. BEROX a conçu le modèle intégral des fondations d'ingénierie jusqu'au design d'intérieur interactif pour convaincre les investisseurs institutionnels.",
    challenge: "Modélisation de formes géométriques complexes non-standards gérant la réfraction solaire pour maximiser la fraîcheur naturelle en été.",
    solution: "Algorithme d'optimisation paramétrique sous Unreal Engine 5 pour estimer la trajectoire du soleil et générer un éclairage global en Ray Tracing de précision.",
    tech: ["Unreal Engine 5", "3ds Max", "Ray Tracing", "Eco-Design"],
    year: "2025",
    client: "Ecolux Estate Group"
  },
  {
    id: "proj_web",
    title: "Kortex Admin Dashboard",
    category: "Développement Web",
    image: "/data.jpg",
    description: "Application administrative d'entreprise hautement performante connectée à des flux de télémétrie IoT en temps réel.",
    longDescription: "Une interface opérationnelle temps réel pour le pilotage d'usines automatisées de recyclage. Le dashboard agrège des milliers de signaux par seconde pour afficher des visualisations claires et proposer des prédictions d'entretien industriels.",
    challenge: "Afficher des flux de données persistants de 200 turbines industrielles simultanément sans perte de fluidité sur le navigateur.",
    solution: "Mise en place d'un store global avec rendu optimisé via réconciliation des micro-états React et canal de communication WebSockets asynchrones.",
    tech: ["React 19", "TypeScript", "Tailwind CSS", "Recharts", "WebSockets"],
    year: "2026",
    client: "Kortex Industry",
    isHot: true
  },
  {
    id: "proj_data",
    title: "Project Neural Flow",
    category: "Analyse de Données",
    image: "/network.jpg",
    description: "Plateforme d'analyse prédictive et modélisation de réseaux de télécommunication à grande échelle.",
    longDescription: "Un outil sur mesure destiné aux ingénieurs réseau pour diagnostiquer la congestion de bande passante avant qu'elle ne perturbe le réseau grand public.",
    challenge: "Extraire, nettoyer et modéliser des péta-octets de logs chaotiques provenant de répéteurs 5G.",
    solution: "Entraînement de modèles de régression prédictive hébergés sur une infrastructure Big Data connectée à un rendu graphique interactif Canvas D3.js.",
    tech: ["D3.js", "Python", "FastAPI", "TensorFlow", "PostgreSQL"],
    year: "2025",
    client: "Solaar Telecom"
  },
  {
    id: "proj_game",
    title: "Hologram Arena VR",
    category: "Jeux Vidéo",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=800",
    description: "Expérience interactive immersive multijoueur en réalité alternative combinant lasers tactiles et capteurs.",
    longDescription: "Hologram Arena est un prototype d'arène ludique VR développé pour des salles d'arcade premium. Il intègre un moteur physique customisé permettant de reproduire les sensations de tir virtuels.",
    challenge: "Minimiser le décalage (motion sickness) lié au tracking de mouvement pour une immersion complète en multijoueur synchrone.",
    solution: "Optimisation de la boucle graphique sous Unity et intégration d'une prédiction de mouvement client via réseau local basé UDP.",
    tech: ["Unity", "C#", "Oculus VR SDK", "Photon Network"],
    year: "2024",
    client: "Apex Entertainment"
  },
  {
    id: "proj_mobile",
    title: "Aura Breath Tech",
    category: "Applications Mobiles",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
    description: "SaaS mobile de gestion de santé mentale, exercices respiratoires intelligents et de relaxation guidée.",
    longDescription: "Une application mobile grand public de bien-être mental utilisant les micros et caméras du téléphone pour estimer de façon biologique le niveau de stress de l'utilisateur.",
    challenge: "Évaluer le rythme cardiaque uniquement via la caméra du smartphone de façon fiable sans capteur externe additionnel.",
    solution: "Utilisation d'un algorithme d'analyse d'image photopléthysmographique (PPG) analysant les micro-variations de couleur sur le bout du doigt de l'utilisateur.",
    tech: ["React Native", "Expo", "FastAPI", "Gemini AI"],
    year: "2025",
    client: "Aura Health Lab",
    isHot: true
  },
  {
    id: "proj_custom",
    title: "ArchSphere CRM",
    category: "Logiciels Sur Mesure",
    image: "https://images.unsplash.com/photo-1618401471353-b98aedd07871?auto=format&fit=crop&q=80&w=800",
    description: "Système ERP/CRM optimisé et taillé de façon exclusive pour les cabinets d'architecte et les concepteurs 3D.",
    longDescription: "Une plateforme logicielle unifiée qui facilite le suivi commercial des projets de construction complexe, connectant directement les dessinateurs 3D, les chefs de projets et les clients finaux.",
    challenge: "Centraliser un écosystème complexe d'outils (devis, factures, répertoires géométriques CAO volumineux) dans une interface intuitive.",
    solution: "Une architecture cloud performante favorisant le stockage à faible coût couplé à une base de données relationnelle sécurisée et hautement indexée.",
    tech: ["Next.js", "TRPC", "Tailwind CSS", "Prisma ORM", "PostgreSQL"],
    year: "2026",
    client: "ArchSphere Collective"
  }
];

const categories = ["Tous", "Design 3D", "Développement Web", "Analyse de Données", "Jeux Vidéo", "Applications Mobiles", "Logiciels Sur Mesure"];

const Realisations: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Tous");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === "Tous" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="realisations" className="py-24 bg-slate-900 relative">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-berox-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-berox-500/30 bg-berox-500/10 mb-4">
            <FolderKanban className="w-4 h-4 text-berox-400 mr-2" />
            <span className="text-xs font-semibold text-berox-400 tracking-wider uppercase">Notre Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-berox-400 to-purple-500">Réalisations Récentes</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-400 text-lg">
            Découvrez comment nous traduisons vos visions stratégiques en produits technologiques solides, performants et visuellement magnifiques.
          </p>
        </div>

        {/* Category Filter Controls */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 pointer-events-auto border ${
                activeCategory === cat 
                  ? 'bg-berox-500 border-berox-400 text-white shadow-lg shadow-berox-500/20' 
                  : 'bg-white/5 border-white/5 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
              id={`filter-btn-${cat.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="group rounded-2xl bg-white/5 border border-white/5 overflow-hidden hover:bg-white/10 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
              id={`project-card-${project.id}`}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-800">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual badges over thumbnail */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/80 backdrop-blur-md text-berox-400 border border-white/10">
                    {project.category}
                  </span>
                  {project.isHot && (
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-500/80 backdrop-blur-md text-white border border-red-400/20 flex items-center gap-1">
                      <Flame className="w-3 h-3 text-yellow-300 animate-pulse" />
                      Haut Débit
                    </span>
                  )}
                </div>

                <div className="absolute top-4 right-4">
                  <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-slate-950/80 backdrop-blur-md text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 w-3 text-berox-400" />
                    {project.year}
                  </span>
                </div>

                {/* Cover Overlay on Hover */}
                <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="p-3 bg-berox-500 hover:bg-berox-400 text-white rounded-full transition-transform transform scale-90 group-hover:scale-100 shadow-xl"
                  >
                    <Eye className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Text Information */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-berox-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400 mb-6 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/5 text-slate-400">
                        {t}
                      </span>
                    ))}
                  </div>

                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-berox-500/20 border border-white/5 hover:border-berox-500/30 font-semibold text-sm text-white transition-all flex items-center justify-center gap-2"
                  >
                    <span>Explorer le projet</span>
                    <ExternalLink className="w-4 h-4 text-berox-400" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-white/5 border border-white/5 rounded-2xl">
            <Layers className="w-12 h-12 text-slate-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-1">Aucune réalisation trouvée</h3>
            <p className="text-sm text-slate-400">Revenez bientôt pour découvrir de nouveaux projets dans cette catégorie.</p>
          </div>
        )}

      </div>

      {/* Advanced Lightbox Modal for Projects */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in pointer-events-auto">
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-white/10 rounded-2xl overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            id={`project-modal-${selectedProject.id}`}
          >
            {/* Modal Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 text-slate-400 hover:text-white bg-slate-950/60 hover:bg-slate-950 rounded-full border border-white/10 transition-colors"
            >
              ✕
            </button>

            {/* Img Header */}
            <div className="relative aspect-[16/7] w-full overflow-hidden bg-slate-800">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-3 py-1 bg-berox-500 text-white rounded-full text-xs font-semibold border border-berox-400/30 mb-2 inline-block">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight drop-shadow-md">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Main description section */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Présentation générale</h4>
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                      <h5 className="text-xs font-bold text-red-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                        Le Défi Technique
                      </h5>
                      <p className="text-slate-400 text-xs md:text-sm">
                        {selectedProject.challenge}
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                      <h5 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5" />
                        La Solution BEROX
                      </h5>
                      <p className="text-slate-400 text-xs md:text-sm">
                        {selectedProject.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sidebar Project metadata cards */}
                <div className="space-y-4">
                  <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-4">
                    <div>
                      <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-500">Client Contractuel</span>
                      <span className="text-sm font-semibold text-white">{selectedProject.client}</span>
                    </div>

                    <div>
                      <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-500">Année de Livraison</span>
                      <span className="text-sm font-semibold text-white flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-berox-400" />
                        {selectedProject.year}
                      </span>
                    </div>

                    <div>
                      <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-500">Technologies Mobilisées</span>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {selectedProject.tech.map((t, i) => (
                          <span key={i} className="px-2 py-0.5 rounded text-[10px] font-mono bg-berox-500/10 text-berox-300 border border-berox-500/20">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <a 
                    href="#contact" 
                    onClick={() => {
                      setSelectedProject(null);
                      // Smooth scroll to contact
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-3 bg-berox-500 hover:bg-berox-600 rounded-xl text-center font-bold text-sm text-white transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    <Award className="w-4 h-4" />
                    <span>S'en inspirer pour votre projet</span>
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default Realisations;

import React, { useState } from 'react';
import { Cpu, Cloud, Database, Network, Building, Handshake, ArrowUpRight, ExternalLink } from 'lucide-react';

interface Partner {
  name: string;
  logoColor: string;
  bgHover: string;
  glow: string;
  icon: React.ComponentType<{ className?: string }>;
  category: string;
  description: string;
  impact: string;
  website: string;
}

const partners: Partner[] = [
  {
    name: "Germe Capital",
    logoColor: "text-orange-400 group-hover:text-orange-300",
    bgHover: "hover:border-orange-500/20 hover:bg-orange-950/10",
    glow: "shadow-orange-500/10",
    icon: "/germe.png",
    category: "Former, structurer et accompagner des initiatives à impact durable",
    description: "Germe Capital est une graine semée dans l'esprit de celles et ceux qui choisissent de construire. Nous formons pour agir, nous accompagnons pour entreprendre et nous bâtissons ensemble des projets utiles, innovants et solidaires.",
    impact: "Créer des entreprises coopératives créatrices de valeur et d'emplois.",
    website: "#"
  },
  {
    name: "Inkluzif",
    logoColor: "text-sky-400 group-hover:text-sky-300",
    bgHover: "hover:border-sky-500/20 hover:bg-sky-950/10",
    glow: "shadow-sky-500/10",
    icon: "/inkluzif.png",
    category: "Microfinance",
    description: "Faciliter l'accès aux services financiers pour tous en proposant des solutions simples, adaptées aux réalités locales et orientées vers l'autonomie économique.",
    impact: "Protéger l'épargne, accompagner chaque membre et bâtir une confiance durable au service du développement collectif.",
    website: "#"
  },
  {
    name: "Tourkasy",
    logoColor: "text-emerald-400 group-hover:text-emerald-300",
    bgHover: "hover:border-emerald-500/20 hover:bg-emerald-950/10",
    glow: "shadow-emerald-500/10",
    icon: "/touraksy.jpg",
    category: "Agence de voyage & tourisme",
    description: "Ici, chaque voyage est préparé avec serieux. Chaque client est accompagné avec respect. Chaque agent agit avec rigueur et responsabilité. Parce qu'un voyage réussi commence toujours par la confiance.",
    impact: "Faciliter et sécuriser les projets de voyage en offrant des solutions adaptées, claire et maîtrisées, du départ à l'arrivée.",
    website: "#"
  },
  {
    name: "Kaecnetwork",
    logoColor: "text-purple-400 group-hover:text-purple-300",
    bgHover: "hover:border-purple-500/20 hover:bg-purple-950/10",
    glow: "shadow-purple-500/10",
    icon: "/kaec.png",
    category: "SaaS;CRM & Formation",
    description: "Déploiement et sécurisation de nos applications web. Accompagnement des jeunes entreprises.",
    impact: "Taux de disponibilité de 99.99% garanti sur l'ensemble de nos architectures web.",
    website: "#"
  },
  
];

const Partners: React.FC = () => {
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);

  return (
    <section id="partenaires" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-slate-900/50 to-transparent pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-berox-500/30 bg-berox-500/10 mb-4">
            <Handshake className="w-4 h-4 text-berox-400 mr-2" />
            <span className="text-xs font-semibold text-berox-400 tracking-wider uppercase">Écosystème BEROX</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-berox-400">Partenaires Stratégiques</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-400 text-lg">
            Nous collaborons étroitement avec de grandes entreprises technologiques et industrielles pour repousser les limites de l'innovation logicielle et du design 3D.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <button
                key={index}
                onClick={() => setSelectedPartner(selectedPartner?.name === partner.name ? null : partner)}
                className={`group text-left relative p-6 rounded-2xl bg-white/5 border border-white/5 transition-all duration-300 hover:-translate-y-1 ${partner.bgHover} shadow-lg hover:${partner.glow} flex flex-col justify-between ${selectedPartner?.name === partner.name ? 'ring-2 ring-berox-400 bg-white/10 border-white/20' : ''}`}
                id={`partner-btn-${index}`}
              >
                <div>
                  <div className={`w-30 h-30 rounded-xl bg-white flex items-center justify-center mb-5 border border-white/10 ${partner.logoColor} transition-colors duration-300`}>
                    <img src={Icon} className="w-30"/>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-berox-300 transition-colors uppercase tracking-wider">{partner.name}</h3>
                  <p className="text-xs font-medium text-slate-400 mb-3">{partner.category}</p>
                </div>
                <div className="flex items-center text-xs text-berox-400 font-semibold mt-4">
                  <span>Voir le partenariat</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Card Box when a partner is selected */}
        {selectedPartner && (
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md animate-fade-in relative transition-all duration-500">
            <div className="absolute top-4 right-4">
              <button 
                onClick={() => setSelectedPartner(null)}
                className="text-slate-400 hover:text-white text-sm bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-all"
              >
                Fermer
              </button>
            </div>
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-shrink-0 flex items-center justify-center w-30 h-30 rounded-2xl bg-white border-white/10 text-berox-400">
                <img src={selectedPartner.icon}/>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-white">{selectedPartner.name}</h3>
                  <span className="px-3 py-0.5 rounded-full text-xs font-medium bg-berox-500/20 text-berox-300 border border-berox-500/30">
                    {selectedPartner.category}
                  </span>
                </div>
                <p className="text-slate-300 mb-6 text-base leading-relaxed">
                  {selectedPartner.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-white/10 pt-4">
                  <div>
                    <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Impact & Résultat</span>
                    <p className="text-sm text-emerald-400 font-medium">{selectedPartner.impact}</p>
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Type d'engagement</span>
                    <p className="text-sm text-slate-400">Contrat cadre de partenariat technologique & d'accompagnement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Partners;

import React from 'react';
import { Quote, Linkedin, Twitter, Award } from 'lucide-react';

const CEOSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Éléments décoratifs d'arrière-plan */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-berox-600/10 rounded-full blur-3xl mix-blend-screen"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl mix-blend-screen"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Colonne Image / Visuel */}
          <div className="w-full lg:w-5/12 relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-berox-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/5] bg-slate-800">
               {/* Image placeholder professionnelle */}
              <img 
                src="/pdg.png" 
                alt="Roberto Da Silva, CEO" 
                className="w-full h-full object-cover transition-all duration-700"
              />
              {/*
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent">
                <div className="flex items-center space-x-4">
                  <a href="#" className="p-2 bg-white/10 hover:bg-berox-500 rounded-full backdrop-blur-md transition-colors text-white">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-2 bg-white/10 hover:bg-berox-500 rounded-full backdrop-blur-md transition-colors text-white">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>*/}
            </div>
          </div>

          {/* Colonne Texte */}
          <div className="w-full lg:w-7/12">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-berox-500/30 bg-berox-500/10 mb-6">
              <span className="text-xs font-semibold text-berox-400 tracking-wider uppercase">Le Visionnaire & CEO</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Roberto <span className="text-transparent bg-clip-text bg-gradient-to-r from-berox-400 to-purple-500">Da Silva</span>
            </h2>
            
            <div className="relative mb-8">
              <Quote className="absolute -top-4 -left-6 w-12 h-12 text-berox-500/20 transform -scale-x-100" />
              <p className="text-xl text-slate-300 font-light italic relative z-10 pl-6 border-l-2 border-berox-500">
                "La technologie n'a de sens que lorsqu'elle sublime la créativité humaine. Chez BEROX, nous ne codons pas seulement des logiciels, nous architecturons le futur numérique de nos partenaires."
              </p>
            </div>

            <div className="space-y-6 text-slate-400 mb-10">
              <p>
                Fondateur et CEO de BEROX, Roberto possède plus de 18 ans d'expérience à la croisée du design architectural et de l'ingénierie logicielle. Ancien developpeur, il a fondé BEROX avec une conviction unique : la rigueur de la structure doit rencontrer la fluidité du code.
              </p>
              <p>
                Sous sa direction, BEROX est passée d'une startup de garage à une référence en innovation technologique, aidant des dizaines d'entreprises à valoriser leurs données et leur image.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center space-x-4">
                <div className="p-2 bg-berox-500/20 rounded-lg">
                  <Award className="w-6 h-6 text-berox-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">18+</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">Années d'expérience</div>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center space-x-4">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <Award className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">Top 30</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">Tech Innovators 2024</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CEOSection;
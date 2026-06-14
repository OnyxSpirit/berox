import React from 'react';
import { ArrowRight, Box, Cpu, Database } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradients */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-berox-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-berox-500/30 bg-berox-500/10 mb-8 backdrop-blur-sm">
          <span className="flex h-2 w-2 rounded-full bg-berox-400 mr-2 animate-pulse"></span>
          <span className="text-sm text-berox-200 font-medium">Innovation Digitale & Créative</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
          Façonner le futur avec <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-berox-400 to-purple-500">BEROX</span>
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 mb-10">
          Nous transformons vos visions en réalité numérique. Experts en design 3D, développement web sur mesure et analyse de données avancée.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#contact" className="px-8 py-4 rounded-lg bg-berox-600 hover:bg-berox-500 text-white font-semibold transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] flex items-center justify-center gap-2 group">
            Commencer un projet
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#services" className="px-8 py-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold backdrop-blur-sm transition-all flex items-center justify-center">
            Explorer nos services
          </a>
        </div>

        {/* Floating Icons Visualization */}
        <div className="mt-20 flex justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex flex-col items-center gap-2">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <Box className="w-8 h-8 text-berox-400" />
            </div>
            <span className="text-xs uppercase tracking-widest text-slate-500">3D Design</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <Cpu className="w-8 h-8 text-purple-400" />
            </div>
            <span className="text-xs uppercase tracking-widest text-slate-500">Web App</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <Database className="w-8 h-8 text-green-400" />
            </div>
            <span className="text-xs uppercase tracking-widest text-slate-500">Big Data</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
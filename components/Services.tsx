import React from 'react';
import { Box, Code2, BarChart3, Smartphone, Layout, LineChart, Gamepad2 } from 'lucide-react';

const services = [
  {
    title: "Design 3D & Architecture",
    description: "Conception architecturale de pointe et modélisation 3D pour visualiser vos projets avant même la première brique.",
    icon: Box,
    color: "text-orange-400",
    features: ["Rendu photoréaliste", "Modélisation CAD", "Visite virtuelle", "Design d'intérieur"]
  },
  {
    title: "Développement Web",
    description: "Création d'applications web modernes, rapides et scalables utilisant les dernières technologies du marché.",
    icon: Code2,
    color: "text-berox-400",
    features: ["React & Next.js", "Solutions SaaS", "E-commerce", "API RESTful"]
  },
  {
    title: "Analyse de Données",
    description: "Transformez vos données brutes en insights stratégiques pour prendre des décisions éclairées.",
    icon: BarChart3,
    color: "text-green-400",
    features: ["Business Intelligence", "Machine Learning", "Reporting automatisé", "Big Data"]
  },
  {
    title: "Création de Jeux Vidéo",
    description: "Développement d'expériences ludiques et immersives sur les moteurs graphiques les plus puissants du marché.",
    icon: Gamepad2,
    color: "text-red-400",
    features: ["Unity & Unreal Engine", "Réalité Virtuelle (VR/AR)", "Game Design", "Serious Games"]
  },
  {
    title: "Applications Mobiles",
    description: "Développement natif et hybride pour iOS et Android, offrant une expérience utilisateur fluide.",
    icon: Smartphone,
    color: "text-purple-400",
    features: ["React Native", "Flutter", "UX/UI Mobile", "PWA"]
  },
  {
    title: "Logiciels Sur Mesure",
    description: "Solutions logicielles adaptées spécifiquement à vos processus métier pour maximiser la productivité.",
    icon: Layout,
    color: "text-pink-400",
    features: ["ERP & CRM", "Automatisation", "Intégration cloud", "Maintenance"]
  },
  {
    title: "Stratégie Digitale",
    description: "Accompagnement complet pour votre transformation numérique et votre positionnement sur le marché.",
    icon: LineChart,
    color: "text-yellow-400",
    features: ["Audit technique", "SEO/SEA", "Architecture SI", "Consulting"]
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-berox-400 font-semibold tracking-wide uppercase text-sm mb-2">Nos Expertises</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">Solutions Technologiques Complètes</h3>
          <p className="mt-4 max-w-2xl mx-auto text-slate-400">
            Nous combinons créativité artistique et rigueur technique pour livrer des produits d'exception.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
              
              <div className={`w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-6 border border-white/5 ${service.color}`}>
                <service.icon className="w-6 h-6" />
              </div>
              
              <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-xs text-slate-500 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-berox-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 4000, organic: 2400 },
  { name: 'Fév', value: 3000, organic: 1398 },
  { name: 'Mar', value: 2000, organic: 9800 },
  { name: 'Avr', value: 2780, organic: 3908 },
  { name: 'Mai', value: 1890, organic: 4800 },
  { name: 'Juin', value: 2390, organic: 3800 },
  { name: 'Juil', value: 3490, organic: 4300 },
];

const DataDemo: React.FC = () => {
  return (
    <section id="data-lab" className="py-24 bg-slate-950 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-berox-900/10 -skew-x-12 transform origin-top-right"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-berox-400 font-semibold tracking-wide uppercase text-sm mb-2">Data Lab</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Donnez du sens à vos données
            </h3>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Chez BEROX, l'analyse de données n'est pas juste une option, c'est le cœur de la stratégie moderne.
              Nous créons des tableaux de bord interactifs et des modèles prédictifs pour visualiser votre croissance.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full border border-berox-500 flex items-center justify-center text-berox-500 mt-1">1</div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">Collecte & Nettoyage</h4>
                  <p className="mt-1 text-slate-500 text-sm">Structuration de vos sources de données hétérogènes.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full border border-berox-500 flex items-center justify-center text-berox-500 mt-1">2</div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">Analyse Prédictive</h4>
                  <p className="mt-1 text-slate-500 text-sm">Anticipation des tendances grâce à l'IA.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full border border-berox-500 flex items-center justify-center text-berox-500 mt-1">3</div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">Visualisation Interactive</h4>
                  <p className="mt-1 text-slate-500 text-sm">Tableaux de bord dynamiques en temps réel.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl border border-white/10 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h4 className="text-white font-semibold">Performance Analytics</h4>
                    <p className="text-xs text-slate-500">Vue en temps réel</p>
                </div>
                <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500"></span>
                    <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
                    <span className="h-3 w-3 rounded-full bg-green-500"></span>
                </div>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={data}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorOrganic" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" stroke="#475569" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#475569" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value/1000}k`} />
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px' }}
                    itemStyle={{ color: '#e2e8f0' }}
                  />
                  <Area type="monotone" dataKey="value" stroke="#0ea5e9" fillOpacity={1} fill="url(#colorValue)" strokeWidth={2} />
                  <Area type="monotone" dataKey="organic" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorOrganic)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataDemo;
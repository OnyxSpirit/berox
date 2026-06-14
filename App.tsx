import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Realisations from './components/Realisations';
import CEOSection from './components/CEOSection';
import DataDemo from './components/DataDemo';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AiAssistant from './components/AiAssistant';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Realisations />
        <CEOSection />
        <DataDemo />
        <Partners />
        <Contact />
      </main>
      <Footer />
      <AiAssistant />
    </div>
  );
};

export default App;
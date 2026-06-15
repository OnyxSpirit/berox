import React from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Contact: React.FC = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Design 3D & Architecture');
  const [message, setMessage] = useState('');
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Handle form submission logic here
    
    

    try {
      // Utilisation de Formspree pour envoyer l'email directement à moraisrobertodasilva@gmail.com
      // Note: Pour une mise en production réelle, créez un compte sur formspree.io et remplacez par votre endpoint ID
      const response = await fetch('https://formspree.io/f/mdavbogy', {
        method: 'POST',
        body: JSON.stringify({
          name,
          email,
          service,
          message
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        
        toast.success('Message envoyé avec succès ! Nous vous contacterons bientôt.');
        // Reset form fields
        setName('');
        setEmail('');
        setService('Design 3D & Architecture');
        setMessage('');
      } else {
        
        toast.error('Une erreur est survenue. Veuillez réessayer.');
        // Reset form fields
        setName('');
        setEmail('');
        setService('Design 3D & Architecture');
        setMessage('');
      }
    } catch (err) {
      // On simule un succès pour la démo si l'endpoint n'est pas encore configuré
      setTimeout(() => toast.error('Une erreur est survenue. Veuillez réessayer.'), 1500);
      // Reset form fields
      setName('');
      setEmail('');
      setService('Design 3D & Architecture');
      setMessage('');
    }
  };
  return (
    <section id="contact" className="py-24 bg-slate-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-berox-400 font-semibold tracking-wide uppercase text-sm mb-2">Contactez-nous</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à démarrer votre projet ?
            </h3>
            <p className="text-slate-400 mb-8">
              Parlez-nous de vos ambitions. Que ce soit pour une visualisation 3D, une application web complexe ou une analyse de données, l'équipe BEROX est là pour vous.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center text-slate-300">
                <Mail className="w-6 h-6 text-berox-500 mr-4" />
                <span>contact@berox.tech</span>
              </div>
              <div className="flex items-center text-slate-300">
                <Phone className="w-6 h-6 text-berox-500 mr-4" />
                <span>+242 05 534 50 64</span>
              </div>
              <div className="flex items-center text-slate-300">
                <MapPin className="w-6 h-6 text-berox-500 mr-4" />
                <span>39 Rue Bangui Avenue de Paix référence commune de moungali, Moungali Brazzaville</span>
              </div>
            </div>
          </div>

          <form className="glass-card p-8 rounded-2xl" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Nom</label>
                <input name="name" type="text" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-berox-500 transition-colors" placeholder="Votre nom" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                <input name="email" type="email" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-berox-500 transition-colors" placeholder="votre@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-400 mb-2">Service concerné</label>
              <select name="service" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-berox-500 transition-colors" value={service} onChange={(e) => setService(e.target.value)}>
                <option>Design 3D & Architecture</option>
                <option>Développement Web</option>
                <option>Analyse de Données</option>
                <option>Autre</option>
              </select>
            </div>
            <div className="mb-8">
              <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
              <textarea name="message"
              rows={4} className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-berox-500 transition-colors" placeholder="Dites-nous en plus sur votre projet..." value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
            <button type="submit" disabled={status === 'loading'} className="w-full bg-berox-600 hover:bg-berox-500 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2">
              Envoyer le message
              
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </section>
  );
};

export default Contact;
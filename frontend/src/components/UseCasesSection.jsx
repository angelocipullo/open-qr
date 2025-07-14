import { ShoppingBag, Users, Smartphone } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const UseCasesSection = () => {
  const [activeTab, setActiveTab] = useState('business');
  return (
    <section className="section use-cases-section" id="use-cases">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Casi <span className="gradient-text">d'Uso</span></h2>
          <p className="section-subtitle">
            I QR code sono versatili e possono essere utilizzati in innumerevoli scenari.
            Ecco alcune delle applicazioni più popolari.
          </p>
        </motion.div>
        <div className="tabs">
          <div className="tabs-header">
            <button className={`tab-btn ${activeTab === 'business' ? 'active' : ''}`} onClick={() => setActiveTab('business')}>
              <ShoppingBag size={18} />
              <span>Business</span>
            </button>
            <button className={`tab-btn ${activeTab === 'marketing' ? 'active' : ''}`} onClick={() => setActiveTab('marketing')}>
              <Users size={18} />
              <span>Marketing</span>
            </button>
            <button className={`tab-btn ${activeTab === 'personal' ? 'active' : ''}`} onClick={() => setActiveTab('personal')}>
              <Smartphone size={18} />
              <span>Personale</span>
            </button>
          </div>
          <div className="tabs-content">
            {activeTab === 'business' && (
              <motion.div className="tab-panel" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
                <div className="use-case-grid">
                  <div className="use-case-item"><h4>Menu Digitali per Ristoranti</h4><p>Offri ai tuoi clienti un modo moderno e igienico per consultare il tuo menu tramite QR code sul tavolo.</p></div>
                  <div className="use-case-item"><h4>Schede Prodotto</h4><p>Collega le specifiche dettagliate dei tuoi prodotti tramite QR code sulle confezioni o cartellini.</p></div>
                  <div className="use-case-item"><h4>Biglietti da Visita</h4><p>Aggiungi un QR code al tuo biglietto da visita per condividere facilmente il tuo profilo digitale.</p></div>
                  <div className="use-case-item"><h4>Istruzioni e Manuali</h4><p>Sostituisci i voluminosi manuali cartacei con link a guide digitali tramite QR code.</p></div>
                </div>
              </motion.div>
            )}
            {activeTab === 'marketing' && (
              <motion.div className="tab-panel" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
                <div className="use-case-grid">
                  <div className="use-case-item"><h4>Campagne Pubblicitarie</h4><p>Traccia l'efficacia delle tue campagne con QR code specifici per ogni canale di marketing.</p></div>
                  <div className="use-case-item"><h4>Volantini e Poster</h4><p>Arricchisci i materiali promozionali con contenuti digitali accessibili tramite QR code.</p></div>
                  <div className="use-case-item"><h4>Eventi e Fiere</h4><p>Facilita l'iscrizione e il check-in agli eventi con QR code personalizzati.</p></div>
                  <div className="use-case-item"><h4>Social Media</h4><p>Aumenta i follower sui tuoi canali social con QR code che portano direttamente ai tuoi profili.</p></div>
                </div>
              </motion.div>
            )}
            {activeTab === 'personal' && (
              <motion.div className="tab-panel" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
                <div className="use-case-grid">
                  <div className="use-case-item"><h4>Condivisione Contatti</h4><p>Crea un QR code che contenga tutti i tuoi contatti per condividerli facilmente con nuovi amici.</p></div>
                  <div className="use-case-item"><h4>Album Fotografici</h4><p>Collega i tuoi album digitali a fotografie stampate tramite QR code.</p></div>
                  <div className="use-case-item"><h4>Wi-Fi Access</h4><p>Condividi l'accesso alla tua rete Wi-Fi con gli ospiti senza dover digitare password complesse.</p></div>
                  <div className="use-case-item"><h4>Regali Personalizzati</h4><p>Aggiungi un messaggio video o una sorpresa digitale ai tuoi regali tramite QR code.</p></div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;

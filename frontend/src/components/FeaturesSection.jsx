import { Shield, Zap, Image, Globe, Clock, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const FeaturesSection = () => (
  <section className="section features-section" id="features">
    <div className="container">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Perché Scegliere <span className="gradient-text">SimpleQR</span></h2>
        <p className="section-subtitle">
          Il generatore di QR code più semplice e potente disponibile sul web.
          Scopri i vantaggi che offriamo rispetto ad altre soluzioni.
        </p>
      </motion.div>
      <div className="feature-grid">
        <motion.div className="feature-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
          <div className="feature-icon"><Zap size={28} /></div>
          <h3>Generazione Istantanea</h3>
          <p>Crea QR code in tempo reale senza attese. La nostra tecnologia ottimizzata garantisce la massima velocità.</p>
        </motion.div>
        <motion.div className="feature-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
          <div className="feature-icon"><Shield size={28} /></div>
          <h3>Privacy Garantita</h3>
          <p>Non salviamo i tuoi URL o dati personali. Tutto viene elaborato localmente nel tuo browser per la massima sicurezza.</p>
        </motion.div>
        <motion.div className="feature-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
          <div className="feature-icon"><Image size={28} /></div>
          <h3>Formati Multipli</h3>
          <p>Scarica i tuoi QR code in formato SVG vettoriale per la massima qualità o in PNG per una compatibilità universale.</p>
        </motion.div>
        <motion.div className="feature-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
          <div className="feature-icon"><Globe size={28} /></div>
          <h3>Supporto Universale</h3>
          <p>I nostri QR code sono compatibili con tutti i dispositivi e app di scansione moderni, garantendo la massima leggibilità.</p>
        </motion.div>
        <motion.div className="feature-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} viewport={{ once: true }}>
          <div className="feature-icon"><Clock size={28} /></div>
          <h3>Senza Limiti</h3>
          <p>Nessun limite al numero di QR code che puoi generare. Usa il servizio quanto vuoi, quando vuoi.</p>
        </motion.div>
        <motion.div className="feature-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} viewport={{ once: true }}>
          <div className="feature-icon"><Award size={28} /></div>
          <h3>Qualità Superiore</h3>
          <p>I nostri algoritmi ottimizzano i QR code per la massima scansionabilità anche in condizioni di luce non ideali.</p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default FeaturesSection;

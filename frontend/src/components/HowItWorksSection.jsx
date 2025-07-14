import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';


const HowItWorksSection = () => (
  <section className="section how-it-works-section" id="how-it-works">
    <div className="container">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Come <span className="gradient-text">Funziona</span></h2>
        <p className="section-subtitle">
          Generare un QR code non è mai stato così semplice.
          Bastano pochi secondi per creare il tuo codice professionale.
        </p>
      </motion.div>
      <div className="steps-container">
        <motion.div className="step-card" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <div className="step-number">1</div>
          <h3>Inserisci il tuo URL</h3>
          <p>Incolla l'indirizzo web che desideri trasformare in QR code nel campo di input.</p>
        </motion.div>
        <motion.div className="step-connector" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
          <ArrowRight size={20} />
        </motion.div>
        <motion.div className="step-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
          <div className="step-number">2</div>
          <h3>Genera il QR Code</h3>
          <p>Premi il pulsante "Genera QR Code" e il tuo codice verrà creato istantaneamente.</p>
        </motion.div>
        <motion.div className="step-connector" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.6 }} viewport={{ once: true }}>
          <ArrowRight size={20} />
        </motion.div>
        <motion.div className="step-card" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.6 }} viewport={{ once: true }}>
          <div className="step-number">3</div>
          <h3>Scarica e Utilizza</h3>
          <p>Scarica il tuo QR code nel formato che preferisci (SVG o PNG) e usalo dove vuoi!</p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;

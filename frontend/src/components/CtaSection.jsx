import { motion } from 'framer-motion';

const CtaSection = () => (
  <section className="section cta-section">
    <div className="container">
      <motion.div
        className="cta-card"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="cta-title">Pronto a Creare il Tuo QR Code?</h2>
        <p className="cta-text">Inizia subito a generare QR code professionali gratuitamente e senza registrazione.</p>
        <a href="#top" className="cta-button">Genera QR Code Ora</a>
      </motion.div>
    </div>
  </section>
);

export default CtaSection;

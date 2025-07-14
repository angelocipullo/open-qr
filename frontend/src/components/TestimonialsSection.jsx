import { Star } from 'lucide-react';
import { motion } from 'framer-motion';


const TestimonialsSection = () => (
  <section className="section testimonials-section">
    <div className="container">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Cosa Dicono <span className="gradient-text">di Noi</span></h2>
        <p className="section-subtitle">
          Migliaia di utenti utilizzano SimpleQR ogni giorno per creare QR code professionali.
          Ecco alcune delle loro opinioni.
        </p>
      </motion.div>
      <div className="testimonials-grid">
        <motion.div className="testimonial-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
          <div className="testimonial-rating">
            <Star size={18} fill="#FFC107" />
            <Star size={18} fill="#FFC107" />
            <Star size={18} fill="#FFC107" />
            <Star size={18} fill="#FFC107" />
            <Star size={18} fill="#FFC107" />
          </div>
          <p className="testimonial-text">
            "Ho provato diversi generatori di QR code, ma SimpleQR è di gran lunga il migliore. Veloce, facile e con download in SVG e PNG."
          </p>
          <div className="testimonial-author">
            <span className="author-name">Marco B.</span>
            <span className="author-title">Proprietario Ristorante</span>
          </div>
        </motion.div>
        <motion.div className="testimonial-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
          <div className="testimonial-rating">
            <Star size={18} fill="#FFC107" />
            <Star size={18} fill="#FFC107" />
            <Star size={18} fill="#FFC107" />
            <Star size={18} fill="#FFC107" />
            <Star size={18} fill="#FFC107" />
          </div>
          <p className="testimonial-text">
            "Per le nostre campagne di marketing utilizziamo SimpleQR quotidianamente. È diventato uno strumento essenziale per il nostro team."
          </p>
          <div className="testimonial-author">
            <span className="author-name">Giulia T.</span>
            <span className="author-title">Digital Marketing Manager</span>
          </div>
        </motion.div>
        <motion.div className="testimonial-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
          <div className="testimonial-rating">
            <Star size={18} fill="#FFC107" />
            <Star size={18} fill="#FFC107" />
            <Star size={18} fill="#FFC107" />
            <Star size={18} fill="#FFC107" />
            <Star size={18} fill="#FFC107" />
          </div>
          <p className="testimonial-text">
            "Apprezzo molto la semplicità di SimpleQR. Niente registrazioni, niente complicazioni, solo QR code perfetti quando servono."
          </p>
          <div className="testimonial-author">
            <span className="author-name">Alessandro M.</span>
            <span className="author-title">Web Designer</span>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;

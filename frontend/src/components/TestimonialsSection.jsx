import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const TestimonialsSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="section testimonials-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">{t('testimonials.title')} <span className="gradient-text">{t('testimonials.titleHighlight')}</span></h2>
          <p className="section-subtitle">
            {t('testimonials.subtitle')}
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
              {t('testimonials.items.testimonial1.text')}
            </p>
            <div className="testimonial-author">
              <span className="author-name">{t('testimonials.items.testimonial1.authorName')}</span>
              <span className="author-title">{t('testimonials.items.testimonial1.authorTitle')}</span>
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
              {t('testimonials.items.testimonial2.text')}
            </p>
            <div className="testimonial-author">
              <span className="author-name">{t('testimonials.items.testimonial2.authorName')}</span>
              <span className="author-title">{t('testimonials.items.testimonial2.authorTitle')}</span>
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
              {t('testimonials.items.testimonial3.text')}
            </p>
            <div className="testimonial-author">
              <span className="author-name">{t('testimonials.items.testimonial3.authorName')}</span>
              <span className="author-title">{t('testimonials.items.testimonial3.authorTitle')}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

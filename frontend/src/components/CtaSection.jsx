import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const CtaSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="section cta-section">
      <div className="container">
        <motion.div
          className="cta-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="cta-title">{t('cta.title')}</h2>
          <p className="cta-text">{t('cta.text')}</p>
          <a href="#top" className="cta-button">{t('cta.button')}</a>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;

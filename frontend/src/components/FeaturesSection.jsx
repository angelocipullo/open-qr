import { Shield, Zap, Image, Globe, Clock, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const FeaturesSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="section features-section" id="features">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">{t('features.title')} <span className="gradient-text">{t('features.titleHighlight')}</span></h2>
          <p className="section-subtitle">
            {t('features.subtitle')}
          </p>
        </motion.div>
        <div className="feature-grid">
          <motion.div className="feature-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
            <div className="feature-icon"><Zap size={28} /></div>
            <h3>{t('features.items.instant.title')}</h3>
            <p>{t('features.items.instant.description')}</p>
          </motion.div>
          <motion.div className="feature-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
            <div className="feature-icon"><Shield size={28} /></div>
            <h3>{t('features.items.privacy.title')}</h3>
            <p>{t('features.items.privacy.description')}</p>
          </motion.div>
          <motion.div className="feature-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
            <div className="feature-icon"><Image size={28} /></div>
            <h3>{t('features.items.formats.title')}</h3>
            <p>{t('features.items.formats.description')}</p>
          </motion.div>
          <motion.div className="feature-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
            <div className="feature-icon"><Globe size={28} /></div>
            <h3>{t('features.items.universal.title')}</h3>
            <p>{t('features.items.universal.description')}</p>
          </motion.div>
          <motion.div className="feature-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} viewport={{ once: true }}>
            <div className="feature-icon"><Clock size={28} /></div>
            <h3>{t('features.items.unlimited.title')}</h3>
            <p>{t('features.items.unlimited.description')}</p>
          </motion.div>
          <motion.div className="feature-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} viewport={{ once: true }}>
            <div className="feature-icon"><Award size={28} /></div>
            <h3>{t('features.items.quality.title')}</h3>
            <p>{t('features.items.quality.description')}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const HowItWorksSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="section how-it-works-section" id="how-it-works">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">{t('howItWorks.title')} <span className="gradient-text">{t('howItWorks.titleHighlight')}</span></h2>
          <p className="section-subtitle">
            {t('howItWorks.subtitle')}
          </p>
        </motion.div>
        <div className="steps-container">
          <motion.div className="step-card" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <div className="step-number">1</div>
            <h3>{t('howItWorks.steps.step1.title')}</h3>
            <p>{t('howItWorks.steps.step1.description')}</p>
          </motion.div>
          <motion.div className="step-connector" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
            <ArrowRight size={20} />
          </motion.div>
          <motion.div className="step-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
            <div className="step-number">2</div>
            <h3>{t('howItWorks.steps.step2.title')}</h3>
            <p>{t('howItWorks.steps.step2.description')}</p>
          </motion.div>
          <motion.div className="step-connector" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.6 }} viewport={{ once: true }}>
            <ArrowRight size={20} />
          </motion.div>
          <motion.div className="step-card" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.6 }} viewport={{ once: true }}>
            <div className="step-number">3</div>
            <h3>{t('howItWorks.steps.step3.title')}</h3>
            <p>{t('howItWorks.steps.step3.description')}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

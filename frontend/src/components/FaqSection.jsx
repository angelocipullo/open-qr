import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const FaqSection = () => {
  const { t } = useTranslation();
  const [activeFaq, setActiveFaq] = useState(null);
  
  const faqKeys = ['cost', 'expiry', 'formats', 'privacy', 'customization'];
  
  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };
  
  return (
    <section className="section faq-section" id="faq">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">{t('faq.title')} <span className="gradient-text">{t('faq.titleHighlight')}</span></h2>
          <p className="section-subtitle">
            {t('faq.subtitle')}
          </p>
        </motion.div>
        <div className="faq-container">
          {faqKeys.map((faqKey, idx) => (
            <motion.div
              key={idx}
              className={`faq-item ${activeFaq === idx ? 'active' : ''}`}
              onClick={() => toggleFaq(idx)}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * idx }}
              viewport={{ once: true }}
            >
              <div className="faq-question">
                <h3>{t(`faq.items.${faqKey}.question`)}</h3>
                <div className="faq-icon">{activeFaq === idx ? '-' : '+'}</div>
              </div>
              <div className={`faq-answer ${activeFaq === idx ? 'show' : ''}`}>
                <p>{t(`faq.items.${faqKey}.answer`)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

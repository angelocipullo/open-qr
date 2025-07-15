import { ShoppingBag, Users, Smartphone } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const UseCasesSection = () => {
  const { t } = useTranslation();
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
          <h2 className="section-title">{t('useCases.title')} <span className="gradient-text">{t('useCases.titleHighlight')}</span></h2>
          <p className="section-subtitle">
            {t('useCases.subtitle')}
          </p>
        </motion.div>
        <div className="tabs">
          <div className="tabs-header">
            <button className={`tab-btn ${activeTab === 'business' ? 'active' : ''}`} onClick={() => setActiveTab('business')}>
              <ShoppingBag size={18} />
              <span>{t('useCases.tabs.business')}</span>
            </button>
            <button className={`tab-btn ${activeTab === 'marketing' ? 'active' : ''}`} onClick={() => setActiveTab('marketing')}>
              <Users size={18} />
              <span>{t('useCases.tabs.marketing')}</span>
            </button>
            <button className={`tab-btn ${activeTab === 'personal' ? 'active' : ''}`} onClick={() => setActiveTab('personal')}>
              <Smartphone size={18} />
              <span>{t('useCases.tabs.personal')}</span>
            </button>
          </div>
          <div className="tabs-content">
            {activeTab === 'business' && (
              <motion.div className="tab-panel" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
                <div className="use-case-grid">
                  <div className="use-case-item">
                    <h4>{t('useCases.business.digitalMenus.title')}</h4>
                    <p>{t('useCases.business.digitalMenus.description')}</p>
                  </div>
                  <div className="use-case-item">
                    <h4>{t('useCases.business.productSheets.title')}</h4>
                    <p>{t('useCases.business.productSheets.description')}</p>
                  </div>
                  <div className="use-case-item">
                    <h4>{t('useCases.business.businessCards.title')}</h4>
                    <p>{t('useCases.business.businessCards.description')}</p>
                  </div>
                  <div className="use-case-item">
                    <h4>{t('useCases.business.manuals.title')}</h4>
                    <p>{t('useCases.business.manuals.description')}</p>
                  </div>
                </div>
              </motion.div>
            )}
            {activeTab === 'marketing' && (
              <motion.div className="tab-panel" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
                <div className="use-case-grid">
                  <div className="use-case-item">
                    <h4>{t('useCases.marketing.campaigns.title')}</h4>
                    <p>{t('useCases.marketing.campaigns.description')}</p>
                  </div>
                  <div className="use-case-item">
                    <h4>{t('useCases.marketing.flyers.title')}</h4>
                    <p>{t('useCases.marketing.flyers.description')}</p>
                  </div>
                  <div className="use-case-item">
                    <h4>{t('useCases.marketing.events.title')}</h4>
                    <p>{t('useCases.marketing.events.description')}</p>
                  </div>
                  <div className="use-case-item">
                    <h4>{t('useCases.marketing.socialMedia.title')}</h4>
                    <p>{t('useCases.marketing.socialMedia.description')}</p>
                  </div>
                </div>
              </motion.div>
            )}
            {activeTab === 'personal' && (
              <motion.div className="tab-panel" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
                <div className="use-case-grid">
                  <div className="use-case-item">
                    <h4>{t('useCases.personal.contacts.title')}</h4>
                    <p>{t('useCases.personal.contacts.description')}</p>
                  </div>
                  <div className="use-case-item">
                    <h4>{t('useCases.personal.albums.title')}</h4>
                    <p>{t('useCases.personal.albums.description')}</p>
                  </div>
                  <div className="use-case-item">
                    <h4>{t('useCases.personal.wifi.title')}</h4>
                    <p>{t('useCases.personal.wifi.description')}</p>
                  </div>
                  <div className="use-case-item">
                    <h4>{t('useCases.personal.gifts.title')}</h4>
                    <p>{t('useCases.personal.gifts.description')}</p>
                  </div>
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

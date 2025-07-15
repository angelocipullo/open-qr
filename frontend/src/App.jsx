import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { QrCode, Download, Link, Sparkles, Zap, Globe, Image, Check, HelpCircle, Star, Users, ArrowRight, Smartphone, ShoppingBag, Menu, Coffee, Award, Shield, Clock } from 'lucide-react'
import { Toaster, toast } from 'react-hot-toast'
import { useTranslation } from 'react-i18next'
import QRCodeLib from 'qrcode'
import './App.css'
import FeaturesSection from './components/FeaturesSection'
import HowItWorksSection from './components/HowItWorksSection'
import UseCasesSection from './components/UseCasesSection'
import TestimonialsSection from './components/TestimonialsSection'
import FaqSection from './components/FaqSection'
import CtaSection from './components/CtaSection'
import LanguageSwitcher from './components/LanguageSwitcher'

function App() {
  const { t } = useTranslation()
  const [url, setUrl] = useState('')
  const [qrCode, setQrCode] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [showQr, setShowQr] = useState(false)

  const generateQR = async (e) => {
    e.preventDefault()

    if (!url.trim()) {
      toast.error(t('hero.form.invalidUrl'))
      return
    }

    setIsGenerating(true)

    try {
      const response = await fetch('/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: url.trim() }),
      })

      if (!response.ok) {
        throw new Error(t('hero.form.generationError'))
      }

      const svgText = await response.text()
      setQrCode(svgText)
      setShowQr(true)
      toast.success(t('hero.form.successMessage'))
    } catch (error) {
      toast.error('Errore: ' + error.message)
    } finally {
      setIsGenerating(false)
    }
  }

  const downloadQR = () => {
    if (!qrCode) return

    const blob = new Blob([qrCode], { type: 'image/svg+xml' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'qr-code.svg'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    toast.success(t('hero.form.downloadedSvg'))
  }

  const downloadPNG = async () => {
    if (!url.trim()) return

    try {
      // Creo un canvas temporaneo per generare il QR code
      const canvas = document.createElement('canvas')

      // Utilizzo la libreria QRCode per generare direttamente un canvas con il QR code
      await QRCodeLib.toCanvas(canvas, url.trim(), {
        width: 300,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      })

      // Converto il canvas in una data URL PNG
      const pngUrl = canvas.toDataURL('image/png')

      // Creo un link per scaricare l'immagine
      const a = document.createElement('a')
      a.href = pngUrl
      a.download = 'qr-code.png'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)

      toast.success(t('hero.form.downloadedPng'))
    } catch (error) {
      toast.error(t('hero.form.downloadError') + error.message)
    }
  }

  const resetForm = () => {
    setUrl('')
    setQrCode('')
    setShowQr(false)
  }

  return (
    <>
      <div className="app">
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#1f2937',
              color: '#fff',
              borderRadius: '12px',
            },
          }}
        />

        {/* Header */}
        <header className="app-header">
          <div className="container">
            <a href="/" className="logo" aria-label="Home">
              <QrCode size={28} />
              <span className="logo-text">{t('header.logo')}</span>
            </a>

            <nav className="main-nav">
              <ul>
                <li><a href="#features">{t('header.nav.features')}</a></li>
                <li><a href="#how-it-works">{t('header.nav.howItWorks')}</a></li>
                <li><a href="#use-cases">{t('header.nav.useCases')}</a></li>
                <li><a href="#faq">{t('header.nav.faq')}</a></li>
              </ul>
            </nav>

            <LanguageSwitcher />
          </div>
        </header>

        {/* Hero Section */}
        <main className="main-content">
          <div className="hero-bg">
            <div className="gradient-orb orb-1"></div>
            <div className="gradient-orb orb-2"></div>
            <div className="gradient-orb orb-3"></div>
          </div>

          <section className="hero">
            <div className="container">
              <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="hero-title">
                  {t('hero.title')}
                  <span className="gradient-text"> {t('hero.titleHighlight')}</span>
                </h1>

                <p className="hero-subtitle">
                  {t('hero.subtitle')}
                </p>

                <div className="features">
                  <div className="feature">
                    <Zap size={18} />
                    <span>{t('hero.features.instant')}</span>
                  </div>
                  <div className="feature">
                    <Download size={18} />
                    <span>{t('hero.features.download')}</span>
                  </div>
                  <div className="feature">
                    <Globe size={18} />
                    <span>{t('hero.features.anyUrl')}</span>
                  </div>
                  <div className="feature">
                    <Shield size={18} />
                    <span>{t('hero.features.secure')}</span>
                  </div>
                </div>
              </motion.div>

              {/* QR Code Result - Moved above form */}
              <AnimatePresence>
                {showQr && (
                  <motion.div
                    className="qr-result qr-result-top"
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="qr-card">
                      <div className="qr-display">
                        <div
                          className="qr-code"
                          dangerouslySetInnerHTML={{ __html: qrCode }}
                        />
                      </div>

                      <div className="qr-actions">
                        <motion.button
                          onClick={downloadQR}
                          className="action-btn primary"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Download size={16} />
                          {t('hero.form.downloadSvg')}
                        </motion.button>

                        <motion.button
                          onClick={downloadPNG}
                          className="action-btn primary"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Image size={16} />
                          {t('hero.form.downloadPng')}
                        </motion.button>

                        <motion.button
                          onClick={resetForm}
                          className="action-btn secondary"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {t('hero.form.newQrCode')}
                        </motion.button>
                      </div>

                      <div className="url-preview">
                        <span className="url-label">{t('hero.form.urlLabel')}</span>
                        <span className="url-text">{url}</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* QR Generator Form */}
              <motion.div
                className="qr-generator"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <form onSubmit={generateQR} className="qr-form">
                  <div className="input-container">
                    <Link size={20} className="input-icon" />
                    <input
                      type="url"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder={t('hero.form.placeholder')}
                      className="url-input"
                      disabled={isGenerating}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className={`generate-btn ${isGenerating ? 'loading' : ''}`}
                    disabled={isGenerating}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isGenerating ? (
                      <div className="loading-spinner"></div>
                    ) : (
                      <>
                        <QrCode size={20} />
                        {t('hero.form.generateButton')}
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </section>

          {/* Features Section */}
          <FeaturesSection />
          {/* How It Works Section */}
          <HowItWorksSection />
          {/* Use Cases */}
          <UseCasesSection />
          {/* Testimonials */}
          <TestimonialsSection />
          {/* FAQ Section */}
          <FaqSection />
          {/* CTA Section */}
          <CtaSection />
        </main>

        {/* Footer */}

      </div>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <a href="/" className="footer-logo" aria-label="Home">
              <QrCode size={24} />
              <span className="logo-text">{t('footer.logo')}</span>
            </a>

            <div className="footer-links">
              <div className="footer-column">
                <h4>{t('footer.sections.product.title')}</h4>
                <ul>
                  <li><a href="#features">{t('footer.sections.product.features')}</a></li>
                  <li><a href="#how-it-works">{t('footer.sections.product.howItWorks')}</a></li>
                  <li><a href="#use-cases">{t('footer.sections.product.useCases')}</a></li>
                  <li><a href="#faq">{t('footer.sections.product.faq')}</a></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4>{t('footer.sections.resources.title')}</h4>
                <ul>
                  <li><a href="#">{t('footer.sections.resources.blog')}</a></li>
                  <li><a href="#">{t('footer.sections.resources.guide')}</a></li>
                  <li><a href="#">{t('footer.sections.resources.bestPractices')}</a></li>
                  <li><a href="#">{t('footer.sections.resources.api')}</a></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4>{t('footer.sections.company.title')}</h4>
                <ul>
                  <li><a href="#">{t('footer.sections.company.about')}</a></li>
                  <li><a href="#">{t('footer.sections.company.contact')}</a></li>
                  <li><a href="#">{t('footer.sections.company.privacy')}</a></li>
                  <li><a href="#">{t('footer.sections.company.terms')}</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>{t('footer.copyright')}</p>
            <div className="seo-keywords">
              <span>{t('footer.seoKeywords.generator')}</span>
              <span>{t('footer.seoKeywords.free')}</span>
              <span>{t('footer.seoKeywords.svg')}</span>
              <span>{t('footer.seoKeywords.png')}</span>
              <span>{t('footer.seoKeywords.noRegistration')}</span>
              <span>{t('footer.seoKeywords.online')}</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App

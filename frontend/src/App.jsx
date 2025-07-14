import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { QrCode, Download, Link, Sparkles, Zap, Globe, Image, Check, HelpCircle, Star, Users, ArrowRight, Smartphone, ShoppingBag, Menu, Coffee, Award, Shield, Clock } from 'lucide-react'
import { Toaster, toast } from 'react-hot-toast'
import QRCodeLib from 'qrcode'
import './App.css'
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import UseCasesSection from './components/UseCasesSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import CtaSection from './components/CtaSection';

function App() {
  const [url, setUrl] = useState('')
  const [qrCode, setQrCode] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [showQr, setShowQr] = useState(false)

  const generateQR = async (e) => {
    e.preventDefault()

    if (!url.trim()) {
      toast.error('Inserisci un URL valido!')
      return
    }

    setIsGenerating(true)

    try {
      const response = await fetch('http://localhost:3000/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: url.trim() }),
      })

      if (!response.ok) {
        throw new Error('Errore nella generazione del QR code')
      }

      const svgText = await response.text()
      setQrCode(svgText)
      setShowQr(true)
      toast.success('QR Code generato con successo!')
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
    toast.success('QR Code scaricato!')
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

      toast.success('QR Code PNG scaricato!')
    } catch (error) {
      toast.error('Errore durante il download del PNG: ' + error.message)
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
            <div className="logo">
              <QrCode size={28} />
              <span className="logo-text">SimpleQR</span>
            </div>

            <nav className="main-nav">
              <ul>
                <li><a href="#features">Funzionalità</a></li>
                <li><a href="#how-it-works">Come Funziona</a></li>
                <li><a href="#use-cases">Casi d'Uso</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </nav>
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
                  Genera QR Code
                  <span className="gradient-text"> Istantaneamente</span>
                </h1>

                <p className="hero-subtitle">
                  Trasforma qualsiasi URL in un QR code professionale in secondi.
                  Gratuito, veloce, senza limiti e senza registrazione.
                </p>

                <div className="features">
                  <div className="feature">
                    <Zap size={18} />
                    <span>Generazione istantanea</span>
                  </div>
                  <div className="feature">
                    <Download size={18} />
                    <span>Download SVG & PNG</span>
                  </div>
                  <div className="feature">
                    <Globe size={18} />
                    <span>Qualsiasi URL</span>
                  </div>
                  <div className="feature">
                    <Shield size={18} />
                    <span>Sicuro e privato</span>
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
                          Scarica SVG
                        </motion.button>

                        <motion.button
                          onClick={downloadPNG}
                          className="action-btn primary"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Image size={16} />
                          Scarica PNG
                        </motion.button>

                        <motion.button
                          onClick={resetForm}
                          className="action-btn secondary"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Nuovo QR Code
                        </motion.button>
                      </div>

                      <div className="url-preview">
                        <span className="url-label">URL:</span>
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
                      placeholder="https://example.com"
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
                        Genera QR Code
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
            <div className="footer-logo">
              <QrCode size={24} />
              <span className="logo-text">SimpleQR</span>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h4>Prodotto</h4>
                <ul>
                  <li><a href="#features">Funzionalità</a></li>
                  <li><a href="#how-it-works">Come Funziona</a></li>
                  <li><a href="#use-cases">Casi d'Uso</a></li>
                  <li><a href="#faq">FAQ</a></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4>Risorse</h4>
                <ul>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Guida ai QR Code</a></li>
                  <li><a href="#">Best Practices</a></li>
                  <li><a href="#">API (Coming Soon)</a></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4>Azienda</h4>
                <ul>
                  <li><a href="#">Chi Siamo</a></li>
                  <li><a href="#">Contatti</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Termini di Servizio</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2025 SimpleQR. Tutti i diritti riservati. Creato con ❤️ e React in Italia.</p>
            <div className="seo-keywords">
              <span>Generatore QR Code</span>
              <span>QR Code Gratis</span>
              <span>QR Code SVG</span>
              <span>QR Code PNG</span>
              <span>QR Code Senza Registrazione</span>
              <span>Creazione QR Code Online</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App

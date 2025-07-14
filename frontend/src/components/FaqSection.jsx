import { motion } from 'framer-motion';
import { useState } from 'react';

const faqList = [
  {
    question: 'Quanto costa utilizzare SimpleQR?',
    answer: 'SimpleQR è completamente gratuito, senza limiti e senza necessità di registrazione. Non ci sono funzionalità premium nascoste o costi aggiuntivi.'
  },
  {
    question: 'I QR code scadono o hanno una durata limitata?',
    answer: 'No, i QR code generati con SimpleQR non scadono mai. Funzioneranno finché l\'URL di destinazione rimane attivo. Una volta scaricati, i QR code sono tuoi per sempre.'
  },
  {
    question: 'Che differenza c\'è tra QR code in formato SVG e PNG?',
    answer: 'Il formato SVG è vettoriale, quindi può essere ridimensionato senza perdita di qualità, ideale per la stampa di grandi dimensioni. Il formato PNG è raster, più comune e compatibile con qualsiasi piattaforma o applicazione.'
  },
  {
    question: 'SimpleQR raccoglie o salva i miei dati?',
    answer: 'No, SimpleQR non salva gli URL che inserisci o qualsiasi altro dato personale. Tutti i QR code vengono generati localmente nel tuo browser senza conservare alcuna informazione sui nostri server.'
  },
  {
    question: 'Posso personalizzare il design dei QR code?',
    answer: 'Attualmente offriamo QR code standard in bianco e nero per massima compatibilità e leggibilità. Stiamo lavorando per aggiungere opzioni di personalizzazione in futuro.'
  }
];

const FaqSection = () => {
  const [activeFaq, setActiveFaq] = useState(null);
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
          <h2 className="section-title">Domande <span className="gradient-text">Frequenti</span></h2>
          <p className="section-subtitle">
            Hai delle domande sul nostro servizio? Ecco le risposte alle domande più frequenti.
          </p>
        </motion.div>
        <div className="faq-container">
          {faqList.map((faq, idx) => (
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
                <h3>{faq.question}</h3>
                <div className="faq-icon">{activeFaq === idx ? '-' : '+'}</div>
              </div>
              <div className={`faq-answer ${activeFaq === idx ? 'show' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

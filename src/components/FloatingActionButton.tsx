import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';          // scroll‑to‑top icon
import { WhatsAppOutlined } from '@ant-design/icons'; // WhatsApp icon

const SCROLL_THRESHOLD = 300;                      // px

const FloatingActionButton = () => {
  const [scrolled, setScrolled] = useState(false); // true  -> show ScrollTop
                                                  // false -> show WhatsApp

  /* Track scroll position ---------------------------------------------------*/
  useEffect(() => {
    const onScroll = () => setScrolled(window.pageYOffset > SCROLL_THRESHOLD);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Handlers ----------------------------------------------------------------*/
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  const openWhatsApp = () =>
    window.open('https://wa.me/254741760092', '_blank');

  const handleClick = () => (scrolled ? scrollToTop() : openWhatsApp());

  /* UI ----------------------------------------------------------------------*/
  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.button
        key={scrolled ? 'scroll' : 'whatsapp'}           // lets Framer animate between states
        onClick={handleClick}
        aria-label={scrolled ? 'Scroll to top' : 'Chat on WhatsApp'}
        className={`fixed bottom-8 right-8 p-4 rounded-full shadow-lg z-40
                    transition-colors duration-300
                    ${scrolled
                      ? 'bg-primary-600 hover:bg-primary-700 text-white'
                      : 'bg-green-500 hover:bg-green-600 text-white'
                    }`}
        /* Animation props ----------------------------------------------------*/
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        exit={{ opacity: 0, scale: 0, rotate: 180 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        {scrolled
          ? <ChevronUp size={24} />                     // scroll‑to‑top icon
          : <WhatsAppOutlined style={{ fontSize: 24 }} />}  
      </motion.button>
    </AnimatePresence>
  );
};

export default FloatingActionButton;

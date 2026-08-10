import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate('/contact');
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
        >
          <div className="bg-background/95 backdrop-blur-xl border-t border-border px-4 py-3 flex gap-3">
            <a
              href="tel:+40721001888"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-sm border border-border text-foreground font-medium text-sm hover:border-primary hover:text-primary transition-all"
            >
              <Phone className="w-4 h-4" />
              Sună Acum
            </a>
            <button
              onClick={scrollToContact}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-sm bg-primary text-primary-foreground font-semibold text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              Cere Ofertă
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

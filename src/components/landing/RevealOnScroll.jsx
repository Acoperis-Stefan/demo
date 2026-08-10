import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Wraps children with a scroll-triggered red→black fill reveal effect,
 * identical to the navbar button hover animation.
 */
export default function RevealOnScroll({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {children}
      {/* Overlay that wipes away from left+right when revealed */}
      <AnimatePresence>
        {!revealed && (
          <>
            <motion.div
              key="mask-left"
              className="absolute inset-y-0 left-0 z-20"
              style={{ background: 'hsl(0,80%,55%)', width: '50%' }}
              initial={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.div
              key="mask-right"
              className="absolute inset-y-0 right-0 z-20"
              style={{ background: 'hsl(0,80%,55%)', width: '50%' }}
              initial={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

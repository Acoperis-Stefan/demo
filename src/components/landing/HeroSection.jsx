import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const HERO_IMAGE = 'https://media.base44.com/images/public/6a60f66acdf5f6739fab2588/d091c184e_generated_image.png';

export default function HeroSection() {
  const [offsetY, setOffsetY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY * 0.25);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative min-h-[65vh] flex items-center overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 w-full h-[130%] -top-[15%]"
        style={{ transform: `translateY(${offsetY}px)` }}
      >
        <img
          src={HERO_IMAGE}
          alt="Muncitori care montează acoperiș"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content — full width, no grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-32 pb-16">
        <div className="w-full">
          {/* Title — left-aligned with red vertical line */}
          <div className="flex gap-5 lg:gap-6 mb-8">
            <div className="w-1.5 bg-primary flex-shrink-0" />
            <div
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.05] uppercase"
              style={{ fontFamily: 'var(--font-inter)', letterSpacing: '-0.02em' }}
            >
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  Acoperișuri
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
                >
                  Profesionale
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  de Încredere
                </motion.div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-start mt-8 lg:mt-20"
          >
            <motion.button
              onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="relative w-full sm:w-auto px-4 py-2 text-xs sm:px-8 sm:py-4 sm:text-base bg-primary text-primary-foreground font-black rounded-sm tracking-widest uppercase overflow-hidden group"
            >
              <span className="relative z-10">Solicită Ofertă Gratuită</span>
              <motion.span
                className="absolute inset-0 bg-white/10"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>

            <motion.button
              onClick={() => navigate('/servicii')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-4 py-2 text-xs sm:px-8 sm:py-4 sm:text-base bg-white/15 text-white font-bold rounded-sm tracking-widest uppercase hover:bg-white/25 transition-colors duration-300"
            >
              Descoperă Serviciile
            </motion.button>
          </motion.div>
        </div>
      </div>

    </section>
  );
}

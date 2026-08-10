import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

const galleryItems = [
  { url: 'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/030247ae9_WhatsAppImage2026-04-13at194934.jpg', title: 'Învelitoare Metalică', tag: 'Țiglă Metalică' },
  { url: 'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/a3616098b_WhatsAppImage2026-04-13at194933.jpg', title: 'Montaj Astereal', tag: 'Renovare Acoperiș' },
  { url: 'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/3c1fc61a7_WhatsAppImage2026-04-13at1949333.jpg', title: 'Acoperiș Plat', tag: 'Acoperișuri Plate' },
  { url: 'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/d86d88c7e_WhatsAppImage2026-04-13at1949332.jpg', title: 'Folie & Șipcuire', tag: 'Renovare Acoperiș' },
  { url: 'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/3b3048568_WhatsAppImage2026-04-13at1949331.jpeg', title: 'Ferestre Velux', tag: 'Izolație & Mansardare' },
  { url: 'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/31c666a5b_WhatsAppImage2026-04-13at194932.jpg', title: 'Tablă Falțuită', tag: 'Învelitoare Metalică' },
  { url: 'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/6cde9df68_WhatsAppImage2026-04-13at1949323.jpeg', title: 'Casă cu Terasă', tag: 'Țiglă Ceramică' },
  { url: 'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/15d9c4ea0_WhatsAppImage2026-04-13at1949322.jpg', title: 'Montaj Tablă', tag: 'Montaj Profesional' },
  { url: 'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/56d1006ad_WhatsAppImage2026-04-13at1949321.jpg', title: 'Coamă Metalică', tag: 'Învelitoare Metalică' },
  { url: 'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/1e220c8ee_WhatsAppImage2026-04-13at194931.jpg', title: 'Jgheaburi & Burlane', tag: 'Jgheaburi & Burlane' },
  { url: 'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/71f8e0e46_WhatsAppImage2026-04-13at1949312.jpg', title: 'Mansardare Interior', tag: 'Izolație & Mansardare' },
  { url: 'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/aea640b0d_WhatsAppImage2026-04-13at1949311.jpg', title: 'Structură Șarpantă', tag: 'Izolație & Mansardare' },
  { url: 'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/a00e5abe9_WhatsAppImage2026-04-13at194929.jpg', title: 'Finalizare Lucrare', tag: 'Țiglă Metalică' },
  { url: 'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/f5f47e476_WhatsAppImage2026-06-16at192138.jpg', title: 'Montaj Țiglă Metalică', tag: 'Montaj Profesional' },
  { url: 'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/e7e919454_WhatsAppImage2026-06-16at1921381.jpg', title: 'Livrare Materiale', tag: 'Montaj Profesional' },
];

// Duplicate for seamless loop
const items = [...galleryItems, ...galleryItems];

const CARD_WIDTH = 320;
const CARD_GAP = 16;
const CARD_STEP = CARD_WIDTH + CARD_GAP;
const AUTO_SPEED = 0.6; // px per frame

export default function GallerySection() {
  const trackRef = useRef(null);
  const xRef = useRef(0);
  const rafRef = useRef(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartOffset = useRef(0);
  const pausedRef = useRef(false);
  const [lightbox, setLightbox] = useState(null);

  const totalWidth = galleryItems.length * CARD_STEP;

  // Auto-scroll loop
  useEffect(() => {
    const animate = () => {
      if (!isDragging.current && !pausedRef.current) {
        xRef.current -= AUTO_SPEED;
        if (xRef.current <= -totalWidth) xRef.current += totalWidth;
        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(${xRef.current}px)`;
        }
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [totalWidth]);

  // Mouse drag
  const onMouseDown = (e) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragStartOffset.current = xRef.current;
    e.preventDefault();
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    const delta = e.clientX - dragStartX.current;
    xRef.current = dragStartOffset.current + delta;
    if (xRef.current > 0) xRef.current -= totalWidth;
    if (xRef.current <= -totalWidth) xRef.current += totalWidth;
    if (trackRef.current) trackRef.current.style.transform = `translateX(${xRef.current}px)`;
  };

  const onMouseUp = () => { isDragging.current = false; };

  // Touch drag
  const onTouchStart = (e) => {
    isDragging.current = true;
    dragStartX.current = e.touches[0].clientX;
    dragStartOffset.current = xRef.current;
  };
  const onTouchMove = (e) => {
    if (!isDragging.current) return;
    const delta = e.touches[0].clientX - dragStartX.current;
    xRef.current = dragStartOffset.current + delta;
    if (xRef.current > 0) xRef.current -= totalWidth;
    if (xRef.current <= -totalWidth) xRef.current += totalWidth;
    if (trackRef.current) trackRef.current.style.transform = `translateX(${xRef.current}px)`;
  };
  const onTouchEnd = () => { isDragging.current = false; };

  const openLightbox = (realIndex) => {
    if (Math.abs(xRef.current - dragStartOffset.current) < 5) {
      setLightbox(realIndex % galleryItems.length);
    }
  };

  const prev = () => setLightbox((i) => (i - 1 + galleryItems.length) % galleryItems.length);
  const next = () => setLightbox((i) => (i + 1) % galleryItems.length);

  return (
    <section id="galerie" className="pt-24 lg:pt-32 pb-8 lg:pb-10 relative overflow-hidden bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 text-center uppercase" style={{ fontFamily: 'var(--font-inter)', letterSpacing: '0.12em' }}>
            Galeria noastră
          </h2>
          <div className="w-24 h-0.5 bg-foreground mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-center">
            Fiecare proiect finalizat este dovada angajamentului nostru față de calitate.
          </p>
        </motion.div>
      </div>

      {/* Carousel */}
      <div
        className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing select-none"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{ height: 240 }}
      >
        <div
          ref={trackRef}
          className="flex gap-4 absolute top-0 left-0"
          style={{ willChange: 'transform' }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="relative flex-shrink-0 rounded-lg overflow-hidden bg-secondary border border-border/30 group"
              style={{ width: CARD_WIDTH, height: 240 }}
            >
              <img
                src={item.url}
                alt={item.title}
                draggable={false}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-foreground text-sm font-semibold">{item.title}</p>
                <p className="text-primary text-xs">{item.tag}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryItems[lightbox].url}
                alt={galleryItems[lightbox].title}
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background to-transparent rounded-b-lg">
                <p className="font-display text-lg font-bold text-foreground">{galleryItems[lightbox].title}</p>
                <p className="text-primary text-sm">{galleryItems[lightbox].tag}</p>
              </div>
              <button onClick={() => setLightbox(null)} className="absolute top-3 right-3 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center text-foreground hover:text-primary transition-all">
                <X className="w-5 h-5" />
              </button>
              <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-background/80 flex items-center justify-center text-foreground hover:text-primary transition-all">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-background/80 flex items-center justify-center text-foreground hover:text-primary transition-all">
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

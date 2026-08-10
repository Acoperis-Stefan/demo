import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';

const stats = [
  { value: 500, suffix: '+', label: 'Proiecte Finalizate' },
  { value: 18, suffix: '+', label: 'Ani de Experiență' },
  { value: 15, suffix: '', label: 'Ani Garanție Lucrări' },
  { value: 100, suffix: '%', label: 'Clienți Mulțumiți' },
];

function AnimatedNumber({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.max(1, Math.floor(value / (duration / 16)));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-display text-5xl lg:text-6xl font-bold text-primary">
      {count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <RevealOnScroll key={stat.label} delay={index * 0.1} className="rounded-lg">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center py-4"
              >
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                <div className="mt-2 text-muted-foreground text-sm lg:text-base font-medium">
                  {stat.label}
                </div>
                <div className="w-12 h-px bg-primary/30 mx-auto mt-4" />
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

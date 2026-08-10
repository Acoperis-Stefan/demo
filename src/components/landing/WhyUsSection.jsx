import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Ruler, Leaf, Wrench, Star } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const reasons = [
  {
    icon: Shield,
    title: 'Garanție Extinsă',
    description: 'Oferim până la 15 ani garanție pentru lucrările noastre, cu suport tehnic dedicat.',
  },
  {
    icon: Users,
    title: 'Echipă Profesionistă',
    description: 'Meșteri cu experiență de peste 18 ani și formare continuă în tehnologii noi.',
  },
  {
    icon: Ruler,
    title: 'Precizie & Calitate',
    description: 'Fiecare detaliu contează. Lucrăm cu materiale premium și standarde europene.',
  },
  {
    icon: Leaf,
    title: 'Materiale Eco',
    description: 'Utilizăm materiale sustenabile și soluții eficiente energetic pentru casa ta.',
  },
  {
    icon: Wrench,
    title: 'Soluții Complete',
    description: 'De la evaluare la finalizare, ne ocupăm de tot: proiectare, materiale, manoperă.',
  },
  {
    icon: Star,
    title: 'Excelență Constantă',
    description: 'Peste 500 de clienți mulțumiți și un rating de 5 stele pe Google.',
  },
];

export default function WhyUsSection() {
  return (
    <section id="de-ce-noi" className="py-24 lg:py-32 relative bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-primary" />
            <span className="text-primary text-sm font-semibold tracking-[0.25em] uppercase">
              De ce noi
            </span>
            <div className="w-12 h-px bg-primary" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Excelență în fiecare
            <span className="text-primary"> detaliu</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nu suntem doar constructori. Suntem partenerii tăi de încredere pentru un acoperiș 
            care protejează și impresionează.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <RevealOnScroll key={reason.title} delay={index * 0.07} className="rounded-lg">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5 }}
                className="group p-8 rounded-lg border border-border/30 bg-card/50 hover:bg-card hover:border-primary/20 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="w-14 h-14 rounded-sm bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

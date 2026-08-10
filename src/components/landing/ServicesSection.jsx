import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import RevealOnScroll from './RevealOnScroll';

const services = [
  {
    title: 'Montaj Panouri Sandwich',
    description: 'Panouri sandwich termoizolante pentru hale, depozite și construcții industriale sau rezidențiale. Montaj rapid, eficiență energetică ridicată.',
    image: 'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/eebf174c4_WhatsAppImage2026-04-17at1801201.jpg',
  },
  {
    title: 'Reparații Acoperiș',
    description: 'Intervenim rapid pentru reparații la orice tip de acoperiș — ceramică, metal, bitum sau tablă. Diagnosticăm problemele și oferim soluții durabile.',
    image: 'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/385bad3dd_WhatsAppImage2026-04-17at1801202.jpg',
  },
  {
    title: 'Terase & Foișoare',
    description: 'Construim și acoperim terase și foișoare cu soluții rezistente la intemperii. Structuri din lemn sau metal, adaptate stilului casei tale.',
    image: 'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/afb0a4a45_WhatsAppImage2026-04-17at180121.jpeg',
  },
  {
    title: 'Mansarde',
    description: 'Transformăm spațiul podului într-o mansardă funcțională și estetică. Planificare, structură, izolație, ferestre Velux și finisaje complete.',
    image: 'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/923c637f7_WhatsAppImage2026-04-17at1801211.jpeg',
  },
  {
    title: 'Dulgherie',
    description: 'Execuție și reparație șarpante din lemn masiv. Meșteri calificați cu experiență în structuri complexe — căpriori, pane, cosoroabe și ferme de acoperiș.',
    image: 'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/58491787d_WhatsAppImage2026-04-17at1801212.jpeg',
  },
  {
    title: 'Montaj Țiglă Metalică',
    description: 'Montaj profesional țiglă metalică — soluție modernă, ușoară și durabilă. Rezistentă la coroziune, UV și intemperii, disponibilă în multiple culori.',
    image: 'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/81baff782_WhatsAppImage2026-04-17at1801213.jpeg',
  },
  {
    title: 'Țiglă Ceramică',
    description: 'Montaj țiglă ceramică de calitate superioară — aspect tradițional, rezistență maximă la UV, îngheț și intemperii. Garanție extinsă pe lucrare.',
    image: 'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/005178239_WhatsAppImage2026-04-17at1801214.jpg',
  },
  {
    title: 'Vopsire Acoperiș',
    description: 'Revigorăm acoperișurile vechi prin vopsire specializată cu vopsele anticorozive și UV. Prelungim durata de viață a învelitorii și redăm aspectul original.',
    image: 'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/726dc73dc_WhatsAppImage2026-04-17at1801215.jpg',
  },
  {
    title: 'Montaj Ferestre Velux',
    description: 'Montaj profesional ferestre de mansardă Velux. Lumină naturală maximă, izolație termică și fonică excelentă, etanșeitate garantată.',
    image: 'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/4c5c8f5a6_WhatsAppImage2026-04-17at180122.jpeg',
  },
  {
    title: 'Montaj Orice Tip de Tablă',
    description: 'Montaj tablă falțuită, tablă cutată, tip țiglă sau lindab. Soluții moderne pentru acoperișuri rezidențiale și industriale.',
    image: 'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/3bcda7993_WhatsAppImage2026-04-17at182146.jpg',
  },
  {
    title: 'Hidroizolații',
    description: 'Sisteme complete de hidroizolație pentru acoperișuri plate, terase și fundații. Membrane bituminoase, EPDM și soluții lichide certificate.',
    image: 'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/2d2fc5a02_WhatsAppImage2026-04-17at1801221.jpg',
  },
  {
    title: 'Sistem Pluvial',
    description: 'Montaj și reparații jgheaburi și burlane din zinc, aluminiu sau PVC. Sistem pluvial corect dimensionat pentru protecția fundației și a fațadei.',
    image: 'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/f3d0b7d18_WhatsAppImage2026-04-17at1801222.jpg',
  },
  {
    title: 'Izolații',
    description: 'Izolație termică și fonică pentru mansarde, poduri și pereți. Vată minerală, polistiren sau spumă poliuretanică — reducere semnificativă a facturilor la energie.',
    image: 'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/7f68e258e_WhatsAppImage2026-04-17at1801223.jpg',
  },
  {
    title: 'Montaj Parazăpezi',
    description: 'Montaj sisteme parazăpezi pentru prevenirea avalanșelor de zăpadă de pe acoperiș. Protejăm persoanele și elementele arhitecturale de sub streașină.',
    image: 'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/fd41177f6_WhatsAppImage2026-04-17at180120.jpeg',
  },
];

const cardVariants = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: { duration: 0.4, delay: i * 0.05, ease: 'easeOut' },
  }),
};

export default function ServicesSection() {
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate('/contact');
  };

  return (
    <section id="servicii" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-px bg-primary"
            />
            <span className="text-primary text-sm font-semibold tracking-[0.25em] uppercase">
              Ce facem
            </span>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-px bg-primary"
            />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 uppercase" style={{ fontFamily: 'var(--font-inter)', letterSpacing: '0.12em' }}>
            Facem acoperișul
            <br />
            <span className="text-primary">ca la carte</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            De la o țiglă ruptă la un acoperiș nou — ne ocupăm de tot, cu materiale bune și oameni care își cunosc meseria.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <RevealOnScroll key={service.title} delay={index * 0.07}>
            <motion.div
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              <div
                className="group relative overflow-hidden bg-secondary border border-border/50 cursor-pointer transition-colors duration-300 hover:border-primary"
                onClick={scrollToContact}
              >
                {/* Image */}
                {service.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                )}
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300" style={{ fontFamily: 'var(--font-inter)' }}>
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                    {service.description}
                  </p>
                  {/* Bottom accent line */}
                  <div className="h-0.5 bg-primary mt-4 w-0 group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

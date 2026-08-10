import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const serviceOptions = [
  'Reparații Acoperișuri Orice Tip',
  'Montaj Acoperișuri',
  'Dulgherie',
  'Mansardări',
  'Terase & Foișoare',
  'Montaj Orice Tip de Tablă',
  'Montaj Țiglă Ceramică',
  'Montaj Șindrilă Bituminoasă',
  'Montaj Panouri Sandwich',
  'Hidroizolații',
  'Izolații Interioare & Exterioare',
  'Vopsire Acoperișuri',
  'Montaj & Reparații Sistem Pluvial',
  'Montaj Parazăpezi',
];

export default function QuoteFormSection() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    location: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      alert('Vă rugăm completați numele și telefonul.');
      return;
    }
    const msg = `Cerere Ofertă Acoperiș:\nNume: ${form.name}\nTelefon: ${form.phone}\nLocalitate: ${form.location}\nServiciu: ${form.service}\nMesaj: ${form.message}`;
    window.open(`https://wa.me/40721001888?text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-24 lg:py-32 relative">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mx-auto mb-6 flex justify-center">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h3 className="font-display text-3xl font-bold text-foreground mb-4">
              Mulțumim pentru cererea dvs!
            </h3>
            <p className="text-muted-foreground text-lg">
              Vă vom contacta în cel mai scurt timp pentru a discuta detaliile proiectului.
            </p>
            <button
              onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', location: '', service: '', message: '' }); }}
              className="mt-8 px-8 py-3 border border-primary text-primary font-semibold rounded-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 uppercase tracking-wide text-sm"
            >
              Trimite altă cerere
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left - Context */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-px bg-primary" />
              <span className="text-primary text-sm font-semibold tracking-[0.25em] uppercase">
                Contact
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 uppercase" style={{ fontFamily: 'var(--font-inter)', letterSpacing: '0.12em' }}>
              Acoperișul tău,
              <br />
              <span className="text-primary">în mâini bune.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Ne spui ce ai nevoie, noi venim și o rezolvăm. Fără bătăi de cap, fără surprize — doar o treabă bine făcută.
            </p>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Vinem gratuit la tine și vedem ce are nevoie</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Îți dăm un preț clar în 24 de ore</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Nu te legăm de nimic — decizia e a ta</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="p-8 lg:p-10 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <FormField
                  label="Nume complet"
                  name="name"
                  placeholder="Numele dvs."
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <FormField
                  label="Telefon"
                  name="phone"
                  type="tel"
                  placeholder="07XX XXX XXX"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <FormField
                  label="Localitate"
                  name="location"
                  placeholder="Orașul / zona dvs."
                  value={form.location}
                  onChange={handleChange}
                />
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Serviciu dorit
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b-2 border-border py-3 text-foreground focus:border-primary focus:outline-none transition-colors duration-300 text-sm appearance-none"
                  >
                    <option value="" className="bg-card">Selectează serviciul</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s} className="bg-card">{s}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Mesaj / Detalii
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Descrieți pe scurt proiectul sau nevoile dvs..."
                  rows={4}
                  className="w-full bg-transparent border-0 border-b-2 border-border py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors duration-300 text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-4 bg-primary text-primary-foreground font-semibold rounded-sm text-base tracking-wide uppercase transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02] flex items-center justify-center gap-3"
              >
                <Send className="w-5 h-5" />
                Solicită Ofertă
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FormField({ label, required, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground mb-2">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <input
        {...props}
        required={required}
        className="w-full bg-transparent border-0 border-b-2 border-border py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors duration-300 text-sm"
      />
    </div>
  );
}

import React from 'react';
import Navbar from '../components/landing/Navbar';
import HeroSection from '../components/landing/HeroSection';
import PartnersSection from '../components/landing/PartnersSection';
import GallerySection from '../components/landing/GallerySection';
import TestimonialsSection from '../components/landing/TestimonialsSection';
import FooterSection from '../components/landing/FooterSection';
import FloatingCTA from '../components/landing/FloatingCTA';
import ScrollProgress from '../components/landing/ScrollProgress';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <GallerySection />
      <PartnersSection />
      <TestimonialsSection />
      <FooterSection />
      <FloatingCTA />
      <ScrollProgress />
      {/* WhatsApp fixed button */}
      <a
        href="https://wa.me/40721001888"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn fixed bottom-20 right-4 z-50 w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 md:bottom-24 lg:bottom-6 lg:right-6"
        style={{ background: '#25D366' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-full h-full p-3 fill-white">
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.737 5.469 2.027 7.773L0 32l8.489-2.002A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.756-1.845l-.484-.287-5.04 1.188 1.216-4.91-.317-.504A13.267 13.267 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.274-9.874c-.398-.199-2.354-1.162-2.718-1.294-.365-.133-.631-.199-.897.199-.266.398-1.029 1.294-1.261 1.56-.232.266-.465.299-.863.1-.398-.199-1.681-.619-3.202-1.977-1.183-1.056-1.982-2.36-2.214-2.758-.232-.398-.025-.613.174-.811.179-.178.398-.465.597-.697.199-.232.266-.398.398-.664.133-.266.066-.498-.033-.697-.1-.199-.897-2.162-1.229-2.96-.324-.778-.653-.673-.897-.686l-.764-.013c-.266 0-.697.1-1.063.498-.365.398-1.395 1.362-1.395 3.322s1.428 3.854 1.627 4.12c.199.266 2.81 4.291 6.808 6.02.951.411 1.694.656 2.272.84.955.304 1.824.261 2.511.158.766-.114 2.354-.962 2.686-1.891.332-.929.332-1.726.232-1.891-.1-.166-.365-.266-.763-.465z"/>
        </svg>
      </a>
    </div>
  );
}

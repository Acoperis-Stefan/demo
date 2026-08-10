import React, { useEffect } from 'react';
import Navbar from '../components/landing/Navbar';
import ServicesSection from '../components/landing/ServicesSection';

export default function Services() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ServicesSection />
    </div>
  );
}

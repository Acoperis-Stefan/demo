import React from 'react';
import Navbar from '../components/landing/Navbar';
import QuoteFormSection from '../components/landing/QuoteFormSection';

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <QuoteFormSection />
      </div>
    </div>
  );
}

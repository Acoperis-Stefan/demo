import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate('/')}
      className="fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity shadow-lg"
    >
      <ArrowLeft className="w-4 h-4" />
      Înapoi
    </button>
  );
}

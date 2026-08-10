import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';

export default function FooterSection() {
  const navigate = useNavigate();

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavClick = (link) => {
    if (link.type === 'navigate') {
      navigate(link.href);
    } else {
      scrollTo(link.href);
    }
  };

  return (
    <footer className="bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Logo className="h-24 w-auto" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 text-sm uppercase tracking-wide">
              Navigare
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Acasă', href: '#hero', type: 'scroll' },
                { label: 'Servicii', href: '/servicii', type: 'navigate' },
                { label: 'Testimoniale', href: '#testimoniale', type: 'scroll' },
                { label: 'Contact', href: '/contact', type: 'navigate' },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link)}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 text-sm uppercase tracking-wide">
              Servicii
            </h4>
            <ul className="space-y-3">
              {['Învelitori ceramice', 'Învelitori metalice', 'Acoperișuri plate', 'Jgheaburi & burlane', 'Renovare acoperiș', 'Izolație & mansardare'].map((s) => (
                <li key={s}>
                  <button
                    onClick={() => navigate('/contact')}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 text-sm uppercase tracking-wide">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+40721001888" className="flex items-center gap-3 text-muted-foreground text-sm hover:text-primary transition-colors">
                   <Phone className="w-4 h-4 text-primary" />
                   +40 721 001 888
                 </a>
              </li>


            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Acoperis Home. Toate drepturile rezervate.
          </p>
          <p className="text-muted-foreground text-xs">
            Calitate · Garanție · Profesionalism
          </p>
        </div>
      </div>
    </footer>
  );
}

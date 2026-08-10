import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from './Logo';

const navLinks = [
  { label: 'Acasă', href: '#hero', type: 'scroll' },
  { label: 'Testimoniale', href: '#testimoniale', type: 'scroll' },
  { label: 'Servicii', href: '/servicii', type: 'navigate' },
  { label: 'Contact', href: '/contact', type: 'navigate' },
];

function NavButton({ label, href, active, onClick, isFirst }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative h-full text-sm font-bold tracking-[0.12em] uppercase overflow-hidden ${isFirst ? 'pl-10 pr-5' : 'px-5'}`}
      style={{ fontFamily: 'var(--font-inter)' }}
    >
      {/* Fill from center-left and center-right → black on hover/active */}
      <AnimatePresence>
        {(hovered || active) && (
          <>
            <motion.span
              key="left"
              className="absolute inset-y-0 left-0"
              style={{ background: 'hsl(0,0%,8%)' }}
              initial={{ width: 0 }}
              animate={{ width: '50%' }}
              exit={{ width: 0 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
            />
            <motion.span
              key="right"
              className="absolute inset-y-0 right-0"
              style={{ background: 'hsl(0,0%,8%)' }}
              initial={{ width: 0 }}
              animate={{ width: '50%' }}
              exit={{ width: 0 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
            />
          </>
        )}
      </AnimatePresence>
      <span className="relative z-10 text-white">{label}</span>
    </button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === '/contact') setActiveSection('/contact');
    else if (path === '/servicii') setActiveSection('/servicii');
    else if (path === '/') setActiveSection('#hero');
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      // Detect active section
      for (const link of [...navLinks].reverse()) {
        if (link.type === 'navigate') continue;
        const el = document.querySelector(link.href);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(link.href);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(href);
    } else {
      navigate('/');
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  const handleNavClick = (link) => {
    setMobileOpen(false);
    if (link.type === 'navigate') {
      navigate(link.href);
    } else {
      scrollTo(link.href);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-sm' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto pl-0 lg:pl-0 pr-0 overflow-visible">
        <div className="flex items-center justify-center lg:justify-between h-28 relative">
          {/* Logo */}
          <button onClick={() => scrollTo('#hero')} className="hover:opacity-80 transition-opacity">
            <Logo className="h-28 w-auto" />
          </button>

          {/* Desktop Nav — unified parallelogram bar extending to right edge */}
          <div className="hidden lg:flex items-center flex-1 justify-end">
            {/* Nav bar — extends to right edge */}
            <div
              className="relative flex items-stretch h-10"
              style={{
                background: 'hsl(0,55%,38%)',
                marginRight: 'calc(-50vw + 50% + 6rem)',
                paddingRight: '2rem',
                clipPath: 'polygon(0% 50%, 28px 0%, 100% 0%, 100% 100%, 28px 100%)',
              }}
            >
              {navLinks.map((link, index) => (
                <React.Fragment key={link.href}>
                  {index > 0 && (
                    <div className="w-px self-stretch" style={{ background: 'rgba(255,255,255,0.18)' }} />
                  )}
                  <NavButton
                    label={link.label}
                    href={link.href}
                    active={activeSection === link.href}
                    onClick={() => handleNavClick(link)}
                    isFirst={index === 0}
                  />
                </React.Fragment>
              ))}
              {/* Phone number */}
              <a
                href="tel:+40721001888"
                className="flex items-center gap-2 text-sm font-bold text-white hover:text-white/80 transition-colors tracking-wide ml-6"
              >
                <Phone className="w-4 h-4" />
                <span>+40 721 001 888</span>
              </a>
            </div>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-foreground p-2"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-background border-b border-border"
          >
            <div className="px-6 py-6 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link)}
                  className={`block w-full text-left py-3 font-bold text-base tracking-wide uppercase border-b border-border/50 transition-colors ${
                    activeSection === link.href ? 'text-primary' : 'text-foreground hover:text-primary'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => { setMobileOpen(false); navigate('/contact'); }}
                className="mt-4 w-full px-6 py-3 bg-primary text-primary-foreground font-bold rounded-sm text-center uppercase tracking-widest"
              >
                Solicită Ofertă
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

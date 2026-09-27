import { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, ArrowUpRight, ShieldCheck, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface NavbarProps {
  onOpenConsultation: () => void;
  onOpenEstimator: () => void;
}

export function Navbar({ onOpenConsultation, onOpenEstimator }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'Bhiwadi Townships', href: '#townships' },
    { label: 'Cost Estimator', href: '#estimator' },
    { label: 'Studio Styles', href: '#studio' },
    { label: 'Process', href: '#process' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Notification Announcement Bar */}
      <div className="bg-[#15161a] border-b border-[#262830] text-xs text-[#b8b3ab] py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-[#c5a880]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span className="font-medium">45-Day Handover Guarantee</span>
            </span>
            <span className="text-[#4e515d]">/</span>
            <span className="hidden sm:inline">10-Year Warranty on Modular Woodwork</span>
            <span className="text-[#4e515d] hidden sm:inline">/</span>
            <span className="hidden md:inline flex items-center gap-1 text-[#d8d3cb]">
              <MapPin className="w-3 h-3 text-[#c5a880]" />
              Neelam Chowk, Bhiwadi
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs ml-auto">
            <a 
              href={`tel:${BUSINESS_INFO.primaryPhoneDigits}`}
              className="hover:text-[#c5a880] transition-colors flex items-center gap-1 font-medium"
            >
              <Phone className="w-3 h-3 text-[#c5a880]" />
              <span>{BUSINESS_INFO.primaryPhone}</span>
            </a>
            <span className="text-[#4e515d]">·</span>
            <a 
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20NCR%20Home%20Interior,%20I%20would%20like%20to%20consult%20for%20my%20interior%20project%20in%20Bhiwadi.`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:text-[#2fe671] transition-colors flex items-center gap-1 font-medium"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#0e0f12]/90 backdrop-blur-md border-b border-[#252730] py-3.5 shadow-xl' 
            : 'bg-[#0e0f12]/60 backdrop-blur-sm border-b border-[#1f2026] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-[#c5a880] to-[#8d714d] flex items-center justify-center text-[#0e0f12] font-serif font-bold text-xl tracking-wider shadow-md group-hover:scale-105 transition-transform">
              N
            </div>
            <div>
              <div className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#f4efe8] group-hover:text-[#c5a880] transition-colors flex items-center gap-2">
                <span>NCR HOME INTERIOR</span>
              </div>
              <p className="text-[10px] tracking-widest uppercase text-[#9e988e] font-medium">
                Bhiwadi · Gurugram · Turnkey Architecture
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm text-[#cac5bd]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#c5a880] transition-colors font-medium relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#c5a880] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenEstimator}
              className="text-xs font-semibold px-3.5 py-2.5 rounded-sm border border-[#3b3e4a] text-[#ddd8d0] hover:border-[#c5a880] hover:text-[#c5a880] transition-colors"
            >
              Cost Estimator
            </button>
            <button
              onClick={onOpenConsultation}
              className="text-xs font-semibold px-4 py-2.5 rounded-sm bg-[#c5a880] hover:bg-[#d8bd95] text-[#0e0f12] transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <span>Book Site Visit</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenConsultation}
              className="text-xs font-semibold px-3 py-1.5 rounded-sm bg-[#c5a880] text-[#0e0f12]"
            >
              Book Visit
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#ddd8d0] hover:text-[#c5a880]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#121317] border-b border-[#252730] px-4 pt-3 pb-6 space-y-3">
            <div className="grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-sm text-[#cac5bd] hover:text-[#c5a880] hover:bg-[#1a1c22] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[#22242c] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEstimator();
                }}
                className="w-full text-center py-2.5 rounded-sm border border-[#3b3e4a] text-[#ddd8d0] text-sm font-medium"
              >
                Launch Instant Cost Calculator
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full text-center py-2.5 rounded-sm bg-[#c5a880] text-[#0e0f12] text-sm font-bold"
              >
                Schedule Free Site Visit in Bhiwadi
              </button>
              <div className="flex items-center justify-center gap-4 pt-2 text-xs text-[#a09a8f]">
                <a href={`tel:${BUSINESS_INFO.primaryPhoneDigits}`} className="flex items-center gap-1 text-[#c5a880]">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {BUSINESS_INFO.primaryPhone}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

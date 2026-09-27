import { Star, MapPin, Phone, Mail, Clock, ShieldCheck, ExternalLink, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO, BHIWADI_TOWNSHIPS } from '../data/businessData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b0c0e] text-[#a6a094] border-t border-[#1d1f27] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-sm bg-gradient-to-br from-[#c5a880] to-[#8d714d] flex items-center justify-center text-[#0e0f12] font-serif font-bold text-lg">
                N
              </div>
              <div>
                <span className="font-serif text-lg font-bold text-[#f7f3ec] block tracking-tight">
                  NCR HOME INTERIOR
                </span>
                <span className="text-[10px] text-[#868075] uppercase tracking-wider block">
                  Bhiwadi · Turnkey Architecture
                </span>
              </div>
            </div>

            <p className="text-xs text-[#9d978a] leading-relaxed">
              Established in 2014, NCR Home Interior is Bhiwadi's premier interior and architectural execution firm. Transforming residences and corporate environments across Rajasthan & Delhi NCR with factory-crafted precision.
            </p>

            <div className="flex items-center gap-1.5 text-xs text-[#c5a880] pt-1">
              <Star className="w-3.5 h-3.5 fill-[#c5a880]" />
              <strong className="text-[#f7f3ec]">5.0 Rating</strong>
              <span>· 706+ Verified Homeowner Reviews</span>
            </div>

            <div className="pt-2">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#ded9ce] hover:text-[#c5a880] transition-colors underline"
              >
                <span>Google Maps Business Profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-semibold text-[#f7f3ec] uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#portfolio" className="hover:text-[#c5a880] transition-colors">Portfolio Gallery</a></li>
              <li><a href="#services" className="hover:text-[#c5a880] transition-colors">Interior Services</a></li>
              <li><a href="#townships" className="hover:text-[#c5a880] transition-colors">Bhiwadi Townships</a></li>
              <li><a href="#estimator" className="hover:text-[#c5a880] transition-colors">Cost Estimator</a></li>
              <li><a href="#studio" className="hover:text-[#c5a880] transition-colors">Virtual Moodboard</a></li>
              <li><a href="#process" className="hover:text-[#c5a880] transition-colors">Our Process</a></li>
              <li><a href="#reviews" className="hover:text-[#c5a880] transition-colors">Client Reviews</a></li>
              <li><a href="#contact" className="hover:text-[#c5a880] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Bhiwadi Coverage Townships */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-semibold text-[#f7f3ec] uppercase tracking-wider">
              Bhiwadi Societies
            </h4>
            <div className="space-y-2 text-xs">
              {BHIWADI_TOWNSHIPS.map((t) => (
                <div key={t.name} className="flex justify-between items-center text-[#9c9588]">
                  <span>{t.name}</span>
                  <span className="text-[10px] text-[#c5a880] font-medium">{t.units}</span>
                </div>
              ))}
              <div className="text-[11px] text-[#787266] pt-1">
                Also serving Tapukara, Khushkhera, Dharuhera, Neemrana & Gurgaon.
              </div>
            </div>
          </div>

          {/* Direct Contact Info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-semibold text-[#f7f3ec] uppercase tracking-wider">
              Studio Address
            </h4>
            <div className="space-y-2.5 text-xs text-[#a39c90]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                <span>
                  <strong>Bhiwadi:</strong> {BUSINESS_INFO.bhiwadiAddress.primary}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                <span>
                  <strong>Gurgaon:</strong> {BUSINESS_INFO.gurgaonAddress.office}
                </span>
              </div>
              <div className="flex items-center gap-2 pt-1 text-[#ede8df]">
                <Phone className="w-4 h-4 text-[#c5a880] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.primaryPhoneDigits}`} className="hover:text-[#c5a880]">
                  {BUSINESS_INFO.primaryPhone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-[#ede8df]">
                <Mail className="w-4 h-4 text-[#c5a880] shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-[#c5a880]">
                  {BUSINESS_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-[#8b8579]">
                <Clock className="w-4 h-4 text-[#c5a880] shrink-0" />
                <span>{BUSINESS_INFO.workingHours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#1a1c22] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#7a7469]">
          <div>
            © {new Date().getFullYear()} NCR Home Interior. All Rights Reserved. Turnkey Interior Architecture & Execution.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-[#c5a880]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>45-Day Handover Assurance</span>
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#cac4b9] hover:text-[#c5a880] transition-colors p-1"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

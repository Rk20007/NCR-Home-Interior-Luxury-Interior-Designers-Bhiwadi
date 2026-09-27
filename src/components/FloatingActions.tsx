import { Phone, MessageSquare, Calculator, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface FloatingActionsProps {
  onOpenConsultation: () => void;
  onOpenEstimator: () => void;
}

export function FloatingActions({ onOpenConsultation, onOpenEstimator }: FloatingActionsProps) {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20NCR%20Home%20Interior,%20I'd%20like%20to%20inquire%20about%20interior%20design%20services%20in%20Bhiwadi.`;

  return (
    <>
      {/* Floating Bottom Action Bar for Mobile Devices */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0e1014]/95 backdrop-blur-md border-t border-[#252835] p-2.5 sm:hidden flex items-center justify-between gap-2 shadow-2xl">
        <a
          href={`tel:${BUSINESS_INFO.primaryPhoneDigits}`}
          className="flex-1 py-2.5 rounded-sm bg-[#1c1e28] text-[#f7f3ec] text-xs font-medium flex items-center justify-center gap-1.5 border border-[#2b2e3c]"
        >
          <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
          <span>Call Now</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 rounded-sm bg-[#25D366] text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-md"
        >
          <MessageSquare className="w-3.5 h-3.5 fill-white" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenConsultation}
          className="flex-1 py-2.5 rounded-sm bg-[#c5a880] text-[#0e0f12] text-xs font-bold flex items-center justify-center gap-1 shadow-md"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Free Visit</span>
        </button>
      </div>

      {/* Floating WhatsApp Bubble for Desktop */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-3">
        <button
          onClick={onOpenEstimator}
          className="px-3.5 py-2 rounded-full bg-[#161822]/90 hover:bg-[#1f2230] text-[#ded9ce] hover:text-[#c5a880] border border-[#2b2e3c] text-xs font-medium flex items-center gap-2 shadow-xl backdrop-blur-md transition-all hover:scale-105"
        >
          <Calculator className="w-4 h-4 text-[#c5a880]" />
          <span>Calculate Budget</span>
        </button>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5c] text-white font-semibold text-xs flex items-center gap-2 shadow-2xl transition-all hover:scale-105 group"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-4 h-4 fill-white" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300">
            Chat on WhatsApp
          </span>
          <span className="text-[11px] font-bold">5.0 ★</span>
        </a>
      </div>
    </>
  );
}

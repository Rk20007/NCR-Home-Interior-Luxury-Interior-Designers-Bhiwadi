import { useState } from 'react';
import { X, Send, CheckCircle2, Phone, Calendar, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

export function ConsultationModal({ isOpen, onClose, defaultTopic }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    society: 'Ashiana Town',
    bhk: '3 BHK',
    notes: defaultTopic || ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = `Hi NCR Home Interior, I'd like to book a site visit for my ${formData.bhk} in ${formData.society}, Bhiwadi. Topic: ${defaultTopic || 'Turnkey interior design'}.`;
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0b0e]/85 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-[#14161f] border border-[#2d303f] rounded-sm p-6 sm:p-7 shadow-2xl space-y-5">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-[#9a9488] hover:text-[#f7f3ec] transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#172b1b] border border-[#25d366]/40 text-[#25d366] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-2xl text-[#f7f3ec] font-normal">
              Booking Confirmed!
            </h3>
            <p className="text-xs text-[#aba59a] leading-relaxed">
              Our Bhiwadi project lead will reach out to <strong className="text-[#f7f3ec]">{formData.phone}</strong> shortly to align the exact time slot for your site visit.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={handleWhatsApp}
                className="w-full py-2.5 rounded-sm bg-[#25D366] text-white text-xs font-semibold flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-white" />
                <span>Continue on WhatsApp</span>
              </button>
              <button
                onClick={onClose}
                className="w-full py-2 rounded-sm border border-[#383b4b] text-[#ccc6bb] text-xs"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#c5a880] font-semibold">
                Direct Appointment
              </span>
              <h3 className="font-serif text-2xl text-[#f7f3ec] font-normal mt-0.5">
                Book Free Site Inspection
              </h3>
              <p className="text-xs text-[#9d978a] mt-1">
                Laser measurements, layout discussion, and itemized quotation.
              </p>
            </div>

            {defaultTopic && (
              <div className="p-2.5 rounded-sm bg-[#1a1c26] border border-[#2c2f3f] text-xs text-[#c5a880]">
                <strong>Selected Requirement:</strong> {defaultTopic}
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-xs text-[#ded9ce] font-medium block">Your Name *</label>
              <input
                type="text"
                required
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-sm bg-[#191b24] border border-[#2b2e3c] text-xs text-[#f7f3ec] focus:outline-none focus:border-[#c5a880]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-[#ded9ce] font-medium block">Phone Number *</label>
              <input
                type="tel"
                required
                placeholder="10-digit mobile number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-sm bg-[#191b24] border border-[#2b2e3c] text-xs text-[#f7f3ec] focus:outline-none focus:border-[#c5a880]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-xs text-[#ded9ce] font-medium block">Society</label>
                <select
                  value={formData.society}
                  onChange={(e) => setFormData({ ...formData, society: e.target.value })}
                  className="w-full px-3 py-2 rounded-sm bg-[#191b24] border border-[#2b2e3c] text-xs text-[#f7f3ec] focus:outline-none focus:border-[#c5a880]"
                >
                  <option value="Ashiana Town">Ashiana Town</option>
                  <option value="Ashiana Angan">Ashiana Angan</option>
                  <option value="Omaxe Panorama">Omaxe Panorama</option>
                  <option value="Nimai Greens">Nimai Greens</option>
                  <option value="Ashiana Village">Ashiana Village</option>
                  <option value="Krish City">Krish City</option>
                  <option value="Other Bhiwadi Society">Other Bhiwadi</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-[#ded9ce] font-medium block">Type</label>
                <select
                  value={formData.bhk}
                  onChange={(e) => setFormData({ ...formData, bhk: e.target.value })}
                  className="w-full px-3 py-2 rounded-sm bg-[#191b24] border border-[#2b2e3c] text-xs text-[#f7f3ec] focus:outline-none focus:border-[#c5a880]"
                >
                  <option value="2 BHK">2 BHK</option>
                  <option value="3 BHK">3 BHK</option>
                  <option value="4 BHK">4 BHK</option>
                  <option value="Villa">Villa / Kothi</option>
                  <option value="Commercial">Office / Studio</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-sm bg-[#c5a880] hover:bg-[#d8bd95] text-[#0e0f12] font-semibold text-xs transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Schedule Free Inspection</span>
              </button>
            </div>

            <div className="text-center">
              <a
                href={`tel:${BUSINESS_INFO.primaryPhoneDigits}`}
                className="text-[11px] text-[#c5a880] hover:underline"
              >
                Or call immediately: {BUSINESS_INFO.primaryPhone}
              </a>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}

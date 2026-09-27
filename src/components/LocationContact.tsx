import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, ExternalLink, Calendar, Building } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface LocationContactProps {
  initialPreFill?: string;
}

export function LocationContact({ initialPreFill }: LocationContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    society: 'Ashiana Town',
    bhk: '3 BHK',
    service: 'Full Home Turnkey Interior',
    date: '',
    notes: initialPreFill || ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone || !formData.name) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hello NCR Home Interior, I'm ${formData.name || 'a homeowner'} interested in interior design for my ${formData.bhk} in ${formData.society}, Bhiwadi. Please get in touch.`;
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-[#111216] border-t border-[#20222a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#c5a880] font-semibold">
            <MapPin className="w-3.5 h-3.5" />
            <span>Studio Locations & Site Visits</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#f7f3ec]">
            Visit Us or Book a Free Site Assessment
          </h2>
          <p className="text-[#a49e92] text-sm sm:text-base leading-relaxed">
            Our interior architects are available for on-site laser measurements and design discussions anywhere in Bhiwadi, Dharuhera, Tapukara, or Gurgaon.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Business Info & Locations */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Bhiwadi Primary Office Card */}
            <div className="p-6 rounded-sm bg-[#14161f] border border-[#262835] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-[#c5a880] font-semibold">
                  Main Studio · Bhiwadi
                </span>
                <span className="text-[10px] text-[#25D366] font-semibold bg-[#122818] px-2 py-0.5 rounded-sm">
                  Open Today
                </span>
              </div>

              <div>
                <h3 className="font-serif text-xl text-[#f7f3ec] font-normal">
                  NCR Home Interior Studio
                </h3>
                <p className="text-xs text-[#b8b2a7] mt-1 leading-relaxed">
                  {BUSINESS_INFO.bhiwadiAddress.primary}
                </p>
                <p className="text-[11px] text-[#868075] mt-0.5">
                  Secondary Location: {BUSINESS_INFO.bhiwadiAddress.secondary}
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#20222c] text-xs">
                <div className="flex items-center gap-2.5 text-[#ddd8cf]">
                  <Phone className="w-4 h-4 text-[#c5a880] shrink-0" />
                  <a href={`tel:${BUSINESS_INFO.primaryPhoneDigits}`} className="hover:text-[#c5a880] transition-colors">
                    {BUSINESS_INFO.primaryPhone} / {BUSINESS_INFO.secondaryPhone}
                  </a>
                </div>
                <div className="flex items-center gap-2.5 text-[#ddd8cf]">
                  <Mail className="w-4 h-4 text-[#c5a880] shrink-0" />
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-[#c5a880] transition-colors">
                    {BUSINESS_INFO.email}
                  </a>
                </div>
                <div className="flex items-center gap-2.5 text-[#ddd8cf]">
                  <Clock className="w-4 h-4 text-[#c5a880] shrink-0" />
                  <span>{BUSINESS_INFO.workingHours}</span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-sm bg-[#1c1e28] hover:bg-[#252836] text-[#ded8ce] hover:text-[#c5a880] text-xs font-medium border border-[#303342] transition-colors flex items-center justify-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <button
                  onClick={handleWhatsAppDirect}
                  className="py-2.5 px-3 rounded-sm bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-white" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Gurgaon Branch Office Card */}
            <div className="p-6 rounded-sm bg-[#14161f] border border-[#262835] space-y-3">
              <span className="text-xs uppercase tracking-wider text-[#c5a880] font-semibold">
                Branch Studio · Gurgaon
              </span>
              <div>
                <h4 className="font-serif text-lg text-[#f7f3ec] font-normal">
                  Gurgaon Operations Hub
                </h4>
                <p className="text-xs text-[#b8b2a7] mt-1 leading-relaxed">
                  {BUSINESS_INFO.gurgaonAddress.office}
                </p>
                <div className="text-[11px] text-[#868075] mt-1">
                  Serving: {BUSINESS_INFO.gurgaonAddress.serviceArea}
                </div>
              </div>
            </div>

            {/* Service Coverage List */}
            <div className="p-5 rounded-sm bg-[#14161f] border border-[#262835]">
              <span className="text-[10px] uppercase font-semibold text-[#8c867a] tracking-wider block mb-2">
                Active Service Coverage Areas
              </span>
              <div className="flex flex-wrap gap-2 text-xs">
                {BUSINESS_INFO.serviceCities.map((city) => (
                  <span
                    key={city}
                    className="px-2.5 py-1 rounded-sm bg-[#181a23] border border-[#262836] text-[#ded8cf]"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Interactive Booking Form */}
          <div className="lg:col-span-7 bg-[#14161f] border border-[#2b2e3c] rounded-sm p-6 sm:p-8 shadow-2xl">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#182a1c] border border-[#25d366]/40 text-[#25d366] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#f7f3ec] font-normal">
                  Consultation Request Received!
                </h3>
                <p className="text-xs sm:text-sm text-[#b5afa4] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#f7f3ec]">{formData.name}</strong>. Our senior interior architect for <strong className="text-[#c5a880]">{formData.society}, Bhiwadi</strong> will call you within 30 minutes at <strong className="text-[#f7f3ec]">{formData.phone}</strong> to confirm your site visit.
                </p>
                
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="w-full sm:w-auto px-5 py-3 rounded-sm bg-[#25D366] text-white text-xs font-semibold flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Chat Directly on WhatsApp Now</span>
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto px-4 py-3 rounded-sm border border-[#3b3e4e] text-[#ccc6bb] text-xs font-medium hover:border-[#c5a880]"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#c5a880] font-semibold">
                    Free Consultation & Laser Measurement
                  </span>
                  <h3 className="font-serif text-2xl text-[#f7f3ec] font-normal mt-0.5">
                    Schedule Your Free 3D Design Session
                  </h3>
                  <p className="text-xs text-[#9c9689] mt-1">
                    No obligation. Get our expert floor plan review and transparent itemized quote.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-[#ded9ce] font-medium block">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-sm bg-[#181a24] border border-[#2b2e3c] text-xs sm:text-sm text-[#f7f3ec] placeholder-[#6b665c] focus:outline-none focus:border-[#c5a880]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-[#ded9ce] font-medium block">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98114 12345"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-sm bg-[#181a24] border border-[#2b2e3c] text-xs sm:text-sm text-[#f7f3ec] placeholder-[#6b665c] focus:outline-none focus:border-[#c5a880]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-[#ded9ce] font-medium block">
                      Society / Township in Bhiwadi
                    </label>
                    <select
                      value={formData.society}
                      onChange={(e) => setFormData({ ...formData, society: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-sm bg-[#181a24] border border-[#2b2e3c] text-xs sm:text-sm text-[#f7f3ec] focus:outline-none focus:border-[#c5a880]"
                    >
                      <option value="Ashiana Town">Ashiana Town (Bhiwadi)</option>
                      <option value="Ashiana Angan">Ashiana Angan (Bhiwadi)</option>
                      <option value="Omaxe Panorama City">Omaxe Panorama City</option>
                      <option value="Nimai Greens">Nimai Greens (Bhiwadi)</option>
                      <option value="Ashiana Village">Ashiana Village (Bhiwadi)</option>
                      <option value="Ashiana Tarang">Ashiana Tarang (Bhiwadi)</option>
                      <option value="Ashiana Garden">Ashiana Garden / Bageecha</option>
                      <option value="Krish City">Krish City (Bhiwadi)</option>
                      <option value="Krish Icon / Aura">Krish Icon / Aura</option>
                      <option value="Terra City / Heritage">Terra City / Heritage</option>
                      <option value="Dharuhera Society">Society in Dharuhera</option>
                      <option value="Gurgaon / Manesar">Apartment in Gurgaon / Manesar</option>
                      <option value="Other Location">Other Location in NCR</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-[#ded9ce] font-medium block">
                      Property Configuration
                    </label>
                    <select
                      value={formData.bhk}
                      onChange={(e) => setFormData({ ...formData, bhk: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-sm bg-[#181a24] border border-[#2b2e3c] text-xs sm:text-sm text-[#f7f3ec] focus:outline-none focus:border-[#c5a880]"
                    >
                      <option value="1 BHK">1 BHK Apartment</option>
                      <option value="2 BHK">2 BHK Apartment</option>
                      <option value="3 BHK">3 BHK Apartment</option>
                      <option value="4 BHK">4 BHK Apartment / Penthouse</option>
                      <option value="Independent Villa">Independent Villa / Kothi</option>
                      <option value="Commercial Office">Commercial / Retail Office</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-[#ded9ce] font-medium block">
                      Scope of Work
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-sm bg-[#181a24] border border-[#2b2e3c] text-xs sm:text-sm text-[#f7f3ec] focus:outline-none focus:border-[#c5a880]"
                    >
                      <option value="Full Home Turnkey Interior">Full Home Turnkey Interior</option>
                      <option value="Modular Kitchen & Wardrobes">Modular Kitchen & Wardrobes</option>
                      <option value="Living Room & False Ceiling">Living Room & False Ceiling</option>
                      <option value="Complete Home Renovation">Complete Home Renovation</option>
                      <option value="Commercial Office Fit-Out">Commercial Office Fit-Out</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-[#ded9ce] font-medium block">
                      Preferred Date for Site Visit
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-sm bg-[#181a24] border border-[#2b2e3c] text-xs sm:text-sm text-[#f7f3ec] focus:outline-none focus:border-[#c5a880]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-[#ded9ce] font-medium block">
                    Any Specific Requirements or Notes
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Need high-gloss acrylic kitchen, moving in next month..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-sm bg-[#181a24] border border-[#2b2e3c] text-xs sm:text-sm text-[#f7f3ec] placeholder-[#6b665c] focus:outline-none focus:border-[#c5a880]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-4 rounded-sm bg-[#c5a880] hover:bg-[#d8bd95] text-[#0e0f12] font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 shadow-lg disabled:opacity-60"
                  >
                    {loading ? (
                      <span>Submitting Request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Confirm Free Site Visit & 3D Consultation</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-center text-[#7e786e] mt-2">
                    🔒 We respect your privacy. No spam. You will only receive calls regarding your project.
                  </p>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

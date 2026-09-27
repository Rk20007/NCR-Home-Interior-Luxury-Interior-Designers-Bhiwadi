import { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { SERVICES_LIST, ServiceItem } from '../data/businessData';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES_LIST[0].id);

  const activeService = SERVICES_LIST.find((s) => s.id === selectedServiceId) || SERVICES_LIST[0];

  return (
    <section id="services" className="py-24 bg-[#0d0e11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#c5a880] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Full-Spectrum Interior Solutions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#f7f3ec]">
            Architectural Excellence for Every Space
          </h2>
          <p className="text-[#a49e92] text-sm sm:text-base leading-relaxed">
            From single modular kitchen renovations to comprehensive turnkey home & corporate fit-outs across Bhiwadi, Dharuhera, and Gurgaon.
          </p>
        </div>

        {/* Master-Detail Interactive Service Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Services Selector List */}
          <div className="lg:col-span-5 space-y-2.5">
            {SERVICES_LIST.map((service) => {
              const isSelected = service.id === selectedServiceId;
              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`p-4 rounded-sm border cursor-pointer transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#181a23] border-[#c5a880] text-[#f7f3ec] shadow-lg'
                      : 'bg-[#12141a] border-[#20222b] text-[#9f998d] hover:border-[#333644] hover:text-[#ded8cf]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-sm bg-[#1e202a] border border-[#2d303f] flex items-center justify-center shrink-0 p-2">
                      <img
                        src={service.iconImage}
                        alt=""
                        className="w-full h-full object-contain filter invert opacity-80"
                      />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-semibold text-[#c5a880] tracking-wider">
                        {service.category}
                      </div>
                      <h3 className="font-serif text-base sm:text-lg font-normal text-[#f7f3ec]">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-[#c5a880] translate-x-1' : 'text-[#505464]'}`} />
                </div>
              );
            })}
          </div>

          {/* Active Service Detailed Card */}
          <div className="lg:col-span-7 bg-[#14161f] border border-[#262835] rounded-sm overflow-hidden shadow-2xl flex flex-col justify-between">
            
            {/* Banner Image */}
            <div className="relative aspect-[16/9] overflow-hidden bg-[#181a24]">
              <img
                src={activeService.bannerImage}
                alt={activeService.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14161f] via-transparent to-transparent" />
              <div className="absolute top-4 left-4 bg-[#0d0e11]/85 backdrop-blur-md px-3 py-1 rounded-sm border border-[#2d303d] text-xs text-[#c5a880] font-semibold uppercase tracking-wider">
                {activeService.category}
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#f7f3ec] font-normal">
                  {activeService.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#b5afa4] leading-relaxed mt-2">
                  {activeService.fullDesc}
                </p>
              </div>

              {/* Highlights & Guarantees */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-[#c5a880] font-semibold mb-3">
                  Service Highlights & Standards
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                  {activeService.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[#ddd8cd]">
                      <CheckCircle2 className="w-4 h-4 text-[#c5a880] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-[#c5a880] font-semibold mb-3">
                  Key Scope Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#a19a8e]">
                  {activeService.deliverables.map((deliv, idx) => (
                    <div key={idx} className="p-2.5 rounded-sm bg-[#191b24] border border-[#232530] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
                      <span className="text-[#ede8df]">{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[#232530] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#8c867b]">
                  Free 3D layout consultation available for Bhiwadi residents
                </div>
                <button
                  onClick={() => onSelectService(activeService)}
                  className="w-full sm:w-auto px-5 py-3 rounded-sm bg-[#c5a880] hover:bg-[#d8bd95] text-[#0e0f12] text-xs font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <span>Book Consultation for This Service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

import { useState } from 'react';
import { Building, MapPin, CheckCircle, ArrowRight, ShieldCheck, Home } from 'lucide-react';
import { BHIWADI_TOWNSHIPS } from '../data/businessData';

interface TownshipSpotlightProps {
  onSelectTownship: (townshipName: string) => void;
}

export function TownshipSpotlight({ onSelectTownship }: TownshipSpotlightProps) {
  const [activeTab, setActiveTab] = useState(0);

  const activeTownship = BHIWADI_TOWNSHIPS[activeTab];

  return (
    <section id="townships" className="py-20 bg-[#111216] border-y border-[#20222a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a880] font-semibold">
              <MapPin className="w-3.5 h-3.5" />
              <span>Proven Local Track Record in Bhiwadi</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#f7f3ec]">
              Trusted in Bhiwadi’s Premier Townships
            </h2>
            <p className="text-[#a59f93] text-sm sm:text-base max-w-2xl">
              Having furnished over 500+ apartments in these specific residential communities, we know the exact floor plans, utility layouts, and society guidelines.
            </p>
          </div>

          <div className="text-left md:text-right shrink-0">
            <div className="text-2xl sm:text-3xl font-serif text-[#c5a880] font-bold">550+ Units</div>
            <div className="text-xs text-[#9c968a]">Delivered in Top 6 Bhiwadi Townships</div>
          </div>
        </div>

        {/* Interactive Society Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
          {BHIWADI_TOWNSHIPS.map((item, idx) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(idx)}
              className={`text-left p-3.5 rounded-sm border transition-all ${
                activeTab === idx
                  ? 'bg-[#181a22] border-[#c5a880] text-[#f7f3ec] shadow-lg'
                  : 'bg-[#13151b] border-[#22242e] text-[#a19a8d] hover:border-[#383b49] hover:text-[#e4ded5]'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <Building className={`w-3.5 h-3.5 ${activeTab === idx ? 'text-[#c5a880]' : 'text-[#6e685f]'}`} />
                <span className="text-[11px] font-semibold text-[#c5a880]">{item.units}</span>
              </div>
              <div className="font-medium text-xs sm:text-sm truncate">{item.name}</div>
            </button>
          ))}
        </div>

        {/* Selected Township Detailed Card */}
        <div className="rounded-sm border border-[#262833] bg-[#14161d] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Visual Photo from that Township */}
            <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[400px]">
              <img
                src={activeTownship.img}
                alt={`${activeTownship.name} Bhiwadi Interior Project`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14161d] via-transparent to-transparent lg:hidden" />
              <div className="absolute top-4 left-4 bg-[#0d0e11]/85 backdrop-blur-md px-3 py-1.5 rounded-sm border border-[#2b2e3a] text-xs text-[#ede8de] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>{activeTownship.name}, Bhiwadi</span>
              </div>
            </div>

            {/* Township Details & Ready Floorplan CTA */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-wider text-[#c5a880] font-semibold">
                    Completed Deliveries
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#f7f3ec] font-normal">
                    {activeTownship.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#c5a880] font-medium">
                    {activeTownship.highlight}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#b2aca1] leading-relaxed">
                  We have turnkey experience with the exact structural columns, duct shafts, kitchen plumbing points, and false ceiling heights across {activeTownship.name}. That means zero measurement errors and 15% faster completion.
                </p>

                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-2 text-xs text-[#ddd8cf]">
                    <CheckCircle className="w-4 h-4 text-[#c5a880] shrink-0" />
                    <span>Pre-measured 2 BHK & 3 BHK 3D model templates ready</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#ddd8cf]">
                    <CheckCircle className="w-4 h-4 text-[#c5a880] shrink-0" />
                    <span>Authorized contractor pass & society NOC management</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#ddd8cf]">
                    <CheckCircle className="w-4 h-4 text-[#c5a880] shrink-0" />
                    <span>Live client flats available for quality inspection in society</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#ddd8cf]">
                    <ShieldCheck className="w-4 h-4 text-[#c5a880] shrink-0" />
                    <span>On-time completion backed by daily WhatsApp logs</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#232530] space-y-3">
                <button
                  onClick={() => onSelectTownship(activeTownship.name)}
                  className="w-full py-3 px-4 rounded-sm bg-[#c5a880] hover:bg-[#d8bd95] text-[#0e0f12] font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Home className="w-4 h-4" />
                  <span>Get Ready Quote for My Flat in {activeTownship.name}</span>
                </button>
                <p className="text-center text-[11px] text-[#8c867b]">
                  Live in another society in Bhiwadi or Dharuhera? We serve all major societies across the Alwar bypass corridor.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

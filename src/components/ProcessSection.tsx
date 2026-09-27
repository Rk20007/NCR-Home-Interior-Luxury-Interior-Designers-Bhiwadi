import { Clock, ShieldCheck, Factory, Award, ArrowRight } from 'lucide-react';
import { WORKFLOW_STEPS, MATERIAL_BRANDS } from '../data/businessData';

interface ProcessSectionProps {
  onOpenConsultation: () => void;
}

export function ProcessSection({ onOpenConsultation }: ProcessSectionProps) {
  return (
    <section id="process" className="py-24 bg-[#111216] border-y border-[#20222a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#c5a880] font-semibold">
            <Clock className="w-3.5 h-3.5" />
            <span>Structured Turnkey Methodology</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#f7f3ec]">
            The 5-Stage Seamless Journey
          </h2>
          <p className="text-[#a49e92] text-sm sm:text-base leading-relaxed">
            Eliminating client anxiety with structured milestone tracking, daily WhatsApp logs, and our binding 45-day handover guarantee.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-20">
          {WORKFLOW_STEPS.map((stepItem, idx) => (
            <div
              key={stepItem.step}
              className="relative p-6 rounded-sm bg-[#14161f] border border-[#22242e] flex flex-col justify-between space-y-4 hover:border-[#c5a880]/50 transition-colors group"
            >
              <div>
                <div className="font-serif text-3xl font-light text-[#c5a880] group-hover:scale-110 transition-transform origin-left">
                  {stepItem.step}
                </div>
                <h3 className="font-serif text-lg font-normal text-[#f7f3ec] mt-3">
                  {stepItem.title}
                </h3>
                <p className="text-xs text-[#9e978b] leading-relaxed mt-2">
                  {stepItem.desc}
                </p>
              </div>

              {idx < WORKFLOW_STEPS.length - 1 && (
                <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-[#3a3d4d]">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Factory vs Traditional Carpentry Comparison Card */}
        <div className="rounded-sm border border-[#272935] bg-[#14161f] p-6 sm:p-8 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#c5a880] font-semibold">
                <Factory className="w-4 h-4" />
                <span>In-House Precision Unit</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#f7f3ec] font-normal">
                Why Factory Finish Matters
              </h3>
              <p className="text-xs sm:text-sm text-[#a39c90] leading-relaxed">
                Traditional carpenters working at home create dust for months, uneven edges, and loose screws. Our computerized German machinery ensures zero chipping and airtight edge bonding.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-sm bg-[#171922] border border-[#2b2e3b] space-y-2">
                <span className="text-[10px] uppercase font-bold text-[#c5a880] tracking-wider block">
                  NCR Factory Engineered
                </span>
                <ul className="space-y-1.5 text-xs text-[#ded9d0]">
                  <li className="flex items-center gap-2">✓ German PUR Waterproof Edge Banding</li>
                  <li className="flex items-center gap-2">✓ 0.1mm CNC Automated Precision Cutting</li>
                  <li className="flex items-center gap-2">✓ 85% Pre-built; Only 7-10 Days On-Site Fitment</li>
                  <li className="flex items-center gap-2">✓ 10-Year Formal Factory Warranty</li>
                </ul>
              </div>

              <div className="p-4 rounded-sm bg-[#171922] border border-[#2b2e3b] space-y-2">
                <span className="text-[10px] uppercase font-bold text-[#e06c75] tracking-wider block">
                  Traditional Site Carpentry
                </span>
                <ul className="space-y-1.5 text-xs text-[#9a9387]">
                  <li className="flex items-center gap-2">✗ Hand-glued tape; peels off within 2 years</li>
                  <li className="flex items-center gap-2">✗ Hand saw cutting; wavy, visible gaps</li>
                  <li className="flex items-center gap-2">✗ 3-4 months of dust, noise & sawdust at home</li>
                  <li className="flex items-center gap-2">✗ No warranty once the carpenter leaves</li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* Certified Material Partners */}
        <div>
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest text-[#c5a880] font-semibold block">
              100% Genuine Certified Hardware & Materials
            </span>
            <h3 className="font-serif text-2xl text-[#f7f3ec] font-normal mt-1">
              Global Brands You Can Trust
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {MATERIAL_BRANDS.map((b) => (
              <div
                key={b.name}
                className="p-3 rounded-sm bg-[#151720] border border-[#22242e] text-center hover:border-[#c5a880] transition-colors"
              >
                <div className="font-serif text-sm font-semibold text-[#f7f3ec]">{b.name}</div>
                <div className="text-[10px] text-[#c5a880] font-medium">{b.category}</div>
                <div className="text-[9px] text-[#716c63] mt-0.5">{b.origin}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-[#c5a880] hover:bg-[#d8bd95] text-[#0e0f12] font-semibold text-xs transition-colors"
            >
              <span>Schedule Free Site Assessment & Material Walkthrough</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

import { Star, ShieldCheck, ArrowRight, Sparkles, Building2, Clock, CheckCircle2, PhoneCall } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface HeroProps {
  onOpenConsultation: () => void;
  onOpenEstimator: () => void;
}

export function Hero({ onOpenConsultation, onOpenEstimator }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-8 pb-16 lg:py-24">
      {/* Background Architectural Atmosphere */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://www.ncrhomeinterior.com/public/storage/banners/banner_1754416229_6892446591fed.jpg"
          alt="NCR Home Interior Luxury Architecture"
          className="w-full h-full object-cover object-center brightness-[0.32] scale-105 transform motion-safe:animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e11] via-[#0d0e11]/80 to-transparent" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0d0e11]/40 to-[#0d0e11]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Architectural Kicker (Unboxed discipline) */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs uppercase tracking-widest text-[#c5a880] font-semibold">
              <span>Bhiwadi & NCR's Premier Interior Studio</span>
              <span className="text-[#555866]">·</span>
              <span>Est. 2014</span>
              <span className="text-[#555866]">·</span>
              <span className="text-[#e2ded6] flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-[#c5a880] text-[#c5a880]" />
                5.0 Rating (706+ Reviews)
              </span>
            </div>

            {/* Editorial Serif Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#f7f3ec] leading-[1.15]">
              Timeless Living Spaces, <br className="hidden sm:inline" />
              <span className="italic font-light text-[#c5a880]">Turnkey Precision</span> in Bhiwadi.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#b8b2a8] max-w-2xl font-normal leading-relaxed">
              Transforming apartments, luxury villas, and corporate offices across Bhiwadi, Dharuhera, and Gurgaon. 
              Enjoy German-engineered modular kitchens, bespoke woodwork, and our signature <strong className="text-[#f7f3ec] font-semibold">45-day guaranteed handover</strong>.
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 rounded-sm bg-[#c5a880] hover:bg-[#d8bd95] text-[#0e0f12] font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-[#c5a880]/10 hover:-translate-y-0.5"
              >
                <span>Book Free Site Visit & 3D Layout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenEstimator}
                className="px-5 py-3.5 rounded-sm border border-[#3d404d] hover:border-[#c5a880] text-[#ece7df] hover:text-[#c5a880] font-medium text-sm transition-all bg-[#14151a]/80 backdrop-blur-sm flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#c5a880]" />
                <span>Instant Cost Calculator</span>
              </button>

              <a
                href={`tel:${BUSINESS_INFO.primaryPhoneDigits}`}
                className="px-4 py-3.5 rounded-sm border border-transparent hover:border-[#2a2d36] text-[#c5a880] hover:bg-[#1a1b22] font-medium text-sm transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{BUSINESS_INFO.primaryPhone}</span>
              </a>
            </div>

            {/* Micro guarantees list */}
            <div className="pt-3 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-[#a0998f] border-t border-[#23252d]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c5a880] shrink-0" />
                <span>45-Day Handover Or Penalty</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#c5a880] shrink-0" />
                <span>10-Year Hardware Warranty</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Building2 className="w-4 h-4 text-[#c5a880] shrink-0" />
                <span>100% In-House Factory Unit</span>
              </div>
            </div>

          </div>

          {/* Right Visual Floating Feature Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-sm overflow-hidden border border-[#2b2d38] bg-[#12141a]/90 backdrop-blur-md p-5 sm:p-6 shadow-2xl space-y-5">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-[#22242e] pb-4">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#c5a880] font-semibold">
                    Featured Bhiwadi Project
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#f7f3ec]">
                    Ashiana Town Signature Residence
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#9d978d] block">Execution</span>
                  <span className="text-xs font-semibold text-[#c5a880]">38 Days (On-Time)</span>
                </div>
              </div>

              {/* Real Project Visual */}
              <div className="relative aspect-[16/10] rounded-sm overflow-hidden group">
                <img
                  src="https://www.ncrhomeinterior.com/public/storage/projects/project_1754046264_688c9f38b6db8.jpg"
                  alt="Ashiana Town Bhiwadi Interior Design"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-2.5 left-2.5 bg-[#0d0e11]/85 backdrop-blur-sm px-2.5 py-1 text-[11px] text-[#f4efe8] rounded-sm border border-[#282a34]">
                  55+ Units Delivered in Ashiana Town
                </div>
              </div>

              {/* Quick Spec Highlights */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-2.5 rounded-sm bg-[#161820] border border-[#222530]">
                  <span className="text-[#88837a] block text-[10px] uppercase">Kitchen Finish</span>
                  <strong className="text-[#ede8df] font-medium">High-Gloss Acrylic & Quartz</strong>
                </div>
                <div className="p-2.5 rounded-sm bg-[#161820] border border-[#222530]">
                  <span className="text-[#88837a] block text-[10px] uppercase">Core Plywood</span>
                  <strong className="text-[#ede8df] font-medium">BWP Marine Grade (Greenply)</strong>
                </div>
              </div>

              {/* Quote from this client */}
              <div className="text-xs text-[#a39c90] italic border-l-2 border-[#c5a880] pl-3 py-1">
                "NCR Home Interior gave us the exact luxury finish they promised in 3D renders. Clean installation and transparent pricing."
                <div className="not-italic text-[11px] text-[#ddd7cd] font-medium mt-1">
                  — Rajesh S., Ashiana Town Bhiwadi
                </div>
              </div>

              <div className="pt-1">
                <a
                  href="#townships"
                  className="w-full py-2.5 rounded-sm border border-[#3b3e4c] hover:border-[#c5a880] text-[#ded8cf] hover:text-[#c5a880] text-xs font-medium transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Explore 55+ Societies in Bhiwadi</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Subtle Bottom Architectural Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-[#1d1f27] bg-[#0c0d10]/90 backdrop-blur-md hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between text-xs text-[#a19a8e]">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#c5a880]" />
            <span><strong className="text-[#f4efe8]">10+ Years</strong> of Craftsmanship (Since 2014)</span>
          </div>
          <span className="text-[#2c2f3b]">|</span>
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-[#c5a880]" />
            <span><strong className="text-[#f4efe8]">1,200+ Homes</strong> Furnished in NCR</span>
          </div>
          <span className="text-[#2c2f3b]">|</span>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#c5a880]" />
            <span><strong className="text-[#f4efe8]">45-Day Delivery</strong> With Penalty Clause</span>
          </div>
          <span className="text-[#2c2f3b]">|</span>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 fill-[#c5a880] text-[#c5a880]" />
            <span><strong className="text-[#f4efe8]">5.0 Star Rating</strong> Across 706+ Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}

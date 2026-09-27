import { useState, useMemo } from 'react';
import { Calculator, Check, ArrowRight, MessageSquare, ShieldCheck, Sparkles, HelpCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface CostEstimatorProps {
  onOpenBookingWithEstimate: (details: string) => void;
}

export function CostEstimator({ onOpenBookingWithEstimate }: CostEstimatorProps) {
  const [propertyType, setPropertyType] = useState<'1bhk' | '2bhk' | '3bhk' | '4bhk' | 'villa' | 'commercial'>('3bhk');
  const [packageTier, setPackageTier] = useState<'essential' | 'signature' | 'royal'>('signature');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    'quartz',
    'fluted',
    'smart-lights'
  ]);

  const propertyOptions = [
    { id: '1bhk', label: '1 BHK', subtitle: '450 - 650 sq ft', baseMultiplier: 0.65 },
    { id: '2bhk', label: '2 BHK', subtitle: '850 - 1150 sq ft', baseMultiplier: 0.85 },
    { id: '3bhk', label: '3 BHK', subtitle: '1350 - 1800 sq ft', baseMultiplier: 1.0 },
    { id: '4bhk', label: '4 BHK', subtitle: '2100 - 2800 sq ft', baseMultiplier: 1.45 },
    { id: 'villa', label: 'Independent Villa', subtitle: '3000+ sq ft', baseMultiplier: 1.9 },
    { id: 'commercial', label: 'Commercial Office', subtitle: '1500 - 3500 sq ft', baseMultiplier: 1.2 },
  ];

  const packages = [
    {
      id: 'essential',
      name: 'Essential Craft',
      rate: '₹ 850 - ₹ 1,100 / sq ft',
      desc: 'High-quality durable finishes for rental or budget-conscious family homes.',
      features: [
        'Commercial MR Grade Plywood (Century/Greenply)',
        '0.8mm Anti-scratch Laminate Finishes',
        'Hettich Soft-Close Hinges & Channels',
        'Perimeter False Ceiling with LED Strips',
        'Asian Paints Tractor Emulsion finish',
        '5-Year Hardware Warranty'
      ],
      baseCost: 520000
    },
    {
      id: 'signature',
      name: 'Signature Elegance',
      badge: 'Most Popular in Bhiwadi',
      rate: '₹ 1,350 - ₹ 1,750 / sq ft',
      desc: 'Our flagship turnkey package for modern apartments in Ashiana & Omaxe.',
      features: [
        '100% Calibrated BWP Marine Ply (Waterproof)',
        'Anti-fingerprint High-Gloss Acrylic / PU Finish',
        'Hafele / Blum Tandem Box Soft-Close Drawers',
        'Multi-Tier Cove False Ceiling with Magnetic Tracks',
        'Asian Paints Royale Luxury Velvet Emulsion',
        '10-Year Comprehensive Hardware Warranty'
      ],
      baseCost: 890000
    },
    {
      id: 'royal',
      name: 'Royal Bespoke Luxury',
      rate: '₹ 2,100 - ₹ 2,900 / sq ft',
      desc: 'Ultra-luxurious bespoke villa and penthouse architecture with imported materials.',
      features: [
        'Imported Birch Plywood & Natural Wood Veneers',
        'Italian PU Matte Lacquer & Statuario Marble Inlays',
        'Blum Motorized Lift-Up & Sensor Systems',
        'Full Smart Automation & Architectural Profiles',
        'Fluted Acoustic Panelling & Tinted Glass Sliders',
        'Lifetime Dedicated Relationship Manager'
      ],
      baseCost: 1540000
    }
  ];

  const addonOptions = [
    { id: 'quartz', label: 'Premium Quartz Kitchen Countertop', cost: 45000, desc: 'Stain-resistant engineered quartz slab' },
    { id: 'fluted', label: 'Master Bedroom Fluted Acoustic Accent Wall', cost: 38000, desc: 'Bespoke wooden louvers with LED backlight' },
    { id: 'smart-lights', label: 'Magnetic Architectural Track Lights & Dimmers', cost: 42000, desc: '3000K warm anti-glare recessed tracks' },
    { id: 'bar-console', label: 'Living Room Cocktail Bar & Crockery Unit', cost: 58000, desc: 'Tinted glass with profile lighting' },
    { id: 'termite', label: 'Comprehensive Anti-Termite & Moisture Seal', cost: 25000, desc: '3-stage chemical barrier warranty' },
  ];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Calculate pricing
  const calculation = useMemo(() => {
    const prop = propertyOptions.find((p) => p.id === propertyType) || propertyOptions[2];
    const pkg = packages.find((p) => p.id === packageTier) || packages[1];
    
    const baseEstimated = pkg.baseCost * prop.baseMultiplier;
    const addonsTotal = selectedAddons.reduce((sum, addonId) => {
      const addon = addonOptions.find((a) => a.id === addonId);
      return sum + (addon ? addon.cost : 0);
    }, 0);

    const total = Math.round(baseEstimated + addonsTotal);

    // Itemized breakdown percentage estimates
    const breakdown = {
      kitchen: Math.round(total * 0.32),
      wardrobes: Math.round(total * 0.28),
      ceilingLighting: Math.round(total * 0.18),
      livingFurniture: Math.round(total * 0.14),
      civilPaint: Math.round(total * 0.08)
    };

    return {
      total,
      inLakhs: (total / 100000).toFixed(2),
      breakdown,
      propLabel: prop.label,
      pkgLabel: pkg.name
    };
  }, [propertyType, packageTier, selectedAddons]);

  const handleSendToWhatsApp = () => {
    const message = `Hi NCR Home Interior Bhiwadi, I used your Instant Cost Calculator for my *${calculation.propLabel}* in Bhiwadi/NCR with the *${calculation.pkgLabel}* package. Estimated budget: *₹${calculation.inLakhs} Lakhs*. Please share a detailed quote and schedule a site visit.`;
    const url = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="estimator" className="py-24 bg-[#111216] border-y border-[#20222a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#c5a880] font-semibold">
            <Calculator className="w-3.5 h-3.5" />
            <span>Transparent Pricing Matrix</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#f7f3ec]">
            Instant Interior Cost Estimator
          </h2>
          <p className="text-[#a49e92] text-sm sm:text-base leading-relaxed">
            Get a reliable, transparent price estimate tailored to Bhiwadi real estate standards. No hidden contractor margins or unexpected surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* 1. Property Type Selector */}
            <div className="space-y-3">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#c5a880] block">
                Step 1: Select Property Configuration
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {propertyOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setPropertyType(opt.id as any)}
                    className={`p-3 rounded-sm border text-left transition-all ${
                      propertyType === opt.id
                        ? 'bg-[#1a1c24] border-[#c5a880] text-[#f7f3ec] shadow-md'
                        : 'bg-[#14151b] border-[#252733] text-[#a49e92] hover:border-[#383b4a] hover:text-[#ddd8ce]'
                    }`}
                  >
                    <div className="font-semibold text-sm">{opt.label}</div>
                    <div className="text-[11px] text-[#7e786e] mt-0.5">{opt.subtitle}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Package Tier Selector */}
            <div className="space-y-3">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#c5a880] block">
                Step 2: Choose Quality & Finish Tier
              </label>
              <div className="space-y-3">
                {packages.map((pkg) => (
                  <div
                    key={pkg.id}
                    onClick={() => setPackageTier(pkg.id as any)}
                    className={`p-4 rounded-sm border cursor-pointer transition-all ${
                      packageTier === pkg.id
                        ? 'bg-[#191c25] border-[#c5a880] shadow-lg'
                        : 'bg-[#13151b] border-[#232530] hover:border-[#353846]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-serif text-lg font-medium text-[#f7f3ec]">
                            {pkg.name}
                          </h4>
                          {pkg.badge && (
                            <span className="text-[10px] uppercase font-semibold text-[#c5a880] tracking-wide bg-[#27241e] px-2 py-0.5 rounded-sm">
                              {pkg.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[#9d978a] mt-0.5">{pkg.desc}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-xs font-semibold text-[#c5a880]">{pkg.rate}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 pt-3 border-t border-[#232632] text-xs text-[#c9c4b9]">
                      {pkg.features.map((f, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
                          <span className="truncate">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Addon Upgrades */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#c5a880]">
                  Step 3: Optional Architectural Add-Ons
                </label>
                <span className="text-[11px] text-[#8e887d]">Select all that apply</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {addonOptions.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-sm border cursor-pointer flex items-start gap-3 transition-all ${
                        isChecked
                          ? 'bg-[#181a22] border-[#c5a880] text-[#f7f3ec]'
                          : 'bg-[#13151b] border-[#22242e] text-[#9c9689] hover:border-[#333644]'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-sm border mt-0.5 flex items-center justify-center shrink-0 ${
                        isChecked ? 'bg-[#c5a880] border-[#c5a880] text-[#0e0f12]' : 'border-[#424555]'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <div className="text-xs">
                        <div className="font-medium text-[#e4dfd5]">{addon.label}</div>
                        <div className="text-[11px] text-[#7a746a]">{addon.desc}</div>
                        <div className="text-[11px] font-semibold text-[#c5a880] mt-1">+₹{addon.cost.toLocaleString('en-IN')}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Pricing Summary Card */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="p-6 sm:p-7 rounded-sm border border-[#2d303d] bg-[#14161e] shadow-2xl space-y-6">
              
              <div className="border-b border-[#242733] pb-5">
                <span className="text-[11px] uppercase tracking-wider text-[#c5a880] font-semibold">
                  Estimated Turnkey Budget
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-serif text-4xl sm:text-5xl font-bold text-[#f7f3ec]">
                    ₹ {calculation.inLakhs}
                  </span>
                  <span className="text-base text-[#a8a296]">Lakhs*</span>
                </div>
                <div className="text-xs text-[#8f897d] mt-1">
                  Estimated for {calculation.propLabel} · {calculation.pkgLabel}
                </div>
              </div>

              {/* Itemized Line Breakdown */}
              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#ded8ce]">
                  Estimated Scope Breakdown
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-[#1f212a] text-[#b6b0a4]">
                    <span>Modular Kitchen & Utility</span>
                    <strong className="text-[#ede8df] font-medium">₹ {calculation.breakdown.kitchen.toLocaleString('en-IN')}</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#1f212a] text-[#b6b0a4]">
                    <span>Custom Wardrobes & Dressers</span>
                    <strong className="text-[#ede8df] font-medium">₹ {calculation.breakdown.wardrobes.toLocaleString('en-IN')}</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#1f212a] text-[#b6b0a4]">
                    <span>False Ceiling & Architectural Lights</span>
                    <strong className="text-[#ede8df] font-medium">₹ {calculation.breakdown.ceilingLighting.toLocaleString('en-IN')}</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#1f212a] text-[#b6b0a4]">
                    <span>Living Room TV Unit & Louvers</span>
                    <strong className="text-[#ede8df] font-medium">₹ {calculation.breakdown.livingFurniture.toLocaleString('en-IN')}</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#1f212a] text-[#b6b0a4]">
                    <span>Civil Modifications & Royale Paint</span>
                    <strong className="text-[#ede8df] font-medium">₹ {calculation.breakdown.civilPaint.toLocaleString('en-IN')}</strong>
                  </div>
                </div>
              </div>

              {/* Guarantees */}
              <div className="p-3.5 rounded-sm bg-[#181a23] border border-[#242733] space-y-2 text-xs text-[#a6a093]">
                <div className="flex items-center gap-2 text-[#ddd8cf] font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#c5a880]" />
                  <span>Guaranteed Fixed Price Lock After Site Visit</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  * Final pricing is confirmed with laser measurements on-site. Once you approve the BOQ, the cost is locked with zero escalations.
                </p>
              </div>

              {/* Direct CTAs */}
              <div className="space-y-2.5 pt-2">
                <button
                  onClick={handleSendToWhatsApp}
                  className="w-full py-3.5 px-4 rounded-sm bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Send Estimate to WhatsApp</span>
                </button>

                <button
                  onClick={() => onOpenBookingWithEstimate(`${calculation.propLabel} - ${calculation.pkgLabel} (~₹${calculation.inLakhs}L)`)}
                  className="w-full py-3.5 px-4 rounded-sm bg-[#c5a880] hover:bg-[#d8bd95] text-[#0e0f12] font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>Book Free Site Visit to Lock This Price</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-center text-[11px] text-[#7d776d] flex items-center justify-center gap-1">
                <HelpCircle className="w-3 h-3" />
                <span>Call our Senior Estimator: {BUSINESS_INFO.primaryPhone}</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

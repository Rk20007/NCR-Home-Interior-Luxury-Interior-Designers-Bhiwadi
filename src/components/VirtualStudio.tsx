import { useState } from 'react';
import { Palette, Layers, Lightbulb, Sparkles, Check, ArrowRight } from 'lucide-react';

interface VirtualStudioProps {
  onBookStyle: (styleName: string) => void;
}

export function VirtualStudio({ onBookStyle }: VirtualStudioProps) {
  const [selectedStyle, setSelectedStyle] = useState<number>(0);
  const [selectedFinish, setSelectedFinish] = useState<number>(0);
  const [selectedLighting, setSelectedLighting] = useState<number>(0);

  const styles = [
    {
      name: 'Modern Scandinavian',
      theme: 'Bright, airy, warm oak woods with clean lines',
      image: 'https://www.ncrhomeinterior.com/public/storage/projects/project_1754047779_688ca5239208d.jpg',
      palette: ['#EFECE6', '#C7B299', '#4A463F', '#FFFFFF'],
      suitedFor: 'Nimai Greens, Ashiana Angan 2 & 3 BHKs',
      woods: 'Light White Ash & Calibrated Marine Ply',
      hardware: 'Concealed minimalist J-pulls'
    },
    {
      name: 'Signature Neo-Classical',
      theme: 'Sophisticated crown moulding, subtle gold accents, and velvet textures',
      image: 'https://www.ncrhomeinterior.com/public/storage/projects/project_1754047686_688ca4c682cf7.jpg',
      palette: ['#1C1E24', '#D4AF37', '#EDE8DF', '#756D63'],
      suitedFor: 'Ashiana Town, Ashiana Village Luxury Villas',
      woods: 'Smoked Walnut & Lacquered Fluting',
      hardware: 'Brushed Brass & Soft-Close Blum'
    },
    {
      name: 'Contemporary Urban Loft',
      theme: 'High-contrast charcoal tones, sleek acrylic cabinetry, and magnetic lighting',
      image: 'https://www.ncrhomeinterior.com/public/storage/projects/project_1754047862_688ca57653c58.jpg',
      palette: ['#17181C', '#7F848E', '#C5A880', '#2E313B'],
      suitedFor: 'Omaxe Panorama City, Krish City Penthouses',
      woods: 'High-Gloss Acrylic on BWP Grade Ply',
      hardware: 'Hafele integrated gola profiles'
    },
    {
      name: 'Organic Japandi Zen',
      theme: 'Minimalist stone surfaces, micro-cement textures, and fluted acoustic dividers',
      image: 'https://www.ncrhomeinterior.com/public/storage/projects/project_1754046721_688ca101a53c0.jpg',
      palette: ['#F3EFE9', '#A3998C', '#322E29', '#C3B091'],
      suitedFor: 'Ashiana Bageecha & Modern Compact Homes',
      woods: 'Natural Teak louvers & matte laminates',
      hardware: 'Push-to-open tip-on mechanisms'
    }
  ];

  const finishes = [
    { name: 'Anti-Fingerprint Acrylic', desc: 'Glass-like reflection, scratch-resistant, 100% moisture-proof' },
    { name: 'PU Matte Velvet Touch', desc: 'Zero glare, ultra-luxurious silky feel, UV-stabilized paint' },
    { name: 'Fluted Acoustic Timber', desc: 'Textured 3D wooden louvers with sound damping core' },
    { name: 'Lacquered Tinted Glass', desc: 'Aluminum profile sliding doors with integrated LED sensor' }
  ];

  const lightings = [
    { name: 'Warm Architectural Glow (3000K)', desc: 'Cozy, intimate, highlights natural wood grains and fabrics' },
    { name: 'Neutral Crisp White (4000K)', desc: 'High-clarity for culinary prep and focused task areas' },
    { name: 'Magnetic Track & Dimmable Coves', desc: 'Dynamic day-to-night ambiance with remote scene controls' }
  ];

  const currentStyle = styles[selectedStyle];

  return (
    <section id="studio" className="py-24 bg-[#0d0e11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#c5a880] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Moodboard & Design Studio</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#f7f3ec]">
            Visualize Your Living Aesthetic
          </h2>
          <p className="text-[#a59f93] text-sm sm:text-base leading-relaxed">
            Test different architectural styles, cabinet textures, and ambient illumination before your initial 3D design consultation in Bhiwadi.
          </p>
        </div>

        {/* Studio Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Visual Presentation Area */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative rounded-sm overflow-hidden border border-[#262835] bg-[#14161f] shadow-2xl">
              
              {/* Dynamic Image Canvas */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={currentStyle.image}
                  alt={currentStyle.name}
                  className="w-full h-full object-cover transition-all duration-700"
                />
                
                {/* Lighting Tint Overlay */}
                <div 
                  className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
                    selectedLighting === 0 
                      ? 'bg-[#c5a880]/15 mix-blend-color-dodge' 
                      : selectedLighting === 1 
                      ? 'bg-[#e2e8f0]/10 mix-blend-soft-light' 
                      : 'bg-[#1e1e24]/25 mix-blend-multiply'
                  }`} 
                />

                <div className="absolute top-4 left-4 bg-[#0d0e11]/85 backdrop-blur-md px-3 py-1.5 rounded-sm border border-[#2b2d38] text-xs text-[#ede8de]">
                  <strong className="text-[#c5a880] font-medium">{currentStyle.name}</strong>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-[#0d0e11]/90 backdrop-blur-md p-3.5 rounded-sm border border-[#262835] flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div>
                    <span className="text-[#888277] block text-[10px] uppercase">Active Finish</span>
                    <strong className="text-[#f7f3ec]">{finishes[selectedFinish].name}</strong>
                  </div>
                  <div>
                    <span className="text-[#888277] block text-[10px] uppercase">Lighting Profile</span>
                    <strong className="text-[#c5a880]">{lightings[selectedLighting].name.split('(')[0]}</strong>
                  </div>
                  <div>
                    <span className="text-[#888277] block text-[10px] uppercase">Ideal For</span>
                    <span className="text-[#cac4bb]">{currentStyle.suitedFor}</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Color Palette Chips */}
            <div className="flex items-center justify-between p-3.5 rounded-sm bg-[#13151b] border border-[#22242e] text-xs">
              <span className="text-[#9e988d]">Curated Material Palette:</span>
              <div className="flex items-center gap-2">
                {currentStyle.palette.map((color, cIdx) => (
                  <div key={cIdx} className="flex items-center gap-1.5">
                    <span
                      className="w-5 h-5 rounded-full border border-[#3b3e4d] shadow-sm inline-block"
                      style={{ backgroundColor: color }}
                    />
                    <span className="text-[10px] text-[#7d776d] uppercase font-mono">{color}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Interactive Controls Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Style Selector */}
            <div className="space-y-2.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#c5a880] flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5" />
                <span>1. Choose Interior Aesthetic</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                {styles.map((style, idx) => (
                  <button
                    key={style.name}
                    onClick={() => setSelectedStyle(idx)}
                    className={`p-3 rounded-sm border text-left transition-all ${
                      selectedStyle === idx
                        ? 'bg-[#181a24] border-[#c5a880] text-[#f7f3ec] shadow-md'
                        : 'bg-[#121319] border-[#22242e] text-[#9d978a] hover:border-[#383b4b] hover:text-[#dcd6cc]'
                    }`}
                  >
                    <div className="font-semibold text-xs sm:text-sm">{style.name}</div>
                    <div className="text-[10px] text-[#7d776d] line-clamp-1 mt-0.5">{style.theme}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Cabinetry & Millwork Finish */}
            <div className="space-y-2.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#c5a880] flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                <span>2. Select Cabinetry & Panel Finish</span>
              </label>
              <div className="space-y-2">
                {finishes.map((finish, idx) => (
                  <div
                    key={finish.name}
                    onClick={() => setSelectedFinish(idx)}
                    className={`p-2.5 rounded-sm border cursor-pointer flex items-center justify-between transition-all ${
                      selectedFinish === idx
                        ? 'bg-[#181a24] border-[#c5a880]'
                        : 'bg-[#121319] border-[#22242e] hover:border-[#333644]'
                    }`}
                  >
                    <div className="text-xs">
                      <div className="font-medium text-[#ede8de]">{finish.name}</div>
                      <div className="text-[11px] text-[#7a7469]">{finish.desc}</div>
                    </div>
                    {selectedFinish === idx && (
                      <Check className="w-4 h-4 text-[#c5a880] shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Lighting Tone */}
            <div className="space-y-2.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#c5a880] flex items-center gap-1.5">
                <Lightbulb className="w-3.5 h-3.5" />
                <span>3. Select Lighting Atmosphere</span>
              </label>
              <div className="space-y-2">
                {lightings.map((light, idx) => (
                  <div
                    key={light.name}
                    onClick={() => setSelectedLighting(idx)}
                    className={`p-2.5 rounded-sm border cursor-pointer flex items-center justify-between transition-all ${
                      selectedLighting === idx
                        ? 'bg-[#181a24] border-[#c5a880]'
                        : 'bg-[#121319] border-[#22242e] hover:border-[#333644]'
                    }`}
                  >
                    <div className="text-xs">
                      <div className="font-medium text-[#ede8de]">{light.name}</div>
                      <div className="text-[11px] text-[#7a7469]">{light.desc}</div>
                    </div>
                    {selectedLighting === idx && (
                      <Check className="w-4 h-4 text-[#c5a880] shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Book This Concept */}
            <div className="pt-2">
              <button
                onClick={() => onBookStyle(`${currentStyle.name} with ${finishes[selectedFinish].name}`)}
                className="w-full py-3.5 px-4 rounded-sm bg-[#c5a880] hover:bg-[#d8bd95] text-[#0e0f12] font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Request 3D Layout in {currentStyle.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

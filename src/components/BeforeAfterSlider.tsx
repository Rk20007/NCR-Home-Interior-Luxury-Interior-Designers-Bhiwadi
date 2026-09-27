import { useState, useRef, useCallback } from 'react';
import { SlidersHorizontal, CheckCircle2, ShieldCheck } from 'lucide-react';

export function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section className="py-20 bg-[#111216] border-y border-[#20222a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#c5a880] font-semibold">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Turnkey Transformation</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#f7f3ec]">
            From Bare Shell to Signature Living
          </h2>
          <p className="text-[#a39c90] text-sm sm:text-base">
            Drag the interactive slider to see how we take a raw concrete apartment in Bhiwadi and transform it into an opulent, functional sanctuary in just 45 days.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div className="max-w-5xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative aspect-[16/9] sm:aspect-[21/9] rounded-sm overflow-hidden select-none border border-[#2b2d38] shadow-2xl cursor-ew-resize bg-[#161820]"
          >
            {/* After Image (Full width background) */}
            <img
              src="https://www.ncrhomeinterior.com/public/storage/projects/project_1754046264_688c9f38b6db8.jpg"
              alt="After Turnkey Interior by NCR Home Interior Bhiwadi"
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />

            {/* Before Image (Clipped overlay) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1600&q=80"
                alt="Before Interior - Raw Shell Flat Bhiwadi"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: containerRef.current?.offsetWidth || '100%' }}
                draggable={false}
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Dividing Line & Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-[#c5a880] shadow-[0_0_12px_rgba(197,168,128,0.8)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0d0e11] border-2 border-[#c5a880] text-[#c5a880] flex items-center justify-center shadow-xl">
                <SlidersHorizontal className="w-4 h-4" />
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 bg-[#0d0e11]/85 backdrop-blur-md px-3 py-1 rounded-sm text-xs font-semibold text-[#ede8de] border border-[#272935] pointer-events-none">
              BEFORE: Bare Concrete Shell
            </div>

            <div className="absolute top-4 right-4 bg-[#c5a880] text-[#0e0f12] font-semibold px-3 py-1 rounded-sm text-xs pointer-events-none shadow-md">
              AFTER: Handed Over in 42 Days
            </div>

            {/* Instruction tooltip */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#0d0e11]/85 backdrop-blur-md px-4 py-1 rounded-sm text-[11px] text-[#a6a094] border border-[#2b2e3b] pointer-events-none hidden sm:block">
              ← Drag or swipe slider to compare transformation →
            </div>
          </div>

          {/* Highlights beneath comparison */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="p-4 rounded-sm bg-[#13151c] border border-[#222530] flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#c5a880] shrink-0 mt-0.5" />
              <div>
                <strong className="text-xs text-[#ede8df] block font-semibold">100% Civil & Electrical</strong>
                <p className="text-[11px] text-[#8e887d] mt-0.5">Concealed piping, core cutting, switch plate rewiring, and ducting.</p>
              </div>
            </div>

            <div className="p-4 rounded-sm bg-[#13151c] border border-[#222530] flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#c5a880] shrink-0 mt-0.5" />
              <div>
                <strong className="text-xs text-[#ede8df] block font-semibold">German CNC Factory Woodwork</strong>
                <p className="text-[11px] text-[#8e887d] mt-0.5">PUR glued edge banding, zero moisture penetration, and no on-site saw dust.</p>
              </div>
            </div>

            <div className="p-4 rounded-sm bg-[#13151c] border border-[#222530] flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#c5a880] shrink-0 mt-0.5" />
              <div>
                <strong className="text-xs text-[#ede8df] block font-semibold">Deep Clean & Ready to Move In</strong>
                <p className="text-[11px] text-[#8e887d] mt-0.5">Complimentary professional deep cleaning and sanitization on handover day.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

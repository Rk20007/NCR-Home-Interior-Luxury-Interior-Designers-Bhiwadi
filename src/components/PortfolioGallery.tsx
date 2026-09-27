import { useState } from 'react';
import { Eye, MapPin, X, ArrowRight, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { REAL_PROJECTS, ProjectItem } from '../data/businessData';

interface PortfolioGalleryProps {
  onInquireProject: (project: ProjectItem) => void;
}

export function PortfolioGallery({ onInquireProject }: PortfolioGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'kitchen', label: 'Modular Kitchens' },
    { id: 'living', label: 'Living & Lounges' },
    { id: 'bedroom', label: 'Master Suites' },
    { id: 'ceiling', label: 'Ceilings & Lighting' },
    { id: 'commercial', label: 'Corporate & Retail' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? REAL_PROJECTS
    : REAL_PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-[#0d0e11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a880] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Real Work Across Bhiwadi & NCR</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#f7f3ec]">
              Curated Architectural Portfolio
            </h2>
            <p className="text-[#a59f93] text-sm sm:text-base max-w-2xl">
              Authentic photography from executed apartments, bespoke villas, and commercial offices. Every joint, panel, and fixture is crafted for longevity.
            </p>
          </div>

          {/* Interactive Filter Tabs (Button elements as specified in design constitution) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-sm bg-[#16171e] border border-[#232530] shrink-0">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-sm transition-all ${
                  activeFilter === f.id
                    ? 'bg-[#c5a880] text-[#0e0f12] shadow-sm font-semibold'
                    : 'text-[#9f998d] hover:text-[#f4efe8] hover:bg-[#1e2028]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Masonry / Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-sm overflow-hidden border border-[#20222a] bg-[#12141a] transition-all duration-300 hover:border-[#c5a880]/60 hover:shadow-2xl hover:shadow-[#c5a880]/5 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#181a22]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12141a] via-transparent to-transparent opacity-80" />

                {/* Society and Units Badge-less Overlay */}
                <div className="absolute top-3 left-3 bg-[#0d0e11]/85 backdrop-blur-md px-2.5 py-1 rounded-sm text-[11px] text-[#f4efe8] border border-[#292b36] flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-[#c5a880]" />
                  <span>{project.society}</span>
                </div>

                <div className="absolute top-3 right-3 bg-[#c5a880] text-[#0e0f12] font-semibold px-2 py-0.5 rounded-sm text-[10px] tracking-wide">
                  {project.units}
                </div>

                {/* Quick inspect button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="absolute bottom-3 right-3 w-9 h-9 rounded-sm bg-[#0e0f12]/90 hover:bg-[#c5a880] text-[#f4efe8] hover:text-[#0e0f12] transition-colors flex items-center justify-center border border-[#2c2f3c] shadow-lg opacity-90 group-hover:opacity-100"
                  aria-label="View Project Details"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              {/* Text Content */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-normal text-[#f7f3ec] group-hover:text-[#c5a880] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#a39c90] line-clamp-2 mt-1 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Specs inline with subtle bullet separators */}
                <div className="pt-3 border-t border-[#1f212a] space-y-2">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-[#8e887d]">
                    {project.specs.slice(0, 2).map((spec, sIdx) => (
                      <span key={sIdx} className="flex items-center gap-1">
                        <Check className="w-3 h-3 text-[#c5a880]" />
                        <span>{spec}</span>
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs text-[#c5a880] hover:text-[#d8bd95] font-medium flex items-center gap-1 transition-colors"
                    >
                      <span>View Specifications</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => onInquireProject(project)}
                      className="text-[11px] text-[#ddd7cd] hover:text-[#c5a880] font-medium py-1 px-2.5 rounded-sm border border-[#2b2d38] hover:border-[#c5a880] transition-colors"
                    >
                      Get Similar Quote
                    </button>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Portfolio Guarantee */}
        <div className="mt-16 p-6 rounded-sm bg-[#12141a] border border-[#222530] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm bg-[#191b24] border border-[#2c2f3d] flex items-center justify-center text-[#c5a880] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#f7f3ec]">Want to see a completed flat near you in Bhiwadi?</div>
              <p className="text-xs text-[#9d978a]">
                We can arrange a guided walkthrough of our live or completed project in your society before you sign.
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="shrink-0 px-4 py-2.5 rounded-sm bg-[#c5a880] hover:bg-[#d8bd95] text-[#0e0f12] text-xs font-semibold transition-colors"
          >
            Request Live Site Visit
          </button>
        </div>

      </div>

      {/* Lightbox / Specification Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0a0d]/90 backdrop-blur-md">
          <div className="relative w-full max-w-4xl bg-[#12141a] border border-[#2b2e3b] rounded-sm overflow-hidden shadow-2xl max-h-[92vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-[#21232e] flex items-center justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#c5a880] font-semibold">
                  {selectedProject.society} · {selectedProject.location}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#f7f3ec] font-normal">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 text-[#9a9387] hover:text-[#f7f3ec] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto p-4 sm:p-6 space-y-6">
              <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-sm overflow-hidden border border-[#232530] bg-[#181a24]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-[#0d0e11]/80 backdrop-blur-sm px-3 py-1 rounded-sm text-xs text-[#ede8de] border border-[#292c38]">
                  {selectedProject.units}
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider text-[#c5a880] font-semibold mb-2">
                  Project Overview & Execution Details
                </h4>
                <p className="text-sm text-[#cac5bc] leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider text-[#c5a880] font-semibold mb-3">
                  Technical Specifications & Materials Used
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {selectedProject.specs.map((spec, idx) => (
                    <div key={idx} className="p-3 rounded-sm bg-[#161820] border border-[#232632] flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#c5a880] shrink-0" />
                      <span className="text-[#ded9d0] font-medium">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 border-t border-[#21232e] bg-[#101217] flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-[#9c9689]">
                Backed by 10-Year Hardware Warranty & Free 1-Year Maintenance
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-sm border border-[#373a48] text-[#cfc9be] text-xs font-medium hover:border-[#c5a880]"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const proj = selectedProject;
                    setSelectedProject(null);
                    onInquireProject(proj);
                  }}
                  className="px-4 py-2 rounded-sm bg-[#c5a880] hover:bg-[#d8bd95] text-[#0e0f12] text-xs font-semibold flex items-center gap-1.5"
                >
                  <span>Inquire for My Apartment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

import { Star, MapPin, ExternalLink, ShieldCheck, Quote } from 'lucide-react';
import { VERIFIED_REVIEWS, BUSINESS_INFO } from '../data/businessData';

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 bg-[#0d0e11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a880] font-semibold">
              <Star className="w-3.5 h-3.5 fill-[#c5a880]" />
              <span>Verified Client Experiences</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#f7f3ec]">
              Endorsed by Bhiwadi Homeowners
            </h2>
            <p className="text-[#a49e92] text-sm sm:text-base max-w-2xl">
              Real testimonials from clients who entrusted their apartments and villas in Bhiwadi and Gurgaon to our turnkey care.
            </p>
          </div>

          {/* Aggregate Rating Box */}
          <div className="p-4 rounded-sm bg-[#14161f] border border-[#262835] flex items-center gap-4 shrink-0">
            <div className="text-3xl sm:text-4xl font-serif text-[#c5a880] font-bold">5.0</div>
            <div>
              <div className="flex items-center gap-0.5 text-[#c5a880]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#c5a880]" />
                ))}
              </div>
              <div className="text-xs text-[#ede8df] font-medium mt-0.5">706+ Verified Reviews</div>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-[#c5a880] hover:underline flex items-center gap-1 mt-0.5"
              >
                <span>Read on Google Maps</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VERIFIED_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-sm bg-[#12141a] border border-[#21232d] flex flex-col justify-between space-y-4 hover:border-[#c5a880]/50 transition-colors relative"
            >
              <div className="space-y-3">
                
                {/* Review Header with Source & Society */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#c5a880]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#c5a880]" />
                    ))}
                  </div>
                  <span className="text-[10px] text-[#837e74] uppercase font-semibold">
                    {rev.verifiedSource}
                  </span>
                </div>

                {/* Review Quote */}
                <p className="text-xs sm:text-sm text-[#cac5bc] leading-relaxed italic">
                  "{rev.content}"
                </p>
              </div>

              {/* Author & Society Location */}
              <div className="pt-3 border-t border-[#1e2029] flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-semibold text-[#f7f3ec]">{rev.author}</h4>
                  <div className="text-[11px] text-[#8e887d]">{rev.role}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-medium text-[#c5a880] flex items-center gap-1 justify-end">
                    <MapPin className="w-3 h-3 text-[#c5a880]" />
                    <span>{rev.society}</span>
                  </div>
                  <div className="text-[10px] text-[#716c63]">{rev.location}</div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Direct Link to Google Maps Listing */}
        <div className="mt-12 text-center">
          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm border border-[#393c4c] hover:border-[#c5a880] text-[#ded8ce] hover:text-[#c5a880] text-xs font-medium transition-colors"
          >
            <span>View All Google Maps Ratings & Photos</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}

export interface ProjectItem {
  id: string;
  title: string;
  society: string;
  location: string;
  units: string;
  category: 'kitchen' | 'living' | 'bedroom' | 'ceiling' | 'commercial' | 'full-home';
  image: string;
  description: string;
  specs: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  bannerImage: string;
  iconImage: string;
  highlights: string[];
  deliverables: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  society: string;
  location: string;
  rating: number;
  date: string;
  content: string;
  avatar?: string;
  verifiedSource: 'Google Maps' | 'Justdial';
}

export const BUSINESS_INFO = {
  name: 'NCR Home Interior',
  tagline: 'Timeless Luxury & Turnkey Interior Architecture in Bhiwadi & NCR',
  established: 2014,
  experienceYears: '10+',
  projectsCompleted: '1,200+',
  societiesServed: '55+',
  rating: 5.0,
  reviewsCount: 706,
  googleMapsUrl: 'https://www.google.com/maps?vet=10CAAQoqAOahcKEwiQgbmx14-XAxUAAAAAHQAAAAAQCA..i&rlz=1C1CHBF_enIN1132IN1132&sca_esv=b558929c8c713236&udm&fvr=1&pvq=Cg0vZy8xMWdmZjN3cXp4IhgKEmludGVyaW9yIGRlc2lnbmVycxACGAM&lqi=ChpiaGl3YWRpIGludGVyaW9yIGRlc2lnbmVyc0jct_fRta6AgAhaJBABEAIYABgBIhpiaGl3YWRpIGludGVyaW9yIGRlc2lnbmVyc3oHQmhpd2FkaZIBEWludGVyaW9yX2Rlc2lnbmVy&cs=0&um=1&ie=UTF-8&fb=1&gl=in&sa=X&ftid=0x390d49d81d9931ef:0x7bbb9617a8b718b6',
  googleMapsEmbedQuery: 'NCR+Home+Interior+Bhiwadi+Rajasthan',
  primaryPhone: '+91 98299 53453',
  secondaryPhone: '+91 99100 86555',
  primaryPhoneDigits: '919829953453',
  whatsappNumber: '919829953453',
  email: 'info@ncrhomeinterior.com',
  workingHours: 'Mon - Sun: 9:30 AM – 8:00 PM',
  bhiwadiAddress: {
    primary: 'Nimal Arcade, SF-3, Neelam Chowk, Bhiwadi - 301019, Rajasthan',
    secondary: 'Flat 811, Sapphire Tower, Alwar Bypass Road, Industrial Area, Bhiwadi - 301019',
    landmark: 'Near Neelam Chowk & Alwar Highway'
  },
  gurgaonAddress: {
    office: 'B-10, Surat Nagar, Phase-II, Gurgaon - 122006, Haryana',
    serviceArea: 'Gurgaon, Manesar, Sohna Road & Golf Course Ext.'
  },
  serviceCities: [
    'Bhiwadi',
    'Dharuhera',
    'Tapukara',
    'Khushkhera',
    'Gurgaon',
    'Manesar',
    'Neemrana',
    'Delhi NCR'
  ],
  keyGuarantees: [
    { title: '45-Day Handover', desc: 'Guaranteed completion with penalty clause per day of delay' },
    { title: '10-Year Warranty', desc: 'Comprehensive warranty on factory-manufactured cabinetry & hardware' },
    { title: 'Zero Hidden Costs', desc: 'Itemized transparent BOQ with fixed price lock after sign-off' },
    { title: 'In-House Factory', desc: 'Precision German CNC cutting with high-grade edge banding' }
  ]
};

export const REAL_PROJECTS: ProjectItem[] = [
  {
    id: 'ashiana-town-b',
    title: 'Ashiana Town Luxury Residence',
    society: 'Ashiana Town',
    location: 'Bhiwadi, Rajasthan',
    units: '55+ Units Delivered',
    category: 'full-home',
    image: 'https://www.ncrhomeinterior.com/public/storage/projects/project_1754046264_688c9f38b6db8.jpg',
    description: 'Complete 3 BHK transformation featuring acrylic high-gloss modular kitchen, cove ceiling lighting, and custom master wardrobe with fluted wood panelling.',
    specs: ['BWP Marine Ply Grade', 'Soft-close Blum hardware', 'Ambient architectural lighting', 'Italian statuario accent wall']
  },
  {
    id: 'ashiana-angan',
    title: 'Modern Minimalist Haven',
    society: 'Ashiana Angan',
    location: 'Bhiwadi, Rajasthan',
    units: '75+ Units Delivered',
    category: 'living',
    image: 'https://www.ncrhomeinterior.com/public/storage/projects/project_1754046721_688ca101a53c0.jpg',
    description: 'Warm contemporary open-concept living and dining with bespoke TV media console, gold metal inlay partition, and designer false ceiling.',
    specs: ['Custom TV console with louvers', 'Warm 3000K recessed lighting', 'Matte charcoal accents', 'Scratch-resistant laminate']
  },
  {
    id: 'ashiana-village',
    title: 'Bespoke Contemporary Villa',
    society: 'Ashiana Village',
    location: 'Bhiwadi, Rajasthan',
    units: '34+ Units Delivered',
    category: 'full-home',
    image: 'https://www.ncrhomeinterior.com/public/storage/projects/project_1754046797_688ca14dc07b8.jpg',
    description: 'Executive family villa with turnkey execution including double-height wall panelling, custom leatherette headboards, and walk-in dresser.',
    specs: ['Turnkey civil & interior', 'Modular wardrobes with sensor LEDs', 'Veneer finish doors', 'Concealed wiring & AC ducting']
  },
  {
    id: 'omaxe-panorama',
    title: 'Omaxe Panorama City Penthouse',
    society: 'Omaxe Panorama City',
    location: 'Alwar Bypass Rd, Bhiwadi',
    units: '106+ Units Delivered',
    category: 'kitchen',
    image: 'https://www.ncrhomeinterior.com/public/storage/projects/project_1754047862_688ca57653c58.jpg',
    description: 'Chef-grade ergonomic modular kitchen with quartz counter, anti-fingerprint acrylic finishes, rolling shutter pantry unit, and Hafele organizers.',
    specs: ['Quartz Stone Countertop', 'Hafele tandem boxes', 'Profile LED under-cabinet illumination', 'Telescopic corner carousel']
  },
  {
    id: 'nimai-greens',
    title: 'Scandinavian Serenity',
    society: 'Nimai Greens',
    location: 'Bhiwadi, Rajasthan',
    units: '44+ Units Delivered',
    category: 'bedroom',
    image: 'https://www.ncrhomeinterior.com/public/storage/projects/project_1754047779_688ca5239208d.jpg',
    description: 'Master bedroom suite with fluted acoustic panelling, floating bedside tables, hydraulic storage bed, and seamless sliding wardrobe.',
    specs: ['Acoustic fluted panelling', 'Hydraulic bed base with storage', 'Tinted glass sliding wardrobe', 'Dimmable mood lighting']
  },
  {
    id: 'omaxe-green',
    title: 'Urban Chic Residence',
    society: 'Omaxe Green',
    location: 'Bhiwadi, Rajasthan',
    units: '75+ Units Delivered',
    category: 'living',
    image: 'https://www.ncrhomeinterior.com/public/storage/projects/project_1754047991_688ca5f777290.jpg',
    description: 'Sophisticated living lounge tailored for entertaining with bespoke bar cabinet, plush wall moulding, and architectural spotlighting.',
    specs: ['Bespoke cocktail bar unit', 'French wall beadings', 'DuPont Corian breakfast bar', 'Greenply HDMR construction']
  },
  {
    id: 'krish-city',
    title: 'Compact Smart Home Concept',
    society: 'Krish City',
    location: 'Bhiwadi, Rajasthan',
    units: '21+ Units Delivered',
    category: 'kitchen',
    image: 'https://www.ncrhomeinterior.com/public/storage/projects/project_1754048304_688ca7309c7d7.jpg',
    description: 'High-efficiency parallel modular kitchen with dual-tone laminates, loft storage cabinets, and concealed chimney ventilation.',
    specs: ['Dual-tone anti-scratch laminate', 'Pull-out spice racks & bottle baskets', 'Seamless integrated handles', 'Water-resistant sink cabinet']
  },
  {
    id: 'ashiana-tarang',
    title: 'Neo-Classical Master Suite',
    society: 'Ashiana Tarang',
    location: 'Bhiwadi, Rajasthan',
    units: '18+ Units Delivered',
    category: 'bedroom',
    image: 'https://www.ncrhomeinterior.com/public/storage/projects/project_1754047686_688ca4c682cf7.jpg',
    description: 'Regal master bedroom featuring velvet-upholstered extended headboard, warm gold metal trim, and study nook with bespoke shelving.',
    specs: ['Velvet upholstery headboard', 'Rose gold metal profile accents', 'Dedicated workstation with wire manager', 'Gypsum suspended false ceiling']
  },
  {
    id: 'terra-heritage',
    title: 'Terra Heritage Grand Apartment',
    society: 'Terra Heritage',
    location: 'Bhiwadi, Rajasthan',
    units: '16+ Units Delivered',
    category: 'ceiling',
    image: 'https://www.ncrhomeinterior.com/public/storage/projects/project_1754048166_688ca6a63667e.jpg',
    description: 'Architectural false ceiling with magnetic track lights, indirect cove glow, and custom wooden baffle partitions for dining area.',
    specs: ['Saint-Gobain Gyproc board', 'Magnetic track lighting system', 'Fluted wooden rafters', 'Anti-crack joint tape finish']
  },
  {
    id: 'krish-aura',
    title: 'Corporate Studio & Experience Hub',
    society: 'Krish Aura & Commercial',
    location: 'Bhiwadi Industrial Corridor',
    units: '12+ Units Delivered',
    category: 'commercial',
    image: 'https://www.ncrhomeinterior.com/public/storage/projects/project_1754049093_688caa453d22f.jpg',
    description: 'Ergonomic corporate office interior with glass conference rooms, acoustic wall treatments, reception reception desk, and executive workstations.',
    specs: ['Toughened glass partition with black aluminium', 'Acoustic baffle ceiling', 'Custom reception desk with CNC logo', 'Cable management raceways']
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'residential',
    title: 'Residential Interior Design',
    category: 'Full Home Interiors',
    shortDesc: 'Personalized home interiors blending style and comfort—custom layouts, premium finishes, and smart solutions for Bhiwadi, Gurgaon, and nearby areas.',
    fullDesc: 'From luxury villas in Ashiana to modern apartments in Omaxe and Nimai Greens, our residential interior services cover end-to-end design, civil modifications, modular systems, painting, and styling. We craft spaces that reflect your lifestyle while maximizing every square foot.',
    bannerImage: 'https://www.ncrhomeinterior.com/public/storage/services/service_1754412106_6892344aa3546.jpg',
    iconImage: 'https://www.ncrhomeinterior.com/public/storage/services/service_1754392884_6891e93400c5c.png',
    highlights: ['Bespoke 3D Room Visualizations', 'End-to-end Project Management', 'Custom Wardrobes & Storage', '45-Day Handover Assurance'],
    deliverables: ['Space Planning & Floor Layouts', 'Custom TV Units & Partitions', 'Foyer & Living Room Concepts', 'Master & Kids Bedroom Sets']
  },
  {
    id: 'modular-kitchen',
    title: 'Modular Kitchen Design',
    category: 'Kitchen Specialists',
    shortDesc: 'Designing stylish, ergonomic modular kitchens with smart storage, premium finishes, and efficient layouts tailored to Indian cooking habits.',
    fullDesc: 'We manufacture German-engineered modular kitchens equipped with top-tier hardware from Hafele, Blum, and Hettich. Choose from high-gloss acrylic, PU matte paint, anti-fingerprint laminates, and lacquered glass with quartz or granite countertops.',
    bannerImage: 'https://www.ncrhomeinterior.com/public/storage/services/service_1754412240_689234d006052.jpg',
    iconImage: 'https://www.ncrhomeinterior.com/public/storage/services/service_1754387708_6891d4fc3e5f6.png',
    highlights: ['10-Year Hardware Warranty', 'BWP Marine Ply (Waterproof)', 'Smart Corner Pull-outs & Pantries', 'Built-in Appliance Integration'],
    deliverables: ['L-Shape, U-Shape & Island Layouts', 'Soft-close Drawer Systems', 'Under-cabinet Task Lighting', 'Chimney & Hob Provisioning']
  },
  {
    id: 'commercial',
    title: 'Commercial & Office Interiors',
    category: 'Corporate & Retail',
    shortDesc: 'Professional commercial interior design services for offices, retail stores, and corporate spaces in Bhiwadi Industrial Area, Gurgaon, and NCR.',
    fullDesc: 'We build high-performance workspaces that boost productivity, align with your brand identity, and impress your clients. From tech offices to manufacturing administrative headquarters and retail boutiques across Bhiwadi.',
    bannerImage: 'https://www.ncrhomeinterior.com/public/storage/services/service_1754412025_689233f919fdf.jpg',
    iconImage: 'https://www.ncrhomeinterior.com/public/storage/services/service_1754393075_6891e9f386af8.png',
    highlights: ['Ergonomic Workstation Layouts', 'Acoustic Soundproofing', 'Toughened Glass Partitions', 'Strict Industrial Fire & Safety Compliance'],
    deliverables: ['Executive Cabins & Boardrooms', 'Reception Desks & Waiting Lounges', 'Cafeteria & Breakout Zones', 'False Ceiling & Network Cabling']
  },
  {
    id: 'custom-furniture',
    title: 'Custom Furniture & Millwork',
    category: 'Factory Crafted',
    shortDesc: 'Custom furniture crafted in styles like modern, industrial, minimalist, or royal luxury—built for comfort, durability, and timeless elegance.',
    fullDesc: 'Every piece is crafted in our specialized manufacturing unit using calibrated ply, premium veneers, and certified edge-banding. No loose joints, no rough finishes—just flawless craftsmanship built to last decades.',
    bannerImage: 'https://www.ncrhomeinterior.com/public/storage/services/service_1754413055_689237ffc991a.jpg',
    iconImage: 'https://www.ncrhomeinterior.com/public/storage/services/service_1754387062_6891d2769dc32.png',
    highlights: ['Factory-pressed calibrated ply', 'German PUR Edge Banding', 'Zero waviness on surfaces', 'Custom fabrics & upholstery'],
    deliverables: ['Custom Wardrobes (Sliding/Hinged)', 'Hydraulic Storage Beds', 'Designer Bar Units & Consoles', 'Dining Tables & Accent Chairs']
  },
  {
    id: 'smart-space',
    title: 'Smart Space Optimization',
    category: 'Urban Living',
    shortDesc: 'Creative space optimization for compact apartments—foldable units, hidden storage, and multi-purpose designs for modern urban living.',
    fullDesc: 'Tailored specifically for modern 2 BHK and 3 BHK homes in Bhiwadi and NCR, our smart space solutions maximize utility without sacrificing aesthetics. Concealed beds, convertible study units, and clever storage maximize your floor area.',
    bannerImage: 'https://www.ncrhomeinterior.com/public/storage/services/service_1754412412_6892357c9fdb5.jpg',
    iconImage: 'https://www.ncrhomeinterior.com/public/storage/services/service_1754387539_6891d453029c8.webp',
    highlights: ['Multi-functional furniture', 'Concealed storage cavities', 'Optical illusion mirrors & glass', 'Ergonomic study-cum-bed units'],
    deliverables: ['Foldable Dining & Work Desks', 'Overhead Loft Storage Systems', 'Under-bed Hydraulic Compartments', 'Convertible Guest Room Modules']
  },
  {
    id: 'turnkey',
    title: 'Turnkey Execution & Fit-Out',
    category: 'End-to-End Delivery',
    shortDesc: 'Complete peace of mind from bare shell to turnkey handover—including civil works, electrical, false ceiling, plumbing, and deep cleaning.',
    fullDesc: 'You hand us the bare keys; we hand you a fully realized dream home. We assign a dedicated on-site project engineer who sends daily WhatsApp progress reports and manages all contractors under one single contract.',
    bannerImage: 'https://www.ncrhomeinterior.com/public/storage/services/service_1754412536_689235f83ec4b.jpg',
    iconImage: 'https://www.ncrhomeinterior.com/public/storage/services/service_1754387353_6891d39985014.png',
    highlights: ['Single Point of Contact', 'Daily WhatsApp Photo Updates', 'Structured Milestone Payments', 'Complimentary Deep Cleaning Handover'],
    deliverables: ['Civil & Masonry Modifications', 'Concealed Electrical & Track Lights', 'Saint-Gobain False Ceiling', 'Royal Luxury Emulsion Paint']
  }
];

export const VERIFIED_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Rajesh Sharma',
    role: 'Homeowner · 3 BHK',
    society: 'Ashiana Town',
    location: 'Bhiwadi',
    rating: 5,
    date: 'February 2026',
    content: 'NCR Home Interior designed and executed our 3 BHK flat in Ashiana Town. The modular kitchen and false ceiling finish exceeded our expectations. What impressed us most was their adherence to the 45-day deadline. Transparent billing with zero surprises!',
    verifiedSource: 'Google Maps'
  },
  {
    id: 'rev-2',
    author: 'Sunita Chauhan',
    role: 'Homeowner · 2 BHK',
    society: 'Omaxe Panorama City',
    location: 'Alwar Bypass, Bhiwadi',
    rating: 5,
    date: 'January 2026',
    content: 'We compared several interior designers in Bhiwadi and Gurgaon, but NCR Home Interior stood out with their detailed 3D designs and factory finish. The soft-close wardrobes and ambient living room lighting look stunning. Highly recommended in NCR!',
    verifiedSource: 'Google Maps'
  },
  {
    id: 'rev-3',
    author: 'Vikas Singhal',
    role: 'Managing Director',
    society: 'Commercial Fit-Out',
    location: 'Bhiwadi Industrial Area',
    rating: 5,
    date: 'December 2025',
    content: 'NCR Home Interior completed our corporate office fit-out of 4,500 sq ft near RIICO Industrial Area. From acoustical glass partitions to executive cabins, their team showed exemplary professionalism and delivered on-budget.',
    verifiedSource: 'Google Maps'
  },
  {
    id: 'rev-4',
    author: 'Meenakshi & Ankit Gupta',
    role: 'Homeowners · 3 BHK',
    society: 'Nimai Greens',
    location: 'Bhiwadi',
    rating: 5,
    date: 'November 2025',
    content: 'The finish of the acrylic kitchen and master bedroom panelling is top tier. Living away in Delhi while our Bhiwadi apartment was being furnished was stress-free thanks to their daily WhatsApp video updates. Great job by the NCR team!',
    verifiedSource: 'Justdial'
  },
  {
    id: 'rev-5',
    author: 'Col. Devendra Rathore',
    role: 'Homeowner · Villa',
    society: 'Ashiana Village',
    location: 'Bhiwadi',
    rating: 5,
    date: 'October 2025',
    content: 'True gentlemen with deep technical knowledge. They used authentic Greenply marine ply and Hafele fittings exactly as quoted in the BOQ. No compromise on materials. 10/10 recommendation for anyone looking for authentic quality.',
    verifiedSource: 'Google Maps'
  },
  {
    id: 'rev-6',
    author: 'Prashant Verma',
    role: 'Homeowner · 2 BHK',
    society: 'Krish City',
    location: 'Bhiwadi',
    rating: 5,
    date: 'September 2025',
    content: 'Very budget-friendly yet luxurious execution. They accommodated our custom requests for space-saving study furniture and bar console without escalating the total cost. Outstanding team.',
    verifiedSource: 'Justdial'
  }
];

export const BHIWADI_TOWNSHIPS = [
  {
    name: 'Ashiana Town',
    units: '55+ Units',
    highlight: 'Turnkey 2 & 3 BHK Luxury Interiors',
    img: 'https://www.ncrhomeinterior.com/public/storage/projects/project_1754046264_688c9f38b6db8.jpg'
  },
  {
    name: 'Ashiana Angan',
    units: '75+ Units',
    highlight: 'Modern Modular Kitchens & Living Lounges',
    img: 'https://www.ncrhomeinterior.com/public/storage/projects/project_1754046721_688ca101a53c0.jpg'
  },
  {
    name: 'Omaxe Panorama City',
    units: '106+ Units',
    highlight: 'High-Gloss Acrylic Kitchens & Master Suites',
    img: 'https://www.ncrhomeinterior.com/public/storage/projects/project_1754047862_688ca57653c58.jpg'
  },
  {
    name: 'Nimai Greens',
    units: '44+ Units',
    highlight: 'Scandinavian Minimalist Woodcraft',
    img: 'https://www.ncrhomeinterior.com/public/storage/projects/project_1754047779_688ca5239208d.jpg'
  },
  {
    name: 'Ashiana Village & Tarang',
    units: '52+ Units',
    highlight: 'Independent Villas & Penthouse Suites',
    img: 'https://www.ncrhomeinterior.com/public/storage/projects/project_1754046797_688ca14dc07b8.jpg'
  },
  {
    name: 'Krish City & Aura',
    units: '33+ Units',
    highlight: 'Smart Space Optimization & Budget Elegance',
    img: 'https://www.ncrhomeinterior.com/public/storage/projects/project_1754048304_688ca7309c7d7.jpg'
  }
];

export const MATERIAL_BRANDS = [
  { name: 'Hafele', origin: 'Germany', category: 'Architectural Hardware' },
  { name: 'Hettich', origin: 'Germany', category: 'Fittings & Hinges' },
  { name: 'Greenply', origin: 'India', category: 'Calibrated BWP Plywood' },
  { name: 'CenturyPly', origin: 'India', category: 'Marine Grade Ply' },
  { name: 'Saint-Gobain', origin: 'France', category: 'Gyproc & Mirrors' },
  { name: 'Asian Paints', origin: 'India', category: 'Royale Luxury Paints' },
  { name: 'Merino', origin: 'India', category: 'High-Pressure Laminates' },
  { name: 'Blum', origin: 'Austria', category: 'Drawer Runners & Lift-ups' }
];

export const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Free Site Visit & Floor Plan Analysis',
    desc: 'Our senior interior consultant visits your property in Bhiwadi or NCR to take laser-accurate measurements and understand your lifestyle requirements.'
  },
  {
    step: '02',
    title: '3D Photorealistic Design & Material Selection',
    desc: 'We craft immersive 3D renders with exact materials, lighting, and textures. You see your finished home before a single rupee is spent on execution.'
  },
  {
    step: '03',
    title: 'Transparent BOQ & Guaranteed Price Lock',
    desc: 'Receive an exhaustive line-item Bill of Quantities with brand specifications. Once approved, the price is 100% locked with zero hidden escalations.'
  },
  {
    step: '04',
    title: 'Precision Factory Manufacturing',
    desc: 'All modular cabinetry is crafted in our German CNC facility with automated edge-banding, ensuring immaculate finish, zero dust at home, and rapid speed.'
  },
  {
    step: '05',
    title: 'On-Site Installation & 45-Day Handover',
    desc: 'Our trained technicians install everything under the supervision of a dedicated project manager. We handover in 45 days backed by a 10-year warranty.'
  }
];

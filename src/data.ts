import { Product, Industry, Testimonial } from './types';

export const productsData: Product[] = [
  {
    id: 'tshirt',
    name: 'Custom Dri-Fit T-Shirts',
    emoji: '👕',
    description: 'High-quality DTF & sublimation printing. Sweat-wicking, stretchable materials perfect for active wear, trainers, or event branding.',
    basePrice: 0,
    minOrder: 0,
    pricingTag: 'Custom Quote',
    category: 'wear',
    specs: ['Sublimation & DTF printing', 'Premium breathable polyester fabric', 'Interlock stitching & non-fade wash', 'Available sizes: S, M, L, XL, XXL']
  },
  {
    id: 'pants',
    name: 'Track Pants & Sports Bottoms',
    emoji: '👖',
    description: 'Comfortable, durable sportswear custom printed with your academy or fitness team logo on the thigh/calf.',
    basePrice: 0,
    minOrder: 0,
    pricingTag: 'Custom Quote',
    category: 'wear',
    specs: ['High elastomer stretch polyester', 'Zip pockets & comfy elastic waist', 'Vinyl heat transfer & high-grip printing', 'Tailored team fit options']
  },
  {
    id: 'mug',
    name: 'Printed & Photo Mugs',
    emoji: '☕',
    description: 'Vibrant, non-fade ceramic mugs. Excellent choice for corporate gifting, coaching milestones, student toppers, and birthdays.',
    basePrice: 0,
    minOrder: 0,
    pricingTag: 'Custom Quote',
    category: 'gift',
    specs: ['Super-white ceramic (325 ml)', 'Glossy smooth finish & microwave-safe', 'Photo-wrap, double-sided printing', 'Individual premium bubble packing']
  },
  {
    id: 'caps',
    name: 'Branded Custom Caps & Hats',
    emoji: '🧢',
    description: 'Keep your team sharp with premium panel caps. Embroidered or vinyl printed with your local business crest.',
    basePrice: 0,
    minOrder: 0,
    pricingTag: 'Custom Quote',
    category: 'wear',
    specs: ['Structured 5-panel design', 'Adjustable velcro/snap closure', 'Breathable brass eyelets', 'High-contrast logo printing']
  },
  {
    id: 'kits',
    name: 'Sports Jerseys & Full Uniforms',
    emoji: '⚽',
    description: 'Full tournament-grade custom jerseys (Cricket, Football, Basketball, Kabaddi). Player numbers and names included.',
    basePrice: 0,
    minOrder: 0,
    pricingTag: 'Custom Quote',
    category: 'wear',
    specs: ['Complete t-shirt & short combo option', '100% full-surface sublimation dye', 'Anti-static, dry-cool finish', 'Any neon, bold, or complex pattern']
  },
  {
    id: 'merch',
    name: 'Startup & Office Gifting Kits',
    emoji: '🎁',
    description: 'Curated welcome kits for your staff, new hires, or event delegates. Complete containing custom water bottle, notebook & pen.',
    basePrice: 0,
    minOrder: 0,
    pricingTag: 'Custom Quote',
    category: 'gift',
    specs: ['Metallic vacuum flasks / bottles', 'Grained hardbound journals', 'Engraved executive gel pens', 'Luxury brand presentation box']
  }
];

export const industriesData: Industry[] = [
  {
    id: 'gym',
    emoji: '🏋️',
    label: 'Gym & Fitness',
    title: 'Train Hard, Look Harder',
    subtitle: 'Elevate your gym atmosphere. Custom fitness kits, trainer tees, and activewear generated with matching team colors to motivate your crowd.',
    badgeText: 'GYM EXCLUSIVE',
    themeColor: 'orange',
    gradientClass: 'from-orange-500 to-rose-600',
    products: [
      { icon: '👕', name: 'Dri-Fit T-Shirts', desc: 'Moisture-wicking active tees, printed with trainer logo and gym tagline.', tag: 'Custom Quote' },
      { icon: '🩲', name: 'Premium Track Pants', desc: 'Stretch waist training bottoms to make your trainers look cohesive.', tag: 'Custom Quote' },
      { icon: '🧢', name: 'Gym Caps & Bottles', desc: 'Branded accessories that members can buy to represent your community.', tag: 'Custom Quote' },
      { icon: '🦺', name: 'Staff Uniforms', desc: 'Professional collar uniforms for reception, sales, and desk staff.', tag: 'Custom Quote' },
      { icon: '🎽', name: 'Full Gym Kits', desc: 'Matching Combo kits (T-shirt, Track Pant, Shaker) in premium packaging.', tag: 'Custom Quote' }
    ]
  },
  {
    id: 'school',
    emoji: '🏫',
    label: 'Schools & Colleges',
    title: 'Dress Your Campus Right',
    subtitle: 'From annual sports days to everyday proud representing. Durable uniforms, cultural fest T-shirts, and topper award cups that student cherish.',
    badgeText: 'BULK DISCOUNTS',
    themeColor: 'blue',
    gradientClass: 'from-blue-600 to-indigo-800',
    products: [
      { icon: '👔', name: 'School Uniforms', desc: 'Custom printed collar uniforms and skirts/trousers in robust cotton fabric.', tag: 'Custom Quote' },
      { icon: '🎭', name: 'Fest & Cultural Wear', desc: 'Aesthetic fests tees with custom graphics for students and organizers.', tag: 'Custom Quote' },
      { icon: '🎁', name: 'Mugs & Notebook Gifts', desc: 'Farewell packages, farewell gifts, and prize distribution gifts.', tag: 'Custom Quote' },
      { icon: 'House Red', name: 'House Sports Tees', desc: 'Colored sub-shirts in Yellow, Green, Blue, Red for Sports tournaments.', tag: 'Custom Quote' },
      { icon: '🏆', name: 'Medals & Certificates', desc: 'Durable custom badges, medals, and cert folders.', tag: 'Custom Quote' }
    ]
  },
  {
    id: 'coaching',
    emoji: '📚',
    label: 'Coaching Classes',
    title: 'Brand Your Institute',
    subtitle: 'Let Prayagraj discover your coaching center. Unified batch T-shirts, promotional flyers, result banners, and topper mugs to showcase your excellence.',
    badgeText: 'INSTITUTE OFFERS',
    themeColor: 'purple',
    gradientClass: 'from-purple-600 to-violet-850',
    products: [
      { icon: '👕', name: 'Institute Batch T-Shirts', desc: 'Distribute class tees to build academy proudness across study groups.', tag: 'Custom Quote' },
      { icon: '🎉', name: 'Achiever Celebration Wear', desc: 'Special celebration outfits for JEE, NEET, and Board exam toppers.', tag: 'Custom Quote' },
      { icon: '🎁', name: 'Topper Photo Mugs', desc: 'Mugs printed with institute logo + toppers photographs.', tag: 'Custom Quote' },
      { icon: '📋', name: 'Enrollment & Marketing Ads', desc: 'Visiting cards, booklets, pamphlets, and vinyl flex banner printing.', tag: 'Custom Quote' },
      { icon: '🎒', name: 'Exam Success Kits', desc: 'Integrated kit carrying branded notebook, customized pen, and water cup.', tag: 'Custom Quote' }
    ]
  },
  {
    id: 'sports',
    emoji: '⚽',
    label: 'Sports & Teams',
    title: 'Gear Up Your Team',
    subtitle: 'Full-sublimation print sports jerseys for cricket, football, kabaddi, and basketball. Printed player name and custom team design.',
    badgeText: 'TOURNAMENT READY',
    themeColor: 'emerald',
    gradientClass: 'from-emerald-500 to-teal-700',
    products: [
      { icon: '🏏', name: 'Cricket Jerseys', desc: 'Heavy dri-fit sublimation shirts with player moniker, number & side patterns.', tag: 'Custom Quote' },
      { icon: '⚽', name: 'Football Kits', desc: 'Breathable soccer uniforms with coordinated shorts and socks.', tag: 'Custom Quote' },
      { icon: '🏀', name: 'Academy Hoop Jerseys', desc: 'Sleeveless relaxed basketball jerseys in vivid team accents.', tag: 'Custom Quote' },
      { icon: '🥋', name: 'Kabaddi High-Tension Kits', desc: 'Reinforced tear-resistant activewear designed for rigorous matches.', tag: 'Custom Quote' },
      { icon: '🏅', name: 'Tournament Cups & Banner', desc: 'Trophy sets, champion medals, and tournament gate flexes.', tag: 'Custom Quote' }
    ]
  }
];

export const testimonialsData: Testimonial[] = [
  {
    name: 'Vijay K.',
    text: 'Ordered custom gym T-shirts and track pants for my 80+ fitness club members. The printing is extremely crisp and wash-proof. Members loved the dri-fit feel!',
    role: 'Gym Owner, Kareli, Prayagraj',
    rating: 5,
    initials: 'VK',
    colorClass: 'bg-orange-500',
    category: 'gym'
  },
  {
    name: 'Priya S.',
    text: 'Got over 350 cultural event T-shirts for our Annual Science Day. The Print Job helped modify our draft design for free and delivered ahead of schedule.',
    role: 'Event President, School Council',
    rating: 5,
    initials: 'PS',
    colorClass: 'bg-blue-600',
    category: 'school'
  },
  {
    name: 'Arjun M.',
    text: 'Printed our district tournament cricket jerseys. Seamless custom name and custom player numbers. The printing quality makes us look like a pro club!',
    role: 'Cricket Team Leader, Civil Lines',
    rating: 5,
    initials: 'AM',
    colorClass: 'bg-emerald-500',
    category: 'team'
  },
  {
    name: 'Dr. Ramesh P.',
    text: 'The Printed Mugs and hardbound books we ordered as student farewell gifts were fantastic. Exceptional detail in photograph placement on the ceramic gloss.',
    role: 'Coaching Director, Katra Branch',
    rating: 5,
    initials: 'RP',
    colorClass: 'bg-purple-600',
    category: 'school'
  }
];

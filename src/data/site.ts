/**
 * ASIANOWO SITE DATA & CONFIGURATION
 * 
 * ALL editable content lives in this single file.
 * Edit this file to update slots, prices, social handles, WhatsApp messages,
 * projects, and testimonials without touching any component code.
 */

// Import placeholder project photos
import p1Before from '../assets/placeholders/project-1-before.svg';
import p1After from '../assets/placeholders/project-1-after.svg';
import p2Before from '../assets/placeholders/project-2-before.svg';
import p2After from '../assets/placeholders/project-2-after.svg';
import p3Before from '../assets/placeholders/project-3-before.svg';
import p3After from '../assets/placeholders/project-3-after.svg';

export interface ProjectItem {
  id: string;
  caption: string; // Format: [PLACEHOLDER] Project type, area. Duration. No street or estate names!
  beforeImage: ImageMetadata;
  afterImage: ImageMetadata;
  beforeAlt: string;
  afterAlt: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  included: string[]; // Max 3 bullets
  duration: string;
  whatsappMessage: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  client: string; // e.g. "Creative Director, Lagos"
}

export const siteData = {
  /**
   * LAUNCH GATE:
   * - When false: site is in preview mode with <meta name="robots" content="noindex, nofollow">
   *   and displays a small fixed "PREVIEW: not live" badge in the corner.
   * - When true: build will FAIL if any placeholder exists or placeholder image is referenced.
   */
  LAUNCH: false,

  // Brand Information
  brand: {
    name: "Asianowo",
    tagline: "The Art of Personal Style.",
    meaning: "a stylish person",
    originLanguage: "Ibibio",
    pronunciation: "ah-see-ah-no-wo",
    location: "Lagos, Nigeria",
    serviceArea: "Lagos State, Nigeria",
  },

  // Contact & Channels (Confirmed)
  contact: {
    whatsappNumber: "2347061066937",
    whatsappDisplay: "+234 706 106 6937",
    instagramHandle: "asianowoofficial",
    instagramDisplay: "@asianowoofficial",
    instagramUrl: "https://instagram.com/asianowoofficial",
    // Optional contact email for footer only. Set to null or string.
    email: null as string | null,
    domain: "asianowo.com",
  },

  // Availability & Slots (Update monthly)
  availability: {
    monthlyTarget: 15,
    month: "[PLACEHOLDER] October",
    slotsLeft: "[PLACEHOLDER] 4",
  },

  // Pricing
  pricing: {
    // Confirmed single baseline price
    priceFrom: "₦500,000",
    travelFeeNote: "[PLACEHOLDER] Travel and accommodation are calculated based on destination.",
  },

  // Pre-filled WhatsApp Messages (Confirmed)
  messages: {
    consultation: "Hello Asianowo, I'd like to book a closet consultation. My area: ___ . Preferred date: ___ .",
    brands: "Hello Asianowo, I own a fashion brand and I'd like a quote for store styling / stockroom organisation. Store location: ___ .",
    fragranceWaitlist: "Hello Asianowo, please tell me when your fragrance and wardrobe essentials are ready.",
  },

  // Services
  services: [
    {
      id: "closet-reset",
      title: "Closet Reset",
      subtitle: "(closet curation)",
      description: "We turn a crowded wardrobe into an organised space where every piece has a place.",
      included: [
        "[PLACEHOLDER] Wardrobe audit & sorting",
        "[PLACEHOLDER] Space zoning & categorical layout",
        "[PLACEHOLDER] Care & storage system recommendation",
      ],
      duration: "[PLACEHOLDER] Usually 1 day",
      whatsappMessage: "Hello Asianowo, I'd like to ask about the Closet Reset service.",
    },
    {
      id: "outfit-building",
      title: "Outfit Building",
      subtitle: "(wardrobe styling)",
      description: "Outfits built from what you already own, for your lifestyle and your confidence.",
      included: [
        "[PLACEHOLDER] Head-to-toe styled outfit combinations",
        "[PLACEHOLDER] Digital reference lookbook",
        "[PLACEHOLDER] Gap identification for future intentional purchases",
      ],
      duration: "[PLACEHOLDER] Usually 1 day",
      whatsappMessage: "Hello Asianowo, I'd like to ask about the Outfit Building service.",
    },
    {
      id: "keep-remove-refine",
      title: "Keep, Remove, Refine",
      subtitle: "(personal style editing)",
      description: "We keep what works, let go of what doesn't, and define your personal style.",
      included: [
        "[PLACEHOLDER] Silhouette & lifestyle alignment audit",
        "[PLACEHOLDER] Intentional edit of pieces that serve you",
        "[PLACEHOLDER] Personal style direction & principles",
      ],
      duration: "[PLACEHOLDER] Usually 1 day",
      whatsappMessage: "Hello Asianowo, I'd like to ask about the Keep, Remove, Refine service.",
    },
  ] as ServiceItem[],

  // Add-on strip (Secondary Container)
  addon: {
    title: "Finish the space with scent.",
    description: "Fragrance curation for homes and offices.",
    price: "Ask us.",
    whatsappMessage: "Hello Asianowo, I'd like to ask about fragrance curation for my space.",
  },

  // For Brands Section
  forBrands: {
    heading: "For fashion brands and store owners.",
    items: [
      "Store styling: displays and arrangements that help your pieces sell.",
      "Stockroom organisation: a stockroom your team can find things in.",
    ],
    priceDisplay: "Request a quote",
    buttonText: "Talk to us about your store",
    whatsappMessage: "Hello Asianowo, I own a fashion brand and I'd like a quote for store styling / stockroom organisation. Store location: ___ .",
  },

  // How It Works Steps
  howItWorks: [
    { step: 1, text: "Message us on WhatsApp." },
    { step: 2, text: "We talk through your wardrobe and goals." },
    { step: 3, text: "Reset day: we sort, organise and style." },
    { step: 4, text: "You get a wardrobe that is easy to keep." },
  ],
  travelNote: "Based in Lagos. We travel for a fee, and offer virtual consultations if you're elsewhere.",

  // Story copy (Exact from brief)
  story: {
    heading: "The story behind the name.",
    copy: "Asianowo comes from the Ibibio language and means a stylish person: someone who understands the beauty of putting clothing together with intention and elegance. Growing up, styling and pairing outfits came naturally to me. I found joy in helping friends and family look their best, arranging wardrobes and turning everyday clothing into thoughtful outfits. Over time, what began as a passion became a business. When your wardrobe is thoughtfully arranged, getting dressed becomes effortless and confidence follows naturally.",
    // Optional portrait image metadata or path. Hide slot if null.
    portrait: null as ImageMetadata | null,
  },

  // Projects / Before & After (Face-free & client consented only)
  // Hard Rule: No client faces and no identifying details (street names, house numbers, name tags, visible addresses).
  projects: [
    {
      id: "project-1",
      caption: "[PLACEHOLDER] Walk-in closet, Lekki. 4 hours.",
      beforeImage: p1Before,
      afterImage: p1After,
      beforeAlt: "Before closet reset showing crowded wardrobe space",
      afterAlt: "After closet reset showing organised wardrobe space",
    },
    {
      id: "project-2",
      caption: "[PLACEHOLDER] Wardrobe curation, Ikoyi. 1 day.",
      beforeImage: p2Before,
      afterImage: p2After,
      beforeAlt: "Before wardrobe curation showing unorganised shelving",
      afterAlt: "After wardrobe curation showing streamlined shelving and hanging",
    },
    {
      id: "project-3",
      caption: "[PLACEHOLDER] Bedroom closet edit, Victoria Island. 5 hours.",
      beforeImage: p3Before,
      afterImage: p3After,
      beforeAlt: "Before bedroom closet edit",
      afterAlt: "After bedroom closet edit with categorized sections",
    },
  ] as ProjectItem[],

  // Testimonials: Empty array by default.
  // Rule: Render only if contains items. If empty, hide the section entirely. Never generate sample testimonials.
  testimonials: [] as TestimonialItem[],

  // Optional custom logo file. If null, renders Italianno text wordmark.
  logoFile: null as ImageMetadata | null,
};

export default siteData;

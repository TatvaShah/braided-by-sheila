import type { SiteConfig } from "@/lib/types";

const g = (n: number, width: number, height: number, alt: string, caption: string, href: string) => ({ src: `/images/post-${n}.jpg`, width, height, alt, caption, href });

export const site: SiteConfig = {
  name: "BraidedBySheila",
  tagline: "Knotless, tribal and boho braids, twists and feed-ins in Brampton, Ontario.",
  category: "Hair braiding",
  schemaType: "HairSalon",
  area: "Brampton, ON",
  siteUrl: "https://braided-by-sheila.vercel.app",

  theme: {
    preset: "salon-chic",
    colors: { accent: "#9b4f68" },
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Brampton braider",
    headline: "Braids done with love, in Brampton",
    subhead: "Knotless, pick and drop, boho, miracle knots, tribal braids, twists and feed-ins. Send a DM or text to book your appointment.",
    images: [
      { src: "/images/post-2.jpg", alt: "Smedium pick and drop braids" },
      { src: "/images/post-1.jpg", alt: "Medium knotless braids" },
      { src: "/images/post-9.jpg", alt: "Miracle knots" },
    ],
    secondaryCta: { label: "See the styles", href: "#gallery" },
  },

  highlights: ["Knotless and boho braids", "Miracle knots and twists", "Brampton, Ontario", "Book by DM or text"],

  about: {
    title: "Doing what I love",
    body: [
      "BraidedBySheila is a home based braider in Brampton creating knotless, tribal and boho braids, pick and drop braids, miracle knots, twists and feed-ins.",
      "Grateful for every client and always excited to create your next look. Send a DM or text to book your appointment.",
    ],
    image: { src: "/images/post-11.jpg", alt: "Miracle knots by BraidedBySheila" },
  },

  menu: {
    label: "Services",
    title: "Styles",
    variant: "list",
    showPrices: false,
    priceNote: "Message for pricing on your style and length.",
    groups: [
      {
        title: "Braids",
        items: [
          { name: "Knotless braids", description: "Smedium and medium" },
          { name: "Pick and drop braids" },
          { name: "Boho braids and Boho French curls" },
          { name: "Tribal braids" },
          { name: "Feed-in braids" },
        ],
      },
      {
        title: "Knots and twists",
        items: [
          { name: "Miracle knots" },
          { name: "Twists" },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent styles",
    items: [
      g(2, 1080, 1920, "Smedium pick and drop braids", "Smedium pick and drop braids", "https://www.instagram.com/p/DfDtRN2NAP6/"),
      g(1, 1080, 1440, "Medium knotless braids", "Medium knotless braids", "https://www.instagram.com/p/DfD3XZ0jXBq/"),
      g(6, 720, 1280, "Smedium pick and drop braids", "Pick and drop braids", "https://www.instagram.com/p/De3N348tvqP/"),
      g(9, 720, 1280, "Miracle knots", "Miracle knots", "https://www.instagram.com/p/Deu6YZkxQGM/"),
      g(11, 720, 1280, "Miracle knots", "Miracle knots", "https://www.instagram.com/p/DeptIK2xJxE/"),
      g(7, 720, 1280, "Smedium pick and drop braids", "Pick and drop braids", "https://www.instagram.com/p/De0VH6LN7rP/"),
      g(8, 720, 1280, "Smedium Boho French curls", "Boho French curls", "https://www.instagram.com/p/Dex_RhJNtz6/"),
      g(4, 720, 1280, "Smedium knotless braids", "Smedium knotless braids", "https://www.instagram.com/p/De8dRzixcey/"),
    ],
  },

  instagram: { handle: "braidedbysheila", embeds: [] },

  order: {
    label: "How to book",
    title: "Book in a quick DM",
    intro: "Send a DM on Instagram or text 289-980-5627. Tap the button to copy a starter message, then paste it into the chat.",
    dmMessage: "Hi Sheila! I would love to book an appointment.\nStyle:\nSize and length:\nPreferred date:\nColour (if any):",
    links: [],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book?", a: "Send a DM on Instagram or text 289-980-5627 with your style, size, length and preferred date." },
    { q: "Where are you located?", a: "BraidedBySheila is home based in Brampton, Ontario. Details are shared when you book." },
    { q: "How much does a style cost?", a: "Pricing depends on the style, size and length. Message for a quote." },
  ],

  contact: {
    title: "Contact and booking",
    phone: "289-980-5627",
    area: "Brampton, Ontario",
    socials: [],
  },

  seo: {
    title: "BraidedBySheila | Knotless and boho braids in Brampton",
    description: "Brampton braider for knotless, pick and drop, boho and tribal braids, miracle knots, twists and feed-ins. Book your appointment by Instagram DM or text.",
    keywords: ["knotless braids Brampton", "Brampton braider", "boho braids Brampton", "miracle knots Brampton"],
    ogPhoto: "/images/og-photo.jpg",
  },
};

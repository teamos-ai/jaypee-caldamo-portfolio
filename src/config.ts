/**
 * Single edit-point for everything that changes per-deployment.
 * Swap these values (booking link, socials, domain) without touching components.
 */
export const SITE = {
  name: "Jaypee Caldamo",
  role: "Virtual Assistant",
  discipline: "Marketing & Admin Support",
  location: "Tanjay City, Philippines",
  worksWith: "Working with clients across New Zealand, Australia & the US",
  email: "jaypeecaldamo2@gmail.com",
  phone: "+63 969 417 8007",
  phoneHref: "tel:+639694178007",
  resume: "/Jaypee-Caldamo-Resume.pdf",
  domain: "https://jaypee-caldamo-portfolio.vercel.app",

  /**
   * Inline booking embed.
   * Paste a Calendly / GoHighLevel / Google Appointment / Cal.com embed URL here.
   * While this stays empty, the Book-a-Call section shows a polished fallback
   * (email + phone) instead of a broken iframe.
   * Example (Calendly): "https://calendly.com/jaypeecaldamo/discovery-call"
   */
  bookingEmbedUrl: "",

  socials: {
    // Replace "#" with the real profile URLs when available.
    linkedin: "#",
    email: "mailto:jaypeecaldamo2@gmail.com",
    portfolio: "https://jaypee-caldamo-portfolio.vercel.app",
  },
} as const;

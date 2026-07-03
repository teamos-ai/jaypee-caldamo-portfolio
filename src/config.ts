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
   * Inline booking embed (GoHighLevel / Team OS calendar widget).
   * Rendered as a plain fixed-height iframe. We intentionally do NOT load
   * GHL's form_embed.js — in this external SPA it hides the iframe off-screen
   * and breaks the embed. If you ever change the calendar height, adjust the
   * iframe height classes in src/components/Booking.tsx.
   * Clear this value to fall back to the email panel.
   */
  bookingEmbedUrl: "https://link.teamos.ai/widget/booking/JRFrBfUv9kJwUPzABtAO",

  /** DOM id for the booking iframe. */
  bookingEmbedId: "JRFrBfUv9kJwUPzABtAO_1783045325047",

  socials: {
    // Replace "#" with the real profile URLs when available.
    linkedin: "#",
    email: "mailto:jaypeecaldamo2@gmail.com",
    portfolio: "https://jaypee-caldamo-portfolio.vercel.app",
  },
} as const;

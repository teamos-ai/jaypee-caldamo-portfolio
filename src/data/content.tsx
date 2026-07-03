import type { LucideIcon } from "lucide-react";
import {
  ClipboardList,
  Clapperboard,
  TrendingUp,
  HeartHandshake,
  Contact2,
  CalendarClock,
  Mail,
  FileSignature,
  Search,
  Mic,
  Image as ImageIcon,
  LayoutTemplate,
  Palette,
  Scissors,
  Share2,
  Linkedin,
  Newspaper,
  Megaphone,
  BarChart3,
  Brain,
  Sparkles,
  MessagesSquare,
  ListChecks,
} from "lucide-react";

export type IconType = LucideIcon;

/* ── Hero floating "power-up" chips ─────────────────────────── */
export const floatingSkills: { label: string; icon: IconType }[] = [
  { label: "Zoho CRM", icon: Contact2 },
  { label: "Podcast Production", icon: Mic },
  { label: "Newsletters & EDM", icon: Newspaper },
  { label: "LinkedIn Management", icon: Linkedin },
  { label: "Canva Design", icon: Palette },
  { label: "Client Outreach", icon: Megaphone },
  { label: "Google Workspace", icon: LayoutTemplate },
  { label: "Content Design", icon: ImageIcon },
];

/* ── Tools marquee ──────────────────────────────────────────── */
export const tools: string[] = [
  "Zoho CRM",
  "LinkedIn Sales Navigator",
  "Canva",
  "Google Workspace",
  "Microsoft Office",
  "Buzzsprout",
  "YouTube Studio",
  "Meta Business Suite",
];

/* ── Power-Ups (skills, grouped, bento) ─────────────────────── */
export interface PowerUp {
  title: string;
  tag: string;
  icon: IconType;
  blurb: string;
  items: { label: string; icon: IconType }[];
  span: "wide" | "tall" | "std";
}

export const powerUps: PowerUp[] = [
  {
    title: "Administrative Command",
    tag: "Operations",
    icon: ClipboardList,
    span: "tall",
    blurb:
      "The unglamorous work that keeps a business moving — owned end to end so nothing slips.",
    items: [
      { label: "Zoho CRM lead tracking & pipeline updates", icon: Contact2 },
      { label: "Calendar management & scheduling", icon: CalendarClock },
      { label: "Inbox & email management", icon: Mail },
      { label: "Client contracts & service agreements", icon: FileSignature },
      { label: "LinkedIn Sales Navigator prospecting", icon: Search },
      { label: "Meeting minutes & follow-ups", icon: ListChecks },
    ],
  },
  {
    title: "Content & Multimedia",
    tag: "Studio",
    icon: Clapperboard,
    span: "wide",
    blurb:
      "From raw podcast recordings to scroll-stopping thumbnails — I produce the assets a brand ships every week.",
    items: [
      { label: "Podcast distribution — YouTube, Buzzsprout & web", icon: Mic },
      { label: "YouTube & podcast thumbnails", icon: ImageIcon },
      { label: "Website carousels & headers", icon: LayoutTemplate },
      { label: "Canva layouts & brand assets", icon: Palette },
      { label: "Long-form edits → short-form clips", icon: Scissors },
    ],
  },
  {
    title: "Growth & Outreach",
    tag: "Marketing",
    icon: TrendingUp,
    span: "std",
    blurb: "Consistent presence and outreach that compounds into pipeline.",
    items: [
      { label: "Social media account management", icon: Share2 },
      { label: "LinkedIn profile & article production", icon: Linkedin },
      { label: "Newsletters & EDM campaigns", icon: Newspaper },
      { label: "Campaign data & reporting", icon: BarChart3 },
    ],
  },
  {
    title: "The Human Layer",
    tag: "Why me",
    icon: HeartHandshake,
    span: "std",
    blurb:
      "A psychology degree and a service-first mindset — I read context, not just tasks.",
    items: [
      { label: "Psychology (BSc) — people-first thinking", icon: Brain },
      { label: "Proactive leadership & ownership", icon: Sparkles },
      { label: "Clear, warm communication", icon: MessagesSquare },
    ],
  },
];

/* ── Experience ─────────────────────────────────────────────── */
export interface Job {
  period: string;
  role: string;
  org: string;
  place: string;
  points: string[];
}

export const experience: Job[] = [
  {
    period: "2025 — 2026",
    role: "Marketing & Admin Assistant (VA)",
    org: "Contact Centre Network New Zealand (CCNNZ)",
    place: "Auckland, New Zealand · Remote",
    points: [
      "Own digital content across marketing platforms — producing podcast, newsletter and website assets for The Kiwi CX Collective.",
      "Coordinate scheduling and communication between the marketing team and external vendors.",
      "Run segmented email marketing campaigns and track performance to inform the next send.",
      "Keep administrative workflows and document systems tidy, fast and reliable.",
    ],
  },
  {
    period: "2024 — 2025",
    role: "Human Resource Intern",
    org: "Extraordinary Customer Experience (ECE)",
    place: "Dumaguete City, Negros Oriental",
    points: [
      "Processed onboarding documents and maintained confidential personnel files.",
      "Coordinated interview schedules and supported resume screening.",
      "Compiled HR metrics reports to support data-driven decisions.",
    ],
  },
  {
    period: "2020 — 2022",
    role: "Digital Sales Representative",
    org: "Lasting Impact",
    place: "California City, CA · Remote",
    points: [
      "Cultivated client relationships to grow digital product adoption.",
      "Managed CRM data to keep sales pipelines accurate and forecasts reliable.",
      "Collaborated with marketing to keep messaging consistent across channels.",
    ],
  },
];

/* ── Education ──────────────────────────────────────────────── */
export const education = [
  {
    period: "2021 — 2025",
    title: "BSc Psychology",
    org: "Negros Oriental State University",
    note: "People-first thinking that shapes how I support clients.",
  },
  {
    period: "2019 — 2020",
    title: "Senior High School",
    org: "Diaz College",
    note: "Graduated With High Honors.",
  },
];

/* ── Portfolio ──────────────────────────────────────────────── */
export interface Work {
  n: string;
  title: string;
  category: string;
  desc: string;
  image: string;
}

export const works: Work[] = [
  {
    n: "01",
    title: "Sample Layouts",
    category: "LinkedIn & article banners",
    desc: "On-brand article banners and social layouts produced for CCNNZ leadership content.",
    image: "/assets/image-02.png",
  },
  {
    n: "02",
    title: "Website Carousel",
    category: "Web graphics",
    desc: "Carousel-ready website graphics that keep the brand consistent across every slide.",
    image: "/assets/image-04.png",
  },
  {
    n: "03",
    title: "Podcast Thumbnails",
    category: "The Kiwi CX Collective",
    desc: "Episode cover art with strong hierarchy and guest framing built for click appeal.",
    image: "/assets/image-06.png",
  },
  {
    n: "04",
    title: "YouTube Thumbnails",
    category: "Video content",
    desc: "High-contrast thumbnails engineered for stronger click-through and brand recall.",
    image: "/assets/image-08.png",
  },
  {
    n: "05",
    title: "Newsletters",
    category: "EDM design",
    desc: "Newsletter cards and email visuals that turn weekly episodes into a readable digest.",
    image: "/assets/image-10.png",
  },
  {
    n: "06",
    title: "Newsletter Content",
    category: "Editorial layouts",
    desc: "Long-form newsletter layouts and supporting marketing content across the client's site.",
    image: "/assets/image-12.png",
  },
];

/* ── Testimonial ────────────────────────────────────────────── */
export const testimonial = {
  quote:
    "This week's EDM looks good. The content has gone up a notch and all the links are working. I'm happy with what you've produced — great work.",
  attribution: "Client feedback",
  context: "Contact Centre Network New Zealand",
};

export const reference = {
  name: "Elias Kanaris",
  title: "CEO — The Insight & Strategy Group / CCNNZ",
  note: "Full reference available on request.",
};

import type { Testimonial } from "../types/Testimonials";

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Anna K.",
    company: "Retail Owner",
    rating: 5,
    message:
      "BrightWave's audit showed issues I didn't even know were hurting conversions. The redesign made my site feel modern again.",
    intent: "audit",
    createdAt: "2026-01-12",
    approved: true,
  },
  {
    id: "t2",
    name: "Marco S.",
    company: "Creator",
    rating: 5,
    message:
      "I had an idea for an anime ranking site. BrightWave built it exactly how I imagined — fast, clean, and unique.",
    intent: "build",
    createdAt: "2026-02-03",
    approved: true,
  },
  {
    id: "t3",
    name: "Client Name",
    company: undefined,
    rating: 5,
    message:
      "Super responsive, super professional. The whole experience was smooth from start to finish.",
    intent: "general",
    createdAt: "2026-03-18",
    approved: true,
  },
];
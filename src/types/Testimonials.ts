export type TestimonialIntent = "audit" | "build" | "general";

export interface Testimonial {
  id: string;
  name?: string;
  company?: string;
  rating: number; // 1–5
  message: string;
  intent: TestimonialIntent;
  createdAt: string;
  approved: boolean;
}
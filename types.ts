import { LucideIcon } from 'lucide-react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatarUrl: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}
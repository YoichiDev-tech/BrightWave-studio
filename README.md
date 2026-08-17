# Title

BrightWave Studio

## Screenshot

![alt text](image-1.png)

## Description

A fully custom, modern studio website built with React, TypeScript, Tailwind CSS and Vite.
Designed to show new/small/medium-sized business owners what a fast, handcrafted site looks and feels like.

## Project Purpose

This project serves as the official BrightWave Studio website. It showcases real sections,
real UX, real templates, and a real studio flow — giving prospects a clear sense of how I build,
how I communicate, and what working together looks like.

Beyond the marketing site itself, it's now also a working demo of what the studio can build:
a live audit tool, an instant pricing configurator, and an open component library — not just
copy describing the service, but the service running in the browser.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Supabase (planned — testimonials engine)
- Vercel Serverless Functions
- Resend (transactional email)

## Current Status

- Fully functional demo — builds and lints clean
- All sections implemented: Hero, Services, Process, Pricing, Sprint Configurator,
  Portfolio, Why Choose Us, FAQ, About, Contact, Footer
- 3 portfolio templates are live, clickable routes (`/work/...`), each a
  full standalone landing page
- Contact form is wired to a real backend via Resend (`/api/send`) — actually
  sends, not simulated
- AI-Ready Site Audit tool is live (`/api/audit`) — fetches a visitor's site
  server-side and scores it for real, no fake numbers
- Sprint Configurator hands its output straight into the Contact form, pre-filled
- The Lab (`/lab`) — a small open component showcase, copy-paste ready
- No real client testimonials, case studies, or production assets yet —
  content is illustrative

## Live Features

- AI-Ready Site Audit — instant, real heuristic scoring of any URL
  (speed, UI/UX modernism, mobile responsiveness, AI readability)
- Architecture & MVP Sprint Configurator — toggle-based scope + instant
  price/timeline estimate, feeds straight into Contact
- The Lab — public, copyable component snippets with live previews
- Crisp live chat fully integrated and mobile-synced
- Real-time visitor tracking via Crisp
- Custom branded chatbox with welcome message
- Working contact form (Resend) with confirmation state
- Fully responsive across mobile, tablet, and desktop
- Production deployment on Vercel

## Next Steps

- Testimonials engine (hybrid: home preview + full `/testimonials` page,
  Supabase-backed — plan already written in `Updates.txt`)
- Instagram Growth Showcase using the official Instagram Graph API
- Add follower count + engagement metrics to the site
- Create a Facebook Page and link Instagram Business account
- Implement serverless API route for Instagram data
- Add caching layer for stable API performance
- Add a privacy policy
- Add analytics
- Confirm real Threads/Instagram handles across Footer + Lab (currently placeholders)

## End-Project Considerations

- Buy `brightwavestudio.com` and set up `hello@` on it
- Add analytics before driving traffic to it
- Revisit copy once there's a first real client project to reference

## Changelog

### 08/08/2026
- Updated spacing, layout, and UI polish across all sections
- Improved scroll behavior and button interactions
- Enhanced typography and visual hierarchy
- Cleaned component structure and removed unused code
- Verified Tailwind v4 configuration and build stability

### 10/08/2026

#### stack
- Crisp chat integration
- Calendly scheduling
- Supabase

#### current status
- Crisp chat integration added
- Calendly booking flow added
- Planned testimonials
- Fully responsive

#### live features
- Pricing section added
- FAQ section answering common questions
- About section

### 15/08/2026
- Full code review pass
- Fixed unconditional ReviewPopup rendering
- Removed placeholder testimonial content ahead of the real engine
- Added missing OG tags for social sharing
- Hover/animation polish across static sections
- Added social links (Threads, Instagram, GitHub) to Footer

### 16/08/2026
- Added AI-Ready Site Audit tool: real server-side fetch + honest heuristic
  scoring (speed, UI/UX modernism, mobile, AI readability), no fabricated data
- Added Architecture & MVP Sprint Configurator: toggle scope, instant
  price/timeline estimate, hands off straight into Contact pre-filled
- Added The Lab (`/lab`): open, copyable component showcase
- Extended Contact to accept a pre-filled hand-off from either new tool
- Added Lab link to Nav (desktop + mobile)

### 17/08/2026
- Added new hero screenshot (/public/images/bloom/hero.png) sourced from the Bloom Market template
- Integrated the hero screenshot into the Bloom Market case study hero section using the `<Screenshot />` component
- Ensured layout consistency with existing case study visual sections
- Resolved Git branch sync issues caused by empty feature branches
- Re‑applied missing case study changes and committed them to a new feature branch
- Successfully pushed the corrected branch and opened the PR for Issue #5

## Author

Yoichi dev
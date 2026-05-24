# Ekta Web — Project Prompt
# Say "Activate Ekta Web" to load this

## Quick Info
- **Path:** D:\Projects\Ekta Website
- **Live:** https://infoyashkgf-collab.github.io/Ekta-Website/
- **GitHub:** https://github.com/infoyashkgf-collab/Ekta-Website

## Brand Identity
- **Name:** Ekta Sethi Makeovers
- **Owner:** Ekta Sethi — Best Makeup Artist in Delhi
- **Trained by:** Celebrity MUA Atul Chauhan
- **Phone:** +91 9289169953
- **Email:** kunalekta1989@gmail.com
- **Instagram:** https://www.instagram.com/ekta__makeoverss
- **Tagline:** "Unlock the Confidence You Deserve"

## Brand Colors
- Primary: #4A0E4E (Deep Royal Purple)
- Secondary: #C9A84C (Burnished Gold)
- Accent: #6B0F1A (Rich Burgundy)
- Light: #FDF5E6 (Champagne Ivory)

## Pages
| File | Purpose |
|------|---------|
| index.html | Main homepage (all sections, hero slider, services, about, gallery, testimonials, contact form, footer) |
| gallery.html | Full gallery page (cinematic scroll zoom intro, sparkles, light sweep, 22 images, lightbox) |
| contact-card.html | Contact card page |
| assets/css/style.css | Main stylesheet (v=17) |
| assets/js/main.js | Main JS (hero slider, menu, lightbox, form, GSAP ScrollTrigger) |

## Key Features Built
### Homepage (index.html)
- GSAP + ScrollTrigger loaded via CDN
- Hero slider: gold shimmer sweep + text stagger reveal on slide change
- Service cards: spring bounce-in on scroll, gold border glow + Ken Burns zoom on hover
- About image: GSAP parallax zoom on scroll
- Home gallery grid: gold shimmer overlay + Ken Burns zoom on hover
- Testimonials: fade-in on scroll + hover lift
- Submit button: pulsing gold glow ring animation
- Form inputs: gold focus glow border
- Brand items: hover scale + color shift
- Footer columns: staggered fade-up reveal on scroll
- Floating buttons: WhatsApp, Instagram, Phone

### Gallery Page (gallery.html)
- GSAP + ScrollTrigger loaded via CDN
- Header: ornamental flourishes (scale+rotate bounce-in) beside title
- Home + Instagram icon buttons (right-aligned, 50px)
- Cinematic scroll intro: sticky image with GSAP zoom (200vh, scrub 1.5)
- "The Art of Makeup" text fade-in
- Background: sparkles + golden light sweep (conic-gradient rotation)
- Cards: pulse ring glow, golden shimmer overlay, Ken Burns zoom, caption slide-up on hover
- Scroll-triggered card reveal via IntersectionObserver
- Lightbox: crossfade transitions, prev/next, keyboard arrows
- Image object-position: cover, center top

## What NOT to touch
- No placeholder/external images
- No images outside D:\Projects\images
- Don't change color scheme without approval
- Don't touch logo/header without permission
- All phone/call links go to contact-card.html

## GSAP Animation Patterns Used
- Scroll scrub: `scrub: 1.5` for smooth zoom, `scrub: true` for instant
- IntersectionObserver: service cards, testimonials, footer
- CSS keyframes: goldShimmer, heroTextIn, serviceBounce, kenBurns, btnPulse, testimonialFade, footerFade, flourishEnter, drawFlourish, lightSweep, sparkleFloat, titleBounce, cardRise, pulseGlow

## Images (from D:\Projects\images)
- ekta-sethi.jpg (logo/about photo)
- IMG_0082.jpg through IMG_0106.jpg (work gallery)
- bridal-2.jpg through bridal-14.jpg (bridal looks)

## Cache Busting
- style.css current version: v=17
- GitHub Pages CDN caches aggressively — always bump query param or use hard refresh

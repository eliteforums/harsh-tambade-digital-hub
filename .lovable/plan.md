

# Plan: Match Waverly Consulting Reference UI

## What Changes

Based on the Waverly Consulting Dribbble reference and the uploaded video, the current portfolio needs several adjustments to match the reference more closely. The uploaded photos will replace the placeholder portrait.

## Steps

### 1. Replace portrait image with uploaded photo
- Copy `IMG_4689_1.jpg` (the professional desk photo) to `src/assets/harsh-portrait.jpg` as the primary hero/about image
- Copy `IMG-20260209-WA0007.jpg` (BrowserStack photo) to `src/assets/harsh-secondary.jpg` for optional use in the About section

### 2. Redesign HeroSection to match Waverly layout
The Waverly reference shows:
- Full-width hero with the large heading on the left taking up most of the space
- A portrait image on the right side, taller and more prominent
- Name and description positioned below/beside the image
- CTAs positioned below the intro text
- The image should NOT be grayscale by default — show it in full color with a clean crop

### 3. Redesign AboutSection to match Waverly style
- Remove the dark overlay on the image — use a clean side-by-side layout
- Image on the left, full color, clean rectangular frame
- Text content on the right with better spacing
- Use the secondary photo (BrowserStack) here for variety

### 4. Improve section transitions and spacing
- Add smoother scroll-triggered animations matching the Waverly feel
- Tighter spacing between sections with clean horizontal dividers
- Services section: add hover arrow/indicator on each row (Waverly shows a subtle arrow on hover)

### 5. Update Navbar styling
- Make navbar more minimal — thinner, with less visual weight
- Remove background blur, use a cleaner transparent-to-solid transition on scroll

### 6. Remove `App.css` overrides
- The `App.css` file has leftover Vite template styles (`max-width: 1280px`, `text-align: center`, padding) that may conflict with the full-width editorial layout. Clean it up.

## Technical Details
- Images: Copy user uploads to `src/assets/` and import as ES modules
- Animations: Continue using `framer-motion` with `whileInView` for scroll reveals
- Layout: Full-width sections with `section-padding` utility, no container max-width constraints
- The hero image should be displayed at a larger size (~400-500px wide) with `object-cover` and a 3:4 or 4:5 aspect ratio


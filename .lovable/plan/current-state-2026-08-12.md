Reduce hero top spacing so social links are visible above the fold on desktop

## Current state
- The hero section has `pt-20 pb-24 md:pt-28 md:pb-32` (top padding 7rem/112px on desktop).
- The sticky header sits above the hero with its own `py-4` padding.
- Combined top whitespace pushes the photo and social links below the first-viewport fold on many desktop screens.

## What we will change
- Tighten the hero section’s top padding on desktop and tablet breakpoints so the profile photo, tag/tagline, and social links are visible on first load.
- Keep mobile spacing generous enough to still feel airy.
- Preserve the existing cursor spotlight, kinetic name, and stagger animations.

## Proposed values
- Mobile: keep `pt-20` (80px) as-is.
- Tablet (`md:`): reduce from `md:pt-28` to `md:pt-16` or `md:pt-20` (64–80px).
- Desktop (`lg:`): add `lg:pt-14` (56px) so the social links sit clearly above the fold on 1024px+ screens.
- Bottom padding stays `md:pb-32 lg:pb-32` to maintain the section’s vertical rhythm.

## Verification
- Preview the site in desktop, tablet, and mobile views.
- Confirm the profile photo, tagline, and all four social icons appear without scrolling on desktop.
- Confirm no other sections break or overlap.

# Portfolio polish: grain, tilt, palette

Five additive UI upgrades to `src/pages/Index.tsx`, `src/styles.css`, and one new component. No content or SEO changes.

## 1. Grain texture overlay
In `src/pages/Index.tsx`, add `position: "relative"` to the outermost wrapper's inline style and insert a fixed-position SVG-noise overlay as its first child (pointer-events: none, low opacity, `mix-blend-mode: overlay`, zIndex behind content). The user's message truncated the exact overlay markup — I'll use a standard fractalNoise SVG data URI at ~6% opacity covering the viewport.

## 2. Balanced headline wrapping
Add `text-balance` class to:
- Hero `<h1>` "Fardin Ahmed Shovon"
- Tagline `<p>` "Turning visions into ventures."
- About `<h2>` "A founder building quietly, shipping deliberately."

## 3. Custom selection color
Append to `src/styles.css`:
```css
::selection { background: #F8F9FA; color: #403f3c; }
```

## 4. Magnetic tilt on ApkBongo card
Since the venture card is currently rendered inside a `.map()`, refactor to render the single ApkBongo card directly (or special-case index 0) so a `useRef` can attach cleanly. Add `useRef` import, `cardRef`, `handleCardMove`, `handleCardLeave` per spec. Attach `ref`, `onMouseMove`, `onMouseLeave`, and extend the inline style with `transition: "border-color 0.2s, transform 0.15s ease"`.

## 5. Command palette (⌘K / Ctrl+K)
Create `src/components/CommandPalette.tsx` per the provided spec (the pasted code lost JSX tags in transit — I'll reconstruct the intended structure: a fixed ⌘K trigger button bottom-right, and a modal overlay listing About / Ventures / Contact / Email with keyboard toggle and Escape to close). Actions call `scrollIntoView` on existing section ids (`about`, `ventures`, `contact` — already present in `Index.tsx`, no id changes needed) or set `window.location.href` for email.

Import and render `<CommandPalette />` near the top of `Index.tsx`'s return.

## Verify
Run `npm run build`; confirm no TS/build errors and that prerender still succeeds.

## Technical notes
- Tailwind v4 is in use — `text-balance` works with no config.
- Section ids `about`, `ventures`, `contact` already exist, so palette actions work as-is.
- Grain overlay uses inline SVG data URI to avoid a new asset file.
- Tilt handler mutates `style.transform` directly (imperative) as specified — no state churn.

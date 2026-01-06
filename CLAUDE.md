# Consulting Contractors - Project Guidelines

## Design Philosophy

This is a modern, minimalist, professional contractor services website built with Next.js, Tailwind CSS, GSAP, and Framer Motion.

---

## Mobile vs Desktop Interaction Effects

### Critical Rule: Hover Effects & Mobile Compatibility

**Mobile devices do not support hover states** - touch screens only register tap/touch events. When implementing interactive effects:

#### Desktop (hover-based)
- Use `hover:` Tailwind classes or `whileHover` from Framer Motion
- Mouse-following effects (3D card rotations, cursor trails)
- Hover-triggered animations and state changes

#### Mobile (scroll-triggered)
- **Replace hover effects with scroll-triggered animations**
- Use GSAP ScrollTrigger or Framer Motion's `useInView` / `whileInView`
- Trigger effects when elements reach the **center of the viewport** (50% scroll position)
- Use `viewport={{ amount: 0.5 }}` for Framer Motion
- Use `start: "center center"` for GSAP ScrollTrigger

#### Implementation Pattern

```tsx
// Example: Glare effect with responsive triggers
import { motion, useInView } from 'framer-motion';

const ResponsiveGlareCard = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 }); // Trigger at 50% visibility

  return (
    <motion.div
      ref={ref}
      className="group"
      // Desktop: hover triggers effect
      whileHover={{ /* desktop hover effect */ }}
      // Mobile: scroll triggers effect via className or animate prop
      animate={isInView ? { /* mobile scroll effect */ } : {}}
    >
      {children}
    </motion.div>
  );
};
```

#### CSS Media Query Pattern

```css
/* Desktop hover effects */
@media (hover: hover) and (pointer: fine) {
  .glare-hover:hover::before {
    background-position: 100% 100%, 0 0;
  }
}

/* Mobile/touch - use scroll-triggered JS instead */
@media (hover: none) or (pointer: coarse) {
  .glare-hover::before {
    /* Static or scroll-triggered via JS */
  }
}
```

#### Key Principles

1. **Always provide mobile alternatives** for hover-dependent features
2. **Scroll-trigger at viewport center** (50%) for natural feel during scrolling
3. **Test on real devices** - browser emulators don't fully replicate touch behavior
4. **Consider reduced motion** - respect `prefers-reduced-motion` media query
5. **Touch feedback** - add `active:` states for tap confirmation on mobile

---

## Animation Libraries in Use

- **GSAP + ScrollTrigger**: Complex scroll-based animations, text splitting
- **Framer Motion**: Component animations, gestures, layout transitions
- **SplitType**: Character-level text animation

---

## Color Palette

- Background: White (#FFFFFF)
- Foreground: Dark grey (#1A1A1A)
- Primary: Black (#000000)
- Secondary: Medium grey (#808080)
- Accent overlays: black/50, black/60 for hero sections

---

## File Structure

```
components/
├── layout/      # Navbar, Footer
├── sections/    # Hero, PageHero, FeatureSection, ServiceBlock
└── ui/          # Button, AnimatedText, PremiumCard, GlareCard
app/             # Next.js App Router pages
```

---

## UI Components

### GlareCard

A responsive glare/shine sweep effect for image cards.

**Location**: `components/ui/GlareCard.tsx`

**Behavior**:
- **Desktop**: Glare sweeps on hover
- **Mobile**: Glare sweeps when element scrolls to 50% viewport visibility

**Props**:
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `glareColor` | string | `#ffffff` | Hex color of the glare |
| `glareOpacity` | number | `0.4` | Opacity of the glare (0-1) |
| `glareAngle` | number | `-35` | Angle of the glare sweep (degrees) |
| `glareSize` | number | `300` | Size of glare gradient (%) |
| `transitionDuration` | number | `800` | Animation duration (ms) |
| `className` | string | - | Additional CSS classes |

**Usage**:
```tsx
import { GlareCard } from "@/components/ui/GlareCard";

<GlareCard glareOpacity={0.35} glareAngle={-30}>
  <Image src="/image.webp" alt="..." fill />
</GlareCard>
```

**CSS Classes** (in `globals.css`):
- `.glare-card` - Base styles with pseudo-element for glare
- `.glare-card--active` - Triggers glare on mobile (added via JS)

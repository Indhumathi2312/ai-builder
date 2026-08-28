# HTML to Next.js — Exact Production Conversion Specification

## 1. Project Objective

Convert the provided existing HTML project into a **production-ready, latest stable Next.js application** while preserving the original website as accurately as technically possible.

The conversion must be treated as an **exact migration**, NOT a redesign.

The existing HTML project is the single source of truth for:

* Layout
* Visual hierarchy
* Typography
* Font sizes
* Font weights
* Colors
* Spacing
* Widths
* Heights
* Borders
* Border radius
* Shadows
* Gradients
* Backgrounds
* Images
* Icons
* Buttons
* Hover states
* Animations
* Transitions
* Scroll effects
* Responsive behavior
* Section ordering
* Content
* Navigation behavior
* Interactive elements

Do not redesign, simplify, modernize, reinterpret, or visually alter the original HTML design.

The final Next.js implementation should look and behave as close to the original HTML implementation as possible.

---

# 2. Technology Requirements

Use the latest stable versions available at the time of implementation.

Required stack:

* Next.js — latest stable version
* React — version compatible with the selected Next.js version
* TypeScript
* Tailwind CSS — latest stable version compatible with the selected Next.js version
* Framer Motion — latest stable version
* ESLint
* Modern CSS
* npm

Use the **Next.js App Router** architecture unless the source project requires a specific compatibility decision.

Do NOT use JavaScript files for application logic.

Use TypeScript throughout the project.

Preferred extensions:

```text
.ts
.tsx
```

Avoid unnecessary:

```text
.js
.jsx
```

---

# 3. First Step — Git Configuration

Before modifying or creating the application structure, create/update the root `.gitignore`.

The `.gitignore` must be created FIRST.

It must properly ignore at minimum:

```gitignore
node_modules/
.next/
out/
dist/
build/

.env
.env.local
.env.development.local
.env.test.local
.env.production.local

*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

.DS_Store
Thumbs.db

.vercel/

coverage/
.cache/
```

Do not accidentally ignore source files, public assets, configuration files, or required project files.

The final `.gitignore` must be suitable for a production Next.js repository.

---

# 4. Existing HTML Must Be Fully Audited First

Before writing the Next.js implementation, inspect the complete HTML project.

Do NOT immediately start rewriting the HTML line by line.

First identify:

* All sections
* Header
* Navigation
* Hero
* Content sections
* Cards
* Grids
* Lists
* Testimonials
* Pricing
* Features
* CTA sections
* Footer
* Forms
* Modals
* Dropdowns
* Sliders
* Tabs
* Accordions
* Carousels
* Interactive elements
* Images
* SVGs
* Icons
* Fonts
* CSS
* JavaScript
* Animations
* Responsive breakpoints
* Hover states
* Scroll behavior

Create a clear internal component/data plan before implementation.

---

# 5. Exact Design Preservation

The original HTML is the visual source of truth.

Do NOT change the design merely because Next.js or Tailwind allows a different implementation.

Preserve:

### Typography

* Font family
* Font fallback
* Font size
* Font weight
* Line height
* Letter spacing
* Text transform
* Text alignment
* Text wrapping behavior

### Colors

Preserve exact:

* Background colors
* Text colors
* Border colors
* Accent colors
* Gradient colors
* Hover colors
* Active colors

If the original CSS contains exact color values, use those values.

Do not approximate colors.

### Spacing

Preserve:

* Padding
* Margin
* Gap
* Section spacing
* Container widths
* Grid spacing
* Card spacing
* Button spacing

### Dimensions

Preserve:

* Width
* Height
* Min-width
* Max-width
* Min-height
* Max-height
* Aspect ratios

### Visual Effects

Preserve:

* Box shadows
* Text shadows
* Blur
* Backdrop blur
* Opacity
* Gradients
* Borders
* Border radius
* Filters
* Blend modes
* Background effects

---

# 6. HTML → Component Architecture

Do NOT create one massive `page.tsx`.

Break the application into reusable components.

Recommended structure:

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── ...
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   │
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Pricing.tsx
│   │   └── CTA.tsx
│   │
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   └── ...
│   │
│   └── motion/
│       ├── FadeIn.tsx
│       ├── SlideUp.tsx
│       └── ...
│
├── data/
│   ├── navigation.ts
│   ├── hero.ts
│   ├── features.ts
│   ├── about.ts
│   ├── services.ts
│   ├── testimonials.ts
│   ├── pricing.ts
│   ├── cta.ts
│   └── footer.ts
│
├── lib/
│   ├── utils.ts
│   └── ...
│
└── types/
    └── index.ts
```

Adjust the structure according to the actual HTML project.

Do NOT create files that are unnecessary.

---

# 7. Section Data Architecture

Every major section must have its content separated from its UI component.

For example:

```text
data/
├── hero.ts
├── features.ts
├── services.ts
├── testimonials.ts
└── footer.ts
```

Example:

```ts
// data/hero.ts

export const heroData = {
  title: "Original HTML title",
  description: "Original HTML description",
  primaryButton: {
    label: "Original Button",
    href: "#"
  },
  secondaryButton: {
    label: "Original Button",
    href: "#"
  }
};
```

The component should consume the data:

```tsx
import { heroData } from "@/data/hero";

export function Hero() {
  return (
    <section>
      <h1>{heroData.title}</h1>
      <p>{heroData.description}</p>
    </section>
  );
}
```

Do NOT unnecessarily hard-code repeated content directly inside components.

---

# 8. Data-Driven Components

Repeated UI must be rendered from arrays wherever practical.

Example:

```ts
export const features = [
  {
    id: 1,
    title: "...",
    description: "...",
    image: "..."
  },
  {
    id: 2,
    title: "...",
    description: "...",
    image: "..."
  }
];
```

Then:

```tsx
{features.map((feature) => (
  <FeatureCard
    key={feature.id}
    feature={feature}
  />
))}
```

Avoid manually duplicating identical markup.

---

# 9. TypeScript Requirements

Use proper TypeScript types.

Avoid:

```ts
any
```

unless absolutely unavoidable.

Prefer interfaces/types such as:

```ts
export interface Feature {
  id: number;
  title: string;
  description: string;
  image?: string;
}
```

Props must be typed.

Do not leave implicit TypeScript errors.

---

# 10. Image Handling

Images require special attention.

## Priority 1 — Local Images

If an image from the original HTML exists locally in the project, use the local image.

Preserve the original filename whenever possible.

Example:

```text
public/
├── images/
│   ├── hero.png
│   ├── feature-1.jpg
│   └── logo.svg
```

Use:

```tsx
<Image
  src="/images/hero.png"
  alt="..."
  width={...}
  height={...}
/>
```

or another appropriate implementation if required for exact rendering.

## Priority 2 — Existing Public Assets

If the required image already exists inside:

```text
public/
```

reuse it.

Do not create duplicate copies.

## Priority 3 — Original External URL

If the exact image does not exist locally, preserve the original image URL from the HTML.

Do not replace it with another visually similar image.

If an external image is used with `next/image`, configure the required remote image host correctly.

Example:

```ts
images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "example.com"
    }
  ]
}
```

Do not invent image URLs.

---

# 11. Image Fidelity

Do not:

* Replace original images unnecessarily
* Crop images differently
* Change aspect ratios
* Change object positioning
* Change image quality unnecessarily
* Use random stock images
* Use placeholders when the original asset exists

Preserve:

```css
object-fit
object-position
aspect-ratio
width
height
border-radius
```

exactly where applicable.

---

# 12. SVG and Icons

If the original HTML contains SVG icons:

1. Reuse the original SVG whenever possible.
2. Preserve the SVG paths and appearance.
3. Do not replace an original custom SVG with a generic icon.
4. Do not use another icon library unless the original implementation already uses one or replacement is technically necessary.

For simple static SVGs, local files in `public/` may be used.

---

# 13. Tailwind CSS

Tailwind CSS must be used for the main styling implementation.

Translate the original CSS into Tailwind utilities where practical.

Example:

```html
<div class="flex items-center justify-between px-6 py-4">
```

However, do NOT force every style into Tailwind if doing so would reduce design accuracy.

For complex effects, use:

* Tailwind arbitrary values
* CSS variables
* `globals.css`
* Component-level CSS where necessary

Example:

```tsx
className="bg-[#0A0A0A]"
```

is acceptable when exact color fidelity is required.

---

# 14. Do Not Over-Abbreviate Tailwind

Do not sacrifice readability simply to reduce class names.

Prefer:

```tsx
className="
  flex
  items-center
  justify-between
  gap-6
  px-6
  py-4
"
```

when the component contains complex styling.

Use helper utilities such as `cn()` when appropriate.

---

# 15. Framer Motion Animation Requirements

Use **Framer Motion** for React-based animations.

All original animations must be analyzed and reproduced.

Preserve:

* Initial state
* Animate state
* Exit state
* Duration
* Delay
* Easing
* Spring behavior
* Transform
* Opacity
* Scale
* Rotation
* Blur
* Hover behavior
* Tap behavior
* Scroll reveal
* Staggering

Example:

```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
```

Do not add random animations that were not present in the original design.

---

# 16. Animation Fidelity

If the HTML uses:

```css
transition
transform
opacity
animation
@keyframes
```

reproduce the visual behavior.

If a CSS animation is more accurate than Framer Motion, CSS may still be used.

Framer Motion is required for React-driven animation behavior, but it does not mean every CSS animation must be unnecessarily converted.

The final result matters more than blindly converting syntax.

---

# 17. Client Components

Use `"use client"` only when required.

Examples:

* Framer Motion interactive components
* State
* Event handlers
* Browser APIs
* Interactive navigation
* Sliders
* Tabs
* Accordions
* Client-only animations

Keep static components as Server Components whenever possible.

Do not convert the entire application into a Client Component unnecessarily.

---

# 18. Responsive Design

The website must be fully responsive.

Test and preserve the original behavior for:

```text
320px
375px
390px
414px
480px
640px
768px
834px
1024px
1280px
1440px
1536px
1920px
```

The exact original responsive behavior should be reproduced.

Do NOT simply make desktop styles stack on mobile.

Inspect the HTML/CSS to determine:

* Breakpoints
* Navigation behavior
* Grid changes
* Flex direction
* Typography scaling
* Padding changes
* Image scaling
* Section height changes
* Visibility changes
* Mobile menu behavior

---

# 19. Mobile Navigation

If the original project has a mobile navigation:

* Reproduce it exactly.
* Preserve menu icon behavior.
* Preserve open/close animation.
* Preserve overlay behavior.
* Preserve menu spacing.
* Preserve typography.
* Preserve active states.

Do not replace it with a generic Next.js navigation.

---

# 20. Header and Footer

Header and Footer should normally be reusable layout components.

Example:

```tsx
<Header />
<main>
  ...
</main>
<Footer />
```

However, preserve the original DOM behavior where necessary for visual or interactive fidelity.

---

# 21. Routing

Convert existing HTML pages into proper Next.js routes.

Example:

```text
index.html
about.html
services.html
contact.html
```

may become:

```text
app/
├── page.tsx
├── about/
│   └── page.tsx
├── services/
│   └── page.tsx
└── contact/
    └── page.tsx
```

Do not remove existing pages.

Do not merge pages unless the original project contains only one page.

---

# 22. Links

Preserve original links.

Internal Next.js routes should preferably use:

```tsx
<Link href="/about">
```

External links should remain external.

Do not replace real links with:

```text
#
```

unless the original HTML itself uses `#`.

---

# 23. Forms

If forms exist:

* Preserve exact visual design.
* Preserve labels.
* Preserve placeholders.
* Preserve inputs.
* Preserve validation UI.
* Preserve button states.

Do not invent backend functionality if it does not exist.

If the HTML form is static, preserve the static behavior while ensuring it does not generate console errors.

---

# 24. Accessibility

Improve technical accessibility without changing the visual design.

Use:

* Semantic HTML
* Correct heading hierarchy
* `alt` text
* Accessible buttons
* Accessible navigation
* Keyboard support
* Appropriate ARIA attributes where required

Do not change the visual appearance while improving accessibility.

---

# 25. SEO

Implement appropriate Next.js metadata.

Use:

```tsx
export const metadata = {
  title: "...",
  description: "..."
};
```

Preserve original:

* Page title
* Meta description
* Open Graph information
* Favicon
* Theme color
* Other relevant metadata

when available in the source project.

---

# 26. Favicon

If the original project contains:

```text
favicon.ico
favicon.png
favicon.svg
```

reuse it.

Do not generate a new favicon unless the original does not contain one and a replacement is explicitly required.

---

# 27. Global CSS

Create:

```text
src/app/globals.css
```

Use it only for:

* Global resets
* CSS variables
* Fonts
* Global animations
* Complex effects
* Browser normalization
* Styles that are impractical in Tailwind

Do not dump the entire original stylesheet into `globals.css` without analysis.

---

# 28. CSS Variables

Where the original design has repeated values, use CSS variables when useful.

Example:

```css
:root {
  --color-primary: ...;
  --color-background: ...;
  --radius-card: ...;
}
```

Use these consistently where they improve maintainability without affecting visual accuracy.

---

# 29. Font Handling

If the original project uses a specific font:

1. Check whether it exists locally.
2. Reuse the local font if available.
3. Otherwise use the original font source.
4. Prefer Next.js font optimization when compatible with the original design.
5. Preserve font metrics as closely as possible.

Do not randomly replace fonts.

Font rendering differences must be minimized.

---

# 30. Performance

The final implementation should be production-ready.

Optimize where possible without changing the design.

Use:

* Reusable components
* Data-driven rendering
* Next.js image optimization where compatible
* Lazy loading where appropriate
* Code splitting through normal Next.js behavior
* Server Components where possible

Do not over-engineer.

---

# 31. Avoid Code Bloat

The implementation must be maintainable and lightweight.

Avoid:

* Repeated JSX
* Duplicate CSS
* Duplicate animation definitions
* Duplicate data
* Unnecessary packages
* Unnecessary wrappers
* Huge monolithic components
* Dead code
* Unused imports
* Unused variables

Create reusable components when there is genuine repetition.

Do not create hundreds of tiny components unnecessarily.

---

# 32. Package Management

Install only required dependencies.

Required major dependencies should include:

```text
next
react
react-dom
typescript
tailwindcss
framer-motion
```

Use compatible latest stable versions.

Do not install libraries just for convenience if native Next.js/React/Tailwind functionality is sufficient.

---

# 33. Environment Variables

If environment variables are required, create:

```text
.env.example
```

Never commit actual secrets.

Never hard-code API keys, tokens, passwords, or private credentials.

---

# 34. Next.js Configuration

Configure:

```text
next.config.ts
```

using TypeScript where supported.

Any required:

* Image domains
* Remote patterns
* Redirects
* Headers
* Static export configuration

must be properly configured.

---

# 35. Static Production Output

The final project must support a production build that generates a static output directory.

Configure Next.js appropriately so that:

```text
npm run build
```

successfully generates:

```text
out/
```

when the project is intended for static export.

Do NOT manually create a fake `out/` folder.

The folder must be generated by the actual Next.js build process.

---

# 36. package.json Scripts

Ensure the project contains appropriate scripts.

Example:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint ."
  }
}
```

If static export requires additional configuration, implement it correctly.

Do not create misleading scripts.

---

# 37. Build Validation

Before considering the project complete, run:

```bash
npm install
```

then:

```bash
npm run lint
```

then:

```bash
npm run build
```

The production build must complete successfully.

There must be:

* No TypeScript errors
* No ESLint errors that block the build
* No missing imports
* No missing modules
* No invalid JSX
* No broken routes
* No broken image imports
* No invalid configuration
* No build-time runtime errors

---

# 38. Runtime Validation

After successful build, verify the generated application.

Check:

### Desktop

* Header
* Navigation
* Hero
* Every section
* Images
* Buttons
* Cards
* Footer

### Mobile

* Header
* Mobile menu
* Typography
* Images
* Cards
* Section spacing
* Buttons
* Footer

### Interaction

* Hover
* Click
* Menu open/close
* Scroll animations
* Buttons
* Links
* Forms
* Tabs
* Accordions
* Sliders

where applicable.

---

# 39. Console Error Requirement

The browser console must not contain avoidable errors.

Fix:

```text
404 errors
Missing image errors
Hydration errors
React warnings
Key warnings
Invalid DOM nesting
Type errors
Unhandled exceptions
```

Warnings that are caused by unavoidable third-party browser behavior may be documented, but do not ignore errors originating from the implementation.

---

# 40. Hydration Safety

Because this is Next.js, pay special attention to hydration.

Do not render different markup on server and client accidentally.

Avoid directly using browser-only APIs inside Server Components:

```ts
window
document
localStorage
navigator
```

Use Client Components and appropriate effects when required.

---

# 41. Exact Content Preservation

Do NOT modify the original textual content.

Preserve:

* Headings
* Paragraphs
* Button labels
* Navigation labels
* Card content
* Testimonials
* Footer text
* Legal text
* Form labels
* Placeholder text

Do not rewrite content for "better UX."

The migration is technical, not editorial.

---

# 42. Do Not Invent Content

If the HTML contains missing information, do not invent:

* New headings
* New sections
* New descriptions
* New testimonials
* New images
* New features
* New buttons

Only implement what exists in the source project unless a technical requirement explicitly requires otherwise.

---

# 43. Section Order

Preserve the exact section order from the original HTML.

For example:

```text
Header
Hero
About
Features
Services
Testimonials
CTA
Footer
```

must remain in exactly that order if that is how the source is structured.

---

# 44. Preserve Original Effects

Inspect and reproduce all visual effects, including:

* Gradient overlays
* Background images
* Floating elements
* Decorative shapes
* Blur effects
* Glow effects
* Parallax
* Hover transforms
* Scroll reveals
* Marquee effects
* Image masks
* Clipping
* Pseudo-elements
* Animated backgrounds
* Cursor effects

Do not remove effects merely because they are difficult to implement.

---

# 45. Pseudo Elements

If the source uses:

```css
::before
::after
```

reproduce them using:

* Tailwind pseudo-element utilities
* CSS
* Additional elements

whichever gives the closest result.

---

# 46. Z-Index and Layering

Preserve the original visual stacking order.

Pay attention to:

```text
z-index
position
overflow
isolation
transform
backdrop-filter
```

Do not introduce stacking-context bugs.

---

# 47. Responsive Image Behavior

Preserve exact image behavior at different screen sizes.

Pay attention to:

```text
object-cover
object-contain
object-position
aspect-ratio
max-width
height
```

Do not distort images.

---

# 48. Component Naming

Use clear PascalCase component names:

```text
Header.tsx
Hero.tsx
FeatureCard.tsx
Testimonials.tsx
Footer.tsx
```

Do not use unclear names such as:

```text
Comp1.tsx
Section2.tsx
Test.tsx
NewComponent.tsx
```

unless temporary during development.

---

# 49. File Naming

Use:

```text
kebab-case
```

for appropriate data/util files and:

```text
PascalCase
```

for React components.

Examples:

```text
data/hero.ts
data/testimonials.ts

components/Hero.tsx
components/FeatureCard.tsx
```

---

# 50. Import Aliases

Configure the standard alias:

```text
@/*
```

Example:

```tsx
import { Hero } from "@/components/sections/Hero";
import { heroData } from "@/data/hero";
```

Avoid unnecessary relative import chains such as:

```tsx
../../../components/Hero
```

---

# 51. Final Project Structure

The final structure should resemble:

```text
project-root/
│
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
├── README.md
├── .env.example
│
├── public/
│   ├── images/
│   ├── icons/
│   ├── fonts/
│   └── ...
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   ├── ui/
│   │   └── motion/
│   │
│   ├── data/
│   │   ├── hero.ts
│   │   ├── features.ts
│   │   └── ...
│   │
│   ├── lib/
│   │   └── utils.ts
│   │
│   └── types/
│       └── index.ts
│
└── out/
    └── generated by npm run build
```

Modify this structure according to the actual project.

Do not create unnecessary empty folders.

---

# 52. Important Conversion Rule

NEVER perform a visual redesign.

The following are NOT allowed unless required to fix a technical issue:

```text
Changing colors
Changing fonts
Changing spacing
Changing section order
Changing image selection
Changing image proportions
Changing button design
Changing card design
Changing animation timing
Changing responsive behavior
Changing text
Removing sections
Adding sections
```

---

# 53. Original HTML vs Next.js Verification

After implementation, compare the original HTML and Next.js version section by section.

Verify:

```text
Header        ✓
Hero          ✓
Section 1     ✓
Section 2     ✓
Section 3     ✓
Section 4     ✓
CTA           ✓
Footer        ✓
```

For every section verify:

```text
Content
Layout
Typography
Colors
Spacing
Images
Animation
Hover
Responsive
```

---

# 54. Final Acceptance Criteria

The project is considered complete ONLY when:

* Latest stable compatible Next.js is used.
* TypeScript is used.
* Tailwind CSS is used.
* Framer Motion is used where React animation behavior is required.
* `.gitignore` was created first.
* Original HTML content is preserved.
* Original visual design is preserved.
* Original images are reused where available.
* Same-name local images are prioritized.
* Original external image URLs are preserved when local assets are unavailable.
* Components are properly separated.
* Repeated content is data-driven.
* Each major section has a corresponding data file where appropriate.
* Responsive design works across desktop, tablet, and mobile.
* Animations and effects are preserved.
* No unnecessary packages are installed.
* No unnecessary code duplication exists.
* No TypeScript errors exist.
* No avoidable ESLint errors exist.
* No broken imports exist.
* No broken images exist.
* No hydration errors exist.
* No avoidable browser console errors exist.
* `npm run build` succeeds.
* Production output is correctly generated.
* `out/` is generated by the build process when static export is configured.
* The final application is suitable for production deployment.

---

# 55. Final Instruction to the Implementation Agent

Treat the supplied HTML project as the **single source of truth**.

Do not redesign it.

Do not simplify it.

Do not replace assets unnecessarily.

Do not invent content.

Do not approximate the design when the exact implementation can be reproduced.

First inspect the entire project.

Then create `.gitignore`.

Then establish the Next.js project structure.

Then migrate the project section by section.

Then separate data from presentation.

Then implement responsive behavior.

Then reproduce animations and effects.

Then validate every route and asset.

Finally run:

```bash
npm run lint
npm run build
```

Fix every implementation-related error before declaring the project complete.

The final result must be a clean, maintainable, responsive, production-ready Next.js application that visually and behaviorally matches the original HTML project as closely as possible.

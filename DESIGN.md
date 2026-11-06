# Mosbee Business OS — Design System Documentation

> **Source**: Google Stitch Project — *"Honeycomb Product Suite Showcase"* (ID: `17094685652533755544`)  
> **Primary Screen**: *"Mosbee Business OS - White & Blue Enterprise Landing Page"* (ID: `73b177082f3944b087264b2d5c4c5981`)  
> **Screen size**: 1280px wide desktop, 8011px tall full-page  
> **Status**: LIGHT mode, clean white/blue enterprise aesthetic

---

## 1. Brand Identity

**Product name**: MOSBEE BUSINESS OS  
**Tagline**: *"Run the whole business from one core."*  
**Category**: Enterprise B2B SaaS — All-in-one Business Operating System  
**8 Products**: ERP · Account Management · HRMS · CRM · PRO · Chatbot · Project Management · Task Management

**Brand Tone**: Corporate clarity + precision. Clean, professional, trust-first. NOT dark/indigo — this is a **light theme** (white + blue).

---

## 2. Color Palette

### Primary Colors
| Token | Hex | Usage |
|---|---|---|
| `brand-800` | `#1e40af` | Primary CTA background, active nav, logo accent |
| `brand-700` | `#1d4ed8` | CTA hover state |
| `brand-600` | `#2563eb` | Blue accent, icons, borders, links |
| `brand-100` | `#dbeafe` | Notification bar bg, pill bg |
| `brand-50` | `#eff6ff` | Hero ambient, logo bg, light accent fill |

### Neutrals / Surfaces
| Token | Hex | Usage |
|---|---|---|
| `white` | `#ffffff` | Page background, card backgrounds |
| `slate-50` | `#f8fafc` | Section alternating bg, card headers |
| `slate-100` | `#f1f5f9` | Filter tab container bg |
| `slate-200` | `#e2e8f0` | Borders, dividers, card borders |
| `slate-300` | `#cbd5e1` | Secondary button border |
| `slate-500` | `#64748b` | Caption text, secondary label |
| `slate-600` | `#475569` | Body text, nav links (default) |
| `slate-700` | `#334155` | Body default text color |
| `slate-800` | `#1e293b` | Strong text, card labels |
| `slate-900` | `#0f172a` | Headings, logo, high-contrast text |

### Accent (Indigo - PRO product only)
| Token | Hex | Usage |
|---|---|---|
| `indigo-600` | `#4f46e5` | PRO product card accent |
| `indigo-700` | `#4338ca` | PRO hover state |
| `indigo-50` | `#eef2ff` | PRO card bg tint |

### CTA Section (Demo/Lead capture)
| Token | Hex | Usage |
|---|---|---|
| `blue-900` | `#1e3a8a` | Demo section dark card background |
| `blue-800` | `#1e40af` | Demo card border |
| `blue-300` | `#93c5fd` | Demo section eyebrow text |
| `blue-100` | `#dbeafe` | Demo body text color |

---

## 3. Typography

### Font Families
| Font | CDN | Usage |
|---|---|---|
| **Inter** | Google Fonts | Primary font — all UI text, body, labels, buttons |
| **JetBrains Mono** | Google Fonts | Monospace — eyebrow labels, tech badges, prices, stats |
| **Material Symbols Outlined** | Google Fonts | Icon library throughout |

> **Note**: The Stitch design system spec lists Plus Jakarta Sans / Inter, but the **implemented screen HTML** uses Inter + JetBrains Mono — the HTML is the source of truth.

### Type Scale
| Role | Font | Size | Weight | Line-height | Letter-spacing |
|---|---|---|---|---|---|
| Hero H1 | Inter | `text-4xl` / `text-6xl` responsive | `font-extrabold` (800) | tight | `tracking-tight` |
| Section H2 | Inter | `text-3xl` (1.875rem) | `font-bold` (700) | tight | `tracking-tight` |
| Card H3 | Inter | `text-lg` (1.125rem) | `font-bold` (700) | normal | — |
| Body Large | Inter | `text-lg` (1.125rem) | `font-normal` (400) | `leading-relaxed` | — |
| Body Default | Inter | `text-sm` (0.875rem) | `font-normal` (400) | normal | — |
| Mono Eyebrow | JetBrains Mono | `text-xs` (0.75rem) | `font-bold` (700) | normal | `tracking-widest uppercase` |
| Mono Price | JetBrains Mono | `text-lg`–`text-5xl` | `font-extrabold` (800) | — | — |
| Mono Badge | JetBrains Mono | `text-[10px]`–`text-xs` | `font-bold` (700) | — | `tracking-wide` |
| Nav Links | Inter | `text-sm` | `font-medium` (500) | — | — |
| Button | Inter | `text-sm` | `font-semibold` (600) | — | — |

---

## 4. Spacing & Layout

### Grid System
- **Max width**: `max-w-7xl` (80rem / 1280px), `mx-auto`
- **Horizontal padding**: `px-6` (1.5rem) on sections
- **Column system**: CSS Grid + Tailwind `grid-cols-*`
  - Products: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`
  - Hero interactive: `grid-cols-1 lg:grid-cols-12` (5+7 split)
  - Pricing: `grid-cols-1 lg:grid-cols-12` (6+6 split)
  - Why Bundle: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

### Section Vertical Rhythm
- Section padding: `py-20` (5rem top/bottom)
- Hero section: `pt-12 pb-16 lg:pt-16 lg:pb-20`
- Internal card padding: `p-5`, `p-6`, `p-8`

### Spacing Tokens (Tailwind)
| Token | Value |
|---|---|
| `space-x-2` | 0.5rem |
| `space-x-3` | 0.75rem |
| `gap-4` | 1rem |
| `gap-6` | 1.5rem |
| `gap-8` | 2rem |
| `gap-12` | 3rem |
| `mb-4` | 1rem |
| `mb-6` | 1.5rem |
| `mb-8` | 2rem |
| `mb-12` | 3rem |
| `mb-16` | 4rem |

---

## 5. Border Radius (Roundness)

| Component | Radius |
|---|---|
| Small badges, pills | `rounded-lg` (0.5rem) |
| Buttons | `rounded-xl` (0.75rem) |
| Product cards | `rounded-2xl` (1rem) |
| Pricing cards | `rounded-3xl` (1.5rem) |
| Logo box | `rounded-xl` |
| Nav pills/tags | `rounded-full` |
| Notification eyebrow | `rounded-full` |
| Integration tiles | `rounded-xl` |
| FAQ items | `rounded-2xl` |

---

## 6. Shadows & Elevation

| Level | Class | Usage |
|---|---|---|
| Flat | `shadow-sm` | Navbar, small cards, buttons, tiles |
| Raised | `shadow-md` | Preview panel, hero interactive panel |
| High | `shadow-lg` | Product card hover state |
| Feature | `shadow-xl` | Complete Suite pricing card |
| Hero | `shadow-2xl` | Demo section dark card |
| Button glow | `shadow-md shadow-blue-600/25` | Primary CTA button |

---

## 7. Components

### 7.1 Notification Banner (Top)
- Full-width `bg-blue-50 border-b border-blue-100`
- `max-w-7xl` centered row with animated blue dot pulse
- Font: `font-mono text-xs`
- Dismissable via `×` button

### 7.2 Navbar (Sticky)
- `sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm`
- Logo: hub icon in `rounded-xl bg-blue-50` box + `MOSBEE` text + `BUSINESS OS` mono badge
- Nav links: `text-sm font-medium text-slate-600 hover:text-blue-600`
- Active link: `text-blue-700 font-semibold border-b-2 border-blue-600`
- CTAs: "Sign in" ghost + "Get started" `bg-blue-600 rounded-xl` with arrow icon

### 7.3 Hero Section
- Eyebrow: animated ping dot + product list in `rounded-full bg-blue-50 border border-blue-200` pill
- H1: gradient text span `bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent` on "one core."
- Ambient bg: blurred blue radial gradient `blur-3xl` layer
- Primary CTA: `bg-blue-600 rounded-xl shadow-md shadow-blue-600/25` + rocket icon
- Secondary CTA: `bg-slate-50 border border-slate-300 rounded-xl`
- Trust row: `material-symbols-outlined check_circle text-blue-600` + mono text

### 7.4 Honeycomb Interactive Architecture Widget
- Left panel (5 cols): `bg-slate-50/80 border border-slate-200 rounded-2xl`
- **Custom hex clip-path**: `polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)`
- Inactive hex: white fill, blue border gradient
- Active hex: blue gradient fill + inner blue panel + animated ping dot
- Center MOSBEE CORE: `bg-blue-900` hex, Material Symbols `hub` icon pulsing
- SVG connector lines: `stroke="#93c5fd"` dashed, `stroke="#2563eb"` solid center
- Right panel (7 cols): `bg-white border border-slate-200 rounded-2xl shadow-md`
  - Preview image swaps on hex click via JS `selectProductNode()`

### 7.5 Trust Ticker Bar
- `bg-slate-50 border border-slate-200 rounded-xl`
- Horizontal scrollable `divide-x divide-slate-200` row
- `font-mono text-xs text-slate-600`, blue highlights for key stats

### 7.6 Product Cards (8 Products Grid)
- `bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg rounded-2xl`
- Top image: `aspect-[16/10]` with absolute category badge (mono, `rounded-lg border`)
- Body: H3 `text-lg font-bold`, description `text-sm text-slate-600`, feature list `text-xs`
- Feature bullets: `› ` blue bold chevron + text
- Footer: price display (from ₹X/user/mo) + "Add to plan" `bg-blue-50 hover:bg-blue-600 rounded-lg`
- Filter buttons: `bg-blue-600 text-white` active, `text-slate-600` inactive

### 7.7 Pricing Section
- Left card (Complete Suite): `border-2 border-blue-600 rounded-3xl` + `BEST VALUE` corner badge
  - Price: `text-4xl lg:text-5xl font-extrabold` ₹2,499
  - Features list: `material-symbols-outlined verified text-blue-600` checkmarks
  - CTA: `w-full py-4 bg-blue-600 rounded-xl font-mono font-bold`
- Right card (Build Your Own): `border border-slate-200 rounded-3xl`
  - Interactive checklist: `input[type=checkbox]` per product
  - Live price calculator updates `#calc-total`
  - CTA: `bg-slate-900 hover:bg-blue-700 rounded-xl`

### 7.8 Why Bundle Section
- 6 numbered cards: `p-6 rounded-2xl bg-white border border-slate-200`
- Large number: `text-3xl font-extrabold text-blue-600/30 font-mono` (decorative)
- Hover: `hover:border-blue-400 hover:shadow-md`

### 7.9 Rollout Timeline (4 Steps)
- Cards: `border-t-4 border-blue-600` (steps 1-3), `border-t-4 border-indigo-600` (step 4/GO LIVE)
- Week badges: `font-mono text-xs` blue pill

### 7.10 Integrations Section
- Left: text + 4 bullet points with Material Symbols icons
- Right: `bg-slate-50 border border-slate-200 rounded-3xl p-8`
  - Integration tiles: `p-3.5 bg-white rounded-xl border border-slate-200 flex items-center space-x-2.5`
  - Icons: `material-symbols-outlined text-blue-600`

### 7.11 FAQ Accordion
- Container: `border border-slate-200 rounded-2xl bg-white`
- Toggle: button with `add`/`remove` Material Symbol icon, rotates on open
- Content: `hidden` → `block` via JS toggle

### 7.12 Demo / Lead Capture Section
- Wrapper: `bg-blue-900 border border-blue-800 rounded-3xl` with blurred radial glow
- Form: name, company, email, phone, current software, team size
- Inputs: `bg-blue-800/40 border border-blue-700/60 text-white placeholder-blue-300/50 rounded-xl`
- CTA: `bg-white text-blue-900 hover:bg-blue-50 rounded-xl font-mono font-bold`

### 7.13 Footer
- `bg-slate-900` dark footer
- Logo + tagline, 4-column nav links grid, compliance strip
- `text-slate-400` default, `text-white` on hover

---

## 8. Interactive JavaScript Behaviors

| Behavior | Selector | Description |
|---|---|---|
| Honeycomb node selection | `selectProductNode(id)` | Swaps preview image, title, description, bullets; toggles `active-hex` class |
| Product filter | `.filter-btn[data-filter]` | Shows/hides `.product-card[data-cat]` matching filter |
| Pricing calculator | `#pricing-checklist input[type=checkbox]` | Sums checked items, updates `#calc-total`, syncs with "Add to plan" buttons |
| FAQ accordion | `.faq-toggle` | Toggles `.faq-content` hidden/visible, rotates icon |
| Notification dismiss | `#top-notification-bar` close button | `element.remove()` |

---

## 9. Assets & Images

All product dashboard screenshot images are hosted on Google's CDN (`lh3.googleusercontent.com`):

| Product | Image purpose |
|---|---|
| ERP | Operations command center |
| Account Management | Finance ledger |
| HRMS | People dashboard |
| CRM | Sales pipeline |
| PRO | Analytics/power tier |
| Chatbot | AI support interface |
| Project Management | Gantt/delivery view |
| Task Management | Kanban board |

---

## 10. Page Sections Map (Top to Bottom)

1. **Notification Banner** — 14-day pilot offer
2. **Navbar** — Sticky, logo + nav + CTA
3. **Hero** — Headline, CTAs, Honeycomb widget, trust ticker
4. **Suite Section** (`#suite-section`) — 8 products grid with filter
5. **Pricing Section** (`#pricing-section`) — Bundle vs. Build-your-own
6. **Why Bundle Section** (`#why-bundle`) — 6 numbered argument cards
7. **Rollout Timeline** — 4-step implementation
8. **Integrations Section** (`#integrations-section`) — Security + 12 native plugins
9. **FAQ Section** (`#faq-section`) — 6 accordion questions
10. **Demo / Lead Capture** (`#demo-section`) — Dark blue CTA card with form
11. **Footer** — `bg-slate-900` with nav links + compliance

---

## 11. Responsive Breakpoints

| Breakpoint | Width | Key changes |
|---|---|---|
| Mobile | `< 640px` | Single-column everything, stacked CTAs |
| `sm` | `≥ 640px` | CTA row, sign-in link visible |
| `md` | `≥ 768px` | Nav links appear, 2-col grids |
| `lg` | `≥ 1024px` | 4-col products, 12-col hero, pricing split |
| Desktop | `1280px` target | Full experience as designed |

---

## 12. Pricing Data

| Product | Price |
|---|---|
| ERP | ₹1,299/user/mo |
| Account Management | ₹699/user/mo |
| HRMS | ₹799/user/mo |
| CRM | ₹599/user/mo |
| PRO | ₹899/user/mo |
| Chatbot | ₹499/user/mo |
| Project Management | ₹599/user/mo |
| Task Management | ₹449/user/mo |
| **Complete Suite** | **₹2,499/user/mo (annual)** |

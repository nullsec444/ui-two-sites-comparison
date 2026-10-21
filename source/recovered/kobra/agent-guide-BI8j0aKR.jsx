// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import { r as e } from "./rolldown-runtime-B0Z9INg1.js";
import { _ as t, d as n, f as r, g as i, n as a, s as o } from "./component-catalog-x55m0xeC.js";
import { r as s, t as c } from "./seo-CEr-E37r.js";
import { a as l, i as u, o as d, r as f, t as p } from "./registry-B0pwistY.js";
var m = e({
    SKILLS: () => g,
    SKILLS_INSTALL: () => h
  }),
  h = `npx skills add https://skills.sh/p/BCo1c0oBAtHom5It`,
  g = [{
    slug: `kobra-design-eng`,
    name: `Kobra Design Eng`,
    description: `Motion, easing and the details that make a component feel finished.`,
    ready: !0
  }, {
    slug: `ui-sound-design`,
    name: `UI Sound Design`,
    description: `Wiring the sound layer and tuning its cues.`,
    ready: !0
  }, {
    slug: `design-system-migration`,
    name: `Design System Migration`,
    description: `Moving an existing library over, one screen at a time.`,
    ready: !0
  }],
  _ = e({
    GUIDE_BUDGET: () => C,
    GUIDE_CURL: () => b,
    GUIDE_DESIGN_URL: () => x,
    GUIDE_PATHS: () => v,
    GUIDE_URL: () => y,
    agentGuide: () => k,
    serveGuide: () => S
  }),
  v = {
    md: `/install.md`,
    txt: `/llms.txt`,
    design: `/design.md`
  },
  y = `${c.origin}${v.md}`,
  b = `curl ${y}`,
  x = `${c.origin}${v.design}`,
  S = e => new Response(k(), {
    headers: {
      "content-type": `text/${e}; charset=utf-8`,
      "cache-control": `public, max-age=3600`
    }
  }),
  C = 12e3,
  w = e => `${c.origin}${e}`,
  T = e => {
    let r = t(e);
    return `- \`${f}/${r}\` — ${n(e)}`;
  },
  E = "## Rules\n\n1. Read the index below before writing any UI. If a component here does the job, install it. Do not hand-roll a dropdown, a dialog, a toast or a combobox that already exists.\n2. Restyle through variants and props, never `className`. If no variant fits, add one inside the component's own file rather than overriding it from the outside.\n3. Use theme tokens — `bg-muted`, `text-foreground`, `border` — never raw palette colors like `bg-zinc-800`. Colors, radius and type are CSS variables, so retheming is editing those variables.\n4. Use the spacing and type scale. Reach for an arbitrary value only when the scale has no step for it.\n5. No inline styles. Style through classes, and pass dynamic values as CSS custom properties.\n6. Write class names out in full. Anything assembled at runtime is a class Tailwind never generates.",
  D = "## Style\n\nThe look is quiet by default. Follow these and new work sits beside the components rather than on top of them.\n\n1. **Color is information.** The palette is gray — every neutral token is pure achromatic. Color arrives through content, and through the four status hues (`--error`, `--warning`, `--success`, `--info`), which share one lightness so no state shouts louder than another. A colored surface should mean something.\n2. **Two weights, not five.** 400 for everything, 700 for emphasis. `font-medium` and `font-semibold` resolve to those two on purpose. Size and color carry hierarchy; weight is the last resort.\n3. **Interface text is small and dense.** 14px is the body size, 13px for secondary labels, and headings rarely pass 20px. Line length caps around 60 characters.\n4. **One radius family.** `--radius` is 0.625rem, with `sm`/`md`/`lg`/`xl` stepping 4px either side. Nest concentrically: a child's radius is its parent's less the padding between them.\n5. **One hairline, then depth.** A surface gets a single border or a ring at about 10% opacity, and separation past that comes from a shadow, not a second heavier line.\n6. **Motion is short and asymmetric.** Entrances 150–250ms on `--ease-out` (`cubic-bezier(0.23, 1, 0.32, 1)`); exits shorter, on `--ease-exit` (`cubic-bezier(0.4, 0, 0.6, 1)`), because an arrival is worth watching and a departure is only worth not snapping. Animate transform, opacity and filter. Everything answers `motion-reduce`.\n7. **Press gives, it does not jump.** The surface under a pressed control scales to about 0.99 while the label stays where it is.\n8. **Focus is one ring.** `focus-visible:ring-3 ring-ring/50`, never an outline removed and not replaced. `--ring` clears 3:1 against the page on its own.\n9. **A busy button keeps its word.** The label turns out and a spinner turns in; never swap it for \"Saving…\", and never disable it, which dims the spinner that is the state.\n10. **Numbers that change get `tabular-nums`,** so a counter does not shuffle the layout under itself.\n11. **Empty and loading states are designed,** not left blank: a skeleton the size of what is coming, and an empty state that says what to do next.",
  O = `## Right to left

Every component supports Arabic and the other right-to-left scripts, with nothing to set per component. Set the direction once, at the root:

\`\`\`tsx
import { DirectionProvider } from '@base-ui/react/direction-provider'

<html lang="ar" dir="rtl">
  <body>
    <DirectionProvider direction="rtl">{children}</DirectionProvider>
  </body>
</html>
\`\`\`

\`dir\` mirrors the layout and the text; the provider tells the components which way arrow keys, swipes and sliders run. The same provider installs as \`${f}/direction\`. Code, one-time codes, color values and media timelines stay left to right on their own. For a designed Arabic face, put one (IBM Plex Sans Arabic, Noto Sans Arabic) ahead of the system fallback in \`--font-sans\`.

In your own markup, write logical classes — \`ms-*\`, \`pe-*\`, \`start-*\`, \`text-start\`, \`border-s\`, \`rounded-e\` — instead of left and right ones, add \`rtl:-scale-x-100\` to arrows and chevrons, and leave Arabic text without letter-spacing: Safari pulls the letters apart.`;
function k() {
  let e = o.filter(([e]) => r(t(e)));
  return `# Kobra

A React component library for shadcn, installed through the shadcn CLI. ${a} components counting the variants inside them, indexed below under ${String(o.length)} names. ${String(e.length)} of those install free.

This page is written for coding agents and lives at ${w(v.md)}, also served at ${w(v.design)} and ${w(v.txt)}. Everything below is the whole interface — setup, the rules, the house style and every component: there is no separate documentation site to fetch.

## Setup

${e.length > 0 ? `The ${String(e.length)} free components install with no account. ` : ``}The rest need a registry token, minted at ${w(`/dashboard`)} and read from \`${l}\` in the environment.

Add to \`components.json\`:

\`\`\`json
${u}
\`\`\`

Then install by name:

\`\`\`bash
${d(`button`)}
\`\`\`

${E}

${D}

${O}

## Components

Every one is at \`${w(s(`<name>`))}\`, and \`${w(`/r`)}/<name>.md\` is this same detail for one component: what it exports, what it installs alongside, and the packages it needs.

${i.map(([e, t]) => `### ${e}${e === `Free` ? ` (no account needed)` : ``}\n\n${t.map(T).join(`
`)}`).join(`

`)}

## Optional

An MCP server, which answers the same questions live rather than from this page:

\`\`\`bash
${p}
\`\`\`

Skills for motion, sound and migrating an existing design system:

\`\`\`bash
${h}
\`\`\`

Pricing and licensing: ${w(`/pricing`)}
`;
}
export { _ as a, m as c, y as i, x as n, g as o, v as r, h as s, b as t };

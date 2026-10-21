// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
function l(s) {
  return `${s.x}px ${s.y}px ${s.blur}px rgb(var(--shadow-color, 0 0 0) / ${s.a})`;
}
function r(s) {
  return s.trim().toLowerCase().replace(/[^a-z0-9-_]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "") || "surface";
}
let c = new Set(["2xs", "xs", "sm", "md", "lg", "xl", "2xl", "none", "inner"]);
function o() {
  return `@custom-variant retina {
  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    @slot;
  }
}

@utility ring-hairline {
  @apply ring retina:ring-[0.5px];
}`;
}
function h(s) {
  return s ? "ring-hairline ring-black/6" : "ring-1 ring-black/6";
}
let m = "var(--tw-inset-shadow, 0 0 #0000), var(--tw-inset-ring-shadow, 0 0 #0000), var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow, 0 0 #0000)";
function u(s) {
  return s ? "0 0 0 var(--ring-hairline-width, 1px) rgb(0 0 0 / 0.06)" : "0 0 0 1px rgb(0 0 0 / 0.06)";
}
const _export_EXPORT_FORMATS = [{
  id: "tailwind",
  label: "Tailwind"
}, {
  id: "styled-components",
  label: "styled-components"
}, {
  id: "stylex",
  label: "StyleX"
}];
const _export_TW_SHADOW_STACK = m;
const _export_buildExportCode = function ({
  layers: s,
  tokenName: t,
  format: e,
  ring: a,
  hairline: i
}) {
  let n,
    d = (n = r(t), c.has(n) || n.startsWith("shadow-") ? `cast-${n.replace(/^shadow-/, "")}` : n),
    p = r(d).replace(/-([a-z0-9])/g, (s, t) => t.toUpperCase()),
    k = s.map(l),
    j = k.join(", "),
    v = k.map((s, t) => {
      let e = t < k.length - 1 ? "," : "";
      return `    ${s}${e}`;
    }).join("\n"),
    x = a && i;
  switch (e) {
    case "tailwind":
      {
        let s = ["/* Shadow tint — override with space-separated RGB */", "/* e.g. --shadow-color: 15 23 42; */", "", "@theme {", "  --shadow-color: 0 0 0;", `  --shadow-${d}:`, `${v};`, "}"];
        x && s.push("", o());
        let t = [`shadow-${d}`, a ? h(x) : null].filter(Boolean).join(" ");
        return s.push("", "/* Usage */", `/* className="${t}" */`), s.join("\n");
      }
    case "styled-components":
      {
        let s = a ? `  --ring-hairline-width: 1px;
  --tw-ring-shadow: ${u(x)};
` : `  --tw-ring-shadow: 0 0 #0000;
`,
          t = x ? `

  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
    --ring-hairline-width: 0.5px;
  }` : "";
        return `import { css } from "styled-components";

/** Design-system shadow token: ${p} */
export const ${p}Shadow = css\`
  --shadow-color: 0 0 0;
  --tw-shadow:
${v};
${s}  box-shadow: ${m};${t}
\`;

/* Override tint: --shadow-color: 15 23 42; */`;
      }
    case "stylex":
      {
        let s = a ? `${u(x)}, ${j}` : j,
          t = x ? `

/* Prefer composing Tailwind ring-hairline for true 0.5px retina: */

${o()}

/* className="… ${h(!0)}" */` : "";
        return `import * as stylex from "@stylexjs/stylex";

/** Design-system shadow token: ${p} */
export const shadows = stylex.create({
  ${p}: {
    // Override tint via CSS: --shadow-color: 15 23 42;
    // Ring is a real box-shadow ring layer (not outline)
    boxShadow: "${s}",
  },
});

/* Usage */
/* <div {...stylex.props(shadows.${p})} /> */${t}`;
      }
    default:
      return e;
  }
};
const _export_ringClassName = h;
export { _export_EXPORT_FORMATS as EXPORT_FORMATS, _export_TW_SHADOW_STACK as TW_SHADOW_STACK, _export_buildExportCode as buildExportCode, _export_ringClassName as ringClassName };

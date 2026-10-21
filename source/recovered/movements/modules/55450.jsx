// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module31908 from "./jsx-runtime-31908.js";
import * as _module16542 from "./16542.js";
import * as _module45032 from "./45032.js";
import * as _module89063 from "./89063.js";
import * as _module6684 from "./6684.js";
import * as _module57143 from "./57143.js";
import * as _module65523 from "./65523.js";
import * as _module45713 from "./45713.js";
import * as _module59975 from "./59975.js";
import * as _module31895 from "./31895.js";
import * as _module85735 from "./85735.js";
var t = _module31908,
  a = _module16542,
  e = _module45032,
  i = _module89063,
  n = _module6684;
let l = (0, _module57143.create)((s, t) => ({
  parent: 50,
  gap: 20,
  tokenName: "panel",
  exportFormat: "tailwind",
  setParent: a => {
    let e = (0, n.clampParent)(a),
      i = (0, n.clampGap)(t().gap, e);
    s({
      parent: e,
      gap: i
    });
  },
  setGap: a => s({
    gap: (0, n.clampGap)(a, t().parent)
  }),
  setTokenName: t => s({
    tokenName: t
  }),
  setExportFormat: t => s({
    exportFormat: t
  })
}));
var c = _module65523,
  r = _module45713;
function h() {
  let s,
    a = l(s => s.parent),
    h = l(s => s.gap),
    m = l(s => s.setParent),
    o = l(s => s.setGap),
    u = (0, n.childRadius)(a, h),
    [p, k] = (0, e.useState)("idle");
  async function d() {
    k("copying");
    try {
      let s = await (0, i.buildRadiusFigmaClipboardHtml)({
        parent: a,
        gap: h,
        child: u
      });
      await (0, i.copyFigmaClipboardHtml)(s, "movements.dev radius"), k("done"), window.setTimeout(() => k("idle"), 1600);
    } catch {
      k("error"), window.setTimeout(() => k("idle"), 2200);
    }
  }
  switch (p) {
    case "idle":
      s = "Copy for Figma";
      break;
    case "copying":
      s = "Copying…";
      break;
    case "done":
      s = "Copied";
      break;
    case "error":
      s = "Copy failed";
      break;
    default:
      s = p;
  }
  let j = Math.max(a, 1);
  return <div className={"flex flex-col gap-6 p-5"}>{[<div className={"grid grid-cols-2 gap-4"}>{[(0, t.jsx)(r.ScrubberField, {
        id: "radius-parent",
        label: "Parent",
        unit: "px",
        value: a,
        min: 0,
        max: 120,
        onChange: m
      }), (0, t.jsx)(r.ScrubberField, {
        id: "radius-gap",
        label: "Gap",
        unit: "px",
        value: h,
        min: 0,
        max: j,
        onChange: o
      })]}</div>, <div className={"flex flex-col gap-6"}>{[<div className={"flex items-baseline gap-2 text-sm"}>{[<span className={"font-medium text-ink"}>{"Child"}</span>, <span className={"font-mono text-xs tabular-nums text-[var(--color-radius-child)]"}>{[u, "px"]}</span>, <span className={"font-mono text-[11px] text-[var(--color-radius-parent)]"}>{["(", a, "−", h, ")"]}</span>]}</div>, (0, t.jsx)(c.MorphButton, {
        onClick: d,
        disabled: "copying" === p,
        label: s,
        className: "hidden w-full justify-center rounded-lg bg-ink px-3.5 py-2 text-sm font-medium text-page sm:inline-flex disabled:opacity-60"
      })]}</div>]}</div>;
}
var m = _module59975,
  o = _module31895;
function u(s) {
  return s.trim().toLowerCase().replace(/[^a-z0-9-_]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "") || "panel";
}
let p = new Set(["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "none", "full"]);
var k = _module85735;
function d() {
  let s = l(s => s.parent),
    a = l(s => s.gap),
    i = l(s => s.tokenName),
    n = l(s => s.exportFormat),
    c = l(s => s.setTokenName),
    r = l(s => s.setExportFormat),
    h = function ({
      parent: s,
      gap: t,
      tokenName: a,
      format: e
    }) {
      let i,
        n = (i = u(a), p.has(i) || i.startsWith("radius-") ? `surface-${i.replace(/^radius-/, "")}` : i),
        l = u(n).replace(/-([a-z0-9])/g, (s, t) => t.toUpperCase()),
        c = `${s}px`,
        r = `${t}px`,
        h = `--radius-${n}`,
        m = `--radius-${n}-gap`,
        o = `--radius-${n}-inner`,
        k = `calc(var(${h}) - var(${m}))`;
      switch (e) {
        case "tailwind":
          return `/* Nested concentric radii — inner stays in sync via calc() */

@theme {
  ${h}: ${c};
  ${m}: ${r};
  ${o}: ${k};
}

/* Usage */
/* outer: border-radius: var(${h}); */
/* gap:   padding: var(${m}); */
/* inner: border-radius: var(${o}); */`;
        case "styled-components":
          return `import { css } from "styled-components";

/** Design-system nested radii: ${l} */
export const ${l}Radii = css\`
  ${h}: ${c};
  ${m}: ${r};
  ${o}: ${k};
\`;

export const ${l}Outer = css\`
  border-radius: var(${h});
\`;

export const ${l}Gap = css\`
  padding: var(${m});
\`;

export const ${l}Inner = css\`
  border-radius: var(${o});
\`;`;
        case "stylex":
          return `import * as stylex from "@stylexjs/stylex";

/** Design-system nested radii: ${l} */
/* Prefer CSS vars + calc so inner tracks outer − gap */
export const ${l}Tokens = \`
  ${h}: ${c};
  ${m}: ${r};
  ${o}: ${k};
\`;

export const radii = stylex.create({
  ${l}Outer: {
    borderRadius: \`var(${h})\`,
  },
  ${l}Gap: {
    padding: \`var(${m})\`,
  },
  ${l}Inner: {
    borderRadius: \`var(${o})\`,
  },
});

/* Usage */
/* Apply ${l}Tokens on a parent, then stylex.props(radii.${l}Outer / Gap / Inner) */`;
        default:
          return e;
      }
    }({
      parent: s,
      gap: a,
      tokenName: i,
      format: n
    }),
    m = (0, e.useMemo)(() => [{
      match: "calc(var(",
      text: "Inner radius stays in sync: outer − gap."
    }], []);
  return <div className={"flex flex-col gap-4 p-5 sm:p-6"}>{[<label className={"flex items-center gap-2 text-sm text-mute"}>{[<span className={"shrink-0"}>{"Token"}</span>, <input type={"text"} value={i} onChange={s => c(s.target.value)} className={"w-36 rounded-lg inset-hairline bg-page px-2.5 py-1.5 font-mono text-xs text-ink outline-none focus:inset-ring-black/25 dark:focus:inset-ring-white/25"} spellCheck={!1} />]}</label>, (0, t.jsx)(k.CodeSnippet, {
      fileName: function (s) {
        switch (s) {
          case "tailwind":
            return "radius.css";
          case "styled-components":
            return "radius.ts";
          case "stylex":
            return "radius.stylex.ts";
          default:
            return s;
        }
      }(n),
      code: h,
      language: function (s) {
        switch (s) {
          case "tailwind":
            return "css";
          case "styled-components":
          case "stylex":
            return "ts";
          default:
            return s;
        }
      }(n),
      tabs: o.EXPORT_FORMATS,
      tab: n,
      onTabChange: r,
      notes: m
    })]}</div>;
}
function j() {
  let s = l(s => s.parent),
    a = l(s => s.gap),
    e = (0, n.childRadius)(s, a),
    i = s > 121.00000000000001 ? 121.00000000000001 / s : 1,
    c = s * i,
    r = e * i,
    h = a * i,
    m = Math.max(0, 220 - 2 * h);
  return <section className={"theme-transition flex h-full min-h-[340px] w-full items-center justify-center rounded-2xl bg-canvas px-6 sm:px-10 ring-[0.5px] ring-black/8 dark:ring-white/8"}>{<div className={"relative"} style={{
      width: 220,
      height: 220
    }}>{[<div className={"theme-transition absolute inset-0 bg-[#ececee] dark:bg-[#2a2a2e]"} style={{
        borderRadius: c
      }} />, <div className={"theme-transition absolute bg-white dark:bg-[#1a1a1c]"} style={{
        top: h,
        left: h,
        width: m,
        height: m,
        borderRadius: r
      }} />, <svg className={"pointer-events-none absolute inset-0"} width={220} height={220} viewBox={"0 0 220 220"} aria-hidden={"true"}>{[<path d={`M ${c + 8} 0.5 H 0.5 V ${c + 8}`} fill={"none"} className={"stroke-black/18 dark:stroke-white/20"} strokeWidth={"1"} strokeDasharray={"3 3"} />, <path d={v(0, 0, c)} fill={"none"} stroke={"var(--color-radius-parent)"} strokeWidth={"2.5"} strokeLinecap={"round"} />, <path d={v(h, h, r)} fill={"none"} stroke={"var(--color-radius-child)"} strokeWidth={"2.5"} strokeLinecap={"round"} />, h > 2 && c > 2 ? <line x1={c - Math.SQRT1_2 * c} y1={c - Math.SQRT1_2 * c} x2={c - Math.SQRT1_2 * r} y2={c - Math.SQRT1_2 * r} stroke={"var(--color-radius-gap)"} strokeWidth={"2.5"} strokeLinecap={"round"} /> : null]}</svg>]}</div>}</section>;
}
function v(s, t, a) {
  return a <= .5 ? `M ${s} ${t + 6} L ${s} ${t} L ${s + 6} ${t}` : `M ${s + a} ${t} A ${a} ${a} 0 0 0 ${s} ${t + a}`;
}
const _export_RadiusStudio = function () {
  return (0, t.jsx)(a.ExperimentLayout, {
    slug: "radius",
    examples: (0, t.jsx)(m.RadiusExamples, {}),
    preview: (0, t.jsx)(j, {}),
    controls: (0, t.jsx)(h, {}),
    exportPanel: (0, t.jsx)(d, {})
  });
};
export { _export_RadiusStudio as RadiusStudio };

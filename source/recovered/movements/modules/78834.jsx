// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module31908 from "./jsx-runtime-31908.js";
import * as _module16542 from "./16542.js";
import * as _module45032 from "./45032.js";
import * as _module89063 from "./89063.js";
import * as _module61240 from "./61240.js";
import * as _module57143 from "./57143.js";
import * as _module65523 from "./65523.js";
import * as _module45713 from "./45713.js";
import * as _module31895 from "./31895.js";
import * as _module85735 from "./85735.js";
import * as _module24027 from "./24027.js";
var t = _module31908,
  a = _module16542,
  e = _module45032,
  i = _module89063,
  n = _module61240;
let l = (0, _module57143.create)(s => ({
  size: 8,
  intensity: .04,
  ring: !0,
  hairline: !0,
  tokenName: "surface",
  exportFormat: "tailwind",
  setSize: t => s({
    size: Math.min(100, Math.max(0, t))
  }),
  setIntensity: t => s({
    intensity: Math.min(1, Math.max(.02, t))
  }),
  setRing: t => s({
    ring: t
  }),
  setHairline: t => s({
    hairline: t
  }),
  setTokenName: t => s({
    tokenName: t
  }),
  setExportFormat: t => s({
    exportFormat: t
  })
}));
var c = _module65523,
  h = _module45713;
function r({
  checked: s,
  onChange: a,
  label: e
}) {
  return <button type={"button"} role={"switch"} aria-checked={s} aria-label={e} onClick={() => a(!s)} className={`relative h-5 w-9 shrink-0 rounded-full transition-colors ${s ? "bg-ink" : "bg-line"}`}>{<span className={`absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-page shadow-sm transition-transform ${s ? "translate-x-4" : "translate-x-0"}`} />}</button>;
}
function m() {
  let s,
    a = l(s => s.size),
    m = l(s => s.intensity),
    o = l(s => s.ring),
    u = l(s => s.hairline),
    p = l(s => s.setSize),
    k = l(s => s.setIntensity),
    j = l(s => s.setRing),
    d = l(s => s.setHairline),
    [v, x] = (0, e.useState)("idle");
  async function g() {
    x("copying");
    try {
      let s = (0, n.composeShadowLayers)({
          size: a,
          intensity: m
        }),
        t = await (0, i.buildFigmaClipboardHtml)({
          layers: s,
          ring: o,
          hairline: o && u
        });
      await (0, i.copyFigmaClipboardHtml)(t), x("done"), window.setTimeout(() => x("idle"), 1600);
    } catch {
      x("error"), window.setTimeout(() => x("idle"), 2200);
    }
  }
  switch (v) {
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
      s = v;
  }
  return <div className={"flex flex-col gap-6 p-5"}>{[<div className={"grid grid-cols-2 gap-4"}>{[(0, t.jsx)(h.ScrubberField, {
        id: "shadow-size",
        label: "Size",
        value: a,
        min: 0,
        max: 100,
        onChange: p
      }), (0, t.jsx)(h.ScrubberField, {
        id: "shadow-intensity",
        label: "Intensity",
        unit: "%",
        value: Math.round(100 * m),
        min: 2,
        max: 40,
        onChange: s => k(s / 100)
      })]}</div>, <div className={"flex flex-col gap-3"}>{[<div className={"flex items-center justify-between gap-3"}>{[<span className={"text-sm font-medium text-ink"}>{"Ring"}</span>, (0, t.jsx)(r, {
          checked: o,
          onChange: j,
          label: "Ring"
        })]}</div>, <div className={`flex items-center justify-between gap-3 transition-opacity ${o ? "opacity-100" : "pointer-events-none opacity-35"}`}>{[<span className={"text-sm font-medium text-ink"}>{"Hairline"}</span>, (0, t.jsx)(r, {
          checked: u,
          onChange: d,
          label: "Hairline ring"
        })]}</div>]}</div>, (0, t.jsx)(c.MorphButton, {
      onClick: g,
      disabled: "copying" === v,
      label: s,
      className: "hidden w-full justify-center rounded-lg bg-ink px-3.5 py-2 text-sm font-medium text-page sm:inline-flex disabled:opacity-60"
    })]}</div>;
}
var o = _module31895;
function u() {
  let s = l(s => s.size),
    t = l(s => s.intensity),
    a = l(s => s.ring),
    i = l(s => s.hairline);
  return (0, e.useMemo)(() => {
    let e = (0, n.composeShadowLayers)({
      size: s,
      intensity: t
    });
    return {
      layers: e,
      boxShadow: (0, n.layersToBoxShadow)(e),
      ring: a,
      hairline: a && i
    };
  }, [s, t, a, i]);
}
var p = _module85735;
function k() {
  let s = l(s => s.tokenName),
    a = l(s => s.exportFormat),
    i = l(s => s.ring),
    n = l(s => s.hairline),
    c = l(s => s.setTokenName),
    h = l(s => s.setExportFormat),
    {
      layers: r
    } = u(),
    m = (0, o.buildExportCode)({
      layers: r,
      tokenName: s,
      format: a,
      ring: i,
      hairline: n
    }),
    k = (0, e.useMemo)(() => {
      let s = [{
        match: "--shadow-color:",
        text: "Tint the whole stack by overriding this RGB triple."
      }];
      return "tailwind" === a && s.push({
        match: "/* Usage */",
        text: "Drop the generated class on the surface."
      }), i && n && s.push({
        match: "ring-hairline",
        text: "Hairline ring snaps to 0.5px on retina."
      }), s;
    }, [a, n, i]);
  return <div className={"flex flex-col gap-4 p-5 sm:p-6"}>{[<label className={"flex items-center gap-2 text-sm text-mute"}>{[<span className={"shrink-0"}>{"Token"}</span>, <input type={"text"} value={s} onChange={s => c(s.target.value)} className={"w-36 rounded-lg inset-hairline bg-page px-2.5 py-1.5 font-mono text-xs text-ink outline-none focus:inset-ring-black/25 dark:focus:inset-ring-white/25"} spellCheck={!1} />]}</label>, (0, t.jsx)(p.CodeSnippet, {
      fileName: function (s) {
        switch (s) {
          case "tailwind":
            return "shadow.css";
          case "styled-components":
            return "shadow.ts";
          case "stylex":
            return "shadow.stylex.ts";
          default:
            return s;
        }
      }(a),
      code: m,
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
      }(a),
      tabs: o.EXPORT_FORMATS,
      tab: a,
      onTabChange: h,
      notes: k
    })]}</div>;
}
function j() {
  let s = l(s => s.size),
    {
      boxShadow: a,
      ring: e,
      hairline: i
    } = u(),
    n = Math.min(100, Math.max(0, s)) / 100,
    c = {
      "--tw-shadow": a,
      boxShadow: o.TW_SHADOW_STACK,
      transform: `translateY(-${6 * n}px) scale(${1 + .08 * n})`
    };
  return <section className={"theme-transition flex h-full min-h-[340px] w-full items-center justify-center rounded-2xl bg-canvas px-6 sm:px-10 ring-[0.5px] ring-black/8 dark:ring-white/8"}>{<div className={["theme-transition h-[120px] w-[120px] origin-center rounded-2xl bg-white transition-transform duration-150 ease-out will-change-transform dark:bg-[#1c1c1e]", e ? `${(0, o.ringClassName)(i)} dark:ring-white/12` : ""].filter(Boolean).join(" ")} style={c} />}</section>;
}
var d = _module24027;
const _export_Studio = function () {
  return (0, t.jsx)(a.ExperimentLayout, {
    slug: "shadows",
    examples: (0, t.jsx)(d.ShadowExamples, {}),
    preview: (0, t.jsx)(j, {}),
    controls: (0, t.jsx)(m, {}),
    exportPanel: (0, t.jsx)(k, {})
  });
};
export { _export_Studio as Studio };

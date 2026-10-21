// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module31908 from "./jsx-runtime-31908.js";
import * as _module31895 from "./31895.js";
import * as _module61240 from "./61240.js";
import * as _module16542 from "./16542.js";
var t = _module31908,
  a = _module31895,
  e = _module61240,
  i = _module16542;
function n(s, t) {
  return {
    className: `theme-transition bg-white dark:bg-[#1c1c1e] ${(0, a.ringClassName)(!0)} dark:ring-white/12`,
    style: {
      "--tw-shadow": (0, e.layersToBoxShadow)((0, e.composeShadowLayers)({
        size: s,
        intensity: t
      })),
      boxShadow: a.TW_SHADOW_STACK
    }
  };
}
let l = n(24, .06),
  c = n(6, .05),
  h = n(40, .08);
function r() {
  return <div className={`${l.className} flex w-[180px] flex-col gap-3 rounded-[14px] p-3`} style={l.style}>{[<div className={"h-16 rounded-[8px] bg-gradient-to-br from-[#e7e9ff] to-[#f6f0ff] dark:from-[#2a2c4a] dark:to-[#33283f]"} />, <div className={"flex flex-col gap-1 px-0.5"}>{[<p className={"text-[13px] font-medium text-ink"}>{"Weekly report"}</p>, <p className={"text-[11px] text-mute"}>{"Updated 2h ago"}</p>]}</div>]}</div>;
}
const _export_ShadowExamples = function () {
  return (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsx)(i.ExampleCard, {
      title: "Card",
      children: (0, t.jsx)(r, {})
    }), (0, t.jsx)(i.ExampleCard, {
      title: "Button",
      children: <button type={"button"} className={`${c.className} rounded-[10px] px-4 py-2 text-[13px] font-medium text-ink`} style={c.style}>{"Download"}</button>
    }), (0, t.jsx)(i.ExampleCard, {
      title: "Menu",
      children: <div className={`${h.className} flex w-[160px] flex-col rounded-[12px] p-1`} style={h.style} role={"menu"} aria-label={"Example menu"}>{["Rename", "Duplicate", "Move to…"].map((s, a) => <span role={"menuitem"} className={`rounded-[8px] px-2.5 py-1.5 text-[13px] text-ink ${0 === a ? "bg-black/[0.04] dark:bg-white/[0.06]" : ""}`} key={s}>{s}</span>)}</div>
    })]
  });
};
const _export_ShadowTeaser = r;
export { _export_ShadowExamples as ShadowExamples, _export_ShadowTeaser as ShadowTeaser };

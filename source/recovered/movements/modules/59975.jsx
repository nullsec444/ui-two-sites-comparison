// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module31908 from "./jsx-runtime-31908.js";
import * as _module16542 from "./16542.js";
var t = _module31908;
function a(e, t) {
  return Math.max(0, Math.round(e) - Math.round(t));
}
var i = _module16542;
let r = "theme-transition bg-white shadow-[0_1px_2px_rgb(0_0_0/0.05)] ring-[0.5px] ring-black/10 dark:bg-[#1c1c1e] dark:ring-white/10";
function n() {
  let e = a(20, 8);
  return <div className={`${r} flex w-[176px] flex-col gap-2.5`} style={{
    borderRadius: 20,
    padding: 8
  }}>{[<div className={"h-[88px] bg-gradient-to-br from-[#ffd7c2] to-[#ffb38a] dark:from-[#5a3322] dark:to-[#7a3f1f]"} style={{
      borderRadius: e
    }} />, <div className={"flex flex-col gap-0.5 px-1 pb-1"}>{[<p className={"text-[13px] font-medium text-ink"}>{"Sunset palette"}</p>, <p className={"text-[11px] text-mute"}>{"12 colors"}</p>]}</div>]}</div>;
}
function l() {
  return <div className={`${r} flex w-[220px] items-center justify-between gap-2`} style={{
    height: 44,
    borderRadius: 22,
    paddingBlock: 6,
    paddingRight: 6,
    paddingLeft: 14
  }}>{[<span className={"text-[13px] text-mute"}>{"Search files…"}</span>, <span className={"flex h-full items-center bg-ink px-3 text-[12px] font-medium text-page"} style={{
      borderRadius: a(22, 6)
    }}>{"Go"}</span>]}</div>;
}
function s() {
  return <div className={`${r} flex w-[210px] items-center gap-3`} style={{
    borderRadius: 18,
    padding: 8
  }}>{[<span className={"flex size-9 shrink-0 items-center justify-center bg-[#e6f7ee] text-[#0c8a4a] dark:bg-[#123524] dark:text-[#5ad08f]"} style={{
      borderRadius: a(18, 8)
    }}>{<svg viewBox={"0 0 16 16"} className={"size-4"} fill={"none"} aria-hidden={!0}>{<path d={"m4 8.5 2.5 2.5L12 5.5"} stroke={"currentColor"} strokeWidth={"1.75"} strokeLinecap={"round"} strokeLinejoin={"round"} />}</svg>}</span>, <span className={"flex min-w-0 flex-col"}>{[<span className={"text-[13px] font-medium text-ink"}>{"Saved"}</span>, <span className={"truncate text-[11px] text-mute"}>{"All changes synced"}</span>]}</span>]}</div>;
}
const _export_RadiusExamples = function () {
  return (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsx)(i.ExampleCard, {
      title: "Card with media",
      children: (0, t.jsx)(n, {})
    }), (0, t.jsx)(i.ExampleCard, {
      title: "Input with button",
      children: (0, t.jsx)(l, {})
    }), (0, t.jsx)(i.ExampleCard, {
      title: "Toast",
      children: (0, t.jsx)(s, {})
    })]
  });
};
const _export_RadiusTeaser = n;
export { _export_RadiusExamples as RadiusExamples, _export_RadiusTeaser as RadiusTeaser };

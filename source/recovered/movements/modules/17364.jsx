// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module31908 from "./jsx-runtime-31908.js";
import * as _module36832 from "./36832.js";
import * as _module95074 from "./95074.js";
import * as _module16542 from "./16542.js";
import * as _module45032 from "./45032.js";
var e = _module31908,
  s = _module36832,
  a = _module95074,
  i = _module16542,
  n = _module45032;
function l({
  config: t,
  className: s,
  pixelSize: a = 56,
  paused: i = !1,
  frameIndex: r
}) {
  let c,
    {
      size: h,
      frames: o,
      frameDuration: m,
      transition: u,
      transitionDuration: d,
      colors: p
    } = t,
    [k, j] = (0, n.useState)(0),
    v = !i && void 0 === r && o.length > 1 && m > 0;
  (0, n.useEffect)(() => {
    if (!v) return;
    let t = window.setInterval(() => {
      j(t => (t + 1) % o.length);
    }, m);
    return () => window.clearInterval(t);
  }, [v, m, o.length]);
  let f = void 0 !== r ? Math.min(Math.max(r, 0), Math.max(o.length - 1, 0)) : 0 === o.length ? 0 : k % o.length,
    x = o[f] ?? [],
    g = Math.max(2, Math.round(.08 * a)),
    b = "none" === u ? 0 : Math.max(0, d);
  switch (u) {
    case "none":
      c = "none";
      break;
    case "fade":
      c = `opacity ${b}ms ease`;
      break;
    case "color":
      c = `background-color ${b}ms ease`;
      break;
    default:
      c = u;
  }
  let P = {
    width: a,
    height: a,
    display: "grid",
    gridTemplateColumns: `repeat(${h}, 1fr)`,
    gridTemplateRows: `repeat(${h}, 1fr)`,
    gap: g
  };
  return <div className={s} style={P} role={"img"} aria-label={"Loading"}>{Array.from({
      length: h * h
    }, (t, s) => {
      let a = !!x?.includes(s);
      return "fade" === u ? <div className={"relative min-h-0 min-w-0 overflow-hidden rounded-full"} style={{
        backgroundColor: p.inactive
      }} key={s}>{<div className={"absolute inset-0 rounded-full"} style={{
          backgroundColor: p.active,
          opacity: +!!a,
          transition: c
        }} />}</div> : <div className={"min-h-0 min-w-0 rounded-full"} style={{
        backgroundColor: a ? p.active : p.inactive,
        transition: c
      }} key={s} />;
    })}</div>;
}
let r = {
  light: ["#1a1a1c", "#e8e8ea"],
  dark: ["#f2f2f3", "#3a3a3d"]
};
function c(t, e) {
  let s = ([e, s]) => ({
    ...t,
    colors: {
      active: e,
      inactive: s
    }
  });
  return {
    light: s(e.light),
    dark: s(e.dark)
  };
}
function h(t) {
  return t.map(s.indicesFromFrame);
}
let o = c({
    size: 3,
    frames: h((0, s.createSpinnerFrames)(3)),
    frameDuration: 110,
    transition: "color",
    transitionDuration: 90
  }, r),
  m = c({
    size: 4,
    frames: h((0, s.createSweepFrames)(4)),
    frameDuration: 140,
    transition: "fade",
    transitionDuration: 120
  }, {
    light: ["#3b5bdb", "#dbe4ff"],
    dark: ["#748ffc", "#262c4a"]
  }),
  u = c({
    size: 5,
    frames: h((0, s.createPulseFrames)(5)),
    frameDuration: 160,
    transition: "color",
    transitionDuration: 140
  }, r);
function d(t) {
  return (0, a.useThemeStore)(t => t.dark) ? t.dark : t.light;
}
let p = "theme-transition bg-white shadow-[0_1px_2px_rgb(0_0_0/0.05)] ring-[0.5px] ring-black/10 dark:bg-[#1c1c1e] dark:ring-white/10";
function k() {
  let t = d(m);
  return <div className={`${p} flex w-[220px] items-center gap-3 rounded-[14px] p-3`}>{[<span className={"flex size-8 shrink-0 items-center justify-center rounded-[9px] bg-black/[0.04] dark:bg-white/[0.06]"}>{(0, e.jsx)(l, {
        config: t,
        pixelSize: 16
      })}</span>, <span className={"flex min-w-0 flex-col"}>{[<span className={"text-[13px] font-medium text-ink"}>{"Indexing files"}</span>, <span className={"text-[11px] text-mute"}>{"1,204 of 3,380"}</span>]}</span>]}</div>;
}
const _export_LoaderExamples = function () {
  let t = d(o),
    s = d(u);
  return (0, e.jsxs)(e.Fragment, {
    children: [(0, e.jsx)(i.ExampleCard, {
      title: "Button",
      children: <button type={"button"} aria-busy={!0} className={`${p} flex items-center gap-2 rounded-[10px] py-2 pr-4 pl-3 text-[13px] font-medium text-ink`}>{[(0, e.jsx)(l, {
          config: t,
          pixelSize: 14
        }), "Saving"]}</button>
    }), (0, e.jsx)(i.ExampleCard, {
      title: "Status row",
      children: (0, e.jsx)(k, {})
    }), (0, e.jsx)(i.ExampleCard, {
      title: "Empty state",
      children: <div className={"flex flex-col items-center gap-3"}>{[(0, e.jsx)(l, {
          config: s,
          pixelSize: 32
        }), <p className={"text-[13px] text-mute"}>{"Loading projects"}</p>]}</div>
    })]
  });
};
const _export_LoaderTeaser = k;
export { _export_LoaderExamples as LoaderExamples, _export_LoaderTeaser as LoaderTeaser };

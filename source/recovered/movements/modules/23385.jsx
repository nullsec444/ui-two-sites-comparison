// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module31908 from "./jsx-runtime-31908.js";
import * as _module22673 from "./22673.js";
var t = _module31908,
  e = _module22673;
let l = "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72 0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";
function r(s) {
  let t = function (s, t) {
    let a = (0, e.hexToRgb)(s);
    return a ? `rgb(${a.r} ${a.g} ${a.b} / ${String(Math.round(1e3 * (0, e.clamp)(t, 0, 1)) / 1e3)})` : null;
  }(s.color, s.a);
  return t ? `radial-gradient(ellipse ${s.w}% ${s.h}% at ${s.x}% ${s.y}%, ${t}, transparent)` : null;
}
function c(s) {
  return s.map(r).filter(s => null !== s).join(", ");
}
function o(s) {
  let t = (0, e.clamp)(s.intensity, 0, 1),
    a = (0, e.clamp)(s.softness, 0, 1),
    i = s.colors.length > 0 ? s.colors : [{
      id: "fallback",
      color: "#FFFFFF"
    }],
    n = i.flatMap((s, e) => [{
      color: s.color,
      x: 50 + (e % 2 == 0 ? -8 : 8),
      y: 50 + (e - (i.length - 1) / 2) * 14,
      w: 170,
      h: 86,
      a: .18 * t
    }, {
      color: s.color,
      x: 48,
      y: 22 + 18 * e,
      w: 130,
      h: 58,
      a: .12 * t
    }]),
    l = i.flatMap((s, a) => {
      let n = Math.max(i.length - 1, 1),
        l = 16 + 68 * (1 === i.length ? .5 : a / n),
        r = a % 2 == 0 ? -7 : 6;
      return [{
        color: s.color,
        x: 50 + r,
        y: l,
        w: 78,
        h: 42,
        a: .42 * t
      }, {
        color: s.color,
        x: 50 - .4 * r,
        y: (0, e.clamp)(l + 12, 8, 92),
        w: 56,
        h: 34,
        a: .28 * t
      }, {
        color: i[(a + 1) % i.length].color,
        x: 46,
        y: (0, e.clamp)(l - 10, 8, 92),
        w: 48,
        h: 28,
        a: .16 * t
      }];
    }),
    r = i[Math.floor(i.length / 2)].color,
    o = [{
      color: r,
      x: 50,
      y: 50,
      w: 26,
      h: 92,
      a: .7 * t
    }, {
      color: r,
      x: 52,
      y: 38,
      w: 16,
      h: 64,
      a: .45 * t
    }, {
      color: i[0].color,
      x: 47,
      y: 68,
      w: 20,
      h: 48,
      a: .28 * t
    }];
  return {
    bloom: c(n),
    beam: c(l),
    core: c(o),
    bloomBlur: 14 + 22 * a,
    beamBlur: 5 + 9 * a,
    coreBlur: .6 + 2.4 * a
  };
}
function x({
  config: s,
  className: e,
  style: a
}) {
  let i = o(s),
    n = {
      "--shimmer-duration": `${s.duration}s`,
      "--shimmer-skew": `${s.angle}deg`,
      width: `${s.band}%`
    };
  return <div className={e} style={{
    ...a,
    backgroundColor: s.base
  }}>{[<div aria-hidden={!0} className={"pointer-events-none absolute inset-0 overflow-hidden [container-type:inline-size]"}>{<div data-shimmer-track={!0} className={s.animate ? "shimmer-sweep absolute" : "absolute"} style={{
        ...n,
        top: "-30%",
        height: "160%",
        left: s.animate ? 0 : `calc(50% - ${s.band / 2}%)`,
        transform: s.animate ? void 0 : `skewX(${s.angle}deg)`
      }}>{[<div data-shimmer-bloom={!0} className={`absolute inset-0${s.animate ? " shimmer-bloom-drift" : ""}`} style={{
          backgroundImage: i.bloom,
          filter: `blur(${i.bloomBlur}px)`,
          opacity: .9
        }} />, <div data-shimmer-beam={!0} className={`absolute inset-0${s.animate ? " shimmer-beam-drift" : ""}`} style={{
          backgroundImage: i.beam,
          filter: `blur(${i.beamBlur}px)`
        }} />, <div data-shimmer-core={!0} className={`absolute inset-0${s.animate ? " shimmer-core-drift" : ""}`} style={{
          backgroundImage: i.core,
          filter: `blur(${i.coreBlur}px)`
        }} />]}</div>}</div>, s.grain > 0 ? <div aria-hidden={!0} data-shimmer-grain={!0} className={"pointer-events-none absolute inset-0"} style={{
      backgroundImage: l,
      opacity: s.grain,
      mixBlendMode: "overlay"
    }} /> : null]}</div>;
}
const _export_ShimmerSurface = x;
export { _export_ShimmerSurface as ShimmerSurface };

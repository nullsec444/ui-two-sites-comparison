// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module31908 from "./jsx-runtime-31908.js";
import * as _module22673 from "./22673.js";
import * as _module95074 from "./95074.js";
import * as _module16542 from "./16542.js";
import * as _module45032 from "./45032.js";
var t = _module31908,
  e = _module22673;
let a = [{
    id: "paper",
    label: "Paper",
    light: {
      base: "#F2F2F2",
      colors: [{
        id: "paper-white",
        color: "#FFFFFF"
      }]
    },
    dark: {
      base: "#222224",
      colors: [{
        id: "paper-white",
        color: "#5C5C62"
      }]
    }
  }, {
    id: "opal",
    label: "Opal",
    light: {
      base: "#EDECE8",
      colors: [{
        id: "opal-mint",
        color: "#C5DDD0"
      }, {
        id: "opal-white",
        color: "#FFFFFF"
      }, {
        id: "opal-peach",
        color: "#F0D4C4"
      }]
    },
    dark: {
      base: "#1E1D1B",
      colors: [{
        id: "opal-mint",
        color: "#4A6358"
      }, {
        id: "opal-white",
        color: "#6A6864"
      }, {
        id: "opal-peach",
        color: "#6A4E46"
      }]
    }
  }, {
    id: "clay",
    label: "Clay",
    light: {
      base: "#F0EBE4",
      colors: [{
        id: "clay-gold",
        color: "#F2D7B5"
      }, {
        id: "clay-white",
        color: "#FFF7F0"
      }, {
        id: "clay-rose",
        color: "#F0C8BC"
      }]
    },
    dark: {
      base: "#221C18",
      colors: [{
        id: "clay-gold",
        color: "#7A5E42"
      }, {
        id: "clay-white",
        color: "#7A6A5C"
      }, {
        id: "clay-rose",
        color: "#7A524C"
      }]
    }
  }, {
    id: "frost",
    label: "Frost",
    light: {
      base: "#E8ECF0",
      colors: [{
        id: "frost-blue",
        color: "#C5D4E4"
      }, {
        id: "frost-white",
        color: "#F5F8FB"
      }, {
        id: "frost-teal",
        color: "#C8DDD8"
      }]
    },
    dark: {
      base: "#181C20",
      colors: [{
        id: "frost-blue",
        color: "#4A5C6E"
      }, {
        id: "frost-white",
        color: "#5C6870"
      }, {
        id: "frost-teal",
        color: "#4A605C"
      }]
    }
  }],
  i = {
    ...a[0].light,
    duration: 1.55,
    band: 38,
    softness: .58,
    angle: -18,
    intensity: .78,
    grain: .07,
    animate: !0
  },
  l = "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72 0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";
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
function d(s, t) {
  var e;
  return {
    base: (e = t ? s.dark : s.light).base,
    colors: e.colors.map(s => ({
      ...s
    }))
  };
}
var k = _module95074,
  j = _module16542,
  v = _module45032;
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
function g({
  config: s,
  bones: e,
  width: a,
  height: i
}) {
  let n = (0, v.useMemo)(() => {
    let s, t;
    return s = e.map(s => `<rect x="${s.x}" y="${s.y}" width="${s.width}" height="${s.height}" rx="${s.radius}"/>`).join(""), t = `<svg xmlns="http://www.w3.org/2000/svg" width="${a}" height="${i}" viewBox="0 0 ${a} ${i}">${s}</svg>`, `url("data:image/svg+xml,${encodeURIComponent(t)}")`;
  }, [e, a, i]);
  return (0, t.jsx)(x, {
    config: s,
    className: "relative overflow-hidden",
    style: {
      width: a,
      height: i,
      maskImage: n,
      WebkitMaskImage: n,
      maskSize: "100% 100%",
      WebkitMaskSize: "100% 100%",
      maskRepeat: "no-repeat",
      WebkitMaskRepeat: "no-repeat"
    }
  });
}
function f(s) {
  let t = (0, k.useThemeStore)(s => s.dark),
    e = a.find(t => t.id === s) ?? a[0];
  return {
    ...i,
    ...d(e, t),
    animate: !0
  };
}
let b = "theme-transition bg-white shadow-[0_1px_2px_rgb(0_0_0/0.05)] ring-[0.5px] ring-black/10 dark:bg-[#1c1c1e] dark:ring-white/10",
  y = [{
    x: 0,
    y: 0,
    width: 36,
    height: 36,
    radius: 18
  }, {
    x: 48,
    y: 4,
    width: 104,
    height: 10,
    radius: 5
  }, {
    x: 48,
    y: 22,
    width: 67,
    height: 10,
    radius: 5
  }],
  w = [{
    x: 0,
    y: 0,
    width: 156,
    height: 84,
    radius: 8
  }, {
    x: 2,
    y: 96,
    width: 122,
    height: 10,
    radius: 5
  }, {
    x: 2,
    y: 114,
    width: 76,
    height: 10,
    radius: 5
  }],
  P = [{
    x: 0,
    y: 0,
    width: 200,
    height: 12,
    radius: 6
  }, {
    x: 0,
    y: 22,
    width: 184,
    height: 12,
    radius: 6
  }, {
    x: 0,
    y: 44,
    width: 128,
    height: 12,
    radius: 6
  }];
function _() {
  let s = f("paper");
  return <div className={`${b} rounded-[14px] p-3`} aria-busy={!0} aria-label={"Loading profile"}>{(0, t.jsx)(g, {
      config: s,
      bones: y,
      width: 196,
      height: 36
    })}</div>;
}
const _export_ShimmerExamples = function () {
  let s = f("opal"),
    e = f("clay");
  return (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsx)(j.ExampleCard, {
      title: "Profile row",
      children: (0, t.jsx)(_, {})
    }), (0, t.jsx)(j.ExampleCard, {
      title: "Media card",
      children: <div className={`${b} rounded-[14px] p-2.5`} aria-busy={!0} aria-label={"Loading card"}>{(0, t.jsx)(g, {
          config: s,
          bones: w,
          width: 156,
          height: 126
        })}</div>
    }), (0, t.jsx)(j.ExampleCard, {
      title: "Text block",
      children: <div aria-busy={!0} aria-label={"Loading text"}>{(0, t.jsx)(g, {
          config: e,
          bones: P,
          width: 200,
          height: 56
        })}</div>
    })]
  });
};
const _export_ShimmerTeaser = _;
export { _export_ShimmerExamples as ShimmerExamples, _export_ShimmerTeaser as ShimmerTeaser };

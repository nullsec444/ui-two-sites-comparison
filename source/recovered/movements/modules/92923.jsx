// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module22673 from "./22673.js";
var e = _module22673;
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
  n = ["#FFFFFF", "#C5DDD0", "#F0D4C4", "#C5D4E4", "#F2D7B5"],
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
function h(s) {
  let t = (0, e.hexToRgb)(s);
  return t ? `#${[t.r, t.g, t.b].map(s => s.toString(16).padStart(2, "0")).join("").toUpperCase()}` : null;
}
function m(s, t) {
  let e = h(s),
    a = h(t);
  return !!(e && a && e === a);
}
function u(s, t, e) {
  return !!m(s, e.base) && t.length === e.colors.length && t.every((s, t) => m(s.color, e.colors[t].color));
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
function p(s, t) {
  for (let e of a) {
    if (u(s, t, e.light)) return {
      id: e.id,
      scheme: "light"
    };
    if (u(s, t, e.dark)) return {
      id: e.id,
      scheme: "dark"
    };
  }
  return null;
}
const _export_DEFAULT_SHIMMER = i;
const _export_SHIMMER_GRAIN_IMAGE = l;
const _export_SHIMMER_PRESETS = a;
const _export_clampAngle = function (s) {
  return (0, e.clamp)(s, -32, -4);
};
const _export_clampBand = function (s) {
  return (0, e.clamp)(s, 16, 72);
};
const _export_clampDuration = function (s) {
  return (0, e.clamp)(s, .6, 3.2);
};
const _export_clampGrain = function (s) {
  return (0, e.clamp)(s, 0, .35);
};
const _export_clampIntensity = function (s) {
  return (0, e.clamp)(s, .15, 1);
};
const _export_clampSoftness = function (s) {
  return (0, e.clamp)(s, 0, 1);
};
const _export_composeShimmerLayers = o;
const _export_matchShimmerPreset = p;
const _export_nextColor = function (s) {
  return {
    id: `color-${s.length + 1}-${Math.round(1e4 * Math.random())}`,
    color: n[s.length % n.length]
  };
};
const _export_normalizeHex = h;
const _export_pairedShimmerConfigs = function (s) {
  let t = p(s.base, s.colors);
  if (!t) return {
    light: s,
    dark: null
  };
  let e = a.find(s => s.id === t.id);
  return e ? {
    light: {
      ...s,
      base: e.light.base,
      colors: e.light.colors
    },
    dark: {
      ...s,
      base: e.dark.base,
      colors: e.dark.colors
    }
  } : {
    light: s,
    dark: null
  };
};
const _export_paletteForScheme = d;
export { _export_DEFAULT_SHIMMER as DEFAULT_SHIMMER, _export_SHIMMER_GRAIN_IMAGE as SHIMMER_GRAIN_IMAGE, _export_SHIMMER_PRESETS as SHIMMER_PRESETS, _export_clampAngle as clampAngle, _export_clampBand as clampBand, _export_clampDuration as clampDuration, _export_clampGrain as clampGrain, _export_clampIntensity as clampIntensity, _export_clampSoftness as clampSoftness, _export_composeShimmerLayers as composeShimmerLayers, _export_matchShimmerPreset as matchShimmerPreset, _export_nextColor as nextColor, _export_normalizeHex as normalizeHex, _export_pairedShimmerConfigs as pairedShimmerConfigs, _export_paletteForScheme as paletteForScheme };

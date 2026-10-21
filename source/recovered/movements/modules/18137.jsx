// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module22673 from "./22673.js";
var i = _module22673;
let n = {
  width: {
    min: 24,
    max: 480
  },
  height: {
    min: 24,
    max: 320
  },
  radius: {
    min: 0,
    max: 160
  },
  thick: {
    min: 6,
    max: 70
  },
  bend: {
    min: 0,
    max: 120
  },
  blur: {
    min: 0,
    max: 24
  },
  aber: {
    min: 0,
    max: 12
  },
  tint: {
    min: 0,
    max: .6
  }
};
function l(t, e, s, a, i) {
  let n = Math.abs(t) - s + i,
    l = Math.abs(e) - a + i;
  return Math.hypot(Math.max(n, 0), Math.max(l, 0)) + Math.min(Math.max(n, l), 0) - i;
}
function r(t, e, s, a, r, c) {
  let h = Math.min(Math.max(r, 0), s, a),
    o = l(t, e, s, a, h);
  if (o >= 0) return {
    nx: 0,
    ny: 0,
    amt: 0,
    sd: o,
    inside: !1
  };
  let m = l(t + 1, e, s, a, h) - l(t - 1, e, s, a, h),
    u = l(t, e + 1, s, a, h) - l(t, e - 1, s, a, h),
    d = Math.hypot(m, u) || 1;
  m /= d, u /= d;
  let p = 1 - Math.min(-o / Math.max(Math.max(Math.min(s, a), 1) * (.16 + .84 * (((0, i.clamp)(c, n.thick.min, n.thick.max) - n.thick.min) / (n.thick.max - n.thick.min))), 1), 1);
  return {
    nx: m,
    ny: u,
    amt: (p = p * p * p * (p * (6 * p - 15) + 10)) ** 1.6,
    sd: o,
    inside: !0
  };
}
function c(t, e, s) {
  return t * ((128 + e * s * 127) / 255 - .5);
}
function h(t) {
  return t ? "inset 0 0 0 1px rgb(255 255 255 / 0.22), inset 1px 1px 0 0 rgb(255 255 255 / 0.5), 0 30px 60px -20px rgb(0 0 0 / 0.6)" : "inset 0 0 0 1px rgb(255 255 255 / 0.55), inset 1px 1px 0 0 rgb(255 255 255 / 0.95), inset -1px -1px 0 0 rgb(0 0 0 / 0.05), 0 30px 60px -20px rgb(0 0 0 / 0.28), 0 4px 12px rgb(0 0 0 / 0.08)";
}
const _export_DEFAULT_GLASS = {
  width: 50,
  height: 50,
  radius: 25,
  thick: 18,
  bend: 60,
  blur: 2,
  aber: 12,
  tint: .1
};
const _export_GLASS_LIMITS = n;
const _export_GLASS_SATURATE = 1.4;
const _export_clampAber = function (t) {
  return (0, i.clamp)(t, n.aber.min, n.aber.max);
};
const _export_clampBend = function (t) {
  return (0, i.clamp)(t, n.bend.min, n.bend.max);
};
const _export_clampBlur = function (t) {
  return (0, i.clamp)(t, n.blur.min, n.blur.max);
};
const _export_clampHeight = function (t) {
  return (0, i.clamp)(t, n.height.min, n.height.max);
};
const _export_clampRadius = function (t, e, s) {
  let a = Math.min(n.radius.max, Math.floor(Math.min(e, s) / 2));
  return (0, i.clamp)(t, n.radius.min, a);
};
const _export_clampThick = function (t) {
  return (0, i.clamp)(t, n.thick.min, n.thick.max);
};
const _export_clampTint = function (t) {
  return (0, i.clamp)(t, n.tint.min, n.tint.max);
};
const _export_clampWidth = function (t) {
  return (0, i.clamp)(t, n.width.min, n.width.max);
};
const _export_displacementOffset = c;
const _export_glassBoxShadow = h;
const _export_glassLens = r;
export { _export_DEFAULT_GLASS as DEFAULT_GLASS, _export_GLASS_LIMITS as GLASS_LIMITS, _export_GLASS_SATURATE as GLASS_SATURATE, _export_clampAber as clampAber, _export_clampBend as clampBend, _export_clampBlur as clampBlur, _export_clampHeight as clampHeight, _export_clampRadius as clampRadius, _export_clampThick as clampThick, _export_clampTint as clampTint, _export_clampWidth as clampWidth, _export_displacementOffset as displacementOffset, _export_glassBoxShadow as glassBoxShadow, _export_glassLens as glassLens };

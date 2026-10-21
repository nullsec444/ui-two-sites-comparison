// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module69699 from "./69699.js";
import * as _module30548 from "./30548.js";
import * as _module1077 from "./1077.js";
import * as _module11764 from "./11764.js";
import * as _module24411 from "./24411.js";
import * as _module9861 from "./9861.js";
import * as _module66564 from "./66564.js";
import * as _module33993 from "./33993.js";
import * as _module36839 from "./36839.js";
import * as _module19144 from "./19144.js";
import * as _module18949 from "./18949.js";
var D = _module69699;
var F = _module30548;
let I = (...t) => t.reduce((t, e) => i => e(t(i)));
var O = _module1077,
  N = _module11764,
  U = _module24411,
  $ = _module9861,
  W = _module66564,
  G = _module33993,
  z = _module36839;
function H(t, e, i) {
  return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6) ? t + (e - t) * 6 * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t;
}
var Y = _module19144;
function K(t, e) {
  return i => i > 0 ? e : t;
}
var X = _module18949;
let q = (t, e, i) => {
    let n = t * t,
      s = i * (e * e - n) + n;
    return s < 0 ? 0 : Math.sqrt(s);
  },
  Z = [G.hex, Y.rgba, z.hsla];
function _(t) {
  let e = Z.find(e => e.test(t));
  if ((0, N.warning)(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !e) return !1;
  let i = e.parse(t);
  return e === z.hsla && (i = function ({
    hue: t,
    saturation: e,
    lightness: i,
    alpha: n
  }) {
    t /= 360, i /= 100;
    let s = 0,
      r = 0,
      o = 0;
    if (e /= 100) {
      let n = i < .5 ? i * (1 + e) : i + e - i * e,
        a = 2 * i - n;
      s = H(a, n, t + 1 / 3), r = H(a, n, t), o = H(a, n, t - 1 / 3);
    } else s = r = o = i;
    return {
      red: Math.round(255 * s),
      green: Math.round(255 * r),
      blue: Math.round(255 * o),
      alpha: n
    };
  }(i)), i;
}
let J = (t, e) => {
    let i = _(t),
      n = _(e);
    if (!i || !n) return K(t, e);
    let s = {
      ...i
    };
    return t => (s.red = q(i.red, n.red, t), s.green = q(i.green, n.green, t), s.blue = q(i.blue, n.blue, t), s.alpha = (0, X.mixNumber)(i.alpha, n.alpha, t), Y.rgba.transform(s));
  },
  Q = new Set(["none", "hidden"]);
function tt(t, e) {
  return i => (0, X.mixNumber)(t, e, i);
}
function te(t) {
  return "number" == typeof t ? tt : "string" == typeof t ? (0, U.isCSSVariableToken)(t) ? K : $.color.test(t) ? J : ts : Array.isArray(t) ? ti : "object" == typeof t ? $.color.test(t) ? J : tn : K;
}
function ti(t, e) {
  let i = [...t],
    n = i.length,
    s = t.map((t, i) => te(t)(t, e[i]));
  return t => {
    for (let e = 0; e < n; e++) i[e] = s[e](t);
    return i;
  };
}
function tn(t, e) {
  let i = {
      ...t,
      ...e
    },
    n = {};
  for (let s in i) void 0 !== t[s] && void 0 !== e[s] && (n[s] = te(t[s])(t[s], e[s]));
  return t => {
    for (let e in n) i[e] = n[e](t);
    return i;
  };
}
let ts = (t, e) => {
  let i = W.complex.createTransformer(e),
    n = (0, W.analyseComplexValue)(t),
    s = (0, W.analyseComplexValue)(e);
  if (!(n.indexes.var.length === s.indexes.var.length && n.indexes.color.length === s.indexes.color.length && n.indexes.number.length >= s.indexes.number.length)) return (0, N.warning)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), K(t, e);
  if (Q.has(t) && !s.values.length || Q.has(e) && !n.values.length) return Q.has(t) ? i => i <= 0 ? t : e : i => i >= 1 ? e : t;
  return I(ti(function (t, e) {
    let i = [],
      n = {
        color: 0,
        var: 0,
        number: 0
      };
    for (let s = 0; s < e.values.length; s++) {
      let r = e.types[s],
        o = t.indexes[r][n[r]],
        a = t.values[o] ?? 0;
      i[s] = a, n[r]++;
    }
    return i;
  }(n, s), s.values), i);
};
function tr(t, e, i) {
  return "number" == typeof t && "number" == typeof e && "number" == typeof i ? (0, X.mixNumber)(t, e, i) : te(t)(t, e);
}
let tN = (t, e, i) => {
  let n = e - t;
  return n ? (i - t) / n : 1;
};
function tU(t, e, {
  clamp: i = !0,
  ease: n,
  mixer: s
} = {}) {
  let r = t.length;
  if ((0, N.invariant)(r === e.length, "Both input and output ranges must be the same length", "range-length"), 1 === r) return () => e[0];
  if (2 === r && e[0] === e[1]) return () => e[1];
  let o = t[0] === t[1];
  t[0] > t[r - 1] && (t = [...t].reverse(), e = [...e].reverse());
  let a = function (t, e, i) {
      let n = [],
        s = i || D.MotionGlobalConfig.mix || tr,
        r = t.length - 1;
      for (let i = 0; i < r; i++) {
        let r = s(t[i], t[i + 1]);
        e && (r = I(Array.isArray(e) ? e[i] || F.noop : e, r)), n.push(r);
      }
      return n;
    }(e, n, s),
    l = a.length,
    u = i => {
      if (o && i < t[0]) return e[0];
      let n = 0;
      if (l > 1) for (; n < t.length - 2 && !(i < t[n + 1]); n++);
      let s = tN(t[n], t[n + 1], i);
      return a[n](s);
    };
  return i ? e => u((0, O.clamp)(t[0], t[r - 1], e)) : u;
}
const _export_interpolate = tU;
export { _export_interpolate as interpolate };

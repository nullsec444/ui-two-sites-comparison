// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import { a as e, i as t, n, r } from "./rolldown-runtime-B0Z9INg1.js";
import { n as i, t as a } from "./jsx-runtime-Ciaf_P-h.js";
import { t as o } from "./react-dom-U4kpXZKZ.js";
import { t as s } from "./utils-WkhMP9hs.js";
import { t as c } from "./preload-helper-Czpn1I53.js";
import { t as l } from "./createReactComponent-DqK5J7gw.js";
import { t as u } from "./IconCheck-BGXEIM6U.js";
import { t as d } from "./IconRotate-cfH2nnph.js";
import { t as f } from "./IconVolume-DHGChT-5.js";
var p = l(`outline`, `maximize`, `Maximize`, [[`path`, {
    d: `M4 8v-2a2 2 0 0 1 2 -2h2`,
    key: `svg-0`
  }], [`path`, {
    d: `M4 16v2a2 2 0 0 0 2 2h2`,
    key: `svg-1`
  }], [`path`, {
    d: `M16 4h2a2 2 0 0 1 2 2v2`,
    key: `svg-2`
  }], [`path`, {
    d: `M16 20h2a2 2 0 0 0 2 -2v-2`,
    key: `svg-3`
  }]]),
  m = l(`outline`, `minimize`, `Minimize`, [[`path`, {
    d: `M15 19v-2a2 2 0 0 1 2 -2h2`,
    key: `svg-0`
  }], [`path`, {
    d: `M15 5v2a2 2 0 0 0 2 2h2`,
    key: `svg-1`
  }], [`path`, {
    d: `M5 15h2a2 2 0 0 1 2 2v2`,
    key: `svg-2`
  }], [`path`, {
    d: `M5 9h2a2 2 0 0 0 2 -2v-2`,
    key: `svg-3`
  }]]),
  h = l(`outline`, `picture-in-picture-off`, `PictureInPictureOff`, [[`path`, {
    d: `M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4`,
    key: `svg-0`
  }], [`path`, {
    d: `M14 15a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1l0 -3`,
    key: `svg-1`
  }], [`path`, {
    d: `M7 9l4 4`,
    key: `svg-2`
  }], [`path`, {
    d: `M7 12v-3h3`,
    key: `svg-3`
  }]]),
  g = l(`outline`, `picture-in-picture`, `PictureInPicture`, [[`path`, {
    d: `M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4`,
    key: `svg-0`
  }], [`path`, {
    d: `M14 15a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1l0 -3`,
    key: `svg-1`
  }]]),
  _ = l(`outline`, `rotate-clockwise`, `RotateClockwise`, [[`path`, {
    d: `M4.05 11a8 8 0 1 1 .5 4m-.5 5v-5h5`,
    key: `svg-0`
  }]]),
  v = l(`outline`, `volume-2`, `Volume2`, [[`path`, {
    d: `M15 8a5 5 0 0 1 0 8`,
    key: `svg-0`
  }], [`path`, {
    d: `M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5`,
    key: `svg-1`
  }]]),
  y = l(`outline`, `volume-3`, `Volume3`, [[`path`, {
    d: `M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5`,
    key: `svg-0`
  }], [`path`, {
    d: `M16 10l4 4m0 -4l-4 4`,
    key: `svg-1`
  }]]),
  b = l(`filled`, `brand-youtube-filled`, `BrandYoutubeFilled`, [[`path`, {
    d: `M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z`,
    key: `svg-0`
  }]]),
  x = e(a(), 1),
  S = e(i(), 1),
  C = (0, S.createContext)({});
function w(e) {
  let t = (0, S.useRef)(null);
  return t.current === null && (t.current = e()), t.current;
}
var T = typeof window < `u` ? S.useLayoutEffect : S.useEffect,
  E = (0, S.createContext)(null);
function ee(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function te(e, t) {
  let n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
var D = (e, t, n) => n > t ? t : n < e ? e : n,
  O = {},
  ne = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  k = e => typeof e == `object` && !!e,
  re = e => /^0[^.\s]+$/u.test(e);
function ie(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
var A = e => e,
  ae = (...e) => e.reduce((e, t) => n => t(e(n))),
  oe = (e, t, n) => {
    let r = t - e;
    return r ? (n - e) / r : 1;
  },
  se = class {
    constructor() {
      this.subscriptions = [];
    }
    add(e) {
      return ee(this.subscriptions, e), () => te(this.subscriptions, e);
    }
    notify(e, t, n) {
      let r = this.subscriptions.length;
      if (r) {
        if (r === 1) this.subscriptions[0](e, t, n);else for (let i = 0; i < r; i++) {
          let r = this.subscriptions[i];
          r && r(e, t, n);
        }
      }
    }
    getSize() {
      return this.subscriptions.length;
    }
    clear() {
      this.subscriptions.length = 0;
    }
  },
  j = e => e * 1e3,
  M = e => e / 1e3,
  ce = (e, t) => t ? 1e3 / t * e : 0,
  le = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  ue = 1e-7,
  N = 12;
function de(e, t, n, r, i) {
  let a,
    o,
    s = 0;
  do o = t + (n - t) / 2, a = le(o, r, i) - e, a > 0 ? n = o : t = o; while (Math.abs(a) > ue && ++s < N);
  return o;
}
function fe(e, t, n, r) {
  if (e === t && n === r) return A;
  let i = t => de(t, 0, 1, e, n);
  return e => e === 0 || e === 1 ? e : le(i(e), t, r);
}
var pe = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  me = e => t => 1 - e(1 - t),
  he = fe(.33, 1.53, .69, .99),
  ge = me(he),
  _e = pe(ge),
  ve = e => e >= 1 ? 1 : (e *= 2) < 1 ? .5 * ge(e) : .5 * (2 - 2 ** (-10 * (e - 1))),
  ye = e => 1 - Math.sin(Math.acos(e)),
  be = me(ye),
  xe = pe(ye),
  Se = fe(.42, 0, 1, 1),
  Ce = fe(0, 0, .58, 1),
  we = fe(.42, 0, .58, 1),
  Te = e => Array.isArray(e) && typeof e[0] != `number`,
  Ee = e => Array.isArray(e) && typeof e[0] == `number`,
  De = {
    linear: A,
    easeIn: Se,
    easeInOut: we,
    easeOut: Ce,
    circIn: ye,
    circInOut: xe,
    circOut: be,
    backIn: ge,
    backInOut: _e,
    backOut: he,
    anticipate: ve
  },
  Oe = e => typeof e == `string`,
  ke = e => {
    if (Ee(e)) {
      e.length;
      let [t, n, r, i] = e;
      return fe(t, n, r, i);
    }
    return Oe(e) ? (De[e], `${e}`, De[e]) : e;
  },
  Ae = [`setup`, `read`, `resolveKeyframes`, `preUpdate`, `update`, `preRender`, `render`, `postRender`];
function je(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1,
    a = new WeakSet(),
    o = {
      delta: 0,
      timestamp: 0,
      isProcessing: !1
    };
  function s(t) {
    a.has(t) && (c.schedule(t), e()), t(o);
  }
  let c = {
    schedule: (e, i = !1, o = !1) => {
      let s = o && r ? t : n;
      return i && a.add(e), s.add(e), e;
    },
    cancel: e => {
      n.delete(e), a.delete(e);
    },
    process: e => {
      if (o = e, r) {
        i = !0;
        return;
      }
      r = !0;
      let a = t;
      t = n, n = a, t.forEach(s), t.clear(), r = !1, i && (i = !1, c.process(e));
    }
  };
  return c;
}
var P = 40;
function Me(e, t) {
  let n = !1,
    r = !0,
    i = {
      delta: 0,
      timestamp: 0,
      isProcessing: !1
    },
    a = () => n = !0,
    o = Ae.reduce((e, t) => (e[t] = je(a), e), {}),
    {
      setup: s,
      read: c,
      resolveKeyframes: l,
      preUpdate: u,
      update: d,
      preRender: f,
      render: p,
      postRender: m
    } = o,
    h = () => {
      let a = O.useManualTiming,
        o = a ? i.timestamp : performance.now();
      n = !1, a || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(o - i.timestamp, P), 1)), i.timestamp = o, i.isProcessing = !0, s.process(i), c.process(i), l.process(i), u.process(i), d.process(i), f.process(i), p.process(i), m.process(i), i.isProcessing = !1, n && t && (r = !1, e(h));
    },
    g = () => {
      n = !0, r = !0, i.isProcessing || e(h);
    };
  return {
    schedule: Ae.reduce((e, t) => {
      let r = o[t];
      return e[t] = (e, t = !1, i = !1) => (n || g(), r.schedule(e, t, i)), e;
    }, {}),
    cancel: e => {
      for (let t = 0; t < Ae.length; t++) o[Ae[t]].cancel(e);
    },
    state: i,
    steps: o
  };
}
var {
    schedule: F,
    cancel: I,
    state: L,
    steps: Ne
  } = Me(typeof requestAnimationFrame < `u` ? requestAnimationFrame : A, !0),
  Pe;
function Fe() {
  Pe = void 0;
}
var R = {
    now: () => (Pe === void 0 && R.set(L.isProcessing || O.useManualTiming ? L.timestamp : performance.now()), Pe),
    set: e => {
      Pe = e, queueMicrotask(Fe);
    }
  },
  Ie = e => t => typeof t == `string` && t.startsWith(e),
  Le = Ie(`--`),
  Re = Ie(`var(--`),
  ze = e => Re(e) ? Be.test(e.split(`/*`)[0].trim()) : !1,
  Be = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Ve(e) {
  return typeof e == `string` && e.split(`/*`)[0].includes(`var(--`);
}
var He = {
    test: e => typeof e == `number`,
    parse: parseFloat,
    transform: e => e
  },
  Ue = {
    ...He,
    transform: e => D(0, 1, e)
  },
  We = {
    ...He,
    default: 1
  },
  Ge = e => Math.round(e * 1e5) / 1e5,
  Ke = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function qe(e) {
  return e == null;
}
var Je = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Ye = (e, t) => n => !!(typeof n == `string` && Je.test(n) && n.startsWith(e) || t && !qe(n) && Object.prototype.hasOwnProperty.call(n, t)),
  Xe = (e, t, n) => r => {
    if (typeof r != `string`) return r;
    let [i, a, o, s] = r.match(Ke);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(a),
      [n]: parseFloat(o),
      alpha: s === void 0 ? 1 : parseFloat(s)
    };
  },
  Ze = e => D(0, 255, e),
  Qe = {
    ...He,
    transform: e => Math.round(Ze(e))
  },
  $e = {
    test: Ye(`rgb`, `red`),
    parse: Xe(`red`, `green`, `blue`),
    transform: ({
      red: e,
      green: t,
      blue: n,
      alpha: r = 1
    }) => `rgba(` + Qe.transform(e) + `, ` + Qe.transform(t) + `, ` + Qe.transform(n) + `, ` + Ge(Ue.transform(r)) + `)`
  };
function et(e) {
  let t = ``,
    n = ``,
    r = ``,
    i = ``;
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: i ? parseInt(i, 16) / 255 : 1
  };
}
var tt = {
    test: Ye(`#`),
    parse: et,
    transform: $e.transform
  },
  nt = e => ({
    test: t => typeof t == `string` && t.endsWith(e) && t.split(` `).length === 1,
    parse: parseFloat,
    transform: t => `${t}${e}`
  }),
  z = nt(`deg`),
  B = nt(`%`),
  V = nt(`px`),
  rt = nt(`vh`),
  it = nt(`vw`),
  at = {
    ...B,
    parse: e => B.parse(e) / 100,
    transform: e => B.transform(e * 100)
  },
  ot = {
    test: Ye(`hsl`, `hue`),
    parse: Xe(`hue`, `saturation`, `lightness`),
    transform: ({
      hue: e,
      saturation: t,
      lightness: n,
      alpha: r = 1
    }) => `hsla(` + Math.round(e) + `, ` + B.transform(Ge(t)) + `, ` + B.transform(Ge(n)) + `, ` + Ge(Ue.transform(r)) + `)`
  },
  H = {
    test: e => $e.test(e) || tt.test(e) || ot.test(e),
    parse: e => $e.test(e) ? $e.parse(e) : ot.test(e) ? ot.parse(e) : tt.parse(e),
    transform: e => typeof e == `string` ? e : e.hasOwnProperty(`red`) ? $e.transform(e) : ot.transform(e),
    getAnimatableNone: e => {
      let t = H.parse(e);
      return t.alpha = 0, H.transform(t);
    }
  },
  st = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function ct(e) {
  return isNaN(e) && typeof e == `string` && (e.match(Ke)?.length || 0) + (e.match(st)?.length || 0) > 0;
}
var lt = `number`,
  ut = `color`,
  dt = `var`,
  ft = `var(`,
  pt = "${}",
  mt = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ht(e) {
  let t = e.toString(),
    n = [],
    r = {
      color: [],
      number: [],
      var: []
    },
    i = [],
    a = 0;
  return {
    values: n,
    split: t.replace(mt, e => (H.test(e) ? (r.color.push(a), i.push(ut), n.push(H.parse(e))) : e.startsWith(ft) ? (r.var.push(a), i.push(dt), n.push(e)) : (r.number.push(a), i.push(lt), n.push(parseFloat(e))), ++a, pt)).split(pt),
    indexes: r,
    types: i
  };
}
function gt(e) {
  return ht(e).values;
}
function _t({
  split: e,
  types: t
}) {
  let n = e.length;
  return r => {
    let i = ``;
    for (let a = 0; a < n; a++) if (i += e[a], r[a] !== void 0) {
      let e = t[a];
      i += e === lt ? Ge(r[a]) : e === ut ? H.transform(r[a]) : r[a];
    }
    return i;
  };
}
function vt(e) {
  return _t(ht(e));
}
var yt = e => typeof e == `number` ? 0 : H.test(e) ? H.getAnimatableNone(e) : e,
  bt = (e, t) => typeof e == `number` ? t?.trim().endsWith(`/`) ? e : 0 : yt(e);
function xt(e) {
  let t = ht(e);
  return _t(t)(t.values.map((e, n) => bt(e, t.split[n])));
}
var U = {
  test: ct,
  parse: gt,
  createTransformer: vt,
  getAnimatableNone: xt
};
function St(e, t, n) {
  return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Ct({
  hue: e,
  saturation: t,
  lightness: n,
  alpha: r
}) {
  e /= 360, t /= 100, n /= 100;
  let i = 0,
    a = 0,
    o = 0;
  if (!t) i = a = o = n;else {
    let r = n < .5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - r;
    i = St(s, r, e + 1 / 3), a = St(s, r, e), o = St(s, r, e - 1 / 3);
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(a * 255),
    blue: Math.round(o * 255),
    alpha: r
  };
}
function wt(e, t) {
  return n => n > 0 ? t : e;
}
var W = (e, t, n) => e + (t - e) * n,
  Tt = (e, t, n) => {
    let r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  Et = [tt, $e, ot],
  Dt = e => Et.find(t => t.test(e));
function Ot(e) {
  let t = Dt(e);
  if (`${e}`, !t) return !1;
  let n = t.parse(e);
  return t === ot && (n = Ct(n)), n;
}
var kt = (e, t) => {
    let n = Ot(e),
      r = Ot(t);
    if (!n || !r) return wt(e, t);
    let i = {
      ...n
    };
    return e => (i.red = Tt(n.red, r.red, e), i.green = Tt(n.green, r.green, e), i.blue = Tt(n.blue, r.blue, e), i.alpha = W(n.alpha, r.alpha, e), $e.transform(i));
  },
  At = new Set([`none`, `hidden`]);
function jt(e, t) {
  return At.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e;
}
function Mt(e, t) {
  return n => W(e, t, n);
}
function Nt(e) {
  return typeof e == `number` ? Mt : typeof e == `string` ? ze(e) ? wt : H.test(e) ? kt : Lt : Array.isArray(e) ? Pt : typeof e == `object` ? H.test(e) ? kt : Ft : wt;
}
function Pt(e, t) {
  let n = [...e],
    r = n.length,
    i = e.map((e, n) => Nt(e)(e, t[n]));
  return e => {
    for (let t = 0; t < r; t++) n[t] = i[t](e);
    return n;
  };
}
function Ft(e, t) {
  let n = {
      ...e,
      ...t
    },
    r = {};
  for (let i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = Nt(e[i])(e[i], t[i]));
  return e => {
    for (let t in r) n[t] = r[t](e);
    return n;
  };
}
function It(e, t) {
  let n = [],
    r = {
      color: 0,
      var: 0,
      number: 0
    };
  for (let i = 0; i < t.values.length; i++) {
    let a = t.types[i],
      o = e.indexes[a][r[a]],
      s = e.values[o] ?? 0;
    n[i] = s, r[a]++;
  }
  return n;
}
var Lt = (e, t) => {
  let n = U.createTransformer(t),
    r = ht(e),
    i = ht(t);
  return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? At.has(e) && !i.values.length || At.has(t) && !r.values.length ? jt(e, t) : ae(Pt(It(r, i), i.values), n) : (`${e}${t}`, wt(e, t));
};
function Rt(e, t, n) {
  return typeof e == `number` && typeof t == `number` && typeof n == `number` ? W(e, t, n) : Nt(e)(e, t);
}
var zt = e => {
    let t = ({
      timestamp: t
    }) => e(t);
    return {
      start: (e = !0) => F.update(t, e),
      stop: () => I(t),
      now: () => L.isProcessing ? L.timestamp : R.now()
    };
  },
  Bt = (e, t, n = 10) => {
    let r = ``,
      i = Math.max(Math.round(t / n), 2);
    for (let t = 0; t < i; t++) r += Math.round(e(t / (i - 1)) * 1e4) / 1e4 + `, `;
    return `linear(${r.substring(0, r.length - 2)})`;
  },
  Vt = 2e4;
function Ht(e) {
  let t = 0,
    n = e.next(t);
  for (; !n.done && t < 2e4;) t += 50, n = e.next(t);
  return t >= 2e4 ? 1 / 0 : t;
}
function Ut(e, t = 100, n) {
  let r = n({
      ...e,
      keyframes: [0, t]
    }),
    i = Math.min(Ht(r), Vt);
  return {
    type: `keyframes`,
    ease: e => r.next(i * e).value / t,
    duration: M(i)
  };
}
var G = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: .3,
  visualDuration: .3,
  restSpeed: {
    granular: .01,
    default: 2
  },
  restDelta: {
    granular: .005,
    default: .5
  },
  minDuration: .01,
  maxDuration: 10,
  minDamping: .05,
  maxDamping: 1
};
function Wt(e, t) {
  return e * Math.sqrt(1 - t * t);
}
var Gt = 12;
function Kt(e, t, n) {
  let r = n;
  for (let n = 1; n < Gt; n++) r -= e(r) / t(r);
  return r;
}
var qt = .001;
function Jt({
  duration: e = G.duration,
  bounce: t = G.bounce,
  velocity: n = G.velocity,
  mass: r = G.mass
}) {
  let i, a;
  G.maxDuration;
  let o = 1 - t;
  o = D(G.minDamping, G.maxDamping, o), e = D(G.minDuration, G.maxDuration, M(e)), o < 1 ? (i = t => {
    let r = t * o,
      i = r * e,
      a = r - n,
      s = Wt(t, o),
      c = Math.exp(-i);
    return qt - a / s * c;
  }, a = t => {
    let r = t * o * e,
      a = r * n + n,
      s = o ** 2 * t ** 2 * e,
      c = Math.exp(-r),
      l = Wt(t ** 2, o);
    return (-i(t) + qt > 0 ? -1 : 1) * ((a - s) * c) / l;
  }) : (i = t => -.001 + Math.exp(-t * e) * ((t - n) * e + 1), a = t => Math.exp(-t * e) * ((n - t) * (e * e)));
  let s = 5 / e,
    c = Kt(i, a, s);
  if (e = j(e), isNaN(c)) return {
    stiffness: G.stiffness,
    damping: G.damping,
    duration: e
  };
  {
    let t = c ** 2 * r;
    return {
      stiffness: t,
      damping: o * 2 * Math.sqrt(r * t),
      duration: e
    };
  }
}
var Yt = [`duration`, `bounce`],
  Xt = [`stiffness`, `damping`, `mass`];
function Zt(e, t) {
  return t.some(t => e[t] !== void 0);
}
function Qt(e) {
  let t = {
    velocity: G.velocity,
    stiffness: G.stiffness,
    damping: G.damping,
    mass: G.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Zt(e, Xt) && Zt(e, Yt)) {
    if (t.velocity = 0, e.visualDuration) {
      let n = e.visualDuration,
        r = 2 * Math.PI / (n * 1.2),
        i = r * r,
        a = 2 * D(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = {
        ...t,
        mass: G.mass,
        stiffness: i,
        damping: a
      };
    } else {
      let n = Jt({
        ...e,
        velocity: 0
      });
      t = {
        ...t,
        ...n,
        mass: G.mass
      }, t.isResolvedFromDuration = !0;
    }
  }
  return t;
}
function $t(e = G.visualDuration, t = G.bounce) {
  let n = typeof e == `object` ? e : {
      visualDuration: e,
      keyframes: [0, 1],
      bounce: t
    },
    {
      restSpeed: r,
      restDelta: i
    } = n,
    a = n.keyframes[0],
    o = n.keyframes[n.keyframes.length - 1],
    s = {
      done: !1,
      value: a
    },
    {
      stiffness: c,
      damping: l,
      mass: u,
      duration: d,
      velocity: f,
      isResolvedFromDuration: p
    } = Qt({
      ...n,
      velocity: -M(n.velocity || 0)
    }),
    m = f || 0,
    h = l / (2 * Math.sqrt(c * u)),
    g = o - a,
    _ = M(Math.sqrt(c / u)),
    v = Math.abs(g) < 5;
  r ||= v ? G.restSpeed.granular : G.restSpeed.default, i ||= v ? G.restDelta.granular : G.restDelta.default;
  let y, b, x, S, C, w;
  if (h < 1) x = Wt(_, h), S = (m + h * _ * g) / x, y = e => {
    let t = Math.exp(-h * _ * e);
    return o - t * (S * Math.sin(x * e) + g * Math.cos(x * e));
  }, C = h * _ * S + g * x, w = h * _ * g - S * x, b = e => Math.exp(-h * _ * e) * (C * Math.sin(x * e) + w * Math.cos(x * e));else if (h === 1) {
    y = e => o - Math.exp(-_ * e) * (g + (m + _ * g) * e);
    let e = m + _ * g;
    b = t => Math.exp(-_ * t) * (_ * e * t - m);
  } else {
    let e = _ * Math.sqrt(h * h - 1);
    y = t => {
      let n = Math.exp(-h * _ * t),
        r = Math.min(e * t, 300);
      return o - n * ((m + h * _ * g) * Math.sinh(r) + e * g * Math.cosh(r)) / e;
    };
    let t = (m + h * _ * g) / e,
      n = h * _ * t - g * e,
      r = h * _ * g - t * e;
    b = t => {
      let i = Math.exp(-h * _ * t),
        a = Math.min(e * t, 300);
      return i * (n * Math.sinh(a) + r * Math.cosh(a));
    };
  }
  let T = {
    calculatedDuration: p && d || null,
    velocity: e => j(b(e)),
    next: e => {
      if (!p && h < 1) {
        let t = Math.exp(-h * _ * e),
          n = Math.sin(x * e),
          a = Math.cos(x * e),
          c = o - t * (S * n + g * a),
          l = j(t * (C * n + w * a));
        return s.done = Math.abs(l) <= r && Math.abs(o - c) <= i, s.value = s.done ? o : c, s;
      }
      let t = y(e);
      if (p) s.done = e >= d;else {
        let n = j(b(e));
        s.done = Math.abs(n) <= r && Math.abs(o - t) <= i;
      }
      return s.value = s.done ? o : t, s;
    },
    toString: () => {
      let e = Math.min(Ht(T), Vt),
        t = Bt(t => T.next(e * t).value, e, 30);
      return e + `ms ` + t;
    },
    toTransition: () => {}
  };
  return T;
}
$t.applyToOptions = e => {
  let t = Ut(e, 100, $t);
  return e.ease = t.ease, e.duration = j(t.duration), e.type = `keyframes`, e;
};
var en = 5;
function tn(e, t, n) {
  let r = Math.max(t - en, 0);
  return ce(n - e(r), t - r);
}
function nn({
  keyframes: e,
  velocity: t = 0,
  power: n = .8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: a = 500,
  modifyTarget: o,
  min: s,
  max: c,
  restDelta: l = .5,
  restSpeed: u
}) {
  let d = e[0],
    f = {
      done: !1,
      value: d
    },
    p = e => s !== void 0 && e < s || c !== void 0 && e > c,
    m = e => s === void 0 ? c : c === void 0 || Math.abs(s - e) < Math.abs(c - e) ? s : c,
    h = n * t,
    g = d + h,
    _ = o === void 0 ? g : o(g);
  _ !== g && (h = _ - d);
  let v = e => -h * Math.exp(-e / r),
    y = e => _ + v(e),
    b = e => {
      let t = v(e),
        n = y(e);
      f.done = Math.abs(t) <= l, f.value = f.done ? _ : n;
    },
    x,
    S,
    C = e => {
      p(f.value) && (x = e, S = $t({
        keyframes: [f.value, m(f.value)],
        velocity: tn(y, e, f.value),
        damping: i,
        stiffness: a,
        restDelta: l,
        restSpeed: u
      }));
    };
  return C(0), {
    calculatedDuration: null,
    next: e => {
      let t = !1;
      return !S && x === void 0 && (t = !0, b(e), C(e)), x !== void 0 && e >= x ? S.next(e - x) : (!t && b(e), f);
    }
  };
}
function rn(e, t, n) {
  let r = [],
    i = n || O.mix || Rt,
    a = e.length - 1;
  for (let n = 0; n < a; n++) {
    let a = i(e[n], e[n + 1]);
    t && (a = ae(Array.isArray(t) ? t[n] || A : t, a)), r.push(a);
  }
  return r;
}
function an(e, t, {
  clamp: n = !0,
  ease: r,
  mixer: i
} = {}) {
  let a = e.length;
  if (t.length, a === 1) return () => t[0];
  if (a === 2 && t[0] === t[1]) return () => t[1];
  let o = e[0] === e[1];
  e[0] > e[a - 1] && (e = [...e].reverse(), t = [...t].reverse());
  let s = rn(t, r, i),
    c = s.length,
    l = n => {
      if (o && n < e[0]) return t[0];
      let r = 0;
      if (c > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
      let i = oe(e[r], e[r + 1], n);
      return s[r](i);
    };
  return n ? t => l(D(e[0], e[a - 1], t)) : l;
}
function on(e, t) {
  let n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    let i = oe(0, t, r);
    e.push(W(n, 1, i));
  }
}
function sn(e) {
  let t = [0];
  return on(t, e.length - 1), t;
}
function cn(e, t) {
  return e.map(e => e * t);
}
function ln(e, t) {
  return e.map(() => t || we).splice(0, e.length - 1);
}
function un({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = `easeInOut`
}) {
  let i = Te(r) ? r.map(ke) : ke(r),
    a = {
      done: !1,
      value: t[0]
    },
    o = an(cn(n && n.length === t.length ? n : sn(t), e), t, {
      ease: Array.isArray(i) ? i : ln(t, i)
    });
  return {
    calculatedDuration: e,
    next: t => (a.value = o(t), a.done = t >= e, a)
  };
}
var dn = e => e !== null;
function fn(e, {
  repeat: t,
  repeatType: n = `loop`
}, r, i = 1) {
  let a = e.filter(dn),
    o = i < 0 || t && n !== `loop` && t % 2 == 1 ? 0 : a.length - 1;
  return !o || r === void 0 ? a[o] : r;
}
var pn = {
  decay: nn,
  inertia: nn,
  tween: un,
  keyframes: un,
  spring: $t
};
function mn(e) {
  typeof e.type == `string` && (e.type = pn[e.type]);
}
var hn = class {
    constructor() {
      this.updateFinished();
    }
    get finished() {
      return this._finished;
    }
    updateFinished() {
      this._finished = new Promise(e => {
        this.resolve = e;
      });
    }
    notifyFinished() {
      this.resolve();
    }
    then(e, t) {
      return this.finished.then(e, t);
    }
  },
  gn = e => e / 100,
  _n = class extends hn {
    constructor(e) {
      super(), this.state = `idle`, this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
        done: !1,
        value: void 0
      }, this.stop = () => {
        let {
          motionValue: e
        } = this.options;
        e && e.updatedAt !== R.now() && this.tick(R.now()), this.isStopped = !0, this.state !== `idle` && (this.teardown(), this.options.onStop?.());
      }, this.options = e, this.initAnimation(), this.play(), e.autoplay === !1 && this.pause();
    }
    initAnimation() {
      let {
        options: e
      } = this;
      mn(e);
      let {
          type: t = un,
          repeat: n = 0,
          repeatDelay: r = 0,
          repeatType: i,
          velocity: a = 0
        } = e,
        {
          keyframes: o
        } = e,
        s = t || un;
      s !== un && typeof o[0] != `number` && (this.mixKeyframes = ae(gn, Rt(o[0], o[1])), o = [0, 100]);
      let c = s({
        ...e,
        keyframes: o
      });
      i === `mirror` && (this.mirroredGenerator = s({
        ...e,
        keyframes: [...o].reverse(),
        velocity: -a
      })), c.calculatedDuration === null && (c.calculatedDuration = Ht(c));
      let {
        calculatedDuration: l
      } = c;
      this.calculatedDuration = l, this.resolvedDuration = l + r, this.totalDuration = this.resolvedDuration * (n + 1) - r, this.generator = c;
    }
    updateTime(e) {
      let t = Math.round(e - this.startTime) * this.playbackSpeed;
      this.currentTime = this.holdTime === null ? t : this.holdTime;
    }
    tick(e, t = !1) {
      let {
        generator: n,
        totalDuration: r,
        mixKeyframes: i,
        mirroredGenerator: a,
        resolvedDuration: o,
        calculatedDuration: s
      } = this;
      if (this.startTime === null) return n.next(0);
      let {
        delay: c = 0,
        keyframes: l,
        repeat: u,
        repeatType: d,
        repeatDelay: f,
        type: p,
        onUpdate: m,
        finalKeyframe: h
      } = this.options;
      this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - r / this.speed, this.startTime)), t ? this.currentTime = e : this.updateTime(e);
      let g = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1),
        _ = this.playbackSpeed >= 0 ? g < 0 : g > r;
      this.currentTime = Math.max(g, 0), this.state === `finished` && this.holdTime === null && (this.currentTime = r);
      let v = this.currentTime,
        y = n;
      if (u) {
        let e = Math.min(this.currentTime, r) / o,
          t = Math.floor(e),
          n = e % 1;
        !n && e >= 1 && (n = 1), n === 1 && t--, t = Math.min(t, u + 1), t % 2 && (d === `reverse` ? (n = 1 - n, f && (n -= f / o)) : d === `mirror` && (y = a)), v = D(0, 1, n) * o;
      }
      let b;
      _ ? (this.delayState.value = l[0], b = this.delayState) : b = y.next(v), i && !_ && (b.value = i(b.value));
      let {
        done: x
      } = b;
      !_ && s !== null && (x = this.playbackSpeed >= 0 ? this.currentTime >= r : this.currentTime <= 0);
      let S = this.holdTime === null && (this.state === `finished` || this.state === `running` && x);
      return S && p !== nn && (b.value = fn(l, this.options, h, this.speed)), m && m(b.value), S && this.finish(), b;
    }
    then(e, t) {
      return this.finished.then(e, t);
    }
    get duration() {
      return M(this.calculatedDuration);
    }
    get iterationDuration() {
      let {
        delay: e = 0
      } = this.options || {};
      return this.duration + M(e);
    }
    get time() {
      return M(this.currentTime);
    }
    set time(e) {
      e = j(e), this.currentTime = e, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = `paused`, this.holdTime = e, this.tick(e));
    }
    getGeneratorVelocity() {
      let e = this.currentTime;
      if (e <= 0) return this.options.velocity || 0;
      if (this.generator.velocity) return this.generator.velocity(e);
      let t = this.generator.next(e).value;
      return tn(e => this.generator.next(e).value, e, t);
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(e) {
      let t = this.playbackSpeed !== e;
      t && this.driver && this.updateTime(R.now()), this.playbackSpeed = e, t && this.driver && (this.time = M(this.currentTime));
    }
    play() {
      if (this.isStopped) return;
      let {
        driver: e = zt,
        startTime: t
      } = this.options;
      this.driver ||= e(e => this.tick(e)), this.options.onPlay?.();
      let n = this.driver.now();
      this.state === `finished` ? (this.updateFinished(), this.startTime = n) : this.holdTime === null ? this.startTime ||= t ?? n : this.startTime = n - this.holdTime, this.state === `finished` && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = `running`, this.driver.start();
    }
    pause() {
      this.state = `paused`, this.updateTime(R.now()), this.holdTime = this.currentTime;
    }
    complete() {
      this.state !== `running` && this.play(), this.state = `finished`, this.holdTime = null;
    }
    finish() {
      this.notifyFinished(), this.teardown(), this.state = `finished`, this.options.onComplete?.();
    }
    cancel() {
      this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
    }
    teardown() {
      this.state = `idle`, this.stopDriver(), this.startTime = this.holdTime = null;
    }
    stopDriver() {
      this.driver &&= (this.driver.stop(), void 0);
    }
    sample(e) {
      return this.startTime = 0, this.tick(e, !0);
    }
    attachTimeline(e) {
      return this.options.allowFlatten && (this.options.type = `keyframes`, this.options.ease = `linear`, this.initAnimation()), this.driver?.stop(), e.observe(this);
    }
  };
function vn(e) {
  for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
var yn = e => e * 180 / Math.PI,
  bn = e => Sn(yn(Math.atan2(e[1], e[0]))),
  xn = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: e => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: bn,
    rotateZ: bn,
    skewX: e => yn(Math.atan(e[1])),
    skewY: e => yn(Math.atan(e[2])),
    skew: e => (Math.abs(e[1]) + Math.abs(e[2])) / 2
  },
  Sn = e => (e %= 360, e < 0 && (e += 360), e),
  Cn = bn,
  wn = e => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
  Tn = e => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
  En = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: wn,
    scaleY: Tn,
    scale: e => (wn(e) + Tn(e)) / 2,
    rotateX: e => Sn(yn(Math.atan2(e[6], e[5]))),
    rotateY: e => Sn(yn(Math.atan2(-e[2], e[0]))),
    rotateZ: Cn,
    rotate: Cn,
    skewX: e => yn(Math.atan(e[4])),
    skewY: e => yn(Math.atan(e[1])),
    skew: e => (Math.abs(e[1]) + Math.abs(e[4])) / 2
  };
function Dn(e) {
  return +!!e.includes(`scale`);
}
function On(e, t) {
  if (!e || e === `none`) return Dn(t);
  let n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),
    r,
    i;
  if (n) r = En, i = n;else {
    let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    r = xn, i = t;
  }
  if (!i) return Dn(t);
  let a = r[t],
    o = i[1].split(`,`).map(An);
  return typeof a == `function` ? a(o) : o[a];
}
var kn = (e, t) => {
  let {
    transform: n = `none`
  } = getComputedStyle(e);
  return On(n, t);
};
function An(e) {
  return parseFloat(e.trim());
}
var jn = [`transformPerspective`, `x`, `y`, `z`, `translateX`, `translateY`, `translateZ`, `scale`, `scaleX`, `scaleY`, `rotate`, `rotateX`, `rotateY`, `rotateZ`, `skew`, `skewX`, `skewY`],
  Mn = new Set([...jn, `pathRotation`]),
  Nn = e => e === He || e === V,
  Pn = new Set([`x`, `y`, `z`]),
  Fn = jn.filter(e => !Pn.has(e));
function In(e) {
  let t = [];
  return Fn.forEach(n => {
    let r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(+!!n.startsWith(`scale`)));
  }), t;
}
var Ln = {
  width: ({
    x: e
  }, {
    paddingLeft: t = `0`,
    paddingRight: n = `0`,
    boxSizing: r
  }) => {
    let i = e.max - e.min;
    return r === `border-box` ? i : i - parseFloat(t) - parseFloat(n);
  },
  height: ({
    y: e
  }, {
    paddingTop: t = `0`,
    paddingBottom: n = `0`,
    boxSizing: r
  }) => {
    let i = e.max - e.min;
    return r === `border-box` ? i : i - parseFloat(t) - parseFloat(n);
  },
  top: (e, {
    top: t
  }) => parseFloat(t),
  left: (e, {
    left: t
  }) => parseFloat(t),
  bottom: ({
    y: e
  }, {
    top: t
  }) => parseFloat(t) + (e.max - e.min),
  right: ({
    x: e
  }, {
    left: t
  }) => parseFloat(t) + (e.max - e.min),
  x: (e, {
    transform: t
  }) => On(t, `x`),
  y: (e, {
    transform: t
  }) => On(t, `y`)
};
Ln.translateX = Ln.x, Ln.translateY = Ln.y;
var Rn = new Set(),
  zn = !1,
  Bn = !1,
  Vn = !1;
function Hn() {
  if (Bn) {
    let e = Array.from(Rn).filter(e => e.needsMeasurement),
      t = new Set(e.map(e => e.element)),
      n = new Map();
    t.forEach(e => {
      let t = In(e);
      t.length && (n.set(e, t), e.render());
    }), e.forEach(e => e.measureInitialState()), t.forEach(e => {
      e.render();
      let t = n.get(e);
      t && t.forEach(([t, n]) => {
        e.getValue(t)?.set(n);
      });
    }), e.forEach(e => e.measureEndState()), e.forEach(e => {
      e.suspendedScrollY !== void 0 && window.scrollTo(0, e.suspendedScrollY);
    });
  }
  Bn = !1, zn = !1, Rn.forEach(e => e.complete(Vn)), Rn.clear();
}
function Un() {
  Rn.forEach(e => {
    e.readKeyframes(), e.needsMeasurement && (Bn = !0);
  });
}
function Wn() {
  Vn = !0, Un(), Hn(), Vn = !1;
}
var Gn = class {
    constructor(e, t, n, r, i, a = !1) {
      this.state = `pending`, this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = t, this.name = n, this.motionValue = r, this.element = i, this.isAsync = a;
    }
    scheduleResolve() {
      this.state = `scheduled`, this.isAsync ? (Rn.add(this), zn || (zn = !0, F.read(Un), F.resolveKeyframes(Hn))) : (this.readKeyframes(), this.complete());
    }
    readKeyframes() {
      let {
        unresolvedKeyframes: e,
        name: t,
        element: n,
        motionValue: r
      } = this;
      if (e[0] === null) {
        let i = r?.get(),
          a = e[e.length - 1];
        if (i !== void 0) e[0] = i;else if (n && t) {
          let r = n.readValue(t, a);
          r != null && (e[0] = r);
        }
        e[0] === void 0 && (e[0] = a), r && i === void 0 && r.set(e[0]);
      }
      vn(e);
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(e = !1) {
      this.state = `complete`, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), Rn.delete(this);
    }
    cancel() {
      this.state === `scheduled` && (Rn.delete(this), this.state = `pending`);
    }
    resume() {
      this.state === `pending` && this.scheduleResolve();
    }
  },
  Kn = e => e.startsWith(`--`);
function qn(e, t, n) {
  Kn(t) ? e.style.setProperty(t, n) : e.style[t] = n;
}
var Jn = {};
function Yn(e, t) {
  let n = ie(e);
  return () => Jn[t] ?? n();
}
var Xn = Yn(() => window.ScrollTimeline !== void 0, `scrollTimeline`),
  Zn = Yn(() => {
    try {
      document.createElement(`div`).animate({
        opacity: 0
      }, {
        easing: `linear(0, 1)`
      });
    } catch {
      return !1;
    }
    return !0;
  }, `linearEasing`),
  Qn = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  $n = {
    linear: `linear`,
    ease: `ease`,
    easeIn: `ease-in`,
    easeOut: `ease-out`,
    easeInOut: `ease-in-out`,
    circIn: Qn([0, .65, .55, 1]),
    circOut: Qn([.55, 0, 1, .45]),
    backIn: Qn([.31, .01, .66, -.59]),
    backOut: Qn([.33, 1.53, .69, .99])
  };
function er(e, t) {
  if (e) return typeof e == `function` ? Zn() ? Bt(e, t) : `ease-out` : Ee(e) ? Qn(e) : Array.isArray(e) ? e.map(e => er(e, t) || $n.easeOut) : $n[e];
}
function tr(e, t, n, {
  delay: r = 0,
  duration: i = 300,
  repeat: a = 0,
  repeatType: o = `loop`,
  ease: s = `easeOut`,
  times: c
} = {}, l = void 0) {
  let u = {
    [t]: n
  };
  c && (u.offset = c);
  let d = er(s, i);
  Array.isArray(d) && (u.easing = d);
  let f = {
    delay: r,
    duration: i,
    easing: Array.isArray(d) ? `linear` : d,
    fill: `both`,
    iterations: a + 1,
    direction: o === `reverse` ? `alternate` : `normal`
  };
  return l && (f.pseudoElement = l), e.animate(u, f);
}
function nr(e) {
  return typeof e == `function` && `applyToOptions` in e;
}
function rr({
  type: e,
  ...t
}) {
  return nr(e) && Zn() ? e.applyToOptions(t) : (t.duration ??= 300, t.ease ??= `easeOut`, t);
}
var ir = class extends hn {
    constructor(e) {
      if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !e) return;
      let {
        element: t,
        name: n,
        keyframes: r,
        pseudoElement: i,
        allowFlatten: a = !1,
        finalKeyframe: o,
        onComplete: s
      } = e;
      this.isPseudoElement = !!i, this.allowFlatten = a, this.options = e, e.type;
      let c = rr(e);
      this.animation = tr(t, n, r, c, i), c.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
        if (this.finishedTime = this.time, !i) {
          let e = fn(r, this.options, o, this.speed);
          this.updateMotionValue && this.updateMotionValue(e), qn(t, n, e), this.animation.cancel();
        }
        s?.(), this.notifyFinished();
      };
    }
    play() {
      this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === `finished` && this.updateFinished());
    }
    pause() {
      this.animation.pause();
    }
    complete() {
      this.animation.finish?.();
    }
    cancel() {
      try {
        this.animation.cancel();
      } catch {}
    }
    stop() {
      if (this.isStopped) return;
      this.isStopped = !0;
      let {
        state: e
      } = this;
      e !== `idle` && e !== `finished` && (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
    }
    commitStyles() {
      let e = this.options?.element;
      !this.isPseudoElement && e?.isConnected && this.animation.commitStyles?.();
    }
    get duration() {
      let e = this.animation.effect?.getComputedTiming?.().duration || 0;
      return M(Number(e));
    }
    get iterationDuration() {
      let {
        delay: e = 0
      } = this.options || {};
      return this.duration + M(e);
    }
    get time() {
      return M(Number(this.animation.currentTime) || 0);
    }
    set time(e) {
      let t = this.finishedTime !== null;
      this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = j(e), t && this.animation.pause();
    }
    get speed() {
      return this.animation.playbackRate;
    }
    set speed(e) {
      e < 0 && (this.finishedTime = null), this.animation.playbackRate = e;
    }
    get state() {
      return this.finishedTime === null ? this.animation.playState : `finished`;
    }
    get startTime() {
      return this.manualStartTime ?? Number(this.animation.startTime);
    }
    set startTime(e) {
      this.manualStartTime = this.animation.startTime = e;
    }
    attachTimeline({
      timeline: e,
      rangeStart: t,
      rangeEnd: n,
      observe: r
    }) {
      return this.allowFlatten && this.animation.effect?.updateTiming({
        easing: `linear`
      }), this.animation.onfinish = null, e && Xn() ? (this.animation.timeline = e, t && (this.animation.rangeStart = t), n && (this.animation.rangeEnd = n), A) : r(this);
    }
  },
  ar = {
    anticipate: ve,
    backInOut: _e,
    circInOut: xe
  };
function or(e) {
  return e in ar;
}
function sr(e) {
  typeof e.ease == `string` && or(e.ease) && (e.ease = ar[e.ease]);
}
var cr = 10,
  lr = class extends ir {
    constructor(e) {
      sr(e), mn(e), super(e), e.startTime !== void 0 && e.autoplay !== !1 && (this.startTime = e.startTime), this.options = e;
    }
    updateMotionValue(e) {
      let {
        motionValue: t,
        onUpdate: n,
        onComplete: r,
        element: i,
        ...a
      } = this.options;
      if (!t) return;
      if (e !== void 0) {
        t.set(e);
        return;
      }
      let o = new _n({
          ...a,
          autoplay: !1
        }),
        s = Math.max(cr, R.now() - this.startTime),
        c = D(0, cr, s - cr),
        l = o.sample(s).value,
        {
          name: u
        } = this.options;
      i && u && qn(i, u, l), t.setWithVelocity(o.sample(Math.max(0, s - c)).value, l, c), o.stop();
    }
  },
  ur = (e, t) => t !== `zIndex` && !!(typeof e == `number` || Array.isArray(e) || typeof e == `string` && (U.test(e) || e === `0`) && !e.startsWith(`url(`));
function dr(e) {
  let t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function fr(e, t, n, r) {
  let i = e[0];
  if (i === null) return !1;
  if (t === `display` || t === `visibility`) return !0;
  let a = e[e.length - 1],
    o = ur(i, t),
    s = ur(a, t);
  return `${t}${i}${a}${o ? a : i}`, !o || !s ? !1 : dr(e) || (n === `spring` || nr(n)) && r;
}
function pr(e) {
  e.duration = 0, e.type = `keyframes`;
}
var mr = new Set([`opacity`, `clipPath`, `filter`, `transform`, `backgroundColor`]),
  hr = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function gr(e) {
  for (let t = 0; t < e.length; t++) if (typeof e[t] == `string` && hr.test(e[t])) return !0;
  return !1;
}
var _r = new Set([`color`, `backgroundColor`, `outlineColor`, `fill`, `stroke`, `borderColor`, `borderTopColor`, `borderRightColor`, `borderBottomColor`, `borderLeftColor`]),
  vr = ie(() => Object.hasOwnProperty.call(Element.prototype, `animate`));
function yr(e) {
  let {
      motionValue: t,
      name: n,
      repeatDelay: r,
      repeatType: i,
      damping: a,
      type: o,
      keyframes: s
    } = e,
    c = t?.owner?.current;
  if (!(c instanceof HTMLElement) && !(c instanceof SVGElement)) return !1;
  let {
    onUpdate: l,
    transformTemplate: u
  } = t.owner.getProps();
  return vr() && n && (mr.has(n) || _r.has(n) && gr(s)) && (n !== `transform` || !u) && !l && !r && i !== `mirror` && a !== 0 && o !== `inertia`;
}
var br = 40,
  xr = class extends hn {
    constructor({
      autoplay: e = !0,
      delay: t = 0,
      type: n = `keyframes`,
      repeat: r = 0,
      repeatDelay: i = 0,
      repeatType: a = `loop`,
      keyframes: o,
      name: s,
      motionValue: c,
      element: l,
      ...u
    }) {
      super(), this.stop = () => {
        this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
      }, this.createdAt = R.now();
      let d = {
          autoplay: e,
          delay: t,
          type: n,
          repeat: r,
          repeatDelay: i,
          repeatType: a,
          name: s,
          motionValue: c,
          element: l,
          ...u
        },
        f = l?.KeyframeResolver || Gn;
      this.keyframeResolver = new f(o, (e, t, n) => this.onKeyframesResolved(e, t, d, !n), s, c, l), this.keyframeResolver?.scheduleResolve();
    }
    onKeyframesResolved(e, t, n, r) {
      this.keyframeResolver = void 0;
      let {
        name: i,
        type: a,
        velocity: o,
        delay: s,
        isHandoff: c,
        onUpdate: l
      } = n;
      this.resolvedAt = R.now();
      let u = !0;
      fr(e, i, a, o) || (u = !1, (O.instantAnimations || !s) && l?.(fn(e, n, t)), e[0] = e[e.length - 1], pr(n), n.repeat = 0);
      let d = {
          startTime: r ? this.resolvedAt && this.resolvedAt - this.createdAt > br ? this.resolvedAt : this.createdAt : void 0,
          finalKeyframe: t,
          ...n,
          keyframes: e
        },
        f = u && !c && yr(d),
        p = d.motionValue?.owner?.current,
        m;
      if (f) try {
        m = new lr({
          ...d,
          element: p
        });
      } catch {
        m = new _n(d);
      } else m = new _n(d);
      m.finished.then(() => {
        this.notifyFinished();
      }).catch(A), this.pendingTimeline &&= (this.stopTimeline = m.attachTimeline(this.pendingTimeline), void 0), this._animation = m;
    }
    get finished() {
      return this._animation ? this.animation.finished : this._finished;
    }
    then(e, t) {
      return this.finished.finally(e).then(() => {});
    }
    get animation() {
      return this._animation || (this.keyframeResolver?.resume(), Wn()), this._animation;
    }
    get duration() {
      return this.animation.duration;
    }
    get iterationDuration() {
      return this.animation.iterationDuration;
    }
    get time() {
      return this.animation.time;
    }
    set time(e) {
      this.animation.time = e;
    }
    get speed() {
      return this.animation.speed;
    }
    get state() {
      return this.animation.state;
    }
    set speed(e) {
      this.animation.speed = e;
    }
    get startTime() {
      return this.animation.startTime;
    }
    attachTimeline(e) {
      return this._animation ? this.stopTimeline = this.animation.attachTimeline(e) : this.pendingTimeline = e, () => this.stop();
    }
    play() {
      this.animation.play();
    }
    pause() {
      this.animation.pause();
    }
    complete() {
      this.animation.complete();
    }
    cancel() {
      this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
    }
  };
function Sr(e, t, n, r = 0, i = 1) {
  let a = Array.from(e).sort((e, t) => e.sortNodePosition(t)).indexOf(t),
    o = e.size,
    s = (o - 1) * r;
  return typeof n == `function` ? n(a, o) : i === 1 ? a * r : s - a * r;
}
var Cr = 30,
  wr = e => !isNaN(parseFloat(e)),
  Tr = {
    current: void 0
  },
  Er = class {
    constructor(e, t = {}) {
      this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = e => {
        let t = R.now();
        if (this.updatedAt !== t && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(e), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents)) for (let e of this.dependents) e.dirty();
      }, this.hasAnimated = !1, this.setCurrent(e), this.owner = t.owner;
    }
    setCurrent(e) {
      this.current = e, this.updatedAt = R.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = wr(this.current));
    }
    setPrevFrameValue(e = this.current) {
      this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
    }
    onChange(e) {
      return this.on(`change`, e);
    }
    on(e, t) {
      this.events[e] || (this.events[e] = new se());
      let n = this.events[e].add(t);
      return e === `change` ? () => {
        n(), F.read(() => {
          this.events.change.getSize() || this.stop();
        });
      } : n;
    }
    clearListeners() {
      for (let e in this.events) this.events[e].clear();
    }
    attach(e, t) {
      this.passiveEffect = e, this.stopPassiveEffect = t;
    }
    set(e) {
      this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e);
    }
    setWithVelocity(e, t, n) {
      this.set(t), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - n;
    }
    jump(e, t = !0) {
      this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, t && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
    }
    dirty() {
      this.events.change?.notify(this.current);
    }
    addDependent(e) {
      this.dependents ||= new Set(), this.dependents.add(e);
    }
    removeDependent(e) {
      this.dependents && this.dependents.delete(e);
    }
    get() {
      return Tr.current && Tr.current.push(this), this.current;
    }
    getPrevious() {
      return this.prev;
    }
    getVelocity() {
      let e = R.now();
      if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Cr) return 0;
      let t = Math.min(this.updatedAt - this.prevUpdatedAt, Cr);
      return ce(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
    }
    start(e) {
      return this.stop(), new Promise(t => {
        this.hasAnimated = !0, this.animation = e(t), this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
      });
    }
    stop() {
      this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
    }
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    destroy() {
      this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
    }
  };
function Dr(e, t) {
  return new Er(e, t);
}
function Or(e, t) {
  if (e?.inherit && t) {
    let {
      inherit: n,
      ...r
    } = e;
    return {
      ...t,
      ...r
    };
  }
  return e;
}
function kr(e, t) {
  let n = e?.[t] ?? e?.default ?? e;
  return n === e ? n : Or(n, e);
}
var Ar = {
    type: `spring`,
    stiffness: 500,
    damping: 25,
    restSpeed: 10
  },
  jr = e => ({
    type: `spring`,
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
  }),
  Mr = {
    type: `keyframes`,
    duration: .8
  },
  Nr = {
    type: `keyframes`,
    ease: [.25, .1, .35, 1],
    duration: .3
  },
  Pr = (e, {
    keyframes: t
  }) => t.length > 2 ? Mr : Mn.has(e) ? e.startsWith(`scale`) ? jr(t[1]) : Ar : Nr,
  Fr = new Set([`when`, `delay`, `delayChildren`, `staggerChildren`, `staggerDirection`, `repeat`, `repeatType`, `repeatDelay`, `from`, `elapsed`]);
function Ir(e) {
  for (let t in e) if (!Fr.has(t)) return !0;
  return !1;
}
var Lr = (e, t, n, r = {}, i, a) => o => {
    let s = kr(r, e) || {},
      c = s.delay || r.delay || 0,
      {
        elapsed: l = 0
      } = r;
    l -= j(c);
    let u = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: `easeOut`,
      velocity: t.getVelocity(),
      ...s,
      delay: -l,
      onUpdate: e => {
        t.set(e), s.onUpdate && s.onUpdate(e);
      },
      onComplete: () => {
        o(), s.onComplete && s.onComplete();
      },
      name: e,
      motionValue: t,
      element: a ? void 0 : i
    };
    Ir(s) || Object.assign(u, Pr(e, u)), u.duration &&= j(u.duration), u.repeatDelay &&= j(u.repeatDelay), u.from !== void 0 && (u.keyframes[0] = u.from);
    let d = !1;
    if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (pr(u), u.delay === 0 && (d = !0)), (O.instantAnimations || O.skipAnimations || i?.shouldSkipAnimations || s.skipAnimations) && (d = !0, pr(u), u.delay = 0), u.allowFlatten = !s.type && !s.ease, d && !a && t.get() !== void 0) {
      let e = fn(u.keyframes, s);
      if (e !== void 0) {
        F.update(() => {
          u.onUpdate(e), u.onComplete();
        });
        return;
      }
    }
    return s.isSync ? new _n(u) : new xr(u);
  },
  Rr = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function zr(e) {
  let t = Rr.exec(e);
  if (!t) return [,];
  let [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function Br(e, t, n = 1) {
  `${e}`;
  let [r, i] = zr(e);
  if (!r) return;
  let a = window.getComputedStyle(t).getPropertyValue(r);
  if (a) {
    let e = a.trim();
    return ne(e) ? parseFloat(e) : e;
  }
  return ze(i) ? Br(i, t, n + 1) : i;
}
function Vr(e) {
  let t = [{}, {}];
  return e?.values.forEach((e, n) => {
    t[0][n] = e.get(), t[1][n] = e.getVelocity();
  }), t;
}
function Hr(e, t, n, r) {
  if (typeof t == `function`) {
    let [i, a] = Vr(r);
    t = t(n === void 0 ? e.custom : n, i, a);
  }
  if (typeof t == `string` && (t = e.variants && e.variants[t]), typeof t == `function`) {
    let [i, a] = Vr(r);
    t = t(n === void 0 ? e.custom : n, i, a);
  }
  return t;
}
function Ur(e, t, n) {
  let r = e.getProps();
  return Hr(r, t, n === void 0 ? r.custom : n, e);
}
var Wr = new Set([`width`, `height`, `top`, `left`, `right`, `bottom`, ...jn]),
  Gr = e => Array.isArray(e);
function Kr(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Dr(n));
}
function qr(e) {
  return Gr(e) ? e[e.length - 1] || 0 : e;
}
function Jr(e, t) {
  let {
    transitionEnd: n = {},
    transition: r = {},
    ...i
  } = Ur(e, t) || {};
  i = {
    ...i,
    ...n
  };
  for (let t in i) Kr(e, t, qr(i[t]));
}
var K = e => !!(e && e.getVelocity);
function Yr(e) {
  return !!(K(e) && e.add);
}
function Xr(e, t) {
  let n = e.getValue(`willChange`);
  if (Yr(n)) return n.add(t);
  if (!n && O.WillChange) {
    let n = new O.WillChange(`auto`);
    e.addValue(`willChange`, n), n.add(t);
  }
}
function Zr(e) {
  return e.replace(/([A-Z])/g, e => `-${e.toLowerCase()}`);
}
var Qr = `data-` + Zr(`framerAppearId`);
function $r(e) {
  return e.props[Qr];
}
function ei({
  protectedKeys: e,
  needsAnimating: t
}, n) {
  let r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function ti(e, t, {
  delay: n = 0,
  transitionOverride: r,
  type: i
} = {}) {
  let {
      transition: a,
      transitionEnd: o,
      ...s
    } = t,
    c = e.getDefaultTransition();
  a = a ? Or(a, c) : c;
  let l = a?.reduceMotion,
    u = a?.skipAnimations;
  r && (a = r);
  let d = [],
    f = i && e.animationState && e.animationState.getState()[i],
    p = a?.path;
  p && p.animateVisualElement(e, s, a, n, d);
  for (let t in s) {
    let r = e.getValue(t, e.latestValues[t] ?? null),
      i = s[t];
    if (i === void 0 || f && ei(f, t)) continue;
    let o = {
      delay: n,
      ...kr(a || {}, t)
    };
    u && (o.skipAnimations = !0);
    let c = r.get();
    if (c !== void 0 && !r.isAnimating() && !Array.isArray(i) && i === c && !o.velocity) {
      F.update(() => r.set(i));
      continue;
    }
    let p = !1;
    if (window.MotionHandoffAnimation) {
      let n = $r(e);
      if (n) {
        let e = window.MotionHandoffAnimation(n, t, F);
        e !== null && (o.startTime = e, p = !0);
      }
    }
    Xr(e, t);
    let m = l ?? e.shouldReduceMotion;
    r.start(Lr(t, r, i, m && Wr.has(t) ? {
      type: !1
    } : o, e, p));
    let h = r.animation;
    h && d.push(h);
  }
  if (o) {
    let t = () => F.update(() => {
      o && Jr(e, o);
    });
    d.length ? Promise.all(d).then(t) : t();
  }
  return d;
}
function ni(e, t, n = {}) {
  let r = Ur(e, t, n.type === `exit` ? e.presenceContext?.custom : void 0),
    {
      transition: i = e.getDefaultTransition() || {}
    } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  let a = r ? () => Promise.all(ti(e, r, n)) : () => Promise.resolve(),
    o = e.variantChildren && e.variantChildren.size ? (r = 0) => {
      let {
        delayChildren: a = 0,
        staggerChildren: o,
        staggerDirection: s
      } = i;
      return ri(e, t, r, a, o, s, n);
    } : () => Promise.resolve(),
    {
      when: s
    } = i;
  if (s) {
    let [e, t] = s === `beforeChildren` ? [a, o] : [o, a];
    return e().then(() => t());
  }
  return Promise.all([a(), o(n.delay)]);
}
function ri(e, t, n = 0, r = 0, i = 0, a = 1, o) {
  let s = [];
  for (let c of e.variantChildren) c.notify(`AnimationStart`, t), s.push(ni(c, t, {
    ...o,
    delay: n + (typeof r == `function` ? 0 : r) + Sr(e.variantChildren, c, r, i, a)
  }).then(() => c.notify(`AnimationComplete`, t)));
  return Promise.all(s);
}
function ii(e, t, n = {}) {
  e.notify(`AnimationStart`, t);
  let r;
  if (Array.isArray(t)) {
    let i = t.map(t => ni(e, t, n));
    r = Promise.all(i);
  } else if (typeof t == `string`) r = ni(e, t, n);else {
    let i = typeof t == `function` ? Ur(e, t, n.custom) : t;
    r = Promise.all(ti(e, i, n));
  }
  return r.then(() => {
    e.notify(`AnimationComplete`, t);
  });
}
var ai = {
    test: e => e === `auto`,
    parse: e => e
  },
  oi = e => t => t.test(e),
  si = [He, V, B, z, it, rt, ai],
  ci = e => si.find(oi(e));
function li(e) {
  return typeof e == `number` ? e === 0 : e === null || e === `none` || e === `0` || re(e);
}
var ui = new Set([`brightness`, `contrast`, `saturate`, `opacity`]);
function di(e) {
  let [t, n] = e.slice(0, -1).split(`(`);
  if (t === `drop-shadow`) return e;
  let [r] = n.match(Ke) || [];
  if (!r) return e;
  let i = n.replace(r, ``),
    a = +!!ui.has(t);
  return r !== n && (a *= 100), t + `(` + a + i + `)`;
}
var fi = /\b([a-z-]*)\(.*?\)/gu,
  pi = {
    ...U,
    getAnimatableNone: e => {
      let t = e.match(fi);
      return t ? t.map(di).join(` `) : e;
    }
  },
  mi = {
    ...U,
    getAnimatableNone: e => {
      let t = U.parse(e);
      return U.createTransformer(e)(t.map(e => typeof e == `number` ? 0 : typeof e == `object` ? {
        ...e,
        alpha: 1
      } : e));
    }
  },
  hi = {
    ...He,
    transform: Math.round
  },
  gi = {
    borderWidth: V,
    borderTopWidth: V,
    borderRightWidth: V,
    borderBottomWidth: V,
    borderLeftWidth: V,
    borderRadius: V,
    borderTopLeftRadius: V,
    borderTopRightRadius: V,
    borderBottomRightRadius: V,
    borderBottomLeftRadius: V,
    width: V,
    maxWidth: V,
    height: V,
    maxHeight: V,
    top: V,
    right: V,
    bottom: V,
    left: V,
    inset: V,
    insetBlock: V,
    insetBlockStart: V,
    insetBlockEnd: V,
    insetInline: V,
    insetInlineStart: V,
    insetInlineEnd: V,
    padding: V,
    paddingTop: V,
    paddingRight: V,
    paddingBottom: V,
    paddingLeft: V,
    paddingBlock: V,
    paddingBlockStart: V,
    paddingBlockEnd: V,
    paddingInline: V,
    paddingInlineStart: V,
    paddingInlineEnd: V,
    margin: V,
    marginTop: V,
    marginRight: V,
    marginBottom: V,
    marginLeft: V,
    marginBlock: V,
    marginBlockStart: V,
    marginBlockEnd: V,
    marginInline: V,
    marginInlineStart: V,
    marginInlineEnd: V,
    fontSize: V,
    backgroundPositionX: V,
    backgroundPositionY: V,
    rotate: z,
    pathRotation: z,
    rotateX: z,
    rotateY: z,
    rotateZ: z,
    scale: We,
    scaleX: We,
    scaleY: We,
    scaleZ: We,
    skew: z,
    skewX: z,
    skewY: z,
    distance: V,
    translateX: V,
    translateY: V,
    translateZ: V,
    x: V,
    y: V,
    z: V,
    perspective: V,
    transformPerspective: V,
    opacity: Ue,
    originX: at,
    originY: at,
    originZ: V,
    zIndex: hi,
    fillOpacity: Ue,
    strokeOpacity: Ue,
    numOctaves: hi
  },
  _i = {
    ...gi,
    color: H,
    backgroundColor: H,
    outlineColor: H,
    fill: H,
    stroke: H,
    borderColor: H,
    borderTopColor: H,
    borderRightColor: H,
    borderBottomColor: H,
    borderLeftColor: H,
    filter: pi,
    WebkitFilter: pi,
    mask: mi,
    WebkitMask: mi
  },
  vi = e => _i[e],
  yi = new Set([pi, mi]);
function bi(e, t) {
  let n = vi(e);
  return yi.has(n) || (n = U), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
var xi = new Set([`auto`, `none`, `0`]);
function Si(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i;) {
    let t = e[r];
    typeof t == `string` && !xi.has(t) && ht(t).values.length && (i = e[r]), r++;
  }
  if (i && n) for (let r of t) e[r] = bi(n, i);
}
var Ci = class extends Gn {
    constructor(e, t, n, r, i) {
      super(e, t, n, r, i, !0);
    }
    readKeyframes() {
      let {
        unresolvedKeyframes: e,
        element: t,
        name: n
      } = this;
      if (!t || !t.current) return;
      super.readKeyframes();
      for (let n = 0; n < e.length; n++) {
        let r = e[n];
        if (typeof r == `string` && (r = r.trim(), ze(r))) {
          let i = Br(r, t.current);
          i !== void 0 && (e[n] = i), n === e.length - 1 && (this.finalKeyframe = r);
        }
      }
      if (this.resolveNoneKeyframes(), !Wr.has(n) || e.length !== 2) return;
      let [r, i] = e,
        a = ci(r),
        o = ci(i);
      if (Ve(r) !== Ve(i) && Ln[n]) {
        this.needsMeasurement = !0;
        return;
      }
      if (a !== o) {
        if (Nn(a) && Nn(o)) for (let t = 0; t < e.length; t++) {
          let n = e[t];
          typeof n == `string` && (e[t] = parseFloat(n));
        } else Ln[n] && (this.needsMeasurement = !0);
      }
    }
    resolveNoneKeyframes() {
      let {
          unresolvedKeyframes: e,
          name: t
        } = this,
        n = [];
      for (let t = 0; t < e.length; t++) (e[t] === null || li(e[t])) && n.push(t);
      n.length && Si(e, n, t);
    }
    measureInitialState() {
      let {
        element: e,
        unresolvedKeyframes: t,
        name: n
      } = this;
      if (!e || !e.current) return;
      n === `height` && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Ln[n](e.measureViewportBox(), window.getComputedStyle(e.current)), t[0] = this.measuredOrigin;
      let r = t[t.length - 1];
      r !== void 0 && e.getValue(n, r).jump(r, !1);
    }
    measureEndState() {
      let {
        element: e,
        name: t,
        unresolvedKeyframes: n
      } = this;
      if (!e || !e.current) return;
      let r = e.getValue(t);
      r && r.jump(this.measuredOrigin, !1);
      let i = n.length - 1,
        a = n[i];
      n[i] = Ln[t](e.measureViewportBox(), window.getComputedStyle(e.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), this.removedTransforms?.length && this.removedTransforms.forEach(([t, n]) => {
        e.getValue(t).set(n);
      }), this.resolveNoneKeyframes();
    }
  },
  wi = [`borderTopLeftRadius`, `borderTopRightRadius`, `borderBottomRightRadius`, `borderBottomLeftRadius`];
function Ti(e, t, n) {
  if (e == null) return [];
  if (e instanceof EventTarget) return [e];
  if (typeof e == `string`) {
    let r = document;
    t && (r = t.current);
    let i = n?.[e] ?? r.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e).filter(e => e != null);
}
var Ei = (e, t) => t && typeof e == `number` ? t.transform(e) : e;
function Di(e) {
  return k(e) && `offsetHeight` in e && !(`ownerSVGElement` in e);
}
var {
    schedule: Oi,
    cancel: ki
  } = Me(queueMicrotask, !1),
  q = {
    x: !1,
    y: !1
  };
function Ai() {
  return q.x || q.y;
}
function ji(e) {
  return e === `x` || e === `y` ? q[e] ? null : (q[e] = !0, () => {
    q[e] = !1;
  }) : q.x || q.y ? null : (q.x = q.y = !0, () => {
    q.x = q.y = !1;
  });
}
function Mi(e, t) {
  let n = Ti(e),
    r = new AbortController();
  return [n, {
    passive: !0,
    ...t,
    signal: r.signal
  }, () => r.abort()];
}
function Ni(e) {
  return !(e.pointerType === `touch` || Ai());
}
function Pi(e, t, n = {}) {
  let [r, i, a] = Mi(e, n);
  return r.forEach(e => {
    let n = !1,
      r = !1,
      a,
      o = () => {
        e.removeEventListener(`pointerleave`, u);
      },
      s = e => {
        a &&= (a(e), void 0), o();
      },
      c = e => {
        n = !1, window.removeEventListener(`pointerup`, c), window.removeEventListener(`pointercancel`, c), r && (r = !1, s(e));
      },
      l = () => {
        n = !0, window.addEventListener(`pointerup`, c, i), window.addEventListener(`pointercancel`, c, i);
      },
      u = e => {
        if (e.pointerType !== `touch`) {
          if (n) {
            r = !0;
            return;
          }
          s(e);
        }
      };
    e.addEventListener(`pointerenter`, n => {
      if (!Ni(n)) return;
      r = !1;
      let o = t(e, n);
      typeof o == `function` && (a = o, e.addEventListener(`pointerleave`, u, i));
    }, i), e.addEventListener(`pointerdown`, l, i);
  }), a;
}
var Fi = (e, t) => t ? e === t || Fi(e, t.parentElement) : !1,
  Ii = e => e.pointerType === `mouse` ? typeof e.button != `number` || e.button <= 0 : e.isPrimary !== !1,
  Li = new Set([`BUTTON`, `INPUT`, `SELECT`, `TEXTAREA`, `A`]);
function Ri(e) {
  return Li.has(e.tagName) || e.isContentEditable === !0;
}
var zi = new Set([`INPUT`, `SELECT`, `TEXTAREA`]);
function Bi(e) {
  return zi.has(e.tagName) || e.isContentEditable === !0;
}
var Vi = new WeakSet();
function Hi(e) {
  return t => {
    t.key === `Enter` && e(t);
  };
}
function Ui(e, t) {
  e.dispatchEvent(new PointerEvent(`pointer` + t, {
    isPrimary: !0,
    bubbles: !0
  }));
}
var Wi = (e, t) => {
  let n = e.currentTarget;
  if (!n) return;
  let r = Hi(() => {
    if (Vi.has(n)) return;
    Ui(n, `down`);
    let e = Hi(() => {
      Ui(n, `up`);
    });
    n.addEventListener(`keyup`, e, t), n.addEventListener(`blur`, () => Ui(n, `cancel`), t);
  });
  n.addEventListener(`keydown`, r, t), n.addEventListener(`blur`, () => n.removeEventListener(`keydown`, r), t);
};
function Gi(e) {
  return Ii(e) && !Ai();
}
var Ki = new WeakSet();
function qi(e, t, n = {}) {
  let [r, i, a] = Mi(e, n),
    o = e => {
      let r = e.currentTarget;
      if (!Gi(e) || Ki.has(e)) return;
      Vi.add(r), n.stopPropagation && Ki.add(e);
      let a = t(r, e),
        o = {
          ...i,
          capture: !0
        },
        s = (e, t) => {
          window.removeEventListener(`pointerup`, c, o), window.removeEventListener(`pointercancel`, l, o), Vi.has(r) && Vi.delete(r), Gi(e) && typeof a == `function` && a(e, {
            success: t
          });
        },
        c = e => {
          s(e, r === window || r === document || n.useGlobalTarget || Fi(r, e.target));
        },
        l = e => {
          s(e, !1);
        };
      window.addEventListener(`pointerup`, c, o), window.addEventListener(`pointercancel`, l, o);
    };
  return r.forEach(e => {
    (n.useGlobalTarget ? window : e).addEventListener(`pointerdown`, o, i), Di(e) && (e.addEventListener(`focus`, e => Wi(e, i)), !Ri(e) && !e.hasAttribute(`tabindex`) && (e.tabIndex = 0));
  }), a;
}
function Ji(e) {
  return k(e) && `ownerSVGElement` in e;
}
var Yi = new WeakMap(),
  Xi,
  Zi = (e, t, n) => (r, i) => i && i[0] ? i[0][e + `Size`] : Ji(r) && `getBBox` in r ? r.getBBox()[t] : r[n],
  Qi = Zi(`inline`, `width`, `offsetWidth`),
  $i = Zi(`block`, `height`, `offsetHeight`);
function ea({
  target: e,
  borderBoxSize: t
}) {
  Yi.get(e)?.forEach(n => {
    n(e, {
      get width() {
        return Qi(e, t);
      },
      get height() {
        return $i(e, t);
      }
    });
  });
}
function ta(e) {
  e.forEach(ea);
}
function na() {
  typeof ResizeObserver > `u` || (Xi = new ResizeObserver(ta));
}
function ra(e, t) {
  Xi || na();
  let n = Ti(e);
  return n.forEach(e => {
    let n = Yi.get(e);
    n || (n = new Set(), Yi.set(e, n)), n.add(t), Xi?.observe(e);
  }), () => {
    n.forEach(e => {
      let n = Yi.get(e);
      n?.delete(t), n?.size || Xi?.unobserve(e);
    });
  };
}
var ia = new Set(),
  aa;
function oa() {
  aa = () => {
    let e = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      }
    };
    ia.forEach(t => t(e));
  }, window.addEventListener(`resize`, aa);
}
function sa(e) {
  return ia.add(e), aa || oa(), () => {
    ia.delete(e), !ia.size && typeof aa == `function` && (window.removeEventListener(`resize`, aa), aa = void 0);
  };
}
function ca(e, t) {
  return typeof e == `function` ? sa(e) : ra(e, t);
}
var la = {
  value: null,
  addProjectionMetrics: null
};
function ua(e) {
  return Ji(e) && e.tagName === `svg`;
}
var da = [...si, H, U],
  fa = e => da.find(oi(e)),
  pa = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
  }),
  ma = () => ({
    x: pa(),
    y: pa()
  }),
  ha = () => ({
    min: 0,
    max: 0
  }),
  J = () => ({
    x: ha(),
    y: ha()
  }),
  ga = new WeakMap();
function _a(e) {
  return typeof e == `object` && !!e && typeof e.start == `function`;
}
function va(e) {
  return typeof e == `string` || Array.isArray(e);
}
var ya = [`animate`, `whileInView`, `whileFocus`, `whileHover`, `whileTap`, `whileDrag`, `exit`],
  ba = [`initial`, ...ya];
function xa(e) {
  return _a(e.animate) || ba.some(t => va(e[t]));
}
function Sa(e) {
  return !!(xa(e) || e.variants);
}
function Ca(e, t, n) {
  for (let r in t) {
    let i = t[r],
      a = n[r];
    if (K(i)) e.addValue(r, i);else if (K(a)) e.addValue(r, Dr(i, {
      owner: e
    }));else if (a !== i) {
      if (e.hasValue(r)) {
        let t = e.getValue(r);
        t.liveStyle === !0 ? t.jump(i) : t.hasAnimated || t.set(i);
      } else {
        let t = e.getStaticValue(r);
        e.addValue(r, Dr(t === void 0 ? i : t, {
          owner: e
        }));
      }
    }
  }
  for (let r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
var wa = {
    current: null
  },
  Ta = {
    current: !1
  },
  Ea = typeof window < `u`;
function Da() {
  if (Ta.current = !0, Ea) {
    if (window.matchMedia) {
      let e = window.matchMedia(`(prefers-reduced-motion)`),
        t = () => wa.current = e.matches;
      e.addEventListener(`change`, t), t();
    } else wa.current = !1;
  }
}
var Oa = [`AnimationStart`, `AnimationComplete`, `Update`, `BeforeLayoutMeasure`, `LayoutMeasure`, `LayoutAnimationStart`, `LayoutAnimationComplete`],
  ka = {};
function Aa(e) {
  ka = e;
}
function ja() {
  return ka;
}
var Ma = class {
    scrapeMotionValuesFromProps(e, t, n) {
      return {};
    }
    constructor({
      parent: e,
      props: t,
      presenceContext: n,
      reducedMotionConfig: r,
      skipAnimations: i,
      blockInitialAnimation: a,
      visualState: o
    }, s = {}) {
      this.current = null, this.children = new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = new Map(), this.KeyframeResolver = Gn, this.features = {}, this.valueSubscriptions = new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify(`Update`, this.latestValues), this.render = () => {
        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
      }, this.renderScheduledAt = 0, this.scheduleRender = () => {
        let e = R.now();
        this.renderScheduledAt < e && (this.renderScheduledAt = e, F.render(this.render, !1, !0));
      };
      let {
        latestValues: c,
        renderState: l
      } = o;
      this.latestValues = c, this.baseTarget = {
        ...c
      }, this.initialValues = t.initial ? {
        ...c
      } : {}, this.renderState = l, this.parent = e, this.props = t, this.presenceContext = n, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = r, this.skipAnimationsConfig = i, this.options = s, this.blockInitialAnimation = !!a, this.isControllingVariants = xa(t), this.isVariantNode = Sa(t), this.isVariantNode && (this.variantChildren = new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
      let {
        willChange: u,
        ...d
      } = this.scrapeMotionValuesFromProps(t, {}, this);
      for (let e in d) {
        let t = d[e];
        c[e] !== void 0 && K(t) && t.set(c[e]);
      }
    }
    mount(e) {
      if (this.hasBeenMounted) for (let e in this.initialValues) this.values.get(e)?.jump(this.initialValues[e]), this.latestValues[e] = this.initialValues[e];
      this.current = e, ga.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((e, t) => this.bindToMotionValue(t, e)), this.reducedMotionConfig === `never` ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === `always` ? this.shouldReduceMotion = !0 : (Ta.current || Da(), this.shouldReduceMotion = wa.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
    }
    unmount() {
      this.projection && this.projection.unmount(), I(this.notifyUpdate), I(this.render), this.valueSubscriptions.forEach(e => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
      for (let e in this.events) this.events[e].clear();
      for (let e in this.features) {
        let t = this.features[e];
        t && (t.unmount(), t.isMounted = !1);
      }
      this.current = null;
    }
    addChild(e) {
      this.children.add(e), this.enteringChildren ??= new Set(), this.enteringChildren.add(e);
    }
    removeChild(e) {
      this.children.delete(e), this.enteringChildren && this.enteringChildren.delete(e);
    }
    bindToMotionValue(e, t) {
      if (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(), t.accelerate && mr.has(e) && this.current instanceof HTMLElement) {
        let {
            factory: n,
            keyframes: r,
            times: i,
            ease: a,
            duration: o
          } = t.accelerate,
          s = new ir({
            element: this.current,
            name: e,
            keyframes: r,
            times: i,
            ease: a,
            duration: j(o)
          }),
          c = n(s);
        this.valueSubscriptions.set(e, () => {
          c(), s.cancel();
        });
        return;
      }
      let n = Mn.has(e);
      n && this.onBindTransform && this.onBindTransform();
      let r = t.on(`change`, t => {
          this.latestValues[e] = t, this.props.onUpdate && F.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
        }),
        i;
      typeof window < `u` && window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, e, t)), this.valueSubscriptions.set(e, () => {
        r(), i && i();
      });
    }
    sortNodePosition(e) {
      return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
    }
    updateFeatures() {
      let e = `animation`;
      for (e in ka) {
        let t = ka[e];
        if (!t) continue;
        let {
          isEnabled: n,
          Feature: r
        } = t;
        if (!this.features[e] && r && n(this.props) && (this.features[e] = new r(this)), this.features[e]) {
          let t = this.features[e];
          t.isMounted ? t.update() : (t.mount(), t.isMounted = !0);
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props);
    }
    measureViewportBox() {
      return this.current ? this.measureInstanceViewportBox(this.current, this.props) : J();
    }
    getStaticValue(e) {
      return this.latestValues[e];
    }
    setStaticValue(e, t) {
      this.latestValues[e] = t;
    }
    update(e, t) {
      (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = t;
      for (let t = 0; t < Oa.length; t++) {
        let n = Oa[t];
        this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
        let r = e[`on` + n];
        r && (this.propEventSubscriptions[n] = this.on(n, r));
      }
      this.prevMotionValues = Ca(this, this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
    }
    getProps() {
      return this.props;
    }
    getVariant(e) {
      return this.props.variants ? this.props.variants[e] : void 0;
    }
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
    }
    addVariantChild(e) {
      let t = this.getClosestVariantNode();
      if (t) return t.variantChildren && t.variantChildren.add(e), () => t.variantChildren.delete(e);
    }
    addValue(e, t) {
      let n = this.values.get(e);
      t !== n && (n && this.removeValue(e), this.bindToMotionValue(e, t), this.values.set(e, t), this.latestValues[e] = t.get());
    }
    removeValue(e) {
      this.values.delete(e);
      let t = this.valueSubscriptions.get(e);
      t && (t(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
    }
    hasValue(e) {
      return this.values.has(e);
    }
    getValue(e, t) {
      if (this.props.values && this.props.values[e]) return this.props.values[e];
      let n = this.values.get(e);
      return n === void 0 && t !== void 0 && (n = Dr(t === null ? void 0 : t, {
        owner: this
      }), this.addValue(e, n)), n;
    }
    readValue(e, t) {
      let n = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
      return n != null && (typeof n == `string` && (ne(n) || re(n)) ? n = parseFloat(n) : !fa(n) && U.test(t) && (n = bi(e, t)), this.setBaseTarget(e, K(n) ? n.get() : n)), K(n) ? n.get() : n;
    }
    setBaseTarget(e, t) {
      this.baseTarget[e] = t;
    }
    getBaseTarget(e) {
      let {
          initial: t
        } = this.props,
        n;
      if (typeof t == `string` || typeof t == `object`) {
        let r = Hr(this.props, t, this.presenceContext?.custom);
        r && (n = r[e]);
      }
      if (t && n !== void 0) return n;
      let r = this.getBaseTargetFromProps(this.props, e);
      return r !== void 0 && !K(r) ? r : this.initialValues[e] !== void 0 && n === void 0 ? void 0 : this.baseTarget[e];
    }
    on(e, t) {
      return this.events[e] || (this.events[e] = new se()), this.events[e].add(t);
    }
    notify(e, ...t) {
      this.events[e] && this.events[e].notify(...t);
    }
    scheduleRenderMicrotask() {
      Oi.render(this.render);
    }
  },
  Na = class extends Ma {
    constructor() {
      super(...arguments), this.KeyframeResolver = Ci;
    }
    sortInstanceNodePosition(e, t) {
      return e.compareDocumentPosition(t) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(e, t) {
      let n = e.style;
      return n ? n[t] : void 0;
    }
    removeValueFromRenderState(e, {
      vars: t,
      style: n
    }) {
      delete t[e], delete n[e];
    }
    handleChildMotionValue() {
      this.childSubscription && (this.childSubscription(), delete this.childSubscription);
      let {
        children: e
      } = this.props;
      K(e) && (this.childSubscription = e.on(`change`, e => {
        this.current && (this.current.textContent = `${e}`);
      }));
    }
  },
  Pa = class {
    constructor(e) {
      this.isMounted = !1, this.node = e;
    }
    update() {}
  };
function Fa({
  top: e,
  left: t,
  right: n,
  bottom: r
}) {
  return {
    x: {
      min: t,
      max: n
    },
    y: {
      min: e,
      max: r
    }
  };
}
function Ia({
  x: e,
  y: t
}) {
  return {
    top: t.min,
    right: e.max,
    bottom: t.max,
    left: e.min
  };
}
function La(e, t) {
  if (!t) return e;
  let n = t({
      x: e.left,
      y: e.top
    }),
    r = t({
      x: e.right,
      y: e.bottom
    });
  return {
    top: n.y,
    left: n.x,
    bottom: r.y,
    right: r.x
  };
}
function Ra(e) {
  return e === void 0 || e === 1;
}
function za({
  scale: e,
  scaleX: t,
  scaleY: n
}) {
  return !Ra(e) || !Ra(t) || !Ra(n);
}
function Ba(e) {
  return za(e) || Va(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Va(e) {
  return Ha(e.x) || Ha(e.y);
}
function Ha(e) {
  return e && e !== `0%`;
}
function Ua(e, t, n) {
  return n + t * (e - n);
}
function Wa(e, t, n, r, i) {
  return i !== void 0 && (e = Ua(e, i, r)), Ua(e, n, r) + t;
}
function Ga(e, t = 0, n = 1, r, i) {
  e.min = Wa(e.min, t, n, r, i), e.max = Wa(e.max, t, n, r, i);
}
function Ka(e, {
  x: t,
  y: n
}) {
  Ga(e.x, t.translate, t.scale, t.originPoint), Ga(e.y, n.translate, n.scale, n.originPoint);
}
var qa = .999999999999,
  Ja = 1.0000000000001;
function Ya(e, t, n, r = !1) {
  let i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let a, o;
  for (let s = 0; s < i; s++) {
    a = n[s], o = a.projectionDelta;
    let {
      visualElement: i
    } = a.options;
    i && i.props.style && i.props.style.display === `contents` || (r && a.options.layoutScroll && a.scroll && a !== a.root && (Y(e.x, -a.scroll.offset.x), Y(e.y, -a.scroll.offset.y)), o && (t.x *= o.x.scale, t.y *= o.y.scale, Ka(e, o)), r && Ba(a.latestValues) && Qa(e, a.latestValues, a.layout?.layoutBox));
  }
  t.x < Ja && t.x > qa && (t.x = 1), t.y < Ja && t.y > qa && (t.y = 1);
}
function Y(e, t) {
  e.min += t, e.max += t;
}
function Xa(e, t, n, r, i = .5) {
  Ga(e, t, n, W(e.min, e.max, i), r);
}
function Za(e, t) {
  return typeof e == `string` ? parseFloat(e) / 100 * (t.max - t.min) : e;
}
function Qa(e, t, n) {
  let r = n ?? e;
  Xa(e.x, Za(t.x, r.x), t.scaleX, t.scale, t.originX), Xa(e.y, Za(t.y, r.y), t.scaleY, t.scale, t.originY);
}
function $a(e, t) {
  return Fa(La(e.getBoundingClientRect(), t));
}
function eo(e, t, n) {
  let r = $a(e, n),
    {
      scroll: i
    } = t;
  return i && (Y(r.x, i.offset.x), Y(r.y, i.offset.y)), r;
}
var to = {
    x: `translateX`,
    y: `translateY`,
    z: `translateZ`,
    transformPerspective: `perspective`
  },
  no = jn.length;
function ro(e, t, n) {
  let r = ``,
    i = !0;
  for (let a = 0; a < no; a++) {
    let o = jn[a],
      s = e[o];
    if (s === void 0) continue;
    let c = !0;
    if (typeof s == `number`) c = s === +!!o.startsWith(`scale`);else {
      let e = parseFloat(s);
      c = o.startsWith(`scale`) ? e === 1 : e === 0;
    }
    if (!c || n) {
      let e = Ei(s, gi[o]);
      if (!c) {
        i = !1;
        let t = to[o] || o;
        r += `${t}(${e}) `;
      }
      n && (t[o] = e);
    }
  }
  let a = e.pathRotation;
  return a && (i = !1, r += `rotate(${Ei(a, gi.pathRotation)}) `), r = r.trim(), n ? r = n(t, i ? `` : r) : i && (r = `none`), r;
}
function io(e, t, n) {
  let {
      style: r,
      vars: i,
      transformOrigin: a
    } = e,
    o = !1,
    s = !1;
  for (let e in t) {
    let n = t[e];
    if (Mn.has(e)) {
      o = !0;
      continue;
    }
    if (Le(e)) {
      i[e] = n;
      continue;
    }
    {
      let t = Ei(n, gi[e]);
      e.startsWith(`origin`) ? (s = !0, a[e] = t) : r[e] = t;
    }
  }
  if (t.transform || (o || n ? r.transform = ro(t, e.transform, n) : r.transform &&= `none`), s) {
    let {
      originX: e = `50%`,
      originY: t = `50%`,
      originZ: n = 0
    } = a;
    r.transformOrigin = `${e} ${t} ${n}`;
  }
}
function ao(e, {
  style: t,
  vars: n
}, r, i) {
  let a = e.style,
    o;
  for (o in t) a[o] = t[o];
  for (o in i?.applyProjectionStyles(a, r), n) a.setProperty(o, n[o]);
}
function oo(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
var so = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == `string`) {
        if (V.test(e)) e = parseFloat(e);else return e;
      }
      return `${oo(e, t.target.x)}% ${oo(e, t.target.y)}%`;
    }
  },
  co = {
    correct: (e, {
      treeScale: t,
      projectionDelta: n
    }) => {
      let r = e,
        i = U.parse(e);
      if (i.length > 5) return r;
      let a = U.createTransformer(e),
        o = typeof i[0] == `number` ? 0 : 1,
        s = n.x.scale * t.x,
        c = n.y.scale * t.y;
      i[0 + o] /= s, i[1 + o] /= c;
      let l = W(s, c, .5);
      return typeof i[2 + o] == `number` && (i[2 + o] /= l), typeof i[3 + o] == `number` && (i[3 + o] /= l), a(i);
    }
  },
  lo = {
    borderRadius: {
      ...so,
      applyTo: [...wi]
    },
    borderTopLeftRadius: so,
    borderTopRightRadius: so,
    borderBottomLeftRadius: so,
    borderBottomRightRadius: so,
    boxShadow: co
  };
function uo(e, {
  layout: t,
  layoutId: n
}) {
  return Mn.has(e) || e.startsWith(`origin`) || (t || n !== void 0) && (!!lo[e] || e === `opacity`);
}
function fo(e, t, n) {
  let r = e.style,
    i = t?.style,
    a = {};
  if (!r) return a;
  for (let t in r) (K(r[t]) || i && K(i[t]) || uo(t, e) || n?.getValue(t)?.liveStyle !== void 0) && (a[t] = r[t]);
  return a;
}
function po(e) {
  return window.getComputedStyle(e);
}
var mo = class extends Na {
    constructor() {
      super(...arguments), this.type = `html`, this.renderInstance = ao;
    }
    mount(e) {
      e.style, super.mount(e);
    }
    readValueFromInstance(e, t) {
      if (Mn.has(t)) return this.projection?.isProjecting ? Dn(t) : kn(e, t);
      {
        let n = po(e),
          r = (Le(t) ? n.getPropertyValue(t) : n[t]) || 0;
        return typeof r == `string` ? r.trim() : r;
      }
    }
    measureInstanceViewportBox(e, {
      transformPagePoint: t
    }) {
      return $a(e, t);
    }
    build(e, t, n) {
      io(e, t, n.transformTemplate);
    }
    scrapeMotionValuesFromProps(e, t, n) {
      return fo(e, t, n);
    }
  },
  ho = {
    offset: `stroke-dashoffset`,
    array: `stroke-dasharray`
  },
  go = {
    offset: `strokeDashoffset`,
    array: `strokeDasharray`
  };
function _o(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  let a = i ? ho : go;
  e[a.offset] = `${-r}`, e[a.array] = `${t} ${n}`;
}
var vo = [`offsetDistance`, `offsetPath`, `offsetRotate`, `offsetAnchor`];
function yo(e, {
  attrX: t,
  attrY: n,
  attrScale: r,
  pathLength: i,
  pathSpacing: a = 1,
  pathOffset: o = 0,
  ...s
}, c, l, u) {
  if (io(e, s, l), c) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  let {
    attrs: d,
    style: f
  } = e;
  d.transform && (f.transform = d.transform, delete d.transform), (f.transform || d.transformOrigin) && (f.transformOrigin = d.transformOrigin ?? `50% 50%`, delete d.transformOrigin), f.transform && (f.transformBox = u?.transformBox ?? `fill-box`, delete d.transformBox);
  for (let e of vo) d[e] !== void 0 && (f[e] = d[e], delete d[e]);
  t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), r !== void 0 && (d.scale = r), i !== void 0 && _o(d, i, a, o, !1);
}
var bo = new Set([`baseFrequency`, `diffuseConstant`, `kernelMatrix`, `kernelUnitLength`, `keySplines`, `keyTimes`, `limitingConeAngle`, `markerHeight`, `markerWidth`, `numOctaves`, `targetX`, `targetY`, `surfaceScale`, `specularConstant`, `specularExponent`, `stdDeviation`, `tableValues`, `viewBox`, `gradientTransform`, `pathLength`, `startOffset`, `textLength`, `lengthAdjust`]),
  xo = e => typeof e == `string` && e.toLowerCase() === `svg`;
function So(e, t, n, r) {
  ao(e, t, void 0, r);
  for (let n in t.attrs) e.setAttribute(bo.has(n) ? n : Zr(n), t.attrs[n]);
}
function Co(e, t, n) {
  let r = fo(e, t, n);
  for (let n in e) if (K(e[n]) || K(t[n])) {
    let t = jn.indexOf(n) === -1 ? n : `attr` + n.charAt(0).toUpperCase() + n.substring(1);
    r[t] = e[n];
  }
  return r;
}
var wo = class extends Na {
    constructor() {
      super(...arguments), this.type = `svg`, this.isSVGTag = !1, this.measureInstanceViewportBox = J;
    }
    getBaseTargetFromProps(e, t) {
      return e[t];
    }
    readValueFromInstance(e, t) {
      if (Mn.has(t)) {
        let e = vi(t);
        return e && e.default || 0;
      }
      return t = bo.has(t) ? t : Zr(t), e.getAttribute(t);
    }
    scrapeMotionValuesFromProps(e, t, n) {
      return Co(e, t, n);
    }
    build(e, t, n) {
      yo(e, t, this.isSVGTag, n.transformTemplate, n.style);
    }
    renderInstance(e, t, n, r) {
      So(e, t, n, r);
    }
    mount(e) {
      this.isSVGTag = xo(e.tagName), super.mount(e);
    }
  },
  To = ba.length;
function Eo(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    let t = e.parent && Eo(e.parent) || {};
    return e.props.initial !== void 0 && (t.initial = e.props.initial), t;
  }
  let t = {};
  for (let n = 0; n < To; n++) {
    let r = ba[n],
      i = e.props[r];
    (va(i) || i === !1) && (t[r] = i);
  }
  return t;
}
function Do(e, t) {
  if (!Array.isArray(t)) return !1;
  let n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
var Oo = [...ya].reverse(),
  ko = ya.length;
function Ao(e) {
  return t => Promise.all(t.map(({
    animation: t,
    options: n
  }) => ii(e, t, n)));
}
function jo(e) {
  let t = Ao(e),
    n = Po(),
    r = !0,
    i = !1,
    a = t => (n, r) => {
      let i = Ur(e, r, t === `exit` ? e.presenceContext?.custom : void 0);
      if (i) {
        let {
          transition: e,
          transitionEnd: t,
          ...r
        } = i;
        n = {
          ...n,
          ...r,
          ...t
        };
      }
      return n;
    };
  function o(n) {
    t = n(e);
  }
  function s(o) {
    let {
        props: s
      } = e,
      c = Eo(e.parent) || {},
      l = [],
      u = new Set(),
      d = {},
      f = 1 / 0;
    for (let t = 0; t < ko; t++) {
      let p = Oo[t],
        m = n[p],
        h = s[p] === void 0 ? c[p] : s[p],
        g = va(h),
        _ = p === o ? m.isActive : null;
      _ === !1 && (f = t);
      let v = h === c[p] && h !== s[p] && g;
      if (v && (r || i) && e.manuallyAnimateOnMount && (v = !1), m.protectedKeys = {
        ...d
      }, !m.isActive && _ === null || !h && !m.prevProp || _a(h) || typeof h == `boolean`) continue;
      if (p === `exit` && m.isActive && _ !== !0) {
        m.prevResolvedValues && (d = {
          ...d,
          ...m.prevResolvedValues
        });
        continue;
      }
      let y = Mo(m.prevProp, h),
        b = y || p === o && m.isActive && !v && g || t > f && g,
        x = !1,
        S = Array.isArray(h) ? h : [h],
        C = S.reduce(a(p), {});
      _ === !1 && (C = {});
      let {
          prevResolvedValues: w = {}
        } = m,
        T = {
          ...w,
          ...C
        },
        E = t => {
          b = !0, u.has(t) && (x = !0, u.delete(t)), m.needsAnimating[t] = !0;
          let n = e.getValue(t);
          n && (n.liveStyle = !1);
        };
      for (let e in T) {
        let t = C[e],
          n = w[e];
        if (d.hasOwnProperty(e)) continue;
        let r = !1;
        r = Gr(t) && Gr(n) ? !Do(t, n) || y : t !== n, r ? t == null ? u.add(e) : E(e) : t !== void 0 && u.has(e) ? E(e) : m.protectedKeys[e] = !0;
      }
      m.prevProp = h, m.prevResolvedValues = C, m.isActive && (d = {
        ...d,
        ...C
      }), (r || i) && e.blockInitialAnimation && (b = !1);
      let ee = v && y;
      b && (!ee || x) && l.push(...S.map(t => {
        let n = {
          type: p
        };
        if (typeof t == `string` && (r || i) && !ee && e.manuallyAnimateOnMount && e.parent) {
          let {
              parent: r
            } = e,
            i = Ur(r, t);
          if (r.enteringChildren && i) {
            let {
              delayChildren: t
            } = i.transition || {};
            n.delay = Sr(r.enteringChildren, e, t);
          }
        }
        return {
          animation: t,
          options: n
        };
      }));
    }
    if (u.size) {
      let t = {};
      if (typeof s.initial != `boolean`) {
        let n = Ur(e, Array.isArray(s.initial) ? s.initial[0] : s.initial);
        n && n.transition && (t.transition = n.transition);
      }
      u.forEach(n => {
        let r = e.getBaseTarget(n),
          i = e.getValue(n);
        i && (i.liveStyle = !0), t[n] = r ?? null;
      }), l.push({
        animation: t
      });
    }
    let p = !!l.length;
    return r && (s.initial === !1 || s.initial === s.animate) && !e.manuallyAnimateOnMount && (p = !1), r = !1, i = !1, p ? t(l) : Promise.resolve();
  }
  function c(t, r) {
    if (n[t].isActive === r) return Promise.resolve();
    e.variantChildren?.forEach(e => e.animationState?.setActive(t, r)), n[t].isActive = r;
    let i = s(t);
    for (let e in n) n[e].protectedKeys = {};
    return i;
  }
  return {
    animateChanges: s,
    setActive: c,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      n = Po(), i = !0;
    }
  };
}
function Mo(e, t) {
  return typeof t == `string` ? t !== e : Array.isArray(t) ? !Do(t, e) : !1;
}
function No(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Po() {
  return {
    animate: No(!0),
    whileInView: No(),
    whileHover: No(),
    whileTap: No(),
    whileDrag: No(),
    whileFocus: No(),
    exit: No()
  };
}
function Fo(e, t) {
  e.min = t.min, e.max = t.max;
}
function X(e, t) {
  Fo(e.x, t.x), Fo(e.y, t.y);
}
function Io(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
var Lo = .9999,
  Ro = 1.0001,
  zo = -.01,
  Bo = .01;
function Z(e) {
  return e.max - e.min;
}
function Vo(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Ho(e, t, n, r = .5) {
  e.origin = r, e.originPoint = W(t.min, t.max, e.origin), e.scale = Z(n) / Z(t), e.translate = W(n.min, n.max, e.origin) - e.originPoint, (e.scale >= Lo && e.scale <= Ro || isNaN(e.scale)) && (e.scale = 1), (e.translate >= zo && e.translate <= Bo || isNaN(e.translate)) && (e.translate = 0);
}
function Uo(e, t, n, r) {
  Ho(e.x, t.x, n.x, r ? r.originX : void 0), Ho(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Wo(e, t, n, r = 0) {
  e.min = (r ? W(n.min, n.max, r) : n.min) + t.min, e.max = e.min + Z(t);
}
function Go(e, t, n, r) {
  Wo(e.x, t.x, n.x, r?.x), Wo(e.y, t.y, n.y, r?.y);
}
function Ko(e, t, n, r = 0) {
  let i = r ? W(n.min, n.max, r) : n.min;
  e.min = t.min - i, e.max = e.min + Z(t);
}
function qo(e, t, n, r) {
  Ko(e.x, t.x, n.x, r?.x), Ko(e.y, t.y, n.y, r?.y);
}
function Jo(e, t, n, r, i) {
  return e -= t, e = Ua(e, 1 / n, r), i !== void 0 && (e = Ua(e, 1 / i, r)), e;
}
function Yo(e, t = 0, n = 1, r = .5, i, a = e, o = e) {
  if (B.test(t) && (t = parseFloat(t), t = W(o.min, o.max, t / 100) - o.min), typeof t != `number`) return;
  let s = W(a.min, a.max, r);
  e === a && (s -= t), e.min = Jo(e.min, t, n, s, i), e.max = Jo(e.max, t, n, s, i);
}
function Xo(e, t, [n, r, i], a, o) {
  Yo(e, t[n], t[r], t[i], t.scale, a, o);
}
var Zo = [`x`, `scaleX`, `originX`],
  Qo = [`y`, `scaleY`, `originY`];
function $o(e, t, n, r) {
  Xo(e.x, t, Zo, n ? n.x : void 0, r ? r.x : void 0), Xo(e.y, t, Qo, n ? n.y : void 0, r ? r.y : void 0);
}
function es(e) {
  return e.translate === 0 && e.scale === 1;
}
function ts(e) {
  return es(e.x) && es(e.y);
}
function ns(e, t) {
  return e.min === t.min && e.max === t.max;
}
function rs(e, t) {
  return ns(e.x, t.x) && ns(e.y, t.y);
}
function is(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function as(e, t) {
  return is(e.x, t.x) && is(e.y, t.y);
}
function os(e) {
  return Z(e.x) / Z(e.y);
}
function ss(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
function Q(e) {
  return [e(`x`), e(`y`)];
}
function cs(e, t, n) {
  let r = ``,
    i = e.x.translate / t.x,
    a = e.y.translate / t.y,
    o = n?.z || 0;
  if ((i || a || o) && (r = `translate3d(${i}px, ${a}px, ${o}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    let {
      transformPerspective: e,
      rotate: t,
      pathRotation: i,
      rotateX: a,
      rotateY: o,
      skewX: s,
      skewY: c
    } = n;
    e && (r = `perspective(${e}px) ${r}`), t && (r += `rotate(${t}deg) `), i && (r += `rotate(${i}deg) `), a && (r += `rotateX(${a}deg) `), o && (r += `rotateY(${o}deg) `), s && (r += `skewX(${s}deg) `), c && (r += `skewY(${c}deg) `);
  }
  let s = e.x.scale * t.x,
    c = e.y.scale * t.y;
  return (s !== 1 || c !== 1) && (r += `scale(${s}, ${c})`), r || `none`;
}
var ls = wi.length,
  us = e => typeof e == `string` ? parseFloat(e) : e,
  ds = e => typeof e == `number` || V.test(e);
function fs(e, t, n, r, i, a) {
  i ? (e.opacity = W(0, n.opacity ?? 1, ms(r)), e.opacityExit = W(t.opacity ?? 1, 0, hs(r))) : a && (e.opacity = W(t.opacity ?? 1, n.opacity ?? 1, r));
  for (let i = 0; i < ls; i++) {
    let a = wi[i],
      o = ps(t, a),
      s = ps(n, a);
    (o !== void 0 || s !== void 0) && (o ||= 0, s ||= 0, o === 0 || s === 0 || ds(o) === ds(s) ? (e[a] = Math.max(W(us(o), us(s), r), 0), (B.test(s) || B.test(o)) && (e[a] += `%`)) : e[a] = s);
  }
  (t.rotate || n.rotate) && (e.rotate = W(t.rotate || 0, n.rotate || 0, r));
}
function ps(e, t) {
  return e[t] === void 0 ? e.borderRadius : e[t];
}
var ms = gs(0, .5, be),
  hs = gs(.5, .95, A);
function gs(e, t, n) {
  return r => r < e ? 0 : r > t ? 1 : n(oe(e, t, r));
}
function _s(e, t, n) {
  let r = K(e) ? e : Dr(e);
  return r.start(Lr(``, r, t, n)), r.animation;
}
function vs(e, t, n, r = {
  passive: !0
}) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r);
}
var ys = (e, t) => e.depth - t.depth,
  bs = class {
    constructor() {
      this.children = [], this.isDirty = !1;
    }
    add(e) {
      ee(this.children, e), this.isDirty = !0;
    }
    remove(e) {
      te(this.children, e), this.isDirty = !0;
    }
    forEach(e) {
      this.isDirty && this.children.sort(ys), this.isDirty = !1, this.children.forEach(e);
    }
  };
function xs(e, t) {
  let n = R.now(),
    r = ({
      timestamp: i
    }) => {
      let a = i - n;
      a >= t && (I(r), e(a - t));
    };
  return F.setup(r, !0), () => I(r);
}
function Ss(e) {
  return K(e) ? e.get() : e;
}
var Cs = class {
    constructor() {
      this.members = [];
    }
    add(e) {
      ee(this.members, e);
      for (let t = this.members.length - 1; t >= 0; t--) {
        let n = this.members[t];
        if (n === e || n === this.lead || n === this.prevLead) continue;
        let r = n.instance;
        (!r || r.isConnected === !1) && !n.snapshot && (te(this.members, n), n.unmount());
      }
      e.scheduleRender();
    }
    remove(e) {
      if (te(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
        let e = this.members[this.members.length - 1];
        e && this.promote(e);
      }
    }
    relegate(e) {
      for (let t = this.members.indexOf(e) - 1; t >= 0; t--) {
        let e = this.members[t];
        if (e.isPresent !== !1 && e.instance?.isConnected !== !1) return this.promote(e), !0;
      }
      return !1;
    }
    promote(e, t) {
      let n = this.lead;
      if (e !== n && (this.prevLead = n, this.lead = e, e.show(), n)) {
        n.updateSnapshot(), e.scheduleRender();
        let {
            layoutDependency: r
          } = n.options,
          {
            layoutDependency: i
          } = e.options;
        (r === void 0 || r !== i) && (e.resumeFrom = n, t && (n.preserveOpacity = !0), n.snapshot && (e.snapshot = n.snapshot, e.snapshot.latestValues = n.animationValues || n.latestValues), e.root?.isUpdating && (e.isLayoutDirty = !0)), e.options.crossfade === !1 && n.hide();
      }
    }
    exitAnimationComplete() {
      this.members.forEach(e => {
        e.options.onExitComplete?.(), e.resumingFrom?.options.onExitComplete?.();
      });
    }
    scheduleRender() {
      this.members.forEach(e => e.instance && e.scheduleRender(!1));
    }
    removeLeadSnapshot() {
      this.lead?.snapshot && (this.lead.snapshot = void 0);
    }
  },
  ws = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
  },
  Ts = {
    nodes: 0,
    calculatedTargetDeltas: 0,
    calculatedProjections: 0
  },
  Es = [``, `X`, `Y`, `Z`],
  Ds = 1e3,
  Os = 0;
function ks(e, t, n, r) {
  let {
    latestValues: i
  } = t;
  i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function As(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
  let {
    visualElement: t
  } = e.options;
  if (!t) return;
  let n = $r(t);
  if (window.MotionHasOptimisedAnimation(n, `transform`)) {
    let {
      layout: t,
      layoutId: r
    } = e.options;
    window.MotionCancelOptimisedAnimation(n, `transform`, F, !(t || r));
  }
  let {
    parent: r
  } = e;
  r && !r.hasCheckedOptimisedAppear && As(r);
}
function js({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i
}) {
  return class {
    constructor(e = {}, n = t?.()) {
      this.id = Os++, this.animationId = 0, this.animationCommitId = 0, this.children = new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
        x: 1,
        y: 1
      }, this.eventHandlers = new Map(), this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, la.value && (Ts.nodes = Ts.calculatedTargetDeltas = Ts.calculatedProjections = 0), this.nodes.forEach(Ps), this.nodes.forEach(Us), this.nodes.forEach(Ws), this.nodes.forEach(Fs), la.addProjectionMetrics && la.addProjectionMetrics(Ts);
      }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map(), this.latestValues = e, this.root = n ? n.root || n : this, this.path = n ? [...n.path, n] : [], this.parent = n, this.depth = n ? n.depth + 1 : 0;
      for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
      this.root === this && (this.nodes = new bs());
    }
    addEventListener(e, t) {
      return this.eventHandlers.has(e) || this.eventHandlers.set(e, new se()), this.eventHandlers.get(e).add(t);
    }
    notifyListeners(e, ...t) {
      let n = this.eventHandlers.get(e);
      n && n.notify(...t);
    }
    hasListeners(e) {
      return this.eventHandlers.has(e);
    }
    mount(t) {
      if (this.instance) return;
      this.isSVG = Ji(t) && !ua(t), this.instance = t;
      let {
        layoutId: n,
        layout: r,
        visualElement: i
      } = this.options;
      if (i && !i.current && i.mount(t), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (r || n) && (this.isLayoutDirty = !0), e) {
        let n,
          r = 0,
          i = () => this.root.updateBlockedByResize = !1;
        F.read(() => {
          r = window.innerWidth;
        }), e(t, () => {
          let e = window.innerWidth;
          e !== r && (r = e, this.root.updateBlockedByResize = !0, n && n(), n = xs(i, 250), ws.hasAnimatedSinceResize && (ws.hasAnimatedSinceResize = !1, this.nodes.forEach(Hs)));
        });
      }
      n && this.root.registerSharedNode(n, this), this.options.animate !== !1 && i && (n || r) && this.addEventListener(`didUpdate`, ({
        delta: e,
        hasLayoutChanged: t,
        hasRelativeLayoutChanged: n,
        layout: r
      }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        let a = this.options.transition || i.getDefaultTransition() || Zs,
          {
            onLayoutAnimationStart: o,
            onLayoutAnimationComplete: s
          } = i.getProps(),
          c = !this.targetLayout || !as(this.targetLayout, r),
          l = !t && n;
        if (this.options.layoutRoot || this.resumeFrom || l || t && (c || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          let t = {
            ...kr(a, `layout`),
            onPlay: o,
            onComplete: s
          };
          (i.shouldReduceMotion || this.options.layoutRoot) && (t.delay = 0, t.type = !1), this.startAnimation(t), this.setAnimationOrigin(e, l, t.path);
        } else t || Hs(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = r;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      let e = this.getStack();
      e && e.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), I(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Gs), this.animationId++);
    }
    getTransformTemplate() {
      let {
        visualElement: e
      } = this.options;
      return e && e.getProps().transformTemplate;
    }
    willUpdate(e = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && As(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
      this.isLayoutDirty = !0;
      for (let e = 0; e < this.path.length; e++) {
        let t = this.path[e];
        t.shouldResetTransform = !0, (typeof t.latestValues.x == `string` || typeof t.latestValues.y == `string`) && (t.isLayoutDirty = !0), t.updateScroll(`snapshot`), t.options.layoutRoot && t.willUpdate(!1);
      }
      let {
        layoutId: t,
        layout: n
      } = this.options;
      if (t === void 0 && !n) return;
      let r = this.getTransformTemplate();
      this.prevTransformTemplateValue = r ? r(this.latestValues, ``) : void 0, this.updateSnapshot(), e && this.notifyListeners(`willUpdate`);
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        let e = this.updateBlockedByResize;
        this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), e && this.nodes.forEach(Rs), this.nodes.forEach(Ls);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(zs);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(Bs), this.nodes.forEach(Vs), this.nodes.forEach(Ms), this.nodes.forEach(Ns)) : this.nodes.forEach(zs), this.clearAllSnapshots();
      let e = R.now();
      L.delta = D(0, 1e3 / 60, e - L.timestamp), L.timestamp = e, L.isProcessing = !0, Ne.update.process(L), Ne.preRender.process(L), Ne.render.process(L), L.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Oi.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Is), this.sharedNodes.forEach(Ks);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, F.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      F.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !Z(this.snapshot.measuredBox.x) && !Z(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
      if (this.resumeFrom && !this.resumeFrom.instance) for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
      let e = this.layout;
      this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected ||= J(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners(`measure`, this.layout.layoutBox);
      let {
        visualElement: t
      } = this.options;
      t && t.notify(`LayoutMeasure`, this.layout.layoutBox, e ? e.layoutBox : void 0);
    }
    updateScroll(e = `measure`) {
      let t = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (t = !1), t && this.instance) {
        let t = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: e,
          isRoot: t,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : t
        };
      }
    }
    resetTransform() {
      if (!i) return;
      let e = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
        t = this.projectionDelta && !ts(this.projectionDelta),
        n = this.getTransformTemplate(),
        r = n ? n(this.latestValues, ``) : void 0,
        a = r !== this.prevTransformTemplateValue;
      e && this.instance && (t || Ba(this.latestValues) || a) && (i(this.instance, r), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(e = !0) {
      let t = this.measurePageBox(),
        n = this.removeElementScroll(t);
      return e && (n = this.removeTransform(n)), tc(n), {
        animationId: this.root.animationId,
        measuredBox: t,
        layoutBox: n,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      let {
        visualElement: e
      } = this.options;
      if (!e) return J();
      let t = e.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(rc))) {
        let {
          scroll: e
        } = this.root;
        e && (Y(t.x, e.offset.x), Y(t.y, e.offset.y));
      }
      return t;
    }
    removeElementScroll(e) {
      let t = J();
      if (X(t, e), this.scroll?.wasRoot) return t;
      for (let n = 0; n < this.path.length; n++) {
        let r = this.path[n],
          {
            scroll: i,
            options: a
          } = r;
        r !== this.root && i && a.layoutScroll && (i.wasRoot && X(t, e), Y(t.x, i.offset.x), Y(t.y, i.offset.y));
      }
      return t;
    }
    applyTransform(e, t = !1, n) {
      let r = n || J();
      X(r, e);
      for (let e = 0; e < this.path.length; e++) {
        let n = this.path[e];
        !t && n.options.layoutScroll && n.scroll && n !== n.root && (Y(r.x, -n.scroll.offset.x), Y(r.y, -n.scroll.offset.y)), Ba(n.latestValues) && Qa(r, n.latestValues, n.layout?.layoutBox);
      }
      return Ba(this.latestValues) && Qa(r, this.latestValues, this.layout?.layoutBox), r;
    }
    removeTransform(e) {
      let t = J();
      X(t, e);
      for (let e = 0; e < this.path.length; e++) {
        let n = this.path[e];
        if (!Ba(n.latestValues)) continue;
        let r;
        n.instance && (za(n.latestValues) && n.updateSnapshot(), r = J(), X(r, n.measurePageBox())), $o(t, n.latestValues, n.snapshot?.layoutBox, r);
      }
      return Ba(this.latestValues) && $o(t, this.latestValues), t;
    }
    setTargetDelta(e) {
      this.targetDelta = e, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(e) {
      this.options = {
        ...this.options,
        ...e,
        crossfade: e.crossfade === void 0 || e.crossfade
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== L.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(e = !1) {
      let t = this.getLead();
      this.isProjectionDirty ||= t.isProjectionDirty, this.isTransformDirty ||= t.isTransformDirty, this.isSharedProjectionDirty ||= t.isSharedProjectionDirty;
      let n = !!this.resumingFrom || this !== t;
      if (!(e || n && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
      let {
        layout: r,
        layoutId: i
      } = this.options;
      if (!this.layout || !(r || i)) return;
      this.resolvedRelativeTargetAt = L.timestamp;
      let a = this.getClosestProjectingParent();
      a && this.linkedParentVersion !== a.layoutVersion && !a.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && a && a.layout ? this.createRelativeTarget(a, this.layout.layoutBox, a.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = J(), this.targetWithTransforms = J()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Go(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : X(this.target, this.layout.layoutBox), Ka(this.target, this.targetDelta)) : X(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && a && !!a.resumingFrom == !!this.resumingFrom && !a.options.layoutScroll && a.target && this.animationProgress !== 1 ? this.createRelativeTarget(a, this.target, a.target) : this.relativeParent = this.relativeTarget = void 0), la.value && Ts.calculatedTargetDeltas++);
    }
    getClosestProjectingParent() {
      if (!(!this.parent || za(this.parent.latestValues) || Va(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(e, t, n) {
      this.relativeParent = e, this.linkedParentVersion = e.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = J(), this.relativeTargetOrigin = J(), qo(this.relativeTargetOrigin, t, n, this.options.layoutAnchor || void 0), X(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      let e = this.getLead(),
        t = !!this.resumingFrom || this !== e,
        n = !0;
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (n = !1), t && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === L.timestamp && (n = !1), n) return;
      let {
        layout: r,
        layoutId: i
      } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(r || i)) return;
      X(this.layoutCorrected, this.layout.layoutBox);
      let a = this.treeScale.x,
        o = this.treeScale.y;
      Ya(this.layoutCorrected, this.treeScale, this.path, t), e.layout && !e.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (e.target = e.layout.layoutBox, e.targetWithTransforms = J());
      let {
        target: s
      } = e;
      if (!s) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Io(this.prevProjectionDelta.x, this.projectionDelta.x), Io(this.prevProjectionDelta.y, this.projectionDelta.y)), Uo(this.projectionDelta, this.layoutCorrected, s, this.latestValues), (this.treeScale.x !== a || this.treeScale.y !== o || !ss(this.projectionDelta.x, this.prevProjectionDelta.x) || !ss(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners(`projectionUpdate`, s)), la.value && Ts.calculatedProjections++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(e = !0) {
      if (this.options.visualElement?.scheduleRender(), e) {
        let e = this.getStack();
        e && e.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = ma(), this.projectionDelta = ma(), this.projectionDeltaWithTransform = ma();
    }
    setAnimationOrigin(e, t = !1, n) {
      let r = this.snapshot,
        i = r ? r.latestValues : {},
        a = {
          ...this.latestValues
        },
        o = ma();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !t;
      let s = J(),
        c = (r ? r.source : void 0) !== (this.layout ? this.layout.source : void 0),
        l = this.getStack(),
        u = !l || l.members.length <= 1,
        d = !!(c && !u && this.options.crossfade === !0 && !this.path.some(Xs));
      this.animationProgress = 0;
      let f,
        p = n?.interpolateProjection(e);
      this.mixTargetDelta = t => {
        let n = t / 1e3,
          r = p?.(n);
        r ? (o.x.translate = r.x, o.x.scale = W(e.x.scale, 1, n), o.x.origin = e.x.origin, o.x.originPoint = e.x.originPoint, o.y.translate = r.y, o.y.scale = W(e.y.scale, 1, n), o.y.origin = e.y.origin, o.y.originPoint = e.y.originPoint) : (qs(o.x, e.x, n), qs(o.y, e.y, n)), this.setTargetDelta(o), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (qo(s, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), Ys(this.relativeTarget, this.relativeTargetOrigin, s, n), f && rs(this.relativeTarget, f) && (this.isProjectionDirty = !1), f ||= J(), X(f, this.relativeTarget)), c && (this.animationValues = a, fs(a, i, this.latestValues, n, d, u)), r && r.rotate !== void 0 && (this.animationValues ||= a, this.animationValues.pathRotation = r.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(e) {
      this.notifyListeners(`animationStart`), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation &&= (I(this.pendingAnimation), void 0), this.pendingAnimation = F.update(() => {
        ws.hasAnimatedSinceResize = !0, this.motionValue ||= Dr(0), this.motionValue.jump(0, !1), this.currentAnimation = _s(this.motionValue, [0, 1e3], {
          ...e,
          velocity: 0,
          isSync: !0,
          onUpdate: t => {
            this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t);
          },
          onComplete: () => {
            e.onComplete && e.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      let e = this.getStack();
      e && e.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners(`animationComplete`);
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Ds), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      let e = this.getLead(),
        {
          targetWithTransforms: t,
          target: n,
          layout: r,
          latestValues: i
        } = e;
      if (!(!t || !n || !r)) {
        if (this !== e && this.layout && r && nc(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
          n = this.target || J();
          let t = Z(this.layout.layoutBox.x);
          n.x.min = e.target.x.min, n.x.max = n.x.min + t;
          let r = Z(this.layout.layoutBox.y);
          n.y.min = e.target.y.min, n.y.max = n.y.min + r;
        }
        X(t, n), Qa(t, i), Uo(this.projectionDeltaWithTransform, this.layoutCorrected, t, i);
      }
    }
    registerSharedNode(e, t) {
      this.sharedNodes.has(e) || this.sharedNodes.set(e, new Cs()), this.sharedNodes.get(e).add(t);
      let n = t.options.initialPromotionConfig;
      t.promote({
        transition: n ? n.transition : void 0,
        preserveFollowOpacity: n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(t) : void 0
      });
    }
    isLead() {
      let e = this.getStack();
      return !e || e.lead === this;
    }
    getLead() {
      let {
        layoutId: e
      } = this.options;
      return e && this.getStack()?.lead || this;
    }
    getPrevLead() {
      let {
        layoutId: e
      } = this.options;
      return e ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      let {
        layoutId: e
      } = this.options;
      if (e) return this.root.sharedNodes.get(e);
    }
    promote({
      needsReset: e,
      transition: t,
      preserveFollowOpacity: n
    } = {}) {
      let r = this.getStack();
      r && r.promote(this, n), e && (this.projectionDelta = void 0, this.needsReset = !0), t && this.setOptions({
        transition: t
      });
    }
    relegate() {
      let e = this.getStack();
      return e ? e.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      let {
        visualElement: e
      } = this.options;
      if (!e) return;
      let t = !1,
        {
          latestValues: n
        } = e;
      if ((n.z || n.rotate || n.rotateX || n.rotateY || n.rotateZ || n.skewX || n.skewY) && (t = !0), !t) return;
      let r = {};
      n.z && ks(`z`, e, r, this.animationValues);
      for (let t = 0; t < Es.length; t++) ks(`rotate${Es[t]}`, e, r, this.animationValues), ks(`skew${Es[t]}`, e, r, this.animationValues);
      e.render();
      for (let t in r) e.setStaticValue(t, r[t]), this.animationValues && (this.animationValues[t] = r[t]);
      e.scheduleRender();
    }
    applyProjectionStyles(e, t) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        e.visibility = `hidden`;
        return;
      }
      let n = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, e.visibility = ``, e.opacity = ``, e.pointerEvents = Ss(t?.pointerEvents) || ``, e.transform = n ? n(this.latestValues, ``) : `none`;
        return;
      }
      let r = this.getLead();
      if (!this.projectionDelta || !this.layout || !r.target) {
        this.options.layoutId && (e.opacity = this.latestValues.opacity === void 0 ? 1 : this.latestValues.opacity, e.pointerEvents = Ss(t?.pointerEvents) || ``), this.hasProjected && !Ba(this.latestValues) && (e.transform = n ? n({}, ``) : `none`, this.hasProjected = !1);
        return;
      }
      e.visibility = ``;
      let i = r.animationValues || r.latestValues;
      this.applyTransformsToTarget();
      let a = cs(this.projectionDeltaWithTransform, this.treeScale, i);
      n && (a = n(i, a)), e.transform = a;
      let {
        x: o,
        y: s
      } = this.projectionDelta;
      e.transformOrigin = `${o.origin * 100}% ${s.origin * 100}% 0`, e.opacity = r.animationValues ? r === this ? i.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : i.opacityExit : r === this ? i.opacity === void 0 ? `` : i.opacity : i.opacityExit === void 0 ? 0 : i.opacityExit;
      for (let t in lo) {
        if (i[t] === void 0) continue;
        let {
            correct: n,
            applyTo: o,
            isCSSVariable: s
          } = lo[t],
          c = a === `none` ? i[t] : n(i[t], r);
        if (o) {
          let t = o.length;
          for (let n = 0; n < t; n++) e[o[n]] = c;
        } else s ? this.options.visualElement.renderState.vars[t] = c : e[t] = c;
      }
      this.options.layoutId && (e.pointerEvents = r === this ? Ss(t?.pointerEvents) || `` : `none`);
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach(e => e.currentAnimation?.stop()), this.root.nodes.forEach(Ls), this.root.sharedNodes.clear();
    }
  };
}
function Ms(e) {
  e.updateLayout();
}
function Ns(e) {
  let t = e.resumeFrom?.snapshot || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners(`didUpdate`)) {
    let {
        layoutBox: n,
        measuredBox: r
      } = e.layout,
      {
        animationType: i
      } = e.options,
      a = t.source !== e.layout.source;
    if (i === `size`) Q(e => {
      let r = a ? t.measuredBox[e] : t.layoutBox[e],
        i = Z(r);
      r.min = n[e].min, r.max = r.min + i;
    });else if (i === `x` || i === `y`) {
      let e = i === `x` ? `y` : `x`;
      Fo(a ? t.measuredBox[e] : t.layoutBox[e], n[e]);
    } else nc(i, t.layoutBox, n) && Q(r => {
      let i = a ? t.measuredBox[r] : t.layoutBox[r],
        o = Z(n[r]);
      i.max = i.min + o, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[r].max = e.relativeTarget[r].min + o);
    });
    let o = ma();
    Uo(o, n, t.layoutBox);
    let s = ma();
    a ? Uo(s, e.applyTransform(r, !0), t.measuredBox) : Uo(s, n, t.layoutBox);
    let c = !ts(o),
      l = !1;
    if (!e.resumeFrom) {
      let r = e.getClosestProjectingParent();
      if (r && !r.resumeFrom) {
        let {
          snapshot: i,
          layout: a
        } = r;
        if (i && a) {
          let o = e.options.layoutAnchor || void 0,
            s = J();
          qo(s, t.layoutBox, i.layoutBox, o);
          let c = J();
          qo(c, n, a.layoutBox, o), as(s, c) || (l = !0), r.options.layoutRoot && (e.relativeTarget = c, e.relativeTargetOrigin = s, e.relativeParent = r);
        }
      }
    }
    e.notifyListeners(`didUpdate`, {
      layout: n,
      snapshot: t,
      delta: s,
      layoutDelta: o,
      hasLayoutChanged: c,
      hasRelativeLayoutChanged: l
    });
  } else if (e.isLead()) {
    let {
      onExitComplete: t
    } = e.options;
    t && t();
  }
  e.options.transition = void 0;
}
function Ps(e) {
  la.value && Ts.nodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty ||= !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty), e.isTransformDirty ||= e.parent.isTransformDirty);
}
function Fs(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Is(e) {
  e.clearSnapshot();
}
function Ls(e) {
  e.clearMeasurements();
}
function Rs(e) {
  e.isLayoutDirty = !0, e.updateLayout();
}
function zs(e) {
  e.isLayoutDirty = !1;
}
function Bs(e) {
  e.isAnimationBlocked && e.layout && !e.isLayoutDirty && (e.snapshot = e.layout, e.isLayoutDirty = !0);
}
function Vs(e) {
  let {
    visualElement: t
  } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify(`BeforeLayoutMeasure`), e.resetTransform();
}
function Hs(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function Us(e) {
  e.resolveTargetDelta();
}
function Ws(e) {
  e.calcProjection();
}
function Gs(e) {
  e.resetSkewAndRotation();
}
function Ks(e) {
  e.removeLeadSnapshot();
}
function qs(e, t, n) {
  e.translate = W(t.translate, 0, n), e.scale = W(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Js(e, t, n, r) {
  e.min = W(t.min, n.min, r), e.max = W(t.max, n.max, r);
}
function Ys(e, t, n, r) {
  Js(e.x, t.x, n.x, r), Js(e.y, t.y, n.y, r);
}
function Xs(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
var Zs = {
    duration: .45,
    ease: [.4, 0, .1, 1]
  },
  Qs = e => typeof navigator < `u` && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
  $s = Qs(`applewebkit/`) && !Qs(`chrome/`) ? Math.round : A;
function ec(e) {
  e.min = $s(e.min), e.max = $s(e.max);
}
function tc(e) {
  ec(e.x), ec(e.y);
}
function nc(e, t, n) {
  return e === `position` || e === `preserve-aspect` && !Vo(os(t), os(n), .2);
}
function rc(e) {
  return e !== e.root && e.scroll?.wasRoot;
}
var ic = js({
    attachResizeListener: (e, t) => vs(e, `resize`, t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
      y: document.documentElement.scrollTop || document.body?.scrollTop || 0
    }),
    checkIsScrollRoot: () => !0
  }),
  ac = {
    current: void 0
  },
  oc = js({
    measureScroll: e => ({
      x: e.scrollLeft,
      y: e.scrollTop
    }),
    defaultParent: () => {
      if (!ac.current) {
        let e = new ic({});
        e.mount(window), e.setOptions({
          layoutScroll: !0
        }), ac.current = e;
      }
      return ac.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t === void 0 ? `none` : t;
    },
    checkIsScrollRoot: e => window.getComputedStyle(e).position === `fixed`
  }),
  sc = (0, S.createContext)({
    transformPagePoint: e => e,
    isStatic: !1,
    reducedMotion: `never`
  });
function cc(e, t) {
  if (typeof e == `function`) return e(t);
  e != null && (e.current = t);
}
function lc(...e) {
  return t => {
    let n = !1,
      r = e.map(e => {
        let r = cc(e, t);
        return !n && typeof r == `function` && (n = !0), r;
      });
    if (n) return () => {
      for (let t = 0; t < r.length; t++) {
        let n = r[t];
        typeof n == `function` ? n() : cc(e[t], null);
      }
    };
  };
}
function uc(...e) {
  return S.useCallback(lc(...e), e);
}
var dc = class extends S.Component {
  getSnapshotBeforeUpdate(e) {
    let t = this.props.childRef.current;
    if (Di(t) && e.isPresent && !this.props.isPresent && this.props.pop !== !1) {
      let e = t.offsetParent,
        n = Di(e) && e.offsetWidth || 0,
        r = Di(e) && e.offsetHeight || 0,
        i = getComputedStyle(t),
        a = this.props.sizeRef.current;
      a.height = parseFloat(i.height), a.width = parseFloat(i.width), a.top = t.offsetTop, a.left = t.offsetLeft, a.right = n - a.width - a.left, a.bottom = r - a.height - a.top, a.direction = i.direction;
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
};
function fc({
  children: e,
  isPresent: t,
  anchorX: n,
  anchorY: r,
  root: i,
  pop: a
}) {
  let o = (0, S.useId)(),
    s = (0, S.useRef)(null),
    c = (0, S.useRef)({
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      direction: `ltr`
    }),
    {
      nonce: l
    } = (0, S.useContext)(sc),
    u = uc(s, a === !1 ? void 0 : e.props?.ref ?? e?.ref);
  return (0, S.useInsertionEffect)(() => {
    let {
      width: e,
      height: u,
      top: d,
      left: f,
      right: p,
      bottom: m,
      direction: h
    } = c.current;
    if (t || a === !1 || !s.current || !e || !u) return;
    let g = h === `rtl`,
      _ = n === `left` ? g ? `right: ${p}` : `left: ${f}` : g ? `left: ${f}` : `right: ${p}`,
      v = r === `bottom` ? `bottom: ${m}` : `top: ${d}`;
    s.current.dataset.motionPopId = o;
    let y = document.createElement(`style`);
    l && (y.nonce = l);
    let b = i ?? document.head;
    return b.appendChild(y), y.sheet && y.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${u}px !important;
            ${_}px !important;
            ${v}px !important;
          }
        `), () => {
      s.current?.removeAttribute(`data-motion-pop-id`), b.contains(y) && b.removeChild(y);
    };
  }, [t]), (0, x.jsx)(dc, {
    isPresent: t,
    childRef: s,
    sizeRef: c,
    pop: a,
    children: a === !1 ? e : S.cloneElement(e, {
      ref: u
    })
  });
}
var pc = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: a,
  mode: o,
  anchorX: s,
  anchorY: c,
  root: l
}) => {
  let u = w(mc),
    d = (0, S.useId)(),
    f = (0, S.useRef)(n),
    p = (0, S.useRef)(r);
  T(() => {
    f.current = n, p.current = r;
  });
  let m = !0,
    h = (0, S.useMemo)(() => (m = !1, {
      id: d,
      initial: t,
      isPresent: n,
      custom: i,
      onExitComplete: e => {
        u.set(e, !0);
        for (let e of u.values()) if (!e) return;
        r && r();
      },
      register: e => (u.set(e, !1), () => {
        u.delete(e), !f.current && !u.size && p.current?.();
      })
    }), [n, u, r]);
  return a && m && (h = {
    ...h
  }), (0, S.useMemo)(() => {
    u.forEach((e, t) => u.set(t, !1));
  }, [n]), S.useEffect(() => {
    !n && !u.size && r && r();
  }, [n]), e = (0, x.jsx)(fc, {
    pop: o === `popLayout`,
    isPresent: n,
    anchorX: s,
    anchorY: c,
    root: l,
    children: e
  }), (0, x.jsx)(E.Provider, {
    value: h,
    children: e
  });
};
function mc() {
  return new Map();
}
function hc(e = !0) {
  let t = (0, S.useContext)(E);
  if (t === null) return [!0, null];
  let {
      isPresent: n,
      onExitComplete: r,
      register: i
    } = t,
    a = (0, S.useId)();
  (0, S.useEffect)(() => {
    if (e) return i(a);
  }, [e]);
  let o = (0, S.useCallback)(() => e && r && r(a), [a, r, e]);
  return !n && r ? [!1, o] : [!0];
}
var gc = e => e.key || ``;
function _c(e) {
  let t = [];
  return S.Children.forEach(e, e => {
    (0, S.isValidElement)(e) && t.push(e);
  }), t;
}
var vc = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    presenceAffectsLayout: i = !0,
    mode: a = `sync`,
    propagate: o = !1,
    anchorX: s = `left`,
    anchorY: c = `top`,
    root: l
  }) => {
    let [u, d] = hc(o),
      f = (0, S.useMemo)(() => _c(e), [e]),
      p = o && !u ? [] : f.map(gc),
      m = (0, S.useRef)(!0),
      h = (0, S.useRef)(f),
      g = w(() => new Map()),
      _ = (0, S.useRef)(new Set()),
      [v, y] = (0, S.useState)(f),
      [b, E] = (0, S.useState)(f);
    T(() => {
      m.current = !1, h.current = f;
      for (let e = 0; e < b.length; e++) {
        let t = gc(b[e]);
        p.includes(t) ? (g.delete(t), _.current.delete(t)) : g.get(t) !== !0 && g.set(t, !1);
      }
    }, [b, p.length, p.join(`-`)]);
    let ee = [];
    if (f !== v) {
      let e = [...f];
      for (let t = 0; t < b.length; t++) {
        let n = b[t],
          r = gc(n);
        p.includes(r) || (e.splice(t, 0, n), ee.push(n));
      }
      return a === `wait` && ee.length && (e = ee), E(_c(e)), y(f), null;
    }
    let {
      forceRender: te
    } = (0, S.useContext)(C);
    return (0, x.jsx)(x.Fragment, {
      children: b.map(e => {
        let v = gc(e),
          y = o && !u ? !1 : f === b || p.includes(v);
        return (0, x.jsx)(pc, {
          isPresent: y,
          initial: !m.current || n ? void 0 : !1,
          custom: t,
          presenceAffectsLayout: i,
          mode: a,
          root: l,
          onExitComplete: y ? void 0 : () => {
            if (_.current.has(v)) return;
            if (g.has(v)) _.current.add(v), g.set(v, !0);else return;
            let e = !0;
            g.forEach(t => {
              t || (e = !1);
            }), e && (te?.(), E(h.current), o && d?.(), r && r());
          },
          anchorX: s,
          anchorY: c,
          children: e
        }, v);
      })
    });
  },
  yc = (0, S.createContext)({
    strict: !1
  }),
  bc = {
    animation: [`animate`, `variants`, `whileHover`, `whileTap`, `exit`, `whileInView`, `whileFocus`, `whileDrag`],
    exit: [`exit`],
    drag: [`drag`, `dragControls`],
    focus: [`whileFocus`],
    hover: [`whileHover`, `onHoverStart`, `onHoverEnd`],
    tap: [`whileTap`, `onTap`, `onTapStart`, `onTapCancel`],
    pan: [`onPan`, `onPanStart`, `onPanSessionStart`, `onPanEnd`],
    inView: [`whileInView`, `onViewportEnter`, `onViewportLeave`],
    layout: [`layout`, `layoutId`]
  },
  xc = !1;
function Sc() {
  if (xc) return;
  let e = {};
  for (let t in bc) e[t] = {
    isEnabled: e => bc[t].some(t => !!e[t])
  };
  Aa(e), xc = !0;
}
function Cc() {
  return Sc(), ja();
}
function wc(e) {
  let t = Cc();
  for (let n in e) t[n] = {
    ...t[n],
    ...e[n]
  };
  Aa(t);
}
var Tc = new Set(`animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(`.`));
function Ec(e) {
  return e.startsWith(`while`) || e.startsWith(`drag`) && e !== `draggable` || e.startsWith(`layout`) || e.startsWith(`onTap`) || e.startsWith(`onPan`) || e.startsWith(`onLayout`) || Tc.has(e);
}
var Dc = r({
    default: () => Oc
  }),
  Oc,
  kc = n(() => {
    throw Oc = {}, Error(`Could not resolve "@emotion/is-prop-valid" imported by "framer-motion". Is it installed?`);
  }),
  Ac = e => !Ec(e);
function jc(e) {
  typeof e == `function` && (Ac = t => t.startsWith(`on`) ? !Ec(t) : e(t));
}
try {
  jc((kc(), t(Dc)).default);
} catch {}
function Mc(e, t, n) {
  let r = {};
  for (let i in e) (i !== `values` || typeof e.values != `object`) && (K(e[i]) || (Ac(i) || n === !0 && Ec(i) || !t && !Ec(i) || e.draggable && i.startsWith(`onDrag`)) && (r[i] = e[i]));
  return r;
}
var Nc = (0, S.createContext)({});
function Pc(e, t) {
  if (xa(e)) {
    let {
      initial: t,
      animate: n
    } = e;
    return {
      initial: t === !1 || va(t) ? t : void 0,
      animate: va(n) ? n : void 0
    };
  }
  return e.inherit === !1 ? {} : t;
}
function Fc(e) {
  let {
    initial: t,
    animate: n
  } = Pc(e, (0, S.useContext)(Nc));
  return (0, S.useMemo)(() => ({
    initial: t,
    animate: n
  }), [Ic(t), Ic(n)]);
}
function Ic(e) {
  return Array.isArray(e) ? e.join(` `) : e;
}
var Lc = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function Rc(e, t, n) {
  for (let r in t) !K(t[r]) && !uo(r, n) && (e[r] = t[r]);
}
function zc({
  transformTemplate: e
}, t) {
  return (0, S.useMemo)(() => {
    let n = Lc();
    return io(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function Bc(e, t) {
  let n = e.style || {},
    r = {};
  return Rc(r, n, e), Object.assign(r, zc(e, t)), r;
}
function Vc(e, t) {
  let n = {},
    r = Bc(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = `none`, r.touchAction = e.drag === !0 ? `none` : `pan-${e.drag === `x` ? `y` : `x`}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
var Hc = () => ({
  ...Lc(),
  attrs: {}
});
function Uc(e, t, n, r) {
  let i = (0, S.useMemo)(() => {
    let n = Hc();
    return yo(n, t, xo(r), e.transformTemplate, e.style), {
      ...n.attrs,
      style: {
        ...n.style
      }
    };
  }, [t]);
  if (e.style) {
    let t = {};
    Rc(t, e.style, e), i.style = {
      ...t,
      ...i.style
    };
  }
  return i;
}
var Wc = [`animate`, `circle`, `defs`, `desc`, `ellipse`, `g`, `image`, `line`, `filter`, `marker`, `mask`, `metadata`, `path`, `pattern`, `polygon`, `polyline`, `rect`, `stop`, `switch`, `symbol`, `svg`, `text`, `tspan`, `use`, `view`];
function Gc(e) {
  return typeof e != `string` || e.includes(`-`) ? !1 : !!(Wc.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function Kc(e, t, n, {
  latestValues: r
}, i, a = !1, o) {
  let s = (o ?? Gc(e) ? Uc : Vc)(t, r, i, e),
    c = Mc(t, typeof e == `string`, a),
    l = e === S.Fragment ? {} : {
      ...c,
      ...s,
      ref: n
    },
    {
      children: u
    } = t,
    d = (0, S.useMemo)(() => K(u) ? u.get() : u, [u]);
  return (0, S.createElement)(e, {
    ...l,
    children: d
  });
}
function qc({
  scrapeMotionValuesFromProps: e,
  createRenderState: t
}, n, r, i) {
  return {
    latestValues: Jc(n, r, i, e),
    renderState: t()
  };
}
function Jc(e, t, n, r) {
  let i = {},
    a = r(e, {});
  for (let e in a) i[e] = Ss(a[e]);
  let {
      initial: o,
      animate: s
    } = e,
    c = xa(e),
    l = Sa(e);
  t && l && !c && e.inherit !== !1 && (o === void 0 && (o = t.initial), s === void 0 && (s = t.animate));
  let u = n ? n.initial === !1 : !1;
  u ||= o === !1;
  let d = u ? s : o;
  if (d && typeof d != `boolean` && !_a(d)) {
    let t = Array.isArray(d) ? d : [d];
    for (let n = 0; n < t.length; n++) {
      let r = Hr(e, t[n]);
      if (r) {
        let {
          transitionEnd: e,
          transition: t,
          ...n
        } = r;
        for (let e in n) {
          let t = n[e];
          if (Array.isArray(t)) {
            let e = u ? t.length - 1 : 0;
            t = t[e];
          }
          t !== null && (i[e] = t);
        }
        for (let t in e) i[t] = e[t];
      }
    }
  }
  return i;
}
var Yc = e => (t, n) => {
    let r = (0, S.useContext)(Nc),
      i = (0, S.useContext)(E),
      a = () => qc(e, t, r, i);
    return n ? a() : w(a);
  },
  Xc = Yc({
    scrapeMotionValuesFromProps: fo,
    createRenderState: Lc
  }),
  Zc = Yc({
    scrapeMotionValuesFromProps: Co,
    createRenderState: Hc
  }),
  Qc = Symbol.for(`motionComponentSymbol`);
function $c(e, t, n) {
  let r = (0, S.useRef)(n);
  (0, S.useInsertionEffect)(() => {
    r.current = n;
  });
  let i = (0, S.useRef)(null);
  return (0, S.useCallback)(n => {
    n && e.onMount?.(n), t && (n ? t.mount(n) : t.unmount());
    let a = r.current;
    if (typeof a == `function`) {
      if (n) {
        let e = a(n);
        typeof e == `function` && (i.current = e);
      } else i.current ? (i.current(), i.current = null) : a(n);
    } else a && (a.current = n);
  }, [t]);
}
var el = (0, S.createContext)({});
function tl(e) {
  return e && typeof e == `object` && Object.prototype.hasOwnProperty.call(e, `current`);
}
function nl(e, t, n, r, i, a) {
  let {
      visualElement: o
    } = (0, S.useContext)(Nc),
    s = (0, S.useContext)(yc),
    c = (0, S.useContext)(E),
    l = (0, S.useContext)(sc),
    u = l.reducedMotion,
    d = l.skipAnimations,
    f = (0, S.useRef)(null),
    p = (0, S.useRef)(!1);
  r ||= s.renderer, !f.current && r && (f.current = r(e, {
    visualState: t,
    parent: o,
    props: n,
    presenceContext: c,
    blockInitialAnimation: c ? c.initial === !1 : !1,
    reducedMotionConfig: u,
    skipAnimations: d,
    isSVG: a
  }), p.current && f.current && (f.current.manuallyAnimateOnMount = !0));
  let m = f.current,
    h = (0, S.useContext)(el);
  m && !m.projection && i && (m.type === `html` || m.type === `svg`) && rl(f.current, n, i, h);
  let g = (0, S.useRef)(!1);
  (0, S.useInsertionEffect)(() => {
    m && g.current && m.update(n, c);
  });
  let _ = n[Qr],
    v = (0, S.useRef)(!!_ && typeof window < `u` && !window.MotionHandoffIsComplete?.(_) && window.MotionHasOptimisedAnimation?.(_));
  return T(() => {
    p.current = !0, m && (g.current = !0, window.MotionIsMounted = !0, m.updateFeatures(), m.scheduleRenderMicrotask(), v.current && m.animationState && m.animationState.animateChanges());
  }), (0, S.useEffect)(() => {
    m && (!v.current && m.animationState && m.animationState.animateChanges(), v.current &&= (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(_);
    }), !1), m.enteringChildren = void 0);
  }), m;
}
function rl(e, t, n, r) {
  let {
    layoutId: i,
    layout: a,
    drag: o,
    dragConstraints: s,
    layoutScroll: c,
    layoutRoot: l,
    layoutAnchor: u,
    layoutCrossfade: d
  } = t;
  e.projection = new n(e.latestValues, t[`data-framer-portal-id`] ? void 0 : il(e.parent)), e.projection.setOptions({
    layoutId: i,
    layout: a,
    alwaysMeasureLayout: !!o || s && tl(s),
    visualElement: e,
    animationType: typeof a == `string` ? a : `both`,
    initialPromotionConfig: r,
    crossfade: d,
    layoutScroll: c,
    layoutRoot: l,
    layoutAnchor: u
  });
}
function il(e) {
  if (e) return e.options.allowProjection === !1 ? il(e.parent) : e.projection;
}
function al(e, {
  forwardMotionProps: t = !1,
  type: n
} = {}, r, i) {
  r && wc(r);
  let a = n ? n === `svg` : Gc(e),
    o = a ? Zc : Xc;
  function s(n, s) {
    let c,
      l = {
        ...(0, S.useContext)(sc),
        ...n,
        layoutId: ol(n)
      },
      {
        isStatic: u
      } = l,
      d = Fc(n),
      f = o(n, u);
    if (!u && typeof window < `u`) {
      sl(l, r);
      let t = cl(l);
      c = t.MeasureLayout, d.visualElement = nl(e, f, l, i, t.ProjectionNode, a);
    }
    return (0, x.jsxs)(Nc.Provider, {
      value: d,
      children: [c && d.visualElement ? (0, x.jsx)(c, {
        visualElement: d.visualElement,
        ...l
      }) : null, Kc(e, n, $c(f, d.visualElement, s), f, u, t, a)]
    });
  }
  s.displayName = `motion.${typeof e == `string` ? e : `create(${e.displayName ?? e.name ?? ``})`}`;
  let c = (0, S.forwardRef)(s);
  return c[Qc] = e, c;
}
function ol({
  layoutId: e
}) {
  let t = (0, S.useContext)(C).id;
  return t && e !== void 0 ? t + `-` + e : e;
}
function sl(e, t) {
  (0, S.useContext)(yc).strict;
}
function cl(e) {
  let {
    drag: t,
    layout: n
  } = Cc();
  if (!t && !n) return {};
  let r = {
    ...t,
    ...n
  };
  return {
    MeasureLayout: t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
function ll(e, t) {
  if (typeof Proxy > `u`) return al;
  let n = new Map(),
    r = (n, r) => al(n, r, e, t);
  return new Proxy((e, t) => r(e, t), {
    get: (i, a) => a === `create` ? r : (n.has(a) || n.set(a, al(a, void 0, e, t)), n.get(a))
  });
}
var ul = (e, t) => t.isSVG ?? Gc(e) ? new wo(t) : new mo(t, {
    allowProjection: e !== S.Fragment
  }),
  dl = class extends Pa {
    constructor(e) {
      super(e), e.animationState ||= jo(e);
    }
    updateAnimationControlsSubscription() {
      let {
        animate: e
      } = this.node.getProps();
      _a(e) && (this.unmountControls = e.subscribe(this.node));
    }
    mount() {
      this.updateAnimationControlsSubscription();
    }
    update() {
      let {
          animate: e
        } = this.node.getProps(),
        {
          animate: t
        } = this.node.prevProps || {};
      e !== t && this.updateAnimationControlsSubscription();
    }
    unmount() {
      this.node.animationState.reset(), this.unmountControls?.();
    }
  },
  fl = 0,
  pl = {
    animation: {
      Feature: dl
    },
    exit: {
      Feature: class extends Pa {
        constructor() {
          super(...arguments), this.id = fl++, this.isExitComplete = !1;
        }
        update() {
          if (!this.node.presenceContext) return;
          let {
              isPresent: e,
              onExitComplete: t
            } = this.node.presenceContext,
            {
              isPresent: n
            } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || e === n) return;
          if (e && n === !1) {
            if (this.isExitComplete) {
              let {
                initial: e,
                custom: t
              } = this.node.getProps();
              if (typeof e == `string` || typeof e == `object` && e && !Array.isArray(e)) {
                let n = Ur(this.node, e, t);
                if (n) {
                  let {
                    transition: e,
                    transitionEnd: t,
                    ...r
                  } = n;
                  for (let e in r) this.node.getValue(e)?.jump(r[e]);
                }
              }
              this.node.animationState.reset(), this.node.animationState.animateChanges();
            } else this.node.animationState.setActive(`exit`, !1);
            this.isExitComplete = !1;
            return;
          }
          let r = this.node.animationState.setActive(`exit`, !e);
          t && !e && r.then(() => {
            this.isExitComplete = !0, t(this.id);
          });
        }
        mount() {
          let {
            register: e,
            onExitComplete: t
          } = this.node.presenceContext || {};
          t && t(this.id), e && (this.unmount = e(this.id));
        }
        unmount() {}
      }
    }
  };
function ml(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
var hl = e => t => Ii(t) && e(t, ml(t));
function gl(e, t, n, r) {
  return vs(e, t, hl(n), r);
}
var _l = ({
    current: e
  }) => e ? e.ownerDocument.defaultView : null,
  vl = (e, t) => Math.abs(e - t);
function yl(e, t) {
  let n = vl(e.x, t.x),
    r = vl(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
var bl = new Set([`auto`, `scroll`]),
  xl = class {
    constructor(e, t, {
      transformPagePoint: n,
      contextWindow: r = window,
      dragSnapToOrigin: i = !1,
      distanceThreshold: a = 3,
      element: o
    } = {}) {
      if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = new Map(), this.removeScrollListeners = null, this.onElementScroll = e => {
        this.handleScroll(e.target);
      }, this.onWindowScroll = () => {
        this.handleScroll(window);
      }, this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        this.lastRawMoveEventInfo && (this.lastMoveEventInfo = Sl(this.lastRawMoveEventInfo, this.transformPagePoint));
        let e = wl(this.lastMoveEventInfo, this.history),
          t = this.startEvent !== null,
          n = yl(e.offset, {
            x: 0,
            y: 0
          }) >= this.distanceThreshold;
        if (!t && !n) return;
        let {
            point: r
          } = e,
          {
            timestamp: i
          } = L;
        this.history.push({
          ...r,
          timestamp: i
        });
        let {
          onStart: a,
          onMove: o
        } = this.handlers;
        t || (a && a(this.lastMoveEvent, e), this.startEvent = this.lastMoveEvent), o && o(this.lastMoveEvent, e);
      }, this.handlePointerMove = (e, t) => {
        this.lastMoveEvent = e, this.lastRawMoveEventInfo = t, this.lastMoveEventInfo = Sl(t, this.transformPagePoint), F.update(this.updatePoint, !0);
      }, this.handlePointerUp = (e, t) => {
        this.end();
        let {
          onEnd: n,
          onSessionEnd: r,
          resumeAnimation: i
        } = this.handlers;
        if ((this.dragSnapToOrigin || !this.startEvent) && i && i(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        let a = wl(e.type === `pointercancel` ? this.lastMoveEventInfo : Sl(t, this.transformPagePoint), this.history);
        this.startEvent && n && n(e, a), r && r(e, a);
      }, !Ii(e)) return;
      this.dragSnapToOrigin = i, this.handlers = t, this.transformPagePoint = n, this.distanceThreshold = a, this.contextWindow = r || window;
      let s = Sl(ml(e), this.transformPagePoint),
        {
          point: c
        } = s,
        {
          timestamp: l
        } = L;
      this.history = [{
        ...c,
        timestamp: l
      }];
      let {
        onSessionStart: u
      } = t;
      u && u(e, wl(s, this.history));
      let d = {
        passive: !0,
        capture: !0
      };
      this.removeListeners = ae(gl(this.contextWindow, `pointermove`, this.handlePointerMove, d), gl(this.contextWindow, `pointerup`, this.handlePointerUp, d), gl(this.contextWindow, `pointercancel`, this.handlePointerUp, d)), o && this.startScrollTracking(o);
    }
    startScrollTracking(e) {
      let t = e.parentElement;
      for (; t;) {
        let e = getComputedStyle(t);
        (bl.has(e.overflowX) || bl.has(e.overflowY)) && this.scrollPositions.set(t, {
          x: t.scrollLeft,
          y: t.scrollTop
        }), t = t.parentElement;
      }
      this.scrollPositions.set(window, {
        x: window.scrollX,
        y: window.scrollY
      }), window.addEventListener(`scroll`, this.onElementScroll, {
        capture: !0
      }), window.addEventListener(`scroll`, this.onWindowScroll), this.removeScrollListeners = () => {
        window.removeEventListener(`scroll`, this.onElementScroll, {
          capture: !0
        }), window.removeEventListener(`scroll`, this.onWindowScroll);
      };
    }
    handleScroll(e) {
      let t = this.scrollPositions.get(e);
      if (!t) return;
      let n = e === window,
        r = n ? {
          x: window.scrollX,
          y: window.scrollY
        } : {
          x: e.scrollLeft,
          y: e.scrollTop
        },
        i = {
          x: r.x - t.x,
          y: r.y - t.y
        };
      (i.x !== 0 || i.y !== 0) && (n ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += i.x, this.lastMoveEventInfo.point.y += i.y) : this.history.length > 0 && (this.history[0].x -= i.x, this.history[0].y -= i.y), this.scrollPositions.set(e, r), F.update(this.updatePoint, !0));
    }
    updateHandlers(e) {
      this.handlers = e;
    }
    end() {
      this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), I(this.updatePoint);
    }
  };
function Sl(e, t) {
  return t ? {
    point: t(e.point)
  } : e;
}
function Cl(e, t) {
  return {
    x: e.x - t.x,
    y: e.y - t.y
  };
}
function wl({
  point: e
}, t) {
  return {
    point: e,
    delta: Cl(e, El(t)),
    offset: Cl(e, Tl(t)),
    velocity: Dl(t, .1)
  };
}
function Tl(e) {
  return e[0];
}
function El(e) {
  return e[e.length - 1];
}
function Dl(e, t) {
  if (e.length < 2) return {
    x: 0,
    y: 0
  };
  let n = e.length - 1,
    r = null,
    i = El(e);
  for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > j(t)));) n--;
  if (!r) return {
    x: 0,
    y: 0
  };
  r === e[0] && e.length > 2 && i.timestamp - r.timestamp > j(t) * 2 && (r = e[1]);
  let a = M(i.timestamp - r.timestamp);
  if (a === 0) return {
    x: 0,
    y: 0
  };
  let o = {
    x: (i.x - r.x) / a,
    y: (i.y - r.y) / a
  };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
function Ol(e, {
  min: t,
  max: n
}, r) {
  return t !== void 0 && e < t ? e = r ? W(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? W(n, e, r.max) : Math.min(e, n)), e;
}
function kl(e, t, n) {
  return {
    min: t === void 0 ? void 0 : e.min + t,
    max: n === void 0 ? void 0 : e.max + n - (e.max - e.min)
  };
}
function Al(e, {
  top: t,
  left: n,
  bottom: r,
  right: i
}) {
  return {
    x: kl(e.x, n, i),
    y: kl(e.y, t, r)
  };
}
function jl(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
    min: n,
    max: r
  };
}
function Ml(e, t) {
  return {
    x: jl(e.x, t.x),
    y: jl(e.y, t.y)
  };
}
function Nl(e, t) {
  let n = .5,
    r = Z(e),
    i = Z(t);
  return i > r ? n = oe(t.min, t.max - r, e.min) : r > i && (n = oe(e.min, e.max - i, t.min)), D(0, 1, n);
}
function Pl(e, t) {
  let n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
var Fl = .35;
function Il(e = Fl) {
  return e === !1 ? e = 0 : e === !0 && (e = Fl), {
    x: Ll(e, `left`, `right`),
    y: Ll(e, `top`, `bottom`)
  };
}
function Ll(e, t, n) {
  return {
    min: Rl(e, t),
    max: Rl(e, n)
  };
}
function Rl(e, t) {
  return typeof e == `number` ? e : e[t] || 0;
}
var zl = new WeakMap(),
  Bl = class {
    constructor(e) {
      this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
        x: 0,
        y: 0
      }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = J(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = e;
    }
    start(e, {
      snapToCursor: t = !1,
      distanceThreshold: n
    } = {}) {
      let {
        presenceContext: r
      } = this.visualElement;
      if (r && r.isPresent === !1) return;
      let i = e => {
          t && this.snapToCursor(ml(e).point), this.stopAnimation();
        },
        a = (e, t) => {
          let {
            drag: n,
            dragPropagation: r,
            onDragStart: i
          } = this.getProps();
          if (n && !r && (this.openDragLock && this.openDragLock(), this.openDragLock = ji(n), !this.openDragLock)) return;
          this.latestPointerEvent = e, this.latestPanInfo = t, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Q(e => {
            let t = this.getAxisMotionValue(e).get() || 0;
            if (B.test(t)) {
              let {
                projection: n
              } = this.visualElement;
              if (n && n.layout) {
                let r = n.layout.layoutBox[e];
                r && (t = Z(r) * (parseFloat(t) / 100));
              }
            }
            this.originPoint[e] = t;
          }), i && F.update(() => i(e, t), !1, !0), Xr(this.visualElement, `transform`);
          let {
            animationState: a
          } = this.visualElement;
          a && a.setActive(`whileDrag`, !0);
        },
        o = (e, t) => {
          this.latestPointerEvent = e, this.latestPanInfo = t;
          let {
            dragPropagation: n,
            dragDirectionLock: r,
            onDirectionLock: i,
            onDrag: a
          } = this.getProps();
          if (!n && !this.openDragLock) return;
          let {
            offset: o
          } = t;
          if (r && this.currentDirection === null) {
            this.currentDirection = Wl(o), this.currentDirection !== null && i && i(this.currentDirection);
            return;
          }
          this.updateAxis(`x`, t.point, o), this.updateAxis(`y`, t.point, o), this.visualElement.render(), a && F.update(() => a(e, t), !1, !0);
        },
        s = (e, t) => {
          this.latestPointerEvent = e, this.latestPanInfo = t, this.stop(e, t), this.latestPointerEvent = null, this.latestPanInfo = null;
        },
        c = () => {
          let {
            dragSnapToOrigin: e
          } = this.getProps();
          (e || this.constraints) && this.startAnimation({
            x: 0,
            y: 0
          });
        },
        {
          dragSnapToOrigin: l
        } = this.getProps();
      this.panSession = new xl(e, {
        onSessionStart: i,
        onStart: a,
        onMove: o,
        onSessionEnd: s,
        resumeAnimation: c
      }, {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: l,
        distanceThreshold: n,
        contextWindow: _l(this.visualElement),
        element: this.visualElement.current
      });
    }
    stop(e, t) {
      let n = e || this.latestPointerEvent,
        r = t || this.latestPanInfo,
        i = this.isDragging;
      if (this.cancel(), !i || !r || !n) return;
      let {
        velocity: a
      } = r;
      this.startAnimation(a);
      let {
        onDragEnd: o
      } = this.getProps();
      o && F.postRender(() => o(n, r));
    }
    cancel() {
      this.isDragging = !1;
      let {
        projection: e,
        animationState: t
      } = this.visualElement;
      e && (e.isAnimationBlocked = !1), this.endPanSession();
      let {
        dragPropagation: n
      } = this.getProps();
      !n && this.openDragLock && (this.openDragLock(), this.openDragLock = null), t && t.setActive(`whileDrag`, !1);
    }
    endPanSession() {
      this.panSession && this.panSession.end(), this.panSession = void 0;
    }
    updateAxis(e, t, n) {
      let {
        drag: r
      } = this.getProps();
      if (!n || !Ul(e, r, this.currentDirection)) return;
      let i = this.getAxisMotionValue(e),
        a = this.originPoint[e] + n[e];
      this.constraints && this.constraints[e] && (a = Ol(a, this.constraints[e], this.elastic[e])), i.set(a);
    }
    resolveConstraints() {
      let {
          dragConstraints: e,
          dragElastic: t
        } = this.getProps(),
        n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout,
        r = this.constraints;
      e && tl(e) ? this.constraints ||= this.resolveRefConstraints() : this.constraints = e && n ? Al(n.layoutBox, e) : !1, this.elastic = Il(t), r !== this.constraints && !tl(e) && n && this.constraints && !this.hasMutatedConstraints && Q(e => {
        this.constraints !== !1 && this.getAxisMotionValue(e) && (this.constraints[e] = Pl(n.layoutBox[e], this.constraints[e]));
      });
    }
    resolveRefConstraints() {
      let {
        dragConstraints: e,
        onMeasureDragConstraints: t
      } = this.getProps();
      if (!e || !tl(e)) return !1;
      let n = e.current,
        {
          projection: r
        } = this.visualElement;
      if (!r || !r.layout) return !1;
      r.root && (r.root.scroll = void 0, r.root.updateScroll());
      let i = eo(n, r.root, this.visualElement.getTransformPagePoint()),
        a = Ml(r.layout.layoutBox, i);
      if (t) {
        let e = t(Ia(a));
        this.hasMutatedConstraints = !!e, e && (a = Fa(e));
      }
      return a;
    }
    startAnimation(e) {
      let {
          drag: t,
          dragMomentum: n,
          dragElastic: r,
          dragTransition: i,
          dragSnapToOrigin: a,
          onDragTransitionEnd: o
        } = this.getProps(),
        s = this.constraints || {},
        c = Q(o => {
          if (!Ul(o, t, this.currentDirection)) return;
          let c = s && s[o] || {};
          (a === !0 || a === o) && (c = {
            min: 0,
            max: 0
          });
          let l = r ? 200 : 1e6,
            u = r ? 40 : 1e7,
            d = {
              type: `inertia`,
              velocity: n ? e[o] : 0,
              bounceStiffness: l,
              bounceDamping: u,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...i,
              ...c
            };
          return this.startAxisValueAnimation(o, d);
        });
      return Promise.all(c).then(o);
    }
    startAxisValueAnimation(e, t) {
      let n = this.getAxisMotionValue(e);
      return Xr(this.visualElement, e), n.start(Lr(e, n, 0, t, this.visualElement, !1));
    }
    stopAnimation() {
      Q(e => this.getAxisMotionValue(e).stop());
    }
    getAxisMotionValue(e) {
      let t = `_drag${e.toUpperCase()}`;
      return this.visualElement.getProps()[t] || this.visualElement.getValue(e, this.visualElement.latestValues[e] ?? 0);
    }
    snapToCursor(e) {
      Q(t => {
        let {
          drag: n
        } = this.getProps();
        if (!Ul(t, n, this.currentDirection)) return;
        let {
            projection: r
          } = this.visualElement,
          i = this.getAxisMotionValue(t);
        if (r && r.layout) {
          let {
              min: n,
              max: a
            } = r.layout.layoutBox[t],
            o = i.get() || 0;
          i.set(e[t] - W(n, a, .5) + o);
        }
      });
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      let {
          drag: e,
          dragConstraints: t
        } = this.getProps(),
        {
          projection: n
        } = this.visualElement;
      if (!tl(t) || !n || !this.constraints) return;
      this.stopAnimation();
      let r = {
        x: 0,
        y: 0
      };
      Q(e => {
        let t = this.getAxisMotionValue(e);
        if (t && this.constraints !== !1) {
          let n = t.get();
          r[e] = Nl({
            min: n,
            max: n
          }, this.constraints[e]);
        }
      });
      let {
        transformTemplate: i
      } = this.visualElement.getProps();
      this.visualElement.current.style.transform = i ? i({}, ``) : `none`, n.root && n.root.updateScroll(), n.updateLayout(), this.constraints = !1, this.resolveConstraints(), Q(t => {
        if (!Ul(t, e, null)) return;
        let n = this.getAxisMotionValue(t),
          {
            min: i,
            max: a
          } = this.constraints[t];
        n.set(W(i, a, r[t]));
      }), this.visualElement.render();
    }
    addListeners() {
      if (!this.visualElement.current) return;
      zl.set(this.visualElement, this);
      let e = this.visualElement.current,
        t = gl(e, `pointerdown`, t => {
          let {
              drag: n,
              dragListener: r = !0
            } = this.getProps(),
            i = t.target,
            a = i !== e && Bi(i);
          n && r && !a && this.start(t);
        }),
        n,
        r = () => {
          let {
            dragConstraints: t
          } = this.getProps();
          tl(t) && t.current && (this.constraints = this.resolveRefConstraints(), n ||= Hl(e, t.current, () => this.scalePositionWithinConstraints()));
        },
        {
          projection: i
        } = this.visualElement,
        a = i.addEventListener(`measure`, r);
      i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), F.read(r);
      let o = vs(window, `resize`, () => this.scalePositionWithinConstraints()),
        s = i.addEventListener(`didUpdate`, ({
          delta: e,
          hasLayoutChanged: t
        }) => {
          this.isDragging && t && (Q(t => {
            let n = this.getAxisMotionValue(t);
            n && (this.originPoint[t] += e[t].translate, n.set(n.get() + e[t].translate));
          }), this.visualElement.render());
        });
      return () => {
        o(), t(), a(), s && s(), n && n();
      };
    }
    getProps() {
      let e = this.visualElement.getProps(),
        {
          drag: t = !1,
          dragDirectionLock: n = !1,
          dragPropagation: r = !1,
          dragConstraints: i = !1,
          dragElastic: a = Fl,
          dragMomentum: o = !0
        } = e;
      return {
        ...e,
        drag: t,
        dragDirectionLock: n,
        dragPropagation: r,
        dragConstraints: i,
        dragElastic: a,
        dragMomentum: o
      };
    }
  };
function Vl(e) {
  let t = !0;
  return () => {
    if (t) {
      t = !1;
      return;
    }
    e();
  };
}
function Hl(e, t, n) {
  let r = ca(e, Vl(n)),
    i = ca(t, Vl(n));
  return () => {
    r(), i();
  };
}
function Ul(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Wl(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = `y` : Math.abs(e.x) > t && (n = `x`), n;
}
var Gl = class extends Pa {
    constructor(e) {
      super(e), this.removeGroupControls = A, this.removeListeners = A, this.controls = new Bl(e);
    }
    mount() {
      let {
        dragControls: e
      } = this.node.getProps();
      e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || A;
    }
    update() {
      let {
          dragControls: e
        } = this.node.getProps(),
        {
          dragControls: t
        } = this.node.prevProps || {};
      e !== t && (this.removeGroupControls(), e && (this.removeGroupControls = e.subscribe(this.controls)));
    }
    unmount() {
      this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
    }
  },
  Kl = e => (t, n) => {
    e && F.update(() => e(t, n), !1, !0);
  },
  ql = class extends Pa {
    constructor() {
      super(...arguments), this.removePointerDownListener = A;
    }
    onPointerDown(e) {
      this.session = new xl(e, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
        contextWindow: _l(this.node)
      });
    }
    createPanHandlers() {
      let {
        onPanSessionStart: e,
        onPanStart: t,
        onPan: n,
        onPanEnd: r
      } = this.node.getProps();
      return {
        onSessionStart: Kl(e),
        onStart: Kl(t),
        onMove: Kl(n),
        onEnd: (e, t) => {
          delete this.session, r && F.postRender(() => r(e, t));
        }
      };
    }
    mount() {
      this.removePointerDownListener = gl(this.node.current, `pointerdown`, e => this.onPointerDown(e));
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      this.removePointerDownListener(), this.session && this.session.end();
    }
  },
  Jl = !1,
  Yl = class extends S.Component {
    componentDidMount() {
      let {
          visualElement: e,
          layoutGroup: t,
          switchLayoutGroup: n,
          layoutId: r
        } = this.props,
        {
          projection: i
        } = e;
      i && (t.group && t.group.add(i), n && n.register && r && n.register(i), Jl && i.root.didUpdate(), i.addEventListener(`animationComplete`, () => {
        this.safeToRemove();
      }), i.setOptions({
        ...i.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove()
      })), ws.hasEverUpdated = !0;
    }
    getSnapshotBeforeUpdate(e) {
      let {
          layoutDependency: t,
          visualElement: n,
          drag: r,
          isPresent: i
        } = this.props,
        {
          projection: a
        } = n;
      return a ? (a.isPresent = i, e.layoutDependency !== t && a.setOptions({
        ...a.options,
        layoutDependency: t
      }), Jl = !0, r || e.layoutDependency !== t || t === void 0 || e.isPresent !== i ? a.willUpdate() : this.safeToRemove(), e.isPresent !== i && (i ? a.promote() : a.relegate() || F.postRender(() => {
        let e = a.getStack();
        (!e || !e.members.length) && this.safeToRemove();
      })), null) : null;
    }
    componentDidUpdate() {
      let {
          visualElement: e,
          layoutAnchor: t
        } = this.props,
        {
          projection: n
        } = e;
      n && (n.options.layoutAnchor = t, n.root.didUpdate(), Oi.postRender(() => {
        !n.currentAnimation && n.isLead() && this.safeToRemove();
      }));
    }
    componentWillUnmount() {
      let {
          visualElement: e,
          layoutGroup: t,
          switchLayoutGroup: n
        } = this.props,
        {
          projection: r
        } = e;
      Jl = !0, r && (r.scheduleCheckAfterUnmount(), t && t.group && t.group.remove(r), n && n.deregister && n.deregister(r));
    }
    safeToRemove() {
      let {
        safeToRemove: e
      } = this.props;
      e && e();
    }
    render() {
      return null;
    }
  };
function Xl(e) {
  let [t, n] = hc(),
    r = (0, S.useContext)(C);
  return (0, x.jsx)(Yl, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: (0, S.useContext)(el),
    isPresent: t,
    safeToRemove: n
  });
}
var Zl = {
  pan: {
    Feature: ql
  },
  drag: {
    Feature: Gl,
    ProjectionNode: oc,
    MeasureLayout: Xl
  }
};
function Ql(e, t, n) {
  let {
    props: r
  } = e;
  e.animationState && r.whileHover && e.animationState.setActive(`whileHover`, n === `Start`);
  let i = r[`onHover` + n];
  i && F.postRender(() => i(t, ml(t)));
}
var $l = class extends Pa {
    mount() {
      let {
        current: e
      } = this.node;
      e && (this.unmount = Pi(e, (e, t) => (Ql(this.node, t, `Start`), e => Ql(this.node, e, `End`))));
    }
    unmount() {}
  },
  eu = class extends Pa {
    constructor() {
      super(...arguments), this.isActive = !1;
    }
    onFocus() {
      let e = !1;
      try {
        e = this.node.current.matches(`:focus-visible`);
      } catch {
        e = !0;
      }
      !e || !this.node.animationState || (this.node.animationState.setActive(`whileFocus`, !0), this.isActive = !0);
    }
    onBlur() {
      !this.isActive || !this.node.animationState || (this.node.animationState.setActive(`whileFocus`, !1), this.isActive = !1);
    }
    mount() {
      this.unmount = ae(vs(this.node.current, `focus`, () => this.onFocus()), vs(this.node.current, `blur`, () => this.onBlur()));
    }
    unmount() {}
  };
function tu(e, t, n) {
  let {
    props: r
  } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
  e.animationState && r.whileTap && e.animationState.setActive(`whileTap`, n === `Start`);
  let i = r[`onTap` + (n === `End` ? `` : n)];
  i && F.postRender(() => i(t, ml(t)));
}
var nu = class extends Pa {
    mount() {
      let {
        current: e
      } = this.node;
      if (!e) return;
      let {
        globalTapTarget: t,
        propagate: n
      } = this.node.props;
      this.unmount = qi(e, (e, t) => (tu(this.node, t, `Start`), (e, {
        success: t
      }) => tu(this.node, e, t ? `End` : `Cancel`)), {
        useGlobalTarget: t,
        stopPropagation: n?.tap === !1
      });
    }
    unmount() {}
  },
  ru = new WeakMap(),
  iu = new WeakMap(),
  au = e => {
    let t = ru.get(e.target);
    t && t(e);
  },
  ou = e => {
    e.forEach(au);
  };
function su({
  root: e,
  ...t
}) {
  let n = e || document;
  iu.has(n) || iu.set(n, {});
  let r = iu.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(ou, {
    root: e,
    ...t
  })), r[i];
}
function cu(e, t, n) {
  let r = su(t);
  return ru.set(e, n), r.observe(e), () => {
    ru.delete(e), r.unobserve(e);
  };
}
var lu = {
    some: 0,
    all: 1
  },
  uu = class extends Pa {
    constructor() {
      super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
    }
    startObserver() {
      this.stopObserver?.();
      let {
          viewport: e = {}
        } = this.node.getProps(),
        {
          root: t,
          margin: n,
          amount: r = `some`,
          once: i
        } = e,
        a = {
          root: t ? t.current : void 0,
          rootMargin: n,
          threshold: typeof r == `number` ? r : lu[r]
        },
        o = e => {
          let {
            isIntersecting: t
          } = e;
          if (this.isInView === t || (this.isInView = t, i && !t && this.hasEnteredView)) return;
          t && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive(`whileInView`, t);
          let {
              onViewportEnter: n,
              onViewportLeave: r
            } = this.node.getProps(),
            a = t ? n : r;
          a && a(e);
        };
      this.stopObserver = cu(this.node.current, a, o);
    }
    mount() {
      this.startObserver();
    }
    update() {
      if (typeof IntersectionObserver > `u`) return;
      let {
        props: e,
        prevProps: t
      } = this.node;
      [`amount`, `margin`, `root`].some(du(e, t)) && this.startObserver();
    }
    unmount() {
      this.stopObserver?.(), this.hasEnteredView = !1, this.isInView = !1;
    }
  };
function du({
  viewport: e = {}
}, {
  viewport: t = {}
} = {}) {
  return n => e[n] !== t[n];
}
var fu = {
    inView: {
      Feature: uu
    },
    tap: {
      Feature: nu
    },
    focus: {
      Feature: eu
    },
    hover: {
      Feature: $l
    }
  },
  pu = {
    layout: {
      ProjectionNode: oc,
      MeasureLayout: Xl
    }
  },
  mu = ll({
    ...pl,
    ...fu,
    ...Zl,
    ...pu
  }, ul),
  hu = e(o(), 1),
  gu = mu,
  _u = r({
    LoomixPlayer: () => fd
  });
function vu({
  active: e
}) {
  return <svg viewBox={`0 0 24 24`} width={18} height={18} aria-hidden={!0} fill={`currentColor`}>{e ? <path d={`M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-9 6H8v4h3v2H8c-1.103 0-2-.897-2-2v-4c0-1.103.897-2 2-2h3v2zm7 0h-3v4h3v2h-3c-1.103 0-2-.897-2-2v-4c0-1.103.897-2 2-2h3v2z`} /> : (0, x.jsxs)(x.Fragment, {
      children: [<path d={`M6 10v4c0 1.103.897 2 2 2h3v-2H8v-4h3V8H8c-1.103 0-2 .897-2 2zm7 0v4c0 1.103.897 2 2 2h3v-2h-3v-4h3V8h-3c-1.103 0-2 .897-2 2z`} />, <path d={`M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM4 18V6h16l.002 12H4z`} />]
    })}</svg>;
}
var yu = 2.5,
  bu = {
    left: {
      play: `M 7.5,4.5 L 13,8.25 L 13,15.75 L 7.5,19.5 Z`,
      pause: `M 6.5,5.5 L 9.5,5.5 L 9.5,18.5 L 6.5,18.5 Z`
    },
    right: {
      play: `M 13,8.25 L 18.5,12 L 18.5,12 L 13,15.75 Z`,
      pause: `M 14.5,5.5 L 17.5,5.5 L 17.5,18.5 L 14.5,18.5 Z`
    }
  };
function xu({
  isPlaying: e,
  className: t
}) {
  let n = e ? `pause` : `play`;
  return <svg viewBox={`0 0 24 24`} aria-hidden={!0} className={t}>{[(0, x.jsx)(Su, {
      d: bu.left[n]
    }), (0, x.jsx)(Su, {
      d: bu.right[n]
    })]}</svg>;
}
function Su({
  d: e
}) {
  return <path d={e} fill={`currentColor`} stroke={`currentColor`} strokeWidth={yu} strokeLinejoin={`round`} className={`[transition:d_200ms_cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none`} style={{
    d: `path("${e}")`
  }} />;
}
var Cu = 15,
  wu = [.25, .5, .75, 1, 1.25, 1.5, 1.75, 2],
  Tu = [.23, 1, .32, 1];
function Eu(e) {
  if (!Number.isFinite(e) || e < 0) return `0:00`;
  let t = Math.floor(e),
    n = Math.floor(t / 3600),
    r = Math.floor(t % 3600 / 60),
    i = t % 60,
    a = n > 0 ? String(r).padStart(2, `0`) : String(r),
    o = String(i).padStart(2, `0`);
  return n > 0 ? `${n}:${a}:${o}` : `${a}:${o}`;
}
function $(...e) {
  return e.filter(Boolean).join(` `);
}
var Du = `inline-flex items-center justify-center rounded-full border border-transparent bg-transparent text-white transition-[scale,opacity] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] motion-reduce:transition-none`;
function Ou({
  visible: e,
  isPlaying: t,
  disableSkip: n,
  glass: r,
  layerRef: i,
  onTogglePlay: a,
  onSeekBy: o
}) {
  let s = r !== `live`;
  return <div ref={i} aria-hidden={!e || s} className={`pointer-events-none absolute inset-0 flex items-center justify-center gap-2`}>{[!n && (0, x.jsx)(ku, {
      direction: `back`,
      visible: e,
      hidden: s,
      onClick: () => o(-Cu)
    }), <button type={`button`} onClick={a} aria-label={t ? `Pause` : `Play`} tabIndex={e && !s ? void 0 : -1} className={$(Du, `h-16 w-16 md:h-[88px] md:w-[88px]`, s && `invisible`, e ? `pointer-events-auto opacity-100` : `pointer-events-none opacity-0`)}>{(0, x.jsx)(xu, {
        isPlaying: t,
        className: `size-8 md:size-10`
      })}</button>, !n && (0, x.jsx)(ku, {
      direction: `forward`,
      visible: e,
      hidden: s,
      onClick: () => o(Cu)
    })]}</div>;
}
function ku({
  direction: e,
  visible: t,
  hidden: n,
  onClick: r
}) {
  let i = e === `back`,
    a = i ? d : _;
  return <button type={`button`} onClick={r} aria-label={`${i ? `Back` : `Forward`} ${Cu} seconds`} tabIndex={t && !n ? void 0 : -1} className={$(`group/skip shrink-0`, Du, `h-12 w-12 md:h-[66px] md:w-[66px]`, n && `invisible`, t ? `pointer-events-auto opacity-100` : `pointer-events-none opacity-0`)}>{<span aria-hidden={!0} className={$(`inline-flex transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none`, i ? `group-active/skip:-rotate-[20deg]` : `group-active/skip:rotate-[20deg]`)}>{(0, x.jsx)(a, {
        className: `size-4 md:size-6`,
        style: {
          transform: `scaleX(-1) scaleY(-1)`
        }
      })}</span>}</button>;
}
function Au({
  label: e,
  children: t,
  hidden: n,
  side: r = `top`,
  align: i = `center`
}) {
  let [a, o] = S.useState(!1),
    [s, c] = S.useState(!1),
    l = S.useRef(null),
    [u, d] = S.useState(null);
  S.useEffect(() => {
    c(!0);
  }, []), S.useEffect(() => {
    if (!a || !l.current) return;
    let e = () => {
      l.current && d(l.current.getBoundingClientRect());
    };
    return e(), window.addEventListener(`resize`, e), window.addEventListener(`scroll`, e, !0), () => {
      window.removeEventListener(`resize`, e), window.removeEventListener(`scroll`, e, !0);
    };
  }, [a]);
  let f = a && !n,
    p = u ? ju(u, r, i) : {},
    m = r === `top` ? `50% 100%` : `50% 0%`,
    h = r === `top` ? `translateY(2px)` : `translateY(-2px)`;
  return (0, x.jsxs)(x.Fragment, {
    children: [<span ref={l} className={`relative inline-flex`} onPointerEnter={() => o(!0)} onPointerLeave={() => o(!1)}>{t}</span>, s && u && (0, hu.createPortal)(<div className={`pointer-events-none fixed z-[60]`} style={p}>{<span role={`tooltip`} aria-hidden={!f} className={$(`block whitespace-nowrap rounded-md border border-white/10 bg-black/85 px-2 py-1 text-[11px] font-medium text-white shadow-[0_4px_18px_rgba(0,0,0,0.45)] backdrop-blur-xl`, `transition-[opacity,transform] duration-150 ease-out`, f ? `opacity-100` : `opacity-0`)} style={{
        transformOrigin: m,
        transform: f ? `scale(1)` : `scale(0.96) ${h}`
      }}>{e}</span>}</div>, document.body)]
  });
}
function ju(e, t, n) {
  let r = t === `top` ? e.top - 8 : e.bottom + 8,
    i = t === `top` ? `-100%` : `0%`;
  return n === `start` ? {
    top: r,
    left: e.left,
    transform: `translate(0, ${i})`
  } : n === `end` ? {
    top: r,
    left: e.right,
    transform: `translate(-100%, ${i})`
  } : {
    top: r,
    left: e.left + e.width / 2,
    transform: `translate(-50%, ${i})`
  };
}
function Mu({
  children: e,
  onClick: t,
  label: n,
  pressed: r,
  disabled: i,
  tooltipHidden: a,
  tooltipSide: o,
  tooltipAlign: s
}) {
  return (0, x.jsx)(Au, {
    label: n,
    hidden: i || a,
    side: o,
    align: s,
    children: <button type={`button`} onClick={t} aria-label={n} aria-pressed={r} disabled={i} className={$(`inline-flex h-8 min-w-8 items-center justify-center gap-1 rounded-lg px-2 text-white/85 transition-colors duration-150 hover:bg-white/12 hover:text-white disabled:cursor-not-allowed disabled:text-white/35 disabled:hover:bg-transparent disabled:hover:text-white/35`, r && `bg-white/12 text-white`)}>{e}</button>
  });
}
var Nu = {
    blurAmount: 0
  },
  Pu = 50,
  Fu = 48,
  Iu = .34,
  Lu = .78,
  Ru = .32,
  zu = .08,
  Bu = 7,
  Vu = .7;
function Hu(e) {
  return Math.min(Vu, zu + e * Bu);
}
var Uu = .2,
  Wu = () => {};
function Gu(e, t) {
  let n = e.getBoundingClientRect(),
    r = t.getBoundingClientRect();
  return {
    x: n.left - r.left,
    y: n.top - r.top,
    w: n.width,
    h: n.height
  };
}
function Ku(e) {
  let t = document.createElement(`canvas`),
    n = t.getContext(`2d`, {
      willReadFrequently: !0
    }),
    r = null,
    i = n === null;
  return {
    get blind() {
      return i;
    },
    read() {
      if (i || !n) return !1;
      let a = e.videoWidth,
        o = e.videoHeight;
      if (a === 0 || o === 0) return !1;
      let s = Fu,
        c = Math.max(1, Math.round(o / a * Fu));
      (t.width !== s || t.height !== c) && (t.width = s, t.height = c);
      try {
        n.drawImage(e, 0, 0, s, c), r = n.getImageData(0, 0, s, c);
      } catch {
        return i = !0, r = null, !1;
      }
      return !0;
    },
    luminanceOf(e, t, n, i) {
      if (!r) return null;
      let {
          width: a,
          height: o,
          data: s
        } = r,
        c = Math.max(0, Math.min(a - 1, Math.floor(e * a))),
        l = Math.max(0, Math.min(o - 1, Math.floor(t * o))),
        u = Math.max(c + 1, Math.min(a, Math.ceil((e + n) * a))),
        d = Math.max(l + 1, Math.min(o, Math.ceil((t + i) * o))),
        f = 0,
        p = 0;
      for (let e = l; e < d; e++) for (let t = c; t < u; t++) {
        let n = (e * a + t) * 4;
        f += .2126 * s[n] + .7152 * s[n + 1] + .0722 * s[n + 2], p++;
      }
      return p === 0 ? null : f / p / 255;
    }
  };
}
function qu(e) {
  let t = (e - Iu) / (Lu - Iu);
  return Math.max(0, Math.min(1, t)) * Ru;
}
function Ju(e, t) {
  return e.getBoundingClientRect().height > 0 ? Promise.resolve(!0) : new Promise(n => {
    let r = e => {
        a.disconnect(), clearTimeout(o), t.removeEventListener(`abort`, i), n(e);
      },
      i = () => r(!1),
      a = new ResizeObserver(() => {
        e.getBoundingClientRect().height > 0 && r(!0);
      }),
      o = setTimeout(() => r(!1), 1e4);
    a.observe(e), t.addEventListener(`abort`, i, {
      once: !0
    });
  });
}
function Yu(e) {
  return document.visibilityState === `visible` ? Promise.resolve(!0) : new Promise(t => {
    let n = n => {
        document.removeEventListener(`visibilitychange`, r), e.removeEventListener(`abort`, i), t(n);
      },
      r = () => {
        document.visibilityState === `visible` && n(!0);
      },
      i = () => n(!1);
    document.addEventListener(`visibilitychange`, r), e.addEventListener(`abort`, i, {
      once: !0
    });
  });
}
function Xu(e, t) {
  let n = `requestVideoFrameCallback` in e;
  return !e.paused && !n ? Promise.resolve(!0) : new Promise(r => {
    let i = 0,
      a = n => {
        i && e.cancelVideoFrameCallback(i), e.removeEventListener(`seeked`, o), e.removeEventListener(`loadedmetadata`, c), t.removeEventListener(`abort`, s), r(n);
      },
      o = () => a(!0),
      s = () => a(!1),
      c = () => {
        e.currentTime = e.currentTime;
      };
    t.addEventListener(`abort`, s, {
      once: !0
    }), n && (i = e.requestVideoFrameCallback(o)), e.addEventListener(`seeked`, o), e.paused && (e.preload = `auto`, e.readyState >= HTMLMediaElement.HAVE_METADATA ? c() : e.addEventListener(`loadedmetadata`, c, {
      once: !0
    }));
  });
}
var Zu = 15e3;
function Qu(e) {
  let t = !1;
  return Promise.race([e.then(e => {
    if (t) throw e.destroy(), Error(`glass: init resolved after its deadline`);
    return e;
  }), new Promise((e, n) => {
    setTimeout(() => {
      t = !0, n(Error(`glass: init did not settle`));
    }, Zu);
  })]);
}
async function $u({
  root: e,
  video: t,
  layer: n
}, r) {
  let i = {
    live: !1,
    teardown: Wu
  };
  if (!(await Ju(e, r)) || r.aborted) return i;
  let a = Array.from(n.querySelectorAll(`button`));
  if (a.length === 0 || !(await Yu(r)) || r.aborted || !(await Xu(t, r)) || r.aborted) return i;
  let {
    LiquidGlass: o
  } = await c(async () => {
    let {
      LiquidGlass: e
    } = await import(`./liquidglass-L6NV62W4-BFipGF63.js`);
    return {
      LiquidGlass: e
    };
  }, []);
  if (r.aborted) return i;
  let s = a.map(t => {
      let r = document.createElement(`div`);
      r.setAttribute(`aria-hidden`, `true`), r.dataset.slot = `loomix-glass`, r.style.position = `absolute`, r.style.isolation = `isolate`, r.style.pointerEvents = `none`, r.style.opacity = `0`, e.insertBefore(r, n);
      let i = document.createElement(`div`);
      return i.setAttribute(`aria-hidden`, `true`), i.dataset.slot = `loomix-glass-scrim`, i.style.position = `absolute`, i.style.pointerEvents = `none`, i.style.background = `rgb(0 0 0)`, i.style.opacity = `0`, e.insertBefore(i, n), {
        button: t,
        panel: r,
        scrim: i
      };
    }),
    l = () => {
      for (let {
        panel: e,
        scrim: t
      } of s) e.remove(), t.remove();
    },
    u = Ku(t),
    d = !1,
    f = a[0],
    p = () => d ? (Number(getComputedStyle(n).opacity) || 0) * (Number(getComputedStyle(f).opacity) || 0) : 0,
    m = () => {
      let t = p();
      if (t === 0) {
        for (let {
          panel: e,
          scrim: t
        } of s) e.style.opacity !== `0` && (e.style.opacity = `0`), t.style.opacity !== `0` && (t.style.opacity = `0`);
        return;
      }
      let n = e.getBoundingClientRect();
      for (let {
        button: e,
        panel: r,
        scrim: i
      } of s) {
        let a = e.getBoundingClientRect(),
          o = a.width,
          s = a.height;
        if (o === 0 || s === 0) {
          r.style.opacity = `0`, i.style.opacity = `0`;
          continue;
        }
        let c = a.left - n.left,
          l = a.top - n.top,
          u = Math.round(s / 2),
          d = `${c}px|${l}px|${o}px|${s}px|${u}`;
        r.dataset.box !== d && (r.dataset.box = d, r.style.left = `${c}px`, r.style.top = `${l}px`, r.style.width = `${o}px`, r.style.height = `${s}px`, r.dataset.config = JSON.stringify({
          ...Nu,
          cornerRadius: u,
          zRadius: u
        }), i.style.left = `${c}px`, i.style.top = `${l}px`, i.style.width = `${o}px`, i.style.height = `${s}px`, i.style.borderRadius = `${u}px`);
        let f = String(t);
        r.style.opacity !== f && (r.style.opacity = f);
        let p = Number(i.dataset.level ?? `0`),
          m = p + (Number(i.dataset.target ?? `0`) - p) * Number(i.dataset.rate ?? String(zu));
        i.dataset.level = String(m);
        let h = (t * m).toFixed(3);
        i.style.opacity !== h && (i.style.opacity = h);
      }
    },
    h = 0,
    g = -1,
    _ = n => {
      if (!d || u.blind || n - h < Pu || (h = n, p() === 0) || t.seeking || t.paused && t.currentTime === g || !u.read()) return;
      g = t.paused ? t.currentTime : -1;
      let r = Gu(t, e);
      if (r.w !== 0 && r.h !== 0) for (let {
        button: t,
        scrim: n
      } of s) {
        let i = Gu(t, e),
          a = u.luminanceOf((i.x - r.x) / r.w, (i.y - r.y) / r.h, i.w / r.w, i.h / r.h);
        if (a === null) continue;
        let o = qu(a);
        n.dataset.rate = String(Hu(Math.abs(o - Number(n.dataset.level ?? `0`)))), n.dataset.target = String(o);
      }
    };
  if (u.blind) for (let {
    scrim: e
  } of s) e.dataset.rate = String(Vu), e.dataset.target = String(Uu);
  m();
  let v;
  try {
    v = await Qu(o.init({
      root: e,
      glassElements: s.map(e => e.panel)
    }));
  } catch {
    return l(), i;
  }
  if (r.aborted) return v.destroy(), l(), i;
  d = !0, m();
  let y = requestAnimationFrame(function e(t) {
    _(t), m(), y = requestAnimationFrame(e);
  });
  return {
    live: !0,
    teardown: () => {
      cancelAnimationFrame(y), v.destroy(), l();
    }
  };
}
function ed(e, t) {
  let [n, r] = S.useState(`pending`),
    [i, a] = S.useState(t);
  return td(i, t) || (a(t), r(`pending`)), S.useEffect(() => {
    let t = e.root.current,
      n = e.video.current,
      i = e.layer.current;
    if (!t || !n || !i) {
      r(`off`);
      return;
    }
    let a = new AbortController(),
      o = null;
    return $u({
      root: t,
      video: n,
      layer: i
    }, a.signal).then(({
      live: e,
      teardown: t
    }) => {
      if (a.signal.aborted) {
        t();
        return;
      }
      o = t, r(e ? `live` : `off`);
    }), () => {
      a.abort(), o?.();
    };
  }, t), n;
}
function td(e, t) {
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n += 1) if (!Object.is(e[n], t[n])) return !1;
  return !0;
}
function nd() {
  let [e, t] = S.useState(!0);
  return S.useEffect(() => {
    let e = window.matchMedia(`(hover: hover)`);
    t(e.matches);
    let n = e => t(e.matches);
    return e.addEventListener(`change`, n), () => e.removeEventListener(`change`, n);
  }, []), e;
}
function rd(e, t) {
  let [n, r] = S.useState(null);
  return S.useEffect(() => {
    if (!t || !e.current) {
      r(null);
      return;
    }
    let n = () => {
      e.current && r(e.current.getBoundingClientRect());
    };
    return n(), window.addEventListener(`resize`, n), window.addEventListener(`scroll`, n, !0), () => {
      window.removeEventListener(`resize`, n), window.removeEventListener(`scroll`, n, !0);
    };
  }, [t, e]), n;
}
var id = [{
    transform: `translate(-66%, -66%)`,
    easing: `linear`
  }, {
    transform: `translate(66%, 66%)`
  }],
  ad = [{
    opacity: .35,
    easing: `ease-in-out`
  }, {
    opacity: 1,
    easing: `ease-in-out`
  }, {
    opacity: .35
  }];
function od({
  ariaLabel: e,
  className: t
}) {
  let n = S.useRef(null);
  return S.useEffect(() => {
    let e = n.current;
    if (!e || typeof e.animate != `function`) return;
    if (window.matchMedia(`(prefers-reduced-motion: reduce)`).matches) {
      e.style.transform = `none`;
      let t = e.animate(ad, {
        duration: 3200,
        iterations: 1 / 0
      });
      return () => t.cancel();
    }
    let t = e.animate(id, {
      duration: 1500,
      iterations: 1 / 0
    });
    return () => t.cancel();
  }, []), <div role={`status`} aria-label={e ?? `Loading video`} className={$(`relative aspect-video w-full overflow-hidden rounded-xl border bg-neutral-900`, t)}>{<div ref={n} aria-hidden={!0} className={`pointer-events-none absolute inset-0 will-change-transform`} style={{
      transform: `translate(-66%, -66%)`
    }}>{<div className={`absolute top-1/2 left-1/2 h-[480%] w-[46%]`} style={{
        transform: `translate(-50%, -50%) rotate(30deg)`,
        filter: `blur(18px)`,
        background: `linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.014) 18%, rgba(255,255,255,0.045) 34%, rgba(255,255,255,0.11) 50%, rgba(255,255,255,0.045) 66%, rgba(255,255,255,0.014) 82%, rgba(255,255,255,0) 100%)`
      }} />}</div>}</div>;
}
function sd({
  duration: e,
  currentTime: t,
  progressPercent: n,
  bufferedPercent: r,
  hoverPercent: i,
  isScrubbing: a,
  inline: o,
  onPointerDown: s,
  onPointerMove: c,
  onPointerLeave: l,
  onPointerRelease: u
}) {
  return <div role={`slider`} aria-label={`Seek`} aria-valuemin={0} aria-valuemax={e || 0} aria-valuenow={t} tabIndex={-1} onPointerDown={s} onPointerMove={c} onPointerLeave={l} onPointerUp={u} onPointerCancel={u} className={$(`pointer-events-auto relative flex h-5 cursor-crosshair touch-none items-center select-none`, o && `min-w-0 flex-1`)}>{[<div className={`relative h-[3px] w-full rounded-full bg-white/20`}>{[<div className={`absolute inset-y-0 left-0 rounded-full bg-white/35`} style={{
        width: `${r}%`
      }} />, <div className={`absolute inset-y-0 left-0 rounded-full bg-white`} style={{
        width: `${n}%`
      }}>{<div className={`pointer-events-none absolute top-1/2 right-0 h-3 w-3 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.4)]`} style={{
          transform: `translate(50%, -50%) scale(${a || i !== null ? 1 : 0})`,
          transition: `transform 150ms cubic-bezier(0.23, 1, 0.32, 1)`
        }} />}</div>]}</div>, i !== null && <div className={`pointer-events-none absolute top-1/2 h-4 w-px -translate-x-1/2 -translate-y-1/2 bg-white`} style={{
      left: `${i * 100}%`
    }} />, i !== null && e > 0 && <div className={`pointer-events-none absolute -translate-x-1/2 font-mono whitespace-nowrap text-[12px] tabular-nums`} style={{
      left: `${i * 100}%`,
      bottom: `calc(100% + 8px)`
    }} ref={e => {
      let t = e?.offsetParent;
      if (!e || !t) return;
      let n = e.offsetWidth / 2,
        r = i * t.clientWidth;
      e.style.left = `${Math.min(Math.max(r, n), t.clientWidth - n)}px`;
    }}>{[<span className={`text-white`}>{Eu(i * e)}</span>, <span className={`text-white/45`}>{[` / `, Eu(e)]}</span>]}</div>]}</div>;
}
function cd({
  popoverRef: e,
  triggerRect: t,
  speed: n,
  highlightedIndex: r,
  onHighlight: i,
  onSelect: a
}) {
  return (0, x.jsx)(gu.div, {
    ref: e,
    initial: {
      opacity: 0,
      y: 6,
      scale: .98
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1
    },
    exit: {
      opacity: 0,
      y: 6,
      scale: .98
    },
    transition: {
      duration: .16,
      ease: Tu
    },
    role: `menu`,
    "aria-label": `Playback speed`,
    style: {
      position: `fixed`,
      bottom: document.documentElement.clientHeight - t.top + 8,
      right: document.documentElement.clientWidth - t.right,
      zIndex: 60
    },
    className: `flex w-[120px] flex-col rounded-2xl border border-white/12 bg-neutral-900/90 p-1.5 shadow-[0_18px_40px_rgba(0,0,0,0.55)] backdrop-blur-xl`,
    children: wu.map((e, t) => {
      let o = e === n,
        s = t === r;
      return <button type={`button`} role={`menuitemradio`} aria-checked={o} data-highlighted={s ? `true` : void 0} onMouseEnter={() => i(t)} onClick={() => a(e)} className={$(`relative flex items-center justify-between rounded-xl px-3 py-1.5 text-left text-[13px] transition-colors duration-0`, o ? `bg-[#2f6bff] text-white` : $(`text-white/85 hover:bg-white/10`, s && `bg-white/10`))} key={e}>{<span className={`inline-flex items-center gap-1.5`}>{[o ? (0, x.jsx)(u, {
            size: 13,
            "aria-hidden": !0
          }) : <span className={`inline-block w-[13px]`} aria-hidden={!0} />, e, `×`]}</span>}</button>;
    })
  }, `speed-popover`);
}
function ld({
  title: e,
  youtubeUrl: t,
  onClose: n
}) {
  return (0, x.jsxs)(gu.div, {
    initial: {
      opacity: 0,
      y: -8
    },
    animate: {
      opacity: 1,
      y: 0
    },
    exit: {
      opacity: 0,
      y: -8
    },
    transition: {
      duration: .22,
      ease: Tu
    },
    className: `pointer-events-none absolute inset-x-0 top-0 z-10 flex items-start justify-between gap-3 px-3 pt-3`,
    children: [<div aria-hidden={!0} className={`pointer-events-none absolute inset-x-0 top-0 -z-10 h-24`} style={{
      background: `linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0) 100%)`
    }} />, e ? <div className={`pointer-events-auto min-w-0 max-w-[60%] truncate pt-1 pl-1 text-[15px] font-medium text-white/95`} style={{
      textShadow: `0 1px 12px rgba(0,0,0,0.55)`
    }}>{e}</div> : <div />, <div className={`pointer-events-auto ml-auto flex items-center gap-1.5`}>{[t && <a href={t} target={`_blank`} rel={`noreferrer noopener`} className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-[12.5px] font-medium whitespace-nowrap text-white/90 backdrop-blur-xl transition-colors duration-150 hover:bg-black/60 hover:text-white`}>{[(0, x.jsx)(b, {
          size: 15,
          "aria-hidden": !0
        }), `Watch on YouTube`]}</a>, n && (0, x.jsx)(Au, {
        label: `Close`,
        side: `bottom`,
        children: <button type={`button`} onClick={n} aria-label={`Close`} className={`inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white/90 backdrop-blur-xl transition-colors duration-150 hover:bg-black/60 hover:text-white`}>{<svg viewBox={`0 0 16 16`} width={12} height={12} aria-hidden={!0}>{<path d={`M3 3 L13 13 M13 3 L3 13`} stroke={`currentColor`} strokeWidth={1.6} strokeLinecap={`round`} />}</svg>}</button>
      })]}</div>]
  }, `top-bar`);
}
function ud({
  videoRef: e,
  hasCaptions: t,
  speedOpen: n,
  highlightedSpeedIndex: r,
  setHighlightedSpeedIndex: i,
  setSpeed: a,
  setSpeedOpen: o,
  setCaptionsEnabled: s,
  setVolume: c,
  setIsMuted: l,
  togglePlay: u,
  toggleMute: d,
  toggleFullscreen: f
}) {
  return S.useCallback(p => {
    if (p.target instanceof HTMLInputElement) return;
    let m = e.current;
    if (m) {
      if (n) switch (p.key) {
        case `ArrowDown`:
          p.preventDefault(), i(e => Math.min(wu.length - 1, (e < 0 ? -1 : e) + 1));
          return;
        case `ArrowUp`:
          p.preventDefault(), i(e => Math.max(0, (e < 0 ? wu.length : e) - 1));
          return;
        case `Home`:
          p.preventDefault(), i(0);
          return;
        case `End`:
          p.preventDefault(), i(wu.length - 1);
          return;
        case `Enter`:
        case ` `:
          {
            p.preventDefault();
            let e = wu[r];
            e !== void 0 && a(e), o(!1);
            return;
          }
        case `Escape`:
        case `Tab`:
          p.preventDefault(), o(!1);
          return;
        default:
          return;
      }
      switch (p.key) {
        case ` `:
        case `k`:
        case `K`:
          p.preventDefault(), u();
          break;
        case `m`:
        case `M`:
          p.preventDefault(), d();
          break;
        case `f`:
        case `F`:
          p.preventDefault(), f();
          break;
        case `c`:
        case `C`:
          t && (p.preventDefault(), s(e => !e));
          break;
        case `ArrowLeft`:
          p.preventDefault(), m.currentTime = Math.max(0, m.currentTime - 5);
          break;
        case `ArrowRight`:
          p.preventDefault(), m.currentTime = Math.min(m.duration || m.currentTime + 5, m.currentTime + 5);
          break;
        case `ArrowUp`:
          p.preventDefault(), c(e => Math.min(1, e + .05)), l(!1);
          break;
        case `ArrowDown`:
          p.preventDefault(), c(e => Math.max(0, e - .05));
      }
    }
  }, [e, t, n, r, i, a, o, s, c, l, u, d, f]);
}
function dd({
  popoverRef: e,
  triggerRect: t,
  volume: n,
  isMuted: r,
  onVolumeChange: i,
  onPointerEnter: a,
  onPointerLeave: o
}) {
  let s = r ? 0 : n;
  return (0, x.jsx)(gu.div, {
    ref: e,
    initial: {
      opacity: 0,
      y: 6,
      x: `-50%`
    },
    animate: {
      opacity: 1,
      y: 0,
      x: `-50%`
    },
    exit: {
      opacity: 0,
      y: 6,
      x: `-50%`
    },
    transition: {
      duration: .16,
      ease: Tu
    },
    role: `group`,
    "aria-label": `Volume`,
    style: {
      position: `fixed`,
      bottom: document.documentElement.clientHeight - t.top + 8,
      left: t.left + t.width / 2,
      zIndex: 60
    },
    className: `rounded-full border border-white/12 bg-neutral-900/85 px-2 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.45)] backdrop-blur-xl`,
    onPointerEnter: a,
    onPointerLeave: o,
    children: <div className={`relative h-20 w-2.5`}>{[<div className={`pointer-events-none absolute inset-y-0 left-1/2 w-1 -translate-x-1/2 overflow-hidden rounded-full bg-white/15`}>{<div className={`absolute inset-x-0 bottom-0 bg-white`} style={{
          height: `${s * 100}%`
        }} />}</div>, <div className={`pointer-events-none absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.4)]`} style={{
        bottom: `calc(${s * 100}% - 5px)`
      }} />, <input type={`range`} min={0} max={1} step={.01} value={s} onChange={e => i(Number(e.target.value))} aria-label={`Volume`} className={`absolute inset-0 h-full w-full cursor-pointer opacity-0`} style={{
        writingMode: `vertical-lr`,
        direction: `rtl`
      }} />]}</div>
  }, `volume-popover`);
}
function fd({
  src: e,
  poster: t,
  title: n,
  youtubeUrl: r,
  onClose: i,
  captions: a,
  ariaLabel: o,
  autoPlay: s = !1,
  autoFocus: c = !1,
  muted: l = !1,
  loop: u = !1,
  disablePictureInPicture: d = !1,
  disableSkip: _ = !1,
  disableVolume: b = !1,
  disableSpeed: C = !1,
  disableFullscreen: w = !1,
  loading: T = !1,
  className: E,
  videoClassName: ee,
  onPlayingChange: te
}) {
  let D = !!a && a.length > 0,
    O = !D && _ && b && C && d && w,
    ne = S.useRef(null),
    k = S.useRef(null),
    re = S.useRef(null),
    ie = S.useRef(null),
    A = S.useRef(null),
    ae = S.useRef(null),
    oe = S.useRef(null),
    se = S.useRef(null),
    j = S.useRef(null),
    M = nd(),
    ce = ed({
      root: ne,
      video: k,
      layer: re
    }, [e, _, T]),
    [le, ue] = S.useState(!1);
  S.useEffect(() => ue(!0), []);
  let [N, de] = S.useState(!1),
    [fe, pe] = S.useState(0),
    [me, he] = S.useState(0),
    [ge, _e] = S.useState(0),
    [ve, ye] = S.useState(1),
    [be, xe] = S.useState(l),
    [Se, Ce] = S.useState(1),
    [we, Te] = S.useState(() => a?.some(e => e.default) ?? !1),
    [Ee, De] = S.useState(!1),
    [Oe, ke] = S.useState(!1),
    [Ae, je] = S.useState(!0),
    [P, Me] = S.useState(!1),
    [F, I] = S.useState(-1),
    [L, Ne] = S.useState(!1),
    [Pe, Fe] = S.useState(!1),
    [R, Ie] = S.useState(null),
    Le = P || L || Pe || !N,
    Re = Ae || Le,
    ze = rd(A, P),
    Be = rd(oe, L),
    Ve = S.useCallback(() => {
      j.current !== null && (window.clearTimeout(j.current), j.current = null);
    }, []),
    He = S.useCallback(() => {
      Ve(), Ne(!0);
    }, [Ve]),
    Ue = S.useCallback(() => {
      Ve(), j.current = window.setTimeout(() => {
        Ne(!1), j.current = null;
      }, 140);
    }, [Ve]);
  S.useEffect(() => () => Ve(), [Ve]), S.useEffect(() => {
    if (!P) return;
    let e = e => {
      let t = e.target;
      t && (A.current?.contains(t) || ae.current?.contains(t) || Me(!1));
    };
    return document.addEventListener(`pointerdown`, e), () => document.removeEventListener(`pointerdown`, e);
  }, [P]), S.useEffect(() => {
    if (!L) return;
    let e = e => {
      let t = e.target;
      t && (oe.current?.contains(t) || se.current?.contains(t) || Ne(!1));
    };
    return document.addEventListener(`pointerdown`, e), () => document.removeEventListener(`pointerdown`, e);
  }, [L]);
  let We = S.useCallback(() => {
      if (ie.current !== null && window.clearTimeout(ie.current), Le) {
        je(!0);
        return;
      }
      ie.current = window.setTimeout(() => {
        je(!1);
      }, 2200);
    }, [Le]),
    Ge = S.useCallback(() => {
      je(!0), We();
    }, [We]);
  S.useEffect(() => (We(), () => {
    ie.current !== null && window.clearTimeout(ie.current);
  }), [We]), S.useEffect(() => {
    if (!c) return;
    let e = window.requestAnimationFrame(() => {
      ne.current?.focus({
        preventScroll: !0
      });
    });
    return () => window.cancelAnimationFrame(e);
  }, [c]), S.useEffect(() => {
    if (!P) {
      I(-1);
      return;
    }
    let e = wu.indexOf(Se);
    I(e >= 0 ? e : 0);
  }, [P, Se]), S.useEffect(() => {
    let e = k.current;
    e && (e.volume = ve, e.muted = be);
  }, [ve, be]), S.useEffect(() => {
    let e = k.current;
    e && (e.playbackRate = Se);
  }, [Se]), S.useEffect(() => {
    let e = k.current;
    if (!e) return;
    let t = e.textTracks;
    for (let e = 0; e < t.length; e += 1) {
      let n = t[e];
      n && (n.mode = we && e === 0 ? `showing` : `hidden`);
    }
  }, [we, a]), S.useEffect(() => {
    te?.(N);
  }, [N, te]), S.useEffect(() => {
    let e = k.current;
    e && (e.readyState >= HTMLMediaElement.HAVE_METADATA && he(Number.isFinite(e.duration) ? e.duration : 0), de(!e.paused));
  }, [e]), S.useEffect(() => {
    let e = () => {
      let e = document.fullscreenElement;
      ke(e === ne.current);
    };
    return document.addEventListener(`fullscreenchange`, e), () => document.removeEventListener(`fullscreenchange`, e);
  }, []), S.useEffect(() => {
    let e = k.current;
    if (!e) return;
    let t = () => ke(!0),
      n = () => ke(!1);
    return e.addEventListener(`webkitbeginfullscreen`, t), e.addEventListener(`webkitendfullscreen`, n), () => {
      e.removeEventListener(`webkitbeginfullscreen`, t), e.removeEventListener(`webkitendfullscreen`, n);
    };
  }, []), S.useEffect(() => {
    let e = k.current;
    if (!e) return;
    let t = () => De(!0),
      n = () => De(!1);
    return e.addEventListener(`enterpictureinpicture`, t), e.addEventListener(`leavepictureinpicture`, n), () => {
      e.removeEventListener(`enterpictureinpicture`, t), e.removeEventListener(`leavepictureinpicture`, n);
    };
  }, []);
  let Ke = S.useCallback(() => {
      let e = k.current;
      e && (e.paused ? e.play().catch(() => {}) : e.pause());
    }, []),
    qe = S.useCallback(e => {
      let t = k.current;
      if (!t) return;
      let n = Number.isFinite(t.duration) ? t.duration : 1 / 0;
      t.currentTime = Math.min(n, Math.max(0, t.currentTime + e));
    }, []),
    Je = S.useCallback(() => {
      xe(e => !e);
    }, []),
    Ye = S.useCallback(async () => {
      let e = k.current;
      if (e) try {
        document.pictureInPictureElement === e ? await document.exitPictureInPicture() : document.pictureInPictureEnabled && (await e.requestPictureInPicture());
      } catch {}
    }, []),
    Xe = S.useCallback(async () => {
      let e = ne.current,
        t = k.current;
      if (!e) return;
      let n = t;
      if (typeof e.requestFullscreen == `function`) try {
        document.fullscreenElement === e ? await document.exitFullscreen() : await e.requestFullscreen();
        return;
      } catch {}
      if (n && typeof n.webkitEnterFullscreen == `function`) try {
        n.webkitDisplayingFullscreen ? n.webkitExitFullscreen?.() : n.webkitEnterFullscreen();
      } catch {}
    }, []),
    Ze = S.useCallback(e => {
      let t = k.current;
      if (!t || !Number.isFinite(t.duration)) return;
      let n = Math.max(0, Math.min(1, e));
      t.currentTime = n * t.duration, pe(n * t.duration);
    }, []),
    Qe = S.useCallback(e => {
      e.preventDefault();
      let t = e.currentTarget;
      t.setPointerCapture(e.pointerId), Fe(!0);
      let n = t.getBoundingClientRect(),
        r = (e.clientX - n.left) / n.width;
      Ze(r);
    }, [Ze]),
    $e = S.useCallback(e => {
      let t = e.currentTarget.getBoundingClientRect(),
        n = (e.clientX - t.left) / t.width;
      Ie(Math.max(0, Math.min(1, n))), e.buttons === 1 && Ze(n);
    }, [Ze]),
    et = S.useCallback(() => {
      Ie(null);
    }, []),
    tt = S.useCallback(e => {
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {}
      Fe(!1);
    }, []),
    nt = ud({
      videoRef: k,
      hasCaptions: D,
      speedOpen: P,
      highlightedSpeedIndex: F,
      setHighlightedSpeedIndex: I,
      setSpeed: Ce,
      setSpeedOpen: Me,
      setCaptionsEnabled: Te,
      setVolume: ye,
      setIsMuted: xe,
      togglePlay: Ke,
      toggleMute: Je,
      toggleFullscreen: Xe
    }),
    z = me > 0 ? Math.min(100, fe / me * 100) : 0,
    B = me > 0 ? Math.min(100, ge / me * 100) : 0,
    V = be || ve === 0 ? y : ve < .5 ? v : f;
  return T ? (0, x.jsx)(od, {
    ariaLabel: o,
    className: E
  }) : <div ref={ne} tabIndex={0} role={`region`} aria-label={o ?? `Video player`} data-glass={ce} onKeyDown={nt} onPointerMove={Ge} onPointerLeave={() => {
    Le || je(!1);
  }} className={$(`group/loomix relative isolate aspect-video w-full overflow-hidden rounded-xl border bg-black text-white outline-none focus-visible:ring-2 focus-visible:ring-white/50`, E)}>{[<video ref={k} src={e} poster={t} playsInline={!0} autoPlay={s} loop={u} crossOrigin={a ? `anonymous` : void 0} onClick={Ke} onPlay={() => de(!0)} onPause={() => de(!1)} onTimeUpdate={e => {
      pe(e.currentTarget.currentTime);
    }} onLoadedMetadata={e => {
      he(e.currentTarget.duration || 0), e.currentTarget.playbackRate = Se;
    }} onDurationChange={e => {
      he(e.currentTarget.duration || 0);
    }} onProgress={e => {
      let t = e.currentTarget;
      t.buffered.length > 0 && _e(t.buffered.end(t.buffered.length - 1));
    }} onVolumeChange={e => {
      ye(e.currentTarget.volume), xe(e.currentTarget.muted);
    }} className={$(`block h-full w-full cursor-pointer object-contain bg-black`, ee)}>{a?.map(e => <track kind={`subtitles`} src={e.src} srcLang={e.srcLang} label={e.label} default={e.default} key={`${e.srcLang}-${e.src}`} />)}</video>, (0, x.jsx)(Ou, {
      visible: Re,
      isPlaying: N,
      disableSkip: _,
      glass: ce,
      layerRef: re,
      onTogglePlay: Ke,
      onSeekBy: qe
    }), (0, x.jsx)(vc, {
      children: (Ae || Le) && (n || r || i) && (0, x.jsx)(ld, {
        title: n,
        youtubeUrl: r,
        onClose: i
      })
    }), (0, x.jsx)(vc, {
      children: (Ae || Le) && (0, x.jsxs)(gu.div, {
        initial: {
          opacity: 0,
          y: 8
        },
        animate: {
          opacity: 1,
          y: 0
        },
        exit: {
          opacity: 0,
          y: 8
        },
        transition: {
          duration: .22,
          ease: Tu
        },
        className: $(`pointer-events-none absolute inset-x-0 bottom-0 z-10 px-3 pb-3`, O ? `flex items-center gap-2` : `flex flex-col gap-2`),
        children: [<div aria-hidden={!0} className={`pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32`} style={{
          background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.78) 100%)`
        }} />, O && <div className={`pointer-events-auto text-white`}>{(0, x.jsx)(Mu, {
            onClick: Ke,
            label: N ? `Pause` : `Play`,
            children: (0, x.jsx)(xu, {
              isPlaying: N,
              className: `size-[18px]`
            })
          })}</div>, (0, x.jsx)(sd, {
          duration: me,
          currentTime: fe,
          progressPercent: z,
          bufferedPercent: B,
          hoverPercent: R,
          isScrubbing: Pe,
          inline: O,
          onPointerDown: Qe,
          onPointerMove: $e,
          onPointerLeave: et,
          onPointerRelease: tt
        }), O ? <div className={`inline-flex shrink-0 items-baseline gap-1 font-mono text-[12px] tabular-nums text-white/85`}>{[<span>{Eu(fe)}</span>, <span className={`text-white/40`}>{`/`}</span>, <span className={`text-white/55`}>{Eu(me)}</span>]}</div> : <div className={`pointer-events-auto flex items-center gap-1 text-white`}>{[(0, x.jsx)(Mu, {
            onClick: Ke,
            label: N ? `Pause` : `Play`,
            children: (0, x.jsx)(xu, {
              isPlaying: N,
              className: `size-[18px]`
            })
          }), !b && <div className={`relative`} ref={oe} onPointerEnter={M ? He : void 0} onPointerLeave={M ? Ue : void 0}>{(0, x.jsx)(Mu, {
              onClick: M ? Je : () => Ne(e => !e),
              label: be ? `Unmute` : `Mute`,
              tooltipHidden: L,
              children: (0, x.jsx)(V, {
                size: 18,
                "aria-hidden": !0
              })
            })}</div>, <div className={`ml-1 inline-flex items-baseline gap-1 font-mono text-[12px] tabular-nums text-white/85`}>{[<span>{Eu(fe)}</span>, <span className={`text-white/40`}>{`/`}</span>, <span className={`text-white/55`}>{Eu(me)}</span>]}</div>, <div className={`ml-auto flex items-center gap-1`}>{[D && (0, x.jsx)(Mu, {
              onClick: () => Te(e => !e),
              label: we ? `Turn captions off` : `Turn captions on`,
              pressed: we,
              children: (0, x.jsx)(vu, {
                active: we
              })
            }), !C && <div className={`relative`} ref={A}>{(0, x.jsx)(Mu, {
                onClick: () => Me(e => !e),
                label: `Playback speed`,
                pressed: P,
                tooltipHidden: P,
                children: <span className={`font-mono text-[12px] tabular-nums`}>{[Se, `×`]}</span>
              })}</div>, !d && (0, x.jsx)(Mu, {
              onClick: Ye,
              label: Ee ? `Exit picture in picture` : `Picture in picture`,
              pressed: Ee,
              children: Ee ? (0, x.jsx)(h, {
                size: 17,
                "aria-hidden": !0
              }) : (0, x.jsx)(g, {
                size: 17,
                "aria-hidden": !0
              })
            }), !w && (0, x.jsx)(Mu, {
              onClick: Xe,
              label: Oe ? `Exit fullscreen` : `Fullscreen`,
              pressed: Oe,
              children: Oe ? (0, x.jsx)(m, {
                size: 17,
                "aria-hidden": !0
              }) : (0, x.jsx)(p, {
                size: 17,
                "aria-hidden": !0
              })
            })]}</div>]}</div>]
      }, `controls`)
    }), le && (0, hu.createPortal)((0, x.jsx)(vc, {
      children: P && ze && (0, x.jsx)(cd, {
        popoverRef: ae,
        triggerRect: ze,
        speed: Se,
        highlightedIndex: F,
        onHighlight: I,
        onSelect: e => {
          Ce(e), Me(!1);
        }
      })
    }), document.body), le && (0, hu.createPortal)((0, x.jsx)(vc, {
      children: L && Be && (0, x.jsx)(dd, {
        popoverRef: se,
        triggerRect: Be,
        volume: ve,
        isMuted: be,
        onVolumeChange: e => {
          ye(e), xe(e === 0);
        },
        onPointerEnter: M ? He : void 0,
        onPointerLeave: M ? Ue : void 0
      })
    }), document.body)]}</div>;
}
var pd = r({
    attachGlassControls: () => zd,
    scrimFor: () => jd
  }),
  md = {
    blurAmount: 0
  },
  hd = 50,
  gd = 48,
  _d = .34,
  vd = .32,
  yd = .08,
  bd = 7,
  xd = .7;
function Sd(e) {
  return Math.min(xd, yd + e * bd);
}
var Cd = .2;
function wd(e) {
  e.style.backgroundColor !== `transparent` && (e.style.backgroundColor = `transparent`), e.style.boxShadow !== `none` && (e.style.boxShadow = `none`), e.style.borderColor !== `transparent` && (e.style.borderColor = `transparent`);
  for (let t of [`backdrop-filter`, `-webkit-backdrop-filter`]) e.style.getPropertyValue(t) !== `none` && e.style.setProperty(t, `none`);
}
function Td(e, t) {
  e.style.backgroundColor = t.backgroundColor, e.style.borderColor = t.borderColor, e.style.boxShadow = t.boxShadow, e.style.setProperty(`backdrop-filter`, t.backdropFilter), e.style.removeProperty(`-webkit-backdrop-filter`);
}
var Ed = () => {},
  Dd = 0;
function Od(e) {
  return Dd += 1, e.style.viewTransitionName = `kobra-video-${String(Dd)}`, e.style.setProperty(`view-transition-class`, `kobra-video`), () => {
    e.style.viewTransitionName = ``, e.style.removeProperty(`view-transition-class`);
  };
}
function kd(e, t) {
  let n = e.getBoundingClientRect(),
    r = t.getBoundingClientRect();
  return {
    x: n.left - r.left,
    y: n.top - r.top,
    w: n.width,
    h: n.height
  };
}
function Ad(e) {
  let t = document.createElement(`canvas`),
    n = t.getContext(`2d`, {
      willReadFrequently: !0
    }),
    r = null,
    i = n === null;
  return {
    get blind() {
      return i;
    },
    read() {
      if (i || !n) return !1;
      let a = e.videoWidth,
        o = e.videoHeight;
      if (a === 0 || o === 0) return !1;
      let s = gd,
        c = Math.max(1, Math.round(o / a * gd));
      (t.width !== s || t.height !== c) && (t.width = s, t.height = c);
      try {
        n.drawImage(e, 0, 0, s, c), r = n.getImageData(0, 0, s, c);
      } catch {
        return i = !0, r = null, !1;
      }
      return !0;
    },
    luminanceOf(e, t, n, i) {
      if (!r) return null;
      let {
          width: a,
          height: o,
          data: s
        } = r,
        c = Math.max(0, Math.min(a - 1, Math.floor(e * a))),
        l = Math.max(0, Math.min(o - 1, Math.floor(t * o))),
        u = Math.max(c + 1, Math.min(a, Math.ceil((e + n) * a))),
        d = Math.max(l + 1, Math.min(o, Math.ceil((t + i) * o))),
        f = 0,
        p = 0;
      for (let e = l; e < d; e++) for (let t = c; t < u; t++) {
        let n = (e * a + t) * 4;
        f += .2126 * s[n] + .7152 * s[n + 1] + .0722 * s[n + 2], p++;
      }
      return p === 0 ? null : f / p / 255;
    }
  };
}
function jd(e) {
  let t = (e - _d) / .44;
  return Math.max(0, Math.min(1, t)) * vd;
}
function Md({
  layer: e,
  buttons: t
}) {
  let n = e.getAttribute(`aria-hidden`),
    r = t.map(e => e.getAttribute(`tabindex`)),
    i = () => {
      let n = t.map(e => e.classList.contains(`pointer-events-auto`)),
        r = String(!n.some(Boolean));
      e.getAttribute(`aria-hidden`) !== r && e.setAttribute(`aria-hidden`, r);
      for (let [e, r] of t.entries()) {
        let t = n[e] ? 0 : -1;
        r.tabIndex !== t && (r.tabIndex = t);
      }
    },
    a = new MutationObserver(i);
  return a.observe(e, {
    attributes: !0,
    subtree: !0,
    attributeFilter: [`class`, `aria-hidden`, `tabindex`]
  }), i(), () => {
    a.disconnect(), n === null ? e.removeAttribute(`aria-hidden`) : e.setAttribute(`aria-hidden`, n);
    for (let [e, n] of t.entries()) {
      let t = r[e];
      t == null ? n.removeAttribute(`tabindex`) : n.setAttribute(`tabindex`, t);
    }
  };
}
function Nd(e) {
  let t = e.querySelector(`video`),
    n = t?.parentElement;
  if (!t || !n) return null;
  let r = n.getBoundingClientRect().height;
  if (r === 0) return null;
  let i = Array.from(n.children).find(e => e instanceof HTMLElement && e !== t && e.querySelector(`button`) !== null && e.getBoundingClientRect().height > r * .8),
    a = i ? Array.from(i.querySelectorAll(`button`)) : [];
  return i && a.length > 0 ? {
    video: t,
    root: n,
    layer: i,
    buttons: a
  } : null;
}
function Pd(e, t) {
  let n = Nd(e);
  return n ? Promise.resolve(n) : new Promise(n => {
    let r = e => {
        a.disconnect(), clearTimeout(o), t.removeEventListener(`abort`, i), n(e);
      },
      i = () => r(null),
      a = new MutationObserver(() => {
        let t = Nd(e);
        t && r(t);
      }),
      o = setTimeout(() => r(null), 1e4);
    a.observe(e, {
      childList: !0,
      subtree: !0
    }), t.addEventListener(`abort`, i, {
      once: !0
    });
  });
}
function Fd(e) {
  return document.visibilityState === `visible` ? Promise.resolve(!0) : new Promise(t => {
    let n = n => {
        document.removeEventListener(`visibilitychange`, r), e.removeEventListener(`abort`, i), t(n);
      },
      r = () => {
        document.visibilityState === `visible` && n(!0);
      },
      i = () => n(!1);
    document.addEventListener(`visibilitychange`, r), e.addEventListener(`abort`, i, {
      once: !0
    });
  });
}
function Id(e, t) {
  let n = `requestVideoFrameCallback` in e;
  return !e.paused && !n ? Promise.resolve(!0) : new Promise(r => {
    let i = 0,
      a = n => {
        i && e.cancelVideoFrameCallback(i), e.removeEventListener(`seeked`, o), e.removeEventListener(`loadedmetadata`, c), t.removeEventListener(`abort`, s), r(n);
      },
      o = () => a(!0),
      s = () => a(!1),
      c = () => {
        e.currentTime = e.currentTime;
      };
    t.addEventListener(`abort`, s, {
      once: !0
    }), n && (i = e.requestVideoFrameCallback(o)), e.addEventListener(`seeked`, o), e.paused && (e.preload = `auto`, e.readyState >= HTMLMediaElement.HAVE_METADATA ? c() : e.addEventListener(`loadedmetadata`, c, {
      once: !0
    }));
  });
}
var Ld = 15e3;
function Rd(e) {
  let t = !1;
  return Promise.race([e.then(e => {
    if (t) throw e.destroy(), Error(`glass: init resolved after its deadline`);
    return e;
  }), new Promise((e, n) => {
    setTimeout(() => {
      t = !0, n(Error(`glass: init did not settle`));
    }, Ld);
  })]);
}
async function zd(e, t) {
  let n = await Pd(e, t);
  if (!n || t.aborted) return Ed;
  let {
      video: r,
      root: i,
      layer: a,
      buttons: o
    } = n,
    s = Od(i);
  if (CSS.supports(`-moz-appearance`, `none`)) {
    let e = Md(n);
    return () => {
      e(), s();
    };
  }
  let l = () => {
      i.dataset.glass = `live`;
    },
    u = () => {
      delete i.dataset.glass;
    };
  if (!(await Fd(t)) || t.aborted || !(await Id(r, t)) || t.aborted) return Ed;
  let {
    LiquidGlass: d
  } = await c(async () => {
    let {
      LiquidGlass: e
    } = await import(`./liquidglass-Dw2iSKe-.js`);
    return {
      LiquidGlass: e
    };
  }, []);
  if (t.aborted) return Ed;
  let f = o.map(e => {
      let t = document.createElement(`div`);
      t.setAttribute(`aria-hidden`, `true`), t.dataset.slot = `video-glass`, t.style.position = `absolute`, t.style.isolation = `isolate`, t.style.pointerEvents = `none`, t.style.opacity = `0`, i.insertBefore(t, a);
      let n = document.createElement(`div`);
      return n.setAttribute(`aria-hidden`, `true`), n.dataset.slot = `video-glass-scrim`, n.style.position = `absolute`, n.style.pointerEvents = `none`, n.style.background = `rgb(0 0 0)`, n.style.opacity = `0`, i.insertBefore(n, a), {
        button: e,
        panel: t,
        scrim: n,
        restore: {
          backgroundColor: e.style.backgroundColor,
          borderColor: e.style.borderColor,
          backdropFilter: e.style.getPropertyValue(`backdrop-filter`),
          boxShadow: e.style.boxShadow
        }
      };
    }),
    p = () => {
      u();
      for (let {
        button: e,
        panel: t,
        scrim: n,
        restore: r
      } of f) Td(e, r), t.remove(), n.remove();
    },
    m = Ad(r),
    h = !1,
    g = o[0],
    _ = () => h ? (Number(getComputedStyle(a).opacity) || 0) * (Number(getComputedStyle(g).opacity) || 0) : 0,
    v = () => {
      if (h) for (let {
        button: e
      } of f) wd(e);
      let e = _();
      if (e === 0) {
        for (let {
          panel: e,
          scrim: t
        } of f) e.style.opacity !== `0` && (e.style.opacity = `0`), t.style.opacity !== `0` && (t.style.opacity = `0`);
        return;
      }
      let t = i.getBoundingClientRect();
      for (let {
        button: n,
        panel: r,
        scrim: i
      } of f) {
        let a = n.getBoundingClientRect(),
          o = a.width,
          s = a.height;
        if (o === 0 || s === 0) {
          r.style.opacity = `0`, i.style.opacity = `0`;
          continue;
        }
        let c = a.left - t.left,
          l = a.top - t.top,
          u = Math.round(s / 2),
          d = `${c}px|${l}px|${o}px|${s}px|${u}`;
        r.dataset.box !== d && (r.dataset.box = d, r.style.left = `${c}px`, r.style.top = `${l}px`, r.style.width = `${o}px`, r.style.height = `${s}px`, r.dataset.config = JSON.stringify({
          ...md,
          cornerRadius: u,
          zRadius: u
        }), i.style.left = `${c}px`, i.style.top = `${l}px`, i.style.width = `${o}px`, i.style.height = `${s}px`, i.style.borderRadius = `${u}px`);
        let f = String(e);
        r.style.opacity !== f && (r.style.opacity = f);
        let p = Number(i.dataset.level ?? `0`),
          m = p + (Number(i.dataset.target ?? `0`) - p) * Number(i.dataset.rate ?? String(yd));
        i.dataset.level = String(m);
        let h = (e * m).toFixed(3);
        i.style.opacity !== h && (i.style.opacity = h);
      }
    },
    y = 0,
    b = -1,
    x = e => {
      if (!h || m.blind || e - y < hd || (y = e, _() === 0) || r.seeking || r.paused && r.currentTime === b || !m.read()) return;
      b = r.paused ? r.currentTime : -1;
      let t = kd(r, i);
      if (t.w !== 0 && t.h !== 0) for (let {
        button: e,
        scrim: n
      } of f) {
        let r = kd(e, i),
          a = m.luminanceOf((r.x - t.x) / t.w, (r.y - t.y) / t.h, r.w / t.w, r.h / t.h);
        if (a === null) continue;
        let o = jd(a);
        n.dataset.rate = String(Sd(Math.abs(o - Number(n.dataset.level ?? `0`)))), n.dataset.target = String(o);
      }
    };
  if (m.blind) for (let {
    scrim: e
  } of f) e.dataset.rate = String(xd), e.dataset.target = String(Cd);
  v();
  let S;
  try {
    S = await Rd(d.init({
      root: i,
      glassElements: f.map(e => e.panel)
    }));
  } catch {
    return p(), Ed;
  }
  if (t.aborted) return S.destroy(), p(), Ed;
  h = !0, v(), l();
  let C = requestAnimationFrame(function e(t) {
    x(t), v(), C = requestAnimationFrame(e);
  });
  return () => {
    cancelAnimationFrame(C), S.destroy(), p(), s();
  };
}
var Bd = r({
  Video: () => Vd
});
function Vd(e) {
  let t = (0, S.useRef)(null);
  return (0, S.useEffect)(() => {
    let e = t.current?.querySelector(`video`);
    !e || e.readyState < 1 || e.dispatchEvent(new Event(`loadedmetadata`));
  }, [e.src]), (0, S.useEffect)(() => {
    let e = t.current;
    if (!e) return;
    let n = new AbortController(),
      r = null;
    return zd(e, n.signal).then(e => {
      n.signal.aborted ? e() : r = e;
    }), () => {
      n.abort(), r?.();
    };
  }, [e.src, e.disableSkip, e.loading]), <div ref={t} dir={`ltr`} className={`contents`}>{(0, x.jsx)(fd, {
      ...e,
      className: s(`video-player aspect-video w-full overflow-hidden rounded-xl border [&:not([data-glass=live])>div>button]:invisible [&>div>button[aria-label=Pause]>svg]:size-8 md:[&>div>button[aria-label=Pause]>svg]:size-10 [&>div>button[aria-label=Play]>svg]:size-8 md:[&>div>button[aria-label=Play]>svg]:size-10`, e.className)
    })}</div>;
}
export { pd as n, _u as r, Bd as t };

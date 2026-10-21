// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module33739 from "./33739.js";
import * as _module34533 from "./34533.js";
import * as _module4028 from "./4028.js";
import * as _module84872 from "./84872.js";
import * as _module69699 from "./69699.js";
import * as _module92548 from "./92548.js";
import * as _module48681 from "./48681.js";
import * as _module30548 from "./30548.js";
import * as _module65797 from "./65797.js";
import * as _module1077 from "./1077.js";
import * as _module11764 from "./11764.js";
import * as _module24411 from "./24411.js";
import * as _module9861 from "./9861.js";
import * as _module66564 from "./66564.js";
import * as _module33993 from "./33993.js";
import * as _module36839 from "./36839.js";
import * as _module19144 from "./19144.js";
import * as _module18949 from "./18949.js";
import * as _module98582 from "./98582.js";
import * as _module96923 from "./96923.js";
import * as _module99195 from "./99195.js";
import * as _module97373 from "./97373.js";
import * as _module86179 from "./86179.js";
import * as _module27420 from "./27420.js";
import * as _module47239 from "./47239.js";
import * as _module29534 from "./29534.js";
import * as _module1924 from "./1924.js";
import * as _module79714 from "./79714.js";
import * as _module44182 from "./44182.js";
import * as _module83636 from "./83636.js";
import * as _module6449 from "./6449.js";
import * as _module47694 from "./47694.js";
import * as _module6697 from "./6697.js";
import * as _module13783 from "./13783.js";
var g = _module33739;
class w {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {}
}
var S = _module34533;
function P(t, e, i) {
  let n = t.getProps();
  return (0, S.resolveVariantFromProps)(n, e, void 0 !== i ? i : n.custom, t);
}
function M(t, e) {
  if (t?.inherit && e) {
    let {
      inherit: i,
      ...n
    } = t;
    return {
      ...e,
      ...n
    };
  }
  return t;
}
function A(t, e) {
  let i = t?.[e] ?? t?.default ?? t;
  return i !== t ? M(i, t) : i;
}
var V = _module4028,
  E = _module84872;
let C = t => Array.isArray(t);
var D = _module69699,
  R = _module92548;
function k(t, e) {
  let i = t.getValue("willChange");
  if ((0, R.isMotionValue)(i) && i.add) return i.add(e);
  if (!i && D.MotionGlobalConfig.WillChange) {
    let i = new D.MotionGlobalConfig.WillChange("auto");
    t.addValue("willChange", i), i.add(e);
  }
}
function L(t) {
  return t.props[g.optimizedAppearDataAttribute];
}
var B = _module48681,
  F = _module30548,
  j = _module65797;
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
var to = _module98582;
let ta = t => {
  let e = ({
    timestamp: e
  }) => t(e);
  return {
    start: (t = !0) => to.frame.update(e, t),
    stop: () => (0, to.cancelFrame)(e),
    now: () => to.frameData.isProcessing ? to.frameData.timestamp : j.time.now()
  };
};
var tl = _module96923;
function tu(t) {
  let e = 0,
    i = t.next(e);
  for (; !i.done && e < 2e4;) e += 50, i = t.next(e);
  return e >= 2e4 ? 1 / 0 : e;
}
let th = .01,
  tc = 2,
  td = .005,
  tp = .5;
function tm(t, e) {
  return t * Math.sqrt(1 - e * e);
}
let tf = ["duration", "bounce"],
  tg = ["stiffness", "damping", "mass"];
function tv(t, e) {
  return e.some(e => void 0 !== t[e]);
}
function ty(t = .3, e = .3) {
  let i,
    n,
    s,
    r,
    o,
    a,
    l = "object" != typeof t ? {
      visualDuration: t,
      keyframes: [0, 1],
      bounce: e
    } : t,
    {
      restSpeed: u,
      restDelta: h
    } = l,
    c = l.keyframes[0],
    d = l.keyframes[l.keyframes.length - 1],
    p = {
      done: !1,
      value: c
    },
    {
      stiffness: m,
      damping: f,
      mass: g,
      duration: v,
      velocity: y,
      isResolvedFromDuration: x
    } = function (t) {
      let e = {
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1,
        ...t
      };
      if (!tv(t, tg) && tv(t, tf)) if (e.velocity = 0, t.visualDuration) {
        let i = 2 * Math.PI / (1.2 * t.visualDuration),
          n = i * i,
          s = 2 * (0, O.clamp)(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(n);
        e = {
          ...e,
          mass: 1,
          stiffness: n,
          damping: s
        };
      } else {
        let i = function ({
          duration: t = 800,
          bounce: e = .3,
          velocity: i = 0,
          mass: n = 1
        }) {
          let s, r;
          (0, N.warning)(t <= (0, B.secondsToMilliseconds)(10), "Spring duration must be 10 seconds or less", "spring-duration-limit");
          let o = 1 - e;
          o = (0, O.clamp)(.05, 1, o), t = (0, O.clamp)(.01, 10, (0, B.millisecondsToSeconds)(t)), o < 1 ? (s = e => {
            let n = e * o,
              s = n * t;
            return .001 - (n - i) / tm(e, o) * Math.exp(-s);
          }, r = e => {
            let n = e * o * t,
              r = Math.pow(o, 2) * Math.pow(e, 2) * t,
              a = Math.exp(-n),
              l = tm(Math.pow(e, 2), o);
            return (n * i + i - r) * a * (-s(e) + .001 > 0 ? -1 : 1) / l;
          }) : (s = e => -.001 + Math.exp(-e * t) * ((e - i) * t + 1), r = e => t * t * (i - e) * Math.exp(-e * t));
          let a = function (t, e, i) {
            let n = i;
            for (let i = 1; i < 12; i++) n -= t(n) / e(n);
            return n;
          }(s, r, 5 / t);
          if (t = (0, B.secondsToMilliseconds)(t), isNaN(a)) return {
            stiffness: 100,
            damping: 10,
            duration: t
          };
          {
            let e = Math.pow(a, 2) * n;
            return {
              stiffness: e,
              damping: 2 * o * Math.sqrt(n * e),
              duration: t
            };
          }
        }({
          ...t,
          velocity: 0
        });
        (e = {
          ...e,
          ...i,
          mass: 1
        }).isResolvedFromDuration = !0;
      }
      return e;
    }({
      ...l,
      velocity: -(0, B.millisecondsToSeconds)(l.velocity || 0)
    }),
    b = y || 0,
    T = f / (2 * Math.sqrt(m * g)),
    w = d - c,
    S = (0, B.millisecondsToSeconds)(Math.sqrt(m / g)),
    P = 5 > Math.abs(w);
  if (u || (u = P ? th : tc), h || (h = P ? td : tp), T < 1) s = tm(S, T), r = (b + T * S * w) / s, i = t => d - Math.exp(-T * S * t) * (r * Math.sin(s * t) + w * Math.cos(s * t)), o = T * S * r + w * s, a = T * S * w - r * s, n = t => Math.exp(-T * S * t) * (o * Math.sin(s * t) + a * Math.cos(s * t));else if (1 === T) {
    i = t => d - Math.exp(-S * t) * (w + (b + S * w) * t);
    let t = b + S * w;
    n = e => Math.exp(-S * e) * (S * t * e - b);
  } else {
    let t = S * Math.sqrt(T * T - 1);
    i = e => {
      let i = Math.exp(-T * S * e),
        n = Math.min(t * e, 300);
      return d - i * ((b + T * S * w) * Math.sinh(n) + t * w * Math.cosh(n)) / t;
    };
    let e = (b + T * S * w) / t,
      s = T * S * e - w * t,
      r = T * S * w - e * t;
    n = e => {
      let i = Math.exp(-T * S * e),
        n = Math.min(t * e, 300);
      return i * (s * Math.sinh(n) + r * Math.cosh(n));
    };
  }
  let M = {
    calculatedDuration: x && v || null,
    velocity: t => (0, B.secondsToMilliseconds)(n(t)),
    next: t => {
      if (!x && T < 1) {
        let e = Math.exp(-T * S * t),
          i = Math.sin(s * t),
          n = Math.cos(s * t),
          l = d - e * (r * i + w * n);
        return p.done = Math.abs((0, B.secondsToMilliseconds)(e * (o * i + a * n))) <= u && Math.abs(d - l) <= h, p.value = p.done ? d : l, p;
      }
      let e = i(t);
      return x ? p.done = t >= v : p.done = Math.abs((0, B.secondsToMilliseconds)(n(t))) <= u && Math.abs(d - e) <= h, p.value = p.done ? d : e, p;
    },
    toString: () => {
      let t = Math.min(tu(M), 2e4),
        e = (0, tl.generateLinearEasing)(e => M.next(t * e).value, t, 30);
      return t + "ms " + e;
    },
    toTransition: () => {}
  };
  return M;
}
var tx = _module99195;
function tb(t, e, i) {
  let n = Math.max(e - 5, 0);
  return (0, tx.velocityPerSecond)(i - t(n), e - n);
}
function tT({
  keyframes: t,
  velocity: e = 0,
  power: i = .8,
  timeConstant: n = 325,
  bounceDamping: s = 10,
  bounceStiffness: r = 500,
  modifyTarget: o,
  min: a,
  max: l,
  restDelta: u = .5,
  restSpeed: h
}) {
  let c,
    d,
    p = t[0],
    m = {
      done: !1,
      value: p
    },
    f = i * e,
    g = p + f,
    v = void 0 === o ? g : o(g);
  v !== g && (f = v - p);
  let y = t => -f * Math.exp(-t / n),
    x = t => v + y(t),
    b = t => {
      let e = y(t),
        i = x(t);
      m.done = Math.abs(e) <= u, m.value = m.done ? v : i;
    },
    T = t => {
      let e;
      if (e = m.value, void 0 !== a && e < a || void 0 !== l && e > l) {
        var i;
        c = t, d = ty({
          keyframes: [m.value, (i = m.value, void 0 === a ? l : void 0 === l || Math.abs(a - i) < Math.abs(l - i) ? a : l)],
          velocity: tb(x, t, m.value),
          damping: s,
          stiffness: r,
          restDelta: u,
          restSpeed: h
        });
      }
    };
  return T(0), {
    calculatedDuration: null,
    next: t => {
      let e = !1;
      return (d || void 0 !== c || (e = !0, b(t), T(t)), void 0 !== c && t >= c) ? d.next(t - c) : (e || b(t), m);
    }
  };
}
let tw = (t, e, i) => (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
function tS(t, e, i, n) {
  return t === e && i === n ? F.noop : s => 0 === s || 1 === s ? s : tw(function (t, e, i, n, s) {
    let r,
      o,
      a = 0;
    do (r = tw(o = e + (i - e) / 2, n, s) - t) > 0 ? i = o : e = o; while (Math.abs(r) > 1e-7 && ++a < 12);
    return o;
  }(s, 0, 1, t, i), e, n);
}
let tP = tS(.42, 0, 1, 1),
  tM = tS(0, 0, .58, 1),
  tA = tS(.42, 0, .58, 1),
  tV = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
  tE = t => e => 1 - t(1 - e),
  tC = tS(.33, 1.53, .69, .99),
  tD = tE(tC),
  tR = tV(tD),
  tk = t => t >= 1 ? 1 : (t *= 2) < 1 ? .5 * tD(t) : .5 * (2 - Math.pow(2, -10 * (t - 1))),
  tL = t => 1 - Math.sin(Math.acos(t)),
  tB = tE(tL),
  tF = tV(tL);
var tj = _module97373;
let tI = {
    linear: F.noop,
    easeIn: tP,
    easeInOut: tA,
    easeOut: tM,
    circIn: tL,
    circInOut: tF,
    circOut: tB,
    backIn: tD,
    backInOut: tR,
    backOut: tC,
    anticipate: tk
  },
  tO = t => {
    if ((0, tj.isBezierDefinition)(t)) {
      (0, N.invariant)(4 === t.length, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
      let [e, i, n, s] = t;
      return tS(e, i, n, s);
    }
    return "string" == typeof t ? ((0, N.invariant)(void 0 !== tI[t], `Invalid easing type '${t}'`, "invalid-easing-type"), tI[t]) : t;
  },
  tN = (t, e, i) => {
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
function t$({
  duration: t = 300,
  keyframes: e,
  times: i,
  ease: n = "easeInOut"
}) {
  var s;
  let r,
    o = Array.isArray(n) && "number" != typeof n[0] ? n.map(tO) : tO(n),
    a = {
      done: !1,
      value: e[0]
    },
    l = tU((s = i && i.length === e.length ? i : (!function (t, e) {
      let i = t[t.length - 1];
      for (let n = 1; n <= e; n++) {
        let s = tN(0, e, n);
        t.push((0, X.mixNumber)(i, 1, s));
      }
    }(r = [0], e.length - 1), r), s.map(e => e * t)), e, {
      ease: Array.isArray(o) ? o : e.map(() => o || tA).splice(0, e.length - 1)
    });
  return {
    calculatedDuration: t,
    next: e => (a.value = l(e), a.done = e >= t, a)
  };
}
var tW = _module86179;
let tG = {
  decay: tT,
  inertia: tT,
  tween: t$,
  keyframes: t$,
  spring: ty
};
function tz(t) {
  "string" == typeof t.type && (t.type = tG[t.type]);
}
var tH = _module27420;
let tY = t => t / 100;
class tK extends tH.WithPromise {
  constructor(t) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
      done: !1,
      value: void 0
    }, this.stop = () => {
      let {
        motionValue: t
      } = this.options;
      t && t.updatedAt !== j.time.now() && this.tick(j.time.now()), this.isStopped = !0, "idle" !== this.state && (this.teardown(), this.options.onStop?.());
    }, this.options = t, this.initAnimation(), this.play(), !1 === t.autoplay && this.pause();
  }
  initAnimation() {
    let {
      options: t
    } = this;
    tz(t);
    let {
        type: e = t$,
        repeat: i = 0,
        repeatDelay: n = 0,
        repeatType: s,
        velocity: r = 0
      } = t,
      {
        keyframes: o
      } = t,
      a = e || t$;
    a !== t$ && "number" != typeof o[0] && (this.mixKeyframes = I(tY, tr(o[0], o[1])), o = [0, 100]);
    let l = a({
      ...t,
      keyframes: o
    });
    "mirror" === s && (this.mirroredGenerator = a({
      ...t,
      keyframes: [...o].reverse(),
      velocity: -r
    })), null === l.calculatedDuration && (l.calculatedDuration = tu(l));
    let {
      calculatedDuration: u
    } = l;
    this.calculatedDuration = u, this.resolvedDuration = u + n, this.totalDuration = this.resolvedDuration * (i + 1) - n, this.generator = l;
  }
  updateTime(t) {
    let e = Math.round(t - this.startTime) * this.playbackSpeed;
    null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = e;
  }
  tick(t, e = !1) {
    let i,
      {
        generator: n,
        totalDuration: s,
        mixKeyframes: r,
        mirroredGenerator: o,
        resolvedDuration: a,
        calculatedDuration: l
      } = this;
    if (null === this.startTime) return n.next(0);
    let {
      delay: u = 0,
      keyframes: h,
      repeat: c,
      repeatType: d,
      repeatDelay: p,
      type: m,
      onUpdate: f,
      finalKeyframe: g
    } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - s / this.speed, this.startTime)), e ? this.currentTime = t : this.updateTime(t);
    let v = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1),
      y = this.playbackSpeed >= 0 ? v < 0 : v > s;
    this.currentTime = Math.max(v, 0), "finished" === this.state && null === this.holdTime && (this.currentTime = s);
    let x = this.currentTime,
      b = n;
    if (c) {
      let t = Math.min(this.currentTime, s) / a,
        e = Math.floor(t),
        i = t % 1;
      !i && t >= 1 && (i = 1), 1 === i && e--, (e = Math.min(e, c + 1)) % 2 && ("reverse" === d ? (i = 1 - i, p && (i -= p / a)) : "mirror" === d && (b = o)), x = (0, O.clamp)(0, 1, i) * a;
    }
    y ? (this.delayState.value = h[0], i = this.delayState) : i = b.next(x), r && !y && (i.value = r(i.value));
    let {
      done: T
    } = i;
    y || null === l || (T = this.playbackSpeed >= 0 ? this.currentTime >= s : this.currentTime <= 0);
    let w = null === this.holdTime && ("finished" === this.state || "running" === this.state && T);
    return w && m !== tT && (i.value = (0, tW.getFinalKeyframe)(h, this.options, g, this.speed)), f && f(i.value), w && this.finish(), i;
  }
  then(t, e) {
    return this.finished.then(t, e);
  }
  get duration() {
    return (0, B.millisecondsToSeconds)(this.calculatedDuration);
  }
  get iterationDuration() {
    let {
      delay: t = 0
    } = this.options || {};
    return this.duration + (0, B.millisecondsToSeconds)(t);
  }
  get time() {
    return (0, B.millisecondsToSeconds)(this.currentTime);
  }
  set time(t) {
    t = (0, B.secondsToMilliseconds)(t), this.currentTime = t, null === this.startTime || null !== this.holdTime || 0 === this.playbackSpeed ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = t, this.tick(t));
  }
  getGeneratorVelocity() {
    let t = this.currentTime;
    if (t <= 0) return this.options.velocity || 0;
    if (this.generator.velocity) return this.generator.velocity(t);
    let e = this.generator.next(t).value;
    return tb(t => this.generator.next(t).value, t, e);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    let e = this.playbackSpeed !== t;
    e && this.driver && this.updateTime(j.time.now()), this.playbackSpeed = t, e && this.driver && (this.time = (0, B.millisecondsToSeconds)(this.currentTime));
  }
  play() {
    if (this.isStopped) return;
    let {
      driver: t = ta,
      startTime: e
    } = this.options;
    this.driver || (this.driver = t(t => this.tick(t))), this.options.onPlay?.();
    let i = this.driver.now();
    "finished" === this.state ? (this.updateFinished(), this.startTime = i) : null !== this.holdTime ? this.startTime = i - this.holdTime : this.startTime || (this.startTime = e ?? i), "finished" === this.state && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(j.time.now()), this.holdTime = this.currentTime;
  }
  complete() {
    "running" !== this.state && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
  }
  cancel() {
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(t) {
    return this.startTime = 0, this.tick(t, !0);
  }
  attachTimeline(t) {
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), t.observe(this);
  }
}
var tX = _module47239,
  tq = _module29534,
  tZ = _module1924;
let t_ = {
  anticipate: tk,
  backInOut: tR,
  circInOut: tF
};
class tJ extends tZ.NativeAnimation {
  constructor(t) {
    !function (t) {
      "string" == typeof t.ease && t.ease in t_ && (t.ease = t_[t.ease]);
    }(t), tz(t), super(t), void 0 !== t.startTime && !1 !== t.autoplay && (this.startTime = t.startTime), this.options = t;
  }
  updateMotionValue(t) {
    let {
      motionValue: e,
      onUpdate: i,
      onComplete: n,
      element: s,
      ...r
    } = this.options;
    if (!e) return;
    if (void 0 !== t) return void e.set(t);
    let o = new tK({
        ...r,
        autoplay: !1
      }),
      a = Math.max(10, j.time.now() - this.startTime),
      l = (0, O.clamp)(0, 10, a - 10),
      u = o.sample(a).value,
      {
        name: h
      } = this.options;
    s && h && (0, tq.setStyle)(s, h, u), e.setWithVelocity(o.sample(Math.max(0, a - l)).value, u, l), o.stop();
  }
}
var tQ = _module79714;
let t0 = (t, e) => "zIndex" !== e && !!("number" == typeof t || Array.isArray(t) || "string" == typeof t && (W.complex.test(t) || "0" === t) && !t.startsWith("url("));
function t1(t) {
  t.duration = 0, t.type = "keyframes";
}
var t9 = tH,
  t2 = _module44182,
  t5 = _module83636;
let t3 = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/,
  t4 = new Set(["color", "backgroundColor", "outlineColor", "fill", "stroke", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"]),
  t6 = (0, t2.memo)(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
class t7 extends t9.WithPromise {
  constructor({
    autoplay: t = !0,
    delay: e = 0,
    type: i = "keyframes",
    repeat: n = 0,
    repeatDelay: s = 0,
    repeatType: r = "loop",
    keyframes: o,
    name: a,
    motionValue: l,
    element: u,
    ...h
  }) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = j.time.now();
    const c = {
        autoplay: t,
        delay: e,
        type: i,
        repeat: n,
        repeatDelay: s,
        repeatType: r,
        name: a,
        motionValue: l,
        element: u,
        ...h
      },
      d = u?.KeyframeResolver || tX.KeyframeResolver;
    this.keyframeResolver = new d(o, (t, e, i) => this.onKeyframesResolved(t, e, c, !i), a, l, u), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(t, e, i, n) {
    let s;
    this.keyframeResolver = void 0;
    let {
      name: r,
      type: o,
      velocity: a,
      delay: l,
      isHandoff: u,
      onUpdate: h
    } = i;
    this.resolvedAt = j.time.now();
    let c = !0;
    !function (t, e, i, n) {
      let s = t[0];
      if (null === s) return !1;
      if ("display" === e || "visibility" === e) return !0;
      let r = t[t.length - 1],
        o = t0(s, e),
        a = t0(r, e);
      return (0, N.warning)(o === a, `You are trying to animate ${e} from "${s}" to "${r}". "${o ? r : s}" is not an animatable value.`, "value-not-animatable"), !!o && !!a && (function (t) {
        let e = t[0];
        if (1 === t.length) return !0;
        for (let i = 0; i < t.length; i++) if (t[i] !== e) return !0;
      }(t) || ("spring" === i || (0, tQ.isGenerator)(i)) && n);
    }(t, r, o, a) && (c = !1, (D.MotionGlobalConfig.instantAnimations || !l) && h?.((0, tW.getFinalKeyframe)(t, i, e)), t[0] = t[t.length - 1], t1(i), i.repeat = 0);
    let d = {
        startTime: n ? this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt : void 0,
        finalKeyframe: e,
        ...i,
        keyframes: t
      },
      p = c && !u && function (t) {
        let {
            motionValue: e,
            name: i,
            repeatDelay: n,
            repeatType: s,
            damping: r,
            type: o,
            keyframes: a
          } = t,
          l = e?.owner?.current;
        if (!(l instanceof HTMLElement) && !(l instanceof SVGElement)) return !1;
        let {
          onUpdate: u,
          transformTemplate: h
        } = e.owner.getProps();
        return t6() && i && (t5.acceleratedValues.has(i) || t4.has(i) && function (t) {
          for (let e = 0; e < t.length; e++) if ("string" == typeof t[e] && t3.test(t[e])) return !0;
          return !1;
        }(a)) && ("transform" !== i || !h) && !u && !n && "mirror" !== s && 0 !== r && "inertia" !== o;
      }(d),
      m = d.motionValue?.owner?.current;
    if (p) try {
      s = new tJ({
        ...d,
        element: m
      });
    } catch {
      s = new tK(d);
    } else s = new tK(d);
    s.finished.then(() => {
      this.notifyFinished();
    }).catch(F.noop), this.pendingTimeline && (this.stopTimeline = s.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = s;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(t, e) {
    return this.finished.finally(t).then(() => {});
  }
  get animation() {
    return this._animation || (this.keyframeResolver?.resume(), (0, tX.flushKeyframeResolvers)()), this._animation;
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
  set time(t) {
    this.animation.time = t;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(t) {
    this.animation.speed = t;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(t) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t, () => this.stop();
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
}
var t8 = _module6449;
let et = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
  },
  ee = {
    type: "keyframes",
    duration: .8
  },
  ei = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
  },
  en = new Set(["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from", "elapsed"]),
  es = (t, e, i, n = {}, s, r) => o => {
    let a = A(n, t) || {},
      l = a.delay || n.delay || 0,
      {
        elapsed: u = 0
      } = n;
    u -= (0, B.secondsToMilliseconds)(l);
    let h = {
      keyframes: Array.isArray(i) ? i : [null, i],
      ease: "easeOut",
      velocity: e.getVelocity(),
      ...a,
      delay: -u,
      onUpdate: t => {
        e.set(t), a.onUpdate && a.onUpdate(t);
      },
      onComplete: () => {
        o(), a.onComplete && a.onComplete();
      },
      name: t,
      motionValue: e,
      element: r ? void 0 : s
    };
    !function (t) {
      for (let e in t) if (!en.has(e)) return !0;
      return !1;
    }(a) && Object.assign(h, ((t, {
      keyframes: e
    }) => e.length > 2 ? ee : t8.transformProps.has(t) ? t.startsWith("scale") ? {
      type: "spring",
      stiffness: 550,
      damping: 0 === e[1] ? 2 * Math.sqrt(550) : 30,
      restSpeed: 10
    } : et : ei)(t, h)), h.duration && (h.duration = (0, B.secondsToMilliseconds)(h.duration)), h.repeatDelay && (h.repeatDelay = (0, B.secondsToMilliseconds)(h.repeatDelay)), void 0 !== h.from && (h.keyframes[0] = h.from);
    let c = !1;
    if (!1 !== h.type && (0 !== h.duration || h.repeatDelay) || (t1(h), 0 === h.delay && (c = !0)), (D.MotionGlobalConfig.instantAnimations || D.MotionGlobalConfig.skipAnimations || s?.shouldSkipAnimations || a.skipAnimations) && (c = !0, t1(h), h.delay = 0), h.allowFlatten = !a.type && !a.ease, c && !r && void 0 !== e.get()) {
      let t = (0, tW.getFinalKeyframe)(h.keyframes, a);
      if (void 0 !== t) return void to.frame.update(() => {
        h.onUpdate(t), h.onComplete();
      });
    }
    return a.isSync ? new tK(h) : new t7(h);
  };
function er(t, e, {
  delay: i = 0,
  transitionOverride: n,
  type: s
} = {}) {
  let {
      transition: r,
      transitionEnd: o,
      ...a
    } = e,
    l = t.getDefaultTransition();
  r = r ? M(r, l) : l;
  let u = r?.reduceMotion,
    h = r?.skipAnimations;
  n && (r = n);
  let c = [],
    d = s && t.animationState && t.animationState.getState()[s],
    p = r?.path;
  for (let e in p && p.animateVisualElement(t, a, r, i, c), a) {
    let n = t.getValue(e, t.latestValues[e] ?? null),
      s = a[e];
    if (void 0 === s || d && function ({
      protectedKeys: t,
      needsAnimating: e
    }, i) {
      let n = t.hasOwnProperty(i) && !0 !== e[i];
      return e[i] = !1, n;
    }(d, e)) continue;
    let o = {
      delay: i,
      ...A(r || {}, e)
    };
    h && (o.skipAnimations = !0);
    let l = n.get();
    if (void 0 !== l && !n.isAnimating() && !Array.isArray(s) && s === l && !o.velocity) {
      to.frame.update(() => n.set(s));
      continue;
    }
    let p = !1;
    if (window.MotionHandoffAnimation) {
      let i = L(t);
      if (i) {
        let t = window.MotionHandoffAnimation(i, e, to.frame);
        null !== t && (o.startTime = t, p = !0);
      }
    }
    k(t, e);
    let m = u ?? t.shouldReduceMotion;
    n.start(es(e, n, s, m && V.positionalKeys.has(e) ? {
      type: !1
    } : o, t, p));
    let f = n.animation;
    f && c.push(f);
  }
  if (o) {
    let e = () => to.frame.update(() => {
      o && function (t, e) {
        let {
          transitionEnd: i = {},
          transition: n = {},
          ...s
        } = P(t, e) || {};
        for (let e in s = {
          ...s,
          ...i
        }) {
          var r;
          let i = C(r = s[e]) ? r[r.length - 1] || 0 : r;
          t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, (0, E.motionValue)(i));
        }
      }(t, o);
    });
    c.length ? Promise.all(c).then(e) : e();
  }
  return c;
}
function eo(t, e, i, n = 0, s = 1) {
  let r = Array.from(t).sort((t, e) => t.sortNodePosition(e)).indexOf(e),
    o = t.size,
    a = (o - 1) * n;
  return "function" == typeof i ? i(r, o) : 1 === s ? r * n : a - r * n;
}
function ea(t, e, i = {}) {
  let n = P(t, e, "exit" === i.type ? t.presenceContext?.custom : void 0),
    {
      transition: s = t.getDefaultTransition() || {}
    } = n || {};
  i.transitionOverride && (s = i.transitionOverride);
  let r = n ? () => Promise.all(er(t, n, i)) : () => Promise.resolve(),
    o = t.variantChildren && t.variantChildren.size ? (n = 0) => {
      let {
        delayChildren: r = 0,
        staggerChildren: o,
        staggerDirection: a
      } = s;
      return function (t, e, i = 0, n = 0, s = 0, r = 1, o) {
        let a = [];
        for (let l of t.variantChildren) l.notify("AnimationStart", e), a.push(ea(l, e, {
          ...o,
          delay: i + ("function" == typeof n ? 0 : n) + eo(t.variantChildren, l, n, s, r)
        }).then(() => l.notify("AnimationComplete", e)));
        return Promise.all(a);
      }(t, e, n, r, o, a, i);
    } : () => Promise.resolve(),
    {
      when: a
    } = s;
  if (!a) return Promise.all([r(), o(i.delay)]);
  {
    let [t, e] = "beforeChildren" === a ? [r, o] : [o, r];
    return t().then(() => e());
  }
}
var el = _module47694,
  eu = _module6697;
let eh = eu.variantProps.length;
var ec = _module13783;
function ed(t, e) {
  if (!Array.isArray(e)) return !1;
  let i = e.length;
  if (i !== t.length) return !1;
  for (let n = 0; n < i; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
let ep = [...eu.variantPriorityOrder].reverse(),
  em = eu.variantPriorityOrder.length;
function ef(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function eg() {
  return {
    animate: ef(!0),
    whileInView: ef(),
    whileHover: ef(),
    whileTap: ef(),
    whileDrag: ef(),
    whileFocus: ef(),
    exit: ef()
  };
}
let ev = 0;
const _export_animations = {
  animation: {
    Feature: class extends w {
      constructor(t) {
        super(t), t.animationState || (t.animationState = function (t) {
          let e = e => Promise.all(e.map(({
              animation: e,
              options: i
            }) => function (t, e, i = {}) {
              let n;
              if (t.notify("AnimationStart", e), Array.isArray(e)) n = Promise.all(e.map(e => ea(t, e, i)));else if ("string" == typeof e) n = ea(t, e, i);else {
                let s = "function" == typeof e ? P(t, e, i.custom) : e;
                n = Promise.all(er(t, s, i));
              }
              return n.then(() => {
                t.notify("AnimationComplete", e);
              });
            }(t, e, i))),
            i = eg(),
            n = !0,
            s = !1,
            r = e => (i, n) => {
              let s = P(t, n, "exit" === e ? t.presenceContext?.custom : void 0);
              if (s) {
                let {
                  transition: t,
                  transitionEnd: e,
                  ...n
                } = s;
                i = {
                  ...i,
                  ...n,
                  ...e
                };
              }
              return i;
            };
          function o(o) {
            let {
                props: a
              } = t,
              l = function t(e) {
                if (!e) return;
                if (!e.isControllingVariants) {
                  let i = e.parent && t(e.parent) || {};
                  return void 0 !== e.props.initial && (i.initial = e.props.initial), i;
                }
                let i = {};
                for (let t = 0; t < eh; t++) {
                  let n = eu.variantProps[t],
                    s = e.props[n];
                  ((0, el.isVariantLabel)(s) || !1 === s) && (i[n] = s);
                }
                return i;
              }(t.parent) || {},
              u = [],
              h = new Set(),
              c = {},
              d = 1 / 0;
            for (let e = 0; e < em; e++) {
              var p, m;
              let f = ep[e],
                g = i[f],
                v = void 0 !== a[f] ? a[f] : l[f],
                y = (0, el.isVariantLabel)(v),
                x = f === o ? g.isActive : null;
              !1 === x && (d = e);
              let b = v === l[f] && v !== a[f] && y;
              if (b && (n || s) && t.manuallyAnimateOnMount && (b = !1), g.protectedKeys = {
                ...c
              }, !g.isActive && null === x || !v && !g.prevProp || (0, ec.isAnimationControls)(v) || "boolean" == typeof v) continue;
              if ("exit" === f && g.isActive && !0 !== x) {
                g.prevResolvedValues && (c = {
                  ...c,
                  ...g.prevResolvedValues
                });
                continue;
              }
              let T = (p = g.prevProp, "string" == typeof (m = v) ? m !== p : !!Array.isArray(m) && !ed(m, p)),
                w = T || f === o && g.isActive && !b && y || e > d && y,
                S = !1,
                M = Array.isArray(v) ? v : [v],
                A = M.reduce(r(f), {});
              !1 === x && (A = {});
              let {
                  prevResolvedValues: V = {}
                } = g,
                E = {
                  ...V,
                  ...A
                },
                D = e => {
                  w = !0, h.has(e) && (S = !0, h.delete(e)), g.needsAnimating[e] = !0;
                  let i = t.getValue(e);
                  i && (i.liveStyle = !1);
                };
              for (let t in E) {
                let e = A[t],
                  i = V[t];
                if (!c.hasOwnProperty(t)) (C(e) && C(i) ? !ed(e, i) || T : e !== i) ? null != e ? D(t) : h.add(t) : void 0 !== e && h.has(t) ? D(t) : g.protectedKeys[t] = !0;
              }
              g.prevProp = v, g.prevResolvedValues = A, g.isActive && (c = {
                ...c,
                ...A
              }), (n || s) && t.blockInitialAnimation && (w = !1);
              let R = b && T,
                k = !R || S;
              w && k && u.push(...M.map(e => {
                let i = {
                  type: f
                };
                if ("string" == typeof e && (n || s) && !R && t.manuallyAnimateOnMount && t.parent) {
                  let {
                      parent: n
                    } = t,
                    s = P(n, e);
                  if (n.enteringChildren && s) {
                    let {
                      delayChildren: e
                    } = s.transition || {};
                    i.delay = eo(n.enteringChildren, t, e);
                  }
                }
                return {
                  animation: e,
                  options: i
                };
              }));
            }
            if (h.size) {
              let e = {};
              if ("boolean" != typeof a.initial) {
                let i = P(t, Array.isArray(a.initial) ? a.initial[0] : a.initial);
                i && i.transition && (e.transition = i.transition);
              }
              h.forEach(i => {
                let n = t.getBaseTarget(i),
                  s = t.getValue(i);
                s && (s.liveStyle = !0), e[i] = n ?? null;
              }), u.push({
                animation: e
              });
            }
            let f = !!u.length;
            return n && (!1 === a.initial || a.initial === a.animate) && !t.manuallyAnimateOnMount && (f = !1), n = !1, s = !1, f ? e(u) : Promise.resolve();
          }
          return {
            animateChanges: o,
            setActive: function (e, n) {
              if (i[e].isActive === n) return Promise.resolve();
              t.variantChildren?.forEach(t => t.animationState?.setActive(e, n)), i[e].isActive = n;
              let s = o(e);
              for (let t in i) i[t].protectedKeys = {};
              return s;
            },
            setAnimateFunction: function (i) {
              e = i(t);
            },
            getState: () => i,
            reset: () => {
              i = eg(), s = !0;
            }
          };
        }(t));
      }
      updateAnimationControlsSubscription() {
        let {
          animate: t
        } = this.node.getProps();
        (0, ec.isAnimationControls)(t) && (this.unmountControls = t.subscribe(this.node));
      }
      mount() {
        this.updateAnimationControlsSubscription();
      }
      update() {
        let {
            animate: t
          } = this.node.getProps(),
          {
            animate: e
          } = this.node.prevProps || {};
        t !== e && this.updateAnimationControlsSubscription();
      }
      unmount() {
        this.node.animationState.reset(), this.unmountControls?.();
      }
    }
  },
  exit: {
    Feature: class extends w {
      constructor() {
        super(...arguments), this.id = ev++, this.isExitComplete = !1;
      }
      update() {
        if (!this.node.presenceContext) return;
        let {
            isPresent: t,
            onExitComplete: e
          } = this.node.presenceContext,
          {
            isPresent: i
          } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === i) return;
        if (t && !1 === i) {
          if (this.isExitComplete) {
            let {
              initial: t,
              custom: e
            } = this.node.getProps();
            if ("string" == typeof t || "object" == typeof t && null !== t && !Array.isArray(t)) {
              let i = P(this.node, t, e);
              if (i) {
                let {
                  transition: t,
                  transitionEnd: e,
                  ...n
                } = i;
                for (let t in n) this.node.getValue(t)?.jump(n[t]);
              }
            }
            this.node.animationState.reset(), this.node.animationState.animateChanges();
          } else this.node.animationState.setActive("exit", !1);
          this.isExitComplete = !1;
          return;
        }
        let n = this.node.animationState.setActive("exit", !t);
        e && !t && n.then(() => {
          this.isExitComplete = !0, e(this.id);
        });
      }
      mount() {
        let {
          register: t,
          onExitComplete: e
        } = this.node.presenceContext || {};
        e && e(this.id), t && (this.unmount = t(this.id));
      }
      unmount() {}
    }
  }
};
export { _export_animations as animations };

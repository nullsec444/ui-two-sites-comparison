// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module69699 from "./69699.js";
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
var D = _module69699;
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
const _export_JSAnimation = tK;
export { _export_JSAnimation as JSAnimation };

// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module45032 from "./45032.js";
let e,
  i = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
  n = new Set([...i, "pathRotation"]);
let s = (t, e, i) => i > e ? e : i < t ? t : i;
let r = {
    test: t => "number" == typeof t,
    parse: parseFloat,
    transform: t => t
  },
  o = {
    ...r,
    transform: t => s(0, 1, t)
  },
  a = {
    ...r,
    default: 1
  },
  l = t => Math.round(1e5 * t) / 1e5,
  u = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
  h = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  c = (t, e) => i => !!("string" == typeof i && h.test(i) && i.startsWith(t) || e && null != i && Object.prototype.hasOwnProperty.call(i, e)),
  d = (t, e, i) => n => {
    if ("string" != typeof n) return n;
    let [s, r, o, a] = n.match(u);
    return {
      [t]: parseFloat(s),
      [e]: parseFloat(r),
      [i]: parseFloat(o),
      alpha: void 0 !== a ? parseFloat(a) : 1
    };
  },
  p = {
    ...r,
    transform: t => Math.round(s(0, 255, t))
  },
  m = {
    test: c("rgb", "red"),
    parse: d("red", "green", "blue"),
    transform: ({
      red: t,
      green: e,
      blue: i,
      alpha: n = 1
    }) => "rgba(" + p.transform(t) + ", " + p.transform(e) + ", " + p.transform(i) + ", " + l(o.transform(n)) + ")"
  };
let f = {
  test: c("#"),
  parse: function (t) {
    let e = "",
      i = "",
      n = "",
      s = "";
    return t.length > 5 ? (e = t.substring(1, 3), i = t.substring(3, 5), n = t.substring(5, 7), s = t.substring(7, 9)) : (e = t.substring(1, 2), i = t.substring(2, 3), n = t.substring(3, 4), s = t.substring(4, 5), e += e, i += i, n += n, s += s), {
      red: parseInt(e, 16),
      green: parseInt(i, 16),
      blue: parseInt(n, 16),
      alpha: s ? parseInt(s, 16) / 255 : 1
    };
  },
  transform: m.transform
};
let g = t => ({
    test: e => "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
    parse: parseFloat,
    transform: e => `${e}${t}`
  }),
  v = g("deg"),
  y = g("%"),
  x = g("px"),
  b = g("vh"),
  T = g("vw"),
  w = {
    ...y,
    parse: t => y.parse(t) / 100,
    transform: t => y.transform(100 * t)
  };
let S = {
  test: c("hsl", "hue"),
  parse: d("hue", "saturation", "lightness"),
  transform: ({
    hue: t,
    saturation: e,
    lightness: i,
    alpha: n = 1
  }) => "hsla(" + Math.round(t) + ", " + y.transform(l(e)) + ", " + y.transform(l(i)) + ", " + l(o.transform(n)) + ")"
};
let P = {
  test: t => m.test(t) || f.test(t) || S.test(t),
  parse: t => m.test(t) ? m.parse(t) : S.test(t) ? S.parse(t) : f.parse(t),
  transform: t => "string" == typeof t ? t : t.hasOwnProperty("red") ? m.transform(t) : S.transform(t),
  getAnimatableNone: t => {
    let e = P.parse(t);
    return e.alpha = 0, P.transform(e);
  }
};
let M = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
  A = "number",
  V = "color",
  E = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function C(t) {
  let e = t.toString(),
    i = [],
    n = {
      color: [],
      number: [],
      var: []
    },
    s = [],
    r = 0,
    o = e.replace(E, t => (P.test(t) ? (n.color.push(r), s.push(V), i.push(P.parse(t))) : t.startsWith("var(") ? (n.var.push(r), s.push("var"), i.push(t)) : (n.number.push(r), s.push(A), i.push(parseFloat(t))), ++r, "${}")).split("${}");
  return {
    values: i,
    split: o,
    indexes: n,
    types: s
  };
}
function D({
  split: t,
  types: e
}) {
  let i = t.length;
  return n => {
    let s = "";
    for (let r = 0; r < i; r++) if (s += t[r], void 0 !== n[r]) {
      let t = e[r];
      t === A ? s += l(n[r]) : t === V ? s += P.transform(n[r]) : s += n[r];
    }
    return s;
  };
}
let R = {
  test: function (t) {
    return isNaN(t) && "string" == typeof t && (t.match(u)?.length || 0) + (t.match(M)?.length || 0) > 0;
  },
  parse: function (t) {
    return C(t).values;
  },
  createTransformer: function (t) {
    return D(C(t));
  },
  getAnimatableNone: function (t) {
    let e = C(t);
    return D(e)(e.values.map((t, i) => ((t, e) => "number" == typeof t ? e?.trim().endsWith("/") ? t : 0 : "number" == typeof t ? 0 : P.test(t) ? P.getAnimatableNone(t) : t)(t, e.split[i])));
  }
};
let k = new Set(["brightness", "contrast", "saturate", "opacity"]);
function L(t) {
  let [e, i] = t.slice(0, -1).split("(");
  if ("drop-shadow" === e) return t;
  let [n] = i.match(u) || [];
  if (!n) return t;
  let s = i.replace(n, ""),
    r = +!!k.has(e);
  return n !== i && (r *= 100), e + "(" + r + s + ")";
}
let B = /\b([a-z-]*)\(.*?\)/gu,
  F = {
    ...R,
    getAnimatableNone: t => {
      let e = t.match(B);
      return e ? e.map(L).join(" ") : t;
    }
  },
  j = {
    ...R,
    getAnimatableNone: t => {
      let e = R.parse(t);
      return R.createTransformer(t)(e.map(t => "number" == typeof t ? 0 : "object" == typeof t ? {
        ...t,
        alpha: 1
      } : t));
    }
  },
  I = {
    ...r,
    transform: Math.round
  },
  O = {
    borderWidth: x,
    borderTopWidth: x,
    borderRightWidth: x,
    borderBottomWidth: x,
    borderLeftWidth: x,
    borderRadius: x,
    borderTopLeftRadius: x,
    borderTopRightRadius: x,
    borderBottomRightRadius: x,
    borderBottomLeftRadius: x,
    width: x,
    maxWidth: x,
    height: x,
    maxHeight: x,
    top: x,
    right: x,
    bottom: x,
    left: x,
    inset: x,
    insetBlock: x,
    insetBlockStart: x,
    insetBlockEnd: x,
    insetInline: x,
    insetInlineStart: x,
    insetInlineEnd: x,
    padding: x,
    paddingTop: x,
    paddingRight: x,
    paddingBottom: x,
    paddingLeft: x,
    paddingBlock: x,
    paddingBlockStart: x,
    paddingBlockEnd: x,
    paddingInline: x,
    paddingInlineStart: x,
    paddingInlineEnd: x,
    margin: x,
    marginTop: x,
    marginRight: x,
    marginBottom: x,
    marginLeft: x,
    marginBlock: x,
    marginBlockStart: x,
    marginBlockEnd: x,
    marginInline: x,
    marginInlineStart: x,
    marginInlineEnd: x,
    fontSize: x,
    backgroundPositionX: x,
    backgroundPositionY: x,
    rotate: v,
    pathRotation: v,
    rotateX: v,
    rotateY: v,
    rotateZ: v,
    scale: a,
    scaleX: a,
    scaleY: a,
    scaleZ: a,
    skew: v,
    skewX: v,
    skewY: v,
    distance: x,
    translateX: x,
    translateY: x,
    translateZ: x,
    x: x,
    y: x,
    z: x,
    perspective: x,
    transformPerspective: x,
    opacity: o,
    originX: w,
    originY: w,
    originZ: x,
    zIndex: I,
    fillOpacity: o,
    strokeOpacity: o,
    numOctaves: I
  },
  N = {
    ...O,
    color: P,
    backgroundColor: P,
    outlineColor: P,
    fill: P,
    stroke: P,
    borderColor: P,
    borderTopColor: P,
    borderRightColor: P,
    borderBottomColor: P,
    borderLeftColor: P,
    filter: F,
    WebkitFilter: F,
    mask: j,
    WebkitMask: j
  },
  U = t => N[t],
  W = () => ({
    min: 0,
    max: 0
  }),
  G = () => ({
    x: W(),
    y: W()
  });
let z = t => !!(t && t.getVelocity);
let H = new Set(["width", "height", "top", "left", "right", "bottom", ...i]);
let Y = t => e => e.test(t),
  K = [r, x, y, v, T, b, {
    test: t => "auto" === t,
    parse: t => t
  }],
  X = t => K.find(Y(t));
let Z = () => {};
let _ = t => e => "string" == typeof e && e.startsWith(t),
  J = _("--"),
  Q = _("var(--"),
  tt = t => !!Q(t) && te.test(t.split("/*")[0].trim()),
  te = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function ti(t) {
  return "string" == typeof t && t.split("/*")[0].includes("var(--");
}
let tn = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
  ts = t => 180 * t / Math.PI,
  tr = t => ta(ts(Math.atan2(t[1], t[0]))),
  to = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: t => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
    rotate: tr,
    rotateZ: tr,
    skewX: t => ts(Math.atan(t[1])),
    skewY: t => ts(Math.atan(t[2])),
    skew: t => (Math.abs(t[1]) + Math.abs(t[2])) / 2
  },
  ta = t => ((t %= 360) < 0 && (t += 360), t),
  tl = t => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
  tu = t => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
  th = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: tl,
    scaleY: tu,
    scale: t => (tl(t) + tu(t)) / 2,
    rotateX: t => ta(ts(Math.atan2(t[6], t[5]))),
    rotateY: t => ta(ts(Math.atan2(-t[2], t[0]))),
    rotateZ: tr,
    rotate: tr,
    skewX: t => ts(Math.atan(t[4])),
    skewY: t => ts(Math.atan(t[1])),
    skew: t => (Math.abs(t[1]) + Math.abs(t[4])) / 2
  };
function tc(t) {
  return +!!t.includes("scale");
}
function td(t, e) {
  let i, n;
  if (!t || "none" === t) return tc(e);
  let s = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  if (s) i = th, n = s;else {
    let e = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    i = to, n = e;
  }
  if (!n) return tc(e);
  let r = i[e],
    o = n[1].split(",").map(tp);
  return "function" == typeof r ? r(o) : o[r];
}
function tp(t) {
  return parseFloat(t.trim());
}
let tm = t => t === r || t === x,
  tf = new Set(["x", "y", "z"]),
  tg = i.filter(t => !tf.has(t)),
  tv = {
    width: ({
      x: t
    }, {
      paddingLeft: e = "0",
      paddingRight: i = "0",
      boxSizing: n
    }) => {
      let s = t.max - t.min;
      return "border-box" === n ? s : s - parseFloat(e) - parseFloat(i);
    },
    height: ({
      y: t
    }, {
      paddingTop: e = "0",
      paddingBottom: i = "0",
      boxSizing: n
    }) => {
      let s = t.max - t.min;
      return "border-box" === n ? s : s - parseFloat(e) - parseFloat(i);
    },
    top: (t, {
      top: e
    }) => parseFloat(e),
    left: (t, {
      left: e
    }) => parseFloat(e),
    bottom: ({
      y: t
    }, {
      top: e
    }) => parseFloat(e) + (t.max - t.min),
    right: ({
      x: t
    }, {
      left: e
    }) => parseFloat(e) + (t.max - t.min),
    x: (t, {
      transform: e
    }) => td(e, "x"),
    y: (t, {
      transform: e
    }) => td(e, "y")
  };
let ty = t => t;
let tx = {};
let tb = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];
function tT(t, e) {
  let i = !1,
    n = !0,
    s = {
      delta: 0,
      timestamp: 0,
      isProcessing: !1
    },
    r = () => i = !0,
    o = tb.reduce((t, e) => (t[e] = function (t) {
      let e = new Set(),
        i = new Set(),
        n = !1,
        s = !1,
        r = new WeakSet(),
        o = {
          delta: 0,
          timestamp: 0,
          isProcessing: !1
        };
      function a(e) {
        r.has(e) && (l.schedule(e), t()), e(o);
      }
      let l = {
        schedule: (t, s = !1, o = !1) => {
          let a = o && n ? e : i;
          return s && r.add(t), a.add(t), t;
        },
        cancel: t => {
          i.delete(t), r.delete(t);
        },
        process: t => {
          if (o = t, n) {
            s = !0;
            return;
          }
          n = !0;
          let r = e;
          e = i, i = r, e.forEach(a), e.clear(), n = !1, s && (s = !1, l.process(t));
        }
      };
      return l;
    }(r), t), {}),
    {
      setup: a,
      read: l,
      resolveKeyframes: u,
      preUpdate: h,
      update: c,
      preRender: d,
      render: p,
      postRender: m
    } = o,
    f = () => {
      let r = tx.useManualTiming,
        o = r ? s.timestamp : performance.now();
      i = !1, r || (s.delta = n ? 1e3 / 60 : Math.max(Math.min(o - s.timestamp, 40), 1)), s.timestamp = o, s.isProcessing = !0, a.process(s), l.process(s), u.process(s), h.process(s), c.process(s), d.process(s), p.process(s), m.process(s), s.isProcessing = !1, i && e && (n = !1, t(f));
    };
  return {
    schedule: tb.reduce((e, r) => {
      let a = o[r];
      return e[r] = (e, r = !1, o = !1) => (!i && (i = !0, n = !0, s.isProcessing || t(f)), a.schedule(e, r, o)), e;
    }, {}),
    cancel: t => {
      for (let e = 0; e < tb.length; e++) o[tb[e]].cancel(t);
    },
    state: s,
    steps: o
  };
}
let {
  schedule: tw,
  cancel: tS,
  state: tP,
  steps: tM
} = tT("u" > typeof requestAnimationFrame ? requestAnimationFrame : ty, !0);
let tA = new Set(),
  tV = !1,
  tE = !1,
  tC = !1;
function tD() {
  if (tE) {
    let t = Array.from(tA).filter(t => t.needsMeasurement),
      e = new Set(t.map(t => t.element)),
      i = new Map();
    e.forEach(t => {
      let e,
        n = (e = [], tg.forEach(i => {
          let n = t.getValue(i);
          void 0 !== n && (e.push([i, n.get()]), n.set(+!!i.startsWith("scale")));
        }), e);
      n.length && (i.set(t, n), t.render());
    }), t.forEach(t => t.measureInitialState()), e.forEach(t => {
      t.render();
      let e = i.get(t);
      e && e.forEach(([e, i]) => {
        t.getValue(e)?.set(i);
      });
    }), t.forEach(t => t.measureEndState()), t.forEach(t => {
      void 0 !== t.suspendedScrollY && window.scrollTo(0, t.suspendedScrollY);
    });
  }
  tE = !1, tV = !1, tA.forEach(t => t.complete(tC)), tA.clear();
}
function tR() {
  tA.forEach(t => {
    t.readKeyframes(), t.needsMeasurement && (tE = !0);
  });
}
class tk {
  constructor(t, e, i, n, s, r = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = e, this.name = i, this.motionValue = n, this.element = s, this.isAsync = r;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (tA.add(this), tV || (tV = !0, tw.read(tR), tw.resolveKeyframes(tD))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    let {
      unresolvedKeyframes: t,
      name: e,
      element: i,
      motionValue: n
    } = this;
    if (null === t[0]) {
      let s = n?.get(),
        r = t[t.length - 1];
      if (void 0 !== s) t[0] = s;else if (i && e) {
        let n = i.readValue(e, r);
        null != n && (t[0] = n);
      }
      void 0 === t[0] && (t[0] = r), n && void 0 === s && n.set(t[0]);
    }
    for (let e = 1; e < t.length; e++) t[e] ?? (t[e] = t[e - 1]);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(t = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), tA.delete(this);
  }
  cancel() {
    "scheduled" === this.state && (tA.delete(this), this.state = "pending");
  }
  resume() {
    "pending" === this.state && this.scheduleResolve();
  }
}
let tL = new Set([F, j]);
function tB(t, e) {
  let i = U(t);
  return tL.has(i) || (i = R), i.getAnimatableNone ? i.getAnimatableNone(e) : void 0;
}
let tF = new Set(["auto", "none", "0"]);
class tj extends tk {
  constructor(t, e, i, n, s) {
    super(t, e, i, n, s, !0);
  }
  readKeyframes() {
    let {
      unresolvedKeyframes: t,
      element: e,
      name: i
    } = this;
    if (!e || !e.current) return;
    super.readKeyframes();
    for (let i = 0; i < t.length; i++) {
      let n = t[i];
      if ("string" == typeof n && tt(n = n.trim())) {
        let s = function t(e, i, n = 1) {
          Z(n <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
          let [s, r] = function (t) {
            let e = tn.exec(t);
            if (!e) return [,];
            let [, i, n, s] = e;
            return [`--${i ?? n}`, s];
          }(e);
          if (!s) return;
          let o = window.getComputedStyle(i).getPropertyValue(s);
          if (o) {
            let t = o.trim();
            return /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t) ? parseFloat(t) : t;
          }
          return tt(r) ? t(r, i, n + 1) : r;
        }(n, e.current);
        void 0 !== s && (t[i] = s), i === t.length - 1 && (this.finalKeyframe = n);
      }
    }
    if (this.resolveNoneKeyframes(), !H.has(i) || 2 !== t.length) return;
    let [n, s] = t,
      r = X(n),
      o = X(s);
    if (ti(n) !== ti(s) && tv[i]) {
      this.needsMeasurement = !0;
      return;
    }
    if (r !== o) if (tm(r) && tm(o)) for (let e = 0; e < t.length; e++) {
      let i = t[e];
      "string" == typeof i && (t[e] = parseFloat(i));
    } else tv[i] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    let {
        unresolvedKeyframes: t,
        name: e
      } = this,
      i = [];
    for (let e = 0; e < t.length; e++) (null === t[e] || function (t) {
      if ("number" == typeof t) return 0 === t;
      if (null === t) return !0;
      return "none" === t || "0" === t || /^0[^.\s]+$/u.test(t);
    }(t[e])) && i.push(e);
    i.length && function (t, e, i) {
      let n,
        s = 0;
      for (; s < t.length && !n;) {
        let e = t[s];
        "string" == typeof e && !tF.has(e) && C(e).values.length && (n = t[s]), s++;
      }
      if (n && i) for (let s of e) t[s] = tB(i, n);
    }(t, i, e);
  }
  measureInitialState() {
    let {
      element: t,
      unresolvedKeyframes: e,
      name: i
    } = this;
    if (!t || !t.current) return;
    "height" === i && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = tv[i](t.measureViewportBox(), window.getComputedStyle(t.current)), e[0] = this.measuredOrigin;
    let n = e[e.length - 1];
    void 0 !== n && t.getValue(i, n).jump(n, !1);
  }
  measureEndState() {
    let {
      element: t,
      name: e,
      unresolvedKeyframes: i
    } = this;
    if (!t || !t.current) return;
    let n = t.getValue(e);
    n && n.jump(this.measuredOrigin, !1);
    let s = i.length - 1,
      r = i[s];
    i[s] = tv[e](t.measureViewportBox(), window.getComputedStyle(t.current)), null !== r && void 0 === this.finalKeyframe && (this.finalKeyframe = r), this.removedTransforms?.length && this.removedTransforms.forEach(([e, i]) => {
      t.getValue(e).set(i);
    }), this.resolveNoneKeyframes();
  }
}
let tI = t => 1e3 * t,
  tO = t => t / 1e3;
function tN(t, e) {
  -1 === t.indexOf(e) && t.push(e);
}
function tU(t, e) {
  let i = t.indexOf(e);
  i > -1 && t.splice(i, 1);
}
class t$ {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return tN(this.subscriptions, t), () => tU(this.subscriptions, t);
  }
  notify(t, e, i) {
    let n = this.subscriptions.length;
    if (n) if (1 === n) this.subscriptions[0](t, e, i);else for (let s = 0; s < n; s++) {
      let n = this.subscriptions[s];
      n && n(t, e, i);
    }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function tW(t, e, i) {
  e.startsWith("--") ? t.style.setProperty(e, i) : t.style[e] = i;
}
function tG(t) {
  let e;
  return () => (void 0 === e && (e = t()), e);
}
let tz = {};
function tH(t, e) {
  let i = tG(t);
  return () => tz[e] ?? i();
}
let tY = tH(() => void 0 !== window.ScrollTimeline, "scrollTimeline"),
  tK = t => null !== t;
function tX(t, {
  repeat: e,
  repeatType: i = "loop"
}, n, s = 1) {
  let r = t.filter(tK),
    o = s < 0 || e && "loop" !== i && e % 2 == 1 ? 0 : r.length - 1;
  return o && void 0 !== n ? n : r[o];
}
class tq {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise(t => {
      this.resolve = t;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(t, e) {
    return this.finished.then(t, e);
  }
}
let tZ = t => Array.isArray(t) && "number" == typeof t[0];
let t_ = tH(() => {
    try {
      document.createElement("div").animate({
        opacity: 0
      }, {
        easing: "linear(0, 1)"
      });
    } catch (t) {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  tJ = (t, e, i = 10) => {
    let n = "",
      s = Math.max(Math.round(e / i), 2);
    for (let e = 0; e < s; e++) n += Math.round(1e4 * t(e / (s - 1))) / 1e4 + ", ";
    return `linear(${n.substring(0, n.length - 2)})`;
  };
let tQ = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
  t0 = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: tQ([0, .65, .55, 1]),
    circOut: tQ([.55, 0, 1, .45]),
    backIn: tQ([.31, .01, .66, -.59]),
    backOut: tQ([.33, 1.53, .69, .99])
  };
function t1(t) {
  return "function" == typeof t && "applyToOptions" in t;
}
class t9 extends tq {
  constructor(t) {
    if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !t) return;
    const {
      element: e,
      name: i,
      keyframes: n,
      pseudoElement: s,
      allowFlatten: r = !1,
      finalKeyframe: o,
      onComplete: a
    } = t;
    this.isPseudoElement = !!s, this.allowFlatten = r, this.options = t, Z("string" != typeof t.type, 'Mini animate() doesn\'t support "type" as a string.', "mini-spring");
    const l = function ({
      type: t,
      ...e
    }) {
      return t1(t) && t_() ? t.applyToOptions(e) : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = "easeOut"), e);
    }(t);
    this.animation = function (t, e, i, {
      delay: n = 0,
      duration: s = 300,
      repeat: r = 0,
      repeatType: o = "loop",
      ease: a = "easeOut",
      times: l
    } = {}, u) {
      let h = {
        [e]: i
      };
      l && (h.offset = l);
      let c = function t(e, i) {
        if (e) return "function" == typeof e ? t_() ? tJ(e, i) : "ease-out" : tZ(e) ? tQ(e) : Array.isArray(e) ? e.map(e => t(e, i) || t0.easeOut) : t0[e];
      }(a, s);
      Array.isArray(c) && (h.easing = c);
      let d = {
        delay: n,
        duration: s,
        easing: Array.isArray(c) ? "linear" : c,
        fill: "both",
        iterations: r + 1,
        direction: "reverse" === o ? "alternate" : "normal"
      };
      return u && (d.pseudoElement = u), t.animate(h, d);
    }(e, i, n, l, s), !1 === l.autoplay && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !s) {
        let t = tX(n, this.options, o, this.speed);
        this.updateMotionValue && this.updateMotionValue(t), tW(e, i, t), this.animation.cancel();
      }
      a?.(), this.notifyFinished();
    };
  }
  play() {
    this.isStopped || (this.manualStartTime = null, this.animation.play(), "finished" === this.state && this.updateFinished());
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
    } catch (t) {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    let {
      state: t
    } = this;
    "idle" !== t && "finished" !== t && (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    let t = this.options?.element;
    !this.isPseudoElement && t?.isConnected && this.animation.commitStyles?.();
  }
  get duration() {
    return tO(Number(this.animation.effect?.getComputedTiming?.().duration || 0));
  }
  get iterationDuration() {
    let {
      delay: t = 0
    } = this.options || {};
    return this.duration + tO(t);
  }
  get time() {
    return tO(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    let e = null !== this.finishedTime;
    this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = tI(t), e && this.animation.pause();
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(t) {
    t < 0 && (this.finishedTime = null), this.animation.playbackRate = t;
  }
  get state() {
    return null !== this.finishedTime ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(t) {
    this.manualStartTime = this.animation.startTime = t;
  }
  attachTimeline({
    timeline: t,
    rangeStart: e,
    rangeEnd: i,
    observe: n
  }) {
    return (this.allowFlatten && this.animation.effect?.updateTiming({
      easing: "linear"
    }), this.animation.onfinish = null, t && tY()) ? (this.animation.timeline = t, e && (this.animation.rangeStart = e), i && (this.animation.rangeEnd = i), ty) : n(this);
  }
}
let t2 = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]);
let {
  schedule: t5
} = tT(queueMicrotask, !1);
function t3() {
  e = void 0;
}
let t4 = {
  now: () => (void 0 === e && t4.set(tP.isProcessing || tx.useManualTiming ? tP.timestamp : performance.now()), e),
  set: t => {
    e = t, queueMicrotask(t3);
  }
};
let t6 = (t, e) => e ? 1e3 / e * t : 0;
let t7 = {
  current: void 0
};
class t8 {
  constructor(t, e = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = t => {
      let e = t4.now();
      if (this.updatedAt !== e && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(t), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents)) for (let t of this.dependents) t.dirty();
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = e.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = t4.now(), null === this.canTrackVelocity && void 0 !== t && (this.canTrackVelocity = !isNaN(parseFloat(this.current)));
  }
  setPrevFrameValue(t = this.current) {
    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt;
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, e) {
    this.events[t] || (this.events[t] = new t$());
    let i = this.events[t].add(e);
    return "change" === t ? () => {
      i(), tw.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : i;
  }
  clearListeners() {
    for (let t in this.events) this.events[t].clear();
  }
  attach(t, e) {
    this.passiveEffect = t, this.stopPassiveEffect = e;
  }
  set(t) {
    this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t);
  }
  setWithVelocity(t, e, i) {
    this.set(e), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - i;
  }
  jump(t, e = !0) {
    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, e && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(t) {
    this.dependents || (this.dependents = new Set()), this.dependents.add(t);
  }
  removeDependent(t) {
    this.dependents && this.dependents.delete(t);
  }
  get() {
    return t7.current && t7.current.push(this), this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    let t = t4.now();
    if (!this.canTrackVelocity || void 0 === this.prevFrameValue || t - this.updatedAt > 30) return 0;
    let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
    return t6(parseFloat(this.current) - parseFloat(this.prevFrameValue), e);
  }
  start(t) {
    return this.stop(), new Promise(e => {
      this.hasAnimated = !0, this.animation = t(e), this.events.animationStart && this.events.animationStart.notify();
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
}
function et(t, e) {
  return new t8(t, e);
}
let ee = [...K, P, R],
  ei = new WeakMap();
function en(t) {
  return null !== t && "object" == typeof t && "function" == typeof t.start;
}
function es(t) {
  return "string" == typeof t || Array.isArray(t);
}
let er = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
  eo = ["initial", ...er];
function ea(t) {
  return en(t.animate) || eo.some(e => es(t[e]));
}
function el(t) {
  return !!(ea(t) || t.variants);
}
let eu = {
    current: null
  },
  eh = {
    current: !1
  },
  ec = "u" > typeof window;
function ed(t) {
  let e = [{}, {}];
  return t?.values.forEach((t, i) => {
    e[0][i] = t.get(), e[1][i] = t.getVelocity();
  }), e;
}
function ep(t, e, i, n) {
  if ("function" == typeof e) {
    let [s, r] = ed(n);
    e = e(void 0 !== i ? i : t.custom, s, r);
  }
  if ("string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e) {
    let [s, r] = ed(n);
    e = e(void 0 !== i ? i : t.custom, s, r);
  }
  return e;
}
let em = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
  ef = {};
class eg {
  scrapeMotionValuesFromProps(t, e, i) {
    return {};
  }
  constructor({
    parent: t,
    props: e,
    presenceContext: i,
    reducedMotionConfig: n,
    skipAnimations: s,
    blockInitialAnimation: r,
    visualState: o
  }, a = {}) {
    this.current = null, this.children = new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = new Map(), this.KeyframeResolver = tk, this.features = {}, this.valueSubscriptions = new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      let t = t4.now();
      this.renderScheduledAt < t && (this.renderScheduledAt = t, tw.render(this.render, !1, !0));
    };
    const {
      latestValues: l,
      renderState: u
    } = o;
    this.latestValues = l, this.baseTarget = {
      ...l
    }, this.initialValues = e.initial ? {
      ...l
    } : {}, this.renderState = u, this.parent = t, this.props = e, this.presenceContext = i, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = n, this.skipAnimationsConfig = s, this.options = a, this.blockInitialAnimation = !!r, this.isControllingVariants = ea(e), this.isVariantNode = el(e), this.isVariantNode && (this.variantChildren = new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const {
      willChange: h,
      ...c
    } = this.scrapeMotionValuesFromProps(e, {}, this);
    for (const t in c) {
      const e = c[t];
      void 0 !== l[t] && z(e) && e.set(l[t]);
    }
  }
  mount(t) {
    if (this.hasBeenMounted) for (let t in this.initialValues) this.values.get(t)?.jump(this.initialValues[t]), this.latestValues[t] = this.initialValues[t];
    this.current = t, ei.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((t, e) => this.bindToMotionValue(e, t)), "never" === this.reducedMotionConfig ? this.shouldReduceMotion = !1 : "always" === this.reducedMotionConfig ? this.shouldReduceMotion = !0 : (eh.current || function () {
      if (eh.current = !0, ec) if (window.matchMedia) {
        let t = window.matchMedia("(prefers-reduced-motion)"),
          e = () => eu.current = t.matches;
        t.addEventListener("change", e), e();
      } else eu.current = !1;
    }(), this.shouldReduceMotion = eu.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
  }
  unmount() {
    for (let t in this.projection && this.projection.unmount(), tS(this.notifyUpdate), tS(this.render), this.valueSubscriptions.forEach(t => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this), this.events) this.events[t].clear();
    for (let t in this.features) {
      let e = this.features[t];
      e && (e.unmount(), e.isMounted = !1);
    }
    this.current = null;
  }
  addChild(t) {
    this.children.add(t), this.enteringChildren ?? (this.enteringChildren = new Set()), this.enteringChildren.add(t);
  }
  removeChild(t) {
    this.children.delete(t), this.enteringChildren && this.enteringChildren.delete(t);
  }
  bindToMotionValue(t, e) {
    let i;
    if (this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)(), e.accelerate && t2.has(t) && this.current instanceof HTMLElement) {
      let {
          factory: i,
          keyframes: n,
          times: s,
          ease: r,
          duration: o
        } = e.accelerate,
        a = new t9({
          element: this.current,
          name: t,
          keyframes: n,
          times: s,
          ease: r,
          duration: tI(o)
        }),
        l = i(a);
      this.valueSubscriptions.set(t, () => {
        l(), a.cancel();
      });
      return;
    }
    let s = n.has(t);
    s && this.onBindTransform && this.onBindTransform();
    let r = e.on("change", e => {
      this.latestValues[t] = e, this.props.onUpdate && tw.preRender(this.notifyUpdate), s && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    "u" > typeof window && window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, t, e)), this.valueSubscriptions.set(t, () => {
      r(), i && i();
    });
  }
  sortNodePosition(t) {
    return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0;
  }
  updateFeatures() {
    let t = "animation";
    for (t in ef) {
      let e = ef[t];
      if (!e) continue;
      let {
        isEnabled: i,
        Feature: n
      } = e;
      if (!this.features[t] && n && i(this.props) && (this.features[t] = new n(this)), this.features[t]) {
        let e = this.features[t];
        e.isMounted ? e.update() : (e.mount(), e.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : G();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, e) {
    this.latestValues[t] = e;
  }
  update(t, e) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = e;
    for (let e = 0; e < em.length; e++) {
      let i = em[e];
      this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      let n = t["on" + i];
      n && (this.propEventSubscriptions[i] = this.on(i, n));
    }
    this.prevMotionValues = function (t, e, i) {
      for (let n in e) {
        let s = e[n],
          r = i[n];
        if (z(s)) t.addValue(n, s);else if (z(r)) t.addValue(n, et(s, {
          owner: t
        }));else if (r !== s) if (t.hasValue(n)) {
          let e = t.getValue(n);
          !0 === e.liveStyle ? e.jump(s) : e.hasAnimated || e.set(s);
        } else {
          let e = t.getStaticValue(n);
          t.addValue(n, et(void 0 !== e ? e : s, {
            owner: t
          }));
        }
      }
      for (let n in i) void 0 === e[n] && t.removeValue(n);
      return e;
    }(this, this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
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
  addVariantChild(t) {
    let e = this.getClosestVariantNode();
    if (e) return e.variantChildren && e.variantChildren.add(t), () => e.variantChildren.delete(t);
  }
  addValue(t, e) {
    let i = this.values.get(t);
    e !== i && (i && this.removeValue(t), this.bindToMotionValue(t, e), this.values.set(t, e), this.latestValues[t] = e.get());
  }
  removeValue(t) {
    this.values.delete(t);
    let e = this.valueSubscriptions.get(t);
    e && (e(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, e) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let i = this.values.get(t);
    return void 0 === i && void 0 !== e && (i = et(null === e ? void 0 : e, {
      owner: this
    }), this.addValue(t, i)), i;
  }
  readValue(t, e) {
    let i = void 0 === this.latestValues[t] && this.current ? this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t];
    if (null != i) {
      let n, s;
      if ("string" == typeof i && (n = i, /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n) || (s = i, /^0[^.\s]+$/u.test(s)))) i = parseFloat(i);else {
        let n;
        n = i, !ee.find(Y(n)) && R.test(e) && (i = tB(t, e));
      }
      this.setBaseTarget(t, z(i) ? i.get() : i);
    }
    return z(i) ? i.get() : i;
  }
  setBaseTarget(t, e) {
    this.baseTarget[t] = e;
  }
  getBaseTarget(t) {
    let e,
      {
        initial: i
      } = this.props;
    if ("string" == typeof i || "object" == typeof i) {
      let n = ep(this.props, i, this.presenceContext?.custom);
      n && (e = n[t]);
    }
    if (i && void 0 !== e) return e;
    let n = this.getBaseTargetFromProps(this.props, t);
    return void 0 === n || z(n) ? void 0 !== this.initialValues[t] && void 0 === e ? void 0 : this.baseTarget[t] : n;
  }
  on(t, e) {
    return this.events[t] || (this.events[t] = new t$()), this.events[t].add(e);
  }
  notify(t, ...e) {
    this.events[t] && this.events[t].notify(...e);
  }
  scheduleRenderMicrotask() {
    t5.render(this.render);
  }
}
class ev extends eg {
  constructor() {
    super(...arguments), this.KeyframeResolver = tj;
  }
  sortInstanceNodePosition(t, e) {
    return 2 & t.compareDocumentPosition(e) ? 1 : -1;
  }
  getBaseTargetFromProps(t, e) {
    let i = t.style;
    return i ? i[e] : void 0;
  }
  removeValueFromRenderState(t, {
    vars: e,
    style: i
  }) {
    delete e[t], delete i[t];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    let {
      children: t
    } = this.props;
    z(t) && (this.childSubscription = t.on("change", t => {
      this.current && (this.current.textContent = `${t}`);
    }));
  }
}
function ey(t) {
  return t.replace(/([A-Z])/g, t => `-${t.toLowerCase()}`);
}
let ex = (t, e) => e && "number" == typeof t ? e.transform(t) : t,
  eb = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
  },
  eT = i.length;
function ew(t, e, s) {
  let {
      style: r,
      vars: o,
      transformOrigin: a
    } = t,
    l = !1,
    u = !1;
  for (let t in e) {
    let i = e[t];
    if (n.has(t)) {
      l = !0;
      continue;
    }
    if (J(t)) {
      o[t] = i;
      continue;
    }
    {
      let e = ex(i, O[t]);
      t.startsWith("origin") ? (u = !0, a[t] = e) : r[t] = e;
    }
  }
  if (!e.transform && (l || s ? r.transform = function (t, e, n) {
    let s = "",
      r = !0;
    for (let o = 0; o < eT; o++) {
      let a = i[o],
        l = t[a];
      if (void 0 === l) continue;
      let u = !0;
      if ("number" == typeof l) u = l === +!!a.startsWith("scale");else {
        let t = parseFloat(l);
        u = a.startsWith("scale") ? 1 === t : 0 === t;
      }
      if (!u || n) {
        let t = ex(l, O[a]);
        if (!u) {
          r = !1;
          let e = eb[a] || a;
          s += `${e}(${t}) `;
        }
        n && (e[a] = t);
      }
    }
    let o = t.pathRotation;
    return o && (r = !1, s += `rotate(${ex(o, O.pathRotation)}) `), s = s.trim(), n ? s = n(e, r ? "" : s) : r && (s = "none"), s;
  }(e, t.transform, s) : r.transform && (r.transform = "none")), u) {
    let {
      originX: t = "50%",
      originY: e = "50%",
      originZ: i = 0
    } = a;
    r.transformOrigin = `${t} ${e} ${i}`;
  }
}
let eS = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
  },
  eP = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
  },
  eM = ["transform", "opacity", "offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function eA(t, {
  attrX: e,
  attrY: i,
  attrScale: n,
  pathLength: s,
  pathSpacing: r = 1,
  pathOffset: o = 0,
  ...a
}, l, u, h) {
  if (ew(t, a, u), l) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  t.attrs = t.style, t.style = {};
  let {
    attrs: c,
    style: d
  } = t;
  for (let t of eM) void 0 !== c[t] && (d[t] = c[t], delete c[t]);
  (d.transform || c.transformOrigin) && (d.transformOrigin = c.transformOrigin ?? "50% 50%", delete c.transformOrigin), d.transform && (d.transformBox = h?.transformBox ?? "fill-box", delete c.transformBox), void 0 !== e && (c.x = e), void 0 !== i && (c.y = i), void 0 !== n && (c.scale = n), void 0 !== s && function (t, e, i = 1, n = 0, s = !0) {
    t.pathLength = 1;
    let r = s ? eS : eP;
    t[r.offset] = `${-n}`, t[r.array] = `${e} ${i}`;
  }(c, s, r, o, !1);
}
let eV = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]),
  eE = t => "string" == typeof t && "svg" === t.toLowerCase();
function eC(t, {
  style: e,
  vars: i
}, n, s) {
  let r,
    o = t.style;
  for (r in e) o[r] = e[r];
  for (r in s?.applyProjectionStyles(o, n), i) o.setProperty(r, i[r]);
}
let eD = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"];
function eR(t, e) {
  return e.max === e.min ? 0 : t / (e.max - e.min) * 100;
}
let ek = {
    correct: (t, e) => {
      if (!e.target) return t;
      if ("string" == typeof t) if (!x.test(t)) return t;else t = parseFloat(t);
      let i = eR(t, e.target.x),
        n = eR(t, e.target.y);
      return `${i}% ${n}%`;
    }
  },
  eL = (t, e, i) => t + (e - t) * i;
let eB = {
  borderRadius: {
    ...ek,
    applyTo: [...eD]
  },
  borderTopLeftRadius: ek,
  borderTopRightRadius: ek,
  borderBottomLeftRadius: ek,
  borderBottomRightRadius: ek,
  boxShadow: {
    correct: (t, {
      treeScale: e,
      projectionDelta: i
    }) => {
      let n = R.parse(t);
      if (n.length > 5) return t;
      let s = R.createTransformer(t),
        r = +("number" != typeof n[0]),
        o = i.x.scale * e.x,
        a = i.y.scale * e.y;
      n[0 + r] /= o, n[1 + r] /= a;
      let l = eL(o, a, .5);
      return "number" == typeof n[2 + r] && (n[2 + r] /= l), "number" == typeof n[3 + r] && (n[3 + r] /= l), s(n);
    }
  }
};
function eF(t, {
  layout: e,
  layoutId: i
}) {
  return n.has(t) || t.startsWith("origin") || (e || void 0 !== i) && (!!eB[t] || "opacity" === t);
}
function ej(t, e, i) {
  let n = t.style,
    s = e?.style,
    r = {};
  if (!n) return r;
  for (let e in n) (z(n[e]) || s && z(s[e]) || eF(e, t) || i?.getValue(e)?.liveStyle !== void 0) && (r[e] = n[e]);
  return r;
}
function eI(t, e, n) {
  let s = ej(t, e, n);
  for (let n in t) (z(t[n]) || z(e[n])) && (s[-1 !== i.indexOf(n) ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n] = t[n]);
  return s;
}
class eO extends ev {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = G;
  }
  getBaseTargetFromProps(t, e) {
    return t[e];
  }
  readValueFromInstance(t, e) {
    if (n.has(e)) {
      let t = U(e);
      return t && t.default || 0;
    }
    if (eM.includes(e)) {
      let i = getComputedStyle(t)[e];
      if ("string" == typeof i && i) return i.trim();
    }
    return e = eV.has(e) ? e : ey(e), t.getAttribute(e);
  }
  scrapeMotionValuesFromProps(t, e, i) {
    return eI(t, e, i);
  }
  build(t, e, i) {
    eA(t, e, this.isSVGTag, i.transformTemplate, i.style);
  }
  renderInstance(t, e, i, n) {
    for (let i in eC(t, e, void 0, n), e.attrs) t.setAttribute(eV.has(i) ? i : ey(i), e.attrs[i]);
  }
  mount(t) {
    this.isSVGTag = eE(t.tagName), super.mount(t);
  }
}
function eN({
  top: t,
  left: e,
  right: i,
  bottom: n
}) {
  return {
    x: {
      min: e,
      max: i
    },
    y: {
      min: t,
      max: n
    }
  };
}
function eU(t, e) {
  if (!e) return t;
  let i = e({
      x: t.left,
      y: t.top
    }),
    n = e({
      x: t.right,
      y: t.bottom
    });
  return {
    top: i.y,
    left: i.x,
    bottom: n.y,
    right: n.x
  };
}
function eQ(t, e) {
  return eN(eU(t.getBoundingClientRect(), e));
}
class e0 extends ev {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = eC;
  }
  mount(t) {
    Z(!!t.style, "motion.create() components must forward their ref to a HTML or SVG element", "custom-component-ref"), super.mount(t);
  }
  readValueFromInstance(t, e) {
    if (n.has(e)) return this.projection?.isProjecting ? tc(e) : ((t, e) => {
      let {
        transform: i = "none"
      } = getComputedStyle(t);
      return td(i, e);
    })(t, e);
    {
      let i = window.getComputedStyle(t),
        n = (J(e) ? i.getPropertyValue(e) : i[e]) || 0;
      return "string" == typeof n ? n.trim() : n;
    }
  }
  measureInstanceViewportBox(t, {
    transformPagePoint: e
  }) {
    return eQ(t, e);
  }
  build(t, e, i) {
    ew(t, e, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, e, i) {
    return ej(t, e, i);
  }
}
var e1 = _module45032;
let e9 = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function e2(t) {
  if ("string" != typeof t || t.includes("-")) ;else if (e9.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
  return !1;
}
const _export_createDomVisualElement = (t, e) => e.isSVG ?? e2(t) ? new eO(e) : new e0(e, {
  allowProjection: t !== e1.Fragment
});
export { _export_createDomVisualElement as createDomVisualElement };

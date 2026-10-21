// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module50547 from "./50547.js";
import * as _module30548 from "./30548.js";
import * as _module66919 from "./66919.js";
import * as _module98582 from "./98582.js";
import * as _module35658 from "./35658.js";
import * as _module33092 from "./33092.js";
import * as _module98655 from "./98655.js";
import * as _module72149 from "./72149.js";
import * as _module68427 from "./68427.js";
import * as _module18949 from "./18949.js";
import * as _module17696 from "./17696.js";
import * as _module65865 from "./65865.js";
import * as _module94511 from "./94511.js";
import * as _module67027 from "./67027.js";
import * as _module96563 from "./96563.js";
import * as _module11764 from "./11764.js";
import * as _module97107 from "./97107.js";
import * as _module88200 from "./88200.js";
import * as _module48681 from "./48681.js";
import * as _module10922 from "./10922.js";
import * as _module1077 from "./1077.js";
let e, i;
var n = _module50547,
  s = _module30548,
  r = _module66919,
  o = _module98582,
  a = _module35658,
  l = _module33092,
  u = _module98655,
  h = _module72149,
  c = _module68427,
  d = _module18949,
  p = _module17696,
  m = _module65865,
  f = _module94511,
  g = _module67027,
  v = _module96563;
function y(t) {
  return (0, v.isObject)(t) && "ownerSVGElement" in t;
}
function x(t, e, i) {
  if (null == t) return [];
  if (t instanceof EventTarget) return [t];
  if ("string" == typeof t) {
    let n = document;
    e && (n = e.current);
    let s = i?.[t] ?? n.querySelectorAll(t);
    return s ? Array.from(s) : [];
  }
  return Array.from(t).filter(t => null != t);
}
let b = new WeakMap(),
  T = (t, e, i) => (n, s) => s && s[0] ? s[0][t + "Size"] : y(n) && "getBBox" in n ? n.getBBox()[e] : n[i],
  w = T("inline", "width", "offsetWidth"),
  S = T("block", "height", "offsetHeight");
function P({
  target: t,
  borderBoxSize: e
}) {
  b.get(t)?.forEach(i => {
    i(t, {
      get width() {
        return w(t, e);
      },
      get height() {
        return S(t, e);
      }
    });
  });
}
function M(t) {
  t.forEach(P);
}
let A = new Set();
function V(t, n) {
  let s;
  return "function" == typeof t ? (A.add(t), i || (i = () => {
    let t = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      }
    };
    A.forEach(e => e(t));
  }, window.addEventListener("resize", i)), () => {
    A.delete(t), A.size || "function" != typeof i || (window.removeEventListener("resize", i), i = void 0);
  }) : (!e && "u" > typeof ResizeObserver && (e = new ResizeObserver(M)), (s = x(t)).forEach(t => {
    let i = b.get(t);
    i || (i = new Set(), b.set(t, i)), i.add(n), e?.observe(t);
  }), () => {
    s.forEach(t => {
      let i = b.get(t);
      i?.delete(n), i?.size || e?.unobserve(t);
    });
  });
}
let C = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function D(t) {
  return C.has(t.tagName) || !0 === t.isContentEditable;
}
var R = _module11764;
let k = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary;
function L(t) {
  return {
    point: {
      x: t.pageX,
      y: t.pageY
    }
  };
}
let B = t => e => k(e) && t(e, L(e));
function F(t, e, i, n) {
  return (0, p.addDomEvent)(t, e, B(i), n);
}
let j = ({
  current: t
}) => t ? t.ownerDocument.defaultView : null;
var I = _module97107,
  O = _module88200,
  N = _module48681;
let U = (t, e) => Math.abs(t - e),
  $ = new Set(["auto", "scroll"]);
class W {
  constructor(t, e, {
    transformPagePoint: i,
    contextWindow: n = window,
    dragSnapToOrigin: s = !1,
    distanceThreshold: r = 3,
    element: a
  } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = new Map(), this.removeScrollListeners = null, this.onElementScroll = t => {
      this.handleScroll(t.target);
    }, this.onWindowScroll = () => {
      this.handleScroll(window);
    }, this.updatePoint = () => {
      var t, e;
      if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
      this.lastRawMoveEventInfo && (this.lastMoveEventInfo = G(this.lastRawMoveEventInfo, this.transformPagePoint));
      let i = H(this.lastMoveEventInfo, this.history),
        n = null !== this.startEvent,
        s = (t = i.offset, e = {
          x: 0,
          y: 0
        }, Math.sqrt(U(t.x, e.x) ** 2 + U(t.y, e.y) ** 2) >= this.distanceThreshold);
      if (!n && !s) return;
      let {
          point: r
        } = i,
        {
          timestamp: a
        } = o.frameData;
      this.history.push({
        ...r,
        timestamp: a
      });
      let {
        onStart: l,
        onMove: u
      } = this.handlers;
      n || (l && l(this.lastMoveEvent, i), this.startEvent = this.lastMoveEvent), u && u(this.lastMoveEvent, i);
    }, this.handlePointerMove = (t, e) => {
      this.lastMoveEvent = t, this.lastRawMoveEventInfo = e, this.lastMoveEventInfo = G(e, this.transformPagePoint), o.frame.update(this.updatePoint, !0);
    }, this.handlePointerUp = (t, e) => {
      this.end();
      let {
        onEnd: i,
        onSessionEnd: n,
        resumeAnimation: s
      } = this.handlers;
      if ((this.dragSnapToOrigin || !this.startEvent) && s && s(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
      let r = H("pointercancel" === t.type ? this.lastMoveEventInfo : G(e, this.transformPagePoint), this.history);
      this.startEvent && i && i(t, r), n && n(t, r);
    }, !k(t)) return;
    this.dragSnapToOrigin = s, this.handlers = e, this.transformPagePoint = i, this.distanceThreshold = r, this.contextWindow = n || window;
    const l = G(L(t), this.transformPagePoint),
      {
        point: u
      } = l,
      {
        timestamp: h
      } = o.frameData;
    this.history = [{
      ...u,
      timestamp: h
    }];
    const {
      onSessionStart: c
    } = e;
    c && c(t, H(l, this.history));
    const d = {
      passive: !0,
      capture: !0
    };
    this.removeListeners = (0, O.pipe)(F(this.contextWindow, "pointermove", this.handlePointerMove, d), F(this.contextWindow, "pointerup", this.handlePointerUp, d), F(this.contextWindow, "pointercancel", this.handlePointerUp, d)), a && this.startScrollTracking(a);
  }
  startScrollTracking(t) {
    let e = t.parentElement;
    for (; e;) {
      let t = getComputedStyle(e);
      ($.has(t.overflowX) || $.has(t.overflowY)) && this.scrollPositions.set(e, {
        x: e.scrollLeft,
        y: e.scrollTop
      }), e = e.parentElement;
    }
    this.scrollPositions.set(window, {
      x: window.scrollX,
      y: window.scrollY
    }), window.addEventListener("scroll", this.onElementScroll, {
      capture: !0
    }), window.addEventListener("scroll", this.onWindowScroll), this.removeScrollListeners = () => {
      window.removeEventListener("scroll", this.onElementScroll, {
        capture: !0
      }), window.removeEventListener("scroll", this.onWindowScroll);
    };
  }
  handleScroll(t) {
    let e = this.scrollPositions.get(t);
    if (!e) return;
    let i = t === window,
      n = i ? {
        x: window.scrollX,
        y: window.scrollY
      } : {
        x: t.scrollLeft,
        y: t.scrollTop
      },
      s = {
        x: n.x - e.x,
        y: n.y - e.y
      };
    (0 !== s.x || 0 !== s.y) && (i ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += s.x, this.lastMoveEventInfo.point.y += s.y) : this.history.length > 0 && (this.history[0].x -= s.x, this.history[0].y -= s.y), this.scrollPositions.set(t, n), o.frame.update(this.updatePoint, !0));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), (0, o.cancelFrame)(this.updatePoint);
  }
}
function G(t, e) {
  return e ? {
    point: e(t.point)
  } : t;
}
function z(t, e) {
  return {
    x: t.x - e.x,
    y: t.y - e.y
  };
}
function H({
  point: t
}, e) {
  return {
    point: t,
    delta: z(t, Y(e)),
    offset: z(t, e[0]),
    velocity: function (t) {
      if (t.length < 2) return {
        x: 0,
        y: 0
      };
      let e = t.length - 1,
        i = null,
        n = Y(t);
      for (; e >= 0 && (i = t[e], !(n.timestamp - i.timestamp > (0, N.secondsToMilliseconds)(.1)));) e--;
      if (!i) return {
        x: 0,
        y: 0
      };
      i === t[0] && t.length > 2 && n.timestamp - i.timestamp > 2 * (0, N.secondsToMilliseconds)(.1) && (i = t[1]);
      let s = (0, N.millisecondsToSeconds)(n.timestamp - i.timestamp);
      if (0 === s) return {
        x: 0,
        y: 0
      };
      let r = {
        x: (n.x - i.x) / s,
        y: (n.y - i.y) / s
      };
      return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r;
    }(e)
  };
}
function Y(t) {
  return t[t.length - 1];
}
var K = _module10922,
  X = _module1077;
function q(t, e, i) {
  return {
    min: void 0 !== e ? t.min + e : void 0,
    max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
  };
}
function Z(t, e) {
  let i = e.min - t.min,
    n = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([i, n] = [n, i]), {
    min: i,
    max: n
  };
}
function _(t, e, i) {
  return {
    min: J(t, e),
    max: J(t, i)
  };
}
function J(t, e) {
  return "number" == typeof t ? t : t[e] || 0;
}
let Q = new WeakMap();
class tt {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
      x: 0,
      y: 0
    }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = (0, r.createBox)(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t;
  }
  start(t, {
    snapToCursor: e = !1,
    distanceThreshold: i
  } = {}) {
    let {
      presenceContext: n
    } = this.visualElement;
    if (n && !1 === n.isPresent) return;
    let s = t => {
        e && this.snapToCursor(L(t).point), this.stopAnimation();
      },
      r = (t, e) => {
        let {
          drag: i,
          dragPropagation: n,
          onDragStart: s
        } = this.getProps();
        if (i && !n && (this.openDragLock && this.openDragLock(), this.openDragLock = (0, m.setDragLock)(i), !this.openDragLock)) return;
        this.latestPointerEvent = t, this.latestPanInfo = e, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), (0, a.eachAxis)(t => {
          let e = this.getAxisMotionValue(t).get() || 0;
          if (f.percent.test(e)) {
            let {
              projection: i
            } = this.visualElement;
            if (i && i.layout) {
              let n = i.layout.layoutBox[t];
              n && (e = (0, g.calcLength)(n) * (parseFloat(e) / 100));
            }
          }
          this.originPoint[t] = e;
        }), s && o.frame.update(() => s(t, e), !1, !0), (0, h.addValueToWillChange)(this.visualElement, "transform");
        let {
          animationState: r
        } = this.visualElement;
        r && r.setActive("whileDrag", !0);
      },
      l = (t, e) => {
        this.latestPointerEvent = t, this.latestPanInfo = e;
        let {
          dragPropagation: i,
          dragDirectionLock: n,
          onDirectionLock: s,
          onDrag: r
        } = this.getProps();
        if (!i && !this.openDragLock) return;
        let {
          offset: a
        } = e;
        if (n && null === this.currentDirection) {
          this.currentDirection = function (t, e = 10) {
            let i = null;
            return Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x"), i;
          }(a), null !== this.currentDirection && s && s(this.currentDirection);
          return;
        }
        this.updateAxis("x", e.point, a), this.updateAxis("y", e.point, a), this.visualElement.render(), r && o.frame.update(() => r(t, e), !1, !0);
      },
      u = (t, e) => {
        this.latestPointerEvent = t, this.latestPanInfo = e, this.stop(t, e), this.latestPointerEvent = null, this.latestPanInfo = null;
      },
      c = () => {
        let {
          dragSnapToOrigin: t
        } = this.getProps();
        (t || this.constraints) && this.startAnimation({
          x: 0,
          y: 0
        });
      },
      {
        dragSnapToOrigin: d
      } = this.getProps();
    this.panSession = new W(t, {
      onSessionStart: s,
      onStart: r,
      onMove: l,
      onSessionEnd: u,
      resumeAnimation: c
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: d,
      distanceThreshold: i,
      contextWindow: j(this.visualElement),
      element: this.visualElement.current
    });
  }
  stop(t, e) {
    let i = t || this.latestPointerEvent,
      n = e || this.latestPanInfo,
      s = this.isDragging;
    if (this.cancel(), !s || !n || !i) return;
    let {
      velocity: r
    } = n;
    this.startAnimation(r);
    let {
      onDragEnd: a
    } = this.getProps();
    a && o.frame.postRender(() => a(i, n));
  }
  cancel() {
    this.isDragging = !1;
    let {
      projection: t,
      animationState: e
    } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.endPanSession();
    let {
      dragPropagation: i
    } = this.getProps();
    !i && this.openDragLock && (this.openDragLock(), this.openDragLock = null), e && e.setActive("whileDrag", !1);
  }
  endPanSession() {
    this.panSession && this.panSession.end(), this.panSession = void 0;
  }
  updateAxis(t, e, i) {
    let {
      drag: n
    } = this.getProps();
    if (!i || !ti(t, n, this.currentDirection)) return;
    let s = this.getAxisMotionValue(t),
      r = this.originPoint[t] + i[t];
    this.constraints && this.constraints[t] && (r = function (t, {
      min: e,
      max: i
    }, n) {
      return void 0 !== e && t < e ? t = n ? (0, d.mixNumber)(e, t, n.min) : Math.max(t, e) : void 0 !== i && t > i && (t = n ? (0, d.mixNumber)(i, t, n.max) : Math.min(t, i)), t;
    }(r, this.constraints[t], this.elastic[t])), s.set(r);
  }
  resolveConstraints() {
    let {
        dragConstraints: t,
        dragElastic: e
      } = this.getProps(),
      i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout,
      n = this.constraints;
    t && (0, I.isRefObject)(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && i ? this.constraints = function (t, {
      top: e,
      left: i,
      bottom: n,
      right: s
    }) {
      return {
        x: q(t.x, i, s),
        y: q(t.y, e, n)
      };
    }(i.layoutBox, t) : this.constraints = !1, this.elastic = function (t = .35) {
      return !1 === t ? t = 0 : !0 === t && (t = .35), {
        x: _(t, "left", "right"),
        y: _(t, "top", "bottom")
      };
    }(e), n !== this.constraints && !(0, I.isRefObject)(t) && i && this.constraints && !this.hasMutatedConstraints && (0, a.eachAxis)(t => {
      var e, n;
      let s;
      !1 !== this.constraints && this.getAxisMotionValue(t) && (this.constraints[t] = (e = i.layoutBox[t], n = this.constraints[t], s = {}, void 0 !== n.min && (s.min = n.min - e.min), void 0 !== n.max && (s.max = n.max - e.min), s));
    });
  }
  resolveRefConstraints() {
    var t;
    let {
      dragConstraints: e,
      onMeasureDragConstraints: i
    } = this.getProps();
    if (!e || !(0, I.isRefObject)(e)) return !1;
    let n = e.current;
    (0, R.invariant)(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
    let {
      projection: s
    } = this.visualElement;
    if (!s || !s.layout) return !1;
    s.root && (s.root.scroll = void 0, s.root.updateScroll());
    let r = (0, l.measurePageBox)(n, s.root, this.visualElement.getTransformPagePoint()),
      o = (t = s.layout.layoutBox, {
        x: Z(t.x, r.x),
        y: Z(t.y, r.y)
      });
    if (i) {
      let t = i((0, u.convertBoxToBoundingBox)(o));
      this.hasMutatedConstraints = !!t, t && (o = (0, u.convertBoundingBoxToBox)(t));
    }
    return o;
  }
  startAnimation(t) {
    let {
        drag: e,
        dragMomentum: i,
        dragElastic: n,
        dragTransition: s,
        dragSnapToOrigin: r,
        onDragTransitionEnd: o
      } = this.getProps(),
      l = this.constraints || {};
    return Promise.all((0, a.eachAxis)(o => {
      if (!ti(o, e, this.currentDirection)) return;
      let a = l && l[o] || {};
      (!0 === r || r === o) && (a = {
        min: 0,
        max: 0
      });
      let u = {
        type: "inertia",
        velocity: i ? t[o] : 0,
        bounceStiffness: n ? 200 : 1e6,
        bounceDamping: n ? 40 : 1e7,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...s,
        ...a
      };
      return this.startAxisValueAnimation(o, u);
    })).then(o);
  }
  startAxisValueAnimation(t, e) {
    let i = this.getAxisMotionValue(t);
    return (0, h.addValueToWillChange)(this.visualElement, t), i.start((0, c.animateMotionValue)(t, i, 0, e, this.visualElement, !1));
  }
  stopAnimation() {
    (0, a.eachAxis)(t => this.getAxisMotionValue(t).stop());
  }
  getAxisMotionValue(t) {
    let e = `_drag${t.toUpperCase()}`;
    return this.visualElement.getProps()[e] || this.visualElement.getValue(t, this.visualElement.latestValues[t] ?? 0);
  }
  snapToCursor(t) {
    (0, a.eachAxis)(e => {
      let {
        drag: i
      } = this.getProps();
      if (!ti(e, i, this.currentDirection)) return;
      let {
          projection: n
        } = this.visualElement,
        s = this.getAxisMotionValue(e);
      if (n && n.layout) {
        let {
            min: i,
            max: r
          } = n.layout.layoutBox[e],
          o = s.get() || 0;
        s.set(t[e] - (0, d.mixNumber)(i, r, .5) + o);
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    let {
        drag: t,
        dragConstraints: e
      } = this.getProps(),
      {
        projection: i
      } = this.visualElement;
    if (!(0, I.isRefObject)(e) || !i || !this.constraints) return;
    this.stopAnimation();
    let n = {
      x: 0,
      y: 0
    };
    (0, a.eachAxis)(t => {
      let e = this.getAxisMotionValue(t);
      if (e && !1 !== this.constraints) {
        var i, s;
        let r,
          o,
          a,
          l = e.get();
        n[t] = (i = {
          min: l,
          max: l
        }, s = this.constraints[t], r = .5, o = (0, g.calcLength)(i), (a = (0, g.calcLength)(s)) > o ? r = (0, K.progress)(s.min, s.max - o, i.min) : o > a && (r = (0, K.progress)(i.min, i.max - a, s.min)), (0, X.clamp)(0, 1, r));
      }
    });
    let {
      transformTemplate: s
    } = this.visualElement.getProps();
    this.visualElement.current.style.transform = s ? s({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.constraints = !1, this.resolveConstraints(), (0, a.eachAxis)(e => {
      if (!ti(e, t, null)) return;
      let i = this.getAxisMotionValue(e),
        {
          min: s,
          max: r
        } = this.constraints[e];
      i.set((0, d.mixNumber)(s, r, n[e]));
    }), this.visualElement.render();
  }
  addListeners() {
    let t;
    if (!this.visualElement.current) return;
    Q.set(this.visualElement, this);
    let e = this.visualElement.current,
      i = F(e, "pointerdown", t => {
        let {
            drag: i,
            dragListener: n = !0
          } = this.getProps(),
          s = t.target,
          r = s !== e && D(s);
        i && n && !r && this.start(t);
      }),
      n = () => {
        var i, n, s;
        let r,
          o,
          {
            dragConstraints: a
          } = this.getProps();
        (0, I.isRefObject)(a) && a.current && (this.constraints = this.resolveRefConstraints(), t || (i = e, n = a.current, r = V(i, te(s = () => this.scalePositionWithinConstraints())), o = V(n, te(s)), t = () => {
          r(), o();
        }));
      },
      {
        projection: s
      } = this.visualElement,
      r = s.addEventListener("measure", n);
    s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), o.frame.read(n);
    let l = (0, p.addDomEvent)(window, "resize", () => this.scalePositionWithinConstraints()),
      u = s.addEventListener("didUpdate", ({
        delta: t,
        hasLayoutChanged: e
      }) => {
        this.isDragging && e && ((0, a.eachAxis)(e => {
          let i = this.getAxisMotionValue(e);
          i && (this.originPoint[e] += t[e].translate, i.set(i.get() + t[e].translate));
        }), this.visualElement.render());
      });
    return () => {
      l(), i(), r(), u && u(), t && t();
    };
  }
  getProps() {
    let t = this.visualElement.getProps(),
      {
        drag: e = !1,
        dragDirectionLock: i = !1,
        dragPropagation: n = !1,
        dragConstraints: s = !1,
        dragElastic: r = .35,
        dragMomentum: o = !0
      } = t;
    return {
      ...t,
      drag: e,
      dragDirectionLock: i,
      dragPropagation: n,
      dragConstraints: s,
      dragElastic: r,
      dragMomentum: o
    };
  }
}
function te(t) {
  let e = !0;
  return () => {
    if (e) {
      e = !1;
      return;
    }
    t();
  };
}
function ti(t, e, i) {
  return (!0 === e || e === t) && (null === i || i === t);
}
class tn extends n.Feature {
  constructor(t) {
    super(t), this.removeGroupControls = s.noop, this.removeListeners = s.noop, this.controls = new tt(t);
  }
  mount() {
    let {
      dragControls: t
    } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || s.noop;
  }
  update() {
    let {
        dragControls: t
      } = this.node.getProps(),
      {
        dragControls: e
      } = this.node.prevProps || {};
    t !== e && (this.removeGroupControls(), t && (this.removeGroupControls = t.subscribe(this.controls)));
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
  }
}
const _export_DragGesture = tn;
export { _export_DragGesture as DragGesture };

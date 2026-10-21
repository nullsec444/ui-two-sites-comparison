// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module50547 from "./50547.js";
import * as _module30548 from "./30548.js";
import * as _module98582 from "./98582.js";
import * as _module17696 from "./17696.js";
import * as _module88200 from "./88200.js";
import * as _module48681 from "./48681.js";
var n = _module50547,
  s = _module30548,
  o = _module98582,
  p = _module17696;
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
var O = _module88200,
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
var ts = n;
let tr = t => (e, i) => {
  t && o.frame.update(() => t(e, i), !1, !0);
};
class to extends ts.Feature {
  constructor() {
    super(...arguments), this.removePointerDownListener = s.noop;
  }
  onPointerDown(t) {
    this.session = new W(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: j(this.node)
    });
  }
  createPanHandlers() {
    let {
      onPanSessionStart: t,
      onPanStart: e,
      onPan: i,
      onPanEnd: n
    } = this.node.getProps();
    return {
      onSessionStart: tr(t),
      onStart: tr(e),
      onMove: tr(i),
      onEnd: (t, e) => {
        delete this.session, n && o.frame.postRender(() => n(t, e));
      }
    };
  }
  mount() {
    this.removePointerDownListener = F(this.node.current, "pointerdown", t => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const _export_PanGesture = to;
export { _export_PanGesture as PanGesture };

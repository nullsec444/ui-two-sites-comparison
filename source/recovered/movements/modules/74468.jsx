// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module62523 from "./62523.js";
import * as _module32240 from "./32240.js";
import * as _module43000 from "./43000.js";
import * as _module39343 from "./39343.js";
import * as _module85510 from "./85510.js";
import * as _module48096 from "./48096.js";
import * as _module50547 from "./50547.js";
import * as _module92511 from "./92511.js";
import * as _module2057 from "./2057.js";
import * as _module52661 from "./52661.js";
import * as _module23223 from "./23223.js";
import * as _module77433 from "./77433.js";
import * as _module98582 from "./98582.js";
import * as _module71795 from "./71795.js";
import * as _module64936 from "./64936.js";
import * as _module44597 from "./44597.js";
var e = _module62523,
  i = _module32240,
  n = _module43000,
  s = _module39343,
  r = _module85510,
  o = _module48096,
  a = _module50547,
  l = _module92511,
  u = _module2057;
let h = (t, e) => !!e && (t === e || h(t, e.parentElement));
var c = _module52661,
  d = _module23223,
  p = _module77433;
let m = new WeakSet();
function f(t) {
  return e => {
    "Enter" === e.key && t(e);
  };
}
function g(t, e) {
  t.dispatchEvent(new PointerEvent("pointer" + e, {
    isPrimary: !0,
    bubbles: !0
  }));
}
function v(t) {
  return (0, c.isPrimaryPointer)(t) && !(0, u.isDragActive)();
}
let y = new WeakSet();
var x = _module98582,
  b = _module71795;
function T(t, e, i) {
  let {
    props: n
  } = t;
  if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
  t.animationState && n.whileTap && t.animationState.setActive("whileTap", "Start" === i);
  let s = n["onTap" + ("End" === i ? "" : i)];
  s && x.frame.postRender(() => s(e, (0, b.extractEventInfo)(e)));
}
class w extends a.Feature {
  mount() {
    let {
      current: t
    } = this.node;
    if (!t) return;
    let {
      globalTapTarget: e,
      propagate: i
    } = this.node.props;
    this.unmount = function (t, e, i = {}) {
      let [n, s, r] = (0, d.setupGesture)(t, i),
        o = t => {
          let n = t.currentTarget;
          if (!v(t) || y.has(t)) return;
          m.add(n), i.stopPropagation && y.add(t);
          let r = e(n, t),
            o = {
              ...s,
              capture: !0
            },
            a = (t, e) => {
              window.removeEventListener("pointerup", l, o), window.removeEventListener("pointercancel", u, o), m.has(n) && m.delete(n), v(t) && "function" == typeof r && r(t, {
                success: e
              });
            },
            l = t => {
              a(t, n === window || n === document || i.useGlobalTarget || h(n, t.target));
            },
            u = t => {
              a(t, !1);
            };
          window.addEventListener("pointerup", l, o), window.addEventListener("pointercancel", u, o);
        };
      return n.forEach(t => {
        (i.useGlobalTarget ? window : t).addEventListener("pointerdown", o, s), (0, l.isHTMLElement)(t) && (t.addEventListener("focus", t => ((t, e) => {
          let i = t.currentTarget;
          if (!i) return;
          let n = f(() => {
            if (m.has(i)) return;
            g(i, "down");
            let t = f(() => {
              g(i, "up");
            });
            i.addEventListener("keyup", t, e), i.addEventListener("blur", () => g(i, "cancel"), e);
          });
          i.addEventListener("keydown", n, e), i.addEventListener("blur", () => i.removeEventListener("keydown", n), e);
        })(t, s)), (0, p.isElementKeyboardAccessible)(t) || t.hasAttribute("tabindex") || (t.tabIndex = 0));
      }), r;
    }(t, (t, e) => (T(this.node, e, "Start"), (t, {
      success: e
    }) => T(this.node, t, e ? "End" : "Cancel")), {
      useGlobalTarget: e,
      stopPropagation: i?.tap === !1
    });
  }
  unmount() {}
}
var S = a;
let P = new WeakMap(),
  M = new WeakMap(),
  A = t => {
    let e = P.get(t.target);
    e && e(t);
  },
  V = t => {
    t.forEach(A);
  },
  E = {
    some: 0,
    all: 1
  };
class C extends S.Feature {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    var t;
    let e;
    this.stopObserver?.();
    let {
        viewport: i = {}
      } = this.node.getProps(),
      {
        root: n,
        margin: s,
        amount: r = "some",
        once: o
      } = i,
      a = {
        root: n ? n.current : void 0,
        rootMargin: s,
        threshold: "number" == typeof r ? r : E[r]
      },
      l = t => {
        let {
          isIntersecting: e
        } = t;
        if (this.isInView === e || (this.isInView = e, o && !e && this.hasEnteredView)) return;
        e && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", e);
        let {
            onViewportEnter: i,
            onViewportLeave: n
          } = this.node.getProps(),
          s = e ? i : n;
        s && s(t);
      };
    this.stopObserver = (t = this.node.current, e = function ({
      root: t,
      ...e
    }) {
      let i = t || document;
      M.has(i) || M.set(i, {});
      let n = M.get(i),
        s = JSON.stringify(e);
      return n[s] || (n[s] = new IntersectionObserver(V, {
        root: t,
        ...e
      })), n[s];
    }(a), P.set(t, l), e.observe(t), () => {
      P.delete(t), e.unobserve(t);
    });
  }
  mount() {
    this.startObserver();
  }
  update() {
    if ("u" < typeof IntersectionObserver) return;
    let {
      props: t,
      prevProps: e
    } = this.node;
    ["amount", "margin", "root"].some(function ({
      viewport: t = {}
    }, {
      viewport: e = {}
    } = {}) {
      return i => t[i] !== e[i];
    }(t, e)) && this.startObserver();
  }
  unmount() {
    this.stopObserver?.(), this.hasEnteredView = !1, this.isInView = !1;
  }
}
let D = {
  inView: {
    Feature: C
  },
  tap: {
    Feature: w
  },
  focus: {
    Feature: o.FocusGesture
  },
  hover: {
    Feature: r.HoverGesture
  }
};
var R = _module64936,
  k = _module44597;
let L = {
    layout: {
      ProjectionNode: R.HTMLProjectionNode,
      MeasureLayout: k.MeasureLayout
    }
  },
  B = {
    ...n.animations,
    ...D,
    ...s.drag,
    ...L
  },
  F = (0, i.createMotionProxy)(B, e.createDomVisualElement);
const _export_motion = F;
export { _export_motion as motion };

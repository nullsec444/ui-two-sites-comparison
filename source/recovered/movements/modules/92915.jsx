// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module45032 from "./45032.js";
import * as _module77794 from "./77794.js";
import * as _module58943 from "./58943.js";
import * as _module26997 from "./26997.js";
import * as _module38783 from "./38783.js";
import * as _module9591 from "./9591.js";
import * as _module80269 from "./80269.js";
import * as _module34561 from "./34561.js";
import * as _module94195 from "./94195.js";
import * as _module88327 from "./88327.js";
import * as _module87491 from "./87491.js";
import * as _module17128 from "./17128.js";
import * as _module86631 from "./86631.js";
import * as _module78351 from "./78351.js";
import * as _module50151 from "./50151.js";
import * as _module82599 from "./82599.js";
var t = _module45032,
  n = _module77794,
  r = _module58943,
  i = _module26997,
  o = _module38783,
  l = _module9591,
  s = _module80269,
  u = _module34561,
  a = _module94195,
  c = _module88327,
  f = _module87491,
  d = _module17128,
  g = _module86631,
  p = _module78351,
  m = _module50151,
  h = _module82599;
function v() {
  return !1;
}
const _export_useDismiss = function (e, y = {}) {
  let {
      enabled: E = !0,
      escapeKey: b = !0,
      outsidePress: S = !0,
      outsidePressEvent: x = "sloppy",
      referencePress: T = v,
      bubbles: w,
      externalTree: C
    } = y,
    R = "rootStore" in e ? e.rootStore : e,
    O = R.useState("open"),
    P = R.useState("floatingElement"),
    {
      dataRef: A
    } = R.context,
    I = (0, a.useFloatingTree)(C),
    M = (0, o.useStableCallback)("function" == typeof S ? S : () => !1),
    L = "function" == typeof S ? M : S,
    k = !1 !== L,
    D = (0, o.useStableCallback)(() => x),
    {
      escapeKey: N,
      outsidePress: F
    } = {
      escapeKey: "boolean" == typeof w ? w : w?.escapeKey ?? !1,
      outsidePress: "boolean" == typeof w ? w : w?.outsidePress ?? !0
    },
    H = t.useRef(!1),
    W = t.useRef(!1),
    V = t.useRef(!1),
    B = t.useRef(!1),
    _ = t.useRef(""),
    j = t.useRef(null),
    Y = (0, l.useTimeout)(),
    U = (0, l.useTimeout)(),
    $ = (0, o.useStableCallback)(() => {
      U.clear(), A.current.insideReactTree = !1;
    }),
    z = (0, o.useStableCallback)(e => {
      let t = A.current.floatingContext?.nodeId;
      return (I ? (0, h.getNodeChildren)(I.nodesRef.current, t) : []).some(t => t.context?.open && !t.context.dataRef.current[e]);
    }),
    X = (0, o.useStableCallback)(e => (0, p.isEventTargetWithin)(e, R.select("floatingElement")) || (0, p.isEventTargetWithin)(e, R.select("domReferenceElement"))),
    q = (0, o.useStableCallback)(e => {
      T() && R.setOpen(!1, (0, c.createChangeEventDetails)(f.REASONS.triggerPress, e.nativeEvent));
    }),
    K = (0, o.useStableCallback)(e => {
      if (!O || !E || !b || "Escape" !== e.key || B.current || !N && z("__escapeKeyBubbles")) return;
      let t = (0, m.isReactEvent)(e) ? e.nativeEvent : e,
        n = (0, c.createChangeEventDetails)(f.REASONS.escapeKey, t);
      R.setOpen(!1, n), n.isCanceled || e.preventDefault(), N || n.isPropagationAllowed || e.stopPropagation();
    }),
    G = (0, o.useStableCallback)(() => {
      A.current.insideReactTree = !0, U.start(0, $);
    }),
    J = (0, o.useStableCallback)(e => {
      if (!O || !E || 0 !== e.button) return;
      let t = (0, g.getTarget)(e.nativeEvent);
      (0, g.contains)(R.select("floatingElement"), t) && (H.current || (H.current = !0, W.current = !1));
    }),
    Q = (0, o.useStableCallback)(e => {
      !O || !E || (e.defaultPrevented || e.nativeEvent.defaultPrevented) && H.current && (W.current = !0);
    });
  t.useEffect(() => {
    if (!O || !E) return $;
    A.current.__escapeKeyBubbles = N, A.current.__outsidePressBubbles = F;
    let e = new l.Timeout(),
      t = new l.Timeout();
    function o() {
      V.current = !0, t.start(0, () => {
        V.current = !1;
      });
    }
    function a() {
      H.current = !1, W.current = !1;
    }
    function m() {
      let e = _.current,
        t = D(),
        n = "function" == typeof t ? t() : t;
      return "string" == typeof n ? n : n["pen" !== e && e ? e : "mouse"];
    }
    function v(e) {
      let t = A.current.floatingContext?.nodeId,
        n = I && (0, h.getNodeChildren)(I.nodesRef.current, t).some(t => (0, p.isEventTargetWithin)(e, t.context?.elements.floating));
      return X(e) || n;
    }
    function y(e) {
      let n;
      if ("intentional" === (n = m()) && "click" !== e.type || "sloppy" === n && "click" === e.type) {
        "click" === e.type || X(e) || (t.clear(), V.current = !1), $();
        return;
      }
      if (A.current.insideReactTree) return void $();
      let r = (0, g.getTarget)(e),
        o = `[${(0, d.createAttribute)("inert")}]`,
        l = (0, s.isElement)(r) ? r.getRootNode() : null,
        u = Array.from(((0, s.isShadowRoot)(l) ? l : (0, i.ownerDocument)(R.select("floatingElement"))).querySelectorAll(o)),
        a = R.context.triggerElements;
      if (r && (a.hasElement(r) || a.hasMatchingElement(e => (0, g.contains)(e, r)))) return;
      let h = (0, s.isElement)(r) ? r : null;
      for (; h && !(0, s.isLastTraversableNode)(h);) {
        let e = (0, s.getParentNode)(h);
        if ((0, s.isLastTraversableNode)(e) || !(0, s.isElement)(e)) break;
        h = e;
      }
      if (!(u.length && (0, s.isElement)(r) && !(0, p.isRootElement)(r) && !(0, g.contains)(r, R.select("floatingElement")) && u.every(e => !(0, g.contains)(h, e)))) {
        if ((0, s.isHTMLElement)(r) && !("touches" in e)) {
          let t = (0, s.isLastTraversableNode)(r),
            n = (0, s.getComputedStyle)(r),
            i = /auto|scroll/,
            o = t || i.test(n.overflowX),
            l = t || i.test(n.overflowY),
            u = o && r.clientWidth > 0 && r.scrollWidth > r.clientWidth,
            a = l && r.clientHeight > 0 && r.scrollHeight > r.clientHeight,
            c = "rtl" === n.direction,
            f = a && (c ? e.offsetX <= r.offsetWidth - r.clientWidth : e.offsetX > r.clientWidth),
            d = u && e.offsetY > r.clientHeight;
          if (f || d) return;
        }
        if (!v(e)) {
          if ("intentional" === m() && V.current) {
            t.clear(), V.current = !1;
            return;
          }
          "function" == typeof L && !L(e) || z("__outsidePressBubbles") || (R.setOpen(!1, (0, c.createChangeEventDetails)(f.REASONS.outsidePress, e)), $());
        }
      }
    }
    function S(e) {
      if ("sloppy" !== m() || !R.select("open") || !E || X(e)) return;
      let t = e.touches[0];
      t && (j.current = {
        startTime: Date.now(),
        startX: t.clientX,
        startY: t.clientY,
        dismissOnTouchEnd: !1,
        dismissOnMouseDown: !0
      }, Y.start(1e3, () => {
        j.current && (j.current.dismissOnTouchEnd = !1, j.current.dismissOnMouseDown = !1);
      }));
    }
    function x(e, t) {
      let r = (0, g.getTarget)(e);
      if (!r) return;
      let i = (0, n.addEventListener)(r, e.type, () => {
        t(e), i();
      });
    }
    function T(e) {
      Y.clear(), "pointerdown" === e.type && (_.current = e.pointerType), ("mousedown" !== e.type || !j.current || j.current.dismissOnMouseDown) && x(e, e => {
        if ("pointerdown" === e.type) "sloppy" !== m() || "touch" === e.pointerType || !R.select("open") || !E || X(e) || y(e);else y(e);
      });
    }
    function w(e) {
      if (!H.current) return;
      let n = W.current;
      if (a(), "intentional" === m()) {
        if ("pointercancel" === e.type) {
          n && o();
          return;
        }
        v(e) || (n ? o() : ("function" != typeof L || L(e)) && (t.clear(), V.current = !0, $()));
      }
    }
    function C(e) {
      if ("sloppy" !== m() || !j.current || X(e)) return;
      let t = e.touches[0];
      if (!t) return;
      let n = Math.abs(t.clientX - j.current.startX),
        r = Math.abs(t.clientY - j.current.startY),
        i = Math.sqrt(n * n + r * r);
      i > 5 && (j.current.dismissOnTouchEnd = !0), i > 10 && (y(e), Y.clear(), j.current = null);
    }
    function M(e) {
      "sloppy" !== m() || !j.current || X(e) || (j.current.dismissOnTouchEnd && y(e), Y.clear(), j.current = null);
    }
    let U = (0, i.ownerDocument)(P),
      q = (0, r.mergeCleanups)(b && (0, r.mergeCleanups)((0, n.addEventListener)(U, "keydown", K), (0, n.addEventListener)(U, "compositionstart", function () {
        e.clear(), B.current = !0;
      }), (0, n.addEventListener)(U, "compositionend", function () {
        e.start(5 * !!u.platform.engine.webkit, () => {
          B.current = !1;
        });
      })), k && (0, r.mergeCleanups)((0, n.addEventListener)(U, "click", T, !0), (0, n.addEventListener)(U, "pointerdown", T, !0), (0, n.addEventListener)(U, "pointerup", w, !0), (0, n.addEventListener)(U, "pointercancel", w, !0), (0, n.addEventListener)(U, "mousedown", T, !0), (0, n.addEventListener)(U, "mouseup", w, !0), (0, n.addEventListener)(U, "touchstart", function (e) {
        _.current = "touch", x(e, S);
      }, !0), (0, n.addEventListener)(U, "touchmove", function (e) {
        x(e, C);
      }, !0), (0, n.addEventListener)(U, "touchend", function (e) {
        x(e, M);
      }, !0)));
    return () => {
      q(), e.clear(), t.clear(), a(), V.current = !1, $();
    };
  }, [A, P, b, k, L, O, E, N, F, K, $, D, z, X, I, R, Y]);
  let Z = t.useMemo(() => ({
      onKeyDown: K,
      onPointerDown: q,
      onClick: q
    }), [K, q]),
    ee = t.useMemo(() => ({
      onKeyDown: K,
      onPointerDown: Q,
      onMouseDown: Q,
      onClickCapture: G,
      onMouseDownCapture(e) {
        G(), J(e);
      },
      onPointerDownCapture(e) {
        G(), J(e);
      },
      onMouseUpCapture: G,
      onTouchEndCapture: G,
      onTouchMoveCapture: G
    }), [K, G, J, Q]);
  return t.useMemo(() => E ? {
    reference: Z,
    floating: ee,
    trigger: Z
  } : {}, [E, Z, ee]);
};
export { _export_useDismiss as useDismiss };

// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module45032 from "./45032.js";
import * as _module42014 from "./42014.js";
import * as _module77794 from "./77794.js";
import * as _module58943 from "./58943.js";
import * as _module26997 from "./26997.js";
import * as _module38783 from "./38783.js";
import * as _module94805 from "./94805.js";
import * as _module80269 from "./80269.js";
import * as _module88327 from "./88327.js";
import * as _module87491 from "./87491.js";
import * as _module94195 from "./94195.js";
import * as _module86631 from "./86631.js";
import * as _module50151 from "./50151.js";
import * as _module13262 from "./13262.js";
import * as _module45091 from "./45091.js";
import * as _module26950 from "./26950.js";
var t = _module45032,
  n = _module42014,
  r = _module77794,
  i = _module58943,
  o = _module26997,
  l = _module38783,
  s = _module94805,
  u = _module80269,
  a = _module88327,
  c = _module87491,
  f = _module94195,
  d = _module86631,
  g = _module50151,
  p = _module13262,
  m = _module45091,
  h = _module26950;
let v = {
  current: null
};
const _export_useHoverReferenceInteraction = function (e, y = {}) {
  let {
      enabled: E = !0,
      delay: b = 0,
      handleClose: S = null,
      mouseOnly: x = !1,
      restMs: T = 0,
      move: w = !0,
      triggerElementRef: C = v,
      externalTree: R,
      isActiveTrigger: O = !0,
      getHandleCloseContext: P,
      isClosing: A,
      shouldOpen: I,
      guardStaleOpen: M = !1
    } = y,
    L = "rootStore" in e ? e.rootStore : e,
    {
      dataRef: k,
      events: D
    } = L.context,
    N = (0, f.useFloatingTree)(R),
    F = (0, p.useHoverInteractionSharedState)(L),
    H = t.useRef(!1),
    W = (0, s.useValueAsRef)(S),
    V = (0, s.useValueAsRef)(b),
    B = (0, s.useValueAsRef)(T),
    _ = (0, s.useValueAsRef)(E),
    j = (0, s.useValueAsRef)(I),
    Y = (0, s.useValueAsRef)(A),
    U = (0, l.useStableCallback)(() => (0, m.isClickLikeOpenEvent)(k.current.openEvent?.type, F.interactedInside)),
    $ = (0, l.useStableCallback)(() => j.current?.() !== !1),
    z = (0, l.useStableCallback)((e, t, n) => {
      let r = L.context.triggerElements;
      return r.hasElement(t) ? !e || !(0, d.contains)(e, t) : !!(0, u.isElement)(n) && r.hasMatchingElement(e => (0, d.contains)(e, n)) && (!e || !(0, d.contains)(e, n));
    }),
    X = (0, l.useStableCallback)(() => {
      F.handler && ((0, o.ownerDocument)(L.select("domReferenceElement")).removeEventListener("mousemove", F.handler), F.handler = void 0);
    }),
    q = (0, l.useStableCallback)(() => {
      (0, p.clearSafePolygonPointerEventsMutation)(F);
    });
  return O && (F.handleCloseOptions = W.current?.__options), t.useEffect(() => X, [X]), t.useEffect(() => {
    if (E) return D.on("openchange", e), () => {
      D.off("openchange", e);
    };
    function e(e) {
      e.open ? H.current = !1 : (H.current = e.reason === c.REASONS.triggerHover, X(), F.openChangeTimeout.clear(), F.restTimeout.clear(), F.blockMouseMove = !0, F.restTimeoutPending = !1);
    }
  }, [E, D, F, X]), t.useEffect(() => {
    if (!E) return;
    function e(t, n = !0) {
      let r = (0, m.getDelay)(V.current, "close", F.pointerType);
      r ? F.openChangeTimeout.start(r, () => {
        L.setOpen(!1, (0, a.createChangeEventDetails)(c.REASONS.triggerHover, t)), N?.events.emit("floating.closed", t);
      }) : n && (F.openChangeTimeout.clear(), L.setOpen(!1, (0, a.createChangeEventDetails)(c.REASONS.triggerHover, t)), N?.events.emit("floating.closed", t));
    }
    let t = C.current ?? (O ? L.select("domReferenceElement") : null);
    if (!(0, u.isElement)(t)) return;
    function n(e) {
      if (F.openChangeTimeout.clear(), F.blockMouseMove = !1, x && !(0, g.isMouseLikePointerType)(F.pointerType)) return;
      let t = (0, m.getRestMs)(B.current),
        n = (0, m.getDelay)(V.current, "open", F.pointerType),
        r = (0, d.getTarget)(e),
        i = e.currentTarget ?? null,
        o = L.select("domReferenceElement"),
        l = i;
      if ((0, u.isElement)(r) && !L.context.triggerElements.hasElement(r)) {
        for (let e of L.context.triggerElements.elements()) if ((0, d.contains)(e, r)) {
          l = e;
          break;
        }
      }
      (0, u.isElement)(i) && (0, u.isElement)(o) && !L.context.triggerElements.hasElement(i) && (0, d.contains)(i, o) && (l = o);
      let s = null != l && z(o, l, r),
        f = L.select("open"),
        p = Y.current?.() ?? "ending" === L.select("transitionStatus"),
        h = !f && p && H.current,
        v = !s && (0, u.isElement)(l) && (0, u.isElement)(o) && (0, d.contains)(o, l) && h,
        y = t > 0 && !n,
        E = !f || s;
      if (s && (f || h) || v) {
        $() && L.setOpen(!0, (0, a.createChangeEventDetails)(c.REASONS.triggerHover, e, l));
        return;
      }
      !y && (n ? F.openChangeTimeout.start(n, () => {
        E && $() && L.setOpen(!0, (0, a.createChangeEventDetails)(c.REASONS.triggerHover, e, l));
      }) : E && $() && L.setOpen(!0, (0, a.createChangeEventDetails)(c.REASONS.triggerHover, e, l)));
    }
    function l(t) {
      if (U()) return void q();
      X();
      let n = L.select("domReferenceElement"),
        r = (0, o.ownerDocument)(n);
      F.restTimeout.clear(), F.restTimeoutPending = !1;
      let i = k.current.floatingContext ?? P?.();
      if (!(0, h.isInsideEnabledTrigger)(t.relatedTarget, L.context.triggerElements)) {
        if (W.current && i) {
          L.select("open") || F.openChangeTimeout.clear();
          let n = C.current;
          F.handler = W.current({
            ...i,
            tree: N,
            x: t.clientX,
            y: t.clientY,
            onClose() {
              q(), X(), _.current && !U() && n === L.select("domReferenceElement") && e(t, !0);
            }
          }), r.addEventListener("mousemove", F.handler), F.handler(t);
          return;
        }
        "touch" === F.pointerType && (0, d.contains)(L.select("floatingElement"), t.relatedTarget) || e(t);
      }
    }
    let s = M ? (0, r.addEventListener)(t, "mouseout", function (e) {
      (0, d.contains)(t, e.relatedTarget) || (F.openChangeTimeout.clear(), F.restTimeout.clear(), F.restTimeoutPending = !1);
    }) : void 0;
    return w ? (0, i.mergeCleanups)((0, r.addEventListener)(t, "mousemove", n, {
      once: !0
    }), (0, r.addEventListener)(t, "mouseenter", n), (0, r.addEventListener)(t, "mouseleave", l), s) : (0, i.mergeCleanups)((0, r.addEventListener)(t, "mouseenter", n), (0, r.addEventListener)(t, "mouseleave", l), s);
  }, [X, q, k, V, L, E, W, F, O, z, U, x, w, B, C, N, _, P, Y, $, M]), t.useMemo(() => {
    if (E) return {
      onPointerDown: e,
      onPointerEnter: e,
      onMouseMove(e) {
        let {
            nativeEvent: t
          } = e,
          r = e.currentTarget,
          i = L.select("domReferenceElement"),
          o = L.select("open"),
          l = z(i, r, e.target);
        if (x && !(0, g.isMouseLikePointerType)(F.pointerType)) return;
        if (o && l && F.handleCloseOptions?.blockPointerEvents) {
          let e = L.select("floatingElement");
          if (e) {
            let t = F.handleCloseOptions?.getScope?.() ?? r.ownerDocument.body;
            (0, p.applySafePolygonPointerEventsMutation)(F, {
              scopeElement: t,
              referenceElement: r,
              floatingElement: e
            });
          }
        }
        let s = (0, m.getRestMs)(B.current);
        function u() {
          if (F.restTimeoutPending = !1, U()) return;
          let e = L.select("open");
          !F.blockMouseMove && (!e || l) && $() && L.setOpen(!0, (0, a.createChangeEventDetails)(c.REASONS.triggerHover, t, r));
        }
        (!o || l) && 0 !== s && (!l && F.restTimeoutPending && e.movementX ** 2 + e.movementY ** 2 < 2 || (F.restTimeout.clear(), "touch" === F.pointerType ? n.flushSync(() => {
          u();
        }) : l && o ? u() : (F.restTimeoutPending = !0, F.restTimeout.start(s, u))));
      }
    };
    function e(e) {
      F.pointerType = e.pointerType;
    }
  }, [E, F, U, z, x, L, B, $]);
};
export { _export_useHoverReferenceInteraction as useHoverReferenceInteraction };

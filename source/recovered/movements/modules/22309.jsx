// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module45032 from "./45032.js";
import * as _module77794 from "./77794.js";
import * as _module58943 from "./58943.js";
import * as _module71955 from "./71955.js";
import * as _module26997 from "./26997.js";
import * as _module38783 from "./38783.js";
import * as _module9591 from "./9591.js";
import * as _module80269 from "./80269.js";
import * as _module88327 from "./88327.js";
import * as _module87491 from "./87491.js";
import * as _module94195 from "./94195.js";
import * as _module86631 from "./86631.js";
import * as _module82599 from "./82599.js";
import * as _module13262 from "./13262.js";
import * as _module78351 from "./78351.js";
import * as _module45091 from "./45091.js";
import * as _module26950 from "./26950.js";
var t = _module45032,
  n = _module77794,
  r = _module58943,
  i = _module71955,
  o = _module26997,
  l = _module38783,
  s = _module9591,
  u = _module80269,
  a = _module88327,
  c = _module87491,
  f = _module94195,
  d = _module86631,
  g = _module82599,
  p = _module13262,
  m = _module78351,
  h = _module45091,
  v = _module26950;
const _export_useHoverFloatingInteraction = function (e, y = {}) {
  let {
      enabled: E = !0,
      closeDelay: b = 0,
      nodeId: S
    } = y,
    x = "rootStore" in e ? e.rootStore : e,
    T = x.useState("open"),
    w = x.useState("floatingElement"),
    C = x.useState("domReferenceElement"),
    {
      dataRef: R
    } = x.context,
    O = (0, f.useFloatingTree)(),
    P = (0, f.useFloatingParentNodeId)(),
    A = (0, p.useHoverInteractionSharedState)(x),
    I = (0, s.useTimeout)(),
    M = (0, l.useStableCallback)(() => (0, h.isClickLikeOpenEvent)(R.current.openEvent?.type, A.interactedInside)),
    L = (0, l.useStableCallback)(() => (0, h.isHoverOpenEvent)(R.current.openEvent?.type)),
    k = (0, l.useStableCallback)(() => {
      (0, p.clearSafePolygonPointerEventsMutation)(A);
    });
  (0, i.useIsoLayoutEffect)(() => {
    T || (A.pointerType = void 0, A.restTimeoutPending = !1, A.interactedInside = !1, k());
  }, [T, A, k]), t.useEffect(() => k, [k]), (0, i.useIsoLayoutEffect)(() => {
    if (E && T && A.handleCloseOptions?.blockPointerEvents && L() && (0, u.isElement)(C) && w) {
      let e = (0, o.ownerDocument)(w),
        t = O?.nodesRef.current.find(e => e.id === P)?.context?.elements.floating;
      t && (t.style.pointerEvents = "");
      let n = A.pointerEventsScopeElement !== w ? A.pointerEventsScopeElement : null,
        r = t !== w ? t : null,
        i = A.handleCloseOptions?.getScope?.() ?? n ?? r ?? C.closest("[data-rootownerid]") ?? e.body;
      return (0, p.applySafePolygonPointerEventsMutation)(A, {
        scopeElement: i,
        referenceElement: C,
        floatingElement: w
      }), () => {
        k();
      };
    }
  }, [E, T, C, w, A, L, O, P, k]), t.useEffect(() => {
    if (E) return (0, r.mergeCleanups)(w && (0, n.addEventListener)(w, "mouseenter", function () {
      A.openChangeTimeout.clear(), I.clear(), O?.events.off("floating.closed", t), k();
    }), w && (0, n.addEventListener)(w, "mouseleave", function (n) {
      if (e() && O) return void O.events.on("floating.closed", t);
      if ((0, v.isInsideEnabledTrigger)(n.relatedTarget, x.context.triggerElements)) return;
      let r = R.current.floatingContext?.nodeId ?? S,
        i = n.relatedTarget;
      if (!(O && r && (0, u.isElement)(i) && (0, g.getNodeChildren)(O.nodesRef.current, r, !1).some(e => (0, d.contains)(e.context?.elements.floating, i)))) {
        let e, t;
        if (A.handler) return void A.handler(n);
        k(), L() && !M() && (e = (0, h.getDelay)(b, "close", A.pointerType), t = () => {
          x.setOpen(!1, (0, a.createChangeEventDetails)(c.REASONS.triggerHover, n)), O?.events.emit("floating.closed", n);
        }, e ? A.openChangeTimeout.start(e, t) : (A.openChangeTimeout.clear(), t()));
      }
    }), w && (0, n.addEventListener)(w, "pointerdown", function (e) {
      let t = (0, d.getTarget)(e);
      if (!(0, m.isInteractiveElement)(t)) {
        A.interactedInside = !1;
        return;
      }
      A.interactedInside = t?.closest("[aria-haspopup]") != null;
    }, !0), () => {
      O?.events.off("floating.closed", t);
    });
    function e() {
      return !!(O && P && (0, g.getNodeChildren)(O.nodesRef.current, P).length > 0);
    }
    function t(n) {
      !O || !P || e() || I.start(0, () => {
        O.events.off("floating.closed", t), x.setOpen(!1, (0, a.createChangeEventDetails)(c.REASONS.triggerHover, n)), O.events.emit("floating.closed", n);
      });
    }
  }, [E, w, x, R, b, S, L, M, k, A, O, P, I]);
};
export { _export_useHoverFloatingInteraction as useHoverFloatingInteraction };

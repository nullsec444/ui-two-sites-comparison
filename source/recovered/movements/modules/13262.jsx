// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module65386 from "./65386.js";
import * as _module23286 from "./23286.js";
import * as _module9591 from "./9591.js";
var t = _module65386,
  n = _module23286,
  r = _module9591;
class i {
  constructor() {
    this.pointerType = void 0, this.interactedInside = !1, this.handler = void 0, this.blockMouseMove = !0, this.performedPointerEventsMutation = !1, this.pointerEventsScopeElement = null, this.pointerEventsReferenceElement = null, this.pointerEventsFloatingElement = null, this.restTimeoutPending = !1, this.openChangeTimeout = new r.Timeout(), this.restTimeout = new r.Timeout(), this.handleCloseOptions = void 0;
  }
  static create() {
    return new i();
  }
  dispose = () => {
    this.openChangeTimeout.clear(), this.restTimeout.clear();
  };
  disposeEffect = () => this.dispose;
}
let o = new WeakMap();
function l(e) {
  if (!e.performedPointerEventsMutation) return;
  let t = e.pointerEventsScopeElement;
  t && o.get(t) === e && (e.pointerEventsScopeElement?.style.removeProperty("pointer-events"), e.pointerEventsReferenceElement?.style.removeProperty("pointer-events"), e.pointerEventsFloatingElement?.style.removeProperty("pointer-events"), o.delete(t)), e.performedPointerEventsMutation = !1, e.pointerEventsScopeElement = null, e.pointerEventsReferenceElement = null, e.pointerEventsFloatingElement = null;
}
const _export_applySafePolygonPointerEventsMutation = function (e, t) {
  let {
      scopeElement: n,
      referenceElement: r,
      floatingElement: i
    } = t,
    s = o.get(n);
  s && s !== e && l(s), l(e), e.performedPointerEventsMutation = !0, e.pointerEventsScopeElement = n, e.pointerEventsReferenceElement = r, e.pointerEventsFloatingElement = i, o.set(n, e), n.style.pointerEvents = "none", r.style.pointerEvents = "auto", i.style.pointerEvents = "auto";
};
const _export_clearSafePolygonPointerEventsMutation = l;
const _export_useHoverInteractionSharedState = function (e) {
  let r = e.context.dataRef.current,
    o = (0, n.useRefWithInit)(() => r.hoverInteractionState ?? i.create()).current;
  return r.hoverInteractionState || (r.hoverInteractionState = o), (0, t.useOnMount)(r.hoverInteractionState.disposeEffect), r.hoverInteractionState;
};
export { _export_applySafePolygonPointerEventsMutation as applySafePolygonPointerEventsMutation, _export_clearSafePolygonPointerEventsMutation as clearSafePolygonPointerEventsMutation, _export_useHoverInteractionSharedState as useHoverInteractionSharedState };

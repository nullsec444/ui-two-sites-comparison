// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module7642 from "./7642.js";
import * as _module38233 from "./38233.js";
import * as _module34529 from "./34529.js";
var r = _module7642,
  i = _module38233,
  o = _module34529;
function l() {
  return new i.FloatingRootStore({
    open: !1,
    transitionStatus: void 0,
    floatingElement: null,
    referenceElement: null,
    triggerElements: new o.PopupTriggerMap(),
    floatingId: void 0,
    syncOnly: !1,
    nested: !1,
    onOpenChange: void 0
  });
}
let s = e => e.triggerIdProp ?? e.activeTriggerId,
  u = e => e.openProp ?? e.open,
  a = e => (e.popupElement?.id ?? e.floatingId) || void 0;
function c(e, t) {
  return void 0 !== t && u(e) && s(e) === t;
}
const _export_createInitialPopupStoreState = function () {
  return {
    open: !1,
    openProp: void 0,
    mounted: !1,
    transitionStatus: void 0,
    floatingRootContext: l(),
    floatingId: void 0,
    triggerCount: 0,
    preventUnmountingOnClose: !1,
    payload: void 0,
    activeTriggerId: null,
    activeTriggerElement: null,
    triggerIdProp: void 0,
    popupElement: null,
    positionerElement: null,
    activeTriggerProps: r.EMPTY_OBJECT,
    inactiveTriggerProps: r.EMPTY_OBJECT,
    popupProps: r.EMPTY_OBJECT
  };
};
const _export_createPopupFloatingRootContext = function (e, t, n = !1) {
  return new i.FloatingRootStore({
    open: !1,
    transitionStatus: void 0,
    floatingElement: null,
    referenceElement: null,
    triggerElements: e,
    floatingId: t,
    syncOnly: !0,
    nested: n,
    onOpenChange: void 0
  });
};
const _export_popupStoreSelectors = {
  open: u,
  mounted: e => e.mounted,
  transitionStatus: e => e.transitionStatus,
  floatingRootContext: e => e.floatingRootContext,
  triggerCount: e => e.triggerCount,
  preventUnmountingOnClose: e => e.preventUnmountingOnClose,
  payload: e => e.payload,
  activeTriggerId: s,
  activeTriggerElement: e => e.mounted ? e.activeTriggerElement : null,
  popupId: a,
  isTriggerActive: (e, t) => void 0 !== t && s(e) === t,
  isOpenedByTrigger: (e, t) => c(e, t),
  isMountedByTrigger: (e, t) => void 0 !== t && s(e) === t && e.mounted,
  triggerProps: (e, t) => t ? e.activeTriggerProps : e.inactiveTriggerProps,
  triggerPopupId: (e, t) => c(e, t) || void 0 !== t && u(e) && null == s(e) && 1 === e.triggerCount ? a(e) : void 0,
  popupProps: e => e.popupProps,
  popupElement: e => e.popupElement,
  positionerElement: e => e.positionerElement
};
export { _export_createInitialPopupStoreState as createInitialPopupStoreState, _export_createPopupFloatingRootContext as createPopupFloatingRootContext, _export_popupStoreSelectors as popupStoreSelectors };

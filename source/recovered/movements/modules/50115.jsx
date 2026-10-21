// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
var t, n;
let r = ((t = {}).startingStyle = "data-starting-style", t.endingStyle = "data-ending-style", t),
  i = {
    "data-starting-style": ""
  },
  o = {
    "data-ending-style": ""
  },
  l = {
    transitionStatus: e => "starting" === e ? i : "ending" === e ? o : null
  };
let s = ((n = {}).open = "data-open", n.closed = "data-closed", n[n.startingStyle = r.startingStyle] = "startingStyle", n[n.endingStyle = r.endingStyle] = "endingStyle", n.anchorHidden = "data-anchor-hidden", n.side = "data-side", n.align = "data-align", n),
  u = {
    "data-popup-open": ""
  },
  a = {
    "data-popup-open": "",
    "data-pressed": ""
  },
  c = {
    "data-open": ""
  },
  f = {
    "data-closed": ""
  },
  d = {
    "data-anchor-hidden": ""
  },
  g = {
    open: e => e ? c : f,
    anchorHidden: e => e ? d : null
  },
  p = {
    ...g,
    ...l
  };
const _export_CommonPopupDataAttributes = s;
const _export_popupStateMapping = g;
const _export_popupTransitionStateMapping = p;
const _export_pressableTriggerOpenStateMapping = {
  open: e => e ? a : null
};
const _export_triggerOpenStateMapping = {
  open: e => e ? u : null
};
export { _export_CommonPopupDataAttributes as CommonPopupDataAttributes, _export_popupStateMapping as popupStateMapping, _export_popupTransitionStateMapping as popupTransitionStateMapping, _export_pressableTriggerOpenStateMapping as pressableTriggerOpenStateMapping, _export_triggerOpenStateMapping as triggerOpenStateMapping };

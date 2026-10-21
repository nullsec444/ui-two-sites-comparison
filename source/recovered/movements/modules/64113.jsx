// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module50115 from "./50115.js";
import * as _module31903 from "./31903.js";
import * as _module7642 from "./7642.js";
import * as _module54382 from "./54382.js";
var w = _module50115,
  C = _module31903,
  R = _module7642,
  O = _module54382;
function P(e) {
  return "starting" === e ? O.DISABLED_TRANSITIONS_STYLE : R.EMPTY_OBJECT;
}
const _export_usePositioner = function (e, t, {
  styles: n,
  transitionStatus: r,
  props: i,
  refs: o,
  hidden: l,
  inert: s = !1
}) {
  let u = {
    ...n
  };
  return s && (u.pointerEvents = "none"), (0, C.useRenderElement)("div", e, {
    state: t,
    ref: o,
    props: [{
      role: "presentation",
      hidden: l,
      style: u
    }, P(r), i],
    stateAttributesMapping: w.popupStateMapping
  });
};
export { _export_usePositioner as usePositioner };

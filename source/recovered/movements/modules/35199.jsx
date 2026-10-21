// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module47029 from "./47029.js";
var g = _module47029;
let v = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
  },
  y = !1;
function x() {
  return !function () {
    if (y) return;
    let t = {};
    for (let e in v) t[e] = {
      isEnabled: t => v[e].some(e => !!t[e])
    };
    (0, g.setFeatureDefinitions)(t), y = !0;
  }(), (0, g.getFeatureDefinitions)();
}
const _export_getInitializedFeatureDefinitions = x;
export { _export_getInitializedFeatureDefinitions as getInitializedFeatureDefinitions };

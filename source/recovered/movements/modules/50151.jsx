// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module34561 from "./34561.js";
var t = _module34561;
const _export_isClickLikeEvent = function (e) {
  let t = e.type;
  return "click" === t || "mousedown" === t || "keydown" === t || "keyup" === t;
};
const _export_isMouseLikePointerType = function (e, t) {
  let n = ["mouse", "pen"];
  return t || n.push("", void 0), n.includes(e);
};
const _export_isReactEvent = function (e) {
  return "nativeEvent" in e;
};
const _export_isVirtualClick = function (e) {
  return "" === e.pointerType && !!e.isTrusted || (t.platform.os.android && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType);
};
const _export_isVirtualPointerEvent = function (e) {
  return !t.platform.env.jsdom && (!t.platform.os.android && 0 === e.width && 0 === e.height || t.platform.os.android && 1 === e.width && 1 === e.height && 0 === e.pressure && 0 === e.detail && "mouse" === e.pointerType || e.width < 1 && e.height < 1 && 0 === e.pressure && 0 === e.detail && "touch" === e.pointerType);
};
const _export_stopEvent = function (e) {
  e.preventDefault(), e.stopPropagation();
};
export { _export_isClickLikeEvent as isClickLikeEvent, _export_isMouseLikePointerType as isMouseLikePointerType, _export_isReactEvent as isReactEvent, _export_isVirtualClick as isVirtualClick, _export_isVirtualPointerEvent as isVirtualPointerEvent, _export_stopEvent as stopEvent };

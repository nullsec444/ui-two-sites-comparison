// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module50151 from "./50151.js";
var t = _module50151;
const _export_getDelay = function (e, n, r) {
  let i = null == r || (0, t.isMouseLikePointerType)(r) ? "function" == typeof e ? e() : e : 0;
  return "number" == typeof i ? i : i?.[n];
};
const _export_getRestMs = function (e) {
  return "function" == typeof e ? e() : e;
};
const _export_isClickLikeOpenEvent = function (e, t) {
  return t || "click" === e || "mousedown" === e;
};
const _export_isHoverOpenEvent = function (e) {
  return e?.includes("mouse") && "mousedown" !== e;
};
export { _export_getDelay as getDelay, _export_getRestMs as getRestMs, _export_isClickLikeOpenEvent as isClickLikeOpenEvent, _export_isHoverOpenEvent as isHoverOpenEvent };

// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module80269 from "./80269.js";
var t = _module80269;
let r = "ArrowUp",
  n = "ArrowDown",
  i = "ArrowLeft",
  o = "ArrowRight",
  s = "Home",
  a = new Set([r, n, i, o, s, "End"]);
function l(e, t, r) {
  let n = "left" === r ? "offsetLeft" : "offsetTop",
    i = 0;
  for (; t.offsetParent && (i += t[n], t.offsetParent !== e);) t = t.offsetParent;
  return i;
}
function u(e) {
  let t = getComputedStyle(e);
  return {
    scrollMarginTop: parseFloat(t.scrollMarginTop) || 0,
    scrollMarginRight: parseFloat(t.scrollMarginRight) || 0,
    scrollMarginBottom: parseFloat(t.scrollMarginBottom) || 0,
    scrollMarginLeft: parseFloat(t.scrollMarginLeft) || 0,
    scrollPaddingTop: parseFloat(t.scrollPaddingTop) || 0,
    scrollPaddingRight: parseFloat(t.scrollPaddingRight) || 0,
    scrollPaddingBottom: parseFloat(t.scrollPaddingBottom) || 0,
    scrollPaddingLeft: parseFloat(t.scrollPaddingLeft) || 0
  };
}
const _export_ARROW_DOWN = n;
const _export_ARROW_LEFT = i;
const _export_ARROW_RIGHT = o;
const _export_ARROW_UP = r;
const _export_COMPOSITE_KEYS = a;
const _export_END = "End";
const _export_HOME = s;
const _export_MODIFIER_KEYS = ["Shift", "Control", "Alt", "Meta"];
const _export_isNativeInput = function (e) {
  return !!((0, t.isHTMLElement)(e) && "INPUT" === e.tagName && null != e.selectionStart || (0, t.isHTMLElement)(e) && "TEXTAREA" === e.tagName);
};
const _export_scrollIntoViewIfNeeded = function (e, t, r, n) {
  if (!e || !t || !t.scrollTo) return;
  let i = e.scrollLeft,
    o = e.scrollTop,
    s = e.clientWidth < e.scrollWidth,
    a = e.clientHeight < e.scrollHeight;
  if (s && "vertical" !== n) {
    let n = l(e, t, "left"),
      o = u(e),
      s = u(t);
    "ltr" === r && (n + t.offsetWidth + s.scrollMarginRight > e.scrollLeft + e.clientWidth - o.scrollPaddingRight ? i = n + t.offsetWidth + s.scrollMarginRight - e.clientWidth + o.scrollPaddingRight : n - s.scrollMarginLeft < e.scrollLeft + o.scrollPaddingLeft && (i = n - s.scrollMarginLeft - o.scrollPaddingLeft)), "rtl" === r && (n - s.scrollMarginLeft < e.scrollLeft + o.scrollPaddingLeft ? i = n - s.scrollMarginLeft - o.scrollPaddingLeft : n + t.offsetWidth + s.scrollMarginRight > e.scrollLeft + e.clientWidth - o.scrollPaddingRight && (i = n + t.offsetWidth + s.scrollMarginRight - e.clientWidth + o.scrollPaddingRight));
  }
  if (a && "horizontal" !== n) {
    let r = l(e, t, "top"),
      n = u(e),
      i = u(t);
    r - i.scrollMarginTop < e.scrollTop + n.scrollPaddingTop ? o = r - i.scrollMarginTop - n.scrollPaddingTop : r + t.offsetHeight + i.scrollMarginBottom > e.scrollTop + e.clientHeight - n.scrollPaddingBottom && (o = r + t.offsetHeight + i.scrollMarginBottom - e.clientHeight + n.scrollPaddingBottom);
  }
  e.scrollTo({
    left: i,
    top: o,
    behavior: "auto"
  });
};
export { _export_ARROW_DOWN as ARROW_DOWN, _export_ARROW_LEFT as ARROW_LEFT, _export_ARROW_RIGHT as ARROW_RIGHT, _export_ARROW_UP as ARROW_UP, _export_COMPOSITE_KEYS as COMPOSITE_KEYS, _export_END as END, _export_HOME as HOME, _export_MODIFIER_KEYS as MODIFIER_KEYS, _export_isNativeInput as isNativeInput, _export_scrollIntoViewIfNeeded as scrollIntoViewIfNeeded };

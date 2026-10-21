// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module80269 from "./80269.js";
var l = _module80269;
function s(e, t, n = !1) {
  return "vertical" === t ? function (e, t = !1) {
    let {
      overflowY: n
    } = (0, l.getComputedStyle)(e);
    return ("auto" === n || "scroll" === n) && (t ? e.clientHeight > 0 : e.scrollHeight > e.clientHeight);
  }(e, n) : function (e, t = !1) {
    let {
      overflowX: n
    } = (0, l.getComputedStyle)(e);
    return ("auto" === n || "scroll" === n) && (t ? e.clientWidth > 0 : e.scrollWidth > e.clientWidth);
  }(e, n);
}
function u(e, t, n) {
  let r = e;
  for (; (0, l.isHTMLElement)(r) && r !== t && !(0, l.isLastTraversableNode)(r);) {
    for (let e of n) if (s(r, e)) return !0;
    r = (0, l.getParentNode)(r);
  }
  return !1;
}
function a(e, t, n = "vertical", r = !1) {
  let i = (0, l.isHTMLElement)(e) ? e : null;
  for (; (0, l.isHTMLElement)(i) && i !== t && !(0, l.isLastTraversableNode)(i);) {
    if (s(i, n, r)) return i;
    i = (0, l.getParentNode)(i);
  }
  return s(t, n, r) ? t : null;
}
const _export_findScrollableTouchTarget = a;
const _export_hasScrollableAncestor = u;
export { _export_findScrollableTouchTarget as findScrollableTouchTarget, _export_hasScrollableAncestor as hasScrollableAncestor };

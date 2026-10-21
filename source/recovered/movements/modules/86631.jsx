// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module80269 from "./80269.js";
var t = _module80269;
const _export_activeElement = function (e) {
  let t = e.activeElement;
  for (; t?.shadowRoot?.activeElement != null;) t = t.shadowRoot.activeElement;
  return t;
};
const _export_contains = function (e, r) {
  if (!e || !r) return !1;
  let n = r.getRootNode?.();
  if (e.contains(r)) return !0;
  if (n && (0, t.isShadowRoot)(n)) {
    let t = r;
    for (; t;) {
      if (e === t) return !0;
      t = t.parentNode || t.host;
    }
  }
  return !1;
};
const _export_getTarget = function (e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
};
export { _export_activeElement as activeElement, _export_contains as contains, _export_getTarget as getTarget };

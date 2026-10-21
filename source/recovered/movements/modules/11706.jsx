// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module80269 from "./80269.js";
var t = _module80269;
function r(e, {
  startingIndex: t = -1,
  decrement: i = !1,
  disabledIndices: o,
  amount: s = 1
} = {}) {
  let a = t;
  do a += i ? -s : s; while (a >= 0 && a <= e.length - 1 && n(e, a, o));
  return a;
}
function n(e, t, r) {
  if ("function" == typeof r ? r(t) : r?.includes(t) ?? !1) return !0;
  let n = e[t];
  return !!n && (!!(!i(n) || n.matches(":disabled")) || !r && (n.hasAttribute("disabled") || "true" === n.getAttribute("aria-disabled")));
}
function i(e, r = e ? (0, t.getComputedStyle)(e) : null) {
  var n;
  return !!e && !!e.isConnected && !!r && "hidden" !== (n = r).visibility && "collapse" !== n.visibility && ("function" == typeof e.checkVisibility ? e.checkVisibility() : "none" !== r.display && "contents" !== r.display);
}
const _export_findNonDisabledListIndex = r;
const _export_getMaxListIndex = function (e, t) {
  return r(e.current, {
    decrement: !0,
    startingIndex: e.current.length,
    disabledIndices: t
  });
};
const _export_getMinListIndex = function (e, t) {
  return r(e.current, {
    disabledIndices: t
  });
};
const _export_isElementVisible = i;
const _export_isIndexOutOfListBounds = function (e, t) {
  return t < 0 || t >= e.length;
};
const _export_isListIndexDisabled = n;
export { _export_findNonDisabledListIndex as findNonDisabledListIndex, _export_getMaxListIndex as getMaxListIndex, _export_getMinListIndex as getMinListIndex, _export_isElementVisible as isElementVisible, _export_isIndexOutOfListBounds as isIndexOutOfListBounds, _export_isListIndexDisabled as isListIndexDisabled };

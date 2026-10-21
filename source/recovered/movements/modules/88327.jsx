// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module7642 from "./7642.js";
var t = _module7642;
const _export_createChangeEventDetails = function (e, r, n, i) {
  let o = !1,
    s = !1,
    a = i ?? t.EMPTY_OBJECT;
  return {
    reason: e,
    event: r ?? new Event("base-ui"),
    cancel() {
      o = !0;
    },
    allowPropagation() {
      s = !0;
    },
    get isCanceled() {
      return o;
    },
    get isPropagationAllowed() {
      return s;
    },
    trigger: n,
    ...a
  };
};
const _export_createGenericEventDetails = function (e, r, n) {
  let i = n ?? t.EMPTY_OBJECT;
  return {
    reason: e,
    event: r ?? new Event("base-ui"),
    ...i
  };
};
export { _export_createChangeEventDetails as createChangeEventDetails, _export_createGenericEventDetails as createGenericEventDetails };

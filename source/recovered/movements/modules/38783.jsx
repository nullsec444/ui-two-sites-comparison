// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module75623 from "./75623.js";
import * as _module23286 from "./23286.js";
var t = _module75623,
  r = _module23286;
let n = t.SafeReact.useInsertionEffect,
  i = n && n !== t.SafeReact.useLayoutEffect ? n : e => e();
function o() {
  let e = {
    next: void 0,
    callback: s,
    trampoline: (...t) => e.callback?.(...t),
    effect: () => {
      e.callback = e.next;
    }
  };
  return e;
}
function s() {}
const _export_useStableCallback = function (e) {
  let t = (0, r.useRefWithInit)(o).current;
  return t.next = e, i(t.effect), t.trampoline;
};
export { _export_useStableCallback as useStableCallback };

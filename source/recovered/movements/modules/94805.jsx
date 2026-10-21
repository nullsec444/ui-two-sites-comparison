// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module71955 from "./71955.js";
import * as _module23286 from "./23286.js";
var t = _module71955,
  r = _module23286;
function n(e) {
  let t = {
    current: e,
    next: e,
    effect: () => {
      t.current = t.next;
    }
  };
  return t;
}
const _export_useValueAsRef = function (e) {
  let i = (0, r.useRefWithInit)(n, e).current;
  return i.next = e, (0, t.useIsoLayoutEffect)(i.effect), i;
};
export { _export_useValueAsRef as useValueAsRef };

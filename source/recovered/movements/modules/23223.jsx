// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module63118 from "./63118.js";
var tG = _module63118;
function tz(t, e) {
  let i = (0, tG.resolveElements)(t),
    n = new AbortController();
  return [i, {
    passive: !0,
    ...e,
    signal: n.signal
  }, () => n.abort()];
}
const _export_setupGesture = tz;
export { _export_setupGesture as setupGesture };

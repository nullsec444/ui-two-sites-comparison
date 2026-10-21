// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module45032 from "./45032.js";
import * as _module57851 from "./57851.js";
var t = _module45032,
  r = _module57851;
const _export_getReactElementRef = function (e) {
  if (!t.isValidElement(e)) return null;
  let n = e.props;
  return ((0, r.isReactVersionAtLeast)(19) ? n?.ref : e.ref) ?? null;
};
export { _export_getReactElementRef as getReactElementRef };

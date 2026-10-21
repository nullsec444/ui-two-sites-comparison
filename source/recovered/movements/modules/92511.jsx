// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module96563 from "./96563.js";
var e = _module96563;
const _export_isHTMLElement = function (t) {
  return (0, e.isObject)(t) && "offsetHeight" in t && !("ownerSVGElement" in t);
};
export { _export_isHTMLElement as isHTMLElement };

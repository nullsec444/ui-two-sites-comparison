// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module10242 from "./10242.js";
import * as _module80269 from "./80269.js";
var t = _module10242,
  n = _module80269;
const _export_getCssDimensions = function (e) {
  let r = (0, n.getComputedStyle)(e),
    i = parseFloat(r.width) || 0,
    o = parseFloat(r.height) || 0,
    l = (0, n.isHTMLElement)(e),
    s = l ? e.offsetWidth : i,
    u = l ? e.offsetHeight : o;
  return ((0, t.round)(i) !== s || (0, t.round)(o) !== u) && (i = s, o = u), {
    width: i,
    height: o
  };
};
export { _export_getCssDimensions as getCssDimensions };

// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module45032 from "./45032.js";
var t = _module45032;
let r = {};
const _export_useRefWithInit = function (e, n) {
  let i = t.useRef(r);
  return i.current === r && (i.current = e(n)), i;
};
export { _export_useRefWithInit as useRefWithInit };

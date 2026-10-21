// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module45032 from "./45032.js";
var t = _module45032;
const _export_useControlled = function ({
  controlled: e,
  default: r,
  name: n,
  state: i = "value"
}) {
  let {
      current: o
    } = t.useRef(void 0 !== e),
    [s, a] = t.useState(r),
    l = t.useCallback(e => {
      o || a(e);
    }, []);
  return [o ? e : s, l];
};
export { _export_useControlled as useControlled };

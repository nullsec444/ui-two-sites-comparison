// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module45032 from "./45032.js";
var o = _module45032;
const _export_useMotionRef = function (t, e, i) {
  let n = (0, o.useRef)(i);
  (0, o.useInsertionEffect)(() => {
    n.current = i;
  });
  let s = (0, o.useRef)(null);
  return (0, o.useCallback)(i => {
    i && t.onMount?.(i), e && (i ? e.mount(i) : e.unmount());
    let r = n.current;
    if ("function" == typeof r) {
      if (i) {
        let t = r(i);
        "function" == typeof t && (s.current = t);
      } else s.current ? (s.current(), s.current = null) : r(i);
    } else r && (r.current = i);
  }, [e]);
};
export { _export_useMotionRef as useMotionRef };

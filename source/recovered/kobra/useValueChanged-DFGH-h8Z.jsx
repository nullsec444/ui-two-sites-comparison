// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import { a as e } from "./rolldown-runtime-B0Z9INg1.js";
import { n as t } from "./jsx-runtime-Ciaf_P-h.js";
import { m as n, p as r } from "./useRenderElement-BLCXgiyH.js";
var i = e(t(), 1);
function a(e, t) {
  let a = i.useRef(e),
    o = n(t);
  r(() => {
    a.current !== e && o(a.current), a.current = e;
  }, [e, o]);
}
export { a as t };

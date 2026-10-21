// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import { a as e } from "./rolldown-runtime-B0Z9INg1.js";
import { n as t, t as n } from "./jsx-runtime-Ciaf_P-h.js";
import { f as r, l as i, t as a } from "./auth-B4_ie6aM.js";
import { C as o } from "./index-C2FRa1ig.js";
var s = e(t()),
  c = i({
    method: `POST`
  }).middleware([a]).handler(r(`5aabf45b7446b27add32c6ab524cd4b5e8605db720ae53f5182f8628dc3928f1`)),
  l = e(n());
function u() {
  let e = (0, s.useRef)(!1);
  return (0, s.useEffect)(() => {
    e.current || (e.current = !0, c());
  }, []), (0, l.jsx)(o, {});
}
export { u as component };

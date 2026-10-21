// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import { a as e } from "./rolldown-runtime-B0Z9INg1.js";
import { n as t } from "./jsx-runtime-Ciaf_P-h.js";
var n = e(t(), 1);
function r({
  controlled: e,
  default: t,
  name: r,
  state: i = `value`
}) {
  let {
      current: a
    } = n.useRef(e !== void 0),
    [o, s] = n.useState(t);
  return [a ? e : o, n.useCallback(e => {
    a || s(e);
  }, [])];
}
export { r as t };

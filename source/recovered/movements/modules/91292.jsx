// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module45032 from "./45032.js";
import * as _module9612 from "./9612.js";
import * as _module47694 from "./47694.js";
var e = _module45032;
let i = (0, e.createContext)({});
var n = _module9612,
  s = _module47694;
function r(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const _export_useCreateMotionContext = function (t) {
  let {
    initial: o,
    animate: a
  } = function (t, e) {
    if ((0, n.isControllingVariants)(t)) {
      let {
        initial: e,
        animate: i
      } = t;
      return {
        initial: !1 === e || (0, s.isVariantLabel)(e) ? e : void 0,
        animate: (0, s.isVariantLabel)(i) ? i : void 0
      };
    }
    return !1 !== t.inherit ? e : {};
  }(t, (0, e.useContext)(i));
  return (0, e.useMemo)(() => ({
    initial: o,
    animate: a
  }), [r(o), r(a)]);
};
export { _export_useCreateMotionContext as useCreateMotionContext };

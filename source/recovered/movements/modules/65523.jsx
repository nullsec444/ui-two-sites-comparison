// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module31908 from "./jsx-runtime-31908.js";
import * as _module94765 from "./94765.js";
import * as _module74468 from "./74468.js";
var t = _module31908,
  n = _module94765,
  r = _module74468;
let i = {
  type: "spring",
  duration: .3,
  bounce: 0
};
const _export_MorphButton = function ({
  label: e,
  className: a = "",
  type: o = "button",
  ...s
}) {
  return (0, t.jsx)(r.motion.button, {
    type: o,
    className: `items-center justify-center overflow-hidden ${a || "inline-flex"}`,
    layout: !0,
    transition: i,
    ...s,
    children: (0, t.jsx)(n.AnimatePresence, {
      mode: "popLayout",
      initial: !1,
      children: (0, t.jsx)(r.motion.span, {
        initial: {
          opacity: 0,
          y: 5,
          filter: "blur(4px)"
        },
        animate: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)"
        },
        exit: {
          opacity: 0,
          y: -5,
          filter: "blur(4px)"
        },
        transition: i,
        className: "inline-block whitespace-nowrap",
        children: e
      }, e)
    })
  });
};
export { _export_MorphButton as MorphButton };

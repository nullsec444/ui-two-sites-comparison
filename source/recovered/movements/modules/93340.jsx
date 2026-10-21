// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module45032 from "./45032.js";
var e = _module45032,
  s = {
    outline: {
      xmlns: "http://www.w3.org/2000/svg",
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    },
    filled: {
      xmlns: "http://www.w3.org/2000/svg",
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      stroke: "none"
    }
  };
const _export_default = (t, a, i, n) => {
  let l = (0, e.forwardRef)(({
    color: i = "currentColor",
    size: l = 24,
    stroke: r = 2,
    title: c,
    className: h,
    children: o,
    ...m
  }, u) => (0, e.createElement)("svg", {
    ref: u,
    ...s[t],
    width: l,
    height: l,
    className: ["tabler-icon", `tabler-icon-${a}`, h].join(" "),
    ...("filled" === t ? {
      fill: i
    } : {
      strokeWidth: r,
      stroke: i
    }),
    ...m
  }, [c && (0, e.createElement)("title", {
    key: "svg-title"
  }, c), ...n.map(([t, s]) => (0, e.createElement)(t, s)), ...(Array.isArray(o) ? o : [o])]));
  return l.displayName = `${i}`, l;
};
export { _export_default as "default" };

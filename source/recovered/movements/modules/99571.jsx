// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
let e9 = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function e2(t) {
  if ("string" != typeof t || t.includes("-")) ;else if (e9.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
  return !1;
}
const _export_isSVGComponent = e2;
export { _export_isSVGComponent as isSVGComponent };

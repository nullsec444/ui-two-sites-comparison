// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
function en(t) {
  return null !== t && "object" == typeof t && "function" == typeof t.start;
}
function es(t) {
  return "string" == typeof t || Array.isArray(t);
}
let er = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
  eo = ["initial", ...er];
function ea(t) {
  return en(t.animate) || eo.some(e => es(t[e]));
}
function el(t) {
  return !!(ea(t) || t.variants);
}
const _export_isControllingVariants = ea;
const _export_isVariantNode = el;
export { _export_isControllingVariants as isControllingVariants, _export_isVariantNode as isVariantNode };

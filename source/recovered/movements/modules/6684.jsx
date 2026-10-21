// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
function a(e, t) {
  return Math.max(0, Math.round(e) - Math.round(t));
}
const _export_childRadius = a;
const _export_clampGap = function (e, t) {
  return Math.min(Math.round(t), Math.max(0, Math.round(e)));
};
const _export_clampParent = function (e) {
  return Math.min(120, Math.max(0, Math.round(e)));
};
export { _export_childRadius as childRadius, _export_clampGap as clampGap, _export_clampParent as clampParent };

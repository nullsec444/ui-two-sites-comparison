// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
const _export_addDomEvent = function (t, e, i, n = {
  passive: !0
}) {
  return t.addEventListener(e, i, n), () => t.removeEventListener(e, i, n);
};
export { _export_addDomEvent as addDomEvent };

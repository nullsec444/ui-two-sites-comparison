// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
let k = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary;
function L(t) {
  return {
    point: {
      x: t.pageX,
      y: t.pageY
    }
  };
}
let B = t => e => k(e) && t(e, L(e));
const _export_addPointerInfo = B;
const _export_extractEventInfo = L;
export { _export_addPointerInfo as addPointerInfo, _export_extractEventInfo as extractEventInfo };

// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
let tV = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
  tE = t => e => 1 - t(1 - e),
  tL = t => 1 - Math.sin(Math.acos(t)),
  tB = tE(tL),
  tF = tV(tL);
const _export_circIn = tL;
const _export_circInOut = tF;
const _export_circOut = tB;
export { _export_circIn as circIn, _export_circInOut as circInOut, _export_circOut as circOut };

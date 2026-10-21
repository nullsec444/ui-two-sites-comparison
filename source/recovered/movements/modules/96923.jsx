// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
let tJ = (t, e, i = 10) => {
  let n = "",
    s = Math.max(Math.round(e / i), 2);
  for (let e = 0; e < s; e++) n += Math.round(1e4 * t(e / (s - 1))) / 1e4 + ", ";
  return `linear(${n.substring(0, n.length - 2)})`;
};
const _export_generateLinearEasing = tJ;
export { _export_generateLinearEasing as generateLinearEasing };

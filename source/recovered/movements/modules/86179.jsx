// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
let tK = t => null !== t;
function tX(t, {
  repeat: e,
  repeatType: i = "loop"
}, n, s = 1) {
  let r = t.filter(tK),
    o = s < 0 || e && "loop" !== i && e % 2 == 1 ? 0 : r.length - 1;
  return o && void 0 !== n ? n : r[o];
}
const _export_getFinalKeyframe = tX;
export { _export_getFinalKeyframe as getFinalKeyframe };

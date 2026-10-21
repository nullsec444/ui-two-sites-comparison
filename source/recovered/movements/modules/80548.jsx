// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
function M(t, e) {
  if (t?.inherit && e) {
    let {
      inherit: i,
      ...n
    } = t;
    return {
      ...e,
      ...n
    };
  }
  return t;
}
function A(t, e) {
  let i = t?.[e] ?? t?.default ?? t;
  return i !== t ? M(i, t) : i;
}
const _export_getValueTransition = A;
export { _export_getValueTransition as getValueTransition };

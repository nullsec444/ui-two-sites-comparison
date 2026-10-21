// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
function ed(t) {
  let e = [{}, {}];
  return t?.values.forEach((t, i) => {
    e[0][i] = t.get(), e[1][i] = t.getVelocity();
  }), e;
}
function ep(t, e, i, n) {
  if ("function" == typeof e) {
    let [s, r] = ed(n);
    e = e(void 0 !== i ? i : t.custom, s, r);
  }
  if ("string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e) {
    let [s, r] = ed(n);
    e = e(void 0 !== i ? i : t.custom, s, r);
  }
  return e;
}
const _export_resolveVariantFromProps = ep;
export { _export_resolveVariantFromProps as resolveVariantFromProps };

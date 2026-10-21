// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
const _export_getStateAttributesProps = function (e, t) {
  let r = {};
  for (let n in e) {
    let i = e[n];
    if (t?.hasOwnProperty(n)) {
      let e = t[n](i);
      null != e && Object.assign(r, e);
      continue;
    }
    !0 === i ? r[`data-${n.toLowerCase()}`] = "" : i && (r[`data-${n.toLowerCase()}`] = i.toString());
  }
  return r;
};
export { _export_getStateAttributesProps as getStateAttributesProps };

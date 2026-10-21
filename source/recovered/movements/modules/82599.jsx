// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
const _export_getNodeAncestors = function (e, t) {
  let n = [],
    r = e.find(e => e.id === t)?.parentId;
  for (; r;) {
    let t = e.find(e => e.id === r);
    r = t?.parentId, t && (n = n.concat(t));
  }
  return n;
};
const _export_getNodeChildren = function e(t, n, r = !0) {
  return t.filter(e => e.parentId === n).flatMap(n => [...(!r || n.context?.open ? [n] : []), ...e(t, n.id, r)]);
};
export { _export_getNodeAncestors as getNodeAncestors, _export_getNodeChildren as getNodeChildren };

// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
function eN({
  top: t,
  left: e,
  right: i,
  bottom: n
}) {
  return {
    x: {
      min: e,
      max: i
    },
    y: {
      min: t,
      max: n
    }
  };
}
function eU(t, e) {
  if (!e) return t;
  let i = e({
      x: t.left,
      y: t.top
    }),
    n = e({
      x: t.right,
      y: t.bottom
    });
  return {
    top: i.y,
    left: i.x,
    bottom: n.y,
    right: n.x
  };
}
function eq(t, e) {
  t.min += e, t.max += e;
}
function eQ(t, e) {
  return eN(eU(t.getBoundingClientRect(), e));
}
const _export_measurePageBox = function (t, e, i) {
  let n = eQ(t, i),
    {
      scroll: s
    } = e;
  return s && (eq(n.x, s.offset.x), eq(n.y, s.offset.y)), n;
};
const _export_measureViewportBox = eQ;
export { _export_measurePageBox as measurePageBox, _export_measureViewportBox as measureViewportBox };

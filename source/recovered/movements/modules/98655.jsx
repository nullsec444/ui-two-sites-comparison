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
const _export_convertBoundingBoxToBox = eN;
const _export_convertBoxToBoundingBox = function ({
  x: t,
  y: e
}) {
  return {
    top: e.min,
    right: t.max,
    bottom: e.max,
    left: t.min
  };
};
const _export_transformBoxPoints = eU;
export { _export_convertBoundingBoxToBox as convertBoundingBoxToBox, _export_convertBoxToBoundingBox as convertBoxToBoundingBox, _export_transformBoxPoints as transformBoxPoints };

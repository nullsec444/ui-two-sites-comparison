// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
let ey = {
  x: !1,
  y: !1
};
const _export_setDragLock = function (t) {
  if ("x" === t || "y" === t) if (ey[t]) return null;else return ey[t] = !0, () => {
    ey[t] = !1;
  };
  return ey.x || ey.y ? null : (ey.x = ey.y = !0, () => {
    ey.x = ey.y = !1;
  });
};
export { _export_setDragLock as setDragLock };

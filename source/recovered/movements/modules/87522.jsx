// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
const _export_quadIn = function (t) {
  return t * t;
};
const _export_quadInOut = function (t) {
  return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
};
const _export_quadOut = function (t) {
  return t * (2 - t);
};
export { _export_quadIn as quadIn, _export_quadInOut as quadInOut, _export_quadOut as quadOut };

// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module18949 from "./18949.js";
var X = _module18949;
function ex(t) {
  return t.max - t.min;
}
function eb(t, e, i, n = .5) {
  t.origin = n, t.originPoint = (0, X.mixNumber)(e.min, e.max, t.origin), t.scale = ex(i) / ex(e), t.translate = (0, X.mixNumber)(i.min, i.max, t.origin) - t.originPoint, (t.scale >= .9999 && t.scale <= 1.0001 || isNaN(t.scale)) && (t.scale = 1), (t.translate >= -.01 && t.translate <= .01 || isNaN(t.translate)) && (t.translate = 0);
}
function eT(t, e, i, n = 0) {
  t.min = (n ? (0, X.mixNumber)(i.min, i.max, n) : i.min) + e.min, t.max = t.min + ex(e);
}
function ew(t, e, i, n = 0) {
  let s = n ? (0, X.mixNumber)(i.min, i.max, n) : i.min;
  t.min = e.min - s, t.max = t.min + ex(e);
}
const _export_calcBoxDelta = function (t, e, i, n) {
  eb(t.x, e.x, i.x, n ? n.originX : void 0), eb(t.y, e.y, i.y, n ? n.originY : void 0);
};
const _export_calcLength = ex;
const _export_calcRelativeBox = function (t, e, i, n) {
  eT(t.x, e.x, i.x, n?.x), eT(t.y, e.y, i.y, n?.y);
};
const _export_calcRelativePosition = function (t, e, i, n) {
  ew(t.x, e.x, i.x, n?.x), ew(t.y, e.y, i.y, n?.y);
};
const _export_isNear = function (t, e, i) {
  return Math.abs(t - e) <= i;
};
export { _export_calcBoxDelta as calcBoxDelta, _export_calcLength as calcLength, _export_calcRelativeBox as calcRelativeBox, _export_calcRelativePosition as calcRelativePosition, _export_isNear as isNear };

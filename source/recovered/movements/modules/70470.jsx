// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
function e$(t) {
  return void 0 === t || 1 === t;
}
function eW({
  scale: t,
  scaleX: e,
  scaleY: i
}) {
  return !e$(t) || !e$(e) || !e$(i);
}
function eG(t) {
  return eW(t) || ez(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
}
function ez(t) {
  var e, i;
  return (e = t.x) && "0%" !== e || (i = t.y) && "0%" !== i;
}
const _export_has2DTranslate = ez;
const _export_hasScale = eW;
const _export_hasTransform = eG;
export { _export_has2DTranslate as has2DTranslate, _export_hasScale as hasScale, _export_hasTransform as hasTransform };

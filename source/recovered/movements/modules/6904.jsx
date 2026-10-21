// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
let eL = (t, e, i) => t + (e - t) * i;
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
function eH(t, e, i) {
  return i + e * (t - i);
}
function eY(t, e, i, n, s) {
  return void 0 !== s && (t = eH(t, s, n)), eH(t, i, n) + e;
}
function eK(t, e = 0, i = 1, n, s) {
  t.min = eY(t.min, e, i, n, s), t.max = eY(t.max, e, i, n, s);
}
function eX(t, {
  x: e,
  y: i
}) {
  eK(t.x, e.translate, e.scale, e.originPoint), eK(t.y, i.translate, i.scale, i.originPoint);
}
function eq(t, e) {
  t.min += e, t.max += e;
}
function eZ(t, e, i, n, s = .5) {
  let r = eL(t.min, t.max, s);
  eK(t, e, i, r, n);
}
function e_(t, e) {
  return "string" == typeof t ? parseFloat(t) / 100 * (e.max - e.min) : t;
}
function eJ(t, e, i) {
  let n = i ?? t;
  eZ(t.x, e_(e.x, n.x), e.scaleX, e.scale, e.originX), eZ(t.y, e_(e.y, n.y), e.scaleY, e.scale, e.originY);
}
const _export_applyBoxDelta = eX;
const _export_applyTreeDeltas = function (t, e, i, n = !1) {
  let s,
    r,
    o = i.length;
  if (o) {
    e.x = e.y = 1;
    for (let a = 0; a < o; a++) {
      r = (s = i[a]).projectionDelta;
      let {
        visualElement: o
      } = s.options;
      (!o || !o.props.style || "contents" !== o.props.style.display) && (n && s.options.layoutScroll && s.scroll && s !== s.root && (eq(t.x, -s.scroll.offset.x), eq(t.y, -s.scroll.offset.y)), r && (e.x *= r.x.scale, e.y *= r.y.scale, eX(t, r)), n && eG(s.latestValues) && eJ(t, s.latestValues, s.layout?.layoutBox));
    }
    e.x < 1.0000000000001 && e.x > .999999999999 && (e.x = 1), e.y < 1.0000000000001 && e.y > .999999999999 && (e.y = 1);
  }
};
const _export_scalePoint = eH;
const _export_transformBox = eJ;
const _export_translateAxis = eq;
export { _export_applyBoxDelta as applyBoxDelta, _export_applyTreeDeltas as applyTreeDeltas, _export_scalePoint as scalePoint, _export_transformBox as transformBox, _export_translateAxis as translateAxis };

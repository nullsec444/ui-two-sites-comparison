// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
let t = ["top", "right", "bottom", "left"],
  n = t.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []),
  r = Math.min,
  i = Math.max,
  o = Math.round,
  l = Math.floor,
  s = e => ({
    x: e,
    y: e
  }),
  u = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
function a(e, t, n) {
  return i(e, r(t, n));
}
function c(e, t) {
  return "function" == typeof e ? e(t) : e;
}
function f(e) {
  return e.split("-")[0];
}
function d(e) {
  return e.split("-")[1];
}
function g(e) {
  return "x" === e ? "y" : "x";
}
function p(e) {
  return "y" === e ? "height" : "width";
}
function m(e) {
  let t = e[0];
  return "t" === t || "b" === t ? "y" : "x";
}
function h(e) {
  return g(m(e));
}
function v(e, t, n) {
  void 0 === n && (n = !1);
  let r = d(e),
    i = h(e),
    o = p(i),
    l = "x" === i ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (l = C(l)), [l, C(l)];
}
function y(e) {
  let t = C(e);
  return [E(e), t, E(t)];
}
function E(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
let b = ["left", "right"],
  S = ["right", "left"],
  x = ["top", "bottom"],
  T = ["bottom", "top"];
function w(e, t, n, r) {
  let i = d(e),
    o = function (e, t, n) {
      switch (e) {
        case "top":
        case "bottom":
          if (n) return t ? S : b;
          return t ? b : S;
        case "left":
        case "right":
          return t ? x : T;
        default:
          return [];
      }
    }(f(e), "start" === n, r);
  return i && (o = o.map(e => e + "-" + i), t && (o = o.concat(o.map(E)))), o;
}
function C(e) {
  let t = f(e);
  return u[t] + e.slice(t.length);
}
function R(e) {
  var t, n, r, i;
  return "number" != typeof e ? {
    top: null != (t = e.top) ? t : 0,
    right: null != (n = e.right) ? n : 0,
    bottom: null != (r = e.bottom) ? r : 0,
    left: null != (i = e.left) ? i : 0
  } : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function O(e) {
  let {
    x: t,
    y: n,
    width: r,
    height: i
  } = e;
  return {
    width: r,
    height: i,
    top: n,
    left: t,
    right: t + r,
    bottom: n + i,
    x: t,
    y: n
  };
}
const _export_clamp = a;
const _export_createCoords = s;
const _export_evaluate = c;
const _export_floor = l;
const _export_getAlignment = d;
const _export_getAlignmentAxis = h;
const _export_getAlignmentSides = v;
const _export_getAxisLength = p;
const _export_getExpandedPlacements = y;
const _export_getOppositeAlignmentPlacement = E;
const _export_getOppositeAxis = g;
const _export_getOppositeAxisPlacements = w;
const _export_getOppositePlacement = C;
const _export_getPaddingObject = R;
const _export_getSide = f;
const _export_getSideAxis = m;
const _export_max = i;
const _export_min = r;
const _export_placements = n;
const _export_rectToClientRect = O;
const _export_round = o;
const _export_sides = t;
export { _export_clamp as clamp, _export_createCoords as createCoords, _export_evaluate as evaluate, _export_floor as floor, _export_getAlignment as getAlignment, _export_getAlignmentAxis as getAlignmentAxis, _export_getAlignmentSides as getAlignmentSides, _export_getAxisLength as getAxisLength, _export_getExpandedPlacements as getExpandedPlacements, _export_getOppositeAlignmentPlacement as getOppositeAlignmentPlacement, _export_getOppositeAxis as getOppositeAxis, _export_getOppositeAxisPlacements as getOppositeAxisPlacements, _export_getOppositePlacement as getOppositePlacement, _export_getPaddingObject as getPaddingObject, _export_getSide as getSide, _export_getSideAxis as getSideAxis, _export_max as max, _export_min as min, _export_placements as placements, _export_rectToClientRect as rectToClientRect, _export_round as round, _export_sides as sides };

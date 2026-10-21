// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
let i = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
  n = new Set([...i, "pathRotation"]);
let s = (t, e, i) => i > e ? e : i < t ? t : i;
let r = {
    test: t => "number" == typeof t,
    parse: parseFloat,
    transform: t => t
  },
  o = {
    ...r,
    transform: t => s(0, 1, t)
  },
  a = {
    ...r,
    default: 1
  };
let g = t => ({
    test: e => "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
    parse: parseFloat,
    transform: e => `${e}${t}`
  }),
  v = g("deg"),
  y = g("%"),
  x = g("px"),
  w = {
    ...y,
    parse: t => y.parse(t) / 100,
    transform: t => y.transform(100 * t)
  };
let I = {
    ...r,
    transform: Math.round
  },
  O = {
    borderWidth: x,
    borderTopWidth: x,
    borderRightWidth: x,
    borderBottomWidth: x,
    borderLeftWidth: x,
    borderRadius: x,
    borderTopLeftRadius: x,
    borderTopRightRadius: x,
    borderBottomRightRadius: x,
    borderBottomLeftRadius: x,
    width: x,
    maxWidth: x,
    height: x,
    maxHeight: x,
    top: x,
    right: x,
    bottom: x,
    left: x,
    inset: x,
    insetBlock: x,
    insetBlockStart: x,
    insetBlockEnd: x,
    insetInline: x,
    insetInlineStart: x,
    insetInlineEnd: x,
    padding: x,
    paddingTop: x,
    paddingRight: x,
    paddingBottom: x,
    paddingLeft: x,
    paddingBlock: x,
    paddingBlockStart: x,
    paddingBlockEnd: x,
    paddingInline: x,
    paddingInlineStart: x,
    paddingInlineEnd: x,
    margin: x,
    marginTop: x,
    marginRight: x,
    marginBottom: x,
    marginLeft: x,
    marginBlock: x,
    marginBlockStart: x,
    marginBlockEnd: x,
    marginInline: x,
    marginInlineStart: x,
    marginInlineEnd: x,
    fontSize: x,
    backgroundPositionX: x,
    backgroundPositionY: x,
    rotate: v,
    pathRotation: v,
    rotateX: v,
    rotateY: v,
    rotateZ: v,
    scale: a,
    scaleX: a,
    scaleY: a,
    scaleZ: a,
    skew: v,
    skewX: v,
    skewY: v,
    distance: x,
    translateX: x,
    translateY: x,
    translateZ: x,
    x: x,
    y: x,
    z: x,
    perspective: x,
    transformPerspective: x,
    opacity: o,
    originX: w,
    originY: w,
    originZ: x,
    zIndex: I,
    fillOpacity: o,
    strokeOpacity: o,
    numOctaves: I
  };
let _ = t => e => "string" == typeof e && e.startsWith(t),
  J = _("--");
let ex = (t, e) => e && "number" == typeof t ? e.transform(t) : t,
  eb = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
  },
  eT = i.length;
function ew(t, e, s) {
  let {
      style: r,
      vars: o,
      transformOrigin: a
    } = t,
    l = !1,
    u = !1;
  for (let t in e) {
    let i = e[t];
    if (n.has(t)) {
      l = !0;
      continue;
    }
    if (J(t)) {
      o[t] = i;
      continue;
    }
    {
      let e = ex(i, O[t]);
      t.startsWith("origin") ? (u = !0, a[t] = e) : r[t] = e;
    }
  }
  if (!e.transform && (l || s ? r.transform = function (t, e, n) {
    let s = "",
      r = !0;
    for (let o = 0; o < eT; o++) {
      let a = i[o],
        l = t[a];
      if (void 0 === l) continue;
      let u = !0;
      if ("number" == typeof l) u = l === +!!a.startsWith("scale");else {
        let t = parseFloat(l);
        u = a.startsWith("scale") ? 1 === t : 0 === t;
      }
      if (!u || n) {
        let t = ex(l, O[a]);
        if (!u) {
          r = !1;
          let e = eb[a] || a;
          s += `${e}(${t}) `;
        }
        n && (e[a] = t);
      }
    }
    let o = t.pathRotation;
    return o && (r = !1, s += `rotate(${ex(o, O.pathRotation)}) `), s = s.trim(), n ? s = n(e, r ? "" : s) : r && (s = "none"), s;
  }(e, t.transform, s) : r.transform && (r.transform = "none")), u) {
    let {
      originX: t = "50%",
      originY: e = "50%",
      originZ: i = 0
    } = a;
    r.transformOrigin = `${t} ${e} ${i}`;
  }
}
const _export_buildHTMLStyles = ew;
export { _export_buildHTMLStyles as buildHTMLStyles };

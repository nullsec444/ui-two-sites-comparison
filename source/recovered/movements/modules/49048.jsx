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
  l = t => Math.round(1e5 * t) / 1e5,
  u = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
  h = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  c = (t, e) => i => !!("string" == typeof i && h.test(i) && i.startsWith(t) || e && null != i && Object.prototype.hasOwnProperty.call(i, e)),
  d = (t, e, i) => n => {
    if ("string" != typeof n) return n;
    let [s, r, o, a] = n.match(u);
    return {
      [t]: parseFloat(s),
      [e]: parseFloat(r),
      [i]: parseFloat(o),
      alpha: void 0 !== a ? parseFloat(a) : 1
    };
  },
  p = {
    ...r,
    transform: t => Math.round(s(0, 255, t))
  },
  m = {
    test: c("rgb", "red"),
    parse: d("red", "green", "blue"),
    transform: ({
      red: t,
      green: e,
      blue: i,
      alpha: n = 1
    }) => "rgba(" + p.transform(t) + ", " + p.transform(e) + ", " + p.transform(i) + ", " + l(o.transform(n)) + ")"
  };
let f = {
  test: c("#"),
  parse: function (t) {
    let e = "",
      i = "",
      n = "",
      s = "";
    return t.length > 5 ? (e = t.substring(1, 3), i = t.substring(3, 5), n = t.substring(5, 7), s = t.substring(7, 9)) : (e = t.substring(1, 2), i = t.substring(2, 3), n = t.substring(3, 4), s = t.substring(4, 5), e += e, i += i, n += n, s += s), {
      red: parseInt(e, 16),
      green: parseInt(i, 16),
      blue: parseInt(n, 16),
      alpha: s ? parseInt(s, 16) / 255 : 1
    };
  },
  transform: m.transform
};
let g = t => ({
    test: e => "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
    parse: parseFloat,
    transform: e => `${e}${t}`
  }),
  y = g("%"),
  x = g("px");
let S = {
  test: c("hsl", "hue"),
  parse: d("hue", "saturation", "lightness"),
  transform: ({
    hue: t,
    saturation: e,
    lightness: i,
    alpha: n = 1
  }) => "hsla(" + Math.round(t) + ", " + y.transform(l(e)) + ", " + y.transform(l(i)) + ", " + l(o.transform(n)) + ")"
};
let P = {
  test: t => m.test(t) || f.test(t) || S.test(t),
  parse: t => m.test(t) ? m.parse(t) : S.test(t) ? S.parse(t) : f.parse(t),
  transform: t => "string" == typeof t ? t : t.hasOwnProperty("red") ? m.transform(t) : S.transform(t),
  getAnimatableNone: t => {
    let e = P.parse(t);
    return e.alpha = 0, P.transform(e);
  }
};
let M = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
  A = "number",
  V = "color",
  E = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function C(t) {
  let e = t.toString(),
    i = [],
    n = {
      color: [],
      number: [],
      var: []
    },
    s = [],
    r = 0,
    o = e.replace(E, t => (P.test(t) ? (n.color.push(r), s.push(V), i.push(P.parse(t))) : t.startsWith("var(") ? (n.var.push(r), s.push("var"), i.push(t)) : (n.number.push(r), s.push(A), i.push(parseFloat(t))), ++r, "${}")).split("${}");
  return {
    values: i,
    split: o,
    indexes: n,
    types: s
  };
}
function D({
  split: t,
  types: e
}) {
  let i = t.length;
  return n => {
    let s = "";
    for (let r = 0; r < i; r++) if (s += t[r], void 0 !== n[r]) {
      let t = e[r];
      t === A ? s += l(n[r]) : t === V ? s += P.transform(n[r]) : s += n[r];
    }
    return s;
  };
}
let R = {
  test: function (t) {
    return isNaN(t) && "string" == typeof t && (t.match(u)?.length || 0) + (t.match(M)?.length || 0) > 0;
  },
  parse: function (t) {
    return C(t).values;
  },
  createTransformer: function (t) {
    return D(C(t));
  },
  getAnimatableNone: function (t) {
    let e = C(t);
    return D(e)(e.values.map((t, i) => ((t, e) => "number" == typeof t ? e?.trim().endsWith("/") ? t : 0 : "number" == typeof t ? 0 : P.test(t) ? P.getAnimatableNone(t) : t)(t, e.split[i])));
  }
};
let eD = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"];
function eR(t, e) {
  return e.max === e.min ? 0 : t / (e.max - e.min) * 100;
}
let ek = {
    correct: (t, e) => {
      if (!e.target) return t;
      if ("string" == typeof t) if (!x.test(t)) return t;else t = parseFloat(t);
      let i = eR(t, e.target.x),
        n = eR(t, e.target.y);
      return `${i}% ${n}%`;
    }
  },
  eL = (t, e, i) => t + (e - t) * i;
let eB = {
  borderRadius: {
    ...ek,
    applyTo: [...eD]
  },
  borderTopLeftRadius: ek,
  borderTopRightRadius: ek,
  borderBottomLeftRadius: ek,
  borderBottomRightRadius: ek,
  boxShadow: {
    correct: (t, {
      treeScale: e,
      projectionDelta: i
    }) => {
      let n = R.parse(t);
      if (n.length > 5) return t;
      let s = R.createTransformer(t),
        r = +("number" != typeof n[0]),
        o = i.x.scale * e.x,
        a = i.y.scale * e.y;
      n[0 + r] /= o, n[1 + r] /= a;
      let l = eL(o, a, .5);
      return "number" == typeof n[2 + r] && (n[2 + r] /= l), "number" == typeof n[3 + r] && (n[3 + r] /= l), s(n);
    }
  }
};
function eF(t, {
  layout: e,
  layoutId: i
}) {
  return n.has(t) || t.startsWith("origin") || (e || void 0 !== i) && (!!eB[t] || "opacity" === t);
}
const _export_isForcedMotionValue = eF;
export { _export_isForcedMotionValue as isForcedMotionValue };

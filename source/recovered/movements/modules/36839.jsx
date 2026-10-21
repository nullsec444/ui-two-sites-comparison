// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
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
  };
let g = t => ({
    test: e => "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
    parse: parseFloat,
    transform: e => `${e}${t}`
  }),
  y = g("%");
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
const _export_hsla = S;
export { _export_hsla as hsla };

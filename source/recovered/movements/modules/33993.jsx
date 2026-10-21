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
const _export_hex = f;
export { _export_hex as hex };

// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
let g = t => ({
    test: e => "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
    parse: parseFloat,
    transform: e => `${e}${t}`
  }),
  v = g("deg"),
  y = g("%"),
  x = g("px"),
  b = g("vh"),
  T = g("vw"),
  w = {
    ...y,
    parse: t => y.parse(t) / 100,
    transform: t => y.transform(100 * t)
  };
const _export_degrees = v;
const _export_percent = y;
const _export_progressPercentage = w;
const _export_px = x;
const _export_vh = b;
const _export_vw = T;
export { _export_degrees as degrees, _export_percent as percent, _export_progressPercentage as progressPercentage, _export_px as px, _export_vh as vh, _export_vw as vw };

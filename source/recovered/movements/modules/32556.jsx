// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
let {
    userAgent: t,
    platform: r,
    maxTouchPoints: n
  } = "u" < typeof navigator ? {
    userAgent: "",
    platform: "",
    maxTouchPoints: 0
  } : {
    userAgent: navigator.userAgent,
    platform: navigator.platform ?? "",
    maxTouchPoints: navigator.maxTouchPoints ?? 0
  },
  i = t.toLowerCase();
let g = "u" > typeof CSS && !!CSS.supports?.("-webkit-backdrop-filter:none"),
  h = !g && i.includes("firefox"),
  m = !g && i.includes("chrom");
const _export_blink = m;
const _export_gecko = h;
const _export_webkit = g;
export { _export_blink as blink, _export_gecko as gecko, _export_webkit as webkit };

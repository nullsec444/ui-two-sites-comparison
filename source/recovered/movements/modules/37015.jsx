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
  o = r.toLowerCase(),
  s = /^i(os$|p)/.test(o) || "macintel" === o && n > 1,
  u = !s && o.startsWith("mac"),
  d = u || s;
const _export_voiceOver = d;
export { _export_voiceOver as voiceOver };

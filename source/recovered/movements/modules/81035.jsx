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
  i = t.toLowerCase(),
  o = r.toLowerCase(),
  s = /^i(os$|p)/.test(o) || "macintel" === o && n > 1,
  a = "android",
  l = o === a || i.includes(a),
  u = !s && o.startsWith("mac"),
  c = o.startsWith("win"),
  f = !l && /^(linux|chrome os)/.test(o),
  d = u || s;
const _export_android = l;
const _export_apple = d;
const _export_ios = s;
const _export_linux = f;
const _export_mac = u;
const _export_windows = c;
export { _export_android as android, _export_apple as apple, _export_ios as ios, _export_linux as linux, _export_mac as mac, _export_windows as windows };

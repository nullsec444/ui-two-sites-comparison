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
let y = /jsdom|happydom/.test(i);
const _export_jsdom = y;
export { _export_jsdom as jsdom };

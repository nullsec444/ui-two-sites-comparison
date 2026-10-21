// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
function x(t, e, i) {
  if (null == t) return [];
  if (t instanceof EventTarget) return [t];
  if ("string" == typeof t) {
    let n = document;
    e && (n = e.current);
    let s = i?.[t] ?? n.querySelectorAll(t);
    return s ? Array.from(s) : [];
  }
  return Array.from(t).filter(t => null != t);
}
const _export_resolveElements = x;
export { _export_resolveElements as resolveElements };

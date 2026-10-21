// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
function o() {
  let e = new Map();
  return {
    emit(t, n) {
      e.get(t)?.forEach(e => e(n));
    },
    on(t, n) {
      e.has(t) || e.set(t, new Set()), e.get(t).add(n);
    },
    off(t, n) {
      e.get(t)?.delete(n);
    }
  };
}
const _export_createEventEmitter = o;
export { _export_createEventEmitter as createEventEmitter };

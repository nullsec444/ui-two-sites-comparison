// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
const _export_PopupTriggerMap = class {
  constructor() {
    this.idMap = new Map();
  }
  add(e, t) {
    this.idMap.set(e, t);
  }
  delete(e) {
    this.idMap.delete(e);
  }
  hasElement(e) {
    for (let t of this.idMap.values()) if (t === e) return !0;
    return !1;
  }
  hasMatchingElement(e) {
    for (let t of this.idMap.values()) if (e(t)) return !0;
    return !1;
  }
  getById(e) {
    return this.idMap.get(e);
  }
  entries() {
    return this.idMap.entries();
  }
  elements() {
    return this.idMap.values();
  }
  get size() {
    return this.idMap.size;
  }
};
export { _export_PopupTriggerMap as PopupTriggerMap };

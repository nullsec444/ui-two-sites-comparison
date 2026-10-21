// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module83539 from "./83539.js";
import * as _module88327 from "./88327.js";
import * as _module87491 from "./87491.js";
var t = _module83539,
  n = _module88327,
  r = _module87491;
class i {
  attachedStores = [];
  attachedStoreValue = null;
  storeListeners = new Set();
  constructor(e, t, n = !0) {
    this.fallbackStore = e, this.componentName = t, this.throwOnMissingTrigger = n;
  }
  get attachedStore() {
    return this.attachedStoreValue;
  }
  get store() {
    return this.attachedStoreValue ?? this.fallbackStore;
  }
  get serverStore() {
    return this.fallbackStore;
  }
  subscribeStore(e) {
    return this.storeListeners.add(e), () => {
      this.storeListeners.delete(e);
    };
  }
  attachStore(e) {
    return this.attachedStores.push(e), this.setActiveStore(e), () => {
      let t = this.attachedStores.lastIndexOf(e);
      -1 !== t && this.attachedStores.splice(t, 1), this.setActiveStore(this.attachedStores[this.attachedStores.length - 1] ?? null);
    };
  }
  setActiveStore(e) {
    this.attachedStoreValue !== e && (this.attachedStoreValue = e, this.storeListeners.forEach(e => {
      e();
    }));
  }
  openByTrigger(e) {
    let i,
      o = this.attachedStore;
    if (null !== o) {
      if (e) {
        for (let t = this.attachedStores.length - 1; t >= 0 && !i; t -= 1) i = this.attachedStores[t].context.triggerElements.getById(e);
        i ??= this.fallbackStore.context.triggerElements.getById(e);
      }
      if (e && !i && this.throwOnMissingTrigger) throw Error((0, t.default)(99, this.componentName, e, this.componentName));
      o.setOpen(!0, (0, n.createChangeEventDetails)(r.REASONS.imperativeAction, void 0, i));
    }
  }
  closePopup() {
    let e = this.attachedStore;
    null === e || e.setOpen(!1, (0, n.createChangeEventDetails)(r.REASONS.imperativeAction));
  }
}
const _export_BasePopupHandle = i;
export { _export_BasePopupHandle as BasePopupHandle };

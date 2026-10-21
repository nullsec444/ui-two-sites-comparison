// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module17696 from "./17696.js";
import * as _module50547 from "./50547.js";
import * as _module88200 from "./88200.js";
var tj = _module17696;
var t$ = _module50547;
var tX = t$,
  tq = _module88200;
class tZ extends tX.Feature {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch (e) {
      t = !0;
    }
    t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = (0, tq.pipe)((0, tj.addDomEvent)(this.node.current, "focus", () => this.onFocus()), (0, tj.addDomEvent)(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {}
}
const _export_FocusGesture = tZ;
export { _export_FocusGesture as FocusGesture };

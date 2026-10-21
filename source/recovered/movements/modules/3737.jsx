// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module23286 from "./23286.js";
import * as _module65386 from "./65386.js";
var t = _module23286,
  n = _module65386;
let r = new class {
  callbacks = [];
  callbacksCount = 0;
  nextId = 1;
  startId = 1;
  isScheduled = !1;
  tick = e => {
    this.isScheduled = !1;
    let t = this.callbacks,
      n = this.callbacksCount;
    if (this.callbacks = [], this.callbacksCount = 0, this.startId = this.nextId, n > 0) for (let n = 0; n < t.length; n += 1) t[n]?.(e);
  };
  request(e) {
    let t = this.nextId;
    return this.nextId += 1, this.callbacks.push(e), this.callbacksCount += 1, this.isScheduled || (requestAnimationFrame(this.tick), this.isScheduled = !0), t;
  }
  cancel(e) {
    let t = e - this.startId;
    t < 0 || t >= this.callbacks.length || (this.callbacks[t] = null, this.callbacksCount -= 1);
  }
}();
class i {
  static create() {
    return new i();
  }
  static request(e) {
    return r.request(e);
  }
  static cancel(e) {
    return r.cancel(e);
  }
  currentId = null;
  request(e) {
    this.cancel(), this.currentId = r.request(() => {
      this.currentId = null, e();
    });
  }
  cancel = () => {
    null !== this.currentId && (r.cancel(this.currentId), this.currentId = null);
  };
  disposeEffect = () => this.cancel;
}
const _export_AnimationFrame = i;
const _export_useAnimationFrame = function () {
  let e = (0, t.useRefWithInit)(i.create).current;
  return (0, n.useOnMount)(e.disposeEffect), e;
};
export { _export_AnimationFrame as AnimationFrame, _export_useAnimationFrame as useAnimationFrame };

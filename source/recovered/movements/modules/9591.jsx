// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module23286 from "./23286.js";
import * as _module45032 from "./45032.js";
import * as _module7642 from "./7642.js";
var t = _module23286,
  r = _module45032,
  n = _module7642;
function i(e) {
  r.useEffect(e, n.EMPTY_ARRAY);
}
class o {
  static create() {
    return new o();
  }
  currentId = 0;
  start(e, t) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = 0, t();
    }, e);
  }
  isStarted() {
    return 0 !== this.currentId;
  }
  clear = () => {
    0 !== this.currentId && (clearTimeout(this.currentId), this.currentId = 0);
  };
  disposeEffect = () => this.clear;
}
const _export_Timeout = o;
const _export_useTimeout = function () {
  let e = (0, t.useRefWithInit)(o.create).current;
  return i(e.disposeEffect), e;
};
export { _export_Timeout as Timeout, _export_useTimeout as useTimeout };

// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module45032 from "./45032.js";
import * as _module23286 from "./23286.js";
let t;
var n = _module45032,
  r = _module23286;
let i = [];
function o(e) {
  let n = (n, o) => {
    let s,
      u = (0, r.useRefWithInit)(l).current;
    try {
      for (let e of (t = u, i)) e.before(u);
      for (let t of (s = e(n, o), i)) t.after(u);
      u.didInitialize = !0;
    } finally {
      t = void 0;
    }
    return s;
  };
  return n.displayName = e.displayName || e.name, n;
}
function l() {
  return {
    didInitialize: !1
  };
}
const _export_fastComponent = o;
const _export_fastComponentRef = function (e) {
  return n.forwardRef(o(e));
};
const _export_getInstance = function () {
  return t;
};
const _export_register = function (e) {
  i.push(e);
};
export { _export_fastComponent as fastComponent, _export_fastComponentRef as fastComponentRef, _export_getInstance as getInstance, _export_register as register };

// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module98582 from "./98582.js";
import * as _module50547 from "./50547.js";
import * as _module2057 from "./2057.js";
import * as _module63118 from "./63118.js";
import * as _module71795 from "./71795.js";
var r = _module98582;
var t$ = _module50547,
  tW = _module2057,
  tG = _module63118;
function tz(t, e) {
  let i = (0, tG.resolveElements)(t),
    n = new AbortController();
  return [i, {
    passive: !0,
    ...e,
    signal: n.signal
  }, () => n.abort()];
}
var tH = _module71795;
function tY(t, e, i) {
  let {
    props: n
  } = t;
  t.animationState && n.whileHover && t.animationState.setActive("whileHover", "Start" === i);
  let s = n["onHover" + i];
  s && r.frame.postRender(() => s(e, (0, tH.extractEventInfo)(e)));
}
class tK extends t$.Feature {
  mount() {
    let {
      current: t
    } = this.node;
    t && (this.unmount = function (t, e, i = {}) {
      let [n, s, r] = tz(t, i);
      return n.forEach(t => {
        let i,
          n = !1,
          r = !1,
          o = e => {
            i && (i(e), i = void 0), t.removeEventListener("pointerleave", l);
          },
          a = t => {
            n = !1, window.removeEventListener("pointerup", a), window.removeEventListener("pointercancel", a), r && (r = !1, o(t));
          },
          l = t => {
            if ("touch" !== t.pointerType) {
              if (n) {
                r = !0;
                return;
              }
              o(t);
            }
          };
        t.addEventListener("pointerenter", n => {
          if ("touch" === n.pointerType || (0, tW.isDragActive)()) return;
          r = !1;
          let o = e(t, n);
          "function" == typeof o && (i = o, t.addEventListener("pointerleave", l, s));
        }, s), t.addEventListener("pointerdown", () => {
          n = !0, window.addEventListener("pointerup", a, s), window.addEventListener("pointercancel", a, s);
        }, s);
      }), r;
    }(t, (t, e) => (tY(this.node, e, "Start"), t => tY(this.node, t, "End"))));
  }
  unmount() {}
}
const _export_HoverGesture = tK;
export { _export_HoverGesture as HoverGesture };

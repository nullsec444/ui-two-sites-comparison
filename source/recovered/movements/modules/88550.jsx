// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module45032 from "./45032.js";
import * as _module38783 from "./38783.js";
import * as _module42014 from "./42014.js";
import * as _module3737 from "./3737.js";
var t = _module45032,
  n = _module38783,
  r = _module42014,
  i = _module3737;
function o(e) {
  return null == e ? e : "current" in e ? e.current : e;
}
function l(e, t = !1) {
  let s = (0, i.useAnimationFrame)();
  return (0, n.useStableCallback)((n, i = null) => {
    s.cancel();
    let l = o(e);
    if (null == l) return;
    let u = () => {
      r.flushSync(n);
    };
    if ("function" != typeof l.getAnimations || globalThis.BASE_UI_ANIMATIONS_DISABLED) return void n();
    function a() {
      Promise.all(l.getAnimations().map(e => e.finished)).then(() => {
        i?.aborted || u();
      }, () => {
        i?.aborted || (l.getAnimations().some(e => e.pending || "finished" !== e.playState) ? a() : u());
      });
    }
    if (t) {
      let e = "data-starting-style";
      if (!l.hasAttribute(e)) return void s.request(a);
      let t = new MutationObserver(() => {
        l.hasAttribute(e) || (t.disconnect(), a());
      });
      return t.observe(l, {
        attributes: !0,
        attributeFilter: [e]
      }), void i?.addEventListener("abort", () => t.disconnect(), {
        once: !0
      });
    }
    s.request(a);
  });
}
const _export_useOpenChangeComplete = function (e) {
  let {
      enabled: r = !0,
      open: i,
      ref: o,
      onComplete: s
    } = e,
    u = (0, n.useStableCallback)(s),
    a = l(o, i);
  t.useEffect(() => {
    if (!r) return;
    let e = new AbortController();
    return a(u, e.signal), () => {
      e.abort();
    };
  }, [r, i, u, a]);
};
export { _export_useOpenChangeComplete as useOpenChangeComplete };

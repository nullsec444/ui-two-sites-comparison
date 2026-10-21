// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module84857 from "./84857.js";
import * as _module23609 from "./23609.js";
import * as _module9612 from "./9612.js";
import * as _module13783 from "./13783.js";
import * as _module34533 from "./34533.js";
import * as _module45032 from "./45032.js";
import * as _module8011 from "./8011.js";
import * as _module99137 from "./99137.js";
import * as _module29301 from "./29301.js";
import * as _module20615 from "./20615.js";
var e = _module84857,
  i = _module23609,
  n = _module9612,
  s = _module13783,
  r = _module34533,
  o = _module45032,
  a = _module8011,
  l = _module99137,
  u = _module29301;
let h = t => (e, h) => {
  let c = (0, o.useContext)(a.MotionContext),
    d = (0, o.useContext)(l.PresenceContext),
    p = () => function ({
      scrapeMotionValuesFromProps: t,
      createRenderState: e
    }, o, a, l) {
      return {
        latestValues: function (t, e, o, a) {
          let l = {},
            u = a(t, {});
          for (let t in u) l[t] = (0, i.resolveMotionValue)(u[t]);
          let {
              initial: h,
              animate: c
            } = t,
            d = (0, n.isControllingVariants)(t),
            p = (0, n.isVariantNode)(t);
          e && p && !d && !1 !== t.inherit && (void 0 === h && (h = e.initial), void 0 === c && (c = e.animate));
          let m = !!o && !1 === o.initial,
            f = (m = m || !1 === h) ? c : h;
          if (f && "boolean" != typeof f && !(0, s.isAnimationControls)(f)) {
            let e = Array.isArray(f) ? f : [f];
            for (let i = 0; i < e.length; i++) {
              let n = (0, r.resolveVariantFromProps)(t, e[i]);
              if (n) {
                let {
                  transitionEnd: t,
                  transition: e,
                  ...i
                } = n;
                for (let t in i) {
                  let e = i[t];
                  if (Array.isArray(e)) {
                    let t = m ? e.length - 1 : 0;
                    e = e[t];
                  }
                  null !== e && (l[t] = e);
                }
                for (let e in t) l[e] = t[e];
              }
            }
          }
          return l;
        }(o, a, l, t),
        renderState: e()
      };
    }(t, e, c, d);
  return h ? p() : (0, u.useConstant)(p);
};
var c = _module20615;
let d = h({
  scrapeMotionValuesFromProps: e.scrapeHTMLMotionValuesFromProps,
  createRenderState: c.createHtmlRenderState
});
const _export_useHTMLVisualState = d;
export { _export_useHTMLVisualState as useHTMLVisualState };

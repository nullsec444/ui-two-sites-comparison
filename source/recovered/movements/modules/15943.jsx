// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module45032 from "./45032.js";
import * as _module92548 from "./92548.js";
import * as _module49048 from "./49048.js";
import * as _module68975 from "./68975.js";
import * as _module65722 from "./65722.js";
import * as _module39592 from "./39592.js";
import * as _module99571 from "./99571.js";
var e = _module45032;
var o = _module92548,
  a = _module49048,
  l = _module68975;
let u = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function h(t, e, i) {
  for (let n in e) (0, o.isMotionValue)(e[n]) || (0, a.isForcedMotionValue)(n, i) || (t[n] = e[n]);
}
var c = _module65722,
  d = _module39592;
let p = () => ({
  ...u(),
  attrs: {}
});
let m = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]);
function f(t) {
  return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || m.has(t);
}
var g = _module99571;
const _export_useRender = function (t, i, n, {
  latestValues: s
}, r, a = !1, m, v) {
  let y = (m ?? (0, g.isSVGComponent)(t) ? function (t, i, n, s) {
      let r = (0, e.useMemo)(() => {
        let e = p();
        return (0, c.buildSVGAttrs)(e, i, (0, d.isSVGTag)(s), t.transformTemplate, t.style), {
          ...e.attrs,
          style: {
            ...e.style
          }
        };
      }, [i]);
      if (t.style) {
        let e = {};
        h(e, t.style, t), r.style = {
          ...e,
          ...r.style
        };
      }
      return r;
    } : function (t, i) {
      let n,
        s,
        r = {},
        o = (n = t.style || {}, h(s = {}, n, t), Object.assign(s, function ({
          transformTemplate: t
        }, i) {
          return (0, e.useMemo)(() => {
            let e = u();
            return (0, l.buildHTMLStyles)(e, i, t), Object.assign({}, e.vars, e.style);
          }, [i]);
        }(t, i)), s);
      return t.drag && !1 !== t.dragListener && (r.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = !0 === t.drag ? "none" : `pan-${"x" === t.drag ? "y" : "x"}`), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (r.tabIndex = 0), r.style = o, r;
    })(i, s, r, t),
    x = function (t, e, i, n) {
      let s = {};
      for (let r in t) ("values" !== r || "object" != typeof t.values) && !(0, o.isMotionValue)(t[r]) && ((r.startsWith("on") ? !f(r) : n?.(r) ?? !f(r)) || !0 === i && f(r) || !e && !f(r) || t.draggable && r.startsWith("onDrag")) && (s[r] = t[r]);
      return s;
    }(i, "string" == typeof t, a, v),
    b = t !== e.Fragment ? {
      ...x,
      ...y,
      ref: n
    } : {},
    {
      children: T
    } = i,
    w = (0, e.useMemo)(() => (0, o.isMotionValue)(T) ? T.get() : T, [T]);
  return (0, e.createElement)(t, {
    ...b,
    children: w
  });
};
export { _export_useRender as useRender };

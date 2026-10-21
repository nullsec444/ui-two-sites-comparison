// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module83539 from "./83539.js";
import * as _module45032 from "./45032.js";
import * as _module48394 from "./48394.js";
import * as _module11169 from "./11169.js";
import * as _module39958 from "./39958.js";
import * as _module7642 from "./7642.js";
import * as _module41771 from "./41771.js";
import * as _module65405 from "./65405.js";
import * as _module71318 from "./71318.js";
import * as _module29005 from "./29005.js";
var t = _module83539,
  r = _module45032,
  n = _module48394,
  i = _module11169,
  o = _module39958;
var s = _module7642,
  a = _module41771,
  l = _module65405,
  u = _module71318,
  c = _module29005;
let f = Symbol.for("react.lazy");
const _export_useRenderElement = function (e, d, p = {}) {
  let g = d.render,
    h = function (e, t = {}) {
      var r;
      let {
          className: f,
          style: d,
          render: p
        } = e,
        {
          state: g = s.EMPTY_OBJECT,
          ref: h,
          props: m,
          stateAttributesMapping: b,
          enabled: v = !0
        } = t,
        y = v ? (0, l.resolveClassName)(f, g) : void 0,
        E = v ? (0, u.resolveStyle)(d, g) : void 0,
        w = v ? (0, a.getStateAttributesProps)(g, b) : s.EMPTY_OBJECT,
        R = v && m ? Array.isArray(r = m) ? (0, c.mergePropsN)(r) : (0, c.mergeProps)(void 0, r) : void 0,
        x = v ? (0, o.mergeObjects)(w, R) ?? {} : s.EMPTY_OBJECT;
      return ("u" > typeof document && (v ? Array.isArray(h) ? x.ref = (0, n.useMergedRefsN)([x.ref, (0, i.getReactElementRef)(p), ...h]) : x.ref = (0, n.useMergedRefs)(x.ref, (0, i.getReactElementRef)(p), h) : (0, n.useMergedRefs)(null, null)), v) ? (void 0 !== y && (x.className = (0, c.mergeClassNames)(x.className, y)), void 0 !== E && (x.style = (0, o.mergeObjects)(x.style, E)), x) : s.EMPTY_OBJECT;
    }(d, p);
  return !1 === p.enabled ? null : function (e, n, i, o) {
    if (n) {
      if ("function" == typeof n) return n(i, o);
      let e = (0, c.mergeProps)(i, n.props);
      e.ref = i.ref;
      let t = n;
      return t?.$$typeof === f && (t = r.Children.toArray(n)[0]), r.cloneElement(t, e);
    }
    if (e && "string" == typeof e) {
      var s, a;
      return s = e, a = i, "button" === s ? (0, r.createElement)("button", {
        type: "button",
        ...a,
        key: a.key
      }) : "img" === s ? (0, r.createElement)("img", {
        alt: "",
        ...a,
        key: a.key
      }) : r.createElement(s, a);
    }
    throw Error((0, t.default)(8));
  }(e, g, h, p.state ?? s.EMPTY_OBJECT);
};
export { _export_useRenderElement as useRenderElement };

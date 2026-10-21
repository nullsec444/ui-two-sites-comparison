// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module45032 from "./45032.js";
import * as _module42014 from "./42014.js";
import * as _module80269 from "./80269.js";
import * as _module77794 from "./77794.js";
import * as _module58943 from "./58943.js";
import * as _module38633 from "./38633.js";
import * as _module71955 from "./71955.js";
import * as _module38783 from "./38783.js";
import * as _module7642 from "./7642.js";
import * as _module91956 from "./91956.js";
import * as _module74740 from "./74740.js";
import * as _module88327 from "./88327.js";
import * as _module87491 from "./87491.js";
import * as _module17128 from "./17128.js";
import * as _module31903 from "./31903.js";
import * as _module31908 from "./jsx-runtime-31908.js";
var t = _module45032,
  n = _module42014,
  r = _module80269,
  i = _module77794,
  o = _module58943,
  l = _module38633,
  s = _module71955,
  u = _module38783,
  a = _module7642,
  c = _module91956,
  f = _module74740,
  d = _module88327,
  g = _module87491,
  p = _module17128,
  m = _module31903;
let h = {
  clipPath: "inset(50%)",
  position: "fixed",
  top: 0,
  left: 0
};
var v = _module31908;
let y = t.createContext(null),
  E = () => t.useContext(y),
  b = (0, p.createAttribute)("portal");
function S(e = {}) {
  let {
      ref: i,
      container: o,
      componentProps: c = a.EMPTY_OBJECT,
      elementProps: f
    } = e,
    d = (0, l.useId)(),
    g = E(),
    p = g?.portalNode,
    [h, v] = t.useState(null),
    [y, x] = t.useState(null),
    T = (0, u.useStableCallback)(e => {
      null !== e && x(e);
    }),
    w = t.useRef(null);
  (0, s.useIsoLayoutEffect)(() => {
    if (null === o) {
      w.current && (w.current = null, x(null), v(null));
      return;
    }
    let e = (o && ((0, r.isNode)(o) ? o : o.current)) ?? p ?? document.body;
    if (null == e) {
      w.current && (w.current = null, x(null), v(null));
      return;
    }
    w.current !== e && (w.current = e, x(null), v(e));
  }, [o, p]);
  let C = (0, m.useRenderElement)("div", c, {
      ref: [i, T],
      props: [{
        id: d,
        [b]: ""
      }, f]
    }),
    R = h && C ? n.createPortal(C, h) : null;
  return {
    node: y,
    nodeId: t.isValidElement(C) ? C.props.id : void 0,
    subtree: R
  };
}
let x = t.forwardRef(function (e, r) {
  let {
      render: l,
      className: u,
      style: a,
      children: p,
      container: m,
      ...E
    } = e,
    {
      node: b,
      nodeId: x,
      subtree: T
    } = S({
      container: m,
      ref: r,
      componentProps: e,
      elementProps: E
    }),
    w = t.useRef(null),
    C = t.useRef(null),
    R = t.useRef(null),
    O = t.useRef(null),
    [P, A] = t.useState(null),
    I = t.useRef(!1),
    M = P?.modal,
    L = P?.open,
    k = !!P && !P.modal && P.open && !!b;
  t.useEffect(() => {
    if (b && !M) return (0, o.mergeCleanups)((0, i.addEventListener)(b, "focusin", e, !0), (0, i.addEventListener)(b, "focusout", e, !0));
    function e(e) {
      b && e.relatedTarget && (0, f.isOutsideEvent)(e) && ("focusin" === e.type ? I.current && ((0, f.enableFocusInside)(b), I.current = !1) : ((0, f.disableFocusInside)(b), I.current = !0));
    }
  }, [b, M]), (0, s.useIsoLayoutEffect)(() => {
    b && !0 === L && I.current && ((0, f.enableFocusInside)(b), I.current = !1);
  }, [L, b]);
  let D = t.useMemo(() => ({
    beforeOutsideRef: w,
    afterOutsideRef: C,
    beforeInsideRef: R,
    afterInsideRef: O,
    portalNode: b,
    setFocusManagerState: A
  }), [b]);
  return (0, v.jsxs)(t.Fragment, {
    children: [T, (0, v.jsxs)(y.Provider, {
      value: D,
      children: [k && b && (0, v.jsx)(c.FocusGuard, {
        "data-type": "outside",
        ref: w,
        onFocus: e => {
          if ((0, f.isOutsideEvent)(e, b)) R.current?.focus();else {
            let e = P ? P.domReference : null,
              t = (0, f.getPreviousTabbable)(e);
            t?.focus();
          }
        }
      }), k && b && <span aria-owns={x} style={h} />, b && n.createPortal(p, b), k && b && (0, v.jsx)(c.FocusGuard, {
        "data-type": "outside",
        ref: C,
        onFocus: e => {
          if ((0, f.isOutsideEvent)(e, b)) O.current?.focus();else {
            let t = P ? P.domReference : null,
              n = (0, f.getNextTabbable)(t);
            n?.focus(), P?.closeOnFocusOut && P?.onOpenChange(!1, (0, d.createChangeEventDetails)(g.REASONS.focusOut, e.nativeEvent));
          }
        }
      })]
    })]
  });
});
const _export_FloatingPortal = x;
const _export_useFloatingPortalNode = S;
const _export_usePortalContext = E;
export { _export_FloatingPortal as FloatingPortal, _export_useFloatingPortalNode as useFloatingPortalNode, _export_usePortalContext as usePortalContext };

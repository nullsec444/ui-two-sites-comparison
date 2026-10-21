// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module45032 from "./45032.js";
import * as _module80269 from "./80269.js";
import * as _module38783 from "./38783.js";
import * as _module71955 from "./71955.js";
import * as _module29005 from "./29005.js";
import * as _module83539 from "./83539.js";
import * as _module79995 from "./79995.js";
var t = _module45032,
  r = _module80269,
  n = _module38783,
  i = _module71955,
  o = _module29005,
  s = _module83539;
let a = t.createContext(void 0);
function l(e = !1) {
  let r = t.useContext(a);
  if (void 0 === r && !e) throw Error((0, s.default)(16));
  return r;
}
var u = _module79995;
function c(e, t, {
  detail: r = 0
} = {}) {
  e.dispatchEvent(new ((0, u.ownerWindow)(e).PointerEvent)("click", {
    bubbles: !0,
    cancelable: !0,
    composed: !0,
    detail: r,
    shiftKey: t.shiftKey,
    ctrlKey: t.ctrlKey,
    altKey: t.altKey,
    metaKey: t.metaKey
  }));
}
function f(e) {
  return (0, r.isHTMLElement)(e) && "BUTTON" === e.tagName;
}
const _export_useButton = function (e = {}) {
  let {
      disabled: s = !1,
      focusableWhenDisabled: a,
      tabIndex: u = 0,
      native: d = !0,
      composite: p
    } = e,
    g = t.useRef(null),
    h = l(!0),
    m = p ?? void 0 !== h,
    {
      props: b
    } = function (e) {
      let {
          focusableWhenDisabled: r,
          disabled: n,
          composite: i = !1,
          tabIndex: o = 0,
          isNativeButton: s
        } = e,
        a = i && !1 !== r,
        l = i && !1 === r;
      return {
        props: t.useMemo(() => {
          let e = {
            onKeyDown(e) {
              n && r && "Tab" !== e.key && e.preventDefault();
            }
          };
          return i || (e.tabIndex = o, !s && n && (e.tabIndex = r ? o : -1)), (s && (r || a) || !s && n) && (e["aria-disabled"] = n), s && (!r || l) && (e.disabled = n), e;
        }, [i, n, r, a, l, s, o])
      };
    }({
      focusableWhenDisabled: a,
      disabled: s,
      composite: m,
      tabIndex: u,
      isNativeButton: d
    }),
    v = t.useCallback(() => {
      let e = g.current;
      f(e) && m && s && void 0 === b.disabled && e.disabled && (e.disabled = !1);
    }, [s, b.disabled, m]);
  return (0, i.useIsoLayoutEffect)(v, [v]), {
    getButtonProps: t.useCallback((e = {}) => {
      let {
        onClick: t,
        onMouseDown: n,
        onKeyUp: i,
        onKeyDown: a,
        onPointerDown: l,
        ...u
      } = e;
      return (0, o.mergeProps)({
        onClick(e) {
          s ? e.preventDefault() : t?.(e);
        },
        onMouseDown(e) {
          s || n?.(e);
        },
        onKeyDown(e) {
          var t;
          if (s || ((0, o.makeEventPreventable)(e), a?.(e), e.baseUIHandlerPrevented)) return;
          let n = e.target === e.currentTarget,
            i = e.currentTarget,
            l = f(i),
            u = !d && (t = i, (0, r.isHTMLElement)(t) && "A" === t.tagName && !!t.href),
            p = n && (d ? l : !u),
            g = "Enter" === e.key,
            h = " " === e.key,
            b = i.getAttribute("role"),
            v = b?.startsWith("menuitem") || "option" === b || "gridcell" === b;
          if (n && m && h) {
            if (e.defaultPrevented && v) return;
            e.preventDefault(), (!d || l) && (e.preventBaseUIHandler(), c(i, e));
            return;
          }
          if (!p || d || !h && !g) {
            n && u && h && e.preventDefault();
            return;
          }
          !e.defaultPrevented && (e.preventDefault(), g && (e.preventBaseUIHandler(), c(i, e)));
        },
        onKeyUp(e) {
          s || (((0, o.makeEventPreventable)(e), i?.(e), e.target === e.currentTarget && d && m && f(e.currentTarget) && " " === e.key) ? e.preventDefault() : !e.baseUIHandlerPrevented && (e.target !== e.currentTarget || d || m || e.defaultPrevented || " " !== e.key || (e.preventBaseUIHandler(), c(e.currentTarget, e))));
        },
        onPointerDown(e) {
          s ? e.preventDefault() : l?.(e);
        }
      }, d ? {
        type: "button"
      } : {
        role: "button"
      }, b, u);
    }, [s, b, m, d]),
    buttonRef: (0, n.useStableCallback)(e => {
      g.current = e, v();
    })
  };
};
export { _export_useButton as useButton };

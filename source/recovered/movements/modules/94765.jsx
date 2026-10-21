// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module31908 from "./jsx-runtime-31908.js";
import * as _module45032 from "./45032.js";
import * as _module54612 from "./54612.js";
import * as _module29301 from "./29301.js";
import * as _module90610 from "./90610.js";
import * as _module99137 from "./99137.js";
import * as _module92511 from "./92511.js";
import * as _module40048 from "./40048.js";
import * as _module26325 from "./26325.js";
var e = _module31908,
  i = _module45032,
  n = _module54612,
  s = _module29301,
  r = _module90610,
  o = _module99137,
  a = _module92511,
  l = i,
  u = _module40048;
function h(t, e) {
  if ("function" == typeof t) return t(e);
  null != t && (t.current = e);
}
class c extends l.Component {
  getSnapshotBeforeUpdate(t) {
    let e = this.props.childRef.current;
    if ((0, a.isHTMLElement)(e) && t.isPresent && !this.props.isPresent && !1 !== this.props.pop) {
      let t = e.offsetParent,
        i = (0, a.isHTMLElement)(t) && t.offsetWidth || 0,
        n = (0, a.isHTMLElement)(t) && t.offsetHeight || 0,
        s = getComputedStyle(e),
        r = this.props.sizeRef.current;
      r.height = parseFloat(s.height), r.width = parseFloat(s.width), r.top = e.offsetTop, r.left = e.offsetLeft, r.right = i - r.width - r.left, r.bottom = n - r.height - r.top, r.direction = s.direction;
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function d({
  children: t,
  isPresent: n,
  anchorX: s,
  anchorY: r,
  root: o,
  pop: a
}) {
  let p = (0, l.useId)(),
    m = (0, l.useRef)(null),
    f = (0, l.useRef)({
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      direction: "ltr"
    }),
    {
      nonce: g
    } = (0, l.useContext)(u.MotionConfigContext),
    v = function (...t) {
      return i.useCallback(function (...t) {
        return e => {
          let i = !1,
            n = t.map(t => {
              let n = h(t, e);
              return i || "function" != typeof n || (i = !0), n;
            });
          if (i) return () => {
            for (let e = 0; e < n.length; e++) {
              let i = n[e];
              "function" == typeof i ? i() : h(t[e], null);
            }
          };
        };
      }(...t), t);
    }(m, !1 !== a ? t.props?.ref ?? t?.ref : void 0);
  return (0, l.useInsertionEffect)(() => {
    let {
      width: t,
      height: e,
      top: i,
      left: l,
      right: u,
      bottom: h,
      direction: c
    } = f.current;
    if (n || !1 === a || !m.current || !t || !e) return;
    let d = "rtl" === c,
      v = "left" === s ? d ? `right: ${u}` : `left: ${l}` : d ? `left: ${l}` : `right: ${u}`,
      y = "bottom" === r ? `bottom: ${h}` : `top: ${i}`;
    m.current.dataset.motionPopId = p;
    let x = document.createElement("style");
    g && (x.nonce = g);
    let b = o ?? document.head;
    return b.appendChild(x), x.sheet && x.sheet.insertRule(`
          [data-motion-pop-id="${p}"] {
            position: absolute !important;
            width: ${t}px !important;
            height: ${e}px !important;
            ${v}px !important;
            ${y}px !important;
          }
        `), () => {
      m.current?.removeAttribute("data-motion-pop-id"), b.contains(x) && b.removeChild(x);
    };
  }, [n]), (0, e.jsx)(c, {
    isPresent: n,
    childRef: m,
    sizeRef: f,
    pop: a,
    children: !1 === a ? t : l.cloneElement(t, {
      ref: v
    })
  });
}
let p = ({
  children: t,
  initial: n,
  isPresent: a,
  onExitComplete: l,
  custom: u,
  presenceAffectsLayout: h,
  mode: c,
  anchorX: p,
  anchorY: f,
  root: g
}) => {
  let v = (0, s.useConstant)(m),
    y = (0, i.useId)(),
    x = (0, i.useRef)(a),
    b = (0, i.useRef)(l);
  (0, r.useIsomorphicLayoutEffect)(() => {
    x.current = a, b.current = l;
  });
  let T = !0,
    w = (0, i.useMemo)(() => (T = !1, {
      id: y,
      initial: n,
      isPresent: a,
      custom: u,
      onExitComplete: t => {
        for (let e of (v.set(t, !0), v.values())) if (!e) return;
        l && l();
      },
      register: t => (v.set(t, !1), () => {
        v.delete(t), x.current || v.size || b.current?.();
      })
    }), [a, v, l]);
  return h && T && (w = {
    ...w
  }), (0, i.useMemo)(() => {
    v.forEach((t, e) => v.set(e, !1));
  }, [a]), i.useEffect(() => {
    a || v.size || !l || l();
  }, [a]), t = (0, e.jsx)(d, {
    pop: "popLayout" === c,
    isPresent: a,
    anchorX: p,
    anchorY: f,
    root: g,
    children: t
  }), (0, e.jsx)(o.PresenceContext.Provider, {
    value: w,
    children: t
  });
};
function m() {
  return new Map();
}
var f = _module26325;
let g = t => t.key || "";
function v(t) {
  let e = [];
  return i.Children.forEach(t, t => {
    (0, i.isValidElement)(t) && e.push(t);
  }), e;
}
const _export_AnimatePresence = ({
  children: t,
  custom: o,
  initial: a = !0,
  onExitComplete: l,
  presenceAffectsLayout: u = !0,
  mode: h = "sync",
  propagate: c = !1,
  anchorX: d = "left",
  anchorY: m = "top",
  root: y
}) => {
  let [x, b] = (0, f.usePresence)(c),
    T = (0, i.useMemo)(() => v(t), [t]),
    w = c && !x ? [] : T.map(g),
    S = (0, i.useRef)(!0),
    P = (0, i.useRef)(T),
    M = (0, s.useConstant)(() => new Map()),
    A = (0, i.useRef)(new Set()),
    [V, E] = (0, i.useState)(T),
    [C, D] = (0, i.useState)(T);
  (0, r.useIsomorphicLayoutEffect)(() => {
    !c || x || C.length || b?.();
  }, [x, c, C.length, b]), (0, r.useIsomorphicLayoutEffect)(() => {
    S.current = !1, P.current = T;
    for (let t = 0; t < C.length; t++) {
      let e = g(C[t]);
      w.includes(e) ? (M.delete(e), A.current.delete(e)) : !0 !== M.get(e) && M.set(e, !1);
    }
  }, [C, w.length, w.join("-")]);
  let R = [];
  if (T !== V) {
    let t = [...T];
    for (let e = 0; e < C.length; e++) {
      let i = C[e],
        n = g(i);
      w.includes(n) || (t.splice(e, 0, i), R.push(i));
    }
    return "wait" === h && R.length && (t = R), D(v(t)), E(T), null;
  }
  let {
    forceRender: k
  } = (0, i.useContext)(n.LayoutGroupContext);
  return (0, e.jsx)(e.Fragment, {
    children: C.map(t => {
      let i = g(t),
        n = (!c || !!x) && (T === C || w.includes(i));
      return (0, e.jsx)(p, {
        isPresent: n,
        initial: (!S.current || !!a) && void 0,
        custom: o,
        presenceAffectsLayout: u,
        mode: h,
        root: y,
        onExitComplete: n ? void 0 : () => {
          if (A.current.has(i) || !M.has(i)) return;
          A.current.add(i), M.set(i, !0);
          let t = !0;
          M.forEach(e => {
            e || (t = !1);
          }), t && (k?.(), D(P.current), c && b?.(), l && l());
        },
        anchorX: d,
        anchorY: m,
        children: t
      }, i);
    })
  });
};
export { _export_AnimatePresence as AnimatePresence };

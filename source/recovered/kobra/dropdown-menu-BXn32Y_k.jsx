// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import { a as e, r as t } from "./rolldown-runtime-B0Z9INg1.js";
import { n, t as r } from "./jsx-runtime-Ciaf_P-h.js";
import { t as i } from "./react-dom-U4kpXZKZ.js";
import { t as a } from "./utils-WkhMP9hs.js";
import { O as o, T as s, a as c, c as l, d as u, h as d, i as f, k as p, m, p as h, r as g, s as _, t as v, w as y } from "./useRenderElement-BLCXgiyH.js";
import { i as b, r as x, s as S } from "./dist-CFNp_irW.js";
import { A as C, B as w, H as T, R as E, U as D, V as O, f as k, p as A, r as j, t as M, w as N, x as P, z as F } from "./createBaseUIEventDetails-s-LN--f1.js";
import { _ as I, c as L, g as ee, o as te, p as ne, r as R, v as re, x as z, y as ie } from "./visuallyHidden-Cn7Rn7MY.js";
import { $ as B, C as V, Dt as ae, Et as oe, F as H, H as U, It as W, J as G, K, L as q, M as J, N as se, Nt as Y, O as ce, Ot as X, P as le, R as ue, T as de, X as Z, Y as fe, _ as pe, a as me, at as he, c as ge, d as _e, f as ve, g as ye, h as be, it as xe, jt as Se, l as Ce, m as we, nt as Te, p as Ee, r as De, rt as Oe, t as ke, tt as Ae, u as je, z as Me } from "./inertValue-BJdpJaPH.js";
import { t as Ne } from "./useControlled-Cp_s8ypY.js";
import { T as Pe, b as Fe, f as Ie, v as Le, w as Re } from "./dialog-D5lt4KMe.js";
import { t as ze } from "./IconCheck-BGXEIM6U.js";
import { t as Be } from "./IconChevronRight-C9BymwZE.js";
import { c as Ve, n as He, o as Ue, r as We, s as Ge, t as Ke } from "./usePositioner-DP5NUI1y.js";
import { t as qe } from "./useClick-DnDtMIzB.js";
import { _ as Je, a as Ye, d as Xe, f as Ze, l as Qe, m as $e, n as et, o as tt, p as nt, r as rt, s as it, t as at, v as ot, y as st } from "./NullStore-DKa5hxry.js";
import { r as ct } from "./joined-script-ChN2trS6.js";
import { a as lt } from "./composite-BDauBs8w.js";
import { n as ut } from "./DirectionContext-CSiJxUVd.js";
import { n as dt, t as ft } from "./useCompositeListItem-4pOaQAyk.js";
import { t as pt } from "./CompositeItem-vllB9ukv.js";
import { t as mt } from "./Separator-Cc9V-VRg.js";
var Q = e(n(), 1),
  ht = `Escape`;
function gt(e) {
  return Y && e.movementX === 0 && e.movementY === 0;
}
function _t(e, t, n) {
  switch (e) {
    case `vertical`:
      return t;
    case `horizontal`:
      return n;
    default:
      return t || n;
  }
}
function vt(e, t) {
  return _t(t, e === `ArrowUp` || e === `ArrowDown`, e === `ArrowLeft` || e === `ArrowRight`);
}
function yt(e, t, n) {
  return _t(t, e === `ArrowDown`, n ? e === `ArrowLeft` : e === `ArrowRight`) || e === `Enter` || e === ` ` || e === ``;
}
function bt(e, t, n) {
  return _t(t, n ? e === I : e === re, e === ee);
}
function xt(e, t, n, r) {
  return t === `both` || t === `horizontal` && r ? e === ht : _t(t, n ? e === re : e === I, e === ie);
}
function St(e, t) {
  let {
      listRef: n,
      activeIndex: r,
      onNavigate: i = () => {},
      enabled: a = !0,
      selectedIndex: s = null,
      allowEscape: c = !1,
      loopFocus: l = !1,
      nested: u = !1,
      rtl: d = !1,
      virtual: f = !1,
      focusItemOnOpen: p = `auto`,
      focusItemOnHover: g = !0,
      openOnArrowKeyDown: _ = !0,
      disabledIndices: v = void 0,
      orientation: y = `vertical`,
      parentOrientation: b,
      id: x,
      resetOnPointerLeave: S = !0,
      externalTree: C,
      grid: T
    } = t,
    O = T != null,
    A = `rootStore` in e ? e.rootStore : e,
    j = A.useState(`open`),
    P = A.useState(`floatingElement`),
    I = A.useState(`domReferenceElement`),
    ee = A.context.dataRef,
    re = L(P),
    z = ne(I),
    ie = R(re),
    V = we(),
    H = be(C),
    U = Q.useRef(p),
    W = Q.useRef(s ?? -1),
    G = Q.useRef(null),
    K = Q.useRef(!0),
    q = m(e => {
      i(W.current === -1 ? null : W.current, e);
    }),
    J = Q.useRef(!!P),
    se = Q.useRef(j),
    Y = Q.useRef(!1),
    ce = Q.useRef(!1),
    le = Q.useRef(null),
    ue = R(v),
    de = R(j),
    Z = R(s),
    fe = R(S),
    pe = te(),
    me = te(),
    he = m(() => {
      function e(e) {
        f ? H?.events.emit(`virtualfocus`, e) : le.current = Pe(e, {
          sync: Y.current,
          preventScroll: !0
        });
      }
      let t = n.current[W.current],
        r = ce.current;
      t && e(t), (Y.current ? e => e() : e => pe.request(e))(() => {
        let i = n.current[W.current] || t;
        i && (t || e(i), Ce && (r || !K.current) && i.scrollIntoView?.({
          block: `nearest`,
          inline: `nearest`
        }));
      });
    });
  h(() => {
    ee.current.orientation = y;
  }, [ee, y]), h(() => {
    a && (j && P ? (W.current = s ?? -1, U.current && s != null && (ce.current = !0, q())) : J.current && (W.current = -1, q()));
  }, [a, j, P, s, q]), h(() => {
    if (a) {
      if (!j) {
        Y.current = !1;
        return;
      }
      if (P) {
        if (r == null) {
          if (Y.current = !1, Z.current != null) return;
          if (J.current && (W.current = -1, he()), (!se.current || !J.current) && U.current && (G.current != null || U.current === !0 && G.current == null)) {
            let e = 0,
              t = () => {
                n.current[0] == null ? (e < 2 && (e ? e => me.request(e) : queueMicrotask)(t), e += 1) : (W.current = G.current == null || yt(G.current, y, d) || u ? Te(n) : Ae(n), G.current = null, q());
              };
            t();
          }
        } else xe(n.current, r) || (W.current = r, he(), ce.current = !1);
      }
    }
  }, [a, j, P, r, Z, u, n, y, d, q, he, me]), h(() => {
    if (!a || P || !H || f || !J.current) return;
    let e = H.nodesRef.current,
      t = e.find(e => e.id === V)?.context?.elements.floating,
      n = E(D(I ?? t ?? null)),
      r = e.some(e => e.context && F(e.context.elements.floating, n));
    t && !r && K.current && t.focus({
      preventScroll: !0
    });
  }, [a, P, I, H, V, f]), h(() => {
    se.current = j, J.current = !!P;
  }), h(() => {
    j || (G.current = null, U.current = p);
  }, [j, p]);
  let ge = r != null,
    _e = m(e => {
      if (!de.current) return;
      let t = n.current.indexOf(e.currentTarget);
      t !== -1 && (W.current !== t || r !== t) && (W.current = t, q(e));
    }),
    ve = m(() => b ?? H?.nodesRef.current.find(e => e.id === V)?.context?.dataRef?.current.orientation),
    ye = m(() => Te(n, ue.current)),
    Se = m(e => {
      if (K.current = !1, Y.current = !0, e.which === 229 || !de.current && e.currentTarget === ie.current) return;
      if (u && xt(e.key, y, d, O)) {
        vt(e.key, ve()) || X(e), A.setOpen(!1, M(N, e.nativeEvent)), o(I) && (f ? H?.events.emit(`virtualfocus`, I) : I.focus());
        return;
      }
      let t = W.current,
        r = Te(n, v),
        i = Ae(n, v);
      if (z || (e.key === `Home` && (X(e), W.current = r, q(e)), e.key === `End` && (X(e), W.current = i, q(e))), T != null) {
        let t = T(e, W.current, n, y, l, d, v, r, i);
        if (t != null && (W.current = t, q(e)), y === `both`) return;
      }
      if (vt(e.key, y)) {
        if (X(e), j && !f && E(e.currentTarget.ownerDocument) === e.currentTarget) {
          W.current = yt(e.key, y, d) ? r : i, q(e);
          return;
        }
        yt(e.key, y, d) ? l ? t >= i ? c && t !== n.current.length ? W.current = -1 : (Y.current = !1, W.current = r) : W.current = B(n.current, {
          startingIndex: t,
          disabledIndices: v
        }) : W.current = Math.min(i, B(n.current, {
          startingIndex: t,
          disabledIndices: v
        })) : l ? t <= r ? c && t !== -1 ? W.current = n.current.length : (Y.current = !1, W.current = i) : W.current = B(n.current, {
          startingIndex: t,
          decrement: !0,
          disabledIndices: v
        }) : W.current = Math.max(r, B(n.current, {
          startingIndex: t,
          decrement: !0,
          disabledIndices: v
        })), xe(n.current, W.current) && (W.current = -1), q(e);
      }
    }),
    Ce = Q.useMemo(() => ({
      onFocus(e) {
        Y.current = !0, _e(e);
      },
      onClick: ({
        currentTarget: e
      }) => e.focus({
        preventScroll: !0
      }),
      onMouseMove(e) {
        gt(e) || (Y.current = !0, ce.current = !1, g && _e(e));
      },
      onPointerLeave(e) {
        if (!de.current || !K.current || e.pointerType === `touch`) return;
        Y.current = !0;
        let t = e.relatedTarget;
        if (!(!g || n.current.includes(t)) && fe.current && (le.current?.(), le.current = null, W.current = -1, q(e), !f)) {
          let e = ie.current,
            t = E(D(e));
          e && F(e, t) && e.focus({
            preventScroll: !0
          });
        }
      }
    }), [_e, de, ie, g, n, q, fe, f]),
    Ee = Q.useMemo(() => f && j && ge && {
      "aria-activedescendant": `${x}-${r}`
    }, [f, j, ge, x, r]),
    De = Q.useMemo(() => ({
      "aria-orientation": y === `both` ? void 0 : y,
      ...(z ? {} : Ee),
      onKeyDown(e) {
        if (e.key === `Tab` && e.shiftKey && j && !f) {
          let t = w(e.nativeEvent);
          if (t && !F(ie.current, t)) return;
          X(e), A.setOpen(!1, M(k, e.nativeEvent)), o(I) && I.focus();
          return;
        }
        Se(e);
      },
      onPointerMove(e) {
        gt(e) || (K.current = !0);
      }
    }), [Ee, Se, ie, y, z, A, j, f, I]),
    Oe = Q.useMemo(() => {
      function e(e) {
        A.setOpen(!0, M(N, e.nativeEvent, e.currentTarget));
      }
      function t(e) {
        p === `auto` && oe(e.nativeEvent) && (U.current = !f);
      }
      function n(e) {
        U.current = p, p === `auto` && ae(e.nativeEvent) && (U.current = !0);
      }
      return {
        onKeyDown(t) {
          let n = A.select(`open`);
          K.current = !1;
          let r = t.key.startsWith(`Arrow`),
            i = bt(t.key, ve(), d),
            a = vt(t.key, y),
            o = (u ? i : a) || t.key === `Enter` || t.key.trim() === ``;
          if (f && n) return Se(t);
          if (!(!n && !_ && r)) {
            if (o) {
              let e = vt(t.key, ve());
              G.current = u && e ? null : t.key;
            }
            if (u) {
              i && (X(t), n ? (W.current = ye(), q(t)) : e(t));
              return;
            }
            a && (Z.current != null && (W.current = Z.current), X(t), !n && _ ? e(t) : Se(t), n && q(t));
          }
        },
        onFocus(e) {
          A.select(`open`) && !f && (W.current = -1, q(e));
        },
        onPointerDown: n,
        onPointerEnter: n,
        onMouseDown: t,
        onClick: t
      };
    }, [Se, p, ye, u, q, A, _, y, ve, d, Z, f]),
    ke = Q.useMemo(() => ({
      ...Ee,
      ...Oe
    }), [Ee, Oe]);
  return Q.useMemo(() => a ? {
    reference: ke,
    floating: De,
    item: Ce,
    trigger: Oe
  } : {}, [a, ke, De, Oe, Ce]);
}
function Ct(e, t) {
  let {
      listRef: n,
      elementsRef: r,
      activeIndex: i,
      onMatch: a,
      disabledIndices: o,
      onTyping: s,
      enabled: c = !0,
      resetMs: l = 750,
      selectedIndex: u = null
    } = t,
    d = `rootStore` in e ? e.rootStore : e,
    f = d.useState(`open`),
    p = U(),
    _ = Q.useRef(``),
    v = Q.useRef(u ?? i ?? -1),
    y = Q.useRef(null),
    b = m(e => {
      function t(e) {
        return r?.current[e];
      }
      function c(e) {
        let n = t(e);
        return n && !Oe(n) || n?.matches(`:disabled`) ? !1 : o == null || !he(g, e, o);
      }
      function d(e, t, n = 0) {
        if (e.length === 0) return -1;
        let r = (n % e.length + e.length) % e.length,
          i = t.toLowerCase();
        for (let t = 0; t < e.length; t += 1) {
          let n = (r + t) % e.length;
          if (!(!e[n]?.toLowerCase().startsWith(i) || !c(n))) return n;
        }
        return -1;
      }
      let m = n.current;
      if (_.current.length > 0 && e.key === ` ` && (X(e), s?.(!0)), _.current.length > 0 && _.current[0] !== ` ` && d(m, _.current) === -1 && e.key !== ` ` && s?.(!1), m == null || e.key.length !== 1 || e.ctrlKey || e.metaKey || e.altKey) return;
      f && e.key !== ` ` && (X(e), s?.(!0));
      let h = _.current === ``;
      h && (v.current = u ?? i ?? -1), m.every((e, t) => e && c(t) ? e[0]?.toLowerCase() !== e[1]?.toLowerCase() : !0) && _.current === e.key && (_.current = ``, v.current = y.current), _.current += e.key, p.start(l, () => {
        _.current = ``, v.current = y.current, s?.(!1);
      });
      let b = ((h ? u ?? i ?? -1 : v.current) ?? 0) + 1,
        x = d(m, _.current, b);
      x === -1 ? e.key !== ` ` && (_.current = ``, s?.(!1)) : (a?.(x), y.current = x);
    }),
    x = m(e => {
      let t = e.relatedTarget,
        n = d.select(`domReferenceElement`),
        r = d.select(`floatingElement`);
      F(n, t) || F(r, t) || (p.clear(), _.current = ``, v.current = y.current, s?.(!1));
    });
  h(() => {
    !f && u !== null || (p.clear(), y.current = null, _.current !== `` && (_.current = ``));
  }, [f, u, p]);
  let S = Q.useMemo(() => ({
    onKeyDown: b,
    onBlur: x
  }), [b, x]);
  return Q.useMemo(() => c ? {
    reference: S,
    floating: S
  } : {}, [c, S]);
}
var wt = Q.createContext(void 0);
function Tt() {
  let e = Q.useContext(wt);
  if (e === void 0) throw Error(l(13));
  return e;
}
var Et = {
    imageLoadingStatus: () => null
  },
  $ = e(r(), 1),
  Dt = Q.forwardRef(function (e, t) {
    let {
        className: n,
        render: r,
        style: i,
        ...a
      } = e,
      [o, s] = Q.useState(`idle`),
      c = {
        imageLoadingStatus: o
      },
      l = Q.useMemo(() => ({
        imageLoadingStatus: o,
        setImageLoadingStatus: s
      }), [o, s]),
      u = v(`span`, e, {
        state: c,
        ref: t,
        props: a,
        stateAttributesMapping: Et
      });
    return (0, $.jsx)(wt.Provider, {
      value: l,
      children: u
    });
  });
function Ot(e, {
  referrerPolicy: t,
  crossOrigin: n,
  sizes: r,
  srcSet: i
}) {
  let [a, o] = Q.useState(`idle`);
  return h(() => {
    if (!e && !i) return o(`error`), c;
    let a = !0,
      s = new window.Image(),
      l = e => () => {
        a && o(e);
      };
    return o(`loading`), s.onload = l(`loaded`), s.onerror = l(`error`), t && (s.referrerPolicy = t), s.crossOrigin = n ?? null, r && (s.sizes = r), i && (s.srcset = i), e && (s.src = e), s.complete && o(s.naturalWidth > 0 ? `loaded` : `error`), () => {
      a = !1;
    };
  }, [e, i, r, n, t]), a;
}
var kt = {
    ...Et,
    ...q
  },
  At = Q.forwardRef(function (e, t) {
    let {
        className: n,
        render: r,
        onLoadingStatusChange: i,
        style: a,
        ...o
      } = e,
      {
        setImageLoadingStatus: s
      } = Tt(),
      c = Ot(o.src, o),
      l = c === `loaded`,
      {
        mounted: u,
        transitionStatus: d,
        setMounted: f
      } = H(l),
      p = Q.useRef(null),
      g = m(e => {
        i?.(e), s(e);
      });
    h(() => {
      c !== `idle` && g(c);
    }, [c, g]), h(() => () => s(`idle`), [s]), ue({
      open: l,
      ref: p,
      onComplete() {
        l || f(!1);
      }
    });
    let _ = v(`img`, e, {
      state: {
        imageLoadingStatus: c,
        transitionStatus: d
      },
      ref: [t, p],
      props: o,
      stateAttributesMapping: kt,
      enabled: u
    });
    return u ? _ : null;
  }),
  jt = Q.forwardRef(function (e, t) {
    let {
        className: n,
        render: r,
        delay: i = 0,
        style: a,
        ...o
      } = e,
      {
        imageLoadingStatus: s
      } = Tt(),
      [c, l] = Q.useState(i === 0),
      u = U();
    return Q.useEffect(() => (i > 0 ? u.start(i, () => l(!0)) : l(!0), u.clear), [u, i]), v(`span`, e, {
      state: {
        imageLoadingStatus: s
      },
      ref: t,
      props: o,
      stateAttributesMapping: Et,
      enabled: s !== `loaded` && (i === 0 || c)
    });
  }),
  Mt = t({
    Avatar: () => Nt,
    AvatarBadge: () => Rt,
    AvatarFallback: () => Ft,
    AvatarGradient: () => Lt,
    AvatarGroup: () => zt,
    AvatarGroupCount: () => Bt,
    AvatarImage: () => Pt,
    avatarGradient: () => It
  });
function Nt({
  className: e,
  size: t = `default`,
  ...n
}) {
  return (0, $.jsx)(Dt, {
    "data-slot": `avatar`,
    "data-size": t,
    className: a(`group/avatar relative flex size-8 shrink-0 rounded-full select-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken data-[size=lg]:size-10 data-[size=sm]:size-6 dark:after:mix-blend-lighten`, e),
    ...n
  });
}
function Pt({
  className: e,
  ...t
}) {
  return (0, $.jsx)(At, {
    "data-slot": `avatar-image`,
    className: a(`aspect-square size-full rounded-full object-cover`, e),
    ...t
  });
}
function Ft({
  className: e,
  ...t
}) {
  return (0, $.jsx)(jt, {
    "data-slot": `avatar-fallback`,
    className: a(`flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs`, e),
    ...t
  });
}
function It(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n += 1) t ^= e.charCodeAt(n), t = Math.imul(t, 16777619);
  let n = t >>> 0,
    r = n % 360,
    i = 40 + (n >>> 9) % 50,
    a = 100 + (n >>> 17) % 160;
  return `linear-gradient(${String(a)}deg, oklch(0.74 0.16 ${String(r)}), oklch(0.52 0.19 ${String((r + i) % 360)}))`;
}
function Lt({
  seed: e,
  className: t,
  style: n,
  ...r
}) {
  return (0, $.jsx)(jt, {
    "data-slot": `avatar-gradient`,
    style: {
      backgroundImage: It(e),
      ...n
    },
    className: a(`flex size-full items-center justify-center rounded-full`, t),
    ...r
  });
}
function Rt({
  className: e,
  ...t
}) {
  return <span data-slot={`avatar-badge`} className={a(`absolute end-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground bg-blend-color ring-2 ring-shell-canvas select-none`, `group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden`, `group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2`, `group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2`, e)} {...t} />;
}
function zt({
  className: e,
  ...t
}) {
  return <div data-slot={`avatar-group`} className={a(`group/avatar-group flex -space-x-3 *:data-[slot=avatar]:ring-4 *:data-[slot=avatar]:ring-shell-canvas`, e)} {...t} />;
}
function Bt({
  className: e,
  ...t
}) {
  return <div data-slot={`avatar-group-count`} className={a(`relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground ring-4 ring-shell-canvas group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3`, e)} {...t} />;
}
var Vt = Q.createContext(void 0);
function Ht(e) {
  let t = Q.useContext(Vt);
  if (t === void 0 && !e) throw Error(l(33));
  return t;
}
var Ut = Q.createContext(void 0);
function Wt(e) {
  let t = Q.useContext(Ut);
  if (t === void 0 && !e) throw Error(l(36));
  return t;
}
var Gt = Q.createContext(void 0);
function Kt(e = !0) {
  let t = Q.useContext(Gt);
  if (t === void 0 && !e) throw Error(l(25));
  return t;
}
var qt = Q.createContext(void 0);
function Jt() {
  let e = Q.useContext(qt);
  if (e === void 0) throw Error(l(30));
  return e;
}
function Yt(e) {
  let {
      closeOnClick: t,
      highlighted: n,
      id: r,
      nodeId: i,
      store: a,
      typingRef: o,
      itemRef: s,
      itemMetadata: c
    } = e,
    {
      events: l
    } = a.useState(`floatingTreeRoot`),
    u = a.useState(`open`),
    d = Kt(!0),
    f = d !== void 0;
  return Q.useMemo(() => ({
    id: r,
    role: `menuitem`,
    tabIndex: u && n ? 0 : -1,
    onKeyDown(e) {
      e.key === ` ` && o?.current && e.preventDefault();
    },
    onMouseMove(e) {
      i && l.emit(`itemhover`, {
        nodeId: i,
        target: e.currentTarget
      });
    },
    onClick(e) {
      t && l.emit(`close`, {
        domEvent: e,
        reason: P
      });
    },
    onMouseUp(e) {
      if (d) {
        let t = d.initialCursorPointRef.current;
        if (d.initialCursorPointRef.current = null, f && t && Math.abs(e.clientX - t.x) <= 1 && Math.abs(e.clientY - t.y) <= 1 || f && !W && e.button === 2) return;
      }
      s.current && a.context.allowMouseUpTriggerRef.current && (!f || e.button === 2) && c.type === `regular-item` && b(s.current, e, {
        detail: 1
      });
    }
  }), [t, n, r, l, i, u, a, o, s, d, f, c]);
}
var Xt = {
  type: `regular-item`
};
function Zt(e) {
  let {
      closeOnClick: t,
      disabled: n,
      highlighted: r,
      id: i,
      store: a,
      typingRef: o = a.context.typingRef,
      nativeButton: s,
      itemMetadata: c,
      nodeId: l
    } = e,
    d = Q.useRef(null),
    {
      getButtonProps: f,
      buttonRef: p
    } = x({
      disabled: n,
      focusableWhenDisabled: !0,
      native: s,
      composite: !0
    }),
    m = Yt({
      closeOnClick: t,
      highlighted: r,
      id: i,
      nodeId: l,
      store: a,
      typingRef: o,
      itemRef: d,
      itemMetadata: c
    }),
    h = Q.useCallback(e => u(m, {
      onMouseEnter() {
        c.type === `submenu-trigger` && c.setActive();
      }
    }, e, f), [m, f, c]),
    g = _(d, p);
  return Q.useMemo(() => ({
    getItemProps: h,
    itemRef: g
  }), [h, g]);
}
var Qt = function (e) {
    return e.checked = `data-checked`, e.unchecked = `data-unchecked`, e.disabled = `data-disabled`, e.highlighted = `data-highlighted`, e;
  }({}),
  $t = {
    checked(e) {
      return e ? {
        [Qt.checked]: ``
      } : {
        [Qt.unchecked]: ``
      };
    },
    ...q
  },
  en = Q.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        id: i,
        label: a,
        nativeButton: o = !1,
        disabled: s = !1,
        closeOnClick: l = !1,
        checked: u,
        defaultChecked: d,
        onCheckedChange: f,
        style: p,
        ...m
      } = e,
      h = ft({
        guess: !0,
        label: a
      }),
      g = Ht(!0),
      _ = O(i),
      {
        store: y
      } = Wt(),
      b = y.useState(`disabled`),
      x = s || b,
      S = y.useState(`isActive`, h.index),
      C = y.useState(`itemProps`),
      [w, T] = Ne({
        controlled: u,
        default: d ?? !1,
        name: `MenuCheckboxItem`,
        state: `checked`
      }),
      {
        getItemProps: E,
        itemRef: D
      } = Zt({
        closeOnClick: l,
        disabled: x,
        highlighted: S,
        id: _,
        store: y,
        nativeButton: o,
        nodeId: g?.context.nodeId,
        itemMetadata: Xt
      }),
      k = Q.useMemo(() => ({
        disabled: x,
        highlighted: S,
        checked: w
      }), [x, S, w]);
    function A(e) {
      let t = M(P, e.nativeEvent, void 0, {
        preventUnmountOnClose: c
      });
      f?.(!w, t), !t.isCanceled && T(e => !e);
    }
    let j = v(`div`, e, {
      state: k,
      stateAttributesMapping: $t,
      props: [C, {
        role: `menuitemcheckbox`,
        "aria-checked": w,
        onClick: A
      }, m, E],
      ref: [D, t, h.ref]
    });
    return (0, $.jsx)(qt.Provider, {
      value: k,
      children: j
    });
  }),
  tn = Q.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        style: i,
        keepMounted: a = !1,
        ...o
      } = e,
      s = Jt(),
      c = Q.useRef(null),
      {
        transitionStatus: l,
        mounted: u,
        setMounted: d
      } = H(s.checked);
    ue({
      open: s.checked,
      ref: c,
      onComplete() {
        s.checked || d(!1);
      }
    });
    let f = {
      checked: s.checked,
      disabled: s.disabled,
      highlighted: s.highlighted,
      transitionStatus: l
    };
    return v(`span`, e, {
      state: f,
      ref: [t, c],
      stateAttributesMapping: $t,
      props: {
        "aria-hidden": !0,
        ...o
      },
      enabled: a || u
    });
  }),
  nn = Q.createContext(void 0);
function rn() {
  let e = Q.useContext(nn);
  if (e === void 0) throw Error(l(31));
  return e;
}
var an = Q.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        style: i,
        ...a
      } = e,
      [o, s] = Q.useState(void 0),
      c = v(`div`, e, {
        ref: t,
        props: {
          role: `group`,
          "aria-labelledby": o,
          ...a
        }
      });
    return (0, $.jsx)(nn.Provider, {
      value: s,
      children: c
    });
  }),
  on = Q.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        style: i,
        id: a,
        ...o
      } = e,
      s = O(a),
      c = rn();
    return h(() => (c(s), () => {
      c(e => e === s ? void 0 : e);
    }), [c, s]), v(`div`, e, {
      ref: t,
      props: {
        id: s,
        role: `presentation`,
        ...o
      }
    });
  }),
  sn = Q.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        id: i,
        label: a,
        nativeButton: o = !1,
        disabled: s = !1,
        closeOnClick: c = !0,
        style: l,
        ...u
      } = e,
      d = ft({
        guess: !0,
        label: a
      }),
      f = Ht(!0),
      p = O(i),
      {
        store: m
      } = Wt(),
      h = m.useState(`disabled`),
      g = s || h,
      _ = m.useState(`isActive`, d.index),
      y = m.useState(`itemProps`),
      {
        getItemProps: b,
        itemRef: x
      } = Zt({
        closeOnClick: c,
        disabled: g,
        highlighted: _,
        id: p,
        store: m,
        nativeButton: o,
        nodeId: f?.context.nodeId,
        itemMetadata: Xt
      });
    return v(`div`, e, {
      state: {
        disabled: g,
        highlighted: _
      },
      props: [y, u, b],
      ref: [x, t, d.ref]
    });
  }),
  cn = Q.createContext(void 0);
function ln(e) {
  let t = Q.useContext(cn);
  if (t === void 0 && !e) throw Error(l(69));
  return t;
}
var un = Q.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        style: i,
        finalFocus: a,
        ...o
      } = e,
      {
        store: s
      } = Wt(),
      {
        side: c,
        align: l
      } = Ht(),
      u = ln(!0) != null,
      d = s.useState(`open`),
      f = s.useState(`transitionStatus`),
      p = s.useState(`popupProps`),
      m = s.useState(`mounted`),
      h = s.useState(`instantType`),
      g = s.useState(`activeTriggerElement`),
      _ = s.useState(`parent`),
      y = s.useState(`lastOpenChangeReason`),
      b = s.useState(`rootId`),
      x = s.useState(`floatingRootContext`),
      S = s.useState(`floatingTreeRoot`),
      C = s.useState(`closeDelay`),
      w = s.useState(`hoverEnabled`),
      T = s.useState(`disabled`),
      E = s.useState(`openMethod`),
      D = _.type === `context-menu`;
    ue({
      open: d,
      ref: s.context.popupRef,
      onComplete() {
        d && s.context.onOpenChangeComplete?.(!0);
      }
    }), Q.useEffect(() => {
      function e(e) {
        s.setOpen(!1, M(e.reason, e.domEvent));
      }
      return S.events.on(`close`, e), () => {
        S.events.off(`close`, e);
      };
    }, [S.events, s]), Ve(x, {
      enabled: w && !T && !D && _.type !== `menubar`,
      closeDelay: C
    });
    let O = s.useStateSetter(`popupElement`),
      k = {
        transitionStatus: f,
        side: c,
        align: l,
        open: d,
        nested: _.type === `menu`,
        instant: h
      },
      A = v(`div`, e, {
        state: k,
        ref: [t, s.context.popupRef, O],
        stateAttributesMapping: J,
        props: [p, {
          onKeyDown(e) {
            u && lt.has(e.key) && e.stopPropagation();
          }
        }, He(f), o, {
          "data-rootownerid": b
        }]
      }),
      j = _.type === void 0 || D;
    return (g || _.type === `menubar` && y !== `outside-press`) && (j = !0), (0, $.jsx)(Re, {
      context: x,
      openInteractionType: E,
      modal: D,
      disabled: !m,
      returnFocus: a === void 0 ? j : a,
      initialFocus: _.type !== `menu`,
      restoreFocus: !0,
      externalTree: _.type === `menubar` ? void 0 : S,
      previousFocusableElement: g,
      nextFocusableElement: _.type === void 0 ? s.context.triggerFocusTargetRef : void 0,
      beforeContentFocusGuardRef: _.type === void 0 ? s.context.beforeContentFocusGuardRef : void 0,
      children: A
    });
  }),
  dn = Q.createContext(void 0);
function fn() {
  let e = Q.useContext(dn);
  if (e === void 0) throw Error(l(32));
  return e;
}
var pn = Q.forwardRef(function (e, t) {
    let {
        keepMounted: n = !1,
        ...r
      } = e,
      {
        store: i
      } = Wt();
    return i.useState(`mounted`) || n ? (0, $.jsx)(dn.Provider, {
      value: n,
      children: (0, $.jsx)(pe, {
        ref: t,
        ...r
      })
    }) : null;
  }),
  mn = 20;
function hn(e, t, n, r) {
  let [i, a] = Q.useState(!1);
  h(() => {
    if (!e || !t || n == null) {
      a(!1);
      return;
    }
    let r = D(n).documentElement.clientWidth,
      i = n.offsetWidth;
    a(r > 0 && i > 0 && i >= r - mn);
  }, [e, t, n]), Le(e && (!t || i), r);
}
var gn = Q.forwardRef(function (e, t) {
    let {
        anchor: n,
        positionMethod: r = `absolute`,
        className: i,
        render: a,
        side: o,
        align: s,
        sideOffset: c = 0,
        alignOffset: l = 0,
        collisionBoundary: u = `clipping-ancestors`,
        collisionPadding: d = 5,
        arrowPadding: f = 5,
        sticky: p = !1,
        disableAnchorTracking: m = !1,
        collisionAvoidance: g = V,
        style: _,
        ...v
      } = e,
      {
        store: y
      } = Wt(),
      b = fn(),
      x = Kt(!0),
      S = y.useState(`parent`),
      w = y.useState(`floatingRootContext`),
      T = y.useState(`floatingTreeRoot`),
      E = y.useState(`mounted`),
      D = y.useState(`open`),
      O = y.useState(`modal`),
      k = y.useState(`openMethod`),
      A = y.useState(`activeTriggerElement`),
      j = y.useState(`transitionStatus`),
      N = y.useState(`positionerElement`),
      P = y.useState(`instantType`),
      F = y.useState(`adaptiveOrigin`),
      I = y.useState(`lastOpenChangeReason`),
      L = y.useState(`floatingNodeId`),
      ee = y.useState(`floatingParentNodeId`),
      te = w.useState(`domReferenceElement`),
      ne = Q.useRef(null),
      R = Me(N),
      re = n,
      z = c,
      ie = l,
      B = s,
      ae = g;
    S.type === `context-menu` && (re = n ?? S.context?.anchor, B ??= `start`, !o && B !== `center` && (ie = e.alignOffset ?? 2, z = e.sideOffset ?? -5));
    let oe = o,
      H = B;
    S.type === `menu` ? (oe ??= `inline-end`, H ??= `start`, ae = e.collisionAvoidance ?? de) : S.type === `menubar` && (oe ??= S.context.orientation === `vertical` ? `inline-end` : `bottom`, H ??= `start`);
    let W = S.type === `context-menu`,
      G = We({
        anchor: re,
        floatingRootContext: w,
        positionMethod: x ? `fixed` : r,
        mounted: E,
        side: oe,
        sideOffset: z,
        align: H,
        alignOffset: ie,
        arrowPadding: W ? 0 : f,
        collisionBoundary: u,
        collisionPadding: d,
        sticky: p,
        nodeId: L,
        keepMounted: b,
        disableAnchorTracking: m,
        collisionAvoidance: ae,
        shift: W ? {
          crossAxis: !(`side` in ae && ae.side === `flip`),
          rootBoundary: `layoutViewport`
        } : void 0,
        externalTree: T,
        adaptiveOrigin: F
      });
    Q.useEffect(() => {
      function e(e) {
        e.open && (e.parentNodeId === L && y.set(`hoverEnabled`, !1), e.nodeId !== L && e.parentNodeId === y.select(`floatingParentNodeId`) && y.setOpen(!1, M(C)));
      }
      return T.events.on(`menuopenchange`, e), () => {
        T.events.off(`menuopenchange`, e);
      };
    }, [y, T.events, L]), Q.useEffect(() => {
      if (y.select(`floatingParentNodeId`) == null) return;
      function e(e) {
        if (e.open || e.nodeId !== y.select(`floatingParentNodeId`)) return;
        let t = e.reason ?? `sibling-open`;
        y.setOpen(!1, M(t));
      }
      return T.events.on(`menuopenchange`, e), () => {
        T.events.off(`menuopenchange`, e);
      };
    }, [T.events, y]);
    let K = U();
    Q.useEffect(() => {
      D || K.clear();
    }, [D, K]), Q.useEffect(() => {
      function e(e) {
        if (!(!D || e.nodeId !== y.select(`floatingParentNodeId`))) {
          if (e.target && A && A !== e.target) {
            let e = y.select(`closeDelay`);
            e > 0 ? K.isStarted() || K.start(e, () => {
              y.setOpen(!1, M(C));
            }) : y.setOpen(!1, M(C));
          } else K.clear();
        }
      }
      return T.events.on(`itemhover`, e), () => {
        T.events.off(`itemhover`, e);
      };
    }, [T.events, D, A, y, K]), Q.useEffect(() => {
      let e = {
        open: D,
        nodeId: L,
        parentNodeId: ee,
        reason: y.select(`lastOpenChangeReason`)
      };
      T.events.emit(`menuopenchange`, e);
    }, [T.events, D, y, L, ee]), h(() => {
      let e = te,
        t = ne.current;
      if (e && (ne.current = e), t && e && e !== t) {
        y.set(`instantType`, void 0);
        let e = new AbortController();
        return R(() => {
          y.set(`instantType`, `trigger-change`);
        }, e.signal), () => {
          e.abort();
        };
      }
    }, [te, R, y]);
    let q = {
        open: D,
        side: G.side,
        align: G.align,
        anchorHidden: G.anchorHidden,
        nested: S.type === `menu`,
        instant: P
      },
      J = S.type === `menubar` && S.context.modal;
    hn(D && (J || O && I !== `trigger-hover`), k === `touch`, N, A);
    let se = Ke(e, q, {
        styles: G.positionerStyles,
        transitionStatus: j,
        props: v,
        refs: [t, y.useStateSetter(`positionerElement`)],
        hidden: !E,
        inert: !D
      }),
      Y = E && S.type !== `menu` && (S.type !== `menubar` && O && I !== `trigger-hover` || S.type === `menubar` && S.context.modal),
      ce = null;
    return S.type === `menubar` ? ce = S.context.contentElement : S.type === void 0 && (ce = A), (0, $.jsxs)(Vt.Provider, {
      value: G,
      children: [Y && (0, $.jsx)(Fe, {
        ref: S.type === `context-menu` || S.type === `nested-context-menu` ? S.context.internalBackdropRef : null,
        inert: ke(!D),
        cutout: ce
      }), (0, $.jsx)(_e, {
        id: L,
        children: (0, $.jsx)(dt, {
          elementsRef: y.context.itemDomElements,
          labelsRef: y.context.itemLabels,
          children: se
        })
      })]
    });
  }),
  _n = Q.createContext(void 0);
function vn() {
  let e = Q.useContext(_n);
  if (e === void 0) throw Error(l(34));
  return e;
}
var yn = Q.memo(Q.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        value: i,
        defaultValue: a,
        onValueChange: o,
        disabled: s = !1,
        style: c,
        "aria-labelledby": l,
        ...u
      } = e,
      [d, f] = Q.useState(void 0),
      [p, h] = Ne({
        controlled: i,
        default: a,
        name: `MenuRadioGroup`
      }),
      g = m((e, t) => {
        o?.(e, t), !t.isCanceled && h(e);
      }),
      _ = v(`div`, e, {
        state: {
          disabled: s
        },
        ref: t,
        props: {
          role: `group`,
          "aria-labelledby": l ?? d,
          "aria-disabled": s || void 0,
          ...u
        }
      }),
      y = Q.useMemo(() => ({
        value: p,
        setValue: g,
        disabled: s
      }), [p, g, s]);
    return (0, $.jsx)(nn.Provider, {
      value: f,
      children: (0, $.jsx)(_n.Provider, {
        value: y,
        children: _
      })
    });
  })),
  bn = Q.createContext(void 0);
function xn() {
  let e = Q.useContext(bn);
  if (e === void 0) throw Error(l(35));
  return e;
}
var Sn = Q.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        id: i,
        label: a,
        nativeButton: o = !1,
        disabled: s = !1,
        closeOnClick: l = !1,
        value: u,
        style: d,
        ...f
      } = e,
      p = ft({
        guess: !0,
        label: a
      }),
      m = Ht(!0),
      h = O(i),
      {
        store: g
      } = Wt(),
      _ = g.useState(`isActive`, p.index),
      y = g.useState(`itemProps`),
      {
        value: b,
        setValue: x,
        disabled: S
      } = vn(),
      C = g.useState(`disabled`),
      w = s || S || C,
      T = b === u,
      {
        getItemProps: E,
        itemRef: D
      } = Zt({
        closeOnClick: l,
        disabled: w,
        highlighted: _,
        id: h,
        store: g,
        nativeButton: o,
        nodeId: m?.context.nodeId,
        itemMetadata: Xt
      }),
      k = Q.useMemo(() => ({
        disabled: w,
        highlighted: _,
        checked: T
      }), [w, _, T]);
    function A(e) {
      let t = M(P, e.nativeEvent, void 0, {
        preventUnmountOnClose: c
      });
      x(u, t);
    }
    let j = v(`div`, e, {
      state: k,
      stateAttributesMapping: $t,
      props: [y, {
        role: `menuitemradio`,
        "aria-checked": T,
        onClick: A
      }, f, E],
      ref: [D, t, p.ref]
    });
    return (0, $.jsx)(bn.Provider, {
      value: k,
      children: j
    });
  }),
  Cn = Q.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        style: i,
        keepMounted: a = !1,
        ...o
      } = e,
      s = xn(),
      c = Q.useRef(null),
      {
        transitionStatus: l,
        mounted: u,
        setMounted: d
      } = H(s.checked);
    ue({
      open: s.checked,
      ref: c,
      onComplete() {
        s.checked || d(!1);
      }
    });
    let f = {
      checked: s.checked,
      disabled: s.disabled,
      highlighted: s.highlighted,
      transitionStatus: l
    };
    return v(`span`, e, {
      state: f,
      stateAttributesMapping: $t,
      ref: [t, c],
      props: {
        "aria-hidden": !0,
        ...o
      },
      enabled: a || u
    });
  }),
  wn = Q.createContext(null);
function Tn(e) {
  let t = Q.useContext(wn);
  if (t === null && !e) throw Error(l(5));
  return t;
}
var En = {
    ...Ye,
    disabled: e => e.parent.type === `menubar` && e.parent.context.disabled || e.disabled,
    modal: e => (e.parent.type === void 0 || e.parent.type === `context-menu`) && (e.modal ?? !0),
    openMethod: e => e.openMethod,
    allowMouseEnter: e => e.allowMouseEnter,
    highlightItemOnHover: e => e.highlightItemOnHover,
    parent: e => e.parent,
    rootId: e => e.parent.type === `menu` ? e.parent.store.select(`rootId`) : e.parent.type === void 0 ? e.rootId : e.parent.context.rootId,
    activeIndex: e => e.activeIndex,
    isActive: (e, t) => e.activeIndex === t,
    hoverEnabled: e => e.hoverEnabled,
    instantType: e => e.instantType,
    lastOpenChangeReason: e => e.openChangeReason,
    floatingTreeRoot: e => e.parent.type === `menu` ? e.parent.store.select(`floatingTreeRoot`) : e.floatingTreeRoot,
    floatingNodeId: e => e.floatingNodeId,
    floatingParentNodeId: e => e.floatingParentNodeId,
    itemProps: e => e.itemProps,
    closeDelay: e => e.closeDelay,
    adaptiveOrigin: e => e.adaptiveOrigin,
    keyboardEventRelay: e => {
      if (e.keyboardEventRelay) return e.keyboardEventRelay;
      if (e.parent.type === `menu`) return e.parent.store.select(`keyboardEventRelay`);
    }
  },
  Dn = class extends me {
    constructor(e) {
      super({
        ...An(),
        ...e
      }, kn(), En), this.unsubscribeParentListener = this.observe(`parent`, e => {
        if (this.unsubscribeParentListener?.(), e.type === `menu`) {
          let t = e.store.select(`rootId`),
            n = e.store.select(`floatingTreeRoot`),
            r = e.store.select(`keyboardEventRelay`);
          this.unsubscribeParentListener = e.store.subscribe(() => {
            let i = e.store.select(`rootId`),
              a = e.store.select(`floatingTreeRoot`),
              o = e.store.select(`keyboardEventRelay`);
            (t !== i || n !== a || r !== o) && (t = i, n = a, r = o, this.notifyAll());
          }), this.context.allowMouseUpTriggerRef = e.store.context.allowMouseUpTriggerRef;
          return;
        }
        e.type !== void 0 && (this.context.allowMouseUpTriggerRef = e.context.allowMouseUpTriggerRef), this.unsubscribeParentListener = null;
      });
    }
    setOpen(e, t) {
      this.state.floatingRootContext.context.events.emit(`setOpen`, {
        open: e,
        eventDetails: t
      });
    }
    unsubscribeParentListener = null;
  };
function On() {
  let e = new at(Object.freeze(An()), Object.freeze(kn()), En);
  return Object.assign(e, {
    setOpen: c
  });
}
function kn() {
  return {
    positionerRef: Q.createRef(),
    popupRef: Q.createRef(),
    typingRef: {
      current: !1
    },
    itemDomElements: {
      current: []
    },
    itemLabels: {
      current: []
    },
    allowMouseUpTriggerRef: {
      current: !1
    },
    triggerFocusTargetRef: Q.createRef(),
    beforeContentFocusGuardRef: Q.createRef(),
    onOpenChangeComplete: void 0,
    triggerElements: new De()
  };
}
function An() {
  return {
    ...rt(),
    disabled: !1,
    modal: !0,
    openMethod: null,
    allowMouseEnter: !1,
    highlightItemOnHover: !0,
    parent: {
      type: void 0
    },
    rootId: void 0,
    activeIndex: null,
    hoverEnabled: !0,
    instantType: void 0,
    openChangeReason: null,
    floatingTreeRoot: new ye(),
    floatingNodeId: void 0,
    floatingParentNodeId: null,
    itemProps: f,
    keyboardEventRelay: void 0,
    closeDelay: 0,
    adaptiveOrigin: void 0
  };
}
var jn = Q.createContext(void 0);
function Mn() {
  return Q.useContext(jn);
}
var Nn = ge(function (e) {
  let {
      children: t,
      open: n,
      onOpenChange: r,
      onOpenChangeComplete: i,
      defaultOpen: a = !1,
      disabled: o = !1,
      modal: s,
      loopFocus: c = !0,
      orientation: l = `vertical`,
      actionsRef: d,
      closeParentOnEsc: p = !1,
      handle: _,
      triggerId: v,
      defaultTriggerId: y = null,
      highlightItemOnHover: b = !0
    } = e,
    x = Kt(!0),
    S = Wt(!0),
    C = Tn(!0),
    w = Mn(),
    E = Q.useMemo(() => w && S ? {
      type: `menu`,
      store: S.store
    } : C ? {
      type: `menubar`,
      context: C
    } : x && !S ? {
      type: `context-menu`,
      context: x
    } : {
      type: void 0
    }, [x, S, C, w]),
    D = Pn({
      open: a,
      openProp: n,
      activeTriggerId: y,
      triggerIdProp: v,
      parent: E
    });
  D.useControlledProp(`openProp`, n), D.useControlledProp(`triggerIdProp`, v), D.useContextCallback(`onOpenChangeComplete`, i);
  let O = T(),
    k = T(),
    j = D.useState(`floatingTreeRoot`),
    N = Ee(j),
    P = we(),
    F = D.useState(`open`),
    I = D.useState(`activeTriggerElement`),
    L = D.useState(`positionerElement`),
    ee = D.useState(`hoverEnabled`),
    te = D.useState(`disabled`),
    ne = D.useState(`lastOpenChangeReason`),
    R = D.useState(`parent`),
    re = D.useState(`activeIndex`),
    z = D.useState(`payload`),
    ie = D.useState(`floatingParentNodeId`),
    B = Q.useRef(null),
    V = Q.useRef(R.type !== `context-menu`),
    ae = U(),
    oe = Q.useRef(!0),
    H = U(),
    W = ie != null,
    {
      openMethod: G,
      triggerProps: K
    } = Ie(F);
  D.useSyncedValues({
    disabled: o,
    highlightItemOnHover: b,
    modal: R.type === void 0 ? s : void 0,
    openMethod: G,
    rootId: O
  }), Ze(D);
  let {
    forceUnmount: q
  } = nt(F, D, () => {
    D.set(`allowMouseEnter`, !1);
  });
  h(() => {
    x && !S ? D.update({
      parent: {
        type: `context-menu`,
        context: x
      },
      floatingNodeId: N,
      floatingParentNodeId: P
    }) : S && D.update({
      floatingNodeId: N,
      floatingParentNodeId: P
    });
  }, [x, S, N, P, D]), Q.useEffect(() => {
    if (F || (B.current = null), R.type === `context-menu`) {
      if (!F) {
        ae.clear(), V.current = !1;
        return;
      }
      ae.start(500, () => {
        V.current = !0;
      });
    }
  }, [ae, F, R.type]), h(() => {
    !F && !ee && D.set(`hoverEnabled`, !0);
  }, [F, ee, D]);
  let J = m((e, t) => {
      let n = t.reason;
      if (!e && !D.select(`open`) || F === e && t.trigger === I && ne === n) return;
      let i = Qe(t);
      if (!e && t.trigger == null && (t.trigger = I ?? void 0), r?.(e, t), t.isCanceled) return;
      D.state.floatingRootContext.dispatchOpenChange(e, t);
      let a = t.event;
      if (e === !1 && a?.type === `click` && a.pointerType === `touch` && !oe.current) return;
      e && n === `trigger-focus` ? (oe.current = !1, H.start(300, () => {
        oe.current = !0;
      })) : (oe.current = !0, H.clear());
      let o = (n === `trigger-press` || n === `item-press`) && a.detail === 0,
        s = !e && (n === `escape-key` || n == null),
        c = {
          open: e,
          openChangeReason: n
        };
      B.current = t.event, Xe(c, e, t.trigger, i()), D.update(c), R.type === `menubar` && (n === `trigger-focus` || n === `focus-out` || n === `trigger-hover` || n === `list-navigation` || n === `sibling-open`) ? D.set(`instantType`, `group`) : o || s ? D.set(`instantType`, o ? `click` : `dismiss`) : D.set(`instantType`, void 0);
    }),
    se = st({
      popupStore: D,
      floatingId: k,
      nested: P != null,
      onOpenChange: J
    }),
    Y = se.context.events;
  h(() => {
    let e = ({
      open: e,
      eventDetails: t
    }) => J(e, t);
    return Y.on(`setOpen`, e), () => {
      Y?.off(`setOpen`, e);
    };
  }, [Y, J]);
  let ce = Q.useCallback(() => {
    D.setOpen(!1, M(A));
  }, [D]);
  Q.useImperativeHandle(d, () => ({
    unmount: q,
    close: ce
  }), [q, ce]);
  let X;
  R.type === `context-menu` && (X = R.context), Q.useImperativeHandle(X?.positionerRef, () => L, [L]), Q.useImperativeHandle(X?.actionsRef, () => ({
    setOpen: J
  }), [J]);
  let le = je(se, {
      enabled: !te,
      bubbles: {
        escapeKey: p && R.type === `menu`
      },
      outsidePress() {
        return R.type !== `context-menu` || B.current?.type === `contextmenu` || V.current;
      },
      externalTree: W ? j : void 0
    }),
    ue = ut(),
    de = Q.useCallback(e => {
      D.select(`activeIndex`) !== e && D.set(`activeIndex`, e);
    }, [D]),
    Z = St(se, {
      enabled: !te,
      listRef: D.context.itemDomElements,
      activeIndex: re,
      nested: R.type !== void 0,
      loopFocus: c,
      orientation: l,
      parentOrientation: R.type === `menubar` ? R.context.orientation : void 0,
      rtl: ue === `rtl`,
      disabledIndices: g,
      onNavigate: de,
      openOnArrowKeyDown: R.type !== `context-menu`,
      externalTree: W ? j : void 0,
      focusItemOnHover: b
    }),
    fe = Q.useCallback(e => {
      D.context.typingRef.current = e;
    }, [D]),
    pe = Ct(se, {
      enabled: !te,
      listRef: D.context.itemLabels,
      elementsRef: D.context.itemDomElements,
      activeIndex: re,
      resetMs: 500,
      onMatch: e => {
        F && e !== re && D.set(`activeIndex`, e);
      },
      onTyping: fe
    }),
    me = Q.useMemo(() => {
      let e = u(pe.reference, Z.reference, le.reference, {
        onMouseMove() {
          D.set(`allowMouseEnter`, !0);
        }
      }, K);
      return e[`aria-haspopup`] = `menu`, e[`aria-expanded`] = F, e;
    }, [D, pe.reference, Z.reference, le.reference, K, F]),
    he = Q.useMemo(() => {
      let e = u(Z.trigger, le.trigger, K);
      return e[`aria-haspopup`] = `menu`, e[`aria-expanded`] = !1, e;
    }, [Z.trigger, le.trigger, K]),
    ge = Q.useMemo(() => u(tt, {
      id: k,
      role: `menu`,
      "aria-labelledby": I?.id,
      onMouseMove() {
        D.set(`allowMouseEnter`, !0), R.type === `menu` && D.set(`hoverEnabled`, !1);
      },
      onClick() {
        D.select(`hoverEnabled`) && D.set(`hoverEnabled`, !1);
      },
      onKeyDown(e) {
        let t = D.select(`keyboardEventRelay`);
        t && !e.isPropagationStopped() && t(e);
      }
    }, pe.floating, Z.floating, le.floating), [I, k, R.type, D, pe.floating, Z.floating, le.floating]),
    _e = Z.item ?? f;
  $e(D, {
    floatingRootContext: se,
    activeTriggerProps: me,
    inactiveTriggerProps: he,
    popupProps: ge,
    itemProps: _e
  });
  let ye = Q.useMemo(() => ({
      store: D,
      parent: E
    }), [D, E]),
    be = (0, $.jsxs)(Ut.Provider, {
      value: ye,
      children: [_ && (0, $.jsx)(it, {
        handle: _,
        store: D
      }), typeof t == `function` ? t({
        payload: z
      }) : t]
    });
  return R.type === void 0 || R.type === `context-menu` ? (0, $.jsx)(ve, {
    externalTree: j,
    children: be
  }) : be;
});
function Pn(e) {
  return d(() => new Dn(e)).current;
}
function Fn(e) {
  let t = Wt().store,
    n = Q.useMemo(() => ({
      parentMenu: t
    }), [t]);
  return (0, $.jsx)(jn.Provider, {
    value: n,
    children: (0, $.jsx)(Nn, {
      ...e
    })
  });
}
var In = 5;
function Ln(e, t) {
  let n = Rn(t);
  return e.clientX >= n.left - In && e.clientX <= n.right + In && e.clientY >= n.top - In && e.clientY <= n.bottom + In;
}
function Rn(e) {
  let t = e.getBoundingClientRect(),
    n = s(e);
  if (z) return t;
  let r = n.getComputedStyle(e, `::before`),
    i = n.getComputedStyle(e, `::after`);
  if (r.content === `none` && i.content === `none`) return t;
  let a = parseFloat(r.width) || 0,
    o = parseFloat(r.height) || 0,
    c = parseFloat(i.width) || 0,
    l = parseFloat(i.height) || 0,
    u = Math.max(t.width, a, c),
    d = Math.max(t.height, o, l),
    f = u - t.width,
    p = d - t.height;
  return {
    left: t.left - f / 2,
    right: t.right + f / 2,
    top: t.top - p / 2,
    bottom: t.bottom + p / 2
  };
}
function zn(e) {
  if (o(e) && e.hasAttribute(`data-rootownerid`)) return e.getAttribute(`data-rootownerid`);
  if (!p(e)) return zn(y(e));
}
var Bn = e(i(), 1);
function Vn(e, t) {
  let n = Q.useRef(null);
  function r(t) {
    Bn.flushSync(() => {
      e.setOpen(!1, M(k, t.nativeEvent, t.currentTarget));
    }), fe(n.current)?.focus();
  }
  function i(n) {
    let r = e.select(`positionerElement`);
    if (r && Z(n, r)) e.context.beforeContentFocusGuardRef.current?.focus();else {
      Bn.flushSync(() => {
        e.setOpen(!1, M(k, n.nativeEvent, n.currentTarget));
      });
      let i = G(e.context.triggerFocusTargetRef.current || t.current);
      for (; i !== null && F(r, i);) {
        let e = i;
        if (i = K(i), i === e) break;
      }
      i?.focus();
    }
  }
  return {
    preFocusGuardRef: n,
    handlePreFocusGuardFocus: r,
    handleFocusTargetFocus: i
  };
}
function Hn(e) {
  let {
      enabled: t = !0,
      mouseDownAction: n,
      open: r
    } = e,
    i = Q.useRef(!1);
  return Q.useMemo(() => t ? {
    onMouseDown: e => {
      (n === `open` && !r || n === `close` && r) && (i.current = !0, D(e.currentTarget).addEventListener(`click`, () => {
        i.current = !1;
      }, {
        once: !0
      }));
    },
    onClick: e => {
      i.current && (i.current = !1, e.preventBaseUIHandler());
    }
  } : f, [t, n, r]);
}
var Un = Ce(function (e, t) {
  let {
      render: n,
      className: r,
      style: i,
      disabled: a = !1,
      nativeButton: o = !0,
      id: s,
      openOnHover: c,
      delay: d = 100,
      closeDelay: p = 0,
      handle: h,
      payload: g,
      ..._
    } = e,
    y = Wt(!0),
    b = et(h) ?? y?.store;
  if (!b) throw Error(l(85));
  let C = O(s),
    w = b.useState(`isTriggerActive`, C),
    T = b.useState(`floatingRootContext`),
    E = b.useState(`isOpenedByTrigger`, C),
    k = b.useState(`triggerPopupId`, C),
    A = Q.useRef(null),
    M = Gn(),
    N = S(!0),
    P = be(),
    I = Q.useMemo(() => P ?? new ye(), [P]),
    L = Ee(I),
    ee = we(),
    {
      registerTrigger: te,
      isMountedByThisTrigger: ne
    } = Je(C, A, b, {
      payload: g,
      closeDelay: p,
      parent: M,
      floatingTreeRoot: I,
      floatingNodeId: L,
      floatingParentNodeId: ee,
      keyboardEventRelay: N?.relayKeyboardEvent
    }),
    R = M.type === `menubar`,
    re = b.useState(`disabled`),
    z = a || re || R && M.context.disabled,
    {
      getButtonProps: ie,
      buttonRef: B
    } = x({
      disabled: z,
      native: o
    });
  Q.useEffect(() => {
    !E && M.type === void 0 && (b.context.allowMouseUpTriggerRef.current = !1);
  }, [b, E, M.type]);
  let V = Q.useRef(null),
    ae = U(),
    oe = m(e => {
      if (!V.current) return;
      ae.clear(), b.context.allowMouseUpTriggerRef.current = !1;
      let t = e.target;
      F(V.current, t) || F(b.select(`positionerElement`), t) || t === V.current || (t == null || zn(t) !== b.select(`rootId`)) && (Ln(e, V.current) || I.events.emit(`close`, {
        domEvent: e,
        reason: j
      }));
    });
  Q.useEffect(() => {
    E && b.select(`lastOpenChangeReason`) === `trigger-hover` && D(V.current).addEventListener(`mouseup`, oe, {
      once: !0
    });
  }, [E, oe, b]);
  let H = R && M.context.hasSubmenuOpen,
    W = Ge(T, {
      enabled: (c ?? H) && !z && (!R || H && !ne),
      handleClose: Ue({
        blockPointerEvents: !R
      }),
      mouseOnly: !0,
      move: !1,
      restMs: M.type === void 0 ? d : void 0,
      delay: {
        close: p
      },
      triggerElementRef: A,
      externalTree: I,
      isActiveTrigger: w,
      isClosing: () => b.select(`transitionStatus`) === `ending`
    }),
    G = Wn(E, b.select(`lastOpenChangeReason`)),
    K = qe(T, {
      enabled: !z,
      event: E && R ? `click` : `mousedown`,
      toggle: !0,
      ignoreMouse: !1,
      stickIfOpen: M.type === void 0 && G
    }),
    q = ct(T, {
      enabled: !z && H
    }),
    J = Hn({
      open: E,
      enabled: R,
      mouseDownAction: `open`
    }),
    Y = Q.useMemo(() => u(q.reference, K.reference), [q.reference, K.reference]),
    X = b.useState(`triggerProps`, ne),
    {
      preFocusGuardRef: le,
      handlePreFocusGuardFocus: ue,
      handleFocusTargetFocus: de
    } = Vn(b, A),
    Z = {
      disabled: z,
      open: E
    },
    fe = [V, t, B, te, A],
    pe = [Y, W ?? f, X, {
      "aria-haspopup": `menu`,
      "aria-controls": k,
      id: C,
      onMouseDown: e => {
        b.select(`open`) || (ae.start(200, () => {
          b.context.allowMouseUpTriggerRef.current = !0;
        }), D(e.currentTarget).addEventListener(`mouseup`, oe, {
          once: !0
        }));
      }
    }, R ? {
      role: `menuitem`
    } : {}, J, _, ie],
    me = v(`button`, e, {
      enabled: !R,
      stateAttributesMapping: se,
      state: Z,
      ref: fe,
      props: pe
    });
  return R ? (0, $.jsx)(pt, {
    tag: `button`,
    render: n,
    className: r,
    style: i,
    state: Z,
    refs: fe,
    props: pe,
    stateAttributesMapping: se
  }) : E ? (0, $.jsxs)(Q.Fragment, {
    children: [(0, $.jsx)(ce, {
      ref: le,
      onFocus: ue
    }, `${C}-pre-focus-guard`), (0, $.jsx)(Q.Fragment, {
      children: me
    }, C), (0, $.jsx)(ce, {
      ref: b.context.triggerFocusTargetRef,
      onFocus: de
    }, `${C}-post-focus-guard`)]
  }) : (0, $.jsx)(Q.Fragment, {
    children: me
  }, C);
});
function Wn(e, t) {
  let n = U(),
    [r, i] = Q.useState(!1);
  return h(() => {
    e && t === `trigger-hover` ? (i(!0), n.start(500, () => {
      i(!1);
    })) : e || (n.clear(), i(!1));
  }, [e, t, n]), r;
}
function Gn() {
  let e = Tn(!0);
  return Q.useMemo(() => e ? {
    type: `menubar`,
    context: e
  } : {
    type: void 0
  }, [e]);
}
var Kn = {
    "aria-expanded": void 0
  },
  qn = Q.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        style: i,
        label: a,
        id: o,
        nativeButton: s = !1,
        openOnHover: c = !0,
        delay: u = 100,
        closeDelay: d = 0,
        disabled: p = !1,
        ...m
      } = e,
      h = Mn();
    if (!h?.parentMenu) throw Error(l(37));
    let g = ft({
        guess: !0,
        label: a
      }),
      _ = Ht(),
      {
        store: y
      } = Wt(),
      b = O(o),
      x = y.useState(`open`),
      S = y.useState(`floatingRootContext`),
      C = y.useState(`floatingTreeRoot`),
      w = y.useState(`triggerPopupId`, b),
      T = ot(b, y),
      E = Q.useCallback(e => {
        let t = T(e);
        return e !== null && y.select(`open`) && y.select(`activeTriggerId`) == null && y.update({
          activeTriggerId: b,
          activeTriggerElement: e,
          closeDelay: d
        }), t;
      }, [T, d, y, b]),
      D = Q.useRef(null),
      k = Q.useCallback(e => {
        D.current = e, y.set(`activeTriggerElement`, e);
      }, [y]);
    y.useSyncedValue(`closeDelay`, d);
    let A = h.parentMenu,
      j = y.useState(`disabled`),
      M = A.useState(`disabled`),
      N = p || j || M,
      P = A.useState(`itemProps`),
      F = A.useState(`isActive`, g.index),
      I = Q.useMemo(() => ({
        type: `submenu-trigger`,
        setActive() {
          A.select(`highlightItemOnHover`) && A.set(`activeIndex`, g.index);
        }
      }), [A, g.index]),
      {
        getItemProps: L,
        itemRef: ee
      } = Zt({
        closeOnClick: !1,
        disabled: N,
        highlighted: F,
        id: b,
        store: y,
        typingRef: A.context.typingRef,
        nativeButton: s,
        itemMetadata: I,
        nodeId: _?.context.nodeId
      }),
      te = y.useState(`hoverEnabled`),
      ne = Ge(S, {
        enabled: te && c && !N,
        handleClose: Ue({
          blockPointerEvents: !0
        }),
        mouseOnly: !0,
        move: !0,
        restMs: u,
        delay: {
          open: u,
          close: d
        },
        shouldOpen: u > 0 ? () => A.select(`allowMouseEnter`) : void 0,
        triggerElementRef: D,
        externalTree: C,
        isClosing: () => y.select(`transitionStatus`) === `ending`,
        guardStaleOpen: !0
      }),
      R = qe(S, {
        enabled: !N,
        event: `mousedown`,
        toggle: !c,
        ignoreMouse: c,
        stickIfOpen: !1
      }).reference ?? f,
      re = y.useState(`triggerProps`, !0);
    delete re.id;
    let z = {
        disabled: N,
        highlighted: F,
        open: x
      },
      ie = y.useState(`openMethod`),
      B = y.useState(`lastOpenChangeReason`) === `list-navigation` || ie === `keyboard`;
    return v(`div`, e, {
      state: z,
      stateAttributesMapping: le,
      props: [R, ne, re, P, x && B && Se ? Kn : void 0, {
        "aria-controls": w,
        tabIndex: x || F ? 0 : -1,
        onBlur() {
          F && A.set(`activeIndex`, null);
        }
      }, m, L],
      ref: [t, g.ref, ee, E, k]
    });
  }),
  Jn = t({
    DropdownMenu: () => $n,
    DropdownMenuCheckboxItem: () => lr,
    DropdownMenuContent: () => nr,
    DropdownMenuGroup: () => rr,
    DropdownMenuItem: () => ar,
    DropdownMenuLabel: () => ir,
    DropdownMenuPortal: () => er,
    DropdownMenuRadioGroup: () => ur,
    DropdownMenuRadioItem: () => dr,
    DropdownMenuSeparator: () => fr,
    DropdownMenuShortcut: () => pr,
    DropdownMenuSub: () => or,
    DropdownMenuSubContent: () => cr,
    DropdownMenuSubTrigger: () => sr,
    DropdownMenuTrigger: () => tr
  }),
  Yn = {
    sm: {
      panel: `min-w-36 rounded-lg p-1`,
      row: `gap-1.5 rounded-md px-1.5 py-1 text-sm`,
      check: `gap-1.5 rounded-md py-1 ps-1.5 pe-8 text-sm`,
      mark: `end-2`,
      inset: `data-inset:ps-6.5`,
      icon: `[&_svg:not([class*='size-'])]:size-3.5`,
      label: `px-1.5 py-1 text-xs`,
      separator: `-mx-1 my-1`,
      shortcut: `text-xs`
    },
    default: {
      panel: `min-w-48 rounded-xl p-1.5`,
      row: `gap-2 rounded-lg px-2.5 py-1.5 text-sm`,
      check: `gap-2 rounded-lg py-1.5 ps-2.5 pe-9 text-sm`,
      mark: `end-2.5`,
      inset: `data-inset:ps-8.5`,
      icon: `[&_svg:not([class*='size-'])]:size-4`,
      label: `px-2.5 py-1 text-xs`,
      separator: `-mx-1.5 my-1.5`,
      shortcut: `text-xs`
    }
  },
  Xn = Q.createContext(`default`);
function Zn() {
  return Yn[Q.useContext(Xn)];
}
var Qn = `flex cursor-default items-center outline-hidden select-none focus:bg-accent focus:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0`;
function $n({
  ...e
}) {
  return (0, $.jsx)(Nn, {
    "data-slot": `dropdown-menu`,
    ...e
  });
}
function er({
  ...e
}) {
  return (0, $.jsx)(pn, {
    "data-slot": `dropdown-menu-portal`,
    ...e
  });
}
function tr({
  className: e,
  onPointerDown: t,
  ...n
}) {
  let [r, i] = Q.useState(!1);
  return Q.useEffect(() => {
    if (!r) return;
    let e = () => {
      i(!1);
    };
    return window.addEventListener(`pointerup`, e), window.addEventListener(`pointercancel`, e), () => {
      window.removeEventListener(`pointerup`, e), window.removeEventListener(`pointercancel`, e);
    };
  }, [r]), (0, $.jsx)(Un, {
    "data-slot": `dropdown-menu-trigger`,
    "data-pressed": r || void 0,
    className: a(`select-none`, e),
    onPointerDown: e => {
      t?.(e), e.button === 0 && i(!0);
    },
    ...n
  });
}
function nr({
  className: e,
  align: t = `start`,
  alignOffset: n = 0,
  side: r = `bottom`,
  sideOffset: i = 6,
  size: o,
  ...s
}) {
  let c = Q.useContext(Xn),
    l = o ?? c;
  return (0, $.jsx)(Xn.Provider, {
    value: l,
    children: (0, $.jsx)(pn, {
      children: (0, $.jsx)(gn, {
        className: `isolate z-50 outline-none`,
        align: t,
        alignOffset: n,
        side: r,
        sideOffset: i,
        children: (0, $.jsx)(un, {
          "data-slot": `dropdown-menu-content`,
          "data-size": l,
          className: a(`z-50 max-h-(--available-height) w-(--anchor-width) origin-(--transform-origin) overflow-x-hidden overflow-y-auto bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] outline-none data-closed:animate-out data-closed:overflow-hidden data-closed:fade-out-0 data-closed:zoom-out-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95`, Yn[l].panel, e),
          ...s
        })
      })
    })
  });
}
function rr({
  ...e
}) {
  return (0, $.jsx)(an, {
    "data-slot": `dropdown-menu-group`,
    ...e
  });
}
function ir({
  className: e,
  inset: t,
  ...n
}) {
  let r = Zn();
  return (0, $.jsx)(on, {
    "data-slot": `dropdown-menu-label`,
    "data-inset": t,
    className: a(`font-medium text-muted-foreground`, r.label, r.inset, e),
    ...n
  });
}
function ar({
  className: e,
  inset: t,
  variant: n = `default`,
  highlighted: r,
  ...i
}) {
  let o = Zn();
  return (0, $.jsx)(sn, {
    "data-slot": `dropdown-menu-item`,
    "data-inset": t,
    "data-variant": n,
    className: a(Qn, o.row, o.inset, o.icon, `group/dropdown-menu-item relative not-data-[variant=destructive]:focus:**:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:*:[svg]:text-destructive`, r && `bg-accent text-accent-foreground`, e),
    ...i
  });
}
function or({
  ...e
}) {
  return (0, $.jsx)(Fn, {
    "data-slot": `dropdown-menu-sub`,
    ...e
  });
}
function sr({
  className: e,
  inset: t,
  children: n,
  highlighted: r,
  ...i
}) {
  let o = Zn();
  return (0, $.jsxs)(qn, {
    "data-slot": `dropdown-menu-sub-trigger`,
    "data-inset": t,
    className: a(Qn, o.row, o.inset, o.icon, `not-data-[variant=destructive]:focus:**:text-accent-foreground`, r === void 0 ? `data-open:bg-accent data-open:text-accent-foreground data-popup-open:bg-accent data-popup-open:text-accent-foreground` : r && `bg-accent text-accent-foreground`, e),
    ...i,
    children: [n, (0, $.jsx)(Be, {
      className: `ms-auto rtl:-scale-x-100`
    })]
  });
}
function cr({
  className: e,
  align: t = `start`,
  alignOffset: n = -5,
  side: r,
  sideOffset: i = 1,
  ...o
}) {
  let s = ut();
  return (0, $.jsx)(nr, {
    "data-slot": `dropdown-menu-sub-content`,
    align: t,
    alignOffset: n,
    side: r ?? (s === `rtl` ? `left` : `right`),
    sideOffset: i,
    className: a(`w-auto min-w-44 shadow-lg`, e),
    ...o
  });
}
function lr({
  className: e,
  children: t,
  checked: n,
  inset: r,
  marked: i = !0,
  ...o
}) {
  let s = Zn();
  return (0, $.jsxs)(en, {
    "data-slot": `dropdown-menu-checkbox-item`,
    "data-inset": r,
    className: a(Qn, i ? s.check : s.row, s.inset, s.icon, `relative focus:**:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50`, e),
    checked: n,
    ...o,
    children: [i ? <span className={a(`pointer-events-none absolute`, s.mark)}>{(0, $.jsx)(tn, {
        children: (0, $.jsx)(ze, {})
      })}</span> : null, t]
  });
}
function ur({
  ...e
}) {
  return (0, $.jsx)(yn, {
    "data-slot": `dropdown-menu-radio-group`,
    ...e
  });
}
function dr({
  className: e,
  children: t,
  inset: n,
  marked: r = !0,
  ...i
}) {
  let o = Zn();
  return (0, $.jsxs)(Sn, {
    "data-slot": `dropdown-menu-radio-item`,
    "data-inset": n,
    className: a(Qn, r ? o.check : o.row, o.inset, o.icon, `relative focus:**:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50`, e),
    ...i,
    children: [r ? <span className={a(`pointer-events-none absolute`, o.mark)}>{(0, $.jsx)(Cn, {
        children: (0, $.jsx)(ze, {})
      })}</span> : null, t]
  });
}
function fr({
  className: e,
  ...t
}) {
  let n = Zn();
  return (0, $.jsx)(mt, {
    "data-slot": `dropdown-menu-separator`,
    className: a(`h-px bg-border`, n.separator, e),
    ...t
  });
}
function pr({
  className: e,
  ...t
}) {
  let n = Zn();
  return <span data-slot={`dropdown-menu-shortcut`} className={a(`ms-auto tracking-widest text-muted-foreground rtl:tracking-normal`, n.shortcut, e)} {...t} />;
}
export { Dt as $, pn as A, Yt as B, wn as C, yn as D, Sn as E, on as F, Ht as G, Kt as H, an as I, Lt as J, Nt as K, tn as L, cn as M, ln as N, gn as O, sn as P, At as Q, en as R, On as S, Cn as T, Ut as U, Gt as V, Wt as W, Mt as X, Pt as Y, jt as Z, Vn as _, ir as a, Fn as b, dr as c, or as d, Ct as et, sr as f, Un as g, qn as h, ar as i, un as j, hn as k, fr as l, Jn as m, nr as n, er as o, tr as p, Ft as q, rr as r, ur as s, $n as t, St as tt, pr as u, zn as v, Tn as w, Nn as x, Ln as y, Xt as z };

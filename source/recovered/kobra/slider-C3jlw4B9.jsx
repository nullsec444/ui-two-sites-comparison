// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import { a as e, r as t } from "./rolldown-runtime-B0Z9INg1.js";
import { n, t as r } from "./jsx-runtime-Ciaf_P-h.js";
import { t as i } from "./react-dom-U4kpXZKZ.js";
import { t as a } from "./shim-DHzQdBGf.js";
import { t as o } from "./utils-WkhMP9hs.js";
import { D as s, T as c, a as l, c as u, d, m as f, p, s as m, t as h } from "./useRenderElement-BLCXgiyH.js";
import { B as g, E as _, M as v, R as y, S as b, U as x, V as S, _ as C, n as ee, t as w, u as te, z as T } from "./createBaseUIEventDetails-s-LN--f1.js";
import { f as E, i as D, l as ne, n as re, o as ie, t as O } from "./useRegisterFieldControl-AYSnYd0j.js";
import { h as ae, i as k, o as oe, r as se, t as ce } from "./visuallyHidden-Cn7Rn7MY.js";
import { t as A } from "./useControlled-Cp_s8ypY.js";
import { a as le, c as j, i as M, l as ue, n as de, o as N, r as P, t as fe } from "./composite-BDauBs8w.js";
import { t as pe } from "./useValueChanged-DFGH-h8Z.js";
import { n as me } from "./DirectionContext-CSiJxUVd.js";
import { c as F, i as he, l as ge, n as I, r as _e, s as ve, u as L } from "./CSPContext-BMPia1xs.js";
import { n as ye, t as be } from "./useCompositeListItem-4pOaQAyk.js";
var R = e(n(), 1);
function xe(e, t) {
  return e - t;
}
function Se(e, t, n, r, i, a) {
  let o = L(e, n, r);
  if (!i) return o;
  let s = a.slice();
  return s[t] = L(o, a[t - 1] ?? -1 / 0, a[t + 1] ?? 1 / 0), s.sort(xe);
}
function Ce(e, t, n) {
  if (!Array.isArray(e)) return !0;
  let r = t * n;
  for (let t = 0; t < e.length - 1; t += 1) if (!(Math.abs(e[t] - e[t + 1]) >= r)) return !1;
  return !0;
}
var z = () => null,
  we = {
    activeThumbIndex: z,
    max: z,
    min: z,
    minStepsBetweenValues: z,
    step: z,
    values: z,
    ...E
  },
  Te = R.createContext(void 0);
function Ee() {
  let e = R.useContext(Te);
  if (e === void 0) throw Error(u(62));
  return e;
}
var B = e(r(), 1);
function De(e, t) {
  return e === t || Array.isArray(e) && Array.isArray(t) && ge(e, t);
}
var V = R.forwardRef(function (e, t) {
  let {
      "aria-labelledby": n,
      className: r,
      defaultValue: i,
      disabled: a = !1,
      id: o,
      format: s,
      largeStep: c = 10,
      locale: l,
      render: u,
      max: d = 100,
      min: m = 0,
      minStepsBetweenValues: g = 0,
      form: v,
      name: te,
      onValueChange: E,
      onValueCommitted: re,
      orientation: ae = `horizontal`,
      step: k = 1,
      thumbCollisionBehavior: oe = `push`,
      thumbAlignment: se = `center`,
      value: ce,
      style: le,
      ...j
    } = e,
    M = S(o),
    ue = ve(M),
    de = f(E),
    N = f(re),
    {
      clearErrors: P
    } = ie(),
    {
      state: fe,
      disabled: me,
      name: he,
      setTouched: I,
      setDirty: _e,
      validityData: be,
      validation: z
    } = ne(),
    {
      labelId: Ee
    } = D(),
    [V, Oe] = R.useState(),
    H = n ?? F(Ee, V),
    U = me || a,
    W = he ?? te,
    [ke, Ae] = A({
      controlled: ce,
      default: i ?? m,
      name: `Slider`
    }),
    je = R.useRef(null),
    Me = R.useRef(null),
    G = R.useRef([]),
    Ne = R.useRef(null),
    Pe = R.useRef(-1),
    Fe = R.useRef(null),
    K = R.useRef(_),
    [q, Ie] = R.useState(-1),
    [Le, Re] = R.useState(-1),
    [ze, Be] = R.useState(!1),
    [Ve, He] = R.useState(() => new Map()),
    [Ue, We] = R.useState([void 0, void 0]),
    Ge = f(e => {
      Ie(e), e !== -1 && Re(e);
    }),
    Ke = f(e => {
      e && (Me.current = e);
    }),
    J = Array.isArray(ke),
    qe = R.useMemo(() => J ? ke.map(e => L(e, m, d)).sort(xe) : [L(ke, m, d)], [d, m, J, ke]),
    Je = J ? qe : qe[0];
  O(z.inputRef, M, Je, void 0, !U, te), pe(Je, () => {
    P(W), z.change(Je);
    let e = be.initialValue,
      t;
    t = Array.isArray(Je) && Array.isArray(e) ? !ge(Je, e) : Je !== e, _e(t);
  });
  let Ye = f((e, t) => {
      if (Number.isNaN(e) || De(e, ke)) return !1;
      let n = t.event,
        r = n.constructor,
        i = new r(n.type, n);
      return Object.defineProperty(i, "target", {
        writable: !0,
        value: {
          value: e,
          name: W
        }
      }), t.event = i, de(e, t), !t.isCanceled && (K.current = t.reason, Ae(e), !0);
    }),
    Xe = f((e, t, n) => {
      let r = Se(e, t, m, d, J, qe);
      if (Ce(r, k, g)) {
        let e = `key` in n ? b : C,
          i = Ye(r, w(e, n.nativeEvent, void 0, {
            activeThumbIndex: t
          }));
        I(!0), i && N(r, ee(e, n.nativeEvent));
      }
    });
  p(() => {
    if (!U) return;
    let e = y(x(je.current));
    T(je.current, e) && e.blur(), q !== -1 && Ge(-1);
  }, [q, U, Ge]);
  let Ze = R.useMemo(() => ({
      ...fe,
      activeThumbIndex: q,
      disabled: U,
      dragging: ze,
      orientation: ae,
      max: d,
      min: m,
      minStepsBetweenValues: g,
      step: k,
      values: qe
    }), [fe, q, U, ze, d, m, g, ae, k, qe]),
    Qe = R.useMemo(() => ({
      active: q,
      controlRef: Me,
      disabled: U,
      dragging: ze,
      validation: z,
      format: s,
      handleInputChange: Xe,
      indicatorPosition: Ue,
      inset: se !== `center`,
      labelId: H,
      rootLabelId: ue,
      largeStep: c,
      lastUsedThumbIndex: Le,
      lastChangeReasonRef: K,
      form: v,
      locale: l,
      max: d,
      min: m,
      minStepsBetweenValues: g,
      name: W,
      onValueCommitted: N,
      orientation: ae,
      pressedThumbCenterOffsetRef: Ne,
      pressedThumbIndexRef: Pe,
      pressedValuesRef: Fe,
      registerFieldControlRef: Ke,
      renderBeforeHydration: se === `edge`,
      setActive: Ge,
      setDragging: Be,
      setIndicatorPosition: We,
      setLabelId: Oe,
      setValue: Ye,
      state: Ze,
      step: k,
      thumbCollisionBehavior: oe,
      thumbMap: Ve,
      thumbRefs: G,
      values: qe
    }), [q, H, ue, U, ze, z, s, Xe, Ue, c, Le, v, l, d, m, g, W, N, ae, Ke, Ge, Ye, Ze, k, oe, se, Ve, qe]),
    $e = h(`div`, e, {
      state: Ze,
      ref: [t, je],
      props: [{
        "aria-labelledby": H,
        id: M,
        role: `group`
      }, j, e => z.getValidationProps(U, e)],
      stateAttributesMapping: we
    });
  return (0, B.jsx)(Te.Provider, {
    value: Qe,
    children: (0, B.jsx)(ye, {
      elementsRef: G,
      onMapChange: He,
      children: $e
    })
  });
});
function Oe(e, t) {
  let n = e.getBoundingClientRect();
  return t ? (n.top + n.bottom) / 2 : (n.left + n.right) / 2;
}
function H(e) {
  if (e === 0) return 0;
  if (Math.abs(e) < 1) {
    let t = e.toExponential().split(`e-`),
      n = t[0].split(`.`)[1];
    return (n ? n.length : 0) + parseInt(t[1], 10);
  }
  let t = e.toString().split(`.`)[1];
  return t ? t.length : 0;
}
function U(e, t, n) {
  let r = Math.round((e - n) / t) * t + n;
  return Number(r.toFixed(Math.max(H(t), H(n))));
}
function W(e, t, n, r, i, a, o, s) {
  let c = e.slice(),
    l = a * o,
    u = c.length - 1,
    d = s ?? e,
    f = r + t * l,
    p = i - (u - t) * l;
  c[t] = L(n, f, p);
  for (let e = t + 1; e <= u; e += 1) {
    let t = c[e - 1] + l,
      n = i - (u - e) * l,
      r = d[e],
      a = Math.max(c[e], t);
    r < a && (a = Math.max(r, t)), c[e] = L(a, t, n);
  }
  for (let e = t - 1; e >= 0; --e) {
    let t = c[e + 1] - l,
      n = r + e * l,
      i = d[e],
      a = Math.min(c[e], t);
    i > a && (a = Math.min(i, t)), c[e] = L(a, n, t);
  }
  for (let e = 0; e <= u; e += 1) c[e] = Number(c[e].toFixed(12));
  return c;
}
function ke(e, t, n, r, i, a, o, s, c, l) {
  let u = n ?? t,
    d = r ?? t;
  if (!(u.length > 1)) return {
    value: a,
    thumbIndex: 0,
    didSwap: !1
  };
  let f = c * l;
  if (e === `push`) return {
    value: W(u, i, a, o, s, c, l),
    thumbIndex: i,
    didSwap: !1
  };
  let p = u.slice(),
    m = p[i - 1],
    h = p[i + 1],
    g = m == null ? o : m + f,
    _ = h == null ? s : h - f,
    v = Number(L(a, g, _).toFixed(12));
  switch (p[i] = v, e) {
    case `swap`:
      {
        let e = u[i],
          t = 1e-7,
          n = a > e,
          r = a < e,
          g = n && h != null && a >= h - t,
          _ = r && m != null && a <= m + t;
        if (!g && !_) return {
          value: p,
          thumbIndex: i,
          didSwap: !1
        };
        let y = g ? i + 1 : i - 1,
          b = p.map((e, t) => t === i ? v : d[t] ?? u[t]),
          x = a;
        x = g ? Math.max(a, p[y]) : Math.min(a, p[y]);
        let S = W(p, y, x, o, s, c, l, b),
          C = g ? y - 1 : y + 1,
          ee = S[C - 1],
          w = S[C + 1],
          te = ee == null ? o : ee + f;
        te = Math.max(te, o + C * f);
        let T = w == null ? s : w - f;
        T = Math.min(T, s - (S.length - 1 - C) * f);
        let E = L(v, te, T);
        return S[C] = Number(E.toFixed(12)), {
          value: S,
          thumbIndex: y,
          didSwap: !0
        };
      }
    default:
      return {
        value: p,
        thumbIndex: i,
        didSwap: !1
      };
  }
}
var Ae = 2;
function je(e, t) {
  if (!e) return {
    start: 0,
    end: 0
  };
  function n(e) {
    let t = e == null ? 0 : parseFloat(e);
    return Number.isNaN(t) ? 0 : t;
  }
  let r = t ? `Top` : `InlineStart`,
    i = t ? `Bottom` : `InlineEnd`;
  return {
    start: n(e[`border${r}Width`]) + n(e[`padding${r}`]),
    end: n(e[`border${i}Width`]) + n(e[`padding${i}`])
  };
}
function Me(e, t) {
  if (t.current != null && e.changedTouches) {
    let n = e;
    for (let e = 0; e < n.changedTouches.length; e += 1) {
      let r = n.changedTouches[e];
      if (r.identifier === t.current) return {
        x: r.clientX,
        y: r.clientY
      };
    }
    return null;
  }
  return {
    x: e.clientX,
    y: e.clientY
  };
}
var G = R.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        style: i,
        ...a
      } = e,
      {
        disabled: o,
        dragging: l,
        inset: u,
        lastChangeReasonRef: d,
        max: p,
        min: m,
        minStepsBetweenValues: _,
        onValueCommitted: b,
        orientation: S,
        pressedThumbCenterOffsetRef: C,
        pressedThumbIndexRef: E,
        pressedValuesRef: D,
        registerFieldControlRef: ne,
        renderBeforeHydration: re,
        setActive: ie,
        setDragging: O,
        setValue: ae,
        state: ce,
        step: A,
        thumbCollisionBehavior: le,
        thumbRefs: j,
        values: M
      } = Ee(),
      ue = me(),
      de = M.length > 1,
      N = S === `vertical`,
      P = R.useRef(null),
      fe = R.useRef(null),
      pe = f(e => {
        e && fe.current == null && (fe.current = c(e).getComputedStyle(e));
      }),
      F = R.useRef(null),
      he = R.useRef(0),
      ge = R.useRef(0),
      I = R.useRef(null),
      _e = se(M);
    function ve(e) {
      return e?.querySelector(`input[type="range"]`);
    }
    function ye(e) {
      E.current = e, j.current[e] || (C.current = null);
    }
    function be() {
      E.current = -1, C.current = null;
    }
    function xe(e) {
      return s(e) ? j.current.some(t => !s(t) || !T(t, e) ? !1 : ve(t)?.disabled === !0) : !1;
    }
    function Se(e) {
      let t = P.current,
        n = E.current;
      if (!t || n < 0 || n >= M.length) return n >= M.length && (I.current = null), null;
      let {
          width: r,
          height: i,
          bottom: a,
          left: o,
          right: s
        } = t.getBoundingClientRect(),
        c = je(fe.current, N),
        l = ge.current,
        u = (N ? i : r) - c.start - c.end - l * 2,
        d = C.current ?? 0,
        f = e.x - d,
        h = e.y - d,
        g = N ? a - h - c.end : (ue === `rtl` ? s - f : f - o) - c.start,
        v = L((g - l) / u, 0, 1),
        y = (p - m) * v + m;
      return y = U(y, A, m), y = L(y, m, p), de ? ke(le, M, _e.current, D.current, n, y, m, p, A, _) : {
        value: y,
        thumbIndex: n,
        didSwap: !1
      };
    }
    function z(e) {
      D.current = de ? M.slice() : null, I.current = null, _e.current = M;
      let t = E.current,
        n = t;
      if (t > -1 && t < M.length) {
        if (M[t] === p) {
          let e = t;
          for (; e > 0 && M[e - 1] === p;) --e;
          n = e;
        }
      } else {
        let t = N ? `y` : `x`,
          r;
        n = -1;
        for (let i = 0; i < j.current.length; i += 1) {
          let a = j.current[i];
          if (s(a) && !ve(a)?.disabled) {
            let o = Oe(a, N),
              s = Math.abs(e[t] - o);
            (r === void 0 || s <= r) && (n = i, r = s);
          }
        }
      }
      if (n > -1 && n !== t && ye(n), u) {
        let e = j.current[n];
        if (s(e)) {
          let t = e.getBoundingClientRect();
          ge.current = t[N ? `height` : `width`] / 2;
        }
      }
    }
    function Te(e) {
      let t = ve(j.current?.[e]);
      t && t.focus({
        preventScroll: !0,
        focusVisible: !1
      });
    }
    function B(e, t, n) {
      let r = ae(e.value, w(t, n, void 0, {
        activeThumbIndex: e.thumbIndex
      }));
      return r && (I.current = e.value, _e.current = Array.isArray(e.value) ? e.value : [e.value], e.didSwap && (ye(e.thumbIndex), Te(e.thumbIndex))), r;
    }
    let De = f(e => {
        let t = Me(e, F);
        if (t == null) return;
        if (he.current += 1, e.type === `pointermove` && e.buttons === 0) {
          V(e);
          return;
        }
        let n = Se(t);
        n != null && Ce(n.value, A, _) && (!l && he.current > Ae && O(!0), B(n, te, e));
      }),
      V = f(e => {
        ie(-1), O(!1), C.current = null;
        let t = I.current;
        if (Array.isArray(t) && t.length !== M.length && (I.current = null), I.current != null) {
          let t = d.current;
          b(I.current, ee(t, e));
        }
        `pointerType` in e && P.current?.hasPointerCapture(e.pointerId) && P.current?.releasePointerCapture(e.pointerId), E.current = -1, F.current = null, W();
      }),
      H = f(e => {
        if (o) return;
        if (xe(g(e))) {
          be();
          return;
        }
        let t = e.changedTouches[0];
        if (t == null) return;
        F.current = t.identifier;
        let n = {
          x: t.clientX,
          y: t.clientY
        };
        z(n);
        let r = Se(n);
        if (r == null) return;
        Te(r.thumbIndex), B(r, v, e), he.current = 0;
        let i = x(P.current);
        i.addEventListener(`touchmove`, De, {
          passive: !0
        }), i.addEventListener(`touchend`, V, {
          passive: !0
        });
      }),
      W = f(() => {
        let e = x(P.current);
        e.removeEventListener(`pointermove`, De), e.removeEventListener(`pointerup`, V), e.removeEventListener(`touchmove`, De), e.removeEventListener(`touchend`, V), D.current = null, I.current = null;
      }),
      G = oe();
    return R.useEffect(() => {
      let e = P.current;
      if (!e) return () => W();
      let t = k(e, `touchstart`, H, {
        passive: !0
      });
      return () => {
        t(), G.cancel(), W();
      };
    }, [W, H, P, G]), R.useEffect(() => {
      o && W();
    }, [o, W]), h(`div`, e, {
      state: ce,
      ref: [t, ne, P, pe],
      props: [{
        "data-base-ui-slider-control": re ? `` : void 0,
        onPointerDown(e) {
          let t = P.current,
            n = g(e.nativeEvent);
          if (!t || o || e.defaultPrevented || !s(n) || e.button !== 0) return;
          if (xe(n)) {
            be();
            return;
          }
          let r = {
            x: e.clientX,
            y: e.clientY
          };
          z(r);
          let i = Se(r);
          if (i == null) return;
          T(j.current[i.thumbIndex], y(x(t))) ? e.preventDefault() : G.request(() => {
            Te(i.thumbIndex);
          }), O(!0), C.current ?? B(i, v, e.nativeEvent), e.nativeEvent.pointerId && t.setPointerCapture(e.nativeEvent.pointerId), he.current = 0;
          let a = x(t);
          a.addEventListener(`pointermove`, De, {
            passive: !0
          }), a.addEventListener(`pointerup`, V, {
            once: !0
          });
        }
      }, a],
      stateAttributesMapping: we
    });
  }),
  Ne = R.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        style: i,
        ...a
      } = e,
      {
        state: o
      } = Ee();
    return h(`div`, e, {
      state: o,
      ref: t,
      props: [{
        style: {
          position: `relative`
        }
      }, a],
      stateAttributesMapping: we
    });
  }),
  Pe = a();
function Fe() {
  return l;
}
function K() {
  return !1;
}
function q() {
  return !0;
}
function Ie() {
  return (0, Pe.useSyncExternalStore)(Fe, K, q);
}
function Le(e) {
  let {
      script: t
    } = e,
    {
      nonce: n
    } = I();
  return Ie() ? <script nonce={n} dangerouslySetInnerHTML={{
    __html: t
  }} suppressHydrationWarning={!0} /> : null;
}
var Re,
  ze = new Set([...le, ue, j]);
function Be(e, t, n, r) {
  if (!(t < 0)) return e.length === 2 ? `${he(e[t], r, n)} ${t === 0 ? `start` : `end`} range` : n ? he(e[t], r, n) : void 0;
}
function Ve(e, t, n, r, i) {
  let a = e + t * n,
    o = Number(a.toFixed(Math.max(H(e), H(t), H(r))));
  return L(o, r, i);
}
var He = R.forwardRef(function (e, t) {
  let {
      render: n,
      children: r,
      className: i,
      "aria-describedby": a,
      "aria-label": o,
      "aria-labelledby": s,
      "aria-valuetext": l,
      disabled: u = !1,
      getAriaLabel: g,
      getAriaValueText: _,
      id: v,
      index: y,
      inputRef: b,
      onBlur: x,
      onFocus: C,
      onKeyDown: ee,
      tabIndex: w,
      style: te,
      ...E
    } = e,
    D = S(v),
    {
      active: ie,
      lastUsedThumbIndex: O,
      controlRef: k,
      disabled: oe,
      validation: se,
      format: A,
      handleInputChange: pe,
      inset: F,
      labelId: ge,
      largeStep: I,
      locale: ve,
      max: L,
      min: ye,
      minStepsBetweenValues: xe,
      form: Ce,
      name: z,
      orientation: Te,
      pressedThumbCenterOffsetRef: De,
      pressedThumbIndexRef: V,
      renderBeforeHydration: H,
      setActive: W,
      setIndicatorPosition: ke,
      state: Ae,
      step: je,
      thumbRefs: Me,
      values: G
    } = Ee(),
    Ne = me(),
    Pe = u || oe,
    Fe = G.length > 1,
    K = Te === `vertical`,
    q = Ne === `rtl`,
    {
      setTouched: He,
      setFocused: Ue,
      validationMode: We
    } = ne(),
    Ge = R.useRef(null),
    Ke = R.useRef(null),
    J = R.useRef(!1),
    qe = f(e => {
      J.current || C?.(e);
    }),
    Je = f(e => {
      J.current || x?.(e);
    }),
    Ye = S(),
    Xe = re(),
    Ze = Fe ? Ye : Xe,
    Qe = R.useMemo(() => ({
      inputId: Ze
    }), [Ze]),
    {
      ref: $e,
      index: et
    } = be({
      metadata: Qe
    }),
    Y = Fe ? y ?? et : 0,
    tt = Y === G.length - 1,
    nt = G[Y],
    X = _e(nt, ye, L),
    [rt, it] = R.useState(),
    at = Ie(),
    ot = O >= 0 && O < G.length ? O : -1,
    st = f(() => {
      let e = k.current,
        t = Ge.current;
      if (!e || !t) return;
      let n = t.getBoundingClientRect(),
        r = e.getBoundingClientRect(),
        i = K ? `height` : `width`,
        a = r[i] - n[i],
        o = (n[i] / 2 + a * X / 100) / r[i] * 100,
        s = Number.isFinite(o) ? o : void 0;
      it(s), Y === 0 ? ke(e => [s, e[1]]) : tt && ke(e => [e[0], s]);
    });
  p(() => {
    F && queueMicrotask(st);
  }, [st, F]), p(() => {
    F && st();
  }, [st, F, X]), p(() => {
    if (!F) return;
    let e = k.current,
      t = Ge.current;
    if (!e || !t) return;
    let n = c(e).ResizeObserver;
    if (typeof n != `function`) return;
    let r = new n(st);
    return r.observe(e), r.observe(t), () => {
      r.disconnect();
    };
  }, [k, st, F]);
  let ct = K ? `bottom` : `insetInlineStart`,
    lt = K ? `left` : `top`,
    Z;
  Fe ? ie === Y ? Z = 2 : ot === Y && (Z = 1) : ie === Y && (Z = 1);
  let Q;
  Q = !F && !Number.isFinite(X) ? ce : {
    position: `absolute`,
    [ct]: F ? `var(--position)` : `${X}%`,
    [lt]: `50%`,
    translate: `${(K || !q ? -1 : 1) * 50}% ${(K ? 1 : -1) * 50}%`,
    zIndex: Z,
    ...(F && {
      "--position": `${rt ?? 0}%`,
      visibility: H && at || rt === void 0 ? `hidden` : void 0
    })
  };
  let ut;
  K && (ut = q ? `vertical-rl` : `vertical-lr`);
  let dt = typeof g == `function` ? g(Y) : o,
    ft = d({
      "aria-label": dt,
      "aria-labelledby": s ?? (dt == null ? ge : void 0),
      "aria-describedby": a,
      "aria-orientation": Te,
      "aria-valuenow": nt,
      "aria-valuetext": typeof _ == `function` ? _(he(nt, ve, A), nt, Y) : l ?? Be(G, Y, A, ve),
      disabled: Pe,
      form: Ce,
      id: Ze,
      max: L,
      min: ye,
      name: z,
      onChange(e) {
        pe(e.currentTarget.valueAsNumber, Y, e);
      },
      onFocus(e) {
        let t = J.current;
        J.current = !1, W(Y), Ue(!0), t && e.stopPropagation();
      },
      onBlur(e) {
        if (J.current) {
          e.stopPropagation();
          return;
        }
        W(-1), !Me.current.some(t => T(t, e.relatedTarget)) && (He(!0), Ue(!1), We === `onBlur` && se.commit(Se(nt, Y, ye, L, Fe, G)));
      },
      onKeyDown(e) {
        if (e.defaultPrevented || !ze.has(e.key)) return;
        le.has(e.key) && e.stopPropagation();
        let t = null,
          n = 0,
          r = e.shiftKey ? I : je,
          i = U(nt, je, ye);
        switch (e.key) {
          case M:
            n = 1;
            break;
          case P:
            n = q ? -1 : 1;
            break;
          case fe:
            n = -1;
            break;
          case de:
            n = q ? 1 : -1;
            break;
          case ue:
            r = I, n = 1;
            break;
          case j:
            r = I, n = -1;
            break;
          case `End`:
            t = Fe && Number.isFinite(G[Y + 1]) ? G[Y + 1] - je * xe : L;
            break;
          case N:
            t = Fe && Number.isFinite(G[Y - 1]) ? G[Y - 1] + je * xe : ye;
        }
        if (n !== 0 && (t = Ve(i, r, n, ye, L)), t !== null) {
          let n = e.currentTarget;
          ae(n) || (J.current = !0, n.blur(), n.focus({
            preventScroll: !0,
            focusVisible: !0
          })), pe(t, Y, e), e.preventDefault();
        }
      },
      step: je,
      style: {
        ...ce,
        width: `100%`,
        height: `100%`,
        writingMode: ut
      },
      tabIndex: w,
      type: `range`,
      value: nt ?? ``
    }, e => se.getValidationProps(Pe, e), {
      onFocus: qe,
      onBlur: Je,
      onKeyDown: ee
    }),
    $ = m(Ke, se.inputRef, b);
  return h(`div`, e, {
    state: Ae,
    ref: [t, $e, Ge],
    props: [{
      "data-index": Y,
      children: (0, B.jsxs)(R.Fragment, {
        children: [r, <input ref={$} {...ft} suppressHydrationWarning={!0} />, F && tt && H && (Re ||= (0, B.jsx)(Le, {
          script: ``
        }))]
      }),
      id: D,
      onPointerDown(e) {
        if (Pe) return;
        V.current = Y;
        let t = Oe(e.currentTarget, K);
        De.current = (K ? e.clientY : e.clientX) - t;
      },
      style: Q,
      suppressHydrationWarning: H || void 0
    }, E],
    stateAttributesMapping: we
  });
});
function Ue(e, t, n, r, i, a) {
  let o = {
      visibility: a || n && (r === void 0 || t && i === void 0) ? `hidden` : void 0,
      position: e ? `absolute` : `relative`,
      [e ? `width` : `height`]: `inherit`
    },
    s = `${r ?? 0}%`,
    c = `${(i ?? 0) - (r ?? 0)}%`;
  return n && (o[`--start-position`] = s, s = `var(--start-position)`, t && (o[`--relative-size`] = c, c = `var(--relative-size)`)), o[e ? `bottom` : `insetInlineStart`] = t ? s : 0, o[e ? `height` : `width`] = t ? c : s, o;
}
var We = R.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        style: i,
        ...a
      } = e,
      {
        indicatorPosition: o,
        inset: s,
        max: c,
        min: l,
        orientation: u,
        renderBeforeHydration: d,
        state: f,
        values: p
      } = Ee(),
      m = Ie(),
      g = Ue(u === `vertical`, p.length > 1, s, s ? o[0] : _e(p[0], l, c), s ? o[1] : _e(p[p.length - 1], l, c), s && d && m);
    return h(`div`, e, {
      state: f,
      ref: t,
      props: [{
        "data-base-ui-slider-indicator": d ? `` : void 0,
        style: g,
        suppressHydrationWarning: d || void 0
      }, a],
      stateAttributesMapping: we
    });
  }),
  Ge = t({
    EVOLVE_DEFAULTS: () => X,
    Liquid: () => zt,
    MOVE_DEFAULTS: () => at,
    easingFunction: () => Tt,
    presets: () => vt
  }),
  Ke = e(i(), 1),
  J = (0, R.createContext)(null);
function qe() {
  let e = (0, R.useContext)(J);
  if (!e) throw Error(`<Gooey.Item> must be rendered inside a <Gooey> group.`);
  return e;
}
var Je = `1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 60 -29.5`;
function Ye({
  i: e,
  s: t
}) {
  let n = [<feColorMatrix in={`shape`} type={`matrix`} values={Je} result={`s${e}-bin`} key={`bin`} />],
    r = `s${e}-bin`;
  return t.spread !== 0 && (n.push(<feMorphology in={r} operator={t.spread > 0 ? `erode` : `dilate`} radius={Math.abs(t.spread)} result={`s${e}-er`} key={`er`} />), r = `s${e}-er`), (t.x !== 0 || t.y !== 0) && (n.push(<feOffset in={r} dx={t.x} dy={t.y} result={`s${e}-o`} key={`o`} />), r = `s${e}-o`), t.blur > 0 && (n.push(<feGaussianBlur in={r} stdDeviation={t.blur / 2} result={`s${e}-b`} key={`b`} />), r = `s${e}-b`), n.push(<feComposite in={`s${e}-bin`} in2={r} operator={`out`} result={`s${e}-band`} key={`band`} />, <feFlood floodColor={t.color} result={`s${e}-c`} key={`c`} />, <feComposite in={`s${e}-c`} in2={`s${e}-band`} operator={`in`} result={`s${e}`} key={`f`} />), (0, B.jsx)(B.Fragment, {
    children: n
  });
}
function Xe({
  i: e,
  s: t
}) {
  let n = [],
    r = `shape`;
  return t.spread !== 0 && (n.push(<feColorMatrix in={`shape`} type={`matrix`} values={Je} result={`s${e}-bin`} key={`bin`} />, <feMorphology in={`s${e}-bin`} operator={t.spread > 0 ? `dilate` : `erode`} radius={Math.abs(t.spread)} result={`s${e}-sp`} key={`sp`} />), r = `s${e}-sp`), t.blur > 0 && (n.push(<feGaussianBlur in={r} stdDeviation={t.blur / 2} result={`s${e}-b`} key={`b`} />), r = `s${e}-b`), (t.x !== 0 || t.y !== 0) && (n.push(<feOffset in={r} dx={t.x} dy={t.y} result={`s${e}-o`} key={`o`} />), r = `s${e}-o`), n.push(<feFlood floodColor={t.color} result={`s${e}-c`} key={`c`} />, <feComposite in={`s${e}-c`} in2={r} operator={`in`} result={`s${e}`} key={`f`} />), (0, B.jsx)(B.Fragment, {
    children: n
  });
}
function Ze({
  blur: e,
  contrast: t,
  shadows: n
}) {
  let r = Math.round((.5 - 5 / 12 * t) * 100) / 100;
  return (0, B.jsxs)(B.Fragment, {
    children: [<feGaussianBlur in={`SourceGraphic`} stdDeviation={e} result={`blur`} />, <feColorMatrix in={`blur`} type={`matrix`} values={`1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${t} ${r}`} result={`goo`} />, <feComposite in={`SourceGraphic`} in2={`goo`} operator={`atop`} result={`shape`} />, n.map((e, t) => e.inset ? (0, B.jsx)(Ye, {
      i: t,
      s: e
    }, t) : (0, B.jsx)(Xe, {
      i: t,
      s: e
    }, t)), n.length > 0 && <feMerge>{[n.map((e, t) => e.inset ? -1 : t).filter(e => e >= 0).reverse().map(e => <feMergeNode in={`s${e}`} key={e} />), <feMergeNode in={`shape`} />, n.map((e, t) => e.inset ? <feMergeNode in={`s${t}`} key={t} /> : null)]}</feMerge>]
  });
}
var Qe = typeof window < `u` ? R.useLayoutEffect : R.useEffect;
function $e() {
  let [e, t] = (0, R.useState)(!1);
  return (0, R.useEffect)(() => {
    let e = window.matchMedia(`(prefers-reduced-motion: reduce)`);
    t(e.matches);
    let n = e => t(e.matches);
    return e.addEventListener(`change`, n), () => e.removeEventListener(`change`, n);
  }, []), e;
}
function et(e, t) {
  let n = 0,
    r = 0,
    i = e;
  for (; i && i !== t && t.contains(i);) n += i.offsetLeft, r += i.offsetTop, i = i.offsetParent;
  return {
    x: n,
    y: r
  };
}
function Y(e, t, n) {
  let r = getComputedStyle(e),
    i = e => {
      let r = e.split(` `)[0];
      return r.endsWith(`%`) ? (parseFloat(r) || 0) / 100 * Math.min(t, n) : parseFloat(r) || 0;
    };
  return [i(r.borderTopLeftRadius), i(r.borderTopRightRadius), i(r.borderBottomRightRadius), i(r.borderBottomLeftRadius)];
}
function tt(e) {
  return typeof e == `number` ? [e, e, e, e] : e;
}
function nt(e, t, n, r, i) {
  let [a, o, s, c] = i.map(e => Math.max(0, e)),
    l = Math.min(1, n / Math.max(1e-6, a + o), n / Math.max(1e-6, c + s), r / Math.max(1e-6, a + c), r / Math.max(1e-6, o + s));
  return a *= l, o *= l, s *= l, c *= l, `M ${e + a} ${t} H ${e + n - o} A ${o} ${o} 0 0 1 ${e + n} ${t + o} V ${t + r - s} A ${s} ${s} 0 0 1 ${e + n - s} ${t + r} H ${e + c} A ${c} ${c} 0 0 1 ${e} ${t + r - c} V ${t + a} A ${a} ${a} 0 0 1 ${e + a} ${t} Z`;
}
var X = {
    massStiffness: 320,
    massDamping: 17,
    sizeStiffness: 170,
    sizeDamping: 11.5,
    radiusStiffness: 900,
    radiusDamping: 60,
    contentBlur: 7,
    roundness: 1,
    cornerDuration: 460,
    cornerDelay: 0,
    cornerEase: `cubic-bezier(0.3, 1.05, 0.4, 1)`,
    anticipation: 90,
    travel: 32
  },
  rt = new Map();
function it(e) {
  let t = rt.get(e);
  if (t) return t;
  let n = /cubic-bezier\(([^)]+)\)/.exec(e);
  if (n) {
    let [e, r, i, a] = n[1].split(`,`).map(Number);
    t = t => {
      if (t <= 0) return 0;
      if (t >= 1) return 1;
      let n = 0,
        o = 1;
      for (let r = 0; r < 24; r++) {
        let r = (n + o) / 2;
        3 * r * (1 - r) * (1 - r) * e + 3 * r * r * (1 - r) * i + r ** 3 < t ? n = r : o = r;
      }
      let s = (n + o) / 2;
      return 3 * s * (1 - s) * (1 - s) * r + 3 * s * s * (1 - s) * a + s ** 3;
    };
  } else t = e === `ease-in-out` ? it(`cubic-bezier(0.42, 0, 0.58, 1)`) : e => Math.min(1, Math.max(0, e));
  return rt.set(e, t), t;
}
var at = {
    stiffness: 380,
    damping: 18,
    stretch: .18,
    tail: .46
  },
  ot = 3;
function st(e) {
  return Math.max(0, e.cornerDelay) + Math.max(1, e.cornerDuration);
}
function ct(e, t, n) {
  return Math.max(0, Math.min(e, Math.min(t, n) / 2));
}
function lt(e, t, n, r, i, a) {
  let o = t + (r * (n - e) - i * t) * a;
  return [e + o * a, o];
}
function Z(e, t, n, r, i, a) {
  let o = Math.max(1, Math.ceil(a * 60)),
    s = a / o,
    c = e,
    l = t;
  for (; o-- > 0;) {
    let e = lt(c, l, n, r, i, s);
    c = e[0], l = e[1];
  }
  return [c, l];
}
function Q(e, t) {
  return Math.round(e / t) * t;
}
var ut = `http://www.w3.org/2000/svg`,
  dt = 0;
function ft(e) {
  let t = Math.min(1, Math.max(0, e));
  return t * t * (3 - 2 * t);
}
function $(e, t) {
  let n = document.createElementNS(ut, e);
  for (let [e, r] of Object.entries(t)) n.setAttribute(e, r);
  return n;
}
var pt = class {
  constructor(e) {
    this.getGroup = e, this.gooBlur = 6, this.items = new Set(), this.awake = !1, this.clean = 0, this.raf = 0, this.sourcesReady = !1, this.mo = null, this.interval = null, this.removeListeners = [], this.wake = () => {
      this.clean = 0, !(this.awake || this.items.size === 0) && (this.awake = !0, this.raf = requestAnimationFrame(this.loop));
    }, this.lastNow = 0, this.frameEma = 17, this.loop = e => {
      if (this.items.size === 0) {
        this.awake = !1, this.lastNow = 0;
        return;
      }
      let t = this.lastNow ? Math.min(.25, Math.max(1 / 240, (e - this.lastNow) / 1e3)) : 1 / 60;
      if (this.lastNow && (this.frameEma += (Math.min(e - this.lastNow, 80) - this.frameEma) * .12), this.lastNow = e, this.measureAll(t) ? this.clean = 0 : this.clean++, this.clean > 30) {
        this.awake = !1, this.lastNow = 0;
        return;
      }
      this.raf = requestAnimationFrame(this.loop);
    };
  }
  add(e) {
    let t = {
      ...e,
      baseW: e.target.offsetWidth || 1,
      baseH: e.target.offsetHeight || 1,
      radiusPx: this.resolveRadius(e),
      last: null,
      frame: null,
      lastBlend: null,
      melt: null,
      sim: null,
      motionEnv: 0,
      tPrev: null,
      tvx: 0,
      tvy: 0,
      lead01: 0,
      cornerT0: 0,
      lastTargetMoveT: 0,
      lastTargetSize: null,
      morphActive: !1,
      round01: 0,
      tailEl: null,
      tailX: 0,
      tailY: 0,
      tailVx: 0,
      tailVy: 0,
      tailR: 0,
      contentBlurred: !1,
      lastPaint: null,
      lastTail: null,
      lastBi: e.blobInset ?? 0,
      biSmooth: null,
      meltFade: 0,
      meltRel: null,
      meltOp: 1,
      meltPhase: 0,
      meltPrev: null,
      meltGeom: null,
      meltWroteAt: 0,
      meltAxis: null,
      meltHostLast: null,
      ro: new ResizeObserver(() => {
        t.baseW = e.target.offsetWidth || 1, t.baseH = e.target.offsetHeight || 1, t.radiusPx = this.resolveRadius(e), this.syncMelt(t), this.wake();
      })
    };
    if (t.ro.observe(e.target), this.items.add(t), this.refreshMelt(t), e.dynamics?.move) {
      let n = $(`circle`, {
        cx: `0`,
        cy: `0`,
        r: `0`
      });
      e.blob.parentNode?.insertBefore(n, e.blob), t.tailEl = n;
    }
    return this.ensureSources(), this.measureAll(), this.wake(), () => {
      t.ro.disconnect(), this.items.delete(t), this.clearBlend(t), t.contentBlurred && t.target.style.removeProperty(`filter`), t.tailEl?.remove();
    };
  }
  dispose() {
    cancelAnimationFrame(this.raf), this.mo?.disconnect(), this.removeListeners.forEach(e => e()), this.removeListeners = [], this.interval && clearInterval(this.interval), this.items.forEach(e => e.ro.disconnect()), this.items.clear(), this.awake = !1, this.sourcesReady = !1;
  }
  resolveRadius(e) {
    return e.radius == null ? Y(e.target, e.target.offsetWidth, e.target.offsetHeight)[0] : e.radius;
  }
  syncMelt(e) {
    if (!e.blend) return;
    let t = e.melt,
      n = e.target,
      r = n instanceof HTMLImageElement ? [n] : Array.from(n.querySelectorAll(`img`));
    if (!(t && t.entries.length === r.length && t.entries.every((e, t) => e.el === r[t]))) {
      this.refreshMelt(e);
      return;
    }
    for (let e of t.entries) e.radiusPx = Y(e.el, e.el.offsetWidth, e.el.offsetHeight)[0], e.lastGeom = null;
  }
  refreshMelt(e) {
    let t = e.blend;
    if (!t) return;
    let n = t.host;
    for (; n.firstChild;) n.removeChild(n.firstChild);
    let r = e.target,
      i = r instanceof HTMLImageElement ? [r] : Array.from(r.querySelectorAll(`img`)),
      a = `gooey-melt-${++dt}`,
      o = String(dt * 7 % 100),
      s = t.zone ?? this.gooBlur * 2.2 + 4,
      c = Math.max(.2, t.warpFreq ?? 1),
      l = Math.min(.3, Math.max(.01, c / (s * 1.1))).toFixed(4),
      u = String(Math.max(1, Math.round(t.detail ?? 2))),
      d = t.warpStyle ?? `fractalNoise`,
      f = $(`defs`, {}),
      p = $(`radialGradient`, {
        id: `${a}-g`
      });
    p.append($(`stop`, {
      offset: `0%`,
      "stop-color": `#fff`
    }), $(`stop`, {
      offset: `35%`,
      "stop-color": `#fff`,
      "stop-opacity": `0.95`
    }), $(`stop`, {
      offset: `60%`,
      "stop-color": `#fff`,
      "stop-opacity": `0.6`
    }), $(`stop`, {
      offset: `82%`,
      "stop-color": `#fff`,
      "stop-opacity": `0.25`
    }), $(`stop`, {
      offset: `100%`,
      "stop-color": `#fff`,
      "stop-opacity": `0`
    })), f.append(p);
    let m = e => {
        let t = $(`filter`, {
            id: `${a}-f${e}`,
            filterUnits: `userSpaceOnUse`,
            x: `0`,
            y: `0`,
            width: `0`,
            height: `0`,
            "color-interpolation-filters": `sRGB`
          }),
          n = $(`feTurbulence`, {
            type: d,
            baseFrequency: l,
            numOctaves: u,
            seed: o,
            result: `noise0`
          });
        t.append(n);
        let r = $(`feOffset`, {
            in: `noise0`,
            dx: `0`,
            dy: `0`,
            result: `noise`
          }),
          i = $(`feDisplacementMap`, {
            in: `SourceGraphic`,
            in2: `noise`,
            scale: `0`,
            xChannelSelector: `R`,
            yChannelSelector: `G`,
            result: `disp`
          });
        t.append(r);
        let s = $(`feGaussianBlur`, {
            in: `disp`,
            stdDeviation: `0`,
            result: `soft`
          }),
          c = $(`feColorMatrix`, {
            in: `soft`,
            type: `saturate`,
            values: `1.2`,
            result: `col`
          }),
          p = $(`feColorMatrix`, {
            in: `noise`,
            type: `matrix`,
            values: `0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0 1`,
            result: `erode`
          }),
          m = $(`feComposite`, {
            in: `col`,
            in2: `erode`,
            operator: `in`
          });
        t.append(i, s, c, p, m);
        let h = $(`mask`, {
            id: `${a}-m${e}`,
            maskUnits: `userSpaceOnUse`,
            x: `-10000`,
            y: `-10000`,
            width: `20000`,
            height: `20000`
          }),
          g = $(`circle`, {
            cx: `0`,
            cy: `0`,
            r: `0`,
            fill: `url(#${a}-g)`
          });
        h.append(g), f.append(t, h);
        let _ = $(`g`, {});
        _.setAttribute(`mask`, `url(#${a}-m${e})`), _.setAttribute(`opacity`, `0`);
        let v = $(`g`, {});
        v.setAttribute(`filter`, `url(#${a}-f${e})`);
        let y = $(`g`, {});
        return v.append(y), _.append(v), {
          filter: t,
          disp: i,
          blurEl: s,
          erode: p,
          turb: n,
          noiseOffset: r,
          circle: g,
          gl: _,
          shift: y
        };
      },
      h = Array.from({
        length: ot
      }, (e, t) => m(`l${t}`));
    n.append(f, ...h.map(e => e.gl));
    let g = i.map((e, t) => {
      let n = $(`pattern`, {
          id: `${a}-p${t}`,
          patternUnits: `userSpaceOnUse`,
          x: `0`,
          y: `0`,
          width: `1`,
          height: `1`
        }),
        r = $(`image`, {
          width: `1`,
          height: `1`,
          preserveAspectRatio: `xMidYMid slice`
        });
      return r.setAttribute(`href`, e.currentSrc || e.src), n.append(r), f.append(n), {
        el: e,
        rects: h.map(e => {
          let n = $(`rect`, {
            x: `0`,
            y: `0`,
            width: `0`,
            height: `0`,
            fill: `url(#${a}-p${t})`
          });
          return e.shift.append(n), n;
        }),
        pattern: n,
        image: r,
        radiusPx: Y(e, e.offsetWidth, e.offsetHeight)[0],
        measured: null,
        lastGeom: null,
        lastHole: null
      };
    });
    n.setAttribute(`opacity`, `0`), e.melt = {
      layers: h,
      entries: g
    };
  }
  clearBlend(e) {
    e.blend?.host.setAttribute(`opacity`, `0`), e.meltHostLast = null, e.meltWroteAt = 0, e.meltAxis = null;
    for (let t of e.melt?.layers ?? []) t.last = void 0;
    for (let t of e.melt?.entries ?? []) t.el.style.removeProperty(`mask-image`), t.el.style.removeProperty(`-webkit-mask-image`), t.lastHole = null, t.lastGeom = null;
  }
  measureAll(e = 1 / 60) {
    let t = this.getGroup();
    if (!t || this.items.size === 0) return !1;
    let n = t.getBoundingClientRect(),
      r = !1;
    for (let e of this.items) {
      let t = e.target.getBoundingClientRect();
      e.frame = {
        x: t.left - n.left,
        y: t.top - n.top,
        w: t.width,
        h: t.height
      };
    }
    for (let e of this.items) if (!(!e.blend || !e.melt)) for (let t of e.melt.entries) {
      let e = t.el.getBoundingClientRect();
      t.measured = {
        x: e.left - n.left,
        y: e.top - n.top,
        w: e.width,
        h: e.height,
        ow: t.el.offsetWidth,
        oh: t.el.offsetHeight
      };
    }
    for (let t of this.items) this.writeBlob(t, e) && (r = !0);
    for (let t of this.items) t.blend && this.writeBlend(t, e) && (r = !0);
    return r;
  }
  effectiveInset(e, t) {
    let n = e.blobInset ?? 0,
      r = e.bridgeGrow ?? 0;
    if (r > 0 && e.frame) {
      let t = e.frame,
        i = Math.max(14, this.gooBlur * 3),
        a = 1 / 0;
      for (let n of this.items) {
        if (n === e || !n.frame) continue;
        let r = n.frame,
          i = Math.max(r.x - (t.x + t.w), t.x - (r.x + r.w), 0),
          o = Math.max(r.y - (t.y + t.h), t.y - (r.y + r.h), 0),
          s = Math.hypot(i, o);
        s < a && (a = s);
      }
      a < i && (n -= r * ft(1 - a / i));
    }
    return r <= 0 ? (e.biSmooth = n, n) : (e.biSmooth === null ? e.biSmooth = n : e.biSmooth += (n - e.biSmooth) * Math.min(1, t * 18), e.biSmooth);
  }
  writeBlob(e, t) {
    let n = e.frame,
      r = e.dynamics;
    if (!r || !r.evolve && !r.move) {
      let r = this.effectiveInset(e, t),
        i = e.last,
        a = !i || Math.abs(i.x - n.x) >= .05 || Math.abs(i.y - n.y) >= .05 || Math.abs(i.w - n.w) >= .05 || Math.abs(i.h - n.h) >= .05,
        o = Math.abs(r - e.lastBi) >= .05;
      if (!a && !o) return !1;
      if (e.blob.style.transform = `translate(${n.x + r}px, ${n.y + r}px)`, a || o) {
        let t = Math.max(0, n.w - r * 2),
          i = Math.max(0, n.h - r * 2);
        e.blob.setAttribute(`width`, String(t)), e.blob.setAttribute(`height`, String(i));
        let a = e.baseW > 0 ? n.w / e.baseW : 1;
        e.blob.setAttribute(`rx`, String(ct(e.radiusPx * a - r, t, i)));
      }
      return e.lastPaint = null, e.last = n, e.lastBi = r, !0;
    }
    let i = n.x + n.w / 2,
      a = n.y + n.h / 2,
      o;
    if (r.evolve) {
      let t = e.target.offsetWidth,
        n = e.target.offsetHeight;
      o = Y(e.target, t, n)[0];
    } else o = e.radiusPx * (e.baseW > 0 ? n.w / e.baseW : 1);
    e.sim ||= {
      cx: i,
      cy: a,
      w: n.w,
      h: n.h,
      r: o,
      vcx: 0,
      vcy: 0,
      vw: 0,
      vh: 0,
      vr: 0
    };
    let s = e.sim;
    if (r.move) {
      let e = r.moveOpts ?? at;
      [s.cx, s.vcx] = Z(s.cx, s.vcx, i, e.stiffness, e.damping, t), [s.cy, s.vcy] = Z(s.cy, s.vcy, a, e.stiffness, e.damping, t);
    } else if (r.evolve) {
      let n = r.evolveOpts ?? X,
        o = e.tPrev ? (i - e.tPrev.cx) / t : 0,
        c = e.tPrev ? (a - e.tPrev.cy) / t : 0;
      e.tvx = e.tvx * .7 + o * .3, e.tvy = e.tvy * .7 + c * .3, e.tPrev = {
        cx: i,
        cy: a
      };
      let l = i - s.cx,
        u = a - s.cy,
        d = Math.hypot(l, u),
        f = Math.hypot(e.tvx, e.tvy),
        p = 0,
        m = 0;
      f > .001 ? (p = e.tvx / f, m = e.tvy / f) : d > .001 && (p = l / d, m = u / d);
      let h = Math.max(0, n.anticipation) / 1e3,
        g = h > 0 ? 1 - Math.exp(-t / h) : 1;
      e.lead01 += (+(d > .5) - e.lead01) * g;
      let _ = Math.min(Math.max(0, n.travel) * e.lead01, d),
        v = p * _,
        y = m * _;
      [s.cx, s.vcx] = Z(s.cx, s.vcx, i + v, n.massStiffness, n.massDamping, t), [s.cy, s.vcy] = Z(s.cy, s.vcy, a + y, n.massStiffness, n.massDamping, t);
    } else s.cx = i, s.cy = a, s.vcx = 0, s.vcy = 0;
    if (r.evolve) {
      let e = r.evolveOpts ?? X;
      [s.w, s.vw] = Z(s.w, s.vw, n.w, e.sizeStiffness, e.sizeDamping, t), [s.h, s.vh] = Z(s.h, s.vh, n.h, e.sizeStiffness, e.sizeDamping, t), [s.r, s.vr] = Z(s.r, s.vr, o, e.radiusStiffness, e.radiusDamping, t);
    } else s.w = n.w, s.h = n.h, s.r = o, s.vw = 0, s.vh = 0, s.vr = 0;
    let c = ``,
      l = Math.hypot(s.vcx, s.vcy);
    if (r.move && l > 2) {
      let e = Math.min((r.moveOpts ?? at).stretch, l * 6e-4),
        t = Math.round(Math.atan2(s.vcy, s.vcx) * 100) / 100;
      c += ` rotate(${t}rad) scale(${(1 + e).toFixed(3)}, ${(1 / (1 + e * .65)).toFixed(3)}) rotate(${-t}rad)`;
    }
    if (r.move && e.tailEl) {
      let n = e => Math.round(e * 10) / 10;
      e.tailR === 0 && Math.abs(e.tailX) < .001 && Math.abs(e.tailY) < .001 && (e.tailX = s.cx, e.tailY = s.cy), [e.tailX, e.tailVx] = Z(e.tailX, e.tailVx, s.cx, 170, 22, t), [e.tailY, e.tailVy] = Z(e.tailY, e.tailVy, s.cy, 170, 22, t);
      let i = e.blobInset ?? 0,
        a = Math.max(4, Math.min(s.w, s.h) - i * 2),
        o = e.tailX - s.cx,
        c = e.tailY - s.cy,
        u = Math.hypot(o, c),
        d = a * .8;
      u > d && (e.tailX = s.cx + o / u * d, e.tailY = s.cy + c / u * d);
      let f = Math.min(a * (r.moveOpts ?? at).tail, Math.max(0, (l - 20) * .03));
      if (e.tailR += (f - e.tailR) * Math.min(1, t * 10), e.tailR < .3) e.lastTail !== `hidden` && (e.tailEl.setAttribute(`r`, `0`), e.lastTail = `hidden`);else {
        let t = `${n(e.tailX)},${n(e.tailY)},${n(e.tailR)}`;
        t !== e.lastTail && (e.tailEl.setAttribute(`cx`, String(n(e.tailX))), e.tailEl.setAttribute(`cy`, String(n(e.tailY))), e.tailEl.setAttribute(`r`, String(n(e.tailR))), e.lastTail = t);
      }
    }
    let u = Math.max(0, s.r),
      d = !1;
    if (r.evolve) {
      let i = r.evolveOpts ?? X,
        a = performance.now(),
        c = e.lastTargetSize;
      (c ? Math.abs(n.w - c.w) + Math.abs(n.h - c.h) : 0) > .5 ? (e.morphActive ||= (e.cornerT0 = a, !0), e.lastTargetMoveT = a) : e.morphActive && a - e.lastTargetMoveT > 150 && a - e.cornerT0 > st(i) && (e.morphActive = !1), e.lastTargetSize = {
        w: n.w,
        h: n.h
      };
      let l = st(i),
        f = 0;
      if (e.cornerT0 > 0 && i.roundness > 0 && a - e.cornerT0 < l) {
        let t = Math.min(1, Math.max(0, (a - e.cornerT0 - Math.max(0, i.cornerDelay)) / Math.max(1, i.cornerDuration))),
          n = it(i.cornerEase)(t);
        f = Math.min(1, Math.max(0, (1 - n) * i.roundness));
      }
      let p = t * 8;
      if (e.round01 += Math.max(-p, Math.min(p, f - e.round01)), d = e.cornerT0 > 0 && a - e.cornerT0 < l + 80 || Math.abs(f - e.round01) > .004 || e.round01 > .004, e.round01 > .001) {
        let t = Math.max(Math.min(s.w, s.h) / 2, u);
        u += (t - u) * e.round01, u = Math.max(u, o);
      }
      let m = Math.min(1, (Math.hypot(s.vcx, s.vcy) + Math.abs(s.vw) + Math.abs(s.vh)) / 420);
      e.motionEnv = Math.max(m, e.motionEnv - t * 1.9);
      let h = e.motionEnv,
        g = h * h * Math.max(0, i.contentBlur);
      g > .3 ? (e.target.style.filter = `blur(${g.toFixed(1)}px)`, e.contentBlurred = !0) : e.contentBlurred &&= (e.target.style.removeProperty(`filter`), !1);
    }
    let f = e.blobInset ?? 0,
      p = Math.max(0, s.w - f * 2),
      m = Math.max(0, s.h - f * 2),
      h = {
        t: `translate(${s.cx - s.w / 2 + f}px, ${s.cy - s.h / 2 + f}px)` + c,
        w: String(p),
        h: String(m),
        rx: String(ct(u - f, p, m))
      },
      g = e.lastPaint;
    return (!g || g.t !== h.t) && (e.blob.style.transform = h.t), (!g || g.w !== h.w) && e.blob.setAttribute(`width`, h.w), (!g || g.h !== h.h) && e.blob.setAttribute(`height`, h.h), (!g || g.rx !== h.rx) && e.blob.setAttribute(`rx`, h.rx), e.lastPaint = h, e.last = n, !(Math.abs(s.cx - i) < .05 && Math.abs(s.cy - a) < .05 && Math.abs(s.w - n.w) < .05 && Math.abs(s.h - n.h) < .05 && Math.abs(s.r - o) < .05 && l < 1 && Math.abs(s.vw) + Math.abs(s.vh) + Math.abs(s.vr) < 1 && e.motionEnv < .01 && e.tailR < .3 && !d);
  }
  writeBlend(e, t) {
    let n = e.frame,
      r = e.blend,
      i = e.melt;
    if (!i) return !1;
    let a = r.range ?? Math.max(10, this.gooBlur * 2.5),
      o = 1 / 0,
      s = null;
    for (let t of this.items) {
      if (t === e || !t.frame) continue;
      let r = t.frame,
        i = Math.max(r.x - (n.x + n.w), n.x - (r.x + r.w), 0),
        a = Math.max(r.y - (n.y + n.h), n.y - (r.y + r.h), 0),
        c = Math.hypot(i, a);
      c < o && (o = c, s = r);
    }
    let c = 0;
    if (s && o < a && r.active !== !1) {
      let e = ft(1 - o / a),
        t = Math.max(0, Math.min(1, r.strength ?? 1));
      c = e ** 1.25 * t;
    }
    if (c >= e.meltFade) e.meltFade += (c - e.meltFade) * Math.min(1, t * 16), e.meltRel = null;else if (c > .02) e.meltFade += (c - e.meltFade) * Math.min(1, t * 6), e.meltRel = null;else {
      let n = Math.max(40, Math.max(r.releaseMs ?? 240, r.fadeMs ?? r.releaseMs ?? 240));
      e.meltRel ||= {
        from: e.meltFade,
        t: 0
      };
      let i = e.meltRel;
      i.t += t * 1e3;
      let a = Math.min(1, i.t / n);
      e.meltFade = c + (i.from - c) * (1 - a) * (1 - a);
    }
    c === 0 && e.meltFade < .001 && (e.meltFade = 0);
    let l = e.meltFade;
    if (l <= .001) return e.lastBlend && e.lastBlend.s !== 0 ? (this.clearBlend(e), e.lastBlend = {
      cx: 0,
      cy: 0,
      s: 0,
      d: 0
    }, !0) : !1;
    let u = s;
    if ((!u || o >= a) && e.meltGeom && (u = e.meltGeom.o), !u) return !1;
    let d = n.x + n.w < u.x ? (n.x + n.w + u.x) / 2 : u.x + u.w < n.x ? (u.x + u.w + n.x) / 2 : (Math.max(n.x, u.x) + Math.min(n.x + n.w, u.x + u.w)) / 2,
      f = n.y + n.h < u.y ? (n.y + n.h + u.y) / 2 : u.y + u.h < n.y ? (u.y + u.h + n.y) / 2 : (Math.max(n.y, u.y) + Math.min(n.y + n.h, u.y + u.h)) / 2;
    e.meltGeom = {
      o: {
        ...u
      }
    };
    let p = e.meltRel,
      m = Math.max(40, r.fadeMs ?? r.releaseMs ?? 240),
      h = p ? Math.min(1, p.t / m) : 0,
      g = p ? (1 - h) * (1 - h) : 1,
      _ = p ? Math.min(1, p.from * (.55 + .45 * (1 - h))) : l,
      v = _ * _ * (3 - 2 * _);
    e.meltOp = g < e.meltOp ? g : e.meltOp + (g - e.meltOp) * Math.min(1, t * 16);
    let y = r.zone ?? this.gooBlur * 2.2 + 4,
      b = Math.min(Math.min(n.w, n.h) * .9, y * (.7 + .6 * _)),
      x = Math.max(0, r.flowSpeed ?? 26),
      S = e.meltPrev,
      C = S ? Math.hypot(n.x - S.x, n.y - S.y) / Math.max(.001, t) : 0;
    e.meltPrev = {
      x: n.x,
      y: n.y
    };
    let ee = Math.min(t, 1 / 24) * x * .12 * Math.min(1, C / 40);
    e.meltPhase += ee;
    let w = e.lastBlend;
    if (ee < 1e-4 && w && Math.abs(w.cx - d) < .05 && Math.abs(w.cy - f) < .05 && Math.abs(w.s - l) < .005 && Math.abs(w.d - b) < .05) return !1;
    let te = performance.now();
    if (this.frameEma > 20 && te - e.meltWroteAt < 35) return !0;
    e.meltWroteAt = te;
    let T = e => Math.round(e * 10) / 10,
      E = r.host,
      D = i.layers.length,
      ne = u.x + u.w / 2,
      re = u.y + u.h / 2,
      ie = ne - d,
      O = re - f,
      ae = Math.hypot(ie, O) || 1,
      k = ie / ae,
      oe = O / ae,
      se = Math.max(0, r.gravity ?? 25) * v,
      ce = T(Math.atan2(oe, k) * 180 / Math.PI),
      A = e => Math.round(e * 1e3) / 1e3,
      le = Math.max(0, Math.min(1, r.taper ?? .65)),
      j = Math.max(.2, r.warpFreq ?? 1),
      M = r.zone ?? this.gooBlur * 2.2 + 4,
      ue = Math.min(.3, Math.max(.01, j / (M * 1.1))),
      de = (ue * .35).toFixed(4),
      N = (ue * 1.6).toFixed(4),
      P = Math.abs(k),
      fe = Math.abs(oe),
      pe = e.meltAxis === `x` ? fe > P * 1.25 ? `y` : `x` : e.meltAxis === `y` ? P > fe * 1.25 ? `x` : `y` : P >= fe ? `x` : `y`;
    e.meltAxis = pe;
    let me = pe === `x` ? `${de} ${N}` : `${N} ${de}`,
      F = d + k * b * .05,
      he = f + oe * b * .05,
      ge = i.layers.map((t, n) => {
        let i = D > 1 ? n / (D - 1) : 1,
          a = .06 + .94 * i ** 1.7,
          o = .2 + .8 * i,
          s = .7 + .45 * i,
          c = 6 * Math.sin(e.meltPhase * s),
          l = 2 * Math.sin(e.meltPhase * s * 1.31 + 1.7);
        return [String(Q(r.warp * o * v, .25)), String(Q(r.blur * a * v, .25)), String(Q(k * c - oe * l, .5)), String(Q(oe * c + k * l, .5)), String(Q(F, .5)), String(Q(he, .5)), String(Q(b * (1.15 - .75 * i), .5)), String(Q(Math.min(1, v * (.75 + .25 * i)), .02))];
      }),
      I = d - k * b,
      _e = f - oe * b,
      ve = Math.min(.6, se / Math.max(8, 2 * b)) * (.5 + le),
      L = e => {
        let t = A(1 + ve * e),
          n = A(1 / (1 + ve * .35 * e));
        return `translate(${T(I)}, ${T(_e)}) rotate(${ce}) scale(${t}, ${n}) rotate(${-ce}) translate(${T(-I)}, ${T(-_e)})`;
      },
      ye = Math.max(0, Math.min(1, r.mix ?? 0)) * v,
      be = e => {
        if (e < .002) return `0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0 1`;
        let t = A(1 + 4 * e);
        return `0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  ${t} 0 0 0 ${A(1 - t * (.38 + .12 * e))}`;
      },
      R = r.blur * 2.5 + r.warp + se * .5 + 8,
      xe = Q(b * 1.15 + R, 8),
      Se = String(Q(F - xe, 8)),
      Ce = String(Q(he - xe, 8)),
      z = String(Q(xe * 2, 8));
    i.layers.forEach((e, t) => {
      let n = D > 1 ? t / (D - 1) : 1,
        r = ge[t],
        i = L(.4 + .6 * n),
        a = be(Q(ye * (.15 + .85 * n), .01)),
        o = r.join(`,`) + `|` + me + `|` + i + `|` + a + `|` + Se + `,` + Ce + `,` + z;
      e.last !== o && (e.last = o, e.filter.setAttribute(`x`, Se), e.filter.setAttribute(`y`, Ce), e.filter.setAttribute(`width`, z), e.filter.setAttribute(`height`, z), e.disp.setAttribute(`scale`, r[0]), e.blurEl.setAttribute(`stdDeviation`, r[1]), e.turb.getAttribute(`baseFrequency`) !== me && e.turb.setAttribute(`baseFrequency`, me), e.noiseOffset.setAttribute(`dx`, r[2]), e.noiseOffset.setAttribute(`dy`, r[3]), e.circle.setAttribute(`cx`, r[4]), e.circle.setAttribute(`cy`, r[5]), e.circle.setAttribute(`r`, r[6]), e.gl.setAttribute(`opacity`, r[7]), e.shift.setAttribute(`transform`, i), e.erode.setAttribute(`values`, a));
    });
    let we = n.x + n.w / 2,
      Te = n.y + n.h / 2,
      Ee = Math.atan2(f - Te, d - we),
      B = r.pull * _,
      De = A(e.meltOp).toString() + `|translate(${T(Math.cos(Ee) * B)}px, ${T(Math.sin(Ee) * B)}px)`;
    if (De !== e.meltHostLast) {
      e.meltHostLast = De;
      let t = De.split(`|`);
      E.setAttribute(`opacity`, t[0]), E.style.transform = t[1];
    }
    let V = Math.max(10, this.gooBlur * 2.5),
      Oe = s ? o < V ? ft(1 - o / V) : 0 : l,
      H = Q(Math.max(0, 1 - Math.min(l, Oe) * 2.2), .05).toFixed(2),
      U = (Math.round((1 + 2 * Number(H)) / 3 * 20) / 20).toFixed(2);
    for (let e of i.entries) {
      let t = e.measured;
      if (!t || t.w < 1 || t.h < 1) continue;
      let n = t.x,
        r = t.y,
        i = (t.ow || t.w) / t.w,
        a = `${T(n)},${T(r)},${T(t.w)},${T(t.h)},${T(ct(e.radiusPx / (i || 1), t.w, t.h))}`;
      if (a !== e.lastGeom) {
        e.lastGeom = a;
        for (let a of e.rects) a.setAttribute(`x`, String(T(n))), a.setAttribute(`y`, String(T(r))), a.setAttribute(`width`, String(T(t.w))), a.setAttribute(`height`, String(T(t.h))), a.setAttribute(`rx`, String(T(ct(e.radiusPx / (i || 1), t.w, t.h))));
        e.pattern.setAttribute(`x`, String(T(n))), e.pattern.setAttribute(`y`, String(T(r))), e.pattern.setAttribute(`width`, String(T(t.w))), e.pattern.setAttribute(`height`, String(T(t.h))), e.image.setAttribute(`width`, String(T(t.w))), e.image.setAttribute(`height`, String(T(t.h)));
      }
      let o = (t.oh || t.h) / t.h;
      if (Math.hypot(Math.max(n - d, d - (n + t.w), 0), Math.max(r - f, f - (r + t.h), 0)) > b) {
        e.lastHole !== null && (e.lastHole = null, e.el.style.removeProperty(`mask-image`), e.el.style.removeProperty(`-webkit-mask-image`));
        continue;
      }
      let s = t.ow || t.w,
        c = t.oh || t.h,
        l = Math.min(s, c) / 2,
        u = (d - n) * i,
        p = (f - r) * o,
        m = u - s / 2,
        h = p - c / 2,
        g = Math.hypot(m, h);
      g < l && (g < .001 ? (m = k, h = oe) : (m /= g, h /= g), u = s / 2 + m * l, p = c / 2 + h * l);
      let _ = Math.round(u),
        v = Math.round(p),
        y = Q(Math.min(b * Math.min(i, o), l), 1),
        x = T(Math.max(Math.hypot(_, v), Math.hypot(_ - s, v), Math.hypot(_, v - c), Math.hypot(_ - s, v - c))) + 2,
        S = `radial-gradient(circle at ${_}px ${v}px, rgba(255,255,255,${H}) ${T(y * .32)}px, rgba(255,255,255,${U}) ${T(y * .55)}px, #fff ${T(y * .8)}px, #fff ${x}px)`;
      S !== e.lastHole && (e.lastHole = S, e.el.style.setProperty(`mask-image`, S), e.el.style.setProperty(`-webkit-mask-image`, S));
    }
    return e.lastBlend = {
      cx: d,
      cy: f,
      s: l,
      d: b
    }, !0;
  }
  ensureSources() {
    if (this.sourcesReady) return;
    let e = this.getGroup();
    if (!e) return;
    this.sourcesReady = !0, this.mo = new MutationObserver(e => {
      for (let t of e) {
        let e = t.target;
        if (!(e instanceof Element) || !e.closest(`[data-gooey-svg], [data-gooey-overlay]`)) {
          this.wake();
          return;
        }
      }
    }), this.mo.observe(e, {
      attributes: !0,
      childList: !0,
      subtree: !0,
      attributeFilter: [`style`, `class`]
    });
    let t = () => this.wake();
    for (let n of [`transitionrun`, `animationstart`, `pointerdown`]) e.addEventListener(n, t, !0), this.removeListeners.push(() => e.removeEventListener(n, t, !0));
    window.addEventListener(`scroll`, t, {
      capture: !0,
      passive: !0
    }), this.removeListeners.push(() => window.removeEventListener(`scroll`, t, !0)), this.interval = setInterval(() => {
      !this.awake && this.measureAll() && this.wake();
    }, 300);
  }
};
function mt(e, t) {
  let n = [],
    r = 0,
    i = ``;
  for (let a of e) a === `(` ? r++ : a === `)` && r--, r === 0 && (t === `,` ? a === `,` : /\s/.test(a)) ? (i.trim() && n.push(i.trim()), i = ``) : i += a;
  return i.trim() && n.push(i.trim()), n;
}
var ht = /^[+-]?(\d+\.?\d*|\.\d+)(px)?$/;
function gt(e) {
  if (!e || e.trim() === `` || e.trim() === `none`) return [];
  let t = [];
  for (let n of mt(e, `,`)) {
    let e = mt(n, ` `);
    if (e.length === 0) continue;
    let r = e.includes(`inset`),
      i = [],
      a = [];
    for (let t of e) t !== `inset` && (i.length < 4 && ht.test(t) ? i.push(parseFloat(t)) : a.push(t));
    let [o = 0, s = 0, c = 0, l = 0] = i;
    t.push({
      x: o,
      y: s,
      blur: c,
      spread: l,
      color: a.join(` `) || `rgba(0, 0, 0, 0.35)`,
      inset: r
    });
  }
  return t;
}
var _t = (0, R.forwardRef)(function ({
    blur: e = 6,
    contrast: t = 18,
    fill: n = `#fff`,
    shadow: r,
    filterPadding: i = 24,
    className: a,
    style: o,
    children: s,
    ...c
  }, l) {
    let u = (0, R.useRef)(null),
      [d, f] = (0, R.useState)(null),
      [p, m] = (0, R.useState)(null),
      [h, g] = (0, R.useState)({
        w: 0,
        h: 0
      }),
      _ = (0, R.useCallback)(e => {
        u.current = e, typeof l == `function` ? l(e) : l && (l.current = e);
      }, [l]),
      v = `gooey-${(0, R.useId)().replace(/[^a-zA-Z0-9_-]/g, ``)}`,
      y = (0, R.useMemo)(() => gt(r), [r]);
    Qe(() => {
      let e = u.current;
      if (!e) return;
      let t = () => g(t => t.w === e.offsetWidth && t.h === e.offsetHeight ? t : {
        w: e.offsetWidth,
        h: e.offsetHeight
      });
      t();
      let n = new ResizeObserver(t);
      return n.observe(e), () => n.disconnect();
    }, []);
    let b = (0, R.useMemo)(() => new pt(() => u.current), []);
    (0, R.useEffect)(() => () => b.dispose(), [b]), (0, R.useEffect)(() => {
      b.gooBlur = e;
    }, [b, e]);
    let x = (0, R.useMemo)(() => ({
        portal: d,
        meltPortal: p,
        fill: n,
        getGroup: () => u.current,
        engine: b
      }), [d, p, n, b]),
      S = y.reduce((e, t) => Math.max(e, Math.max(Math.abs(t.x), Math.abs(t.y)) + t.blur * 1.5 + Math.max(0, t.spread)), 0),
      C = Math.ceil(e * 3 + S + i);
    return <div {...c} ref={_} className={a} style={{
      position: `relative`,
      isolation: `isolate`,
      ...o
    }}>{[<svg aria-hidden={`true`} focusable={`false`} data-gooey-svg={``} style={{
        position: `absolute`,
        inset: 0,
        width: `100%`,
        height: `100%`,
        overflow: `visible`,
        pointerEvents: `none`,
        zIndex: -1,
        willChange: `filter, transform`
      }}>{[<defs>{<filter id={v} filterUnits={`userSpaceOnUse`} x={-C} y={-C} width={h.w + C * 2} height={h.h + C * 2} colorInterpolationFilters={`sRGB`}>{(0, B.jsx)(Ze, {
              blur: e,
              contrast: t,
              shadows: y
            })}</filter>}</defs>, <g id={`${v}-sil`} ref={f} filter={`url(#${v})`} style={{
          fill: n
        }} />]}</svg>, <svg aria-hidden={`true`} focusable={`false`} data-gooey-overlay={``} style={{
        position: `absolute`,
        inset: 0,
        width: `100%`,
        height: `100%`,
        overflow: `visible`,
        pointerEvents: `none`,
        zIndex: 9999
      }}>{[<defs>{<mask id={`${v}-meltmask`} maskUnits={`userSpaceOnUse`} x={-C} y={-C} width={h.w + C * 2} height={h.h + C * 2}>{<use href={`#${v}-sil`} />}</mask>}</defs>, <g mask={`url(#${v}-meltmask)`}>{<g ref={m} />}</g>]}</svg>, (0, B.jsx)(J.Provider, {
        value: x,
        children: s
      })]}</div>;
  }),
  vt = {
    snappy: {
      stiffness: 480,
      damping: 34,
      mass: 1
    },
    smooth: {
      stiffness: 190,
      damping: 26,
      mass: 1
    },
    bouncy: {
      stiffness: 320,
      damping: 17,
      mass: 1
    }
  },
  yt = 1 / 240;
function bt(e) {
  let t = 0,
    n = 0,
    r = 0,
    i = -1,
    a = 0,
    o = [0];
  for (; r < 10;) {
    let s = (-e.stiffness * (t - 1) - e.damping * n) / e.mass;
    if (n += s * yt, t += n * yt, r += yt, o.push(t), t > a && (a = t), Math.abs(t - 1) < .001 && Math.abs(n) < .02) {
      if (i < 0 && (i = r), r - i >= .064) break;
    } else i = -1;
  }
  let s = i > 0 ? i : r,
    c = Math.round(Math.min(120, Math.max(24, s * 90))),
    l = Math.min(o.length - 1, s / yt),
    u = [];
  for (let e = 0; e <= c; e++) {
    let t = Math.min(o.length - 1, Math.round(e / c * l));
    u.push(Math.round(o[t] * 1e4) / 1e4);
  }
  return u[u.length - 1] = 1, {
    duration: s,
    values: u,
    overshoots: a > 1.001
  };
}
var xt = null;
function St() {
  return xt ??= typeof CSS < `u` && typeof CSS.supports == `function` && CSS.supports(`transition-timing-function`, `linear(0, 1)`), xt;
}
var Ct = new Map(),
  wt = new Map();
function Tt(e) {
  let t = wt.get(e);
  if (t) return t;
  let n = /^linear\(([^)]+)\)$/.exec(e.trim()),
    r = /^cubic-bezier\(([^)]+)\)$/.exec(e.trim());
  if (n) {
    let e = n[1].split(`,`).map(Number);
    t = t => {
      if (t <= 0) return e[0];
      if (t >= 1) return e[e.length - 1];
      let n = t * (e.length - 1),
        r = Math.floor(n);
      return e[r] + (e[r + 1] - e[r]) * (n - r);
    };
  } else if (r) {
    let [e, n, i, a] = r[1].split(`,`).map(Number);
    t = t => {
      if (t <= 0) return 0;
      if (t >= 1) return 1;
      let r = 0,
        o = 1;
      for (let n = 0; n < 24; n++) {
        let n = (r + o) / 2;
        3 * n * (1 - n) * (1 - n) * e + 3 * n * n * (1 - n) * i + n ** 3 < t ? r = n : o = n;
      }
      let s = (r + o) / 2;
      return 3 * s * (1 - s) * (1 - s) * n + 3 * s * s * (1 - s) * a + s ** 3;
    };
  } else t = e === `ease` ? Tt(`cubic-bezier(0.25, 0.1, 0.25, 1)`) : e === `ease-in` ? Tt(`cubic-bezier(0.42, 0, 1, 1)`) : e === `ease-out` ? Tt(`cubic-bezier(0, 0, 0.58, 1)`) : e === `ease-in-out` ? Tt(`cubic-bezier(0.42, 0, 0.58, 1)`) : e => Math.min(1, Math.max(0, e));
  return wt.set(e, t), t;
}
function Et(e, t = !1) {
  if (t) return {
    duration: 0,
    easing: `linear`
  };
  let n = e ?? `smooth`;
  if (typeof n == `object` && `duration` in n) return {
    duration: n.duration,
    easing: n.ease ?? `cubic-bezier(0.22, 1, 0.36, 1)`
  };
  let r = typeof n == `string` ? vt[n] : {
      stiffness: 300,
      damping: 24,
      mass: 1,
      ...n
    },
    i = `${r.stiffness}/${r.damping}/${r.mass}/${St()}`,
    a = Ct.get(i);
  if (!a) {
    let e = bt(r);
    a = {
      duration: Math.round(e.duration * 1e3),
      easing: St() ? `linear(${e.values.join(`, `)})` : e.overshoots ? `cubic-bezier(0.34, 1.56, 0.64, 1)` : `cubic-bezier(0.22, 1, 0.36, 1)`
    }, Ct.set(i, a);
  }
  return a;
}
function Dt(e) {
  return Array.isArray(e) ? e : e ? [e] : [];
}
function Ot(e) {
  let t = qe();
  return e.observe || Dt(e.effect).some(e => e !== `morph`) ? (0, B.jsx)(Nt, {
    ...e,
    ctx: t
  }) : (0, B.jsx)(jt, {
    ...e,
    ctx: t
  });
}
function kt(e) {
  return typeof e == `string` ? e : JSON.stringify(e ?? null);
}
function At(e, t) {
  return !!e && e.x === t.x && e.y === t.y && e.w === t.w && e.h === t.h && e.r.every((e, n) => e === t.r[n]);
}
function jt({
  x: e = 0,
  y: t = 0,
  scale: n = 1,
  transition: r = `smooth`,
  delay: i = 0,
  radius: a,
  className: o,
  style: s,
  children: c,
  ctx: l
}) {
  let u = (0, R.useRef)(null),
    d = (0, R.useRef)(null),
    [f, p] = (0, R.useState)(null),
    m = $e(),
    h = kt(r),
    {
      duration: g,
      easing: _
    } = (0, R.useMemo)(() => Et(r, m), [h, m]);
  Qe(() => {
    let e = u.current,
      t = l.getGroup();
    if (!e || !t) return;
    let n = () => {
      let n = et(e, t),
        r = e.offsetWidth,
        i = e.offsetHeight,
        o = e.firstElementChild ?? e,
        s = a == null ? Y(o, r, i) : tt(a),
        c = {
          x: n.x,
          y: n.y,
          w: r,
          h: i,
          r: s
        };
      p(e => At(e, c) ? e : c);
    };
    n();
    let r = new ResizeObserver(n);
    return r.observe(e), r.observe(t), () => r.disconnect();
  }, [l, a == null ? `` : JSON.stringify(a)]);
  let v = (0, R.useRef)(null),
    y = (e, t, n) => {
      let r = `translate(${e}px, ${t}px)` + (n === 1 ? `` : ` scale(${n})`);
      u.current && (u.current.style.transform = r), d.current && (d.current.style.transform = r);
    };
  return Qe(() => {
    let r = v.current;
    if (!r || g <= 0 || r.x === e && r.y === t && r.s === n) {
      v.current = {
        x: e,
        y: t,
        s: n
      }, y(e, t, n);
      return;
    }
    let a = {
        ...r
      },
      o = Tt(_),
      s = performance.now() + i,
      c = 0,
      l = r => {
        let i = Math.min(1, Math.max(0, (r - s) / g)),
          u = o(i),
          d = a.x + (e - a.x) * u,
          f = a.y + (t - a.y) * u,
          p = a.s + (n - a.s) * u;
        v.current = {
          x: d,
          y: f,
          s: p
        }, y(d, f, p), i < 1 && (c = requestAnimationFrame(l));
      };
    return c = requestAnimationFrame(l), () => cancelAnimationFrame(c);
  }, [e, t, n, g, _, i]), (0, B.jsxs)(B.Fragment, {
    children: [<div ref={u} className={o} style={{
      display: `inline-block`,
      ...s,
      willChange: `transform`
    }}>{c}</div>, l.portal && f && (0, Ke.createPortal)(Mt(f, {
      transformBox: `fill-box`,
      transformOrigin: `center`,
      willChange: `transform`
    }, r => {
      if (d.current = r, r) {
        let i = v.current ?? {
          x: e,
          y: t,
          s: n
        };
        r.style.transform = `translate(${i.x}px, ${i.y}px)` + (i.s === 1 ? `` : ` scale(${i.s})`);
      }
    }), l.portal)]
  });
}
function Mt(e, t, n) {
  let [r, i, a, o] = e.r;
  if (r === i && i === a && a === o) {
    let i = Math.max(0, Math.min(r, Math.min(e.w, e.h) / 2));
    return <rect ref={n} x={e.x} y={e.y} width={e.w} height={e.h} rx={i} style={t} />;
  }
  return <path ref={n} d={nt(e.x, e.y, e.w, e.h, e.r)} style={t} />;
}
function Nt({
  radius: e,
  blobInset: t,
  bridgeGrow: n,
  contactBlur: r,
  effect: i,
  evolve: a,
  move: o,
  className: s,
  style: c,
  children: l,
  ctx: u
}) {
  let d = (0, R.useRef)(null),
    f = (0, R.useRef)(null),
    p = (0, R.useRef)(null),
    m = (0, R.useRef)(null),
    h = typeof r == `object` ? r : {},
    g = h.blur ?? 8,
    _ = h.warp ?? 26,
    v = h.pull ?? 4,
    y = h.range,
    b = h.zone,
    x = h.mix ?? 0,
    S = h.gravity ?? 60,
    C = h.taper ?? 1,
    ee = h.warpFreq ?? 1.7,
    w = h.flowSpeed ?? 22,
    te = h.warpStyle ?? `fractalNoise`,
    T = h.detail ?? 2,
    E = h.active !== !1,
    D = h.releaseMs ?? 240,
    ne = h.fadeMs,
    re = h.strength ?? 1,
    ie = Dt(i),
    O = {
      evolve: ie.includes(`evolve`),
      move: ie.includes(`move`),
      evolveOpts: {
        ...X,
        ...a
      },
      moveOpts: {
        ...at,
        ...o
      }
    },
    ae = O.evolve || O.move;
  return Qe(() => {
    let i = d.current,
      a = f.current,
      o = i?.firstElementChild ?? null;
    if (!o || !a) return;
    let s = r && p.current ? {
      host: p.current,
      blur: g,
      warp: _,
      pull: v,
      range: y,
      zone: b,
      mix: x,
      gravity: S,
      taper: C,
      warpFreq: ee,
      flowSpeed: w,
      warpStyle: te,
      detail: T,
      active: E,
      releaseMs: D,
      fadeMs: ne,
      strength: re
    } : void 0;
    return m.current = s ?? null, u.engine.add({
      target: o,
      blob: a,
      radius: e == null ? void 0 : tt(e)[0],
      blobInset: t,
      bridgeGrow: n,
      blend: s,
      dynamics: ae ? O : void 0
    });
  }, [u, e == null ? `` : JSON.stringify(e), r ? `${g}/${_}/${v}/${y ?? `auto`}/${b ?? `auto`}/${x}/${S}/${C}/${ee}/${w}/${te}/${T}` : ``, ie.join(`,`) + (O.evolve ? JSON.stringify(O.evolveOpts) : ``) + (O.move ? JSON.stringify(O.moveOpts) : ``), t, n]), (0, R.useEffect)(() => {
    m.current && (m.current.active = E, m.current.releaseMs = D, m.current.fadeMs = ne, m.current.strength = re, u.engine.wake());
  }, [u, E, D, ne, re]), (0, B.jsxs)(B.Fragment, {
    children: [<span ref={d} className={s} style={{
      display: `contents`,
      ...c
    }}>{l}</span>, u.portal && (0, Ke.createPortal)(<rect ref={f} x={0} y={0} width={0} height={0} style={{
      willChange: `transform`,
      transformBox: `fill-box`,
      transformOrigin: `center`
    }} />, u.portal), r !== void 0 && r !== !1 && u.meltPortal && (0, Ke.createPortal)(<g ref={p} opacity={0} />, u.meltPortal)]
  });
}
function Pt(e) {
  return Math.max(.12, 1 - 1.1 * Math.min(1, Math.max(0, e)));
}
function Ft(e) {
  let t = Math.max(.25, e?.speed ?? 1),
    n = Pt(e?.bounce ?? .5) / Pt(.5);
  return {
    massStiffness: X.massStiffness * t * t,
    massDamping: X.massDamping * t * n,
    sizeStiffness: X.sizeStiffness * t * t,
    sizeDamping: X.sizeDamping * t * n,
    radiusStiffness: X.radiusStiffness * t * t,
    radiusDamping: X.radiusDamping * t,
    cornerDuration: X.cornerDuration / t,
    contentBlur: e?.contentBlur ?? X.contentBlur
  };
}
function It(e) {
  return {
    warp: 26,
    blur: 8,
    mix: .7,
    gravity: 60,
    taper: 1,
    warpFreq: 1.7,
    flowSpeed: 22,
    detail: 2,
    zone: 18,
    range: 49,
    releaseMs: 110,
    strength: typeof e == `number` ? Math.min(1, Math.max(0, e)) : 1
  };
}
function Lt(e) {
  let t = Math.min(1, Math.max(0, e?.springiness ?? .5)),
    n = at.stiffness * 10 ** (t - .5);
  return {
    stiffness: n,
    damping: at.damping * Math.sqrt(n / at.stiffness) * (Pt(e?.wobble ?? .5) / Pt(.5)),
    stretch: .5 * Math.min(1, Math.max(0, e?.stretch ?? .36)),
    tail: .8 * Math.min(1, Math.max(0, e?.trail ?? .575)),
    ...e?.advanced
  };
}
function Rt(e) {
  let {
    effect: t = `morph`,
    morph: n,
    move: r,
    dissolve: i,
    observe: a,
    ...o
  } = e;
  if (t === `move`) return (0, B.jsx)(Ot, {
    ...o,
    observe: !0,
    effect: `move`,
    move: Lt(r)
  });
  let s = n?.advanced,
    c = !!n?.shape,
    l = i !== void 0 && i !== !1 ? typeof i == `object` ? {
      ...It(!0),
      ...i
    } : It(i) : void 0,
    u = c ? {
      ...Ft(n),
      ...s?.evolve
    } : void 0;
  return (0, B.jsx)(Ot, {
    ...o,
    observe: a || c || !!l || void 0,
    effect: c ? `evolve` : void 0,
    evolve: u,
    contactBlur: l,
    blobInset: s?.blobInset,
    bridgeGrow: s?.bridgeGrow
  });
}
var zt = Object.assign(_t, {
    Item: Rt
  }),
  Bt = t({
    Slider: () => en
  }),
  Vt = {
    default: 26,
    sm: 16
  },
  Ht = {
    default: `size-[26px]`,
    sm: `size-4`
  },
  Ut = 7,
  Wt = e => Ut * e / Vt.default,
  Gt = 44,
  Kt = {
    springiness: .32,
    wobble: .42,
    advanced: {
      stretch: 2.4
    },
    trail: 0
  };
function qt(e) {
  return Array.isArray(e) ? e : [e];
}
var Jt = `(prefers-reduced-motion: reduce)`;
function Yt(e) {
  let t = window.matchMedia(Jt);
  return t.addEventListener(`change`, e), () => t.removeEventListener(`change`, e);
}
var Xt = () => window.matchMedia(Jt).matches,
  Zt = () => !1,
  Qt = () => (0, R.useSyncExternalStore)(Yt, Xt, Zt);
function $t(e, t) {
  (0, R.useEffect)(() => {
    let n = e.current;
    if (!t || !n) return;
    let r = n.querySelector(`[data-slot="slider-range"]`),
      i = n.querySelector(`[data-slot="slider-track"]`);
    if (!r || !i) return;
    let a = {
        width: r.style.width,
        start: r.style.insetInlineStart
      },
      o = ``,
      s = () => {
        let e = n.querySelectorAll(`svg g rect`),
          t = i.getBoundingClientRect();
        if (e.length === 0 || t.width === 0) return;
        let a = getComputedStyle(i).direction === `rtl`,
          s = 1 / 0,
          c = -1 / 0;
        for (let n of e) {
          let e = n.getBoundingClientRect(),
            r = (e.left + e.right) / 2,
            i = a ? t.right - r : r - t.left;
          s = Math.min(s, i), c = Math.max(c, i);
        }
        let l = e.length > 1 ? s : 0,
          u = `${l}px|${Math.max(0, c - l)}px`;
        u !== o && (o = u, r.style.insetInlineStart = `${l}px`, r.style.width = `${Math.max(0, c - l)}px`);
      },
      c = new MutationObserver(s);
    return c.observe(n, {
      attributes: !0,
      subtree: !0,
      childList: !0
    }), s(), () => {
      c.disconnect(), r.style.width = a.width, r.style.insetInlineStart = a.start;
    };
  }, [e, t]);
}
function en({
  className: e,
  defaultValue: t,
  value: n,
  min: r = 0,
  max: i = 100,
  orientation: a = `horizontal`,
  size: s = `default`,
  animated: c = !0,
  onValueChange: l,
  ...u
}) {
  let d = qt(n ?? t ?? [r, i]),
    f = Qt(),
    [p, m] = (0, R.useState)(d),
    h = n === void 0 ? p : qt(n),
    g = c && !f && a === `horizontal`,
    _ = Vt[s],
    v = Ht[s],
    y = (0, R.useRef)(!1),
    [b, x] = (0, R.useState)(!1),
    S = (0, R.useRef)(null);
  return $t(S, g), (0, B.jsx)(V, {
    className: o(`data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full`, e),
    "data-slot": `slider`,
    defaultValue: t,
    value: n,
    min: r,
    max: i,
    orientation: a,
    thumbAlignment: `edge`,
    onValueChange: (e, t) => {
      m(qt(e)), l?.(e, t);
    },
    ...u,
    children: (0, B.jsxs)(G, {
      ref: S,
      className: `relative flex w-full touch-none items-center select-none data-disabled:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-40 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col`,
      onPointerDown: () => {
        y.current = !0;
      },
      children: [(0, B.jsx)(Ne, {
        "data-slot": `slider-track`,
        className: `relative grow overflow-hidden rounded-full bg-(--slider-track) select-none [--slider-track:color-mix(in_oklch,var(--muted),var(--foreground)_10%)] data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5 dark:[--slider-track:var(--muted)]`,
        children: (0, B.jsx)(We, {
          "data-slot": `slider-range`,
          className: `bg-primary select-none data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full`
        })
      }), g ? (0, B.jsx)(zt, {
        fill: `var(--primary)`,
        blur: Wt(_),
        contrast: Gt,
        style: {
          position: `absolute`,
          inset: 0,
          pointerEvents: `none`
        },
        children: h.map((e, t) => {
          let n = i === r ? 0 : Math.min(1, Math.max(0, (e - r) / (i - r)));
          return (0, B.jsx)(zt.Item, {
            effect: `move`,
            move: Kt,
            radius: _ / 2,
            children: <span aria-hidden={!0} className={o(`absolute block rounded-full`, v)} style={{
              top: `calc(50% - ${_ / 2}px)`,
              insetInlineStart: `calc(${n} * (100% - ${_}px))`
            }} />
          }, t);
        })
      }) : null, Array.from({
        length: d.length
      }, (e, t) => (0, B.jsx)(He, {
        "data-slot": `slider-thumb`,
        onFocus: () => {
          x(!y.current), y.current = !1;
        },
        onKeyDown: () => x(!0),
        className: o(`relative block shrink-0 rounded-full ring-offset-background outline-hidden transition-ring select-none after:absolute after:-inset-2 data-disabled:pointer-events-none`, v, g ? `bg-transparent` : `bg-primary`, b && `has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring has-[:focus-visible]:ring-offset-2`)
      }, t))]
    })
  });
}
export { Le as a, V as c, He as i, Ee as l, Ge as n, Ne as o, We as r, G as s, Bt as t, we as u };

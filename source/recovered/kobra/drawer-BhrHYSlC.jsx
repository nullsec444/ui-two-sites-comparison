// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import { a as e, r as t } from "./rolldown-runtime-B0Z9INg1.js";
import { n, t as r } from "./jsx-runtime-Ciaf_P-h.js";
import { t as i } from "./react-dom-U4kpXZKZ.js";
import { t as a } from "./utils-WkhMP9hs.js";
var o = e(n(), 1),
  s = Object.defineProperty,
  c = (e, t) => s(e, `name`, {
    value: t,
    configurable: !0
  }),
  l = !!(typeof window < `u` && window.document && window.document.createElement);
function u(e, t, {
  checkForDefaultPrevented: n = !0
} = {}) {
  return c(function (r) {
    if (e?.(r), n === !1 || !r || !r.defaultPrevented) return t?.(r);
  }, `handleEvent`);
}
c(u, `composeEventHandlers`);
function d(e) {
  if (!l) throw Error(`Cannot access window outside of the DOM`);
  return e?.ownerDocument?.defaultView ?? window;
}
c(d, `getOwnerWindow`);
function f(e) {
  if (!l) throw Error(`Cannot access document outside of the DOM`);
  return e?.ownerDocument ?? document;
}
c(f, `getOwnerDocument`);
function p(e, t = !1) {
  let {
    activeElement: n
  } = f(e);
  if (!n?.nodeName) return null;
  if (m(n) && n.contentDocument) return p(n.contentDocument.body, t);
  if (t) {
    let e = n.getAttribute(`aria-activedescendant`);
    if (e) {
      let t = f(n).getElementById(e);
      if (t) return t;
    }
  }
  return n;
}
c(p, `getActiveElement`);
function m(e) {
  return e.tagName === `IFRAME`;
}
c(m, `isFrame`);
var h = Object.defineProperty,
  g = (e, t) => h(e, `name`, {
    value: t,
    configurable: !0
  });
function _(e, t) {
  if (typeof e == `function`) return e(t);
  e != null && (e.current = t);
}
g(_, `setRef`);
function v(...e) {
  return t => {
    let n = !1,
      r = e.map(e => {
        let r = _(e, t);
        return !n && typeof r == `function` && (n = !0), r;
      });
    if (n) return () => {
      for (let t = 0; t < r.length; t++) {
        let n = r[t];
        typeof n == `function` ? n() : _(e[t], null);
      }
    };
  };
}
g(v, `composeRefs`);
function y(...e) {
  return o.useCallback(v(...e), e);
}
g(y, `useComposedRefs`);
var b = e(r(), 1),
  x = Object.defineProperty,
  S = (e, t) => x(e, `name`, {
    value: t,
    configurable: !0
  });
function C(e, t) {
  let n = o.createContext(t);
  n.displayName = e + `Context`;
  let r = S(e => {
    let {
        children: t,
        ...r
      } = e,
      i = o.useMemo(() => r, Object.values(r));
    return (0, b.jsx)(n.Provider, {
      value: i,
      children: t
    });
  }, `Provider`);
  r.displayName = e + `Provider`;
  function i(r, i = {}) {
    let {
        optional: a = !1
      } = i,
      s = o.useContext(n);
    if (s) return s;
    if (t !== void 0) return t;
    if (!a) throw Error(`\`${r}\` must be used within \`${e}\``);
  }
  return S(i, `useContext`), [r, i];
}
S(C, `createContext`);
function w(e, t = []) {
  let n = [];
  function r(t, r) {
    let i = o.createContext(r);
    i.displayName = t + `Context`;
    let a = n.length;
    n = [...n, r];
    let s = S(t => {
      let {
          scope: n,
          children: r,
          ...s
        } = t,
        c = n?.[e]?.[a] || i,
        l = o.useMemo(() => s, Object.values(s));
      return (0, b.jsx)(c.Provider, {
        value: l,
        children: r
      });
    }, `Provider`);
    s.displayName = t + `Provider`;
    function c(n, s, c = {}) {
      let {
          optional: l = !1
        } = c,
        u = s?.[e]?.[a] || i,
        d = o.useContext(u);
      if (d) return d;
      if (r !== void 0) return r;
      if (!l) throw Error(`\`${n}\` must be used within \`${t}\``);
    }
    return S(c, `useContext`), [s, c];
  }
  S(r, `createContext`);
  let i = S(() => {
    let t = n.map(e => o.createContext(e));
    return S(function (n) {
      let r = n?.[e] || t;
      return o.useMemo(() => ({
        [`__scope${e}`]: {
          ...n,
          [e]: r
        }
      }), [n, r]);
    }, `useScope`);
  }, `createScope`);
  return i.scopeName = e, [r, T(i, ...t)];
}
S(w, `createContextScope`);
function T(...e) {
  let t = e[0];
  if (e.length === 1) return t;
  let n = S(() => {
    let n = e.map(e => ({
      useScope: e(),
      scopeName: e.scopeName
    }));
    return S(function (e) {
      let r = n.reduce((t, {
        useScope: n,
        scopeName: r
      }) => {
        let i = n(e)[`__scope${r}`];
        return {
          ...t,
          ...i
        };
      }, {});
      return o.useMemo(() => ({
        [`__scope${t.scopeName}`]: r
      }), [r]);
    }, `useComposedScopes`);
  }, `createScope`);
  return n.scopeName = t.scopeName, n;
}
S(T, `composeContextScopes`);
var E = globalThis?.document ? o.useLayoutEffect : () => {},
  ee = Object.defineProperty,
  te = (e, t) => ee(e, `name`, {
    value: t,
    configurable: !0
  }),
  D = o.useId || (() => void 0),
  O = 0;
function k(e) {
  let [t, n] = o.useState(D());
  return E(() => {
    e || n(e => e ?? String(O++));
  }, [e]), e || (t ? `radix-${t}` : ``);
}
te(k, `useId`);
var ne = Object.defineProperty,
  re = (e, t) => ne(e, `name`, {
    value: t,
    configurable: !0
  }),
  A = o.useEffectEvent,
  ie = o.useInsertionEffect;
function ae(e) {
  if (typeof A == `function`) return A(e);
  let t = o.useRef(() => {
    throw Error(`Cannot call an event handler while rendering.`);
  });
  return typeof ie == `function` ? ie(() => {
    t.current = e;
  }) : E(() => {
    t.current = e;
  }), o.useMemo(() => (...e) => t.current?.(...e), []);
}
re(ae, `useEffectEvent`);
var oe = Object.defineProperty,
  j = (e, t) => oe(e, `name`, {
    value: t,
    configurable: !0
  }),
  se = o.useInsertionEffect || E;
function ce({
  prop: e,
  defaultProp: t,
  onChange: n = j(() => {}, `onChange`),
  caller: r
}) {
  let [i, a, s] = le({
      defaultProp: t,
      onChange: n
    }),
    c = e !== void 0;
  return [c ? e : i, o.useCallback(t => {
    if (c) {
      let n = ue(t) ? t(e) : t;
      n !== e && s.current?.(n);
    } else a(t);
  }, [c, e, a, s])];
}
j(ce, `useControllableState`);
function le({
  defaultProp: e,
  onChange: t
}) {
  let [n, r] = o.useState(e),
    i = o.useRef(n),
    a = o.useRef(t);
  return se(() => {
    a.current = t;
  }, [t]), o.useEffect(() => {
    i.current !== n && (a.current?.(n), i.current = n);
  }, [n, i]), [n, r, a];
}
j(le, `useUncontrolledState`);
function ue(e) {
  return typeof e == `function`;
}
j(ue, `isFunction`);
var M = Symbol(`RADIX:SYNC_STATE`);
function de(e, t, n, r) {
  let {
      prop: i,
      defaultProp: a,
      onChange: s,
      caller: c
    } = t,
    l = i !== void 0,
    u = ae(s),
    d = [{
      ...n,
      state: a
    }];
  r && d.push(r);
  let [f, p] = o.useReducer((t, n) => {
      if (n.type === M) return {
        ...t,
        state: n.state
      };
      let r = e(t, n);
      return l && !Object.is(r.state, t.state) && u(r.state), r;
    }, ...d),
    m = f.state,
    h = o.useRef(m);
  o.useEffect(() => {
    h.current !== m && (h.current = m, l || u(m));
  }, [m, h, l]);
  let g = o.useMemo(() => i === void 0 ? f : {
    ...f,
    state: i
  }, [f, i]);
  return o.useEffect(() => {
    l && !Object.is(i, f.state) && p({
      type: M,
      state: i
    });
  }, [i, f.state, l]), [g, p];
}
j(de, `useControllableStateReducer`);
var fe = e(i(), 1),
  N = Object.defineProperty,
  P = (e, t) => N(e, `name`, {
    value: t,
    configurable: !0
  });
function pe(e) {
  let t = o.forwardRef((t, n) => {
    let {
        children: r,
        ...i
      } = t,
      a = null,
      s = !1,
      c = [];
    ye(r) && typeof Se == `function` && (r = Se(r._payload)), o.Children.forEach(r, e => {
      if (I(e)) {
        s = !0;
        let t = e,
          n = `child` in t.props ? t.props.child : t.props.children;
        ye(n) && typeof Se == `function` && (n = Se(n._payload)), a = he(t, n), c.push(a?.props?.children);
      } else c.push(e);
    }), a ? a = o.cloneElement(a, void 0, c) : !s && o.Children.count(r) === 1 && o.isValidElement(r) && (a = r);
    let l = a ? _e(a) : void 0,
      u = y(n, l);
    if (!a) {
      if (r || r === 0) throw Error(s ? xe(e) : be(e));
      return r;
    }
    let d = ge(i, a.props ?? {});
    return a.type !== o.Fragment && (d.ref = n ? u : l), o.cloneElement(a, d);
  });
  return t.displayName = `${e}.Slot`, t;
}
P(pe, `createSlot`);
var F = Symbol.for(`radix.slottable`);
function me(e) {
  let t = P(e => `child` in e ? e.children(e.child) : e.children, `Slottable`);
  return t.displayName = `${e}.Slottable`, t.__radixId = F, t;
}
P(me, `createSlottable`);
var he = P((e, t) => {
  if (`child` in e.props) {
    let t = e.props.child;
    return o.isValidElement(t) ? o.cloneElement(t, void 0, e.props.children(t.props.children)) : null;
  }
  return o.isValidElement(t) ? t : null;
}, `getSlottableElementFromSlottable`);
function ge(e, t) {
  let n = {
    ...t
  };
  for (let r in t) {
    let i = e[r],
      a = t[r];
    /^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
      let t = a(...e);
      return i(...e), t;
    } : i && (n[r] = i) : r === `style` ? n[r] = {
      ...i,
      ...a
    } : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `));
  }
  return {
    ...e,
    ...n
  };
}
P(ge, `mergeProps`);
function _e(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
    n = t && `isReactWarning` in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, `ref`)?.get, n = t && `isReactWarning` in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
P(_e, `getElementRef`);
function I(e) {
  return o.isValidElement(e) && typeof e.type == `function` && `__radixId` in e.type && e.type.__radixId === F;
}
P(I, `isSlottable`);
var ve = Symbol.for(`react.lazy`);
function ye(e) {
  return typeof e == `object` && !!e && `$$typeof` in e && e.$$typeof === ve && `_payload` in e && L(e._payload);
}
P(ye, `isLazyComponent`);
function L(e) {
  return typeof e == `object` && !!e && `then` in e;
}
P(L, `isPromiseLike`);
var be = P(e => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, `createSlotError`),
  xe = P(e => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, `createSlottableError`),
  Se = o.use,
  Ce = Object.defineProperty,
  we = (e, t) => Ce(e, `name`, {
    value: t,
    configurable: !0
  }),
  R = [`a`, `button`, `div`, `form`, `h2`, `h3`, `img`, `input`, `label`, `li`, `nav`, `ol`, `p`, `select`, `span`, `svg`, `ul`].reduce((e, t) => {
    let n = pe(`Primitive.${t}`),
      r = o.forwardRef((e, r) => {
        let {
            asChild: i,
            ...a
          } = e,
          o = i ? n : t;
        return typeof window < `u` && (window[Symbol.for(`radix-ui`)] = !0), (0, b.jsx)(o, {
          ...a,
          ref: r
        });
      });
    return r.displayName = `Primitive.${t}`, {
      ...e,
      [t]: r
    };
  }, {});
function Te(e, t) {
  e && fe.flushSync(() => e.dispatchEvent(t));
}
we(Te, `dispatchDiscreteCustomEvent`);
var Ee = Object.defineProperty,
  De = (e, t) => Ee(e, `name`, {
    value: t,
    configurable: !0
  });
function z(e) {
  let t = o.useRef(e);
  return o.useEffect(() => {
    t.current = e;
  }), o.useMemo(() => (...e) => t.current?.(...e), []);
}
De(z, `useCallbackRef`);
var Oe = Object.defineProperty,
  B = (e, t) => Oe(e, `name`, {
    value: t,
    configurable: !0
  }),
  ke = `dismissableLayer.update`,
  Ae = `dismissableLayer.pointerDownOutside`,
  je = `dismissableLayer.focusOutside`,
  Me,
  Ne = o.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
    dismissableSurfaces: new Set()
  }),
  Pe = o.forwardRef(B(function (e, t) {
    let {
        disableOutsidePointerEvents: n = !1,
        deferPointerDownOutside: r = !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: a,
        onFocusOutside: s,
        onInteractOutside: c,
        onDismiss: l,
        ...d
      } = e,
      f = o.useContext(Ne),
      [p, m] = o.useState(null),
      h = p?.ownerDocument ?? globalThis?.document,
      [, g] = o.useState({}),
      _ = y(t, m),
      v = Array.from(f.layers),
      [x] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1),
      S = x ? v.indexOf(x) : -1,
      C = p ? v.indexOf(p) : -1,
      w = f.layersWithOutsidePointerEventsDisabled.size > 0,
      T = C >= S,
      E = o.useRef(!1),
      ee = Le(e => {
        a?.(e), c?.(e), e.defaultPrevented || l?.();
      }, {
        ownerDocument: h,
        deferPointerDownOutside: r,
        isDeferredPointerDownOutsideRef: E,
        dismissableSurfaces: f.dismissableSurfaces,
        shouldHandlePointerDownOutside: o.useCallback(e => {
          if (!(e instanceof Node)) return !1;
          let t = [...f.branches].some(t => t.contains(e));
          return T && !t;
        }, [f.branches, T])
      }),
      te = Re(e => {
        if (r && E.current) return;
        let t = e.target;
        [...f.branches].some(e => e.contains(t)) || (s?.(e), c?.(e), e.defaultPrevented || l?.());
      }, h),
      D = p ? C === v.length - 1 : !1,
      O = z(e => {
        e.key === `Escape` && (i?.(e), !e.defaultPrevented && l && (e.preventDefault(), l()));
      });
    return o.useEffect(() => {
      if (D) return h.addEventListener(`keydown`, O, {
        capture: !0
      }), () => h.removeEventListener(`keydown`, O, {
        capture: !0
      });
    }, [h, D, O]), o.useEffect(() => {
      if (p) return n && (f.layersWithOutsidePointerEventsDisabled.size === 0 && (Me = h.body.style.pointerEvents, h.body.style.pointerEvents = `none`), f.layersWithOutsidePointerEventsDisabled.add(p)), f.layers.add(p), ze(), () => {
        n && (f.layersWithOutsidePointerEventsDisabled.delete(p), f.layersWithOutsidePointerEventsDisabled.size === 0 && (h.body.style.pointerEvents = Me));
      };
    }, [p, h, n, f]), o.useEffect(() => () => {
      p && (f.layers.delete(p), f.layersWithOutsidePointerEventsDisabled.delete(p), ze());
    }, [p, f]), o.useEffect(() => {
      let e = B(() => g({}), `handleUpdate`);
      return document.addEventListener(ke, e), () => document.removeEventListener(ke, e);
    }, []), (0, b.jsx)(R.div, {
      ...d,
      ref: _,
      style: {
        pointerEvents: w ? T ? `auto` : `none` : void 0,
        ...e.style
      },
      onFocusCapture: u(e.onFocusCapture, te.onFocusCapture),
      onBlurCapture: u(e.onBlurCapture, te.onBlurCapture),
      onPointerDownCapture: u(e.onPointerDownCapture, ee.onPointerDownCapture)
    });
  }, `DismissableLayer`));
function Fe() {
  let e = o.useContext(Ne),
    [t, n] = o.useState(null);
  return o.useEffect(() => {
    if (t) return e.dismissableSurfaces.add(t), () => {
      e.dismissableSurfaces.delete(t);
    };
  }, [t, e.dismissableSurfaces]), n;
}
B(Fe, `useDismissableLayerSurface`);
var Ie = B(() => !0, `IS_TRUE`);
function Le(e, t) {
  let {
      ownerDocument: n = globalThis?.document,
      deferPointerDownOutside: r = !1,
      isDeferredPointerDownOutsideRef: i,
      dismissableSurfaces: a,
      shouldHandlePointerDownOutside: s = Ie
    } = t,
    c = z(e),
    l = o.useRef(!1),
    u = o.useRef(!1),
    d = o.useRef(new Map()),
    f = o.useRef(() => {});
  return o.useEffect(() => {
    function e() {
      u.current = !1, i.current = !1, d.current.clear();
    }
    B(e, `resetOutsideInteraction`);
    function t() {
      return Array.from(d.current.values()).some(Boolean);
    }
    B(t, `isOutsideInteractionIntercepted`);
    function o(e) {
      if (!u.current) return;
      let t = e.target;
      t instanceof Node && [...a].some(e => e.contains(t)) || d.current.set(e.type, !0), e.type === `click` && window.setTimeout(() => {
        u.current && f.current();
      }, 0);
    }
    B(o, `handleInteractionCapture`);
    function p(e) {
      u.current && d.current.set(e.type, !1);
    }
    B(p, `handleInteractionBubble`);
    let m = B(a => {
        if (a.target && !l.current) {
          let o = function () {
            n.removeEventListener(`click`, f.current);
            let r = t();
            e(), r || Be(Ae, c, p, {
              discrete: !0
            });
          };
          if (B(o, `handleAndDispatchPointerDownOutsideEvent`), !s(a.target)) {
            n.removeEventListener(`click`, f.current), e(), l.current = !1;
            return;
          }
          let p = {
            originalEvent: a
          };
          u.current = !0, i.current = r && a.button === 0, d.current.clear(), !r || a.button !== 0 ? o() : (n.removeEventListener(`click`, f.current), f.current = o, n.addEventListener(`click`, f.current, {
            once: !0
          }));
        } else n.removeEventListener(`click`, f.current), e();
        l.current = !1;
      }, `handlePointerDown`),
      h = [`pointerup`, `mousedown`, `mouseup`, `touchstart`, `touchend`, `click`];
    for (let e of h) n.addEventListener(e, o, !0), n.addEventListener(e, p);
    let g = window.setTimeout(() => {
      n.addEventListener(`pointerdown`, m);
    }, 0);
    return () => {
      window.clearTimeout(g), n.removeEventListener(`pointerdown`, m), n.removeEventListener(`click`, f.current);
      for (let e of h) n.removeEventListener(e, o, !0), n.removeEventListener(e, p);
    };
  }, [n, c, r, i, a, s]), {
    onPointerDownCapture: B(() => l.current = !0, `onPointerDownCapture`)
  };
}
B(Le, `usePointerDownOutside`);
function Re(e, t = globalThis?.document) {
  let n = z(e),
    r = o.useRef(!1);
  return o.useEffect(() => {
    let e = B(e => {
      e.target && !r.current && Be(je, n, {
        originalEvent: e
      }, {
        discrete: !1
      });
    }, `handleFocus`);
    return t.addEventListener(`focusin`, e), () => t.removeEventListener(`focusin`, e);
  }, [t, n]), {
    onFocusCapture: B(() => r.current = !0, `onFocusCapture`),
    onBlurCapture: B(() => r.current = !1, `onBlurCapture`)
  };
}
B(Re, `useFocusOutside`);
function ze() {
  let e = new CustomEvent(ke);
  document.dispatchEvent(e);
}
B(ze, `dispatchUpdate`);
function Be(e, t, n, {
  discrete: r
}) {
  let i = n.originalEvent.target,
    a = new CustomEvent(e, {
      bubbles: !1,
      cancelable: !0,
      detail: n
    });
  t && i.addEventListener(e, t, {
    once: !0
  }), r ? Te(i, a) : i.dispatchEvent(a);
}
B(Be, `handleAndDispatchCustomEvent`);
var Ve = Object.defineProperty,
  V = (e, t) => Ve(e, `name`, {
    value: t,
    configurable: !0
  }),
  He = `focusScope.autoFocusOnMount`,
  Ue = `focusScope.autoFocusOnUnmount`,
  We = {
    bubbles: !1,
    cancelable: !0
  },
  Ge = o.forwardRef(V(function (e, t) {
    let {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: i,
        onUnmountAutoFocus: a,
        ...s
      } = e,
      [c, l] = o.useState(null),
      u = z(i),
      d = z(a),
      f = o.useRef(null),
      p = y(t, l),
      m = o.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        }
      }).current;
    o.useEffect(() => {
      if (r) {
        let e = function (e) {
            if (m.paused || !c) return;
            let t = e.target;
            c.contains(t) ? f.current = t : H(f.current, {
              select: !0
            });
          },
          t = function (e) {
            if (m.paused || !c) return;
            let t = e.relatedTarget;
            t !== null && (c.contains(t) || H(f.current, {
              select: !0
            }));
          },
          n = function (e) {
            if (document.activeElement === document.body) for (let t of e) t.removedNodes.length > 0 && H(c);
          };
        V(e, `handleFocusIn`), V(t, `handleFocusOut`), V(n, `handleMutations`), document.addEventListener(`focusin`, e), document.addEventListener(`focusout`, t);
        let r = new MutationObserver(n);
        return c && r.observe(c, {
          childList: !0,
          subtree: !0
        }), () => {
          document.removeEventListener(`focusin`, e), document.removeEventListener(`focusout`, t), r.disconnect();
        };
      }
    }, [r, c, m.paused]), o.useEffect(() => {
      if (c) {
        Qe.add(m);
        let e = document.activeElement;
        if (!c.contains(e)) {
          let t = new CustomEvent(He, We);
          c.addEventListener(He, u), c.dispatchEvent(t), t.defaultPrevented || (Ke(tt(Je(c)), {
            select: !0
          }), document.activeElement === e && H(c));
        }
        return () => {
          c.removeEventListener(He, u), setTimeout(() => {
            let t = new CustomEvent(Ue, We);
            c.addEventListener(Ue, d), c.dispatchEvent(t), t.defaultPrevented || H(e ?? document.body, {
              select: !0
            }), c.removeEventListener(Ue, d), Qe.remove(m);
          }, 0);
        };
      }
    }, [c, u, d, m]);
    let h = o.useCallback(e => {
      if (!n && !r || m.paused) return;
      let t = e.key === `Tab` && !e.altKey && !e.ctrlKey && !e.metaKey,
        i = document.activeElement;
      if (t && i) {
        let t = e.currentTarget,
          [r, a] = qe(t);
        r && a ? !e.shiftKey && i === a ? (e.preventDefault(), n && H(r, {
          select: !0
        })) : e.shiftKey && i === r && (e.preventDefault(), n && H(a, {
          select: !0
        })) : i === t && e.preventDefault();
      }
    }, [n, r, m.paused]);
    return (0, b.jsx)(R.div, {
      tabIndex: -1,
      ...s,
      ref: p,
      onKeyDown: h
    });
  }, `FocusScope`));
function Ke(e, {
  select: t = !1
} = {}) {
  let n = document.activeElement;
  for (let r of e) if (H(r, {
    select: t
  }), document.activeElement !== n) return;
}
V(Ke, `focusFirst`);
function qe(e) {
  let t = Je(e);
  return [Ye(t, e), Ye(t.reverse(), e)];
}
V(qe, `getTabbableEdges`);
function Je(e) {
  let t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: V(e => {
        let t = e.tagName === `INPUT` && e.type === `hidden`;
        return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }, `acceptNode`)
    });
  for (; n.nextNode();) t.push(n.currentNode);
  return t;
}
V(Je, `getTabbableCandidates`);
function Ye(e, t) {
  let n = typeof t.checkVisibility == `function` && t.checkVisibility({
    checkVisibilityCSS: !0
  });
  for (let r of e) if (!(n ? !r.checkVisibility({
    checkVisibilityCSS: !0
  }) : Xe(r, {
    upTo: t
  }))) return r;
}
V(Ye, `findVisible`);
function Xe(e, {
  upTo: t
}) {
  if (getComputedStyle(e).visibility === `hidden`) return !0;
  for (; e;) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === `none`) return !0;
    e = e.parentElement;
  }
  return !1;
}
V(Xe, `isHidden`);
function Ze(e) {
  return e instanceof HTMLInputElement && `select` in e;
}
V(Ze, `isSelectableInput`);
function H(e, {
  select: t = !1
} = {}) {
  if (e && e.focus) {
    let n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && Ze(e) && t && e.select();
  }
}
V(H, `focus`);
var Qe = $e();
function $e() {
  let e = [];
  return {
    add(t) {
      let n = e[0];
      t !== n && n?.pause(), e = et(e, t), e.unshift(t);
    },
    remove(t) {
      e = et(e, t), e[0]?.resume();
    }
  };
}
V($e, `createFocusScopesStack`);
function et(e, t) {
  let n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
V(et, `arrayRemove`);
function tt(e) {
  return e.filter(e => e.tagName !== `A`);
}
V(tt, `removeLinks`);
var nt = Object.defineProperty,
  rt = o.forwardRef(((e, t) => nt(e, `name`, {
    value: t,
    configurable: !0
  }))(function (e, t) {
    let {
        container: n,
        ...r
      } = e,
      [i, a] = o.useState(!1);
    E(() => a(!0), []);
    let s = n || i && globalThis?.document?.body;
    return s ? fe.createPortal((0, b.jsx)(R.div, {
      ...r,
      ref: t
    }), s) : null;
  }, `Portal`)),
  it = Object.defineProperty,
  U = (e, t) => it(e, `name`, {
    value: t,
    configurable: !0
  });
function at(e, t) {
  return o.useReducer((e, n) => t[e][n] ?? e, e);
}
U(at, `useStateMachine`);
var ot = U(e => {
  let {
      present: t,
      children: n
    } = e,
    r = st(t),
    i = typeof n == `function` ? n({
      present: r.isPresent
    }) : o.Children.only(n),
    a = lt(r.ref, ut(i));
  return typeof n == `function` || r.isPresent ? o.cloneElement(i, {
    ref: a
  }) : null;
}, `Presence`);
function st(e) {
  let [t, n] = o.useState(),
    r = o.useRef(null),
    i = o.useRef(e),
    a = o.useRef(`none`),
    s = o.useRef(void 0),
    [c, l] = at(e ? `mounted` : `unmounted`, {
      mounted: {
        UNMOUNT: `unmounted`,
        ANIMATION_OUT: `unmountSuspended`
      },
      unmountSuspended: {
        MOUNT: `mounted`,
        ANIMATION_END: `unmounted`
      },
      unmounted: {
        MOUNT: `mounted`
      }
    });
  return o.useEffect(() => {
    c === `mounted` ? (a.current = s.current ?? W(r.current), s.current = void 0) : a.current = `none`;
  }, [c]), E(() => {
    let t = r.current,
      n = i.current;
    if (n !== e) {
      let r = a.current,
        o = W(t);
      e ? (s.current = o, l(`MOUNT`)) : o === `none` || t?.display === `none` ? l(`UNMOUNT`) : l(n && r !== o ? `ANIMATION_OUT` : `UNMOUNT`), i.current = e;
    }
  }, [e, l]), E(() => {
    if (t) {
      let e,
        n = t.ownerDocument.defaultView ?? window,
        o = U(a => {
          let o = W(r.current).includes(CSS.escape(a.animationName));
          if (a.target === t && o && (l(`ANIMATION_END`), !i.current)) {
            let r = t.style.animationFillMode;
            t.style.animationFillMode = `forwards`, e = n.setTimeout(() => {
              t.style.animationFillMode === `forwards` && (t.style.animationFillMode = r);
            });
          }
        }, `handleAnimationEnd`),
        s = U(e => {
          e.target === t && (a.current = W(r.current));
        }, `handleAnimationStart`);
      return t.addEventListener(`animationstart`, s), t.addEventListener(`animationcancel`, o), t.addEventListener(`animationend`, o), () => {
        n.clearTimeout(e), t.removeEventListener(`animationstart`, s), t.removeEventListener(`animationcancel`, o), t.removeEventListener(`animationend`, o);
      };
    }
    l(`ANIMATION_END`);
  }, [t, l]), {
    isPresent: [`mounted`, `unmountSuspended`].includes(c),
    ref: o.useCallback(e => {
      if (e) {
        let t = getComputedStyle(e);
        r.current = t, s.current = W(t);
      } else r.current = null;
      n(e);
    }, [])
  };
}
U(st, `usePresence`);
function ct(e, t) {
  if (typeof e == `function`) return e(t);
  e != null && (e.current = t);
}
U(ct, `setRef`);
function lt(...e) {
  let t = o.useRef(e);
  return t.current = e, o.useCallback(e => {
    let n = t.current,
      r = !1,
      i = n.map(t => {
        let n = ct(t, e);
        return !r && typeof n == `function` && (r = !0), n;
      });
    if (r) return () => {
      for (let e = 0; e < i.length; e++) {
        let t = i[e];
        typeof t == `function` ? t() : ct(n[e], null);
      }
    };
  }, []);
}
U(lt, `useStableComposedRefs`);
function W(e) {
  return e?.animationName || `none`;
}
U(W, `getAnimationName`);
function ut(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
    n = t && `isReactWarning` in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, `ref`)?.get, n = t && `isReactWarning` in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
U(ut, `getElementRef`);
var dt = Object.defineProperty,
  ft = (e, t) => dt(e, `name`, {
    value: t,
    configurable: !0
  }),
  pt = 0,
  mt = null;
function ht(e) {
  return gt(), e.children;
}
ft(ht, `FocusGuards`);
function gt() {
  o.useEffect(() => {
    mt ||= {
      start: _t(),
      end: _t()
    };
    let {
      start: e,
      end: t
    } = mt;
    return document.body.firstElementChild !== e && document.body.insertAdjacentElement(`afterbegin`, e), document.body.lastElementChild !== t && document.body.insertAdjacentElement(`beforeend`, t), pt++, () => {
      pt === 1 && (mt?.start.remove(), mt?.end.remove(), mt = null), pt = Math.max(0, pt - 1);
    };
  }, []);
}
ft(gt, `useFocusGuards`);
function _t() {
  let e = document.createElement(`span`);
  return e.setAttribute(`data-radix-focus-guard`, ``), e.tabIndex = 0, e.style.outline = `none`, e.style.opacity = `0`, e.style.position = `fixed`, e.style.pointerEvents = `none`, e;
}
ft(_t, `createFocusGuard`);
var G = function () {
  return G = Object.assign || function (e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    return e;
  }, G.apply(this, arguments);
};
function vt(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == `function`) for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}
function yt(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var bt = `right-scroll-bar-position`,
  xt = `width-before-scroll-bar`,
  St = `with-scroll-bars-hidden`,
  Ct = `--removed-body-scroll-bar-size`;
function wt(e, t) {
  return typeof e == `function` ? e(t) : e && (e.current = t), e;
}
function Tt(e, t) {
  var n = (0, o.useState)(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(e) {
          var t = n.value;
          t !== e && (n.value = e, n.callback(e, t));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var Et = typeof window < `u` ? o.useLayoutEffect : o.useEffect,
  Dt = new WeakMap();
function Ot(e, t) {
  var n = Tt(t || null, function (t) {
    return e.forEach(function (e) {
      return wt(e, t);
    });
  });
  return Et(function () {
    var t = Dt.get(n);
    if (t) {
      var r = new Set(t),
        i = new Set(e),
        a = n.current;
      r.forEach(function (e) {
        i.has(e) || wt(e, null);
      }), i.forEach(function (e) {
        r.has(e) || wt(e, a);
      });
    }
    Dt.set(n, e);
  }, [e]), n;
}
function kt(e) {
  return e;
}
function At(e, t) {
  t === void 0 && (t = kt);
  var n = [],
    r = !1;
  return {
    read: function () {
      if (r) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function (e) {
      var i = t(e, r);
      return n.push(i), function () {
        n = n.filter(function (e) {
          return e !== i;
        });
      };
    },
    assignSyncMedium: function (e) {
      for (r = !0; n.length;) {
        var t = n;
        n = [], t.forEach(e);
      }
      n = {
        push: function (t) {
          return e(t);
        },
        filter: function () {
          return n;
        }
      };
    },
    assignMedium: function (e) {
      r = !0;
      var t = [];
      if (n.length) {
        var i = n;
        n = [], i.forEach(e), t = n;
      }
      var a = function () {
          var n = t;
          t = [], n.forEach(e);
        },
        o = function () {
          return Promise.resolve().then(a);
        };
      o(), n = {
        push: function (e) {
          t.push(e), o();
        },
        filter: function (e) {
          return t = t.filter(e), n;
        }
      };
    }
  };
}
function jt(e) {
  e === void 0 && (e = {});
  var t = At(null);
  return t.options = G({
    async: !0,
    ssr: !1
  }, e), t;
}
var Mt = function (e) {
  var t = e.sideCar,
    n = vt(e, [`sideCar`]);
  if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r) throw Error(`Sidecar medium not found`);
  return o.createElement(r, G({}, n));
};
Mt.isSideCarExport = !0;
function Nt(e, t) {
  return e.useMedium(t), Mt;
}
var Pt = jt(),
  Ft = function () {},
  It = o.forwardRef(function (e, t) {
    var n = o.useRef(null),
      r = o.useState({
        onScrollCapture: Ft,
        onWheelCapture: Ft,
        onTouchMoveCapture: Ft
      }),
      i = r[0],
      a = r[1],
      s = e.forwardProps,
      c = e.children,
      l = e.className,
      u = e.removeScrollBar,
      d = e.enabled,
      f = e.shards,
      p = e.sideCar,
      m = e.noRelative,
      h = e.noIsolation,
      g = e.inert,
      _ = e.allowPinchZoom,
      v = e.as,
      y = v === void 0 ? `div` : v,
      b = e.gapMode,
      x = vt(e, [`forwardProps`, `children`, `className`, `removeScrollBar`, `enabled`, `shards`, `sideCar`, `noRelative`, `noIsolation`, `inert`, `allowPinchZoom`, `as`, `gapMode`]),
      S = p,
      C = Ot([n, t]),
      w = G(G({}, x), i);
    return o.createElement(o.Fragment, null, d && o.createElement(S, {
      sideCar: Pt,
      removeScrollBar: u,
      shards: f,
      noRelative: m,
      noIsolation: h,
      inert: g,
      setCallbacks: a,
      allowPinchZoom: !!_,
      lockRef: n,
      gapMode: b
    }), s ? o.cloneElement(o.Children.only(c), G(G({}, w), {
      ref: C
    })) : o.createElement(y, G({}, w, {
      className: l,
      ref: C
    }), c));
  });
It.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
}, It.classNames = {
  fullWidth: xt,
  zeroRight: bt
};
var Lt,
  Rt = function () {
    if (Lt) return Lt;
    if (typeof __webpack_nonce__ < `u`) return __webpack_nonce__;
  };
function zt() {
  if (!document) return null;
  var e = document.createElement(`style`);
  e.type = `text/css`;
  var t = Rt();
  return t && e.setAttribute(`nonce`, t), e;
}
function Bt(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Vt(e) {
  (document.head || document.getElementsByTagName(`head`)[0]).appendChild(e);
}
var Ht = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = zt()) && (Bt(t, n), Vt(t)), e++;
      },
      remove: function () {
        e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
      }
    };
  },
  Ut = function () {
    var e = Ht();
    return function (t, n) {
      o.useEffect(function () {
        return e.add(t), function () {
          e.remove();
        };
      }, [t && n]);
    };
  },
  Wt = function () {
    var e = Ut();
    return function (t) {
      var n = t.styles,
        r = t.dynamic;
      return e(n, r), null;
    };
  },
  Gt = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
  },
  Kt = function (e) {
    return parseInt(e || ``, 10) || 0;
  },
  qt = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === `padding` ? `paddingLeft` : `marginLeft`],
      r = t[e === `padding` ? `paddingTop` : `marginTop`],
      i = t[e === `padding` ? `paddingRight` : `marginRight`];
    return [Kt(n), Kt(r), Kt(i)];
  },
  Jt = function (e) {
    if (e === void 0 && (e = `margin`), typeof window > `u`) return Gt;
    var t = qt(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0])
    };
  },
  Yt = Wt(),
  Xt = `data-scroll-locked`,
  Zt = function (e, t, n, r) {
    var i = e.left,
      a = e.top,
      o = e.right,
      s = e.gap;
    return n === void 0 && (n = `margin`), `
  .${St} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${Xt}] {
    overflow: hidden ${r};
    overscroll-behavior: contain;
    ${[t && `position: relative ${r};`, n === `margin` && `
    padding-left: ${i}px;
    padding-top: ${a}px;
    padding-right: ${o}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${s}px ${r};
    `, n === `padding` && `padding-right: ${s}px ${r};`].filter(Boolean).join(``)}
  }
  
  .${bt} {
    right: ${s}px ${r};
  }
  
  .${xt} {
    margin-right: ${s}px ${r};
  }
  
  .${bt} .${bt} {
    right: 0 ${r};
  }
  
  .${xt} .${xt} {
    margin-right: 0 ${r};
  }
  
  body[${Xt}] {
    ${Ct}: ${s}px;
  }
`;
  },
  Qt = function () {
    var e = parseInt(document.body.getAttribute(`data-scroll-locked`) || `0`, 10);
    return isFinite(e) ? e : 0;
  },
  $t = function () {
    o.useEffect(function () {
      return document.body.setAttribute(Xt, (Qt() + 1).toString()), function () {
        var e = Qt() - 1;
        e <= 0 ? document.body.removeAttribute(Xt) : document.body.setAttribute(Xt, e.toString());
      };
    }, []);
  },
  en = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      i = r === void 0 ? `margin` : r;
    $t();
    var a = o.useMemo(function () {
      return Jt(i);
    }, [i]);
    return o.createElement(Yt, {
      styles: Zt(a, !t, i, n ? `` : `!important`)
    });
  },
  tn = !1;
if (typeof window < `u`) try {
  var nn = Object.defineProperty({}, "passive", {
    get: function () {
      return tn = !0, !0;
    }
  });
  window.addEventListener(`test`, nn, nn), window.removeEventListener(`test`, nn, nn);
} catch {
  tn = !1;
}
var K = tn ? {
    passive: !1
  } : !1,
  rn = function (e) {
    return e.tagName === `TEXTAREA`;
  },
  an = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return n[t] !== `hidden` && !(n.overflowY === n.overflowX && !rn(e) && n[t] === `visible`);
  },
  on = function (e) {
    return an(e, `overflowY`);
  },
  sn = function (e) {
    return an(e, `overflowX`);
  },
  cn = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      if (typeof ShadowRoot < `u` && r instanceof ShadowRoot && (r = r.host), dn(e, r)) {
        var i = fn(e, r);
        if (i[1] > i[2]) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  ln = function (e) {
    return [e.scrollTop, e.scrollHeight, e.clientHeight];
  },
  un = function (e) {
    return [e.scrollLeft, e.scrollWidth, e.clientWidth];
  },
  dn = function (e, t) {
    return e === `v` ? on(t) : sn(t);
  },
  fn = function (e, t) {
    return e === `v` ? ln(t) : un(t);
  },
  pn = function (e, t) {
    return e === `h` && t === `rtl` ? -1 : 1;
  },
  mn = function (e, t, n, r, i) {
    var a = pn(e, window.getComputedStyle(t).direction),
      o = a * r,
      s = n.target,
      c = t.contains(s),
      l = !1,
      u = o > 0,
      d = 0,
      f = 0;
    do {
      if (!s) break;
      var p = fn(e, s),
        m = p[0],
        h = p[1] - p[2] - a * m;
      (m || h) && dn(e, s) && (d += h, f += m);
      var g = s.parentNode;
      s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
    } while (!c && s !== document.body || c && (t.contains(s) || t === s));
    return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
  },
  hn = function (e) {
    return `changedTouches` in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
  },
  gn = function (e) {
    return [e.deltaX, e.deltaY];
  },
  _n = function (e) {
    return e && `current` in e ? e.current : e;
  },
  vn = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  yn = function (e) {
    return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
  },
  bn = 0,
  xn = [];
function Sn(e) {
  var t = o.useRef([]),
    n = o.useRef([0, 0]),
    r = o.useRef(),
    i = o.useState(bn++)[0],
    a = o.useState(Wt)[0],
    s = o.useRef(e);
  o.useEffect(function () {
    s.current = e;
  }, [e]), o.useEffect(function () {
    if (e.inert) {
      document.body.classList.add(`block-interactivity-${i}`);
      var t = yt([e.lockRef.current], (e.shards || []).map(_n), !0).filter(Boolean);
      return t.forEach(function (e) {
        return e.classList.add(`allow-interactivity-${i}`);
      }), function () {
        document.body.classList.remove(`block-interactivity-${i}`), t.forEach(function (e) {
          return e.classList.remove(`allow-interactivity-${i}`);
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var c = o.useCallback(function (e, t) {
      if (`touches` in e && e.touches.length === 2 || e.type === `wheel` && e.ctrlKey) return !s.current.allowPinchZoom;
      var i = hn(e),
        a = n.current,
        o = `deltaX` in e ? e.deltaX : a[0] - i[0],
        c = `deltaY` in e ? e.deltaY : a[1] - i[1],
        l,
        u = e.target,
        d = Math.abs(o) > Math.abs(c) ? `h` : `v`;
      if (`touches` in e && d === `h` && u.type === `range`) return !1;
      var f = window.getSelection(),
        p = f && f.anchorNode;
      if (p && (p === u || p.contains(u))) return !1;
      var m = cn(d, u);
      if (!m) return !0;
      if (m ? l = d : (l = d === `v` ? `h` : `v`, m = cn(d, u)), !m) return !1;
      if (!r.current && `changedTouches` in e && (o || c) && (r.current = l), !l) return !0;
      var h = r.current || l;
      return mn(h, t, e, h === `h` ? o : c, !0);
    }, []),
    l = o.useCallback(function (e) {
      var n = e;
      if (!(!xn.length || xn[xn.length - 1] !== a)) {
        var r = `deltaY` in n ? gn(n) : hn(n),
          i = t.current.filter(function (e) {
            return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && vn(e.delta, r);
          })[0];
        if (i && i.should) {
          n.cancelable && n.preventDefault();
          return;
        }
        if (!i) {
          var o = (s.current.shards || []).map(_n).filter(Boolean).filter(function (e) {
            return e.contains(n.target);
          });
          (o.length > 0 ? c(n, o[0]) : !s.current.noIsolation) && n.cancelable && n.preventDefault();
        }
      }
    }, []),
    u = o.useCallback(function (e, n, r, i) {
      var a = {
        name: e,
        delta: n,
        target: r,
        should: i,
        shadowParent: Cn(r)
      };
      t.current.push(a), setTimeout(function () {
        t.current = t.current.filter(function (e) {
          return e !== a;
        });
      }, 1);
    }, []),
    d = o.useCallback(function (e) {
      n.current = hn(e), r.current = void 0;
    }, []),
    f = o.useCallback(function (t) {
      u(t.type, gn(t), t.target, c(t, e.lockRef.current));
    }, []),
    p = o.useCallback(function (t) {
      u(t.type, hn(t), t.target, c(t, e.lockRef.current));
    }, []);
  o.useEffect(function () {
    return xn.push(a), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: p
    }), document.addEventListener(`wheel`, l, K), document.addEventListener(`touchmove`, l, K), document.addEventListener(`touchstart`, d, K), function () {
      xn = xn.filter(function (e) {
        return e !== a;
      }), document.removeEventListener(`wheel`, l, K), document.removeEventListener(`touchmove`, l, K), document.removeEventListener(`touchstart`, d, K);
    };
  }, []);
  var m = e.removeScrollBar,
    h = e.inert;
  return o.createElement(o.Fragment, null, h ? o.createElement(a, {
    styles: yn(i)
  }) : null, m ? o.createElement(en, {
    noRelative: e.noRelative,
    gapMode: e.gapMode
  }) : null);
}
function Cn(e) {
  for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
var wn = Nt(Pt, Sn),
  Tn = o.forwardRef(function (e, t) {
    return o.createElement(It, G({}, e, {
      ref: t,
      sideCar: wn
    }));
  });
Tn.classNames = It.classNames;
var En = function (e) {
    return typeof document > `u` ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
  },
  Dn = new WeakMap(),
  On = new WeakMap(),
  kn = {},
  An = 0,
  jn = function (e) {
    return e && (e.host || jn(e.parentNode));
  },
  Mn = function (e, t) {
    return t.map(function (t) {
      if (e.contains(t)) return t;
      var n = jn(t);
      return n && e.contains(n) ? n : (console.error(`aria-hidden`, t, `in not contained inside`, e, `. Doing nothing`), null);
    }).filter(function (e) {
      return !!e;
    });
  },
  Nn = function (e, t, n, r) {
    var i = Mn(t, Array.isArray(e) ? e : [e]);
    kn[n] || (kn[n] = new WeakMap());
    var a = kn[n],
      o = [],
      s = new Set(),
      c = new Set(i),
      l = function (e) {
        !e || s.has(e) || (s.add(e), l(e.parentNode));
      };
    i.forEach(l);
    var u = function (e) {
      !e || c.has(e) || Array.prototype.forEach.call(e.children, function (e) {
        if (s.has(e)) u(e);else try {
          var t = e.getAttribute(r),
            i = t !== null && t !== `false`,
            c = (Dn.get(e) || 0) + 1,
            l = (a.get(e) || 0) + 1;
          Dn.set(e, c), a.set(e, l), o.push(e), c === 1 && i && On.set(e, !0), l === 1 && e.setAttribute(n, `true`), i || e.setAttribute(r, `true`);
        } catch (t) {
          console.error(`aria-hidden: cannot operate on `, e, t);
        }
      });
    };
    return u(t), s.clear(), An++, function () {
      o.forEach(function (e) {
        var t = Dn.get(e) - 1,
          i = a.get(e) - 1;
        Dn.set(e, t), a.set(e, i), t || (On.has(e) || e.removeAttribute(r), On.delete(e)), i || e.removeAttribute(n);
      }), An--, An || (Dn = new WeakMap(), Dn = new WeakMap(), On = new WeakMap(), kn = {});
    };
  },
  Pn = function (e, t, n) {
    n === void 0 && (n = `data-aria-hidden`);
    var r = Array.from(Array.isArray(e) ? e : [e]),
      i = t || En(e);
    return i ? (r.push.apply(r, Array.from(i.querySelectorAll(`[aria-live], script`))), Nn(r, i, n, `aria-hidden`)) : function () {
      return null;
    };
  },
  Fn = Object.defineProperty,
  q = (e, t) => Fn(e, `name`, {
    value: t,
    configurable: !0
  }),
  In = `Dialog`,
  [Ln, Rn] = w(In),
  [zn, J] = Ln(In),
  Bn = q(e => {
    let {
        __scopeDialog: t,
        children: n,
        open: r,
        defaultOpen: i,
        onOpenChange: a,
        modal: s = !0
      } = e,
      c = o.useRef(null),
      l = o.useRef(null),
      [u, d] = ce({
        prop: r,
        defaultProp: i ?? !1,
        onChange: a,
        caller: In
      }),
      [f, p] = o.useState(0),
      [m, h] = o.useState(0);
    return (0, b.jsx)(zn, {
      scope: t,
      triggerRef: c,
      contentRef: l,
      contentId: k(),
      titleId: k(),
      descriptionId: k(),
      titlePresent: f > 0,
      descriptionPresent: m > 0,
      setTitleCount: p,
      setDescriptionCount: h,
      open: u,
      onOpenChange: d,
      onOpenToggle: o.useCallback(() => d(e => !e), [d]),
      modal: s,
      children: n
    });
  }, `Dialog`),
  Vn = `DialogTrigger`,
  Hn = o.forwardRef(q(function (e, t) {
    let {
        __scopeDialog: n,
        ...r
      } = e,
      i = J(Vn, n),
      a = y(t, i.triggerRef);
    return (0, b.jsx)(R.button, {
      type: `button`,
      "aria-haspopup": `dialog`,
      "aria-expanded": i.open,
      "aria-controls": i.open ? i.contentId : void 0,
      "data-state": cr(i.open),
      ...r,
      ref: a,
      onClick: u(e.onClick, i.onOpenToggle)
    });
  }, `DialogTrigger`)),
  Un = `DialogPortal`,
  [Wn, Gn] = Ln(Un, {
    forceMount: void 0
  }),
  Kn = q(e => {
    let {
        __scopeDialog: t,
        forceMount: n,
        children: r,
        container: i
      } = e,
      a = J(Un, t);
    return (0, b.jsx)(Wn, {
      scope: t,
      forceMount: n,
      children: o.Children.map(r, e => (0, b.jsx)(ot, {
        present: n || a.open,
        children: (0, b.jsx)(rt, {
          asChild: !0,
          container: i,
          children: e
        })
      }))
    });
  }, `DialogPortal`),
  qn = `DialogOverlay`,
  Jn = o.forwardRef(q(function (e, t) {
    let n = Gn(qn, e.__scopeDialog),
      {
        forceMount: r = n.forceMount,
        ...i
      } = e,
      a = J(qn, e.__scopeDialog);
    return a.modal ? (0, b.jsx)(ot, {
      present: r || a.open,
      children: (0, b.jsx)(Xn, {
        ...i,
        ref: t
      })
    }) : null;
  }, `DialogOverlay`)),
  Yn = pe(`DialogOverlay.RemoveScroll`),
  Xn = o.forwardRef(q(function (e, t) {
    let {
        __scopeDialog: n,
        ...r
      } = e,
      i = J(qn, n),
      a = y(t, Fe());
    return (0, b.jsx)(Tn, {
      as: Yn,
      allowPinchZoom: !0,
      shards: [i.contentRef],
      children: (0, b.jsx)(R.div, {
        "data-state": cr(i.open),
        ...r,
        ref: a,
        style: {
          pointerEvents: `auto`,
          ...r.style
        }
      })
    });
  }, `DialogOverlayImpl`)),
  Zn = `DialogContent`,
  Qn = o.forwardRef(q(function (e, t) {
    let n = Gn(Zn, e.__scopeDialog),
      {
        forceMount: r = n.forceMount,
        ...i
      } = e,
      a = J(Zn, e.__scopeDialog);
    return (0, b.jsx)(ot, {
      present: r || a.open,
      children: a.modal ? (0, b.jsx)($n, {
        ...i,
        ref: t
      }) : (0, b.jsx)(er, {
        ...i,
        ref: t
      })
    });
  }, `DialogContent`)),
  $n = o.forwardRef(q(function (e, t) {
    let n = J(Zn, e.__scopeDialog),
      r = o.useRef(null),
      i = y(t, n.contentRef, r);
    return o.useEffect(() => {
      let e = r.current;
      if (e) return Pn(e);
    }, []), (0, b.jsx)(tr, {
      ...e,
      ref: i,
      trapFocus: n.open,
      disableOutsidePointerEvents: n.open,
      onCloseAutoFocus: u(e.onCloseAutoFocus, e => {
        e.preventDefault(), n.triggerRef.current?.focus();
      }),
      onPointerDownOutside: u(e.onPointerDownOutside, e => {
        let t = e.detail.originalEvent,
          n = t.button === 0 && t.ctrlKey === !0;
        (t.button === 2 || n) && e.preventDefault();
      }),
      onFocusOutside: u(e.onFocusOutside, e => e.preventDefault())
    });
  }, `DialogContentModal`)),
  er = o.forwardRef(q(function (e, t) {
    let n = J(Zn, e.__scopeDialog),
      r = o.useRef(!1),
      i = o.useRef(!1);
    return (0, b.jsx)(tr, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: t => {
        e.onCloseAutoFocus?.(t), t.defaultPrevented || (r.current || n.triggerRef.current?.focus(), t.preventDefault()), r.current = !1, i.current = !1;
      },
      onInteractOutside: t => {
        e.onInteractOutside?.(t), t.defaultPrevented || (r.current = !0, t.detail.originalEvent.type === `pointerdown` && (i.current = !0));
        let a = t.target;
        n.triggerRef.current?.contains(a) && t.preventDefault(), t.detail.originalEvent.type === `focusin` && i.current && t.preventDefault();
      }
    });
  }, `DialogContentNonModal`)),
  tr = o.forwardRef(q(function (e, t) {
    let {
        __scopeDialog: n,
        trapFocus: r,
        onOpenAutoFocus: i,
        onCloseAutoFocus: a,
        ...o
      } = e,
      s = J(Zn, n);
    return gt(), (0, b.jsx)(b.Fragment, {
      children: (0, b.jsx)(Ge, {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: i,
        onUnmountAutoFocus: a,
        children: (0, b.jsx)(Pe, {
          role: `dialog`,
          id: s.contentId,
          "aria-describedby": s.descriptionPresent ? s.descriptionId : void 0,
          "aria-labelledby": s.titlePresent ? s.titleId : void 0,
          "data-state": cr(s.open),
          ...o,
          ref: t,
          deferPointerDownOutside: !0,
          onDismiss: () => s.onOpenChange(!1)
        })
      })
    });
  }, `DialogContentImpl`)),
  nr = `DialogTitle`,
  rr = o.forwardRef(q(function (e, t) {
    let {
        __scopeDialog: n,
        ...r
      } = e,
      i = J(nr, n),
      {
        setTitleCount: a
      } = i;
    return E(() => (a(e => e + 1), () => a(e => e - 1)), [a]), (0, b.jsx)(R.h2, {
      id: i.titleId,
      ...r,
      ref: t
    });
  }, `DialogTitle`)),
  ir = `DialogDescription`,
  ar = o.forwardRef(q(function (e, t) {
    let {
        __scopeDialog: n,
        ...r
      } = e,
      i = J(ir, n),
      {
        setDescriptionCount: a
      } = i;
    return E(() => (a(e => e + 1), () => a(e => e - 1)), [a]), (0, b.jsx)(R.p, {
      id: i.descriptionId,
      ...r,
      ref: t
    });
  }, `DialogDescription`)),
  or = `DialogClose`,
  sr = o.forwardRef(q(function (e, t) {
    let {
        __scopeDialog: n,
        ...r
      } = e,
      i = J(or, n);
    return (0, b.jsx)(R.button, {
      type: `button`,
      ...r,
      ref: t,
      onClick: u(e.onClick, () => i.onOpenChange(!1))
    });
  }, `DialogClose`));
function cr(e) {
  return e ? `open` : `closed`;
}
q(cr, `getState`);
var lr = t({
  Content: () => ii,
  Drawer: () => $,
  Handle: () => si,
  NestedRoot: () => ci,
  Overlay: () => ri,
  Portal: () => li,
  Root: () => ni
});
function ur(e) {
  if (!e || typeof document > `u`) return;
  let t = document.head || document.getElementsByTagName(`head`)[0],
    n = document.createElement(`style`);
  n.type = `text/css`, t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
var dr = o.createContext({
    drawerRef: {
      current: null
    },
    overlayRef: {
      current: null
    },
    onPress: () => {},
    onRelease: () => {},
    onDrag: () => {},
    onNestedDrag: () => {},
    onNestedOpenChange: () => {},
    onNestedRelease: () => {},
    openProp: void 0,
    dismissible: !1,
    isOpen: !1,
    isDragging: !1,
    keyboardIsOpen: {
      current: !1
    },
    snapPointsOffset: null,
    snapPoints: null,
    handleOnly: !1,
    modal: !1,
    shouldFade: !1,
    activeSnapPoint: null,
    onOpenChange: () => {},
    setActiveSnapPoint: () => {},
    closeDrawer: () => {},
    direction: `bottom`,
    shouldAnimate: {
      current: !0
    },
    shouldScaleBackground: !1,
    setBackgroundColorOnScale: !0,
    noBodyStyles: !1,
    container: null,
    autoFocus: !1
  }),
  Y = () => {
    let e = o.useContext(dr);
    if (!e) throw Error(`useDrawerContext must be used within a Drawer.Root`);
    return e;
  };
ur(`[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform,100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform,100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(
[data-state=closed]
){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,var(--initial-transform,100%),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform,100%),0)}}@keyframes slideFromTop{from{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}}@keyframes slideFromLeft{from{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}}@keyframes slideFromRight{from{transform:translate3d(var(--initial-transform,100%),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform,100%),0,0)}}`);
function fr() {
  let e = navigator.userAgent;
  return typeof window < `u` && (/Firefox/.test(e) && /Mobile/.test(e) || /FxiOS/.test(e));
}
function pr() {
  return vr(/^Mac/);
}
function mr() {
  return vr(/^iPhone/);
}
function hr() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function gr() {
  return vr(/^iPad/) || pr() && navigator.maxTouchPoints > 1;
}
function _r() {
  return mr() || gr();
}
function vr(e) {
  return typeof window < `u` && window.navigator != null ? e.test(window.navigator.platform) : void 0;
}
var yr = 24,
  br = typeof window < `u` ? o.useLayoutEffect : o.useEffect;
function xr(...e) {
  return (...t) => {
    for (let n of e) typeof n == `function` && n(...t);
  };
}
var Sr = typeof document < `u` && window.visualViewport;
function Cr(e) {
  let t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function wr(e) {
  for (Cr(e) && (e = e.parentElement); e && !Cr(e);) e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
var Tr = new Set([`checkbox`, `radio`, `range`, `color`, `file`, `image`, `button`, `submit`, `reset`]),
  Er = 0,
  Dr;
function Or(e = {}) {
  let {
    isDisabled: t
  } = e;
  br(() => {
    if (!t) return Er++, Er === 1 && _r() && (Dr = kr()), () => {
      Er--, Er === 0 && Dr?.();
    };
  }, [t]);
}
function kr() {
  let e,
    t = 0,
    n = n => {
      e = wr(n.target), (e !== document.documentElement || e !== document.body) && (t = n.changedTouches[0].pageY);
    },
    r = n => {
      if (!e || e === document.documentElement || e === document.body) {
        n.preventDefault();
        return;
      }
      let r = n.changedTouches[0].pageY,
        i = e.scrollTop,
        a = e.scrollHeight - e.clientHeight;
      a !== 0 && ((i <= 0 && r > t || i >= a && r < t) && n.preventDefault(), t = r);
    },
    i = e => {
      let t = e.target;
      Nr(t) && t !== document.activeElement && (e.preventDefault(), t.style.transform = `translateY(-2000px)`, t.focus(), requestAnimationFrame(() => {
        t.style.transform = ``;
      }));
    },
    a = e => {
      let t = e.target;
      Nr(t) && (t.style.transform = `translateY(-2000px)`, requestAnimationFrame(() => {
        t.style.transform = ``, Sr && (Sr.height < window.innerHeight ? requestAnimationFrame(() => {
          Mr(t);
        }) : Sr.addEventListener(`resize`, () => Mr(t), {
          once: !0
        }));
      }));
    },
    o = () => {
      window.scrollTo(0, 0);
    },
    s = window.pageXOffset,
    c = window.pageYOffset,
    l = xr(Ar(document.documentElement, `paddingRight`, `${window.innerWidth - document.documentElement.clientWidth}px`));
  window.scrollTo(0, 0);
  let u = xr(jr(document, `touchstart`, n, {
    passive: !1,
    capture: !0
  }), jr(document, `touchmove`, r, {
    passive: !1,
    capture: !0
  }), jr(document, `touchend`, i, {
    passive: !1,
    capture: !0
  }), jr(document, `focus`, a, !0), jr(window, `scroll`, o));
  return () => {
    l(), u(), window.scrollTo(s, c);
  };
}
function Ar(e, t, n) {
  let r = e.style[t];
  return e.style[t] = n, () => {
    e.style[t] = r;
  };
}
function jr(e, t, n, r) {
  return e.addEventListener(t, n, r), () => {
    e.removeEventListener(t, n, r);
  };
}
function Mr(e) {
  let t = document.scrollingElement || document.documentElement;
  for (; e && e !== t;) {
    let t = wr(e);
    if (t !== document.documentElement && t !== document.body && t !== e) {
      let n = t.getBoundingClientRect().top,
        r = e.getBoundingClientRect().top;
      e.getBoundingClientRect().bottom > t.getBoundingClientRect().bottom + yr && (t.scrollTop += r - n);
    }
    e = t.parentElement;
  }
}
function Nr(e) {
  return e instanceof HTMLInputElement && !Tr.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function Pr(e, t) {
  typeof e == `function` ? e(t) : e != null && (e.current = t);
}
function Fr(...e) {
  return t => e.forEach(e => Pr(e, t));
}
function Ir(...e) {
  return o.useCallback(Fr(...e), e);
}
var Lr = new WeakMap();
function X(e, t, n = !1) {
  if (!e || !(e instanceof HTMLElement)) return;
  let r = {};
  Object.entries(t).forEach(([t, n]) => {
    if (t.startsWith(`--`)) {
      e.style.setProperty(t, n);
      return;
    }
    r[t] = e.style[t], e.style[t] = n;
  }), !n && Lr.set(e, r);
}
function Rr(e, t) {
  if (!e || !(e instanceof HTMLElement)) return;
  let n = Lr.get(e);
  n && (e.style[t] = n[t]);
}
var Z = e => {
  switch (e) {
    case `top`:
    case `bottom`:
      return !0;
    case `left`:
    case `right`:
      return !1;
    default:
      return e;
  }
};
function zr(e, t) {
  if (!e) return null;
  let n = window.getComputedStyle(e),
    r = n.transform || n.webkitTransform || n.mozTransform,
    i = r.match(/^matrix3d\((.+)\)$/);
  return i ? parseFloat(i[1].split(`, `)[Z(t) ? 13 : 12]) : (i = r.match(/^matrix\((.+)\)$/), i ? parseFloat(i[1].split(`, `)[Z(t) ? 5 : 4]) : null);
}
function Br(e) {
  return 8 * (Math.log(e + 1) - 2);
}
function Vr(e, t) {
  if (!e) return () => {};
  let n = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = n;
  };
}
var Q = {
    DURATION: .5,
    EASE: [.32, .72, 0, 1]
  },
  Hr = .4,
  Ur = .25,
  Wr = 100,
  Gr = 8,
  Kr = 16,
  qr = 26,
  Jr = `vaul-dragging`;
function Yr(e) {
  let t = o.useRef(e);
  return o.useEffect(() => {
    t.current = e;
  }), o.useMemo(() => (...e) => t.current == null ? void 0 : t.current.call(t, ...e), []);
}
function Xr({
  defaultProp: e,
  onChange: t
}) {
  let n = o.useState(e),
    [r] = n,
    i = o.useRef(r),
    a = Yr(t);
  return o.useEffect(() => {
    i.current !== r && (a(r), i.current = r);
  }, [r, i, a]), n;
}
function Zr({
  prop: e,
  defaultProp: t,
  onChange: n = () => {}
}) {
  let [r, i] = Xr({
      defaultProp: t,
      onChange: n
    }),
    a = e !== void 0,
    s = a ? e : r,
    c = Yr(n);
  return [s, o.useCallback(t => {
    if (a) {
      let n = typeof t == `function` ? t(e) : t;
      n !== e && c(n);
    } else i(t);
  }, [a, e, i, c])];
}
function Qr({
  activeSnapPointProp: e,
  setActiveSnapPointProp: t,
  snapPoints: n,
  drawerRef: r,
  overlayRef: i,
  fadeFromIndex: a,
  onSnapPointChange: s,
  direction: c = `bottom`,
  container: l,
  snapToSequentialPoint: u
}) {
  let [d, f] = Zr({
      prop: e,
      defaultProp: n?.[0],
      onChange: t
    }),
    [p, m] = o.useState(typeof window < `u` ? {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight
    } : void 0);
  o.useEffect(() => {
    function e() {
      m({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
      });
    }
    return window.addEventListener(`resize`, e), () => window.removeEventListener(`resize`, e);
  }, []);
  let h = o.useMemo(() => d === n?.[n.length - 1] || null, [n, d]),
    g = o.useMemo(() => n?.findIndex(e => e === d) ?? null, [n, d]),
    _ = n && n.length > 0 && (a || a === 0) && !Number.isNaN(a) && n[a] === d || !n,
    v = o.useMemo(() => {
      let e = l ? {
        width: l.getBoundingClientRect().width,
        height: l.getBoundingClientRect().height
      } : typeof window < `u` ? {
        width: window.innerWidth,
        height: window.innerHeight
      } : {
        width: 0,
        height: 0
      };
      return n?.map(t => {
        let n = typeof t == `string`,
          r = 0;
        if (n && (r = parseInt(t, 10)), Z(c)) {
          let i = n ? r : p ? t * e.height : 0;
          return p ? c === `bottom` ? e.height - i : -e.height + i : i;
        }
        let i = n ? r : p ? t * e.width : 0;
        return p ? c === `right` ? e.width - i : -e.width + i : i;
      }) ?? [];
    }, [n, p, l]),
    y = o.useMemo(() => g === null ? null : v?.[g], [v, g]),
    b = o.useCallback(e => {
      let t = v?.findIndex(t => t === e) ?? null;
      s(t), X(r.current, {
        transition: `transform ${Q.DURATION}s cubic-bezier(${Q.EASE.join(`,`)})`,
        transform: Z(c) ? `translate3d(0, ${e}px, 0)` : `translate3d(${e}px, 0, 0)`
      }), v && t !== v.length - 1 && a !== void 0 && t !== a && t < a ? X(i.current, {
        transition: `opacity ${Q.DURATION}s cubic-bezier(${Q.EASE.join(`,`)})`,
        opacity: `0`
      }) : X(i.current, {
        transition: `opacity ${Q.DURATION}s cubic-bezier(${Q.EASE.join(`,`)})`,
        opacity: `1`
      }), f(n?.[Math.max(t, 0)]);
    }, [r.current, n, v, a, i, f]);
  o.useEffect(() => {
    if (d || e) {
      let t = n?.findIndex(t => t === e || t === d) ?? -1;
      v && t !== -1 && typeof v[t] == `number` && b(v[t]);
    }
  }, [d, e, n, v, b]);
  function x({
    draggedDistance: e,
    closeDrawer: t,
    velocity: r,
    dismissible: o
  }) {
    if (a === void 0) return;
    let s = c === `bottom` || c === `right` ? (y ?? 0) - e : (y ?? 0) + e,
      l = g === a - 1,
      d = g === 0,
      f = e > 0;
    if (l && X(i.current, {
      transition: `opacity ${Q.DURATION}s cubic-bezier(${Q.EASE.join(`,`)})`
    }), !u && r > 2 && !f) {
      o ? t() : b(v[0]);
      return;
    }
    if (!u && r > 2 && f && v && n) {
      b(v[n.length - 1]);
      return;
    }
    let p = v?.reduce((e, t) => typeof e != `number` || typeof t != `number` ? e : Math.abs(t - s) < Math.abs(e - s) ? t : e),
      m = Z(c) ? window.innerHeight : window.innerWidth;
    if (r > Hr && Math.abs(e) < m * .4) {
      let e = f ? 1 : -1;
      if (e > 0 && h && n) {
        b(v[n.length - 1]);
        return;
      }
      if (d && e < 0 && o && t(), g === null) return;
      b(v[g + e]);
      return;
    }
    b(p);
  }
  function S({
    draggedDistance: e
  }) {
    if (y === null) return;
    let t = c === `bottom` || c === `right` ? y - e : y + e;
    (c === `bottom` || c === `right`) && t < v[v.length - 1] || (c === `top` || c === `left`) && t > v[v.length - 1] || X(r.current, {
      transform: Z(c) ? `translate3d(0, ${t}px, 0)` : `translate3d(${t}px, 0, 0)`
    });
  }
  function C(e, t) {
    if (!n || typeof g != `number` || !v || a === void 0) return null;
    let r = g === a - 1;
    if (g >= a && t) return 0;
    if (r && !t) return 1;
    if (!_ && !r) return null;
    let i = r ? g + 1 : g - 1,
      o = r ? v[i] - v[i - 1] : v[i + 1] - v[i],
      s = e / Math.abs(o);
    return r ? 1 - s : s;
  }
  return {
    isLastSnapPoint: h,
    activeSnapPoint: d,
    shouldFade: _,
    getPercentageDragged: C,
    setActiveSnapPoint: f,
    activeSnapPointIndex: g,
    onRelease: x,
    onDrag: S,
    snapPointsOffset: v
  };
}
function $r() {
  let {
      direction: e,
      isOpen: t,
      shouldScaleBackground: n,
      setBackgroundColorOnScale: r,
      noBodyStyles: i
    } = Y(),
    a = o.useRef(null),
    s = (0, o.useMemo)(() => document.body.style.backgroundColor, []);
  function c() {
    return (window.innerWidth - qr) / window.innerWidth;
  }
  o.useEffect(() => {
    if (t && n) {
      a.current && clearTimeout(a.current);
      let t = document.querySelector(`[data-vaul-drawer-wrapper]`) || document.querySelector(`[vaul-drawer-wrapper]`);
      if (!t) return;
      r && !i && Vr(document.body, {
        background: `black`
      }), Vr(t, {
        transformOrigin: Z(e) ? `top` : `left`,
        transitionProperty: `transform, border-radius`,
        transitionDuration: `${Q.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${Q.EASE.join(`,`)})`
      });
      let n = Vr(t, {
        borderRadius: `${Gr}px`,
        overflow: `hidden`,
        ...(Z(e) ? {
          transform: `scale(${c()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`
        } : {
          transform: `scale(${c()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`
        })
      });
      return () => {
        n(), a.current = window.setTimeout(() => {
          s ? document.body.style.background = s : document.body.style.removeProperty(`background`);
        }, Q.DURATION * 1e3);
      };
    }
  }, [t, n, s]);
}
var ei = null;
function ti({
  isOpen: e,
  modal: t,
  nested: n,
  hasBeenOpened: r,
  preventScrollRestoration: i,
  noBodyStyles: a
}) {
  let [s, c] = o.useState(() => typeof window < `u` ? window.location.href : ``),
    l = o.useRef(0),
    u = o.useCallback(() => {
      if (hr() && ei === null && e && !a) {
        ei = {
          position: document.body.style.position,
          top: document.body.style.top,
          left: document.body.style.left,
          height: document.body.style.height,
          right: `unset`
        };
        let {
          scrollX: e,
          innerHeight: t
        } = window;
        document.body.style.setProperty(`position`, `fixed`, `important`), Object.assign(document.body.style, {
          top: `${-l.current}px`,
          left: `${-e}px`,
          right: `0px`,
          height: `auto`
        }), window.setTimeout(() => window.requestAnimationFrame(() => {
          let e = t - window.innerHeight;
          e && l.current >= t && (document.body.style.top = `${-(l.current + e)}px`);
        }), 300);
      }
    }, [e]),
    d = o.useCallback(() => {
      if (hr() && ei !== null && !a) {
        let e = -parseInt(document.body.style.top, 10),
          t = -parseInt(document.body.style.left, 10);
        Object.assign(document.body.style, ei), window.requestAnimationFrame(() => {
          if (i && s !== window.location.href) {
            c(window.location.href);
            return;
          }
          window.scrollTo(t, e);
        }), ei = null;
      }
    }, [s]);
  return o.useEffect(() => {
    function e() {
      l.current = window.scrollY;
    }
    return e(), window.addEventListener(`scroll`, e), () => {
      window.removeEventListener(`scroll`, e);
    };
  }, []), o.useEffect(() => {
    if (t) return () => {
      typeof document > `u` || document.querySelector(`[data-vaul-drawer]`) || d();
    };
  }, [t, d]), o.useEffect(() => {
    n || !r || (e ? (!window.matchMedia(`(display-mode: standalone)`).matches && u(), t || window.setTimeout(() => {
      d();
    }, 500)) : d());
  }, [e, r, s, t, n, u, d]), {
    restorePositionSetting: d
  };
}
function ni({
  open: e,
  onOpenChange: t,
  children: n,
  onDrag: r,
  onRelease: i,
  snapPoints: a,
  shouldScaleBackground: s = !1,
  setBackgroundColorOnScale: c = !0,
  closeThreshold: l = Ur,
  scrollLockTimeout: u = Wr,
  dismissible: d = !0,
  handleOnly: f = !1,
  fadeFromIndex: p = a && a.length - 1,
  activeSnapPoint: m,
  setActiveSnapPoint: h,
  fixed: g,
  modal: _ = !0,
  onClose: v,
  nested: y,
  noBodyStyles: b = !1,
  direction: x = `bottom`,
  defaultOpen: S = !1,
  disablePreventScroll: C = !0,
  snapToSequentialPoint: w = !1,
  preventScrollRestoration: T = !1,
  repositionInputs: E = !0,
  onAnimationEnd: ee,
  container: te,
  autoFocus: D = !1
}) {
  let [O = !1, k] = Zr({
      defaultProp: S,
      prop: e,
      onChange: e => {
        t?.(e), !e && !y && Ce(), setTimeout(() => {
          ee?.(e);
        }, Q.DURATION * 1e3), e && !_ && typeof window < `u` && window.requestAnimationFrame(() => {
          document.body.style.pointerEvents = `auto`;
        }), e || (document.body.style.pointerEvents = `auto`);
      }
    }),
    [ne, re] = o.useState(!1),
    [A, ie] = o.useState(!1),
    [ae, oe] = o.useState(!1),
    j = o.useRef(null),
    se = o.useRef(null),
    ce = o.useRef(null),
    le = o.useRef(null),
    ue = o.useRef(null),
    M = o.useRef(!1),
    de = o.useRef(null),
    fe = o.useRef(0),
    N = o.useRef(!1),
    P = o.useRef(!S),
    pe = o.useRef(0),
    F = o.useRef(null),
    me = o.useRef(F.current?.getBoundingClientRect().height || 0),
    he = o.useRef(F.current?.getBoundingClientRect().width || 0),
    ge = o.useRef(0),
    {
      activeSnapPoint: _e,
      activeSnapPointIndex: I,
      setActiveSnapPoint: ve,
      onRelease: ye,
      snapPointsOffset: L,
      onDrag: be,
      shouldFade: xe,
      getPercentageDragged: Se
    } = Qr({
      snapPoints: a,
      activeSnapPointProp: m,
      setActiveSnapPointProp: h,
      drawerRef: F,
      fadeFromIndex: p,
      overlayRef: j,
      onSnapPointChange: o.useCallback(e => {
        a && e === L.length - 1 && (se.current = new Date());
      }, []),
      direction: x,
      container: te,
      snapToSequentialPoint: w
    });
  Or({
    isDisabled: !O || A || !_ || ae || !ne || !E || !C
  });
  let {
    restorePositionSetting: Ce
  } = ti({
    isOpen: O,
    modal: _,
    nested: y ?? !1,
    hasBeenOpened: ne,
    preventScrollRestoration: T,
    noBodyStyles: b
  });
  function we() {
    return (window.innerWidth - qr) / window.innerWidth;
  }
  function R(e) {
    !d && !a || F.current && !F.current.contains(e.target) || (me.current = F.current?.getBoundingClientRect().height || 0, he.current = F.current?.getBoundingClientRect().width || 0, ie(!0), ce.current = new Date(), _r() && window.addEventListener(`touchend`, () => M.current = !1, {
      once: !0
    }), e.target.setPointerCapture(e.pointerId), fe.current = Z(x) ? e.pageY : e.pageX);
  }
  function Te(e, t) {
    let n = e,
      r = window.getSelection()?.toString(),
      i = F.current ? zr(F.current, x) : null,
      a = new Date();
    if (n.tagName === `SELECT` || n.hasAttribute(`data-vaul-no-drag`) || n.closest(`[data-vaul-no-drag]`)) return !1;
    if (x === `right` || x === `left`) return !0;
    if (se.current && a.getTime() - se.current.getTime() < 500) return !1;
    if (i !== null && (x === `bottom` ? i > 0 : i < 0)) return !0;
    if (r && r.length > 0) return !1;
    if (ue.current && a.getTime() - ue.current.getTime() < u && i === 0 || t) return ue.current = a, !1;
    for (; n;) {
      if (n.scrollHeight > n.clientHeight) {
        if (n.scrollTop !== 0) return ue.current = new Date(), !1;
        if (n.getAttribute(`role`) === `dialog`) return !0;
      }
      n = n.parentNode;
    }
    return !0;
  }
  function Ee(e) {
    if (F.current && A) {
      let t = x === `bottom` || x === `right` ? 1 : -1,
        n = (fe.current - (Z(x) ? e.pageY : e.pageX)) * t,
        i = n > 0,
        o = a && !d && !i;
      if (o && I === 0) return;
      let c = Math.abs(n),
        l = document.querySelector(`[data-vaul-drawer-wrapper]`),
        u = c / (x === `bottom` || x === `top` ? me.current : he.current),
        f = Se(c, i);
      if (f !== null && (u = f), o && u >= 1 || !M.current && !Te(e.target, i)) return;
      if (F.current.classList.add(Jr), M.current = !0, X(F.current, {
        transition: `none`
      }), X(j.current, {
        transition: `none`
      }), a && be({
        draggedDistance: n
      }), i && !a) {
        let e = Br(n),
          r = Math.min(e * -1, 0) * t;
        X(F.current, {
          transform: Z(x) ? `translate3d(0, ${r}px, 0)` : `translate3d(${r}px, 0, 0)`
        });
        return;
      }
      let m = 1 - u;
      if ((xe || p && I === p - 1) && (r?.(e, u), X(j.current, {
        opacity: `${m}`,
        transition: `none`
      }, !0)), l && j.current && s) {
        let e = Math.min(we() + u * (1 - we()), 1),
          t = 8 - u * 8,
          n = Math.max(0, 14 - u * 14);
        X(l, {
          borderRadius: `${t}px`,
          transform: Z(x) ? `scale(${e}) translate3d(0, ${n}px, 0)` : `scale(${e}) translate3d(${n}px, 0, 0)`,
          transition: `none`
        }, !0);
      }
      if (!a) {
        let e = c * t;
        X(F.current, {
          transform: Z(x) ? `translate3d(0, ${e}px, 0)` : `translate3d(${e}px, 0, 0)`
        });
      }
    }
  }
  o.useEffect(() => {
    window.requestAnimationFrame(() => {
      P.current = !0;
    });
  }, []), o.useEffect(() => {
    var e;
    function t() {
      if (!F.current || !E) return;
      let e = document.activeElement;
      if (Nr(e) || N.current) {
        let e = window.visualViewport?.height || 0,
          t = window.innerHeight,
          n = t - e,
          r = F.current.getBoundingClientRect().height || 0,
          i = r > t * .8;
        ge.current ||= r;
        let o = F.current.getBoundingClientRect().top;
        if (Math.abs(pe.current - n) > 60 && (N.current = !N.current), a && a.length > 0 && L && I) {
          let e = L[I] || 0;
          n += e;
        }
        if (pe.current = n, r > e || N.current) {
          let t = F.current.getBoundingClientRect().height,
            r = t;
          t > e && (r = e - (i ? o : qr)), g ? F.current.style.height = `${t - Math.max(n, 0)}px` : F.current.style.height = `${Math.max(r, e - o)}px`;
        } else fr() || (F.current.style.height = `${ge.current}px`);
        a && a.length > 0 && !N.current ? F.current.style.bottom = `0px` : F.current.style.bottom = `${Math.max(n, 0)}px`;
      }
    }
    return (e = window.visualViewport) == null || e.addEventListener(`resize`, t), () => window.visualViewport?.removeEventListener(`resize`, t);
  }, [I, a, L]);
  function De(e) {
    Oe(), v?.(), e || k(!1), setTimeout(() => {
      a && ve(a[0]);
    }, Q.DURATION * 1e3);
  }
  function z() {
    if (!F.current) return;
    let e = document.querySelector(`[data-vaul-drawer-wrapper]`),
      t = zr(F.current, x);
    X(F.current, {
      transform: `translate3d(0, 0, 0)`,
      transition: `transform ${Q.DURATION}s cubic-bezier(${Q.EASE.join(`,`)})`
    }), X(j.current, {
      transition: `opacity ${Q.DURATION}s cubic-bezier(${Q.EASE.join(`,`)})`,
      opacity: `1`
    }), s && t && t > 0 && O && X(e, {
      borderRadius: `${Gr}px`,
      overflow: `hidden`,
      ...(Z(x) ? {
        transform: `scale(${we()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
        transformOrigin: `top`
      } : {
        transform: `scale(${we()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
        transformOrigin: `left`
      }),
      transitionProperty: `transform, border-radius`,
      transitionDuration: `${Q.DURATION}s`,
      transitionTimingFunction: `cubic-bezier(${Q.EASE.join(`,`)})`
    }, !0);
  }
  function Oe() {
    !A || !F.current || (F.current.classList.remove(Jr), M.current = !1, ie(!1), le.current = new Date());
  }
  function B(e) {
    if (!A || !F.current) return;
    F.current.classList.remove(Jr), M.current = !1, ie(!1), le.current = new Date();
    let t = zr(F.current, x);
    if (!e || !Te(e.target, !1) || !t || Number.isNaN(t) || ce.current === null) return;
    let n = le.current.getTime() - ce.current.getTime(),
      r = fe.current - (Z(x) ? e.pageY : e.pageX),
      o = Math.abs(r) / n;
    if (o > .05 && (oe(!0), setTimeout(() => {
      oe(!1);
    }, 200)), a) {
      ye({
        draggedDistance: r * (x === `bottom` || x === `right` ? 1 : -1),
        closeDrawer: De,
        velocity: o,
        dismissible: d
      }), i?.(e, !0);
      return;
    }
    if (x === `bottom` || x === `right` ? r > 0 : r < 0) {
      z(), i?.(e, !0);
      return;
    }
    if (o > Hr) {
      De(), i?.(e, !1);
      return;
    }
    let s = Math.min(F.current.getBoundingClientRect().height ?? 0, window.innerHeight),
      c = Math.min(F.current.getBoundingClientRect().width ?? 0, window.innerWidth);
    if (Math.abs(t) >= (x === `left` || x === `right` ? c : s) * l) {
      De(), i?.(e, !1);
      return;
    }
    i?.(e, !0), z();
  }
  o.useEffect(() => (O && (X(document.documentElement, {
    scrollBehavior: `auto`
  }), se.current = new Date()), () => {
    Rr(document.documentElement, `scrollBehavior`);
  }), [O]);
  function ke(e) {
    let t = e ? (window.innerWidth - Kr) / window.innerWidth : 1,
      n = e ? -16 : 0;
    de.current && window.clearTimeout(de.current), X(F.current, {
      transition: `transform ${Q.DURATION}s cubic-bezier(${Q.EASE.join(`,`)})`,
      transform: Z(x) ? `scale(${t}) translate3d(0, ${n}px, 0)` : `scale(${t}) translate3d(${n}px, 0, 0)`
    }), !e && F.current && (de.current = setTimeout(() => {
      let e = zr(F.current, x);
      X(F.current, {
        transition: `none`,
        transform: Z(x) ? `translate3d(0, ${e}px, 0)` : `translate3d(${e}px, 0, 0)`
      });
    }, 500));
  }
  function Ae(e, t) {
    if (t < 0) return;
    let n = (window.innerWidth - Kr) / window.innerWidth,
      r = n + t * (1 - n),
      i = -16 + t * Kr;
    X(F.current, {
      transform: Z(x) ? `scale(${r}) translate3d(0, ${i}px, 0)` : `scale(${r}) translate3d(${i}px, 0, 0)`,
      transition: `none`
    });
  }
  function je(e, t) {
    let n = Z(x) ? window.innerHeight : window.innerWidth,
      r = t ? (n - Kr) / n : 1,
      i = t ? -16 : 0;
    t && X(F.current, {
      transition: `transform ${Q.DURATION}s cubic-bezier(${Q.EASE.join(`,`)})`,
      transform: Z(x) ? `scale(${r}) translate3d(0, ${i}px, 0)` : `scale(${r}) translate3d(${i}px, 0, 0)`
    });
  }
  return o.useEffect(() => {
    _ || window.requestAnimationFrame(() => {
      document.body.style.pointerEvents = `auto`;
    });
  }, [_]), o.createElement(Bn, {
    defaultOpen: S,
    onOpenChange: e => {
      !d && !e || (e ? re(!0) : De(!0), k(e));
    },
    open: O
  }, o.createElement(dr.Provider, {
    value: {
      activeSnapPoint: _e,
      snapPoints: a,
      setActiveSnapPoint: ve,
      drawerRef: F,
      overlayRef: j,
      onOpenChange: t,
      onPress: R,
      onRelease: B,
      onDrag: Ee,
      dismissible: d,
      shouldAnimate: P,
      handleOnly: f,
      isOpen: O,
      isDragging: A,
      shouldFade: xe,
      closeDrawer: De,
      onNestedDrag: Ae,
      onNestedOpenChange: ke,
      onNestedRelease: je,
      keyboardIsOpen: N,
      modal: _,
      snapPointsOffset: L,
      activeSnapPointIndex: I,
      direction: x,
      shouldScaleBackground: s,
      setBackgroundColorOnScale: c,
      noBodyStyles: b,
      container: te,
      autoFocus: D
    }
  }, n));
}
var ri = o.forwardRef(function ({
  ...e
}, t) {
  let {
      overlayRef: n,
      snapPoints: r,
      onRelease: i,
      shouldFade: a,
      isOpen: s,
      modal: c,
      shouldAnimate: l
    } = Y(),
    u = Ir(t, n),
    d = r && r.length > 0;
  if (!c) return null;
  let f = o.useCallback(e => i(e), [i]);
  return o.createElement(Jn, {
    onMouseUp: f,
    ref: u,
    "data-vaul-overlay": ``,
    "data-vaul-snap-points": s && d ? `true` : `false`,
    "data-vaul-snap-points-overlay": s && a ? `true` : `false`,
    "data-vaul-animate": l?.current ? `true` : `false`,
    ...e
  });
});
ri.displayName = `Drawer.Overlay`;
var ii = o.forwardRef(function ({
  onPointerDownOutside: e,
  style: t,
  onOpenAutoFocus: n,
  ...r
}, i) {
  let {
      drawerRef: a,
      onPress: s,
      onRelease: c,
      onDrag: l,
      keyboardIsOpen: u,
      snapPointsOffset: d,
      activeSnapPointIndex: f,
      modal: p,
      isOpen: m,
      direction: h,
      snapPoints: g,
      container: _,
      handleOnly: v,
      shouldAnimate: y,
      autoFocus: b
    } = Y(),
    [x, S] = o.useState(!1),
    C = Ir(i, a),
    w = o.useRef(null),
    T = o.useRef(null),
    E = o.useRef(!1),
    ee = g && g.length > 0;
  $r();
  let te = (e, t, n = 0) => {
    if (E.current) return !0;
    let r = Math.abs(e.y),
      i = Math.abs(e.x),
      a = i > r,
      o = [`bottom`, `right`].includes(t) ? 1 : -1;
    if (t === `left` || t === `right`) {
      if (!(e.x * o < 0) && i >= 0 && i <= n) return a;
    } else if (!(e.y * o < 0) && r >= 0 && r <= n) return !a;
    return E.current = !0, !0;
  };
  o.useEffect(() => {
    ee && window.requestAnimationFrame(() => {
      S(!0);
    });
  }, []);
  function D(e) {
    w.current = null, E.current = !1, c(e);
  }
  return o.createElement(Qn, {
    "data-vaul-drawer-direction": h,
    "data-vaul-drawer": ``,
    "data-vaul-delayed-snap-points": x ? `true` : `false`,
    "data-vaul-snap-points": m && ee ? `true` : `false`,
    "data-vaul-custom-container": _ ? `true` : `false`,
    "data-vaul-animate": y?.current ? `true` : `false`,
    ...r,
    ref: C,
    style: d && d.length > 0 ? {
      "--snap-point-height": `${d[f ?? 0]}px`,
      ...t
    } : t,
    onPointerDown: e => {
      v || (r.onPointerDown == null || r.onPointerDown.call(r, e), w.current = {
        x: e.pageX,
        y: e.pageY
      }, s(e));
    },
    onOpenAutoFocus: e => {
      n?.(e), b || e.preventDefault();
    },
    onPointerDownOutside: t => {
      if (e?.(t), !p || t.defaultPrevented) {
        t.preventDefault();
        return;
      }
      u.current &&= !1;
    },
    onFocusOutside: e => {
      if (!p) {
        e.preventDefault();
        return;
      }
    },
    onPointerMove: e => {
      if (T.current = e, v || (r.onPointerMove == null || r.onPointerMove.call(r, e), !w.current)) return;
      let t = e.pageY - w.current.y,
        n = e.pageX - w.current.x,
        i = e.pointerType === `touch` ? 10 : 2;
      te({
        x: n,
        y: t
      }, h, i) ? l(e) : (Math.abs(n) > i || Math.abs(t) > i) && (w.current = null);
    },
    onPointerUp: e => {
      r.onPointerUp == null || r.onPointerUp.call(r, e), w.current = null, E.current = !1, c(e);
    },
    onPointerOut: e => {
      r.onPointerOut == null || r.onPointerOut.call(r, e), D(T.current);
    },
    onContextMenu: e => {
      r.onContextMenu == null || r.onContextMenu.call(r, e), T.current && D(T.current);
    }
  });
});
ii.displayName = `Drawer.Content`;
var ai = 250,
  oi = 120,
  si = o.forwardRef(function ({
    preventCycle: e = !1,
    children: t,
    ...n
  }, r) {
    let {
        closeDrawer: i,
        isDragging: a,
        snapPoints: s,
        activeSnapPoint: c,
        setActiveSnapPoint: l,
        dismissible: u,
        handleOnly: d,
        isOpen: f,
        onPress: p,
        onDrag: m
      } = Y(),
      h = o.useRef(null),
      g = o.useRef(!1);
    function _() {
      if (g.current) {
        b();
        return;
      }
      window.setTimeout(() => {
        v();
      }, oi);
    }
    function v() {
      if (a || e || g.current) {
        b();
        return;
      }
      if (b(), !s || s.length === 0) {
        u || i();
        return;
      }
      if (c === s[s.length - 1] && u) {
        i();
        return;
      }
      let t = s.findIndex(e => e === c);
      if (t === -1) return;
      let n = s[t + 1];
      l(n);
    }
    function y() {
      h.current = window.setTimeout(() => {
        g.current = !0;
      }, ai);
    }
    function b() {
      h.current && window.clearTimeout(h.current), g.current = !1;
    }
    return o.createElement(`div`, {
      onClick: _,
      onPointerCancel: b,
      onPointerDown: e => {
        d && p(e), y();
      },
      onPointerMove: e => {
        d && m(e);
      },
      ref: r,
      "data-vaul-drawer-visible": f ? `true` : `false`,
      "data-vaul-handle": ``,
      "aria-hidden": `true`,
      ...n
    }, o.createElement(`span`, {
      "data-vaul-handle-hitarea": ``,
      "aria-hidden": `true`
    }, t));
  });
si.displayName = `Drawer.Handle`;
function ci({
  onDrag: e,
  onOpenChange: t,
  open: n,
  ...r
}) {
  let {
    onNestedDrag: i,
    onNestedOpenChange: a,
    onNestedRelease: s
  } = Y();
  if (!i) throw Error(`Drawer.NestedRoot must be placed in another drawer`);
  return o.createElement(ni, {
    nested: !0,
    open: n,
    onClose: () => {
      a(!1);
    },
    onDrag: (t, n) => {
      i(t, n), e?.(t, n);
    },
    onOpenChange: e => {
      e && a(e), t?.(e);
    },
    onRelease: s,
    ...r
  });
}
function li(e) {
  let t = Y(),
    {
      container: n = t.container,
      ...r
    } = e;
  return o.createElement(Kn, {
    container: n,
    ...r
  });
}
var $ = {
    Root: ni,
    NestedRoot: ci,
    Content: ii,
    Overlay: ri,
    Trigger: Hn,
    Portal: li,
    Handle: si,
    Close: sr,
    Title: rr,
    Description: ar
  },
  ui = t({
    Drawer: () => di,
    DrawerClose: () => mi,
    DrawerContent: () => _i,
    DrawerDescription: () => xi,
    DrawerFooter: () => yi,
    DrawerHandle: () => gi,
    DrawerHeader: () => vi,
    DrawerOverlay: () => hi,
    DrawerPortal: () => pi,
    DrawerTitle: () => bi,
    DrawerTrigger: () => fi
  });
function di({
  shouldScaleBackground: e = !0,
  ...t
}) {
  return (0, b.jsx)($.Root, {
    shouldScaleBackground: e,
    ...t
  });
}
function fi({
  ...e
}) {
  return (0, b.jsx)($.Trigger, {
    "data-slot": `drawer-trigger`,
    ...e
  });
}
function pi({
  ...e
}) {
  return (0, b.jsx)($.Portal, {
    ...e
  });
}
function mi({
  ...e
}) {
  return (0, b.jsx)($.Close, {
    "data-slot": `drawer-close`,
    ...e
  });
}
function hi({
  className: e,
  ...t
}) {
  return (0, b.jsx)($.Overlay, {
    "data-slot": `drawer-overlay`,
    className: a(`fixed inset-0 z-50 bg-black/40`, e),
    ...t
  });
}
function gi({
  className: e,
  ...t
}) {
  return (0, b.jsx)($.Handle, {
    "data-slot": `drawer-handle`,
    className: a(`mx-auto !w-14 shrink-0 !bg-foreground/20`, e),
    ...t
  });
}
function _i({
  className: e,
  children: t,
  ...n
}) {
  return (0, b.jsxs)(pi, {
    children: [(0, b.jsx)(hi, {}), (0, b.jsxs)($.Content, {
      "data-slot": `drawer-content`,
      className: a(`fixed inset-x-0 bottom-0 z-50 mt-6 flex h-[calc(100%-1.5rem)] flex-col rounded-t-[10px] border-t border-border bg-popover text-popover-foreground outline-none`, e),
      ...n,
      children: [<div className={`pt-3 pb-2`}>{(0, b.jsx)(gi, {})}</div>, t]
    })]
  });
}
function vi({
  className: e,
  ...t
}) {
  return <div data-slot={`drawer-header`} className={a(`flex shrink-0 flex-col gap-1 p-4`, e)} {...t} />;
}
function yi({
  className: e,
  ...t
}) {
  return <div data-slot={`drawer-footer`} className={a(`mt-auto flex shrink-0 flex-col gap-2 p-4`, e)} {...t} />;
}
function bi({
  className: e,
  ...t
}) {
  return (0, b.jsx)($.Title, {
    "data-slot": `drawer-title`,
    className: a(`text-sm font-semibold text-foreground`, e),
    ...t
  });
}
function xi({
  className: e,
  ...t
}) {
  return (0, b.jsx)($.Description, {
    "data-slot": `drawer-description`,
    className: a(`text-sm text-muted-foreground`, e),
    ...t
  });
}
export { Jn as a, k as c, Qn as i, v as l, lr as n, Kn as o, Bn as r, R as s, ui as t };

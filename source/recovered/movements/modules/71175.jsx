// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module31908 from "./jsx-runtime-31908.js";
import * as _module45032 from "./45032.js";
import * as _module83539 from "./83539.js";
import * as _module31903 from "./31903.js";
import * as _module50115 from "./50115.js";
import * as _module69471 from "./69471.js";
import * as _module88327 from "./88327.js";
import * as _module87491 from "./87491.js";
import * as _module10592 from "./10592.js";
import * as _module71955 from "./71955.js";
import * as _module38783 from "./38783.js";
import * as _module7642 from "./7642.js";
import * as _module80269 from "./80269.js";
import * as _module77794 from "./77794.js";
import * as _module58943 from "./58943.js";
import * as _module94805 from "./94805.js";
import * as _module9591 from "./9591.js";
import * as _module3737 from "./3737.js";
import * as _module26997 from "./26997.js";
import * as _module79995 from "./79995.js";
import * as _module91956 from "./91956.js";
import * as _module86631 from "./86631.js";
import * as _module78351 from "./78351.js";
import * as _module50151 from "./50151.js";
import * as _module74740 from "./74740.js";
import * as _module82599 from "./82599.js";
import * as _module40192 from "./40192.js";
import * as _module94195 from "./94195.js";
import * as _module54382 from "./54382.js";
import * as _module88550 from "./88550.js";
import * as _module70512 from "./70512.js";
import * as _module41009 from "./41009.js";
import * as _module92915 from "./92915.js";
import * as _module42014 from "./42014.js";
import * as _module99536 from "./99536.js";
import * as _module29005 from "./29005.js";
import * as _module44439 from "./44439.js";
import * as _module22309 from "./22309.js";
import * as _module31961 from "./31961.js";
import * as _module30960 from "./30960.js";
import * as _module49414 from "./49414.js";
import * as _module11974 from "./11974.js";
import * as _module60637 from "./60637.js";
import * as _module13262 from "./13262.js";
import * as _module37889 from "./37889.js";
import * as _module73920 from "./73920.js";
import * as _module98330 from "./98330.js";
import * as _module84094 from "./84094.js";
import * as _module69310 from "./69310.js";
import * as _module80015 from "./80015.js";
import * as _module79870 from "./79870.js";
import * as _module64113 from "./64113.js";
import * as _module38633 from "./38633.js";
import * as _module36875 from "./36875.js";
var a,
  s,
  c = _module31908;
var d = _module45032,
  p = _module83539;
var g = _module31903,
  m = _module50115;
var y = _module69471,
  x = _module88327,
  S = _module87491;
var P = _module10592;
var T = _module71955;
var I = _module38783,
  L = _module7642,
  H = _module80269,
  F = _module77794,
  W = _module58943,
  Y = _module94805,
  _ = _module9591,
  $ = _module3737,
  z = _module26997,
  X = _module79995,
  U = _module91956,
  q = _module86631,
  G = _module78351,
  K = _module50151,
  J = _module74740,
  Z = _module82599;
var ep = _module40192,
  ef = _module94195,
  eh = _module54382;
var ek = _module88550;
var eW = _module70512;
var eV = _module41009;
var eJ = _module92915;
function tc(e, t = {}) {
  let {
      enabled: n = !0,
      event: r = "click",
      toggle: o = !0,
      ignoreMouse: i = !1,
      stickIfOpen: a = !0,
      touchOpenDelay: s = 0,
      reason: l = S.REASONS.triggerPress
    } = t,
    u = "rootStore" in e ? e.rootStore : e,
    c = u.context.dataRef,
    p = d.useRef(void 0),
    f = (0, $.useAnimationFrame)(),
    h = (0, _.useTimeout)(),
    g = d.useMemo(() => {
      function e(e, t, n, r) {
        let o = (0, x.createChangeEventDetails)(l, t, n);
        e && "touch" === r && s > 0 ? h.start(s, () => {
          u.setOpen(!0, o);
        }) : u.setOpen(e, o);
      }
      function t(e, t, n) {
        let r = c.current.openEvent,
          i = u.select("domReferenceElement") !== t;
        return !!e && !!i || !e || !o || !!r && !!a && !n(r.type);
      }
      return {
        onPointerDown(e) {
          p.current = (0, K.isMouseLikePointerType)(e.pointerType, !0) && (0, K.isVirtualPointerEvent)(e.nativeEvent) ? "virtual" : e.pointerType;
        },
        onMouseDown(n) {
          let o = p.current,
            a = n.nativeEvent,
            s = u.select("open");
          if (0 !== n.button || "click" === r || (0, K.isMouseLikePointerType)(o, !0) && i) return;
          let l = t(s, n.currentTarget, e => "click" === e || "mousedown" === e),
            c = (0, q.getTarget)(a);
          if ((0, G.isTypeableElement)(c)) return void e(l, a, c, o);
          let d = n.currentTarget;
          f.request(() => {
            e(l, a, d, o);
          });
        },
        onClick(n) {
          if ("mousedown-only" === r) return;
          let o = p.current;
          if ("mousedown" === r && o) {
            p.current = void 0;
            return;
          }
          (0, K.isMouseLikePointerType)(o, !0) && i || e(t(u.select("open"), n.currentTarget, e => "click" === e || "mousedown" === e || "keydown" === e || "keyup" === e), n.nativeEvent, n.currentTarget, o);
        },
        onKeyDown() {
          p.current = void 0;
        }
      };
    }, [c, r, i, l, u, a, o, f, h, s]);
  return d.useMemo(() => n ? {
    reference: g
  } : L.EMPTY_OBJECT, [n, g]);
}
var tp = _module42014,
  tf = _module99536;
var tm = _module29005;
let tY = d.createContext(void 0);
function t_(e) {
  let t = d.useContext(tY);
  if (void 0 === t && !e) throw Error((0, p.default)(41));
  return t;
}
let tV = d.createContext(void 0);
function t$() {
  return d.useContext(tV);
}
var tz = _module44439;
let tX = ((a = {}).availableWidth = "--available-width", a.availableHeight = "--available-height", a.anchorWidth = "--anchor-width", a.anchorHeight = "--anchor-height", a.transformOrigin = "--transform-origin", a.positionerWidth = "--positioner-width", a.positionerHeight = "--positioner-height", a),
  tU = ((s = {}).popupWidth = "--popup-width", s.popupHeight = "--popup-height", s);
function tq(e, t, n, r) {
  e.style.setProperty(tU.popupWidth, `${n}px`), e.style.setProperty(tU.popupHeight, `${r}px`), t.style.setProperty(tX.positionerWidth, `${n}px`), t.style.setProperty(tX.positionerHeight, `${r}px`);
}
let tG = new Set([S.REASONS.triggerHover, S.REASONS.outsidePress, S.REASONS.focusOut]),
  tK = d.forwardRef(function (e, t) {
    let {
        defaultValue: n = null,
        value: r,
        onValueChange: o,
        actionsRef: i,
        delay: a = 50,
        closeDelay: s = 50,
        orientation: l = "horizontal",
        onOpenChangeComplete: u
      } = e,
      p = null != (0, ef.useFloatingParentNodeId)(),
      f = t_(!0),
      [h, g] = (0, eV.useControlled)({
        controlled: r,
        default: n,
        name: "NavigationMenu",
        state: "value"
      }),
      m = null != h,
      v = d.useRef(void 0),
      b = d.useRef(null),
      [w, y] = d.useState(null),
      [x, E] = d.useState(null),
      [C, k] = d.useState(null),
      [P, R] = d.useState(null),
      [M, N] = d.useState(null),
      [D, O] = d.useState(void 0),
      [A, j] = d.useState(!1),
      L = d.useRef(null),
      F = d.useRef(null),
      W = d.useRef(null),
      B = d.useRef(null),
      Y = d.useRef(null),
      _ = d.useRef(null),
      V = d.useRef({
        abortController: null,
        owner: null
      }),
      {
        mounted: $,
        setMounted: X,
        transitionStatus: U
      } = (0, tz.useTransitionStatus)(m);
    (0, T.useIsoLayoutEffect)(() => {
      let e, t;
      if (m || !w || !x) return;
      let n = (e = parseFloat(w.style.getPropertyValue(tX.positionerWidth)) || 0, t = parseFloat(w.style.getPropertyValue(tX.positionerHeight)) || 0, e <= 0 || t <= 0 ? null : {
        width: e,
        height: t
      });
      n && tq(x, w, n.width, n.height);
    }, [m, x, w]), d.useEffect(() => {
      j(!1);
    }, [h]);
    let G = (0, I.useStableCallback)((e, t) => {
        null == e && (v.current = t.reason), e !== h && o?.(e, t), !t.isCanceled && (null == e && (N(null), O(void 0)), g(e), p && null == e && t.reason === S.REASONS.linkPress && f && f.setValue(null, t));
      }),
      K = (0, I.useStableCallback)(() => {
        let e = (0, z.ownerDocument)(b.current),
          t = (0, q.activeElement)(e);
        !(v.current && tG.has(v.current)) && (0, H.isHTMLElement)(L.current) && (t === (0, z.ownerDocument)(x).body || (0, q.contains)(x, t)) && x && (L.current.focus({
          preventScroll: !0
        }), L.current = void 0), X(!1), u?.(!1), N(null), O(void 0), F.current = null, v.current = void 0;
      });
    d.useImperativeHandle(i, () => ({
      unmount: K
    }), [K]), (0, ek.useOpenChangeComplete)({
      enabled: !i,
      open: m,
      ref: {
        current: x
      },
      onComplete() {
        m || K();
      }
    }), (0, ek.useOpenChangeComplete)({
      enabled: !i,
      open: m,
      ref: {
        current: P
      },
      onComplete() {
        m || K();
      }
    });
    let J = m ? M : null,
      Z = d.useMemo(() => ({
        open: m,
        value: h,
        setValue: G,
        mounted: $,
        transitionStatus: U,
        positionerElement: w,
        setPositionerElement: y,
        popupElement: x,
        setPopupElement: E,
        viewportElement: C,
        setViewportElement: k,
        viewportTargetElement: P,
        setViewportTargetElement: R,
        activationDirection: J,
        setActivationDirection: N,
        floatingRootContext: D,
        setFloatingRootContext: O,
        currentContentRef: F,
        nested: p,
        rootRef: b,
        beforeInsideRef: W,
        afterInsideRef: B,
        beforeOutsideRef: Y,
        afterOutsideRef: _,
        prevTriggerElementRef: L,
        popupAutoSizeResetRef: V,
        delay: a,
        closeDelay: s,
        orientation: l,
        viewportInert: A,
        setViewportInert: j
      }), [m, h, G, $, U, w, x, C, P, J, D, p, a, s, l, A]),
      Q = (0, c.jsx)(tY.Provider, {
        value: Z,
        children: (0, c.jsx)(tJ, {
          componentProps: e,
          forwardedRef: t,
          children: e.children
        })
      });
    return p ? Q : (0, c.jsx)(ef.FloatingTree, {
      children: Q
    });
  });
function tJ(e) {
  let {
      className: t,
      render: n,
      defaultValue: r,
      value: o,
      onValueChange: i,
      actionsRef: a,
      delay: s,
      closeDelay: l,
      orientation: u,
      onOpenChangeComplete: d,
      style: p,
      ...f
    } = e.componentProps,
    h = (0, ef.useFloatingNodeId)(),
    {
      rootRef: m,
      nested: v,
      open: b
    } = t_(),
    w = (0, g.useRenderElement)(v ? "div" : "nav", e.componentProps, {
      state: {
        open: b,
        nested: v
      },
      ref: [e.forwardedRef, m],
      props: f
    });
  return (0, c.jsx)(tV.Provider, {
    value: h,
    children: (0, c.jsx)(ef.FloatingNode, {
      id: h,
      children: w
    })
  });
}
var tZ = _module22309,
  tQ = _module31961;
let t0 = "data-base-ui-navigation-menu-trigger",
  t1 = d.createContext(void 0);
var t2 = _module30960;
let t5 = d.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        style: o,
        ...i
      } = e,
      a = t$(),
      {
        orientation: s,
        open: l,
        floatingRootContext: u,
        positionerElement: p,
        value: f,
        closeDelay: h,
        viewportElement: m,
        nested: v
      } = t_(),
      b = d.useMemo(() => (0, t2.getEmptyRootContext)(), []),
      w = u || b;
    (0, tZ.useHoverFloatingInteraction)(w, {
      enabled: !!u && (null != p || null != m || null == f),
      closeDelay: h,
      nodeId: a
    });
    let y = (0, eJ.useDismiss)(w, {
        enabled: null != p || null == f,
        outsidePressEvent: "intentional",
        outsidePress(e) {
          let t = (0, q.getTarget)(e);
          return null === t?.closest(`[${t0}]`);
        }
      }),
      x = u ? y : void 0,
      S = {
        open: l
      },
      E = v ? L.EMPTY_OBJECT : {
        onKeyDown(e) {
          ("horizontal" === s && ("ArrowLeft" === e.key || "ArrowRight" === e.key) || "vertical" === s && ("ArrowUp" === e.key || "ArrowDown" === e.key)) && e.stopPropagation();
        }
      },
      C = [x?.floating || L.EMPTY_OBJECT, E, i],
      k = (0, g.useRenderElement)("ul", e, {
        state: S,
        ref: t,
        props: C,
        enabled: v
      });
    return v ? (0, c.jsx)(t1.Provider, {
      value: x,
      children: k
    }) : (0, c.jsx)(t1.Provider, {
      value: x,
      children: (0, c.jsx)(tQ.CompositeRoot, {
        render: n,
        className: r,
        style: o,
        state: S,
        refs: [t],
        props: C,
        loopFocus: !1,
        orientation: s,
        tag: "ul"
      })
    });
  }),
  t3 = d.createContext(void 0);
function t4() {
  let e = d.useContext(t3);
  if (!e) throw Error((0, p.default)(39));
  return e;
}
let t8 = d.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        style: o,
        value: i,
        ...a
      } = e,
      s = (0, P.useBaseUiId)(),
      l = i ?? s,
      u = (0, g.useRenderElement)("li", e, {
        ref: t,
        props: a
      }),
      p = d.useMemo(() => ({
        value: l
      }), [l]);
    return (0, c.jsx)(t3.Provider, {
      value: p,
      children: u
    });
  }),
  t6 = {
    ...m.popupStateMapping,
    ...tf.transitionStatusMapping,
    activationDirection: e => e ? {
      "data-activation-direction": e
    } : null
  },
  t9 = d.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        style: o,
        keepMounted: i = !1,
        ...a
      } = e,
      {
        mounted: s,
        viewportElement: l,
        value: u,
        activationDirection: p,
        currentContentRef: f,
        viewportTargetElement: h
      } = t_(),
      {
        value: g
      } = t4(),
      m = t$(),
      v = s && u === g,
      b = d.useRef(null),
      [w, y] = d.useState(!1),
      [x, S] = d.useState(!1),
      {
        mounted: E,
        setMounted: C,
        transitionStatus: k
      } = (0, tz.useTransitionStatus)(v);
    E && !s && C(!1), (0, ek.useOpenChangeComplete)({
      ref: b,
      open: v,
      onComplete() {
        v || C(!1);
      }
    }), (0, T.useIsoLayoutEffect)(() => {
      v && b.current && (f.current = b.current);
    }, [v, f]);
    let P = {
        open: v,
        transitionStatus: k,
        activationDirection: p
      },
      R = (0, I.useStableCallback)(e => {
        e && v && (f.current = e);
      }),
      M = {
        onFocus(e) {
          let t = (0, q.getTarget)(e.nativeEvent);
          t?.hasAttribute("data-base-ui-focus-guard") || S(!0);
        },
        onBlur(e) {
          (0, q.contains)(e.currentTarget, e.relatedTarget) || S(!1);
        }
      },
      N = !v && E ? {
        style: {
          position: "absolute",
          top: 0,
          left: 0
        },
        inert: (0, eW.inertValue)(!x),
        ...M
      } : M,
      D = h || l,
      O = i && !E,
      A = i && !D && !w;
    return (i && D && !w && y(!0), A) ? (0, c.jsx)(tQ.CompositeRoot, {
      render: n,
      className: r,
      style: o,
      state: P,
      refs: [t],
      props: [N, {
        hidden: !0
      }, a],
      stateAttributesMapping: t6
    }) : D && (E || i) ? tp.createPortal((0, c.jsx)(ef.FloatingNode, {
      id: m,
      children: (0, c.jsx)(tQ.CompositeRoot, {
        render: n,
        className: r,
        style: o,
        state: P,
        refs: [t, b, R],
        props: [N, O ? {
          hidden: !0
        } : L.EMPTY_OBJECT, a],
        stateAttributesMapping: t6
      })
    }), D) : null;
  });
var t7 = _module49414,
  ne = _module11974,
  nt = _module60637,
  nn = _module13262;
function nr({
  currentTarget: e,
  relatedTarget: t
}, n) {
  let {
      popupElement: r,
      rootRef: o,
      tree: i,
      nodeId: a
    } = n,
    s = !!i && (0, Z.getNodeChildren)(i.nodesRef.current, a).some(e => (0, q.contains)(e.context?.elements.floating, t));
  return r ? !(0, q.contains)(r, e) && !(0, q.contains)(r, t) && !(0, q.contains)(o.current, t) && !s : !(0, q.contains)(o.current, t) && !s;
}
var no = _module37889,
  ni = _module73920,
  na = _module98330,
  ns = _module84094;
let nl = {
    width: 0,
    height: 0
  },
  nu = d.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        style: o,
        nativeButton: i = !0,
        disabled: a,
        ...s
      } = e,
      {
        value: l,
        setValue: u,
        mounted: p,
        open: f,
        positionerElement: h,
        setActivationDirection: g,
        setFloatingRootContext: v,
        popupElement: b,
        viewportElement: w,
        transitionStatus: E,
        rootRef: C,
        beforeOutsideRef: k,
        afterOutsideRef: P,
        afterInsideRef: R,
        beforeInsideRef: M,
        prevTriggerElementRef: N,
        popupAutoSizeResetRef: D,
        currentContentRef: O,
        delay: A,
        closeDelay: j,
        orientation: H,
        setViewportInert: W,
        nested: B
      } = t_(),
      {
        value: V
      } = t4(),
      z = t$(),
      G = (0, ef.useFloatingTree)(),
      Z = d.useContext(t1),
      Q = (0, ns.useDirection)(),
      ee = (0, _.useTimeout)(),
      et = (0, $.useAnimationFrame)(),
      en = (0, $.useAnimationFrame)(),
      er = (0, $.useAnimationFrame)(),
      eo = (0, $.useAnimationFrame)(),
      [ei, ea] = d.useState(null),
      [es, el] = d.useState(!0),
      [eu, ec] = d.useState(""),
      ed = d.useRef(null),
      ep = d.useRef(!1),
      eg = d.useRef(nl),
      em = d.useRef(!1),
      ev = f && l === V,
      eb = (0, Y.useValueAsRef)(ev),
      ew = (null != h || null == l) && !a,
      ey = h || w,
      ex = (null != ey || null == l) && !a,
      eS = (0, ni.useAnimationsFinished)(b),
      eE = d.useCallback(e => {
        ed.current = e, ea(e);
      }, []),
      eC = (0, I.useStableCallback)((e = !1) => {
        (e || D.current.owner === V) && (D.current.abortController?.abort(), D.current.abortController = null, D.current.owner = null);
      });
    function ek(e) {
      e.style.setProperty(tU.popupWidth, "auto"), e.style.setProperty(tU.popupHeight, "auto");
    }
    function eP(e, t) {
      e.style.removeProperty(tU.popupWidth), e.style.removeProperty(tU.popupHeight), t.style.removeProperty(tX.positionerWidth), t.style.removeProperty(tX.positionerHeight);
    }
    function eR(e) {
      eC(!0);
      let t = new AbortController();
      D.current.abortController = t, D.current.owner = V, eS(() => {
        D.current.abortController = null, D.current.owner = null, ek(e);
      }, t.signal);
    }
    (0, T.useIsoLayoutEffect)(() => {
      ev || (en.cancel(), eo.cancel(), eC());
    }, [ev, en, eo, eC]);
    let eT = (0, I.useStableCallback)((e, t, n, r) => {
        eC(!0), eP(e, t);
        let {
            width: o,
            height: i
          } = (0, na.getCssDimensions)(e),
          a = o || eg.current.width,
          s = i || eg.current.height;
        (0 === r || 0 === n) && (n = a, r = s), e.style.setProperty(tU.popupWidth, `${n}px`), e.style.setProperty(tU.popupHeight, `${r}px`), t.style.setProperty(tX.positionerWidth, `${a}px`), t.style.setProperty(tX.positionerHeight, `${s}px`), eo.request(() => {
          eb.current && (e.style.setProperty(tU.popupWidth, `${a}px`), e.style.setProperty(tU.popupHeight, `${s}px`), eR(e));
        });
      }),
      eM = (0, I.useStableCallback)((e, t, n, r) => {
        eo.cancel(), en.cancel(), eC(!0), 0 !== n && 0 !== r && (tq(e, t, n, r), en.request(() => {
          en.request(() => {
            eP(e, t);
            let {
                width: o,
                height: i
              } = (0, na.getCssDimensions)(e),
              a = o || n,
              s = i || r;
            tq(e, t, n, r), eo.request(() => {
              eb.current && (tq(e, t, a, s), eR(e));
            });
          });
        }));
      }),
      eN = (0, I.useStableCallback)((e, t) => {
        eo.cancel(), eC(!0), eP(e, t);
        let {
          width: n,
          height: r
        } = (0, na.getCssDimensions)(e);
        0 !== n && 0 !== r && (eg.current = {
          width: n,
          height: r
        }, ek(e), t.style.setProperty(tX.positionerWidth, `${n}px`), t.style.setProperty(tX.positionerHeight, `${r}px`));
      }),
      eD = (0, I.useStableCallback)(e => {
        let t = e.style.getPropertyValue(tU.popupWidth),
          n = e.style.getPropertyValue(tU.popupHeight);
        return "" === t || "auto" === t || "" === n || "auto" === n ? {
          size: eg.current,
          syncPositioner: !1
        } : {
          size: {
            width: e.offsetWidth || eg.current.width,
            height: e.offsetHeight || eg.current.height
          },
          syncPositioner: !0
        };
      });
    d.useEffect(() => {
      f || (ee.clear(), en.cancel(), er.cancel(), eo.cancel(), eC(!0), em.current = !1, ec(""));
    }, [ee, f, en, er, eo, eC]), d.useEffect(() => {
      p || (eg.current = nl);
    }, [p]), (0, T.useIsoLayoutEffect)(() => {
      if (!b || "function" != typeof ResizeObserver) return;
      let e = new ResizeObserver(() => {
        eg.current = {
          width: b.offsetWidth,
          height: b.offsetHeight
        };
      });
      return e.observe(b), () => {
        e.disconnect();
      };
    }, [b]), d.useEffect(() => {
      if (!f || !ev || !b || !h) return;
      let e = (0, X.ownerWindow)(h),
        t = (0, F.addEventListener)(e, "resize", function () {
          er.cancel(), er.request(() => eN(b, h));
        });
      return () => {
        er.cancel(), t();
      };
    }, [f, ev, b, h, er, eN]), d.useEffect(() => {
      let e = O.current;
      if (!e || !b || !h || !ev || "function" != typeof MutationObserver) return;
      let t = new MutationObserver(() => {
        if ("starting" === E || b.hasAttribute(tf.TransitionStatusDataAttributes.startingStyle)) return void eN(b, h);
        let {
          size: e,
          syncPositioner: t
        } = eD(b);
        t ? eM(b, h, e.width, e.height) : eT(b, h, e.width, e.height);
      });
      return t.observe(e, {
        childList: !0,
        subtree: !0,
        characterData: !0,
        attributes: !0,
        attributeFilter: ["hidden"]
      }), () => {
        t.disconnect();
      };
    }, [O, b, h, ev, E, eD, eM, eT, eN]), d.useEffect(() => (ev && f && b && ep.current && (ep.current = !1, et.request(() => {
      k.current?.focus();
    })), () => {
      et.cancel();
    }), [k, et, ev, f, b]), (0, T.useIsoLayoutEffect)(() => {
      if (eb.current && f && b && h) {
        if (em.current) {
          em.current = !1;
          return;
        }
        let {
          width: e,
          height: t
        } = (0, na.getCssDimensions)(b);
        eT(b, h, e, t);
      }
    }, [O, eT, eb, f, b, h, E]);
    let eO = (0, ne.useFloatingRootContext)({
        open: f,
        onOpenChange: function (e, t) {
          let n = t.reason === S.REASONS.triggerHover;
          function r() {
            n && (el(!0), ee.clear(), ee.start(eh.PATIENT_CLICK_THRESHOLD, () => {
              el(!1);
            })), e ? u(V, t) : (u(null, t), ec(""));
          }
          ew && ("touch" !== eu || !n) && (e || l === V) && (n ? tp.flushSync(r) : r());
        },
        elements: {
          reference: ei,
          floating: ey
        }
      }),
      eA = (0, nn.useHoverInteractionSharedState)(eO),
      ej = "touch" !== eu;
    d.useEffect(() => (f || (eO.context.dataRef.current.openEvent = void 0, eA.pointerType = void 0, eA.interactedInside = !1, eA.restTimeoutPending = !1, eA.openChangeTimeout.clear(), eA.restTimeout.clear()), () => {
      (0, nn.clearSafePolygonPointerEventsMutation)(eA);
    }), [eO, eA, f]);
    let eI = (0, I.useStableCallback)(() => B && !h && ed.current && ey ? function (e, t, n) {
      let r, o, i, a, s, l, u, c;
      return {
        placement: (r = e.getBoundingClientRect(), o = t.getBoundingClientRect(), i = r.left + r.width / 2, a = r.top + r.height / 2, s = o.left + o.width / 2, l = o.top + o.height / 2, Math.abs(u = s - i) >= Math.abs(c = l - a) ? u >= 0 ? "right" : "left" : c >= 0 ? "bottom" : "top"),
        elements: {
          domReference: e,
          floating: t
        },
        nodeId: n
      };
    }(ed.current, ey, z) : null);
    function eL() {
      return B && h ? null : ed.current?.closest("ul") ?? null;
    }
    let eH = (0, nt.useHoverReferenceInteraction)(eO, {
        enabled: ex,
        move: !1,
        handleClose: (0, t7.safePolygon)({
          blockPointerEvents: ej,
          getScope: eL
        }),
        restMs: p && h ? 0 : A,
        delay: {
          close: j
        },
        triggerElementRef: ed,
        getHandleCloseContext: eI
      }),
      eF = d.useMemo(() => eH ? {
        reference: eH
      } : void 0, [eH]),
      eW = tc(eO, {
        enabled: ew,
        stickIfOpen: es,
        toggle: ev
      }),
      eB = d.useMemo(() => (0, tm.mergeProps)(eW.reference, eF?.reference), [eW.reference, eF]);
    function eY(e) {
      tp.flushSync(() => {
        let t = e.currentTarget,
          n = N.current?.getBoundingClientRect();
        if (p && n && ei) {
          let e = ei.getBoundingClientRect(),
            t = e.left > n.left,
            r = e.top > n.top;
          "horizontal" === H && e.left !== n.left ? g(t ? "right" : "left") : "vertical" === H && e.top !== n.top && g(r ? "down" : "up");
        }
        if ("click" !== e.type && null != l && (eO.context.dataRef.current.openEvent = void 0), ("touch" !== eu || "click" === e.type) && (null != l && "keydown" !== e.type && u(V, (0, x.createChangeEventDetails)("mouseenter" === e.type ? S.REASONS.triggerHover : S.REASONS.triggerPress, e.nativeEvent)), "mouseenter" === e.type && ej && (!B || !h) && ey)) {
          let e = () => {
            let e = eL() ?? t.ownerDocument.body;
            (0, nn.applySafePolygonPointerEventsMutation)(eA, {
              scopeElement: e,
              referenceElement: t,
              floatingElement: ey
            });
          };
          null != l && l !== V ? queueMicrotask(e) : e();
        }
      });
    }
    (0, T.useIsoLayoutEffect)(() => {
      ev && (v(eO), N.current = ei);
    }, [ev, eO, v, N, ei]);
    let e_ = (0, I.useStableCallback)(e => {
      if (a) return;
      if (!b || !h) return void eY(e);
      let {
          width: t,
          height: n
        } = (0, na.getCssDimensions)(b),
        r = null != l && l !== V && ("click" === e.type || "touch" !== eu);
      eY(e), r && (em.current = !0), eT(b, h, t, n);
    });
    function eV(e) {
      ec(e.pointerType);
    }
    let e$ = {
        tabIndex: 0,
        onMouseEnter: e_,
        onClick: e_,
        onPointerEnter: eV,
        onPointerDown: function (e) {
          eV(e), (0, nn.clearSafePolygonPointerEventsMutation)(eA);
        },
        "aria-expanded": ev,
        "aria-controls": ev ? b?.id : void 0,
        [t0]: "",
        onFocus() {
          ev && W(!1);
        },
        onMouseMove() {
          ep.current = !1;
        },
        onKeyDown(e) {
          if (ep.current = !0, B) return;
          let t = "horizontal" === H && "ArrowDown" === e.key,
            n = "vertical" === H && e.key === ("rtl" === Q ? "ArrowLeft" : "ArrowRight");
          (t || n) && (u(V, (0, x.createChangeEventDetails)(S.REASONS.listNavigation, e.nativeEvent)), e_(e), (0, K.stopEvent)(e));
        },
        onBlur(e) {
          h && b && nr({
            currentTarget: e.currentTarget,
            relatedTarget: e.relatedTarget
          }, {
            popupElement: b,
            rootRef: C,
            tree: G,
            nodeId: z
          }) && u(null, (0, x.createChangeEventDetails)(S.REASONS.focusOut, e.nativeEvent));
        }
      },
      {
        getButtonProps: ez,
        buttonRef: eX
      } = (0, y.useButton)({
        disabled: a,
        focusableWhenDisabled: !0,
        native: i
      });
    return (0, c.jsxs)(d.Fragment, {
      children: [(0, c.jsx)(no.CompositeItem, {
        tag: "button",
        render: n,
        className: r,
        style: o,
        state: {
          open: ev
        },
        stateAttributesMapping: m.pressableTriggerOpenStateMapping,
        refs: [t, eE, eX],
        props: [eB, Z?.reference || L.EMPTY_ARRAY, e$, s, ez]
      }), ev && (0, c.jsxs)(d.Fragment, {
        children: [(0, c.jsx)(U.FocusGuard, {
          ref: k,
          onFocus: e => {
            if (ey && (0, J.isOutsideEvent)(e, ey)) M.current?.focus();else {
              let e = (0, J.getPreviousTabbable)(ei);
              e?.focus();
            }
          }
        }), <span aria-owns={w?.id} style={eh.ownerVisuallyHidden} />, (0, c.jsx)(U.FocusGuard, {
          ref: P,
          onFocus: e => {
            if (ey && (0, J.isOutsideEvent)(e, ey)) {
              tp.flushSync(() => {
                W(!1);
              });
              let e = R.current || ei;
              e?.focus();
            } else {
              let t = (0, J.getNextTabbable)(ei);
              B && !h && ey && t && (0, q.contains)(ey, t) && (t = (0, J.getTabbableAfterElement)(R.current)), t?.focus(), B && !h || (0, q.contains)(C.current, t) || u(null, (0, x.createChangeEventDetails)(S.REASONS.focusOut, e.nativeEvent));
            }
          }
        })]
      })]
    });
  }),
  nc = d.createContext(void 0),
  nd = d.forwardRef(function (e, t) {
    let {
        keepMounted: n = !1,
        ...r
      } = e,
      {
        mounted: o
      } = t_();
    return o || n ? (0, c.jsx)(nc.Provider, {
      value: n,
      children: (0, c.jsx)(ep.FloatingPortal, {
        ref: t,
        ...r
      })
    }) : null;
  });
var np = _module69310,
  nf = _module80015;
let nh = d.createContext(void 0);
function ng(e = !1) {
  let t = d.useContext(nh);
  if (!t && !e) throw Error((0, p.default)(42));
  return t;
}
var nm = _module79870,
  nv = _module64113;
let nb = (0, t2.getEmptyRootContext)(),
  nw = d.forwardRef(function (e, t) {
    var n;
    let {
        open: r,
        mounted: o,
        positionerElement: i,
        setPositionerElement: a,
        floatingRootContext: s,
        nested: l,
        transitionStatus: u
      } = t_(),
      {
        className: f,
        render: h,
        anchor: g,
        positionMethod: m = "absolute",
        side: v = "bottom",
        align: b = "center",
        sideOffset: w = 0,
        alignOffset: y = 0,
        collisionBoundary: x = "clipping-ancestors",
        collisionPadding: S = 5,
        collisionAvoidance: E = l ? eh.POPUP_COLLISION_AVOIDANCE : eh.DROPDOWN_COLLISION_AVOIDANCE,
        arrowPadding: C = 5,
        sticky: k = !1,
        disableAnchorTracking: P = !1,
        style: R,
        ...T
      } = e,
      M = function () {
        let e = d.useContext(nc);
        if (void 0 === e) throw Error((0, p.default)(40));
        return e;
      }(),
      N = t$(),
      D = (0, _.useTimeout)(),
      O = (0, _.useTimeout)(),
      [A, j] = d.useState(r),
      I = d.useRef(r);
    d.useEffect(() => {
      if (i) return (0, W.mergeCleanups)((0, F.addEventListener)(i, "focusin", e, !0), (0, F.addEventListener)(i, "focusout", e, !0));
      function e(e) {
        i && (0, J.isOutsideEvent)(e) && ("focusin" === e.type ? J.enableFocusInside : J.disableFocusInside)(i);
      }
    }, [i]);
    let L = (s || nb).useState("domReferenceElement"),
      H = (n = {
        anchor: g ?? L,
        positionMethod: m,
        mounted: o,
        side: v,
        sideOffset: w,
        align: b,
        alignOffset: y,
        arrowPadding: C,
        collisionBoundary: x,
        collisionPadding: S,
        sticky: k,
        disableAnchorTracking: P,
        keepMounted: M,
        floatingRootContext: s,
        collisionAvoidance: E,
        shift: {
          rootBoundary: "layoutViewport"
        },
        nodeId: N,
        adaptiveOrigin: nm.adaptiveOrigin
      }, (0, nf.useAnchorPositioningWithHook)(n, np.useFloating)),
      B = {
        open: r,
        side: H.side,
        align: H.align,
        anchorHidden: H.anchorHidden,
        instant: A
      };
    d.useEffect(() => {
      if (!r) return;
      I.current && D.start(0, () => {
        I.current = !1, O.isStarted() || j(!1);
      });
      let e = (0, X.ownerWindow)(i);
      return (0, F.addEventListener)(e, "resize", function () {
        tp.flushSync(() => {
          j(!0);
        }), O.start(100, () => {
          j(!1);
        });
      });
    }, [r, D, O, i]);
    let Y = (0, nv.usePositioner)(e, B, {
      styles: H.positionerStyles,
      transitionStatus: u,
      props: T,
      refs: [t, a],
      hidden: !o,
      inert: !r
    });
    return (0, c.jsx)(nh.Provider, {
      value: H,
      children: Y
    });
  });
var ny = _module38633;
let nx = (0, t2.getEmptyRootContext)();
function nS({
  children: e
}) {
  let {
      beforeInsideRef: t,
      beforeOutsideRef: n,
      afterInsideRef: r,
      afterOutsideRef: o,
      positionerElement: i,
      viewportElement: a,
      floatingRootContext: s
    } = t_(),
    l = !!ng(!0),
    u = i || a;
  return s || l ? (0, c.jsxs)(d.Fragment, {
    children: [(0, c.jsx)(U.FocusGuard, {
      ref: t,
      onFocus: e => {
        u && (0, J.isOutsideEvent)(e, u) ? (0, J.getNextTabbable)(u)?.focus() : n.current?.focus();
      }
    }), e, (0, c.jsx)(U.FocusGuard, {
      ref: r,
      onFocus: e => {
        u && (0, J.isOutsideEvent)(e, u) ? (0, J.getPreviousTabbable)(u)?.focus() : o.current?.focus();
      }
    })]
  }) : e;
}
let nE = d.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        style: o,
        children: i,
        id: a,
        ...s
      } = e,
      l = (0, ny.useId)(a),
      {
        setViewportElement: u,
        setViewportTargetElement: d,
        floatingRootContext: p,
        prevTriggerElementRef: f,
        viewportInert: h,
        setViewportInert: m
      } = t_(),
      v = !!ng(!0),
      b = (p || nx).useState("domReferenceElement");
    (0, T.useIsoLayoutEffect)(() => {
      b && (f.current = b);
    }, [b, f]);
    let w = (0, g.useRenderElement)("div", e, {
      ref: [t, u],
      props: [{
        id: l,
        onBlur(e) {
          let t = e.relatedTarget,
            n = e.currentTarget;
          t && !(0, q.contains)(n, t) && t !== b && m(!0);
        },
        ...(!v && h && {
          inert: (0, eW.inertValue)(!0)
        }),
        children: v ? i : (0, c.jsx)(nS, {
          children: <div ref={d}>{i}</div>
        })
      }, s]
    });
    return v ? (0, c.jsx)(nS, {
      children: w
    }) : w;
  }),
  nC = d.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        style: o,
        ...i
      } = e,
      {
        open: a,
        mounted: s,
        transitionStatus: l
      } = t_();
    return (0, g.useRenderElement)("div", e, {
      state: {
        open: a,
        transitionStatus: l
      },
      ref: t,
      props: [{
        role: "presentation",
        hidden: !s,
        style: {
          userSelect: "none",
          WebkitUserSelect: "none"
        }
      }, i],
      stateAttributesMapping: m.popupTransitionStateMapping
    });
  });
var nk = _module36875;
let nP = d.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        style: o,
        id: i,
        ...a
      } = e,
      {
        open: s,
        transitionStatus: l,
        setPopupElement: u
      } = t_(),
      c = ng(),
      d = (0, ns.useDirection)(),
      p = (0, P.useBaseUiId)(i),
      f = {
        open: s,
        transitionStatus: l,
        side: c.side,
        align: c.align,
        anchorHidden: c.anchorHidden
      },
      h = "left" === c.side;
    h = "rtl" === d ? h || "inline-end" === c.side : h || "inline-start" === c.side;
    let v = "top" === c.side || h;
    return (0, g.useRenderElement)("nav", e, {
      state: f,
      ref: [t, u],
      props: [{
        id: p,
        tabIndex: -1,
        style: v ? {
          position: "absolute",
          ["top" === c.side ? "bottom" : "top"]: "0",
          [h ? "right" : "left"]: "0"
        } : {}
      }, (0, nk.getDisabledMountTransitionStyles)(l), a],
      stateAttributesMapping: m.popupTransitionStateMapping
    });
  }),
  nR = d.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        style: o,
        ...i
      } = e,
      {
        open: a,
        transitionStatus: s
      } = t_(),
      {
        arrowRef: l,
        side: u,
        align: c,
        arrowUncentered: d,
        arrowStyles: p
      } = ng();
    return (0, g.useRenderElement)("div", e, {
      state: {
        open: a,
        side: u,
        align: c,
        uncentered: d
      },
      ref: [t, l],
      props: [{
        style: p,
        "aria-hidden": !0
      }, (0, nk.getDisabledMountTransitionStyles)(s), i],
      stateAttributesMapping: m.popupStateMapping
    });
  }),
  nT = d.forwardRef(function (e, t) {
    let {
        className: n,
        render: r,
        active: o = !1,
        closeOnClick: i = !1,
        style: a,
        ...s
      } = e,
      {
        setValue: l,
        popupElement: u,
        positionerElement: d,
        rootRef: p
      } = t_(),
      f = t$(),
      h = (0, ef.useFloatingTree)();
    return (0, c.jsx)(no.CompositeItem, {
      tag: "a",
      render: r,
      className: n,
      style: a,
      state: {
        active: o
      },
      refs: [t],
      props: [{
        "aria-current": o ? "page" : void 0,
        tabIndex: void 0,
        onClick(e) {
          i && l(null, (0, x.createChangeEventDetails)(S.REASONS.linkPress, e.nativeEvent));
        },
        onBlur(e) {
          d && u && nr({
            currentTarget: e.currentTarget,
            relatedTarget: e.relatedTarget
          }, {
            popupElement: u,
            rootRef: p,
            tree: h,
            nodeId: f
          }) && l(null, (0, x.createChangeEventDetails)(S.REASONS.focusOut, e.nativeEvent));
        }
      }, s]
    });
  }),
  nM = d.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        style: o,
        ...i
      } = e,
      {
        value: a
      } = t4(),
      {
        open: s,
        value: l
      } = t_();
    return (0, g.useRenderElement)("span", e, {
      state: {
        open: s && l === a
      },
      ref: t,
      props: [{
        "aria-hidden": !0,
        children: "▼"
      }, i],
      stateAttributesMapping: m.triggerOpenStateMapping
    });
  });
const _export_Arrow = nR;
const _export_Backdrop = nC;
const _export_Content = t9;
const _export_Icon = nM;
const _export_Item = t8;
const _export_Link = nT;
const _export_List = t5;
const _export_Popup = nP;
const _export_Portal = nd;
const _export_Positioner = nw;
const _export_Root = tK;
const _export_Trigger = nu;
const _export_Viewport = nE;
export { _export_Arrow as Arrow, _export_Backdrop as Backdrop, _export_Content as Content, _export_Icon as Icon, _export_Item as Item, _export_Link as Link, _export_List as List, _export_Popup as Popup, _export_Portal as Portal, _export_Positioner as Positioner, _export_Root as Root, _export_Trigger as Trigger, _export_Viewport as Viewport };

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
import * as _module48394 from "./48394.js";
import * as _module94805 from "./94805.js";
import * as _module9591 from "./9591.js";
import * as _module34561 from "./34561.js";
import * as _module3737 from "./3737.js";
import * as _module26997 from "./26997.js";
import * as _module79995 from "./79995.js";
import * as _module91956 from "./91956.js";
import * as _module86631 from "./86631.js";
import * as _module78351 from "./78351.js";
import * as _module50151 from "./50151.js";
import * as _module74740 from "./74740.js";
import * as _module82599 from "./82599.js";
import * as _module11706 from "./11706.js";
import * as _module17128 from "./17128.js";
import * as _module40192 from "./40192.js";
import * as _module94195 from "./94195.js";
import * as _module54382 from "./54382.js";
import * as _module84700 from "./84700.js";
import * as _module88550 from "./88550.js";
import * as _module95358 from "./95358.js";
import * as _module38501 from "./38501.js";
import * as _module55230 from "./55230.js";
import * as _module70512 from "./70512.js";
import * as _module41009 from "./41009.js";
import * as _module92915 from "./92915.js";
import * as _module76154 from "./76154.js";
import * as _module40189 from "./40189.js";
import * as _module22606 from "./22606.js";
import * as _module34529 from "./34529.js";
import * as _module13489 from "./13489.js";
import * as _module64924 from "./64924.js";
import * as _module42014 from "./42014.js";
import * as _module99536 from "./99536.js";
import * as _module29005 from "./29005.js";
import * as _module26553 from "./26553.js";
import * as _module70592 from "./70592.js";
import * as _module43620 from "./43620.js";
var t,
  n,
  r,
  o,
  i,
  l,
  u,
  c = _module31908;
var d = _module45032,
  p = _module83539;
let f = d.createContext(void 0);
function h(e) {
  let t = d.useContext(f);
  if (!e && void 0 === t) throw Error((0, p.default)(27));
  return t;
}
var g = _module31903,
  m = _module50115;
let v = ((t = {}).nestedDrawers = "--nested-drawers", t.height = "--drawer-height", t.frontmostHeight = "--drawer-frontmost-height", t.swipeMovementX = "--drawer-swipe-movement-x", t.swipeMovementY = "--drawer-swipe-movement-y", t.snapPointOffset = "--drawer-snap-point-offset", t.swipeStrength = "--drawer-swipe-strength", t),
  b = ((n = {}).swipeProgress = "--drawer-swipe-progress", n),
  w = d.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        style: o,
        forceRender: i = !1,
        ...a
      } = e,
      s = h(),
      l = s.useState("open"),
      u = s.useState("nested"),
      c = s.useState("mounted"),
      d = s.useState("transitionStatus");
    return (0, g.useRenderElement)("div", e, {
      state: {
        open: l,
        transitionStatus: d
      },
      ref: [s.context.backdropRef, t],
      stateAttributesMapping: m.popupTransitionStateMapping,
      props: [{
        role: "presentation",
        hidden: !c,
        style: {
          pointerEvents: l ? void 0 : "none",
          userSelect: "none",
          WebkitUserSelect: "none",
          [b.swipeProgress]: "0",
          [v.swipeStrength]: "1"
        }
      }, a],
      enabled: i || !u
    });
  });
var y = _module69471,
  x = _module88327,
  S = _module87491;
let E = d.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        style: o,
        disabled: i = !1,
        nativeButton: a = !0,
        ...s
      } = e,
      l = h(),
      u = l.useState("open"),
      {
        getButtonProps: c,
        buttonRef: d
      } = (0, y.useButton)({
        disabled: i,
        native: a
      });
    return (0, g.useRenderElement)("button", e, {
      state: {
        disabled: i
      },
      ref: [t, d],
      props: [{
        onClick: function (e) {
          u && l.setOpen(!1, (0, x.createChangeEventDetails)(S.REASONS.closePress, e.nativeEvent));
        }
      }, s, c]
    });
  }),
  C = "data-drawer-content",
  k = d.forwardRef(function (e, t) {
    let {
      render: n,
      className: r,
      style: o,
      ...i
    } = e;
    return h(), (0, g.useRenderElement)("div", e, {
      ref: t,
      props: [{
        [C]: ""
      }, i]
    });
  });
var P = _module10592;
let R = d.forwardRef(function (e, t) {
  let {
      render: n,
      className: r,
      style: o,
      id: i,
      ...a
    } = e,
    s = h(),
    l = (0, P.useBaseUiId)(i);
  return s.useSyncedValueWithCleanup("descriptionElementId", l), (0, g.useRenderElement)("p", e, {
    ref: t,
    props: [{
      id: l
    }, a]
  });
});
var T = _module71955;
let M = d.createContext(void 0);
function N() {
  return d.useContext(M);
}
let D = {
    active: e => e ? {
      "data-active": ""
    } : {
      "data-inactive": ""
    }
  },
  O = d.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        style: o,
        ...i
      } = e,
      a = N(),
      s = a?.active ?? !1,
      l = a?.visualStateStore,
      u = d.useRef(null);
    return (0, T.useIsoLayoutEffect)(() => {
      let e = u.current;
      if (!e || !l) return;
      let t = () => {
        let {
          swipeProgress: t,
          frontmostHeight: n
        } = l.getSnapshot();
        t <= 0 ? e.style.setProperty(b.swipeProgress, "0") : e.style.setProperty(b.swipeProgress, `${t}`), n <= 0 ? e.style.removeProperty(v.height) : e.style.setProperty(v.height, `${n}px`);
      };
      t();
      let n = l.subscribe(t);
      return () => {
        n(), e.style.setProperty(b.swipeProgress, "0"), e.style.removeProperty(v.height);
      };
    }, [l]), (0, g.useRenderElement)("div", e, {
      ref: [t, u],
      state: {
        active: s
      },
      props: [{
        style: {
          [b.swipeProgress]: "0"
        }
      }, i],
      stateAttributesMapping: D
    });
  }),
  A = {
    active: e => e ? {
      "data-active": ""
    } : {
      "data-inactive": ""
    }
  },
  j = d.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        style: o,
        ...i
      } = e,
      a = N(),
      s = a?.active ?? !1;
    return (0, g.useRenderElement)("div", e, {
      ref: t,
      state: {
        active: s
      },
      props: i,
      stateAttributesMapping: A
    });
  });
var I = _module38783,
  L = _module7642,
  H = _module80269,
  F = _module77794,
  W = _module58943,
  B = _module48394,
  Y = _module94805,
  _ = _module9591,
  V = _module34561,
  $ = _module3737,
  z = _module26997,
  X = _module79995,
  U = _module91956,
  q = _module86631,
  G = _module78351,
  K = _module50151,
  J = _module74740,
  Z = _module82599,
  Q = _module11706,
  ee = _module17128;
let et = 0;
function en(e, t = {}) {
  let {
    preventScroll: n = !1,
    sync: r = !1,
    shouldFocus: o
  } = t;
  function i() {
    (!o || o()) && e?.focus({
      preventScroll: n
    });
  }
  if (cancelAnimationFrame(et), r) return i(), L.NOOP;
  let a = requestAnimationFrame(i);
  return et = a, () => {
    et === a && (cancelAnimationFrame(a), et = 0);
  };
}
let er = {
    inert: new WeakMap(),
    "aria-hidden": new WeakMap()
  },
  eo = "data-base-ui-inert",
  ei = {
    inert: new WeakSet(),
    "aria-hidden": new WeakSet()
  },
  ea = new WeakMap(),
  el = (e, t) => t.map(t => {
    if (e.contains(t)) return t;
    let n = function e(t) {
      return t ? (0, H.isShadowRoot)(t) ? t.host : e(t.parentNode) : null;
    }(t);
    return e.contains(n) ? n : null;
  }).filter(e => null != e),
  eu = e => {
    let t = new Set();
    return e.forEach(e => {
      let n = e;
      for (; n && !t.has(n);) t.add(n), n = n.parentNode;
    }), t;
  },
  ec = (e, t, n) => {
    let r = [],
      o = e => {
        !e || n.has(e) || Array.from(e.children).forEach(e => {
          "script" !== (0, H.getNodeName)(e) && (t.has(e) ? o(e) : r.push(e));
        });
      };
    return o(e), r;
  };
function ed(e, t = {}) {
  let {
      ariaHidden: n = !1,
      inert: r = !1,
      mark: o = !0
    } = t,
    i = (0, z.ownerDocument)(e[0]).body;
  return function (e, t, n, r, {
    mark: o = !0
  }) {
    let i = null;
    r ? i = "inert" : n && (i = "aria-hidden");
    let a = null,
      s = null,
      l = el(t, e),
      u = o ? ec(t, eu(l), new Set(l)) : [],
      c = [],
      d = [];
    if (i) {
      let e = er[i],
        n = ei[i];
      s = n, a = e;
      let r = el(t, Array.from(t.querySelectorAll("[aria-live]"))),
        o = l.concat(r);
      ec(t, eu(o), new Set(o)).forEach(t => {
        let r = t.getAttribute(i),
          o = null !== r && "false" !== r,
          a = (e.get(t) || 0) + 1;
        e.set(t, a), c.push(t), 1 === a && o && n.add(t), o || t.setAttribute(i, "inert" === i ? "" : "true");
      });
    }
    return o && u.forEach(e => {
      let t = (ea.get(e) || 0) + 1;
      ea.set(e, t), d.push(e), 1 === t && e.setAttribute(eo, "");
    }), es += 1, () => {
      a && c.forEach(e => {
        let t = (a.get(e) || 0) - 1;
        a.set(e, t), t || (!s?.has(e) && i && e.removeAttribute(i), s?.delete(e));
      }), o && d.forEach(e => {
        let t = (ea.get(e) || 0) - 1;
        ea.set(e, t), t || e.removeAttribute(eo);
      }), (es -= 1) || (er.inert = new WeakMap(), er["aria-hidden"] = new WeakMap(), ei.inert = new WeakSet(), ei["aria-hidden"] = new WeakSet(), ea = new WeakMap());
    };
  }(e, i, n, r, {
    mark: o
  });
}
var ep = _module40192,
  ef = _module94195,
  eh = _module54382,
  eg = _module84700;
let em = [];
function ev() {
  em = em.filter(e => e.deref()?.isConnected);
}
function eb(e) {
  ev(), e && "body" !== (0, H.getNodeName)(e) && (em.push(new WeakRef(e)), em.length > 20 && (em = em.slice(-20)));
}
function ew() {
  return ev(), em[em.length - 1]?.deref();
}
function ey(e) {
  if (e.hasAttribute("tabindex") && !e.hasAttribute("data-tabindex") || !e.getAttribute("role")?.includes("dialog")) return;
  let t = (0, J.focusable)(e).filter(e => {
      let t = e.getAttribute("data-tabindex") || "";
      return (0, J.isTabbable)(e) || e.hasAttribute("data-tabindex") && !t.startsWith("-");
    }),
    n = e.getAttribute("tabindex");
  0 === t.length ? "0" !== n && (e.setAttribute("tabindex", "0"), e.setAttribute("data-tabindex", "0")) : ("-1" !== n || e.hasAttribute("data-tabindex") && "-1" !== e.getAttribute("data-tabindex")) && (e.setAttribute("tabindex", "-1"), e.setAttribute("data-tabindex", "-1"));
}
function ex(e) {
  let {
      context: t,
      children: n,
      disabled: r = !1,
      initialFocus: o = !0,
      returnFocus: i = !0,
      restoreFocus: a = !1,
      modal: s = !0,
      closeOnFocusOut: l = !0,
      openInteractionType: u = "",
      nextFocusableElement: p,
      previousFocusableElement: f,
      beforeContentFocusGuardRef: h,
      externalTree: g,
      getInsideElements: m
    } = e,
    v = "rootStore" in t ? t.rootStore : t,
    b = v.useState("open"),
    w = v.useState("domReferenceElement"),
    y = v.useState("floatingElement"),
    {
      events: E,
      dataRef: C
    } = v.context,
    k = (0, I.useStableCallback)(() => C.current.floatingContext?.nodeId),
    P = (0, G.isTypeableCombobox)(w) && !1 === o,
    R = (0, Y.useValueAsRef)(o),
    M = (0, Y.useValueAsRef)(i),
    N = (0, Y.useValueAsRef)(u),
    D = (0, Y.useValueAsRef)(b),
    O = (0, ef.useFloatingTree)(g),
    A = (0, ep.usePortalContext)(),
    j = d.useRef(!1),
    L = d.useRef(!1),
    et = d.useRef(!1),
    er = d.useRef(null),
    eo = d.useRef(""),
    ei = d.useRef(""),
    ea = d.useRef(null),
    es = d.useRef(null),
    el = (0, B.useMergedRefs)(ea, h, A?.beforeInsideRef),
    eu = (0, B.useMergedRefs)(es, A?.afterInsideRef),
    ec = (0, _.useTimeout)(),
    em = (0, _.useTimeout)(),
    ex = (0, $.useAnimationFrame)(),
    eS = null != A,
    eE = (0, G.getFloatingFocusElement)(y),
    eC = (0, I.useStableCallback)((e = eE) => e ? (0, J.tabbable)(e) : []),
    ek = (0, I.useStableCallback)(() => m?.().filter(e => null != e) ?? []);
  d.useEffect(() => {
    if (r || !s) return;
    let e = (0, z.ownerDocument)(eE);
    return (0, F.addEventListener)(e, "keydown", function (e) {
      "Tab" === e.key && (0, q.contains)(eE, (0, q.activeElement)((0, z.ownerDocument)(eE))) && 0 === eC().length && !P && (0, K.stopEvent)(e);
    });
  }, [r, eE, s, P, eC]), d.useEffect(() => {
    if (r || !b) return;
    let e = (0, z.ownerDocument)(eE);
    function t() {
      et.current = !1;
    }
    return (0, W.mergeCleanups)((0, F.addEventListener)(e, "pointerdown", function (e) {
      let t = (0, q.getTarget)(e),
        n = ek();
      et.current = !((0, q.contains)(y, t) || (0, q.contains)(w, t) || (0, q.contains)(A?.portalNode, t) || n.some(e => e === t || (0, q.contains)(e, t))), ei.current = e.pointerType || "keyboard", t?.closest(`[${eh.CLICK_TRIGGER_IDENTIFIER}]`) && (L.current = !0, em.start(0, () => {
        L.current = !1;
      }));
    }, !0), (0, F.addEventListener)(e, "pointerup", t, !0), (0, F.addEventListener)(e, "pointercancel", t, !0), (0, F.addEventListener)(e, "keydown", function () {
      ei.current = "keyboard";
    }, !0), t);
  }, [r, y, w, eE, b, A, em, ek]), d.useEffect(() => {
    if (r || !l) return;
    let e = (0, z.ownerDocument)(eE);
    function t(t) {
      let n = t.relatedTarget,
        r = t.currentTarget,
        o = (0, q.getTarget)(t);
      s && null == n && null != o && (0, q.contains)(y, o) && eb(o), queueMicrotask(() => {
        let i = k(),
          l = v.context.triggerElements,
          u = ek(),
          c = n?.hasAttribute((0, ee.createAttribute)("focus-guard")) && [ea.current, es.current, A?.beforeInsideRef.current, A?.afterInsideRef.current, A?.beforeOutsideRef.current, A?.afterOutsideRef.current, (0, eg.resolveRef)(f), (0, eg.resolveRef)(p)].includes(n),
          d = !((0, q.contains)(w, n) || (0, q.contains)(y, n) || (0, q.contains)(n, y) || (0, q.contains)(A?.portalNode, n) || u.some(e => e === n || (0, q.contains)(e, n)) || l.hasMatchingElement(e => (0, q.contains)(e, n)) || c || O && ((0, Z.getNodeChildren)(O.nodesRef.current, i).find(e => (0, q.contains)(e.context?.elements.floating, n) || (0, q.contains)(e.context?.elements.domReference, n)) || (0, Z.getNodeAncestors)(O.nodesRef.current, i).find(e => [e.context?.elements.floating, (0, G.getFloatingFocusElement)(e.context?.elements.floating)].includes(n) || e.context?.elements.domReference === n)));
        if (r === w && eE && ey(eE), a && r !== w && !(0, Q.isElementVisible)(o) && (0, q.activeElement)(e) === e.body) {
          if ((0, H.isHTMLElement)(eE) && (eE.focus(), "popup" === a)) return void ex.request(() => {
            eE.focus();
          });
          let e = eC(),
            t = er.current,
            n = (t && e.includes(t) ? t : null) || e[e.length - 1] || eE;
          (0, H.isHTMLElement)(n) && n.focus();
        }
        if (C.current.insideReactTree) {
          C.current.insideReactTree = !1;
          return;
        }
        (P || !s) && n && d && !L.current && (P || n !== ew()) && (j.current = !0, v.setOpen(!1, (0, x.createChangeEventDetails)(S.REASONS.focusOut, t)));
      });
    }
    let n = (0, H.isHTMLElement)(w) ? w : null;
    if (y || n) return (0, W.mergeCleanups)(n && (0, F.addEventListener)(n, "focusout", t), n && (0, F.addEventListener)(n, "pointerdown", function () {
      L.current = !0, em.start(0, () => {
        L.current = !1;
      });
    }), y && (0, F.addEventListener)(y, "focusin", function (e) {
      let t = (0, q.getTarget)(e);
      (0, J.isTabbable)(t) && (er.current = t);
    }), y && (0, F.addEventListener)(y, "focusout", t), y && A && (0, F.addEventListener)(y, "focusout", function () {
      et.current || (C.current.insideReactTree = !0, ec.start(0, () => {
        C.current.insideReactTree = !1;
      }));
    }, !0));
  }, [r, w, y, eE, s, O, A, v, l, a, eC, P, k, C, ec, em, ex, p, f, ek]), d.useEffect(() => {
    if (r || !y || !b) return;
    let e = Array.from(A?.portalNode?.querySelectorAll(`[${(0, ee.createAttribute)("portal")}]`) || []),
      t = O ? (0, Z.getNodeAncestors)(O.nodesRef.current, k()) : [],
      n = t.find(e => (0, G.isTypeableCombobox)(e.context?.elements.domReference || null))?.context?.elements.domReference,
      o = ed([y, ...e, ea.current, es.current, A?.beforeOutsideRef.current, A?.afterOutsideRef.current, ...ek(), n, (0, eg.resolveRef)(f), (0, eg.resolveRef)(p), P ? w : null].filter(e => null != e), {
        ariaHidden: s || P,
        mark: !1
      }),
      i = ed([y, ...e].filter(e => null != e));
    return () => {
      i(), o();
    };
  }, [b, r, w, y, s, A, P, O, k, p, f, ek]), (0, T.useIsoLayoutEffect)(() => {
    if (!b || r || !(0, H.isHTMLElement)(eE)) return;
    eo.current = "", ei.current = "";
    let e = (0, z.ownerDocument)(eE),
      t = (0, q.activeElement)(e);
    queueMicrotask(() => {
      let n,
        r = R.current,
        o = "function" == typeof r ? r(N.current || "") : r;
      if (void 0 === o || !1 === o || (0, q.contains)(eE, t)) return;
      let i = null,
        a = () => (null == i && (i = eC(eE)), i[0] || eE);
      n = (n = !0 === o || null === o ? a() : (0, eg.resolveRef)(o)) || a();
      let s = (0, q.contains)(eE, (0, q.activeElement)(e));
      en(n, {
        preventScroll: n === eE,
        shouldFocus() {
          if (!D.current) return !1;
          if (s) return !0;
          let t = (0, q.activeElement)(e);
          return !(t !== n && (0, q.contains)(eE, t));
        }
      });
    });
  }, [r, b, eE, eC, R, N, D]), (0, T.useIsoLayoutEffect)(() => {
    if (r || !eE) return;
    let e = (0, z.ownerDocument)(eE),
      t = (0, q.activeElement)(e),
      n = null == N.current;
    function o(e) {
      var t, n;
      let r;
      if (e.open || (t = e.nativeEvent, n = ei.current, r = (0, X.ownerWindow)((0, q.getTarget)(t)), eo.current = t instanceof r.KeyboardEvent ? "keyboard" : t instanceof r.FocusEvent ? n || "keyboard" : "pointerType" in t ? t.pointerType || "keyboard" : "touches" in t ? "touch" : t instanceof r.MouseEvent ? n || (0 === t.detail ? "keyboard" : "mouse") : ""), e.reason === S.REASONS.triggerHover && "mouseleave" === e.nativeEvent.type && (j.current = !0), e.reason === S.REASONS.outsidePress) if (e.nested) j.current = !1;else if ((0, K.isVirtualClick)(e.nativeEvent) || (0, K.isVirtualPointerEvent)(e.nativeEvent)) j.current = !1;else {
        let e = !1;
        (0, z.ownerDocument)(eE).createElement("div").focus({
          get preventScroll() {
            return e = !0, !1;
          }
        }), e ? j.current = !1 : j.current = !0;
      }
    }
    return eb(t), E.on("openchange", o), () => {
      E.off("openchange", o);
      let r = (0, q.activeElement)(e),
        i = ek(),
        a = (0, q.contains)(y, r) || i.some(e => e === r || (0, q.contains)(e, r)) || O && (0, Z.getNodeChildren)(O.nodesRef.current, k(), !1).some(e => (0, q.contains)(e.context?.elements.floating, r)),
        s = M.current,
        l = eo.current,
        u = function (e) {
          let r = M.current,
            o = "function" == typeof r ? r(e) : r;
          if (void 0 === o || !1 === o) return null;
          null === o && (o = !0);
          let i = w?.isConnected ? w : null,
            a = t?.isConnected && "body" !== (0, H.getNodeName)(t) ? t : null,
            s = n ? a || i : i || a;
          return (s || (s = ew() || null), "boolean" == typeof o) ? s : (0, eg.resolveRef)(o) || s || null;
        }(l);
      queueMicrotask(() => {
        let t = u ? (0, J.isTabbable)(u) ? u : (0, J.tabbable)(u)[0] || u : null;
        if (s && !j.current && (0, H.isHTMLElement)(t) && ("boolean" != typeof s || t === r || r === e.body || a)) {
          let e = {
            preventScroll: !0
          };
          "keyboard" === l && (e.focusVisible = !0), t.focus(e);
        }
        j.current = !1;
      });
    };
  }, [r, y, eE, M, N, E, O, w, k, ek]), (0, T.useIsoLayoutEffect)(() => {
    if (!V.platform.engine.webkit || b || !y) return;
    let e = (0, q.activeElement)((0, z.ownerDocument)(y));
    (0, H.isHTMLElement)(e) && (0, G.isTypeableElement)(e) && (0, q.contains)(y, e) && e.blur();
  }, [b, y]), (0, T.useIsoLayoutEffect)(() => {
    if (!r && A) return A.setFocusManagerState({
      modal: s,
      closeOnFocusOut: l,
      open: b,
      onOpenChange: v.setOpen,
      domReference: w
    }), () => {
      A.setFocusManagerState(null);
    };
  }, [r, A, s, b, v, l, w]), (0, T.useIsoLayoutEffect)(() => {
    if (!r && eE) return ey(eE), () => {
      queueMicrotask(ev);
    };
  }, [r, eE]);
  let eP = !r && (!s || !P) && (eS || s);
  return (0, c.jsxs)(d.Fragment, {
    children: [eP && (0, c.jsx)(U.FocusGuard, {
      "data-type": "inside",
      ref: el,
      onFocus: e => {
        if (s) {
          let e = eC();
          en(e[e.length - 1]);
        } else if (A?.portalNode) if (j.current = !1, (0, J.isOutsideEvent)(e, A.portalNode)) {
          let e = (0, J.getNextTabbable)(w);
          e?.focus();
        } else (0, eg.resolveRef)(f ?? A.beforeOutsideRef)?.focus();
      }
    }), n, eP && (0, c.jsx)(U.FocusGuard, {
      "data-type": "inside",
      ref: eu,
      onFocus: e => {
        if (s) en(eC()[0]);else if (A?.portalNode) if (l && (j.current = !0), (0, J.isOutsideEvent)(e, A.portalNode)) {
          let e = (0, J.getPreviousTabbable)(w);
          e?.focus();
        } else (0, eg.resolveRef)(p ?? A.afterOutsideRef)?.focus();
      }
    })]
  });
}
let eS = ((r = {})[r.open = m.CommonPopupDataAttributes.open] = "open", r[r.closed = m.CommonPopupDataAttributes.closed] = "closed", r[r.startingStyle = m.CommonPopupDataAttributes.startingStyle] = "startingStyle", r[r.endingStyle = m.CommonPopupDataAttributes.endingStyle] = "endingStyle", r.expanded = "data-expanded", r.nestedDrawerOpen = "data-nested-drawer-open", r.nestedDrawerSwiping = "data-nested-drawer-swiping", r.swipeDismiss = "data-swipe-dismiss", r.swipeDirection = "data-swipe-direction", r.swiping = "data-swiping", r),
  eE = d.createContext(void 0);
function eC() {
  let e = d.useContext(eE);
  if (void 0 === e) throw Error((0, p.default)(26));
  return e;
}
var ek = _module88550,
  eP = _module95358;
let eR = d.createContext(void 0);
function eT(e) {
  let t = d.useContext(eR);
  if (!0 !== e && void 0 === t) throw Error((0, p.default)(90));
  return t;
}
var eM = _module38501;
function eN(e, t) {
  let n = e + t;
  return n >= 0 ? t : -Math.sqrt(-n) - e;
}
function eD(e, t, n) {
  if (!Number.isFinite(t) || t <= 0) return null;
  if ("number" == typeof e) return Number.isFinite(e) ? e <= 1 ? (0, eM.clamp)(e, 0, 1) * t : e : null;
  let r = e.trim();
  if (r.endsWith("px")) {
    let e = Number.parseFloat(r);
    return Number.isFinite(e) ? e : null;
  }
  if (r.endsWith("rem")) {
    let e = Number.parseFloat(r);
    return Number.isFinite(e) ? e * n : null;
  }
  return null;
}
function eO(e, t) {
  let n = -1,
    r = 1 / 0;
  for (let o = 0; o < e.length; o += 1) {
    let i = Math.abs(e[o] - t);
    i < r && (r = i, n = o);
  }
  return n;
}
function eA() {
  let e = h(),
    {
      snapPoints: t,
      activeSnapPoint: n,
      setActiveSnapPoint: r,
      popupHeight: o
    } = eT(),
    i = e.useState("viewportElement"),
    [a, s] = d.useState(0),
    [l, u] = d.useState(16),
    c = (0, I.useStableCallback)(() => {
      let e = (0, z.ownerDocument)(i).documentElement;
      s(i ? i.offsetHeight : e.clientHeight);
      let t = parseFloat(getComputedStyle(e).fontSize);
      Number.isFinite(t) && u(t);
    });
  (0, T.useIsoLayoutEffect)(() => {
    if (c(), !i || "function" != typeof ResizeObserver) return;
    let e = new ResizeObserver(c);
    return e.observe(i), () => {
      e.disconnect();
    };
  }, [c, i]);
  let p = d.useMemo(() => {
      if (!t || 0 === t.length || a <= 0 || o <= 0) return [];
      let e = Math.min(o, a),
        n = t.map(t => {
          let n = eD(t, a, l);
          if (null === n) return null;
          let r = (0, eM.clamp)(n, 0, e);
          return {
            value: t,
            height: r,
            offset: Math.max(0, o - r)
          };
        }).filter(e => !!e);
      if (n.length <= 1) return n;
      let r = [],
        i = [];
      for (let e = n.length - 1; e >= 0; e -= 1) {
        let t = n[e];
        i.some(e => 1 >= Math.abs(e - t.height)) || (i.push(t.height), r.push(t));
      }
      return r.reverse(), r;
    }, [o, l, t, a]),
    f = d.useMemo(() => {
      if (null === n) return;
      let e = p.find(e => Object.is(e.value, n));
      if (e) return e;
      let t = Math.min(o, a),
        r = eD(n, a, l);
      if (null === r) return;
      let i = (0, eM.clamp)(r, 0, t);
      return p[eO(p.map(e => e.height), i)];
    }, [n, o, p, l, a]);
  return {
    snapPoints: t,
    activeSnapPoint: n,
    setActiveSnapPoint: r,
    popupHeight: o,
    viewportHeight: a,
    resolvedSnapPoints: p,
    activeSnapPointOffset: f?.offset ?? null
  };
}
let ej = d.createContext(null);
var eI = _module55230;
let eL = !1,
  eH = {
    ...m.popupTransitionStateMapping,
    expanded: e => e ? {
      [eS.expanded]: ""
    } : null,
    nestedDrawerOpen: e => e ? {
      [eS.nestedDrawerOpen]: ""
    } : null,
    nestedDrawerSwiping: e => e ? {
      [eS.nestedDrawerSwiping]: ""
    } : null,
    swipeDirection: e => ({
      [eS.swipeDirection]: e
    }),
    swiping: e => e ? {
      [eS.swiping]: ""
    } : null
  },
  eF = d.forwardRef(function (e, t) {
    let n,
      {
        render: r,
        className: o,
        style: i,
        finalFocus: a,
        initialFocus: s,
        ...l
      } = e,
      u = h(),
      p = u.context.popupRef,
      {
        swipeDirection: f,
        frontmostHeight: m,
        hasNestedDrawer: w,
        nestedSwiping: y,
        nestedSwipeProgressStore: x,
        onPopupHeightChange: S,
        notifyParentFrontmostHeight: E,
        notifyParentHasNestedDrawer: C
      } = eT(),
      k = u.useState("descriptionElementId"),
      P = u.useState("disablePointerDismissal"),
      R = u.useState("floatingRootContext"),
      M = u.useState("popupProps"),
      N = u.useState("modal"),
      D = u.useState("mounted"),
      O = u.useState("nested"),
      A = u.useState("nestedOpenDrawerCount"),
      j = u.useState("transitionStatus"),
      H = u.useState("open"),
      F = u.useState("openMethod"),
      W = u.useState("titleElementId"),
      B = u.useState("role"),
      Y = R.useState("floatingId"),
      _ = l.id ?? Y,
      V = d.useContext(ej);
    eC();
    let {
        snapPoints: $,
        activeSnapPoint: z,
        activeSnapPointOffset: X
      } = eA(),
      U = A > 0,
      q = V?.swiping ?? !1,
      G = V?.swipeStrength ?? null,
      [K, J] = d.useState(0),
      Z = d.useRef(0),
      Q = (0, I.useStableCallback)(() => {
        let e = p.current;
        if (!e) return;
        let t = e.offsetHeight;
        if (!(Z.current > 0) || !(m > Z.current) || !(t > Z.current)) {
          if (Z.current > 0 && w) {
            let e = Z.current;
            J(e), S(e);
            return;
          }
          t !== Z.current && (Z.current = t, J(t), S(t));
        }
      });
    (0, T.useIsoLayoutEffect)(() => {
      if (!D) {
        Z.current = 0, J(0), S(0);
        return;
      }
      let e = p.current;
      if (!e || (eL || ("u" > typeof CSS && "registerProperty" in CSS && ([v.swipeMovementX, v.swipeMovementY, v.snapPointOffset].forEach(e => {
        try {
          CSS.registerProperty({
            name: e,
            syntax: "<length>",
            inherits: !1,
            initialValue: "0px"
          });
        } catch {}
      }), [{
        name: b.swipeProgress,
        initialValue: "0"
      }, {
        name: v.swipeStrength,
        initialValue: "1"
      }].forEach(({
        name: e,
        initialValue: t
      }) => {
        try {
          CSS.registerProperty({
            name: e,
            syntax: "<number>",
            inherits: !1,
            initialValue: t
          });
        } catch {}
      })), eL = !0), Q(), "function" != typeof ResizeObserver)) return;
      let t = new ResizeObserver(Q);
      return t.observe(e), () => {
        t.disconnect();
      };
    }, [Q, D, U, S, p]), (0, T.useIsoLayoutEffect)(() => {
      let e = () => {
        let e = p.current;
        if (!e) return;
        let t = x.getSnapshot();
        t > 0 ? e.style.setProperty(b.swipeProgress, `${t}`) : e.style.setProperty(b.swipeProgress, "0");
      };
      e();
      let t = x.subscribe(e),
        n = p.current;
      return () => {
        t(), n && n.style.setProperty(b.swipeProgress, "0");
      };
    }, [x, p]), (0, T.useIsoLayoutEffect)(() => {
      if (H) return E?.(m), () => {
        E?.(0);
      };
    }, [m, H, E]), (0, T.useIsoLayoutEffect)(() => {
      if (C) return C(H || "ending" === j), () => {
        C(!1);
      };
    }, [C, H, j]), (0, ek.useOpenChangeComplete)({
      open: H,
      ref: p,
      onComplete() {
        H && u.context.onOpenChangeComplete?.(!0);
      }
    });
    let ee = void 0 === s ? p : s,
      et = u.useStateSetter("popupElement"),
      en = !w && "ending" !== j;
    K && !en && (n = `${K}px`);
    let er = $ && $.length > 0 && ("down" === f || "up" === f),
      eo = null;
    er && null !== X && (eo = "up" === f ? -X : X);
    let ei = V ? V.getDragStyles() : L.EMPTY_OBJECT;
    if (er && "down" === f) {
      let e = Number.parseFloat(String(ei[v.swipeMovementY]));
      ei = q && Number.isFinite(e) ? {
        ...ei,
        transform: void 0,
        [v.swipeMovementY]: `${eN(X ?? 0, e)}px`
      } : {
        ...ei,
        transform: void 0
      };
    }
    let ea = (0, g.useRenderElement)("div", e, {
      state: {
        open: H,
        nested: O,
        transitionStatus: j,
        expanded: 1 === z,
        nestedDrawerOpen: U,
        nestedDrawerSwiping: y,
        swipeDirection: f,
        swiping: q
      },
      props: [M, {
        id: _,
        "aria-labelledby": W,
        "aria-describedby": k,
        role: B,
        ...eI.FOCUSABLE_POPUP_PROPS,
        hidden: !D,
        onKeyDown(e) {
          eP.COMPOSITE_KEYS.has(e.key) && e.stopPropagation();
        },
        style: {
          ...ei,
          [b.swipeProgress]: "0",
          [v.nestedDrawers]: A,
          [v.height]: n,
          [v.snapPointOffset]: "number" == typeof eo ? `${eo}px` : "0px",
          [v.frontmostHeight]: m ? `${m}px` : void 0,
          [v.swipeStrength]: "number" == typeof G && Number.isFinite(G) && G > 0 ? `${G}` : "1"
        }
      }, l],
      ref: [t, p, et],
      stateAttributesMapping: eH
    });
    return (0, c.jsx)(ex, {
      context: R,
      openInteractionType: F,
      disabled: !D,
      closeOnFocusOut: !P,
      initialFocus: ee,
      returnFocus: a,
      modal: !1 !== N,
      restoreFocus: "popup",
      children: ea
    });
  });
var eW = _module70512;
let eB = d.forwardRef(function (e, t) {
    let n,
      {
        cutout: r,
        ...o
      } = e;
    if (r) {
      let e = r.getBoundingClientRect();
      n = `polygon(0% 0%,100% 0%,100% 100%,0% 100%,0% 0%,${e.left}px ${e.top}px,${e.left}px ${e.bottom}px,${e.right}px ${e.bottom}px,${e.right}px ${e.top}px,${e.left}px ${e.top}px)`;
    }
    return <div ref={t} role={"presentation"} data-base-ui-inert={""} {...o} style={{
      position: "fixed",
      inset: 0,
      userSelect: "none",
      WebkitUserSelect: "none",
      clipPath: n
    }} />;
  }),
  eY = d.forwardRef(function (e, t) {
    let {
        keepMounted: n = !1,
        ...r
      } = e,
      o = h(),
      i = o.useState("mounted"),
      a = o.useState("modal"),
      s = o.useState("open");
    return i || n ? (0, c.jsx)(eE.Provider, {
      value: n,
      children: (0, c.jsxs)(ep.FloatingPortal, {
        ref: t,
        ...r,
        children: [i && !0 === a && (0, c.jsx)(eB, {
          ref: o.context.internalBackdropRef,
          inert: (0, eW.inertValue)(!s)
        }), e.children]
      })
    }) : null;
  });
function e_() {
  let e = {
      swipeProgress: 0,
      frontmostHeight: 0
    },
    t = new Set();
  return {
    getSnapshot: () => e,
    set(n) {
      let r = e.swipeProgress;
      void 0 !== n.swipeProgress && (r = Number.isFinite(n.swipeProgress) ? n.swipeProgress : 0);
      let o = e.frontmostHeight;
      void 0 !== n.frontmostHeight && (o = Number.isFinite(n.frontmostHeight) ? n.frontmostHeight : 0), (r !== e.swipeProgress || o !== e.frontmostHeight) && (e = {
        swipeProgress: r,
        frontmostHeight: o
      }, t.forEach(e => {
        e();
      }));
    },
    subscribe: e => (t.add(e), () => {
      t.delete(e);
    })
  };
}
var eV = _module41009;
let e$ = {},
  ez = {},
  eX = "";
function eU(e, t) {
  return (0, H.isOverflowElement)(e) ? e : t;
}
function eq(e, t, n) {
  return /hidden|clip/.test(e.getComputedStyle(eU(t, n)).overflowY);
}
class eG {
  lockCount = 0;
  restore = null;
  timeoutLock = _.Timeout.create();
  timeoutUnlock = _.Timeout.create();
  acquire(e) {
    return this.lockCount += 1, 1 === this.lockCount && null === this.restore && this.timeoutLock.start(0, () => this.lock(e)), this.release;
  }
  release = () => {
    this.lockCount -= 1, 0 === this.lockCount && this.restore && this.timeoutUnlock.start(0, this.unlock);
  };
  unlock = () => {
    0 === this.lockCount && this.restore && (this.restore?.(), this.restore = null);
  };
  lock(e) {
    let t, n, r;
    if (0 === this.lockCount || null !== this.restore) return;
    let o = (0, z.ownerDocument)(e),
      i = o.documentElement,
      a = o.body,
      s = (0, X.ownerWindow)(i);
    if (eq(s, i, a)) {
      let t = new s.MutationObserver(() => {
          eq(s, i, a) || (t.disconnect(), this.restore = null, this.lock(e));
        }),
        n = {
          attributes: !0
        };
      t.observe(i, n), t.observe(a, n), this.restore = () => t.disconnect();
      return;
    }
    let l = V.platform.os.ios || !function (e) {
      if ("u" < typeof document) return !1;
      let t = (0, z.ownerDocument)(e);
      return (0, X.ownerWindow)(t).innerWidth - t.documentElement.clientWidth > 0;
    }(e);
    this.restore = l ? (r = {
      overflowY: (n = eU((t = (0, z.ownerDocument)(e)).documentElement, t.body)).style.overflowY,
      overflowX: n.style.overflowX
    }, Object.assign(n.style, {
      overflowY: "hidden",
      overflowX: "hidden"
    }), () => {
      Object.assign(n.style, r);
    }) : function (e) {
      let t = (0, z.ownerDocument)(e),
        n = t.documentElement,
        r = t.body,
        o = (0, X.ownerWindow)(n),
        i = 0,
        a = 0,
        s = !1,
        l = $.AnimationFrame.create();
      if (V.platform.engine.webkit && (o.visualViewport?.scale ?? 1) !== 1) return () => {};
      function u() {
        let t = o.getComputedStyle(n),
          l = o.getComputedStyle(r),
          u = (t.scrollbarGutter || "").includes("both-edges") ? "stable both-edges" : "stable";
        i = n.scrollTop, a = n.scrollLeft, e$ = {
          scrollbarGutter: n.style.scrollbarGutter,
          overflowY: n.style.overflowY,
          overflowX: n.style.overflowX
        }, eX = n.style.scrollBehavior, ez = {
          position: r.style.position,
          height: r.style.height,
          width: r.style.width,
          boxSizing: r.style.boxSizing,
          overflowY: r.style.overflowY,
          overflowX: r.style.overflowX,
          scrollBehavior: r.style.scrollBehavior
        };
        let c = n.scrollHeight > n.clientHeight,
          d = n.scrollWidth > n.clientWidth,
          p = "scroll" === t.overflowY || "scroll" === l.overflowY,
          f = "scroll" === t.overflowX || "scroll" === l.overflowX,
          h = Math.max(0, o.innerWidth - r.clientWidth),
          g = Math.max(0, o.innerHeight - r.clientHeight),
          m = parseFloat(l.marginTop) + parseFloat(l.marginBottom),
          v = parseFloat(l.marginLeft) + parseFloat(l.marginRight),
          b = eU(n, r);
        if (s = function (e) {
          if (!("u" > typeof CSS && CSS.supports && CSS.supports("scrollbar-gutter", "stable")) || "u" < typeof document) return !1;
          let t = (0, z.ownerDocument)(e),
            n = t.documentElement,
            r = eU(n, t.body),
            o = r.style.overflowY,
            i = n.style.scrollbarGutter;
          n.style.scrollbarGutter = "stable", r.style.overflowY = "scroll";
          let a = r.offsetWidth;
          r.style.overflowY = "hidden";
          let s = r.offsetWidth;
          return r.style.overflowY = o, n.style.scrollbarGutter = i, a === s;
        }(e)) {
          n.style.scrollbarGutter = u, b.style.overflowY = "hidden", b.style.overflowX = "hidden";
          return;
        }
        Object.assign(n.style, {
          scrollbarGutter: u,
          overflowY: "hidden",
          overflowX: "hidden"
        }), (c || p) && (n.style.overflowY = "scroll"), (d || f) && (n.style.overflowX = "scroll"), Object.assign(r.style, {
          position: "relative",
          height: m || g ? `calc(100dvh - ${m + g}px)` : "100dvh",
          width: v || h ? `calc(100vw - ${v + h}px)` : "100vw",
          boxSizing: "border-box",
          overflowY: "hidden",
          overflowX: "hidden",
          scrollBehavior: "unset"
        }), r.scrollTop = i, r.scrollLeft = a, n.setAttribute("data-base-ui-scroll-locked", ""), n.style.scrollBehavior = "unset";
      }
      function c() {
        Object.assign(n.style, e$), Object.assign(r.style, ez), s || (n.scrollTop = i, n.scrollLeft = a, n.removeAttribute("data-base-ui-scroll-locked"), n.style.scrollBehavior = eX);
      }
      u();
      let d = (0, F.addEventListener)(o, "resize", function () {
        c(), l.request(u);
      });
      return () => {
        l.cancel(), c(), "function" == typeof o.removeEventListener && d();
      };
    }(e);
  }
}
let eK = new eG();
var eJ = _module92915;
function eZ({
  store: e,
  parentContext: t,
  isDrawer: n
}) {
  let r = e.useState("open"),
    o = e.useState("disablePointerDismissal"),
    i = e.useState("modal"),
    a = e.useState("popupElement"),
    s = e.useState("floatingRootContext"),
    [l, u] = d.useState(0),
    [c, p] = d.useState(0),
    f = 0 === l,
    h = (0, eJ.useDismiss)(s, {
      outsidePressEvent: () => e.context.internalBackdropRef.current || e.context.backdropRef.current ? "intentional" : {
        mouse: "trap-focus" === i ? "sloppy" : "intentional",
        touch: "sloppy"
      },
      outsidePress(t) {
        if (!e.context.outsidePressEnabledRef.current || "button" in t && 0 !== t.button) return !1;
        if ("touches" in t) {
          if ("touchend" === t.type) {
            if (1 !== t.changedTouches.length || 0 !== t.touches.length) return !1;
          } else if (1 !== t.touches.length) return !1;
        }
        let n = (0, q.getTarget)(t);
        if (f && !o) {
          if (i) {
            let t = e.context.internalBackdropRef.current,
              r = e.context.backdropRef.current;
            return !t && !r || t === n || r === n || (0, q.contains)(n, a) && !n?.hasAttribute("data-base-ui-portal");
          }
          return !0;
        }
        return !1;
      },
      escapeKey: f
    });
  return !function (e = !0, t = null) {
    (0, T.useIsoLayoutEffect)(() => {
      if (e) return eK.acquire(t);
    }, [e, t]);
  }(r && !0 === i, a), e.useContextCallback("onNestedDialogOpen", (e, t) => {
    u(e), p(t);
  }), (0, T.useIsoLayoutEffect)(() => (t?.onNestedDialogOpen && (r ? t.onNestedDialogOpen(l + 1, c + +!!n) : t.onNestedDialogOpen(0, 0)), () => {
    t?.onNestedDialogOpen && r && t.onNestedDialogOpen(0, 0);
  }), [n, r, l, c, t]), (0, eI.usePopupInteractionProps)(e, {
    activeTriggerProps: h.reference,
    inactiveTriggerProps: h.trigger,
    popupProps: h.floating,
    nestedOpenDialogCount: l,
    nestedOpenDrawerCount: c
  }), null;
}
var eQ = _module76154,
  e0 = _module40189,
  e1 = _module22606,
  e2 = _module34529;
let e5 = {
  ...e1.popupStoreSelectors,
  modal: e => e.modal,
  nested: e => e.nested,
  nestedOpenDialogCount: e => e.nestedOpenDialogCount,
  nestedOpenDrawerCount: e => e.nestedOpenDrawerCount,
  disablePointerDismissal: e => e.disablePointerDismissal,
  openMethod: e => e.openMethod,
  descriptionElementId: e => e.descriptionElementId,
  titleElementId: e => e.titleElementId,
  viewportElement: e => e.viewportElement,
  role: e => e.role
};
class e3 extends eQ.ReactStore {
  constructor(e, t, n) {
    const r = new e2.PopupTriggerMap();
    super(e4(e, r, t, n), e8(r), e5);
  }
  setOpen = (e, t) => {
    if (t.preventUnmountOnClose = () => {
      this.set("preventUnmountingOnClose", !0);
    }, e || null != t.trigger || null == this.state.activeTriggerId || (t.trigger = this.state.activeTriggerElement ?? void 0), this.context.onOpenChange?.(e, t), t.isCanceled) return;
    this.state.floatingRootContext.dispatchOpenChange(e, t);
    let n = {
      open: e
    };
    (0, eI.setPopupOpenState)(n, e, t.trigger), this.update(n);
  };
}
function e4(e, t, n, r = !1) {
  let o = {
    ...(0, e1.createInitialPopupStoreState)(),
    modal: !0,
    disablePointerDismissal: !1,
    viewportElement: null,
    descriptionElementId: void 0,
    titleElementId: void 0,
    openMethod: null,
    nested: !1,
    nestedOpenDialogCount: 0,
    nestedOpenDrawerCount: 0,
    role: "dialog",
    ...e
  };
  return o.floatingRootContext = (0, e1.createPopupFloatingRootContext)(t, n, r), o;
}
function e8(e) {
  return {
    popupRef: d.createRef(),
    backdropRef: d.createRef(),
    internalBackdropRef: d.createRef(),
    outsidePressEnabledRef: {
      current: !0
    },
    triggerElements: e,
    onOpenChange: void 0,
    onOpenChangeComplete: void 0
  };
}
function e6() {
  let e = 0,
    t = new Set();
  return {
    getSnapshot: () => e,
    set(n) {
      let r = Number.isFinite(n) ? n : 0;
      r !== e && (e = r, t.forEach(e => {
        e();
      }));
    },
    subscribe: e => (t.add(e), () => {
      t.delete(e);
    })
  };
}
function e9() {
  let e = N(),
    t = h(!1),
    n = e?.setDrawerOpen,
    r = e?.removeDrawer,
    o = t.useState("open"),
    i = t.useState("nestedOpenDialogCount"),
    a = t.useState("popupElement"),
    s = 0 === i;
  return (0, T.useIsoLayoutEffect)(() => {
    if (r) return () => {
      r(t);
    };
  }, [r, t]), (0, T.useIsoLayoutEffect)(() => {
    n?.(t, o);
  }, [o, n, t]), d.useEffect(() => {
    if (!o || !s || !V.platform.os.android) return;
    let e = (0, X.ownerWindow)(a).CloseWatcher;
    if (!e) return;
    let n = new e(),
      r = (0, F.addEventListener)(n, "close", function (e) {
        t.select("open") && t.setOpen(!1, (0, x.createChangeEventDetails)(S.REASONS.closeWatcher, e));
      });
    return () => {
      r(), n.destroy();
    };
  }, [t, s, o, a]), null;
}
var e7 = _module13489;
let te = ((o = {})[o.open = m.CommonPopupDataAttributes.open] = "open", o[o.closed = m.CommonPopupDataAttributes.closed] = "closed", o.disabled = "data-disabled", o.swipeDirection = "data-swipe-direction", o.swiping = "data-swiping", o),
  tt = {
    [te.open]: ""
  },
  tn = {
    [te.closed]: ""
  },
  tr = {
    [te.swiping]: ""
  },
  to = {
    [te.disabled]: ""
  },
  ti = {
    open: e => e ? tt : tn,
    swiping: e => e ? tr : null,
    swipeDirection: e => ({
      [te.swipeDirection]: e
    }),
    disabled: e => e ? to : null
  },
  ta = {
    up: "down",
    down: "up",
    left: "right",
    right: "left"
  },
  ts = d.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        style: o,
        disabled: i = !1,
        swipeDirection: a,
        ...s
      } = e,
      l = h(),
      {
        swipeDirection: u,
        frontmostHeight: c,
        swipeAreaActiveRef: p
      } = eT(),
      f = N(),
      [m, w] = d.useState(!1),
      y = d.useRef(null),
      E = d.useRef(null),
      C = d.useRef(!1),
      k = d.useRef({
        x: 0,
        y: 0
      }),
      R = d.useRef(null),
      M = d.useRef(!1),
      D = d.useRef(null),
      O = d.useRef(null),
      A = d.useRef(null),
      j = d.useRef(L.NOOP),
      H = (0, P.useBaseUiId)(e.id),
      F = (0, eI.useTriggerRegistration)(H, l),
      W = l.useState("open"),
      B = (0, I.useStableCallback)(() => {
        k.current.x = 0, k.current.y = 0;
      }),
      Y = a ?? ta[u],
      _ = ta[Y],
      V = !i && (!W || m),
      $ = (0, I.useStableCallback)(() => {
        j.current();
        let e = (0, z.ownerDocument)(y.current);
        function t(n) {
          (n?.type !== "click" || 0 === n.detail || (0, K.isVirtualClick)(n)) && (j.current = L.NOOP, e.removeEventListener("pointerdown", t, !0), e.removeEventListener("click", t, !0), l.context.outsidePressEnabledRef.current = !0);
        }
        j.current = t, e.addEventListener("pointerdown", t, !0), e.addEventListener("click", t, !0);
      });
    function X(e) {
      let t = "left" === _ || "right" === _ ? e.offsetWidth : e.offsetHeight;
      return t <= 0 ? null : t;
    }
    function U() {
      let e = l.context.popupRef.current;
      if (!e || !l.select("open") || !l.select("mounted")) return;
      null == R.current && (R.current = function (e) {
        let t = X(e);
        if (null == t) return null;
        let n = (0, e7.getElementTransform)(e),
          r = "left" === _ || "right" === _ ? n.x : n.y;
        return Number.isFinite(r) && Math.abs(r) > .5 ? Math.min(t, Math.abs(r)) : t;
      }(e));
      let t = R.current;
      if (null === t) return;
      let {
          x: n,
          y: r
        } = k.current,
        o = Math.max(0, (0, e7.getDisplacement)(Y, n, r)),
        i = o > t ? t + Math.sqrt(o - t) : o,
        a = (t - i) * ("left" === _ || "up" === _ ? -1 : 1),
        s = "left" === _ || "right" === _,
        u = Math.max(0, Math.min(1, o / t)),
        d = Math.max(0, Math.min(1, 1 - u));
      e.style.setProperty(v.swipeMovementX, `${s ? a : 0}px`), e.style.setProperty(v.swipeMovementY, `${s ? 0 : a}px`), e.setAttribute(eS.swiping, ""), D.current = e, null === A.current && (A.current = e.style.transition), e.style.transition = "none";
      let h = l.context.backdropRef.current;
      h && (h.setAttribute(eS.swiping, ""), O.current = h, h.style.setProperty(b.swipeProgress, `${d}`), u > 0 && c > 0 ? h.style.setProperty(v.height, `${c}px`) : h.style.removeProperty(v.height)), f?.visualStateStore.set({
        swipeProgress: u,
        frontmostHeight: u > 0 ? c : 0
      }), M.current = !0, p.current = !0;
    }
    let q = (0, I.useStableCallback)(() => {
      let e = D.current;
      e && (e.style.removeProperty(v.swipeMovementX), e.style.removeProperty(v.swipeMovementY), e.removeAttribute(eS.swiping)), e && null !== A.current && (e.style.transition = A.current, A.current = null);
      let t = O.current;
      t && (t.removeAttribute(eS.swiping), t.style.setProperty(b.swipeProgress, "0"), t.style.removeProperty(v.height)), f?.visualStateStore.set({
        swipeProgress: 0,
        frontmostHeight: 0
      }), M.current = !1, D.current = null, O.current = null, p.current = !1;
    });
    function G(e) {
      C.current = !0, l.setOpen(!0, (0, x.createChangeEventDetails)(S.REASONS.swipe, e, y.current));
    }
    function J() {
      E.current = null, C.current = !1, R.current = null, w(!1);
    }
    function Z() {
      J(), $(), B(), q();
    }
    let Q = (0, e7.useSwipeDismiss)({
        enabled: V,
        directions: [Y],
        elementRef: y,
        trackDrag: !1,
        movementCssVars: {
          x: v.swipeMovementX,
          y: v.swipeMovementY
        },
        onSwipeStart(e) {
          j.current(), l.context.outsidePressEnabledRef.current = !1, E.current = e, C.current = !1, w(!0), B();
        },
        onProgress(e, t) {
          if (!t || !E.current || (k.current.x = t.deltaX, k.current.y = t.deltaY, t.direction !== Y)) return;
          let n = (0, e7.getDisplacement)(Y, t.deltaX, t.deltaY);
          (C.current || !(n < 1)) && (C.current || l.select("open") || G(E.current), U());
        },
        onRelease({
          event: e,
          direction: t,
          deltaX: n,
          deltaY: r,
          releaseVelocityX: o,
          releaseVelocityY: a
        }) {
          let s,
            u,
            c = (0, e7.getDisplacement)(Y, n, r),
            d = (0, e7.getDisplacement)(Y, o, a),
            p = null == (u = (s = l.context.popupRef.current) ? X(s) : null) ? 40 : .5 * u;
          if (t === Y && (c >= p || d >= .1) && !i) l.select("open") || G(e);else C.current && l.select("open") && l.setOpen(!1, (0, x.createChangeEventDetails)(S.REASONS.swipe, e, y.current));
          return Z(), !1;
        },
        onCancel: Z
      }),
      ee = Q.getPointerProps(),
      et = Q.getTouchProps(),
      en = Q.reset;
    (0, T.useIsoLayoutEffect)(() => {
      m && M.current && U();
    }), (0, T.useIsoLayoutEffect)(() => {
      V || (m && $(), en(), B(), q(), J());
    }, [q, $, V, B, en, m]), d.useEffect(() => () => {
      j.current(), l.context.outsidePressEnabledRef.current = !0;
    }, [l]);
    let er = {
      open: W,
      swiping: Q.swiping,
      swipeDirection: Y,
      disabled: i
    };
    return (0, g.useRenderElement)("div", e, {
      state: er,
      ref: [t, y, F],
      stateAttributesMapping: ti,
      props: [{
        role: "presentation",
        "aria-hidden": !0,
        style: {
          pointerEvents: V ? void 0 : "none",
          touchAction: "left" === Y || "right" === Y ? "pan-y" : "pan-x"
        },
        onPointerDown(e) {
          "touch" !== e.pointerType && (ee.onPointerDown?.(e), e.cancelable && e.preventDefault());
        },
        onPointerMove(e) {
          "touch" !== e.pointerType && ee.onPointerMove?.(e);
        },
        onPointerUp(e) {
          "touch" !== e.pointerType && ee.onPointerUp?.(e);
        },
        onPointerCancel(e) {
          "touch" !== e.pointerType && ee.onPointerCancel?.(e);
        }
      }, et, H ? {
        id: H
      } : void 0, s]
    });
  }),
  tl = d.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        style: o,
        id: i,
        ...a
      } = e,
      s = h(),
      l = (0, P.useBaseUiId)(i);
    return s.useSyncedValueWithCleanup("titleElementId", l), (0, g.useRenderElement)("h2", e, {
      ref: t,
      props: [{
        id: l
      }, a]
    });
  });
var tu = _module64924;
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
let td = d.forwardRef(function (e, t) {
  let {
      render: n,
      className: r,
      style: o,
      disabled: i = !1,
      nativeButton: a = !0,
      id: s,
      payload: l,
      handle: u,
      ...c
    } = e,
    f = h(!0),
    v = (0, tu.usePopupHandleStore)(u) ?? f;
  if (!v) throw Error((0, p.default)(79));
  let b = (0, P.useBaseUiId)(s),
    w = v.useState("floatingRootContext"),
    x = v.useState("isOpenedByTrigger", b),
    S = v.useState("triggerPopupId", b),
    E = d.useRef(null),
    {
      registerTrigger: C,
      isMountedByThisTrigger: k
    } = (0, eI.useTriggerDataForwarding)(b, E, v, {
      payload: l
    }),
    {
      getButtonProps: R,
      buttonRef: T
    } = (0, y.useButton)({
      disabled: i,
      native: a
    }),
    M = tc(w),
    N = function (e, t) {
      var n;
      let r,
        o,
        {
          onClick: i,
          onPointerDown: a
        } = (n = (0, I.useStableCallback)((n, r) => {
          ("function" == typeof e ? e() : e) || t(r || (V.platform.os.ios ? "touch" : ""));
        }), r = d.useRef(""), o = d.useCallback(e => {
          e.defaultPrevented || (r.current = e.pointerType, n(e, e.pointerType));
        }, [n]), {
          onClick: d.useCallback(e => {
            0 === e.detail ? n(e, "keyboard") : ("pointerType" in e ? n(e, e.pointerType) : n(e, r.current), r.current = "");
          }, [n]),
          onPointerDown: o
        });
      return d.useMemo(() => ({
        onClick: i,
        onPointerDown: a
      }), [i, a]);
    }(() => v.select("open"), e => {
      v.set("openMethod", e);
    }),
    D = v.useState("triggerProps", k);
  return (0, g.useRenderElement)("button", e, {
    state: {
      disabled: i,
      open: x
    },
    ref: [T, t, C, E],
    props: [M.reference, D, N, {
      [eh.CLICK_TRIGGER_IDENTIFIER]: "",
      id: b,
      "aria-haspopup": "dialog",
      "aria-expanded": x,
      "aria-controls": S
    }, c, R],
    stateAttributesMapping: m.triggerOpenStateMapping
  });
});
var tp = _module42014,
  tf = _module99536;
let th = {
    ...m.popupStateMapping,
    ...tf.transitionStatusMapping,
    nestedDialogOpen: e => e ? {
      "data-nested-dialog-open": ""
    } : null
  },
  tg = d.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        style: o,
        children: i,
        ...a
      } = e,
      s = eC(),
      l = h(),
      u = l.useState("open"),
      c = l.useState("nested"),
      d = l.useState("transitionStatus"),
      p = l.useState("nestedOpenDialogCount"),
      f = l.useState("mounted"),
      m = l.useStateSetter("viewportElement");
    return (0, g.useRenderElement)("div", e, {
      enabled: s || f,
      state: {
        open: u,
        nested: c,
        transitionStatus: d,
        nestedDialogOpen: p > 0
      },
      ref: [t, m],
      stateAttributesMapping: th,
      props: [{
        role: "presentation",
        hidden: !f,
        style: {
          pointerEvents: u ? void 0 : "none"
        },
        children: i
      }, a]
    });
  });
var tm = _module29005,
  tv = _module26553,
  tb = _module70592;
let tw = d.createContext(void 0),
  ty = `[${C}]`,
  tx = d.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        style: o,
        children: i,
        ...a
      } = e,
      s = h(),
      l = s.context.popupRef,
      u = s.context.backdropRef,
      {
        swipeDirection: p,
        notifyParentSwipingChange: f,
        notifyParentSwipeProgressChange: g,
        frontmostHeight: m,
        snapToSequentialPoints: w,
        swipeAreaActiveRef: y
      } = eT(),
      E = N(),
      {
        snapPoints: C,
        resolvedSnapPoints: k,
        activeSnapPoint: P,
        activeSnapPointOffset: R,
        setActiveSnapPoint: M,
        popupHeight: D
      } = eA(),
      O = s.useState("open"),
      A = s.useState("mounted"),
      j = s.useState("nested"),
      L = s.useState("nestedOpenDrawerCount"),
      W = s.useState("viewportElement"),
      B = s.useState("popupElement"),
      Y = E?.visualStateStore,
      _ = L > 0,
      V = "left" === p || "right" === p ? "horizontal" : "vertical",
      U = "vertical" === V,
      G = U ? "horizontal" : "vertical",
      [K, J] = d.useState(null),
      Z = d.useRef(void 0),
      Q = d.useRef(null),
      ee = (0, $.useAnimationFrame)(),
      et = d.useRef(!1),
      en = d.useRef(!1),
      er = d.useRef(""),
      eo = d.useRef(!1),
      ei = d.useRef(!1),
      ea = d.useRef(null),
      es = d.useContext(tw),
      el = d.useMemo(() => {
        if (!C || C.length < 2 || k.length < 2 || "down" !== p && "up" !== p) return null;
        let e = k.map(e => e.offset).sort((e, t) => e - t),
          t = e[0];
        return {
          minOffset: t,
          range: e[1] - t
        };
      }, [k, C, p]),
      eu = d.useMemo(() => el && null !== R ? (0, eM.clamp)((R - el.minOffset) / el.range, 0, 1) : null, [R, el]),
      ec = d.useMemo(() => C && C.length > 0 && ("down" === p || "up" === p) ? "down" === p ? ["down", "up"] : ["up", "down"] : [p], [C, p]),
      ed = (0, I.useStableCallback)(e => {
        l.current?.toggleAttribute(eS.swipeDismiss, e), u.current?.toggleAttribute(eS.swipeDismiss, e);
      }),
      ep = (0, I.useStableCallback)(() => {
        ed(!1), l.current?.removeAttribute(tf.TransitionStatusDataAttributes.endingStyle), J(null);
      }),
      ef = (0, I.useStableCallback)(() => {
        en.current && (en.current = !1, f?.(!1));
      }),
      eh = (0, I.useStableCallback)((e, t, n) => {
        let r = O && !j && t,
          o = r ? e : 0,
          i = O && t ? e : 0;
        n && g && (g(i), i <= 0 && ef()), Y?.set({
          swipeProgress: o,
          frontmostHeight: o > 0 ? m : 0
        });
        let a = u.current;
        if (!a) return;
        let s = r && o > 0;
        a.style.setProperty(b.swipeProgress, s ? `${o}` : "0"), s && m > 0 ? a.style.setProperty(v.height, `${m}px`) : a.style.removeProperty(v.height);
      }),
      eg = (0, e7.useSwipeDismiss)({
        enabled: A && !_,
        directions: ec,
        elementRef: s.context.popupRef,
        ignoreSelectorWhenTouch: !1,
        ignoreScrollableAncestors: !0,
        movementCssVars: {
          x: v.swipeMovementX,
          y: v.swipeMovementY
        },
        onSwipeStart(e) {
          if ("touches" in e || "touch" === e.pointerType) return;
          let t = l.current,
            n = (0, z.ownerDocument)(t),
            r = n.getSelection?.();
          if (!r || r.isCollapsed) return;
          let o = (0, H.isElement)(r.anchorNode) ? r.anchorNode : r.anchorNode?.parentElement,
            i = (0, H.isElement)(r.focusNode) ? r.focusNode : r.focusNode?.parentElement;
          ((0, q.contains)(t, o) || (0, q.contains)(t, i)) && r.removeAllRanges();
        },
        onSwipingChange(e) {
          et.current = e, tS(s.context.backdropRef.current, e), e || g || ef();
        },
        swipeThreshold: ({
          element: e,
          direction: t
        }) => tk(e, t),
        canStart(e, t) {
          let n = s.context.popupRef.current;
          if (!n) return !1;
          let r = n.ownerDocument,
            o = (0, tb.getElementAtPoint)(n.getRootNode(), e.x, e.y);
          if (!o || !(0, q.contains)(n, o)) return !1;
          let i = t.nativeEvent;
          return !(("touches" in i || "touch" === i.pointerType) && tP(r, n));
        },
        onProgress(e, t) {
          !function (e) {
            if (en.current || !e) return;
            let t = e.direction ?? p;
            10 > Math.abs((0, e7.getDisplacement)(t, e.deltaX, e.deltaY)) || (en.current = !0, f?.(!0));
          }(t);
          let n = !!(C && C.length > 0);
          if (et.current && "down" === p && n && t) {
            let e = s.context.popupRef.current;
            e && (e.style.removeProperty("transform"), e.style.setProperty(v.swipeMovementY, `${eN(R ?? 0, t.deltaY)}px`));
          }
          let r = e;
          if (el && D > 0) {
            let e = R ?? el.minOffset;
            if (t && Number.isFinite(t.deltaY)) {
              let n;
              n = (0, eM.clamp)(e + t.deltaY, 0, D), r = (0, eM.clamp)((n - el.minOffset) / el.range, 0, 1);
            } else null !== eu && (r = eu);
          }
          eh(r, !0, !0);
        },
        onRelease({
          event: e,
          deltaX: t,
          deltaY: n,
          direction: r,
          velocityX: o,
          velocityY: i,
          releaseVelocityX: a,
          releaseVelocityY: l
        }) {
          let u = s.context.popupRef.current;
          if (!u) return void ep();
          function c(e) {
            ef(), ed(!0), u.style.removeProperty("transition"), u.setAttribute(tf.TransitionStatusDataAttributes.endingStyle, ""), tp.flushSync(() => {
              J(function (e, t, n, r, o, i, a, s) {
                let l = tC(e, t);
                if (l <= 0) return null;
                let u = Math.max(0, l - ((("down" === t || "up" === t) && C && C.length > 0 ? R ?? 0 : 0) + (0, e7.getDisplacement)(t, n, r)));
                if (u <= 0) return null;
                let c = (0, e7.getDisplacement)(t, a, s),
                  d = Math.abs(c) > 0 ? c : (0, e7.getDisplacement)(t, o, i);
                if (d <= .2) return null;
                let p = (0, eM.clamp)(d, .2, 4);
                return .1 + ((0, eM.clamp)(u / p, 80, 360) - 80) / 280 * .9;
              }(u, e, t, n, o, i, a, l));
            });
          }
          if (!C || 0 === C.length) {
            if (!r) return void ep();
            let e = (0, e7.getDisplacement)(r, t, n);
            if (e <= 0) return ep(), !1;
            if ((0, e7.getDisplacement)(r, o, i) >= .5) return c(r), !0;
            let a = e > tk(u, r);
            return a ? c(r) : ep(), a;
          }
          if ("down" !== p && "up" !== p) return void ep();
          if (!D) return ep(), !1;
          if (0 === k.length) return void ep();
          let d = "down" === p ? n : -n,
            f = Math.sign(d),
            h = "down" === p ? l : -l,
            g = "down" === p ? i : -i,
            m = h;
          if (0 !== f && Math.abs(d) >= 10) {
            let e = Math.sign(m);
            0 !== e && e !== f && (m = g);
          }
          let v = R ?? 0,
            b = (0, eM.clamp)(v + d, 0, D),
            y = Math.abs(m) >= .5 ? 300 * (0, eM.clamp)(m, -4, 4) : 0,
            E = w ? b : (0, eM.clamp)(b + y, 0, D),
            T = (0, x.createChangeEventDetails)(S.REASONS.swipe, e),
            N = () => (Z.current = P, M(null, T), c(p), !0);
          if (w) {
            let e = [...k].sort((e, t) => e.offset - t.offset),
              t = e.map(e => e.offset),
              n = eO(t, v),
              r = e[eO(t, E)],
              o = Math.sign(m),
              i = E;
            if (0 !== f && 0 !== o && o === f && Math.abs(m) >= .5) {
              let t = (0, eM.clamp)(n + f, 0, e.length - 1);
              if (t !== n) {
                let n = e[t];
                (f > 0 ? E < n.offset : E > n.offset) && (r = n, i = n.offset);
              } else if (f > 0) return N();
            }
            return Math.abs(i - D) < Math.abs(i - r.offset) ? N() : (M(r.value, T), ep(), !1);
          }
          if (m >= .5 && d > 0) return N();
          let O = k[eO(k.map(e => e.offset), E)];
          return Math.abs(E - D) < Math.abs(E - O.offset) ? N() : (M(O.value, T), ep(), !1);
        },
        onDismiss(e) {
          Y?.set({
            swipeProgress: 0,
            frontmostHeight: 0
          });
          let t = s.context.backdropRef.current;
          t && (t.style.setProperty(b.swipeProgress, "0"), t.style.removeProperty(v.height));
          let n = (0, x.createChangeEventDetails)(S.REASONS.swipe, e);
          if (s.setOpen(!1, n), n.isCanceled) {
            let t = Z.current;
            void 0 !== t && M(t, (0, x.createChangeEventDetails)(S.REASONS.swipe, e)), Z.current = void 0, Q.current?.(), ep();
            return;
          }
          s.select("open") ? ee.request(() => {
            if (s.select("open")) {
              let t = Z.current;
              void 0 !== t && M(t, (0, x.createChangeEventDetails)(S.REASONS.swipe, e)), Z.current = void 0, ep(), Q.current?.();
            } else Z.current = void 0;
          }) : (Z.current = void 0, ed(!0));
        }
      }),
      em = eg.getPointerProps(),
      ev = eg.getTouchProps(),
      {
        moveNative: eb,
        reset: ew
      } = eg;
    Q.current = ew, d.useEffect(() => {
      let e = W ?? B;
      if (!e) return;
      let t = (0, z.ownerDocument)(e);
      return (0, F.addEventListener)(t, "touchmove", function (n) {
        var r, o;
        if (es?.onTouchMove(n), ei.current) return;
        let i = ea.current,
          a = n.touches[0];
        a && i && (!function (n, r, o) {
          let i = U ? o.clientY - r.lastY : o.clientX - r.lastX;
          if (2 === n.touches.length || tP(t, e) || !O || !A || _ || function (e, t, n, r) {
            if (e.preserveNativeCrossAxisScroll) return !0;
            if (e.drawerAxisAttributed || !0 === e.allowSwipe || !e.hasCrossAxisScrollableContent) return !1;
            if (!t.cancelable) return e.preserveNativeCrossAxisScroll = !0, !0;
            let o = r ? n.clientY - e.startY : n.clientX - e.startX,
              i = r ? n.clientX - e.startX : n.clientY - e.startY,
              a = Math.abs(o),
              s = Math.abs(i);
            return s >= 6 && s > a + 2 ? (e.preserveNativeCrossAxisScroll = !0, !0) : !(a >= 6) || (e.drawerAxisAttributed = !0, !1);
          }(r, n, o, U)) return;
          let a = r.scrollTarget;
          if (!a || a === t.documentElement || a === t.body) {
            n.cancelable && n.preventDefault(), n.stopPropagation(), eb(n, e);
            return;
          }
          if (!(tR(a, V).max > 0)) {
            n.cancelable && n.preventDefault(), n.stopPropagation();
            return;
          }
          if (0 !== i) {
            var s, l, u, c;
            let e = (s = a, l = V, u = p, c = i, !!(tM(u, l) ? c > 0 : c < 0) && tT(s, l, u));
            r.allowSwipe ? n.cancelable && n.preventDefault() : n.cancelable && e ? (r.allowSwipe = !0, n.preventDefault()) : r.allowSwipe = !1;
          }
          !0 === r.allowSwipe && (n.stopPropagation(), eb(n, e));
        }(n, i, a), (r = i).lastX = (o = a).clientX, r.lastY = o.clientY);
      }, {
        passive: !1,
        capture: !0
      });
    }, [A, _, O, B, U, V, p, eb, W, es]), (0, T.useIsoLayoutEffect)(() => {
      el && !eg.swiping && eh(!O || j ? 0 : eu ?? 0, !0, !1);
    }, [eh, m, j, g, O, eu, el, eg.swiping, s, Y]), (0, T.useIsoLayoutEffect)(() => {
      if (g) return O || g(0), () => {
        g(0);
      };
    }, [g, O]), (0, T.useIsoLayoutEffect)(() => {
      O && (y.current || ew(), ep());
    }, [ep, O, ew, y]), (0, T.useIsoLayoutEffect)(() => {
      let e = u.current;
      return () => {
        Y?.set({
          swipeProgress: 0,
          frontmostHeight: 0
        }), tS(e, !1);
        let t = u.current;
        t !== e && tS(t, !1), ef();
      };
    }, [u, ef, Y]);
    let ey = d.useMemo(() => ({
      swiping: eg.swiping,
      getDragStyles: eg.getDragStyles,
      swipeStrength: K ?? null,
      setSwipeDismissed: ed
    }), [ed, eg.getDragStyles, eg.swiping, K]);
    function ex(e) {
      ei.current = e, ea.current = null;
    }
    function eE() {
      ex(!1), er.current = "", eo.current = !1;
    }
    function eC(e) {
      return er.current = "", "touch" !== e.pointerType;
    }
    return (0, c.jsx)(tg, {
      ref: t,
      className: r,
      style: o,
      render: n,
      ...(0, tm.mergeProps)(a, {
        onPointerDown(e) {
          var t;
          if (er.current = e.pointerType, eo.current = "pen" === e.pointerType, !O || !A || _) return;
          let n = (0, tb.getElementAtPoint)(e.currentTarget.getRootNode(), e.clientX, e.clientY);
          tE(n) || (t = n, t?.closest(ty)) || "touch" !== e.pointerType && em.onPointerDown?.(e);
        },
        onPointerMove(e) {
          "touch" !== e.pointerType && em.onPointerMove?.(e);
        },
        onPointerUp(e) {
          eC(e) && em.onPointerUp?.(e);
        },
        onPointerCancel(e) {
          eC(e) && em.onPointerCancel?.(e);
        },
        onTouchStart(e) {
          var t, n, r;
          if ("pen" === er.current && eo.current) {
            eo.current = !1, ex(!1);
            return;
          }
          if (!O || !A || _) return void ex(!1);
          let o = e.touches[0];
          if (!o) return;
          if (n = (t = e).nativeEvent, r = (0, X.ownerWindow)(t.currentTarget), n.composedPath().some(e => e instanceof r.HTMLInputElement && "range" === e.type)) return void ex(!1);
          let i = e.currentTarget,
            a = (0, tb.getElementAtPoint)(i.getRootNode(), o.clientX, o.clientY),
            s = (0, q.getTarget)(e.nativeEvent),
            l = (0, H.isElement)(s) ? s : i;
          if (!(0, q.contains)(i, l) || (es?.onTouchStart(e), tE(a))) return void ex(!0);
          ei.current = !1;
          let u = (0, tv.findScrollableTouchTarget)(l, i, V),
            c = null != (0, tv.findScrollableTouchTarget)(l, i, G),
            d = null;
          u && (d = !!tT(u, V, p) && null), ea.current = {
            startX: o.clientX,
            startY: o.clientY,
            lastX: o.clientX,
            lastY: o.clientY,
            scrollTarget: u,
            hasCrossAxisScrollableContent: c,
            allowSwipe: d,
            preserveNativeCrossAxisScroll: !1,
            drawerAxisAttributed: !1
          }, ev.onTouchStart?.(e);
        },
        onTouchEnd(e) {
          es?.onTouchEnd(e), eE(), ev.onTouchEnd?.(e);
        },
        onTouchCancel(e) {
          es?.onTouchCancel(), eE(), ev.onTouchCancel?.(e);
        },
        "data-nested-dialog-open": void 0
      }),
      children: (0, c.jsx)(ej.Provider, {
        value: ey,
        children: i
      })
    });
  });
function tS(e, t) {
  e?.toggleAttribute(eS.swiping, t);
}
function tE(e) {
  return !!e?.closest(eh.BASE_UI_SWIPE_IGNORE_SELECTOR);
}
function tC(e, t) {
  return "left" === t || "right" === t ? e.offsetWidth : e.offsetHeight;
}
function tk(e, t) {
  return Math.max(.5 * tC(e, t), 10);
}
function tP(e, t) {
  let n,
    r,
    o = (0, q.activeElement)(e);
  if (o && (0, q.contains)(t, o) && ("INPUT" === o.tagName || "TEXTAREA" === o.tagName)) {
    let {
      selectionStart: e,
      selectionEnd: t
    } = o;
    if (null != e && null != t && e < t) return !0;
  }
  let i = e.getSelection?.();
  return !!i && !i.isCollapsed && (n = (0, H.isElement)(i.anchorNode) ? i.anchorNode : i.anchorNode?.parentElement, r = (0, H.isElement)(i.focusNode) ? i.focusNode : i.focusNode?.parentElement, i.containsNode(t, !0) || (0, q.contains)(t, n) || (0, q.contains)(t, r));
}
function tR(e, t) {
  if ("vertical" === t) {
    let t = Math.max(0, e.scrollHeight - e.clientHeight);
    return {
      offset: e.scrollTop,
      max: t
    };
  }
  let n = Math.max(0, e.scrollWidth - e.clientWidth);
  return {
    offset: e.scrollLeft,
    max: n
  };
}
function tT(e, t, n) {
  let r = tM(n, t),
    {
      offset: o,
      max: i
    } = tR(e, t);
  return r ? o <= 0 : o >= i;
}
function tM(e, t) {
  return "vertical" === t ? "down" === e : "right" === e;
}
let tN = ((i = {}).keyboardInset = "--drawer-keyboard-inset", i),
  tD = new Set(["email", "number", "password", "search", "tel", "text", "url"]),
  tO = Symbol("KeyboardTapBlocked");
function tA(e) {
  if (e.isContentEditable) return !0;
  let t = (0, X.ownerWindow)(e);
  return !!(e instanceof t.HTMLTextAreaElement || e instanceof t.HTMLInputElement && tD.has(e.type)) && !e.matches(":disabled");
}
function tj(e) {
  if (!(0, H.isHTMLElement)(e)) return null;
  if (tA(e)) return e.isContentEditable ? function (e) {
    let t = e;
    for (; t.parentElement?.isContentEditable;) t = t.parentElement;
    return t;
  }(e) : e;
  let t = e.closest("label"),
    n = t?.control ?? null;
  return (0, H.isHTMLElement)(n) && tA(n) ? n : null;
}
function tI(e, t) {
  let n = e.style.opacity,
    r = e.style.transform,
    o = e.style.transition;
  return e.style.transition = "none", e.style.opacity = "0", e.style.transform = `translateY(${t}px)`, () => {
    e.style.opacity = n, e.style.transform = r, e.style.transition = o;
  };
}
function tL(e) {
  let t = e.visualViewport;
  if (!t || 1 !== t.scale || e.innerHeight - t.height <= 60) return null;
  let n = Math.max(0, t.offsetTop);
  return {
    top: n,
    bottom: Math.min(e.innerHeight, n + t.height)
  };
}
var tH = _module43620;
class tF extends tH.BasePopupHandle {
  constructor() {
    super(function () {
      let e = new e2.PopupTriggerMap();
      return new e0.NullStore(Object.freeze(e4(void 0, e)), Object.freeze(e8(e)), e5);
    }(), "Dialog", !1);
  }
  open(e) {
    this.openByTrigger(e);
  }
  openWithPayload(e) {
    let t = this.attachedStore;
    null === t || (t.set("payload", e), t.setOpen(!0, (0, x.createChangeEventDetails)(S.REASONS.imperativeAction)));
  }
  close() {
    this.closePopup();
  }
  get isOpen() {
    return this.attachedStore?.select("open") ?? !1;
  }
}
class tW extends tF {}
const _export_Backdrop = w;
const _export_Close = E;
const _export_Content = k;
const _export_Description = R;
const _export_Handle = tW;
const _export_Indent = O;
const _export_IndentBackground = j;
const _export_Popup = eF;
const _export_Portal = eY;
const _export_Provider = function (e) {
  let {
      children: t
    } = e,
    [n, r] = d.useState(() => new Set()),
    [o] = d.useState(e_),
    i = (0, I.useStableCallback)((e, t) => {
      r(n => {
        if (n.has(e) === t) return n;
        let r = new Set(n);
        return t ? r.add(e) : r.delete(e), r;
      });
    }),
    a = (0, I.useStableCallback)(e => {
      i(e, !1);
    }),
    s = n.size > 0,
    l = d.useMemo(() => ({
      setDrawerOpen: i,
      removeDrawer: a,
      active: s,
      visualStateStore: o
    }), [s, a, i, o]);
  return (0, c.jsx)(M.Provider, {
    value: l,
    children: t
  });
};
const _export_Root = function (e) {
  let {
      children: t,
      open: n,
      defaultOpen: r = !1,
      onOpenChange: o,
      onOpenChangeComplete: i,
      disablePointerDismissal: a = !1,
      modal: s = !0,
      actionsRef: p,
      handle: g,
      triggerId: m,
      defaultTriggerId: v = null,
      swipeDirection: b = "down",
      snapToSequentialPoints: w = !1,
      snapPoints: y,
      snapPoint: E,
      defaultSnapPoint: C,
      onSnapPointChange: k
    } = e,
    P = eT(!0),
    R = P?.onNestedSwipeProgressChange,
    T = P?.onNestedFrontmostHeightChange,
    M = P?.onNestedSwipingChange,
    N = P?.onNestedDrawerPresenceChange,
    [D, O] = d.useState(0),
    [A, j] = d.useState(0),
    [L, H] = d.useState(!1),
    [F, W] = d.useState(!1),
    [B] = d.useState(e6),
    Y = void 0 !== C ? C : y?.[0] ?? null,
    _ = void 0 !== E,
    [V, $] = (0, eV.useControlled)({
      controlled: E,
      default: Y,
      name: "Drawer",
      state: "snapPoint"
    }),
    z = d.useRef(!1),
    X = d.useRef(!1),
    U = (0, I.useStableCallback)((e, t) => {
      let n = t ?? (0, x.createChangeEventDetails)(S.REASONS.none);
      k?.(e, n), n.isCanceled || $(e);
    }),
    q = d.useMemo(() => _ || !y || 0 === y.length || null !== V && y.some(e => Object.is(e, V)) ? V : Y, [V, _, Y, y]),
    G = (0, I.useStableCallback)(e => {
      O(e), !z.current && e > 0 && j(e);
    }),
    K = (0, I.useStableCallback)(e => {
      if (e > 0) {
        z.current = !0, j(e);
        return;
      }
      z.current = !1, D > 0 && j(D);
    }),
    J = (0, I.useStableCallback)(e => {
      H(e);
    }),
    Z = (0, I.useStableCallback)(e => {
      B.set(e), R?.(e);
    }),
    Q = (0, I.useStableCallback)(e => {
      W(e), M?.(e);
    }),
    ee = (0, I.useStableCallback)((e, t) => {
      o?.(e, t), !t.isCanceled && !e && y && y.length > 0 && U(Y, (0, x.createChangeEventDetails)(t.reason, t.event, t.trigger));
    }),
    et = d.useMemo(() => ({
      swipeDirection: b,
      swipeAreaActiveRef: X,
      snapToSequentialPoints: w,
      snapPoints: y,
      activeSnapPoint: q,
      setActiveSnapPoint: U,
      frontmostHeight: A,
      popupHeight: D,
      hasNestedDrawer: L,
      nestedSwiping: F,
      nestedSwipeProgressStore: B,
      onNestedDrawerPresenceChange: J,
      onPopupHeightChange: G,
      onNestedFrontmostHeightChange: K,
      onNestedSwipingChange: Q,
      onNestedSwipeProgressChange: Z,
      notifyParentFrontmostHeight: T,
      notifyParentSwipingChange: M,
      notifyParentSwipeProgressChange: R,
      notifyParentHasNestedDrawer: N
    }), [q, A, L, F, B, N, R, M, T, J, K, Z, Q, G, D, U, y, w, X, b]),
    en = function (e, t) {
      let {
          children: n,
          open: r,
          defaultOpen: o = !1,
          onOpenChange: i,
          onOpenChangeComplete: a,
          disablePointerDismissal: s = !1,
          modal: l = !0,
          actionsRef: u,
          handle: p,
          triggerId: g,
          defaultTriggerId: m = null
        } = t,
        v = "alert-dialog" === e,
        b = h(!0),
        w = {
          modal: !!v || l,
          disablePointerDismissal: v || s,
          nested: null != b,
          role: v ? "alertdialog" : "dialog"
        },
        y = (0, eI.usePopupRootStore)((e, t) => new e3({
          open: o,
          openProp: r,
          activeTriggerId: m,
          triggerIdProp: g,
          ...w
        }, e, t), !0);
      y.useControlledProp("openProp", r), y.useControlledProp("triggerIdProp", g), y.useSyncedValues(w), y.useContextCallback("onOpenChange", i), y.useContextCallback("onOpenChangeComplete", a);
      let E = y.useState("open"),
        C = y.useState("mounted"),
        k = y.useState("payload");
      (0, eI.usePopupRootSync)(y, E), (0, eI.useImplicitActiveTrigger)(y);
      let {
        forceUnmount: P
      } = (0, eI.useOpenStateTransitions)(E, y);
      d.useImperativeHandle(u, () => ({
        unmount: P,
        close: () => y.setOpen(!1, (0, x.createChangeEventDetails)(S.REASONS.imperativeAction))
      }), [P, y]);
      let R = E || C;
      return (0, c.jsxs)(f.Provider, {
        value: y,
        children: [p && (0, c.jsx)(eI.PopupHandleAttachment, {
          handle: p,
          store: y
        }), R && (0, c.jsx)(eZ, {
          store: y,
          parentContext: b?.context,
          isDrawer: "drawer" === e
        }), "function" == typeof n ? n({
          payload: k
        }) : n]
      });
    }("drawer", {
      open: n,
      defaultOpen: r,
      onOpenChange: ee,
      onOpenChangeComplete: i,
      disablePointerDismissal: a,
      modal: s,
      actionsRef: p,
      handle: g,
      triggerId: m,
      defaultTriggerId: v,
      children: "function" == typeof t ? e => (0, c.jsxs)(d.Fragment, {
        children: [l || (l = (0, c.jsx)(e9, {})), t(e)]
      }) : (0, c.jsxs)(d.Fragment, {
        children: [u || (u = (0, c.jsx)(e9, {})), t]
      })
    });
  return (0, c.jsx)(eR.Provider, {
    value: et,
    children: en
  });
};
const _export_SwipeArea = ts;
const _export_Title = tl;
const _export_Trigger = td;
const _export_Viewport = tx;
const _export_VirtualKeyboardProvider = function (e) {
  let {
      children: t
    } = e,
    n = h(),
    r = n.useState("open"),
    o = n.useState("mounted"),
    i = n.useState("modal"),
    a = n.useState("nestedOpenDialogCount"),
    s = n.useState("viewportElement"),
    l = a > 0,
    u = d.useRef(!1),
    p = d.useRef(null),
    f = d.useRef(null),
    g = d.useRef(null),
    m = d.useRef(!1),
    v = (0, $.useAnimationFrame)(),
    b = (0, _.useTimeout)(),
    w = (0, I.useStableCallback)(() => {
      let e = g.current;
      e && (e.element.style.overflowAnchor = e.overflowAnchor, e.element.style.paddingBottom = e.paddingBottom, e.element.style.scrollPaddingBottom = e.scrollPaddingBottom, g.current = null);
    }),
    y = (0, I.useStableCallback)((e, t) => {
      let n = Math.max(0, Math.ceil(t)),
        r = g.current;
      if (r && !r.element.isConnected && (w(), r = null), 0 === n) return void w();
      if (r && r.element !== e && (w(), r = null), !r) {
        let t = (0, H.getComputedStyle)(e);
        g.current = r = {
          element: e,
          overflowAnchor: e.style.overflowAnchor,
          paddingBottom: e.style.paddingBottom,
          scrollPaddingBottom: e.style.scrollPaddingBottom,
          computedPaddingBottom: Number.parseFloat(t.paddingBottom) || 0,
          computedScrollPaddingBottom: Number.parseFloat(t.scrollPaddingBottom) || 0
        };
      }
      e.style.overflowAnchor = "none", e.style.paddingBottom = `${r.computedPaddingBottom + n}px`, e.style.scrollPaddingBottom = `${r.computedScrollPaddingBottom + 16}px`;
    }),
    x = (0, I.useStableCallback)((e, t) => {
      let n = (0, X.ownerWindow)(e),
        r = n.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ? "auto" : "smooth";
      e.scrollTo({
        top: t,
        behavior: r
      });
    }),
    S = (0, I.useStableCallback)(() => {
      u.current = !1, p.current = null;
    });
  d.useEffect(() => {
    if (!o || !r) {
      f.current = null, w(), v.cancel();
      return;
    }
    if (!s) return void w();
    let e = (0, z.ownerDocument)(s),
      t = (0, X.ownerWindow)(s),
      n = t.visualViewport,
      a = null,
      u = 0,
      c = 0,
      d = -1,
      p = e => {
        s.style.setProperty(tN.keyboardInset, `${Math.max(0, Math.ceil(e))}px`);
      },
      h = () => {
        f.current = null, a = null, p(0), w(), v.cancel(), b.clear();
      },
      g = t.scrollX,
      S = t.scrollY,
      E = () => !0 === i && !l && !!f.current && null != tL(t) && (t.scrollX !== g || t.scrollY !== S) && (t.scrollTo({
        left: g,
        top: S,
        behavior: "instant"
      }), !0),
      C = null,
      k = () => {
        C?.(), C = null;
      },
      P = () => {
        var e, n;
        let r;
        k();
        let o = f.current;
        if (l || !o || !(0, q.contains)(s, o)) {
          p(0), w();
          return;
        }
        E();
        let i = tL(t);
        if (!i) {
          p(0), w();
          return;
        }
        p(Math.max(0, t.innerHeight - i.bottom));
        let h = (e = o, n = s, r = (0, H.getParentNode)(e), (0, tv.findScrollableTouchTarget)(r, n, "vertical") ?? (0, tv.findScrollableTouchTarget)(r, n, "vertical", !0));
        if (!h) return void w();
        let g = h.getBoundingClientRect(),
          m = Math.min(g.bottom, i.bottom),
          b = Math.max(0, g.bottom - i.bottom);
        y(h, b > 0 ? b + 48 : 0);
        let S = Math.max(0, h.scrollHeight - h.clientHeight);
        if (S <= 0) return;
        let C = Math.max(g.top, i.top) + 16,
          R = m - 16;
        if (R <= C) return;
        let T = o.getBoundingClientRect(),
          M = h.scrollTop + (T.top + T.bottom - C - R) / 2,
          N = Math.round((0, eM.clamp)(M, 0, S));
        if (a === h && 1 >= Math.abs(u - N)) {
          if (d >= 0) {
            let e = h.scrollTop;
            if (1 >= Math.abs(e - N)) return;
            if (e !== d) {
              d = e;
              return;
            }
          }
        } else {
          let e = a === h ? c + 1 : 1;
          if (a = h, u = N, c = e, d = -1, e <= 60) return void v.request(P);
        }
        a = h, u = N, c = 0, d = h.scrollTop, x(h, N);
      },
      R = () => {
        v.request(P);
      },
      T = e => {
        if (l) return !1;
        let t = tj(e);
        return !!t && !!(0, q.contains)(s, t) && (f.current !== t && (a = null), f.current = t, !0);
      },
      M = () => {
        (f.current || T((0, q.activeElement)(e))) && R();
      },
      N = [];
    return n && N.push((0, F.addEventListener)(n, "resize", M), (0, F.addEventListener)(n, "scroll", M)), N.push((0, F.addEventListener)(e, "focusin", e => {
      let n, r;
      (m.current = !1, k(), T((0, q.getTarget)(e))) ? (null != tL(t) && (n = 4, r = () => {
        P(), (n -= 1) > 0 && b.start(150, r);
      }, b.start(150, r)), R()) : h();
    }, !0), (0, F.addEventListener)(e, "focusout", e => {
      if (!m.current) {
        if (T(e.relatedTarget)) {
          let e,
            n = f.current,
            r = tL(t);
          n && r && (k(), e = n.getBoundingClientRect(), C = tI(n, (r.top + r.bottom - e.top - e.bottom) / 2)), R();
          return;
        }
        h();
      }
    }, !0), (0, F.addEventListener)(t, "scroll", () => {
      E() && R();
    }), (0, F.addEventListener)(e, "pointerdown", () => {
      v.cancel(), b.clear(), a = null;
    }, !0)), T((0, q.activeElement)(e)) && R(), () => {
      N.forEach(e => e()), k(), h(), s.style.removeProperty(tN.keyboardInset);
    };
  }, [x, v, b, i, o, l, r, w, s, y]);
  let E = (0, I.useStableCallback)(e => {
      let t = e.touches[0];
      u.current = !1, p.current = {
        x: t.clientX,
        y: t.clientY
      };
    }),
    C = (0, I.useStableCallback)(e => {
      let t = e.touches[0],
        n = p.current;
      t && n && !u.current && (Math.abs(t.clientX - n.x) > 10 || Math.abs(t.clientY - n.y) > 10) && (u.current = !0);
    }),
    k = (0, I.useStableCallback)(e => {
      if (!r || !o || l || !s || !p.current || u.current) return void S();
      let t = e.changedTouches[0] ?? e.touches[0],
        n = s.getRootNode(),
        i = (0, q.getTarget)(e.nativeEvent),
        a = t ? function (e, t, n) {
          let r = (0, tb.getElementAtPoint)(e, t, n);
          if ((0, H.isHTMLElement)(r)) {
            let e = tj(r);
            if (e) return {
              focusTarget: e,
              clickTarget: r
            };
          }
          if ((0, G.isInteractiveElement)(r) || r?.closest("label") != null) return tO;
          for (let [r, o] of [[0, 16], [0, -16], [16, 0], [-16, 0]]) {
            let i = tj((0, tb.getElementAtPoint)(e, t + r, n + o));
            if (i) return {
              focusTarget: i,
              clickTarget: i
            };
          }
          return null;
        }(n, t.clientX, t.clientY) : null;
      if (a === tO) return void S();
      let c = t && (a ?? function (e) {
        if (!(0, H.isHTMLElement)(e)) return null;
        let t = tj(e);
        return t ? {
          focusTarget: t,
          clickTarget: e
        } : null;
      }(i));
      if (c && (!(0, q.contains)(s, c.focusTarget) || !(0, q.contains)(s, c.clickTarget))) return void S();
      if (c) {
        let n,
          r,
          {
            clickTarget: o,
            focusTarget: i
          } = c,
          a = (0, X.ownerWindow)(i);
        if (a.visualViewport && 1 !== a.visualViewport.scale || (0, q.activeElement)((0, z.ownerDocument)(i)) === i && (!a.visualViewport || null != tL(a))) return void S();
        e.preventDefault(), m.current = !0;
        try {
          var d,
            f,
            h = i;
          let e = (0, q.activeElement)((0, z.ownerDocument)(h)) === h,
            t = tI(h, -2e3);
          try {
            e && h.blur(), h.focus({
              preventScroll: !0
            });
          } finally {
            t();
          }
        } finally {
          m.current = !1;
        }
        return d = o, f = t, r = (n = (0, X.ownerWindow)(d)).PointerEvent ?? n.MouseEvent, d.dispatchEvent(new r("click", {
          bubbles: !0,
          cancelable: !0,
          clientX: f.clientX,
          clientY: f.clientY,
          detail: 1,
          view: n
        })), void S();
      }
      S();
    }),
    P = d.useMemo(() => ({
      onTouchStart: E,
      onTouchMove: C,
      onTouchEnd: k,
      onTouchCancel: S
    }), [k, C, E, S]);
  return (0, c.jsx)(tw.Provider, {
    value: P,
    children: t
  });
};
const _export_createHandle = function () {
  return new tW();
};
export { _export_Backdrop as Backdrop, _export_Close as Close, _export_Content as Content, _export_Description as Description, _export_Handle as Handle, _export_Indent as Indent, _export_IndentBackground as IndentBackground, _export_Popup as Popup, _export_Portal as Portal, _export_Provider as Provider, _export_Root as Root, _export_SwipeArea as SwipeArea, _export_Title as Title, _export_Trigger as Trigger, _export_Viewport as Viewport, _export_VirtualKeyboardProvider as VirtualKeyboardProvider, _export_createHandle as createHandle };

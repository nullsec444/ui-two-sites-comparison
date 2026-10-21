// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module45032 from "./45032.js";
import * as _module10242 from "./10242.js";
import * as _module26997 from "./26997.js";
import * as _module79995 from "./79995.js";
import * as _module71955 from "./71955.js";
import * as _module94805 from "./94805.js";
import * as _module38783 from "./38783.js";
import * as _module25339 from "./25339.js";
import * as _module58542 from "./58542.js";
import * as _module80269 from "./80269.js";
import * as _module94195 from "./94195.js";
import * as _module84094 from "./84094.js";
var t = _module45032,
  n = _module10242,
  r = _module26997,
  i = _module79995,
  o = _module71955,
  l = _module94805,
  s = _module38783,
  u = _module25339,
  a = _module58542,
  c = _module80269,
  f = _module94195;
function g(e) {
  return p(e, e.rootContext);
}
function p(e, n) {
  let {
      nodeId: r,
      externalTree: i
    } = e,
    l = n.useState("referenceElement"),
    s = n.useState("floatingElement"),
    u = n.useState("domReferenceElement"),
    d = n.useState("open"),
    g = n.useState("floatingId"),
    [p, m] = t.useState(null),
    [h, v] = t.useState(void 0),
    [y, E] = t.useState(void 0),
    b = t.useRef(null),
    S = (0, f.useFloatingTree)(i),
    x = t.useMemo(() => ({
      reference: l,
      floating: s,
      domReference: u
    }), [l, s, u]),
    T = (0, a.useFloating)({
      ...e,
      elements: {
        ...x,
        ...(p && {
          reference: p
        })
      }
    }),
    w = (0, c.isElement)(h) ? h : null,
    C = void 0 === y ? n.state.floatingElement : y;
  n.useSyncedValue("referenceElement", h ?? null), n.useSyncedValue("domReferenceElement", void 0 === h ? u : w), n.useSyncedValue("floatingElement", C);
  let R = t.useCallback(e => {
      let t = (0, c.isElement)(e) ? {
        getBoundingClientRect: () => e.getBoundingClientRect(),
        getClientRects: () => e.getClientRects(),
        contextElement: e
      } : e;
      m(t), T.refs.setReference(t);
    }, [T.refs]),
    O = t.useCallback(e => {
      ((0, c.isElement)(e) || null === e) && (b.current = e, v(e)), ((0, c.isElement)(T.refs.reference.current) || null === T.refs.reference.current || null !== e && !(0, c.isElement)(e)) && T.refs.setReference(e);
    }, [T.refs, v]),
    P = t.useCallback(e => {
      E(e), T.refs.setFloating(e);
    }, [T.refs]),
    A = t.useMemo(() => ({
      ...T.refs,
      setReference: O,
      setFloating: P,
      setPositionReference: R,
      domReference: b
    }), [T.refs, O, P, R]),
    I = t.useMemo(() => ({
      ...T.elements,
      domReference: u
    }), [T.elements, u]),
    M = t.useMemo(() => ({
      ...T,
      dataRef: n.context.dataRef,
      open: d,
      onOpenChange: n.setOpen,
      events: n.context.events,
      floatingId: g,
      refs: A,
      elements: I,
      nodeId: r,
      rootStore: n
    }), [T, A, I, r, n, d, g]);
  return (0, o.useIsoLayoutEffect)(() => {
    u && (b.current = u);
  }, [u]), (0, o.useIsoLayoutEffect)(() => {
    n.context.dataRef.current.floatingContext = M;
    let e = S?.nodesRef.current.find(e => e.id === r);
    e && (e.context = M);
  }), t.useMemo(() => ({
    ...T,
    context: M,
    refs: A,
    elements: I,
    rootStore: n
  }), [T, A, I, M, n]);
}
var m = _module84094;
let h = {
    name: "hide",
    async fn(e) {
      let {
          width: t,
          height: n,
          x: r,
          y: i
        } = e.rects.reference,
        o = await e.platform.detectOverflow(e, {
          elementContext: "reference"
        });
      return {
        data: {
          referenceHidden: o.top - n >= 0 || o.right - t >= 0 || o.bottom - n >= 0 || o.left - t >= 0 || 0 === t && 0 === n && 0 === r && 0 === i
        }
      };
    }
  },
  v = {
    sideX: "left",
    sideY: "top"
  };
let y = "--available-width",
  E = "--available-height";
function b(e, t, n) {
  let r = "inline-start" === e || "inline-end" === e;
  return {
    top: "top",
    right: r ? n ? "inline-start" : "inline-end" : "right",
    bottom: "bottom",
    left: r ? n ? "inline-end" : "inline-start" : "left"
  }[t];
}
function S(e, t, r) {
  let {
    rects: i,
    placement: o
  } = e;
  return {
    side: b(t, (0, n.getSide)(o), r),
    align: (0, n.getAlignment)(o) || "center",
    anchor: {
      width: i.reference.width,
      height: i.reference.height
    },
    positioner: {
      width: i.floating.width,
      height: i.floating.height
    }
  };
}
function x(e, c) {
  var f, d;
  let {
      anchor: g,
      positionMethod: p = "absolute",
      side: x = "bottom",
      sideOffset: w = 0,
      align: C = "center",
      alignOffset: R = 0,
      collisionBoundary: O,
      collisionPadding: P = 5,
      sticky: A = !1,
      arrowPadding: I = 5,
      disableAnchorTracking: M = !1,
      inline: L,
      keepMounted: k = !1,
      floatingRootContext: D,
      mounted: N,
      collisionAvoidance: F,
      shift: H,
      nodeId: W,
      adaptiveOrigin: V,
      lazyFlip: B = !1,
      externalTree: _
    } = e,
    [j, Y] = t.useState(null);
  N || null === j || Y(null);
  let U = F.side || "flip",
    $ = F.align || "flip",
    z = F.fallbackAxisSide || "end",
    X = H?.crossAxis ?? !1,
    q = H?.rootBoundary,
    K = "function" == typeof g ? g : void 0,
    G = (0, s.useStableCallback)(K),
    J = K ? G : g,
    Q = (0, l.useValueAsRef)(g),
    Z = (0, l.useValueAsRef)(N),
    ee = "rtl" === (0, m.useDirection)(),
    et = j || {
      top: "top",
      right: "right",
      bottom: "bottom",
      left: "left",
      "inline-end": ee ? "left" : "right",
      "inline-start": ee ? "right" : "left"
    }[x],
    en = "center" === C ? et : `${et}-${C}`,
    er = P;
  "number" == typeof er ? er = {
    top: er,
    right: er,
    bottom: er,
    left: er
  } : er && (er = {
    top: er.top || 0,
    right: er.right || 0,
    bottom: er.bottom || 0,
    left: er.left || 0
  });
  let ei = +("bottom" === x),
    eo = +("top" === x),
    el = +("right" === x),
    es = +("left" === x),
    eu = {
      boundary: "clipping-ancestors" === O ? "clippingAncestors" : O,
      padding: er
    },
    ea = t.useRef(null),
    ec = (0, l.useValueAsRef)(w),
    ef = (0, l.useValueAsRef)(R),
    ed = "function" != typeof w ? w : 0,
    eg = "function" != typeof R ? R : 0,
    ep = [];
  L && ep.push(L), ep.push((0, a.offset)(e => {
    let t = S(e, x, ee),
      n = "function" == typeof ec.current ? ec.current(t) : ec.current,
      r = "function" == typeof ef.current ? ef.current(t) : ef.current;
    return {
      mainAxis: n,
      crossAxis: r,
      alignmentAxis: r
    };
  }, [ed, eg, ee, x]));
  let em = "none" === $ && "shift" !== U,
    eh = !em && (A || X || "shift" === U),
    ev = "none" === U ? null : (0, a.flip)({
      ...eu,
      padding: {
        top: er.top + 1 + ei,
        right: er.right + 1 + es,
        bottom: er.bottom + 1 + eo,
        left: er.left + 1 + el
      },
      mainAxis: !X && "flip" === U,
      crossAxis: "flip" === $ && "alignment",
      fallbackAxisSideDirection: z
    }),
    ey = em ? null : (0, a.shift)({
      ...eu,
      rootBoundary: q,
      mainAxis: "none" !== $,
      crossAxis: eh,
      limiter: A || X ? void 0 : (0, a.limitShift)(e => {
        if (!ea.current) return {};
        let {
            width: t,
            height: r
          } = ea.current.getBoundingClientRect(),
          i = (0, n.getSideAxis)((0, n.getSide)(e.placement)),
          o = "y" === i ? er.left + er.right : er.top + er.bottom;
        return {
          offset: ("y" === i ? t : r) / 2 + o / 2
        };
      })
    }, [eu, A, X, q, er, $]);
  "shift" === U || "shift" === $ || "center" === C ? ep.push(ey, ev) : ep.push(ev, ey), ep.push((0, a.size)({
    ...eu,
    apply({
      elements: {
        floating: e
      },
      availableWidth: t,
      availableHeight: n,
      rects: r
    }) {
      if (!Z.current) return;
      let o = e.style;
      o.setProperty(y, `${t}px`), o.setProperty(E, `${n}px`);
      let l = (0, i.ownerWindow)(e).devicePixelRatio || 1,
        {
          x: s,
          y: u,
          width: a,
          height: c
        } = r.reference,
        f = (Math.round((s + a) * l) - Math.round(s * l)) / l,
        d = (Math.round((u + c) * l) - Math.round(u * l)) / l;
      o.setProperty("--anchor-width", `${f}px`), o.setProperty("--anchor-height", `${d}px`);
    }
  }), (f = e => ({
    element: ea.current || (0, r.ownerDocument)(e.elements.floating).createElement("div"),
    padding: I,
    offsetParent: "floating"
  }), d = [I], {
    name: "arrow",
    options: f,
    async fn(e) {
      let {
          x: t,
          y: r,
          placement: i,
          rects: o,
          platform: l,
          elements: s,
          middlewareData: u
        } = e,
        {
          element: a,
          padding: c = 0,
          offsetParent: d = "real"
        } = (0, n.evaluate)(f, e) || {};
      if (null == a) return {};
      let g = (0, n.getPaddingObject)(c),
        p = {
          x: t,
          y: r
        },
        m = (0, n.getAlignmentAxis)(i),
        h = (0, n.getAxisLength)(m),
        v = await l.getDimensions(a),
        y = "y" === m,
        E = y ? "clientHeight" : "clientWidth",
        b = o.reference[h] + o.reference[m] - p[m] - o.floating[h],
        S = p[m] - o.reference[m],
        x = "real" === d ? await l.getOffsetParent?.(a) : s.floating,
        T = s.floating[E] || o.floating[h];
      T && (await l.isElement?.(x)) || (T = s.floating[E] || o.floating[h]);
      let w = T / 2 - v[h] / 2 - 1,
        C = Math.min(g[y ? "top" : "left"], w),
        R = Math.min(g[y ? "bottom" : "right"], w),
        O = T - v[h] - R,
        P = T / 2 - v[h] / 2 + (b / 2 - S / 2),
        A = (0, n.clamp)(C, P, O),
        I = !u.arrow && null != (0, n.getAlignment)(i) && P !== A && o.reference[h] / 2 - (P < C ? C : R) - v[h] / 2 < 0,
        M = I ? P < C ? P - C : P - O : 0;
      return {
        [m]: p[m] + M,
        data: {
          [m]: A,
          centerOffset: P - A - M,
          ...(I && {
            alignmentOffset: M
          })
        },
        reset: I
      };
    },
    options: [f, d]
  }), {
    name: "transformOrigin",
    fn(e) {
      let {
          elements: t,
          middlewareData: r,
          placement: i,
          rects: o,
          y: l
        } = e,
        s = (0, n.getSide)(i),
        u = (0, n.getSideAxis)(s),
        a = ea.current,
        c = r.arrow?.x || 0,
        f = r.arrow?.y || 0,
        d = a?.clientWidth || 0,
        g = a?.clientHeight || 0,
        p = c + d / 2,
        m = f + g / 2,
        h = Math.abs(r.shift?.y || 0),
        v = o.reference.height / 2,
        y = "function" == typeof w ? w(S(e, x, ee)) : w,
        E = h > y,
        b = {
          top: `${p}px calc(100% + ${y}px)`,
          bottom: `${p}px ${-y}px`,
          left: `calc(100% + ${y}px) ${m}px`,
          right: `${-y}px ${m}px`
        }[s],
        T = `${p}px ${o.reference.y + v - l}px`;
      return t.floating.style.setProperty("--transform-origin", eh && "y" === u && E ? T : b), {};
    }
  }, h, V), (0, o.useIsoLayoutEffect)(() => {
    !N && D && D.update({
      referenceElement: null,
      floatingElement: null,
      domReferenceElement: null,
      positionReference: null
    });
  }, [N, D]);
  let eE = t.useMemo(() => ({
      elementResize: !M && "u" > typeof ResizeObserver,
      layoutShift: !M && "u" > typeof IntersectionObserver
    }), [M]),
    {
      refs: eb,
      elements: eS,
      x: ex,
      y: eT,
      middlewareData: ew,
      update: eC,
      placement: eR,
      context: eO,
      isPositioned: eP,
      floatingStyles: eA
    } = c({
      rootContext: D,
      open: k ? N : void 0,
      placement: en,
      middleware: ep,
      strategy: p,
      whileElementsMounted: k ? void 0 : (...e) => (0, u.autoUpdate)(...e, eE),
      nodeId: W,
      externalTree: _
    }),
    {
      sideX: eI,
      sideY: eM
    } = ew.adaptiveOrigin || v,
    eL = eP ? p : "fixed",
    ek = t.useMemo(() => {
      let e;
      return (e = eP ? V ? {
        position: eL,
        [eI]: ex,
        [eM]: eT
      } : {
        ...eA,
        position: eL
      } : {
        position: eL,
        top: 0,
        left: 0
      })[y] = "100vw", e[E] = "100vh", eP || (e.opacity = 0), e;
    }, [V, eL, eI, ex, eM, eT, eA, eP]),
    eD = t.useRef(null);
  (0, o.useIsoLayoutEffect)(() => {
    if (!N) return;
    let e = Q.current,
      t = "function" == typeof e ? e() : e,
      n = (T(t) ? t.current : t) || null;
    n !== eD.current && (eb.setPositionReference(n), eD.current = n);
  }, [N, eb, J, Q]), t.useEffect(() => {
    if (!N) return;
    let e = Q.current;
    "function" != typeof e && T(e) && e.current !== eD.current && (eb.setPositionReference(e.current), eD.current = e.current);
  }, [N, eb, J, Q]), t.useEffect(() => {
    if (k && N && eS.reference && eS.floating) return (0, u.autoUpdate)(eS.reference, eS.floating, eC, eE);
  }, [k, N, eS, eC, eE]);
  let eN = (0, n.getSide)(eR),
    eF = b(x, eN, ee),
    eH = (0, n.getAlignment)(eR) || "center",
    eW = !!ew.hide?.referenceHidden;
  (0, o.useIsoLayoutEffect)(() => {
    B && N && eP && eN !== et && Y(eN);
  }, [B, N, eP, eN, et]);
  let eV = t.useMemo(() => ({
      position: "absolute",
      top: ew.arrow?.y,
      left: ew.arrow?.x
    }), [ew.arrow]),
    eB = ew.arrow?.centerOffset !== 0;
  return t.useMemo(() => ({
    positionerStyles: ek,
    arrowStyles: eV,
    arrowRef: ea,
    arrowUncentered: eB,
    side: eF,
    align: eH,
    physicalSide: eN,
    anchorHidden: eW,
    refs: eb,
    context: eO,
    isPositioned: eP,
    update: eC
  }), [ek, eV, ea, eB, eF, eH, eN, eW, eb, eO, eP, eC]);
}
function T(e) {
  return null != e && "current" in e;
}
const _export_useAnchorPositioning = function (e) {
  return x(e, g);
};
const _export_useAnchorPositioningWithHook = x;
export { _export_useAnchorPositioning as useAnchorPositioning, _export_useAnchorPositioningWithHook as useAnchorPositioningWithHook };

// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module45032 from "./45032.js";
import * as _module38783 from "./38783.js";
import * as _module26997 from "./26997.js";
import * as _module79995 from "./79995.js";
import * as _module86631 from "./86631.js";
import * as _module80269 from "./80269.js";
import * as _module38501 from "./38501.js";
var t = _module45032,
  n = _module38783,
  r = _module26997,
  i = _module79995,
  o = _module86631,
  l = _module80269;
function s(e, t, n = !1) {
  return "vertical" === t ? function (e, t = !1) {
    let {
      overflowY: n
    } = (0, l.getComputedStyle)(e);
    return ("auto" === n || "scroll" === n) && (t ? e.clientHeight > 0 : e.scrollHeight > e.clientHeight);
  }(e, n) : function (e, t = !1) {
    let {
      overflowX: n
    } = (0, l.getComputedStyle)(e);
    return ("auto" === n || "scroll" === n) && (t ? e.clientWidth > 0 : e.scrollWidth > e.clientWidth);
  }(e, n);
}
function u(e, t, n) {
  let r = e;
  for (; (0, l.isHTMLElement)(r) && r !== t && !(0, l.isLastTraversableNode)(r);) {
    for (let e of n) if (s(r, e)) return !0;
    r = (0, l.getParentNode)(r);
  }
  return !1;
}
function a(e, t, n = "vertical", r = !1) {
  let i = (0, l.isHTMLElement)(e) ? e : null;
  for (; (0, l.isHTMLElement)(i) && i !== t && !(0, l.isLastTraversableNode)(i);) {
    if (s(i, n, r)) return i;
    i = (0, l.getParentNode)(i);
  }
  return s(t, n, r) ? t : null;
}
var c = _module38501;
function f(e, t, n) {
  return "function" == typeof e?.elementFromPoint ? e.elementFromPoint(t, n) : null;
}
function d(e, t, n) {
  switch (e) {
    case "up":
      return -n;
    case "down":
      return n;
    case "left":
      return -t;
    case "right":
      return t;
    default:
      return 0;
  }
}
function g(e) {
  let t = (0, i.ownerWindow)(e).getComputedStyle(e).transform,
    n = 0,
    r = 0,
    o = 1;
  if (t && "none" !== t) {
    let e = t.match(/matrix(?:3d)?\(([^)]+)\)/);
    if (e) {
      let t = e[1].split(", ").map(parseFloat);
      6 === t.length ? (n = t[4], r = t[5], o = Math.sqrt(t[0] * t[0] + t[1] * t[1])) : 16 === t.length && (n = t[12], r = t[13], o = t[0]);
    }
  }
  return {
    x: n,
    y: r,
    scale: o
  };
}
function p(e) {
  return Number.isFinite(e) && e > 0 ? e : null;
}
function m(e, t) {
  return `translate3d(${e.x}px,${e.y}px,0) scale(${t})`;
}
function h(e, t, n) {
  let r = e[n];
  if ("function" == typeof r) try {
    r.call(e, t);
  } catch (e) {
    if (e && "object" == typeof e && "name" in e && "NotFoundError" === e.name) return;
    throw e;
  }
}
const _export_getDisplacement = d;
const _export_getElementTransform = g;
const _export_useSwipeDismiss = function (e) {
  let {
      enabled: i,
      directions: l,
      elementRef: s,
      movementCssVars: v,
      canStart: y,
      ignoreSelectorWhenTouch: E = !0,
      ignoreScrollableAncestors: b = !1,
      swipeThreshold: S,
      onDismiss: x,
      onProgress: T,
      onCancel: w,
      onSwipeStart: C,
      onRelease: R,
      onSwipingChange: O,
      trackDrag: P = !0
    } = e,
    A = 1 === l.length ? l[0] : void 0,
    I = Math.max(0, "number" == typeof S ? S : 40),
    M = l.includes("left"),
    L = l.includes("right"),
    k = l.includes("up"),
    D = l.includes("down"),
    N = M || L,
    F = k || D,
    H = t.useMemo(() => {
      let e = [];
      return F && e.push("vertical"), N && e.push("horizontal"), e;
    }, [N, F]),
    [W, V] = t.useState(void 0),
    [B, _] = t.useState(!1),
    [j, Y] = t.useState(!1),
    U = t.useRef({
      x: 0,
      y: 0
    }),
    $ = t.useRef({
      x: 0,
      y: 0
    }),
    z = t.useRef(null),
    X = t.useRef({
      x: 0,
      y: 0,
      scale: 1
    }),
    q = t.useRef(void 0),
    K = t.useRef(0),
    G = t.useRef(!1),
    J = t.useRef({
      x: 0,
      y: 0
    }),
    Q = t.useRef(null),
    Z = t.useRef(!1),
    ee = t.useRef(!1),
    et = t.useRef(null),
    en = t.useRef(!1),
    er = t.useRef(!1),
    ei = t.useRef({
      width: 0,
      height: 0
    }),
    eo = t.useRef(0),
    el = t.useRef(I),
    es = t.useRef(null),
    eu = t.useRef(null),
    ea = t.useRef(null),
    ec = t.useRef({
      x: 0,
      y: 0
    }),
    ef = t.useRef(null),
    ed = t.useRef(!1),
    eg = t.useRef(null),
    ep = (0, n.useStableCallback)(e => {
      ed.current !== e && (ed.current = e, _(e), O?.(e));
    });
  function em(e) {
    if (!e) return;
    let t = s.current,
      n = es.current;
    t && n && (el.current = Math.max(0, n({
      element: t,
      direction: e
    })));
  }
  let eh = (0, n.useStableCallback)((e, t) => {
      let n = Number.isFinite(e) ? (0, c.clamp)(e, 0, 1) : 0,
        r = n !== eo.current,
        i = !1;
      if (t) {
        let e = ef.current;
        i = !e || e.deltaX !== t.deltaX || e.deltaY !== t.deltaY || e.direction !== t.direction;
      }
      (r || i) && (eo.current = n, t ? ef.current = t : r && (ef.current = null), T?.(n, t));
    }),
    ev = (0, n.useStableCallback)(e => {
      let t = s.current;
      if (!P || !t) {
        e || (eg.current = null);
        return;
      }
      let n = t.style,
        r = eg.current;
      e ? (r || (eg.current = [n.transition, n.transform]), n.transition = "none") : r && ([n.transition, n.transform] = r, eg.current = null);
      let i = $.current,
        o = X.current,
        l = i.x - o.x,
        u = i.y - o.y;
      e && (n.transform = m(i, o.scale)), n.setProperty(v.x, `${l}px`), n.setProperty(v.y, `${u}px`);
    });
  function ey(e, t) {
    if (null === t) return;
    let n = ea.current;
    if (n && t > n.time) {
      let r = Math.max(t - n.time, 16);
      ec.current = {
        x: (e.x - n.x) / r,
        y: (e.y - n.y) / r
      };
    }
    ea.current = {
      x: e.x,
      y: e.y,
      time: t
    };
  }
  let eE = t.useCallback(() => {
    V(void 0), ep(!1), Y(!1), eh(0), el.current = I, es.current = null, U.current = {
      x: 0,
      y: 0
    }, $.current = {
      x: 0,
      y: 0
    }, X.current = {
      x: 0,
      y: 0,
      scale: 1
    }, q.current = void 0, K.current = 0, G.current = !1, J.current = {
      x: 0,
      y: 0
    }, Q.current = null, Z.current = !1, z.current = null, ee.current = !1, et.current = null, en.current = !1, er.current = !1, ei.current = {
      width: 0,
      height: 0
    }, eu.current = null, ea.current = null, ec.current = {
      x: 0,
      y: 0
    }, ef.current = null, ev(!1);
  }, [ep, I, ev, eh]);
  function eb(e) {
    if ("touches" in e) {
      let t = e.touches[0];
      return t ? {
        x: t.clientX,
        y: t.clientY
      } : null;
    }
    return {
      x: e.clientX,
      y: e.clientY
    };
  }
  function eS(e) {
    return "touches" in e || "touch" === e.pointerType;
  }
  function ex(e, t) {
    return f(s.current?.getRootNode(), e.x, e.y) ?? (0, o.getTarget)(t);
  }
  function eT(e, t) {
    return N && !F ? a(e, t, "horizontal") : F && !N ? a(e, t, "vertical") : a(e, t, "vertical") ?? a(e, t, "horizontal");
  }
  function ew(e, t, n) {
    en.current = !1;
    let i = eS(e),
      o = ex(t, e.nativeEvent),
      l = (0, r.ownerDocument)(s.current).body,
      a = i && l ? eT(o, l) : null,
      c = n?.ignoreScrollableTarget ?? !1;
    if (a && !c || (en.current = !!(a && c), o && o.closest('button,a,input,select,textarea,label,[role="button"]') && (!i || E))) return !1;
    let f = s.current;
    if (b && f && o && H.length > 0 && !n?.ignoreScrollableAncestors && u(o, f, H)) return !1;
    if (G.current = !1, q.current = void 0, K.current = 0, U.current = t, eu.current = p(e.timeStamp), J.current = t, z.current = t, el.current = I, es.current = "function" == typeof S ? S : null, f) {
      ei.current = {
        width: f.offsetWidth,
        height: f.offsetHeight
      }, em(A);
      let t = g(f);
      X.current = t, $.current = {
        x: t.x,
        y: t.y
      }, ey({
        x: t.x,
        y: t.y
      }, eu.current), "touches" in e || h(f, e.pointerId, "setPointerCapture");
    }
    return C?.(e.nativeEvent), ep(!0), Q.current = null, Z.current = !0, eh(0), ev(!0), !0;
  }
  function eC() {
    eR(), en.current = !1, z.current = null;
  }
  function eR() {
    ee.current = !1, et.current = null;
  }
  let eO = (0, n.useStableCallback)(e => {
      if (!i || e.defaultPrevented || e.nativeEvent.defaultPrevented || !("touches" in e) && 0 !== e.button) return;
      let t = eb(e);
      !t || (ee.current = !0, et.current = t, en.current = !1, er.current = !("touches" in e), (!y || y(t, {
        nativeEvent: e.nativeEvent,
        direction: A
      })) && ew(e, t) && eR());
    }),
    eP = (0, n.useStableCallback)(e => {
      let t;
      if (!i) return;
      let n = $.current,
        r = X.current,
        o = n.x - r.x,
        u = n.y - r.y,
        a = {
          deltaX: o,
          deltaY: u,
          direction: q.current
        };
      if (!ed.current) {
        eC(), eh(0, a);
        return;
      }
      ep(!1), Q.current = null, eC(), er.current = !1;
      let c = s.current;
      !c || "touches" in e || h(c, e.pointerId, "releasePointerCapture");
      let f = eu.current,
        g = p(e.timeStamp),
        m = null !== f && null !== g && g > f ? g - f : 0,
        v = m > 0 ? Math.max(m, 50) : 0,
        y = v > 0 ? o / v : 0,
        E = v > 0 ? u / v : 0,
        b = ec.current.x,
        S = ec.current.y,
        T = ea.current;
      if (T && null !== g && g >= T.time) {
        let e = g - T.time;
        if (e <= 80) {
          let t = Math.max(e, 16),
            r = n.x - T.x,
            i = n.y - T.y,
            o = r / t,
            l = i / t;
          0 !== o && (b = o), 0 !== l && (S = l);
        } else b = 0, S = 0;
      }
      let w = R?.({
          event: e.nativeEvent,
          direction: q.current,
          deltaX: o,
          deltaY: u,
          velocityX: y,
          velocityY: E,
          releaseVelocityX: b,
          releaseVelocityY: S
        }),
        C = "boolean" == typeof w;
      if (G.current && !C) {
        $.current = {
          x: r.x,
          y: r.y
        }, V(void 0), ev(!1), eh(0, a);
        return;
      }
      let O = !1;
      if (C) O = w, t = q.current ?? A;else for (let e of l) if (d(e, o, u) > el.current) {
        O = !0, t = e;
        break;
      }
      O && t ? (V(t), Y(!0), ev(!1), x?.(e.nativeEvent, {
        direction: t
      })) : ($.current = {
        x: r.x,
        y: r.y
      }, V(void 0), ev(!1), eh(0, a));
    }),
    eA = (0, n.useStableCallback)(e => {
      let t = eb(e);
      if (!t) return;
      let n = !1;
      if (!("touches" in e)) {
        let t = e.buttons % 2 == 1;
        if (t && (er.current = !0), 0 !== e.buttons && !t) return void function (e) {
          if (eC(), !ed.current) return;
          ep(!1), Q.current = null;
          let t = X.current;
          $.current = {
            x: t.x,
            y: t.y
          }, V(void 0), er.current = !1, ev(!1);
          let n = s.current;
          n && h(n, e.pointerId, "releasePointerCapture"), eh(0, {
            deltaX: 0,
            deltaY: 0,
            direction: void 0
          }), w?.(e.nativeEvent);
        }(e);
        if (0 === e.buttons && er.current) {
          if (!ed.current) return void eP(e);
          n = !0;
        }
      }
      if (!B && ee.current) {
        if (!eS(e) && (e.defaultPrevented || e.nativeEvent.defaultPrevented)) return void eC();
        if (!y || y(t, {
          nativeEvent: e.nativeEvent,
          direction: A
        })) {
          let n = et.current,
            i = !1;
          if (eS(e)) {
            let l = s.current;
            if (n && l) {
              let s = ex(t, e.nativeEvent),
                u = (0, r.ownerDocument)(l).body,
                a = u ? eT(s, u) : null;
              if (a && ((0, o.contains)(l, a) || (0, o.contains)(a, l))) {
                let e,
                  r,
                  o,
                  l = t.x - n.x,
                  s = t.y - n.y,
                  u = (e = (e, t, n, r, i) => e > 0 && t <= 0 && r || e < 0 && t >= Math.max(0, n) && i, r = Math.abs(l), o = Math.abs(s), F && 0 !== s && (!N || o >= r) ? e(s, a.scrollTop, a.scrollHeight - a.clientHeight, D, k) : N && 0 !== l && (!F || r > o) ? e(l, a.scrollLeft, a.scrollWidth - a.clientWidth, L, M) : null);
                if (!1 === u) return;
                !0 === u && (i = !0);
              }
            }
          }
          ew(e, t, {
            ignoreScrollableTarget: i,
            ignoreScrollableAncestors: i
          }) && (n && i ? (eR(), U.current = n, J.current = n, z.current = n, Z.current = !1) : (eR(), en.current = !1));
        }
      }
      let l = z.current,
        u = null === l ? {
          x: 0,
          y: 0
        } : {
          x: t.x - l.x,
          y: t.y - l.y
        };
      z.current = t, function (e, t, n) {
        let r, l, s;
        if (!i || !ed.current) return;
        let u = (0, o.getTarget)(e.nativeEvent);
        if (eS(e) && !en.current && eT(u, e.currentTarget)) return;
        if ("touches" in e || e.preventDefault(), Z.current && (Z.current = !1, P)) {
          U.current = t;
          let n = p(e.timeStamp);
          null !== n && (eu.current = n);
        }
        let a = t.x,
          c = t.y,
          f = n.x,
          g = n.y;
        (g < 0 && c > J.current.y || g > 0 && c < J.current.y) && (J.current = {
          x: J.current.x,
          y: c
        }), (f < 0 && a > J.current.x || f > 0 && a < J.current.x) && (J.current = {
          x: a,
          y: J.current.y
        });
        let m = a - U.current.x,
          h = c - U.current.y,
          v = c - J.current.y,
          y = a - J.current.x,
          E = Q.current;
        if (null === E && N && F && Math.sqrt(m * m + h * h) >= 1 && (Q.current = E = Math.abs(m) > Math.abs(h) ? "horizontal" : "vertical"), q.current) {
          let e = q.current,
            t = d(e, y, v);
          t > el.current ? (G.current = !1, V(e)) : M && L || k && D || !(K.current - t >= 10) || (G.current = !0);
        } else "vertical" === E ? h > 0 ? r = "down" : h < 0 && (r = "up") : "horizontal" === E ? m > 0 ? r = "right" : m < 0 && (r = "left") : r = Math.abs(m) >= Math.abs(h) ? m > 0 ? "right" : "left" : h > 0 ? "down" : "up", r && ("left" === r && M || "right" === r && L || "up" === r && k || "down" === r && D) && (q.current = r, K.current = d(r, m, h), V(r), em(r));
        let b = (l = e => Math.sign(e) * Math.abs(e) ** .5, s = (e, t, n) => !t && e < 0 || !n && e > 0 ? l(e) : e, {
            x: N ? s(m, M, L) : l(m),
            y: F ? s(h, k, D) : l(h)
          }),
          S = X.current.x,
          x = X.current.y;
        "horizontal" === E ? N && (S += b.x) : ("vertical" === E || N && (S += b.x), F && (x += b.y));
        let T = $.current,
          w = S !== T.x || x !== T.y;
        $.current = {
          x: S,
          y: x
        }, w && ev(!0), ey({
          x: S,
          y: x
        }, p(e.timeStamp));
        let C = S - X.current.x,
          R = x - X.current.y,
          O = {
            deltaX: C,
            deltaY: R,
            direction: q.current
          },
          I = 0,
          H = A ?? q.current;
        if (H) {
          let e = "left" === H || "right" === H ? ei.current.width : ei.current.height,
            t = X.current.scale || 1,
            n = d(H, C, R);
          e > 0 && t > 0 && n > 0 && (I = n / (e * t));
        }
        eh(I, O);
      }(e, t, u), !n || "touches" in e || eP(e);
    }),
    eI = (0, n.useStableCallback)((e, t) => {
      eA({
        touches: e.touches,
        currentTarget: t,
        nativeEvent: e,
        defaultPrevented: e.defaultPrevented,
        timeStamp: e.timeStamp
      });
    }),
    eM = t.useCallback(() => {
      let e = ed.current,
        t = $.current,
        n = X.current,
        r = t.x - n.x,
        i = t.y - n.y;
      return e || 0 !== r || 0 !== i || j ? {
        transition: e ? "none" : void 0,
        transform: e ? m(t, n.scale) : void 0,
        [v.x]: `${r}px`,
        [v.y]: `${i}px`
      } : {
        [v.x]: "0px",
        [v.y]: "0px"
      };
    }, [j, v]);
  return {
    swiping: B,
    swipeDirection: W,
    dragDismissed: j,
    getPointerProps: t.useCallback(() => i ? {
      onPointerDown: eO,
      onPointerMove: eA,
      onPointerUp: eP,
      onPointerCancel: eP
    } : {}, [i, eP, eA, eO]),
    getTouchProps: t.useCallback(() => i ? {
      onTouchStart: eO,
      onTouchMove: eA,
      onTouchEnd: eP,
      onTouchCancel: eP
    } : {}, [i, eP, eA, eO]),
    moveNative: eI,
    getDragStyles: eM,
    reset: eE
  };
};
export { _export_getDisplacement as getDisplacement, _export_getElementTransform as getElementTransform, _export_useSwipeDismiss as useSwipeDismiss };

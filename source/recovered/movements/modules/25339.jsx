// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module80269 from "./80269.js";
let t = ["top", "right", "bottom", "left"],
  n = t.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []),
  r = Math.min,
  i = Math.max,
  o = Math.round,
  l = Math.floor,
  s = e => ({
    x: e,
    y: e
  }),
  u = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
function a(e, t, n) {
  return i(e, r(t, n));
}
function c(e, t) {
  return "function" == typeof e ? e(t) : e;
}
function f(e) {
  return e.split("-")[0];
}
function d(e) {
  return e.split("-")[1];
}
function g(e) {
  return "x" === e ? "y" : "x";
}
function p(e) {
  return "y" === e ? "height" : "width";
}
function m(e) {
  let t = e[0];
  return "t" === t || "b" === t ? "y" : "x";
}
function h(e) {
  return g(m(e));
}
function v(e, t, n) {
  void 0 === n && (n = !1);
  let r = d(e),
    i = h(e),
    o = p(i),
    l = "x" === i ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (l = C(l)), [l, C(l)];
}
function y(e) {
  let t = C(e);
  return [E(e), t, E(t)];
}
function E(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
let b = ["left", "right"],
  S = ["right", "left"],
  x = ["top", "bottom"],
  T = ["bottom", "top"];
function w(e, t, n, r) {
  let i = d(e),
    o = function (e, t, n) {
      switch (e) {
        case "top":
        case "bottom":
          if (n) return t ? S : b;
          return t ? b : S;
        case "left":
        case "right":
          return t ? x : T;
        default:
          return [];
      }
    }(f(e), "start" === n, r);
  return i && (o = o.map(e => e + "-" + i), t && (o = o.concat(o.map(E)))), o;
}
function C(e) {
  let t = f(e);
  return u[t] + e.slice(t.length);
}
function R(e) {
  var t, n, r, i;
  return "number" != typeof e ? {
    top: null != (t = e.top) ? t : 0,
    right: null != (n = e.right) ? n : 0,
    bottom: null != (r = e.bottom) ? r : 0,
    left: null != (i = e.left) ? i : 0
  } : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function O(e) {
  let {
    x: t,
    y: n,
    width: r,
    height: i
  } = e;
  return {
    width: r,
    height: i,
    top: n,
    left: t,
    right: t + r,
    bottom: n + i,
    x: t,
    y: n
  };
}
function P(e, t, n) {
  let r,
    {
      reference: i,
      floating: o
    } = e,
    l = m(t),
    s = h(t),
    u = p(s),
    a = f(t),
    c = i.x + i.width / 2 - o.width / 2,
    g = i.y + i.height / 2 - o.height / 2,
    v = i[u] / 2 - o[u] / 2;
  switch (a) {
    case "top":
      r = {
        x: c,
        y: i.y - o.height
      };
      break;
    case "bottom":
      r = {
        x: c,
        y: i.y + i.height
      };
      break;
    case "right":
      r = {
        x: i.x + i.width,
        y: g
      };
      break;
    case "left":
      r = {
        x: i.x - o.width,
        y: g
      };
      break;
    default:
      r = {
        x: i.x,
        y: i.y
      };
  }
  let y = d(t);
  return y && (r[s] += v * ("end" === y ? 1 : -1) * (n && "y" === l ? -1 : 1)), r;
}
async function A(e, t) {
  var n;
  void 0 === t && (t = {});
  let {
      x: r,
      y: i,
      platform: o,
      rects: l,
      elements: s,
      strategy: u
    } = e,
    {
      boundary: a = "clippingAncestors",
      rootBoundary: f = "viewport",
      elementContext: d = "floating",
      altBoundary: g = !1,
      padding: p = 0
    } = c(t, e),
    m = R(p),
    h = s[g ? "floating" === d ? "reference" : "floating" : d],
    v = O(await o.getClippingRect({
      element: null == (n = await (null == o.isElement ? void 0 : o.isElement(h))) || n ? h : h.contextElement || (await (null == o.getDocumentElement ? void 0 : o.getDocumentElement(s.floating))),
      boundary: a,
      rootBoundary: f,
      strategy: u
    })),
    y = "floating" === d ? {
      x: r,
      y: i,
      width: l.floating.width,
      height: l.floating.height
    } : l.reference,
    E = await (null == o.getOffsetParent ? void 0 : o.getOffsetParent(s.floating)),
    b = (await (null == o.isElement ? void 0 : o.isElement(E))) && (await (null == o.getScale ? void 0 : o.getScale(E))) || {
      x: 1,
      y: 1
    },
    S = O(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
      elements: s,
      rect: y,
      offsetParent: E,
      strategy: u
    }) : y);
  return {
    top: (v.top - S.top + m.top) / b.y,
    bottom: (S.bottom - v.bottom + m.bottom) / b.y,
    left: (v.left - S.left + m.left) / b.x,
    right: (S.right - v.right + m.right) / b.x
  };
}
let I = async (e, t, n) => {
  let {
      placement: r = "bottom",
      strategy: i = "absolute",
      middleware: o = [],
      platform: l
    } = n,
    s = l.detectOverflow ? l : {
      ...l,
      detectOverflow: A
    },
    u = await (null == l.isRTL ? void 0 : l.isRTL(t)),
    a = await l.getElementRects({
      reference: e,
      floating: t,
      strategy: i
    }),
    {
      x: c,
      y: f
    } = P(a, r, u),
    d = r,
    g = 0,
    p = {};
  for (let n = 0; n < o.length; n++) {
    let m = o[n];
    if (!m) continue;
    let {
        name: h,
        fn: v
      } = m,
      {
        x: y,
        y: E,
        data: b,
        reset: S
      } = await v({
        x: c,
        y: f,
        initialPlacement: r,
        placement: d,
        strategy: i,
        middlewareData: p,
        rects: a,
        platform: s,
        elements: {
          reference: e,
          floating: t
        }
      });
    c = null != y ? y : c, f = null != E ? E : f, p[h] = {
      ...p[h],
      ...b
    }, S && g < 50 && (g++, "object" == typeof S && (S.placement && (d = S.placement), S.rects && (a = !0 === S.rects ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: i
    }) : S.rects), {
      x: c,
      y: f
    } = P(a, d, u)), n = -1);
  }
  return {
    x: c,
    y: f,
    placement: d,
    strategy: i,
    middlewareData: p
  };
};
function M(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function L(e) {
  return t.some(t => e[t] >= 0);
}
function k(e) {
  let t = r(...e.map(e => e.left)),
    n = r(...e.map(e => e.top));
  return {
    x: t,
    y: n,
    width: i(...e.map(e => e.right)) - t,
    height: i(...e.map(e => e.bottom)) - n
  };
}
let D = new Set(["left", "top"]);
async function N(e, t) {
  let {
      placement: n,
      platform: r,
      elements: i
    } = e,
    o = await (null == r.isRTL ? void 0 : r.isRTL(i.floating)),
    l = f(n),
    s = d(n),
    u = "y" === m(n),
    a = D.has(l) ? -1 : 1,
    g = o && u ? -1 : 1,
    p = c(t, e),
    {
      mainAxis: h,
      crossAxis: v,
      alignmentAxis: y
    } = "number" == typeof p ? {
      mainAxis: p,
      crossAxis: 0,
      alignmentAxis: null
    } : {
      mainAxis: p.mainAxis || 0,
      crossAxis: p.crossAxis || 0,
      alignmentAxis: p.alignmentAxis
    };
  return s && "number" == typeof y && (v = "end" === s ? -1 * y : y), u ? {
    x: v * g,
    y: h * a
  } : {
    x: h * a,
    y: v * g
  };
}
var F = _module80269;
function H(e) {
  let t = (0, F.getComputedStyle)(e),
    n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0,
    i = (0, F.isHTMLElement)(e),
    l = i ? e.offsetWidth : n,
    s = i ? e.offsetHeight : r,
    u = o(n) !== l || o(r) !== s;
  return u && (n = l, r = s), {
    width: n,
    height: r,
    $: u
  };
}
function W(e) {
  return (0, F.isElement)(e) ? e : e.contextElement;
}
function V(e) {
  let t = W(e);
  if (!(0, F.isHTMLElement)(t)) return s(1);
  let n = t.getBoundingClientRect(),
    {
      width: r,
      height: i,
      $: l
    } = H(t),
    u = (l ? o(n.width) : n.width) / r,
    a = (l ? o(n.height) : n.height) / i;
  return u && Number.isFinite(u) || (u = 1), a && Number.isFinite(a) || (a = 1), {
    x: u,
    y: a
  };
}
let B = s(0);
function _(e) {
  let t = (0, F.getWindow)(e);
  return (0, F.isWebKit)() && t.visualViewport ? {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  } : B;
}
function j(e, t, n, r) {
  var i;
  void 0 === t && (t = !1), void 0 === n && (n = !1);
  let o = e.getBoundingClientRect(),
    l = W(e),
    u = s(1);
  t && (r ? (0, F.isElement)(r) && (u = V(r)) : u = V(e));
  let a = (void 0 === (i = n) && (i = !1), r && i && r === (0, F.getWindow)(l)) ? _(l) : s(0),
    c = (o.left + a.x) / u.x,
    f = (o.top + a.y) / u.y,
    d = o.width / u.x,
    g = o.height / u.y;
  if (l && r) {
    let e = (0, F.getWindow)(l),
      t = (0, F.isElement)(r) ? (0, F.getWindow)(r) : r,
      n = e,
      i = (0, F.getFrameElement)(n);
    for (; i && t !== n;) {
      let e = V(i),
        t = i.getBoundingClientRect(),
        r = (0, F.getComputedStyle)(i),
        o = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x,
        l = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
      c *= e.x, f *= e.y, d *= e.x, g *= e.y, c += o, f += l, n = (0, F.getWindow)(i), i = (0, F.getFrameElement)(n);
    }
  }
  return O({
    width: d,
    height: g,
    x: c,
    y: f
  });
}
function Y(e, t) {
  let n = (0, F.getNodeScroll)(e).scrollLeft;
  return t ? t.left + n : j((0, F.getDocumentElement)(e)).left + n;
}
function U(e, t) {
  let n = e.getBoundingClientRect();
  return {
    x: n.left + t.scrollLeft - Y(e, n),
    y: n.top + t.scrollTop
  };
}
function $(e, t, n) {
  var r;
  let o;
  if ("viewport" === t || "layoutViewport" === t) o = function (e, t, n) {
    void 0 === n && (n = "viewport");
    let r = "layoutViewport" === n,
      i = (0, F.getWindow)(e),
      o = (0, F.getDocumentElement)(e),
      l = i.visualViewport,
      s = o.clientWidth,
      u = o.clientHeight,
      a = 0,
      c = 0;
    if (l) {
      let e = !(0, F.isWebKit)() || "fixed" === t;
      r ? e || (a = -l.offsetLeft, c = -l.offsetTop) : (s = l.width, u = l.height, e && (a = l.offsetLeft, c = l.offsetTop));
    }
    if (0 >= Y(o)) {
      let e = o.ownerDocument,
        t = e.body,
        n = getComputedStyle(t),
        r = "CSS1Compat" === e.compatMode && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0,
        i = Math.abs(o.clientWidth - t.clientWidth - r),
        l = "stable both-edges" === getComputedStyle(o).scrollbarGutter ? i / 2 : i;
      l <= 25 && (s -= l);
    }
    return {
      width: s,
      height: u,
      x: a,
      y: c
    };
  }(e, n, t);else if ("document" === t) {
    let t, n, l, s, u, a;
    r = (0, F.getDocumentElement)(e), t = (0, F.getNodeScroll)(r), n = r.ownerDocument.body, l = i(r.scrollWidth, r.clientWidth, n.scrollWidth, n.clientWidth), s = i(r.scrollHeight, r.clientHeight, n.scrollHeight, n.clientHeight), u = -t.scrollLeft + Y(r), a = -t.scrollTop, "rtl" === (0, F.getComputedStyle)(n).direction && (u += i(r.clientWidth, n.clientWidth) - l), o = {
      width: l,
      height: s,
      x: u,
      y: a
    };
  } else if ((0, F.isElement)(t)) {
    let e, r, i, l, s, u;
    r = (e = j(t, !0, "fixed" === n)).top + t.clientTop, i = e.left + t.clientLeft, l = V(t), s = t.clientWidth * l.x, u = t.clientHeight * l.y, o = {
      width: s,
      height: u,
      x: i * l.x,
      y: r * l.y
    };
  } else {
    let n = _(e);
    o = {
      x: t.x - n.x,
      y: t.y - n.y,
      width: t.width,
      height: t.height
    };
  }
  return O(o);
}
function z(e) {
  return "static" === (0, F.getComputedStyle)(e).position;
}
function X(e, t) {
  if (!(0, F.isHTMLElement)(e) || "fixed" === (0, F.getComputedStyle)(e).position) return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return (0, F.getDocumentElement)(e) === n && (n = n.ownerDocument.body), n;
}
function q(e, t) {
  let n = (0, F.getWindow)(e);
  if ((0, F.isTopLayer)(e)) return n;
  if (!(0, F.isHTMLElement)(e)) {
    let t = (0, F.getParentNode)(e);
    for (; t && !(0, F.isLastTraversableNode)(t);) {
      if ((0, F.isElement)(t) && !z(t)) return t;
      t = (0, F.getParentNode)(t);
    }
    return n;
  }
  let r = X(e, t);
  for (; r && (0, F.isTableElement)(r) && z(r);) r = X(r, t);
  return r && (0, F.isLastTraversableNode)(r) && z(r) && !(0, F.isContainingBlock)(r) ? n : r || (0, F.getContainingBlock)(e) || n;
}
let K = async function (e) {
    let t = this.getOffsetParent || q,
      n = this.getDimensions,
      r = await n(e.floating);
    return {
      reference: function (e, t, n) {
        let r = (0, F.isHTMLElement)(t),
          i = (0, F.getDocumentElement)(t),
          o = "fixed" === n,
          l = j(e, !0, o, t),
          u = {
            scrollLeft: 0,
            scrollTop: 0
          },
          a = s(0);
        if ((r || !o) && (("body" !== (0, F.getNodeName)(t) || (0, F.isOverflowElement)(i)) && (u = (0, F.getNodeScroll)(t)), r)) {
          let e = j(t, !0, o, t);
          a.x = e.x + t.clientLeft, a.y = e.y + t.clientTop;
        }
        !r && i && (a.x = Y(i));
        let c = !i || r || o ? s(0) : U(i, u);
        return {
          x: l.left + u.scrollLeft - a.x - c.x,
          y: l.top + u.scrollTop - a.y - c.y,
          width: l.width,
          height: l.height
        };
      }(e.reference, await t(e.floating), e.strategy),
      floating: {
        x: 0,
        y: 0,
        width: r.width,
        height: r.height
      }
    };
  },
  G = {
    convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
      let {
          elements: t,
          rect: n,
          offsetParent: r,
          strategy: i
        } = e,
        o = "fixed" === i,
        l = (0, F.getDocumentElement)(r),
        u = !!t && (0, F.isTopLayer)(t.floating);
      if (r === l || u && o) return n;
      let a = {
          scrollLeft: 0,
          scrollTop: 0
        },
        c = s(1),
        f = s(0),
        d = (0, F.isHTMLElement)(r);
      if ((d || !o) && (("body" !== (0, F.getNodeName)(r) || (0, F.isOverflowElement)(l)) && (a = (0, F.getNodeScroll)(r)), d)) {
        let e = j(r);
        c = V(r), f.x = e.x + r.clientLeft, f.y = e.y + r.clientTop;
      }
      let g = !l || d || o ? s(0) : U(l, a);
      return {
        width: n.width * c.x,
        height: n.height * c.y,
        x: n.x * c.x - a.scrollLeft * c.x + f.x + g.x,
        y: n.y * c.y - a.scrollTop * c.y + f.y + g.y
      };
    },
    getDocumentElement: F.getDocumentElement,
    getClippingRect: function (e) {
      let {
          element: t,
          boundary: n,
          rootBoundary: o,
          strategy: l
        } = e,
        s = [...("clippingAncestors" === n ? (0, F.isTopLayer)(t) ? [] : function (e, t) {
          let n = t.get(e);
          if (n) return n;
          let r = (0, F.getOverflowAncestors)(e, [], !1).filter(e => (0, F.isElement)(e) && "body" !== (0, F.getNodeName)(e)),
            i = null,
            o = "fixed" === (0, F.getComputedStyle)(e).position,
            l = o ? (0, F.getParentNode)(e) : e;
          for (; (0, F.isElement)(l) && !(0, F.isLastTraversableNode)(l);) {
            let e = (0, F.getComputedStyle)(l),
              t = (0, F.isContainingBlock)(l),
              n = i ? i.position : o ? "fixed" : "";
            t || "fixed" !== n && ("absolute" !== n || "static" !== e.position) ? i = e : r = r.filter(e => e !== l), l = (0, F.getParentNode)(l);
          }
          return t.set(e, r), r;
        }(t, this._c) : [].concat(n)), o],
        u = $(t, s[0], l),
        a = u.top,
        c = u.right,
        f = u.bottom,
        d = u.left;
      for (let e = 1; e < s.length; e++) {
        let n = $(t, s[e], l);
        a = i(n.top, a), c = r(n.right, c), f = r(n.bottom, f), d = i(n.left, d);
      }
      return {
        width: c - d,
        height: f - a,
        x: d,
        y: a
      };
    },
    getOffsetParent: q,
    getElementRects: K,
    getClientRects: function (e) {
      return e.getClientRects ? Array.from(e.getClientRects()) : [];
    },
    getDimensions: function (e) {
      let {
        width: t,
        height: n
      } = H(e);
      return {
        width: t,
        height: n
      };
    },
    getScale: V,
    isElement: F.isElement,
    isRTL: function (e) {
      return "rtl" === (0, F.getComputedStyle)(e).direction;
    }
  };
function J(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
let Q = function (e) {
    return void 0 === e && (e = 0), {
      name: "offset",
      options: e,
      async fn(t) {
        var n, r;
        let {
            x: i,
            y: o,
            placement: l,
            middlewareData: s
          } = t,
          u = await N(t, e);
        return l === (null == (n = s.offset) ? void 0 : n.placement) && null != (r = s.arrow) && r.alignmentOffset ? {} : {
          x: i + u.x,
          y: o + u.y,
          data: {
            ...u,
            placement: l
          }
        };
      }
    };
  },
  Z = function (e) {
    return void 0 === e && (e = {}), {
      name: "shift",
      options: e,
      async fn(t) {
        let {
            x: n,
            y: r,
            placement: i,
            platform: o
          } = t,
          {
            mainAxis: l = !0,
            crossAxis: s = !1,
            limiter: u = {
              fn: e => {
                let {
                  x: t,
                  y: n
                } = e;
                return {
                  x: t,
                  y: n
                };
              }
            },
            ...f
          } = c(e, t),
          d = {
            x: n,
            y: r
          },
          p = await o.detectOverflow(t, f),
          h = m(i),
          v = g(h),
          y = d[v],
          E = d[h],
          b = (e, t) => a(t + p["y" === e ? "top" : "left"], t, t - p["y" === e ? "bottom" : "right"]);
        l && (y = b(v, y)), s && (E = b(h, E));
        let S = u.fn({
          ...t,
          [v]: y,
          [h]: E
        });
        return {
          ...S,
          data: {
            x: S.x - n,
            y: S.y - r,
            enabled: {
              [v]: l,
              [h]: s
            }
          }
        };
      }
    };
  },
  ee = function (e) {
    return void 0 === e && (e = {}), {
      name: "flip",
      options: e,
      async fn(t) {
        var n, r, i, o, l;
        let {
            placement: s,
            middlewareData: u,
            rects: a,
            initialPlacement: d,
            platform: g,
            elements: p
          } = t,
          {
            mainAxis: h = !0,
            crossAxis: E = !0,
            fallbackPlacements: b,
            fallbackStrategy: S = "bestFit",
            fallbackAxisSideDirection: x = "none",
            flipAlignment: T = !0,
            ...R
          } = c(e, t);
        if (null != (n = u.arrow) && n.alignmentOffset) return {};
        let O = f(s),
          P = m(d),
          A = f(d) === d,
          I = await (null == g.isRTL ? void 0 : g.isRTL(p.floating)),
          M = b || (A || !T ? [C(d)] : y(d)),
          L = "none" !== x;
        !b && L && M.push(...w(d, T, x, I));
        let k = [d, ...M],
          D = await g.detectOverflow(t, R),
          N = [],
          F = (null == (r = u.flip) ? void 0 : r.overflows) || [];
        if (h && N.push(D[O]), E) {
          let e = v(s, a, I);
          N.push(D[e[0]], D[e[1]]);
        }
        if (F = [...F, {
          placement: s,
          overflows: N
        }], !N.every(e => e <= 0)) {
          let e = ((null == (i = u.flip) ? void 0 : i.index) || 0) + 1,
            t = k[e];
          if (t && ("alignment" !== E || P === m(t) || F.every(e => m(e.placement) !== P || e.overflows[0] > 0))) return {
            data: {
              index: e,
              overflows: F
            },
            reset: {
              placement: t
            }
          };
          let n = null == (o = F.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : o.placement;
          if (!n) switch (S) {
            case "bestFit":
              {
                let e = null == (l = F.filter(e => {
                  if (L) {
                    let t = m(e.placement);
                    return t === P || "y" === t;
                  }
                  return !0;
                }).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : l[0];
                e && (n = e);
                break;
              }
            case "initialPlacement":
              n = d;
          }
          if (s !== n) return {
            reset: {
              placement: n
            }
          };
        }
        return {};
      }
    };
  },
  et = function (e) {
    return void 0 === e && (e = {}), {
      name: "size",
      options: e,
      async fn(t) {
        let n,
          o,
          {
            placement: l,
            rects: s,
            platform: u,
            elements: a
          } = t,
          {
            apply: g = () => {},
            ...p
          } = c(e, t),
          h = await u.detectOverflow(t, p),
          v = f(l),
          y = d(l),
          E = "y" === m(l),
          {
            width: b,
            height: S
          } = s.floating;
        "top" === v || "bottom" === v ? (n = v, o = y === ((await (null == u.isRTL ? void 0 : u.isRTL(a.floating))) ? "start" : "end") ? "left" : "right") : (o = v, n = "end" === y ? "top" : "bottom");
        let x = S - h.top - h.bottom,
          T = b - h.left - h.right,
          w = r(S - h[n], x),
          C = r(b - h[o], T),
          R = t.middlewareData.shift,
          O = !R,
          P = w,
          A = C;
        null != R && R.enabled.x && (A = T), null != R && R.enabled.y && (P = x), O && !y && (E ? A = b - 2 * i(h.left, h.right) : P = S - 2 * i(h.top, h.bottom)), await g({
          ...t,
          availableWidth: A,
          availableHeight: P
        });
        let I = await u.getDimensions(a.floating);
        return b !== I.width || S !== I.height ? {
          reset: {
            rects: !0
          }
        } : {};
      }
    };
  },
  en = function (e) {
    return void 0 === e && (e = {}), {
      options: e,
      fn(t) {
        var n, r, i, o;
        let {
            x: l,
            y: s,
            placement: u,
            rects: a,
            middlewareData: d
          } = t,
          {
            offset: p = 0,
            mainAxis: h = !0,
            crossAxis: v = !0
          } = c(e, t),
          y = {
            x: l,
            y: s
          },
          E = m(u),
          b = g(E),
          S = y[b],
          x = y[E],
          T = c(p, t),
          w = "number" == typeof T ? {
            mainAxis: T,
            crossAxis: 0
          } : {
            mainAxis: null != (n = T.mainAxis) ? n : 0,
            crossAxis: null != (r = T.crossAxis) ? r : 0
          };
        if (h) {
          let e = "y" === b ? "height" : "width",
            t = a.reference[b] - a.floating[e] + w.mainAxis,
            n = a.reference[b] + a.reference[e] - w.mainAxis;
          S < t ? S = t : S > n && (S = n);
        }
        if (v) {
          let e = "y" === b ? "width" : "height",
            t = D.has(f(u)),
            n = a.reference[E] - a.floating[e] + (t && (null == (i = d.offset) ? void 0 : i[E]) || 0) + (t ? 0 : w.crossAxis),
            r = a.reference[E] + a.reference[e] + (t ? 0 : (null == (o = d.offset) ? void 0 : o[E]) || 0) - (t ? w.crossAxis : 0);
          x < n ? x = n : x > r && (x = r);
        }
        return {
          [b]: S,
          [E]: x
        };
      }
    };
  },
  er = (e, t, n) => {
    let r = new Map(),
      i = null != n ? n : {},
      o = {
        ...G,
        ...i.platform,
        _c: r
      };
    return I(e, t, {
      ...i,
      platform: o
    });
  };
const _export_arrow = e => ({
  name: "arrow",
  options: e,
  async fn(t) {
    let {
        x: n,
        y: i,
        placement: o,
        rects: l,
        platform: s,
        elements: u,
        middlewareData: f
      } = t,
      {
        element: g,
        padding: m = 0
      } = c(e, t) || {};
    if (null == g) return {};
    let v = R(m),
      y = {
        x: n,
        y: i
      },
      E = h(o),
      b = p(E),
      S = await s.getDimensions(g),
      x = "y" === E,
      T = x ? "clientHeight" : "clientWidth",
      w = l.reference[b] + l.reference[E] - y[E] - l.floating[b],
      C = y[E] - l.reference[E],
      O = await (null == s.getOffsetParent ? void 0 : s.getOffsetParent(g)),
      P = O ? O[T] : 0;
    P && (await (null == s.isElement ? void 0 : s.isElement(O))) || (P = u.floating[T] || l.floating[b]);
    let A = P / 2 - S[b] / 2 - 1,
      I = r(v[x ? "top" : "left"], A),
      M = r(v[x ? "bottom" : "right"], A),
      L = P - S[b] - M,
      k = P / 2 - S[b] / 2 + (w / 2 - C / 2),
      D = a(I, k, L),
      N = !f.arrow && null != d(o) && k !== D && l.reference[b] / 2 - (k < I ? I : M) - S[b] / 2 < 0,
      F = N ? k < I ? k - I : k - L : 0;
    return {
      [E]: y[E] + F,
      data: {
        [E]: D,
        centerOffset: k - D - F,
        ...(N && {
          alignmentOffset: F
        })
      },
      reset: N
    };
  }
});
const _export_autoPlacement = function (e) {
  return void 0 === e && (e = {}), {
    name: "autoPlacement",
    options: e,
    async fn(t) {
      var r, i, o, l;
      let {
          rects: s,
          middlewareData: u,
          placement: a,
          platform: g,
          elements: p
        } = t,
        {
          crossAxis: m = !1,
          alignment: h,
          allowedPlacements: y = n,
          autoAlignment: b = !0,
          ...S
        } = c(e, t),
        x = void 0 !== h || y === n ? ((l = h || null) ? [...y.filter(e => d(e) === l), ...y.filter(e => d(e) !== l)] : y.filter(e => f(e) === e)).filter(e => !l || d(e) === l || !!b && E(e) !== e) : y,
        T = (null == (r = u.autoPlacement) ? void 0 : r.index) || 0,
        w = x[T];
      if (null == w) return {};
      if (a !== w) return {
        reset: {
          placement: x[0]
        }
      };
      let C = await g.detectOverflow(t, S),
        R = v(w, s, await (null == g.isRTL ? void 0 : g.isRTL(p.floating))),
        O = [C[f(w)], C[R[0]], C[R[1]]],
        P = [...((null == (i = u.autoPlacement) ? void 0 : i.overflows) || []), {
          placement: w,
          overflows: O
        }],
        A = x[T + 1];
      if (A) return {
        data: {
          index: T + 1,
          overflows: P
        },
        reset: {
          placement: A
        }
      };
      let I = P.map(e => {
          let t = d(e.placement);
          return [e.placement, t && m ? e.overflows.slice(0, 2).reduce((e, t) => e + t, 0) : e.overflows[0], e.overflows];
        }).sort((e, t) => e[1] - t[1]),
        M = (null == (o = I.filter(e => e[2].slice(0, d(e[0]) ? 2 : 3).every(e => e <= 0))[0]) ? void 0 : o[0]) || I[0][0];
      return M !== a ? {
        data: {
          index: T + 1,
          overflows: P
        },
        reset: {
          placement: M
        }
      } : {};
    }
  };
};
const _export_autoUpdate = function (e, t, n, o) {
  let s;
  void 0 === o && (o = {});
  let {
      ancestorScroll: u = !0,
      ancestorResize: a = !0,
      elementResize: c = "function" == typeof ResizeObserver,
      layoutShift: f = "function" == typeof IntersectionObserver,
      animationFrame: d = !1
    } = o,
    g = W(e),
    p = u || a ? [...(g ? (0, F.getOverflowAncestors)(g) : []), ...(t ? (0, F.getOverflowAncestors)(t) : [])] : [];
  p.forEach(e => {
    u && e.addEventListener("scroll", n), a && e.addEventListener("resize", n);
  });
  let m = g && f ? function (e, t, n) {
      let o,
        s = null,
        u = (0, F.getDocumentElement)(e);
      function a() {
        var e;
        clearTimeout(o), null == (e = s) || e.disconnect(), s = null;
      }
      function c(n, f) {
        void 0 === n && (n = !1), void 0 === f && (f = 1), a();
        let d = e.getBoundingClientRect(),
          {
            left: g,
            top: p,
            width: m,
            height: h
          } = d;
        if (n || t(), !m || !h) return;
        let v = {
            rootMargin: -l(p) + "px " + -l(u.clientWidth - (g + m)) + "px " + -l(u.clientHeight - (p + h)) + "px " + -l(g) + "px",
            threshold: i(0, r(1, f)) || 1
          },
          y = !0;
        function E(t) {
          let n = t[0].intersectionRatio;
          if (!J(d, e.getBoundingClientRect())) return c();
          if (n !== f) {
            if (!y) return c();
            n ? c(!1, n) : o = setTimeout(() => {
              c(!1, 1e-7);
            }, 1e3);
          }
          y = !1;
        }
        try {
          s = new IntersectionObserver(E, {
            ...v,
            root: u.ownerDocument
          });
        } catch (e) {
          s = new IntersectionObserver(E, v);
        }
        s.observe(e);
      }
      let f = (0, F.getWindow)(e),
        d = () => c(n);
      return f.addEventListener("resize", d), c(!0), () => {
        f.removeEventListener("resize", d), a();
      };
    }(g, n, a) : null,
    h = -1,
    v = null;
  c && (v = new ResizeObserver(e => {
    let [r] = e;
    r && r.target === g && v && t && (v.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var e;
      null == (e = v) || e.observe(t);
    })), n();
  }), g && !d && v.observe(g), t && v.observe(t));
  let y = d ? j(e) : null;
  return d && function t() {
    let r = j(e);
    y && !J(y, r) && n(), y = r, s = requestAnimationFrame(t);
  }(), n(), () => {
    var e;
    p.forEach(e => {
      u && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
    }), null == m || m(), null == (e = v) || e.disconnect(), v = null, d && cancelAnimationFrame(s);
  };
};
const _export_computePosition = er;
const _export_flip = ee;
const _export_hide = function (e) {
  return void 0 === e && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      let {
          rects: n,
          platform: r
        } = t,
        {
          strategy: i = "referenceHidden",
          ...o
        } = c(e, t);
      switch (i) {
        case "referenceHidden":
          {
            let e = M(await r.detectOverflow(t, {
              ...o,
              elementContext: "reference"
            }), n.reference);
            return {
              data: {
                referenceHiddenOffsets: e,
                referenceHidden: L(e)
              }
            };
          }
        case "escaped":
          {
            let e = M(await r.detectOverflow(t, {
              ...o,
              altBoundary: !0
            }), n.floating);
            return {
              data: {
                escapedOffsets: e,
                escaped: L(e)
              }
            };
          }
        default:
          return {};
      }
    }
  };
};
const _export_inline = function (e) {
  return void 0 === e && (e = {}), {
    name: "inline",
    options: e,
    async fn(t) {
      let {
          placement: n,
          elements: o,
          rects: l,
          platform: s,
          strategy: u
        } = t,
        {
          padding: a = 2,
          x: d,
          y: g
        } = c(e, t),
        p = Array.from((await (null == s.getClientRects ? void 0 : s.getClientRects(o.reference))) || []);
      if (!p.length) return {};
      let h = function (e) {
          let t = e.slice().sort((e, t) => e.y - t.y),
            n = [],
            r = null;
          for (let e = 0; e < t.length; e++) {
            let i = t[e];
            !r || i.y - r.y > r.height / 2 ? n.push([i]) : n[n.length - 1].push(i), r = i;
          }
          return n.map(e => O(k(e)));
        }(p),
        v = O(k(p)),
        y = R(a),
        E = await s.getElementRects({
          reference: {
            getBoundingClientRect: function () {
              if (2 === h.length && (h[0].left > h[1].right || h[1].left > h[0].right) && null != d && null != g) return h.find(e => d > e.left - y.left && d < e.right + y.right && g > e.top - y.top && g < e.bottom + y.bottom) || v;
              if (h.length >= 2) {
                if ("y" === m(n)) {
                  let e = h[0],
                    t = h[h.length - 1],
                    r = "top" === f(n),
                    i = e.top,
                    o = t.bottom,
                    l = r ? e.left : t.left;
                  return O({
                    x: l,
                    y: i,
                    width: (r ? e.right : t.right) - l,
                    height: o - i
                  });
                }
                let e = "left" === f(n),
                  t = i(...h.map(e => e.right)),
                  o = r(...h.map(e => e.left)),
                  l = h.filter(n => e ? n.left === o : n.right === t),
                  s = l[0].top;
                return O({
                  x: o,
                  y: s,
                  width: t - o,
                  height: l[l.length - 1].bottom - s
                });
              }
              return v;
            }
          },
          floating: o.floating,
          strategy: u
        });
      return l.reference.x !== E.reference.x || l.reference.y !== E.reference.y || l.reference.width !== E.reference.width || l.reference.height !== E.reference.height ? {
        reset: {
          rects: E
        }
      } : {};
    }
  };
};
const _export_limitShift = en;
const _export_offset = Q;
const _export_shift = Z;
const _export_size = et;
export { _export_arrow as arrow, _export_autoPlacement as autoPlacement, _export_autoUpdate as autoUpdate, _export_computePosition as computePosition, _export_flip as flip, _export_hide as hide, _export_inline as inline, _export_limitShift as limitShift, _export_offset as offset, _export_shift as shift, _export_size as size };

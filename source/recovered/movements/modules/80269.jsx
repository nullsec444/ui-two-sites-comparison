// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
let t;
function r() {
  return "u" > typeof window;
}
function n(e) {
  return s(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function i(e) {
  var t;
  return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window;
}
function o(e) {
  var t;
  return null == (t = (s(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement;
}
function s(e) {
  return !!r() && (e instanceof Node || e instanceof i(e).Node);
}
function a(e) {
  return !!r() && (e instanceof Element || e instanceof i(e).Element);
}
function l(e) {
  return !!r() && (e instanceof HTMLElement || e instanceof i(e).HTMLElement);
}
function u(e) {
  return !(!r() || "u" < typeof ShadowRoot) && (e instanceof ShadowRoot || e instanceof i(e).ShadowRoot);
}
function c(e) {
  let {
    overflow: t,
    overflowX: r,
    overflowY: n,
    display: i
  } = v(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && "inline" !== i && "contents" !== i;
}
function f(e) {
  try {
    if (e.matches(":popover-open")) return !0;
  } catch (e) {}
  try {
    return e.matches(":modal");
  } catch (e) {
    return !1;
  }
}
let d = /transform|translate|scale|rotate|perspective|filter/,
  p = /paint|layout|strict|content/,
  g = e => !!e && "none" !== e;
function h(e) {
  let t = a(e) ? v(e) : e;
  return g(t.transform) || g(t.translate) || g(t.scale) || g(t.rotate) || g(t.perspective) || !m() && (g(t.backdropFilter) || g(t.filter)) || d.test(t.willChange || "") || p.test(t.contain || "");
}
function m() {
  return null == t && (t = "u" > typeof CSS && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), t;
}
function b(e) {
  return /^(html|body|#document)$/.test(n(e));
}
function v(e) {
  return i(e).getComputedStyle(e);
}
function y(e) {
  if ("html" === n(e)) return e;
  let t = e.assignedSlot || e.parentNode || u(e) && e.host || o(e);
  return u(t) ? t.host : t;
}
function E(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
const _export_getComputedStyle = v;
const _export_getContainingBlock = function (e) {
  let t = y(e);
  for (; l(t) && !b(t);) {
    if (h(t)) return t;
    if (f(t)) break;
    t = y(t);
  }
  return null;
};
const _export_getDocumentElement = o;
const _export_getFrameElement = E;
const _export_getNodeName = n;
const _export_getNodeScroll = function (e) {
  return a(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
};
const _export_getOverflowAncestors = function e(t, r, n) {
  var o;
  void 0 === r && (r = []), void 0 === n && (n = !0);
  let s = function e(t) {
      let r = y(t);
      return b(r) ? (t.ownerDocument || t).body : l(r) && c(r) ? r : e(r);
    }(t),
    a = s === (null == (o = t.ownerDocument) ? void 0 : o.body),
    u = i(s);
  if (!a) return r.concat(s, e(s, [], n));
  {
    let t = E(u);
    return r.concat(u, u.visualViewport || [], c(s) ? s : [], t && n ? e(t) : []);
  }
};
const _export_getParentNode = y;
const _export_getWindow = i;
const _export_isContainingBlock = h;
const _export_isElement = a;
const _export_isHTMLElement = l;
const _export_isLastTraversableNode = b;
const _export_isNode = s;
const _export_isOverflowElement = c;
const _export_isShadowRoot = u;
const _export_isTableElement = function (e) {
  return /^(table|td|th)$/.test(n(e));
};
const _export_isTopLayer = f;
const _export_isWebKit = m;
export { _export_getComputedStyle as getComputedStyle, _export_getContainingBlock as getContainingBlock, _export_getDocumentElement as getDocumentElement, _export_getFrameElement as getFrameElement, _export_getNodeName as getNodeName, _export_getNodeScroll as getNodeScroll, _export_getOverflowAncestors as getOverflowAncestors, _export_getParentNode as getParentNode, _export_getWindow as getWindow, _export_isContainingBlock as isContainingBlock, _export_isElement as isElement, _export_isHTMLElement as isHTMLElement, _export_isLastTraversableNode as isLastTraversableNode, _export_isNode as isNode, _export_isOverflowElement as isOverflowElement, _export_isShadowRoot as isShadowRoot, _export_isTableElement as isTableElement, _export_isTopLayer as isTopLayer, _export_isWebKit as isWebKit };

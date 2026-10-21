// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module80269 from "./80269.js";
import * as _module26997 from "./26997.js";
import * as _module86631 from "./86631.js";
import * as _module11706 from "./11706.js";
var t = _module80269,
  n = _module26997,
  r = _module86631,
  i = _module11706;
function o(e) {
  for (let n of Array.from(e.children)) if ("summary" === (0, t.getNodeName)(n)) return n;
  return null;
}
function l(e) {
  let n = e ? (0, t.getNodeName)(e) : "";
  return null != e && e.matches('a[href],button,input,select,textarea,summary,details,iframe,object,embed,[tabindex],[contenteditable]:not([contenteditable="false"]),audio[controls],video[controls]') && ("summary" !== n || null != e.parentElement && "details" === (0, t.getNodeName)(e.parentElement) && o(e.parentElement) === e) && ("details" !== n || null == o(e)) && ("input" !== n || "hidden" !== e.type);
}
function s(e) {
  if (!l(e) || !e.isConnected || e.matches(":disabled")) return !1;
  for (let n = e; n; n = function (e) {
    let n = e.assignedSlot;
    if (n) return n;
    if (e.parentElement) return e.parentElement;
    let r = e.getRootNode();
    return (0, t.isShadowRoot)(r) ? r.host : null;
  }(n)) {
    let l = n !== e,
      s = "slot" === (0, t.getNodeName)(n);
    if (n.hasAttribute("inert") || l && "details" === (0, t.getNodeName)(n) && !n.open && !function (e, t) {
      let n = o(t);
      return !!n && (e === n || (0, r.contains)(n, e));
    }(e, n) || n.hasAttribute("hidden") || !s && !function (e, n) {
      let r = (0, t.getComputedStyle)(e);
      return n ? "none" !== r.display : (0, i.isElementVisible)(e, r);
    }(n, l)) return !1;
  }
  return !0;
}
function u(e) {
  let n = e.tabIndex;
  if (n < 0) {
    let n = (0, t.getNodeName)(e);
    if ("details" === n || "audio" === n || "video" === n || (0, t.isHTMLElement)(e) && e.isContentEditable) return 0;
  }
  return n;
}
function a(e) {
  return "input" !== (0, t.getNodeName)(e) ? null : "radio" === e.type && "" !== e.name ? e : null;
}
function c(e) {
  if ((0, t.isHTMLElement)(e) && "slot" === (0, t.getNodeName)(e)) {
    let t = e.assignedElements({
      flatten: !0
    });
    if (t.length > 0) return t;
  }
  return (0, t.isHTMLElement)(e) && e.shadowRoot ? Array.from(e.shadowRoot.children) : Array.from(e.children);
}
function f(e) {
  let t = [];
  return !function e(t, n) {
    c(t).forEach(t => {
      l(t) && n.push(t), e(t, n);
    });
  }(e, t), t.filter(s);
}
function d(e) {
  let t = f(e);
  return t.filter(e => u(e) >= 0 && function (e, t) {
    let n = a(e);
    if (!n) return !0;
    let r = t.find(e => {
      let t = a(e);
      return t?.name === n.name && t.form === n.form && t.checked;
    });
    return r ? r === n : t.find(e => {
      let t = a(e);
      return t?.name === n.name && t.form === n.form;
    }) === n;
  }(e, t));
}
function g(e, t) {
  let i = d(e),
    o = i.length;
  if (0 === o) return;
  let l = (0, r.activeElement)((0, n.ownerDocument)(e)),
    s = i.indexOf(l);
  return i[-1 === s ? 1 === t ? 0 : o - 1 : s + t];
}
const _export_disableFocusInside = function (e) {
  d(e).forEach(e => {
    e.dataset.tabindex = e.getAttribute("tabindex") || "", e.setAttribute("tabindex", "-1");
  });
};
const _export_enableFocusInside = function (e) {
  let n = [];
  !function e(n, r, i) {
    c(n).forEach(n => {
      (0, t.isHTMLElement)(n) && n.matches(r) && i.push(n), e(n, r, i);
    });
  }(e, "[data-tabindex]", n), n.forEach(e => {
    let t = e.dataset.tabindex;
    delete e.dataset.tabindex, t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex");
  });
};
const _export_focusable = f;
const _export_getNextTabbable = function (e) {
  return g((0, n.ownerDocument)(e).body, 1) || e;
};
const _export_getPreviousTabbable = function (e) {
  return g((0, n.ownerDocument)(e).body, -1) || e;
};
const _export_getTabbableAfterElement = function (e) {
  if (!e) return null;
  let t = d((0, n.ownerDocument)(e).body),
    r = t.length;
  if (0 === r) return null;
  let i = t.indexOf(e);
  return -1 === i ? null : t[(i + 1 + r) % r];
};
const _export_isOutsideEvent = function (e, t) {
  let n = t || e.currentTarget,
    i = e.relatedTarget;
  return !i || !(0, r.contains)(n, i);
};
const _export_isTabbable = function (e) {
  return s(e) && u(e) >= 0;
};
const _export_tabbable = d;
export { _export_disableFocusInside as disableFocusInside, _export_enableFocusInside as enableFocusInside, _export_focusable as focusable, _export_getNextTabbable as getNextTabbable, _export_getPreviousTabbable as getPreviousTabbable, _export_getTabbableAfterElement as getTabbableAfterElement, _export_isOutsideEvent as isOutsideEvent, _export_isTabbable as isTabbable, _export_tabbable as tabbable };

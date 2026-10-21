// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import { a as e, r as t } from "./rolldown-runtime-B0Z9INg1.js";
import { n, t as r } from "./jsx-runtime-Ciaf_P-h.js";
import { t as i } from "./utils-WkhMP9hs.js";
var a = t({
    Group: () => Q,
    Panel: () => ot,
    Separator: () => dt,
    isCoarsePointer: () => T,
    useDefaultLayout: () => et,
    useGroupCallbackRef: () => nt,
    useGroupRef: () => rt,
    usePanelCallbackRef: () => ct,
    usePanelRef: () => lt
  }),
  o = e(r(), 1),
  s = e(n(), 1);
function c(e, t) {
  let n = getComputedStyle(e);
  return t * parseFloat(n.fontSize);
}
function l(e, t) {
  let n = getComputedStyle(e.ownerDocument.documentElement);
  return t * parseFloat(n.fontSize);
}
function u(e) {
  return e / 100 * window.innerHeight;
}
function d(e) {
  return e / 100 * window.innerWidth;
}
function f(e) {
  switch (typeof e) {
    case `number`:
      return [e, `px`];
    case `string`:
      {
        let t = parseFloat(e);
        return e.endsWith(`%`) ? [t, `%`] : e.endsWith(`px`) ? [t, `px`] : e.endsWith(`rem`) ? [t, `rem`] : e.endsWith(`em`) ? [t, `em`] : e.endsWith(`vh`) ? [t, `vh`] : e.endsWith(`vw`) ? [t, `vw`] : [t, `%`];
      }
  }
}
function p({
  groupSize: e,
  panelElement: t,
  styleProp: n
}) {
  let r,
    [i, a] = f(n);
  switch (a) {
    case `%`:
      r = i / 100 * e;
      break;
    case `px`:
      r = i;
      break;
    case `rem`:
      r = l(t, i);
      break;
    case `em`:
      r = c(t, i);
      break;
    case `vh`:
      r = u(i);
      break;
    case `vw`:
      r = d(i);
  }
  return r;
}
function m(e) {
  return parseFloat(e.toFixed(3));
}
function h({
  group: e
}) {
  let {
    orientation: t,
    panels: n
  } = e;
  return n.reduce((e, n) => (e += t === `horizontal` ? n.element.offsetWidth : n.element.offsetHeight, e), 0);
}
function g(e) {
  let {
      panels: t
    } = e,
    n = h({
      group: e
    });
  return n === 0 ? t.map(e => ({
    groupResizeBehavior: e.panelConstraints.groupResizeBehavior,
    collapsedSize: 0,
    collapsible: e.panelConstraints.collapsible === !0,
    defaultSize: void 0,
    disabled: e.panelConstraints.disabled,
    minSize: 0,
    maxSize: 100,
    panelId: e.id
  })) : t.map(e => {
    let {
        element: t,
        panelConstraints: r
      } = e,
      i = 0;
    r.collapsedSize !== void 0 && (i = m(p({
      groupSize: n,
      panelElement: t,
      styleProp: r.collapsedSize
    }) / n * 100));
    let a;
    r.defaultSize !== void 0 && (a = m(p({
      groupSize: n,
      panelElement: t,
      styleProp: r.defaultSize
    }) / n * 100));
    let o = 0;
    r.minSize !== void 0 && (o = m(p({
      groupSize: n,
      panelElement: t,
      styleProp: r.minSize
    }) / n * 100));
    let s = 100;
    return r.maxSize !== void 0 && (s = m(p({
      groupSize: n,
      panelElement: t,
      styleProp: r.maxSize
    }) / n * 100)), {
      groupResizeBehavior: r.groupResizeBehavior,
      collapsedSize: i,
      collapsible: r.collapsible === !0,
      defaultSize: a,
      disabled: r.disabled,
      minSize: o,
      maxSize: s,
      panelId: e.id
    };
  });
}
function _(e, t = `Assertion error`) {
  if (!e) throw Error(t);
}
function v(e, t) {
  return Array.from(t).sort(e === `horizontal` ? y : b);
}
function y(e, t) {
  let n = e.element.offsetLeft - t.element.offsetLeft;
  return n === 0 ? e.element.offsetWidth - t.element.offsetWidth : n;
}
function b(e, t) {
  let n = e.element.offsetTop - t.element.offsetTop;
  return n === 0 ? e.element.offsetHeight - t.element.offsetHeight : n;
}
function x(e) {
  return typeof e == `object` && !!e && `nodeType` in e && e.nodeType === Node.ELEMENT_NODE;
}
function S(e, t) {
  return {
    x: e.x >= t.left && e.x <= t.right ? 0 : Math.min(Math.abs(e.x - t.left), Math.abs(e.x - t.right)),
    y: e.y >= t.top && e.y <= t.bottom ? 0 : Math.min(Math.abs(e.y - t.top), Math.abs(e.y - t.bottom))
  };
}
function C({
  orientation: e,
  rects: t,
  targetRect: n
}) {
  let r = {
      x: n.x + n.width / 2,
      y: n.y + n.height / 2
    },
    i,
    a = Number.MAX_VALUE;
  for (let n of t) {
    let {
        x: t,
        y: o
      } = S(r, n),
      s = e === `horizontal` ? t : o;
    s < a && (a = s, i = n);
  }
  return _(i, `No rect found`), i;
}
var w;
function T() {
  return w === void 0 && (w = typeof matchMedia == `function` && !!matchMedia(`(pointer:coarse)`).matches), w;
}
function E(e) {
  let {
      element: t,
      orientation: n,
      panels: r,
      separators: i
    } = e,
    a = v(n, Array.from(t.children).filter(x).map(e => ({
      element: e
    }))).map(({
      element: e
    }) => e),
    o = [],
    s = !1,
    c = !1,
    l = -1,
    u = -1,
    d = 0,
    f,
    p = [];
  {
    let e = -1;
    for (let t of a) t.hasAttribute(`data-panel`) && (e++, t.hasAttribute(`data-disabled`) || (d++, l === -1 && (l = e), u = e));
  }
  if (d > 1) {
    let t = -1;
    for (let d of a) if (d.hasAttribute(`data-panel`)) {
      t++;
      let i = r.find(e => e.element === d);
      if (i) {
        if (f) {
          let r = f.element.getBoundingClientRect(),
            a = d.getBoundingClientRect(),
            m;
          if (c) {
            let e = n === `horizontal` ? new DOMRect(r.right, r.top, 0, r.height) : new DOMRect(r.left, r.bottom, r.width, 0),
              t = n === `horizontal` ? new DOMRect(a.left, a.top, 0, a.height) : new DOMRect(a.left, a.top, a.width, 0);
            switch (p.length) {
              case 0:
                m = [e, t];
                break;
              case 1:
                {
                  let i = p[0];
                  m = [i, C({
                    orientation: n,
                    rects: [r, a],
                    targetRect: i.element.getBoundingClientRect()
                  }) === r ? t : e];
                  break;
                }
              default:
                m = p;
            }
          } else m = p.length ? p : [n === `horizontal` ? new DOMRect(r.right, a.top, a.left - r.right, a.height) : new DOMRect(a.left, r.bottom, a.width, a.top - r.bottom)];
          for (let n of m) {
            let r = `width` in n ? n : n.element.getBoundingClientRect(),
              a = T() ? e.resizeTargetMinimumSize.coarse : e.resizeTargetMinimumSize.fine;
            if (r.width < a) {
              let e = a - r.width;
              r = new DOMRect(r.x - e / 2, r.y, r.width + e, r.height);
            }
            if (r.height < a) {
              let e = a - r.height;
              r = new DOMRect(r.x, r.y - e / 2, r.width, r.height + e);
            }
            !s && !(t <= l || t > u) && o.push({
              group: e,
              groupSize: h({
                group: e
              }),
              panels: [f, i],
              separator: `width` in n ? void 0 : n,
              rect: r
            }), s = !1;
          }
        }
        c = !1, f = i, p = [];
      }
    } else if (d.hasAttribute(`data-separator`)) {
      d.ariaDisabled !== null && (s = !0);
      let e = i.find(e => e.element === d);
      e ? p.push(e) : (f = void 0, p = []);
    } else c = !0;
  }
  return o;
}
var D = class {
    #e = {};
    addListener(e, t) {
      let n = this.#e[e];
      return n === void 0 ? this.#e[e] = [t] : n.includes(t) || n.push(t), () => {
        this.removeListener(e, t);
      };
    }
    emit(e, t) {
      let n = this.#e[e];
      if (n !== void 0) {
        if (n.length === 1) n[0].call(null, t);else {
          let e = !1,
            r = null,
            i = Array.from(n);
          for (let n = 0; n < i.length; n++) {
            let a = i[n];
            try {
              a.call(null, t);
            } catch (t) {
              r === null && (e = !0, r = t);
            }
          }
          if (e) throw r;
        }
      }
    }
    removeAllListeners() {
      this.#e = {};
    }
    removeListener(e, t) {
      let n = this.#e[e];
      if (n !== void 0) {
        let e = n.indexOf(t);
        e >= 0 && n.splice(e, 1);
      }
    }
  },
  O = {
    cursorFlags: 0,
    state: `inactive`
  },
  k = new D();
function A() {
  return O;
}
function j(e) {
  return k.addListener(`change`, e);
}
function ee(e) {
  let t = O,
    n = {
      ...O
    };
  n.cursorFlags = e, O = n, k.emit(`change`, {
    prev: t,
    next: n
  });
}
function M(e) {
  let t = O;
  O = e, k.emit(`change`, {
    prev: t,
    next: e
  });
}
var te = e => e,
  ne = () => {},
  re = 1,
  ie = 2,
  ae = 4,
  oe = 8,
  se = 3,
  ce = 12,
  N;
function le() {
  return N === void 0 && (N = !1, typeof window < `u` && (window.navigator.userAgent.includes(`Chrome`) || window.navigator.userAgent.includes(`Firefox`)) && (N = !0)), N;
}
function ue({
  cursorFlags: e,
  groups: t,
  state: n
}) {
  let r = 0,
    i = 0;
  switch (n) {
    case `active`:
    case `hover`:
      t.forEach(e => {
        if (!e.mutableState.disableCursor) switch (e.orientation) {
          case `horizontal`:
            r++;
            break;
          case `vertical`:
            i++;
            break;
        }
      });
  }
  if (r !== 0 || i !== 0) {
    if (n === `active` && e && le()) {
      let t = (e & re) !== 0,
        n = (e & ie) !== 0,
        r = (e & ae) !== 0,
        i = (e & oe) !== 0;
      if (t) return r ? `se-resize` : i ? `ne-resize` : `e-resize`;
      if (n) return r ? `sw-resize` : i ? `nw-resize` : `w-resize`;
      if (r) return `s-resize`;
      if (i) return `n-resize`;
    }
    return le() ? r > 0 && i > 0 ? `move` : r > 0 ? `ew-resize` : `ns-resize` : r > 0 && i > 0 ? `grab` : r > 0 ? `col-resize` : `row-resize`;
  }
}
var de = new WeakMap();
function P(e) {
  if (!e.defaultView || !e.adoptedStyleSheets) return;
  let {
    prevStyle: t,
    styleSheet: n
  } = de.get(e) ?? {};
  n === void 0 && (n = new e.defaultView.CSSStyleSheet(), e.adoptedStyleSheets && (Object.isExtensible(e.adoptedStyleSheets) ? e.adoptedStyleSheets.push(n) : e.adoptedStyleSheets = [...e.adoptedStyleSheets, n]));
  let r = A();
  switch (r.state) {
    case `active`:
    case `hover`:
      {
        let e = ue({
            cursorFlags: r.cursorFlags,
            groups: r.hitRegions.map(e => e.group),
            state: r.state
          }),
          i = `*, *:hover {cursor: ${e} !important; }`;
        if (t === i) return;
        t = i, e ? n.cssRules.length === 0 ? n.insertRule(i) : n.replaceSync(i) : n.cssRules.length === 1 && n.deleteRule(0);
        break;
      }
    case `inactive`:
      t = void 0, n.cssRules.length === 1 && n.deleteRule(0);
  }
  de.set(e, {
    prevStyle: t,
    styleSheet: n
  });
}
var F = new Map(),
  fe = new D();
function pe(e) {
  F = new Map(F), F.delete(e);
}
function me(e, t) {
  for (let [t] of F) if (t.id === e) return t;
}
function I(e, t) {
  for (let [t, n] of F) if (t.id === e) return n;
  if (t) throw Error(`Could not find data for Group with id ${e}`);
}
function L() {
  return F;
}
function R(e, t) {
  return fe.addListener(`groupChange`, n => {
    n.group.id === e && t(n);
  });
}
function z(e, t, n) {
  let r = F.get(e);
  F = new Map(F), F.set(e, t), fe.emit(`groupChange`, {
    group: e,
    isUserInteraction: n?.isUserInteraction === !0,
    prev: r,
    next: t
  });
}
function he(e) {
  let t = A(),
    n = L(),
    r = !1;
  return t.state === `active` && (M({
    cursorFlags: 0,
    state: `inactive`
  }), t.hitRegions.length > 0 && (P(e), r = !0, t.hitRegions.forEach(e => {
    if (!n.has(e.group)) return;
    let t = I(e.group.id, !0);
    z(e.group, t, {
      isUserInteraction: !0
    });
  }))), r;
}
function ge(e) {
  e.defaultPrevented || he(e.currentTarget);
}
function _e(e, t, n) {
  let r,
    i = {
      x: 1 / 0,
      y: 1 / 0
    };
  for (let a of t) {
    let t = S(n, a.rect);
    switch (e) {
      case `horizontal`:
        t.x <= i.x && (r = a, i = t);
        break;
      case `vertical`:
        t.y <= i.y && (r = a, i = t);
    }
  }
  return r ? {
    distance: i,
    hitRegion: r
  } : void 0;
}
function ve(e) {
  return typeof e == `object` && !!e && `nodeType` in e && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
}
function ye(e, t) {
  if (e === t) throw Error(`Cannot compare node with itself`);
  let n = {
      a: Te(e),
      b: Te(t)
    },
    r;
  for (; n.a.at(-1) === n.b.at(-1);) r = n.a.pop(), n.b.pop();
  _(r, `Stacking order can only be calculated for elements with a common ancestor`);
  let i = {
    a: we(Ce(n.a)),
    b: we(Ce(n.b))
  };
  if (i.a === i.b) {
    let e = r.childNodes,
      t = {
        a: n.a.at(-1),
        b: n.b.at(-1)
      },
      i = e.length;
    for (; i--;) {
      let n = e[i];
      if (n === t.a) return 1;
      if (n === t.b) return -1;
    }
  }
  return Math.sign(i.a - i.b);
}
var be = /\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;
function xe(e) {
  let t = getComputedStyle(Ee(e) ?? e).display;
  return t === `flex` || t === `inline-flex`;
}
function Se(e) {
  let t = getComputedStyle(e);
  return !!(t.position === `fixed` || t.zIndex !== `auto` && (t.position !== `static` || xe(e)) || +t.opacity < 1 || `transform` in t && t.transform !== `none` || `webkitTransform` in t && t.webkitTransform !== `none` || `mixBlendMode` in t && t.mixBlendMode !== `normal` || `filter` in t && t.filter !== `none` || `webkitFilter` in t && t.webkitFilter !== `none` || `isolation` in t && t.isolation === `isolate` || be.test(t.willChange) || t.webkitOverflowScrolling === `touch`);
}
function Ce(e) {
  let t = e.length;
  for (; t--;) {
    let n = e[t];
    if (_(n, `Missing node`), Se(n)) return n;
  }
  return null;
}
function we(e) {
  return e && Number(getComputedStyle(e).zIndex) || 0;
}
function Te(e) {
  let t = [];
  for (; e;) t.push(e), e = Ee(e);
  return t;
}
function Ee(e) {
  let {
    parentNode: t
  } = e;
  return ve(t) ? t.host : t;
}
function De(e, t) {
  return e.x < t.x + t.width && e.x + e.width > t.x && e.y < t.y + t.height && e.y + e.height > t.y;
}
function Oe({
  groupElement: e,
  hitRegion: t,
  pointerEventTarget: n
}) {
  if (!x(n) || n.contains(e) || e.contains(n)) return !0;
  if (ye(n, e) > 0) {
    let r = n;
    for (; r;) {
      if (r.contains(e)) return !0;
      if (De(r.getBoundingClientRect(), t)) return !1;
      r = r.parentElement;
    }
  }
  return !0;
}
function B(e, t) {
  let n = [];
  return t.forEach((t, r) => {
    if (r.disabled) return;
    let i = E(r),
      a = _e(r.orientation, i, {
        x: e.clientX,
        y: e.clientY
      });
    a && a.distance.x <= 0 && a.distance.y <= 0 && Oe({
      groupElement: r.element,
      hitRegion: a.hitRegion.rect,
      pointerEventTarget: e.target
    }) && n.push(a.hitRegion);
  }), n;
}
function ke(e, t) {
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n++) if (e[n] != t[n]) return !1;
  return !0;
}
function V(e, t, n = 0) {
  return Math.abs(m(e) - m(t)) <= n;
}
function H(e, t) {
  return V(e, t) ? 0 : e > t ? 1 : -1;
}
function U({
  overrideDisabledPanels: e,
  panelConstraints: t,
  prevSize: n,
  size: r
}) {
  let {
    collapsedSize: i = 0,
    collapsible: a,
    disabled: o,
    maxSize: s = 100,
    minSize: c = 0
  } = t;
  if (o && !e) return n;
  if (H(r, c) < 0) {
    if (a) {
      let e = (i + c) / 2;
      r = H(r, e) < 0 ? i : c;
    } else r = c;
  }
  return r = Math.min(s, r), r = m(r), r;
}
function W({
  delta: e,
  initialLayout: t,
  panelConstraints: n,
  pivotIndices: r,
  prevLayout: i,
  trigger: a
}) {
  if (V(e, 0)) return t;
  let o = a === `imperative-api`,
    s = Object.values(t),
    c = Object.values(i),
    l = [...s],
    [u, d] = r;
  _(u != null, `Invalid first pivot index`), _(d != null, `Invalid second pivot index`);
  let f = 0;
  switch (a) {
    case `keyboard`:
      {
        let t = e < 0 ? d : u,
          r = n[t];
        _(r, `Panel constraints not found for index ${t}`);
        let {
          collapsedSize: i = 0,
          collapsible: a,
          minSize: o = 0
        } = r;
        if (a) {
          let n = s[t];
          if (_(n != null, `Previous layout not found for panel index ${t}`), V(n, i)) {
            let t = o - n;
            H(t, Math.abs(e)) > 0 && (e = e < 0 ? 0 - t : t);
          }
        }
      }
      {
        let t = e < 0 ? u : d,
          r = n[t];
        _(r, `No panel constraints found for index ${t}`);
        let {
          collapsedSize: i = 0,
          collapsible: a,
          minSize: o = 0
        } = r;
        if (a) {
          let n = s[t];
          if (_(n != null, `Previous layout not found for panel index ${t}`), V(n, o)) {
            let t = n - i;
            H(t, Math.abs(e)) > 0 && (e = e < 0 ? 0 - t : t);
          }
        }
      }
      break;
    default:
      {
        let t = e < 0 ? d : u,
          r = n[t];
        _(r, `Panel constraints not found for index ${t}`);
        let i = s[t],
          {
            collapsible: a,
            collapsedSize: o,
            minSize: c
          } = r;
        if (a && H(i, c) < 0) {
          if (e > 0) {
            let t = c - o,
              n = t / 2;
            H(i + e, c) < 0 && (e = H(e, n) <= 0 ? 0 : t);
          } else {
            let t = c - o,
              n = 100 - t / 2;
            H(i - e, c) < 0 && (e = H(100 + e, n) > 0 ? 0 : -t);
          }
        }
        break;
      }
  }
  {
    let t = e < 0 ? 1 : -1,
      r = e < 0 ? d : u,
      i = 0;
    for (;;) {
      let e = s[r];
      _(e != null, `Previous layout not found for panel index ${r}`);
      let a = U({
        overrideDisabledPanels: o,
        panelConstraints: n[r],
        prevSize: e,
        size: 100
      }) - e;
      if (i += a, r += t, r < 0 || r >= n.length) break;
    }
    let a = Math.min(Math.abs(e), Math.abs(i));
    e = e < 0 ? 0 - a : a;
  }
  {
    let t = e < 0 ? u : d;
    for (; t >= 0 && t < n.length;) {
      let r = Math.abs(e) - Math.abs(f),
        i = s[t];
      _(i != null, `Previous layout not found for panel index ${t}`);
      let a = i - r,
        c = U({
          overrideDisabledPanels: o,
          panelConstraints: n[t],
          prevSize: i,
          size: a
        });
      if (!V(i, c) && (f += i - c, l[t] = c, f.toFixed(3).localeCompare(Math.abs(e).toFixed(3), void 0, {
        numeric: !0
      }) >= 0)) break;
      e < 0 ? t-- : t++;
    }
  }
  if (ke(c, l)) return i;
  {
    let t = e < 0 ? d : u,
      r = s[t];
    _(r != null, `Previous layout not found for panel index ${t}`);
    let i = r + f,
      a = U({
        overrideDisabledPanels: o,
        panelConstraints: n[t],
        prevSize: r,
        size: i
      });
    if (l[t] = a, !V(a, i)) {
      let t = i - a,
        r = e < 0 ? d : u;
      for (; r >= 0 && r < n.length;) {
        let i = l[r];
        _(i != null, `Previous layout not found for panel index ${r}`);
        let a = i + t,
          s = U({
            overrideDisabledPanels: o,
            panelConstraints: n[r],
            prevSize: i,
            size: a
          });
        if (V(i, s) || (t -= s - i, l[r] = s), V(t, 0)) break;
        e > 0 ? r-- : r++;
      }
    }
  }
  if (!V(Object.values(l).reduce((e, t) => t + e, 0), 100, .1)) return i;
  let p = Object.keys(i);
  return l.reduce((e, t, n) => (e[p[n]] = t, e), {});
}
function G(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (let n in e) if (t[n] === void 0 || H(e[n], t[n]) !== 0) return !1;
  return !0;
}
function K({
  layout: e,
  panelConstraints: t
}) {
  let n = Object.values(e),
    r = [...n],
    i = r.reduce((e, t) => e + t, 0);
  if (r.length !== t.length) throw Error(`Invalid ${t.length} panel layout: ${r.map(e => `${e}%`).join(`, `)}`);
  if (!V(i, 100) && r.length > 0) for (let e = 0; e < t.length; e++) {
    let t = r[e];
    _(t != null, `No layout data found for index ${e}`);
    let n = 100 / i * t;
    r[e] = n;
  }
  let a = 0;
  for (let e = 0; e < t.length; e++) {
    let i = n[e];
    _(i != null, `No layout data found for index ${e}`);
    let o = r[e];
    _(o != null, `No layout data found for index ${e}`);
    let s = U({
      overrideDisabledPanels: !0,
      panelConstraints: t[e],
      prevSize: i,
      size: o
    });
    o != s && (a += o - s, r[e] = s);
  }
  if (!V(a, 0)) for (let e = 0; e < t.length; e++) {
    let n = r[e];
    _(n != null, `No layout data found for index ${e}`);
    let i = n + a,
      o = U({
        overrideDisabledPanels: !0,
        panelConstraints: t[e],
        prevSize: n,
        size: i
      });
    if (n !== o && (a -= o - n, r[e] = o, V(a, 0))) break;
  }
  let o = Object.keys(e);
  return r.reduce((e, t, n) => (e[o[n]] = t, e), {});
}
function Ae({
  groupId: e,
  panelId: t
}) {
  let n = () => {
      let t = L();
      for (let [n, {
        defaultLayoutDeferred: r,
        derivedPanelConstraints: i,
        layout: a,
        groupSize: o,
        separatorToPanels: s
      }] of t) if (n.id === e) return {
        defaultLayoutDeferred: r,
        derivedPanelConstraints: i,
        group: n,
        groupSize: o,
        layout: a,
        separatorToPanels: s
      };
      throw Error(`Group ${e} not found`);
    },
    r = () => {
      let e = n().derivedPanelConstraints.find(e => e.panelId === t);
      if (e !== void 0) return e;
      throw Error(`Panel constraints not found for Panel ${t}`);
    },
    i = () => {
      let e = n().group.panels.find(e => e.id === t);
      if (e !== void 0) return e;
      throw Error(`Layout not found for Panel ${t}`);
    },
    a = () => {
      let e = n().layout[t];
      if (e !== void 0) return e;
      throw Error(`Layout not found for Panel ${t}`);
    },
    o = ({
      nextSize: e,
      panels: n,
      prevLayout: r,
      derivedPanelConstraints: i
    }) => {
      let o = a(),
        s = n.findIndex(e => e.id === t),
        c = s === 0,
        l = s === n.length - 1;
      if (l && e < o && (c || n.slice(0, s).every((e, t) => {
        let n = i[t];
        return n?.collapsible && V(n.collapsedSize, r[n.panelId]);
      }))) {
        let e = n.slice(0, s).reduce((e, t) => e + r[t.id], 0);
        return {
          ...r,
          [t]: m(100 - e)
        };
      }
      return W({
        delta: l ? o - e : e - o,
        initialLayout: r,
        panelConstraints: i,
        pivotIndices: l ? [s - 1, s] : [s, s + 1],
        prevLayout: r,
        trigger: `imperative-api`
      });
    },
    s = e => {
      if (e === a()) return;
      let {
          defaultLayoutDeferred: t,
          derivedPanelConstraints: r,
          group: i,
          groupSize: s,
          layout: c,
          separatorToPanels: l
        } = n(),
        u = K({
          layout: o({
            nextSize: e,
            panels: i.panels,
            prevLayout: c,
            derivedPanelConstraints: r
          }),
          panelConstraints: r
        });
      G(c, u) || z(i, {
        defaultLayoutDeferred: t,
        derivedPanelConstraints: r,
        groupSize: s,
        layout: u,
        separatorToPanels: l
      });
    };
  return {
    collapse: () => {
      let {
          collapsible: e,
          collapsedSize: t
        } = r(),
        {
          mutableValues: n
        } = i(),
        o = a();
      e && o !== t && (n.expandToSize = o, s(t));
    },
    expand: () => {
      let {
          collapsible: e,
          collapsedSize: t,
          minSize: n
        } = r(),
        {
          mutableValues: o
        } = i(),
        c = a();
      if (e && c === t) {
        let e = o.expandToSize ?? n;
        e === 0 && (e = 1), s(e);
      }
    },
    getSize: () => {
      let {
          group: e
        } = n(),
        t = a(),
        {
          element: r
        } = i();
      return {
        asPercentage: t,
        inPixels: e.orientation === `horizontal` ? r.offsetWidth : r.offsetHeight
      };
    },
    isCollapsed: () => {
      let {
          collapsible: e,
          collapsedSize: t
        } = r(),
        n = a();
      return e && V(t, n);
    },
    resize: e => {
      let {
          group: t
        } = n(),
        {
          element: r
        } = i(),
        a = h({
          group: t
        }),
        o = m(p({
          groupSize: a,
          panelElement: r,
          styleProp: e
        }) / a * 100);
      s(o);
    }
  };
}
function je(e) {
  e.defaultPrevented || B(e, L()).forEach(t => {
    if (t.separator && !t.separator.disableDoubleClick) {
      let n = t.panels.find(e => e.panelConstraints.defaultSize !== void 0);
      if (n) {
        let r = n.panelConstraints.defaultSize,
          i = Ae({
            groupId: t.group.id,
            panelId: n.id
          });
        i && r !== void 0 && (i.resize(r), e.preventDefault());
      }
    }
  });
}
function q(e) {
  let t = L();
  for (let [n] of t) if (n.separators.some(t => t.element === e)) return n;
  throw Error(`Could not find parent Group for separator element`);
}
function Me({
  groupId: e
}) {
  let t = () => {
    let t = L();
    for (let [n, r] of t) if (n.id === e) return {
      group: n,
      ...r
    };
    throw Error(`Could not find Group with id "${e}"`);
  };
  return {
    getLayout() {
      let {
        defaultLayoutDeferred: e,
        layout: n
      } = t();
      return e ? {} : n;
    },
    setLayout(e) {
      let {
          defaultLayoutDeferred: n,
          derivedPanelConstraints: r,
          group: i,
          groupSize: a,
          layout: o,
          separatorToPanels: s
        } = t(),
        c = K({
          layout: e,
          panelConstraints: r
        });
      return n ? o : (G(o, c) || z(i, {
        defaultLayoutDeferred: n,
        derivedPanelConstraints: r,
        groupSize: a,
        layout: c,
        separatorToPanels: s
      }), c);
    }
  };
}
function J(e, t) {
  let n = q(e),
    r = I(n.id, !0),
    i = n.separators.find(t => t.element === e);
  _(i, `Matching separator not found`);
  let a = r.separatorToPanels.get(i);
  _(a, `Matching panels not found`);
  let o = a.map(e => n.panels.indexOf(e)),
    s = Me({
      groupId: n.id
    }).getLayout(),
    c = K({
      layout: W({
        delta: t,
        initialLayout: s,
        panelConstraints: r.derivedPanelConstraints,
        pivotIndices: o,
        prevLayout: s,
        trigger: `keyboard`
      }),
      panelConstraints: r.derivedPanelConstraints
    });
  G(s, c) || z(n, {
    defaultLayoutDeferred: r.defaultLayoutDeferred,
    derivedPanelConstraints: r.derivedPanelConstraints,
    groupSize: r.groupSize,
    layout: c,
    separatorToPanels: r.separatorToPanels
  }, {
    isUserInteraction: !0
  });
}
function Ne(e) {
  if (e.defaultPrevented) return;
  let t = e.currentTarget,
    n = q(t);
  if (!n.disabled) switch (e.key) {
    case `ArrowDown`:
      e.preventDefault(), n.orientation === `vertical` && J(t, 5);
      break;
    case `ArrowLeft`:
      e.preventDefault(), n.orientation === `horizontal` && J(t, -5);
      break;
    case `ArrowRight`:
      e.preventDefault(), n.orientation === `horizontal` && J(t, 5);
      break;
    case `ArrowUp`:
      e.preventDefault(), n.orientation === `vertical` && J(t, -5);
      break;
    case `End`:
      e.preventDefault(), J(t, 100);
      break;
    case `Enter`:
      {
        e.preventDefault();
        let n = q(t),
          {
            derivedPanelConstraints: r,
            layout: i,
            separatorToPanels: a
          } = I(n.id, !0),
          o = n.separators.find(e => e.element === t);
        _(o, `Matching separator not found`);
        let s = a.get(o);
        _(s, `Matching panels not found`);
        let c = s[0],
          l = r.find(e => e.panelId === c.id);
        if (_(l, `Panel metadata not found`), l.collapsible) {
          let e = i[c.id];
          J(t, (l.collapsedSize === e ? n.mutableState.expandedPanelSizes[c.id] ?? l.minSize : l.collapsedSize) - e);
        }
        break;
      }
    case `F6`:
      {
        e.preventDefault();
        let n = q(t).separators.map(e => e.element),
          r = Array.from(n).findIndex(t => t === e.currentTarget);
        _(r !== null, `Index not found`), n[e.shiftKey ? r > 0 ? r - 1 : n.length - 1 : r + 1 < n.length ? r + 1 : 0].focus({
          preventScroll: !0
        });
        break;
      }
    case `Home`:
      e.preventDefault(), J(t, -100);
      break;
  }
}
function Pe(e) {
  if (e.defaultPrevented || e.pointerType === `mouse` && e.button > 0) return;
  let t = L(),
    n = B(e, t),
    r = new Map(),
    i = !1;
  n.forEach(e => {
    e.separator && (i || (i = !0, e.separator.element.focus({
      focusVisible: !1,
      preventScroll: !0
    })));
    let n = t.get(e.group);
    n && r.set(e.group, n.layout);
  }), M({
    cursorFlags: 0,
    hitRegions: n,
    initialLayoutMap: r,
    pointerDownAtPoint: {
      x: e.clientX,
      y: e.clientY
    },
    state: `active`
  }), n.length && e.preventDefault();
}
function Fe({
  document: e,
  event: t,
  hitRegions: n,
  initialLayoutMap: r,
  mountedGroups: i,
  pointerDownAtPoint: a,
  prevCursorFlags: o
}) {
  let s = 0;
  n.forEach(e => {
    let {
        group: n,
        groupSize: o
      } = e,
      {
        orientation: c,
        panels: l
      } = n,
      {
        disableCursor: u
      } = n.mutableState,
      d = 0;
    d = a ? c === `horizontal` ? (t.clientX - a.x) / o * 100 : (t.clientY - a.y) / o * 100 : c === `horizontal` ? t.clientX < 0 ? -100 : 100 : t.clientY < 0 ? -100 : 100;
    let f = r.get(n),
      p = i.get(n);
    if (!f || !p) return;
    let {
      defaultLayoutDeferred: m,
      derivedPanelConstraints: h,
      groupSize: g,
      layout: _,
      separatorToPanels: v
    } = p;
    if (h && _ && v) {
      let t = W({
        delta: d,
        initialLayout: f,
        panelConstraints: h,
        pivotIndices: e.panels.map(e => l.indexOf(e)),
        prevLayout: _,
        trigger: `mouse-or-touch`
      });
      if (G(t, _)) {
        if (d !== 0 && !u) switch (c) {
          case `horizontal`:
            s |= d < 0 ? re : ie;
            break;
          case `vertical`:
            s |= d < 0 ? ae : oe;
            break;
        }
      } else z(e.group, {
        defaultLayoutDeferred: m,
        derivedPanelConstraints: h,
        groupSize: g,
        layout: t,
        separatorToPanels: v
      });
    }
  });
  let c = 0;
  t.movementX === 0 ? c |= o & se : c |= s & se, t.movementY === 0 ? c |= o & ce : c |= s & ce, ee(c), P(e);
}
function Ie(e) {
  let t = L(),
    n = A();
  n.state === `active` && Fe({
    document: e.currentTarget,
    event: e,
    hitRegions: n.hitRegions,
    initialLayoutMap: n.initialLayoutMap,
    mountedGroups: t,
    prevCursorFlags: n.cursorFlags
  });
}
function Le(e) {
  if (e.defaultPrevented) return;
  let t = A(),
    n = L();
  switch (t.state) {
    case `active`:
      if (e.buttons === 0) {
        M({
          cursorFlags: 0,
          state: `inactive`
        }), t.hitRegions.forEach(e => {
          if (!n.has(e.group)) return;
          let t = I(e.group.id, !0);
          z(e.group, t, {
            isUserInteraction: !0
          });
        });
        return;
      }
      for (let n of t.hitRegions) if (n.separator) {
        let {
          element: t
        } = n.separator;
        t.hasPointerCapture?.(e.pointerId) || t.setPointerCapture?.(e.pointerId);
      }
      Fe({
        document: e.currentTarget,
        event: e,
        hitRegions: t.hitRegions,
        initialLayoutMap: t.initialLayoutMap,
        mountedGroups: n,
        pointerDownAtPoint: t.pointerDownAtPoint,
        prevCursorFlags: t.cursorFlags
      });
      break;
    default:
      {
        let r = B(e, n);
        r.length === 0 ? t.state !== `inactive` && M({
          cursorFlags: 0,
          state: `inactive`
        }) : M({
          cursorFlags: 0,
          hitRegions: r,
          state: `hover`
        }), P(e.currentTarget);
        break;
      }
  }
}
function Re(e) {
  if (e.relatedTarget instanceof HTMLIFrameElement) switch (A().state) {
    case `hover`:
      M({
        cursorFlags: 0,
        state: `inactive`
      });
  }
}
function ze(e) {
  e.defaultPrevented || e.pointerType === `mouse` && e.button > 0 || he(e.currentTarget) && e.preventDefault();
}
function Be(e) {
  let t = 0,
    n = 0,
    r = {};
  for (let i of e) if (i.defaultSize !== void 0) {
    t++;
    let e = m(i.defaultSize);
    n += e, r[i.panelId] = e;
  } else r[i.panelId] = void 0;
  let i = e.length - t;
  if (i !== 0) {
    let t = m((100 - n) / i);
    for (let n of e) n.defaultSize === void 0 && (r[n.panelId] = t);
  }
  return r;
}
function Ve(e, t, n) {
  if (!n[0]) return;
  let r = e.panels.find(e => e.element === t);
  if (!r || !r.onResize) return;
  let i = h({
      group: e
    }),
    a = e.orientation === `horizontal` ? r.element.offsetWidth : r.element.offsetHeight,
    o = r.mutableValues.prevSize,
    s = {
      asPercentage: m(a / i * 100),
      inPixels: a
    };
  r.mutableValues.prevSize = s, r.onResize(s, r.id, o);
}
function He(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (let n in e) if (e[n] !== t[n]) return !1;
  return !0;
}
function Ue(e, t) {
  return e.length === t.length && e.every((e, n) => He(e, t[n]));
}
function We({
  group: e,
  nextGroupSize: t,
  prevGroupSize: n,
  prevLayout: r
}) {
  if (n <= 0 || t <= 0 || n === t) return r;
  let i = 0,
    a = 0,
    o = !1,
    s = new Map(),
    c = [];
  for (let l of e.panels) {
    let e = r[l.id] ?? 0;
    switch (l.panelConstraints.groupResizeBehavior) {
      case `preserve-pixel-size`:
        {
          o = !0;
          let r = m(e / 100 * n / t * 100);
          s.set(l.id, r), i += r;
          break;
        }
      default:
        c.push(l.id), a += e;
    }
  }
  if (!o || c.length === 0) return r;
  let l = 100 - i,
    u = {
      ...r
    };
  if (s.forEach((e, t) => {
    u[t] = e;
  }), a > 0) for (let e of c) u[e] = m((r[e] ?? 0) / a * l);else {
    let e = m(l / c.length);
    for (let t of c) u[t] = e;
  }
  return u;
}
function Ge(e, t) {
  let n = e.map(e => e.id),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (let e of n) if (!r.includes(e)) return !1;
  return !0;
}
var Y = new Map();
function Ke(e) {
  let t = !0;
  _(e.element.ownerDocument.defaultView, `Cannot register an unmounted Group`);
  let n = e.element.ownerDocument.defaultView.ResizeObserver,
    r = new Set(),
    i = new Set(),
    a = new n(n => {
      for (let r of n) {
        let {
          borderBoxSize: n,
          target: i
        } = r;
        if (i === e.element) {
          if (t) {
            let t = h({
              group: e
            });
            if (t === 0) return;
            let n = I(e.id);
            if (!n) return;
            let r = g(e),
              i = n.defaultLayoutDeferred ? Be(r) : n.layout,
              a = K({
                layout: We({
                  group: e,
                  nextGroupSize: t,
                  prevGroupSize: n.groupSize,
                  prevLayout: i
                }),
                panelConstraints: r
              });
            if (!n.defaultLayoutDeferred && G(n.layout, a) && Ue(n.derivedPanelConstraints, r) && n.groupSize === t) continue;
            z(e, {
              defaultLayoutDeferred: !1,
              derivedPanelConstraints: r,
              groupSize: t,
              layout: a,
              separatorToPanels: n.separatorToPanels
            });
          }
        } else Ve(e, i, n);
      }
    });
  a.observe(e.element), e.panels.forEach(e => {
    _(!r.has(e.id), `Panel ids must be unique; id "${e.id}" was used more than once`), r.add(e.id), e.onResize && a.observe(e.element);
  });
  let o = h({
      group: e
    }),
    s = g(e),
    c = e.panels.map(({
      id: e
    }) => e).join(`,`),
    l = e.mutableState.defaultLayout;
  l && (Ge(e.panels, l) || (l = void 0));
  let u = K({
      layout: e.mutableState.layouts[c] ?? l ?? Be(s),
      panelConstraints: s
    }),
    d = e.element.ownerDocument;
  Y.set(d, (Y.get(d) ?? 0) + 1);
  let f = new Map();
  return E(e).forEach(e => {
    e.separator && f.set(e.separator, e.panels);
  }), z(e, {
    defaultLayoutDeferred: o === 0,
    derivedPanelConstraints: s,
    groupSize: o,
    layout: u,
    separatorToPanels: f
  }), e.separators.forEach(e => {
    _(!i.has(e.id), `Separator ids must be unique; id "${e.id}" was used more than once`), i.add(e.id), e.element.addEventListener(`keydown`, Ne);
  }), Y.get(d) === 1 && (d.addEventListener(`contextmenu`, ge, !0), d.addEventListener(`dblclick`, je, !0), d.addEventListener(`pointerdown`, Pe, !0), d.addEventListener(`pointerleave`, Ie), d.addEventListener(`pointermove`, Le), d.addEventListener(`pointerout`, Re), d.addEventListener(`pointerup`, ze, !0)), function () {
    t = !1, Y.set(d, Math.max(0, (Y.get(d) ?? 0) - 1)), pe(e), e.separators.forEach(e => {
      e.element.removeEventListener(`keydown`, Ne);
    }), Y.get(d) || (d.removeEventListener(`contextmenu`, ge, !0), d.removeEventListener(`dblclick`, je, !0), d.removeEventListener(`pointerdown`, Pe, !0), d.removeEventListener(`pointerleave`, Ie), d.removeEventListener(`pointermove`, Le), d.removeEventListener(`pointerout`, Re), d.removeEventListener(`pointerup`, ze, !0)), a.disconnect();
  };
}
function qe() {
  let [e, t] = (0, s.useState)({});
  return [e, (0, s.useCallback)(() => t({}), [])];
}
function Je(e) {
  let t = (0, s.useId)();
  return `${e ?? t}`;
}
var X = typeof window < `u` ? s.useLayoutEffect : s.useEffect;
function Z(e) {
  let t = (0, s.useRef)(e);
  return X(() => {
    t.current = e;
  }, [e]), (0, s.useCallback)((...e) => t.current?.(...e), [t]);
}
function Ye(...e) {
  return Z(t => {
    e.forEach(e => {
      if (e) switch (typeof e) {
        case `function`:
          e(t);
          break;
        case `object`:
          e.current = t;
          break;
      }
    });
  });
}
function Xe(e) {
  let t = (0, s.useRef)({
    ...e
  });
  return X(() => {
    for (let n in e) t.current[n] = e[n];
  }, [e]), t.current;
}
var Ze = (0, s.createContext)(null);
function Qe(e, t) {
  let n = (0, s.useRef)({
    getLayout: () => ({}),
    setLayout: te
  });
  (0, s.useImperativeHandle)(t, () => n.current, []), X(() => {
    Object.assign(n.current, Me({
      groupId: e
    }));
  });
}
function Q({
  children: e,
  className: t,
  defaultLayout: n,
  disableCursor: r,
  disabled: i,
  elementRef: a,
  groupRef: c,
  id: l,
  onLayoutChange: u,
  onLayoutChanged: d,
  orientation: f = `horizontal`,
  resizeTargetMinimumSize: p = {
    coarse: 20,
    fine: 10
  },
  style: m,
  ...h
}) {
  let _ = (0, s.useRef)({
      onLayoutChange: {},
      onLayoutChanged: {}
    }),
    y = Z(e => {
      G(_.current.onLayoutChange, e) || (_.current.onLayoutChange = e, u?.(e));
    }),
    b = Z((e, t) => {
      G(_.current.onLayoutChanged, e) || (_.current.onLayoutChanged = e, d?.(e, {
        isUserInteraction: t
      }));
    }),
    x = Je(l),
    S = (0, s.useRef)(null),
    [C, w] = qe(),
    T = (0, s.useRef)({
      lastExpandedPanelSizes: {},
      layouts: {},
      panels: [],
      resizeTargetMinimumSize: p,
      separators: []
    }),
    E = Ye(S, a);
  Qe(x, c);
  let D = Z((e, t) => {
      let r = A(),
        i = me(e),
        a = I(e);
      if (a) {
        let e = !1;
        return r.state === `active` && (e = r.hitRegions.some(e => e.group === i)), {
          flexGrow: a.layout[t] ?? 1,
          pointerEvents: e ? `none` : void 0
        };
      }
      if (n?.[t]) return {
        flexGrow: n?.[t]
      };
    }),
    O = Xe({
      defaultLayout: n,
      disableCursor: r
    }),
    k = (0, s.useMemo)(() => ({
      get disableCursor() {
        return !!O.disableCursor;
      },
      getPanelStyles: D,
      id: x,
      orientation: f,
      registerPanel: e => {
        let t = T.current;
        return t.panels = v(f, [...t.panels, e]), w(), () => {
          t.panels = t.panels.filter(t => t !== e), w();
        };
      },
      registerSeparator: e => {
        let t = T.current;
        return t.separators = v(f, [...t.separators, e]), w(), () => {
          t.separators = t.separators.filter(t => t !== e), w();
        };
      },
      updatePanelProps: (e, {
        disabled: t
      }) => {
        let n = T.current.panels.find(t => t.id === e);
        n && (n.panelConstraints.disabled = t);
        let r = me(x),
          i = I(x);
        r && i && z(r, {
          ...i,
          derivedPanelConstraints: g(r)
        });
      },
      updateSeparatorProps: (e, {
        disabled: t,
        disableDoubleClick: n
      }) => {
        let r = T.current.separators.find(t => t.id === e);
        r && (r.disabled = t, r.disableDoubleClick = n);
      }
    }), [D, x, w, f, O]),
    j = (0, s.useRef)(null);
  return X(() => {
    let e = S.current;
    if (e === null) return;
    let t = T.current,
      n;
    if (O.defaultLayout !== void 0 && Object.keys(O.defaultLayout).length === t.panels.length) {
      n = {};
      for (let e of t.panels) {
        let t = O.defaultLayout[e.id];
        t !== void 0 && (n[e.id] = t);
      }
    }
    let r = {
      disabled: !!i,
      element: e,
      id: x,
      mutableState: {
        defaultLayout: n,
        disableCursor: !!O.disableCursor,
        expandedPanelSizes: T.current.lastExpandedPanelSizes,
        layouts: T.current.layouts
      },
      orientation: f,
      panels: t.panels,
      resizeTargetMinimumSize: t.resizeTargetMinimumSize,
      separators: t.separators
    };
    j.current = r;
    let a = Ke(r),
      {
        defaultLayoutDeferred: o,
        derivedPanelConstraints: s,
        layout: c
      } = I(r.id, !0);
    !o && s.length > 0 && (y(c), b(c, !1));
    let l = R(x, e => {
      let {
        defaultLayoutDeferred: t,
        derivedPanelConstraints: n,
        layout: i
      } = e.next;
      if (t || n.length === 0) return;
      let a = r.panels.map(({
        id: e
      }) => e).join(`,`);
      r.mutableState.layouts[a] = i, n.forEach(t => {
        if (t.collapsible) {
          let {
            layout: n
          } = e.prev ?? {};
          if (n) {
            let e = V(t.collapsedSize, i[t.panelId]),
              a = V(t.collapsedSize, n[t.panelId]);
            e && !a && (r.mutableState.expandedPanelSizes[t.panelId] = n[t.panelId]);
          }
        }
      });
      let o = A().state !== `active`;
      y(i), o && b(i, e.isUserInteraction);
    });
    return () => {
      j.current = null, a(), l();
    };
  }, [i, x, b, y, f, C, O]), (0, s.useEffect)(() => {
    let e = j.current;
    e && (e.mutableState.defaultLayout = n, e.mutableState.disableCursor = !!r);
  }), (0, o.jsx)(Ze.Provider, {
    value: k,
    children: <div {...h} className={t} data-group={!0} data-testid={x} id={x} ref={E} style={{
      height: `100%`,
      width: `100%`,
      overflow: `hidden`,
      ...m,
      display: `flex`,
      flexDirection: f === `horizontal` ? `row` : `column`,
      flexWrap: `nowrap`,
      touchAction: f === `horizontal` ? `pan-y` : `pan-x`
    }}>{e}</div>
  });
}
Q.displayName = `Group`;
function $(e, t) {
  return `react-resizable-panels:${[e, ...t].join(`:`)}`;
}
function $e({
  id: e,
  panelIds: t,
  storage: n
}) {
  let r = $(e, []),
    i = n.getItem(r);
  if (i) try {
    let e = JSON.parse(i);
    if (t) {
      let n = e[t.join(`,`)];
      if (n && Array.isArray(n.layout) && t.length === n.layout.length) {
        let e = {};
        for (let r = 0; r < t.length; r++) e[t[r]] = n.layout[r];
        return e;
      }
    } else {
      let t = Object.keys(e);
      if (t.length === 1) {
        let n = e[t[0]];
        if (n && Array.isArray(n.layout)) {
          let e = t[0].split(`,`);
          if (e.length === n.layout.length) {
            let t = {};
            for (let r = 0; r < e.length; r++) t[e[r]] = n.layout[r];
            return t;
          }
        }
      }
    }
  } catch {}
}
function et({
  debounceSaveMs: e = 100,
  onlySaveAfterUserInteractions: t,
  panelIds: n,
  storage: r = localStorage,
  ...i
}) {
  let a = n !== void 0,
    o = `id` in i ? i.id : i.groupId,
    c = $(o, n ?? []),
    l = (0, s.useSyncExternalStore)(tt, () => r.getItem(c), () => r.getItem(c)),
    u = (0, s.useMemo)(() => {
      if (l) {
        let e = JSON.parse(l),
          t = Object.values(e);
        if (Array.from(t).every(e => typeof e == `number`)) return e;
      }
    }, [l]),
    d = (0, s.useMemo)(() => {
      if (!u) return $e({
        id: o,
        panelIds: n,
        storage: r
      });
    }, [u, o, n, r]),
    f = u ?? d,
    p = (0, s.useRef)(null),
    m = (0, s.useCallback)(() => {
      let e = p.current;
      e && (p.current = null, clearTimeout(e));
    }, []);
  (0, s.useLayoutEffect)(() => () => {
    m();
  }, [m]);
  let h = (0, s.useCallback)((e, n) => {
    if (t && !n.isUserInteraction) return;
    m();
    let i;
    i = a ? $(o, Object.keys(e)) : $(o, []);
    try {
      r.setItem(i, JSON.stringify(e));
    } catch (e) {
      console.error(e);
    }
  }, [m, a, o, t, r]);
  return {
    defaultLayout: f,
    onLayoutChange: (0, s.useCallback)(t => {
      m(), e === 0 ? h(t, {
        isUserInteraction: !1
      }) : p.current = setTimeout(() => {
        h(t, {
          isUserInteraction: !1
        });
      }, e);
    }, [m, e, h]),
    onLayoutChanged: h
  };
}
function tt() {
  return function () {};
}
function nt() {
  return (0, s.useState)(null);
}
function rt() {
  return (0, s.useRef)(null);
}
function it() {
  let e = (0, s.useContext)(Ze);
  return _(e, `Group Context not found; did you render a Panel or Separator outside of a Group?`), e;
}
function at(e, t) {
  let {
      id: n
    } = it(),
    r = (0, s.useRef)({
      collapse: ne,
      expand: ne,
      getSize: () => ({
        asPercentage: 0,
        inPixels: 0
      }),
      isCollapsed: () => !1,
      resize: ne
    });
  (0, s.useImperativeHandle)(t, () => r.current, []), X(() => {
    Object.assign(r.current, Ae({
      groupId: n,
      panelId: e
    }));
  });
}
function ot({
  children: e,
  className: t,
  collapsedSize: n = `0%`,
  collapsible: r = !1,
  defaultSize: i,
  disabled: a,
  elementRef: c,
  groupResizeBehavior: l = `preserve-relative-size`,
  id: u,
  maxSize: d = `100%`,
  minSize: f = `0%`,
  onResize: p,
  panelRef: m,
  style: h,
  ...g
}) {
  let _ = !!u,
    v = Je(u),
    y = Xe({
      disabled: a
    }),
    b = (0, s.useRef)(null),
    x = Ye(b, c),
    {
      getPanelStyles: S,
      id: C,
      orientation: w,
      registerPanel: T,
      updatePanelProps: E
    } = it(),
    D = p !== null,
    O = Z((e, t, n) => {
      p?.(e, u, n);
    });
  X(() => {
    let e = b.current;
    if (e !== null) {
      let t = {
        element: e,
        id: v,
        idIsStable: _,
        mutableValues: {
          expandToSize: void 0,
          prevSize: void 0
        },
        onResize: D ? O : void 0,
        panelConstraints: {
          groupResizeBehavior: l,
          collapsedSize: n,
          collapsible: r,
          defaultSize: i,
          disabled: y.disabled,
          maxSize: d,
          minSize: f
        }
      };
      return T(t);
    }
  }, [l, n, r, i, D, v, _, d, f, O, T, y]), (0, s.useEffect)(() => {
    E(v, {
      disabled: a
    });
  }, [a, v, E]), at(v, m);
  let k = () => {
      let e = S(C, v);
      if (e) return JSON.stringify(e);
    },
    A = (0, s.useSyncExternalStore)(e => R(C, e), k, k),
    j;
  return j = A ? JSON.parse(A) : i === void 0 ? {
    flexGrow: 1
  } : {
    flexGrow: void 0,
    flexShrink: void 0,
    flexBasis: i
  }, <div {...g} data-disabled={a || void 0} data-panel={!0} data-testid={v} id={v} ref={x} style={{
    ...st,
    display: `flex`,
    flexBasis: 0,
    flexShrink: 1,
    overflow: `visible`,
    ...j
  }}>{<div className={t} style={{
      maxHeight: `100%`,
      maxWidth: `100%`,
      flexGrow: 1,
      overflow: `auto`,
      ...h,
      touchAction: w === `horizontal` ? `pan-y` : `pan-x`
    }}>{e}</div>}</div>;
}
ot.displayName = `Panel`;
var st = {
  minHeight: 0,
  maxHeight: `100%`,
  height: `auto`,
  minWidth: 0,
  maxWidth: `100%`,
  width: `auto`,
  border: `none`,
  borderWidth: 0,
  padding: 0,
  margin: 0
};
function ct() {
  return (0, s.useState)(null);
}
function lt() {
  return (0, s.useRef)(null);
}
function ut({
  layout: e,
  panelConstraints: t,
  panelId: n,
  panelIndex: r
}) {
  let i,
    a,
    o = e[n],
    s = t.find(e => e.panelId === n);
  if (s) {
    let c = s.maxSize,
      l = s.collapsible ? s.collapsedSize : s.minSize,
      u = [r, r + 1];
    a = K({
      layout: W({
        delta: l - o,
        initialLayout: e,
        panelConstraints: t,
        pivotIndices: u,
        prevLayout: e
      }),
      panelConstraints: t
    })[n], i = K({
      layout: W({
        delta: c - o,
        initialLayout: e,
        panelConstraints: t,
        pivotIndices: u,
        prevLayout: e
      }),
      panelConstraints: t
    })[n];
  }
  return {
    valueControls: n,
    valueMax: i,
    valueMin: a,
    valueNow: o
  };
}
function dt({
  children: e,
  className: t,
  disabled: n,
  disableDoubleClick: r,
  elementRef: i,
  id: a,
  style: c,
  ...l
}) {
  let u = Je(a),
    d = Xe({
      disabled: n,
      disableDoubleClick: r
    }),
    [f, p] = (0, s.useState)({}),
    [m, h] = (0, s.useState)(`inactive`),
    [g, _] = (0, s.useState)(!1),
    v = (0, s.useRef)(null),
    y = Ye(v, i),
    {
      disableCursor: b,
      id: x,
      orientation: S,
      registerSeparator: C,
      updateSeparatorProps: w
    } = it(),
    T = S === `horizontal` ? `vertical` : `horizontal`;
  X(() => {
    let e = v.current;
    if (e !== null) {
      let t = {
          disabled: d.disabled,
          disableDoubleClick: d.disableDoubleClick,
          element: e,
          id: u
        },
        n = C(t),
        r = j(e => {
          h(e.next.state !== `inactive` && e.next.hitRegions.some(e => e.separator === t) ? e.next.state : `inactive`);
        }),
        i = R(x, e => {
          let {
              derivedPanelConstraints: n,
              layout: r,
              separatorToPanels: i
            } = e.next,
            a = i.get(t);
          if (a) {
            let e = a[0],
              t = a.indexOf(e);
            p(ut({
              layout: r,
              panelConstraints: n,
              panelId: e.id,
              panelIndex: t
            }));
          }
        });
      return () => {
        r(), i(), n();
      };
    }
  }, [x, u, C, d]), (0, s.useEffect)(() => {
    w(u, {
      disabled: n,
      disableDoubleClick: r
    });
  }, [n, r, u, w]);
  let E;
  n && !b && (E = `not-allowed`);
  let D;
  if (n) D = `disabled`;else switch (m) {
    case `active`:
      D = `active`;
      break;
    default:
      D = g ? `focus` : m;
  }
  return <div {...l} aria-controls={f.valueControls} aria-disabled={n || void 0} aria-orientation={T} aria-valuemax={f.valueMax} aria-valuemin={f.valueMin} aria-valuenow={f.valueNow} className={t} data-separator={D} data-testid={u} id={u} onBlur={() => _(!1)} onFocus={() => _(!0)} ref={y} role={`separator`} style={{
    flexBasis: `auto`,
    cursor: E,
    ...c,
    flexGrow: 0,
    flexShrink: 0,
    touchAction: `none`
  }} tabIndex={n ? void 0 : 0}>{e}</div>;
}
dt.displayName = `Separator`;
var ft = t({
  ResizableHandle: () => ht,
  ResizablePanel: () => mt,
  ResizablePanelGroup: () => pt
});
function pt({
  className: e,
  ...t
}) {
  return (0, o.jsx)(Q, {
    "data-slot": `resizable-panel-group`,
    className: i(`flex h-full w-full aria-[orientation=vertical]:flex-col`, e),
    ...t
  });
}
function mt({
  ...e
}) {
  return (0, o.jsx)(ot, {
    "data-slot": `resizable-panel`,
    ...e
  });
}
function ht({
  withHandle: e,
  className: t,
  ...n
}) {
  return (0, o.jsx)(dt, {
    "data-slot": `resizable-handle`,
    className: i(`relative flex w-px items-center justify-center bg-border ring-offset-background transition-ring after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-hidden aria-[orientation=horizontal]:h-px aria-[orientation=horizontal]:w-full aria-[orientation=horizontal]:after:left-0 aria-[orientation=horizontal]:after:h-1 aria-[orientation=horizontal]:after:w-full aria-[orientation=horizontal]:after:translate-x-0 aria-[orientation=horizontal]:after:-translate-y-1/2 [&[aria-orientation=horizontal]>div]:rotate-90`, t),
    ...n,
    children: e && <div className={`z-10 flex h-6 w-1 shrink-0 rounded-lg bg-border`} />
  });
}
var gt = t({
    nextStop: () => vt,
    snapsFor: () => _t
  }),
  _t = e => {
    let t = Math.round(100 / e);
    return Array.from({
      length: t - 1
    }, (e, n) => (n + 1) * 100 / t);
  },
  vt = (e, t) => {
    let n = _t(t || 25);
    return n.find(t => t > e + .5) ?? n[0];
  };
export { a, ft as i, gt as n, rt as o, _t as r, vt as t };

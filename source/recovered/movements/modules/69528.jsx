// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module45032 from "./45032.js";
import * as _module23286 from "./23286.js";
import * as _module38783 from "./38783.js";
import * as _module71955 from "./71955.js";
import * as _module67459 from "./67459.js";
import * as _module31908 from "./jsx-runtime-31908.js";
var t = _module45032,
  r = _module23286,
  n = _module38783,
  i = _module71955,
  o = _module67459,
  s = _module31908;
function a() {
  return new Map();
}
function l() {
  return new Set();
}
function u(e, t) {
  return e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
}
const _export_CompositeList = function (e) {
  let {
      children: c,
      elementsRef: f,
      labelsRef: d,
      onMapChange: p
    } = e,
    g = (0, n.useStableCallback)(p),
    [, h] = t.useState(!1),
    m = (0, r.useRefWithInit)(l).current,
    b = (0, r.useRefWithInit)(a).current,
    v = t.useRef(0),
    y = t.useRef(!0),
    E = t.useRef([]),
    w = t.useRef(null),
    R = (0, n.useStableCallback)(() => {
      y.current || (y.current = !0, h(e => !e));
    }),
    x = (0, n.useStableCallback)((e, t) => {
      b.set(e, t), R();
    }),
    P = (0, n.useStableCallback)(e => {
      b.delete(e), R();
    }),
    C = (0, n.useStableCallback)(e => {
      let t = new Map();
      return f.current.length = 0, d && (d.current.length = 0), e.forEach(e => {
        t.set(e.element, {
          ...(e.registration.metadata ?? {}),
          index: e.index
        }), f.current[e.index] = e.element, d && (d.current[e.index] = void 0 !== e.registration.label ? e.registration.label : e.registration.textRef?.current?.textContent ?? e.element.textContent);
      }), v.current = f.current.length, t;
    }),
    k = (0, n.useStableCallback)(() => {
      var e;
      let t,
        r,
        n,
        i,
        [o, s] = (e = b, t = new Set(), r = [], n = [], e.forEach((e, i) => {
          if (!i.isConnected) return;
          let o = e.index,
            s = {
              index: o ?? -1,
              element: i,
              registration: e
            };
          null === o ? n.push(s) : o >= 0 && (t.add(o), r.push(s));
        }), i = 0, n.sort((e, t) => u(e.element, t.element)), n.forEach(e => {
          for (; t.has(i);) i += 1;
          e.index = i, r.push(e), i += 1;
        }), t.size > 0 && r.sort((e, t) => e.index - t.index), [r, n.map(e => e.element)]),
        a = C(o);
      !function (e) {
        if (w.current?.disconnect(), w.current = null, "function" != typeof MutationObserver || e.length < 2) return;
        let t = new MutationObserver(r => {
          if (!function (e) {
            for (let t of e) for (let e = 0; e < t.removedNodes.length; e += 1) if (t.removedNodes[e].isConnected) return !0;
            return !1;
          }(r)) return;
          let n = null;
          for (let r of e) if (r.isConnected) {
            if (n && u(n, r) > 0) {
              t.disconnect(), R();
              return;
            }
            n = r;
          }
        });
        w.current = t;
        let r = new Set();
        for (let t = 1; t < e.length; t += 1) {
          let n = function (e, t) {
            let r = e.parentElement;
            for (; r && !r.contains(t);) r = r.parentElement;
            return r;
          }(e[t - 1], e[t]);
          n && r.add(n);
        }
        r.forEach(e => t.observe(e, {
          childList: !0
        }));
      }(s), E.current = o, y.current = !1, m.forEach(e => e(a)), g(a);
    });
  (0, i.useIsoLayoutEffect)(() => (y.current || C(E.current), () => {
    f.current = [], d && (d.current = []);
  }), [f, d, C]), (0, i.useIsoLayoutEffect)(() => {
    y.current && k();
  }), (0, i.useIsoLayoutEffect)(() => () => {
    w.current?.disconnect(), y.current = !0;
  }, []);
  let T = (0, n.useStableCallback)(e => (m.add(e), () => {
      m.delete(e);
    })),
    I = t.useMemo(() => ({
      register: x,
      unregister: P,
      subscribeMapChange: T,
      nextIndexRef: v
    }), [x, P, T, v]);
  return (0, s.jsx)(o.CompositeListContext.Provider, {
    value: I,
    children: c
  });
};
export { _export_CompositeList as CompositeList };

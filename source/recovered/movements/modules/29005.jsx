// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module39958 from "./39958.js";
var t = _module39958;
let r = {};
function n(e) {
  return s(e) ? {
    ...a(e, r)
  } : function (e) {
    let t = {
      ...e
    };
    for (let e in t) {
      let r = t[e];
      o(e, r) && (t[e] = l(r));
    }
    return t;
  }(e);
}
function i(e, r) {
  return s(r) ? a(r, e) : function (e, r) {
    if (!r) return e;
    for (let n in r) {
      let i = r[n];
      switch (n) {
        case "style":
          e[n] = (0, t.mergeObjects)(e.style, i);
          break;
        case "className":
          e[n] = c(e.className, i);
          break;
        default:
          o(n, i) ? e[n] = function (e, t) {
            return t ? e ? (...r) => {
              let n = r[0];
              if (f(n)) {
                u(n);
                let i = t(...r);
                return n.baseUIHandlerPrevented || e?.(...r), i;
              }
              let i = t(...r);
              return e?.(...r), i;
            } : l(t) : e;
          }(e[n], i) : e[n] = i;
      }
    }
    return e;
  }(e, r);
}
function o(e, t) {
  let r = e.charCodeAt(0),
    n = e.charCodeAt(1),
    i = e.charCodeAt(2);
  return 111 === r && 110 === n && i >= 65 && i <= 90 && ("function" == typeof t || void 0 === t);
}
function s(e) {
  return "function" == typeof e;
}
function a(e, t) {
  return s(e) ? e(t) : e ?? r;
}
function l(e) {
  return e ? (...t) => {
    let r = t[0];
    return f(r) && u(r), e(...t);
  } : e;
}
function u(e) {
  return e.preventBaseUIHandler = () => {
    e.baseUIHandlerPrevented = !0;
  }, e;
}
function c(e, t) {
  return t ? e ? t + " " + e : t : e;
}
function f(e) {
  return null != e && "object" == typeof e && "nativeEvent" in e;
}
const _export_makeEventPreventable = u;
const _export_mergeClassNames = c;
const _export_mergeProps = function (e, t, r, o, s) {
  if (!r && !o && !s && !e) return n(t);
  let a = n(e);
  return t && (a = i(a, t)), r && (a = i(a, r)), o && (a = i(a, o)), s && (a = i(a, s)), a;
};
const _export_mergePropsN = function (e) {
  if (0 === e.length) return r;
  if (1 === e.length) return n(e[0]);
  let t = n(e[0]);
  for (let r = 1; r < e.length; r += 1) t = i(t, e[r]);
  return t;
};
export { _export_makeEventPreventable as makeEventPreventable, _export_mergeClassNames as mergeClassNames, _export_mergeProps as mergeProps, _export_mergePropsN as mergePropsN };

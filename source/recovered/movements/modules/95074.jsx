// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module45032 from "./45032.js";
var t = _module45032;
let n = e => {
    let t,
      n = new Set(),
      r = (e, r) => {
        let a = "function" == typeof e ? e(t) : e;
        if (!Object.is(a, t)) {
          let e = t;
          t = (null != r ? r : "object" != typeof a || null === a) ? a : Object.assign({}, t, a), n.forEach(n => n(t, e));
        }
      },
      a = () => t,
      i = {
        setState: r,
        getState: a,
        getInitialState: () => o,
        subscribe: e => (n.add(e), () => n.delete(e))
      },
      o = t = e(r, a, i);
    return i;
  },
  r = e => {
    let r = e ? n(e) : n,
      a = e => function (e, n = e => e) {
        let r = t.default.useSyncExternalStore(e.subscribe, t.default.useCallback(() => n(e.getState()), [e, n]), t.default.useCallback(() => n(e.getInitialState()), [e, n]));
        return t.default.useDebugValue(r), r;
      }(r, e);
    return Object.assign(a, r), a;
  },
  a = e => e ? r(e) : r;
let i = a(e => ({
  dark: !1,
  setDark: t => e({
    dark: t
  }),
  toggle: () => e(e => ({
    dark: !e.dark
  }))
}));
const _export_useThemeStore = i;
export { _export_useThemeStore as useThemeStore };

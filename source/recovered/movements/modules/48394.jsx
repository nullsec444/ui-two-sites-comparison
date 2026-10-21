// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module23286 from "./23286.js";
var t = _module23286;
function r() {
  return {
    callback: null,
    cleanup: null,
    refs: []
  };
}
function n(e, t) {
  if (e.refs = t, t.every(e => null == e)) {
    e.callback = null;
    return;
  }
  e.callback = r => {
    if (e.cleanup && (e.cleanup(), e.cleanup = null), null != r) {
      let n = Array(t.length).fill(null);
      for (let e = 0; e < t.length; e += 1) {
        let i = t[e];
        if (null != i) switch (typeof i) {
          case "function":
            {
              let t = i(r);
              "function" == typeof t && (n[e] = t);
              break;
            }
          case "object":
            i.current = r;
        }
      }
      e.cleanup = () => {
        for (let e = 0; e < t.length; e += 1) {
          let r = t[e];
          if (null != r) switch (typeof r) {
            case "function":
              {
                let t = n[e];
                "function" == typeof t ? t() : r(null);
                break;
              }
            case "object":
              r.current = null;
          }
        }
      };
    }
  };
}
const _export_useMergedRefs = function (e, i, o, s) {
  var a, l, u, c, f;
  let d = (0, t.useRefWithInit)(r).current;
  return a = d, l = e, u = i, c = o, f = s, (a.refs[0] !== l || a.refs[1] !== u || a.refs[2] !== c || a.refs[3] !== f) && n(d, [e, i, o, s]), d.callback;
};
const _export_useMergedRefsN = function (e) {
  var i, o;
  let s = (0, t.useRefWithInit)(r).current;
  return i = s, o = e, (i.refs.length !== o.length || i.refs.some((e, t) => e !== o[t])) && n(s, e), s.callback;
};
export { _export_useMergedRefs as useMergedRefs, _export_useMergedRefsN as useMergedRefsN };

// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module45032 from "./45032.js";
import * as _module71955 from "./71955.js";
import * as _module3737 from "./3737.js";
var t = _module45032,
  l = _module71955,
  d = _module3737;
function g(e, n = !1, r = !1) {
  let [i, o] = t.useState(e && n ? "idle" : void 0),
    [s, u] = t.useState(e);
  return e && !s && (u(!0), o("starting")), e || !s || "ending" === i || r || o("ending"), e || s || "ending" !== i || o(void 0), (0, l.useIsoLayoutEffect)(() => {
    if (!e && s && "ending" !== i && r) {
      let e = d.AnimationFrame.request(() => {
        o("ending");
      });
      return () => {
        d.AnimationFrame.cancel(e);
      };
    }
  }, [e, s, i, r]), (0, l.useIsoLayoutEffect)(() => {
    if (!e || n) return;
    let t = d.AnimationFrame.request(() => {
      o(void 0);
    });
    return () => {
      d.AnimationFrame.cancel(t);
    };
  }, [n, e]), (0, l.useIsoLayoutEffect)(() => {
    if (!e || !n) return;
    e && s && "idle" !== i && o("starting");
    let t = d.AnimationFrame.request(() => {
      o("idle");
    });
    return () => {
      d.AnimationFrame.cancel(t);
    };
  }, [n, e, s, i]), {
    mounted: s,
    setMounted: u,
    transitionStatus: i
  };
}
const _export_useTransitionStatus = g;
export { _export_useTransitionStatus as useTransitionStatus };

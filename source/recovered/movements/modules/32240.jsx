// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module31908 from "./jsx-runtime-31908.js";
import * as _module45032 from "./45032.js";
import * as _module54612 from "./54612.js";
import * as _module24762 from "./24762.js";
import * as _module40048 from "./40048.js";
import * as _module8011 from "./8011.js";
import * as _module91292 from "./91292.js";
import * as _module15943 from "./15943.js";
import * as _module99571 from "./99571.js";
import * as _module50010 from "./50010.js";
import * as _module28409 from "./28409.js";
import * as _module35199 from "./35199.js";
import * as _module46106 from "./46106.js";
import * as _module94780 from "./94780.js";
import * as _module6740 from "./6740.js";
import * as _module33739 from "./33739.js";
import * as _module99137 from "./99137.js";
import * as _module72150 from "./72150.js";
import * as _module97107 from "./97107.js";
import * as _module90610 from "./90610.js";
var e = _module31908,
  i = _module45032,
  n = _module54612,
  s = _module24762,
  r = _module40048,
  o = _module8011,
  a = _module91292,
  l = _module15943,
  u = _module99571,
  h = _module50010,
  c = _module28409,
  d = _module35199,
  p = _module46106,
  m = _module94780,
  f = _module6740,
  g = _module33739,
  v = _module99137,
  y = _module72150,
  x = _module97107,
  b = _module90610;
function T(t, {
  forwardMotionProps: w = !1,
  type: S
} = {}, P, M) {
  P && (0, p.loadFeatures)(P);
  let A = S ? "svg" === S : (0, u.isSVGComponent)(t),
    V = A ? c.useSVGVisualState : h.useHTMLVisualState;
  function E(u, h) {
    let c,
      p = {
        ...(0, i.useContext)(r.MotionConfigContext),
        ...u,
        layoutId: function ({
          layoutId: t
        }) {
          let e = (0, i.useContext)(n.LayoutGroupContext).id;
          return e && void 0 !== t ? e + "-" + t : t;
        }(u)
      },
      {
        isStatic: m,
        isValidProp: T
      } = p,
      S = (0, a.useCreateMotionContext)(u),
      P = V(u, m);
    if (!m && "u" > typeof window) {
      (0, i.useContext)(s.LazyContext).strict;
      let e = function (t) {
        let {
          drag: e,
          layout: i
        } = (0, d.getInitializedFeatureDefinitions)();
        if (!e && !i) return {};
        let n = {
          ...e,
          ...i
        };
        return {
          MeasureLayout: e?.isEnabled(t) || i?.isEnabled(t) ? n.MeasureLayout : void 0,
          ProjectionNode: n.ProjectionNode
        };
      }(p);
      c = e.MeasureLayout, S.visualElement = function (t, e, n, a, l, u) {
        let {
            visualElement: h
          } = (0, i.useContext)(o.MotionContext),
          c = (0, i.useContext)(s.LazyContext),
          d = (0, i.useContext)(v.PresenceContext),
          p = (0, i.useContext)(r.MotionConfigContext),
          m = p.reducedMotion,
          f = p.skipAnimations,
          T = (0, i.useRef)(null),
          w = (0, i.useRef)(!1);
        a = a || c.renderer, !T.current && a && (T.current = a(t, {
          visualState: e,
          parent: h,
          props: n,
          presenceContext: d,
          blockInitialAnimation: !!d && !1 === d.initial,
          reducedMotionConfig: m,
          skipAnimations: f,
          isSVG: u
        }), w.current && T.current && (T.current.manuallyAnimateOnMount = !0));
        let S = T.current,
          P = (0, i.useContext)(y.SwitchLayoutGroupContext);
        S && !S.projection && l && ("html" === S.type || "svg" === S.type) && function (t, e, i, n) {
          let {
            layoutId: s,
            layout: r,
            drag: o,
            dragConstraints: a,
            layoutScroll: l,
            layoutRoot: u,
            layoutAnchor: h,
            layoutCrossfade: c
          } = e;
          t.projection = new i(t.latestValues, e["data-framer-portal-id"] ? void 0 : function t(e) {
            if (e) return !1 !== e.options.allowProjection ? e.projection : t(e.parent);
          }(t.parent)), t.projection.setOptions({
            layoutId: s,
            layout: r,
            alwaysMeasureLayout: !!o || a && (0, x.isRefObject)(a),
            visualElement: t,
            animationType: "string" == typeof r ? r : "both",
            initialPromotionConfig: n,
            crossfade: c,
            layoutScroll: l,
            layoutRoot: u,
            layoutAnchor: h
          });
        }(T.current, n, l, P);
        let M = (0, i.useRef)(!1);
        (0, i.useInsertionEffect)(() => {
          S && M.current && S.update(n, d);
        });
        let A = n[g.optimizedAppearDataAttribute],
          V = (0, i.useRef)(!!A && "u" > typeof window && !window.MotionHandoffIsComplete?.(A) && window.MotionHasOptimisedAnimation?.(A));
        return (0, b.useIsomorphicLayoutEffect)(() => {
          w.current = !0, S && (M.current = !0, window.MotionIsMounted = !0, S.updateFeatures(), S.scheduleRenderMicrotask(), V.current && S.animationState && S.animationState.animateChanges());
        }), (0, i.useEffect)(() => {
          S && (!V.current && S.animationState && S.animationState.animateChanges(), V.current && (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete?.(A);
          }), V.current = !1), S.enteringChildren = void 0);
        }), S;
      }(t, P, p, M, e.ProjectionNode, A);
    }
    return (0, e.jsxs)(o.MotionContext.Provider, {
      value: S,
      children: [c && S.visualElement ? (0, e.jsx)(c, {
        visualElement: S.visualElement,
        ...p
      }) : null, (0, l.useRender)(t, u, (0, f.useMotionRef)(P, S.visualElement, h), P, m, w, A, T)]
    });
  }
  E.displayName = `motion.${"string" == typeof t ? t : `create(${t.displayName ?? t.name ?? ""})`}`;
  let C = (0, i.forwardRef)(E);
  return C[m.motionComponentSymbol] = t, C;
}
const _export_createMotionProxy = function (t, e) {
  if ("u" < typeof Proxy) return T;
  let i = new Map(),
    n = (i, n) => T(i, n, t, e);
  return new Proxy((t, e) => n(t, e), {
    get: (s, r) => "create" === r ? n : (i.has(r) || i.set(r, T(r, void 0, t, e)), i.get(r))
  });
};
export { _export_createMotionProxy as createMotionProxy };

// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module31908 from "./jsx-runtime-31908.js";
import * as _module16542 from "./16542.js";
import * as _module18137 from "./18137.js";
import * as _module57143 from "./57143.js";
import * as _module45713 from "./45713.js";
import * as _module67484 from "./67484.js";
import * as _module13963 from "./13963.js";
import * as _module85761 from "./85761.js";
import * as _module74468 from "./74468.js";
import * as _module84872 from "./84872.js";
import * as _module11470 from "./11470.js";
import * as _module92548 from "./92548.js";
import * as _module98582 from "./98582.js";
import * as _module45032 from "./45032.js";
import * as _module40048 from "./40048.js";
import * as _module29301 from "./29301.js";
import * as _module96015 from "./96015.js";
import * as _module90610 from "./90610.js";
import * as _module95074 from "./95074.js";
import * as _module95236 from "./95236.js";
var s = _module31908,
  e = _module16542,
  a = _module18137;
let i = (0, _module57143.create)((t, s) => ({
  ...a.DEFAULT_GLASS,
  setWidth: e => {
    let i = (0, a.clampWidth)(e),
      {
        height: n,
        radius: l
      } = s();
    t({
      width: i,
      radius: (0, a.clampRadius)(l, i, n)
    });
  },
  setHeight: e => {
    let i = (0, a.clampHeight)(e),
      {
        width: n,
        radius: l
      } = s();
    t({
      height: i,
      radius: (0, a.clampRadius)(l, n, i)
    });
  },
  setRadius: e => {
    let {
      width: i,
      height: n
    } = s();
    t({
      radius: (0, a.clampRadius)(e, i, n)
    });
  },
  setThick: s => t({
    thick: (0, a.clampThick)(s)
  }),
  setBend: s => t({
    bend: (0, a.clampBend)(s)
  }),
  setBlur: s => t({
    blur: (0, a.clampBlur)(s)
  }),
  setAber: s => t({
    aber: (0, a.clampAber)(s)
  }),
  setTint: s => t({
    tint: (0, a.clampTint)(s)
  })
}));
var n = _module45713;
function l() {
  let t = i(t => t.width),
    e = i(t => t.height),
    l = i(t => t.radius),
    r = i(t => t.thick),
    c = i(t => t.bend),
    h = i(t => t.blur),
    o = i(t => t.aber),
    u = i(t => t.tint),
    m = i(t => t.setWidth),
    d = i(t => t.setHeight),
    p = i(t => t.setRadius),
    k = i(t => t.setThick),
    j = i(t => t.setBend),
    f = i(t => t.setBlur),
    v = i(t => t.setAber),
    g = i(t => t.setTint),
    x = Math.min(a.GLASS_LIMITS.radius.max, Math.floor(Math.min(t, e) / 2));
  return <div className={"flex flex-col gap-8 p-5"}>{<div className={"grid grid-cols-2 gap-4"}>{[(0, s.jsx)(n.ScrubberField, {
        id: "glass-width",
        label: "Width",
        unit: "px",
        value: Math.round(t),
        min: a.GLASS_LIMITS.width.min,
        max: a.GLASS_LIMITS.width.max,
        onChange: m
      }), (0, s.jsx)(n.ScrubberField, {
        id: "glass-height",
        label: "Height",
        unit: "px",
        value: Math.round(e),
        min: a.GLASS_LIMITS.height.min,
        max: a.GLASS_LIMITS.height.max,
        onChange: d
      }), (0, s.jsx)(n.ScrubberField, {
        id: "glass-radius",
        label: "Radius",
        unit: "px",
        value: Math.round(l),
        min: a.GLASS_LIMITS.radius.min,
        max: x,
        onChange: p
      }), (0, s.jsx)(n.ScrubberField, {
        id: "glass-rim",
        label: "Rim",
        unit: "px",
        value: Math.round(r),
        min: a.GLASS_LIMITS.thick.min,
        max: a.GLASS_LIMITS.thick.max,
        onChange: k
      }), (0, s.jsx)(n.ScrubberField, {
        id: "glass-bend",
        label: "Bend",
        value: Math.round(c),
        min: a.GLASS_LIMITS.bend.min,
        max: a.GLASS_LIMITS.bend.max,
        onChange: j
      }), (0, s.jsx)(n.ScrubberField, {
        id: "glass-blur",
        label: "Blur",
        unit: "px",
        value: Math.round(h),
        min: a.GLASS_LIMITS.blur.min,
        max: a.GLASS_LIMITS.blur.max,
        onChange: f
      }), (0, s.jsx)(n.ScrubberField, {
        id: "glass-aberration",
        label: "Aberration",
        value: Math.round(o),
        min: a.GLASS_LIMITS.aber.min,
        max: a.GLASS_LIMITS.aber.max,
        onChange: v
      }), (0, s.jsx)(n.ScrubberField, {
        id: "glass-tint",
        label: "Tint",
        unit: "%",
        value: Math.round(100 * u),
        min: Math.round(100 * a.GLASS_LIMITS.tint.min),
        max: Math.round(100 * a.GLASS_LIMITS.tint.max),
        onChange: t => g(t / 100)
      })]}</div>}</div>;
}
var r = _module67484,
  c = _module13963,
  h = _module85761;
let o = [{
  match: "<Glass",
  text: "Chromium bends the backdrop; Safari and Firefox fall back to blur + tint."
}];
function u() {
  let t = i(t => t.width),
    e = i(t => t.height),
    a = i(t => t.radius),
    n = i(t => t.thick),
    l = i(t => t.bend),
    r = i(t => t.blur),
    u = i(t => t.aber),
    m = i(t => t.tint);
  return (0, s.jsx)(h.PackageUsage, {
    pkg: c.GLASS_PACKAGE,
    code: (0, c.glassPackageSnippet)({
      width: t,
      height: e,
      radius: a,
      thick: n,
      bend: l,
      blur: r,
      aber: u,
      tint: m
    }),
    notes: o
  });
}
var m = _module74468,
  d = _module84872,
  p = _module11470,
  k = _module92548,
  j = _module98582;
function f(t) {
  return "number" == typeof t ? t : parseFloat(t);
}
var v = _module45032,
  g = _module40048,
  x = _module29301;
function b(t) {
  let s = (0, x.useConstant)(() => (0, d.motionValue)(t)),
    {
      isStatic: e
    } = (0, v.useContext)(g.MotionConfigContext);
  if (e) {
    let [, e] = (0, v.useState)(t);
    (0, v.useEffect)(() => s.on("change", e), []);
  }
  return s;
}
var y = _module96015,
  P = _module90610;
function w(t, s) {
  let e = b(s()),
    a = () => e.set(s());
  return a(), (0, P.useIsomorphicLayoutEffect)(() => {
    let s = () => j.frame.preRender(a, !1, !0),
      e = t.map(t => t.on("change", s));
    return () => {
      e.forEach(t => t()), (0, j.cancelFrame)(a);
    };
  }), e;
}
function _(t, s) {
  let e = (0, x.useConstant)(() => []);
  return w(t, () => {
    e.length = 0;
    let a = t.length;
    for (let s = 0; s < a; s++) e[s] = t[s].get();
    return s(e);
  });
}
function S(t, s = {}) {
  return function (t, s = {}) {
    let {
        isStatic: e
      } = (0, v.useContext)(g.MotionConfigContext),
      a = () => (0, k.isMotionValue)(t) ? t.get() : t;
    if (e) return function t(s, e, a, i) {
      if ("function" == typeof s) {
        let t;
        return d.collectMotionValues.current = [], s(), t = w(d.collectMotionValues.current, s), d.collectMotionValues.current = void 0, t;
      }
      if (void 0 !== a && !Array.isArray(a) && "function" != typeof e) {
        var n = s,
          l = e,
          r = a,
          c = i;
        let h = (0, x.useConstant)(() => Object.keys(r)),
          o = (0, x.useConstant)(() => ({}));
        for (let s of h) o[s] = t(n, l, r[s], c);
        return o;
      }
      let h = "function" == typeof e ? e : function (...t) {
          let s = !Array.isArray(t[0]),
            e = s ? 0 : -1,
            a = t[0 + e],
            i = t[1 + e],
            n = t[2 + e],
            l = t[3 + e],
            r = (0, y.interpolate)(i, n, l);
          return s ? r(a) : r;
        }(e, a, i),
        o = Array.isArray(s) ? _(s, h) : _([s], ([t]) => h(t)),
        u = Array.isArray(s) ? void 0 : s.accelerate;
      return u && !u.isTransformed && "function" != typeof e && Array.isArray(a) && i?.clamp !== !1 && (o.accelerate = {
        ...u,
        times: e,
        keyframes: a,
        isTransformed: !0,
        ...(i?.ease ? {
          ease: i.ease
        } : {})
      }), o;
    }(a);
    let i = b(a());
    return (0, v.useInsertionEffect)(() => function (t, s, e = {}) {
      let a,
        i = t.get(),
        n = null,
        l = i,
        r = "string" == typeof i ? i.replace(/[\d.-]/g, "") : void 0,
        c = () => {
          n && (n.stop(), n = null), t.animation = void 0;
        },
        h = () => {
          (() => {
            let s = f(t.get()),
              i = f(l);
            if (s === i) return c();
            let r = n ? n.getGeneratorVelocity() : t.getVelocity();
            c(), n = new p.JSAnimation({
              keyframes: [s, i],
              velocity: r,
              type: "spring",
              restDelta: .001,
              restSpeed: .01,
              ...e,
              onUpdate: a
            });
          })(), t.animation = n ?? void 0, t.events.animationStart?.notify(), n?.then(() => {
            t.animation = void 0, t.events.animationComplete?.notify();
          });
        };
      if (t.attach((t, s) => {
        l = t, a = t => {
          var e, a;
          return s((e = t, (a = r) ? e + a : e));
        }, j.frame.postRender(h);
      }, c), (0, k.isMotionValue)(s)) {
        let a = !0 === e.skipInitialAnimation,
          i = s.on("change", s => {
            var e, i, n, l;
            a ? (a = !1, t.jump((e = s, (i = r) ? e + i : e), !1)) : t.set((n = s, (l = r) ? n + l : n));
          }),
          n = t.on("destroy", i);
        return () => {
          i(), n();
        };
      }
      return c;
    }(i, t, s), [i, JSON.stringify(s)]), i;
  }(t, {
    type: "spring",
    ...s
  });
}
var z = _module95074,
  q = _module95236;
let M = {
  mass: .85,
  stiffness: 240,
  damping: 18,
  restDelta: .2
};
function T() {
  let t = i(t => t.width),
    e = i(t => t.height),
    a = i(t => t.radius),
    n = i(t => t.thick),
    l = i(t => t.bend),
    r = i(t => t.blur),
    c = i(t => t.aber),
    h = i(t => t.tint),
    o = (0, z.useThemeStore)(t => t.dark),
    u = (0, v.useRef)(null),
    [d, p] = (0, v.useState)(0),
    [k, j] = (0, v.useState)(!1),
    f = S(0, M),
    g = S(0, M),
    x = (0, v.useRef)(() => ({
      x: 0,
      y: 0
    })),
    b = (0, v.useRef)(null);
  return (0, v.useLayoutEffect)(() => {
    let t = u.current;
    if (!t) return;
    let s = t.parentElement;
    if (!s) return;
    let e = !1,
      a = () => {
        var a, i;
        let n, l;
        if (e) return;
        let r = s.getBoundingClientRect();
        a = r.width, i = r.height, t.width = Math.max(1, Math.round(a * (n = Math.min(window.devicePixelRatio || 1, 2)))), t.height = Math.max(1, Math.round(i * n)), (l = t.getContext("2d")) && (l.setTransform(n, 0, 0, n, 0, 0), l.clearRect(0, 0, a, i), l.fillStyle = o ? "#0a0a0a" : "#f4f4f3", l.fillRect(0, 0, a, i), l.fillStyle = o ? "#fafafa" : "#111113", l.textAlign = "center", l.textBaseline = "middle", l.letterSpacing = "-0.06em", l.font = '500 72px "Inter Variable", Inter, ui-sans-serif, system-ui, sans-serif', l.fillText("glass-fx", a / 2, i / 2 - 6), l.letterSpacing = "0", l.font = '400 14px "Inter Variable", Inter, ui-sans-serif, system-ui, sans-serif', l.fillStyle = o ? "rgb(250 250 250 / 0.4)" : "rgb(17 17 19 / 0.4)", l.fillText("Pure canvas glass effect", a / 2, i / 2 + 40)), p(t => t + 1);
      };
    a(), document.fonts.ready.then(a);
    let i = new ResizeObserver(a);
    return i.observe(s), () => {
      e = !0, i.disconnect();
    };
  }, [o]), (0, v.useEffect)(() => {
    x.current = () => ({
      x: f.get(),
      y: g.get()
    });
  }, [f, g]), (0, v.useEffect)(() => {
    let t = t => {
        let s = b.current;
        s && t.pointerId === s.pointerId && (f.jump(s.originX + t.clientX - s.startX), g.jump(s.originY + t.clientY - s.startY));
      },
      s = t => {
        let s = b.current;
        s && t.pointerId === s.pointerId && (b.current = null, j(!1), f.set(0), g.set(0));
      };
    return window.addEventListener("pointermove", t), window.addEventListener("pointerup", s), window.addEventListener("pointercancel", s), () => {
      window.removeEventListener("pointermove", t), window.removeEventListener("pointerup", s), window.removeEventListener("pointercancel", s);
    };
  }, [f, g]), <section className={"theme-transition relative h-full min-h-[420px] w-full overflow-hidden rounded-2xl bg-[#f4f4f3] ring-[0.5px] ring-black/8 dark:bg-[#0a0a0a] dark:ring-white/8"}>{[<canvas ref={u} className={"pointer-events-none absolute inset-0 size-full"} aria-hidden={!0} />, (0, s.jsx)(m.motion.div, {
      role: "button",
      tabIndex: 0,
      "aria-label": "Draggable glass tile. Releases snap back to center.",
      className: `absolute top-1/2 left-1/2 z-10 touch-none select-none ${k ? "cursor-grabbing" : "cursor-grab"}`,
      style: {
        x: f,
        y: g,
        width: t,
        height: e,
        marginLeft: -t / 2,
        marginTop: -e / 2
      },
      onPointerDown: function (t) {
        0 === t.button && (b.current = {
          pointerId: t.pointerId,
          startX: t.clientX,
          startY: t.clientY,
          originX: f.get(),
          originY: g.get()
        }, j(!0));
      },
      children: (0, s.jsx)(q.GlassSurface, {
        config: {
          width: t,
          height: e,
          radius: Math.min(a, t / 2, e / 2),
          thick: n,
          bend: l,
          blur: r,
          aber: c,
          tint: h
        },
        fill: !0,
        live: !0,
        sourceRef: u,
        sceneTick: d,
        readOffsetRef: x
      })
    })]}</section>;
}
const _export_GlassStudio = function () {
  return (0, s.jsx)(e.ExperimentLayout, {
    slug: "glass",
    examples: (0, s.jsx)(r.GlassExamples, {}),
    preview: (0, s.jsx)(T, {}),
    controls: (0, s.jsx)(l, {}),
    exportPanel: (0, s.jsx)(u, {}),
    framedExport: !1
  });
};
export { _export_GlassStudio as GlassStudio };

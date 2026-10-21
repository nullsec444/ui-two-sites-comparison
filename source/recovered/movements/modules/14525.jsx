// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module31908 from "./jsx-runtime-31908.js";
import * as _module16542 from "./16542.js";
import * as _module36832 from "./36832.js";
import * as _module57143 from "./57143.js";
import * as _module45713 from "./45713.js";
import * as _module17364 from "./17364.js";
import * as _module13963 from "./13963.js";
import * as _module85761 from "./85761.js";
import * as _module45032 from "./45032.js";
import * as _module65523 from "./65523.js";
import * as _module93340 from "./93340.js";
import * as _module74468 from "./74468.js";
import * as _module16684 from "./16684.js";
var e = _module31908,
  s = _module16542,
  a = _module36832,
  i = _module57143;
function n(t, e) {
  return e <= 0 ? 0 : Math.min(Math.max(t, 0), e - 1);
}
let l = (0, a.createSpinnerFrames)(a.DEFAULT_LOADER_SIZE),
  r = (0, i.create)((t, e) => ({
    size: a.DEFAULT_LOADER_SIZE,
    frames: l,
    frameIds: (0, a.createFrameIds)(l.length),
    selectedFrame: 0,
    frameDuration: a.DEFAULT_FRAME_DURATION,
    transition: "color",
    transitionDuration: a.DEFAULT_TRANSITION_DURATION,
    activeColor: a.DEFAULT_ACTIVE_COLOR,
    inactiveColor: a.DEFAULT_INACTIVE_COLOR,
    scrubbing: !0,
    setSize: e => t(t => {
      let s = t.frames.map(t => (0, a.resizeFrame)(t, e));
      return {
        size: e,
        frames: s.length > 0 ? s : [(0, a.emptyFrame)(e)],
        selectedFrame: n(t.selectedFrame, s.length)
      };
    }),
    selectFrame: e => t(t => ({
      selectedFrame: n(e, t.frames.length)
    })),
    setCell: (e, s) => t(t => ({
      frames: t.frames.map((a, i) => {
        if (i !== t.selectedFrame || e < 0 || e >= a.length || a[e] === s) return a;
        let n = a.slice();
        return n[e] = s, n;
      })
    })),
    paintCells: (e, s) => t(t => 0 === e.length ? t : {
      frames: t.frames.map((a, i) => {
        if (i !== t.selectedFrame) return a;
        let n = !1,
          l = a.slice();
        for (let t of e) t < 0 || t >= l.length || l[t] !== s && (l[t] = s, n = !0);
        return n ? l : a;
      })
    }),
    clearFrame: () => t(t => ({
      frames: t.frames.map((e, s) => s === t.selectedFrame ? (0, a.emptyFrame)(t.size) : e)
    })),
    invertFrame: () => t(t => ({
      frames: t.frames.map((e, s) => s === t.selectedFrame ? e.map(t => !t) : e)
    })),
    addFrame: () => t(t => {
      let e = t.frames[t.selectedFrame] ?? (0, a.emptyFrame)(t.size),
        s = t.selectedFrame + 1;
      return {
        frames: [...t.frames.slice(0, s), e.slice(), ...t.frames.slice(s)],
        frameIds: [...t.frameIds.slice(0, s), (0, a.createFrameId)(), ...t.frameIds.slice(s)],
        selectedFrame: s
      };
    }),
    duplicateFrame: () => t(t => {
      let e = t.frames[t.selectedFrame];
      if (!e) return t;
      let s = t.selectedFrame + 1;
      return {
        frames: [...t.frames.slice(0, s), e.slice(), ...t.frames.slice(s)],
        frameIds: [...t.frameIds.slice(0, s), (0, a.createFrameId)(), ...t.frameIds.slice(s)],
        selectedFrame: s
      };
    }),
    deleteFrame: e => t(t => {
      let s = e ?? t.selectedFrame;
      if (s < 0 || s >= t.frames.length) return t;
      if (t.frames.length <= 1) return {
        frames: [(0, a.emptyFrame)(t.size)],
        frameIds: [t.frameIds[0] ?? (0, a.createFrameId)()],
        selectedFrame: 0
      };
      let i = t.frames.filter((t, e) => e !== s),
        l = t.frameIds.filter((t, e) => e !== s),
        r = t.selectedFrame;
      return s === r ? r = n(s, i.length) : s < r && (r -= 1), {
        frames: i,
        frameIds: l,
        selectedFrame: r
      };
    }),
    moveFrame: (e, s) => t(t => {
      if (e === s || e < 0 || s < 0 || e >= t.frames.length || s >= t.frames.length) return t;
      let a = t.frames.slice(),
        [i] = a.splice(e, 1);
      a.splice(s, 0, i);
      let n = t.frameIds.slice(),
        [l] = n.splice(e, 1);
      n.splice(s, 0, l);
      let r = t.selectedFrame;
      return r === e ? r = s : e < r && s >= r ? r -= 1 : e > r && s <= r && (r += 1), {
        frames: a,
        frameIds: n,
        selectedFrame: r
      };
    }),
    setFrameDuration: e => t({
      frameDuration: Math.min(800, Math.max(40, Math.round(e)))
    }),
    setTransition: e => t({
      transition: e
    }),
    setTransitionDuration: e => t({
      transitionDuration: Math.min(600, Math.max(0, Math.round(e)))
    }),
    setActiveColor: e => {
      let s = (0, a.normalizeHex)(e);
      s && t({
        activeColor: s
      });
    },
    setInactiveColor: e => {
      let s = (0, a.normalizeHex)(e);
      s && t({
        inactiveColor: s
      });
    },
    applyPreset: e => t(t => {
      let s = (0, a.framesForPreset)(e, t.size);
      return {
        frames: s,
        frameIds: (0, a.createFrameIds)(s.length),
        selectedFrame: 0,
        scrubbing: !0
      };
    }),
    setScrubbing: e => t({
      scrubbing: e
    }),
    stepFrame: () => t(t => t.frames.length < 2 ? t : {
      selectedFrame: (t.selectedFrame + 1) % t.frames.length
    }),
    getConfig: () => {
      let t = e();
      return (0, a.buildDotLoaderConfig)({
        size: t.size,
        frames: t.frames,
        frameDuration: t.frameDuration,
        transition: t.transition,
        transitionDuration: t.transitionDuration,
        activeColor: t.activeColor,
        inactiveColor: t.inactiveColor
      });
    }
  }));
var c = _module45713;
function h() {
  let t = r(t => t.size),
    s = r(t => t.frameDuration),
    i = r(t => t.transition),
    n = r(t => t.transitionDuration),
    l = r(t => t.activeColor),
    h = r(t => t.inactiveColor),
    o = r(t => t.setSize),
    m = r(t => t.setFrameDuration),
    u = r(t => t.setTransition),
    d = r(t => t.setTransitionDuration),
    p = r(t => t.setActiveColor),
    k = r(t => t.setInactiveColor),
    j = r(t => t.applyPreset),
    v = a.LOADER_COLOR_PRESETS.find(t => t.active === l && t.inactive === h);
  return <div className={"flex flex-col gap-6 p-5"}>{[<div className={"grid grid-cols-1 gap-5"}>{[(0, e.jsx)(c.ControlField, {
        label: "Grid",
        children: (0, e.jsx)(c.SegmentedControl, {
          ariaLabel: "Grid",
          value: String(t),
          onChange: t => {
            let e = Number(t);
            a.LOADER_GRID_SIZES.includes(e) && o(e);
          },
          options: a.LOADER_GRID_SIZES.map(t => ({
            value: String(t),
            label: `${t}\xd7${t}`
          }))
        })
      }), (0, e.jsx)(c.ControlField, {
        label: "Quick presets",
        children: <div className={"theme-transition inset-hairline grid h-8 w-full min-w-0 grid-cols-3 gap-[2px] rounded-[6px] bg-black/[0.045] p-[2px] dark:bg-white/[0.08]"}>{a.LOADER_PRESETS.map(t => <button type={"button"} onClick={() => j(t.id)} className={"min-w-0 rounded-[4px] text-center text-[12px] font-medium text-mute transition hover:bg-white/70 hover:text-ink dark:hover:bg-white/[0.1] dark:hover:text-white"} key={t.id}>{t.label}</button>)}</div>
      })]}</div>, <div className={"grid grid-cols-2 gap-4"}>{[(0, e.jsx)(c.ScrubberField, {
        id: "loader-frame-duration",
        label: "Frame time",
        unit: "ms",
        value: s,
        min: 40,
        max: 800,
        step: 10,
        onChange: m
      }), (0, e.jsx)(c.ScrubberField, {
        id: "loader-transition-duration",
        label: "Blend",
        unit: "ms",
        value: n,
        min: 0,
        max: 600,
        step: 10,
        onChange: d,
        disabled: "none" === i
      })]}</div>, <div className={"grid grid-cols-1 gap-5"}>{[(0, e.jsx)(c.ControlField, {
        label: "Transition",
        hint: a.LOADER_TRANSITIONS.find(t => t.id === i)?.hint,
        children: (0, e.jsx)(c.SegmentedControl, {
          ariaLabel: "Transition",
          value: i,
          onChange: u,
          options: a.LOADER_TRANSITIONS.map(t => ({
            value: t.id,
            label: t.label,
            title: t.hint
          }))
        })
      }), <fieldset className={"min-w-0"}>{[<legend className={"mb-2 text-sm font-medium text-ink"}>{"Color presets"}</legend>, <div className={"flex h-8 flex-wrap items-center gap-1.5"}>{a.LOADER_COLOR_PRESETS.map(t => {
            let s = v?.id === t.id;
            return <button type={"button"} aria-label={t.label} aria-pressed={s} title={t.label} onClick={() => {
              p(t.active), k(t.inactive);
            }} className={`relative size-7 rounded-full transition ${s ? "ring-2 ring-ink ring-offset-1 ring-offset-panel" : "hover:scale-105"}`} style={{
              backgroundColor: t.active
            }} key={t.id}>{[<span className={"pointer-events-none absolute inset-[9px] rounded-full"} style={{
                backgroundColor: t.inactive
              }} aria-hidden={!0} />, <span className={"pointer-events-none absolute inset-0 rounded-full ring-[0.5px] ring-black/15 dark:ring-white/20"} aria-hidden={!0} />]}</button>;
          })}</div>]}</fieldset>]}</div>, <div className={"grid grid-cols-2 gap-4"}>{[(0, e.jsx)(c.ColorField, {
        id: "loader-active-color",
        label: "Active",
        value: l,
        onChange: p
      }), (0, e.jsx)(c.ColorField, {
        id: "loader-inactive-color",
        label: "Inactive",
        value: h,
        onChange: k
      })]}</div>]}</div>;
}
var o = _module17364,
  m = _module13963,
  u = _module85761;
function d() {
  let t = r(t => t.size),
    s = r(t => t.frames),
    i = r(t => t.frameDuration),
    n = r(t => t.transition),
    l = r(t => t.transitionDuration),
    c = r(t => t.activeColor),
    h = r(t => t.inactiveColor),
    o = (0, a.buildDotLoaderConfig)({
      size: t,
      frames: s,
      frameDuration: i,
      transition: n,
      transitionDuration: l,
      activeColor: c,
      inactiveColor: h
    });
  return (0, e.jsx)(u.PackageUsage, {
    pkg: m.LOADER_PACKAGE,
    code: (0, m.loaderPackageSnippet)({
      size: t,
      frames: o.frames,
      frameDuration: i,
      transition: n,
      transitionDuration: l,
      activeColor: c,
      inactiveColor: h
    })
  });
}
var p = _module45032,
  k = _module65523;
function j() {
  let t,
    s = r(t => t.size),
    a = r(t => t.frames),
    i = r(t => t.selectedFrame),
    n = r(t => t.activeColor),
    l = r(t => t.inactiveColor),
    c = r(t => t.transition),
    h = r(t => t.transitionDuration),
    o = r(t => t.scrubbing),
    m = r(t => t.setCell),
    u = r(t => t.setScrubbing),
    d = a[i] ?? [],
    k = (0, p.useRef)(!0),
    j = (0, p.useRef)(!1),
    v = (0, p.useRef)(new Set()),
    f = o || "none" === c ? 0 : Math.max(0, h);
  switch (c) {
    case "none":
      t = "none";
      break;
    case "fade":
      t = f ? `opacity ${f}ms ease` : "none";
      break;
    case "color":
      t = f ? `background-color ${f}ms ease` : "none";
      break;
    default:
      t = c;
  }
  let x = t => {
      v.current.has(t) || (v.current.add(t), m(t, k.current));
    },
    g = (t, e) => {
      t.preventDefault(), j.current = !0, v.current = new Set(), k.current = !d[e], u(!0), t.currentTarget.setPointerCapture(t.pointerId), x(e);
    },
    b = t => {
      j.current && x(t);
    },
    P = t => {
      j.current = !1, v.current = new Set(), t.currentTarget.hasPointerCapture(t.pointerId) && t.currentTarget.releasePointerCapture(t.pointerId);
    };
  return <div className={"mx-auto grid touch-none select-none"} style={{
    width: 64,
    height: 64,
    gridTemplateColumns: `repeat(${s}, minmax(0, 1fr))`,
    gap: Math.max(2, Math.round(5.12))
  }} onPointerUp={() => {
    j.current = !1;
  }} onPointerLeave={() => {
    j.current = !1;
  }}>{Array.from({
      length: s * s
    }, (a, i) => {
      let r = !!d[i],
        h = Math.floor(i / s) + 1,
        o = i % s + 1;
      return "fade" === c ? <button type={"button"} aria-label={`Cell ${h},${o} ${r ? "active" : "inactive"}`} aria-pressed={r} onPointerDown={t => g(t, i)} onPointerEnter={() => b(i)} onPointerUp={P} onPointerCancel={P} className={"relative aspect-square min-h-0 min-w-0 overflow-hidden rounded-full outline-none transition-transform hover:scale-[1.04] focus-visible:ring-2 focus-visible:ring-ink/25 active:scale-[0.96]"} style={{
        backgroundColor: l
      }} key={i}>{<span className={"pointer-events-none absolute inset-0 rounded-full"} style={{
          backgroundColor: n,
          opacity: +!!r,
          transition: t
        }} />}</button> : <button type={"button"} aria-label={`Cell ${h},${o} ${r ? "active" : "inactive"}`} aria-pressed={r} onPointerDown={t => g(t, i)} onPointerEnter={() => b(i)} onPointerUp={P} onPointerCancel={P} className={"aspect-square min-h-0 min-w-0 rounded-full outline-none transition-transform hover:scale-[1.04] focus-visible:ring-2 focus-visible:ring-ink/25 active:scale-[0.96]"} style={{
        backgroundColor: r ? n : l,
        transition: t
      }} key={i} />;
    })}</div>;
}
let v = (0, _module93340.default)("outline", "x", "X", [["path", {
  d: "M18 6l-12 12",
  key: "svg-0"
}], ["path", {
  d: "M6 6l12 12",
  key: "svg-1"
}]]);
var f = _module74468,
  x = _module16684;
let g = {
  type: "spring",
  duration: .3,
  bounce: 0
};
function b() {
  let t = r(t => t.size),
    s = r(t => t.frames),
    i = r(t => t.selectedFrame),
    n = r(t => t.frameDuration),
    l = r(t => t.transitionDuration),
    c = r(t => t.activeColor),
    h = r(t => t.inactiveColor),
    o = r(t => t.frameIds),
    m = r(t => t.selectFrame),
    u = r(t => t.addFrame),
    d = r(t => t.deleteFrame),
    k = r(t => t.moveFrame),
    j = r(t => t.setScrubbing),
    b = (0, p.useRef)(null),
    P = (0, p.useRef)(null),
    [y, w] = (0, p.useState)(null),
    [_, z] = (0, p.useState)(null),
    q = s.map((t, e) => e);
  if (null !== y && null !== _ && y !== _) {
    let [t] = q.splice(y, 1);
    q.splice(_, 0, t);
  }
  let C = t => {
      let e = P.current;
      if (!e || t.pointerId !== e.pointerId) return;
      if (!e.active) {
        if (6 > Math.abs(t.clientX - e.startX)) return;
        e.active = !0, w(e.from), z(e.from), m(e.from), j(!0);
      }
      let a = (t => {
        let e = b.current;
        if (!e) return 0;
        let a = t - e.getBoundingClientRect().left + e.scrollLeft - 4;
        return Math.max(0, Math.min(s.length - 1, Math.round(a / 70)));
      })(t.clientX);
      a !== e.over && (e.over = a, z(a)), (t => {
        let e = b.current;
        if (!e) return;
        let s = e.getBoundingClientRect();
        t < s.left + 36 ? e.scrollLeft -= 12 : t > s.right - 36 && (e.scrollLeft += 12);
      })(t.clientX);
    },
    F = t => {
      let e = P.current;
      if (!e || t.pointerId !== e.pointerId) return;
      let {
        from: s,
        over: a,
        active: i
      } = e;
      if (P.current = null, t.currentTarget.hasPointerCapture(t.pointerId) && t.currentTarget.releasePointerCapture(t.pointerId), w(null), z(null), i) {
        a !== s && k(s, a);
        return;
      }
      m(s), j(!0);
    },
    N = null !== y;
  return <div ref={b} className={`-mx-1 flex gap-1.5 overflow-x-auto px-1 py-1 ${N ? "cursor-grabbing select-none" : ""}`}>{[q.map((r, m) => {
      let u = s[r],
        p = r === i,
        k = r === y,
        b = (0, a.buildDotLoaderConfig)({
          size: t,
          frames: [u],
          frameDuration: n,
          transition: "none",
          transitionDuration: l,
          activeColor: c,
          inactiveColor: h
        });
      return (0, e.jsxs)(f.motion.div, {
        layout: r !== y,
        transition: g,
        className: "group/frame relative shrink-0",
        children: [<button type={"button"} onPointerDown={t => {
          0 === t.button && (P.current = {
            from: r,
            over: r,
            pointerId: t.pointerId,
            startX: t.clientX,
            active: !1
          }, t.currentTarget.setPointerCapture(t.pointerId));
        }} onPointerMove={C} onPointerUp={F} onPointerCancel={F} aria-pressed={p} aria-label={`Frame ${m + 1}`} title={"Drag to reorder"} className={`flex w-16 touch-none flex-col items-center gap-1 rounded-[10px] p-1.5 text-mute ${N ? "" : "cursor-grab"} ${k ? "relative z-10 scale-[1.04] bg-black/[0.14] text-ink dark:bg-white/[0.14]" : p ? "bg-black/[0.14] text-ink dark:bg-white/[0.14]" : "bg-black/[0.06] hover:bg-black/[0.1] hover:text-ink dark:bg-white/[0.06] dark:hover:bg-white/[0.1]"}`}>{[<div className={"flex size-10 items-center justify-center rounded-md bg-page"}>{(0, e.jsx)(x.DotLoader, {
              config: b,
              pixelSize: 28,
              paused: !0
            })}</div>, <span className={"font-mono text-[10px] tabular-nums"}>{String(m + 1).padStart(2, "0")}</span>]}</button>, s.length > 1 && !k ? <button type={"button"} aria-label={`Delete frame ${m + 1}`} onPointerDown={t => t.stopPropagation()} onClick={t => {
          t.stopPropagation(), d(r), j(!0);
        }} className={"absolute top-0.5 right-0.5 z-20 flex size-4 items-center justify-center rounded-full bg-ink/80 text-page opacity-0 pointer-events-none transition group-hover/frame:pointer-events-auto group-hover/frame:opacity-100 hover:bg-ink"}>{(0, e.jsx)(v, {
            className: "size-2.5",
            stroke: 2.5
          })}</button> : null]
      }, o[r] ?? r);
    }), <button type={"button"} onClick={() => {
      u(), j(!0);
    }} aria-label={"Add frame"} className={"flex w-16 shrink-0 items-center justify-center self-stretch rounded-[10px] border border-dashed border-line bg-transparent text-mute transition hover:border-ink/30 hover:text-ink"}>{<span className={"text-base leading-none"}>{"+"}</span>}</button>]}</div>;
}
function P() {
  let t = r(t => t.frames),
    s = r(t => t.selectedFrame),
    a = r(t => t.frameDuration),
    i = r(t => t.transition),
    n = r(t => t.transitionDuration),
    l = r(t => t.scrubbing),
    c = r(t => t.setScrubbing),
    h = r(t => t.stepFrame),
    o = r(t => t.clearFrame),
    m = r(t => t.invertFrame),
    u = r(t => t.paintCells),
    d = r(t => t.size),
    v = (0, p.useRef)(null),
    f = !l && t.length > 1;
  return (0, p.useEffect)(() => {
    if (!f) return;
    let t = window.setInterval(() => {
      h();
    }, a);
    return () => window.clearInterval(t);
  }, [f, a, h]), (0, p.useEffect)(() => {
    let t = v.current;
    if (!t) return;
    let e = () => {
      t.style.setProperty("--timeline-h", `${t.offsetHeight}px`);
    };
    e();
    let s = new ResizeObserver(e);
    return s.observe(t), () => s.disconnect();
  }, []), <section className={"group/preview theme-transition relative flex h-full min-h-[400px] w-full flex-col overflow-hidden rounded-2xl bg-canvas ring-[0.5px] ring-black/8 dark:ring-white/8"}>{[<div className={"pointer-events-none absolute inset-x-0 top-0 z-10 flex flex-wrap items-center justify-between gap-3 px-5 pt-4 sm:px-6"}>{[<div className={"pointer-events-auto flex items-center gap-3"}>{[(0, e.jsx)(k.MorphButton, {
          onClick: () => c(f),
          label: f ? "Pause" : "Play",
          className: `inline-flex rounded-full px-3 py-1.5 text-xs font-medium ${f ? "bg-page text-ink ring-[0.5px] ring-black/10 dark:ring-white/12" : "bg-ink text-page"}`
        }), <span className={"font-mono text-[11px] tabular-nums text-mute"}>{[String(s + 1).padStart(2, "0"), "/", String(t.length).padStart(2, "0"), " · ", a, "ms", "none" !== i ? ` \xb7 ${n}ms` : ""]}</span>]}</div>, <div className={"pointer-events-auto flex items-center gap-2.5"}>{[<button type={"button"} onClick={() => {
          c(!0), o();
        }} className={"text-xs text-mute transition hover:text-ink"}>{"Clear"}</button>, <button type={"button"} onClick={() => {
          c(!0), m();
        }} className={"text-xs text-mute transition hover:text-ink"}>{"Invert"}</button>, <button type={"button"} onClick={() => {
          c(!0), u(Array.from({
            length: d * d
          }, (t, e) => e), !0);
        }} className={"text-xs text-mute transition hover:text-ink"}>{"Fill"}</button>]}</div>]}</div>, <div className={"flex min-h-0 flex-1 items-center justify-center px-6"}>{(0, e.jsx)(j, {})}</div>, <div ref={v} className={"shrink-0 border-t-[0.5px] border-black/8 bg-canvas p-3 mb-[calc(-1*var(--timeline-h,6.5rem))] transition-[margin-bottom] duration-300 ease-[cubic-bezier(0.2,0,0,1)] group-hover/preview:mb-0 group-focus-within/preview:mb-0 dark:border-white/8"}>{(0, e.jsx)(b, {})}</div>]}</section>;
}
const _export_LoaderStudio = function () {
  return (0, e.jsx)(s.ExperimentLayout, {
    slug: "loader",
    examples: (0, e.jsx)(o.LoaderExamples, {}),
    preview: (0, e.jsx)(P, {}),
    controls: (0, e.jsx)(h, {}),
    exportPanel: (0, e.jsx)(d, {}),
    framedExport: !1
  });
};
export { _export_LoaderStudio as LoaderStudio };

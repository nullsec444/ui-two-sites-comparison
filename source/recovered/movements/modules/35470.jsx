// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module31908 from "./jsx-runtime-31908.js";
import * as _module16542 from "./16542.js";
import * as _module33966 from "./33966.js";
import * as _module57143 from "./57143.js";
import * as _module45713 from "./45713.js";
import * as _module82342 from "./82342.js";
import * as _module13963 from "./13963.js";
import * as _module85761 from "./85761.js";
import * as _module94765 from "./94765.js";
import * as _module74468 from "./74468.js";
import * as _module45032 from "./45032.js";
import * as _module95074 from "./95074.js";
var s = _module31908,
  a = _module16542,
  e = _module33966;
let i = (0, _module57143.create)(t => ({
  data: e.DEFAULT_CHART_DATA,
  dataText: (0, e.formatChartDataJson)(e.DEFAULT_CHART_DATA),
  dataError: null,
  colorId: "amber",
  easing: "low-ease",
  size: "md",
  showGradient: !1,
  showEdgeFade: !0,
  setDataText: s => {
    let {
      data: a,
      error: i
    } = (0, e.parseChartDataJson)(s);
    a ? t({
      dataText: s,
      data: a,
      dataError: null
    }) : t({
      dataText: s,
      dataError: i
    });
  },
  setColorId: s => t({
    colorId: s
  }),
  setEasing: s => t({
    easing: s
  }),
  setSize: s => t({
    size: s
  }),
  setShowGradient: s => t({
    showGradient: s
  }),
  setShowEdgeFade: s => t({
    showEdgeFade: s
  }),
  resetData: () => t({
    data: e.DEFAULT_CHART_DATA,
    dataText: (0, e.formatChartDataJson)(e.DEFAULT_CHART_DATA),
    dataError: null
  }),
  randomizeData: () => {
    let s = (0, e.randomChartData)();
    t({
      data: s,
      dataText: (0, e.formatChartDataJson)(s),
      dataError: null
    });
  }
}));
var n = _module45713;
function l() {
  let t = i(t => t.dataText),
    a = i(t => t.dataError),
    l = i(t => t.colorId),
    c = i(t => t.easing),
    r = i(t => t.size),
    h = i(t => t.showGradient),
    m = i(t => t.showEdgeFade),
    o = i(t => t.setDataText),
    u = i(t => t.setColorId),
    k = i(t => t.setEasing),
    d = i(t => t.setSize),
    p = i(t => t.setShowGradient),
    j = i(t => t.setShowEdgeFade),
    v = i(t => t.resetData),
    x = i(t => t.randomizeData);
  return <div className={"flex flex-col gap-6 p-5"}>{[<div className={"flex flex-col gap-2"}>{[<div className={"flex items-center justify-between gap-3"}>{[<label htmlFor={"chart-data"} className={"text-sm font-medium text-ink"}>{"Example data"}</label>, <div className={"flex items-center gap-3"}>{[<button type={"button"} onClick={x} className={"text-xs text-mute transition hover:text-ink"}>{"Randomize"}</button>, <button type={"button"} onClick={v} className={"text-xs text-mute transition hover:text-ink"}>{"Reset"}</button>]}</div>]}</div>, <textarea id={"chart-data"} value={t} onChange={t => o(t.target.value)} spellCheck={!1} rows={3} className={"w-full resize-y rounded-xl inset-hairline bg-page px-3 py-2.5 font-mono text-xs leading-relaxed text-ink outline-none focus:inset-ring-black/25 dark:focus:inset-ring-white/25"} aria-invalid={!!a || void 0} aria-describedby={a ? "chart-data-error" : "chart-data-hint"} />, a ? <p id={"chart-data-error"} className={"text-xs text-rose-600 dark:text-rose-400"}>{a}</p> : <p id={"chart-data-hint"} className={"text-xs text-mute"}>{["JSON number array — becomes the", " ", <code className={"font-mono text-[11px]"}>{"data"}</code>, " prop in the export."]}</p>]}</div>, <div className={"grid grid-cols-1 gap-5"}>{[<fieldset className={"min-w-0"}>{[<legend className={"mb-2 text-sm font-medium text-ink"}>{"Color"}</legend>, <div className={"flex h-8 flex-wrap items-center gap-1.5"}>{e.CHART_COLORS.map(t => {
            let a = l === t.id;
            return <button type={"button"} aria-label={t.label} aria-pressed={a} title={t.label} onClick={() => u(t.id)} className={`relative size-7 rounded-full transition ${a ? "ring-2 ring-ink ring-offset-1 ring-offset-panel" : "hover:scale-105"}`} style={{
              backgroundColor: t.value
            }} key={t.id}>{<span className={"pointer-events-none absolute inset-0 rounded-full ring-[0.5px] ring-black/15 dark:ring-white/20"} aria-hidden={!0} />}</button>;
          })}</div>, <p className={"mt-2 text-xs text-mute"}>{"Export uses a CSS variable you can override."}</p>]}</fieldset>, (0, s.jsx)(n.ControlField, {
        label: "Easing",
        children: (0, s.jsx)(n.SegmentedControl, {
          ariaLabel: "Easing",
          value: c,
          onChange: k,
          options: e.CHART_EASINGS.map(t => ({
            value: t.id,
            label: t.label
          }))
        })
      }), (0, s.jsx)(n.ControlField, {
        label: "Size",
        children: (0, s.jsx)(n.SegmentedControl, {
          ariaLabel: "Size",
          value: r,
          onChange: d,
          options: e.CHART_SIZES.map(t => ({
            value: t.id,
            label: t.label,
            title: `${t.width}\xd7${t.height}`
          }))
        })
      }), <div className={"grid min-w-0 grid-cols-2 gap-4"}>{[(0, s.jsx)(n.ControlField, {
          label: "Gradient fill",
          children: (0, s.jsx)(n.SegmentedControl, {
            ariaLabel: "Gradient fill",
            value: h ? "yes" : "no",
            onChange: t => p("yes" === t),
            options: [{
              value: "yes",
              label: "Yes"
            }, {
              value: "no",
              label: "No"
            }]
          })
        }), (0, s.jsx)(n.ControlField, {
          label: "Edge fade",
          children: (0, s.jsx)(n.SegmentedControl, {
            ariaLabel: "Edge fade",
            value: m ? "yes" : "no",
            onChange: t => j("yes" === t),
            options: [{
              value: "yes",
              label: "Yes"
            }, {
              value: "no",
              label: "No"
            }]
          })
        })]}</div>]}</div>]}</div>;
}
var c = _module82342,
  r = _module13963,
  h = _module85761;
let m = [{
  match: "data={",
  text: "Pass your series here — numbers only."
}];
function o() {
  let t = i(t => t.data),
    a = i(t => t.colorId),
    e = i(t => t.easing),
    n = i(t => t.size),
    l = i(t => t.showGradient),
    c = i(t => t.showEdgeFade);
  return (0, s.jsx)(h.PackageUsage, {
    pkg: r.CHART_PACKAGE,
    code: (0, r.chartPackageSnippet)({
      data: t,
      colorId: a,
      easing: e,
      size: n,
      showGradient: l,
      showEdgeFade: c
    }),
    notes: m
  });
}
var u = _module94765,
  k = _module74468,
  d = _module45032,
  p = _module95074;
let j = {
    type: "spring",
    duration: .55,
    bounce: 0
  },
  v = {
    type: "spring",
    duration: .45,
    bounce: 0
  },
  x = {
    duration: .35,
    ease: [.32, .72, 0, 1]
  };
function f() {
  let t = i(t => t.data),
    a = i(t => t.colorId),
    n = i(t => t.easing),
    l = i(t => t.size),
    c = i(t => t.showGradient),
    r = i(t => t.showEdgeFade),
    h = (0, p.useThemeStore)(t => t.dark),
    m = (0, d.useId)(),
    {
      width: o,
      height: f
    } = (0, e.getChartSize)(l),
    g = (0, e.getChartColor)(a),
    b = h && g.darkValue ? g.darkValue : g.value,
    P = (0, e.buildChartGeometry)(t, e.CHART_VIEWBOX.width, e.CHART_VIEWBOX.height, n);
  return <section className={"theme-transition flex h-full min-h-[340px] w-full items-center justify-center rounded-2xl bg-canvas px-6 sm:px-10 ring-[0.5px] ring-black/8 dark:ring-white/8"}>{(0, s.jsx)(k.motion.div, {
      initial: !1,
      animate: {
        width: o,
        height: f
      },
      transition: v,
      className: "overflow-hidden",
      style: r ? {
        maskImage: e.CHART_EDGE_FADE_MASK,
        WebkitMaskImage: e.CHART_EDGE_FADE_MASK
      } : void 0,
      children: <svg width={"100%"} height={"100%"} viewBox={`0 0 ${e.CHART_VIEWBOX.width} ${e.CHART_VIEWBOX.height}`} className={"block"} role={"img"} aria-label={"Line chart preview"}>{[<defs>{<linearGradient id={m} x1={"0"} y1={"0"} x2={"0"} y2={"1"}>{[(0, s.jsx)(k.motion.stop, {
              offset: "0%",
              initial: !1,
              animate: {
                stopColor: b,
                stopOpacity: .28
              },
              transition: x
            }), (0, s.jsx)(k.motion.stop, {
              offset: "100%",
              initial: !1,
              animate: {
                stopColor: b,
                stopOpacity: 0
              },
              transition: x
            })]}</linearGradient>}</defs>, (0, s.jsx)(u.AnimatePresence, {
          initial: !1,
          children: c ? (0, s.jsx)(k.motion.path, {
            d: P.areaPath,
            fill: `url(#${m})`,
            initial: {
              opacity: 0
            },
            animate: {
              d: P.areaPath,
              opacity: 1
            },
            exit: {
              opacity: 0
            },
            transition: {
              d: j,
              opacity: {
                duration: .2
              }
            }
          }, "area") : null
        }), (0, s.jsx)(k.motion.path, {
          d: P.linePath,
          fill: "none",
          strokeWidth: "2.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          vectorEffect: "non-scaling-stroke",
          initial: !1,
          animate: {
            d: P.linePath,
            stroke: b
          },
          transition: {
            d: j,
            stroke: x
          }
        })]}</svg>
    })}</section>;
}
const _export_ChartStudio = function () {
  return (0, s.jsx)(a.ExperimentLayout, {
    slug: "chart",
    examples: (0, s.jsx)(c.ChartExamples, {}),
    preview: (0, s.jsx)(f, {}),
    controls: (0, s.jsx)(l, {}),
    exportPanel: (0, s.jsx)(o, {}),
    framedExport: !1
  });
};
export { _export_ChartStudio as ChartStudio };

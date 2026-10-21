// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module31908 from "./jsx-runtime-31908.js";
import * as _module45032 from "./45032.js";
import * as _module33966 from "./33966.js";
import * as _module95074 from "./95074.js";
import * as _module16542 from "./16542.js";
var s = _module31908,
  a = _module45032,
  e = _module33966,
  i = _module95074,
  n = _module16542;
function l({
  data: t,
  width: n,
  height: c,
  label: r,
  colorId: h,
  easing: m = "low-ease",
  showGradient: o = !1,
  showEdgeFade: u = !0
}) {
  let k = (0, i.useThemeStore)(t => t.dark),
    d = (0, a.useId)(),
    p = (0, e.getChartColor)(h),
    j = k && p.darkValue ? p.darkValue : p.value,
    v = (0, e.buildChartGeometry)(t, e.CHART_VIEWBOX.width, e.CHART_VIEWBOX.height, m);
  return <svg width={n} height={c} viewBox={`0 0 ${e.CHART_VIEWBOX.width} ${e.CHART_VIEWBOX.height}`} preserveAspectRatio={"none"} className={"block shrink-0"} role={"img"} aria-label={r} style={u ? {
    maskImage: e.CHART_EDGE_FADE_MASK,
    WebkitMaskImage: e.CHART_EDGE_FADE_MASK
  } : void 0}>{[o ? (0, s.jsxs)(s.Fragment, {
      children: [<defs>{<linearGradient id={d} x1={"0"} y1={"0"} x2={"0"} y2={"1"}>{[<stop offset={"0%"} stopColor={j} stopOpacity={.28} />, <stop offset={"100%"} stopColor={j} stopOpacity={0} />]}</linearGradient>}</defs>, <path d={v.areaPath} fill={`url(#${d})`} />]
    }) : null, <path d={v.linePath} fill={"none"} stroke={j} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} vectorEffect={"non-scaling-stroke"} />]}</svg>;
}
let c = "theme-transition bg-white shadow-[0_1px_2px_rgb(0_0_0/0.05)] ring-[0.5px] ring-black/10 dark:bg-[#1c1c1e] dark:ring-white/10",
  r = [{
    name: "Visitors",
    value: "12.4k",
    data: [4, 6, 5, 8, 7, 10, 9, 12]
  }, {
    name: "Signups",
    value: "318",
    data: [9, 7, 8, 6, 9, 8, 11, 10]
  }, {
    name: "Churn",
    value: "1.2%",
    data: [12, 10, 11, 8, 9, 6, 7, 5]
  }];
function h() {
  return <div className={`${c} flex w-[200px] flex-col gap-3 rounded-[14px] p-4`}>{[<div className={"flex flex-col gap-0.5"}>{[<p className={"text-[11px] text-mute"}>{"Revenue"}</p>, <p className={"text-[20px] font-semibold tracking-[-0.4px] text-ink tabular-nums"}>{"$48,210"}</p>]}</div>, (0, s.jsx)(l, {
      data: [7, 11, 4, 14, 9, 18, 6, 16, 12, 20, 8, 15],
      width: 168,
      height: 44,
      label: "Revenue, last 12 weeks",
      colorId: "teal",
      showGradient: !0
    })]}</div>;
}
const _export_ChartExamples = function () {
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(n.ExampleCard, {
      title: "Stat tile",
      children: (0, s.jsx)(h, {})
    }), (0, s.jsx)(n.ExampleCard, {
      title: "List row",
      children: <ul className={`${c} flex w-[220px] flex-col rounded-[14px] p-1.5`}>{r.map(t => <li className={"flex items-center justify-between gap-3 rounded-[9px] px-2.5 py-2"} key={t.name}>{[<span className={"text-[13px] text-ink"}>{t.name}</span>, <span className={"flex items-center gap-3"}>{[(0, s.jsx)(l, {
              data: t.data,
              width: 56,
              height: 18,
              label: `${t.name} trend`,
              colorId: "blue",
              easing: "ease"
            }), <span className={"w-10 text-right text-[12px] text-mute tabular-nums"}>{t.value}</span>]}</span>]}</li>)}</ul>
    }), (0, s.jsx)(n.ExampleCard, {
      title: "Inline with a label",
      children: <div className={"flex items-center gap-2.5"}>{[<span className={"text-[13px] text-mute"}>{"Response time"}</span>, (0, s.jsx)(l, {
          data: [5, 6, 5, 7, 6, 5, 4, 5, 4, 3],
          width: 64,
          height: 20,
          label: "Response time trend",
          colorId: "violet",
          showEdgeFade: !1
        }), <span className={"text-[13px] font-medium text-ink tabular-nums"}>{"142ms"}</span>]}</div>
    })]
  });
};
const _export_ChartTeaser = h;
export { _export_ChartExamples as ChartExamples, _export_ChartTeaser as ChartTeaser };

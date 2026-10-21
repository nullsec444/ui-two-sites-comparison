// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module31908 from "./jsx-runtime-31908.js";
import * as _module45032 from "./45032.js";
import * as _module57143 from "./57143.js";
import * as _module92923 from "./92923.js";
import * as _module95074 from "./95074.js";
import * as _module16542 from "./16542.js";
import * as _module45713 from "./45713.js";
import * as _module62958 from "./62958.js";
import * as _module31895 from "./31895.js";
import * as _module85735 from "./85735.js";
import * as _module65523 from "./65523.js";
import * as _module23385 from "./23385.js";
var t = _module31908,
  e = _module45032,
  a = _module57143,
  i = _module92923;
let n = (0, a.create)((s, t) => ({
  ...i.DEFAULT_SHIMMER,
  selectedColorId: i.DEFAULT_SHIMMER.colors[0].id,
  tokenName: "paper",
  exportFormat: "tailwind",
  setBase: t => {
    let e = (0, i.normalizeHex)(t);
    e && s({
      base: e
    });
  },
  setDuration: t => s({
    duration: (0, i.clampDuration)(t)
  }),
  setBand: t => s({
    band: (0, i.clampBand)(t)
  }),
  setSoftness: t => s({
    softness: (0, i.clampSoftness)(t)
  }),
  setAngle: t => s({
    angle: (0, i.clampAngle)(t)
  }),
  setIntensity: t => s({
    intensity: (0, i.clampIntensity)(t)
  }),
  setGrain: t => s({
    grain: (0, i.clampGrain)(t)
  }),
  setAnimate: t => s({
    animate: t
  }),
  setSelectedColorId: t => s({
    selectedColorId: t
  }),
  updateColor: (e, a) => {
    let n = (0, i.normalizeHex)(a);
    n && s({
      colors: t().colors.map(s => s.id === e ? {
        ...s,
        color: n
      } : s)
    });
  },
  addColor: () => {
    let e = t().colors;
    if (e.length >= 4) return;
    let a = (0, i.nextColor)(e);
    s({
      colors: [...e, a],
      selectedColorId: a.id
    });
  },
  removeColor: e => {
    let a = t().colors;
    if (a.length <= 1) return;
    let i = a.filter(s => s.id !== e),
      n = t().selectedColorId === e ? i[0].id : t().selectedColorId;
    s({
      colors: i,
      selectedColorId: n
    });
  },
  applyPreset: (t, e) => {
    let a = i.SHIMMER_PRESETS.find(s => s.id === t);
    if (!a) return;
    let n = (0, i.paletteForScheme)(a, e);
    s({
      base: n.base,
      colors: n.colors,
      selectedColorId: n.colors[0].id,
      tokenName: t
    });
  },
  syncPresetTheme: e => {
    let a = t(),
      n = (0, i.matchShimmerPreset)(a.base, a.colors);
    if (!n || n.scheme === (e ? "dark" : "light")) return;
    let l = i.SHIMMER_PRESETS.find(s => s.id === n.id);
    if (!l) return;
    let r = (0, i.paletteForScheme)(l, e),
      c = r.colors.some(s => s.id === a.selectedColorId) ? a.selectedColorId : r.colors[0].id;
    s({
      base: r.base,
      colors: r.colors,
      selectedColorId: c
    });
  },
  setTokenName: t => s({
    tokenName: t
  }),
  setExportFormat: t => s({
    exportFormat: t
  })
}));
var l = _module95074,
  r = _module16542,
  c = _module45713;
let o = i.SHIMMER_PRESETS.map(s => s.id);
function h() {
  let s = n(s => s.base),
    e = n(s => s.colors),
    a = n(s => s.duration),
    r = n(s => s.band),
    h = n(s => s.softness),
    m = n(s => s.angle),
    u = n(s => s.intensity),
    d = n(s => s.grain),
    p = n(s => s.selectedColorId),
    k = n(s => s.setBase),
    j = n(s => s.setDuration),
    v = n(s => s.setBand),
    x = n(s => s.setSoftness),
    g = n(s => s.setAngle),
    f = n(s => s.setIntensity),
    b = n(s => s.setGrain),
    y = n(s => s.setSelectedColorId),
    w = n(s => s.updateColor),
    P = n(s => s.addColor),
    _ = n(s => s.removeColor),
    $ = n(s => s.applyPreset),
    q = (0, l.useThemeStore)(s => s.dark),
    z = e.find(s => s.id === p) ?? e[0],
    S = (0, i.matchShimmerPreset)(s, e);
  return <div className={"flex flex-col gap-6 p-5"}>{[(0, t.jsx)(c.ControlField, {
      label: "Preset",
      children: (0, t.jsx)(c.SegmentedControl, {
        ariaLabel: "Preset",
        value: S?.id ?? "",
        onChange: s => {
          o.includes(s) && $(s, q);
        },
        options: i.SHIMMER_PRESETS.map(s => ({
          value: s.id,
          label: s.label
        }))
      })
    }), <div className={"grid grid-cols-1 gap-5"}>{[(0, t.jsx)(c.ControlField, {
        label: "Highlight",
        children: <div className={"theme-transition inset-hairline flex h-8 w-full min-w-0 items-center gap-2 rounded-[6px] bg-black/[0.045] px-2 dark:bg-white/[0.08]"}>{[<div role={"group"} aria-label={"Highlight"} className={"flex min-w-0 flex-1 items-center gap-1.5"}>{e.map((s, e) => {
              let a = s.id === z.id;
              return <label className={`relative size-3.5 shrink-0 cursor-pointer overflow-hidden rounded-[3px] ${a ? "shadow-[0_0_0_1px_rgb(0_0_0/0.45)] dark:shadow-[0_0_0_1px_rgb(255_255_255/0.7)]" : "shadow-[0_0_0_1px_rgb(0_0_0/0.16)] hover:shadow-[0_0_0_1px_rgb(0_0_0/0.28)] dark:shadow-[0_0_0_1px_rgb(255_255_255/0.22)] dark:hover:shadow-[0_0_0_1px_rgb(255_255_255/0.4)]"}`} key={s.id}>{[<span aria-hidden={!0} className={"absolute inset-0"} style={{
                  backgroundColor: s.color
                }} />, <input type={"color"} value={s.color} aria-label={`Highlight ${e + 1}`} onFocus={() => y(s.id)} onChange={t => {
                  y(s.id), w(s.id, t.target.value);
                }} className={"absolute inset-0 cursor-pointer opacity-0"} />]}</label>;
            })}</div>, <div className={"flex shrink-0 items-center gap-0.5 border-l border-black/10 pl-1.5 dark:border-white/12"}>{[<button type={"button"} onClick={P} disabled={e.length >= 4} aria-label={"Add highlight color"} className={"flex size-6 items-center justify-center text-[13px] leading-none text-mute hover:text-ink disabled:pointer-events-none disabled:opacity-35"}>{"+"}</button>, <button type={"button"} onClick={() => _(z.id)} disabled={e.length <= 1} aria-label={"Remove highlight color"} className={"flex size-6 items-center justify-center text-[13px] leading-none text-mute hover:text-ink disabled:pointer-events-none disabled:opacity-35"}>{"−"}</button>]}</div>]}</div>
      }), (0, t.jsx)(c.ColorField, {
        id: "shimmer-base",
        label: "Base",
        value: s,
        onChange: k
      })]}</div>, <div className={"grid grid-cols-2 gap-4"}>{[(0, t.jsx)(c.ScrubberField, {
        id: "shimmer-speed",
        label: "Speed",
        unit: "ms",
        value: Math.round(1e3 * a),
        min: 600,
        max: 3200,
        step: 50,
        onChange: s => j(s / 1e3)
      }), (0, t.jsx)(c.ScrubberField, {
        id: "shimmer-width",
        label: "Width",
        unit: "%",
        value: Math.round(r),
        min: 16,
        max: 72,
        onChange: v
      }), (0, t.jsx)(c.ScrubberField, {
        id: "shimmer-softness",
        label: "Softness",
        unit: "%",
        value: Math.round(100 * h),
        min: 0,
        max: 100,
        onChange: s => x(s / 100)
      }), (0, t.jsx)(c.ScrubberField, {
        id: "shimmer-slant",
        label: "Slant",
        unit: "°",
        value: Math.round(m),
        min: -32,
        max: -4,
        onChange: g
      }), (0, t.jsx)(c.ScrubberField, {
        id: "shimmer-intensity",
        label: "Intensity",
        unit: "%",
        value: Math.round(100 * u),
        min: 15,
        max: 100,
        onChange: s => f(s / 100)
      }), (0, t.jsx)(c.ScrubberField, {
        id: "shimmer-grain",
        label: "Grain",
        unit: "%",
        value: Math.round(100 * d),
        min: 0,
        max: 35,
        onChange: s => b(s / 100)
      })]}</div>]}</div>;
}
var m = _module62958,
  u = _module31895;
function d(s) {
  return s.trim().toLowerCase().replace(/[^a-z0-9-_]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "") || "shimmer";
}
function p(s, t, e, a = "") {
  return [`${s} {`, "  position: absolute;", "  inset: 0;", `  background-image: ${t};`, `  filter: blur(${e.toFixed(1)}px);`, a, "}"].filter(Boolean).join("\n");
}
function k(s, t, e = []) {
  let a = [`  ${s}`];
  return t && a.push("  html.dark & {", `    ${t}`, "  }"), a.push(...e), a.join("\n");
}
var j = _module85735;
function v() {
  let s = n(s => s.base),
    a = n(s => s.colors),
    l = n(s => s.duration),
    r = n(s => s.band),
    c = n(s => s.softness),
    o = n(s => s.angle),
    h = n(s => s.intensity),
    m = n(s => s.grain),
    v = n(s => s.animate),
    x = n(s => s.tokenName),
    g = n(s => s.exportFormat),
    f = n(s => s.setTokenName),
    b = n(s => s.setExportFormat),
    y = function ({
      tokenName: s,
      format: t,
      ...e
    }) {
      let a,
        n,
        l,
        r,
        c,
        o,
        h = (a = d(s)).startsWith("shimmer-") || "shimmer" === a ? a : `shimmer-${a}`,
        m = d(h).replace(/-([a-z0-9])/g, (s, t) => t.toUpperCase()),
        {
          light: u,
          dark: j
        } = (0, i.pairedShimmerConfigs)(e),
        v = (0, i.composeShimmerLayers)(u),
        x = j ? (0, i.composeShimmerLayers)(j) : null,
        g = [(n = (0, i.composeShimmerLayers)(u), l = u.grain ? `
.${h}-grain {
  position: absolute;
  inset: 0;
  background-image: ${i.SHIMMER_GRAIN_IMAGE};
  opacity: ${u.grain};
  mix-blend-mode: overlay;
  pointer-events: none;
}` : "", r = u.animate ? `
.${h}-track {
  --shimmer-duration: ${u.duration}s;
  animation: shimmer-sweep ${u.duration}s ease-in-out infinite;
}
.${h}-bloom {
  animation: shimmer-bloom-drift calc(${u.duration}s * 2.17) ease-in-out infinite;
}
.${h}-beam {
  animation: shimmer-beam-drift calc(${u.duration}s * 1.37) ease-in-out infinite;
}
.${h}-core {
  animation: shimmer-core-drift calc(${u.duration}s * 0.83) ease-in-out infinite;
}

@keyframes shimmer-sweep {
  from { transform: translateX(calc(-100cqw - 160%)) skewX(${u.angle}deg); }
  to { transform: translateX(calc(100cqw + 60%)) skewX(${u.angle}deg); }
}
@keyframes shimmer-bloom-drift {
  0%, 100% { transform: translate3d(-7%, 4%, 0) scale(1.02); }
  50% { transform: translate3d(8%, -6%, 0) scale(1.12); }
}
@keyframes shimmer-beam-drift {
  0%, 100% { transform: translate3d(3%, -5%, 0); }
  40% { transform: translate3d(-5%, 6%, 0); }
  75% { transform: translate3d(2%, 2%, 0); }
}
@keyframes shimmer-core-drift {
  0%, 100% { transform: translate3d(5%, -3%, 0) scale(0.94); }
  35% { transform: translate3d(-6%, 5%, 0) scale(1.06); }
  70% { transform: translate3d(3%, 3%, 0) scale(1); }
}

@media (prefers-reduced-motion: reduce) {
  .${h}-track { animation: none; transform: skewX(${u.angle}deg); }
  .${h}-bloom,
  .${h}-beam,
  .${h}-core { animation: none; }
}` : "", [`.${h} {`, "  position: relative;\n  overflow: hidden;", `  background: ${u.base};`, "}\n", `.${h}-stage {`, "  position: absolute;\n  inset: 0;\n  overflow: hidden;\n  pointer-events: none;\n  container-type: inline-size;\n}\n", `.${h}-track {`, "  position: absolute;\n  top: -30%;\n  left: 0;", `  width: ${u.band}%;`, "  height: 160%;", `  --shimmer-skew: ${u.angle}deg;`, "}\n", p(`.${h}-bloom`, n.bloom, n.bloomBlur, "  opacity: 0.9;"), p(`.${h}-beam`, n.beam, n.beamBlur), p(`.${h}-core`, n.core, n.coreBlur), l, r].join("\n")), j ? `
${c = (0, i.composeShimmerLayers)(j), `.dark .${h} {
  background: ${j.base};
}
.dark .${h}-bloom {
  background-image: ${c.bloom};
}
.dark .${h}-beam {
  background-image: ${c.beam};
}
.dark .${h}-core {
  background-image: ${c.core};
}`}` : ""].join("");
      switch (t) {
        case "tailwind":
          return ["/* Loading shimmer — slanted track, bloom / beam / core ellipses */", "", "@theme {", `  --${h}-base: ${u.base};`, j ? `  --${h}-base-dark: ${j.base};` : null, `  --${h}-duration: ${u.duration}s;`, `  --${h}-skew: ${u.angle}deg;`, "}", "", g, "", "/* Markup */", "/*", (o = u.grain ? `
  <div class="${h}-grain"></div>` : "", `<div class="${h}">
  <div class="${h}-stage">
    <div class="${h}-track">
      <div class="${h}-bloom"></div>
      <div class="${h}-beam"></div>
      <div class="${h}-core"></div>
    </div>
  </div>${o}
</div>`).split("\n").map(s => ` * ${s}`).join("\n"), " */"].filter(s => null !== s).join("\n");
        case "styled-components":
          {
            let s = u.animate ? `

const shimmerSweep = keyframes\`
  from { transform: translateX(calc(-100cqw - 160%)) skewX(${u.angle}deg); }
  to { transform: translateX(calc(100cqw + 60%)) skewX(${u.angle}deg); }
\`;
` : "";
            return [u.animate ? 'import styled, { keyframes } from "styled-components";' : 'import styled from "styled-components";', s, `/** Design-system loading shimmer: ${m} */`, `export const ${m} = styled.div\``, "  position: relative;\n  overflow: hidden;", k(`background: ${u.base};`, j ? `background: ${j.base};` : null), "`;\n", `export const ${m}Stage = styled.div\``, "  position: absolute;\n  inset: 0;\n  overflow: hidden;\n  pointer-events: none;\n  container-type: inline-size;\n`;\n", `export const ${m}Track = styled.div\``, "  position: absolute;\n  top: -30%;\n  left: 0;", `  width: ${u.band}%;`, "  height: 160%;", u.animate ? `  animation: \${shimmerSweep} ${u.duration}s ease-in-out infinite;` : `  transform: skewX(${u.angle}deg);`, "`;\n", `export const ${m}Bloom = styled.div\``, "  position: absolute;\n  inset: 0;", k(`background-image: ${v.bloom};`, x ? `background-image: ${x.bloom};` : null, [`  filter: blur(${v.bloomBlur.toFixed(1)}px);`, "  opacity: 0.9;"]), "`;\n", `export const ${m}Beam = styled.div\``, "  position: absolute;\n  inset: 0;", k(`background-image: ${v.beam};`, x ? `background-image: ${x.beam};` : null, [`  filter: blur(${v.beamBlur.toFixed(1)}px);`]), "`;\n", `export const ${m}Core = styled.div\``, "  position: absolute;\n  inset: 0;", k(`background-image: ${v.core};`, x ? `background-image: ${x.core};` : null, [`  filter: blur(${v.coreBlur.toFixed(1)}px);`]), "`;"].join("\n");
          }
        case "stylex":
          {
            let s = (s, t) => t ? `{ default: "${s}", ":where(.dark, .dark *)": "${t}" }` : `"${s}"`;
            return `import * as stylex from "@stylexjs/stylex";

/** Design-system loading shimmer: ${m} */
export const ${m} = stylex.create({
  surface: {
    position: "relative",
    overflow: "hidden",
    backgroundColor: ${s(u.base, j?.base ?? null)},
  },
  stage: {
    position: "absolute",
    inset: 0,
    overflow: "hidden",
    pointerEvents: "none",
    containerType: "inline-size",
  },
  track: {
    position: "absolute",
    top: "-30%",
    left: 0,
    width: "${u.band}%",
    height: "160%",
  },
  bloom: {
    position: "absolute",
    inset: 0,
    backgroundImage: ${s(v.bloom, x?.bloom ?? null)},
    filter: "blur(${v.bloomBlur.toFixed(1)}px)",
    opacity: 0.9,
  },
  beam: {
    position: "absolute",
    inset: 0,
    backgroundImage: ${s(v.beam, x?.beam ?? null)},
    filter: "blur(${v.beamBlur.toFixed(1)}px)",
  },
  core: {
    position: "absolute",
    inset: 0,
    backgroundImage: ${s(v.core, x?.core ?? null)},
    filter: "blur(${v.coreBlur.toFixed(1)}px)",
  },
});

/* Stage > Track(bloom, beam, core). Animate track: translateX + skewX(${u.angle}deg) */`;
          }
        default:
          return t;
      }
    }({
      base: s,
      colors: a,
      duration: l,
      band: r,
      softness: c,
      angle: o,
      intensity: h,
      grain: m,
      animate: v,
      tokenName: x,
      format: g
    }),
    w = (0, e.useMemo)(() => {
      let t = (0, i.matchShimmerPreset)(s, a),
        e = [{
          match: "-bloom",
          text: "Bloom, beam, and core are stacked radial ellipses — not one gradient."
        }];
      return t && e.push({
        match: ".dark",
        text: "Preset pair: light as default, dark overrides when .dark is on."
      }), "tailwind" === g && e.push({
        match: "/* Markup */",
        text: "Stage clips the slash. Track is the slanted band that travels."
      }), v && e.push({
        match: "ease-in-out",
        text: "Keep ease-in-out so the slash eases, not snaps."
      }), e;
    }, [v, s, a, g]);
  return <div className={"flex flex-col gap-4 p-5 sm:p-6"}>{[<label className={"flex items-center gap-2 text-sm text-mute"}>{[<span className={"shrink-0"}>{"Token"}</span>, <input type={"text"} value={x} onChange={s => f(s.target.value)} className={"w-36 rounded-lg inset-hairline bg-page px-2.5 py-1.5 font-mono text-xs text-ink outline-none focus:inset-ring-black/25 dark:focus:inset-ring-white/25"} spellCheck={!1} />]}</label>, (0, t.jsx)(j.CodeSnippet, {
      fileName: function (s) {
        switch (s) {
          case "tailwind":
            return "shimmer.css";
          case "styled-components":
            return "shimmer.ts";
          case "stylex":
            return "shimmer.stylex.ts";
          default:
            return s;
        }
      }(g),
      code: y,
      language: function (s) {
        switch (s) {
          case "tailwind":
            return "css";
          case "styled-components":
          case "stylex":
            return "ts";
          default:
            return s;
        }
      }(g),
      tabs: u.EXPORT_FORMATS,
      tab: g,
      onTabChange: b,
      notes: w
    })]}</div>;
}
var x = _module65523,
  g = _module23385;
function f() {
  let s = n(s => s.base),
    e = n(s => s.colors),
    a = n(s => s.duration),
    i = n(s => s.band),
    l = n(s => s.softness),
    r = n(s => s.angle),
    c = n(s => s.intensity),
    o = n(s => s.grain),
    h = n(s => s.animate),
    m = n(s => s.setAnimate);
  return <section className={"theme-transition flex h-full min-h-[340px] w-full items-center justify-center rounded-2xl bg-canvas px-6 sm:px-10 ring-[0.5px] ring-black/8 dark:ring-white/8"}>{<div className={"flex flex-col items-center gap-4"}>{[(0, t.jsx)(g.ShimmerSurface, {
        config: {
          base: s,
          colors: e,
          duration: a,
          band: i,
          softness: l,
          angle: r,
          intensity: c,
          grain: o,
          animate: h
        },
        className: "theme-transition relative h-26 w-32 overflow-hidden rounded-[12px] inset-ring-[0.5px] inset-ring-black/8 dark:inset-ring-white/10"
      }), (0, t.jsx)(x.MorphButton, {
        onClick: () => m(!h),
        label: h ? "Stop" : "Animate",
        className: `inline-flex rounded-full px-3 py-1.5 text-xs font-medium ${h ? "bg-page text-ink ring-[0.5px] ring-black/10 dark:ring-white/12" : "bg-ink text-page"}`
      })]}</div>}</section>;
}
const _export_ShimmerStudio = function () {
  let s = (0, l.useThemeStore)(s => s.dark),
    a = n(s => s.syncPresetTheme);
  return (0, e.useEffect)(() => {
    a(s);
  }, [s, a]), (0, t.jsx)(r.ExperimentLayout, {
    slug: "shimmer",
    examples: (0, t.jsx)(m.ShimmerExamples, {}),
    preview: (0, t.jsx)(f, {}),
    controls: (0, t.jsx)(h, {}),
    exportPanel: (0, t.jsx)(v, {})
  });
};
export { _export_ShimmerStudio as ShimmerStudio };

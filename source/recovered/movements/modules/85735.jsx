// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module31908 from "./jsx-runtime-31908.js";
import * as _module61898 from "./61898.js";
import * as _module45032 from "./45032.js";
import * as _module76814 from "./76814.js";
import * as _module95074 from "./95074.js";
import * as _module65523 from "./65523.js";
var t = _module31908,
  n = _module61898,
  r = _module45032,
  i = _module76814,
  a = _module95074,
  o = _module65523;
let s = `
:host {
  display: block;
  height: auto;
  border-radius: inherit;
  --diffs-overflow-override: visible;
}

pre,
[data-code] {
  height: auto;
  max-height: none;
  overflow: visible;
}

[data-line-annotation] {
  padding-block: 4px;
}
`;
function l({
  options: e,
  value: n,
  onChange: r
}) {
  return <div className={"flex items-center gap-2"}>{e.map(e => {
      let i = e.id === n;
      return <button type={"button"} aria-pressed={i} onClick={() => r(e.id)} className={`text-[12px] leading-none whitespace-nowrap ${i ? "font-medium text-ink" : "text-mute hover:text-ink"}`} key={e.id}>{e.label}</button>;
    })}</div>;
}
const _export_CodeSnippet = function ({
  fileName: e,
  code: d,
  language: u,
  tabs: h,
  tab: c,
  onTabChange: f,
  notes: p
}) {
  let g = (0, a.useThemeStore)(e => e.dark),
    [m, b] = (0, r.useState)(!1),
    y = d.trimEnd(),
    v = !!(h && null != c && f),
    w = (0, r.useMemo)(() => ({
      name: e,
      contents: `${y}
`,
      lang: u,
      cacheKey: `${e}:${u ?? ""}:${y}`
    }), [y, e, u]),
    k = (0, r.useMemo)(() => function (e, t) {
      if (!t?.length) return [];
      let n = e.split("\n"),
        r = [];
      for (let e of t) {
        let t = n.findIndex(t => t.includes(e.match));
        t < 0 || r.push({
          lineNumber: t + 1,
          metadata: {
            text: e.text
          }
        });
      }
      return r;
    }(y, p), [y, p]),
    S = (0, r.useCallback)(async () => {
      try {
        await (0, i.copyText)(y), b(!0), window.setTimeout(() => b(!1), 1600);
      } catch {
        b(!1);
      }
    }, [y]),
    C = (0, r.useCallback)(() => <div className={"flex items-center gap-2.5"}>{[v && h && null != c && f ? (0, t.jsx)(l, {
        options: h,
        value: c,
        onChange: f
      }) : null, (0, t.jsx)(o.MorphButton, {
        onClick: S,
        label: m ? "Copied" : "Copy",
        className: `inline-flex text-[12px] leading-none text-mute hover:text-ink ${v ? "border-l border-black/10 pl-2.5 dark:border-white/12" : ""}`
      })]}</div>, [m, S, f, v, c, h]),
    x = (0, r.useCallback)(e => <div className={"my-0.5 max-w-lg rounded-md border border-black/8 bg-black/[0.04] px-2.5 py-1.5 text-[11px] leading-4 text-mute dark:border-white/10 dark:bg-white/[0.06] dark:text-white/70"}>{e.metadata.text}</div>, []),
    A = (0, r.useMemo)(() => ({
      theme: {
        dark: "pierre-dark",
        light: "pierre-light"
      },
      themeType: g ? "dark" : "light",
      overflow: "scroll",
      disableLineNumbers: !1,
      stickyHeader: !1,
      disableVirtualizationBuffers: !0,
      unsafeCSS: s
    }), [g]);
  return <div className={"theme-transition overflow-hidden rounded-xl ring-hairline ring-black/12 dark:ring-white/10"}>{(0, t.jsx)(n.File, {
      file: w,
      lineAnnotations: k,
      options: A,
      renderHeaderMetadata: C,
      renderAnnotation: x,
      disableWorkerPool: !0,
      className: "w-full"
    })}</div>;
};
export { _export_CodeSnippet as CodeSnippet };

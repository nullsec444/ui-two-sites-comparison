// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import { a as e, r as t } from "./rolldown-runtime-B0Z9INg1.js";
import { n, t as r } from "./jsx-runtime-Ciaf_P-h.js";
import { t as i } from "./utils-WkhMP9hs.js";
import { t as a } from "./IconCode-Jxt5x2jf.js";
import { i as o, n as s } from "./code-block-8j4abSW0.js";
var c = e(n(), 1),
  l = t({
    changeRuns: () => d,
    numberLines: () => u
  });
function u(e, t = 1, n = 1) {
  let r = t,
    i = n;
  return e.map(e => ({
    ...e,
    old: e.kind === `add` ? null : r++,
    new: e.kind === `remove` ? null : i++
  }));
}
function d(e) {
  let t = [];
  for (let {
    kind: n
  } of e) {
    let e = t.at(-1);
    e?.kind === n ? e.count += 1 : t.push({
      kind: n,
      count: 1
    });
  }
  return t;
}
var f = t({
    FileDiff: () => g
  }),
  p = e(r(), 1),
  m = {
    context: {
      tint: ``,
      mark: ``,
      glyph: ``
    },
    add: {
      tint: `bg-success/8`,
      mark: `text-success`,
      glyph: `+`
    },
    remove: {
      tint: `bg-destructive/8`,
      mark: `text-destructive`,
      glyph: `-`
    }
  },
  h = {
    context: ``,
    add: `bg-success`,
    remove: `bg-[repeating-linear-gradient(45deg,var(--destructive)_0_2px,transparent_2px_4px)] opacity-80`
  };
function g({
  filename: e,
  lines: t,
  language: n = `ts`,
  oldStart: r = 1,
  newStart: l = 1,
  className: f
}) {
  let g = (0, c.useMemo)(() => u(t, r, l), [t, r, l]),
    _ = (0, c.useMemo)(() => d(t), [t]),
    v = (0, c.useMemo)(() => o(t.map(e => e.text).join(`
`), n), [t, n]),
    y = t.filter(e => e.kind === `add`).length,
    b = t.filter(e => e.kind === `remove`).length;
  return <figure data-slot={`file-diff`} className={i(`overflow-hidden rounded-xl border bg-card text-card-foreground [--diff-line:1.5rem]`, f)}>{[<figcaption className={`flex items-center gap-2 border-b px-3 py-1.5`}>{[(0, p.jsx)(a, {
        size: 15,
        stroke: 1.8,
        "aria-hidden": !0,
        className: `shrink-0 text-muted-foreground`
      }), <span dir={`auto`} className={`truncate font-mono text-xs text-foreground`}>{e}</span>, <span aria-hidden={!0} className={`ms-auto flex h-7 shrink-0 items-center gap-1.5 font-mono text-xs`}>{[<span dir={`ltr`} className={`text-success`}>{[`+`, y]}</span>, <span dir={`ltr`} className={`text-destructive`}>{[`-`, b]}</span>]}</span>, <span className={`sr-only`}>{[y, ` added, `, b, ` removed`]}</span>]}</figcaption>, <div dir={`ltr`} className={`flex`}>{[<div aria-hidden={!0} className={`w-1.5 shrink-0 py-2`}>{_.map(({
          kind: e,
          count: t
        }, n) => <div style={{
          height: `calc(${t} * var(--diff-line))`
        }} className={i(`bg-clip-content py-px pl-0.5`, h[e])} key={n} />)}</div>, <div aria-hidden={!0} className={`shrink-0 py-2 font-code text-[13px] leading-6 text-muted-foreground/70 select-none`}>{g.map((e, t) => <div className={i(`flex`, m[e.kind].tint)} key={t}>{[<span className={`flex gap-2 border-r pr-2 pl-2.5`}>{[<span className={`min-w-[2ch] text-right`}>{e.old}</span>, <span className={`min-w-[2ch] text-right`}>{e.new}</span>]}</span>, <span className={i(`min-w-[1ch] px-2.5`, m[e.kind].mark)}>{m[e.kind].glyph}</span>]}</div>)}</div>, <pre className={`min-w-0 flex-1 overflow-x-auto py-2 font-code text-[13px] leading-6`}>{<code className={`block w-max min-w-full font-code`}>{g.map((e, t) => <div className={i(`pr-4 pl-0.5`, m[e.kind].tint, e.kind === `context` && `text-muted-foreground`)} key={t}>{[e.kind === `context` ? null : <span className={`sr-only select-none`}>{e.kind === `add` ? `Added: ` : `Removed: `}</span>, v[t]?.map((t, n) => <span className={t.token && e.kind !== `context` ? s[t.token] : void 0} key={n}>{t.text}</span>), `
`]}</div>)}</code>}</pre>]}</div>]}</figure>;
}
export { l as n, f as t };

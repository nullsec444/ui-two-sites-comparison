// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module31908 from "./jsx-runtime-31908.js";
import * as _module64973 from "./64973.js";
import * as _module82342 from "./82342.js";
import * as _module67484 from "./67484.js";
import * as _module17364 from "./17364.js";
import * as _module59975 from "./59975.js";
import * as _module24027 from "./24027.js";
import * as _module62958 from "./62958.js";
import * as _module26220 from "./26220.js";
var t = _module31908,
  a = _module64973,
  i = _module82342,
  r = _module67484,
  n = _module17364,
  l = _module59975,
  s = _module24027,
  o = _module62958,
  d = _module26220;
let c = {
  glass: (0, t.jsx)(r.GlassTeaser, {}),
  loader: (0, t.jsx)(n.LoaderTeaser, {}),
  chart: (0, t.jsx)(i.ChartTeaser, {}),
  shadows: (0, t.jsx)(s.ShadowTeaser, {}),
  radius: (0, t.jsx)(l.RadiusTeaser, {}),
  shimmer: (0, t.jsx)(o.ShimmerTeaser, {})
};
function h({
  item: e
}) {
  return (0, t.jsxs)(a.default, {
    href: e.href,
    className: "group theme-transition flex flex-col gap-2 rounded-[22px] bg-panel p-2 ring-[0.5px] ring-black/10 outline-none hover:ring-black/16 focus-visible:ring-2 focus-visible:ring-ink/20 dark:ring-white/10 dark:hover:ring-white/16",
    children: [<div className={"theme-transition pointer-events-none relative flex h-[220px] items-center justify-center overflow-hidden rounded-[16px] bg-white ring-[0.5px] dark:bg-canvas ring-black/6 dark:ring-white/6"} aria-hidden={!0} inert={!0}>{<div className={"absolute inset-0 flex items-center justify-center transition-[scale] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"}>{c[e.slug]}</div>}</div>, <div className={"flex items-center gap-3 px-2 pt-2 pb-2"}>{[(0, t.jsx)(d.ExperimentIcon, {
        variant: e.icon,
        size: 32,
        radius: 4
      }), <div className={"flex min-w-0 flex-col"}>{[<span className={"text-[14px] font-medium leading-4 text-ink"}>{e.name}</span>, <span className={"truncate text-[13px] leading-4 text-mute"}>{e.tagline}</span>]}</div>]}</div>]
  });
}
const _export_CatalogSection = function ({
  id: e,
  title: a,
  description: i,
  items: r
}) {
  return <section id={e} className={"flex scroll-mt-20 flex-col gap-5"}>{[<div className={"flex flex-col gap-1 px-1"}>{[<h2 className={"text-[18px] font-semibold tracking-[-0.3px] text-ink"}>{a}</h2>, <p className={"text-[14px] text-mute"}>{i}</p>]}</div>, <ul className={"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"}>{r.map(e => <li key={e.slug}>{(0, t.jsx)(h, {
          item: e
        })}</li>)}</ul>]}</section>;
};
export { _export_CatalogSection as CatalogSection };

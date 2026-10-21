// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import { a as e } from "./rolldown-runtime-B0Z9INg1.js";
import { t } from "./jsx-runtime-Ciaf_P-h.js";
import { t as n } from "./link-CKv6YT18.js";
import { t as r } from "./IconArrowRight-DerOrAJ3.js";
import { t as i } from "./IconChevronRight-C9BymwZE.js";
import { a, c as o, d as s, f as c, i as l, l as u, n as d, r as f, s as p, t as m, u as h } from "./navigation-example-SI1YQTgl.js";
import { t as g } from "./theme-toggle-Dc0A54_c.js";
var _ = e(t());
function v({
  title: e,
  blurb: t
}) {
  return (0, _.jsxs)(h, {
    href: `#`,
    className: `flex flex-col items-start gap-0.5 rounded-lg py-2 pr-3 pl-4 text-left`,
    children: [<span className={`text-[0.9375rem] font-semibold`}>{e}</span>, <span className={`text-sm leading-relaxed text-muted-foreground`}>{t}</span>]
  });
}
function y() {
  return <div className={`min-h-screen bg-background text-foreground`}>{[<header className={`mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6 sm:py-6`}>{[(0, _.jsxs)(n, {
        to: `/components`,
        className: `flex items-center gap-2.5`,
        children: [<img src={`/brand/logomark-light.png`} alt={`kobra.systems`} className={`size-5 dark:hidden`} />, <img src={`/brand/logomark-dark.png`} alt={``} className={`hidden size-5 dark:block`} />, <span className={`text-sm font-medium`}>{`kobra.systems`}</span>]
      }), (0, _.jsx)(g, {})]}</header>, <div className={`flex justify-center px-4 pt-12 sm:px-6 sm:pt-16`}>{(0, _.jsx)(p, {
        align: `center`,
        className: `max-w-full`,
        children: (0, _.jsxs)(s, {
          className: `flex-wrap justify-center`,
          children: [(0, _.jsxs)(u, {
            children: [(0, _.jsx)(c, {
              children: `Products`
            }), (0, _.jsx)(o, {
              children: <div className={`grid w-[42rem] max-w-[calc(100vw-2.5rem)] gap-x-2 gap-y-3 p-2.5 sm:grid-cols-[1.15fr_1fr]`}>{[(0, _.jsxs)(h, {
                  href: `#`,
                  className: `group/card flex-col items-stretch gap-0 overflow-hidden rounded-lg border p-0 sm:aspect-square sm:self-start`,
                  children: [<img src={m.image} srcSet={m.images} sizes={`(min-width: 640px) 22rem, 100vw`} alt={``} className={`aspect-[2/1] w-full object-cover sm:aspect-auto sm:min-h-0 sm:flex-1`} />, <span className={`flex flex-col gap-0.5 p-4 text-left`}>{[<span className={`text-[0.9375rem] font-semibold`}>{m.title}</span>, <span className={`text-sm leading-relaxed text-muted-foreground`}>{m.blurb}</span>, <span className={`mt-3 flex items-center gap-0.5 text-sm font-medium text-blue-600 dark:text-blue-400`}>{[m.action, (0, _.jsx)(i, {
                        "aria-hidden": !0,
                        className: `transition-transform duration-150 ease-out group-hover/card:translate-x-0.5`
                      })]}</span>]}</span>]
                }), <div className={`flex flex-col justify-center gap-1`}>{d.map(e => (0, _.jsx)(v, {
                    ...e
                  }, e.title))}</div>]}</div>
            })]
          }), (0, _.jsxs)(u, {
            children: [(0, _.jsx)(c, {
              children: `Solutions`
            }), (0, _.jsx)(o, {
              children: <div className={`w-[42rem] max-w-[calc(100vw-2.5rem)] p-2.5`}>{[<div className={`grid gap-x-1 gap-y-1 sm:grid-cols-2`}>{l.map(e => (0, _.jsx)(v, {
                    ...e
                  }, e.title))}</div>, <div className={`-mx-3.5 mt-3 flex flex-wrap items-center justify-between gap-4 border-t px-3.5 pt-4`}>{[(0, _.jsxs)(h, {
                    href: `#`,
                    className: `gap-1.5 rounded-lg p-2 text-sm font-medium text-blue-600 dark:text-blue-400`,
                    children: [`See all solutions`, (0, _.jsx)(r, {
                      "aria-hidden": !0
                    })]
                  }), <span className={`flex flex-wrap items-center gap-1`}>{a.map(e => (0, _.jsx)(h, {
                      href: `#`,
                      className: `rounded-lg px-2 py-1 text-sm text-muted-foreground`,
                      children: e
                    }, e))}</span>]}</div>]}</div>
            })]
          }), (0, _.jsxs)(u, {
            children: [(0, _.jsx)(c, {
              children: `Resources`
            }), (0, _.jsx)(o, {
              children: <div className={`grid w-[42rem] max-w-[calc(100vw-2.5rem)] gap-x-1 gap-y-1 p-2.5 sm:grid-cols-2`}>{f.map(e => (0, _.jsx)(v, {
                  ...e
                }, e.title))}</div>
            })]
          }), (0, _.jsx)(u, {
            children: (0, _.jsx)(h, {
              render: (0, _.jsx)(n, {
                to: `/pricing`
              }),
              className: `h-9 px-2.5 text-sm font-medium`,
              children: `Pricing`
            })
          })]
        })
      })}</div>, <div className={`mx-auto mt-20 max-w-md px-6 text-center sm:mt-28`}>{<p className={`rounded-lg px-2 py-1 text-sm text-muted-foreground`}>{`Hover or focus a heading to open its panel. The box follows whichever one is open, resizing to it and sliding the contents in from the side it came from.`}</p>}</div>]}</div>;
}
export { y as component };

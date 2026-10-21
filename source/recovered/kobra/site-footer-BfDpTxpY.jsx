// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import { a as e } from "./rolldown-runtime-B0Z9INg1.js";
import { n as t, t as n } from "./jsx-runtime-Ciaf_P-h.js";
import { t as r } from "./link-CKv6YT18.js";
import { t as i } from "./useRouteContext-BB1W4XMH.js";
import { r as a } from "./comparisons-Bvgw9jnW.js";
import { t as o } from "./button-6T-mn2Pp.js";
import { t as s } from "./IconArrowUpRight-MjcyEVid.js";
import { y as c } from "./index-C2FRa1ig.js";
import { t as l } from "./hash-scroll-DjxExjN6.js";
var u = e(t(), 1),
  d = e(n(), 1),
  f = [{
    label: `Components`,
    to: `/components`
  }, {
    label: `Pricing`,
    to: `/pricing`
  }],
  p = {
    label: `Figma kit`,
    href: `https://www.figma.com/community/file/1677847905314794009`
  },
  m = a.map(e => ({
    label: e.rival,
    slug: e.slug
  })),
  h = [{
    label: `Terms of Service`,
    to: `/terms`
  }, {
    label: `Privacy Policy`,
    to: `/privacy`
  }],
  g = {
    label: `Contact`,
    href: `mailto:support@kobra.systems`
  },
  _ = `text-sm text-muted-foreground transition-colors hover:text-foreground motion-reduce:transition-none`;
function v({
  heading: e,
  children: t
}) {
  return <div>{[<p className={`text-sm font-[700] text-foreground`}>{e}</p>, <ul className={`mt-2 space-y-1.5`}>{t}</ul>]}</div>;
}
function y() {
  let {
      user: e
    } = i({
      from: `__root__`
    }),
    [t, n] = (0, u.useState)(!1);
  return e ? (0, d.jsx)(r, {
    to: `/dashboard`,
    className: _,
    children: `Account`
  }) : (0, d.jsxs)(d.Fragment, {
    children: [<button type={`button`} onClick={() => n(!0)} className={_}>{`Account`}</button>, (0, d.jsx)(c, {
      open: t,
      onClose: () => n(!1),
      idPrefix: `footer`,
      redirectTo: `/dashboard`
    })]
  });
}
function b({
  cta: e = !0
} = {}) {
  return <footer>{[e ? <div className={`mx-auto max-w-4xl px-4 pt-12 sm:px-6 sm:pt-16`}>{<div className={`rounded-3xl bg-(--cta-surface) px-5 py-10 text-center [--cta-alt:color-mix(in_oklch,var(--muted),var(--foreground)_10%)] [--cta-surface:color-mix(in_oklch,var(--muted),var(--foreground)_3%)] sm:px-6 sm:py-14 dark:[--cta-alt:var(--secondary)] dark:[--cta-surface:var(--card)]`}>{[<h2 className={`mx-auto max-w-[18ch] text-3xl leading-[1.1] font-bold tracking-tight text-balance sm:text-4xl`}>{`Start building with Kobra`}</h2>, <p className={`mx-auto mt-5 max-w-[36ch] text-base leading-7 text-balance text-muted-foreground`}>{`Swap in the components, keep your stack, and stop looking like every other shadcn app.`}</p>, <div className={`mt-9 flex flex-wrap items-center justify-center gap-3`}>{[(0, d.jsx)(o, {
            size: `lg`,
            nativeButton: !1,
            render: (0, d.jsx)(r, {
              to: `/pricing`,
              hash: `plans`,
              hashScrollIntoView: l()
            }),
            className: `h-11 rounded-full px-5 text-base`,
            children: `Get Pro`
          }), (0, d.jsx)(o, {
            variant: `secondary`,
            size: `lg`,
            nativeButton: !1,
            render: (0, d.jsx)(r, {
              to: `/components`
            }),
            className: `h-11 rounded-full px-5 text-base before:bg-(--cta-alt) hover:before:bg-[color-mix(in_oklch,var(--cta-alt),var(--foreground)_5%)]`,
            children: `Browse`
          })]}</div>]}</div>}</div> : null, <div className={`mx-auto grid max-w-4xl gap-x-12 gap-y-12 px-4 pt-14 pb-14 sm:px-6 md:grid-cols-[minmax(0,1fr)_auto]`}>{[<div className={`flex flex-col`}>{[(0, d.jsxs)(r, {
          to: `/components`,
          "aria-label": `kobra.systems`,
          className: `w-fit`,
          children: [<img src={`/brand/logomark-light.png`} alt={``} className={`size-6 dark:hidden`} />, <img src={`/brand/logomark-dark.png`} alt={``} className={`hidden size-6 dark:block`} />]
        }), <p className={`mt-4 max-w-[32ch] text-sm leading-6 text-muted-foreground`}>{`Polished components for teams building exceptional products and experiences.`}</p>]}</div>, <nav className={`grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3`}>{[(0, d.jsxs)(v, {
          heading: `Product`,
          children: [f.map(({
            label: e,
            to: t
          }) => <li key={e}>{(0, d.jsx)(r, {
              to: t,
              className: _,
              children: e
            })}</li>), <li>{(0, d.jsx)(y, {})}</li>, <li>{<a href={p.href} target={`_blank`} rel={`noreferrer`} className={`${_} inline-flex items-center gap-1`}>{[p.label, (0, d.jsx)(s, {
                "aria-hidden": !0,
                className: `size-3.5`
              })]}</a>}</li>]
        }), (0, d.jsx)(v, {
          heading: `Comparison`,
          children: m.map(({
            label: e,
            slug: t
          }) => <li key={e}>{(0, d.jsx)(r, {
              to: `/compare/$slug`,
              params: {
                slug: t
              },
              className: _,
              children: e
            })}</li>)
        }), (0, d.jsxs)(v, {
          heading: `Legal`,
          children: [h.map(({
            label: e,
            to: t
          }) => <li key={e}>{(0, d.jsx)(r, {
              to: t,
              className: _,
              children: e
            })}</li>), <li>{<a href={g.href} className={`${_} inline-flex items-center gap-1`}>{[g.label, (0, d.jsx)(s, {
                "aria-hidden": !0,
                className: `size-3.5`
              })]}</a>}</li>]
        })]}</nav>]}</div>, <div className={`mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 pt-14 pb-12 text-sm text-muted-foreground sm:px-6 sm:pt-20 sm:pb-16`}>{[<p>{[`Created by`, ` `, <a href={`https://x.com/haaarshsingh`} target={`_blank`} rel={`noreferrer noopener`} className={`font-[700] text-foreground transition-colors hover:text-muted-foreground motion-reduce:transition-none`}>{`Harsh Singh`}</a>, ` `, <span aria-hidden={!0}>{`✌️`}</span>]}</p>, <p suppressHydrationWarning={!0}>{[`© `, new Date().getFullYear(), ` All rights reserved.`]}</p>]}</div>]}</footer>;
}
export { p as n, b as r, g as t };

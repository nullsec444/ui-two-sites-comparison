// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import { a as e } from "./rolldown-runtime-B0Z9INg1.js";
import { t } from "./jsx-runtime-Ciaf_P-h.js";
import { t as n } from "./link-CKv6YT18.js";
import { l as r } from "./comparisons-Bvgw9jnW.js";
import { t as i } from "./button-6T-mn2Pp.js";
import { t as a } from "./IconSearch-DLrEp44H.js";
import { n as o } from "./sound-BCknqSEK.js";
import { t as s } from "./theme-toggle-Dc0A54_c.js";
var c = e(t(), 1),
  l = `size-8 rounded-full bg-muted text-muted-foreground hover:bg-[color-mix(in_oklch,var(--muted),var(--foreground)_5%)] hover:text-foreground dark:hover:bg-[color-mix(in_oklch,var(--muted),var(--foreground)_8%)]`;
function u({
  user: e,
  proHref: t,
  cta: u = !0
}) {
  return <header className={`mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6 sm:py-5`}>{[(0, c.jsxs)(n, {
      to: `/components`,
      "aria-label": `Kobra`,
      className: `flex items-center`,
      children: [<img src={`/brand/logomark-light.png`} alt={``} className={`size-5 dark:hidden`} />, <img src={`/brand/logomark-dark.png`} alt={``} className={`hidden size-5 dark:block`} />]
    }), <div className={`flex items-center gap-2`}>{[<button type={`button`} onClick={() => r(`components`)} className={`inline-flex h-8 w-8 items-center justify-center gap-2 rounded-full bg-muted text-sm text-muted-foreground transition-colors duration-150 ease-out outline-none hover:bg-[color-mix(in_oklch,var(--muted),var(--foreground)_5%)] hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 motion-reduce:transition-none sm:w-56 sm:justify-start sm:px-3 dark:hover:bg-[color-mix(in_oklch,var(--muted),var(--foreground)_8%)]`}>{[(0, c.jsx)(a, {
          "aria-hidden": !0,
          className: `size-4`
        }), <span className={`sr-only sm:not-sr-only`}>{`Search`}</span>, <span aria-hidden={!0} className={`ml-auto hidden text-[0.8125rem] text-muted-foreground/60 sm:inline`}>{`⌘K`}</span>]}</button>, (0, c.jsx)(o, {
        className: l
      }), (0, c.jsx)(s, {
        className: l
      }), u ? (0, c.jsx)(i, {
        className: `rounded-full`,
        nativeButton: !1,
        render: e ? (0, c.jsx)(n, {
          to: `/dashboard`
        }) : t ? <a href={t} /> : (0, c.jsx)(n, {
          to: `/pricing`
        }),
        children: e ? `Dashboard` : `Get Pro`
      }) : null]}</div>]}</header>;
}
export { u as t };

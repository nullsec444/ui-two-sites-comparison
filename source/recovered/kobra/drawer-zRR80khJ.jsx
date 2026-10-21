// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import { a as e } from "./rolldown-runtime-B0Z9INg1.js";
import { t } from "./jsx-runtime-Ciaf_P-h.js";
import { t as n } from "./button-6T-mn2Pp.js";
import { t as r } from "./IconArrowRight-DerOrAJ3.js";
import { i } from "./playground-BFoI71NC.js";
import { t as a } from "./text-link-BeCRHyfK.js";
import { t as o } from "./drawer-BhrHYSlC.js";
var s = e(t(), 1),
  {
    Drawer: c,
    DrawerContent: l,
    DrawerDescription: u,
    DrawerTitle: d,
    DrawerTrigger: f
  } = i(`drawer`, o),
  p = `https://vaul.emilkowal.ski`;
function m() {
  return (0, s.jsxs)(c, {
    children: [(0, s.jsx)(f, {
      asChild: !0,
      children: (0, s.jsx)(n, {
        variant: `outline`,
        children: `Open drawer`
      })
    }), (0, s.jsx)(l, {
      children: <div className={`flex-1 overflow-y-auto`}>{<div className={`mx-auto w-full max-w-[34rem] px-6 pt-12 pb-16`}>{[(0, s.jsx)(d, {
            className: `text-base`,
            children: `Drawer for React.`
          }), <div className={`mt-5 space-y-5 text-base leading-7 text-foreground/80`}>{[(0, s.jsx)(u, {
              className: `text-base leading-7 text-foreground/80`,
              children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
            }), <p>{`Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}</p>, <p>{[`This one is `, (0, s.jsx)(a, {
                href: p,
                children: `Vaul`
              }), `, the unstyled drawer for React made by `, (0, s.jsx)(a, {
                href: `https://emilkowal.ski`,
                children: `Emil Kowalski`
              }), `, restyled with Kobra’s tokens. Drag the handle down to dismiss it, or press Escape. The page behind scales back while it is open.`]}</p>]}</div>, <a href={`${p}/getting-started`} target={`_blank`} rel={`noreferrer`} className={`group mt-6 inline-flex items-center gap-2.5 rounded-xs text-base text-foreground transition-ring focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none`}>{[(0, s.jsx)(r, {
              className: `size-4`,
              "aria-hidden": !0
            }), <span className={`underline decoration-foreground/35 underline-offset-[3px] group-hover:decoration-foreground`}>{`Read the Vaul documentation`}</span>]}</a>]}</div>}</div>
    })]
  });
}
export { m as default };

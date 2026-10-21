// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module31908 from "./jsx-runtime-31908.js";
import * as _module45032 from "./45032.js";
import * as _module63390 from "./63390.js";
import * as _module71175 from "./71175.js";
import * as _module64973 from "./64973.js";
import * as _module11235 from "./11235.js";
import * as _module95074 from "./95074.js";
import * as _module18687 from "./18687.js";
import * as _module23422 from "./23422.js";
var c = _module31908;
var d = _module45032;
var tB = _module63390,
  tB = tB;
var nN = _module71175,
  nN = nN,
  nD = _module64973,
  nO = _module11235;
let nA = function ({
  size: e = "12px",
  ...t
}) {
  return <svg xmlns={"http://www.w3.org/2000/svg"} x={"0px"} y={"0px"} width={e} height={e} viewBox={"0 0 12 12"} {...t}>{[<path d={"M10.5 6C10.5 3.51472 8.48528 1.5 6 1.5C3.51472 1.5 1.5 3.51472 1.5 6C1.5 8.48528 3.51472 10.5 6 10.5C8.48528 10.5 10.5 8.48528 10.5 6ZM12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6Z"} fill={"currentColor"} />, <path d={"M6 9.5C7.933 9.5 9.5 7.933 9.5 6C9.5 4.067 7.933 2.5 6 2.5V9.5Z"} fill={"currentColor"} data-color={"color-2"} />]}</svg>;
};
var nj = _module95074;
function nI() {
  let e = (0, nj.useThemeStore)(e => e.dark),
    t = (0, nj.useThemeStore)(e => e.toggle);
  return <button type={"button"} onClick={t} aria-label={e ? "Switch to light mode" : "Switch to dark mode"} aria-pressed={e} className={"theme-transition inset-hairline relative z-10 flex size-9 shrink-0 items-center justify-center rounded-full bg-black/6 text-[#3a3a3a] outline-none hover:bg-black/10 focus-visible:ring-2 focus-visible:ring-ink/15 active:scale-[0.98] sm:size-8 dark:bg-white/10 dark:text-white/80 dark:hover:bg-white/14"}>{(0, c.jsx)(nA, {
      size: "12px"
    })}</button>;
}
function nL({
  className: e
}) {
  return <svg className={e} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"}>{<path d={"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"} />}</svg>;
}
function nH({
  className: e
}) {
  return <svg className={e} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>{[<path d={"M3 10.5 12 3l9 7.5"} />, <path d={"M5 9.5V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5"} />]}</svg>;
}
var nF = _module18687;
let nW = [{
  slug: "content-alignment",
  title: "Content alignment",
  navLabel: "Content alignment",
  description: "Align titles and descriptions to a shared content inset across grouped settings.",
  lede: "Grouped settings feel calm when every title and description shares the same left edge — across cards, not just within one row.",
  body: ["Section headings sit outside the card; the content inside starts on a fixed inset. That inset is the alignment grid. Language, Appearance, Full name, and Profile photo all begin on the same vertical line.", "When padding drifts per row — or a control pushes text sideways — the stack looks accidental. Prefer one content inset for every text column in the group.", "Toggle the guides to see the shared edge. Keep it, and the page reads as one composition instead of four independent blocks."]
}, {
  slug: "icon-button-alignment",
  title: "Icon button alignment",
  navLabel: "Icon button alignment",
  description: "Keep interactive content aligned to shared inset boundaries when icons appear or disappear.",
  lede: "When a leading icon comes and goes, padding should compensate so the label stays on the same vertical rhythm — not jump sideways.",
  body: ["Shared inset boundaries make a toolbar feel intentional. Draw (or imagine) guide lines at the outer edge and at the content padding. Every control — with or without a start icon — should hug those same lines.", "A common mistake is keeping fixed horizontal padding when an icon is removed. The label drifts left and the optical edge of the control breaks. Prefer a compact leading padding when the icon is present, and restore full padding when it is not.", "Toggle the controls in the demo. Watch how the orange guides stay fixed while the button’s internal padding absorbs the icon."]
}, {
  slug: "transition-on-hover",
  title: "Transition on hover",
  navLabel: "Transition",
  strike: "on hover",
  description: "Hover highlights should snap instantly — disable transitions on hover with hover:transition-none.",
  lede: "Hover is feedback, not choreography. If a row fades into its hover background, the UI feels laggy even when everything else is fast.",
  body: ["Many design systems apply a global transition on color and background. That is fine for theme changes and presses — not for hover. The pointer already implies immediacy; a 150ms ease fights that expectation.", "Tailwind’s hover:transition-none (paired with a base transition for other states) keeps press and theme motion while making hover backgrounds snappy.", "Use the toggle below to compare softened hover transitions against the corrected behavior."]
}, {
  slug: "hit-slop-area",
  title: "Hit slop area",
  navLabel: "Hit slop area",
  description: "Expand pointer targets beyond the painted control so knobs and small hits stay easy to grab.",
  lede: "A 12px knob looks precise. A 12px hit target feels hostile. Give the finger or cursor a larger invisible target without changing the visual.",
  body: ["Hit slop (or hit area padding) is the invisible expansion around a control. On a color picker, each knob keeps its small face for alignment, while a ::after pseudo-element extends the capture region by a few pixels.", "Reveal the hit areas in the demo to see the soft blue pads. They sit behind the knob face (via isolation / z-index) but still receive pointer events — so dragging never feels finicky."]
}, {
  slug: "shadows-on-dark-mode",
  title: "Shadows on dark mode",
  navLabel: "Shadows on dark mode",
  description: "Drop shadows vanish on dark surfaces — switch to inset highlights when the theme flips.",
  lede: "A soft black shadow on a near-black canvas reads as nothing. Dark UI needs a different elevation language.",
  body: ["In light mode, elevation is cast shadow: outer blurs that separate a surface from the page. In dark mode those same layers disappear into the background.", "Prefer an inset highlight — a thin top-edge light — to suggest the same lift. Transition both the fill and the shadow stack when the theme changes so the swap feels continuous, not abrupt.", "Toggle dark mode in the demo and watch the card trade its outer shadow for an inner rim of light."]
}, {
  slug: "interactive-colors",
  title: "Interactive colors",
  navLabel: "Interactive colors",
  description: "Hover and press fills should be translucent black or white — not a fixed gray that only works on one panel.",
  lede: "A #F4F4F5 hover looks calm on white. Drop the same control on a darker panel and it flashes. Interactive color is an overlay, not a swatch.",
  body: ["Steady grays are mixed for one background. The moment a row, toolbar, or menu sits on a different panel — a sidebar, a tinted canvas, a grouped table — that hover turns into a blotch.", "Prefer translucent black in light mode and translucent white in dark mode. The wash borrows the surface underneath, so the same 5% overlay reads as a hover on every panel color.", {
    type: "code",
    language: "tsx",
    fileName: "hover.ts",
    notes: [{
      match: "bg-black/5",
      text: "Light mode: a black wash on whatever sits behind."
    }, {
      match: "bg-white/8",
      text: "Dark mode: a white wash — same idea, inverted ink."
    }],
    code: `const interactive = "hover:bg-black/5 dark:hover:bg-white/8";
const steady = "hover:bg-zinc-100 dark:hover:bg-zinc-800";`
  }, "Toggle the darker background in the demo. Static fills stay glued to their original gray; interactive fills keep their contrast."]
}, {
  slug: "notification-de-duplication",
  title: "Notification de-duplication",
  navLabel: "Notification de-duplication",
  description: "Reuse a stable toast id so repeated actions update one notification instead of stacking duplicates.",
  lede: "“Save draft” five times should not mean five identical toasts. Idempotent notifications keep the stack calm.",
  body: ["When a toast is created with a stable id, subsequent calls with the same id update the existing toast (and can pulse to acknowledge the repeat) instead of pushing another card.", "Turn deduplication off to see the naive stack grow. Turn it on and mash Save draft — one toast, refreshed in place."]
}, {
  slug: "shared-layout-tooltips",
  title: "Shared layout tooltips",
  navLabel: "Shared layout tooltips",
  description: "Grouped controls should share one tooltip so the bubble morphs between triggers with direction-aware text.",
  lede: "In a tight control cluster, separate tooltips feel like doors slamming. One shared tooltip keeps the bubble alive and lets label text hand off left or right.",
  body: ["Grouped icon buttons belong to one composition. Give them a single Base UI tooltip via Tooltip.createHandle — every trigger passes a payload, and one Tooltip.Root renders the active label. The positioner and popup can then transition top/left and width/height as the pointer moves across the group.", {
    type: "code",
    language: "tsx",
    fileName: "SharedTooltip.tsx",
    notes: [{
      match: "Tooltip.createHandle",
      text: "One handle for the whole cluster — every trigger shares it."
    }, {
      match: "<Tooltip.Viewport",
      text: "Viewport enables the directional handoff as the pointer moves."
    }],
    code: `import { Tooltip } from "@base-ui/react/tooltip";

const tooltip = Tooltip.createHandle<string>();

<Tooltip.Provider delay={50} closeDelay={50} timeout={50}>
  {controls.map((control) => (
    <Tooltip.Trigger
      key={control.id}
      handle={tooltip}
      payload={control.label}
    >
      {control.icon}
    </Tooltip.Trigger>
  ))}

  <Tooltip.Root handle={tooltip}>
    {({ payload }) => (
      <Tooltip.Portal>
        <Tooltip.Positioner
          sideOffset={8}
          className="h-[var(--positioner-height)] w-[var(--positioner-width)] transition-[top,left,right,bottom] duration-200"
        >
          <Tooltip.Popup className="transition-[width,height,opacity,transform] duration-200">
            <Tooltip.Viewport
              className="
                overflow-clip
                data-[activation-direction~=left]:[&_[data-previous][data-ending-style]]:translate-x-1/2
                data-[activation-direction~=left]:[&_[data-previous][data-ending-style]]:opacity-0
                data-[activation-direction~=right]:[&_[data-previous][data-ending-style]]:-translate-x-1/2
                data-[activation-direction~=right]:[&_[data-previous][data-ending-style]]:opacity-0
                data-[activation-direction~=left]:[&_[data-current][data-starting-style]]:-translate-x-1/2
                data-[activation-direction~=right]:[&_[data-current][data-starting-style]]:translate-x-1/2
              "
            >
              {payload}
            </Tooltip.Viewport>
          </Tooltip.Popup>
        </Tooltip.Positioner>
      </Tooltip.Portal>
    )}
  </Tooltip.Root>
</Tooltip.Provider>`
  }, "Wrap the label in Tooltip.Viewport to enable location-aware content animation. data-activation-direction reports whether the new trigger sits left or right of the previous one; fade the outgoing text out toward the opposite side and the incoming text in from the travel direction.", "Toggle Shared tooltip off to feel the naive pattern: each control owns its own root, so the bubble dismisses and reopens. Turn it on and sweep across Bold → Italic → Underline → Link — one surface, shared layout motion, directional text. The Delete control beside the group stays on its own root either way — only clustered actions should share a handle."]
}];
var nB = _module23422;
let nY = "theme-transition inset-hairline relative z-10 flex size-9 shrink-0 items-center justify-center rounded-full bg-black/6 text-[#3a3a3a] outline-none hover:bg-black/10 focus-visible:ring-2 focus-visible:ring-ink/15 active:scale-[0.98] sm:size-8 dark:bg-white/10 dark:text-white/80 dark:hover:bg-white/14",
  n_ = "theme-transition flex h-8 items-center gap-1 rounded-full px-3 text-[13px] font-medium tracking-[-0.13px] text-mute outline-none select-none hover:text-ink focus-visible:ring-2 focus-visible:ring-ink/15 data-popup-open:inset-hairline data-popup-open:bg-black/[0.05] data-popup-open:text-ink data-[active=true]:inset-hairline data-[active=true]:bg-black/[0.05] data-[active=true]:text-ink dark:data-popup-open:bg-white/[0.08] dark:data-[active=true]:bg-white/[0.08]",
  nV = "w-[calc(100vw-40px)] p-1.5 sm:w-max transition-[opacity,translate] duration-[var(--duration)] ease-[var(--easing)] data-starting-style:opacity-0 data-ending-style:opacity-0 data-starting-style:data-[activation-direction=left]:-translate-x-8 data-starting-style:data-[activation-direction=right]:translate-x-8 data-ending-style:data-[activation-direction=left]:translate-x-8 data-ending-style:data-[activation-direction=right]:-translate-x-8";
function n$({
  tip: e
}) {
  return e.strike ? (0, c.jsxs)(c.Fragment, {
    children: [e.navLabel, " ", <span className={"line-through decoration-from-font"}>{e.strike}</span>]
  }) : (0, c.jsx)(c.Fragment, {
    children: e.navLabel
  });
}
function nz({
  href: e,
  active: t,
  children: n
}) {
  return (0, c.jsx)(nN.Link, {
    render: (0, c.jsx)(nD.default, {
      href: e
    }),
    "aria-current": t ? "page" : void 0,
    className: "flex items-center gap-3 rounded-[10px] px-2.5 py-2 text-left outline-none hover:bg-black/[0.04] focus-visible:bg-black/[0.04] hover:inset-hairline aria-[current=page]:inset-hairline aria-[current=page]:bg-black/[0.05] dark:hover:bg-white/[0.06] dark:focus-visible:bg-white/[0.06] dark:aria-[current=page]:bg-white/[0.08]",
    children: n
  });
}
function nX({
  label: e,
  items: t,
  pathname: n
}) {
  return (0, c.jsxs)(nN.Item, {
    children: [(0, c.jsxs)(nN.Trigger, {
      className: n_,
      "data-active": t.some(e => n.startsWith(e.href)),
      children: [e, (0, c.jsx)(nN.Icon, {
        className: "transition-transform duration-200 data-popup-open:rotate-180",
        children: (0, c.jsx)(nK, {})
      })]
    }), (0, c.jsx)(nN.Content, {
      className: nV,
      children: <ul className={"flex flex-col gap-0.5 sm:w-[300px]"}>{t.map(e => <li key={e.slug}>{(0, c.jsxs)(nz, {
            href: e.href,
            active: n.startsWith(e.href),
            children: [(0, c.jsx)(nB.CatalogIcon, {
              variant: e.icon
            }), <span className={"flex min-w-0 flex-col"}>{[<span className={"text-[13px] font-medium leading-5 text-ink"}>{e.name}</span>, <span className={"truncate text-xs leading-4 text-mute"}>{e.tagline}</span>]}</span>]
          })}</li>)}</ul>
    })]
  });
}
function nU({
  pathname: e
}) {
  return (0, c.jsxs)(nN.Root, {
    className: "hidden md:block",
    children: [(0, c.jsxs)(nN.List, {
      className: "flex items-center gap-0.5",
      children: [(0, c.jsx)(nX, {
        label: "Libraries",
        items: nF.LIBRARIES,
        pathname: e
      }), (0, c.jsx)(nX, {
        label: "Utilities",
        items: nF.UTILITIES,
        pathname: e
      }), (0, c.jsxs)(nN.Item, {
        children: [(0, c.jsxs)(nN.Trigger, {
          className: n_,
          "data-active": e.startsWith("/tips/"),
          children: ["Principles", (0, c.jsx)(nN.Icon, {
            className: "transition-transform duration-200 data-popup-open:rotate-180",
            children: (0, c.jsx)(nK, {})
          })]
        }), (0, c.jsx)(nN.Content, {
          className: nV,
          children: <ul className={"grid gap-0.5 sm:w-[440px] sm:grid-cols-2"}>{nW.map(t => {
              let n = `/tips/${t.slug}`;
              return <li key={t.slug}>{(0, c.jsx)(nz, {
                  href: n,
                  active: e === n,
                  children: <span className={"text-[13px] leading-5 text-ink"}>{(0, c.jsx)(n$, {
                      tip: t
                    })}</span>
                })}</li>;
            })}</ul>
        })]
      })]
    }), (0, c.jsx)(nN.Portal, {
      children: (0, c.jsx)(nN.Positioner, {
        sideOffset: 8,
        collisionPadding: {
          top: 8,
          bottom: 8,
          left: 16,
          right: 16
        },
        collisionAvoidance: {
          side: "none"
        },
        className: "z-50 h-(--positioner-height) w-(--positioner-width) max-w-(--available-width) transition-[top,left,right,bottom] duration-(--duration) ease-(--easing) before:absolute before:inset-x-0 before:-top-2 before:h-2 before:content-[''] data-instant:transition-none",
        style: {
          "--duration": "0.32s",
          "--easing": "cubic-bezier(0.22, 1, 0.36, 1)"
        },
        children: (0, c.jsx)(nN.Popup, {
          className: "theme-transition relative h-(--popup-height) w-(--popup-width) origin-(--transform-origin) rounded-[16px] bg-panel shadow-[0_12px_32px_-8px_rgb(0_0_0/0.16),0_2px_6px_rgb(0_0_0/0.04)] ring-[0.5px] ring-black/10 outline-none transition-[opacity,scale,width,height] duration-(--duration) ease-(--easing) data-ending-style:scale-[0.97] data-ending-style:opacity-0 data-ending-style:duration-150 data-starting-style:scale-[0.97] data-starting-style:opacity-0 dark:shadow-[0_12px_32px_-8px_rgb(0_0_0/0.6)] dark:ring-white/10",
          children: (0, c.jsx)(nN.Viewport, {
            className: "relative h-full w-full overflow-hidden"
          })
        })
      })
    })]
  });
}
function nq({
  title: e,
  children: t
}) {
  return <nav aria-label={e} className={"flex flex-col gap-1.5"}>{[<p className={"px-2 text-xs font-medium leading-5 text-mute"}>{e}</p>, <ul className={"flex flex-col gap-0.5"}>{t}</ul>]}</nav>;
}
function nG({
  pathname: e,
  onNavigate: t
}) {
  let n = "flex items-center gap-2.5 rounded-[10px] px-2 py-2 text-[14px] leading-5 text-ink outline-none aria-[current=page]:inset-hairline aria-[current=page]:bg-black/[0.06] dark:aria-[current=page]:bg-white/[0.08]";
  return <div className={"flex flex-col gap-5"}>{[[["Libraries", nF.LIBRARIES], ["Utilities", nF.UTILITIES]].map(([r, o]) => (0, c.jsx)(nq, {
      title: r,
      children: o.map(r => <li key={r.slug}>{(0, c.jsxs)(nD.default, {
          href: r.href,
          onClick: t,
          "aria-current": e.startsWith(r.href) ? "page" : void 0,
          className: n,
          children: [(0, c.jsx)(nB.CatalogIcon, {
            variant: r.icon
          }), r.name]
        })}</li>)
    }, r)), (0, c.jsx)(nq, {
      title: "Principles",
      children: nW.map(r => {
        let o = `/tips/${r.slug}`;
        return <li key={r.slug}>{(0, c.jsx)(nD.default, {
            href: o,
            onClick: t,
            "aria-current": e === o ? "page" : void 0,
            className: n,
            children: <span>{(0, c.jsx)(n$, {
                tip: r
              })}</span>
          })}</li>;
      })
    })]}</div>;
}
function nK() {
  return <svg viewBox={"0 0 12 12"} className={"size-3 opacity-60"} fill={"none"} aria-hidden={!0}>{<path d={"M3 4.5 6 7.5l3-3"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} />}</svg>;
}
function nJ({
  open: e
}) {
  return <svg viewBox={"0 0 16 16"} fill={"none"} aria-hidden={!0} className={"size-4"}>{e ? <path d={"M4 4l8 8M12 4l-8 8"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} /> : <path d={"M3 5h10M3 8h10M3 11h10"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} />}</svg>;
}
const _export_SiteNav = function () {
  let e = (0, nO.usePathname)(),
    [t, n] = (0, d.useState)(!1),
    [r, o] = (0, d.useState)(e);
  return r !== e && (o(e), t && n(!1)), <header className={"theme-transition sticky top-0 z-40 bg-page/85 backdrop-blur-md"}>{<div className={"mx-auto flex h-14 w-full max-w-[1200px] items-center justify-between gap-4 px-4 sm:px-6"}>{[<div className={"flex items-center gap-6"}>{[(0, c.jsx)(nD.default, {
          href: "/",
          className: "rounded-md text-[15px] font-semibold tracking-[-0.3px] text-ink outline-none focus-visible:ring-2 focus-visible:ring-ink/15",
          children: <span>{["movements", <span className={"font-normal text-mute"}>{".dev"}</span>]}</span>
        }), (0, c.jsx)(nU, {
          pathname: e
        })]}</div>, <div className={"flex items-center gap-1"}>{[<a href={"/api/go/twitter"} aria-label={"Nick on X"} className={nY}>{(0, c.jsx)(nL, {
            className: "size-3"
          })}</a>, <a href={"/api/go/homepage"} aria-label={"Back to nick.qa"} className={nY}>{(0, c.jsx)(nH, {
            className: "size-3.5"
          })}</a>, (0, c.jsx)(nI, {}), (0, c.jsxs)(tB.Root, {
          open: t,
          onOpenChange: n,
          swipeDirection: "down",
          children: [(0, c.jsx)(tB.Trigger, {
            className: `${nY} md:hidden`,
            "aria-label": t ? "Close menu" : "Open menu",
            children: (0, c.jsx)(nJ, {
              open: t
            })
          }), (0, c.jsxs)(tB.Portal, {
            children: [(0, c.jsx)(tB.Backdrop, {
              className: "fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] data-ending-style:opacity-0 data-starting-style:opacity-0 dark:bg-black/60"
            }), (0, c.jsx)(tB.Viewport, {
              className: "pointer-events-none fixed inset-0 z-50 flex items-end justify-center p-1 data-open:pointer-events-auto",
              children: (0, c.jsx)(tB.Popup, {
                className: "mobile-drawer-popup theme-transition pointer-events-auto relative flex max-h-[calc(85dvh-8px)] w-full max-w-lg flex-col rounded-[20px] bg-page shadow-[0_8px_40px_rgb(0_0_0/0.14)] ring-[0.5px] ring-black/8 outline-none dark:ring-white/10",
                children: (0, c.jsxs)(tB.Content, {
                  className: "flex min-h-0 flex-1 flex-col overflow-hidden",
                  children: [<div className={"flex shrink-0 flex-col items-center pt-3 pb-2"}>{[<div className={"h-1 w-10 rounded-full bg-black/12 dark:bg-white/16"} />, (0, c.jsx)(tB.Title, {
                      className: "sr-only",
                      children: "Menu"
                    })]}</div>, <div className={"min-h-0 flex-1 overflow-y-auto px-3 pb-5"} data-base-ui-swipe-ignore={!0}>{(0, c.jsx)(nG, {
                      pathname: e,
                      onNavigate: () => n(!1)
                    })}</div>]
                })
              })
            })]
          })]
        })]}</div>]}</div>}</header>;
};
export { _export_SiteNav as SiteNav };

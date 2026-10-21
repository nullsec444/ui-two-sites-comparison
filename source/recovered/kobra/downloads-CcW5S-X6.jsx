// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import { a as e } from "./rolldown-runtime-B0Z9INg1.js";
import { n as t, t as n } from "./jsx-runtime-Ciaf_P-h.js";
import { f as r, l as i, t as a } from "./auth-B4_ie6aM.js";
import { n as o } from "./useStore-CeyF0_C9.js";
import { t as s } from "./link-CKv6YT18.js";
import { n as c } from "./auth-form-B7xuKosH.js";
import { h as l, n as u } from "./queries-VI_aT-w4.js";
import { t as d } from "./useSuspenseQuery-qokUvqgA.js";
import { n as f, t as p } from "./account-shell-CSL5M_sN.js";
import { t as m } from "./utils-WkhMP9hs.js";
import { t as h } from "./button-6T-mn2Pp.js";
import { t as g } from "./IconPlus-CcZsF6UA.js";
import { t as _ } from "./IconDownload-D9S_20lD.js";
import { t as v } from "./code-block-8j4abSW0.js";
import { a as y, n as b, o as x, r as S, s as C, t as w } from "./tooltip-C51luKYh.js";
import { i as T, n as E } from "./copy-check-C8jXc5g7.js";
import { c as D, l as O, m as k, u as A } from "./index-C2FRa1ig.js";
import { t as j } from "./password-input-rfTSAwzh.js";
import { a as M, c as N, i as P, n as F, o as I, s as L, t as R } from "./registry-B0pwistY.js";
import { n as z, o as B, s as V, t as H } from "./agent-guide-BI8j0aKR.js";
import { t as U } from "./download-zip-C0to-1sI.js";
var W = e(t(), 1),
  G = i({
    method: `GET`
  }).middleware([a]).handler(r(`aad6de14a09dd6c325b92d352f08d5cfeb4815043a846546c38518245c26cb88`)),
  K = e(n(), 1);
function q() {
  let {
      data: e
    } = d(D()),
    {
      data: t
    } = d(u()),
    n = l(),
    r = o(),
    [i, a] = (0, W.useState)(!1),
    [s, p] = (0, W.useState)(null),
    _ = e?.token ?? null,
    y = _ !== null,
    b = f({
      mutationFn: () => A(),
      onSuccess: async () => {
        p(null), a(!1), O(n), await r.invalidate();
      },
      onError: e => {
        p(e instanceof Error ? e.message : `Could not create a token`);
      }
    });
  return <div className={`flex flex-col gap-10`}>{[<div className={`flex flex-col gap-3`}>{[<h1 className={`text-2xl font-semibold tracking-tight sm:text-3xl`}>{`Downloads`}</h1>, <p className={`max-w-[52ch] text-muted-foreground`}>{`The components install through the shadcn CLI, and the same token lets your agent read the catalog directly.`}</p>]}</div>, <section className={`flex flex-col gap-3`}>{[<div className={`flex flex-wrap items-start justify-between gap-x-8 gap-y-3`}>{[<div className={`flex flex-col gap-1`}>{[<h2 className={`text-lg font-semibold tracking-tight`}>{`1. Get your token`}</h2>, <p className={`max-w-[52ch] text-base text-muted-foreground`}>{`One token for the registry and the MCP server:`}</p>]}</div>, (0, K.jsx)(h, {
          variant: e ? `secondary` : `default`,
          className: `shrink-0 rounded-full`,
          "aria-busy": b.isPending,
          onClick: () => {
            b.isPending || b.mutate();
          },
          children: (0, K.jsx)(c, {
            busy: b.isPending,
            children: e ? `Regenerate` : `Generate token`
          })
        })]}</div>, (0, K.jsx)(v, {
        code: `export ${M}=${_ ? i ? _ : X(_) : `kobra_…`}`,
        copyText: _ ? `export ${M}=${_}` : void 0,
        filename: `~/.zshrc`,
        download: !1,
        language: `sh`,
        lineNumbers: !1,
        actions: e => _ ? (0, K.jsx)(Y, {
          tip: e,
          revealed: i,
          onToggle: a
        }) : null
      }), <p className={m(`text-base`, y ? `text-muted-foreground` : `text-foreground`)}>{_ ? `Regenerating ends this one at once, everywhere it is already in use.` : e ? `This token predates us keeping them readable, so there is nothing here to show. Press Regenerate for one you can come back to — it ends the old one at once, everywhere it is already in use.` : `Generate one to fill in the line above.`}</p>, s ? <p role={`alert`} className={`text-base text-destructive`}>{s}</p> : null]}</section>, <section className={`flex flex-col gap-3`}>{[<div className={`flex flex-col gap-1`}>{<h2 className={`text-lg font-semibold tracking-tight`}>{`2. Set up the registry`}</h2>}</div>, <div className={`flex flex-col gap-1.5`}>{[<p className={`max-w-[52ch] text-base text-muted-foreground`}>{`At the root of your project:`}</p>, (0, K.jsx)(v, {
          code: P,
          filename: `components.json`,
          language: `ts`,
          lineNumbers: !1
        })]}</div>, <div className={`flex flex-col gap-1.5`}>{[<p className={`max-w-[52ch] text-base text-muted-foreground`}>{`Then pull in whichever components you want, one name at a time:`}</p>, (0, K.jsx)(v, {
          code: I(`button`),
          filename: `Terminal`,
          download: !1,
          language: `sh`,
          lineNumbers: !1
        })]}</div>]}</section>, <section className={`flex flex-col gap-3`}>{[<div className={`flex flex-col gap-1`}>{[<h2 className={`text-lg font-semibold tracking-tight`}>{`3. Point your agent at it`}</h2>, <p className={`max-w-[52ch] text-base text-muted-foreground`}>{`Every component, the install command and the rules for styling them, in one file an agent can read in a second. No token needed:`}</p>]}</div>, (0, K.jsx)(v, {
        code: H,
        filename: `Terminal`,
        download: !1,
        language: `sh`,
        lineNumbers: !1
      }), <p className={`max-w-[52ch] text-base text-muted-foreground`}>{[`It carries the house style too — the palette, the type, the radius, the motion — and is served at`, ` `, <a href={z} className={`text-foreground underline underline-offset-4 hover:text-foreground/80`}>{z.replace(`https://`, ``)}</a>, ` `, `for anyone who asks for it by that name.`]}</p>]}</section>, <section className={`flex flex-col gap-3`}>{[<div className={`flex flex-col gap-1`}>{[<h2 className={`text-lg font-semibold tracking-tight`}>{`4. Install the MCP server`}</h2>, <p className={`max-w-[52ch] text-base text-muted-foreground`}>{`Lets an agent search the catalog and read a component’s props and source without being handed a file first.`}</p>]}</div>, <div className={`border-t border-border [&_p]:text-base`}>{[(0, K.jsx)(k, {
          label: `Cursor`,
          hint: _ ? `One click. Cursor asks you to confirm.` : `Generate a token first.`,
          children: _ ? (0, K.jsxs)(h, {
            variant: `secondary`,
            className: `rounded-full`,
            nativeButton: !1,
            render: <a href={L(_)} />,
            children: [(0, K.jsx)(g, {
              size: 16,
              stroke: 2,
              "aria-hidden": !0
            }), `Add to Cursor`]
          }) : (0, K.jsxs)(h, {
            variant: `secondary`,
            className: `rounded-full`,
            disabled: !0,
            children: [(0, K.jsx)(g, {
              size: 16,
              stroke: 2,
              "aria-hidden": !0
            }), `Add to Cursor`]
          })
        }), (0, K.jsx)(k, {
          label: `VS Code`,
          hint: _ ? `One click. VS Code asks you to confirm.` : `Generate a token first.`,
          children: _ ? (0, K.jsxs)(h, {
            variant: `secondary`,
            className: `rounded-full`,
            nativeButton: !1,
            render: <a href={N(_)} />,
            children: [(0, K.jsx)(g, {
              size: 16,
              stroke: 2,
              "aria-hidden": !0
            }), `Add to VS Code`]
          }) : (0, K.jsxs)(h, {
            variant: `secondary`,
            className: `rounded-full`,
            disabled: !0,
            children: [(0, K.jsx)(g, {
              size: 16,
              stroke: 2,
              "aria-hidden": !0
            }), `Add to VS Code`]
          })
        }), <div className={`border-b border-border py-5`}>{[(0, K.jsx)(k, {
            label: `Claude Code`,
            hint: `Adds it to this project. Run it where your project is:`,
            className: `border-0 py-0`
          }), (0, K.jsx)(v, {
            code: R,
            filename: `Terminal`,
            download: !1,
            language: `sh`,
            lineNumbers: !1,
            className: `mt-4`
          })]}</div>, <div className={`py-5`}>{[(0, K.jsx)(k, {
            label: `Everything else`,
            hint: `Paste into the editor's MCP config:`,
            className: `border-0 py-0`
          }), (0, K.jsx)(v, {
            code: F,
            filename: `mcp.json`,
            language: `ts`,
            lineNumbers: !1,
            className: `mt-4`
          })]}</div>]}</div>]}</section>, <section className={`flex flex-col gap-3`}>{[<div className={`flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-8`}>{[<div className={`flex min-w-0 flex-col gap-1`}>{[<h2 className={`text-lg font-semibold tracking-tight`}>{`5. Install the skills`}</h2>, <p className={`max-w-[52ch] text-base text-muted-foreground`}>{`Agent skills for motion, sound and migration.`}</p>]}</div>, (0, K.jsx)(J, {})]}</div>, <div className={`border-t border-border`}>{B.map(e => (0, K.jsx)(Z, {
          skill: e,
          seated: t.seat !== null
        }, e.slug))}</div>]}</section>]}</div>;
}
function J() {
  let [e, t] = T(),
    [n] = (0, W.useState)(() => C());
  return <div className={`flex max-w-full min-w-0 items-center gap-2 rounded-full border bg-card py-1 pr-1 pl-4 md:shrink-0`}>{[<code className={`min-w-0 flex-1 truncate font-mono text-xs text-muted-foreground select-all`}>{V}</code>, (0, K.jsx)(y, {
      handle: n,
      payload: e ? `Copied` : `Copy`,
      type: `button`,
      "aria-label": `Copy the skills install command`,
      "data-sound": `copy`,
      onClick: async () => {
        try {
          await navigator.clipboard.writeText(V);
        } catch {
          return;
        }
        t();
      },
      closeOnClick: !1,
      className: `flex size-7 shrink-0 cursor-pointer items-center justify-center rounded-full text-muted-foreground transition-ring outline-none hover:bg-foreground/5 hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50`,
      children: (0, K.jsx)(E, {
        copied: e,
        size: 16
      })
    }), (0, K.jsx)(b, {
      handle: n,
      children: ({
        payload: e
      }) => (0, K.jsx)(S, {
        children: (0, K.jsx)(x, {
          children: (0, K.jsx)(w, {
            children: e ?? ``
          })
        })
      })
    })]}</div>;
}
function Y({
  tip: e,
  revealed: t,
  onToggle: n
}) {
  return (0, K.jsx)(y, {
    handle: e,
    payload: t ? `Hide` : `Reveal`,
    type: `button`,
    "aria-label": t ? `Hide the token` : `Reveal the token`,
    "aria-pressed": t,
    closeOnClick: !1,
    onClick: () => n(e => !e),
    className: `flex size-7 shrink-0 cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-ring outline-none hover:bg-foreground/5 hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50`,
    children: (0, K.jsx)(j, {
      revealed: t
    })
  });
}
var X = e => {
  let [t, ...n] = e.split(`_`);
  return `${t}_${`•`.repeat(n.join(`_`).length)}`;
};
function Z({
  skill: e,
  seated: t
}) {
  let [n, r] = (0, W.useState)(null),
    i = f({
      mutationFn: () => G({
        data: {
          slug: e.slug
        }
      }),
      onSuccess: t => {
        if (!t.entitled) {
          r(`The skills come with a plan.`);
          return;
        }
        r(null), U(e.slug, t.files);
      },
      onError: e => {
        r(e instanceof Error ? e.message : `Could not fetch the skill`);
      }
    });
  return (0, K.jsx)(k, {
    label: e.name,
    hint: n ? <span role={`alert`} className={`text-destructive`}>{n}</span> : e.description,
    children: e.ready ? t ? (0, K.jsx)(h, {
      variant: `secondary`,
      className: `rounded-full`,
      "aria-busy": i.isPending,
      onClick: () => {
        i.isPending || i.mutate();
      },
      children: (0, K.jsxs)(c, {
        busy: i.isPending,
        children: [(0, K.jsx)(_, {
          size: 16,
          stroke: 2,
          "aria-hidden": !0
        }), `Download`]
      })
    }) : (0, K.jsx)(h, {
      variant: `secondary`,
      className: `rounded-full`,
      nativeButton: !1,
      render: (0, K.jsx)(s, {
        to: `/pricing`,
        hash: `plans`
      }),
      children: `Get Pro`
    }) : (0, K.jsxs)(h, {
      variant: `secondary`,
      className: `rounded-full`,
      disabled: !0,
      children: [(0, K.jsx)(_, {
        size: 16,
        stroke: 2,
        "aria-hidden": !0
      }), `Download`]
    })
  });
}
function Q() {
  return (0, K.jsx)(p, {
    current: `downloads`,
    children: (0, K.jsx)(q, {})
  });
}
export { Q as component };

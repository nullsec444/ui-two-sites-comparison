// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import { a as e } from "./rolldown-runtime-B0Z9INg1.js";
import { n as t, t as n } from "./jsx-runtime-Ciaf_P-h.js";
import { n as r } from "./useStore-CeyF0_C9.js";
import { t as i } from "./link-CKv6YT18.js";
import { n as a } from "./auth-form-B7xuKosH.js";
import { h as o, i as s, n as c } from "./queries-VI_aT-w4.js";
import { t as l } from "./useSuspenseQuery-qokUvqgA.js";
import { n as u, t as d } from "./account-shell-CSL5M_sN.js";
import { t as f } from "./utils-WkhMP9hs.js";
import { t as p } from "./button-6T-mn2Pp.js";
import { i as m, n as h } from "./plans-C5gnmWKf.js";
import { t as g } from "./input-n4StpLEZ.js";
import { a as _, c as v, i as y, o as b, r as x, s as S } from "./dialog-D5lt4KMe.js";
import { t as C } from "./createReactComponent-DqK5J7gw.js";
import { n as w } from "./toast-DvN-c943.js";
import { t as ee } from "./IconSearch-DLrEp44H.js";
import { t as T } from "./IconUser-dpBZ37qP.js";
import { K as E, Y as te, i as D, l as O, n as k, p as A, q as ne, t as j } from "./dropdown-menu-BXn32Y_k.js";
import { a as re, i as M, o as N, r as P } from "./index-C2FRa1ig.js";
import { t as F } from "./label-kY8Qa3sh.js";
import { i as ie, n as ae, t as oe } from "./input-group-BYgV-9P-.js";
import { t as I } from "./badge-BPpa500U.js";
import { n as L, r as se } from "./seats-bChHQn7R.js";
var R = C(`outline`, `dots-vertical`, `DotsVertical`, [[`path`, {
    d: `M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0`,
    key: `svg-0`
  }], [`path`, {
    d: `M11 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0`,
    key: `svg-1`
  }], [`path`, {
    d: `M11 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0`,
    key: `svg-2`
  }]]),
  z = C(`outline`, `user-plus`, `UserPlus`, [[`path`, {
    d: `M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0`,
    key: `svg-0`
  }], [`path`, {
    d: `M16 19h6`,
    key: `svg-1`
  }], [`path`, {
    d: `M19 16v6`,
    key: `svg-2`
  }], [`path`, {
    d: `M6 21v-2a4 4 0 0 1 4 -4h4`,
    key: `svg-3`
  }]]),
  B = e(t(), 1),
  V = new Set([`cancelInvite`, `remove`]);
function H(e) {
  return e.mine ? [] : e.status === `unused` ? [`invite`, `copyCode`] : e.status === `pending` ? [`resend`, `copyCode`, `cancelInvite`] : [`remove`];
}
var U = e(n(), 1),
  W = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  G = (e, t) => {
    let n = (e ?? ``).trim().split(/\s+/).filter(Boolean);
    return n.length >= 2 ? (n[0][0] + n[1][0]).toUpperCase() : (n[0] ?? t?.split(`@`)[0] ?? `?`).slice(0, 2).toUpperCase();
  },
  ce = async e => {
    if (!e.email) return !1;
    let t = crypto.randomUUID();
    w({
      id: t,
      message: `Sending code`,
      state: `pending`
    });
    try {
      let n = await L({
        data: {
          seatId: e.id,
          email: e.email
        }
      });
      return w({
        id: t,
        message: n.emailed ? `Resent code to ${e.email}` : `Email is not set up, so send the code yourself`,
        state: n.emailed ? `success` : `info`
      }), n.emailed;
    } catch (e) {
      return w({
        id: t,
        message: e instanceof Error ? e.message : `Could not resend that code`,
        state: `error`
      }), !1;
    }
  },
  K = 6e4,
  le = e => (e ?? 0) > Date.now(),
  ue = e => e + K,
  de = async e => {
    try {
      await navigator.clipboard.writeText(e.code), w({
        message: `Code copied`,
        state: `success`
      });
    } catch {
      w({
        message: `Could not reach the clipboard`,
        state: `error`
      });
    }
  };
function q() {
  let {
      data: e
    } = l(M()),
    {
      data: t
    } = l(c()),
    n = o(),
    i = r(),
    [d, g] = (0, B.useState)(``),
    [C, w] = (0, B.useState)(null),
    [D, O] = (0, B.useState)(null),
    [k, A] = (0, B.useState)(null),
    [j, F] = (0, B.useState)(null),
    [L, R] = (0, B.useState)({}),
    [V, W] = (0, B.useState)(() => Date.now());
  (0, B.useEffect)(() => {
    if (Object.keys(L).length === 0) return;
    let e = window.setInterval(() => {
      let e = Date.now();
      W(e), R(t => {
        let n = Object.entries(t).filter(([, t]) => t > e);
        return n.length === Object.keys(t).length ? t : Object.fromEntries(n);
      });
    }, 1e3);
    return () => window.clearInterval(e);
  }, [L]);
  let K = async e => {
      le(L[e.id]) || (await ce(e)) && R(t => ({
        ...t,
        [e.id]: ue(Date.now())
      }));
    },
    q = async () => {
      P(n), s(n), await i.invalidate();
    },
    Y = u({
      mutationFn: e => re({
        data: {
          seatId: e
        }
      }),
      onSuccess: async e => {
        if (!e.ok) {
          F(`That invite could not be taken back.`);
          return;
        }
        O(null), await q();
      },
      onError: e => F(e instanceof Error ? e.message : `Something went wrong`)
    }),
    X = u({
      mutationFn: e => N({
        data: {
          seatId: e
        }
      }),
      onSuccess: async e => {
        if (!e.ok) {
          F(`That seat could not be taken back.`);
          return;
        }
        A(null), await q();
      },
      onError: e => F(e instanceof Error ? e.message : `Something went wrong`)
    }),
    Z = (0, B.useMemo)(() => {
      let t = d.trim().toLowerCase();
      return e.licenses.flatMap(e => e.rows.filter(e => !t || [e.name, e.email, e.code].some(e => e?.toLowerCase().includes(t))).map(t => ({
        license: e,
        row: t
      })));
    }, [e.licenses, d]),
    pe = e.licenses.reduce((e, t) => e + t.seats, 0),
    me = e.licenses.reduce((e, t) => e + t.rows.filter(e => e.status !== `unused`).length, 0),
    Q = e.licenses.flatMap(e => e.rows.map(t => ({
      license: e,
      row: t
    }))).find(({
      row: e
    }) => e.status === `unused`),
    $ = t.owned.map(e => m(e.plan) ? {
      plan: h[e.plan],
      seats: e.seats
    } : null).find(e => e !== null && e.plan.maxSeats > e.plan.minSeats);
  return <div className={`flex flex-col gap-6`}>{[<h1 className={`text-2xl font-semibold tracking-tight sm:text-3xl`}>{`Team`}</h1>, <div className={`flex items-center gap-2`}>{[(0, U.jsxs)(oe, {
        className: `h-10 flex-1 rounded-full pr-2 pl-1.5`,
        children: [(0, U.jsx)(ae, {
          children: (0, U.jsx)(ee, {
            size: 16,
            stroke: 2
          })
        }), (0, U.jsx)(ie, {
          value: d,
          onChange: e => g(e.target.value),
          placeholder: `Search by name, email or code`,
          "aria-label": `Search seats`
        })]
      }), Q ? (0, U.jsxs)(p, {
        size: `lg`,
        className: `h-10 rounded-full px-5`,
        onClick: () => w({
          license: Q.license,
          seat: Q.row
        }),
        children: [(0, U.jsx)(z, {
          size: 16,
          stroke: 2,
          "aria-hidden": !0
        }), `Invite`]
      }) : $ ? (0, U.jsx)(se, {
        plan: $.plan,
        heldSeats: $.seats,
        trigger: (0, U.jsxs)(p, {
          size: `lg`,
          className: `h-10 rounded-full px-5`,
          children: [(0, U.jsx)(z, {
            size: 16,
            stroke: 2,
            "aria-hidden": !0
          }), `Add seats`]
        })
      }) : null]}</div>, <p className={`-mt-3 text-sm text-muted-foreground`}>{[me, ` of `, pe, ` seats in use`]}</p>, Z.length === 0 ? <p className={`py-12 text-center text-sm text-muted-foreground`}>{d ? `Nobody matches that.` : `No seats yet.`}</p> : <div className={`flex flex-col rounded-lg border border-border`}>{Z.map(({
        license: e,
        row: t
      }, n) => {
        let r = H(t);
        return <div className={f(`group flex items-center gap-3 px-4 py-3`, n > 0 && `border-t border-border`)} key={t.id}>{[(0, U.jsxs)(E, {
            className: `size-8`,
            children: [t.avatar ? (0, U.jsx)(te, {
              src: t.avatar,
              alt: ``
            }) : null, (0, U.jsx)(ne, {
              className: `text-xs`,
              children: t.status === `unused` ? (0, U.jsx)(T, {
                size: 15,
                stroke: 1.8,
                "aria-hidden": !0,
                className: `text-muted-foreground`
              }) : G(t.name, t.email)
            })]
          }), <div className={`flex min-w-0 flex-col`}>{t.status === `unused` ? <span className={`truncate font-mono text-sm text-foreground`}>{t.code}</span> : (0, U.jsxs)(U.Fragment, {
              children: [<span className={`truncate text-sm font-medium`}>{[t.name ?? t.email, t.mine ? <span className={`text-muted-foreground`}>{` (you)`}</span> : null]}</span>, <span className={`truncate font-mono text-xs text-muted-foreground`}>{[t.name && t.email ? `${t.email} · ` : ``, t.code]}</span>]
            })}</div>, <div className={`ml-auto flex items-center gap-2`}>{[t.status === `pending` ? (0, U.jsx)(I, {
              variant: `amber`,
              children: `Pending`
            }) : t.status === `unused` ? (0, U.jsx)(I, {
              variant: `neutral`,
              children: `Unused`
            }) : null, r.length > 0 ? (0, U.jsx)(J, {
              row: t,
              actions: r,
              onInvite: () => w({
                license: e,
                seat: t
              }),
              onResend: () => void K(t),
              resendIn: Math.max(0, Math.ceil(((L[t.id] ?? 0) - V) / 1e3)),
              onCopyCode: () => void de(t),
              onCancelInvite: () => O(t),
              onRemove: () => A(t)
            }) : null]}</div>]}</div>;
      })}</div>, j ? <p role={`alert`} className={`-mt-3 text-sm text-destructive`}>{j}</p> : null, (0, U.jsx)(fe, {
      target: C,
      onClose: () => w(null),
      onSent: async () => {
        w(null), await q();
      }
    }), (0, U.jsx)(x, {
      open: D !== null,
      onOpenChange: e => {
        e || O(null);
      },
      children: (0, U.jsxs)(y, {
        size: `sm`,
        showCloseButton: !1,
        children: [(0, U.jsxs)(S, {
          children: [(0, U.jsx)(v, {
            children: `Cancel this invite?`
          }), (0, U.jsxs)(_, {
            children: [`The code sent to `, <span className={`text-foreground`}>{D?.email}</span>, ` will no longer be theirs. The seat opens up again.`]
          })]
        }), (0, U.jsxs)(b, {
          children: [(0, U.jsx)(p, {
            variant: `secondary`,
            onClick: () => O(null),
            children: `Keep invite`
          }), (0, U.jsx)(p, {
            variant: `destructive`,
            "aria-busy": Y.isPending,
            onClick: () => D && !Y.isPending && Y.mutate(D.id),
            children: (0, U.jsx)(a, {
              busy: Y.isPending,
              children: `Cancel invite`
            })
          })]
        })]
      })
    }), (0, U.jsx)(x, {
      open: k !== null,
      onOpenChange: e => {
        e || A(null);
      },
      children: (0, U.jsxs)(y, {
        size: `sm`,
        showCloseButton: !1,
        children: [(0, U.jsxs)(S, {
          children: [(0, U.jsxs)(v, {
            children: [`Remove `, k?.name ?? k?.email ?? `this person`, `?`]
          }), (0, U.jsx)(_, {
            children: `They lose access to the source at once. The seat opens up for somebody else.`
          })]
        }), (0, U.jsxs)(b, {
          children: [(0, U.jsx)(p, {
            variant: `secondary`,
            onClick: () => A(null),
            children: `Cancel`
          }), (0, U.jsx)(p, {
            variant: `destructive`,
            "aria-busy": X.isPending,
            onClick: () => k && !X.isPending && X.mutate(k.id),
            children: (0, U.jsx)(a, {
              busy: X.isPending,
              children: `Remove`
            })
          })]
        })]
      })
    })]}</div>;
}
function J({
  row: e,
  actions: t,
  onInvite: n,
  onResend: r,
  resendIn: i,
  onCopyCode: a,
  onCancelInvite: o,
  onRemove: s
}) {
  let c = e => t.includes(e),
    l = t.filter(e => V.has(e)).length,
    u = t.length - l;
  return (0, U.jsxs)(j, {
    children: [(0, U.jsx)(A, {
      render: (0, U.jsx)(p, {
        variant: `ghost`,
        size: `icon-sm`,
        "aria-label": `Options for ${e.name ?? e.email ?? e.code}`
      }),
      children: (0, U.jsx)(R, {
        size: 16,
        stroke: 1.8,
        "aria-hidden": !0
      })
    }), (0, U.jsxs)(k, {
      align: `end`,
      children: [c(`invite`) ? (0, U.jsx)(D, {
        onClick: n,
        children: `Send to someone`
      }) : null, c(`resend`) ? (0, U.jsx)(D, {
        disabled: i > 0,
        onClick: r,
        children: i > 0 ? `Resend in ${String(i)}s` : `Resend invite`
      }) : null, c(`copyCode`) ? (0, U.jsx)(D, {
        onClick: a,
        children: `Copy code`
      }) : null, l > 0 && u > 0 ? (0, U.jsx)(O, {}) : null, c(`cancelInvite`) ? (0, U.jsx)(D, {
        variant: `destructive`,
        onClick: o,
        children: `Cancel invite`
      }) : null, c(`remove`) ? (0, U.jsx)(D, {
        variant: `destructive`,
        onClick: s,
        children: `Remove`
      }) : null]
    })]
  });
}
function fe({
  target: e,
  onClose: t,
  onSent: n
}) {
  let r = (0, B.useId)(),
    [i, o] = (0, B.useState)(``),
    [s, c] = (0, B.useState)(null),
    [l, u] = (0, B.useState)(!1),
    [d, m] = (0, B.useState)(!1),
    h = e => {
      c(e), u(!0);
    },
    _ = async () => {
      let t = i.trim().toLowerCase();
      if (!W.test(t)) {
        h(`Enter a valid email address.`);
        return;
      }
      if (e) {
        m(!0);
        try {
          let r = await L({
            data: {
              seatId: e.seat.id,
              email: t
            }
          });
          w({
            message: r.emailed ? `Sent ${e.seat.code} to ${t}` : `${t} has the seat. Email is not set up here, so send them ${e.seat.code} yourself`,
            state: r.emailed ? `success` : `info`
          }), o(``), await n();
        } catch (e) {
          h(e instanceof Error ? e.message : `Could not send that code`);
        } finally {
          m(!1);
        }
      }
    };
  return (0, U.jsx)(x, {
    open: e !== null,
    onOpenChange: e => {
      e || (t(), o(``), c(null), u(!1));
    },
    children: (0, U.jsx)(y, {
      size: `sm`,
      className: `p-6`,
      children: <form className={`flex flex-col gap-6`} onSubmit={e => {
        e.preventDefault(), d || _();
      }}>{[(0, U.jsx)(S, {
          children: (0, U.jsx)(v, {
            children: `Invite to your team`
          })
        }), <div className={`mt-2 space-y-2`}>{[(0, U.jsx)(F, {
            htmlFor: r,
            children: `Email`
          }), (0, U.jsx)(g, {
            id: r,
            type: `email`,
            autoComplete: `off`,
            autoFocus: !0,
            placeholder: `teammate@company.com`,
            value: i,
            "aria-invalid": s ? !0 : void 0,
            "aria-describedby": s ? `${r}-error` : void 0,
            onChange: e => {
              o(e.target.value), c(null);
            },
            onAnimationEnd: () => u(!1),
            className: f(l && `is-shaking`)
          }), s ? <p id={`${r}-error`} role={`alert`} className={`text-sm text-destructive`}>{s}</p> : null]}</div>, (0, U.jsxs)(b, {
          children: [(0, U.jsx)(p, {
            type: `button`,
            variant: `secondary`,
            onClick: t,
            children: `Cancel`
          }), (0, U.jsx)(p, {
            type: `submit`,
            "aria-busy": d,
            children: (0, U.jsx)(a, {
              busy: d,
              children: `Send invite`
            })
          })]
        })]}</form>
    })
  });
}
function Y() {
  let {
    data: e
  } = l(M());
  return (0, U.jsx)(d, {
    current: `team`,
    children: e.licenses.length > 0 ? (0, U.jsx)(q, {}) : <div className={`flex flex-col gap-4`}>{[<h1 className={`text-2xl font-semibold tracking-tight sm:text-3xl`}>{`Team`}</h1>, <p className={`max-w-[44ch] text-muted-foreground`}>{`A Teams license comes with seats to hand out, and this is where you would manage them. This account does not own one.`}</p>, (0, U.jsx)(p, {
        className: `w-fit rounded-full`,
        nativeButton: !1,
        render: (0, U.jsx)(i, {
          to: `/pricing`,
          hash: `plans`
        }),
        children: `See the plans`
      })]}</div>
  });
}
export { Y as component };

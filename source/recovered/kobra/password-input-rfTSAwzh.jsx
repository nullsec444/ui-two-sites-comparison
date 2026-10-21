// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import { a as e, r as t } from "./rolldown-runtime-B0Z9INg1.js";
import { n, t as r } from "./jsx-runtime-Ciaf_P-h.js";
import { t as i } from "./utils-WkhMP9hs.js";
import { t as a } from "./react-BGf_lakQ.js";
import { t as o } from "./use-reduced-motion-BdikIsVN.js";
import { i as s, n as c, r as l, t as u } from "./input-group-BYgV-9P-.js";
var d = t({
    PasswordEye: () => v,
    PasswordInput: () => C
  }),
  f = e(n(), 1),
  p = e(r(), 1),
  m = `M 2 12 C 5.5 4.6 18.5 4.6 22 12 C 18.5 19.4 5.5 19.4 2 12 Z`,
  h = `M 2 10 C 5.5 15.5 18.5 15.5 22 10 C 18.5 15.5 5.5 15.5 2 10 Z`,
  g = [[`M 5.4 15.75 L 5.4 15.75`, `M 5.4 14 L 3.9 16.4`], [`M 12 17.55 L 12 17.55`, `M 12 15.4 L 12 18.2`], [`M 18.6 15.75 L 18.6 15.75`, `M 18.6 14 L 20.1 16.4`]],
  _ = [.23, 1, .32, 1];
function v({
  revealed: e
}) {
  let t = o(),
    n = f.useId(),
    r = {
      duration: 0
    },
    i = t ? r : {
      duration: .2,
      ease: _
    };
  return <svg viewBox={`0 0 24 24`} fill={`none`} stroke={`currentColor`} strokeWidth={`2`} strokeLinecap={`round`} strokeLinejoin={`round`} className={`size-[18px]`} aria-hidden={!0}>{[(0, p.jsx)(a.path, {
      initial: !1,
      animate: {
        d: e ? m : h
      },
      transition: i
    }), g.map(([n, o]) => (0, p.jsx)(a.path, {
      strokeWidth: 1.5,
      initial: !1,
      animate: {
        d: e ? n : o,
        opacity: +!e
      },
      transition: {
        d: i,
        opacity: t ? r : {
          duration: .12,
          delay: e ? 0 : .08,
          ease: _
        }
      }
    }, n)), <clipPath id={n}>{(0, p.jsx)(a.path, {
        initial: !1,
        animate: {
          d: e ? m : h
        },
        transition: i
      })}</clipPath>, <circle cx={`12`} cy={`12`} r={`2.5`} clipPath={`url(#${n})`} />]}</svg>;
}
var y = [``, `Weak`, `Fair`, `Strong`],
  b = [``, `bg-red-500`, `bg-amber-500`, `bg-emerald-500`];
function x(e) {
  if (!e) return 0;
  let t = [/[a-z]/, /[A-Z]/, /\d/, /[^A-Za-z0-9]/].filter(t => t.test(e)).length;
  return e.length < 8 || t < 2 ? 1 : e.length < 12 || t < 3 ? 2 : 3;
}
function S({
  value: e
}) {
  let t = x(e);
  return <div className={`flex items-center gap-1`}>{[[0, 1, 2].map(e => <div className={i(`h-1 flex-1 rounded-full transition-colors duration-300 ease-out`, e < t ? b[t] : `bg-input`)} key={e} />), <p aria-live={`polite`} className={`sr-only`}>{y[t]}</p>]}</div>;
}
function C({
  className: e,
  strength: t = !1,
  value: n,
  defaultValue: r,
  onChange: a,
  ...o
}) {
  let [d, m] = f.useState(!1),
    [h, g] = f.useState(() => String(r ?? ``)),
    _ = n === void 0 ? h : String(n),
    y = (0, p.jsxs)(u, {
      className: t ? void 0 : e,
      children: [(0, p.jsx)(s, {
        type: d ? `text` : `password`,
        dir: void 0,
        value: n,
        defaultValue: r,
        onChange: e => {
          t && g(e.target.value), a?.(e);
        },
        ...o
      }), (0, p.jsx)(c, {
        align: `inline-end`,
        children: (0, p.jsx)(l, {
          size: `icon-xs`,
          "aria-label": d ? `Hide password` : `Show password`,
          onClick: () => m(e => !e),
          children: (0, p.jsx)(v, {
            revealed: d
          })
        })
      })]
    });
  return t ? <div className={i(`grid gap-2`, e)}>{[y, (0, p.jsx)(S, {
      value: _
    })]}</div> : y;
}
export { C as n, d as r, v as t };

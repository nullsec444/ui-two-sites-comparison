// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import { a as e } from "./rolldown-runtime-B0Z9INg1.js";
import { t } from "./jsx-runtime-Ciaf_P-h.js";
import { t as n } from "./useRouteContext-BB1W4XMH.js";
import { n as r } from "./dates-CXgAlU_g.js";
import { r as i } from "./site-footer-BfDpTxpY.js";
import { t as a } from "./site-header-D9kcq_4U.js";
var o = e(t(), 1);
function s({
  title: e,
  updated: t,
  children: s
}) {
  let {
    user: c
  } = n({
    from: `__root__`
  });
  return <div className={`min-h-screen bg-background text-foreground`}>{[(0, o.jsx)(a, {
      user: c
    }), <main className={`mx-auto max-w-2xl px-4 pt-10 pb-20 sm:px-6 sm:pt-16 sm:pb-24`}>{[<h1 className={`text-3xl leading-[1.05] font-bold tracking-tight sm:text-4xl`}>{e}</h1>, <p className={`mt-3 text-sm text-muted-foreground`}>{[`Last updated `, <time dateTime={t}>{r(t)}</time>]}</p>, <div className={`mt-12`}>{s}</div>]}</main>, (0, o.jsx)(i, {})]}</div>;
}
function c({
  heading: e,
  children: t
}) {
  return <section className={`mt-10 first:mt-0`}>{[<h2 className={`text-lg font-semibold`}>{e}</h2>, <div className={`mt-3 text-[0.9375rem] leading-7 text-muted-foreground [&_li]:mt-2 [&_ul]:list-disc [&_ul]:pl-5 [&>*+*]:mt-4`}>{t}</div>]}</section>;
}
export { c as n, s as t };

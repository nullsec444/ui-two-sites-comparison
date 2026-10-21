// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import { a as e } from "./rolldown-runtime-B0Z9INg1.js";
import { n as t, t as n } from "./jsx-runtime-Ciaf_P-h.js";
import { i as r } from "./playground-BFoI71NC.js";
import { i, o as a, r as o, t as s } from "./snap-stops-D5HwDIF7.js";
var c = e(t(), 1),
  l = e(n(), 1),
  {
    ResizableHandle: u,
    ResizablePanel: d,
    ResizablePanelGroup: f
  } = r(`resizable`, i),
  p = [{
    number: `01`,
    kicker: `Reading #01`,
    title: `Non-duality.`,
    body: `Advaita Vedanta is the school of the Upanishads that Shankara put in order in the eighth century. It makes one claim and spends the rest of its time defending it. There is one reality, Brahman, and the self you take yourself to be is not separate from it. Everything that looks like a separate thing is appearance, the way a coil of rope looks like a snake in bad light. Tat tvam asi: that, you are.`,
    image: `/images/previews/reading-01.webp`,
    alt: `A sadhu with long matted hair beside a wall of carved stone figures`
  }, {
    number: `02`,
    kicker: `Reading #02`,
    title: `The ground of the soul.`,
    body: `Meister Eckhart was a Dominican who preached in German seven hundred years ago. He told his listeners that the soul has a ground where it and God are one and the same, with no image, no name and nothing made. The way in is Gelassenheit, letting go. Not of things, but of the self that wants them. The church put him on trial for it. He died before the verdict came.`,
    image: `/images/previews/reading-02.webp`,
    alt: `Light through arched windows onto the stone floor of an old church`
  }];
function m({
  note: e
}) {
  let t = c.useRef(null),
    [n, r] = c.useState({
      top: !1,
      bottom: !1
    }),
    i = c.useCallback(() => {
      let e = t.current;
      if (!e) return;
      let n = e.scrollTop > 1,
        i = e.scrollTop + e.clientHeight < e.scrollHeight - 1;
      r(e => e.top === n && e.bottom === i ? e : {
        top: n,
        bottom: i
      });
    }, []);
  return c.useEffect(() => {
    let e = t.current;
    if (!e) return;
    i();
    let n = new ResizeObserver(i);
    return n.observe(e), () => n.disconnect();
  }, [i]), <article className={`flex h-full flex-col overflow-hidden rounded-3xl border bg-card p-3 pb-0 text-card-foreground shadow-xs select-none`}>{[<img src={e.image} alt={e.alt} width={1e3} height={667} decoding={`async`} draggable={!1} className={`h-40 w-full shrink-0 rounded-2xl object-cover ring-1 ring-black/5 ring-inset dark:ring-white/10`} />, <div className={`relative min-h-0 flex-1`}>{[<div ref={t} onScroll={i} className={`h-full [scrollbar-width:none] overflow-y-auto overscroll-contain px-3 pt-4 pb-9 [&::-webkit-scrollbar]:hidden`}>{[<p className={`text-sm text-muted-foreground`}>{e.kicker}</p>, <h3 className={`mt-1 text-xl font-semibold tracking-tight text-balance`}>{e.title}</h3>, <p className={`mt-3 leading-relaxed text-pretty text-foreground/80`}>{e.body}</p>]}</div>, <div aria-hidden={!0} data-cut={n.top || void 0} className={`pointer-events-none absolute inset-x-0 top-0 h-8 bg-linear-to-b from-card/90 to-transparent opacity-0 transition-opacity duration-150 ease-out data-cut:opacity-100`} />, <div aria-hidden={!0} data-cut={n.bottom || void 0} className={`pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-linear-to-t from-card/90 to-transparent opacity-0 transition-opacity duration-150 ease-out data-cut:opacity-100`} />, <p className={`pointer-events-none absolute inset-x-0 bottom-3.5 flex justify-center`}>{<span className={`rounded-full border bg-card/85 px-2.5 py-0.5 text-sm text-muted-foreground tabular-nums backdrop-blur-[2px]`}>{e.number}</span>}</p>]}</div>]}</article>;
}
var h = 220,
  g = e => 1 - (1 - e) ** 3,
  _ = [0, 10, 20, 25, 33, 50];
function v({
  snap: e = 25
}) {
  let t = c.useRef(null),
    n = c.useRef(null),
    r = a(),
    [i, _] = c.useState(null),
    v = c.useRef(0),
    y = c.useCallback(() => cancelAnimationFrame(v.current), []);
  c.useEffect(() => y, [y]);
  let b = (e, t) => {
      if (!r.current || Math.abs(t - e) < .01) return;
      let n = r.current;
      if (window.matchMedia(`(prefers-reduced-motion: reduce)`).matches) {
        n.setLayout({
          one: t,
          two: 100 - t
        });
        return;
      }
      y();
      let i = performance.now(),
        a = r => {
          let o = Math.min(1, Math.max(0, (r - i) / h)),
            s = e + (t - e) * g(o);
          n.setLayout({
            one: s,
            two: 100 - s
          }), o < 1 && (v.current = requestAnimationFrame(a));
        };
      v.current = requestAnimationFrame(a);
    },
    x = (t, n) => {
      if (!e || !n.isUserInteraction) return;
      let r = t.one ?? 50,
        i = o(e).reduce((e, t) => Math.abs(t - r) < Math.abs(e - r) ? t : e);
      b(r, i);
    },
    S = () => b(r.current?.getLayout().one ?? 50, s(r.current?.getLayout().one ?? 50, e));
  c.useEffect(() => {
    let e = t.current,
      r = n.current;
    if (!e || !r) return;
    let i = new ResizeObserver(() => {
      _([e.getBoundingClientRect().width, r.getBoundingClientRect().width]);
    });
    return i.observe(e), i.observe(r), () => i.disconnect();
  }, []);
  let C = i ? Math.round(i[0] / (i[0] + i[1]) * 100) : null;
  return <div className={`flex w-[40rem] max-w-full flex-col items-center gap-5`}>{[<div className={`h-[26rem] w-full`} onPointerDownCapture={y}>{(0, l.jsxs)(f, {
        orientation: `horizontal`,
        groupRef: r,
        onLayoutChanged: x,
        children: [(0, l.jsx)(d, {
          id: `one`,
          elementRef: t,
          defaultSize: `50`,
          minSize: `8rem`,
          children: (0, l.jsx)(m, {
            note: p[0]
          })
        }), (0, l.jsx)(u, {
          className: `mx-2 h-24 w-2.5 self-center rounded-full bg-info transition-[height] duration-200 ease-out after:w-5 hover:h-28 active:h-32`,
          children: <span aria-hidden={!0} className={`flex flex-col gap-1.5`}>{[<span className={`size-1 rounded-full bg-background/90`} />, <span className={`size-1 rounded-full bg-background/90`} />]}</span>
        }), (0, l.jsx)(d, {
          id: `two`,
          elementRef: n,
          defaultSize: `50`,
          minSize: `8rem`,
          children: (0, l.jsx)(m, {
            note: p[1]
          })
        })]
      })}</div>, <div aria-live={`polite`} className={`flex items-center gap-1 rounded-full bg-muted p-1 text-sm font-medium tabular-nums`}>{[<span className={`rounded-full bg-background px-4 py-1.5 shadow-xs`}>{[<span className={`text-muted-foreground`}>{`W `}</span>, i ? String(Math.round(i[0])) : `—`]}</span>, <span className={`rounded-full bg-background px-4 py-1.5 shadow-xs`}>{[<span className={`text-muted-foreground`}>{`W `}</span>, i ? String(Math.round(i[1])) : `—`]}</span>, <button type={`button`} onClick={S} aria-label={`Move the divider to the next stop`} className={`cursor-pointer rounded-full bg-foreground px-4 py-1.5 text-background transition-colors duration-150 outline-none hover:bg-foreground/85 focus-visible:ring-[3px] focus-visible:ring-ring/50`}>{[C === null ? `—` : String(C), `%`]}</button>]}</div>]}</div>;
}
export { _ as RESIZABLE_SNAPS, v as default };

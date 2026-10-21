// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module31908 from "./jsx-runtime-31908.js";
import * as _module45032 from "./45032.js";
var e = _module31908,
  n = _module45032;
function l({
  config: t,
  className: s,
  pixelSize: a = 56,
  paused: i = !1,
  frameIndex: r
}) {
  let c,
    {
      size: h,
      frames: o,
      frameDuration: m,
      transition: u,
      transitionDuration: d,
      colors: p
    } = t,
    [k, j] = (0, n.useState)(0),
    v = !i && void 0 === r && o.length > 1 && m > 0;
  (0, n.useEffect)(() => {
    if (!v) return;
    let t = window.setInterval(() => {
      j(t => (t + 1) % o.length);
    }, m);
    return () => window.clearInterval(t);
  }, [v, m, o.length]);
  let f = void 0 !== r ? Math.min(Math.max(r, 0), Math.max(o.length - 1, 0)) : 0 === o.length ? 0 : k % o.length,
    x = o[f] ?? [],
    g = Math.max(2, Math.round(.08 * a)),
    b = "none" === u ? 0 : Math.max(0, d);
  switch (u) {
    case "none":
      c = "none";
      break;
    case "fade":
      c = `opacity ${b}ms ease`;
      break;
    case "color":
      c = `background-color ${b}ms ease`;
      break;
    default:
      c = u;
  }
  let P = {
    width: a,
    height: a,
    display: "grid",
    gridTemplateColumns: `repeat(${h}, 1fr)`,
    gridTemplateRows: `repeat(${h}, 1fr)`,
    gap: g
  };
  return <div className={s} style={P} role={"img"} aria-label={"Loading"}>{Array.from({
      length: h * h
    }, (t, s) => {
      let a = !!x?.includes(s);
      return "fade" === u ? <div className={"relative min-h-0 min-w-0 overflow-hidden rounded-full"} style={{
        backgroundColor: p.inactive
      }} key={s}>{<div className={"absolute inset-0 rounded-full"} style={{
          backgroundColor: p.active,
          opacity: +!!a,
          transition: c
        }} />}</div> : <div className={"min-h-0 min-w-0 rounded-full"} style={{
        backgroundColor: a ? p.active : p.inactive,
        transition: c
      }} key={s} />;
    })}</div>;
}
const _export_DotLoader = l;
export { _export_DotLoader as DotLoader };

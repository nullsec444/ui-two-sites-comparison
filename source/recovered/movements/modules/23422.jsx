// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module31908 from "./jsx-runtime-31908.js";
var i = _module31908;
let o = {
    neutral: {
      tile: "bg-[#ececef] dark:bg-[#2c2c30]",
      surface: "bg-white dark:bg-[#4a4a50]",
      ink: "text-[#1a1a1c] dark:text-white/90",
      dots: "[&>*]:bg-[#1a1a1c] dark:[&>*]:bg-white",
      beam: "bg-white/90 dark:bg-white/30",
      half: "bg-[#d6d6db] dark:bg-[#3d3d42]",
      lens: "bg-white/45 dark:bg-white/15",
      edge: "shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.1)]"
    },
    accent: {
      tile: "bg-[#ff5a1f]",
      surface: "bg-white",
      ink: "text-white",
      dots: "[&>*]:bg-white",
      beam: "bg-white/70",
      half: "bg-[#ffa77f]",
      lens: "bg-white/40",
      edge: "shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.12)]"
    }
  },
  s = "rounded-(--icon-radius,7px)";
const _export_ACCENT = "#ff5a1f";
const _export_CatalogIcon = function ({
  variant: e,
  tone: t = "neutral"
}) {
  let r = o[t],
    n = <div className={`absolute inset-0 ${s} ${r.tile}`} />,
    a = <div className={`pointer-events-none absolute inset-0 ${s} ${r.edge}`} />,
    l = `relative size-5 shrink-0 overflow-hidden ${s}`;
  switch (e) {
    case "shadow":
      return <div className={l}>{[n, <div className={`relative m-[5px] h-[calc(100%-10px)] w-[calc(100%-10px)] rounded-[3px] shadow-[0_0_0_0.5px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.12)] ${r.surface}`} />, a]}</div>;
    case "radius":
      return <div className={l}>{[n, <div className={`relative mt-[5px] ml-[5px] h-[calc(100%-5px)] w-[calc(100%-5px)] rounded-tl-[3px] shadow-[0_0_0_0.5px_rgba(0,0,0,0.1)] ${r.surface}`} />, a]}</div>;
    case "chart":
      return <div className={`${l} ${r.ink}`}>{[n, <svg viewBox={"0 0 20 20"} className={"absolute inset-[4px]"} aria-hidden={!0}>{<path d={"M2 14 L6 9 L10 11 L14 5 L18 7"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.75"} strokeLinecap={"round"} strokeLinejoin={"round"} />}</svg>, a]}</div>;
    case "loader":
      return <div className={l}>{[n, <div className={`absolute inset-[5.5px] grid grid-cols-3 grid-rows-3 gap-[1.5px] [&>*]:rounded-full ${r.dots}`}>{[<div className={"opacity-90"} />, <div className={"opacity-55"} />, <div className={"opacity-25"} />, <div className={"opacity-25"} />, <div className={"opacity-10"} />, <div className={"opacity-25"} />, <div className={"opacity-25"} />, <div className={"opacity-10"} />, <div className={"opacity-10"} />]}</div>, a]}</div>;
    case "shimmer":
      return <div className={l}>{[n, <div className={`absolute top-[-30%] left-[22%] h-[160%] w-[36%] blur-[1.5px] ${r.beam}`} style={{
          transform: "skewX(-18deg)"
        }} />, a]}</div>;
    case "glass":
      return <div className={l}>{[n, <div className={`absolute inset-y-0 right-0 w-1/2 ${r.half}`} />, <div className={`absolute inset-[5px] rounded-full shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.8),0_1px_2px_rgba(0,0,0,0.12)] ${r.lens}`} />, a]}</div>;
    default:
      return e;
  }
};
export { _export_ACCENT as ACCENT, _export_CatalogIcon as CatalogIcon };

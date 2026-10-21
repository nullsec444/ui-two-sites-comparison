// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module31908 from "./jsx-runtime-31908.js";
import * as _module45032 from "./45032.js";
import * as _module16542 from "./16542.js";
import * as _module94765 from "./94765.js";
import * as _module74468 from "./74468.js";
import * as _module95236 from "./95236.js";
import * as _module49776 from "./49776.js";
let s;
var e = _module31908,
  a = _module45032,
  i = _module16542,
  n = _module94765,
  l = _module74468,
  r = _module95236;
let c = 1 / 3,
  h = 'system-ui, -apple-system, BlinkMacSystemFont, "Inter Variable", Inter, sans-serif',
  o = "#3478f6",
  u = {
    left: 46,
    right: 1466,
    bottom: 1384,
    radius: 173,
    border: 2
  },
  m = {
    width: 1 / 3 * 1510,
    frameLeft: u.left * c,
    frameWidth: (u.right - u.left) * c,
    frameBottom: u.bottom * c
  },
  d = {
    left: 121,
    top: 1087,
    width: 680,
    height: 225
  },
  p = {
    left: 1166,
    top: 1087,
    width: 225,
    height: 225
  },
  k = {
    left: 137,
    top: 1103,
    width: 339,
    height: 194
  },
  j = (s = 1.13 * d.height, {
    left: k.left + k.width / 2 - 190,
    top: d.top + d.height / 2 - s / 2,
    width: 380,
    height: s
  });
function f(t, s, e, a, i, n, l) {
  let r = 64;
  for (let n = 0; n < 3; n += 1) {
    t.font = `${e} ${r}px ${h}`;
    let n = t.measureText(s);
    r *= (i - a) / (n.actualBoundingBoxLeft + n.actualBoundingBoxRight);
  }
  t.font = `${e} ${r}px ${h}`;
  let c = t.measureText(s);
  return t.fillStyle = l, t.textBaseline = "alphabetic", t.fillText(s, a + c.actualBoundingBoxLeft, n + c.actualBoundingBoxAscent), r;
}
function v(t, s, e, a, i, n) {
  t.beginPath(), t.roundRect(s, e, a, i, n);
}
function g(t, s, e, a, i) {
  t.beginPath(), t.moveTo(s + .5 * a, e + +i), t.bezierCurveTo(s + .44 * a, e + .96 * i, s + 0 * a, e + .66 * i, s + 0 * a, e + .31 * i), t.bezierCurveTo(s + 0 * a, e + .12 * i, s + .13 * a, e + 0 * i, s + .29 * a, e + 0 * i), t.bezierCurveTo(s + .39 * a, e + 0 * i, s + .46 * a, e + .06 * i, s + .5 * a, e + .15 * i), t.bezierCurveTo(s + .54 * a, e + .06 * i, s + .61 * a, e + 0 * i, s + .71 * a, e + 0 * i), t.bezierCurveTo(s + .87 * a, e + 0 * i, s + +a, e + .12 * i, s + +a, e + .31 * i), t.bezierCurveTo(s + +a, e + .66 * i, s + .56 * a, e + .96 * i, s + .5 * a, e + +i), t.closePath(), t.fill();
}
function x(t, s, e, a, i, n = 12) {
  let l = i - n;
  t.beginPath(), t.ellipse(s, l, e, l - a, 0, Math.PI, 0), t.arcTo(s + e, i, s + e - n, i, n), t.lineTo(s - e + n, i), t.arcTo(s - e, i, s - e, l, n), t.closePath();
}
function b(t, s) {
  let {
      left: e,
      right: a,
      bottom: i,
      radius: n
    } = u,
    l = e + s,
    r = a - s,
    c = i - s,
    h = n - s;
  t.beginPath(), t.moveTo(l, -20), t.lineTo(l, c - h), t.arcTo(l, c, l + h, c, h), t.lineTo(r - h, c), t.arcTo(r, c, r, c - h, h), t.lineTo(r, -20), t.closePath();
}
function y(t) {
  let s = Math.min(window.devicePixelRatio || 1, 2);
  t.width = Math.round(1510 * c * s), t.height = Math.round(1428 * c * s);
  let e = t.getContext("2d");
  return e ? (e.setTransform(s * c, 0, 0, s * c, 0, 0), e) : null;
}
function P(t) {
  return {
    width: t.width * c,
    height: t.height * c,
    radius: t.height / 2 * c,
    thick: 22,
    bend: 70,
    blur: 2,
    aber: 5,
    tint: .3
  };
}
let w = {
    saturate: 1.9,
    brightness: 1.12
  },
  _ = P(d),
  S = P(p),
  z = {
    width: j.width * c,
    height: j.height * c,
    radius: j.height / 2 * c,
    thick: 16,
    bend: 90,
    blur: 0,
    aber: 30,
    tint: 0
  },
  q = {
    saturate: 1,
    brightness: 1
  },
  M = {
    type: "spring",
    duration: .42,
    bounce: .32
  };
function T({
  box: t,
  config: s,
  sourceRef: a,
  sceneTick: i,
  hostRef: n
}) {
  return <div ref={n} className={"absolute"} style={{
    left: t.left * c,
    top: t.top * c,
    width: t.width * c,
    height: t.height * c,
    borderRadius: t.height / 2 * c,
    boxShadow: "0 0 0 0.5px rgb(0 0 0 / 0.05), 0 1px 1.5px rgb(0 0 0 / 0.07), 0 8px 28px rgb(0 0 0 / 0.09)"
  }}>{[(0, e.jsx)(r.GlassSurface, {
      config: s,
      fill: !0,
      framed: !1,
      tone: w,
      sourceRef: a,
      sceneTick: i
    }), <div className={"pointer-events-none absolute inset-0"} style={{
      borderRadius: "inherit",
      boxShadow: "inset 0 0 0 1.5px rgb(255 255 255 / 0.95), inset 0 1.5px 1px rgb(255 255 255 / 0.9)"
    }} />]}</div>;
}
function C(t) {
  return {
    left: t.left * c,
    top: t.top * c,
    width: t.width * c,
    height: t.height * c,
    borderRadius: t.height / 2 * c
  };
}
function A() {
  let t = (0, a.useRef)(null),
    s = (0, a.useRef)(null),
    [i, m] = (0, a.useState)(0),
    [P, w] = (0, a.useState)(!1),
    A = (0, a.useRef)(null),
    I = (0, a.useRef)(null),
    [L, R] = (0, a.useState)(0);
  function N() {
    if (P) return;
    let s = A.current,
      e = t.current,
      a = I.current?.querySelector("canvas");
    s && e && a && (!function (t, s, e) {
      let a = y(t);
      if (!a) return;
      let i = t.width / (1510 * c),
        n = d.height / 2;
      a.save(), a.setTransform(1, 0, 0, 1, 0, 0), a.drawImage(s, 0, 0, t.width, t.height), a.restore(), a.save(), v(a, d.left, d.top, d.width, d.height, n), a.shadowColor = "rgb(0 0 0 / 0.09)", a.shadowBlur = 28 * i, a.shadowOffsetY = 8 * i, a.fillStyle = "#ffffff", a.fill(), a.restore(), a.drawImage(e, d.left, d.top, d.width, d.height);
      let l = 1.5 / c;
      v(a, d.left + l / 2, d.top + l / 2, d.width - l, d.height - l, n - l / 2), a.lineWidth = l, a.strokeStyle = "rgb(255 255 255 / 0.95)", a.stroke(), v(a, d.left, d.top, d.width, d.height, n), a.lineWidth = .5 / c, a.strokeStyle = "rgb(0 0 0 / 0.06)", a.stroke();
    }(s, e, a), R(t => t + 1)), w(!0);
  }
  return (0, a.useLayoutEffect)(() => {
    let e = !1,
      a = () => {
        if (e) return;
        let a = t.current && y(t.current),
          i = s.current && y(s.current);
        if (a && i) {
          let s;
          !function (t) {
            t.fillStyle = "#ffffff", t.fillRect(0, 0, 1510, 1428), b(t, 0), t.fillStyle = "#d8d8da", t.fill(), b(t, u.border), t.fillStyle = "#f2f2f7", t.fill(), t.save(), b(t, u.border), t.clip(), t.fillStyle = "#ffffff", v(t, 118, -300, 1277, 362, 94), t.fill(), v(t, 118, 135, 1277, 187, 93.5), t.fill(), v(t, 185, 195, 68, 68, 15), t.fillStyle = "#ffffff", t.fill(), t.lineWidth = 4, t.strokeStyle = "#c4c4c4", t.stroke(), t.fillStyle = "#ea4458", g(t, 216, 207, 26, 21), f(t, "Show All Health Data", 400, 324, 891, 206, "#000000"), t.beginPath(), t.moveTo(1304, 210.5), t.lineTo(1321.5, 228.5), t.lineTo(1304, 246.5), t.lineWidth = 6.5, t.lineCap = "round", t.lineJoin = "round", t.strokeStyle = "#c4c4c7", t.stroke(), f(t, "Get More From Health", 700, 180, 980, 449, "#000000"), t.fillStyle = "#ffffff", v(t, 118, 563, 1277, 1e3, 94), t.fill(), t.fillStyle = "#a8cafa", v(t, 255, 627, 90, 10, 5), t.fill(), v(t, 238, 649, 124, 11, 5.5), t.fill(), v(t, 218, 677, 163, 208, 25), t.fillStyle = "#e9f1fe", t.fill(), t.lineWidth = 12, t.strokeStyle = "#abcaf6", t.stroke(), t.beginPath(), t.moveTo(260.5, 754.5), t.lineTo(276, 754.5), t.lineTo(286, 717), t.lineTo(300.5, 781), t.lineTo(314, 730.5), t.lineTo(325, 754.5), t.lineTo(337.5, 754.5), t.lineWidth = 9, t.strokeStyle = o, t.stroke(), t.fillStyle = o, v(t, 256, 801, 87, 12, 6), t.fill(), v(t, 256, 836, 48, 12, 6), t.fill(), f(t, "Access Your Records", 600, 493, 1091, 641, "#000000"), t.beginPath(), t.arc(1303, 653, 37, 0, 2 * Math.PI), t.fillStyle = "#f0f0f0", t.fill(), t.beginPath(), t.moveTo(1291.5, 641.5), t.lineTo(1314.5, 664.5), t.moveTo(1314.5, 641.5), t.lineTo(1291.5, 664.5), t.lineWidth = 6.5, t.strokeStyle = "#bdbdbd", t.stroke();
            let s = ["Connect to your provider to", "see your health records and", "get updates when there’s a", "new entry."],
              e = 64;
            for (let a = 0; a < 3; a += 1) {
              t.font = `400 ${e}px ${h}`;
              let a = t.measureText(s[1]);
              e *= 732 / (a.actualBoundingBoxLeft + a.actualBoundingBoxRight);
            }
            t.font = `400 ${e}px ${h}`, t.fillStyle = "#000000";
            let a = 737 + t.measureText(s[0]).actualBoundingBoxAscent;
            s.forEach((s, e) => {
              let i = t.measureText(s);
              t.fillText(s, 493 + i.actualBoundingBoxLeft, a + 79.7 * e);
            }), f(t, "About Health Records & Privacy", 400, 500, 1277, 1068, o), t.fillStyle = o, v(t, 493, 1188, 367, 99, 49.5), t.fill(), f(t, "Get Started", 600, 534, 819, 1217, "#ffffff"), t.restore();
          }(a), t.current && function (t) {
            let s = t.getContext("2d");
            if (!s) return;
            let e = t.width / 1510,
              a = Math.round(1080 * e),
              i = t.height - a,
              n = document.createElement("canvas");
            n.width = t.width, n.height = i;
            let l = n.getContext("2d");
            if (!l) return;
            l.filter = `blur(${2.5 * e}px)`, l.drawImage(t, 0, a - 40 * e, t.width, i + 40 * e, 0, -40 * e, t.width, i + 40 * e), l.filter = "none", l.globalCompositeOperation = "destination-in";
            let r = l.createLinearGradient(0, 0, 0, 40 * e);
            r.addColorStop(0, "rgb(0 0 0 / 0)"), r.addColorStop(1, "rgb(0 0 0 / 1)"), l.fillStyle = r, l.fillRect(0, 0, n.width, i), s.save(), s.setTransform(1, 0, 0, 1, 0, 0), s.drawImage(n, 0, a);
            let c = s.createLinearGradient(0, a, 0, t.height);
            c.addColorStop(0, "rgb(242 242 247 / 0)"), c.addColorStop(.12, "rgb(242 242 247 / 0.5)"), c.addColorStop(.4, "rgb(242 242 247 / 0.62)"), c.addColorStop(1, "rgb(242 242 247 / 0.74)"), s.fillStyle = c, s.beginPath(), s.rect(0, a, t.width, i), s.clip(), s.setTransform(e, 0, 0, e, 0, 0), b(s, u.border), s.setTransform(1, 0, 0, 1, 0, 0), s.fill(), s.restore();
          }(t.current), i.clearRect(0, 0, 1510, 1428), i.fillStyle = "#357df1", g(i, 267, 1137, 81, 75), f(i, "Summary", 600, 222, 388, 1237, "#357df1"), i.fillStyle = s = "rgb(8 28 42)", i.beginPath(), i.ellipse(592.5, 1158, 13.8, 15.2, 0, 0, 2 * Math.PI), i.moveTo(655.9, 1154), i.ellipse(639.5, 1154, 16.4, 17.8, 0, 0, 2 * Math.PI), i.fill(), i.save(), x(i, 592.5, 29.5, 1181, 1210.5), i.fill(), i.globalCompositeOperation = "destination-out", x(i, 639.5, 33.5, 1180, 1210.5), i.lineWidth = 14, i.stroke(), i.fill(), i.restore(), x(i, 639.5, 33.5, 1180, 1210.5), i.fill(), f(i, "Sharing", 600, 551, 681, 1237, s), i.strokeStyle = "#1c1b20", i.lineCap = "round", i.beginPath(), i.arc(1270.5, 1191.5, 29.5, 0, 2 * Math.PI), i.lineWidth = 7, i.stroke(), i.beginPath(), i.moveTo(1292, 1213), i.lineTo(1313.5, 1234.5), i.lineWidth = 9, i.stroke(), m(t => t + 1);
        }
      };
    return a(), document.fonts.ready.then(a), () => {
      e = !0;
    };
  }, []), <div className={"relative shrink-0 overflow-hidden bg-white"} style={{
    width: 1510 * c,
    height: 1428 * c
  }} role={"group"} aria-label={"iOS Health summary with a glass tab bar showing Summary and Sharing, and a glass search button"}>{[<canvas ref={t} className={"absolute inset-0 size-full"} aria-hidden={!0} />, <canvas ref={A} className={"pointer-events-none invisible absolute inset-0 size-full"} aria-hidden={!0} />, (0, e.jsx)(T, {
      box: d,
      config: _,
      sourceRef: t,
      sceneTick: i,
      hostRef: I
    }), (0, e.jsx)(T, {
      box: p,
      config: S,
      sourceRef: t,
      sceneTick: i
    }), <div aria-hidden={!0} className={"pointer-events-none absolute transition-opacity duration-150"} style={{
      ...C(k),
      backgroundColor: "rgb(118 118 128 / 0.12)",
      opacity: +!P
    }} />, (0, e.jsx)(n.AnimatePresence, {
      children: P ? (0, e.jsx)(l.motion.div, {
        "aria-hidden": !0,
        className: "pointer-events-none absolute",
        style: {
          ...C(j),
          boxShadow: "0 0 0 1px rgb(0 0 0 / 0.1), 0 2px 4px rgb(0 0 0 / 0.06), 0 10px 24px rgb(0 0 0 / 0.1)"
        },
        initial: {
          scale: .84,
          opacity: 0
        },
        animate: {
          scale: 1,
          opacity: 1
        },
        exit: {
          scale: .84,
          opacity: 0
        },
        transition: M,
        children: (0, e.jsx)(r.GlassSurface, {
          config: z,
          fill: !0,
          live: !0,
          framed: !1,
          tone: q,
          gloss: !1,
          sourceRef: A,
          sceneTick: L
        })
      }, "droplet") : null
    }), <canvas ref={s} className={"pointer-events-none absolute inset-0 size-full"} aria-hidden={!0} />, <button type={"button"} aria-label={"Summary — press and hold"} aria-pressed={P} className={"absolute cursor-pointer touch-none outline-none select-none focus-visible:ring-2 focus-visible:ring-[#357df1]/50"} style={C(k)} onPointerDown={t => {
      t.currentTarget.setPointerCapture(t.pointerId), N();
    }} onPointerUp={() => w(!1)} onPointerCancel={() => w(!1)} onLostPointerCapture={() => w(!1)} onKeyDown={t => {
      (" " === t.key || "Enter" === t.key) && N();
    }} onKeyUp={() => w(!1)} onBlur={() => w(!1)} />]}</div>;
}
var I = _module49776;
let L = {
  className: I.default.className,
  style: {
    fontFamily: "'Caveat', 'Caveat Fallback'",
    fontWeight: 600,
    fontStyle: "normal"
  }
};
let R = "#e5392f";
function N() {
  return <div aria-hidden={!0} className={"pointer-events-none absolute top-[168px] -left-[118px] z-10 hidden h-[240px] w-[250px] lg:block"}>{[<p className={`${L.className} absolute top-0 left-0 w-[176px] -rotate-[6deg] text-[27px] leading-[0.95]`} style={{
      color: R
    }}>{"No, this is not a screenshot"}</p>, <svg viewBox={"0 0 250 240"} className={"absolute inset-0 size-full overflow-visible"} fill={"none"} stroke={R} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"}>{[<path d={"M44 74 C 32 112, 38 156, 66 184 C 88 204, 116 212, 148 214"} />, <path d={"M47 78 C 37 116, 45 156, 70 181 C 92 200, 118 208, 146 211"} strokeWidth={"1.6"} opacity={"0.7"} />, <path d={"M127 198 C 134 203, 141 208, 149 214 C 141 219, 132 225, 123 232"} />]}</svg>]}</div>;
}
const _export_GlassExamples = function () {
  return (0, e.jsx)(i.ExampleCard, {
    title: "Tab bar and search, iOS Health",
    wide: !0,
    className: "bg-white dark:bg-white",
    children: <div className={"relative"}>{[(0, e.jsx)(A, {}), (0, e.jsx)(N, {})]}</div>
  });
};
const _export_GlassTeaser = function () {
  let t = (0, a.useRef)(null),
    [s, i] = (0, a.useState)();
  return (0, a.useLayoutEffect)(() => {
    let s = t.current;
    if (!s) return;
    let e = () => {
      let {
        width: t,
        height: e
      } = s.getBoundingClientRect();
      if (t < 1) return;
      let {
          frameLeft: a,
          frameWidth: n,
          frameBottom: l
        } = m,
        r = (t - 32) / n;
      i({
        k: r,
        left: 16 - a * r,
        top: e - 16 - l * r
      });
    };
    e();
    let a = new ResizeObserver(e);
    return a.observe(s), () => a.disconnect();
  }, []), <div ref={t} className={"absolute inset-0 overflow-hidden"}>{s ? <div className={"absolute origin-top-left"} style={{
      left: s.left,
      top: s.top,
      scale: s.k
    }}>{(0, e.jsx)(A, {})}</div> : null}</div>;
};
export { _export_GlassExamples as GlassExamples, _export_GlassTeaser as GlassTeaser };

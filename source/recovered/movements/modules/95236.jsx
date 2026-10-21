// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module31908 from "./jsx-runtime-31908.js";
import * as _module45032 from "./45032.js";
import * as _module22673 from "./22673.js";
import * as _module95074 from "./95074.js";
var e = _module31908,
  a = _module45032,
  i = _module22673;
let n = {
  width: {
    min: 24,
    max: 480
  },
  height: {
    min: 24,
    max: 320
  },
  radius: {
    min: 0,
    max: 160
  },
  thick: {
    min: 6,
    max: 70
  },
  bend: {
    min: 0,
    max: 120
  },
  blur: {
    min: 0,
    max: 24
  },
  aber: {
    min: 0,
    max: 12
  },
  tint: {
    min: 0,
    max: .6
  }
};
function l(t, e, s, a, i) {
  let n = Math.abs(t) - s + i,
    l = Math.abs(e) - a + i;
  return Math.hypot(Math.max(n, 0), Math.max(l, 0)) + Math.min(Math.max(n, l), 0) - i;
}
function r(t, e, s, a, r, c) {
  let h = Math.min(Math.max(r, 0), s, a),
    o = l(t, e, s, a, h);
  if (o >= 0) return {
    nx: 0,
    ny: 0,
    amt: 0,
    sd: o,
    inside: !1
  };
  let m = l(t + 1, e, s, a, h) - l(t - 1, e, s, a, h),
    u = l(t, e + 1, s, a, h) - l(t, e - 1, s, a, h),
    d = Math.hypot(m, u) || 1;
  m /= d, u /= d;
  let p = 1 - Math.min(-o / Math.max(Math.max(Math.min(s, a), 1) * (.16 + .84 * (((0, i.clamp)(c, n.thick.min, n.thick.max) - n.thick.min) / (n.thick.max - n.thick.min))), 1), 1);
  return {
    nx: m,
    ny: u,
    amt: (p = p * p * p * (p * (6 * p - 15) + 10)) ** 1.6,
    sd: o,
    inside: !0
  };
}
function c(t, e, s) {
  return t * ((128 + e * s * 127) / 255 - .5);
}
function h(t) {
  return t ? "inset 0 0 0 1px rgb(255 255 255 / 0.22), inset 1px 1px 0 0 rgb(255 255 255 / 0.5), 0 30px 60px -20px rgb(0 0 0 / 0.6)" : "inset 0 0 0 1px rgb(255 255 255 / 0.55), inset 1px 1px 0 0 rgb(255 255 255 / 0.95), inset -1px -1px 0 0 rgb(0 0 0 / 0.05), 0 30px 60px -20px rgb(0 0 0 / 0.28), 0 4px 12px rgb(0 0 0 / 0.08)";
}
let o = {
    r: 0,
    g: 0,
    b: 0
  },
  m = {
    r: 0,
    g: 0,
    b: 0
  },
  u = {
    r: 0,
    g: 0,
    b: 0
  },
  d = {
    saturate: 1.4,
    brightness: 1
  },
  p = null,
  k = null,
  j = null,
  v = null,
  f = new WeakMap(),
  x = new WeakMap();
function g(t) {
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function b(t, e, s, a, i, n) {
  var l, r, c, h, o, m, u, d, p;
  let k = s - 1,
    j = a - 1,
    v = Math.min(Math.max(Math.floor(i), 0), k),
    f = Math.min(Math.max(Math.floor(n), 0), j),
    x = Math.min(v + 1, k),
    g = Math.min(f + 1, j),
    b = i - Math.floor(i),
    P = n - Math.floor(n),
    y = f * s,
    w = g * s,
    _ = (y + v) * 4,
    z = (y + x) * 4,
    q = (w + v) * 4,
    C = (w + x) * 4;
  c = (l = e[_]) + (e[z] - l) * b, t.r = c + ((r = e[q]) + (e[C] - r) * b - c) * P, m = (h = e[_ + 1]) + (e[z + 1] - h) * b, t.g = m + ((o = e[q + 1]) + (e[C + 1] - o) * b - m) * P, p = (u = e[_ + 2]) + (e[z + 2] - u) * b, t.b = p + ((d = e[q + 2]) + (e[C + 2] - d) * b - p) * P;
}
function P(t) {
  let e = t.getContext("2d", {
    willReadFrequently: !0
  });
  return !e || t.width < 1 || t.height < 1 ? null : {
    data: e.getImageData(0, 0, t.width, t.height).data,
    width: t.width,
    height: t.height
  };
}
function y(t, e, s) {
  return `${s}|${t.width}|${t.height}|${e.width}|${e.height}`;
}
var w = _module95074;
function _({
  config: t,
  className: s,
  fill: i,
  framed: n = !0,
  live: l = !1,
  sourceRef: z,
  sceneTick: q,
  readOffsetRef: C,
  tone: F,
  gloss: N = !0
}) {
  let S = (0, a.useRef)(null),
    D = (0, a.useRef)(null),
    M = (0, w.useThemeStore)(t => t.dark);
  (0, a.useLayoutEffect)(() => {
    let e = S.current,
      s = z.current;
    if (!e || !s || s.width < 1) return;
    D.current = P(s);
    let a = 0,
      i = () => {
        !function (t, e, s, a, i, n = 0, l, h = d, w = !0) {
          let _,
            z,
            q,
            C,
            F,
            N,
            S = `${h.saturate}|${h.brightness}|${w}`;
          if (l) {
            let i = function (t, e, s, a, i) {
              let n = Math.max(1, s.width),
                l = Math.max(1, s.height),
                r = y(s, e, a),
                c = x.get(t);
              if (!c || c.key !== r) {
                let s = t.getBoundingClientRect(),
                  a = e.getBoundingClientRect();
                c = {
                  key: r,
                  baseX: s.left - a.left - i.x,
                  baseY: s.top - a.top - i.y,
                  sourceDpr: e.width / Math.max(1, a.width)
                }, x.set(t, c);
              }
              return {
                originX: (c.baseX + i.x) * c.sourceDpr,
                originY: (c.baseY + i.y) * c.sourceDpr,
                sourceDpr: c.sourceDpr,
                cssW: n,
                cssH: l
              };
            }(t, e, s, n, l);
            _ = i.cssW, z = i.cssH, q = i.sourceDpr, C = i.originX, F = i.originY, N = `${l.x}|${l.y}|${y(s, e, n)}|${s.radius}|${s.thick}|${s.bend}|${s.blur}|${s.aber}|${a}|${S}`;
          } else {
            let i = t.getBoundingClientRect(),
              l = e.getBoundingClientRect();
            _ = Math.max(1, i.width), z = Math.max(1, i.height), q = e.width / Math.max(1, l.width), C = (i.left - l.left) * q, F = (i.top - l.top) * q, N = `${C}|${F}|${_}|${z}|${s.radius}|${s.thick}|${s.bend}|${s.blur}|${s.aber}|${a}|${n}|${S}`;
          }
          if (f.get(t) === N) return;
          let D = _ * z,
            M = Math.min(q, 2);
          D * M * M > 7e4 && (M = Math.sqrt(7e4 / D));
          let A = Math.max(1, Math.round(_ * M)),
            I = Math.max(1, Math.round(z * M));
          t.width !== A && (t.width = A), t.height !== I && (t.height = I);
          let E = t.getContext("2d");
          if (!E) return;
          let R = i ?? P(e);
          if (!R) return E.clearRect(0, 0, A, I);
          let $ = _ / 2,
            T = z / 2,
            L = Math.min(Math.max(s.radius, 0), $, T),
            O = function (t, e, s, a, i, n, l) {
              if (p && p.width === t && p.height === e && p.radius === n && p.thick === l && p.paintDpr === s) return p;
              let c = t * e,
                h = new Float32Array(c),
                o = new Float32Array(c),
                m = new Float32Array(c),
                u = new Uint8Array(c);
              for (let c = 0; c < e; c++) {
                let e = (c + .5) / s - i,
                  d = c * t;
                for (let c = 0; c < t; c++) {
                  let t = r((c + .5) / s - a, e, a, i, n, l);
                  if (!t.inside) continue;
                  let p = d + c;
                  h[p] = t.nx, o[p] = t.ny, m[p] = t.amt;
                  let k = t.sd > -1 ? -t.sd : 1;
                  u[p] = Math.round(255 * Math.min(k, 1));
                }
              }
              return p = {
                width: t,
                height: e,
                radius: n,
                thick: l,
                paintDpr: s,
                nx: h,
                ny: o,
                amt: m,
                alpha: u
              };
            }(A, I, M, $, T, L, s.thick);
          k && k.width === A && k.height === I || (k = E.createImageData(A, I));
          let U = k.data,
            {
              data: B,
              width: G,
              height: H
            } = R;
          for (let t = 0; t < I; t++) {
            let e = F + (t + .5) / M * q,
              i = t * A;
            for (let t = 0; t < A; t++) {
              let n = i + t,
                l = O.alpha[n],
                r = 4 * n;
              if (U[r + 3] = l, 0 === l) continue;
              let d = O.amt[n],
                p = c(1, O.nx[n], d) * q,
                k = c(1, O.ny[n], d) * q,
                j = C + (t + .5) / M * q,
                v = s.aber * d;
              b(m, B, G, H, j + s.bend * p, e + s.bend * k);
              let f = m.r,
                x = m.g,
                P = m.b;
              v > .01 && (b(o, B, G, H, j + (s.bend + v) * p, e + (s.bend + v) * k), b(u, B, G, H, j + (s.bend - v) * p, e + (s.bend - v) * k), f = o.r, P = u.b);
              let y = .2126 * f + .7152 * x + .0722 * P,
                w = g(y + (f - y) * h.saturate),
                _ = g(y + (x - y) * h.saturate),
                z = g(y + (P - y) * h.saturate);
              U[r] = g((w + (255 - w) * a) * h.brightness), U[r + 1] = g((_ + (255 - _) * a) * h.brightness), U[r + 2] = g((z + (255 - z) * a) * h.brightness);
            }
          }
          if (E.setTransform(1, 0, 0, 1, 0, 0), s.blur > 0) {
            let t = (j || (j = document.createElement("canvas")), j.width !== A && (j.width = A), j.height !== I && (j.height = I), v || (v = j.getContext("2d")), v);
            if (!t || !j) return;
            t.putImageData(k, 0, 0), E.clearRect(0, 0, A, I), E.filter = `blur(${s.blur * M}px)`, E.drawImage(j, 0, 0), E.filter = "none";
          } else E.putImageData(k, 0, 0);
          if (!w) return f.set(t, N);
          E.save(), E.setTransform(M, 0, 0, M, 0, 0);
          let V = E.createLinearGradient(0, 0, 0, .38 * z);
          V.addColorStop(0, "rgb(255 255 255 / 0.55)"), V.addColorStop(1, "rgb(255 255 255 / 0)"), E.globalAlpha = .45, E.globalCompositeOperation = "screen", E.fillStyle = V, E.beginPath(), E.roundRect(0, 0, _, z, L), E.fill(), E.restore(), f.set(t, N);
        }(e, s, t, t.tint, D.current, q, C?.current(), F, N);
      };
    if (l) {
      let t = () => {
        i(), a = requestAnimationFrame(t);
      };
      return a = requestAnimationFrame(t), () => cancelAnimationFrame(a);
    }
    let n = () => {
      cancelAnimationFrame(a), a = requestAnimationFrame(i);
    };
    n();
    let h = new ResizeObserver(n);
    return h.observe(e), () => {
      cancelAnimationFrame(a), h.disconnect();
    };
  }, [t, l, C, q, z, F, N]);
  let A = ["pointer-events-none", i ? "absolute inset-0 size-full" : "", s].filter(Boolean).join(" ");
  return <canvas ref={S} className={A} style={{
    width: i ? void 0 : t.width,
    height: i ? void 0 : t.height,
    maxWidth: i ? void 0 : "100%",
    borderRadius: t.radius,
    boxShadow: n ? h(M) : void 0
  }} />;
}
const _export_GlassSurface = _;
export { _export_GlassSurface as GlassSurface };

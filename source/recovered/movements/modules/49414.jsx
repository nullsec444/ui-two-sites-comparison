// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module80269 from "./80269.js";
import * as _module9591 from "./9591.js";
import * as _module86631 from "./86631.js";
import * as _module82599 from "./82599.js";
var t = _module80269,
  n = _module9591,
  r = _module86631,
  i = _module82599;
let o = .1 * .1;
function l(e, t, n, r, i, o) {
  return r >= t != o >= t && e <= (i - n) * (t - r) / (o - r) + n;
}
function s(e, t, n, r, i, o, s, u, a, c) {
  let f = !1;
  return l(e, t, n, r, i, o) && (f = !f), l(e, t, i, o, s, u) && (f = !f), l(e, t, s, u, a, c) && (f = !f), l(e, t, a, c, n, r) && (f = !f), f;
}
function u(e, t, n, r, i, o) {
  let l = Math.min(n, i),
    s = Math.max(n, i),
    u = Math.min(r, o),
    a = Math.max(r, o);
  return e >= l && e <= s && t >= u && t <= a;
}
const _export_safePolygon = function (e = {}) {
  let {
      blockPointerEvents: l = !1
    } = e,
    a = new n.Timeout(),
    c = ({
      x: e,
      y: n,
      placement: l,
      elements: c,
      onClose: f,
      nodeId: d,
      tree: g
    }) => {
      let p = l?.split("-")[0],
        m = !1,
        h = null,
        v = null,
        y = "u" > typeof performance ? performance.now() : 0;
      return function (l) {
        a.clear();
        let E = c.domReference,
          b = c.floating;
        if (!E || !b || null == p || null == e || null == n) return;
        let {
            clientX: S,
            clientY: x
          } = l,
          T = (0, r.getTarget)(l),
          w = "mouseleave" === l.type,
          C = (0, r.contains)(b, T),
          R = (0, r.contains)(E, T);
        if (C && (m = !0, !w)) return;
        if (R && (m = !1, !w)) {
          m = !0;
          return;
        }
        if (w && (0, t.isElement)(l.relatedTarget) && (0, r.contains)(b, l.relatedTarget)) return;
        function O() {
          return !!(g && (0, i.getNodeChildren)(g.nodesRef.current, d).length > 0);
        }
        function P() {
          O() || (a.clear(), f());
        }
        if (O()) return;
        let A = E.getBoundingClientRect(),
          I = b.getBoundingClientRect(),
          M = e > I.right - I.width / 2,
          L = n > I.bottom - I.height / 2,
          k = I.width > A.width,
          D = I.height > A.height,
          N = (k ? A : I).left,
          F = (k ? A : I).right,
          H = (D ? A : I).top,
          W = (D ? A : I).bottom;
        if ("top" === p && n >= A.bottom - 1 || "bottom" === p && n <= A.top + 1 || "left" === p && e >= A.right - 1 || "right" === p && e <= A.left + 1) return void P();
        let V = !1;
        switch (p) {
          case "top":
            V = u(S, x, N, A.top + 1, F, I.bottom - 1);
            break;
          case "bottom":
            V = u(S, x, N, I.top + 1, F, A.bottom - 1);
            break;
          case "left":
            V = u(S, x, I.right - 1, W, A.left + 1, H);
            break;
          case "right":
            V = u(S, x, A.right - 1, W, I.left + 1, H);
        }
        if (V) return;
        if (m && (!(S >= A.x) || !(S <= A.x + A.width) || !(x >= A.y) || !(x <= A.y + A.height)) || !w && function (e, t) {
          let n = performance.now(),
            r = n - y;
          if (null === h || null === v || 0 === r) return h = e, v = t, y = n, !1;
          let i = e - h,
            l = t - v;
          return h = e, v = t, y = n, i * i + l * l < r * r * o;
        }(S, x)) return void P();
        let B = !1;
        switch (p) {
          case "top":
            {
              let t = k ? .25 : 2,
                r = n + .5 + 1,
                i = M || k ? I.bottom - .5 : I.top,
                o = M ? k ? I.bottom - .5 : I.top : I.bottom - .5;
              B = s(S, x, k || M ? e + t : e - t, r, k ? e - t : M ? e + t : e - t, r, I.left, i, I.right, o);
              break;
            }
          case "bottom":
            {
              let t = k ? .25 : 2,
                r = n - .5,
                i = M || k ? I.top + .5 : I.bottom,
                o = M ? k ? I.top + .5 : I.bottom : I.top + .5;
              B = s(S, x, k || M ? e + t : e - t, r, k ? e - t : M ? e + t : e - t, r, I.left, i, I.right, o);
              break;
            }
          case "left":
            {
              let t = D ? .25 : 2,
                r = e + .5 + 1,
                i = L || D ? I.right - .5 : I.left,
                o = L ? D ? I.right - .5 : I.left : I.right - .5;
              B = s(S, x, i, I.top, o, I.bottom, r, D || L ? n + t : n - t, r, D ? n - t : L ? n + t : n - t);
              break;
            }
          case "right":
            {
              let t = D ? .25 : 2,
                r = e - .5,
                i = L || D ? I.left + .5 : I.right,
                o = L ? D ? I.left + .5 : I.right : I.left + .5;
              B = s(S, x, r, D || L ? n + t : n - t, r, D ? n - t : L ? n + t : n - t, i, I.top, o, I.bottom);
            }
        }
        B ? m || a.start(40, P) : P();
      };
    };
  return c.__options = {
    ...e,
    blockPointerEvents: l
  }, c;
};
export { _export_safePolygon as safePolygon };

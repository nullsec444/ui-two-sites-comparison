// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module45780 from "./45780.js";
import * as _module87522 from "./87522.js";
var t = _module45780,
  e = _module87522,
  e = e,
  a = e;
function i(s, t = 0) {
  let e = 10 ** t;
  return Math.round(s * e) / e;
}
function n(s) {
  return `${s.x}px ${s.y}px ${s.blur}px rgb(0 0 0 / ${s.a})`;
}
function l(s) {
  return `${s.x}px ${s.y}px ${s.blur}px rgb(var(--shadow-color, 0 0 0) / ${s.a})`;
}
const _export_composeShadowLayers = function ({
  layers: s = 6,
  size: n,
  intensity: l
}) {
  let r,
    {
      reach: c,
      lift: o
    } = {
      reach: 24 + 200 * (r = Math.min(100, Math.max(0, n)) / 100),
      lift: .08 + .42 * r
    },
    h = Math.max(c / 100, .1);
  return Array.from({
    length: s
  }, (n, r) => {
    let m = 0 === s ? 0 : (r - 0) / (s - 0),
      u = i(l * (1 - (0, t.easeCubicInOut)(m)), 2);
    return {
      x: 0,
      y: i(c * o * (5 * (0, e.quadIn)(m)) * 1),
      blur: i(48 * h * (0, a.quadOut)(m) * (2 * o)),
      a: u
    };
  }).filter(s => s.a > 0 && (0 !== s.y || 0 !== s.blur));
};
const _export_layerToTokenCss = l;
const _export_layersToBoxShadow = function (s) {
  return s.map(n).join(", ");
};
export { _export_composeShadowLayers as composeShadowLayers, _export_layerToTokenCss as layerToTokenCss, _export_layersToBoxShadow as layersToBoxShadow };

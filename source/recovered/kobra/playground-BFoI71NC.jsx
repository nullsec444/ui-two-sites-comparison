// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f || (m.f = ["assets/playground-scope-DN31P4l7.js", "assets/rolldown-runtime-B0Z9INg1.js", "assets/jsx-runtime-Ciaf_P-h.js", "assets/react-dom-U4kpXZKZ.js", "assets/component-catalog-x55m0xeC.js", "assets/cookie-consent-V7NW5MtZ.js", "assets/utils-WkhMP9hs.js", "assets/resolution-C19ZFU1I.js", "assets/seo-CEr-E37r.js", "assets/preload-helper-Czpn1I53.js", "assets/comparisons-Bvgw9jnW.js", "assets/useRenderElement-BLCXgiyH.js", "assets/dist-CFNp_irW.js", "assets/createBaseUIEventDetails-s-LN--f1.js", "assets/button-6T-mn2Pp.js", "assets/plans-C5gnmWKf.js", "assets/useRegisterFieldControl-AYSnYd0j.js", "assets/use-narrow-shell-CsfKh4xy.js", "assets/visuallyHidden-Cn7Rn7MY.js", "assets/inertValue-BJdpJaPH.js", "assets/shim-DHzQdBGf.js", "assets/with-selector-B-6hKQqB.js", "assets/useControlled-Cp_s8ypY.js", "assets/input-n4StpLEZ.js", "assets/dialog-D5lt4KMe.js", "assets/createReactComponent-DqK5J7gw.js", "assets/useClick-DnDtMIzB.js", "assets/NullStore-DKa5hxry.js", "assets/composite-BDauBs8w.js", "assets/useValueChanged-DFGH-h8Z.js", "assets/toast-DvN-c943.js", "assets/IconPlus-CcZsF6UA.js", "assets/joined-script-ChN2trS6.js", "assets/DirectionContext-CSiJxUVd.js", "assets/react-BGf_lakQ.js", "assets/use-reduced-motion-BdikIsVN.js", "assets/zen-4HBa_J5C.js", "assets/IconChevronRight-C9BymwZE.js", "assets/IconArrowRight-DerOrAJ3.js", "assets/IconArrowUpRight-MjcyEVid.js", "assets/streaming-text-Dxk_F3bc.js", "assets/useCompositeListItem-4pOaQAyk.js", "assets/IconCheck-BGXEIM6U.js", "assets/trackpad-swipe-MOPDzk0v.js", "assets/IconCode-Jxt5x2jf.js", "assets/IconMinus-C8feF3nd.js", "assets/navigation-example-SI1YQTgl.js", "assets/usePositioner-DP5NUI1y.js", "assets/adaptiveOriginMiddleware-Ds70W8x-.js", "assets/CompositeItem-vllB9ukv.js", "assets/tooltip-C51luKYh.js", "assets/dropdown-menu-BXn32Y_k.js", "assets/Separator-Cc9V-VRg.js", "assets/useRender-B7P-tYsb.js", "assets/label-kY8Qa3sh.js", "assets/input-group-BYgV-9P-.js", "assets/CSPContext-BMPia1xs.js", "assets/badge-BPpa500U.js", "assets/table-B2gZYvbu.js", "assets/persian-DtRiih84.js", "assets/format-nE6SVSKo.js", "assets/IconPalette-DhaCq_X9.js", "assets/pricing-faq-DklJK1Zr.js", "assets/IconVolumeOff-xZ0sbK4Y.js", "assets/IconDownload-D9S_20lD.js", "assets/video-BOsS13Ra.js", "assets/IconRotate-cfH2nnph.js", "assets/IconVolume-DHGChT-5.js", "assets/theme-switch-DOqINaro.js", "assets/IconSearch-DLrEp44H.js", "assets/code-block-8j4abSW0.js", "assets/copy-check-C8jXc5g7.js", "assets/dist-Dgli2vvz.js", "assets/sound-BCknqSEK.js", "assets/slug-redirects-5jXsv26S.js", "assets/email-receipt-CTE3W4Vg.js", "assets/AreaChart-BaKAH6gj.js", "assets/dist-BXz-sUdB.js", "assets/dates-CXgAlU_g.js", "assets/drawer-BhrHYSlC.js", "assets/file-diff-C90Cj5iq.js", "assets/form-ASkYgZLL.js", "assets/password-input-rfTSAwzh.js", "assets/snap-stops-D5HwDIF7.js", "assets/slider-C3jlw4B9.js", "assets/registry-B0pwistY.js", "assets/agent-guide-BI8j0aKR.js", "assets/dialog-steps-B3UkBr0D.js", "assets/download-zip-C0to-1sI.js", "assets/hash-scroll-DjxExjN6.js", "assets/headings-DvAJehmF.js"])) => i.map(i => d[i]);
import { a as e } from "./rolldown-runtime-B0Z9INg1.js";
import { n as t } from "./jsx-runtime-Ciaf_P-h.js";
import { t as n } from "./preload-helper-Czpn1I53.js";
var r = e(t(), 1),
  i = new Set(),
  a = e => i.has(e);
function o(e) {
  return (0, r.useSyncExternalStore)(d, () => i.has(e), () => i.has(e));
}
var s = new Map(),
  c = new Set(),
  l = 0,
  u = () => {
    for (let e of c) e();
  },
  d = e => (c.add(e), () => c.delete(e));
function f(e, t) {
  t === null ? s.delete(e) : s.set(e, t), l += 1, u();
}
function p() {
  return (0, r.useSyncExternalStore)(d, () => l, () => 0);
}
function m(e, t, n = []) {
  i.add(e), u();
  let r = {
    ...t
  };
  for (let [i, a] of Object.entries(t)) typeof a == `function` && (!/^[A-Z]/.test(i) || n.includes(i) || (r[i] = h(e, i, a)));
  return r;
}
function h(e, t, n) {
  function i(i) {
    let a = (0, r.useSyncExternalStore)(d, () => s.get(e)?.[t], () => void 0);
    return (0, r.createElement)(a ?? n, i);
  }
  return i.displayName = t, i;
}
function g(e, t) {
  return i.add(e), (0, r.lazy)(t);
}
function _(e) {
  let t = `playground-styles`,
    n = document.querySelector(`#${t}`);
  n || (n = document.createElement(`style`), n.id = t, document.head.appendChild(n)), n.textContent = e;
}
async function v(e) {
  let {
    compileWith: t
  } = await n(async () => {
    let {
      compileWith: e
    } = await import(`./playground-scope-DN31P4l7.js`);
    return {
      compileWith: e
    };
  }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90]));
  return t(e);
}
export { a, o as c, m as i, v as n, f as o, g as r, p as s, _ as t };

// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
const _export_clamp = function (t, e, i) {
  return Math.min(i, Math.max(e, t));
};
const _export_hexToRgb = function (t) {
  let e = t.trim().replace(/^#/, "");
  return /^[0-9a-fA-F]{6}$/.test(e) ? {
    r: Number.parseInt(e.slice(0, 2), 16),
    g: Number.parseInt(e.slice(2, 4), 16),
    b: Number.parseInt(e.slice(4, 6), 16)
  } : null;
};
const _export_hsvToRgb = function ({
  h: t,
  s: e,
  v: i
}) {
  let n = i / 100,
    s = e / 100 * n,
    r = (t % 360 + 360) % 360 / 60,
    o = s * (1 - Math.abs(r % 2 - 1)),
    a = n - s,
    l = 0,
    u = 0,
    h = 0;
  return r >= 0 && r < 1 ? (l = s, u = o) : r < 2 ? (l = o, u = s) : r < 3 ? (u = s, h = o) : r < 4 ? (u = o, h = s) : r < 5 ? (l = o, h = s) : (l = s, h = o), {
    r: Math.round((l + a) * 255),
    g: Math.round((u + a) * 255),
    b: Math.round((h + a) * 255)
  };
};
const _export_hueToCss = function (t) {
  return `hsl(${t} 100% 50%)`;
};
const _export_rgbToHex = function ({
  r: t,
  g: e,
  b: i
}) {
  return `#${[t, e, i].map(t => t.toString(16).padStart(2, "0")).join("").toUpperCase()}`;
};
const _export_rgbToHsv = function ({
  r: t,
  g: e,
  b: i
}) {
  let n = t / 255,
    s = e / 255,
    r = i / 255,
    o = Math.max(n, s, r),
    a = o - Math.min(n, s, r),
    l = 0;
  return 0 !== a && (l = o === n ? (s - r) / a % 6 * 60 : o === s ? 60 * ((r - n) / a + 2) : 60 * ((n - s) / a + 4)), l < 0 && (l += 360), {
    h: l,
    s: 0 === o ? 0 : a / o * 100,
    v: 100 * o
  };
};
export { _export_clamp as clamp, _export_hexToRgb as hexToRgb, _export_hsvToRgb as hsvToRgb, _export_hueToCss as hueToCss, _export_rgbToHex as rgbToHex, _export_rgbToHsv as rgbToHsv };

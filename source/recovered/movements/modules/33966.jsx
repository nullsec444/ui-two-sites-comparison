// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module45780 from "./45780.js";
import * as _module87522 from "./87522.js";
var e = _module45780,
  s = _module87522,
  s = s;
let a = [{
    id: "ink",
    label: "Ink",
    value: "#1a1a1c",
    darkValue: "#e8e8ea"
  }, {
    id: "blue",
    label: "Blue",
    value: "#3b5bdb",
    darkValue: "#748ffc"
  }, {
    id: "teal",
    label: "Teal",
    value: "#0c8a7a",
    darkValue: "#38d9a9"
  }, {
    id: "amber",
    label: "Amber",
    value: "#e67700",
    darkValue: "#ffc078"
  }, {
    id: "rose",
    label: "Rose",
    value: "#c2255c",
    darkValue: "#f783ac"
  }, {
    id: "violet",
    label: "Violet",
    value: "#7048e8",
    darkValue: "#b197fc"
  }],
  i = [{
    id: "sm",
    label: "S",
    width: 120,
    height: 38
  }, {
    id: "md",
    label: "M",
    width: 200,
    height: 64
  }, {
    id: "lg",
    label: "L",
    width: 280,
    height: 90
  }];
const _export_CHART_COLORS = a;
const _export_CHART_EASINGS = [{
  id: "linear",
  label: "Linear"
}, {
  id: "low-ease",
  label: "Low ease"
}, {
  id: "ease",
  label: "Ease"
}];
const _export_CHART_EDGE_FADE_MASK = "linear-gradient(to right, transparent, black 8px, black calc(100% - 8px), transparent)";
const _export_CHART_SIZES = i;
const _export_CHART_VIEWBOX = {
  width: 200,
  height: 64
};
const _export_DEFAULT_CHART_DATA = [7, 11, 4, 14, 9, 18, 6, 16, 12, 20, 8, 15];
const _export_buildChartGeometry = function (t, a, i, n, l = 2) {
  let r = 0 === t.length ? [0, 0] : 1 === t.length ? [t[0], t[0]] : t,
    c = Math.min(...r),
    h = Math.max(...r) - c || 1,
    o = Math.max(1, a - 2 * l),
    m = Math.max(1, i - 2 * l),
    u = function (t) {
      switch (t) {
        case "linear":
          return t => t;
        case "low-ease":
          return s.quadInOut;
        case "ease":
          return e.easeCubicInOut;
        default:
          return t;
      }
    }(n),
    d = [],
    p = r.length - 1;
  for (let t = 0; t < p; t++) {
    let e = l + t / p * o,
      s = l + (t + 1) / p * o,
      a = l + m - (r[t] - c) / h * m,
      i = l + m - (r[t + 1] - c) / h * m;
    for (let t = 0; t < 16; t++) {
      let n = t / 16,
        l = u(n);
      d.push({
        x: e + (s - e) * n,
        y: a + (i - a) * l
      });
    }
  }
  d.push({
    x: l + o,
    y: l + m - (r[p] - c) / h * m
  });
  let k = d.map((t, e) => `${0 === e ? "M" : "L"} ${t.x.toFixed(2)} ${t.y.toFixed(2)}`).join(" "),
    j = i - l,
    v = `${k} L ${d[d.length - 1].x.toFixed(2)} ${j.toFixed(2)} L ${d[0].x.toFixed(2)} ${j.toFixed(2)} Z`;
  return {
    linePath: k,
    areaPath: v,
    width: a,
    height: i
  };
};
const _export_formatChartDataJson = function (t) {
  return `[${t.join(", ")}]`;
};
const _export_getChartColor = function (t) {
  return a.find(e => e.id === t) ?? a[0];
};
const _export_getChartSize = function (t) {
  return i.find(e => e.id === t) ?? i[1];
};
const _export_parseChartDataJson = function (t) {
  let e = t.trim();
  if (!e) return {
    data: null,
    error: "Paste a JSON array of numbers."
  };
  try {
    let t = JSON.parse(e);
    if (!Array.isArray(t)) return {
      data: null,
      error: "Expected a JSON array, e.g. [4, 8, 12]."
    };
    if (t.length < 2) return {
      data: null,
      error: "Need at least two numbers."
    };
    let s = [];
    for (let e of t) {
      if ("number" != typeof e || !Number.isFinite(e)) return {
        data: null,
        error: "Every item must be a finite number."
      };
      s.push(e);
    }
    return {
      data: s,
      error: null
    };
  } catch {
    return {
      data: null,
      error: "Invalid JSON."
    };
  }
};
const _export_randomChartData = function (t = 12) {
  let e = Math.max(2, t),
    s = [],
    a = 6 + 10 * Math.random();
  for (let t = 0; t < e; t++) s.push(Math.round(a = Math.max(1, Math.min(24, a + (Math.random() - .42) * 7 + (.12 > Math.random() ? (Math.random() - .5) * 10 : 0)))));
  return s;
};
export { _export_CHART_COLORS as CHART_COLORS, _export_CHART_EASINGS as CHART_EASINGS, _export_CHART_EDGE_FADE_MASK as CHART_EDGE_FADE_MASK, _export_CHART_SIZES as CHART_SIZES, _export_CHART_VIEWBOX as CHART_VIEWBOX, _export_DEFAULT_CHART_DATA as DEFAULT_CHART_DATA, _export_buildChartGeometry as buildChartGeometry, _export_formatChartDataJson as formatChartDataJson, _export_getChartColor as getChartColor, _export_getChartSize as getChartSize, _export_parseChartDataJson as parseChartDataJson, _export_randomChartData as randomChartData };

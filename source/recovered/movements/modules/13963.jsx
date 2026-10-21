// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module33966 from "./33966.js";
import * as _module36832 from "./36832.js";
var e = _module33966,
  s = _module36832;
let a = "@movements/react-glass",
  i = "@movements/react-loader",
  n = "@movements/react-tiny-chart";
function l(t, e, s) {
  return `import { ${e} } from "${t}";

export function Example() {
  return (
    ${0 === s.length ? `<${e} />` : [`<${e}`, ...s.map(([t, e]) => `      ${"string" == typeof e ? `${t}="${e}"` : !0 === e ? t : `${t}={${JSON.stringify(e).replace(/,/g, ", ")}}`}`), "    />"].join("\n")}
  );
}`;
}
function r(t, e) {
  return t.filter(([t, s]) => JSON.stringify(e[t]) !== JSON.stringify(s));
}
const _export_CHART_PACKAGE = n;
const _export_GLASS_PACKAGE = a;
const _export_LOADER_PACKAGE = i;
const _export_chartPackageSnippet = function (t) {
  return l(n, "TinyLineChart", [["data", t.data], ...r([["color", (0, e.getChartColor)(t.colorId).value], ["easing", t.easing], ["size", t.size], ["gradient", t.showGradient], ["edgeFade", t.showEdgeFade]], {
    color: "#e67700",
    easing: "low-ease",
    size: "md",
    gradient: !1,
    edgeFade: !0
  })]);
};
const _export_glassPackageSnippet = function (t) {
  return l(a, "Glass", r([["width", t.width], ["height", t.height], ["radius", t.radius], ["rim", t.thick], ["bend", t.bend], ["blur", t.blur], ["aberration", t.aber], ["tint", Math.round(1e3 * t.tint) / 1e3]], {
    width: 50,
    height: 50,
    radius: 25,
    rim: 18,
    bend: 60,
    blur: 2,
    aberration: 12,
    tint: .1
  }));
};
const _export_loaderPackageSnippet = function (t) {
  let e = function (t, e) {
    let a = JSON.stringify(e.map(t => [...t].sort((t, e) => t - e)));
    for (let {
      id: e
    } of s.LOADER_PRESETS) if (JSON.stringify((0, s.framesForPreset)(e, t).map(t => (0, s.indicesFromFrame)(t))) === a) return e;
    return null;
  }(t.size, t.frames);
  return l(i, "DotLoader", r([["size", t.size], e ? ["preset", e] : ["frames", t.frames], ["frameDuration", t.frameDuration], ["transition", t.transition], ["transitionDuration", t.transitionDuration], ["activeColor", t.activeColor], ["inactiveColor", t.inactiveColor]], {
    size: 3,
    preset: "spinner",
    frameDuration: 120,
    transition: "color",
    transitionDuration: 90,
    activeColor: "#1a1a1c",
    inactiveColor: "#e8e8ea"
  }));
};
export { _export_CHART_PACKAGE as CHART_PACKAGE, _export_GLASS_PACKAGE as GLASS_PACKAGE, _export_LOADER_PACKAGE as LOADER_PACKAGE, _export_chartPackageSnippet as chartPackageSnippet, _export_glassPackageSnippet as glassPackageSnippet, _export_loaderPackageSnippet as loaderPackageSnippet };

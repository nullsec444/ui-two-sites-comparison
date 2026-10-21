// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
let t = [{
    slug: "glass",
    href: "/glass",
    kind: "library",
    name: "Refractive Glass",
    tagline: "Glass that bends what's behind it",
    description: "A pure canvas lens — rim, bend, blur, and aberration that render the same in every browser. Drag the tile in the configurator; it always snaps home.",
    icon: "glass"
  }, {
    slug: "loader",
    href: "/loader",
    kind: "library",
    name: "Dot Loader",
    tagline: "A dot grid you paint frame by frame",
    description: "Paint a grid timeline, tune timing and transitions, then export one config for a single shared loader component.",
    icon: "loader"
  }, {
    slug: "chart",
    href: "/chart",
    kind: "library",
    name: "Tiny Line Chart",
    tagline: "A sparkline small enough for any row",
    description: "A performant SVG sparkline with smooth easing, an optional gradient fill, and soft edges — sized for stat tiles, tables, and lists.",
    icon: "chart"
  }],
  r = [{
    slug: "shadows",
    href: "/shadows",
    kind: "utility",
    name: "Smooth Shadows",
    tagline: "Soft shadows that cast from above",
    description: "Compose a stack of soft shadow layers from two numbers — size and intensity — then export a token for Tailwind, styled-components, or StyleX.",
    icon: "shadow"
  }, {
    slug: "radius",
    href: "/radius",
    kind: "utility",
    name: "Perfect Corner Radius",
    tagline: "Nested radii that stay concentric",
    description: "Set the outer radius and the gap; the inner radius follows so nested corners share one center.",
    icon: "radius"
  }, {
    slug: "shimmer",
    href: "/shimmer",
    kind: "utility",
    name: "Loading Shimmer",
    tagline: "A slanted beam for loading states",
    description: "A slanted beam that travels left to right — stacked like a border glow, painted as a fill.",
    icon: "shimmer"
  }],
  n = [...t, ...r];
const _export_LIBRARIES = t;
const _export_UTILITIES = r;
const _export_getCatalogItem = function (e) {
  let t = n.find(t => t.slug === e);
  if (!t) throw Error(`Unknown catalog item: ${e}`);
  return t;
};
export { _export_LIBRARIES as LIBRARIES, _export_UTILITIES as UTILITIES, _export_getCatalogItem as getCatalogItem };

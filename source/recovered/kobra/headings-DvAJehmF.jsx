// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import { r as e } from "./rolldown-runtime-B0Z9INg1.js";
var t = e({
    headingId: () => n,
    headingsIn: () => r
  }),
  n = e => e.toLowerCase().replace(/[^a-z0-9]+/g, `-`).replace(/^-+|-+$/g, ``),
  r = e => [...e.matchAll(/^## +(.+?)\s*$/gm)].map(([, e]) => ({
    text: e,
    id: n(e)
  }));
export { t as n, n as t };

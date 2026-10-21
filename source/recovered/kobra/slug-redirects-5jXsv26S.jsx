// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import { r as e } from "./rolldown-runtime-B0Z9INg1.js";
import { c as t } from "./component-catalog-x55m0xeC.js";
import { r as n } from "./seo-CEr-E37r.js";
var r = e({
    RETIRED: () => i,
    componentRedirect: () => a
  }),
  i = {
    "input-group": `input`,
    bubble: `conversation`,
    "native-select": `select`,
    field: `input`,
    label: `input`,
    thinking: `reasoning-steps`,
    dropzone: `magnetic-dropzone`
  };
function a(e) {
  let r = e.toLowerCase().replace(/^\/+|\/+$/g, ``);
  if (!r || r.includes(`/`)) return null;
  let a = i[r];
  return a ? n(a) : t(r) ? n(r) : null;
}
export { a as n, r, i as t };

// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import { a as e } from "./rolldown-runtime-B0Z9INg1.js";
import { t } from "./jsx-runtime-Ciaf_P-h.js";
import { n } from "./useStore-CeyF0_C9.js";
import { g as r, y as i } from "./index-C2FRa1ig.js";
var a = e(t());
function o() {
  let {
      redirect: e
    } = r.useSearch(),
    t = n();
  return <div className={`min-h-screen bg-background`}>{(0, a.jsx)(i, {
      open: !0,
      onClose: () => void t.navigate({
        to: `/components`
      }),
      idPrefix: `login`,
      redirectTo: e ?? `/dashboard`
    })}</div>;
}
export { o as component };

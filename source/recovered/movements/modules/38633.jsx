// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module45032 from "./45032.js";
import * as _module75623 from "./75623.js";
var t = _module45032,
  r = _module75623;
let n = 0,
  i = r.SafeReact.useId;
const _export_useId = function (e, r) {
  if (void 0 !== i) {
    let t = i();
    return e ?? (r ? `${r}-${t}` : t);
  }
  return function (e, r = "mui") {
    let [i, o] = t.useState(e),
      s = e || i;
    return t.useEffect(() => {
      null == i && (n += 1, o(`${r}-${n}`));
    }, [i, r]), s;
  }(e, r);
};
export { _export_useId as useId };

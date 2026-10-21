// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module45032 from "./45032.js";
import * as _module71955 from "./71955.js";
import * as _module34561 from "./34561.js";
import * as _module74306 from "./74306.js";
import * as _module31908 from "./jsx-runtime-31908.js";
var t = _module45032,
  n = _module71955,
  r = _module34561,
  i = _module74306,
  o = _module31908;
let l = t.forwardRef(function (e, l) {
  let [s, u] = t.useState();
  return (0, n.useIsoLayoutEffect)(() => {
    r.platform.screenReader.voiceOver && r.platform.engine.webkit && u("button");
  }, []), <span {...e} ref={l} style={i.visuallyHidden} aria-hidden={!s || void 0} {...{
    tabIndex: 0,
    role: s
  }} data-base-ui-focus-guard={""} />;
});
const _export_FocusGuard = l;
export { _export_FocusGuard as FocusGuard };

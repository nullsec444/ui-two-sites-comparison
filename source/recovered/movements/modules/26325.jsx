// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module45032 from "./45032.js";
import * as _module99137 from "./99137.js";
var e = _module45032,
  i = _module99137;
const _export_usePresence = function (t = !0) {
  let n = (0, e.useContext)(i.PresenceContext);
  if (null === n) return [!0, null];
  let {
      isPresent: s,
      onExitComplete: r,
      register: o
    } = n,
    a = (0, e.useId)();
  (0, e.useEffect)(() => {
    if (t) return o(a);
  }, [t]);
  let l = (0, e.useCallback)(() => t && r && r(a), [a, r, t]);
  return !s && r ? [!1, l] : [!0];
};
export { _export_usePresence as usePresence };

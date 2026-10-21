// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module7642 from "./7642.js";
import * as _module45032 from "./45032.js";
import * as _module56032 from "./56032.js";
var r = _module7642;
var f = _module45032,
  d = _module56032;
const _export_usePopupHandleStore = function (e) {
  let t = f.useCallback(t => void 0 === e ? r.NOOP : e.subscribeStore(t), [e]),
    n = f.useCallback(() => void 0 === e ? void 0 : e.store, [e]);
  return (0, d.useSyncExternalStore)(t, n, () => e?.serverStore);
};
export { _export_usePopupHandleStore as usePopupHandleStore };

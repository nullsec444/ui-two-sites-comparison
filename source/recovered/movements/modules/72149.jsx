// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module69699 from "./69699.js";
import * as _module92548 from "./92548.js";
var D = _module69699,
  R = _module92548;
function k(t, e) {
  let i = t.getValue("willChange");
  if ((0, R.isMotionValue)(i) && i.add) return i.add(e);
  if (!i && D.MotionGlobalConfig.WillChange) {
    let i = new D.MotionGlobalConfig.WillChange("auto");
    t.addValue("willChange", i), i.add(e);
  }
}
const _export_addValueToWillChange = k;
export { _export_addValueToWillChange as addValueToWillChange };

// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module80269 from "./80269.js";
import * as _module38633 from "./38633.js";
import * as _module71955 from "./71955.js";
import * as _module23286 from "./23286.js";
import * as _module34529 from "./34529.js";
import * as _module94195 from "./94195.js";
import * as _module38233 from "./38233.js";
var t = _module80269,
  n = _module38633,
  r = _module71955,
  i = _module23286,
  o = _module34529,
  l = _module94195,
  s = _module38233;
const _export_useFloatingRootContext = function (e) {
  let {
      open: u = !1,
      onOpenChange: a,
      elements: c = {}
    } = e,
    f = (0, n.useId)(),
    d = null != (0, l.useFloatingParentNodeId)(),
    g = (0, i.useRefWithInit)(() => new s.FloatingRootStore({
      open: u,
      transitionStatus: void 0,
      onOpenChange: a,
      referenceElement: c.reference ?? null,
      floatingElement: c.floating ?? null,
      triggerElements: new o.PopupTriggerMap(),
      floatingId: f,
      syncOnly: !1,
      nested: d
    })).current;
  return (0, r.useIsoLayoutEffect)(() => {
    let e = {
      open: u,
      floatingId: f
    };
    void 0 !== c.reference && (e.referenceElement = c.reference, e.domReferenceElement = (0, t.isElement)(c.reference) ? c.reference : null), void 0 !== c.floating && (e.floatingElement = c.floating), g.update(e);
  }, [u, f, c.reference, c.floating, g]), g.context.onOpenChange = a, g.context.nested = d, g;
};
export { _export_useFloatingRootContext as useFloatingRootContext };

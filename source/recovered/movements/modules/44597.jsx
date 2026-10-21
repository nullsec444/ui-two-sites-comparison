// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module31908 from "./jsx-runtime-31908.js";
import * as _module13518 from "./13518.js";
import * as _module98582 from "./98582.js";
import * as _module90520 from "./90520.js";
import * as _module45032 from "./45032.js";
import * as _module26325 from "./26325.js";
import * as _module54612 from "./54612.js";
import * as _module72150 from "./72150.js";
var n = _module31908,
  s = _module13518,
  r = _module98582,
  o = _module90520,
  a = _module45032,
  l = _module26325,
  u = _module54612,
  h = _module72150;
let c = !1;
class d extends a.Component {
  componentDidMount() {
    let {
        visualElement: t,
        layoutGroup: e,
        switchLayoutGroup: i,
        layoutId: n
      } = this.props,
      {
        projection: r
      } = t;
    r && (e.group && e.group.add(r), i && i.register && n && i.register(r), c && r.root.didUpdate(), r.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), r.setOptions({
      ...r.options,
      layoutDependency: this.props.layoutDependency,
      onExitComplete: () => this.safeToRemove()
    })), s.globalProjectionState.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    let {
        layoutDependency: e,
        visualElement: i,
        drag: n,
        isPresent: s
      } = this.props,
      {
        projection: o
      } = i;
    return o && (o.isPresent = s, t.layoutDependency !== e && o.setOptions({
      ...o.options,
      layoutDependency: e
    }), c = !0, n || t.layoutDependency !== e || void 0 === e || t.isPresent !== s ? o.willUpdate() : this.safeToRemove(), t.isPresent !== s && (s ? o.promote() : o.relegate() || r.frame.postRender(() => {
      let t = o.getStack();
      t && t.members.length || this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    let {
        visualElement: t,
        layoutAnchor: e
      } = this.props,
      {
        projection: i
      } = t;
    i && (i.options.layoutAnchor = e, i.root.didUpdate(), o.microtask.postRender(() => {
      !i.currentAnimation && i.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    let {
        visualElement: t,
        layoutGroup: e,
        switchLayoutGroup: i
      } = this.props,
      {
        projection: n
      } = t;
    c = !0, n && (n.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(n), i && i.deregister && i.deregister(n));
  }
  safeToRemove() {
    let {
      safeToRemove: t
    } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function p(t) {
  let [e, i] = (0, l.usePresence)(),
    s = (0, a.useContext)(u.LayoutGroupContext);
  return (0, n.jsx)(d, {
    ...t,
    layoutGroup: s,
    switchLayoutGroup: (0, a.useContext)(h.SwitchLayoutGroupContext),
    isPresent: e,
    safeToRemove: i
  });
}
const _export_MeasureLayout = p;
export { _export_MeasureLayout as MeasureLayout };

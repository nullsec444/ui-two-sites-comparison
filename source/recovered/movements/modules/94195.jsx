// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module45032 from "./45032.js";
import * as _module38633 from "./38633.js";
import * as _module71955 from "./71955.js";
import * as _module23286 from "./23286.js";
import * as _module31908 from "./jsx-runtime-31908.js";
var t = _module45032,
  n = _module38633,
  r = _module71955,
  i = _module23286;
function o() {
  let e = new Map();
  return {
    emit(t, n) {
      e.get(t)?.forEach(e => e(n));
    },
    on(t, n) {
      e.has(t) || e.set(t, new Set()), e.get(t).add(n);
    },
    off(t, n) {
      e.get(t)?.delete(n);
    }
  };
}
class l {
  nodesRef = {
    current: []
  };
  events = o();
  addNode(e) {
    this.nodesRef.current.push(e);
  }
  removeNode(e) {
    let t = this.nodesRef.current.findIndex(t => t === e);
    -1 !== t && this.nodesRef.current.splice(t, 1);
  }
}
var s = _module31908;
let u = t.createContext(null),
  a = t.createContext(null),
  c = () => t.useContext(u)?.id || null,
  f = e => {
    let n = t.useContext(a);
    return e ?? n;
  };
const _export_FloatingNode = function (e) {
  let {
      children: n,
      id: r
    } = e,
    i = c();
  return (0, s.jsx)(u.Provider, {
    value: t.useMemo(() => ({
      id: r,
      parentId: i
    }), [r, i]),
    children: n
  });
};
const _export_FloatingTree = function (e) {
  let {
      children: t,
      externalTree: n
    } = e,
    r = (0, i.useRefWithInit)(() => n ?? new l()).current;
  return (0, s.jsx)(a.Provider, {
    value: r,
    children: t
  });
};
const _export_useFloatingNodeId = function (e) {
  let t = (0, n.useId)(),
    i = f(e),
    o = c();
  return (0, r.useIsoLayoutEffect)(() => {
    if (!t) return;
    let e = {
      id: t,
      parentId: o
    };
    return i?.addNode(e), () => {
      i?.removeNode(e);
    };
  }, [i, t, o]), t;
};
const _export_useFloatingParentNodeId = c;
const _export_useFloatingTree = f;
export { _export_FloatingNode as FloatingNode, _export_FloatingTree as FloatingTree, _export_useFloatingNodeId as useFloatingNodeId, _export_useFloatingParentNodeId as useFloatingParentNodeId, _export_useFloatingTree as useFloatingTree };

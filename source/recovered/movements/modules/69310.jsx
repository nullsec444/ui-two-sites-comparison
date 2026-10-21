// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module45032 from "./45032.js";
import * as _module71955 from "./71955.js";
import * as _module58542 from "./58542.js";
import * as _module80269 from "./80269.js";
import * as _module94195 from "./94195.js";
import * as _module11974 from "./11974.js";
var t = _module45032,
  o = _module71955,
  a = _module58542,
  c = _module80269,
  f = _module94195,
  d = _module11974;
function g(e) {
  return p(e, e.rootContext);
}
function p(e, n) {
  let {
      nodeId: r,
      externalTree: i
    } = e,
    l = n.useState("referenceElement"),
    s = n.useState("floatingElement"),
    u = n.useState("domReferenceElement"),
    d = n.useState("open"),
    g = n.useState("floatingId"),
    [p, m] = t.useState(null),
    [h, v] = t.useState(void 0),
    [y, E] = t.useState(void 0),
    b = t.useRef(null),
    S = (0, f.useFloatingTree)(i),
    x = t.useMemo(() => ({
      reference: l,
      floating: s,
      domReference: u
    }), [l, s, u]),
    T = (0, a.useFloating)({
      ...e,
      elements: {
        ...x,
        ...(p && {
          reference: p
        })
      }
    }),
    w = (0, c.isElement)(h) ? h : null,
    C = void 0 === y ? n.state.floatingElement : y;
  n.useSyncedValue("referenceElement", h ?? null), n.useSyncedValue("domReferenceElement", void 0 === h ? u : w), n.useSyncedValue("floatingElement", C);
  let R = t.useCallback(e => {
      let t = (0, c.isElement)(e) ? {
        getBoundingClientRect: () => e.getBoundingClientRect(),
        getClientRects: () => e.getClientRects(),
        contextElement: e
      } : e;
      m(t), T.refs.setReference(t);
    }, [T.refs]),
    O = t.useCallback(e => {
      ((0, c.isElement)(e) || null === e) && (b.current = e, v(e)), ((0, c.isElement)(T.refs.reference.current) || null === T.refs.reference.current || null !== e && !(0, c.isElement)(e)) && T.refs.setReference(e);
    }, [T.refs, v]),
    P = t.useCallback(e => {
      E(e), T.refs.setFloating(e);
    }, [T.refs]),
    A = t.useMemo(() => ({
      ...T.refs,
      setReference: O,
      setFloating: P,
      setPositionReference: R,
      domReference: b
    }), [T.refs, O, P, R]),
    I = t.useMemo(() => ({
      ...T.elements,
      domReference: u
    }), [T.elements, u]),
    M = t.useMemo(() => ({
      ...T,
      dataRef: n.context.dataRef,
      open: d,
      onOpenChange: n.setOpen,
      events: n.context.events,
      floatingId: g,
      refs: A,
      elements: I,
      nodeId: r,
      rootStore: n
    }), [T, A, I, r, n, d, g]);
  return (0, o.useIsoLayoutEffect)(() => {
    u && (b.current = u);
  }, [u]), (0, o.useIsoLayoutEffect)(() => {
    n.context.dataRef.current.floatingContext = M;
    let e = S?.nodesRef.current.find(e => e.id === r);
    e && (e.context = M);
  }), t.useMemo(() => ({
    ...T,
    context: M,
    refs: A,
    elements: I,
    rootStore: n
  }), [T, A, I, M, n]);
}
const _export_useBaseUIFloating = g;
const _export_useFloating = function (e = {}) {
  let t = (0, d.useFloatingRootContext)(e),
    n = e.rootContext || t;
  return p(e, n);
};
export { _export_useBaseUIFloating as useBaseUIFloating, _export_useFloating as useFloating };

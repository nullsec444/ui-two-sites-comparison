// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module7642 from "./7642.js";
import * as _module31903 from "./31903.js";
import * as _module45032 from "./45032.js";
import * as _module48394 from "./48394.js";
import * as _module33045 from "./33045.js";
import * as _module71955 from "./71955.js";
import * as _module67459 from "./67459.js";
var t = _module7642,
  r = _module31903,
  n = _module45032,
  i = _module48394,
  o = _module33045,
  s = _module71955,
  a = _module67459;
const _export_CompositeItem = function (e) {
  let {
      render: l,
      className: u,
      style: c,
      state: f = t.EMPTY_OBJECT,
      props: d = t.EMPTY_ARRAY,
      refs: p = t.EMPTY_ARRAY,
      metadata: g,
      stateAttributesMapping: h,
      tag: m = "div",
      ...b
    } = e,
    {
      compositeProps: v,
      compositeRef: y
    } = function (e = {}) {
      let {
          highlightItemOnHover: t,
          highlightedIndex: r,
          onHighlightedIndexChange: l
        } = (0, o.useCompositeRootContext)(),
        {
          ref: u,
          index: c
        } = function (e = {}) {
          let {
              guess: t,
              label: r,
              metadata: i,
              textRef: o,
              index: l
            } = e,
            {
              register: u,
              unregister: c,
              subscribeMapChange: f,
              nextIndexRef: d
            } = (0, a.useCompositeListContext)(),
            p = n.useRef(-1),
            [g, h] = n.useState(null == l && t ? () => {
              if (-1 === p.current) {
                let e = d.current;
                d.current += 1, p.current = e;
              }
              return p.current;
            } : -1),
            m = l ?? g,
            b = n.useRef(null),
            v = n.useCallback(e => {
              let t = b.current;
              t && c(t), b.current = e, e && u(e, {
                metadata: i ?? null,
                index: l ?? null,
                label: r,
                textRef: o
              });
            }, [l, u, c, i, r, o]);
          return (0, s.useIsoLayoutEffect)(() => {
            if (null == l) return f(e => {
              let t = b.current ? e.get(b.current)?.index : null;
              null != t && h(t);
            });
          }, [l, f]), {
            ref: v,
            index: m
          };
        }(e),
        f = r === c,
        d = n.useRef(null),
        p = (0, i.useMergedRefs)(u, d);
      return {
        compositeProps: {
          tabIndex: f ? 0 : -1,
          onFocus() {
            l(c);
          },
          onMouseMove() {
            let e = d.current;
            if (!t || !e) return;
            let r = e.hasAttribute("disabled") || "true" === e.ariaDisabled;
            f || r || e.focus();
          }
        },
        compositeRef: p,
        index: c
      };
    }({
      metadata: g
    });
  return (0, r.useRenderElement)(m, e, {
    state: f,
    ref: [y, ...p],
    props: [v, ...d, b],
    stateAttributesMapping: h
  });
};
export { _export_CompositeItem as CompositeItem };

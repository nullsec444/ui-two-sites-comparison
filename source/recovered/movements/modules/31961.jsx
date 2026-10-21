// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module45032 from "./45032.js";
import * as _module7642 from "./7642.js";
import * as _module69528 from "./69528.js";
import * as _module77787 from "./77787.js";
import * as _module38783 from "./38783.js";
import * as _module48394 from "./48394.js";
import * as _module71955 from "./71955.js";
import * as _module95358 from "./95358.js";
import * as _module11706 from "./11706.js";
import * as _module86631 from "./86631.js";
import * as _module33045 from "./33045.js";
import * as _module31903 from "./31903.js";
import * as _module84094 from "./84094.js";
import * as _module31908 from "./jsx-runtime-31908.js";
var t = _module45032,
  r = _module7642,
  n = _module69528,
  i = _module77787,
  o = _module38783,
  s = _module48394,
  a = _module71955,
  l = _module95358,
  u = _module11706,
  c = _module86631;
let f = [];
var d = _module33045,
  p = _module31903,
  g = _module84094,
  h = _module31908;
const _export_CompositeRoot = function (e) {
  let {
      render: m,
      className: b,
      style: v,
      refs: y = r.EMPTY_ARRAY,
      props: E = r.EMPTY_ARRAY,
      state: w = r.EMPTY_OBJECT,
      stateAttributesMapping: R,
      highlightedIndex: x,
      onHighlightedIndexChange: P,
      orientation: C,
      grid: k,
      loopFocus: T,
      onLoop: I,
      enableHomeAndEndKeys: _,
      onMapChange: S,
      stopEventPropagation: L = !0,
      rootRef: N,
      disabledIndices: O,
      modifierKeys: M,
      highlightItemOnHover: A = !1,
      tag: j = "div",
      ...D
    } = e,
    {
      props: B,
      highlightedIndex: W,
      onHighlightedIndexChange: $,
      elementsRef: U,
      onMapChange: H,
      relayKeyboardEvent: F
    } = function (e) {
      let {
          loopFocus: r = !0,
          orientation: n = "both",
          grid: d,
          onLoop: p,
          direction: g,
          highlightedIndex: h,
          onHighlightedIndexChange: m,
          rootRef: b,
          enableHomeAndEndKeys: v = !1,
          stopEventPropagation: y,
          disabledIndices: E,
          modifierKeys: w = f
        } = e,
        [R, x] = t.useState(0),
        P = null != d,
        C = t.useRef(null),
        k = (0, s.useMergedRefs)(C, b),
        T = t.useRef([]),
        I = t.useRef(!1),
        _ = h ?? R,
        S = (0, o.useStableCallback)((e, t = !1) => {
          if ((m ?? x)(e), t) {
            let t = T.current[e];
            (0, l.scrollIntoViewIfNeeded)(C.current, t, g, n);
          }
        }),
        L = (0, o.useStableCallback)(e => {
          if (0 === e.size || I.current) return;
          I.current = !0;
          let t = Array.from(e.keys()),
            r = t.find(e => e?.hasAttribute("data-composite-item-active")) ?? null,
            i = r ? e.get(r)?.index ?? -1 : -1;
          if (-1 !== i) S(i);else if ((0, u.isListIndexDisabled)(t, _, E)) {
            let e = (0, u.findNonDisabledListIndex)(t, {
              disabledIndices: E
            });
            (0, u.isIndexOutOfListBounds)(t, e) || S(e);
          }
          (0, l.scrollIntoViewIfNeeded)(C.current, r, g, n);
        });
      (0, a.useIsoLayoutEffect)(() => {
        if (null == E || null != h || !I.current) return;
        let e = T.current;
        if ((0, u.isListIndexDisabled)(e, _, E)) {
          let t = (0, u.findNonDisabledListIndex)(e, {
            disabledIndices: E
          });
          (0, u.isIndexOutOfListBounds)(e, t) || S(t);
        }
      }, [E, h, _, T, S]);
      let N = (0, o.useStableCallback)((e, t, r) => p ? p(e, t, r, T) : r),
        O = (0, o.useStableCallback)(e => {
          let t = e.key === l.HOME || e.key === l.END;
          if (!l.COMPOSITE_KEYS.has(e.key) || !v && t || function (e, t) {
            for (let r of l.MODIFIER_KEYS) if (!t.includes(r) && e.getModifierState(r)) return !0;
            return !1;
          }(e, w) || !C.current) return;
          let o = "rtl" === g,
            s = o ? l.ARROW_LEFT : l.ARROW_RIGHT,
            a = o ? l.ARROW_RIGHT : l.ARROW_LEFT,
            f = "vertical" === n ? l.ARROW_DOWN : s,
            h = "vertical" === n ? l.ARROW_UP : a,
            m = (0, c.getTarget)(e.nativeEvent);
          if (null != m && (0, l.isNativeInput)(m) && !(0, i.isElementDisabled)(m)) {
            let t = m.selectionStart,
              r = m.selectionEnd,
              n = m.value;
            if (null == t || e.shiftKey || t !== r || e.key !== h && t < n.length || e.key !== f && t > 0) return;
          }
          let b = _,
            R = (0, u.getMinListIndex)(T, E),
            x = (0, u.getMaxListIndex)(T, E);
          null != d && (b = d({
            disabledIndices: E,
            elementsRef: T,
            event: e,
            highlightedIndex: _,
            loopFocus: r,
            maxIndex: x,
            minIndex: R,
            onLoop: N,
            orientation: n,
            rtl: o
          }));
          let k = "vertical" !== n && e.key === s || "horizontal" !== n && e.key === l.ARROW_DOWN,
            I = "vertical" !== n && e.key === a || "horizontal" !== n && e.key === l.ARROW_UP;
          v && (e.key === l.HOME ? b = R : e.key === l.END && (b = x)), b === _ && (k || I) && (r && b === x && k ? (b = R, p && (b = p(e, _, b, T))) : r && b === R && I ? (b = x, p && (b = p(e, _, b, T))) : b = (0, u.findNonDisabledListIndex)(T.current, {
            startingIndex: b,
            decrement: I,
            disabledIndices: E
          })), b === _ || (0, u.isIndexOutOfListBounds)(T.current, b) || (y && e.stopPropagation(), (P || t || k || I) && e.preventDefault(), S(b, !0), queueMicrotask(() => {
            T.current[b]?.focus();
          }));
        });
      return {
        props: {
          ref: k,
          onFocus(e) {
            let t = C.current,
              r = (0, c.getTarget)(e.nativeEvent);
            t && null != r && (0, l.isNativeInput)(r) && r.setSelectionRange(0, r.value.length);
          },
          onKeyDown: O
        },
        highlightedIndex: _,
        onHighlightedIndexChange: S,
        elementsRef: T,
        onMapChange: L,
        relayKeyboardEvent: O
      };
    }({
      grid: k,
      loopFocus: T,
      onLoop: I,
      orientation: C,
      highlightedIndex: x,
      onHighlightedIndexChange: P,
      rootRef: N,
      stopEventPropagation: L,
      enableHomeAndEndKeys: _,
      direction: (0, g.useDirection)(),
      disabledIndices: O,
      modifierKeys: M
    }),
    K = (0, p.useRenderElement)(j, e, {
      state: w,
      ref: y,
      props: [B, ...E, D],
      stateAttributesMapping: R
    }),
    Y = t.useMemo(() => ({
      highlightedIndex: W,
      onHighlightedIndexChange: $,
      highlightItemOnHover: A,
      relayKeyboardEvent: F
    }), [W, $, A, F]);
  return (0, h.jsx)(d.CompositeRootContext.Provider, {
    value: Y,
    children: (0, h.jsx)(n.CompositeList, {
      elementsRef: U,
      onMapChange: e => {
        S?.(e), H(e);
      },
      children: K
    })
  });
};
export { _export_CompositeRoot as CompositeRoot };

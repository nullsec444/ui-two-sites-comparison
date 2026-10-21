// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module31908 from "./jsx-runtime-31908.js";
import * as _module45032 from "./45032.js";
import * as _module41009 from "./41009.js";
import * as _module38783 from "./38783.js";
import * as _module83539 from "./83539.js";
import * as _module7642 from "./7642.js";
import * as _module10592 from "./10592.js";
import * as _module31903 from "./31903.js";
import * as _module88327 from "./88327.js";
import * as _module87491 from "./87491.js";
import * as _module69471 from "./69471.js";
import * as _module99291 from "./99291.js";
import * as _module37889 from "./37889.js";
import * as _module31961 from "./31961.js";
var t = _module31908;
var n = _module45032,
  l = _module41009,
  u = _module38783,
  p = _module83539;
var h = _module7642;
var R = _module10592;
var O = _module31903;
var ea = _module88327,
  ei = _module87491;
var ec = _module69471;
var eA = _module99291,
  eA = eA;
let eD = n.createContext(void 0);
var eM = _module37889;
let eI = n.forwardRef(function (e, r) {
  let {
      className: u,
      defaultPressed: a = !1,
      disabled: i = !1,
      form: o,
      onPressedChange: s,
      pressed: c,
      render: d,
      type: f,
      value: p,
      nativeButton: v = !0,
      style: m,
      ...h
    } = e,
    g = (0, R.useBaseUiId)(p || void 0),
    b = n.useContext(eD),
    x = b?.value ?? [],
    E = b ? void 0 : a,
    y = (i || b?.disabled) ?? !1,
    [S, C] = (0, l.useControlled)({
      controlled: b ? void 0 !== g && x.indexOf(g) > -1 : c,
      default: E,
      name: "Toggle",
      state: "pressed"
    }),
    {
      getButtonProps: w,
      buttonRef: N
    } = (0, ec.useButton)({
      disabled: y,
      native: v
    }),
    k = {
      disabled: y,
      pressed: S
    },
    P = [N, r],
    A = [{
      "aria-pressed": S,
      onClick(e) {
        let t = !S,
          n = (0, ea.createChangeEventDetails)(ei.REASONS.none, e.nativeEvent);
        s?.(t, n), n.isCanceled || (g && b?.setGroupValue?.(g, t, n), n.isCanceled || C(t));
      }
    }, h, w],
    D = (0, O.useRenderElement)("button", e, {
      enabled: !b,
      state: k,
      ref: P,
      props: A
    }),
    M = n.useMemo(() => ({
      disabled: y,
      focusableWhenDisabled: !1
    }), [y]);
  return b ? (0, t.jsx)(eM.CompositeItem, {
    tag: "button",
    render: d,
    className: u,
    style: m,
    metadata: M,
    state: k,
    refs: P,
    props: A
  }) : D;
});
var eT = _module31961;
let ej = n.createContext(void 0),
  e_ = n.createContext(void 0),
  eL = n.forwardRef(function (e, r) {
    let {
        defaultValue: a,
        disabled: i = !1,
        loopFocus: o = !0,
        onValueChange: s,
        orientation: c = "horizontal",
        multiple: d = !1,
        value: f,
        className: v,
        render: m,
        style: g,
        ...b
      } = e,
      x = function (e) {
        let t = n.useContext(ej);
        if (void 0 === t && !e) throw Error((0, p.default)(69));
        return t;
      }(!0),
      E = n.useContext(e_),
      y = void 0 !== f || void 0 !== a,
      S = (x?.disabled ?? !1) || (E?.disabled ?? !1) || i,
      [C, R] = (0, l.useControlled)({
        controlled: f,
        default: void 0 === f ? a ?? h.EMPTY_ARRAY : void 0,
        name: "ToggleGroup",
        state: "value"
      }),
      w = (0, u.useStableCallback)((e, t, n) => {
        let r;
        d ? (r = C.slice(), t ? r.push(e) : r.splice(C.indexOf(e), 1)) : r = t ? [e] : [], s?.(r, n), n.isCanceled || R(r);
      }),
      N = {
        disabled: S,
        multiple: d,
        orientation: c
      },
      k = n.useMemo(() => ({
        disabled: S,
        setGroupValue: w,
        value: C,
        isValueInitialized: y
      }), [S, w, C, y]),
      P = {
        role: "group"
      },
      A = (0, O.useRenderElement)("div", e, {
        enabled: !!x,
        state: N,
        ref: r,
        props: [P, b]
      });
    return (0, t.jsx)(eD.Provider, {
      value: k,
      children: x ? A : (0, t.jsx)(eT.CompositeRoot, {
        render: m,
        className: v,
        style: g,
        state: N,
        refs: [r],
        props: [P, b],
        loopFocus: o,
        enableHomeAndEndKeys: !0,
        orientation: c
      })
    });
  }),
  e$ = "theme-transition inset-hairline box-border h-8 w-full min-w-0 rounded-[6px] bg-black/[0.045] dark:bg-white/[0.08]",
  eF = "focus-within:ring-1 focus-within:ring-ink/18 dark:focus-within:ring-white/22",
  eV = {
    useGrouping: !1,
    maximumFractionDigits: 0
  };
function eW({
  label: e,
  htmlFor: n,
  hint: r,
  disabled: l,
  children: u
}) {
  let a = "text-sm font-medium text-ink";
  return <div className={`flex min-w-0 flex-col gap-2 ${l ? "opacity-45" : ""}`}>{[n ? <label htmlFor={n} className={a}>{e}</label> : <div className={a}>{e}</div>, u, r ? <p className={"text-xs text-mute"}>{r}</p> : null]}</div>;
}
function eB(e) {
  return <svg viewBox={"0 0 16 16"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={!0} {...e}>{<path d={"M5.5 5 2.5 8l3 3M10.5 5l3 3-3 3M2.5 8h11"} />}</svg>;
}
function eG(e) {
  return <svg width={"26"} height={"14"} viewBox={"0 0 24 14"} fill={"black"} stroke={"white"} aria-hidden={!0} {...e} style={{
    display: "block",
    ...e.style
  }}>{<path d={"M19.5 5.5L6.49737 5.51844V2L1 6.9999L6.5 12L6.49737 8.5L19.5 8.5V12L25 6.9999L19.5 2V5.5Z"} />}</svg>;
}
const _export_ColorField = function ({
  id: e,
  label: r,
  value: l,
  onChange: u
}) {
  let a = (0, n.useId)(),
    i = e ?? a,
    [o, s] = (0, n.useState)(!1),
    [c, d] = (0, n.useState)(l),
    f = o ? c : l;
  return (0, t.jsx)(eW, {
    label: r,
    htmlFor: i,
    children: <div className={`${e$} ${eF} flex items-center gap-2 px-2`}>{[<span className={"relative size-3.5 shrink-0 overflow-hidden rounded-[3px] shadow-[0_0_0_1px_rgb(0_0_0/0.16)] dark:shadow-[0_0_0_1px_rgb(255_255_255/0.22)]"}>{[<span aria-hidden={!0} className={"absolute inset-0"} style={{
          backgroundColor: l
        }} />, <input type={"color"} value={l} onChange={e => u(e.target.value)} className={"absolute inset-0 cursor-pointer opacity-0"} aria-label={`${r} swatch`} />]}</span>, <input id={i} type={"text"} value={f} onFocus={() => {
        s(!0), d(l);
      }} onChange={e => {
        let t,
          n = e.target.value;
        d(n);
        let r = (t = n.trim().match(/^#?([0-9a-fA-F]{6})$/)) ? `#${t[1].toLowerCase()}` : null;
        r && u(r);
      }} onBlur={() => s(!1)} spellCheck={!1} autoComplete={"off"} autoCapitalize={"off"} autoCorrect={"off"} className={"h-full min-h-0 min-w-0 flex-1 border-0 bg-transparent p-0 font-mono text-[13px] text-ink outline-none"} aria-label={`${r} hex`} />]}</div>
  });
};
const _export_ControlField = eW;
const _export_ScrubberField = function ({
  id: e,
  label: r,
  unit: l,
  value: u,
  min: a,
  max: i,
  step: o = 1,
  onChange: s,
  disabled: c
}) {
  let d = (0, n.useId)(),
    f = e ?? d;
  return (0, t.jsx)(eW, {
    label: r,
    htmlFor: f,
    disabled: c,
    children: (0, t.jsxs)(eA.Root, {
      id: f,
      value: u,
      onValueChange: e => {
        null != e && s(e);
      },
      min: a,
      max: i,
      step: o,
      smallStep: o,
      largeStep: 10 * o,
      snapOnStep: !0,
      disabled: c,
      locale: "en-US",
      format: eV,
      className: `${e$} ${eF} flex items-center`,
      children: [(0, t.jsx)(eA.Input, {
        className: "h-full min-h-0 min-w-0 flex-1 border-0 bg-transparent p-0 pl-2.5 text-[13px] text-ink tabular-nums outline-none disabled:cursor-not-allowed"
      }), (0, t.jsxs)(eA.ScrubArea, {
        pixelSensitivity: 8,
        className: "flex h-full shrink-0 cursor-ew-resize items-center pr-2.5 pl-1 text-mute select-none",
        children: [l ? <span className={"text-[11px] font-medium"}>{l}</span> : (0, t.jsx)(eB, {
          className: "size-3"
        }), (0, t.jsx)(eA.ScrubAreaCursor, {
          className: "drop-shadow-[0_1px_1px_#0008] filter",
          children: (0, t.jsx)(eG, {})
        })]
      })]
    })
  });
};
const _export_SegmentedControl = function ({
  value: e,
  onChange: n,
  options: r,
  ariaLabel: l,
  disabled: u
}) {
  return (0, t.jsx)(eL, {
    "aria-label": l,
    value: [e],
    onValueChange: e => {
      let t = e[0];
      null != t && n(t);
    },
    disabled: u,
    className: `${e$} grid p-[2px]`,
    style: {
      gridTemplateColumns: `repeat(${r.length}, minmax(0, 1fr))`
    },
    children: r.map(e => (0, t.jsx)(eI, {
      value: e.value,
      title: e.title,
      className: "flex min-w-0 items-center justify-center rounded-[4px] border-0 bg-transparent px-1 text-center text-[12px] font-medium text-mute select-none hover:not-data-disabled:not-data-pressed:text-ink data-pressed:bg-white data-pressed:text-ink data-pressed:shadow-[0_0_0_1px_rgb(0_0_0/0.12)] focus-visible:relative focus-visible:z-1 focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-ink/40 disabled:pointer-events-none dark:data-pressed:bg-white/[0.14] dark:data-pressed:text-white dark:data-pressed:shadow-[0_0_0_1px_rgb(255_255_255/0.28)] dark:focus-visible:outline-white/50",
      children: <span className={"min-w-0 truncate"}>{e.label}</span>
    }, e.value))
  });
};
export { _export_ColorField as ColorField, _export_ControlField as ControlField, _export_ScrubberField as ScrubberField, _export_SegmentedControl as SegmentedControl };

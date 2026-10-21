// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module31908 from "./jsx-runtime-31908.js";
import * as _module45032 from "./45032.js";
import * as _module77794 from "./77794.js";
import * as _module41009 from "./41009.js";
import * as _module38783 from "./38783.js";
import * as _module71955 from "./71955.js";
import * as _module94805 from "./94805.js";
import * as _module48394 from "./48394.js";
import * as _module74306 from "./74306.js";
import * as _module26997 from "./26997.js";
import * as _module34561 from "./34561.js";
import * as _module86631 from "./86631.js";
import * as _module83539 from "./83539.js";
import * as _module7642 from "./7642.js";
import * as _module23286 from "./23286.js";
import * as _module80269 from "./80269.js";
import * as _module10592 from "./10592.js";
import * as _module31903 from "./31903.js";
import * as _module38501 from "./38501.js";
import * as _module88327 from "./88327.js";
import * as _module87491 from "./87491.js";
import * as _module69471 from "./69471.js";
import * as _module9591 from "./9591.js";
import * as _module65386 from "./65386.js";
import * as _module79995 from "./79995.js";
import * as _module42014 from "./42014.js";
import * as _module58943 from "./58943.js";
var t = _module31908;
var n = _module45032,
  r = _module77794,
  l = _module41009,
  u = _module38783,
  a = _module71955,
  i = _module94805,
  o = _module48394,
  s = _module74306,
  c = _module26997,
  d = _module34561,
  f = _module86631,
  p = _module83539;
let v = n.createContext(void 0);
function m() {
  let e = n.useContext(v);
  if (void 0 === e) throw Error((0, p.default)(43));
  return e;
}
var h = _module7642;
let g = {
    invalid: void 0,
    name: void 0,
    validityData: {
      state: {
        badInput: !1,
        customError: !1,
        patternMismatch: !1,
        rangeOverflow: !1,
        rangeUnderflow: !1,
        stepMismatch: !1,
        tooLong: !1,
        tooShort: !1,
        typeMismatch: !1,
        valid: null,
        valueMissing: !1
      },
      errors: [],
      error: "",
      value: "",
      initialValue: null
    },
    setValidityData: h.NOOP,
    disabled: void 0,
    setTouched: h.NOOP,
    setDirty: h.NOOP,
    setFilled: h.NOOP,
    setFocused: h.NOOP,
    validationMode: "onSubmit",
    shouldValidateOnChange: () => !1,
    state: {
      disabled: !1,
      valid: null,
      touched: !1,
      dirty: !1,
      filled: !1,
      focused: !1
    },
    registerFieldControl: h.NOOP,
    validation: {
      getValidationProps: (e, t = h.EMPTY_OBJECT) => t,
      inputRef: {
        current: null
      },
      registeredInputs: new Map(),
      registerInput: h.NOOP,
      getInputControl: () => null,
      commit: async () => {},
      change: h.NOOP
    }
  },
  b = n.createContext(g);
function x(e = !0) {
  let t = n.useContext(b);
  if (t.setValidityData === h.NOOP && !e) throw Error((0, p.default)(28));
  return t;
}
let E = n.createContext({
  elementRef: {
    current: null
  },
  formRef: {
    current: {
      fields: new Map()
    }
  },
  errors: {},
  clearErrors: h.NOOP,
  validationMode: "onSubmit",
  submitAttemptedRef: {
    current: !1
  }
});
function y() {
  return n.useContext(E);
}
var S = _module23286,
  C = _module80269,
  R = _module10592;
let w = n.createContext({
  controlId: void 0,
  registerControlId: h.NOOP,
  labelId: void 0,
  setLabelId: h.NOOP,
  messageIds: [],
  setMessageIds: h.NOOP,
  getDescriptionProps: e => e
});
function N() {
  return n.useContext(w);
}
let k = {
  inputValue: () => null,
  value: () => null,
  valid: e => null === e ? null : e ? {
    "data-valid": ""
  } : {
    "data-invalid": ""
  }
};
var O = _module31903;
let P = new Map();
function A(e, t) {
  let n = JSON.stringify({
      locale: function e(t) {
        return Array.isArray(t) ? t.map(t => e(t)).join(",") : null == t ? "" : String(t);
      }(e),
      options: t
    }),
    r = P.get(n);
  if (r) return r;
  let l = new Intl.NumberFormat(e, t);
  return P.set(n, l), l;
}
function D(e, t, n) {
  return null == e ? "" : A(t, n).format(e);
}
let M = /[٠-٩۰-۹０-９]/g,
  I = /[零〇一二三四五六七八九]/g,
  T = ["%", "٪", "％", "﹪"],
  j = ["‰", "؉"],
  _ = /[%٪％﹪]/,
  L = /[‰؉]/,
  $ = /[%٪％﹪]/g,
  F = /[‰؉]/g,
  V = /[٠-٩۰-۹]/,
  W = /[零〇一二三四五六七八九]/,
  B = /[0-9٠-٩۰-۹０-９零〇一二三四五六七八九]/,
  G = [".", ",", "．", "，", "٫", "٬"],
  U = /\p{Zs}/u,
  K = /\p{Cf}/u,
  H = /\p{Cf}/gu,
  z = ["+", "＋", "﹢"],
  Y = ["-", "−", "－", "‒", "–", "—", "﹣"];
function Z(e, t) {
  let [n, r = "0"] = String(e).split("e");
  return Number(`${n}e${Number(r) + t}`);
}
let X = /[-−－‒–—﹣]/gu,
  q = /[+＋﹢]/gu,
  J = /[-−－‒–—﹣]/,
  Q = /[+＋﹢]/;
function ee(e, t) {
  return A(e, t).formatToParts(11111.1);
}
function et(e, t) {
  let n = ee(e, t),
    r = {};
  n.forEach(e => {
    r[e.type] = e.value;
  });
  let l = ".";
  return A(e).formatToParts(.1).forEach(e => {
    "decimal" === e.type && (l = e.value);
  }), {
    ...r,
    decimal: l
  };
}
function en(e, t, n) {
  let r = e.replace(H, "").trim();
  r = r.replace(X, "-").replace(q, "+");
  let l = !1,
    u = (e, t) => ("-" === t && (l = !0), "");
  r = r.replace(/([+-])\s*$/, u).replace(/^\s*([+-])/, u);
  let a = t;
  void 0 === a && (V.test(r) ? a = "ar" : W.test(r) && (a = "zh"));
  let {
      group: i,
      decimal: o,
      currency: s,
      exponentSeparator: c
    } = et(a, n),
    d = A(a, n).formatToParts(1).filter(e => "unit" === e.type).map(e => e.value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")),
    f = d.length ? RegExp(d.join("|"), "g") : null,
    p = null;
  if (i) {
    let e = /\p{Zs}/u.test(i),
      t = "'" === i || "’" === i;
    p = e ? /\p{Zs}/gu : t ? /['’]/g : RegExp(i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g");
  }
  let v = [[p, ""], [RegExp(o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"), "."], [/[．٫]/g, "."], [/[，٬]/g, ""], [s ? RegExp(s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g") : null, ""], [f, ""], [$, ""], [F, ""], [c ? RegExp(c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g") : null, "e"], [M, e => String(e.charCodeAt(0) % 16)], [I, e => String(Math.max("零〇一二三四五六七八九".indexOf(e) - 1, 0))]].reduce((e, [t, n]) => t ? e.replace(t, n) : e, r),
    m = v.lastIndexOf(".");
  if (-1 !== m && (v = `${v.slice(0, m).replace(/\./g, "")}.${v.slice(m + 1).replace(/\./g, "")}`), /^[-+]?Infinity$/i.test(r) || r.includes("∞")) return null;
  let h = parseFloat((l ? "-" : "") + v),
    g = n?.style,
    b = "unit" === g && n?.unit === "percent",
    x = _.test(e) || "percent" === g;
  return (L.test(e) ? h = Z(h, -3) : !b && x && (h = Z(h, -2)), Number.isFinite(h)) ? h : null;
}
var er = _module38501;
function el(e) {
  return e?.maximumFractionDigits != null || e?.minimumFractionDigits != null || e?.maximumSignificantDigits != null || e?.minimumSignificantDigits != null || e?.roundingIncrement != null || e?.roundingMode != null || e?.roundingPriority != null;
}
function eu(e, t) {
  if (!Number.isFinite(e)) return e;
  if (!el(t)) {
    let t = parseFloat(e.toPrecision(15));
    return Math.abs(t - e) <= Math.min(Number.EPSILON * Math.max(1, Math.abs(e)), 1e-10) ? t : e;
  }
  let n = A("en-US", {
      ...t,
      signDisplay: "auto",
      currencySign: "standard",
      notation: "compact" === t.notation ? "standard" : t.notation,
      useGrouping: !1
    }),
    r = n.format(e),
    l = en(r, "en-US", t);
  return null === l ? e : n.format(l) === r ? l : e;
}
var ea = _module88327,
  ei = _module87491;
let eo = n.forwardRef(function (e, p) {
    let {
        id: m,
        min: g,
        max: b,
        smallStep: E = .1,
        step: w = 1,
        largeStep: P = 10,
        required: A = !1,
        disabled: M = !1,
        readOnly: I = !1,
        form: _,
        name: L,
        defaultValue: $,
        value: F,
        onValueChange: V,
        onValueCommitted: W,
        allowWheelScrub: B = !1,
        snapOnStep: K = !1,
        allowOutOfRange: H = !1,
        format: Z,
        locale: X,
        render: q,
        className: J,
        inputRef: Q,
        style: en,
        ...eo
      } = e,
      {
        setDirty: es,
        validityData: ec,
        disabled: ed,
        setFilled: ef,
        name: ep,
        state: ev,
        validation: em
      } = x(),
      {
        clearErrors: eh
      } = y(),
      eg = ed || M,
      eb = ep ?? L,
      ex = "any" === w ? 1 : w,
      [eE, ey] = n.useState(!1),
      eS = g ?? Number.MIN_SAFE_INTEGER,
      eC = b ?? Number.MAX_SAFE_INTEGER,
      eR = g ?? 0,
      ew = Z?.style,
      eN = n.useRef(null),
      ek = (0, o.useMergedRefs)(Q, em.inputRef),
      eO = function (e = {}) {
        let {
            id: t,
            implicit: r = !1,
            controlRef: l
          } = e,
          {
            controlId: i,
            registerControlId: o
          } = N(),
          s = (0, R.useBaseUiId)(t),
          c = r ? i : void 0,
          d = (0, S.useRefWithInit)(() => Symbol()),
          f = n.useRef(!1),
          p = n.useRef(null != t),
          v = (0, u.useStableCallback)(() => {
            f.current && o !== h.NOOP && (f.current = !1, o(d.current, void 0));
          });
        return (0, a.useIsoLayoutEffect)(() => {
          let e;
          if (o !== h.NOOP) {
            if (r) {
              let n = l?.current;
              e = (0, C.isElement)(n) && null != n.closest("label") ? t ?? null : c ?? s;
            } else if (null != t) p.current = !0, e = t;else {
              if (!p.current) return void v();
              e = s;
            }
            if (void 0 === e) return void v();
            f.current = !0, o(d.current, e);
          }
        }, [t, l, c, o, r, s, d, v]), n.useEffect(() => v, [v]), i ?? s;
      }({
        id: m
      }),
      [eP, eA] = (0, l.useControlled)({
        controlled: F,
        default: $,
        name: "NumberField",
        state: "value"
      }),
      eD = eP ?? null,
      eM = (0, i.useValueAsRef)(eD);
    (0, a.useIsoLayoutEffect)(() => {
      ef(null !== eD);
    }, [ef, eD]);
    let eI = function () {
        let [, e] = n.useState({});
        return n.useCallback(() => {
          e({});
        }, []);
      }(),
      eT = (0, i.useValueAsRef)(Z),
      ej = n.useRef(!1),
      e_ = (0, u.useStableCallback)((e, t) => {
        ej.current = !1, W?.(e, t);
      }),
      eL = n.useRef(!0),
      e$ = n.useRef(null),
      [eF, eV] = n.useState(() => D(eD, X, Z)),
      [eW, eB] = n.useState("numeric"),
      eG = (0, u.useStableCallback)(() => {
        let e = ee(X, Z),
          t = new Set(G),
          n = e => e.forEach(e => t.add(e)),
          r = e.find(e => "decimal" === e.type)?.value ?? et(X, Z).decimal;
        t.add(r), e.forEach(e => {
          "integer" !== e.type && "fraction" !== e.type && "exponentInteger" !== e.type && "compact" !== e.type && (n(Array.from(e.value)), U.test(e.value) && t.add(" "));
        });
        let l = "percent" === ew || "unit" === ew && Z?.unit === "percent",
          u = "percent" === ew || "unit" === ew && Z?.unit === "permille";
        return l && n(T), u && n(j), n(z), (eS < 0 || H) && n(Y), t;
      }),
      eU = (0, u.useStableCallback)(e => e?.altKey ? E : e?.shiftKey ? P : ex),
      eK = (0, u.useStableCallback)((e, t) => {
        let n = t.event,
          r = t.direction,
          l = t.reason.startsWith("input-") || t.reason === ei.REASONS.none,
          u = function (e, t, n, r, l, u, a, i, o) {
            if (null === e) return e;
            let s = e;
            if (null != t && a && 0 !== t) {
              let e,
                r,
                u,
                a = i || n === Number.MIN_SAFE_INTEGER ? l : n;
              u = s - a + 1e-10 * (e = Math.abs(t)) * (r = Math.sign(t)), s = i ? a + Math.round(u / t) * t : a + (r > 0 ? Math.floor(u / e) : Math.ceil(u / e)) * e;
            }
            if (o && (s = (0, er.clamp)(s, n, r)), null == t && !el(u)) return s;
            let c = eu(s, u);
            return o ? (0, er.clamp)(c, n, r) : c;
          }(e, r ? eU(n) * r : void 0, eS, eC, eR, eT.current, K, n?.altKey ?? !1, !H || !l),
          a = u !== eD || l && (e !== eD || !1 === eL.current);
        if (a) {
          if (V?.(u, t), t.isCanceled) return !1;
          eA(u), es(u !== ec.initialValue), ej.current = !0;
        }
        return e$.current = u, eL.current && eV(D(u, X, Z)), eI(), a;
      }),
      eH = (0, u.useStableCallback)((e, {
        direction: t,
        currentValue: n,
        event: r,
        reason: l
      }) => {
        let u = null == n ? eM.current : n;
        return "number" != typeof u ? eK(0, (0, ea.createChangeEventDetails)(l, r)) : eK(u + e * t, (0, ea.createChangeEventDetails)(l, r, void 0, {
          direction: t
        }));
      });
    (0, a.useIsoLayoutEffect)(function () {
      if (!eL.current) return;
      let e = D(eD, X, Z);
      e !== eF && eV(e);
    }), (0, a.useIsoLayoutEffect)(function () {
      if (!d.platform.os.ios) return;
      let e = "text";
      eS >= 0 && (e = "decimal"), eB(e);
    }, [eS]), n.useEffect(function () {
      let e = eN.current;
      if (!eg && !I && B && e) return (0, r.addEventListener)(e, "wheel", function (e) {
        e.ctrlKey || (0, f.activeElement)((0, c.ownerDocument)(eN.current)) !== eN.current || (e.preventDefault(), eL.current = !0, eH(eU(e), {
          direction: e.deltaY > 0 ? -1 : 1,
          event: e,
          reason: ei.REASONS.wheel
        }) && e_(e$.current, (0, ea.createGenericEventDetails)(ei.REASONS.wheel, e)));
      });
    }, [B, eH, eg, I, eU, e_, e$, eM]);
    let ez = n.useMemo(() => ({
        ...ev,
        disabled: eg,
        readOnly: I,
        required: A,
        value: eD,
        inputValue: eF,
        scrubbing: eE
      }), [ev, eg, I, A, eD, eF, eE]),
      eY = n.useMemo(() => ({
        inputRef: eN,
        minWithDefault: eS,
        maxWithDefault: eC,
        id: eO,
        setValue: eK,
        incrementValue: eH,
        getStepAmount: eU,
        allowInputSyncRef: eL,
        formatOptionsRef: eT,
        valueRef: eM,
        lastChangedValueRef: e$,
        hasPendingCommitRef: ej,
        name: eb,
        nameProp: L,
        inputMode: eW,
        getAllowedNonNumericKeys: eG,
        min: g,
        max: b,
        setInputValue: eV,
        locale: X,
        setIsScrubbing: ey,
        state: ez,
        onValueCommitted: e_
      }), [eN, eS, eC, eO, eK, eH, eU, eT, eM, eb, L, eW, eG, g, b, eV, X, ez, e_]),
      eZ = (0, O.useRenderElement)("div", e, {
        ref: p,
        state: ez,
        props: eo,
        stateAttributesMapping: k
      });
    return (0, t.jsxs)(v.Provider, {
      value: eY,
      children: [eZ, <input {...em.getValidationProps(eg, {
        onFocus() {
          eN.current?.focus();
        },
        onChange(e) {
          if (e.nativeEvent.defaultPrevented || eg || I) return;
          let t = e.currentTarget.valueAsNumber,
            n = Number.isNaN(t) ? null : t;
          eK(n, (0, ea.createChangeEventDetails)(ei.REASONS.none, e.nativeEvent)), eh(eb), em.change(e$.current ?? n);
        }
      })} ref={ek} type={"number"} form={_} name={eb} value={eD ?? ""} min={g} max={b} step={w} disabled={eg} readOnly={I} required={A} aria-hidden={!0} tabIndex={-1} style={eb ? s.visuallyHiddenInput : s.visuallyHidden} suppressHydrationWarning={!0} />]
    });
  }),
  es = n.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        style: l,
        ...u
      } = e,
      {
        state: a
      } = m();
    return (0, O.useRenderElement)("div", e, {
      ref: t,
      state: a,
      props: [{
        role: "group"
      }, u],
      stateAttributesMapping: k
    });
  });
var ec = _module69471,
  ed = _module9591,
  ef = _module65386,
  ep = ed;
class ev extends ep.Timeout {
  static create() {
    return new ev();
  }
  start(e, t) {
    this.clear(), this.currentId = setInterval(() => {
      t();
    }, e);
  }
  clear = () => {
    0 !== this.currentId && (clearInterval(this.currentId), this.currentId = 0);
  };
}
var em = _module79995;
function eh(e) {
  return "touch" === e || "pen" === e;
}
let eg = {
  WebkitUserSelect: "none",
  userSelect: "none"
};
function eb(e, t, l) {
  let {
      render: a,
      className: i,
      disabled: o = !1,
      nativeButton: s = !0,
      style: c,
      ...d
    } = e,
    {
      allowInputSyncRef: f,
      formatOptionsRef: p,
      getStepAmount: v,
      id: g,
      incrementValue: b,
      inputRef: x,
      maxWithDefault: E,
      minWithDefault: y,
      setValue: C,
      state: R,
      valueRef: w,
      locale: N,
      lastChangedValueRef: P,
      onValueCommitted: A
    } = m(),
    {
      disabled: D,
      readOnly: M,
      value: I,
      inputValue: T
    } = R,
    j = o || D || null != I && (l ? I >= E : I <= y),
    _ = l ? ei.REASONS.incrementPress : ei.REASONS.decrementPress;
  function L(e) {
    let t = !f.current;
    if (f.current = !0, !t) {
      P.current = w.current;
      return;
    }
    let n = en(T, N, p.current);
    if (null !== n) {
      let t = (0, ea.createChangeEventDetails)(_, e);
      C(n, t), t.isCanceled || (w.current = n);
    }
  }
  let {
      pointerHandlers: $,
      shouldSkipClick: F
    } = function (e) {
      let t,
        {
          disabled: l,
          tick: a,
          onStop: i,
          tickDelay: o = 60,
          startDelay: s = 400,
          scrollDistance: c = 8,
          elementRef: d
        } = e,
        f = (0, ed.useTimeout)(),
        p = (t = (0, S.useRefWithInit)(ev.create).current, (0, ef.useOnMount)(t.disposeEffect), t),
        v = (0, ed.useTimeout)(),
        m = n.useRef(!1),
        g = n.useRef(0),
        b = n.useRef({
          x: 0,
          y: 0
        }),
        x = n.useRef(!1),
        E = n.useRef(!1),
        y = n.useRef(""),
        C = n.useRef(h.NOOP),
        R = n.useRef(h.NOOP),
        w = (0, u.useStableCallback)(() => {
          v.clear(), f.clear(), p.clear(), C.current(), g.current = 0;
        });
      function N(e) {
        w();
        let t = d.current;
        if (!t) return;
        let n = (0, em.ownerWindow)(t);
        (C.current = (0, r.addEventListener)(n, "contextmenu", function (e) {
          e.preventDefault();
        }), R.current(), R.current = (0, r.addEventListener)(n, "pointerup", e => {
          m.current = !1, w(), i?.(e);
        }, {
          once: !0
        }), a(e)) ? f.start(s, () => {
          p.start(o, () => {
            a(e) || w();
          });
        }) : w();
      }
      return n.useEffect(() => () => {
        w(), R.current();
      }, [w]), {
        pointerHandlers: {
          onTouchStart() {
            x.current = !0;
          },
          onTouchEnd() {
            x.current = !1;
          },
          onPointerDown(e) {
            e.defaultPrevented || e.button || l || (y.current = e.pointerType, E.current = !1, m.current = !0, b.current = {
              x: e.clientX,
              y: e.clientY
            }, eh(e.pointerType) ? v.start(50, () => {
              let t = g.current;
              g.current = 0, m.current && t < 3 ? (N(e.nativeEvent), E.current = !0) : (E.current = !1, w());
            }) : (e.preventDefault(), N(e.nativeEvent)));
          },
          onPointerUp(e) {
            eh(e.pointerType) && (m.current = !1);
          },
          onPointerMove(e) {
            if (l || !eh(e.pointerType) || !m.current) return;
            g.current += 1;
            let {
              x: t,
              y: n
            } = b.current;
            (t - e.clientX) ** 2 + (n - e.clientY) ** 2 > c ** 2 && w();
          },
          onMouseEnter(e) {
            e.defaultPrevented || l || !m.current || x.current || eh(y.current) || N(e.nativeEvent);
          },
          onMouseLeave() {
            x.current || w();
          },
          onMouseUp() {
            x.current || w();
          }
        },
        shouldSkipClick: (0, u.useStableCallback)(e => !!e.defaultPrevented || (eh(y.current) ? E.current : 0 !== e.detail))
      };
    }({
      disabled: j || M,
      elementRef: x,
      tick: e => b(v(e), {
        direction: l ? 1 : -1,
        event: e,
        reason: _
      }),
      onStop(e) {
        A(P.current ?? w.current, (0, ea.createGenericEventDetails)(_, e));
      }
    }),
    V = {
      disabled: j,
      "aria-label": l ? "Increase" : "Decrease",
      "aria-controls": g,
      tabIndex: -1,
      style: eg,
      ...$,
      onClick(e) {
        let t = j || M;
        if (e.defaultPrevented || t || F(e)) return;
        L(e.nativeEvent);
        let n = v(e),
          r = w.current;
        b(n, {
          direction: l ? 1 : -1,
          event: e.nativeEvent,
          reason: _
        });
        let u = P.current ?? w.current;
        u !== r && A(u, (0, ea.createGenericEventDetails)(_, e.nativeEvent));
      },
      onPointerDown(e) {
        e.defaultPrevented || M || e.button || j || (L(e.nativeEvent), P.current = null, eh(e.pointerType) || x.current?.focus(), $.onPointerDown(e));
      }
    },
    {
      getButtonProps: W,
      buttonRef: B
    } = (0, ec.useButton)({
      disabled: j || M,
      native: s,
      focusableWhenDisabled: !0
    }),
    G = {
      ...R,
      disabled: j
    };
  return (0, O.useRenderElement)("button", e, {
    ref: [t, B],
    state: G,
    props: [V, d, W],
    stateAttributesMapping: k
  });
}
let ex = n.forwardRef(function (e, t) {
    return eb(e, t, !0);
  }),
  eE = n.forwardRef(function (e, t) {
    return eb(e, t, !1);
  }),
  ey = new Set(["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", "Enter", "Escape"]),
  eS = n.forwardRef(function (e, t) {
    var r;
    let l,
      i,
      {
        render: o,
        className: s,
        style: c,
        ...d
      } = e,
      {
        allowInputSyncRef: f,
        formatOptionsRef: p,
        getAllowedNonNumericKeys: v,
        getStepAmount: h,
        id: g,
        incrementValue: b,
        inputMode: E,
        max: C,
        min: R,
        name: w,
        nameProp: P,
        setValue: A,
        state: M,
        setInputValue: I,
        locale: T,
        inputRef: j,
        onValueCommitted: _,
        lastChangedValueRef: L,
        hasPendingCommitRef: $,
        valueRef: F
      } = m(),
      {
        disabled: V,
        readOnly: W,
        required: G,
        value: U,
        inputValue: H
      } = M,
      {
        clearErrors: z
      } = y(),
      {
        validationMode: Y,
        setTouched: Z,
        setFocused: ee,
        invalid: er,
        shouldValidateOnChange: eo,
        validation: es
      } = x(),
      {
        labelId: ec
      } = N(),
      ed = n.useRef(!1),
      ef = n.useRef(!1),
      ep = n.useRef(null);
    return !function (e, t, n, r, l = !0, u) {
      let {
          registerFieldControl: i
        } = x(),
        o = (0, S.useRefWithInit)(() => Symbol());
      (0, a.useIsoLayoutEffect)(() => {
        let a = o.current;
        l ? i(a, {
          controlRef: e,
          getValue: r,
          id: t,
          name: u,
          value: n
        }) : i(a, void 0);
      }, [e, l, r, t, u, i, o, n]), (0, a.useIsoLayoutEffect)(() => {
        let e = o.current;
        return () => {
          i(e, void 0);
        };
      }, [i, o]);
    }(j, g, U, void 0, !V, P), (0, a.useIsoLayoutEffect)(() => {
      if (null != ep.current) {
        let e = ep.current;
        ep.current = null, j.current?.setSelectionRange(e, e);
      }
    }), r = () => {
      if (z(w), ef.current && !eo()) {
        ef.current = !1;
        return;
      }
      es.change(U);
    }, l = n.useRef(U), i = (0, u.useStableCallback)(r), (0, a.useIsoLayoutEffect)(() => {
      l.current !== U && i(l.current), l.current = U;
    }, [U, i]), (0, O.useRenderElement)("input", e, {
      ref: [t, j],
      state: M,
      props: [{
        id: g,
        required: G,
        disabled: V,
        readOnly: W,
        inputMode: E,
        value: H,
        type: "text",
        autoComplete: "off",
        autoCorrect: "off",
        spellCheck: "false",
        "aria-roledescription": "Number field",
        "aria-invalid": !V && !!er || void 0,
        "aria-labelledby": ec,
        suppressHydrationWarning: !0,
        onFocus(e) {
          if (e.defaultPrevented || V || (ee(!0), ed.current)) return;
          ed.current = !0;
          let t = e.currentTarget,
            n = t.value.length;
          t.setSelectionRange(n, n);
        },
        onBlur(e) {
          let t;
          if (e.defaultPrevented || V || (Z(!0), ee(!1), W)) return;
          let n = !f.current,
            r = $.current;
          if (f.current = !0, "" === H.trim()) {
            let t = (0, ea.createChangeEventDetails)(ei.REASONS.inputClear, e.nativeEvent);
            if (A(null, t), t.isCanceled) return;
            "onBlur" === Y && es.commit(null), (n || r || null !== U) && _(null, (0, ea.createGenericEventDetails)(ei.REASONS.inputClear, e.nativeEvent));
            return;
          }
          let l = p.current,
            u = en(H, T, l);
          if (null === u) return;
          let a = el(l);
          t = n || a ? a ? eu(u, l) : u : U;
          let i = (0, ea.createGenericEventDetails)(ei.REASONS.inputBlur, e.nativeEvent),
            o = U !== t,
            s = t;
          if (o) {
            let n = (0, ea.createChangeEventDetails)(ei.REASONS.inputBlur, e.nativeEvent);
            if (ef.current = !0, A(t, n), n.isCanceled) {
              ef.current = !1;
              return;
            }
            (s = L.current) === U && (ef.current = !1);
          }
          "onBlur" === Y && es.commit(s), (n || o || r) && _(s, i);
          let c = D(s, T, l);
          H !== c && I(c);
        },
        onChange(e) {
          if (e.nativeEvent.defaultPrevented) return;
          f.current = !1;
          let t = e.currentTarget.value;
          if ("" === t.trim()) {
            I(t), A(null, (0, ea.createChangeEventDetails)(ei.REASONS.inputClear, e.nativeEvent));
            return;
          }
          let n = v();
          if (!Array.from(t).every(e => B.test(e) || J.test(e) || n.has(e) || K.test(e))) return;
          let r = en(t, T, p.current);
          I(t), null !== r && A(r, (0, ea.createChangeEventDetails)(ei.REASONS.inputChange, e.nativeEvent));
        },
        onKeyDown(e) {
          var t;
          if (e.defaultPrevented || W || V) return;
          let n = e.nativeEvent,
            r = !f.current,
            l = v(),
            u = l.has(e.key),
            {
              decimal: a,
              currency: i,
              percentSign: o
            } = et(T, p.current),
            s = e.currentTarget.selectionStart,
            c = e.currentTarget.selectionEnd,
            d = 0 === s && c === H.length,
            m = e => null != s && null != c && e >= s && e < c;
          [[J, X], [Q, q]].forEach(([t, n]) => {
            if (t.test(e.key) && Array.from(l).some(e => t.test(e))) {
              let e = H.search(n),
                t = -1 !== e && m(e);
              u = !(J.test(H) || Q.test(H)) || d || t;
            }
          }), [a, i, o].forEach(t => {
            if (e.key === t) {
              let e = H.indexOf(t),
                n = m(e);
              u = -1 === e || d || n;
            }
          });
          let g = ey.has(e.key),
            x = "ArrowUp" === e.key || "ArrowDown" === e.key;
          if (229 === e.which || e.altKey && !x || e.ctrlKey || e.metaKey || u || (t = e.key, B.test(t)) || g) return;
          let E = null;
          if ("Home" === e.key && null != R ? E = R : "End" === e.key && null != C && (E = C), e.key.length > 1 && !x && null === E) return;
          let y = r ? en(H, T, p.current) : null,
            S = h(e);
          e.preventDefault(), e.stopPropagation();
          let w = (0, ea.createGenericEventDetails)(ei.REASONS.keyboard, n),
            N = !1;
          (x || null !== E) && (f.current = !0), x ? (r || (L.current = F.current), N = b(S, {
            direction: "ArrowUp" === e.key ? 1 : -1,
            currentValue: y,
            event: n,
            reason: ei.REASONS.keyboard
          })) : null !== E && (N = A(E, (0, ea.createChangeEventDetails)(ei.REASONS.keyboard, n))), N && _(L.current, w);
        },
        onPaste(e) {
          if (e.defaultPrevented || W || V) return;
          let t = "";
          try {
            t = e.clipboardData?.getData("text/plain") ?? "";
          } catch {
            return;
          }
          e.preventDefault();
          let n = e.currentTarget,
            r = n.selectionStart,
            l = n.selectionEnd,
            u = H.slice(0, r) + t + H.slice(l),
            a = en(u, T, p.current);
          null !== a && (f.current = !1, ep.current = r + t.length, A(a, (0, ea.createChangeEventDetails)(ei.REASONS.inputPaste, e.nativeEvent)), I(u));
        }
      }, d, e => es.getValidationProps(V, e)],
      stateAttributesMapping: k
    });
  });
var eC = _module42014,
  eR = _module58943;
let ew = n.createContext(void 0),
  eN = {
    touchAction: "none",
    WebkitUserSelect: "none",
    userSelect: "none"
  },
  ek = n.forwardRef(function (e, l) {
    let {
        render: a,
        className: i,
        direction: o = "horizontal",
        pixelSensitivity: s = 2,
        teleportDistance: p,
        style: v,
        ...h
      } = e,
      {
        state: g,
        setIsScrubbing: b,
        inputRef: x,
        incrementValue: E,
        allowInputSyncRef: y,
        getStepAmount: S,
        onValueCommitted: C,
        lastChangedValueRef: R,
        valueRef: w
      } = m(),
      {
        disabled: N,
        readOnly: P
      } = g,
      A = n.useRef(null),
      D = n.useRef(!1),
      M = n.useRef(!1),
      I = n.useRef(null),
      T = n.useRef(null),
      j = n.useRef({
        x: 0,
        y: 0
      }),
      _ = (0, ed.useTimeout)(),
      [L, $] = n.useState(!1),
      [F, V] = n.useState(!1),
      [W, B] = n.useState(!1);
    function G(e, t, n) {
      let r = (0, em.ownerWindow)(e).visualViewport?.scale ?? 1;
      e.style.transform = `translate3d(${t}px,${n}px,0) scale(${1 / r})`;
    }
    let U = (0, u.useStableCallback)(({
        movementX: e,
        movementY: t
      }) => {
        let n = T.current,
          r = A.current;
        if (!n || !r) return;
        let l = function (e, t) {
            let n = (0, em.ownerWindow)(t);
            if (null != e) {
              let n = t.getBoundingClientRect();
              return {
                left: n.left - e / 2,
                top: n.top - e / 2,
                right: n.right + e / 2,
                bottom: n.bottom + e / 2
              };
            }
            let r = n.visualViewport;
            return r ? {
              left: r.offsetLeft,
              top: r.offsetTop,
              right: r.offsetLeft + r.width,
              bottom: r.offsetTop + r.height
            } : {
              left: 0,
              top: 0,
              right: n.document.documentElement.clientWidth,
              bottom: n.document.documentElement.clientHeight
            };
          }(p, r),
          u = j.current,
          a = (e, t, n, r) => e + t < n ? r - t : e + t > r ? n - t : e,
          i = {
            x: a(Math.round(u.x + e), n.offsetWidth / 2, l.left, l.right),
            y: a(Math.round(u.y + t), n.offsetHeight / 2, l.top, l.bottom)
          };
        j.current = i, G(n, i.x, i.y);
      }),
      K = (0, u.useStableCallback)((e, {
        clientX: t,
        clientY: n
      }) => {
        eC.flushSync(() => {
          B(e), b(e);
        });
        let r = T.current;
        if (!r || !e) return;
        let l = {
          x: t - r.offsetWidth / 2,
          y: n - r.offsetHeight / 2
        };
        j.current = l, G(r, l.x, l.y);
      });
    n.useEffect(function () {
      if (!x.current || N || P || !W) return;
      let e = 0,
        t = (0, em.ownerWindow)(x.current),
        n = (0, eR.mergeCleanups)((0, r.addEventListener)(t, "pointerup", function (e) {
          function t() {
            try {
              (0, c.ownerDocument)(A.current).exitPointerLock();
            } catch {} finally {
              D.current = !1, K(!1, e), C(R.current ?? w.current, (0, ea.createGenericEventDetails)(ei.REASONS.scrub, e));
              let t = I.current,
                n = x.current;
              !M.current && null != t && n && t.dispatchEvent(new ((0, em.ownerWindow)(n).MouseEvent)("click", {
                bubbles: !0,
                cancelable: !0
              })), M.current = !1, I.current = null;
            }
          }
          d.platform.engine.gecko ? _.start(20, t) : t();
        }, !0), (0, r.addEventListener)(t, "pointermove", function (t) {
          if (!D.current) return;
          t.preventDefault(), U(t);
          let {
            movementX: n,
            movementY: r
          } = t;
          if (Math.abs(e += "vertical" === o ? r : n) >= s) {
            e = 0, M.current = !0;
            let l = ("vertical" === o ? -r : n) * S(t);
            0 !== l && (y.current = !0, E(Math.abs(l), {
              direction: l >= 0 ? 1 : -1,
              event: t,
              reason: ei.REASONS.scrub
            }));
          }
        }, !0));
      return () => {
        _.clear(), n();
      };
    }, [N, P, y, E, W, S, x, K, U, o, s, R, C, w, _]), n.useEffect(() => () => {
      if (D.current) {
        D.current = !1, b(!1);
        try {
          (0, c.ownerDocument)(A.current).exitPointerLock();
        } catch {}
      }
    }, [b]), n.useEffect(function () {
      let e = A.current;
      if (e && !N && !P) return (0, r.addEventListener)(e, "touchstart", function (e) {
        1 === e.touches.length && e.preventDefault();
      });
    }, [N, P]);
    let H = (0, O.useRenderElement)("span", e, {
        ref: [l, A],
        state: g,
        props: [{
          role: "presentation",
          style: eN,
          async onPointerDown(e) {
            if (e.defaultPrevented || P || e.button || N) return;
            let t = "touch" === e.pointerType;
            if ($(t), "mouse" === e.pointerType && (e.preventDefault(), x.current?.focus()), D.current = !0, M.current = !1, I.current = (0, f.getTarget)(e.nativeEvent), K(!0, e.nativeEvent), !t && !d.platform.engine.webkit) try {
              await (0, c.ownerDocument)(A.current).body.requestPointerLock(), V(!1);
            } catch (e) {
              V(!0);
            } finally {
              D.current && K(!0, e.nativeEvent);
            }
          }
        }, h],
        stateAttributesMapping: k
      }),
      z = n.useMemo(() => ({
        isScrubbing: W,
        isTouchInput: L,
        isPointerLockDenied: F,
        scrubAreaCursorRef: T
      }), [W, L, F]);
    return (0, t.jsx)(ew.Provider, {
      value: z,
      children: H
    });
  }),
  eO = {
    position: "fixed",
    top: 0,
    left: 0,
    pointerEvents: "none"
  },
  eP = n.forwardRef(function (e, t) {
    let {
        render: r,
        className: l,
        style: u,
        ...a
      } = e,
      {
        state: i
      } = m(),
      {
        isScrubbing: o,
        isTouchInput: s,
        isPointerLockDenied: f,
        scrubAreaCursorRef: v
      } = function () {
        let e = n.useContext(ew);
        if (void 0 === e) throw Error((0, p.default)(44));
        return e;
      }(),
      [h, g] = n.useState(null),
      b = o && !d.platform.engine.webkit && !s && !f,
      x = (0, O.useRenderElement)("span", e, {
        enabled: b,
        ref: [t, v, g],
        state: i,
        props: [{
          role: "presentation",
          style: eO
        }, a],
        stateAttributesMapping: k
      });
    return x && eC.createPortal(x, (0, c.ownerDocument)(h).body);
  });
const _export_Decrement = eE;
const _export_Group = es;
const _export_Increment = ex;
const _export_Input = eS;
const _export_Root = eo;
const _export_ScrubArea = ek;
const _export_ScrubAreaCursor = eP;
export { _export_Decrement as Decrement, _export_Group as Group, _export_Increment as Increment, _export_Input as Input, _export_Root as Root, _export_ScrubArea as ScrubArea, _export_ScrubAreaCursor as ScrubAreaCursor };

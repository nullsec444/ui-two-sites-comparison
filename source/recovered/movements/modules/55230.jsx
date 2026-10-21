// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module45032 from "./45032.js";
import * as _module42014 from "./42014.js";
import * as _module7642 from "./7642.js";
import * as _module38633 from "./38633.js";
import * as _module38783 from "./38783.js";
import * as _module71955 from "./71955.js";
import * as _module23286 from "./23286.js";
import * as _module80678 from "./80678.js";
import * as _module94195 from "./94195.js";
import * as _module80269 from "./80269.js";
import * as _module38233 from "./38233.js";
import * as _module3737 from "./3737.js";
import * as _module88550 from "./88550.js";
import * as _module88327 from "./88327.js";
import * as _module87491 from "./87491.js";
var t = _module45032,
  n = _module42014,
  r = _module7642,
  i = _module38633,
  o = _module38783,
  l = _module71955,
  s = _module23286,
  u = _module80678,
  a = _module94195,
  c = _module80269,
  f = _module38233,
  d = _module3737;
function g(e, n = !1, r = !1) {
  let [i, o] = t.useState(e && n ? "idle" : void 0),
    [s, u] = t.useState(e);
  return e && !s && (u(!0), o("starting")), e || !s || "ending" === i || r || o("ending"), e || s || "ending" !== i || o(void 0), (0, l.useIsoLayoutEffect)(() => {
    if (!e && s && "ending" !== i && r) {
      let e = d.AnimationFrame.request(() => {
        o("ending");
      });
      return () => {
        d.AnimationFrame.cancel(e);
      };
    }
  }, [e, s, i, r]), (0, l.useIsoLayoutEffect)(() => {
    if (!e || n) return;
    let t = d.AnimationFrame.request(() => {
      o(void 0);
    });
    return () => {
      d.AnimationFrame.cancel(t);
    };
  }, [n, e]), (0, l.useIsoLayoutEffect)(() => {
    if (!e || !n) return;
    e && s && "idle" !== i && o("starting");
    let t = d.AnimationFrame.request(() => {
      o("idle");
    });
    return () => {
      d.AnimationFrame.cancel(t);
    };
  }, [n, e, s, i]), {
    mounted: s,
    setMounted: u,
    transitionStatus: i
  };
}
var p = _module88550,
  m = _module88327,
  h = _module87491;
let v = {
  tabIndex: -1,
  [u.FOCUSABLE_ATTRIBUTE]: ""
};
function y(e, n) {
  let r = t.useRef(null),
    i = t.useRef(null);
  return t.useCallback(t => {
    if (void 0 === e) return;
    let o = !1;
    if (null !== r.current) {
      let e = r.current,
        t = i.current,
        l = n.context.triggerElements.getById(e);
      t && l === t && (n.context.triggerElements.delete(e), o = !0), r.current = null, i.current = null;
    }
    if (null !== t && (r.current = e, i.current = t, n.context.triggerElements.add(e, t), o = !0), o) {
      let e = n.context.triggerElements.size;
      n.select("open") && n.state.triggerCount !== e && n.set("triggerCount", e);
    }
  }, [n, e]);
}
function E(e, t, n, r = !1) {
  t ? e.preventUnmountingOnClose = !1 : r && (e.preventUnmountingOnClose = !0);
  let i = n?.id ?? null;
  (i || t) && (e.activeTriggerId = i, e.activeTriggerElement = n ?? null);
}
const _export_FOCUSABLE_POPUP_PROPS = v;
const _export_PopupHandleAttachment = function ({
  handle: e,
  store: t
}) {
  return (0, l.useIsoLayoutEffect)(() => e.attachStore(t), [e, t]), null;
};
const _export_applyPopupOpenChange = function (e, t, r, i = {}) {
  let o,
    l = r.reason,
    s = l === h.REASONS.triggerHover,
    u = t && l === h.REASONS.triggerFocus,
    a = !t && (l === h.REASONS.triggerPress || l === h.REASONS.escapeKey),
    c = (o = !1, r.preventUnmountOnClose = () => {
      o = !0;
    }, () => o);
  if (e.context.onOpenChange?.(t, r), r.isCanceled) return;
  i.onBeforeDispatch?.(), e.state.floatingRootContext.dispatchOpenChange(t, r);
  let f = () => {
    let n = {
      ...i.extraState,
      open: t
    };
    u ? n.instantType = "focus" : a ? n.instantType = "dismiss" : s && (n.instantType = void 0), E(n, t, r.trigger, c()), e.update(n);
  };
  s ? n.flushSync(f) : f();
};
const _export_setPopupOpenState = E;
const _export_useImplicitActiveTrigger = function (e, n = {}) {
  let {
      closeOnActiveTriggerUnmount: r = !1
    } = n,
    i = t.useRef(null),
    o = e.useState("open"),
    s = e.useState("triggerCount"),
    u = e.useState("activeTriggerId"),
    a = e.useState("activeTriggerElement");
  (0, l.useIsoLayoutEffect)(() => {
    if (!o) {
      i.current = null, 0 !== e.state.triggerCount && e.set("triggerCount", 0);
      return;
    }
    let t = e.context.triggerElements.size,
      n = {};
    e.state.triggerCount !== t && (n.triggerCount = t);
    let l = e.select("activeTriggerId"),
      s = null;
    if (l) {
      let t = e.context.triggerElements.getById(l);
      if (t) i.current = l, t !== e.state.activeTriggerElement && (n.activeTriggerElement = t);else {
        for (let [t, r] of e.context.triggerElements.entries()) if (r === e.state.activeTriggerElement) {
          n.activeTriggerId = t, n.activeTriggerElement = r, i.current = t;
          break;
        }
        void 0 === n.activeTriggerId && (i.current === l ? s = l : i.current = null);
      }
    } else i.current = null;
    if (!s && !l && 1 === t) {
      let t = e.context.triggerElements.entries().next();
      if (!t.done) {
        let [e, r] = t.value;
        n.activeTriggerId = e, n.activeTriggerElement = r, i.current = e;
      }
    }
    (void 0 !== n.triggerCount || void 0 !== n.activeTriggerId || void 0 !== n.activeTriggerElement) && e.update(n), s && r && queueMicrotask(() => {
      if (e.select("open") && e.select("activeTriggerId") === s && !e.context.triggerElements.getById(s)) {
        let t = (0, m.createChangeEventDetails)(h.REASONS.none);
        e.setOpen(!1, t), t.isCanceled || e.update({
          activeTriggerId: null,
          activeTriggerElement: null
        });
      }
    });
  }, [o, e, s, u, a, r]);
};
const _export_useOpenStateTransitions = function (e, t, n) {
  let {
      mounted: r,
      setMounted: i,
      transitionStatus: l
    } = g(e),
    s = t.useState("preventUnmountingOnClose"),
    u = !e && s;
  t.useSyncedValues({
    mounted: r,
    transitionStatus: l,
    preventUnmountingOnClose: u
  });
  let a = (0, o.useStableCallback)(() => {
    i(!1), t.update({
      activeTriggerId: null,
      activeTriggerElement: null,
      mounted: !1,
      preventUnmountingOnClose: !1
    }), n?.(), t.context.onOpenChangeComplete?.(!1);
  });
  return (0, p.useOpenChangeComplete)({
    enabled: r && !e && !u,
    open: e,
    ref: t.context.popupRef,
    onComplete() {
      e || a();
    }
  }), {
    forceUnmount: a,
    transitionStatus: l
  };
};
const _export_usePopupInteractionProps = function (e, t) {
  e.useSyncedValues(t), (0, l.useIsoLayoutEffect)(() => () => {
    e.update({
      activeTriggerProps: r.EMPTY_OBJECT,
      inactiveTriggerProps: r.EMPTY_OBJECT,
      popupProps: r.EMPTY_OBJECT
    });
  }, [e]);
};
const _export_usePopupRootStore = function (e, n = !1) {
  let r = (0, i.useId)(),
    o = null != (0, a.useFloatingParentNodeId)(),
    u = (0, s.useRefWithInit)(() => e(r, o)).current;
  return !function (e) {
    let {
        popupStore: n,
        treatPopupAsFloatingElement: r = !1,
        floatingRootContext: i,
        floatingId: o,
        nested: s,
        onOpenChange: u
      } = e,
      a = n.useState("open"),
      d = n.useState("activeTriggerElement"),
      g = n.useState(r ? "popupElement" : "positionerElement"),
      p = n.context.triggerElements,
      m = t.useRef(null);
    void 0 === i && null === m.current && (m.current = new f.FloatingRootStore({
      open: a,
      transitionStatus: void 0,
      referenceElement: d,
      floatingElement: g,
      triggerElements: p,
      onOpenChange: u,
      floatingId: o,
      syncOnly: !0,
      nested: s
    }));
    let h = i ?? m.current;
    n.useSyncedValue("floatingId", o), (0, l.useIsoLayoutEffect)(() => {
      let e = {
        open: a,
        floatingId: o,
        referenceElement: d,
        floatingElement: g
      };
      (0, c.isElement)(d) && (e.domReferenceElement = d), h.state.positionReference === h.state.referenceElement && (e.positionReference = d), h.update(e);
    }, [a, o, d, g, h]), h.context.onOpenChange = u, h.context.nested = s;
  }({
    popupStore: u,
    treatPopupAsFloatingElement: n,
    floatingRootContext: u.state.floatingRootContext,
    floatingId: r,
    nested: o,
    onOpenChange: u.setOpen
  }), u;
};
const _export_usePopupRootSync = function (e, t) {
  (0, l.useIsoLayoutEffect)(() => {
    t || null === e.state.openMethod || e.set("openMethod", null);
  }, [t, e]), (0, l.useIsoLayoutEffect)(() => () => {
    null !== e.state.openMethod && e.set("openMethod", null);
  }, [e]);
};
const _export_useTriggerDataForwarding = function (e, n, r, i) {
  let s = r.useState("isMountedByTrigger", e),
    u = y(e, r),
    a = (0, o.useStableCallback)(t => {
      let n = r.select("open"),
        o = r.select("activeTriggerId");
      o === e ? r.update({
        activeTriggerElement: t,
        ...(n ? i : null)
      }) : null == o && n && r.update({
        activeTriggerId: e,
        activeTriggerElement: t,
        ...i
      });
    }),
    c = t.useCallback(e => {
      u(e), e && a(e);
    }, [u, a]);
  return (0, l.useIsoLayoutEffect)(() => {
    s && r.update({
      activeTriggerElement: n.current,
      ...i
    });
  }, [s, r, n, ...Object.values(i)]), {
    registerTrigger: c,
    isMountedByThisTrigger: s
  };
};
const _export_useTriggerRegistration = y;
export { _export_FOCUSABLE_POPUP_PROPS as FOCUSABLE_POPUP_PROPS, _export_PopupHandleAttachment as PopupHandleAttachment, _export_applyPopupOpenChange as applyPopupOpenChange, _export_setPopupOpenState as setPopupOpenState, _export_useImplicitActiveTrigger as useImplicitActiveTrigger, _export_useOpenStateTransitions as useOpenStateTransitions, _export_usePopupInteractionProps as usePopupInteractionProps, _export_usePopupRootStore as usePopupRootStore, _export_usePopupRootSync as usePopupRootSync, _export_useTriggerDataForwarding as useTriggerDataForwarding, _export_useTriggerRegistration as useTriggerRegistration };

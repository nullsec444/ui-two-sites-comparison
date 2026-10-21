// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module13518 from "./13518.js";
import * as _module98582 from "./98582.js";
import * as _module90520 from "./90520.js";
import * as _module96765 from "./96765.js";
import * as _module1077 from "./1077.js";
import * as _module30548 from "./30548.js";
import * as _module68427 from "./68427.js";
import * as _module84872 from "./84872.js";
import * as _module92548 from "./92548.js";
import * as _module5443 from "./5443.js";
import * as _module80548 from "./80548.js";
import * as _module65797 from "./65797.js";
import * as _module73877 from "./73877.js";
import * as _module98293 from "./98293.js";
import * as _module18949 from "./18949.js";
import * as _module23609 from "./23609.js";
import * as _module94511 from "./94511.js";
import * as _module10922 from "./10922.js";
import * as _module41007 from "./41007.js";
import * as _module50945 from "./50945.js";
import * as _module6904 from "./6904.js";
import * as _module67027 from "./67027.js";
import * as _module66919 from "./66919.js";
import * as _module83936 from "./83936.js";
import * as _module35658 from "./35658.js";
import * as _module70470 from "./70470.js";
import * as _module17696 from "./17696.js";
var s = _module13518,
  r = _module98582,
  o = _module90520;
var m = _module96765,
  f = _module1077,
  g = _module30548,
  v = _module68427,
  y = _module84872,
  x = _module92548,
  b = _module5443,
  T = _module80548,
  w = _module65797,
  S = _module73877;
var P = _module98293,
  M = _module18949,
  A = _module23609,
  V = _module94511,
  E = _module10922,
  C = _module41007,
  D = _module50945;
let R = D.cornerRadiusProps.length,
  k = t => "string" == typeof t ? parseFloat(t) : t,
  L = t => "number" == typeof t || V.px.test(t);
function B(t, e) {
  return void 0 !== t[e] ? t[e] : t.borderRadius;
}
let F = I(0, .5, C.circOut),
  j = I(.5, .95, g.noop);
function I(t, e, i) {
  return n => n < t ? 0 : n > e ? 1 : i((0, E.progress)(t, e, n));
}
function O(t, e) {
  t.min = e.min, t.max = e.max;
}
function N(t, e) {
  O(t.x, e.x), O(t.y, e.y);
}
function U(t, e) {
  t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin;
}
var $ = _module6904,
  W = _module67027;
function G(t, e, i, n, s) {
  return t -= e, t = (0, $.scalePoint)(t, 1 / i, n), void 0 !== s && (t = (0, $.scalePoint)(t, 1 / s, n)), t;
}
function z(t, e, [i, n, s], r, o) {
  !function (t, e = 0, i = 1, n = .5, s, r = t, o = t) {
    if (V.percent.test(e) && (e = parseFloat(e), e = (0, M.mixNumber)(o.min, o.max, e / 100) - o.min), "number" != typeof e) return;
    let a = (0, M.mixNumber)(r.min, r.max, n);
    t === r && (a -= e), t.min = G(t.min, e, i, a, s), t.max = G(t.max, e, i, a, s);
  }(t, e[i], e[n], e[s], e.scale, r, o);
}
let H = ["x", "scaleX", "originX"],
  Y = ["y", "scaleY", "originY"];
function K(t, e, i, n) {
  z(t.x, e, H, i ? i.x : void 0, n ? n.x : void 0), z(t.y, e, Y, i ? i.y : void 0, n ? n.y : void 0);
}
var X = _module66919;
function q(t) {
  return 0 === t.translate && 1 === t.scale;
}
function Z(t) {
  return q(t.x) && q(t.y);
}
function _(t, e) {
  return t.min === e.min && t.max === e.max;
}
function J(t, e) {
  return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
}
function Q(t, e) {
  return J(t.x, e.x) && J(t.y, e.y);
}
function tt(t) {
  return (0, W.calcLength)(t.x) / (0, W.calcLength)(t.y);
}
function te(t, e) {
  return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
}
var ti = _module83936;
class tn {
  constructor() {
    this.members = [];
  }
  add(t) {
    (0, ti.addUniqueItem)(this.members, t);
    for (let e = this.members.length - 1; e >= 0; e--) {
      let i = this.members[e];
      if (i === t || i === this.lead || i === this.prevLead) continue;
      let n = i.instance;
      n && !1 !== n.isConnected || i.snapshot || ((0, ti.removeItem)(this.members, i), i.unmount());
    }
    t.scheduleRender();
  }
  remove(t) {
    if ((0, ti.removeItem)(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      let t = this.members[this.members.length - 1];
      t && this.promote(t);
    }
  }
  relegate(t) {
    for (let e = this.members.indexOf(t) - 1; e >= 0; e--) {
      let t = this.members[e];
      if (!1 !== t.isPresent && t.instance?.isConnected !== !1) return this.promote(t), !0;
    }
    return !1;
  }
  promote(t, e) {
    let i = this.lead;
    if (t !== i && (this.prevLead = i, this.lead = t, t.show(), i)) {
      i.updateSnapshot(), t.scheduleRender();
      let {
          layoutDependency: n
        } = i.options,
        {
          layoutDependency: s
        } = t.options;
      (void 0 === n || n !== s) && (t.resumeFrom = i, e && (i.preserveOpacity = !0), i.snapshot && (t.snapshot = i.snapshot, t.snapshot.latestValues = i.animationValues || i.latestValues), t.root?.isUpdating && (t.isLayoutDirty = !0)), !1 === t.options.crossfade && i.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach(t => {
      t.options.onExitComplete?.(), t.resumingFrom?.options.onExitComplete?.();
    });
  }
  scheduleRender() {
    this.members.forEach(t => t.instance && t.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    this.lead?.snapshot && (this.lead.snapshot = void 0);
  }
}
var ts = _module35658;
let tr = (t, e) => t.depth - e.depth;
class to {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    (0, ti.addUniqueItem)(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    (0, ti.removeItem)(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(tr), this.isDirty = !1, this.children.forEach(t);
  }
}
var ta = _module70470;
let tl = ["", "X", "Y", "Z"],
  tu = 0;
function th(t, e, i, n) {
  let {
    latestValues: s
  } = e;
  s[t] && (i[t] = s[t], e.setStaticValue(t, 0), n && (n[t] = 0));
}
function tc({
  attachResizeListener: t,
  defaultParent: e,
  measureScroll: i,
  checkIsScrollRoot: n,
  resetTransform: a
}) {
  return class {
    constructor(t = {}, i = e?.()) {
      this.id = tu++, this.animationId = 0, this.animationCommitId = 0, this.children = new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
        x: 1,
        y: 1
      }, this.eventHandlers = new Map(), this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(tm), this.nodes.forEach(tS), this.nodes.forEach(tP), this.nodes.forEach(tf);
      }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map(), this.latestValues = t, this.root = i ? i.root || i : this, this.path = i ? [...i.path, i] : [], this.parent = i, this.depth = i ? i.depth + 1 : 0;
      for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
      this.root === this && (this.nodes = new to());
    }
    addEventListener(t, e) {
      return this.eventHandlers.has(t) || this.eventHandlers.set(t, new m.SubscriptionManager()), this.eventHandlers.get(t).add(e);
    }
    notifyListeners(t, ...e) {
      let i = this.eventHandlers.get(t);
      i && i.notify(...e);
    }
    hasListeners(t) {
      return this.eventHandlers.has(t);
    }
    mount(e) {
      if (this.instance) return;
      this.isSVG = (0, P.isSVGElement)(e) && (!(0, P.isSVGElement)(e) || "svg" !== e.tagName), this.instance = e;
      let {
        layoutId: i,
        layout: n,
        visualElement: o
      } = this.options;
      if (o && !o.current && o.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (n || i) && (this.isLayoutDirty = !0), t) {
        let i,
          n = 0,
          o = () => this.root.updateBlockedByResize = !1;
        r.frame.read(() => {
          n = window.innerWidth;
        }), t(e, () => {
          let t = window.innerWidth;
          if (t !== n) {
            let e, a;
            n = t, this.root.updateBlockedByResize = !0, i && i(), e = w.time.now(), a = ({
              timestamp: t
            }) => {
              let i = t - e;
              i >= 250 && ((0, r.cancelFrame)(a), o(i - 250));
            }, r.frame.setup(a, !0), i = () => (0, r.cancelFrame)(a), s.globalProjectionState.hasAnimatedSinceResize && (s.globalProjectionState.hasAnimatedSinceResize = !1, this.nodes.forEach(tw));
          }
        });
      }
      i && this.root.registerSharedNode(i, this), !1 !== this.options.animate && o && (i || n) && this.addEventListener("didUpdate", ({
        delta: t,
        hasLayoutChanged: e,
        hasRelativeLayoutChanged: i,
        layout: n
      }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        let s = this.options.transition || o.getDefaultTransition() || tD,
          {
            onLayoutAnimationStart: r,
            onLayoutAnimationComplete: a
          } = o.getProps(),
          l = !this.targetLayout || !Q(this.targetLayout, n),
          u = !e && i;
        if (this.options.layoutRoot || this.resumeFrom || u || e && (l || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          let e = {
            ...(0, T.getValueTransition)(s, "layout"),
            onPlay: r,
            onComplete: a
          };
          (o.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e), this.setAnimationOrigin(t, u, e.path);
        } else e || tw(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = n;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      let t = this.getStack();
      t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), (0, r.cancelFrame)(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    startUpdate() {
      !this.isUpdateBlocked() && (this.isUpdating = !0, this.nodes && this.nodes.forEach(tM), this.animationId++);
    }
    getTransformTemplate() {
      let {
        visualElement: t
      } = this.options;
      return t && t.getProps().transformTemplate;
    }
    willUpdate(t = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && function t(e) {
        if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
        let {
          visualElement: i
        } = e.options;
        if (!i) return;
        let n = (0, b.getOptimisedAppearId)(i);
        if (window.MotionHasOptimisedAnimation(n, "transform")) {
          let {
            layout: t,
            layoutId: i
          } = e.options;
          window.MotionCancelOptimisedAnimation(n, "transform", r.frame, !(t || i));
        }
        let {
          parent: s
        } = e;
        s && !s.hasCheckedOptimisedAppear && t(s);
      }(this), this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
      this.isLayoutDirty = !0;
      for (let t = 0; t < this.path.length; t++) {
        let e = this.path[t];
        e.shouldResetTransform = !0, ("string" == typeof e.latestValues.x || "string" == typeof e.latestValues.y) && (e.isLayoutDirty = !0), e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1);
      }
      let {
        layoutId: e,
        layout: i
      } = this.options;
      if (void 0 === e && !i) return;
      let n = this.getTransformTemplate();
      this.prevTransformTemplateValue = n ? n(this.latestValues, "") : void 0, this.updateSnapshot(), t && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        let t = this.updateBlockedByResize;
        this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), t && this.nodes.forEach(ty), this.nodes.forEach(tv);
        return;
      }
      if (this.animationId <= this.animationCommitId) return void this.nodes.forEach(tx);
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(tb), this.nodes.forEach(tT), this.nodes.forEach(td), this.nodes.forEach(tp)) : this.nodes.forEach(tx), this.clearAllSnapshots();
      let t = w.time.now();
      r.frameData.delta = (0, f.clamp)(0, 1e3 / 60, t - r.frameData.timestamp), r.frameData.timestamp = t, r.frameData.isProcessing = !0, r.frameSteps.update.process(r.frameData), r.frameSteps.preRender.process(r.frameData), r.frameSteps.render.process(r.frameData), r.frameData.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, o.microtask.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(tg), this.sharedNodes.forEach(tA);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, r.frame.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      r.frame.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      !this.snapshot && this.instance && (this.snapshot = this.measure(), !this.snapshot || (0, W.calcLength)(this.snapshot.measuredBox.x) || (0, W.calcLength)(this.snapshot.measuredBox.y) || (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
      if (this.resumeFrom && !this.resumeFrom.instance) for (let t = 0; t < this.path.length; t++) this.path[t].updateScroll();
      let t = this.layout;
      this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected || (this.layoutCorrected = (0, X.createBox)()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      let {
        visualElement: e
      } = this.options;
      e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0);
    }
    updateScroll(t = "measure") {
      let e = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e && this.instance) {
        let e = n(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: t,
          isRoot: e,
          offset: i(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : e
        };
      }
    }
    resetTransform() {
      if (!a) return;
      let t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
        e = this.projectionDelta && !Z(this.projectionDelta),
        i = this.getTransformTemplate(),
        n = i ? i(this.latestValues, "") : void 0,
        s = n !== this.prevTransformTemplateValue;
      t && this.instance && (e || (0, ta.hasTransform)(this.latestValues) || s) && (a(this.instance, n), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(t = !0) {
      var e;
      let i = this.measurePageBox(),
        n = this.removeElementScroll(i);
      return t && (n = this.removeTransform(n)), tL((e = n).x), tL(e.y), {
        animationId: this.root.animationId,
        measuredBox: i,
        layoutBox: n,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      let {
        visualElement: t
      } = this.options;
      if (!t) return (0, X.createBox)();
      let e = t.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(tF))) {
        let {
          scroll: t
        } = this.root;
        t && ((0, $.translateAxis)(e.x, t.offset.x), (0, $.translateAxis)(e.y, t.offset.y));
      }
      return e;
    }
    removeElementScroll(t) {
      let e = (0, X.createBox)();
      if (N(e, t), this.scroll?.wasRoot) return e;
      for (let i = 0; i < this.path.length; i++) {
        let n = this.path[i],
          {
            scroll: s,
            options: r
          } = n;
        n !== this.root && s && r.layoutScroll && (s.wasRoot && N(e, t), (0, $.translateAxis)(e.x, s.offset.x), (0, $.translateAxis)(e.y, s.offset.y));
      }
      return e;
    }
    applyTransform(t, e = !1, i) {
      let n = i || (0, X.createBox)();
      N(n, t);
      for (let t = 0; t < this.path.length; t++) {
        let i = this.path[t];
        !e && i.options.layoutScroll && i.scroll && i !== i.root && ((0, $.translateAxis)(n.x, -i.scroll.offset.x), (0, $.translateAxis)(n.y, -i.scroll.offset.y)), (0, ta.hasTransform)(i.latestValues) && (0, $.transformBox)(n, i.latestValues, i.layout?.layoutBox);
      }
      return (0, ta.hasTransform)(this.latestValues) && (0, $.transformBox)(n, this.latestValues, this.layout?.layoutBox), n;
    }
    removeTransform(t) {
      let e = (0, X.createBox)();
      N(e, t);
      for (let t = 0; t < this.path.length; t++) {
        let i,
          n = this.path[t];
        (0, ta.hasTransform)(n.latestValues) && (n.instance && ((0, ta.hasScale)(n.latestValues) && n.updateSnapshot(), N(i = (0, X.createBox)(), n.measurePageBox())), K(e, n.latestValues, n.snapshot?.layoutBox, i));
      }
      return (0, ta.hasTransform)(this.latestValues) && K(e, this.latestValues), e;
    }
    setTargetDelta(t) {
      this.targetDelta = t, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(t) {
      this.options = {
        ...this.options,
        ...t,
        crossfade: void 0 === t.crossfade || t.crossfade
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== r.frameData.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(t = !1) {
      let e = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = e.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = e.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = e.isSharedProjectionDirty);
      let i = !!this.resumingFrom || this !== e;
      if (!(t || i && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
      let {
        layout: n,
        layoutId: s
      } = this.options;
      if (!this.layout || !(n || s)) return;
      this.resolvedRelativeTargetAt = r.frameData.timestamp;
      let o = this.getClosestProjectingParent();
      o && this.linkedParentVersion !== o.layoutVersion && !o.options.layoutRoot && this.removeRelativeTarget(), this.targetDelta || this.relativeTarget || (!1 !== this.options.layoutAnchor && o && o.layout ? this.createRelativeTarget(o, this.layout.layoutBox, o.layout.layoutBox) : this.removeRelativeTarget()), (this.relativeTarget || this.targetDelta) && (this.target || (this.target = (0, X.createBox)(), this.targetWithTransforms = (0, X.createBox)()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), (0, W.calcRelativeBox)(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : N(this.target, this.layout.layoutBox), (0, $.applyBoxDelta)(this.target, this.targetDelta)) : N(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, !1 !== this.options.layoutAnchor && o && !!o.resumingFrom == !!this.resumingFrom && !o.options.layoutScroll && o.target && 1 !== this.animationProgress ? this.createRelativeTarget(o, this.target, o.target) : this.relativeParent = this.relativeTarget = void 0));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || (0, ta.hasScale)(this.parent.latestValues) || (0, ta.has2DTranslate)(this.parent.latestValues))) if (this.parent.isProjecting()) return this.parent;else return this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(t, e, i) {
      this.relativeParent = t, this.linkedParentVersion = t.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = (0, X.createBox)(), this.relativeTargetOrigin = (0, X.createBox)(), (0, W.calcRelativePosition)(this.relativeTargetOrigin, e, i, this.options.layoutAnchor || void 0), N(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      let t = this.getLead(),
        e = !!this.resumingFrom || this !== t,
        i = !0;
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (i = !1), e && (this.isSharedProjectionDirty || this.isTransformDirty) && (i = !1), this.resolvedRelativeTargetAt === r.frameData.timestamp && (i = !1), i) return;
      let {
        layout: n,
        layoutId: s
      } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(n || s)) return;
      N(this.layoutCorrected, this.layout.layoutBox);
      let o = this.treeScale.x,
        a = this.treeScale.y;
      (0, $.applyTreeDeltas)(this.layoutCorrected, this.treeScale, this.path, e), t.layout && !t.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (t.target = t.layout.layoutBox, t.targetWithTransforms = (0, X.createBox)());
      let {
        target: l
      } = t;
      if (!l) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      this.projectionDelta && this.prevProjectionDelta ? (U(this.prevProjectionDelta.x, this.projectionDelta.x), U(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(), (0, W.calcBoxDelta)(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.treeScale.x === o && this.treeScale.y === a && te(this.projectionDelta.x, this.prevProjectionDelta.x) && te(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(t = !0) {
      if (this.options.visualElement?.scheduleRender(), t) {
        let t = this.getStack();
        t && t.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = (0, X.createDelta)(), this.projectionDelta = (0, X.createDelta)(), this.projectionDeltaWithTransform = (0, X.createDelta)();
    }
    setAnimationOrigin(t, e = !1, i) {
      let n,
        s = this.snapshot,
        r = s ? s.latestValues : {},
        o = {
          ...this.latestValues
        },
        a = (0, X.createDelta)();
      this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e;
      let l = (0, X.createBox)(),
        u = (s ? s.source : void 0) !== (this.layout ? this.layout.source : void 0),
        h = this.getStack(),
        c = !h || h.members.length <= 1,
        d = !!(u && !c && !0 === this.options.crossfade && !this.path.some(tC));
      this.animationProgress = 0;
      let p = i?.interpolateProjection(t);
      this.mixTargetDelta = e => {
        let i = e / 1e3,
          s = p?.(i);
        if (s ? (a.x.translate = s.x, a.x.scale = (0, M.mixNumber)(t.x.scale, 1, i), a.x.origin = t.x.origin, a.x.originPoint = t.x.originPoint, a.y.translate = s.y, a.y.scale = (0, M.mixNumber)(t.y.scale, 1, i), a.y.origin = t.y.origin, a.y.originPoint = t.y.originPoint) : (tV(a.x, t.x, i), tV(a.y, t.y, i)), this.setTargetDelta(a), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
          var h, m, f, g, v, y;
          (0, W.calcRelativePosition)(l, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), f = this.relativeTarget, g = this.relativeTargetOrigin, v = l, y = i, tE(f.x, g.x, v.x, y), tE(f.y, g.y, v.y, y), n && (h = this.relativeTarget, m = n, _(h.x, m.x) && _(h.y, m.y)) && (this.isProjectionDirty = !1), n || (n = (0, X.createBox)()), N(n, this.relativeTarget);
        }
        u && (this.animationValues = o, function (t, e, i, n, s, r) {
          s ? (t.opacity = (0, M.mixNumber)(0, i.opacity ?? 1, F(n)), t.opacityExit = (0, M.mixNumber)(e.opacity ?? 1, 0, j(n))) : r && (t.opacity = (0, M.mixNumber)(e.opacity ?? 1, i.opacity ?? 1, n));
          for (let s = 0; s < R; s++) {
            let r = D.cornerRadiusProps[s],
              o = B(e, r),
              a = B(i, r);
            (void 0 !== o || void 0 !== a) && (o || (o = 0), a || (a = 0), 0 === o || 0 === a || L(o) === L(a) ? (t[r] = Math.max((0, M.mixNumber)(k(o), k(a), n), 0), (V.percent.test(a) || V.percent.test(o)) && (t[r] += "%")) : t[r] = a);
          }
          (e.rotate || i.rotate) && (t.rotate = (0, M.mixNumber)(e.rotate || 0, i.rotate || 0, n));
        }(o, r, this.latestValues, i, d, c)), s && void 0 !== s.rotate && (this.animationValues || (this.animationValues = o), this.animationValues.pathRotation = s.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = i;
      }, this.mixTargetDelta(1e3 * !!this.options.layoutRoot);
    }
    startAnimation(t) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && ((0, r.cancelFrame)(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = r.frame.update(() => {
        var e, i, n;
        let r;
        s.globalProjectionState.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = (0, y.motionValue)(0)), this.motionValue.jump(0, !1), this.currentAnimation = (e = this.motionValue, i = [0, 1e3], n = {
          ...t,
          velocity: 0,
          isSync: !0,
          onUpdate: e => {
            this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
          },
          onComplete: () => {
            t.onComplete && t.onComplete(), this.completeAnimation();
          }
        }, (r = (0, x.isMotionValue)(e) ? e : (0, y.motionValue)(e)).start((0, v.animateMotionValue)("", r, i, n)), r.animation), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      let t = this.getStack();
      t && t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      let t = this.getLead(),
        {
          targetWithTransforms: e,
          target: i,
          layout: n,
          latestValues: s
        } = t;
      if (e && i && n) {
        if (this !== t && this.layout && n && tB(this.options.animationType, this.layout.layoutBox, n.layoutBox)) {
          i = this.target || (0, X.createBox)();
          let e = (0, W.calcLength)(this.layout.layoutBox.x);
          i.x.min = t.target.x.min, i.x.max = i.x.min + e;
          let n = (0, W.calcLength)(this.layout.layoutBox.y);
          i.y.min = t.target.y.min, i.y.max = i.y.min + n;
        }
        N(e, i), (0, $.transformBox)(e, s), (0, W.calcBoxDelta)(this.projectionDeltaWithTransform, this.layoutCorrected, e, s);
      }
    }
    registerSharedNode(t, e) {
      this.sharedNodes.has(t) || this.sharedNodes.set(t, new tn()), this.sharedNodes.get(t).add(e);
      let i = e.options.initialPromotionConfig;
      e.promote({
        transition: i ? i.transition : void 0,
        preserveFollowOpacity: i && i.shouldPreserveFollowOpacity ? i.shouldPreserveFollowOpacity(e) : void 0
      });
    }
    isLead() {
      let t = this.getStack();
      return !t || t.lead === this;
    }
    getLead() {
      let {
        layoutId: t
      } = this.options;
      return t && this.getStack()?.lead || this;
    }
    getPrevLead() {
      let {
        layoutId: t
      } = this.options;
      return t ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      let {
        layoutId: t
      } = this.options;
      if (t) return this.root.sharedNodes.get(t);
    }
    promote({
      needsReset: t,
      transition: e,
      preserveFollowOpacity: i
    } = {}) {
      let n = this.getStack();
      n && n.promote(this, i), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
        transition: e
      });
    }
    relegate() {
      let t = this.getStack();
      return !!t && t.relegate(this);
    }
    resetSkewAndRotation() {
      let {
        visualElement: t
      } = this.options;
      if (!t) return;
      let e = !1,
        {
          latestValues: i
        } = t;
      if ((i.z || i.rotate || i.rotateX || i.rotateY || i.rotateZ || i.skewX || i.skewY) && (e = !0), !e) return;
      let n = {};
      i.z && th("z", t, n, this.animationValues);
      for (let e = 0; e < tl.length; e++) th(`rotate${tl[e]}`, t, n, this.animationValues), th(`skew${tl[e]}`, t, n, this.animationValues);
      for (let e in t.render(), n) t.setStaticValue(e, n[e]), this.animationValues && (this.animationValues[e] = n[e]);
      t.scheduleRender();
    }
    applyProjectionStyles(t, e) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        t.visibility = "hidden";
        return;
      }
      let i = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, t.visibility = "", t.opacity = "", t.pointerEvents = (0, A.resolveMotionValue)(e?.pointerEvents) || "", t.transform = i ? i(this.latestValues, "") : "none";
        return;
      }
      let n = this.getLead();
      if (!this.projectionDelta || !this.layout || !n.target) {
        this.options.layoutId && (t.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, t.pointerEvents = (0, A.resolveMotionValue)(e?.pointerEvents) || ""), this.hasProjected && !(0, ta.hasTransform)(this.latestValues) && (t.transform = i ? i({}, "") : "none", this.hasProjected = !1);
        return;
      }
      t.visibility = "";
      let s = n.animationValues || n.latestValues;
      this.applyTransformsToTarget();
      let r = function (t, e, i) {
        let n = "",
          s = t.x.translate / e.x,
          r = t.y.translate / e.y,
          o = i?.z || 0;
        if ((s || r || o) && (n = `translate3d(${s}px, ${r}px, ${o}px) `), (1 !== e.x || 1 !== e.y) && (n += `scale(${1 / e.x}, ${1 / e.y}) `), i) {
          let {
            transformPerspective: t,
            rotate: e,
            pathRotation: s,
            rotateX: r,
            rotateY: o,
            skewX: a,
            skewY: l
          } = i;
          t && (n = `perspective(${t}px) ${n}`), e && (n += `rotate(${e}deg) `), s && (n += `rotate(${s}deg) `), r && (n += `rotateX(${r}deg) `), o && (n += `rotateY(${o}deg) `), a && (n += `skewX(${a}deg) `), l && (n += `skewY(${l}deg) `);
        }
        let a = t.x.scale * e.x,
          l = t.y.scale * e.y;
        return (1 !== a || 1 !== l) && (n += `scale(${a}, ${l})`), n || "none";
      }(this.projectionDeltaWithTransform, this.treeScale, s);
      i && (r = i(s, r)), t.transform = r;
      let {
        x: o,
        y: a
      } = this.projectionDelta;
      for (let e in t.transformOrigin = `${100 * o.origin}% ${100 * a.origin}% 0`, n.animationValues ? t.opacity = n === this ? s.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : s.opacityExit : t.opacity = n === this ? void 0 !== s.opacity ? s.opacity : "" : void 0 !== s.opacityExit ? s.opacityExit : 0, S.scaleCorrectors) {
        if (void 0 === s[e]) continue;
        let {
            correct: i,
            applyTo: o,
            isCSSVariable: a
          } = S.scaleCorrectors[e],
          l = "none" === r ? s[e] : i(s[e], n);
        if (o) {
          let e = o.length;
          for (let i = 0; i < e; i++) t[o[i]] = l;
        } else a ? this.options.visualElement.renderState.vars[e] = l : t[e] = l;
      }
      this.options.layoutId && (t.pointerEvents = n === this ? (0, A.resolveMotionValue)(e?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach(t => t.currentAnimation?.stop()), this.root.nodes.forEach(tv), this.root.sharedNodes.clear();
    }
  };
}
function td(t) {
  t.updateLayout();
}
function tp(t) {
  let e = t.resumeFrom?.snapshot || t.snapshot;
  if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
    let {
        layoutBox: i,
        measuredBox: n
      } = t.layout,
      {
        animationType: s
      } = t.options,
      r = e.source !== t.layout.source;
    if ("size" === s) (0, ts.eachAxis)(t => {
      let n = r ? e.measuredBox[t] : e.layoutBox[t],
        s = (0, W.calcLength)(n);
      n.min = i[t].min, n.max = n.min + s;
    });else if ("x" === s || "y" === s) {
      let t = "x" === s ? "y" : "x";
      O(r ? e.measuredBox[t] : e.layoutBox[t], i[t]);
    } else tB(s, e.layoutBox, i) && (0, ts.eachAxis)(n => {
      let s = r ? e.measuredBox[n] : e.layoutBox[n],
        o = (0, W.calcLength)(i[n]);
      s.max = s.min + o, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[n].max = t.relativeTarget[n].min + o);
    });
    let o = (0, X.createDelta)();
    (0, W.calcBoxDelta)(o, i, e.layoutBox);
    let a = (0, X.createDelta)();
    r ? (0, W.calcBoxDelta)(a, t.applyTransform(n, !0), e.measuredBox) : (0, W.calcBoxDelta)(a, i, e.layoutBox);
    let l = !Z(o),
      u = !1;
    if (!t.resumeFrom) {
      let n = t.getClosestProjectingParent();
      if (n && !n.resumeFrom) {
        let {
          snapshot: s,
          layout: r
        } = n;
        if (s && r) {
          let o = t.options.layoutAnchor || void 0,
            a = (0, X.createBox)();
          (0, W.calcRelativePosition)(a, e.layoutBox, s.layoutBox, o);
          let l = (0, X.createBox)();
          (0, W.calcRelativePosition)(l, i, r.layoutBox, o), Q(a, l) || (u = !0), n.options.layoutRoot && (t.relativeTarget = l, t.relativeTargetOrigin = a, t.relativeParent = n);
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: i,
      snapshot: e,
      delta: a,
      layoutDelta: o,
      hasLayoutChanged: l,
      hasRelativeLayoutChanged: u
    });
  } else if (t.isLead()) {
    let {
      onExitComplete: e
    } = t.options;
    e && e();
  }
  t.options.transition = void 0;
}
function tm(t) {
  t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function tf(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function tg(t) {
  t.clearSnapshot();
}
function tv(t) {
  t.clearMeasurements();
}
function ty(t) {
  t.isLayoutDirty = !0, t.updateLayout();
}
function tx(t) {
  t.isLayoutDirty = !1;
}
function tb(t) {
  t.isAnimationBlocked && t.layout && !t.isLayoutDirty && (t.snapshot = t.layout, t.isLayoutDirty = !0);
}
function tT(t) {
  let {
    visualElement: e
  } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
}
function tw(t) {
  t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0;
}
function tS(t) {
  t.resolveTargetDelta();
}
function tP(t) {
  t.calcProjection();
}
function tM(t) {
  t.resetSkewAndRotation();
}
function tA(t) {
  t.removeLeadSnapshot();
}
function tV(t, e, i) {
  t.translate = (0, M.mixNumber)(e.translate, 0, i), t.scale = (0, M.mixNumber)(e.scale, 1, i), t.origin = e.origin, t.originPoint = e.originPoint;
}
function tE(t, e, i, n) {
  t.min = (0, M.mixNumber)(e.min, i.min, n), t.max = (0, M.mixNumber)(e.max, i.max, n);
}
function tC(t) {
  return t.animationValues && void 0 !== t.animationValues.opacityExit;
}
let tD = {
    duration: .45,
    ease: [.4, 0, .1, 1]
  },
  tR = t => "u" > typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
  tk = tR("applewebkit/") && !tR("chrome/") ? Math.round : g.noop;
function tL(t) {
  t.min = tk(t.min), t.max = tk(t.max);
}
function tB(t, e, i) {
  return "position" === t || "preserve-aspect" === t && !(0, W.isNear)(tt(e), tt(i), .2);
}
function tF(t) {
  return t !== t.root && t.scroll?.wasRoot;
}
var tj = _module17696;
let tI = tc({
    attachResizeListener: (t, e) => (0, tj.addDomEvent)(t, "resize", e),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
      y: document.documentElement.scrollTop || document.body?.scrollTop || 0
    }),
    checkIsScrollRoot: () => !0
  }),
  tO = {
    current: void 0
  },
  tN = tc({
    measureScroll: t => ({
      x: t.scrollLeft,
      y: t.scrollTop
    }),
    defaultParent: () => {
      if (!tO.current) {
        let t = new tI({});
        t.mount(window), t.setOptions({
          layoutScroll: !0
        }), tO.current = t;
      }
      return tO.current;
    },
    resetTransform: (t, e) => {
      t.style.transform = void 0 !== e ? e : "none";
    },
    checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
  });
const _export_HTMLProjectionNode = tN;
export { _export_HTMLProjectionNode as HTMLProjectionNode };

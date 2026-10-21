// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
let e;
let ty = t => t;
let tx = {};
let tb = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];
function tT(t, e) {
  let i = !1,
    n = !0,
    s = {
      delta: 0,
      timestamp: 0,
      isProcessing: !1
    },
    r = () => i = !0,
    o = tb.reduce((t, e) => (t[e] = function (t) {
      let e = new Set(),
        i = new Set(),
        n = !1,
        s = !1,
        r = new WeakSet(),
        o = {
          delta: 0,
          timestamp: 0,
          isProcessing: !1
        };
      function a(e) {
        r.has(e) && (l.schedule(e), t()), e(o);
      }
      let l = {
        schedule: (t, s = !1, o = !1) => {
          let a = o && n ? e : i;
          return s && r.add(t), a.add(t), t;
        },
        cancel: t => {
          i.delete(t), r.delete(t);
        },
        process: t => {
          if (o = t, n) {
            s = !0;
            return;
          }
          n = !0;
          let r = e;
          e = i, i = r, e.forEach(a), e.clear(), n = !1, s && (s = !1, l.process(t));
        }
      };
      return l;
    }(r), t), {}),
    {
      setup: a,
      read: l,
      resolveKeyframes: u,
      preUpdate: h,
      update: c,
      preRender: d,
      render: p,
      postRender: m
    } = o,
    f = () => {
      let r = tx.useManualTiming,
        o = r ? s.timestamp : performance.now();
      i = !1, r || (s.delta = n ? 1e3 / 60 : Math.max(Math.min(o - s.timestamp, 40), 1)), s.timestamp = o, s.isProcessing = !0, a.process(s), l.process(s), u.process(s), h.process(s), c.process(s), d.process(s), p.process(s), m.process(s), s.isProcessing = !1, i && e && (n = !1, t(f));
    };
  return {
    schedule: tb.reduce((e, r) => {
      let a = o[r];
      return e[r] = (e, r = !1, o = !1) => (!i && (i = !0, n = !0, s.isProcessing || t(f)), a.schedule(e, r, o)), e;
    }, {}),
    cancel: t => {
      for (let e = 0; e < tb.length; e++) o[tb[e]].cancel(t);
    },
    state: s,
    steps: o
  };
}
let {
  schedule: tw,
  cancel: tS,
  state: tP,
  steps: tM
} = tT("u" > typeof requestAnimationFrame ? requestAnimationFrame : ty, !0);
function tN(t, e) {
  -1 === t.indexOf(e) && t.push(e);
}
function tU(t, e) {
  let i = t.indexOf(e);
  i > -1 && t.splice(i, 1);
}
class t$ {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return tN(this.subscriptions, t), () => tU(this.subscriptions, t);
  }
  notify(t, e, i) {
    let n = this.subscriptions.length;
    if (n) if (1 === n) this.subscriptions[0](t, e, i);else for (let s = 0; s < n; s++) {
      let n = this.subscriptions[s];
      n && n(t, e, i);
    }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function t3() {
  e = void 0;
}
let t4 = {
  now: () => (void 0 === e && t4.set(tP.isProcessing || tx.useManualTiming ? tP.timestamp : performance.now()), e),
  set: t => {
    e = t, queueMicrotask(t3);
  }
};
let t6 = (t, e) => e ? 1e3 / e * t : 0;
let t7 = {
  current: void 0
};
class t8 {
  constructor(t, e = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = t => {
      let e = t4.now();
      if (this.updatedAt !== e && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(t), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents)) for (let t of this.dependents) t.dirty();
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = e.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = t4.now(), null === this.canTrackVelocity && void 0 !== t && (this.canTrackVelocity = !isNaN(parseFloat(this.current)));
  }
  setPrevFrameValue(t = this.current) {
    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt;
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, e) {
    this.events[t] || (this.events[t] = new t$());
    let i = this.events[t].add(e);
    return "change" === t ? () => {
      i(), tw.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : i;
  }
  clearListeners() {
    for (let t in this.events) this.events[t].clear();
  }
  attach(t, e) {
    this.passiveEffect = t, this.stopPassiveEffect = e;
  }
  set(t) {
    this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t);
  }
  setWithVelocity(t, e, i) {
    this.set(e), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - i;
  }
  jump(t, e = !0) {
    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, e && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(t) {
    this.dependents || (this.dependents = new Set()), this.dependents.add(t);
  }
  removeDependent(t) {
    this.dependents && this.dependents.delete(t);
  }
  get() {
    return t7.current && t7.current.push(this), this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    let t = t4.now();
    if (!this.canTrackVelocity || void 0 === this.prevFrameValue || t - this.updatedAt > 30) return 0;
    let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
    return t6(parseFloat(this.current) - parseFloat(this.prevFrameValue), e);
  }
  start(t) {
    return this.stop(), new Promise(e => {
      this.hasAnimated = !0, this.animation = t(e), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function et(t, e) {
  return new t8(t, e);
}
const _export_collectMotionValues = t7;
const _export_motionValue = et;
export { _export_collectMotionValues as collectMotionValues, _export_motionValue as motionValue };

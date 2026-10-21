// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
let Z = () => {};
let ty = t => t;
let tI = t => 1e3 * t,
  tO = t => t / 1e3;
function tW(t, e, i) {
  e.startsWith("--") ? t.style.setProperty(e, i) : t.style[e] = i;
}
function tG(t) {
  let e;
  return () => (void 0 === e && (e = t()), e);
}
let tz = {};
function tH(t, e) {
  let i = tG(t);
  return () => tz[e] ?? i();
}
let tY = tH(() => void 0 !== window.ScrollTimeline, "scrollTimeline"),
  tK = t => null !== t;
function tX(t, {
  repeat: e,
  repeatType: i = "loop"
}, n, s = 1) {
  let r = t.filter(tK),
    o = s < 0 || e && "loop" !== i && e % 2 == 1 ? 0 : r.length - 1;
  return o && void 0 !== n ? n : r[o];
}
class tq {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise(t => {
      this.resolve = t;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(t, e) {
    return this.finished.then(t, e);
  }
}
let tZ = t => Array.isArray(t) && "number" == typeof t[0];
let t_ = tH(() => {
    try {
      document.createElement("div").animate({
        opacity: 0
      }, {
        easing: "linear(0, 1)"
      });
    } catch (t) {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  tJ = (t, e, i = 10) => {
    let n = "",
      s = Math.max(Math.round(e / i), 2);
    for (let e = 0; e < s; e++) n += Math.round(1e4 * t(e / (s - 1))) / 1e4 + ", ";
    return `linear(${n.substring(0, n.length - 2)})`;
  };
let tQ = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
  t0 = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: tQ([0, .65, .55, 1]),
    circOut: tQ([.55, 0, 1, .45]),
    backIn: tQ([.31, .01, .66, -.59]),
    backOut: tQ([.33, 1.53, .69, .99])
  };
function t1(t) {
  return "function" == typeof t && "applyToOptions" in t;
}
class t9 extends tq {
  constructor(t) {
    if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !t) return;
    const {
      element: e,
      name: i,
      keyframes: n,
      pseudoElement: s,
      allowFlatten: r = !1,
      finalKeyframe: o,
      onComplete: a
    } = t;
    this.isPseudoElement = !!s, this.allowFlatten = r, this.options = t, Z("string" != typeof t.type, 'Mini animate() doesn\'t support "type" as a string.', "mini-spring");
    const l = function ({
      type: t,
      ...e
    }) {
      return t1(t) && t_() ? t.applyToOptions(e) : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = "easeOut"), e);
    }(t);
    this.animation = function (t, e, i, {
      delay: n = 0,
      duration: s = 300,
      repeat: r = 0,
      repeatType: o = "loop",
      ease: a = "easeOut",
      times: l
    } = {}, u) {
      let h = {
        [e]: i
      };
      l && (h.offset = l);
      let c = function t(e, i) {
        if (e) return "function" == typeof e ? t_() ? tJ(e, i) : "ease-out" : tZ(e) ? tQ(e) : Array.isArray(e) ? e.map(e => t(e, i) || t0.easeOut) : t0[e];
      }(a, s);
      Array.isArray(c) && (h.easing = c);
      let d = {
        delay: n,
        duration: s,
        easing: Array.isArray(c) ? "linear" : c,
        fill: "both",
        iterations: r + 1,
        direction: "reverse" === o ? "alternate" : "normal"
      };
      return u && (d.pseudoElement = u), t.animate(h, d);
    }(e, i, n, l, s), !1 === l.autoplay && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !s) {
        let t = tX(n, this.options, o, this.speed);
        this.updateMotionValue && this.updateMotionValue(t), tW(e, i, t), this.animation.cancel();
      }
      a?.(), this.notifyFinished();
    };
  }
  play() {
    this.isStopped || (this.manualStartTime = null, this.animation.play(), "finished" === this.state && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch (t) {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    let {
      state: t
    } = this;
    "idle" !== t && "finished" !== t && (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    let t = this.options?.element;
    !this.isPseudoElement && t?.isConnected && this.animation.commitStyles?.();
  }
  get duration() {
    return tO(Number(this.animation.effect?.getComputedTiming?.().duration || 0));
  }
  get iterationDuration() {
    let {
      delay: t = 0
    } = this.options || {};
    return this.duration + tO(t);
  }
  get time() {
    return tO(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    let e = null !== this.finishedTime;
    this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = tI(t), e && this.animation.pause();
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(t) {
    t < 0 && (this.finishedTime = null), this.animation.playbackRate = t;
  }
  get state() {
    return null !== this.finishedTime ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(t) {
    this.manualStartTime = this.animation.startTime = t;
  }
  attachTimeline({
    timeline: t,
    rangeStart: e,
    rangeEnd: i,
    observe: n
  }) {
    return (this.allowFlatten && this.animation.effect?.updateTiming({
      easing: "linear"
    }), this.animation.onfinish = null, t && tY()) ? (this.animation.timeline = t, e && (this.animation.rangeStart = e), i && (this.animation.rangeEnd = i), ty) : n(this);
  }
}
const _export_NativeAnimation = t9;
export { _export_NativeAnimation as NativeAnimation };

// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
let i = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"];
let tf = new Set(["x", "y", "z"]),
  tg = i.filter(t => !tf.has(t));
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
let tA = new Set(),
  tV = !1,
  tE = !1,
  tC = !1;
function tD() {
  if (tE) {
    let t = Array.from(tA).filter(t => t.needsMeasurement),
      e = new Set(t.map(t => t.element)),
      i = new Map();
    e.forEach(t => {
      let e,
        n = (e = [], tg.forEach(i => {
          let n = t.getValue(i);
          void 0 !== n && (e.push([i, n.get()]), n.set(+!!i.startsWith("scale")));
        }), e);
      n.length && (i.set(t, n), t.render());
    }), t.forEach(t => t.measureInitialState()), e.forEach(t => {
      t.render();
      let e = i.get(t);
      e && e.forEach(([e, i]) => {
        t.getValue(e)?.set(i);
      });
    }), t.forEach(t => t.measureEndState()), t.forEach(t => {
      void 0 !== t.suspendedScrollY && window.scrollTo(0, t.suspendedScrollY);
    });
  }
  tE = !1, tV = !1, tA.forEach(t => t.complete(tC)), tA.clear();
}
function tR() {
  tA.forEach(t => {
    t.readKeyframes(), t.needsMeasurement && (tE = !0);
  });
}
class tk {
  constructor(t, e, i, n, s, r = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = e, this.name = i, this.motionValue = n, this.element = s, this.isAsync = r;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (tA.add(this), tV || (tV = !0, tw.read(tR), tw.resolveKeyframes(tD))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    let {
      unresolvedKeyframes: t,
      name: e,
      element: i,
      motionValue: n
    } = this;
    if (null === t[0]) {
      let s = n?.get(),
        r = t[t.length - 1];
      if (void 0 !== s) t[0] = s;else if (i && e) {
        let n = i.readValue(e, r);
        null != n && (t[0] = n);
      }
      void 0 === t[0] && (t[0] = r), n && void 0 === s && n.set(t[0]);
    }
    for (let e = 1; e < t.length; e++) t[e] ?? (t[e] = t[e - 1]);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(t = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), tA.delete(this);
  }
  cancel() {
    "scheduled" === this.state && (tA.delete(this), this.state = "pending");
  }
  resume() {
    "pending" === this.state && this.scheduleResolve();
  }
}
const _export_KeyframeResolver = tk;
const _export_flushKeyframeResolvers = function () {
  tC = !0, tR(), tD(), tC = !1;
};
export { _export_KeyframeResolver as KeyframeResolver, _export_flushKeyframeResolvers as flushKeyframeResolvers };

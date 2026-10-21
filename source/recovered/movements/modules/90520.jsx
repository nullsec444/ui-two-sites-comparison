// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
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
  schedule: t5
} = tT(queueMicrotask, !1);
const _export_microtask = t5;
export { _export_microtask as microtask };

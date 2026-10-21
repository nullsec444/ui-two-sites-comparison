// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module45032 from "./45032.js";
import * as _module56032 from "./56032.js";
import * as _module96482 from "./96482.js";
import * as _module57851 from "./57851.js";
import * as _module34412 from "./34412.js";
import * as _module38783 from "./38783.js";
import * as _module71955 from "./71955.js";
import * as _module7642 from "./7642.js";
var t = _module45032,
  n = _module56032,
  r = _module96482,
  i = _module57851,
  o = _module34412;
let l = (0, i.isReactVersionAtLeast)(19) ? function (e, r, i, l, s) {
  let u,
    a = (0, o.getInstance)();
  if (!a) {
    let o;
    return o = t.useCallback(() => r(e.getSnapshot(), i, l, s), [e, r, i, l, s]), (0, n.useSyncExternalStore)(e.subscribe, o, o);
  }
  let c = a.syncIndex;
  return a.syncIndex += 1, a.didInitialize ? (u = a.syncHooks[c]).store === e && u.selector === r && Object.is(u.a1, i) && Object.is(u.a2, l) && Object.is(u.a3, s) || (u.store !== e && (a.didChangeStore = !0), u.store = e, u.selector = r, u.a1 = i, u.a2 = l, u.a3 = s, u.value = r(e.getSnapshot(), i, l, s)) : (u = {
    store: e,
    selector: r,
    a1: i,
    a2: l,
    a3: s,
    value: r(e.getSnapshot(), i, l, s)
  }, a.syncHooks.push(u)), u.value;
} : function (e, t, n, i, o) {
  return (0, r.useSyncExternalStoreWithSelector)(e.subscribe, e.getSnapshot, e.getSnapshot, e => t(e, n, i, o));
};
class s {
  constructor(e) {
    this.state = e, this.listeners = new Set(), this.updateTick = 0;
  }
  subscribe = e => (this.listeners.add(e), () => {
    this.listeners.delete(e);
  });
  getSnapshot = () => this.state;
  setState(e) {
    if (this.state === e) return;
    this.state = e, this.updateTick += 1;
    let t = this.updateTick;
    for (let n of this.listeners) {
      if (t !== this.updateTick) return;
      n(e);
    }
  }
  update(e) {
    for (let t in e) if (!Object.is(this.state[t], e[t])) return void this.setState({
      ...this.state,
      ...e
    });
  }
  set(e, t) {
    Object.is(this.state[e], t) || this.setState({
      ...this.state,
      [e]: t
    });
  }
  notifyAll() {
    let e = {
      ...this.state
    };
    this.setState(e);
  }
  use(e, t, n, r) {
    return l(this, e, t, n, r);
  }
}
var u = _module38783,
  a = _module71955,
  c = _module7642;
class f extends s {
  constructor(e, t = {}, n) {
    super(e), this.context = t, this.selectors = n;
  }
  useSyncedValue(e, n) {
    t.useDebugValue(e);
    let r = this;
    (0, a.useIsoLayoutEffect)(() => {
      r.state[e] !== n && r.set(e, n);
    }, [r, e, n]);
  }
  useSyncedValueWithCleanup(e, t) {
    let n = this;
    (0, a.useIsoLayoutEffect)(() => (n.state[e] !== t && n.set(e, t), () => {
      n.set(e, void 0);
    }), [n, e, t]);
  }
  useSyncedValues(e) {
    let t = this,
      n = Object.values(e);
    (0, a.useIsoLayoutEffect)(() => {
      t.update(e);
    }, [t, ...n]);
  }
  useControlledProp(e, n) {
    t.useDebugValue(e);
    let r = this,
      i = void 0 !== n;
    (0, a.useIsoLayoutEffect)(() => {
      i && !Object.is(r.state[e], n) && r.setState({
        ...r.state,
        [e]: n
      });
    }, [r, e, n, i]);
  }
  select(e, t, n, r) {
    return (0, this.selectors[e])(this.state, t, n, r);
  }
  useState(e, n, r, i) {
    return t.useDebugValue(e), l(this, this.selectors[e], n, r, i);
  }
  useContextCallback(e, n) {
    t.useDebugValue(e);
    let r = (0, u.useStableCallback)(n ?? c.NOOP);
    this.context[e] = r;
  }
  useStateSetter(e) {
    let n = t.useRef(void 0);
    return void 0 === n.current && (n.current = t => {
      this.set(e, t);
    }), n.current;
  }
  observe(e, t) {
    let n,
      r = (n = "function" == typeof e ? e : this.selectors[e])(this.state);
    return t(r, r, this), this.subscribe(e => {
      let i = n(e);
      if (!Object.is(r, i)) {
        let e = r;
        r = i, t(i, e, this);
      }
    });
  }
}
const _export_ReactStore = f;
export { _export_ReactStore as ReactStore };

// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
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
const _export_SubscriptionManager = t$;
export { _export_SubscriptionManager as SubscriptionManager };

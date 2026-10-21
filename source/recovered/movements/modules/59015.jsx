// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module35353 from "./35353.js";
let n, r;
var rT = _module35353,
  rR = class extends Error {
    constructor(e) {
      super(e), this.name = "ShikiError";
    }
  };
function rM() {
  return "u" > typeof performance ? performance.now() : Date.now();
}
let rN = (e, t) => e + (t - e % t) % t;
async function rP(e) {
  let t,
    n,
    r = {};
  function i(e) {
    n = e, r.HEAPU8 = new Uint8Array(e), r.HEAPU32 = new Uint32Array(e);
  }
  let a = "u" > typeof TextDecoder ? new TextDecoder("utf8") : void 0;
  function o(e, t) {
    return e ? function (e, t, n = 1024) {
      let r = t + n,
        i = t;
      for (; e[i] && !(i >= r);) ++i;
      if (i - t > 16 && e.buffer && a) return a.decode(e.subarray(t, i));
      let o = "";
      for (; t < i;) {
        let n = e[t++];
        if (!(128 & n)) {
          o += String.fromCharCode(n);
          continue;
        }
        let r = 63 & e[t++];
        if ((224 & n) == 192) {
          o += String.fromCharCode((31 & n) << 6 | r);
          continue;
        }
        let i = 63 & e[t++];
        if ((n = (240 & n) == 224 ? (15 & n) << 12 | r << 6 | i : (7 & n) << 18 | r << 12 | i << 6 | 63 & e[t++]) < 65536) o += String.fromCharCode(n);else {
          let e = n - 65536;
          o += String.fromCharCode(55296 | e >> 10, 56320 | 1023 & e);
        }
      }
      return o;
    }(r.HEAPU8, e, t) : "";
  }
  let s = {
    emscripten_get_now: rM,
    emscripten_memcpy_big: function (e, t, n) {
      r.HEAPU8.copyWithin(e, t, t + n);
    },
    emscripten_resize_heap: function (e) {
      let a = r.HEAPU8.length;
      if ((e >>>= 0) > 0x80000000) return !1;
      for (let r = 1; r <= 4; r *= 2) {
        let o = a * (1 + .2 / r);
        if (o = Math.min(o, e + 0x6000000), function (e) {
          try {
            return t.grow(e - n.byteLength + 65535 >>> 16), i(t.buffer), 1;
          } catch {}
        }(Math.min(0x80000000, rN(Math.max(e, o), 65536)))) return !0;
      }
      return !1;
    },
    fd_write: () => 0
  };
  async function l() {
    let n = await e({
      env: s,
      wasi_snapshot_preview1: s
    });
    i((t = n.memory).buffer), Object.assign(r, n), r.UTF8ToString = o;
  }
  return await l(), r;
}
var rI = Object.defineProperty,
  rO = (e, t, n) => {
    let r;
    return (r = "symbol" != typeof t ? t + "" : t) in e ? rI(e, r, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: n
    }) : e[r] = n;
  };
let rD = null;
class r$ {
  constructor(e) {
    rO(this, "utf16Length"), rO(this, "utf8Length"), rO(this, "utf16Value"), rO(this, "utf8Value"), rO(this, "utf16OffsetToUtf8"), rO(this, "utf8OffsetToUtf16");
    const t = e.length,
      n = r$._utf8ByteLength(e),
      r = n !== t,
      i = r ? new Uint32Array(t + 1) : null;
    r && (i[t] = n);
    const a = r ? new Uint32Array(n + 1) : null;
    r && (a[n] = t);
    const o = new Uint8Array(n);
    let s = 0;
    for (let n = 0; n < t; n++) {
      const l = e.charCodeAt(n);
      let d = l,
        u = !1;
      if (l >= 55296 && l <= 56319 && n + 1 < t) {
        const t = e.charCodeAt(n + 1);
        t >= 56320 && t <= 57343 && (d = (l - 55296 << 10) + 65536 | t - 56320, u = !0);
      }
      r && (i[n] = s, u && (i[n + 1] = s), d <= 127 ? a[s + 0] = n : d <= 2047 ? (a[s + 0] = n, a[s + 1] = n) : d <= 65535 ? (a[s + 0] = n, a[s + 1] = n, a[s + 2] = n) : (a[s + 0] = n, a[s + 1] = n, a[s + 2] = n, a[s + 3] = n)), d <= 127 ? o[s++] = d : (d <= 2047 ? o[s++] = 192 | (1984 & d) >>> 6 : (d <= 65535 ? o[s++] = 224 | (61440 & d) >>> 12 : (o[s++] = 240 | (1835008 & d) >>> 18, o[s++] = 128 | (258048 & d) >>> 12), o[s++] = 128 | (4032 & d) >>> 6), o[s++] = 128 | (63 & d) >>> 0), u && n++;
    }
    this.utf16Length = t, this.utf8Length = n, this.utf16Value = e, this.utf8Value = o, this.utf16OffsetToUtf8 = i, this.utf8OffsetToUtf16 = a;
  }
  static _utf8ByteLength(e) {
    let t = 0;
    for (let n = 0, r = e.length; n < r; n++) {
      let i = e.charCodeAt(n),
        a = i,
        o = !1;
      if (i >= 55296 && i <= 56319 && n + 1 < r) {
        let t = e.charCodeAt(n + 1);
        t >= 56320 && t <= 57343 && (a = (i - 55296 << 10) + 65536 | t - 56320, o = !0);
      }
      a <= 127 ? t += 1 : a <= 2047 ? t += 2 : a <= 65535 ? t += 3 : t += 4, o && n++;
    }
    return t;
  }
  createString(e) {
    let t = e.omalloc(this.utf8Length);
    return e.HEAPU8.set(this.utf8Value, t), t;
  }
}
let rB = class e {
  constructor(t) {
    if (rO(this, "id", ++e.LAST_ID), rO(this, "_onigBinding"), rO(this, "content"), rO(this, "utf16Length"), rO(this, "utf8Length"), rO(this, "utf16OffsetToUtf8"), rO(this, "utf8OffsetToUtf16"), rO(this, "ptr"), !rD) throw new rR("Must invoke loadWasm first.");
    this._onigBinding = rD, this.content = t;
    const n = new r$(t);
    this.utf16Length = n.utf16Length, this.utf8Length = n.utf8Length, this.utf16OffsetToUtf8 = n.utf16OffsetToUtf8, this.utf8OffsetToUtf16 = n.utf8OffsetToUtf16, this.utf8Length < 1e4 && !e._sharedPtrInUse ? (e._sharedPtr || (e._sharedPtr = rD.omalloc(1e4)), e._sharedPtrInUse = !0, rD.HEAPU8.set(n.utf8Value, e._sharedPtr), this.ptr = e._sharedPtr) : this.ptr = n.createString(rD);
  }
  convertUtf8OffsetToUtf16(e) {
    return this.utf8OffsetToUtf16 ? e < 0 ? 0 : e > this.utf8Length ? this.utf16Length : this.utf8OffsetToUtf16[e] : e;
  }
  convertUtf16OffsetToUtf8(e) {
    return this.utf16OffsetToUtf8 ? e < 0 ? 0 : e > this.utf16Length ? this.utf8Length : this.utf16OffsetToUtf8[e] : e;
  }
  dispose() {
    this.ptr === e._sharedPtr ? e._sharedPtrInUse = !1 : this._onigBinding.ofree(this.ptr);
  }
};
class rU {
  constructor(e) {
    if (rO(this, "_onigBinding"), rO(this, "_ptr"), !rD) throw new rR("Must invoke loadWasm first.");
    const t = [],
      n = [];
    for (let r = 0, i = e.length; r < i; r++) {
      const i = new r$(e[r]);
      t[r] = i.createString(rD), n[r] = i.utf8Length;
    }
    const r = rD.omalloc(4 * e.length);
    rD.HEAPU32.set(t, r / 4);
    const i = rD.omalloc(4 * e.length);
    rD.HEAPU32.set(n, i / 4);
    const a = rD.createOnigScanner(r, i, e.length);
    for (let n = 0, r = e.length; n < r; n++) rD.ofree(t[n]);
    rD.ofree(i), rD.ofree(r), 0 === a && function (e) {
      throw new rR(e.UTF8ToString(e.getLastOnigError()));
    }(rD), this._onigBinding = rD, this._ptr = a;
  }
  dispose() {
    this._onigBinding.freeOnigScanner(this._ptr);
  }
  findNextMatchSync(e, t, n) {
    let r = 0;
    if ("number" == typeof n && (r = n), "string" == typeof e) {
      e = new rB(e);
      let n = this._findNextMatchSync(e, t, !1, r);
      return e.dispose(), n;
    }
    return this._findNextMatchSync(e, t, !1, r);
  }
  _findNextMatchSync(e, t, n, r) {
    let i = this._onigBinding,
      a = i.findNextOnigScannerMatch(this._ptr, e.id, e.ptr, e.utf8Length, e.convertUtf16OffsetToUtf8(t), r);
    if (0 === a) return null;
    let o = i.HEAPU32,
      s = a / 4,
      l = o[s++],
      d = o[s++],
      u = [];
    for (let t = 0; t < d; t++) {
      let n = e.convertUtf8OffsetToUtf16(o[s++]),
        r = e.convertUtf8OffsetToUtf16(o[s++]);
      u[t] = {
        start: n,
        end: r,
        length: r - n
      };
    }
    return {
      index: l,
      captureIndices: u
    };
  }
}
function rz(e) {
  return n || (n = async function () {
    rD = await rP(async t => {
      let n = e;
      if ("function" == typeof (n = await n) && (n = await n(t)), "function" == typeof n && (n = await n(t)), "function" == typeof n.instantiator) n = await n.instantiator(t);else if ("function" == typeof n.default) n = await n.default(t);else {
        var r, i, a, o;
        if (void 0 !== n.data && (n = n.data), r = n, "u" > typeof Response && r instanceof Response) {
          n = "function" == typeof WebAssembly.instantiateStreaming ? await (a = n, e => WebAssembly.instantiateStreaming(a, e))(t) : await (o = n, async e => {
            let t = await o.arrayBuffer();
            return WebAssembly.instantiate(t, e);
          })(t);
        } else (i = n, "u" > typeof ArrayBuffer && (i instanceof ArrayBuffer || ArrayBuffer.isView(i)) || void 0 !== rT.Buffer && rT.Buffer.isBuffer?.(i) || "u" > typeof SharedArrayBuffer && i instanceof SharedArrayBuffer || "u" > typeof Uint32Array && i instanceof Uint32Array || n instanceof WebAssembly.Module) ? n = await rH(n)(t) : "default" in n && n.default instanceof WebAssembly.Module && (n = await rH(n.default)(t));
      }
      return "instance" in n && (n = n.instance), "exports" in n && (n = n.exports), n;
    });
  }());
}
function rH(e) {
  return t => WebAssembly.instantiate(e, t);
}
async function rF(e) {
  return e && (await rz(e)), {
    createScanner: e => new rU(e.map(e => "string" == typeof e ? e : e.source)),
    createString: e => new rB(e)
  };
}
const _export_createOnigurumaEngine = rF;
const _export_getDefaultWasmLoader = function () {
  return r;
};
const _export_loadWasm = rz;
const _export_setDefaultWasmLoader = function (e) {
  r = e;
};
export { _export_createOnigurumaEngine as createOnigurumaEngine, _export_getDefaultWasmLoader as getDefaultWasmLoader, _export_loadWasm as loadWasm, _export_setDefaultWasmLoader as setDefaultWasmLoader };

// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import { a as e } from "./rolldown-runtime-B0Z9INg1.js";
import { n as t, t as n } from "./jsx-runtime-Ciaf_P-h.js";
import { _ as r, c as i, f as a, g as o, i as s, l as c, m as l, n as u, o as d, p as f, s as p, y as m } from "./dist-Dgli2vvz.js";
import { $ as ee, A as h, B as g, C as te, Ct as _, D as ne, E as re, F as v, G as ie, H as ae, I as oe, J as se, K as ce, L as y, M as b, N as x, O as S, P as le, Q as ue, R as C, S as de, St as w, T as fe, U as pe, V as me, W as he, X as T, Y as ge, Z as _e, _ as ve, _t as ye, a as E, at as D, b as be, bt as xe, c as Se, ct as Ce, d as we, dt as O, et as Te, f as Ee, ft as De, g as Oe, gt as ke, h as Ae, ht as k, i as je, it as Me, j as Ne, k as Pe, l as Fe, lt as A, m as Ie, mt as Le, n as Re, nt as ze, o as Be, ot as Ve, p as He, pt as Ue, q as We, r as Ge, rt as Ke, s as qe, st as Je, t as Ye, tt as Xe, u as Ze, ut as j, v as Qe, vt as $e, w as et, wt as tt, x as nt, xt as rt, y as it, yt as at, z as ot } from "./dist-BXz-sUdB.js";
var st = class e {
    static create(t, n, r, i, a) {
      let o = i + (i << 8) + t + (n << 4) | 0;
      return new e(t, n, r, o, a, [], []);
    }
    constructor(e, t, n, r, i, o, s) {
      this.type = e, this.value = t, this.from = n, this.hash = r, this.end = i, this.children = o, this.positions = s, this.hashProp = [[a.contextHash, r]];
    }
    addChild(e, t) {
      e.prop(a.contextHash) != this.hash && (e = new r(e.type, e.children, e.positions, e.length, this.hashProp)), this.children.push(e), this.positions.push(t);
    }
    toTree(e, t = this.end) {
      let n = this.children.length - 1;
      return n >= 0 && (t = Math.max(t, this.positions[n] + this.children[n].length + this.from)), new r(e.types[this.type], this.children, this.positions, t - this.from).balance({
        makeTree: (e, t, n) => new r(l.none, e, t, n, this.hashProp)
      });
    }
  },
  M;
(function (e) {
  e[e.Document = 1] = `Document`, e[e.CodeBlock = 2] = `CodeBlock`, e[e.FencedCode = 3] = `FencedCode`, e[e.Blockquote = 4] = `Blockquote`, e[e.HorizontalRule = 5] = `HorizontalRule`, e[e.BulletList = 6] = `BulletList`, e[e.OrderedList = 7] = `OrderedList`, e[e.ListItem = 8] = `ListItem`, e[e.ATXHeading1 = 9] = `ATXHeading1`, e[e.ATXHeading2 = 10] = `ATXHeading2`, e[e.ATXHeading3 = 11] = `ATXHeading3`, e[e.ATXHeading4 = 12] = `ATXHeading4`, e[e.ATXHeading5 = 13] = `ATXHeading5`, e[e.ATXHeading6 = 14] = `ATXHeading6`, e[e.SetextHeading1 = 15] = `SetextHeading1`, e[e.SetextHeading2 = 16] = `SetextHeading2`, e[e.HTMLBlock = 17] = `HTMLBlock`, e[e.LinkReference = 18] = `LinkReference`, e[e.Paragraph = 19] = `Paragraph`, e[e.CommentBlock = 20] = `CommentBlock`, e[e.ProcessingInstructionBlock = 21] = `ProcessingInstructionBlock`, e[e.Escape = 22] = `Escape`, e[e.Entity = 23] = `Entity`, e[e.HardBreak = 24] = `HardBreak`, e[e.Emphasis = 25] = `Emphasis`, e[e.StrongEmphasis = 26] = `StrongEmphasis`, e[e.Link = 27] = `Link`, e[e.Image = 28] = `Image`, e[e.InlineCode = 29] = `InlineCode`, e[e.HTMLTag = 30] = `HTMLTag`, e[e.Comment = 31] = `Comment`, e[e.ProcessingInstruction = 32] = `ProcessingInstruction`, e[e.Autolink = 33] = `Autolink`, e[e.HeaderMark = 34] = `HeaderMark`, e[e.QuoteMark = 35] = `QuoteMark`, e[e.ListMark = 36] = `ListMark`, e[e.LinkMark = 37] = `LinkMark`, e[e.EmphasisMark = 38] = `EmphasisMark`, e[e.CodeMark = 39] = `CodeMark`, e[e.CodeText = 40] = `CodeText`, e[e.CodeInfo = 41] = `CodeInfo`, e[e.LinkTitle = 42] = `LinkTitle`, e[e.LinkLabel = 43] = `LinkLabel`, e[e.URL = 44] = `URL`;
})(M ||= {});
var ct = class {
    constructor(e, t) {
      this.start = e, this.content = t, this.marks = [], this.parsers = [];
    }
  },
  lt = class {
    constructor() {
      this.text = ``, this.baseIndent = 0, this.basePos = 0, this.depth = 0, this.markers = [], this.pos = 0, this.indent = 0, this.next = -1;
    }
    forward() {
      this.basePos > this.pos && this.forwardInner();
    }
    forwardInner() {
      let e = this.skipSpace(this.basePos);
      this.indent = this.countIndent(e, this.pos, this.indent), this.pos = e, this.next = e == this.text.length ? -1 : this.text.charCodeAt(e);
    }
    skipSpace(e) {
      return ft(this.text, e);
    }
    reset(e) {
      for (this.text = e, this.baseIndent = this.basePos = this.pos = this.indent = 0, this.forwardInner(), this.depth = 1; this.markers.length;) this.markers.pop();
    }
    moveBase(e) {
      this.basePos = e, this.baseIndent = this.countIndent(e, this.pos, this.indent);
    }
    moveBaseColumn(e) {
      this.baseIndent = e, this.basePos = this.findColumn(e);
    }
    addMarker(e) {
      this.markers.push(e);
    }
    countIndent(e, t = 0, n = 0) {
      for (let r = t; r < e; r++) n += this.text.charCodeAt(r) == 9 ? 4 - n % 4 : 1;
      return n;
    }
    findColumn(e) {
      let t = 0;
      for (let n = 0; t < this.text.length && n < e; t++) n += this.text.charCodeAt(t) == 9 ? 4 - n % 4 : 1;
      return t;
    }
    scrub() {
      if (!this.baseIndent) return this.text;
      let e = ``;
      for (let t = 0; t < this.basePos; t++) e += ` `;
      return e + this.text.slice(this.basePos);
    }
  };
function ut(e, t, n) {
  if (n.pos == n.text.length || e != t.block && n.indent >= t.stack[n.depth + 1].value + n.baseIndent) return !0;
  if (n.indent >= n.baseIndent + 4) return !1;
  let r = (e.type == M.OrderedList ? yt : vt)(n, t, !1);
  return r > 0 && (e.type != M.BulletList || gt(n, t, !1) < 0) && n.text.charCodeAt(n.pos + r - 1) == e.value;
}
var dt = {
  [M.Blockquote](e, t, n) {
    return n.next == 62 && (n.markers.push(I(M.QuoteMark, t.lineStart + n.pos, t.lineStart + n.pos + 1)), n.moveBase(n.pos + (N(n.text.charCodeAt(n.pos + 1)) ? 2 : 1)), e.end = t.lineStart + n.text.length, !0);
  },
  [M.ListItem](e, t, n) {
    return n.indent < n.baseIndent + e.value && n.next > -1 ? !1 : (n.moveBaseColumn(n.baseIndent + e.value), !0);
  },
  [M.OrderedList]: ut,
  [M.BulletList]: ut,
  [M.Document]() {
    return !0;
  }
};
function N(e) {
  return e == 32 || e == 9 || e == 10 || e == 13;
}
function ft(e, t = 0) {
  for (; t < e.length && N(e.charCodeAt(t));) t++;
  return t;
}
function pt(e, t, n) {
  for (; t > n && N(e.charCodeAt(t - 1));) t--;
  return t;
}
function mt(e) {
  if (e.next != 96 && e.next != 126) return -1;
  let t = e.pos + 1;
  for (; t < e.text.length && e.text.charCodeAt(t) == e.next;) t++;
  if (t < e.pos + 3) return -1;
  if (e.next == 96) {
    for (let n = t; n < e.text.length; n++) if (e.text.charCodeAt(n) == 96) return -1;
  }
  return t;
}
function ht(e) {
  return e.next == 62 ? e.text.charCodeAt(e.pos + 1) == 32 ? 2 : 1 : -1;
}
function gt(e, t, n) {
  if (e.next != 42 && e.next != 45 && e.next != 95) return -1;
  let r = 1;
  for (let t = e.pos + 1; t < e.text.length; t++) {
    let n = e.text.charCodeAt(t);
    if (n == e.next) r++;else if (!N(n)) return -1;
  }
  return n && e.next == 45 && xt(e) > -1 && e.depth == t.stack.length && t.parser.leafBlockParsers.indexOf(Mt.SetextHeading) > -1 || r < 3 ? -1 : 1;
}
function _t(e, t) {
  for (let n = e.stack.length - 1; n >= 0; n--) if (e.stack[n].type == t) return !0;
  return !1;
}
function vt(e, t, n) {
  return (e.next == 45 || e.next == 43 || e.next == 42) && (e.pos == e.text.length - 1 || N(e.text.charCodeAt(e.pos + 1))) && (!n || _t(t, M.BulletList) || e.skipSpace(e.pos + 2) < e.text.length) ? 1 : -1;
}
function yt(e, t, n) {
  let r = e.pos,
    i = e.next;
  for (; i >= 48 && i <= 57;) {
    if (r++, r == e.text.length) return -1;
    i = e.text.charCodeAt(r);
  }
  return r == e.pos || r > e.pos + 9 || i != 46 && i != 41 || r < e.text.length - 1 && !N(e.text.charCodeAt(r + 1)) || n && !_t(t, M.OrderedList) && (e.skipSpace(r + 1) == e.text.length || r > e.pos + 1 || e.next != 49) ? -1 : r + 1 - e.pos;
}
function bt(e) {
  if (e.next != 35) return -1;
  let t = e.pos + 1;
  for (; t < e.text.length && e.text.charCodeAt(t) == 35;) t++;
  if (t < e.text.length && e.text.charCodeAt(t) != 32) return -1;
  let n = t - e.pos;
  return n > 6 ? -1 : n;
}
function xt(e) {
  if (e.next != 45 && e.next != 61 || e.indent >= e.baseIndent + 4) return -1;
  let t = e.pos + 1;
  for (; t < e.text.length && e.text.charCodeAt(t) == e.next;) t++;
  let n = t;
  for (; t < e.text.length && N(e.text.charCodeAt(t));) t++;
  return t == e.text.length ? n : -1;
}
var St = /^[ \t]*$/,
  Ct = /-->/,
  wt = /\?>/,
  Tt = [[/^<(?:script|pre|style)(?:\s|>|$)/i, /<\/(?:script|pre|style)>/i], [/^\s*<!--/, Ct], [/^\s*<\?/, wt], [/^\s*<![A-Z]/, />/], [/^\s*<!\[CDATA\[/, /\]\]>/], [/^\s*<\/?(?:address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(?:\s|\/?>|$)/i, St], [/^\s*(?:<\/[a-z][\w-]*\s*>|<[a-z][\w-]*(\s+[a-z:_][\w-.]*(?:\s*=\s*(?:[^\s"'=<>`]+|'[^']*'|"[^"]*"))?)*\s*>)\s*$/i, St]];
function Et(e, t, n) {
  if (e.next != 60) return -1;
  let r = e.text.slice(e.pos);
  for (let e = 0, t = Tt.length - +!!n; e < t; e++) if (Tt[e][0].test(r)) return e;
  return -1;
}
function Dt(e, t) {
  let n = e.countIndent(t, e.pos, e.indent),
    r = e.skipSpace(t),
    i = e.countIndent(r, t, n);
  return i >= n + 5 || r == e.text.length ? n + 1 : i;
}
function P(e, t, n) {
  let r = e.length - 1;
  r >= 0 && e[r].to == t && e[r].type == M.CodeText ? e[r].to = n : e.push(I(M.CodeText, t, n));
}
var Ot = {
    LinkReference: void 0,
    IndentedCode(e, t) {
      let n = t.baseIndent + 4;
      if (t.indent < n) return !1;
      let r = t.findColumn(n),
        i = e.lineStart + r,
        a = e.lineStart + t.text.length,
        o = [],
        s = [];
      for (P(o, i, a); e.nextLine() && t.depth >= e.stack.length;) if (t.pos == t.text.length) {
        P(s, e.lineStart - 1, e.lineStart);
        for (let e of t.markers) s.push(e);
      } else if (t.indent < n) break;else {
        if (s.length) {
          for (let e of s) e.type == M.CodeText ? P(o, e.from, e.to) : o.push(e);
          s = [];
        }
        P(o, e.lineStart - 1, e.lineStart);
        for (let e of t.markers) o.push(e);
        a = e.lineStart + t.text.length;
        let n = e.lineStart + t.findColumn(t.baseIndent + 4);
        n < a && P(o, n, a);
      }
      return s.length && (s = s.filter(e => e.type != M.CodeText), s.length && (t.markers = s.concat(t.markers))), e.addNode(e.buffer.writeElements(o, -i).finish(M.CodeBlock, a - i), i), !0;
    },
    FencedCode(e, t) {
      let n = mt(t);
      if (n < 0) return !1;
      let r = e.lineStart + t.pos,
        i = t.next,
        a = n - t.pos,
        o = t.skipSpace(n),
        s = pt(t.text, t.text.length, o),
        c = [I(M.CodeMark, r, r + a)];
      o < s && c.push(I(M.CodeInfo, e.lineStart + o, e.lineStart + s));
      for (let n = !0, r = !0, o = !1; e.nextLine() && t.depth >= e.stack.length; n = !1) {
        let s = t.pos;
        if (t.indent - t.baseIndent < 4) for (; s < t.text.length && t.text.charCodeAt(s) == i;) s++;
        if (s - t.pos >= a && t.skipSpace(s) == t.text.length) {
          for (let e of t.markers) c.push(e);
          r && o && P(c, e.lineStart - 1, e.lineStart), c.push(I(M.CodeMark, e.lineStart + t.pos, e.lineStart + s)), e.nextLine();
          break;
        }
        {
          o = !0, n || (P(c, e.lineStart - 1, e.lineStart), r = !1);
          for (let e of t.markers) c.push(e);
          let i = e.lineStart + t.basePos,
            a = e.lineStart + t.text.length;
          i < a && (P(c, i, a), r = !1);
        }
      }
      return e.addNode(e.buffer.writeElements(c, -r).finish(M.FencedCode, e.prevLineEnd() - r), r), !0;
    },
    Blockquote(e, t) {
      let n = ht(t);
      return n < 0 ? !1 : (e.startContext(M.Blockquote, t.pos), e.addNode(M.QuoteMark, e.lineStart + t.pos, e.lineStart + t.pos + 1), t.moveBase(t.pos + n), null);
    },
    HorizontalRule(e, t) {
      if (gt(t, e, !1) < 0) return !1;
      let n = e.lineStart + t.pos;
      return e.nextLine(), e.addNode(M.HorizontalRule, n), !0;
    },
    BulletList(e, t) {
      let n = vt(t, e, !1);
      if (n < 0) return !1;
      e.block.type != M.BulletList && e.startContext(M.BulletList, t.basePos, t.next);
      let r = Dt(t, t.pos + 1);
      return e.startContext(M.ListItem, t.basePos, r - t.baseIndent), e.addNode(M.ListMark, e.lineStart + t.pos, e.lineStart + t.pos + n), t.moveBaseColumn(r), null;
    },
    OrderedList(e, t) {
      let n = yt(t, e, !1);
      if (n < 0) return !1;
      e.block.type != M.OrderedList && e.startContext(M.OrderedList, t.basePos, t.text.charCodeAt(t.pos + n - 1));
      let r = Dt(t, t.pos + n);
      return e.startContext(M.ListItem, t.basePos, r - t.baseIndent), e.addNode(M.ListMark, e.lineStart + t.pos, e.lineStart + t.pos + n), t.moveBaseColumn(r), null;
    },
    ATXHeading(e, t) {
      let n = bt(t);
      if (n < 0) return !1;
      let r = t.pos,
        i = e.lineStart + r,
        a = pt(t.text, t.text.length, r),
        o = a;
      for (; o > r && t.text.charCodeAt(o - 1) == t.next;) o--;
      (o == a || o == r || !N(t.text.charCodeAt(o - 1))) && (o = t.text.length);
      let s = e.buffer.write(M.HeaderMark, 0, n).writeElements(e.parser.parseInline(t.text.slice(r + n + 1, o), i + n + 1), -i);
      o < t.text.length && s.write(M.HeaderMark, o - r, a - r);
      let c = s.finish(M.ATXHeading1 - 1 + n, t.text.length - r);
      return e.nextLine(), e.addNode(c, i), !0;
    },
    HTMLBlock(e, t) {
      let n = Et(t, e, !1);
      if (n < 0) return !1;
      let r = e.lineStart + t.pos,
        i = Tt[n][1],
        a = [],
        o = i != St;
      for (; !i.test(t.text) && e.nextLine();) {
        if (t.depth < e.stack.length) {
          o = !1;
          break;
        }
        for (let e of t.markers) a.push(e);
      }
      o && e.nextLine();
      let s = i == Ct ? M.CommentBlock : i == wt ? M.ProcessingInstructionBlock : M.HTMLBlock,
        c = e.prevLineEnd();
      return e.addNode(e.buffer.writeElements(a, -r).finish(s, c - r), r), !0;
    },
    SetextHeading: void 0
  },
  kt = class {
    constructor(e) {
      this.stage = 0, this.elts = [], this.pos = 0, this.start = e.start, this.advance(e.content);
    }
    nextLine(e, t, n) {
      if (this.stage == -1) return !1;
      let r = n.content + `
` + t.scrub(),
        i = this.advance(r);
      return i > -1 && i < r.length && this.complete(e, n, i);
    }
    finish(e, t) {
      return (this.stage == 2 || this.stage == 3) && ft(t.content, this.pos) == t.content.length && this.complete(e, t, t.content.length);
    }
    complete(e, t, n) {
      return e.addLeafElement(t, I(M.LinkReference, this.start, this.start + n, this.elts)), !0;
    }
    nextStage(e) {
      return e ? (this.pos = e.to - this.start, this.elts.push(e), this.stage++, !0) : (e === !1 && (this.stage = -1), !1);
    }
    advance(e) {
      for (;;) if (this.stage == -1) return -1;else if (this.stage == 0) {
        if (!this.nextStage(en(e, this.pos, this.start, !0))) return -1;
        if (e.charCodeAt(this.pos) != 58) return this.stage = -1;
        this.elts.push(I(M.LinkMark, this.pos + this.start, this.pos + this.start + 1)), this.pos++;
      } else if (this.stage == 1) {
        if (!this.nextStage(Qt(e, ft(e, this.pos), this.start))) return -1;
      } else if (this.stage == 2) {
        let t = ft(e, this.pos),
          n = 0;
        if (t > this.pos) {
          let r = $t(e, t, this.start);
          if (r) {
            let t = At(e, r.to - this.start);
            t > 0 && (this.nextStage(r), n = t);
          }
        }
        return n ||= At(e, this.pos), n > 0 && n < e.length ? n : -1;
      } else return At(e, this.pos);
    }
  };
function At(e, t) {
  for (; t < e.length; t++) {
    let n = e.charCodeAt(t);
    if (n == 10) break;
    if (!N(n)) return -1;
  }
  return t;
}
var jt = class {
    nextLine(e, t, n) {
      let r = t.depth < e.stack.length ? -1 : xt(t),
        i = t.next;
      if (r < 0) return !1;
      let a = I(M.HeaderMark, e.lineStart + t.pos, e.lineStart + r);
      return e.nextLine(), e.addLeafElement(n, I(i == 61 ? M.SetextHeading1 : M.SetextHeading2, n.start, e.prevLineEnd(), [...e.parser.parseInline(n.content, n.start), a])), !0;
    }
    finish() {
      return !1;
    }
  },
  Mt = {
    LinkReference(e, t) {
      return t.content.charCodeAt(0) == 91 ? new kt(t) : null;
    },
    SetextHeading() {
      return new jt();
    }
  },
  Nt = [(e, t) => bt(t) >= 0, (e, t) => mt(t) >= 0, (e, t) => ht(t) >= 0, (e, t) => vt(t, e, !0) >= 0, (e, t) => yt(t, e, !0) >= 0, (e, t) => gt(t, e, !0) >= 0, (e, t) => Et(t, e, !0) >= 0],
  Pt = {
    text: ``,
    end: 0
  },
  Ft = class {
    constructor(e, t, n, r) {
      this.parser = e, this.input = t, this.ranges = r, this.line = new lt(), this.atEnd = !1, this.reusePlaceholders = new Map(), this.stoppedAt = null, this.rangeI = 0, this.to = r[r.length - 1].to, this.lineStart = this.absoluteLineStart = this.absoluteLineEnd = r[0].from, this.block = st.create(M.Document, 0, this.lineStart, 0, 0), this.stack = [this.block], this.fragments = n.length ? new an(n, t) : null, this.readLine();
    }
    get parsedPos() {
      return this.absoluteLineStart;
    }
    advance() {
      if (this.stoppedAt != null && this.absoluteLineStart > this.stoppedAt) return this.finish();
      let {
        line: e
      } = this;
      for (;;) {
        for (let t = 0;;) {
          let n = e.depth < this.stack.length ? this.stack[this.stack.length - 1] : null;
          for (; t < e.markers.length && (!n || e.markers[t].from < n.end);) {
            let n = e.markers[t++];
            this.addNode(n.type, n.from, n.to);
          }
          if (!n) break;
          this.finishContext();
        }
        if (e.pos < e.text.length) break;
        if (!this.nextLine()) return this.finish();
      }
      if (this.fragments && this.reuseFragment(e.basePos)) return null;
      start: for (;;) {
        for (let t of this.parser.blockParsers) if (t) {
          let n = t(this, e);
          if (n != 0) {
            if (n == 1) return null;
            e.forward();
            continue start;
          }
        }
        break;
      }
      if (e.pos == e.text.length) return this.nextLine() ? null : this.finish();
      let t = new ct(this.lineStart + e.pos, e.text.slice(e.pos));
      for (let e of this.parser.leafBlockParsers) if (e) {
        let n = e(this, t);
        n && t.parsers.push(n);
      }
      lines: for (; this.nextLine() && e.pos != e.text.length;) {
        if (e.indent < e.baseIndent + 4) {
          for (let n of this.parser.endLeafBlock) if (n(this, e, t)) break lines;
        }
        for (let n of t.parsers) if (n.nextLine(this, e, t)) return null;
        t.content += `
` + e.scrub();
        for (let n of e.markers) t.marks.push(n);
      }
      return this.finishLeaf(t), null;
    }
    stopAt(e) {
      if (this.stoppedAt != null && this.stoppedAt < e) throw RangeError(`Can't move stoppedAt forward`);
      this.stoppedAt = e;
    }
    reuseFragment(e) {
      if (!this.fragments.moveTo(this.absoluteLineStart + e, this.absoluteLineStart) || !this.fragments.matches(this.block.hash)) return !1;
      let t = this.fragments.takeNodes(this);
      return t ? (this.absoluteLineStart += t, this.lineStart = on(this.absoluteLineStart, this.ranges), this.moveRangeI(), this.absoluteLineStart < this.to ? (this.lineStart++, this.absoluteLineStart++, this.readLine()) : (this.atEnd = !0, this.readLine()), !0) : !1;
    }
    get depth() {
      return this.stack.length;
    }
    parentType(e = this.depth - 1) {
      return this.parser.nodeSet.types[this.stack[e].type];
    }
    nextLine() {
      return this.lineStart += this.line.text.length, this.absoluteLineEnd >= this.to ? (this.absoluteLineStart = this.absoluteLineEnd, this.atEnd = !0, this.readLine(), !1) : (this.lineStart++, this.absoluteLineStart = this.absoluteLineEnd + 1, this.moveRangeI(), this.readLine(), !0);
    }
    peekLine() {
      return this.scanLine(this.absoluteLineEnd + 1).text;
    }
    moveRangeI() {
      for (; this.rangeI < this.ranges.length - 1 && this.absoluteLineStart >= this.ranges[this.rangeI].to;) this.rangeI++, this.absoluteLineStart = Math.max(this.absoluteLineStart, this.ranges[this.rangeI].from);
    }
    scanLine(e) {
      let t = Pt;
      if (t.end = e, e >= this.to) t.text = ``;else if (t.text = this.lineChunkAt(e), t.end += t.text.length, this.ranges.length > 1) {
        let e = this.absoluteLineStart,
          n = this.rangeI;
        for (; this.ranges[n].to < t.end;) {
          n++;
          let r = this.ranges[n].from,
            i = this.lineChunkAt(r);
          t.end = r + i.length, t.text = t.text.slice(0, this.ranges[n - 1].to - e) + i, e = t.end - t.text.length;
        }
      }
      return t;
    }
    readLine() {
      let {
          line: e
        } = this,
        {
          text: t,
          end: n
        } = this.scanLine(this.absoluteLineStart);
      for (this.absoluteLineEnd = n, e.reset(t); e.depth < this.stack.length; e.depth++) {
        let t = this.stack[e.depth],
          n = this.parser.skipContextMarkup[t.type];
        if (!n) throw Error(`Unhandled block context ` + M[t.type]);
        let r = this.line.markers.length;
        if (!n(t, this, e)) {
          this.line.markers.length > r && (t.end = this.line.markers[this.line.markers.length - 1].to), e.forward();
          break;
        }
        e.forward();
      }
    }
    lineChunkAt(e) {
      let t = this.input.chunk(e),
        n;
      if (this.input.lineChunks) n = t == `
` ? `` : t;else {
        let e = t.indexOf(`
`);
        n = e < 0 ? t : t.slice(0, e);
      }
      return e + n.length > this.to ? n.slice(0, this.to - e) : n;
    }
    prevLineEnd() {
      return this.atEnd ? this.lineStart : this.lineStart - 1;
    }
    startContext(e, t, n = 0) {
      this.block = st.create(e, n, this.lineStart + t, this.block.hash, this.lineStart + this.line.text.length), this.stack.push(this.block);
    }
    startComposite(e, t, n = 0) {
      this.startContext(this.parser.getNodeType(e), t, n);
    }
    addNode(e, t, n) {
      typeof e == `number` && (e = new r(this.parser.nodeSet.types[e], F, F, (n ?? this.prevLineEnd()) - t)), this.block.addChild(e, t - this.block.from);
    }
    addElement(e) {
      this.block.addChild(e.toTree(this.parser.nodeSet), e.from - this.block.from);
    }
    addLeafElement(e, t) {
      this.addNode(this.buffer.writeElements(nn(t.children, e.marks), -t.from).finish(t.type, t.to - t.from), t.from);
    }
    finishContext() {
      let e = this.stack.pop(),
        t = this.stack[this.stack.length - 1];
      t.addChild(e.toTree(this.parser.nodeSet), e.from - t.from), this.block = t;
    }
    finish() {
      for (; this.stack.length > 1;) this.finishContext();
      return this.addGaps(this.block.toTree(this.parser.nodeSet, this.lineStart));
    }
    addGaps(e) {
      return this.ranges.length > 1 ? It(this.ranges, 0, e.topNode, this.ranges[0].from, this.reusePlaceholders) : e;
    }
    finishLeaf(e) {
      for (let t of e.parsers) if (t.finish(this, e)) return;
      let t = nn(this.parser.parseInline(e.content, e.start), e.marks);
      this.addNode(this.buffer.writeElements(t, -e.start).finish(M.Paragraph, e.content.length), e.start);
    }
    elt(e, t, n, r) {
      return typeof e == `string` ? I(this.parser.getNodeType(e), t, n, r) : new Wt(e, t);
    }
    get buffer() {
      return new Ht(this.parser.nodeSet);
    }
  };
function It(e, t, n, i, a) {
  let o = e[t].to,
    s = [],
    c = [],
    l = n.from + i;
  function u(n, r) {
    for (; r ? n >= o : n > o;) {
      let r = e[t + 1].from - o;
      i += r, n += r, t++, o = e[t].to;
    }
  }
  for (let r = n.firstChild; r; r = r.nextSibling) {
    u(r.from + i, !0);
    let n = r.from + i,
      d,
      f = a.get(r.tree);
    f ? d = f : r.to + i > o ? (d = It(e, t, r, i, a), u(r.to + i, !1)) : d = r.toTree(), s.push(d), c.push(n - l);
  }
  return u(n.to + i, !1), new r(n.type, s, c, n.to + i - l, n.tree ? n.tree.propValues : void 0);
}
var Lt = class e extends o {
  constructor(e, t, n, r, i, a, o, s, c) {
    super(), this.nodeSet = e, this.blockParsers = t, this.leafBlockParsers = n, this.blockNames = r, this.endLeafBlock = i, this.skipContextMarkup = a, this.inlineParsers = o, this.inlineNames = s, this.wrappers = c, this.nodeTypes = Object.create(null);
    for (let t of e.types) this.nodeTypes[t.name] = t.id;
  }
  createParse(e, t, n) {
    let r = new Ft(this, e, t, n);
    for (let i of this.wrappers) r = i(r, e, t, n);
    return r;
  }
  configure(t) {
    let n = zt(t);
    if (!n) return this;
    let {
        nodeSet: r,
        skipContextMarkup: i
      } = this,
      o = this.blockParsers.slice(),
      c = this.leafBlockParsers.slice(),
      d = this.blockNames.slice(),
      p = this.inlineParsers.slice(),
      m = this.inlineNames.slice(),
      ee = this.endLeafBlock.slice(),
      h = this.wrappers;
    if (Rt(n.defineNodes)) {
      i = Object.assign({}, i);
      let e = r.types.slice(),
        t;
      for (let r of n.defineNodes) {
        let {
          name: n,
          block: o,
          composite: s,
          style: c
        } = typeof r == `string` ? {
          name: r
        } : r;
        if (e.some(e => e.name == n)) continue;
        s && (i[e.length] = (e, t, n) => s(t, n, e.value));
        let d = e.length,
          f = s ? [`Block`, `BlockContext`] : o ? d >= M.ATXHeading1 && d <= M.SetextHeading2 ? [`Block`, `LeafBlock`, `Heading`] : [`Block`, `LeafBlock`] : void 0;
        e.push(l.define({
          id: d,
          name: n,
          props: f && [[a.group, f]]
        })), c && (t ||= {}, Array.isArray(c) || c instanceof u ? t[n] = c : Object.assign(t, c));
      }
      r = new f(e), t && (r = r.extend(s(t)));
    }
    if (Rt(n.props) && (r = r.extend(...n.props)), Rt(n.remove)) for (let e of n.remove) {
      let t = this.blockNames.indexOf(e),
        n = this.inlineNames.indexOf(e);
      t > -1 && (o[t] = c[t] = void 0), n > -1 && (p[n] = void 0);
    }
    if (Rt(n.parseBlock)) for (let e of n.parseBlock) {
      let t = d.indexOf(e.name);
      if (t > -1) o[t] = e.parse, c[t] = e.leaf;else {
        let t = e.before ? Bt(d, e.before) : e.after ? Bt(d, e.after) + 1 : d.length - 1;
        o.splice(t, 0, e.parse), c.splice(t, 0, e.leaf), d.splice(t, 0, e.name);
      }
      e.endLeaf && ee.push(e.endLeaf);
    }
    if (Rt(n.parseInline)) for (let e of n.parseInline) {
      let t = m.indexOf(e.name);
      if (t > -1) p[t] = e.parse;else {
        let t = e.before ? Bt(m, e.before) : e.after ? Bt(m, e.after) + 1 : m.length - 1;
        p.splice(t, 0, e.parse), m.splice(t, 0, e.name);
      }
    }
    return n.wrap && (h = h.concat(n.wrap)), new e(r, o, c, d, ee, i, p, m, h);
  }
  getNodeType(e) {
    let t = this.nodeTypes[e];
    if (t == null) throw RangeError(`Unknown node type '${e}'`);
    return t;
  }
  parseInline(e, t) {
    let n = new tn(this, e, t);
    outer: for (let e = t; e < n.end;) {
      let t = n.char(e);
      for (let r of this.inlineParsers) if (r) {
        let i = r(n, t, e);
        if (i >= 0) {
          e = i;
          continue outer;
        }
      }
      e++;
    }
    return n.resolveMarkers(0);
  }
};
function Rt(e) {
  return e != null && e.length > 0;
}
function zt(e) {
  if (!Array.isArray(e)) return e;
  if (e.length == 0) return null;
  let t = zt(e[0]);
  if (e.length == 1) return t;
  let n = zt(e.slice(1));
  if (!n || !t) return t || n;
  let r = (e, t) => (e || F).concat(t || F),
    i = t.wrap,
    a = n.wrap;
  return {
    props: r(t.props, n.props),
    defineNodes: r(t.defineNodes, n.defineNodes),
    parseBlock: r(t.parseBlock, n.parseBlock),
    parseInline: r(t.parseInline, n.parseInline),
    remove: r(t.remove, n.remove),
    wrap: i ? a ? (e, t, n, r) => i(a(e, t, n, r), t, n, r) : i : a
  };
}
function Bt(e, t) {
  let n = e.indexOf(t);
  if (n < 0) throw RangeError(`Position specified relative to unknown parser ${t}`);
  return n;
}
var Vt = [l.none];
for (let e = 1, t; t = M[e]; e++) Vt[e] = l.define({
  id: e,
  name: t,
  props: e >= M.Escape ? [] : [[a.group, e in dt ? [`Block`, `BlockContext`] : [`Block`, `LeafBlock`]]],
  top: t == `Document`
});
var F = [],
  Ht = class {
    constructor(e) {
      this.nodeSet = e, this.content = [], this.nodes = [];
    }
    write(e, t, n, r = 0) {
      return this.content.push(e, t, n, 4 + r * 4), this;
    }
    writeElements(e, t = 0) {
      for (let n of e) n.writeTo(this, t);
      return this;
    }
    finish(e, t) {
      return r.build({
        buffer: this.content,
        nodeSet: this.nodeSet,
        reused: this.nodes,
        topID: e,
        length: t
      });
    }
  },
  Ut = class {
    constructor(e, t, n, r = F) {
      this.type = e, this.from = t, this.to = n, this.children = r;
    }
    writeTo(e, t) {
      let n = e.content.length;
      e.writeElements(this.children, t), e.content.push(this.type, this.from + t, this.to + t, e.content.length + 4 - n);
    }
    toTree(e) {
      return new Ht(e).writeElements(this.children, -this.from).finish(this.type, this.to - this.from);
    }
  },
  Wt = class {
    constructor(e, t) {
      this.tree = e, this.from = t;
    }
    get to() {
      return this.from + this.tree.length;
    }
    get type() {
      return this.tree.type.id;
    }
    get children() {
      return F;
    }
    writeTo(e, t) {
      e.nodes.push(this.tree), e.content.push(e.nodes.length - 1, this.from + t, this.to + t, -1);
    }
    toTree() {
      return this.tree;
    }
  };
function I(e, t, n, r) {
  return new Ut(e, t, n, r);
}
var Gt = {
    resolve: `Emphasis`,
    mark: `EmphasisMark`
  },
  Kt = {
    resolve: `Emphasis`,
    mark: `EmphasisMark`
  },
  L = {},
  qt = {},
  R = class {
    constructor(e, t, n, r) {
      this.type = e, this.from = t, this.to = n, this.side = r;
    }
  },
  Jt = `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`,
  Yt = /[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\u2010-\u2027]/;
try {
  Yt = RegExp(`[\\p{S}|\\p{P}]`, `u`);
} catch {}
var Xt = {
  Escape(e, t, n) {
    if (t != 92 || n == e.end - 1) return -1;
    let r = e.char(n + 1);
    for (let t = 0; t < 32; t++) if (Jt.charCodeAt(t) == r) return e.append(I(M.Escape, n, n + 2));
    return -1;
  },
  Entity(e, t, n) {
    if (t != 38) return -1;
    let r = /^(?:#\d+|#x[a-f\d]+|\w+);/i.exec(e.slice(n + 1, n + 31));
    return r ? e.append(I(M.Entity, n, n + 1 + r[0].length)) : -1;
  },
  InlineCode(e, t, n) {
    if (t != 96 || n && e.char(n - 1) == 96) return -1;
    let r = n + 1;
    for (; r < e.end && e.char(r) == 96;) r++;
    let i = r - n,
      a = 0;
    for (; r < e.end; r++) if (e.char(r) == 96) {
      if (a++, a == i && e.char(r + 1) != 96) return e.append(I(M.InlineCode, n, r + 1, [I(M.CodeMark, n, n + i), I(M.CodeMark, r + 1 - i, r + 1)]));
    } else a = 0;
    return -1;
  },
  HTMLTag(e, t, n) {
    if (t != 60 || n == e.end - 1) return -1;
    let r = e.slice(n + 1, e.end),
      i = /^(?:[a-z][-\w+.]+:[^\s>]+|[a-z\d.!#$%&'*+/=?^_`{|}~-]+@[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?(?:\.[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?)*)>/i.exec(r);
    if (i) return e.append(I(M.Autolink, n, n + 1 + i[0].length, [I(M.LinkMark, n, n + 1), I(M.URL, n + 1, n + i[0].length), I(M.LinkMark, n + i[0].length, n + 1 + i[0].length)]));
    let a = /^!--[^>](?:-[^-]|[^-])*?-->/i.exec(r);
    if (a) return e.append(I(M.Comment, n, n + 1 + a[0].length));
    let o = /^\?[^]*?\?>/.exec(r);
    if (o) return e.append(I(M.ProcessingInstruction, n, n + 1 + o[0].length));
    let s = /^(?:![A-Z][^]*?>|!\[CDATA\[[^]*?\]\]>|\/\s*[a-zA-Z][\w-]*\s*>|\s*[a-zA-Z][\w-]*(\s+[a-zA-Z:_][\w-.:]*(?:\s*=\s*(?:[^\s"'=<>`]+|'[^']*'|"[^"]*"))?)*\s*(\/\s*)?>)/.exec(r);
    return s ? e.append(I(M.HTMLTag, n, n + 1 + s[0].length)) : -1;
  },
  Emphasis(e, t, n) {
    if (t != 95 && t != 42) return -1;
    let r = n + 1;
    for (; e.char(r) == t;) r++;
    let i = e.slice(n - 1, n),
      a = e.slice(r, r + 1),
      o = Yt.test(i),
      s = Yt.test(a),
      c = /\s|^$/.test(i),
      l = /\s|^$/.test(a),
      u = !l && (!s || c || o),
      d = !c && (!o || l || s),
      f = u && (t == 42 || !d || o),
      p = d && (t == 42 || !u || s);
    return e.append(new R(t == 95 ? Gt : Kt, n, r, !!f | (p ? 2 : 0)));
  },
  HardBreak(e, t, n) {
    if (t == 92 && e.char(n + 1) == 10) return e.append(I(M.HardBreak, n, n + 2));
    if (t == 32) {
      let t = n + 1;
      for (; e.char(t) == 32;) t++;
      if (e.char(t) == 10 && t >= n + 2) return e.append(I(M.HardBreak, n, t + 1));
    }
    return -1;
  },
  Link(e, t, n) {
    return t == 91 ? e.append(new R(L, n, n + 1, 1)) : -1;
  },
  Image(e, t, n) {
    return t == 33 && e.char(n + 1) == 91 ? e.append(new R(qt, n, n + 2, 1)) : -1;
  },
  LinkEnd(e, t, n) {
    if (t != 93) return -1;
    for (let t = e.parts.length - 1; t >= 0; t--) {
      let r = e.parts[t];
      if (r instanceof R && (r.type == L || r.type == qt)) {
        if (!r.side || e.skipSpace(r.to) == n && !/[(\[]/.test(e.slice(n + 1, n + 2))) return e.parts[t] = null, -1;
        let i = e.takeContent(t),
          a = e.parts[t] = Zt(e, i, r.type == L ? M.Link : M.Image, r.from, n + 1);
        if (r.type == L) for (let n = 0; n < t; n++) {
          let t = e.parts[n];
          t instanceof R && t.type == L && (t.side = 0);
        }
        return a.to;
      }
    }
    return -1;
  }
};
function Zt(e, t, n, r, i) {
  let {
      text: a
    } = e,
    o = e.char(i),
    s = i;
  if (t.unshift(I(M.LinkMark, r, r + (n == M.Image ? 2 : 1))), t.push(I(M.LinkMark, i - 1, i)), o == 40) {
    let n = e.skipSpace(i + 1),
      r = Qt(a, n - e.offset, e.offset),
      o;
    r && (n = e.skipSpace(r.to), n != r.to && (o = $t(a, n - e.offset, e.offset), o && (n = e.skipSpace(o.to)))), e.char(n) == 41 && (t.push(I(M.LinkMark, i, i + 1)), s = n + 1, r && t.push(r), o && t.push(o), t.push(I(M.LinkMark, n, s)));
  } else if (o == 91) {
    let n = en(a, i - e.offset, e.offset, !1);
    n && (t.push(n), s = n.to);
  }
  return I(n, r, s, t);
}
function Qt(e, t, n) {
  if (e.charCodeAt(t) == 60) {
    for (let r = t + 1; r < e.length; r++) {
      let i = e.charCodeAt(r);
      if (i == 62) return I(M.URL, t + n, r + 1 + n);
      if (i == 60 || i == 10) return !1;
    }
    return null;
  }
  {
    let r = 0,
      i = t;
    for (let t = !1; i < e.length; i++) {
      let n = e.charCodeAt(i);
      if (N(n)) break;
      if (t) t = !1;else if (n == 40) r++;else if (n == 41) {
        if (!r) break;
        r--;
      } else n == 92 && (t = !0);
    }
    return i > t ? I(M.URL, t + n, i + n) : i == e.length && null;
  }
}
function $t(e, t, n) {
  let r = e.charCodeAt(t);
  if (r != 39 && r != 34 && r != 40) return !1;
  let i = r == 40 ? 41 : r;
  for (let r = t + 1, a = !1; r < e.length; r++) {
    let o = e.charCodeAt(r);
    if (a) a = !1;else if (o == i) return I(M.LinkTitle, t + n, r + 1 + n);else o == 92 && (a = !0);
  }
  return null;
}
function en(e, t, n, r) {
  for (let i = !1, a = t + 1, o = Math.min(e.length, a + 999); a < o; a++) {
    let o = e.charCodeAt(a);
    if (i) i = !1;else if (o == 93) return !r && I(M.LinkLabel, t + n, a + 1 + n);else {
      if (r && !N(o) && (r = !1), o == 91) return !1;
      o == 92 && (i = !0);
    }
  }
  return null;
}
var tn = class {
  constructor(e, t, n) {
    this.parser = e, this.text = t, this.offset = n, this.parts = [];
  }
  char(e) {
    return e >= this.end ? -1 : this.text.charCodeAt(e - this.offset);
  }
  get end() {
    return this.offset + this.text.length;
  }
  slice(e, t) {
    return this.text.slice(e - this.offset, t - this.offset);
  }
  append(e) {
    return this.parts.push(e), e.to;
  }
  addDelimiter(e, t, n, r, i) {
    return this.append(new R(e, t, n, !!r | (i ? 2 : 0)));
  }
  get hasOpenLink() {
    for (let e = this.parts.length - 1; e >= 0; e--) {
      let t = this.parts[e];
      if (t instanceof R && (t.type == L || t.type == qt)) return !0;
    }
    return !1;
  }
  addElement(e) {
    return this.append(e);
  }
  resolveMarkers(e) {
    for (let t = e; t < this.parts.length; t++) {
      let n = this.parts[t];
      if (!(n instanceof R && n.type.resolve && n.side & 2)) continue;
      let r = n.type == Gt || n.type == Kt,
        i = n.to - n.from,
        a,
        o = t - 1;
      for (; o >= e; o--) {
        let e = this.parts[o];
        if (e instanceof R && e.side & 1 && e.type == n.type && !(r && (n.side & 1 || e.side & 2) && (e.to - e.from + i) % 3 == 0 && ((e.to - e.from) % 3 || i % 3))) {
          a = e;
          break;
        }
      }
      if (!a) continue;
      let s = n.type.resolve,
        c = [],
        l = a.from,
        u = n.to;
      if (r) {
        let e = Math.min(2, a.to - a.from, i);
        l = a.to - e, u = n.from + e, s = e == 1 ? `Emphasis` : `StrongEmphasis`;
      }
      a.type.mark && c.push(this.elt(a.type.mark, l, a.to));
      for (let e = o + 1; e < t; e++) this.parts[e] instanceof Ut && c.push(this.parts[e]), this.parts[e] = null;
      n.type.mark && c.push(this.elt(n.type.mark, n.from, u));
      let d = this.elt(s, l, u, c);
      this.parts[o] = r && a.from != l ? new R(a.type, a.from, l, a.side) : null, (this.parts[t] = r && n.to != u ? new R(n.type, u, n.to, n.side) : null) ? this.parts.splice(t, 0, d) : this.parts[t] = d;
    }
    let t = [];
    for (let n = e; n < this.parts.length; n++) {
      let e = this.parts[n];
      e instanceof Ut && t.push(e);
    }
    return t;
  }
  findOpeningDelimiter(e) {
    for (let t = this.parts.length - 1; t >= 0; t--) {
      let n = this.parts[t];
      if (n instanceof R && n.type == e && n.side & 1) return t;
    }
    return null;
  }
  takeContent(e) {
    let t = this.resolveMarkers(e);
    return this.parts.length = e, t;
  }
  getDelimiterAt(e) {
    let t = this.parts[e];
    return t instanceof R ? t : null;
  }
  skipSpace(e) {
    return ft(this.text, e - this.offset) + this.offset;
  }
  elt(e, t, n, r) {
    return typeof e == `string` ? I(this.parser.getNodeType(e), t, n, r) : new Wt(e, t);
  }
};
tn.linkStart = L, tn.imageStart = qt;
function nn(e, t) {
  if (!t.length) return e;
  if (!e.length) return t;
  let n = e.slice(),
    r = 0;
  for (let e of t) {
    for (; r < n.length && n[r].to < e.to;) r++;
    if (r < n.length && n[r].from < e.from) {
      let t = n[r];
      t instanceof Ut && (n[r] = new Ut(t.type, t.from, t.to, nn(t.children, [e])));
    } else n.splice(r++, 0, e);
  }
  return n;
}
var rn = [M.CodeBlock, M.ListItem, M.OrderedList, M.BulletList],
  an = class {
    constructor(e, t) {
      this.fragments = e, this.input = t, this.i = 0, this.fragment = null, this.fragmentEnd = -1, this.cursor = null, e.length && (this.fragment = e[this.i++]);
    }
    nextFragment() {
      this.fragment = this.i < this.fragments.length ? this.fragments[this.i++] : null, this.cursor = null, this.fragmentEnd = -1;
    }
    moveTo(e, t) {
      for (; this.fragment && this.fragment.to <= e;) this.nextFragment();
      if (!this.fragment || this.fragment.from > (e ? e - 1 : 0)) return !1;
      if (this.fragmentEnd < 0) {
        let e = this.fragment.to;
        for (; e > 0 && this.input.read(e - 1, e) != `
`;) e--;
        this.fragmentEnd = e ? e - 1 : 0;
      }
      let n = this.cursor;
      n || (n = this.cursor = this.fragment.tree.cursor(), n.firstChild());
      let r = e + this.fragment.offset;
      for (; n.to <= r;) if (!n.parent()) return !1;
      for (;;) {
        if (n.from >= r) return this.fragment.from <= t;
        if (!n.childAfter(r)) return !1;
      }
    }
    matches(e) {
      let t = this.cursor.tree;
      return t && t.prop(a.contextHash) == e;
    }
    takeNodes(e) {
      let t = this.cursor,
        n = this.fragment.offset,
        i = this.fragmentEnd - +!!this.fragment.openEnd,
        a = e.absoluteLineStart,
        o = a,
        s = e.block.children.length,
        c = o,
        l = s;
      for (;;) {
        if (t.to - n > i) {
          if (t.type.isAnonymous && t.firstChild()) continue;
          break;
        }
        let a = on(t.from - n, e.ranges);
        if (t.to - n <= e.ranges[e.rangeI].to) e.addNode(t.tree, a);else {
          let n = new r(e.parser.nodeSet.types[M.Paragraph], [], [], 0, e.block.hashProp);
          e.reusePlaceholders.set(n, t.tree), e.addNode(n, a);
        }
        if (t.type.is(`Block`) && (rn.indexOf(t.type.id) < 0 ? (o = t.to - n, s = e.block.children.length) : (o = c, s = l), c = t.to - n, l = e.block.children.length), !t.nextSibling()) break;
      }
      for (; e.block.children.length > s;) e.block.children.pop(), e.block.positions.pop();
      return o - a;
    }
  };
function on(e, t) {
  let n = e;
  for (let r = 1; r < t.length; r++) {
    let i = t[r - 1].to,
      a = t[r].from;
    i < e && (n -= a - i);
  }
  return n;
}
var sn = s({
    "Blockquote/...": d.quote,
    HorizontalRule: d.contentSeparator,
    "ATXHeading1/... SetextHeading1/...": d.heading1,
    "ATXHeading2/... SetextHeading2/...": d.heading2,
    "ATXHeading3/...": d.heading3,
    "ATXHeading4/...": d.heading4,
    "ATXHeading5/...": d.heading5,
    "ATXHeading6/...": d.heading6,
    "Comment CommentBlock": d.comment,
    Escape: d.escape,
    Entity: d.character,
    "Emphasis/...": d.emphasis,
    "StrongEmphasis/...": d.strong,
    "Link/... Image/...": d.link,
    "OrderedList/... BulletList/...": d.list,
    "BlockQuote/...": d.quote,
    "InlineCode CodeText": d.monospace,
    "URL Autolink": d.url,
    "HeaderMark HardBreak QuoteMark ListMark LinkMark EmphasisMark CodeMark": d.processingInstruction,
    "CodeInfo LinkLabel": d.labelName,
    LinkTitle: d.string,
    Paragraph: d.content
  }),
  cn = new Lt(new f(Vt).extend(sn), Object.keys(Ot).map(e => Ot[e]), Object.keys(Ot).map(e => Mt[e]), Object.keys(Ot), Nt, dt, Object.keys(Xt).map(e => Xt[e]), Object.keys(Xt), []);
function ln(e, t, n) {
  let r = [];
  for (let i = e.firstChild, a = t;; i = i.nextSibling) {
    let e = i ? i.from : n;
    if (e > a && r.push({
      from: a,
      to: e
    }), !i) break;
    a = i.to;
  }
  return r;
}
function un(e) {
  let {
    codeParser: t,
    htmlParser: n
  } = e;
  return {
    wrap: m((e, r) => {
      let i = e.type.id;
      if (t && (i == M.CodeBlock || i == M.FencedCode)) {
        let n = ``;
        if (i == M.FencedCode) {
          let t = e.node.getChild(M.CodeInfo);
          t && (n = r.read(t.from, t.to));
        }
        let a = t(n);
        if (a) return {
          parser: a,
          overlay: e => e.type.id == M.CodeText,
          bracketed: i == M.FencedCode
        };
      } else if (n && (i == M.HTMLBlock || i == M.HTMLTag || i == M.CommentBlock)) return {
        parser: n,
        overlay: ln(e.node, e.from, e.to)
      };
      return null;
    })
  };
}
var dn = {
    resolve: `Strikethrough`,
    mark: `StrikethroughMark`
  },
  fn = {
    defineNodes: [{
      name: `Strikethrough`,
      style: {
        "Strikethrough/...": d.strikethrough
      }
    }, {
      name: `StrikethroughMark`,
      style: d.processingInstruction
    }],
    parseInline: [{
      name: `Strikethrough`,
      parse(e, t, n) {
        if (t != 126 || e.char(n + 1) != 126 || e.char(n + 2) == 126) return -1;
        let r = e.slice(n - 1, n),
          i = e.slice(n + 2, n + 3),
          a = /\s|^$/.test(r),
          o = /\s|^$/.test(i),
          s = Yt.test(r),
          c = Yt.test(i);
        return e.addDelimiter(dn, n, n + 2, !o && (!c || a || s), !a && (!s || o || c));
      },
      after: `Emphasis`
    }]
  };
function pn(e, t, n = 0, r, i = 0) {
  let a = 0,
    o = !0,
    s = -1,
    c = -1,
    l = !1,
    u = () => {
      r.push(e.elt(`TableCell`, i + s, i + c, e.parser.parseInline(t.slice(s, c), i + s)));
    };
  for (let d = n; d < t.length; d++) {
    let n = t.charCodeAt(d);
    n == 124 && !l ? ((!o || s > -1) && a++, o = !1, r && (s > -1 && u(), r.push(e.elt(`TableDelimiter`, d + i, d + i + 1))), s = c = -1) : (l || n != 32 && n != 9) && (s < 0 && (s = d), c = d + 1), l = !l && n == 92;
  }
  return s > -1 && (a++, r && u()), a;
}
function mn(e, t) {
  for (let n = t; n < e.length; n++) {
    let t = e.charCodeAt(n);
    if (t == 124) return !0;
    t == 92 && n++;
  }
  return !1;
}
var hn = /^[>\s]*\|?(\s*:?-+:?\s*\|)+(\s*:?-+:?\s*)?$/,
  gn = class {
    constructor() {
      this.rows = null;
    }
    nextLine(e, t, n) {
      if (this.rows == null) {
        this.rows = !1;
        let r;
        if ((t.next == 45 || t.next == 58 || t.next == 124) && hn.test(r = t.text.slice(t.pos))) {
          let i = [];
          pn(e, n.content, 0, i, n.start) == pn(e, r, 0) && (this.rows = [e.elt(`TableHeader`, n.start, n.start + n.content.length, i), e.elt(`TableDelimiter`, e.lineStart + t.pos, e.lineStart + t.text.length)]);
        }
      } else if (this.rows) {
        let n = [];
        pn(e, t.text, t.pos, n, e.lineStart), this.rows.push(e.elt(`TableRow`, e.lineStart + t.pos, e.lineStart + t.text.length, n));
      }
      return !1;
    }
    finish(e, t) {
      return this.rows ? (e.addLeafElement(t, e.elt(`Table`, t.start, t.start + t.content.length, this.rows)), !0) : !1;
    }
  },
  _n = {
    defineNodes: [{
      name: `Table`,
      block: !0
    }, {
      name: `TableHeader`,
      style: {
        "TableHeader/...": d.heading
      }
    }, `TableRow`, {
      name: `TableCell`,
      style: d.content
    }, {
      name: `TableDelimiter`,
      style: d.processingInstruction
    }],
    parseBlock: [{
      name: `Table`,
      leaf(e, t) {
        return mn(t.content, 0) ? new gn() : null;
      },
      endLeaf(e, t, n) {
        if (n.parsers.some(e => e instanceof gn) || !mn(t.text, t.basePos)) return !1;
        let r = e.peekLine();
        return hn.test(r) && pn(e, t.text, t.basePos) == pn(e, r, t.basePos);
      },
      before: `SetextHeading`
    }]
  },
  vn = class {
    nextLine() {
      return !1;
    }
    finish(e, t) {
      return e.addLeafElement(t, e.elt(`Task`, t.start, t.start + t.content.length, [e.elt(`TaskMarker`, t.start, t.start + 3), ...e.parser.parseInline(t.content.slice(3), t.start + 3)])), !0;
    }
  },
  yn = {
    defineNodes: [{
      name: `Task`,
      block: !0,
      style: d.list
    }, {
      name: `TaskMarker`,
      style: d.atom
    }],
    parseBlock: [{
      name: `TaskList`,
      leaf(e, t) {
        return /^\[[ xX]\][ \t]/.test(t.content) && e.parentType().name == `ListItem` ? new vn() : null;
      },
      after: `SetextHeading`
    }]
  },
  bn = /(www\.)|(https?:\/\/)|([\w.+-]{1,100}@)|(mailto:|xmpp:)/gy,
  xn = /[\w-]+(\.[\w-]+)+(:\d+)?(\/[^\s<]*)?/gy,
  Sn = /[\w-]+\.[\w-]+($|[/:])/,
  Cn = /[\w.+-]+@[\w-]+(\.[\w.-]+)+/gy,
  wn = /\/[a-zA-Z\d@.]+/gy;
function Tn(e, t, n, r) {
  let i = 0;
  for (let a = t; a < n; a++) e[a] == r && i++;
  return i;
}
function En(e, t) {
  xn.lastIndex = t;
  let n = xn.exec(e);
  if (!n || Sn.exec(n[0])[0].indexOf(`_`) > -1) return -1;
  let r = t + n[0].length;
  for (;;) {
    let n = e[r - 1],
      i;
    if (/[?!.,:*_~]/.test(n) || n == `)` && Tn(e, t, r, `)`) > Tn(e, t, r, `(`)) r--;else if (n == `;` && (i = /&(?:#\d+|#x[a-f\d]+|\w+);$/.exec(e.slice(t, r)))) r = t + i.index;else break;
  }
  return r;
}
function Dn(e, t) {
  Cn.lastIndex = t;
  let n = Cn.exec(e);
  if (!n) return -1;
  let r = n[0][n[0].length - 1];
  return r == `_` || r == `-` ? -1 : t + n[0].length - +(r == `.`);
}
var On = [_n, yn, fn, {
  parseInline: [{
    name: `Autolink`,
    parse(e, t, n) {
      let r = n - e.offset;
      if (r && /\w/.test(e.text[r - 1])) return -1;
      bn.lastIndex = r;
      let i = bn.exec(e.text),
        a = -1;
      return !i || (i[1] || i[2] ? (a = En(e.text, r + i[0].length), a > -1 && e.hasOpenLink && (a = r + /([^\[\]]|\[[^\]]*\])*/.exec(e.text.slice(r, a))[0].length)) : i[3] ? a = Dn(e.text, r) : (a = Dn(e.text, r + i[0].length), a > -1 && i[0] == `xmpp:` && (wn.lastIndex = a, i = wn.exec(e.text), i && (a = i.index + i[0].length))), a < 0) ? -1 : (e.addElement(e.elt(`URL`, n, a + e.offset)), a + e.offset);
    }
  }]
}];
function kn(e, t, n) {
  return (r, i, a) => {
    if (i != e || r.char(a + 1) == e) return -1;
    let o = [r.elt(n, a, a + 1)];
    for (let i = a + 1; i < r.end; i++) {
      let s = r.char(i);
      if (s == e) return r.addElement(r.elt(t, a, i + 1, o.concat(r.elt(n, i, i + 1))));
      if (s == 92 && o.push(r.elt(`Escape`, i, i++ + 2)), N(s)) break;
    }
    return -1;
  };
}
var An = {
    defineNodes: [{
      name: `Superscript`,
      style: d.special(d.content)
    }, {
      name: `SuperscriptMark`,
      style: d.processingInstruction
    }],
    parseInline: [{
      name: `Superscript`,
      parse: kn(94, `Superscript`, `SuperscriptMark`)
    }]
  },
  jn = {
    defineNodes: [{
      name: `Subscript`,
      style: d.special(d.content)
    }, {
      name: `SubscriptMark`,
      style: d.processingInstruction
    }],
    parseInline: [{
      name: `Subscript`,
      parse: kn(126, `Subscript`, `SubscriptMark`)
    }]
  },
  Mn = {
    defineNodes: [{
      name: `Emoji`,
      style: d.character
    }],
    parseInline: [{
      name: `Emoji`,
      parse(e, t, n) {
        let r;
        return t != 58 || !(r = /^[a-zA-Z_0-9]+:/.exec(e.slice(n + 1, e.end))) ? -1 : e.addElement(e.elt(`Emoji`, n, n + 1 + r[0].length));
      }
    }]
  },
  Nn = 55,
  Pn = 1,
  Fn = 56,
  In = 2,
  Ln = 57,
  Rn = 3,
  zn = 4,
  Bn = 5,
  Vn = 6,
  Hn = 7,
  Un = 8,
  Wn = 9,
  Gn = 10,
  Kn = 11,
  qn = 12,
  Jn = 13,
  Yn = 58,
  Xn = 14,
  Zn = 15,
  Qn = 59,
  $n = 21,
  er = 23,
  tr = 24,
  nr = 25,
  rr = 27,
  ir = 28,
  ar = 29,
  or = 32,
  sr = 35,
  cr = 37,
  lr = 38,
  ur = 0,
  dr = 1,
  fr = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    command: !0,
    embed: !0,
    frame: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
    menuitem: !0
  },
  pr = {
    dd: !0,
    li: !0,
    optgroup: !0,
    option: !0,
    p: !0,
    rp: !0,
    rt: !0,
    tbody: !0,
    td: !0,
    tfoot: !0,
    th: !0,
    tr: !0
  },
  mr = {
    dd: {
      dd: !0,
      dt: !0
    },
    dt: {
      dd: !0,
      dt: !0
    },
    li: {
      li: !0
    },
    option: {
      option: !0,
      optgroup: !0
    },
    optgroup: {
      optgroup: !0
    },
    p: {
      address: !0,
      article: !0,
      aside: !0,
      blockquote: !0,
      dir: !0,
      div: !0,
      dl: !0,
      fieldset: !0,
      footer: !0,
      form: !0,
      h1: !0,
      h2: !0,
      h3: !0,
      h4: !0,
      h5: !0,
      h6: !0,
      header: !0,
      hgroup: !0,
      hr: !0,
      menu: !0,
      nav: !0,
      ol: !0,
      p: !0,
      pre: !0,
      section: !0,
      table: !0,
      ul: !0
    },
    rp: {
      rp: !0,
      rt: !0
    },
    rt: {
      rp: !0,
      rt: !0
    },
    tbody: {
      tbody: !0,
      tfoot: !0
    },
    td: {
      td: !0,
      th: !0
    },
    tfoot: {
      tbody: !0
    },
    th: {
      td: !0,
      th: !0
    },
    thead: {
      tbody: !0,
      tfoot: !0
    },
    tr: {
      tr: !0
    }
  };
function hr(e) {
  return e == 45 || e == 46 || e == 58 || e >= 65 && e <= 90 || e == 95 || e >= 97 && e <= 122 || e >= 161;
}
var gr = null,
  _r = null,
  vr = 0;
function yr(e, t) {
  let n = e.pos + t;
  if (vr == n && _r == e) return gr;
  let r = e.peek(t),
    i = ``;
  for (; hr(r);) i += String.fromCharCode(r), r = e.peek(++t);
  return _r = e, vr = n, gr = i ? i.toLowerCase() : r == Cr || r == wr ? void 0 : null;
}
var br = 60,
  xr = 62,
  Sr = 47,
  Cr = 63,
  wr = 33,
  Tr = 45;
function Er(e, t) {
  this.name = e, this.parent = t;
}
var Dr = [Vn, Gn, Hn, Un, Wn],
  Or = new p({
    start: null,
    shift(e, t, n, r) {
      return Dr.indexOf(t) > -1 ? new Er(yr(r, 1) || ``, e) : e;
    },
    reduce(e, t) {
      return t == $n && e ? e.parent : e;
    },
    reuse(e, t, n, r) {
      let i = t.type.id;
      return i == Vn || i == cr ? new Er(yr(r, 1) || ``, e) : e;
    },
    strict: !1
  }),
  kr = new i((e, t) => {
    if (e.next != br) {
      e.next < 0 && t.context && e.acceptToken(Yn);
      return;
    }
    e.advance();
    let n = e.next == Sr;
    n && e.advance();
    let r = yr(e, 0);
    if (r === void 0) return;
    if (!r) return e.acceptToken(n ? Zn : Xn);
    let i = t.context ? t.context.name : null;
    if (n) {
      if (r == i) return e.acceptToken(Kn);
      if (i && pr[i]) return e.acceptToken(Yn, -2);
      if (t.dialectEnabled(ur)) return e.acceptToken(qn);
      for (let e = t.context; e; e = e.parent) if (e.name == r) return;
      e.acceptToken(Jn);
    } else {
      if (r == `script`) return e.acceptToken(Hn);
      if (r == `style`) return e.acceptToken(Un);
      if (r == `textarea`) return e.acceptToken(Wn);
      if (fr.hasOwnProperty(r)) return e.acceptToken(Gn);
      i && mr[i] && mr[i][r] ? e.acceptToken(Yn, -1) : e.acceptToken(Vn);
    }
  }, {
    contextual: !0
  }),
  Ar = new i(e => {
    for (let t = 0, n = 0;; n++) {
      if (e.next < 0) {
        n && e.acceptToken(Qn);
        break;
      }
      if (e.next == Tr) t++;else if (e.next == xr && t >= 2) {
        n >= 3 && e.acceptToken(Qn, -2);
        break;
      } else t = 0;
      e.advance();
    }
  });
function jr(e) {
  for (; e; e = e.parent) if (e.name == `svg` || e.name == `math`) return !0;
  return !1;
}
var Mr = new i((e, t) => {
  if (e.next == Sr && e.peek(1) == xr) {
    let n = t.dialectEnabled(dr) || jr(t.context);
    e.acceptToken(n ? Bn : zn, 2);
  } else e.next == xr && e.acceptToken(zn, 1);
});
function Nr(e, t, n) {
  let r = 2 + e.length;
  return new i(i => {
    for (let a = 0, o = 0, s = 0;; s++) {
      if (i.next < 0) {
        s && i.acceptToken(t);
        break;
      }
      if (a == 0 && i.next == br || a == 1 && i.next == Sr || a >= 2 && a < r && i.next == e.charCodeAt(a - 2)) a++, o++;else if (a == r && i.next == xr) {
        s > o ? i.acceptToken(t, -o) : i.acceptToken(n, -(o - 2));
        break;
      } else if ((i.next == 10 || i.next == 13) && s) {
        i.acceptToken(t, 1);
        break;
      } else a = o = 0;
      i.advance();
    }
  });
}
var Pr = Nr(`script`, Nn, Pn),
  Fr = Nr(`style`, Fn, In),
  Ir = Nr(`textarea`, Ln, Rn),
  Lr = s({
    "Text RawText IncompleteTag IncompleteCloseTag": d.content,
    "StartTag StartCloseTag SelfClosingEndTag EndTag": d.angleBracket,
    TagName: d.tagName,
    "MismatchedCloseTag/TagName": [d.tagName, d.invalid],
    AttributeName: d.attributeName,
    "AttributeValue UnquotedAttributeValue": d.attributeValue,
    Is: d.definitionOperator,
    "EntityReference CharacterReference": d.character,
    Comment: d.blockComment,
    ProcessingInst: d.processingInstruction,
    DoctypeDecl: d.documentMeta
  }),
  Rr = c.deserialize({
    version: 14,
    states: ",xOVO!rOOO!ZQ#tO'#CrO!`Q#tO'#C{O!eQ#tO'#DOO!jQ#tO'#DRO!oQ#tO'#DTO!tOaO'#CqO#PObO'#CqO#[OdO'#CqO$kO!rO'#CqOOO`'#Cq'#CqO$rO$fO'#DUO$zQ#tO'#DWO%PQ#tO'#DXOOO`'#Dl'#DlOOO`'#DZ'#DZQVO!rOOO%UQ&rO,59^O%aQ&rO,59gO%lQ&rO,59jO%wQ&rO,59mO&SQ&rO,59oOOOa'#D_'#D_O&_OaO'#CyO&jOaO,59]OOOb'#D`'#D`O&rObO'#C|O&}ObO,59]OOOd'#Da'#DaO'VOdO'#DPO'bOdO,59]OOO`'#Db'#DbO'jO!rO,59]O'qQ#tO'#DSOOO`,59],59]OOOp'#Dc'#DcO'vO$fO,59pOOO`,59p,59pO(OQ#|O,59rO(TQ#|O,59sOOO`-E7X-E7XO(YQ&rO'#CtOOQW'#D['#D[O(hQ&rO1G.xOOOa1G.x1G.xOOO`1G/Z1G/ZO(sQ&rO1G/ROOOb1G/R1G/RO)OQ&rO1G/UOOOd1G/U1G/UO)ZQ&rO1G/XOOO`1G/X1G/XO)fQ&rO1G/ZOOOa-E7]-E7]O)qQ#tO'#CzOOO`1G.w1G.wOOOb-E7^-E7^O)vQ#tO'#C}OOOd-E7_-E7_O){Q#tO'#DQOOO`-E7`-E7`O*QQ#|O,59nOOOp-E7a-E7aOOO`1G/[1G/[OOO`1G/^1G/^OOO`1G/_1G/_O*VQ,UO,59`OOQW-E7Y-E7YOOOa7+$d7+$dOOO`7+$u7+$uOOOb7+$m7+$mOOOd7+$p7+$pOOO`7+$s7+$sO*bQ#|O,59fO*gQ#|O,59iO*lQ#|O,59lOOO`1G/Y1G/YO*qO7[O'#CwO+SOMhO'#CwOOQW1G.z1G.zOOO`1G/Q1G/QOOO`1G/T1G/TOOO`1G/W1G/WOOOO'#D]'#D]O+eO7[O,59cOOQW,59c,59cOOOO'#D^'#D^O+vOMhO,59cOOOO-E7Z-E7ZOOQW1G.}1G.}OOOO-E7[-E7[",
    stateData: `,c~O!_OS~OUSOVPOWQOXROYTO[]O][O^^O_^Oa^Ob^Oc^Od^Oy^O|_O!eZO~OgaO~OgbO~OgcO~OgdO~OgeO~O!XfOPmP![mP~O!YiOQpP![pP~O!ZlORsP![sP~OUSOVPOWQOXROYTOZqO[]O][O^^O_^Oa^Ob^Oc^Od^Oy^O!eZO~O![rO~P#gO!]sO!fuO~OgvO~OgwO~OS|OT}OiyO~OS!POT}OiyO~OS!ROT}OiyO~OS!TOT}OiyO~OS}OT}OiyO~O!XfOPmX![mX~OP!WO![!XO~O!YiOQpX![pX~OQ!ZO![!XO~O!ZlORsX![sX~OR!]O![!XO~O![!XO~P#gOg!_O~O!]sO!f!aO~OS!bO~OS!cO~Oj!dOShXThXihX~OS!fOT!gOiyO~OS!hOT!gOiyO~OS!iOT!gOiyO~OS!jOT!gOiyO~OS!gOT!gOiyO~Og!kO~Og!lO~Og!mO~OS!nO~Ol!qO!a!oO!c!pO~OS!rO~OS!sO~OS!tO~Ob!uOc!uOd!uO!a!wO!b!uO~Ob!xOc!xOd!xO!c!wO!d!xO~Ob!uOc!uOd!uO!a!{O!b!uO~Ob!xOc!xOd!xO!c!{O!d!xO~OT~cbd!ey|!e~`,
    goto: "%q!aPPPPPPPPPPPPPPPPPPPPP!b!hP!nPP!zP!}#Q#T#Z#^#a#g#j#m#s#y!bP!b!bP$P$V$m$s$y%P%V%]%cPPPPPPPP%iX^OX`pXUOX`pezabcde{!O!Q!S!UR!q!dRhUR!XhXVOX`pRkVR!XkXWOX`pRnWR!XnXXOX`pQrXR!XpXYOX`pQ`ORx`Q{aQ!ObQ!QcQ!SdQ!UeZ!e{!O!Q!S!UQ!v!oR!z!vQ!y!pR!|!yQgUR!VgQjVR!YjQmWR![mQpXR!^pQtZR!`tS_O`ToXp",
    nodeNames: `⚠ StartCloseTag StartCloseTag StartCloseTag EndTag SelfClosingEndTag StartTag StartTag StartTag StartTag StartTag StartCloseTag StartCloseTag StartCloseTag IncompleteTag IncompleteCloseTag Document Text EntityReference CharacterReference InvalidEntity Element OpenTag TagName Attribute AttributeName Is AttributeValue UnquotedAttributeValue ScriptText CloseTag OpenTag StyleText CloseTag OpenTag TextareaText CloseTag OpenTag CloseTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag CloseTag DoctypeDecl`,
    maxTerm: 68,
    context: Or,
    nodeProps: [[`closedBy`, -10, 1, 2, 3, 7, 8, 9, 10, 11, 12, 13, `EndTag`, 6, `EndTag SelfClosingEndTag`, -4, 22, 31, 34, 37, `CloseTag`], [`openedBy`, 4, `StartTag StartCloseTag`, 5, `StartTag`, -4, 30, 33, 36, 38, `OpenTag`], [`group`, -10, 14, 15, 18, 19, 20, 21, 40, 41, 42, 43, `Entity`, 17, `Entity TextContent`, -3, 29, 32, 35, `TextContent Entity`], [`isolate`, -11, 22, 30, 31, 33, 34, 36, 37, 38, 39, 42, 43, `ltr`, -3, 27, 28, 40, ``]],
    propSources: [Lr],
    skippedNodes: [0],
    repeatNodeCount: 9,
    tokenData: "!<p!aR!YOX$qXY,QYZ,QZ[$q[]&X]^,Q^p$qpq,Qqr-_rs3_sv-_vw3}wxHYx}-_}!OH{!O!P-_!P!Q$q!Q![-_![!]Mz!]!^-_!^!_!$S!_!`!;x!`!a&X!a!c-_!c!}Mz!}#R-_#R#SMz#S#T1k#T#oMz#o#s-_#s$f$q$f%W-_%W%oMz%o%p-_%p&aMz&a&b-_&b1pMz1p4U-_4U4dMz4d4e-_4e$ISMz$IS$I`-_$I`$IbMz$Ib$Kh-_$Kh%#tMz%#t&/x-_&/x&EtMz&Et&FV-_&FV;'SMz;'S;:j!#|;:j;=`3X<%l?&r-_?&r?AhMz?Ah?BY$q?BY?MnMz?MnO$q!Z$|caPlW!b`!dpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr$qrs&}sv$qvw+Pwx(tx!^$q!^!_*V!_!a&X!a#S$q#S#T&X#T;'S$q;'S;=`+z<%lO$q!R&bXaP!b`!dpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&Xq'UVaP!dpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}P'pTaPOv'kw!^'k!_;'S'k;'S;=`(P<%lO'kP(SP;=`<%l'kp([S!dpOv(Vx;'S(V;'S;=`(h<%lO(Vp(kP;=`<%l(Vq(qP;=`<%l&}a({WaP!b`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t`)jT!b`Or)esv)ew;'S)e;'S;=`)y<%lO)e`)|P;=`<%l)ea*SP;=`<%l(t!Q*^V!b`!dpOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!Q*vP;=`<%l*V!R*|P;=`<%l&XW+UYlWOX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+PW+wP;=`<%l+P!Z+}P;=`<%l$q!a,]`aP!b`!dp!_^OX&XXY,QYZ,QZ]&X]^,Q^p&Xpq,Qqr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!_-ljiSaPlW!b`!dpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_*V!_!a&X!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q[/ebiSlWOX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+PS0rXiSqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0mS1bP;=`<%l0m[1hP;=`<%l/^!V1vciSaP!b`!dpOq&Xqr1krs&}sv1kvw0mwx(tx!P1k!P!Q&X!Q!^1k!^!_*V!_!a&X!a#s1k#s$f&X$f;'S1k;'S;=`3R<%l?Ah1k?Ah?BY&X?BY?Mn1k?MnO&X!V3UP;=`<%l1k!_3[P;=`<%l-_!Z3hV!ahaP!dpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}!_4WiiSlWd!ROX5uXZ7SZ[5u[^7S^p5uqr8trs7Sst>]tw8twx7Sx!P8t!P!Q5u!Q!]8t!]!^/^!^!a7S!a#S8t#S#T;{#T#s8t#s$f5u$f;'S8t;'S;=`>V<%l?Ah8t?Ah?BY5u?BY?Mn8t?MnO5u!Z5zblWOX5uXZ7SZ[5u[^7S^p5uqr5urs7Sst+Ptw5uwx7Sx!]5u!]!^7w!^!a7S!a#S5u#S#T7S#T;'S5u;'S;=`8n<%lO5u!R7VVOp7Sqs7St!]7S!]!^7l!^;'S7S;'S;=`7q<%lO7S!R7qOb!R!R7tP;=`<%l7S!Z8OYlWb!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!Z8qP;=`<%l5u!_8{iiSlWOX5uXZ7SZ[5u[^7S^p5uqr8trs7Sst/^tw8twx7Sx!P8t!P!Q5u!Q!]8t!]!^:j!^!a7S!a#S8t#S#T;{#T#s8t#s$f5u$f;'S8t;'S;=`>V<%l?Ah8t?Ah?BY5u?BY?Mn8t?MnO5u!_:sbiSlWb!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!V<QciSOp7Sqr;{rs7Sst0mtw;{wx7Sx!P;{!P!Q7S!Q!];{!]!^=]!^!a7S!a#s;{#s$f7S$f;'S;{;'S;=`>P<%l?Ah;{?Ah?BY7S?BY?Mn;{?MnO7S!V=dXiSb!Rqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0m!V>SP;=`<%l;{!_>YP;=`<%l8t!_>dhiSlWOX@OXZAYZ[@O[^AY^p@OqrBwrsAYswBwwxAYx!PBw!P!Q@O!Q!]Bw!]!^/^!^!aAY!a#SBw#S#TE{#T#sBw#s$f@O$f;'SBw;'S;=`HS<%l?AhBw?Ah?BY@O?BY?MnBw?MnO@O!Z@TalWOX@OXZAYZ[@O[^AY^p@Oqr@OrsAYsw@OwxAYx!]@O!]!^Az!^!aAY!a#S@O#S#TAY#T;'S@O;'S;=`Bq<%lO@O!RA]UOpAYq!]AY!]!^Ao!^;'SAY;'S;=`At<%lOAY!RAtOc!R!RAwP;=`<%lAY!ZBRYlWc!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!ZBtP;=`<%l@O!_COhiSlWOX@OXZAYZ[@O[^AY^p@OqrBwrsAYswBwwxAYx!PBw!P!Q@O!Q!]Bw!]!^Dj!^!aAY!a#SBw#S#TE{#T#sBw#s$f@O$f;'SBw;'S;=`HS<%l?AhBw?Ah?BY@O?BY?MnBw?MnO@O!_DsbiSlWc!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!VFQbiSOpAYqrE{rsAYswE{wxAYx!PE{!P!QAY!Q!]E{!]!^GY!^!aAY!a#sE{#s$fAY$f;'SE{;'S;=`G|<%l?AhE{?Ah?BYAY?BY?MnE{?MnOAY!VGaXiSc!Rqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0m!VHPP;=`<%lE{!_HVP;=`<%lBw!ZHcW!cxaP!b`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t!aIYliSaPlW!b`!dpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!OKQ!O!P-_!P!Q$q!Q!^-_!^!_*V!_!a&X!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!aK_kiSaPlW!b`!dpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_*V!_!`&X!`!aMS!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!TM_XaP!b`!dp!fQOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!aNZ!ZiSgQaPlW!b`!dpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!OMz!O!PMz!P!Q$q!Q![Mz![!]Mz!]!^-_!^!_*V!_!a&X!a!c-_!c!}Mz!}#R-_#R#SMz#S#T1k#T#oMz#o#s-_#s$f$q$f$}-_$}%OMz%O%W-_%W%oMz%o%p-_%p&aMz&a&b-_&b1pMz1p4UMz4U4dMz4d4e-_4e$ISMz$IS$I`-_$I`$IbMz$Ib$Je-_$Je$JgMz$Jg$Kh-_$Kh%#tMz%#t&/x-_&/x&EtMz&Et&FV-_&FV;'SMz;'S;:j!#|;:j;=`3X<%l?&r-_?&r?AhMz?Ah?BY$q?BY?MnMz?MnO$q!a!$PP;=`<%lMz!R!$ZY!b`!dpOq*Vqr!$yrs(Vsv*Vwx)ex!a*V!a!b!4t!b;'S*V;'S;=`*s<%lO*V!R!%Q]!b`!dpOr*Vrs(Vsv*Vwx)ex}*V}!O!%y!O!f*V!f!g!']!g#W*V#W#X!0`#X;'S*V;'S;=`*s<%lO*V!R!&QX!b`!dpOr*Vrs(Vsv*Vwx)ex}*V}!O!&m!O;'S*V;'S;=`*s<%lO*V!R!&vV!b`!dp!ePOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!'dX!b`!dpOr*Vrs(Vsv*Vwx)ex!q*V!q!r!(P!r;'S*V;'S;=`*s<%lO*V!R!(WX!b`!dpOr*Vrs(Vsv*Vwx)ex!e*V!e!f!(s!f;'S*V;'S;=`*s<%lO*V!R!(zX!b`!dpOr*Vrs(Vsv*Vwx)ex!v*V!v!w!)g!w;'S*V;'S;=`*s<%lO*V!R!)nX!b`!dpOr*Vrs(Vsv*Vwx)ex!{*V!{!|!*Z!|;'S*V;'S;=`*s<%lO*V!R!*bX!b`!dpOr*Vrs(Vsv*Vwx)ex!r*V!r!s!*}!s;'S*V;'S;=`*s<%lO*V!R!+UX!b`!dpOr*Vrs(Vsv*Vwx)ex!g*V!g!h!+q!h;'S*V;'S;=`*s<%lO*V!R!+xY!b`!dpOr!+qrs!,hsv!+qvw!-Swx!.[x!`!+q!`!a!/j!a;'S!+q;'S;=`!0Y<%lO!+qq!,mV!dpOv!,hvx!-Sx!`!,h!`!a!-q!a;'S!,h;'S;=`!.U<%lO!,hP!-VTO!`!-S!`!a!-f!a;'S!-S;'S;=`!-k<%lO!-SP!-kO|PP!-nP;=`<%l!-Sq!-xS!dp|POv(Vx;'S(V;'S;=`(h<%lO(Vq!.XP;=`<%l!,ha!.aX!b`Or!.[rs!-Ssv!.[vw!-Sw!`!.[!`!a!.|!a;'S!.[;'S;=`!/d<%lO!.[a!/TT!b`|POr)esv)ew;'S)e;'S;=`)y<%lO)ea!/gP;=`<%l!.[!R!/sV!b`!dp|POr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!0]P;=`<%l!+q!R!0gX!b`!dpOr*Vrs(Vsv*Vwx)ex#c*V#c#d!1S#d;'S*V;'S;=`*s<%lO*V!R!1ZX!b`!dpOr*Vrs(Vsv*Vwx)ex#V*V#V#W!1v#W;'S*V;'S;=`*s<%lO*V!R!1}X!b`!dpOr*Vrs(Vsv*Vwx)ex#h*V#h#i!2j#i;'S*V;'S;=`*s<%lO*V!R!2qX!b`!dpOr*Vrs(Vsv*Vwx)ex#m*V#m#n!3^#n;'S*V;'S;=`*s<%lO*V!R!3eX!b`!dpOr*Vrs(Vsv*Vwx)ex#d*V#d#e!4Q#e;'S*V;'S;=`*s<%lO*V!R!4XX!b`!dpOr*Vrs(Vsv*Vwx)ex#X*V#X#Y!+q#Y;'S*V;'S;=`*s<%lO*V!R!4{Y!b`!dpOr!4trs!5ksv!4tvw!6Vwx!8]x!a!4t!a!b!:]!b;'S!4t;'S;=`!;r<%lO!4tq!5pV!dpOv!5kvx!6Vx!a!5k!a!b!7W!b;'S!5k;'S;=`!8V<%lO!5kP!6YTO!a!6V!a!b!6i!b;'S!6V;'S;=`!7Q<%lO!6VP!6lTO!`!6V!`!a!6{!a;'S!6V;'S;=`!7Q<%lO!6VP!7QOyPP!7TP;=`<%l!6Vq!7]V!dpOv!5kvx!6Vx!`!5k!`!a!7r!a;'S!5k;'S;=`!8V<%lO!5kq!7yS!dpyPOv(Vx;'S(V;'S;=`(h<%lO(Vq!8YP;=`<%l!5ka!8bX!b`Or!8]rs!6Vsv!8]vw!6Vw!a!8]!a!b!8}!b;'S!8];'S;=`!:V<%lO!8]a!9SX!b`Or!8]rs!6Vsv!8]vw!6Vw!`!8]!`!a!9o!a;'S!8];'S;=`!:V<%lO!8]a!9vT!b`yPOr)esv)ew;'S)e;'S;=`)y<%lO)ea!:YP;=`<%l!8]!R!:dY!b`!dpOr!4trs!5ksv!4tvw!6Vwx!8]x!`!4t!`!a!;S!a;'S!4t;'S;=`!;r<%lO!4t!R!;]V!b`!dpyPOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!;uP;=`<%l!4t!V!<TXjSaP!b`!dpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X",
    tokenizers: [Pr, Fr, Ir, Mr, kr, Ar, 0, 1, 2, 3, 4, 5],
    topRules: {
      Document: [0, 16]
    },
    dialects: {
      noMatch: 0,
      selfClosing: 515
    },
    tokenPrec: 517
  });
function zr(e, t) {
  let n = Object.create(null);
  for (let r of e.getChildren(tr)) {
    let e = r.getChild(nr),
      i = r.getChild(rr) || r.getChild(ir);
    e && (n[t.read(e.from, e.to)] = i ? i.type.id == rr ? t.read(i.from + 1, i.to - 1) : t.read(i.from, i.to) : ``);
  }
  return n;
}
function Br(e, t) {
  let n = e.getChild(er);
  return n ? t.read(n.from, n.to) : ` `;
}
function Vr(e, t, n) {
  let r;
  for (let i of n) if (!i.attrs || i.attrs(r ||= zr(e.node.parent.firstChild, t))) return {
    parser: i.parser,
    bracketed: !0
  };
  return null;
}
function Hr(e = [], t = []) {
  let n = [],
    r = [],
    i = [],
    a = [];
  for (let t of e) (t.tag == `script` ? n : t.tag == `style` ? r : t.tag == `textarea` ? i : a).push(t);
  let o = t.length ? Object.create(null) : null;
  for (let e of t) (o[e.name] || (o[e.name] = [])).push(e);
  return m((e, t) => {
    let s = e.type.id;
    if (s == ar) return Vr(e, t, n);
    if (s == or) return Vr(e, t, r);
    if (s == sr) return Vr(e, t, i);
    if (s == $n && a.length) {
      let n = e.node,
        r = n.firstChild,
        i = r && Br(r, t),
        o;
      if (i) {
        for (let e of a) if (e.tag == i && (!e.attrs || e.attrs(o ||= zr(r, t)))) {
          let t = n.lastChild,
            i = t.type.id == lr ? t.from : n.to;
          if (i > r.to) return {
            parser: e.parser,
            overlay: [{
              from: r.to,
              to: i
            }]
          };
        }
      }
    }
    if (o && s == tr) {
      let n = e.node,
        r;
      if (r = n.firstChild) {
        let e = o[t.read(r.from, r.to)];
        if (e) for (let r of e) {
          if (r.tagName && r.tagName != Br(n.parent, t)) continue;
          let e = n.lastChild;
          if (e.type.id == rr) {
            let t = e.from + 1,
              n = e.lastChild,
              i = e.to - (n && n.isError ? 0 : 1);
            if (i > t) return {
              parser: r.parser,
              overlay: [{
                from: t,
                to: i
              }],
              bracketed: !0
            };
          } else if (e.type.id == ir) return {
            parser: r.parser,
            overlay: [{
              from: e.from,
              to: e.to
            }]
          };
        }
      }
    }
    return null;
  });
}
var Ur = [`_blank`, `_self`, `_top`, `_parent`],
  Wr = [`ascii`, `utf-8`, `utf-16`, `latin1`, `latin1`],
  Gr = [`get`, `post`, `put`, `delete`],
  Kr = [`application/x-www-form-urlencoded`, `multipart/form-data`, `text/plain`],
  z = [`true`, `false`],
  B = {},
  qr = {
    a: {
      attrs: {
        href: null,
        ping: null,
        type: null,
        media: null,
        target: Ur,
        hreflang: null
      }
    },
    abbr: B,
    address: B,
    area: {
      attrs: {
        alt: null,
        coords: null,
        href: null,
        target: null,
        ping: null,
        media: null,
        hreflang: null,
        type: null,
        shape: [`default`, `rect`, `circle`, `poly`]
      }
    },
    article: B,
    aside: B,
    audio: {
      attrs: {
        src: null,
        mediagroup: null,
        crossorigin: [`anonymous`, `use-credentials`],
        preload: [`none`, `metadata`, `auto`],
        autoplay: [`autoplay`],
        loop: [`loop`],
        controls: [`controls`]
      }
    },
    b: B,
    base: {
      attrs: {
        href: null,
        target: Ur
      }
    },
    bdi: B,
    bdo: B,
    blockquote: {
      attrs: {
        cite: null
      }
    },
    body: B,
    br: B,
    button: {
      attrs: {
        form: null,
        formaction: null,
        name: null,
        value: null,
        autofocus: [`autofocus`],
        disabled: [`autofocus`],
        formenctype: Kr,
        formmethod: Gr,
        formnovalidate: [`novalidate`],
        formtarget: Ur,
        type: [`submit`, `reset`, `button`]
      }
    },
    canvas: {
      attrs: {
        width: null,
        height: null
      }
    },
    caption: B,
    center: B,
    cite: B,
    code: B,
    col: {
      attrs: {
        span: null
      }
    },
    colgroup: {
      attrs: {
        span: null
      }
    },
    command: {
      attrs: {
        type: [`command`, `checkbox`, `radio`],
        label: null,
        icon: null,
        radiogroup: null,
        command: null,
        title: null,
        disabled: [`disabled`],
        checked: [`checked`]
      }
    },
    data: {
      attrs: {
        value: null
      }
    },
    datagrid: {
      attrs: {
        disabled: [`disabled`],
        multiple: [`multiple`]
      }
    },
    datalist: {
      attrs: {
        data: null
      }
    },
    dd: B,
    del: {
      attrs: {
        cite: null,
        datetime: null
      }
    },
    details: {
      attrs: {
        open: [`open`]
      }
    },
    dfn: B,
    div: B,
    dl: B,
    dt: B,
    em: B,
    embed: {
      attrs: {
        src: null,
        type: null,
        width: null,
        height: null
      }
    },
    eventsource: {
      attrs: {
        src: null
      }
    },
    fieldset: {
      attrs: {
        disabled: [`disabled`],
        form: null,
        name: null
      }
    },
    figcaption: B,
    figure: B,
    footer: B,
    form: {
      attrs: {
        action: null,
        name: null,
        "accept-charset": Wr,
        autocomplete: [`on`, `off`],
        enctype: Kr,
        method: Gr,
        novalidate: [`novalidate`],
        target: Ur
      }
    },
    h1: B,
    h2: B,
    h3: B,
    h4: B,
    h5: B,
    h6: B,
    head: {
      children: [`title`, `base`, `link`, `style`, `meta`, `script`, `noscript`, `command`]
    },
    header: B,
    hgroup: B,
    hr: B,
    html: {
      attrs: {
        manifest: null
      }
    },
    i: B,
    iframe: {
      attrs: {
        src: null,
        srcdoc: null,
        name: null,
        width: null,
        height: null,
        sandbox: [`allow-top-navigation`, `allow-same-origin`, `allow-forms`, `allow-scripts`],
        seamless: [`seamless`]
      }
    },
    img: {
      attrs: {
        alt: null,
        src: null,
        ismap: null,
        usemap: null,
        width: null,
        height: null,
        crossorigin: [`anonymous`, `use-credentials`]
      }
    },
    input: {
      attrs: {
        alt: null,
        dirname: null,
        form: null,
        formaction: null,
        height: null,
        list: null,
        max: null,
        maxlength: null,
        min: null,
        name: null,
        pattern: null,
        placeholder: null,
        size: null,
        src: null,
        step: null,
        value: null,
        width: null,
        accept: [`audio/*`, `video/*`, `image/*`],
        autocomplete: [`on`, `off`],
        autofocus: [`autofocus`],
        checked: [`checked`],
        disabled: [`disabled`],
        formenctype: Kr,
        formmethod: Gr,
        formnovalidate: [`novalidate`],
        formtarget: Ur,
        multiple: [`multiple`],
        readonly: [`readonly`],
        required: [`required`],
        type: [`hidden`, `text`, `search`, `tel`, `url`, `email`, `password`, `datetime`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color`, `checkbox`, `radio`, `file`, `submit`, `image`, `reset`, `button`]
      }
    },
    ins: {
      attrs: {
        cite: null,
        datetime: null
      }
    },
    kbd: B,
    keygen: {
      attrs: {
        challenge: null,
        form: null,
        name: null,
        autofocus: [`autofocus`],
        disabled: [`disabled`],
        keytype: [`RSA`]
      }
    },
    label: {
      attrs: {
        for: null,
        form: null
      }
    },
    legend: B,
    li: {
      attrs: {
        value: null
      }
    },
    link: {
      attrs: {
        href: null,
        type: null,
        hreflang: null,
        media: null,
        sizes: [`all`, `16x16`, `16x16 32x32`, `16x16 32x32 64x64`]
      }
    },
    map: {
      attrs: {
        name: null
      }
    },
    mark: B,
    menu: {
      attrs: {
        label: null,
        type: [`list`, `context`, `toolbar`]
      }
    },
    meta: {
      attrs: {
        content: null,
        charset: Wr,
        name: [`viewport`, `application-name`, `author`, `description`, `generator`, `keywords`],
        "http-equiv": [`content-language`, `content-type`, `default-style`, `refresh`]
      }
    },
    meter: {
      attrs: {
        value: null,
        min: null,
        low: null,
        high: null,
        max: null,
        optimum: null
      }
    },
    nav: B,
    noscript: B,
    object: {
      attrs: {
        data: null,
        type: null,
        name: null,
        usemap: null,
        form: null,
        width: null,
        height: null,
        typemustmatch: [`typemustmatch`]
      }
    },
    ol: {
      attrs: {
        reversed: [`reversed`],
        start: null,
        type: [`1`, `a`, `A`, `i`, `I`]
      },
      children: [`li`, `script`, `template`, `ul`, `ol`]
    },
    optgroup: {
      attrs: {
        disabled: [`disabled`],
        label: null
      }
    },
    option: {
      attrs: {
        disabled: [`disabled`],
        label: null,
        selected: [`selected`],
        value: null
      }
    },
    output: {
      attrs: {
        for: null,
        form: null,
        name: null
      }
    },
    p: B,
    param: {
      attrs: {
        name: null,
        value: null
      }
    },
    pre: B,
    progress: {
      attrs: {
        value: null,
        max: null
      }
    },
    q: {
      attrs: {
        cite: null
      }
    },
    rp: B,
    rt: B,
    ruby: B,
    samp: B,
    script: {
      attrs: {
        type: [`text/javascript`],
        src: null,
        async: [`async`],
        defer: [`defer`],
        charset: Wr
      }
    },
    section: B,
    select: {
      attrs: {
        form: null,
        name: null,
        size: null,
        autofocus: [`autofocus`],
        disabled: [`disabled`],
        multiple: [`multiple`]
      }
    },
    slot: {
      attrs: {
        name: null
      }
    },
    small: B,
    source: {
      attrs: {
        src: null,
        type: null,
        media: null
      }
    },
    span: B,
    strong: B,
    style: {
      attrs: {
        type: [`text/css`],
        media: null,
        scoped: null
      }
    },
    sub: B,
    summary: B,
    sup: B,
    table: B,
    tbody: B,
    td: {
      attrs: {
        colspan: null,
        rowspan: null,
        headers: null
      }
    },
    template: B,
    textarea: {
      attrs: {
        dirname: null,
        form: null,
        maxlength: null,
        name: null,
        placeholder: null,
        rows: null,
        cols: null,
        autofocus: [`autofocus`],
        disabled: [`disabled`],
        readonly: [`readonly`],
        required: [`required`],
        wrap: [`soft`, `hard`]
      }
    },
    tfoot: B,
    th: {
      attrs: {
        colspan: null,
        rowspan: null,
        headers: null,
        scope: [`row`, `col`, `rowgroup`, `colgroup`]
      }
    },
    thead: B,
    time: {
      attrs: {
        datetime: null
      }
    },
    title: B,
    tr: B,
    track: {
      attrs: {
        src: null,
        label: null,
        default: null,
        kind: [`subtitles`, `captions`, `descriptions`, `chapters`, `metadata`],
        srclang: null
      }
    },
    ul: {
      children: [`li`, `script`, `template`, `ul`, `ol`]
    },
    var: B,
    video: {
      attrs: {
        src: null,
        poster: null,
        width: null,
        height: null,
        crossorigin: [`anonymous`, `use-credentials`],
        preload: [`auto`, `metadata`, `none`],
        autoplay: [`autoplay`],
        mediagroup: [`movie`],
        muted: [`muted`],
        controls: [`controls`]
      }
    },
    wbr: B
  },
  Jr = {
    accesskey: null,
    class: null,
    contenteditable: z,
    contextmenu: null,
    dir: [`ltr`, `rtl`, `auto`],
    draggable: [`true`, `false`, `auto`],
    dropzone: [`copy`, `move`, `link`, `string:`, `file:`],
    hidden: [`hidden`],
    id: null,
    inert: [`inert`],
    itemid: null,
    itemprop: null,
    itemref: null,
    itemscope: [`itemscope`],
    itemtype: null,
    lang: [`ar`, `bn`, `de`, `en-GB`, `en-US`, `es`, `fr`, `hi`, `id`, `ja`, `pa`, `pt`, `ru`, `tr`, `zh`],
    spellcheck: z,
    autocorrect: z,
    autocapitalize: z,
    style: null,
    tabindex: null,
    title: null,
    translate: [`yes`, `no`],
    rel: [`stylesheet`, `alternate`, `author`, `bookmark`, `help`, `license`, `next`, `nofollow`, `noreferrer`, `prefetch`, `prev`, `search`, `tag`],
    role: `alert application article banner button cell checkbox complementary contentinfo dialog document feed figure form grid gridcell heading img list listbox listitem main navigation region row rowgroup search switch tab table tabpanel textbox timer`.split(` `),
    "aria-activedescendant": null,
    "aria-atomic": z,
    "aria-autocomplete": [`inline`, `list`, `both`, `none`],
    "aria-busy": z,
    "aria-checked": [`true`, `false`, `mixed`, `undefined`],
    "aria-controls": null,
    "aria-describedby": null,
    "aria-disabled": z,
    "aria-dropeffect": null,
    "aria-expanded": [`true`, `false`, `undefined`],
    "aria-flowto": null,
    "aria-grabbed": [`true`, `false`, `undefined`],
    "aria-haspopup": z,
    "aria-hidden": z,
    "aria-invalid": [`true`, `false`, `grammar`, `spelling`],
    "aria-label": null,
    "aria-labelledby": null,
    "aria-level": null,
    "aria-live": [`off`, `polite`, `assertive`],
    "aria-multiline": z,
    "aria-multiselectable": z,
    "aria-owns": null,
    "aria-posinset": null,
    "aria-pressed": [`true`, `false`, `mixed`, `undefined`],
    "aria-readonly": z,
    "aria-relevant": null,
    "aria-required": z,
    "aria-selected": [`true`, `false`, `undefined`],
    "aria-setsize": null,
    "aria-sort": [`ascending`, `descending`, `none`, `other`],
    "aria-valuemax": null,
    "aria-valuemin": null,
    "aria-valuenow": null,
    "aria-valuetext": null
  },
  Yr = `beforeunload copy cut dragstart dragover dragleave dragenter dragend drag paste focus blur change click load mousedown mouseenter mouseleave mouseup keydown keyup resize scroll unload`.split(` `).map(e => `on` + e);
for (let e of Yr) Jr[e] = null;
var Xr = class {
  constructor(e, t) {
    this.tags = {
      ...qr,
      ...e
    }, this.globalAttrs = {
      ...Jr,
      ...t
    }, this.allTags = Object.keys(this.tags), this.globalAttrNames = Object.keys(this.globalAttrs);
  }
};
Xr.default = new Xr();
function V(e, t, n = e.length) {
  if (!t) return ``;
  let r = t.firstChild,
    i = r && r.getChild(`TagName`);
  return i ? e.sliceString(i.from, Math.min(i.to, n)) : ``;
}
function Zr(e, t = !1) {
  for (; e; e = e.parent) if (e.name == `Element`) {
    if (t) t = !1;else return e;
  }
  return null;
}
function Qr(e, t, n) {
  return n.tags[V(e, Zr(t))]?.children || n.allTags;
}
function $r(e, t) {
  let n = [];
  for (let r = Zr(t); r && !r.type.isTop; r = Zr(r.parent)) {
    let i = V(e, r);
    if (i && r.lastChild.name == `CloseTag`) break;
    i && n.indexOf(i) < 0 && (t.name == `EndTag` || t.from >= r.firstChild.to) && n.push(i);
  }
  return n;
}
var ei = /^[:\-\.\w\u00b7-\uffff]*$/;
function ti(e, t, n, r, i) {
  let a = /\s*>/.test(e.sliceDoc(i, i + 5)) ? `` : `>`,
    o = Zr(n, n.name == `StartTag` || n.name == `TagName`);
  return {
    from: r,
    to: i,
    options: Qr(e.doc, o, t).map(e => ({
      label: e,
      type: `type`
    })).concat($r(e.doc, n).map((e, t) => ({
      label: `/` + e,
      apply: `/` + e + a,
      type: `type`,
      boost: 99 - t
    }))),
    validFor: /^\/?[:\-\.\w\u00b7-\uffff]*$/
  };
}
function ni(e, t, n, r) {
  let i = /\s*>/.test(e.sliceDoc(r, r + 5)) ? `` : `>`;
  return {
    from: n,
    to: r,
    options: $r(e.doc, t).map((e, t) => ({
      label: e,
      apply: e + i,
      type: `type`,
      boost: 99 - t
    })),
    validFor: ei
  };
}
function ri(e, t, n, r) {
  let i = [],
    a = 0;
  for (let r of Qr(e.doc, n, t)) i.push({
    label: `<` + r,
    type: `type`
  });
  for (let t of $r(e.doc, n)) i.push({
    label: `</` + t + `>`,
    type: `type`,
    boost: 99 - a++
  });
  return {
    from: r,
    to: r,
    options: i,
    validFor: /^<\/?[:\-\.\w\u00b7-\uffff]*$/
  };
}
function ii(e, t, n, r, i) {
  let a = Zr(n),
    o = a ? t.tags[V(e.doc, a)] : null,
    s = o && o.attrs ? Object.keys(o.attrs) : [];
  return {
    from: r,
    to: i,
    options: (o && o.globalAttrs === !1 ? s : s.length ? s.concat(t.globalAttrNames) : t.globalAttrNames).map(e => ({
      label: e,
      type: `property`
    })),
    validFor: ei
  };
}
function ai(e, t, n, r, i) {
  let a = n.parent?.getChild(`AttributeName`),
    o = [],
    s;
  if (a) {
    let c = e.sliceDoc(a.from, a.to),
      l = t.globalAttrs[c];
    if (!l) {
      let r = Zr(n),
        i = r ? t.tags[V(e.doc, r)] : null;
      l = i?.attrs && i.attrs[c];
    }
    if (l) {
      let t = e.sliceDoc(r, i).toLowerCase(),
        n = `"`,
        a = `"`;
      /^['"]/.test(t) ? (s = t[0] == `"` ? /^[^"]*$/ : /^[^']*$/, n = ``, a = e.sliceDoc(i, i + 1) == t[0] ? `` : t[0], t = t.slice(1), r++) : s = /^[^\s<>='"]*$/;
      for (let e of l) o.push({
        label: e,
        apply: n + e + a,
        type: `constant`
      });
    }
  }
  return {
    from: r,
    to: i,
    options: o,
    validFor: s
  };
}
function oi(e, t) {
  let {
      state: n,
      pos: r
    } = t,
    i = y(n).resolveInner(r, -1),
    a = i.resolve(r);
  for (let e = r, t; a == i && (t = i.childBefore(e));) {
    let n = t.lastChild;
    if (!n || !n.type.isError || n.from < n.to) break;
    a = i = t, e = n.from;
  }
  return i.name == `TagName` ? i.parent && /CloseTag$/.test(i.parent.name) ? ni(n, i, i.from, r) : ti(n, e, i, i.from, r) : i.name == `StartTag` || i.name == `IncompleteTag` ? ti(n, e, i, r, r) : i.name == `StartCloseTag` || i.name == `IncompleteCloseTag` ? ni(n, i, r, r) : i.name == `OpenTag` || i.name == `SelfClosingTag` || i.name == `AttributeName` ? ii(n, e, i, i.name == `AttributeName` ? i.from : r, r) : i.name == `Is` || i.name == `AttributeValue` || i.name == `UnquotedAttributeValue` ? ai(n, e, i, i.name == `Is` ? r : i.from, r) : t.explicit && (a.name == `Element` || a.name == `Text` || a.name == `Document`) ? ri(n, e, i, r) : null;
}
function si(e) {
  return oi(Xr.default, e);
}
function ci(e) {
  let {
      extraTags: t,
      extraGlobalAttributes: n
    } = e,
    r = n || t ? new Xr(t, n) : Xr.default;
  return e => oi(r, e);
}
var li = Re.parser.configure({
    top: `SingleExpression`
  }),
  ui = [{
    tag: `script`,
    attrs: e => e.type == `text/typescript` || e.lang == `ts`,
    parser: E.parser
  }, {
    tag: `script`,
    attrs: e => e.type == `text/babel` || e.type == `text/jsx`,
    parser: Ge.parser
  }, {
    tag: `script`,
    attrs: e => e.type == `text/typescript-jsx`,
    parser: je.parser
  }, {
    tag: `script`,
    attrs(e) {
      return /^(importmap|speculationrules|application\/(.+\+)?json)$/i.test(e.type);
    },
    parser: li
  }, {
    tag: `script`,
    attrs(e) {
      return !e.type || /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i.test(e.type);
    },
    parser: Re.parser
  }, {
    tag: `style`,
    attrs(e) {
      return (!e.lang || e.lang == `css`) && (!e.type || /^(text\/)?(x-)?(stylesheet|css)$/i.test(e.type));
    },
    parser: Ee.parser
  }],
  di = [{
    name: `style`,
    parser: Ee.parser.configure({
      top: `Styles`
    })
  }].concat(Yr.map(e => ({
    name: e,
    parser: Re.parser
  }))),
  fi = Ae.define({
    name: `html`,
    parser: Rr.configure({
      props: [h.add({
        Element(e) {
          let t = /^(\s*)(<\/)?/.exec(e.textAfter);
          return e.node.to <= e.pos + t[0].length ? e.continue() : e.lineIndent(e.node.from) + (t[2] ? 0 : e.unit);
        },
        "OpenTag CloseTag SelfClosingTag"(e) {
          return e.column(e.node.from) + e.unit;
        },
        Document(e) {
          if (e.pos + /\s*/.exec(e.textAfter)[0].length < e.node.to) return e.continue();
          let t = null,
            n;
          for (let n = e.node;;) {
            let e = n.lastChild;
            if (!e || e.name != `Element` || e.to != n.to) break;
            t = n = e;
          }
          return t && !((n = t.lastChild) && (n.name == `CloseTag` || n.name == `SelfClosingTag`)) ? e.lineIndent(t.from) + e.unit : null;
        }
      }), re.add({
        Element(e) {
          let t = e.firstChild,
            n = e.lastChild;
          return !t || t.name != `OpenTag` ? null : {
            from: t.to,
            to: n.name == `CloseTag` ? n.from : e.to
          };
        }
      }), nt.add({
        "OpenTag CloseTag": e => e.getChild(`TagName`)
      })]
    }),
    languageData: {
      commentTokens: {
        block: {
          open: `<!--`,
          close: `-->`
        }
      },
      indentOnInput: /^\s*<\/\w+\W$/,
      wordChars: `-_`
    }
  }),
  pi = fi.configure({
    wrap: Hr(ui, di)
  });
function mi(e = {}) {
  let t = ``,
    n;
  e.matchClosingTags === !1 && (t = `noMatch`), e.selfClosingTags === !0 && (t = (t ? t + ` ` : ``) + `selfClosing`), (e.nestedLanguages && e.nestedLanguages.length || e.nestedAttributes && e.nestedAttributes.length) && (n = Hr((e.nestedLanguages || []).concat(ui), (e.nestedAttributes || []).concat(di)));
  let r = n ? fi.configure({
    wrap: n,
    dialect: t
  }) : t ? pi.configure({
    dialect: t
  }) : pi;
  return new Qe(r, [pi.data.of({
    autocomplete: ci(e)
  }), e.autoCloseTags === !1 ? [] : _i, Ye().support, we().support]);
}
var hi = new Set(`area base br col command embed frame hr img input keygen link meta param source track wbr menuitem`.split(` `));
function gi(e, t, n) {
  for (;;) {
    if (t.lastChild?.name != `CloseTag`) return !1;
    let r = t.parent;
    if (!r || V(e, r) != n) return !0;
    t = r;
  }
}
var _i = g.inputHandler.of((e, t, n, r, i) => {
    if (e.composing || e.state.readOnly || t != n || r != `>` && r != `/` || !pi.isActiveAt(e.state, t, -1)) return !1;
    let a = i(),
      {
        state: o
      } = a,
      s = o.changeByRange(e => {
        let t = o.doc.sliceString(e.from - 1, e.to) == r,
          {
            head: n
          } = e,
          i = y(o).resolveInner(n, -1),
          a;
        if (t && r == `>` && i.name == `EndTag`) {
          let t = i.parent;
          if ((a = V(o.doc, t.parent, n)) && !hi.has(a) && !gi(o.doc, t.parent, a)) return {
            range: e,
            changes: {
              from: n,
              to: n + +(o.doc.sliceString(n, n + 1) === `>`),
              insert: `</${a}>`
            }
          };
        } else if (t && r == `/` && i.name == `IncompleteCloseTag`) {
          let e = i.parent;
          if (i.from == n - 2 && e.lastChild?.name != `CloseTag` && (a = V(o.doc, e, n)) && !hi.has(a)) {
            let e = n + +(o.doc.sliceString(n, n + 1) === `>`),
              t = `${a}>`;
            return {
              range: j.cursor(n + t.length, -1),
              changes: {
                from: n,
                to: e,
                insert: t
              }
            };
          }
        }
        return {
          range: e
        };
      });
    return !s.changes.empty && (e.dispatch([a, o.update(s, {
      userEvent: `input.complete`,
      scrollIntoView: !0
    })]), !0);
  }),
  vi = te({
    commentTokens: {
      block: {
        open: `<!--`,
        close: `-->`
      }
    }
  }),
  yi = new a(),
  bi = cn.configure({
    props: [re.add(e => !e.is(`Block`) || e.is(`Document`) || xi(e) != null || Si(e) ? void 0 : (e, t) => ({
      from: t.doc.lineAt(e.from).to,
      to: e.to
    })), yi.add(xi), h.add({
      Document: () => null
    }), le.add({
      Document: vi
    })]
  });
function xi(e) {
  let t = /^(?:ATX|Setext)Heading(\d)$/.exec(e.name);
  return t ? +t[1] : void 0;
}
function Si(e) {
  return e.name == `OrderedList` || e.name == `BulletList`;
}
function Ci(e, t) {
  let n = e;
  for (;;) {
    let e = n.nextSibling,
      r;
    if (!e || (r = xi(e.type)) != null && r <= t) break;
    n = e;
  }
  return n.to;
}
var wi = ne.of((e, t, n) => {
  for (let r = y(e).resolveInner(n, -1); r && !(r.from < t); r = r.parent) {
    let e = r.type.prop(yi);
    if (e == null) continue;
    let t = Ci(r, e);
    if (t > n) return {
      from: n,
      to: t
    };
  }
  return null;
});
function Ti(e) {
  return new Oe(vi, e, [], `markdown`);
}
var Ei = Ti(bi),
  Di = Ti(bi.configure([On, jn, An, Mn, {
    props: [re.add({
      Table: (e, t) => ({
        from: t.doc.lineAt(e.from).to,
        to: e.to
      })
    })]
  }]));
function Oi(e, t) {
  return n => {
    if (n && e) {
      let t = null;
      if (n = /\S*/.exec(n)[0], t = typeof e == `function` ? e(n) : ve.matchLanguageName(e, n, !0), t instanceof ve) return t.support ? t.support.language.parser : it.getSkippingParser(t.load());
      if (t) return t.parser;
    }
    return t ? t.parser : null;
  };
}
var ki = class {
  constructor(e, t, n, r, i, a, o) {
    this.node = e, this.from = t, this.to = n, this.spaceBefore = r, this.spaceAfter = i, this.type = a, this.item = o;
  }
  blank(e, t = !0) {
    let n = this.spaceBefore + (this.node.name == `Blockquote` ? `>` : ``);
    if (e != null) {
      for (; n.length < e;) n += ` `;
      return n;
    }
    for (let e = this.to - this.from - n.length - this.spaceAfter.length; e > 0; e--) n += ` `;
    return n + (t ? this.spaceAfter : ``);
  }
  marker(e, t) {
    let n = this.node.name == `OrderedList` ? String(+ji(this.item, e)[2] + t) : ``;
    return this.spaceBefore + n + this.type + this.spaceAfter;
  }
};
function Ai(e, t) {
  let n = [],
    r = [];
  for (let t = e; t; t = t.parent) {
    if (t.name == `FencedCode`) return r;
    (t.name == `ListItem` || t.name == `Blockquote`) && n.push(t);
  }
  for (let e = n.length - 1; e >= 0; e--) {
    let i = n[e],
      a,
      o = t.lineAt(i.from),
      s = i.from - o.from;
    if (i.name == `Blockquote` && (a = /^ *>( ?)/.exec(o.text.slice(s)))) r.push(new ki(i, s, s + a[0].length, ``, a[1], `>`, null));else if (i.name == `ListItem` && i.parent.name == `OrderedList` && (a = /^( *)\d+([.)])( *)/.exec(o.text.slice(s)))) {
      let e = a[3],
        t = a[0].length;
      e.length >= 4 && (e = e.slice(0, e.length - 4), t -= 4), r.push(new ki(i.parent, s, s + t, a[1], e, a[2], i));
    } else if (i.name == `ListItem` && i.parent.name == `BulletList` && (a = /^( *)([-+*])( {1,4}\[[ xX]\])?( +)/.exec(o.text.slice(s)))) {
      let e = a[4],
        t = a[0].length;
      e.length > 4 && (e = e.slice(0, e.length - 4), t -= 4);
      let n = a[2];
      a[3] && (n += a[3].replace(/[xX]/, ` `)), r.push(new ki(i.parent, s, s + t, a[1], e, n, i));
    }
  }
  return r;
}
function ji(e, t) {
  return /^(\s*)(\d+)(?=[.)])/.exec(t.sliceString(e.from, e.from + 10));
}
function Mi(e, t, n, r = 0) {
  for (let i = -1, a = e;;) {
    if (a.name == `ListItem`) {
      let e = ji(a, t),
        o = +e[2];
      if (i >= 0) {
        if (o != i + 1) return;
        n.push({
          from: a.from + e[1].length,
          to: a.from + e[0].length,
          insert: String(i + 2 + r)
        });
      }
      i = o;
    }
    let e = a.nextSibling;
    if (!e) break;
    a = e;
  }
}
function Ni(e, t) {
  let n = /^[ \t]*/.exec(e)[0].length;
  if (!n || t.facet(x) != `	`) return e;
  let r = w(e, 4, n),
    i = ``;
  for (let e = r; e > 0;) e >= 4 ? (i += `	`, e -= 4) : (i += ` `, e--);
  return i + e.slice(n);
}
var Pi = ((e = {}) => ({
  state: t,
  dispatch: n
}) => {
  let r = y(t),
    {
      doc: i
    } = t,
    a = null,
    o = t.changeByRange(n => {
      if (!n.empty || !Di.isActiveAt(t, n.from, -1) && !Di.isActiveAt(t, n.from, 1)) return a = {
        range: n
      };
      let o = n.from,
        s = i.lineAt(o),
        c = Ai(r.resolveInner(o, -1), i);
      for (; c.length && c[c.length - 1].from > o - s.from;) c.pop();
      if (!c.length) return a = {
        range: n
      };
      let l = c[c.length - 1];
      if (l.to - l.spaceAfter.length > o - s.from) return a = {
        range: n
      };
      let u = o >= l.to - l.spaceAfter.length && !/\S/.test(s.text.slice(l.to));
      if (l.item && u) {
        if (l.item.from < s.from && !/^[\s>]*$/.test(s.text.slice(0, l.to))) return a = {
          range: n
        };
        let r = l.node.firstChild,
          u = l.node.getChild(`ListItem`, `ListItem`);
        if (r.to >= o || u && u.to < o || s.from > 0 && !/[^\s>]/.test(i.lineAt(s.from - 1).text) || e.nonTightLists === !1) {
          let e = c.length > 1 ? c[c.length - 2] : null,
            t,
            n = ``;
          e && e.item ? (t = s.from + e.from, n = e.marker(i, 1)) : t = s.from + (e ? e.to : 0);
          let r = [{
            from: t,
            to: o,
            insert: n
          }];
          return l.node.name == `OrderedList` && Mi(l.item, i, r, -2), e && e.node.name == `OrderedList` && Mi(e.item, i, r), {
            range: j.cursor(t + n.length),
            changes: r
          };
        }
        {
          let e = Li(c, t, s);
          return {
            range: j.cursor(o + e.length + 1),
            changes: {
              from: s.from,
              insert: e + t.lineBreak
            }
          };
        }
      }
      if (l.node.name == `Blockquote` && u && s.from) {
        let e = i.lineAt(s.from - 1),
          r = />\s*$/.exec(e.text);
        if (r && r.index == l.from) {
          let i = t.changes([{
            from: e.from + r.index,
            to: e.to
          }, {
            from: s.from + l.from,
            to: s.to
          }]);
          return {
            range: n.map(i),
            changes: i
          };
        }
      }
      let d = [];
      l.node.name == `OrderedList` && Mi(l.item, i, d);
      let f = l.item && l.item.from < s.from,
        p = ``;
      if (!f || /^[\s\d.)\-+*>]*/.exec(s.text)[0].length >= l.to) for (let e = 0, t = c.length - 1; e <= t; e++) p += e == t && !f ? c[e].marker(i, 1) : c[e].blank(e < t ? w(s.text, 4, c[e + 1].from) - p.length : null);
      let m = o;
      for (; m > s.from && /\s/.test(s.text.charAt(m - s.from - 1));) m--;
      return p = Ni(p, t), Ii(l.node, t.doc) && (p = Li(c, t, s) + t.lineBreak + p), d.push({
        from: m,
        to: o,
        insert: t.lineBreak + p
      }), {
        range: j.cursor(m + p.length + 1),
        changes: d
      };
    });
  return !a && (n(t.update(o, {
    scrollIntoView: !0,
    userEvent: `input`
  })), !0);
})();
function Fi(e) {
  return e.name == `QuoteMark` || e.name == `ListMark`;
}
function Ii(e, t) {
  if (e.name != `OrderedList` && e.name != `BulletList`) return !1;
  let n = e.firstChild,
    r = e.getChild(`ListItem`, `ListItem`);
  if (!r) return !1;
  let i = t.lineAt(n.to),
    a = t.lineAt(r.from),
    o = /^[\s>]*$/.test(i.text);
  return i.number + +!o < a.number;
}
function Li(e, t, n) {
  let r = ``;
  for (let t = 0, i = e.length - 2; t <= i; t++) r += e[t].blank(t < i ? w(n.text, 4, e[t + 1].from) - r.length : null, t < i);
  return Ni(r, t);
}
function Ri(e, t) {
  let n = e.resolveInner(t, -1),
    r = t;
  Fi(n) && (r = n.from, n = n.parent);
  for (let e; e = n.childBefore(r);) if (Fi(e)) r = e.from;else if (e.name == `OrderedList` || e.name == `BulletList`) n = e.lastChild, r = n.to;else break;
  return n;
}
var zi = [{
    key: `Enter`,
    run: Pi
  }, {
    key: `Backspace`,
    run: ({
      state: e,
      dispatch: t
    }) => {
      let n = y(e),
        r = null,
        i = e.changeByRange(t => {
          let i = t.from,
            {
              doc: a
            } = e;
          if (t.empty && Di.isActiveAt(e, t.from)) {
            let t = a.lineAt(i),
              r = Ai(Ri(n, i), a);
            if (r.length) {
              let n = r[r.length - 1],
                a = n.to - n.spaceAfter.length + +!!n.spaceAfter;
              if (i - t.from > a && !/\S/.test(t.text.slice(a, i - t.from))) return {
                range: j.cursor(t.from + a),
                changes: {
                  from: t.from + a,
                  to: i
                }
              };
              if (i - t.from == a && (n.item && t.from <= n.item.from || /^[\s>]*$/.test(t.text.slice(0, n.to)))) {
                let r = t.from + n.from;
                if (n.item && n.node.from < n.item.from && /\S/.test(t.text.slice(n.from, n.to))) {
                  let i = n.blank(w(t.text, 4, n.to) - w(t.text, 4, n.from));
                  return r == t.from && (i = Ni(i, e)), {
                    range: j.cursor(r + i.length),
                    changes: {
                      from: r,
                      to: t.from + n.to,
                      insert: i
                    }
                  };
                }
                if (r < i) return {
                  range: j.cursor(r),
                  changes: {
                    from: r,
                    to: i
                  }
                };
              }
            }
          }
          return r = {
            range: t
          };
        });
      return !r && (t(e.update(i, {
        scrollIntoView: !0,
        userEvent: `delete`
      })), !0);
    }
  }],
  Bi = mi({
    matchClosingTags: !1
  });
function Vi(e = {}) {
  let {
    codeLanguages: t,
    defaultCodeLanguage: n,
    addKeymap: r = !0,
    base: {
      parser: i
    } = Ei,
    completeHTMLTags: a = !0,
    pasteURLAsLink: o = !0,
    htmlTagLanguage: s = Bi
  } = e;
  if (!(i instanceof Lt)) throw RangeError("Base parser provided to `markdown` should be a Markdown parser");
  let c = e.extensions ? [e.extensions] : [],
    l = [s.support, wi],
    u;
  o && l.push(Ki), n instanceof Qe ? (l.push(n.support), u = n.language) : n && (u = n);
  let d = t || u ? Oi(t, u) : void 0;
  c.push(un({
    codeParser: d,
    htmlParser: s.language.parser
  })), r && l.push(Ue.high(ue.of(zi)));
  let f = Ti(i.configure(c));
  return a && l.push(f.data.of({
    autocomplete: Hi
  })), new Qe(f, l);
}
function Hi(e) {
  let {
      state: t,
      pos: n
    } = e,
    r = /<[:\-\.\w\u00b7-\uffff]*$/.exec(t.sliceDoc(n - 25, n));
  if (!r) return null;
  let i = y(t).resolveInner(n, -1);
  for (; i && !i.type.isTop;) {
    if (i.name == `CodeBlock` || i.name == `FencedCode` || i.name == `ProcessingInstructionBlock` || i.name == `CommentBlock` || i.name == `Link` || i.name == `Image`) return null;
    i = i.parent;
  }
  return {
    from: n - r[0].length,
    to: n,
    options: Wi(),
    validFor: /^<[:\-\.\w\u00b7-\uffff]*$/
  };
}
var Ui = null;
function Wi() {
  if (Ui) return Ui;
  let e = si(new Be(O.create({
    extensions: Bi
  }), 0, !0));
  return Ui = e ? e.options : [];
}
var Gi = /code|horizontalrule|html|link|comment|processing|escape|entity|image|mark|url/i,
  Ki = g.domEventHandlers({
    paste: (e, t) => {
      let {
        main: n
      } = t.state.selection;
      if (n.empty) return !1;
      let r = e.clipboardData?.getData(`text/plain`);
      if (!r || !/^(https?:\/\/|mailto:|xmpp:|www\.)/.test(r) || (/^www\./.test(r) && (r = `https://` + r), !Di.isActiveAt(t.state, n.from, 1))) return !1;
      let i = y(t.state),
        a = !1;
      return i.iterate({
        from: n.from,
        to: n.to,
        enter: e => {
          (e.from > n.from || Gi.test(e.name)) && (a = !0);
        },
        leave: e => {
          e.to < n.to && (a = !0);
        }
      }), !a && (t.dispatch({
        changes: [{
          from: n.from,
          insert: `[`
        }, {
          from: n.to,
          insert: `](${r})`
        }],
        userEvent: `input.paste`,
        scrollIntoView: !0
      }), !0);
    }
  });
function qi() {
  return qi = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, qi.apply(null, arguments);
}
function Ji(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
var H = e(t()),
  Yi = e => {
    let {
        state: t
      } = e,
      n = t.doc.lineAt(t.selection.main.from),
      r = ea(e.state, n.from);
    return r.line ? Zi(e) : r.block ? $i(e) : !1;
  };
function Xi(e, t) {
  return ({
    state: n,
    dispatch: r
  }) => {
    if (n.readOnly) return !1;
    let i = e(t, n);
    return i ? (r(n.update(i)), !0) : !1;
  };
}
var Zi = Xi(aa, 0),
  Qi = Xi(ia, 0),
  $i = Xi((e, t) => ia(e, t, ra(t)), 0);
function ea(e, t) {
  let n = e.languageDataAt(`commentTokens`, t, 1);
  return n.length ? n[0] : {};
}
var ta = 50;
function na(e, {
  open: t,
  close: n
}, r, i) {
  let a = e.sliceDoc(r - ta, r),
    o = e.sliceDoc(i, i + ta),
    s = /\s*$/.exec(a)[0].length,
    c = /^\s*/.exec(o)[0].length,
    l = a.length - s;
  if (a.slice(l - t.length, l) == t && o.slice(c, c + n.length) == n) return {
    open: {
      pos: r - s,
      margin: s && 1
    },
    close: {
      pos: i + c,
      margin: c && 1
    }
  };
  let u, d;
  i - r <= 100 ? u = d = e.sliceDoc(r, i) : (u = e.sliceDoc(r, r + ta), d = e.sliceDoc(i - ta, i));
  let f = /^\s*/.exec(u)[0].length,
    p = /\s*$/.exec(d)[0].length,
    m = d.length - p - n.length;
  return u.slice(f, f + t.length) == t && d.slice(m, m + n.length) == n ? {
    open: {
      pos: r + f + t.length,
      margin: +!!/\s/.test(u.charAt(f + t.length))
    },
    close: {
      pos: i - p - n.length,
      margin: +!!/\s/.test(d.charAt(m - 1))
    }
  } : null;
}
function ra(e) {
  let t = [];
  for (let n of e.selection.ranges) {
    let r = e.doc.lineAt(n.from),
      i = n.to <= r.to ? r : e.doc.lineAt(n.to);
    i.from > r.from && i.from == n.to && (i = n.to == r.to + 1 ? r : e.doc.lineAt(n.to - 1));
    let a = t.length - 1;
    a >= 0 && t[a].to > r.from ? t[a].to = i.to : t.push({
      from: r.from + /^\s*/.exec(r.text)[0].length,
      to: i.to
    });
  }
  return t;
}
function ia(e, t, n = t.selection.ranges) {
  let r = n.map(e => ea(t, e.from).block);
  if (!r.every(e => e)) return null;
  let i = n.map((e, n) => na(t, r[n], e.from, e.to));
  if (e != 2 && !i.every(e => e)) return {
    changes: t.changes(n.map((e, t) => i[t] ? [] : [{
      from: e.from,
      insert: r[t].open + ` `
    }, {
      from: e.to,
      insert: ` ` + r[t].close
    }]))
  };
  if (e != 1 && i.some(e => e)) {
    let e = [];
    for (let t = 0, n; t < i.length; t++) if (n = i[t]) {
      let i = r[t],
        {
          open: a,
          close: o
        } = n;
      e.push({
        from: a.pos - i.open.length,
        to: a.pos + a.margin
      }, {
        from: o.pos - o.margin,
        to: o.pos + i.close.length
      });
    }
    return {
      changes: e
    };
  }
  return null;
}
function aa(e, t, n = t.selection.ranges) {
  let r = [],
    i = -1;
  ranges: for (let {
    from: e,
    to: a
  } of n) {
    let n = r.length,
      o = 1e9,
      s;
    for (let n = e; n <= a;) {
      let c = t.doc.lineAt(n);
      if (s == null && (s = ea(t, c.from).line, !s)) continue ranges;
      if (c.from > i && (e == a || a > c.from)) {
        i = c.from;
        let e = /^\s*/.exec(c.text)[0].length,
          t = e == c.length,
          n = c.text.slice(e, e + s.length) == s ? e : -1;
        e < c.text.length && e < o && (o = e), r.push({
          line: c,
          comment: n,
          token: s,
          indent: e,
          empty: t,
          single: !1
        });
      }
      n = c.to + 1;
    }
    if (o < 1e9) for (let e = n; e < r.length; e++) r[e].indent < r[e].line.text.length && (r[e].indent = o);
    r.length == n + 1 && (r[n].single = !0);
  }
  if (e != 2 && r.some(e => e.comment < 0 && (!e.empty || e.single))) {
    let e = [];
    for (let {
      line: t,
      token: n,
      indent: i,
      empty: a,
      single: o
    } of r) (o || !a) && e.push({
      from: t.from + i,
      insert: n + ` `
    });
    let n = t.changes(e);
    return {
      changes: n,
      selection: t.selection.map(n, 1)
    };
  }
  if (e != 1 && r.some(e => e.comment >= 0)) {
    let e = [];
    for (let {
      line: t,
      comment: n,
      token: i
    } of r) if (n >= 0) {
      let r = t.from + n,
        a = r + i.length;
      t.text[a - t.from] == ` ` && a++, e.push({
        from: r,
        to: a
      });
    }
    return {
      changes: e
    };
  }
  return null;
}
var oa = Ve.define(),
  sa = Ve.define(),
  ca = De.define(),
  la = De.define({
    combine(e) {
      return rt(e, {
        minDepth: 100,
        newGroupDelay: 500,
        joinToEvent: (e, t) => t
      }, {
        minDepth: Math.max,
        newGroupDelay: Math.min,
        joinToEvent: (e, t) => (n, r) => e(n, r) || t(n, r)
      });
    }
  }),
  ua = ke.define({
    create() {
      return Da.empty;
    },
    update(e, t) {
      let n = t.state.facet(la),
        r = t.annotation(oa);
      if (r) {
        let i = U.fromTransaction(t, r.selection),
          a = r.side,
          o = a == 0 ? e.undone : e.done;
        return o = i ? _a(o, o.length, n.minDepth, i) : Sa(o, t.startState.selection), new Da(a == 0 ? r.rest : o, a == 0 ? o : r.rest);
      }
      let i = t.annotation(sa);
      if ((i == `full` || i == `before`) && (e = e.isolate()), t.annotation($e.addToHistory) === !1) return t.changes.empty ? e : e.addMapping(t.changes.desc);
      let a = U.fromTransaction(t),
        o = t.annotation($e.time),
        s = t.annotation($e.userEvent);
      return a ? e = e.addChanges(a, o, s, n, t) : t.selection && (e = e.addSelection(t.startState.selection, o, s, n.newGroupDelay)), (i == `full` || i == `after`) && (e = e.isolate()), e;
    },
    toJSON(e) {
      return {
        done: e.done.map(e => e.toJSON()),
        undone: e.undone.map(e => e.toJSON())
      };
    },
    fromJSON(e) {
      return new Da(e.done.map(U.fromJSON), e.undone.map(U.fromJSON));
    }
  });
function da(e = {}) {
  return [ua, la.of(e), g.domEventHandlers({
    beforeinput(e, t) {
      let n = e.inputType == `historyUndo` ? pa : e.inputType == `historyRedo` ? ma : null;
      return n ? (e.preventDefault(), n(t)) : !1;
    }
  })];
}
function fa(e, t) {
  return function ({
    state: n,
    dispatch: r
  }) {
    if (!t && n.readOnly) return !1;
    let i = n.field(ua, !1);
    if (!i) return !1;
    let a = i.pop(e, n, t);
    return a ? (r(a), !0) : !1;
  };
}
var pa = fa(0, !1),
  ma = fa(1, !1),
  ha = fa(0, !0),
  ga = fa(1, !0),
  U = class e {
    constructor(e, t, n, r, i) {
      this.changes = e, this.effects = t, this.mapped = n, this.startSelection = r, this.selectionsAfter = i;
    }
    setSelAfter(t) {
      return new e(this.changes, this.effects, this.mapped, this.startSelection, t);
    }
    toJSON() {
      return {
        changes: this.changes?.toJSON(),
        mapped: this.mapped?.toJSON(),
        startSelection: this.startSelection?.toJSON(),
        selectionsAfter: this.selectionsAfter.map(e => e.toJSON())
      };
    }
    static fromJSON(t) {
      return new e(t.changes && Ce.fromJSON(t.changes), [], t.mapped && Je.fromJSON(t.mapped), t.startSelection && j.fromJSON(t.startSelection), t.selectionsAfter.map(j.fromJSON));
    }
    static fromTransaction(t, n) {
      let r = W;
      for (let e of t.startState.facet(ca)) {
        let n = e(t);
        n.length && (r = r.concat(n));
      }
      return !r.length && t.changes.empty ? null : new e(t.changes.invert(t.startState.doc), r, void 0, n || t.startState.selection, W);
    }
    static selection(t) {
      return new e(void 0, W, void 0, void 0, t);
    }
  };
function _a(e, t, n, r) {
  let i = t + 1 > n + 20 ? t - n - 1 : 0,
    a = e.slice(i, t);
  return a.push(r), a;
}
function va(e, t) {
  let n = [],
    r = !1;
  return e.iterChangedRanges((e, t) => n.push(e, t)), t.iterChangedRanges((e, t, i, a) => {
    for (let e = 0; e < n.length;) {
      let t = n[e++],
        o = n[e++];
      a >= t && i <= o && (r = !0);
    }
  }), r;
}
function ya(e, t) {
  return e.ranges.length == t.ranges.length && e.ranges.filter((e, n) => e.empty != t.ranges[n].empty).length === 0;
}
function ba(e, t) {
  return e.length ? t.length ? e.concat(t) : e : t;
}
var W = [],
  xa = 200;
function Sa(e, t) {
  if (e.length) {
    let n = e[e.length - 1],
      r = n.selectionsAfter.slice(Math.max(0, n.selectionsAfter.length - xa));
    return r.length && r[r.length - 1].eq(t) ? e : (r.push(t), _a(e, e.length - 1, 1e9, n.setSelAfter(r)));
  }
  return [U.selection([t])];
}
function Ca(e) {
  let t = e[e.length - 1],
    n = e.slice();
  return n[e.length - 1] = t.setSelAfter(t.selectionsAfter.slice(0, t.selectionsAfter.length - 1)), n;
}
function wa(e, t) {
  if (!e.length) return e;
  let n = e.length,
    r = W;
  for (; n;) {
    let i = Ta(e[n - 1], t, r);
    if (i.changes && !i.changes.empty || i.effects.length) {
      let t = e.slice(0, n);
      return t[n - 1] = i, t;
    }
    t = i.mapped, n--, r = i.selectionsAfter;
  }
  return r.length ? [U.selection(r)] : W;
}
function Ta(e, t, n) {
  let r = ba(e.selectionsAfter.length ? e.selectionsAfter.map(e => e.map(t)) : W, n);
  if (!e.changes) return U.selection(r);
  let i = e.changes.map(t),
    a = t.mapDesc(e.changes, !0),
    o = e.mapped ? e.mapped.composeDesc(a) : a;
  return new U(i, k.mapEffects(e.effects, t), o, e.startSelection.map(a), r);
}
var Ea = /^(input\.type|delete)($|\.)/,
  Da = class e {
    constructor(e, t, n = 0, r = void 0) {
      this.done = e, this.undone = t, this.prevTime = n, this.prevUserEvent = r;
    }
    isolate() {
      return this.prevTime ? new e(this.done, this.undone) : this;
    }
    addChanges(t, n, r, i, a) {
      let o = this.done,
        s = o[o.length - 1];
      return o = s && s.changes && !s.changes.empty && t.changes && (!r || Ea.test(r)) && (!s.selectionsAfter.length && n - this.prevTime < i.newGroupDelay && i.joinToEvent(a, va(s.changes, t.changes)) || r == `input.type.compose`) ? _a(o, o.length - 1, i.minDepth, new U(t.changes.compose(s.changes), ba(k.mapEffects(t.effects, s.changes), s.effects), s.mapped, s.startSelection, W)) : _a(o, o.length, i.minDepth, t), new e(o, W, n, r);
    }
    addSelection(t, n, r, i) {
      let a = this.done.length ? this.done[this.done.length - 1].selectionsAfter : W;
      return a.length > 0 && n - this.prevTime < i && r == this.prevUserEvent && r && /^select($|\.)/.test(r) && ya(a[a.length - 1], t) ? this : new e(Sa(this.done, t), this.undone, n, r);
    }
    addMapping(t) {
      return new e(wa(this.done, t), wa(this.undone, t), this.prevTime, this.prevUserEvent);
    }
    pop(e, t, n) {
      let r = e == 0 ? this.done : this.undone;
      if (r.length == 0) return null;
      let i = r[r.length - 1],
        a = i.selectionsAfter[0] || (i.startSelection ? i.startSelection.map(i.changes.invertedDesc, 1) : t.selection);
      if (n && i.selectionsAfter.length) return t.update({
        selection: i.selectionsAfter[i.selectionsAfter.length - 1],
        annotations: oa.of({
          side: e,
          rest: Ca(r),
          selection: a
        }),
        userEvent: e == 0 ? `select.undo` : `select.redo`,
        scrollIntoView: !0
      });
      if (i.changes) {
        let n = r.length == 1 ? W : r.slice(0, r.length - 1);
        return i.mapped && (n = wa(n, i.mapped)), t.update({
          changes: i.changes,
          selection: i.startSelection,
          effects: i.effects,
          annotations: oa.of({
            side: e,
            rest: n,
            selection: a
          }),
          filter: !1,
          userEvent: e == 0 ? `undo` : `redo`,
          scrollIntoView: !0
        });
      }
      return null;
    }
  };
Da.empty = new Da(W, W);
var Oa = [{
  key: `Mod-z`,
  run: pa,
  preventDefault: !0
}, {
  key: `Mod-y`,
  mac: `Mod-Shift-z`,
  run: ma,
  preventDefault: !0
}, {
  linux: `Ctrl-Shift-z`,
  run: ma,
  preventDefault: !0
}, {
  key: `Mod-u`,
  run: ha,
  preventDefault: !0
}, {
  key: `Alt-u`,
  mac: `Mod-Shift-u`,
  run: ga,
  preventDefault: !0
}];
function ka(e, t) {
  return j.create(e.ranges.map(t), e.mainIndex);
}
function G(e, t) {
  return e.update({
    selection: t,
    scrollIntoView: !0,
    userEvent: `select`
  });
}
function K({
  state: e,
  dispatch: t
}, n) {
  let r = ka(e.selection, n);
  return !r.eq(e.selection, !0) && (t(G(e, r)), !0);
}
function Aa(e, t) {
  return j.cursor(t ? e.to : e.from);
}
function ja(e, t) {
  return K(e, n => n.empty ? e.moveByChar(n, t) : Aa(n, t));
}
function q(e) {
  return e.textDirectionAt(e.state.selection.main.head) == ot.LTR;
}
var Ma = e => ja(e, !q(e)),
  Na = e => ja(e, q(e));
function Pa(e, t) {
  return K(e, n => n.empty ? e.moveByGroup(n, t) : Aa(n, t));
}
var Fa = e => Pa(e, !q(e)),
  Ia = e => Pa(e, q(e));
typeof Intl < `u` && Intl.Segmenter;
function La(e, t, n) {
  if (t.type.prop(n)) return !0;
  let r = t.to - t.from;
  return r && (r > 2 || /[^\s,.;:]/.test(e.sliceDoc(t.from, t.to))) || t.firstChild;
}
function Ra(e, t, n) {
  let r = y(e).resolveInner(t.head),
    i = n ? a.closedBy : a.openedBy;
  for (let a = t.head;;) {
    let t = n ? r.childAfter(a) : r.childBefore(a);
    if (!t) break;
    La(e, t, i) ? r = t : a = n ? t.to : t.from;
  }
  let o = r.type.prop(i),
    s,
    c;
  return c = o && (s = n ? v(e, r.from, 1) : v(e, r.to, -1)) && s.matched ? n ? s.end.to : s.end.from : n ? r.to : r.from, j.cursor(c, n ? -1 : 1);
}
var za = e => K(e, t => Ra(e.state, t, !q(e))),
  Ba = e => K(e, t => Ra(e.state, t, q(e)));
function Va(e, t) {
  return K(e, n => {
    if (!n.empty) return Aa(n, t);
    let r = e.moveVertically(n, t);
    return r.head == n.head ? e.moveToLineBoundary(n, t) : r;
  });
}
var Ha = e => Va(e, !1),
  Ua = e => Va(e, !0);
function Wa(e) {
  let t = e.scrollDOM.clientHeight < e.scrollDOM.scrollHeight - 2,
    n = 0,
    r = 0,
    i;
  if (t) {
    for (let t of e.state.facet(g.scrollMargins)) {
      let i = t(e);
      i?.top && (n = Math.max(i?.top, n)), i?.bottom && (r = Math.max(i?.bottom, r));
    }
    i = e.scrollDOM.clientHeight - n - r;
  } else i = (e.dom.ownerDocument.defaultView || window).innerHeight;
  return {
    marginTop: n,
    marginBottom: r,
    selfScroll: t,
    height: Math.max(e.defaultLineHeight, i - 5)
  };
}
function Ga(e, t) {
  let n = Wa(e),
    {
      state: r
    } = e,
    i = ka(r.selection, r => r.empty ? e.moveVertically(r, t, n.height) : Aa(r, t));
  if (i.eq(r.selection)) return !1;
  let a;
  if (n.selfScroll) {
    let t = e.coordsAtPos(r.selection.main.head),
      o = e.scrollDOM.getBoundingClientRect(),
      s = o.top + n.marginTop,
      c = o.bottom - n.marginBottom;
    t && t.top > s && t.bottom < c && (a = g.scrollIntoView(i.main.head, {
      y: `start`,
      yMargin: t.top - s
    }));
  }
  return e.dispatch(G(r, i), {
    effects: a
  }), !0;
}
var Ka = e => Ga(e, !1),
  qa = e => Ga(e, !0);
function J(e, t, n) {
  let r = e.lineBlockAt(t.head),
    i = e.moveToLineBoundary(t, n);
  if (i.head == t.head && i.head != (n ? r.to : r.from) && (i = e.moveToLineBoundary(t, n, !1)), !n && i.head == r.from && r.length) {
    let n = /^\s*/.exec(e.state.sliceDoc(r.from, Math.min(r.from + 100, r.to)))[0].length;
    n && t.head != r.from + n && (i = j.cursor(r.from + n));
  }
  return i;
}
var Ja = e => K(e, t => J(e, t, !0)),
  Ya = e => K(e, t => J(e, t, !1)),
  Xa = e => K(e, t => J(e, t, !q(e))),
  Za = e => K(e, t => J(e, t, q(e))),
  Qa = e => K(e, t => j.cursor(e.lineBlockAt(t.head).from, 1)),
  $a = e => K(e, t => j.cursor(e.lineBlockAt(t.head).to, -1));
function eo(e, t, n) {
  let r = !1,
    i = ka(e.selection, t => {
      let i = v(e, t.head, -1) || v(e, t.head, 1) || t.head > 0 && v(e, t.head - 1, 1) || t.head < e.doc.length && v(e, t.head + 1, -1);
      if (!i || !i.end) return t;
      r = !0;
      let a = i.start.from == t.head ? i.end.to : i.end.from;
      return n ? j.range(t.anchor, a) : j.cursor(a);
    });
  return r ? (t(G(e, i)), !0) : !1;
}
var to = ({
  state: e,
  dispatch: t
}) => eo(e, t, !1);
function Y(e, t, n) {
  let r = ka(e.state.selection, e => {
    e.undirectional && e.head >= e.anchor != t && (e = j.range(e.head, e.anchor));
    let r = n(e);
    return j.range(e.anchor, r.head, r.goalColumn, r.bidiLevel || void 0, r.assoc);
  });
  return !r.eq(e.state.selection) && (e.dispatch(G(e.state, r)), !0);
}
function no(e, t) {
  return Y(e, t, n => e.moveByChar(n, t));
}
var ro = e => no(e, !q(e)),
  io = e => no(e, q(e));
function ao(e, t) {
  return Y(e, t, n => e.moveByGroup(n, t));
}
var oo = e => ao(e, !q(e)),
  so = e => ao(e, q(e)),
  co = e => {
    let t = !q(e);
    return Y(e, t, n => Ra(e.state, n, t));
  },
  lo = e => {
    let t = q(e);
    return Y(e, t, n => Ra(e.state, n, t));
  };
function uo(e, t) {
  return Y(e, t, n => e.moveVertically(n, t));
}
var fo = e => uo(e, !1),
  po = e => uo(e, !0);
function mo(e, t) {
  return Y(e, t, n => e.moveVertically(n, t, Wa(e).height));
}
var ho = e => mo(e, !1),
  go = e => mo(e, !0),
  _o = e => Y(e, !0, t => J(e, t, !0)),
  vo = e => Y(e, !1, t => J(e, t, !1)),
  yo = e => {
    let t = !q(e);
    return Y(e, t, n => J(e, n, t));
  },
  bo = e => {
    let t = q(e);
    return Y(e, t, n => J(e, n, t));
  },
  xo = e => Y(e, !1, t => j.cursor(e.lineBlockAt(t.head).from)),
  So = e => Y(e, !0, t => j.cursor(e.lineBlockAt(t.head).to)),
  Co = ({
    state: e,
    dispatch: t
  }) => (t(G(e, {
    anchor: 0
  })), !0),
  wo = ({
    state: e,
    dispatch: t
  }) => (t(G(e, {
    anchor: e.doc.length
  })), !0),
  To = ({
    state: e,
    dispatch: t
  }) => (t(G(e, {
    anchor: e.selection.main.anchor,
    head: 0
  })), !0),
  Eo = ({
    state: e,
    dispatch: t
  }) => (t(G(e, {
    anchor: e.selection.main.anchor,
    head: e.doc.length
  })), !0),
  Do = ({
    state: e,
    dispatch: t
  }) => (t(e.update({
    selection: {
      anchor: 0,
      head: e.doc.length
    },
    userEvent: `select`
  })), !0),
  Oo = ({
    state: e,
    dispatch: t
  }) => {
    let n = qo(e).map(({
      from: t,
      to: n
    }) => j.undirectionalRange(t, Math.min(n + 1, e.doc.length)));
    return t(e.update({
      selection: j.create(n),
      userEvent: `select`
    })), !0;
  },
  ko = ({
    state: e,
    dispatch: t
  }) => {
    let n = ka(e.selection, t => {
      let n = y(e),
        r = n.resolveStack(t.from, 1);
      if (t.empty) {
        let e = n.resolveStack(t.from, -1);
        e.node.from >= r.node.from && e.node.to <= r.node.to && (r = e);
      }
      for (let e = r; e; e = e.next) {
        let {
          node: n
        } = e;
        if ((n.from < t.from && n.to >= t.to || n.to > t.to && n.from <= t.from) && e.next) return j.undirectionalRange(n.from, n.to);
      }
      return t;
    });
    return !n.eq(e.selection) && (t(G(e, n)), !0);
  };
function Ao(e, t) {
  let {
      state: n
    } = e,
    r = n.selection,
    i = n.selection.ranges.slice();
  for (let r of n.selection.ranges) {
    let a = n.doc.lineAt(r.head);
    if (t ? a.to < e.state.doc.length : a.from > 0) for (let n = r;;) {
      let r = e.moveVertically(n, t);
      if (r.head < a.from || r.head > a.to) {
        i.some(e => e.head == r.head) || i.push(r);
        break;
      }
      if (r.head == n.head) break;
      n = r;
    }
  }
  return i.length != r.ranges.length && (e.dispatch(G(n, j.create(i, i.length - 1))), !0);
}
var jo = e => Ao(e, !1),
  Mo = e => Ao(e, !0),
  No = ({
    state: e,
    dispatch: t
  }) => {
    let n = e.selection,
      r = null;
    return n.ranges.length > 1 ? r = j.create([n.main]) : n.main.empty || (r = j.create([j.cursor(n.main.head)])), r ? (t(G(e, r)), !0) : !1;
  };
function Po(e, t) {
  if (e.state.readOnly) return !1;
  let n = `delete.selection`,
    {
      state: r
    } = e,
    i = r.changeByRange(r => {
      let {
        from: i,
        to: a
      } = r;
      if (i == a) {
        let o = t(r);
        o < i ? (n = `delete.backward`, o = Fo(e, o, !1)) : o > i && (n = `delete.forward`, o = Fo(e, o, !0)), i = Math.min(i, o), a = Math.max(a, o);
      } else i = Fo(e, i, !1), a = Fo(e, a, !0);
      return i == a ? {
        range: r
      } : {
        changes: {
          from: i,
          to: a
        },
        range: j.cursor(i, i < r.head ? -1 : 1)
      };
    });
  return !i.changes.empty && (e.dispatch(r.update(i, {
    scrollIntoView: !0,
    userEvent: n,
    effects: n == `delete.selection` ? g.announce.of(r.phrase(`Selection deleted`)) : void 0
  })), !0);
}
function Fo(e, t, n) {
  if (e instanceof g) for (let r of e.state.facet(g.atomicRanges).map(t => t(e))) r.between(t, t, (e, r) => {
    e < t && r > t && (t = n ? r : e);
  });
  return t;
}
var Io = (e, t, n) => Po(e, r => {
    let i = r.from,
      {
        state: a
      } = e,
      o = a.doc.lineAt(i),
      s,
      c;
    if (n && !t && i > o.from && i < o.from + 200 && !/[^ \t]/.test(s = o.text.slice(0, i - o.from))) {
      if (s[s.length - 1] == `	`) return i - 1;
      let e = w(s, a.tabSize) % S(a) || S(a);
      for (let t = 0; t < e && s[s.length - 1 - t] == ` `; t++) i--;
      c = i;
    } else c = _(o.text, i - o.from, t, t) + o.from, c == i && o.number != (t ? a.doc.lines : 1) ? c += t ? 1 : -1 : !t && /[\ufe00-\ufe0f]/.test(o.text.slice(c - o.from, i - o.from)) && (c = _(o.text, c - o.from, !1, !1) + o.from);
    return c;
  }),
  Lo = e => Io(e, !1, !0),
  Ro = e => Io(e, !0, !1),
  zo = (e, t) => Po(e, n => {
    let r = n.head,
      {
        state: i
      } = e,
      a = i.doc.lineAt(r),
      o = i.charCategorizer(r);
    for (let e = null;;) {
      if (r == (t ? a.to : a.from)) {
        r == n.head && a.number != (t ? i.doc.lines : 1) && (r += t ? 1 : -1);
        break;
      }
      let s = _(a.text, r - a.from, t) + a.from,
        c = a.text.slice(Math.min(r, s) - a.from, Math.max(r, s) - a.from),
        l = o(c);
      if (e != null && l != e) break;
      (c != ` ` || r != n.head) && (e = l), r = s;
    }
    return r;
  }),
  Bo = e => zo(e, !1),
  Vo = e => zo(e, !0),
  Ho = e => Po(e, t => {
    let n = e.lineBlockAt(t.head).to;
    return t.head < n ? n : Math.min(e.state.doc.length, t.head + 1);
  }),
  Uo = e => Po(e, t => {
    let n = e.moveToLineBoundary(t, !1).head;
    return t.head > n ? n : Math.max(0, t.head - 1);
  }),
  Wo = e => Po(e, t => {
    let n = e.moveToLineBoundary(t, !0).head;
    return t.head < n ? n : Math.min(e.state.doc.length, t.head + 1);
  }),
  Go = ({
    state: e,
    dispatch: t
  }) => {
    if (e.readOnly) return !1;
    let n = e.changeByRange(e => ({
      changes: {
        from: e.from,
        to: e.to,
        insert: ye.of([``, ``])
      },
      range: j.cursor(e.from)
    }));
    return t(e.update(n, {
      scrollIntoView: !0,
      userEvent: `input`
    })), !0;
  },
  Ko = ({
    state: e,
    dispatch: t
  }) => {
    if (e.readOnly) return !1;
    let n = e.changeByRange(t => {
      if (!t.empty || t.from == 0 || t.from == e.doc.length) return {
        range: t
      };
      let n = t.from,
        r = e.doc.lineAt(n),
        i = n == r.from ? n - 1 : _(r.text, n - r.from, !1) + r.from,
        a = n == r.to ? n + 1 : _(r.text, n - r.from, !0) + r.from;
      return {
        changes: {
          from: i,
          to: a,
          insert: e.doc.slice(n, a).append(e.doc.slice(i, n))
        },
        range: j.cursor(a)
      };
    });
    return !n.changes.empty && (t(e.update(n, {
      scrollIntoView: !0,
      userEvent: `move.character`
    })), !0);
  };
function qo(e) {
  let t = [],
    n = -1;
  for (let r of e.selection.ranges) {
    let i = e.doc.lineAt(r.from),
      a = e.doc.lineAt(r.to);
    if (!r.empty && r.to == a.from && (a = e.doc.lineAt(r.to - 1)), n >= i.number) {
      let e = t[t.length - 1];
      e.to = a.to, e.ranges.push(r);
    } else t.push({
      from: i.from,
      to: a.to,
      ranges: [r]
    });
    n = a.number + 1;
  }
  return t;
}
function Jo(e, t, n) {
  if (e.readOnly) return !1;
  let r = [],
    i = [];
  for (let t of qo(e)) {
    if (n ? t.to == e.doc.length : t.from == 0) continue;
    let a = e.doc.lineAt(n ? t.to + 1 : t.from - 1),
      o = a.length + 1;
    if (n) {
      r.push({
        from: t.to,
        to: a.to
      }, {
        from: t.from,
        insert: a.text + e.lineBreak
      });
      for (let n of t.ranges) i.push(j.range(Math.min(e.doc.length, n.anchor + o), Math.min(e.doc.length, n.head + o)));
    } else {
      r.push({
        from: a.from,
        to: t.from
      }, {
        from: t.to,
        insert: e.lineBreak + a.text
      });
      for (let e of t.ranges) i.push(j.range(e.anchor - o, e.head - o));
    }
  }
  return r.length ? (t(e.update({
    changes: r,
    scrollIntoView: !0,
    selection: j.create(i, e.selection.mainIndex),
    userEvent: `move.line`
  })), !0) : !1;
}
var Yo = ({
    state: e,
    dispatch: t
  }) => Jo(e, t, !1),
  Xo = ({
    state: e,
    dispatch: t
  }) => Jo(e, t, !0);
function Zo(e, t, n) {
  if (e.readOnly) return !1;
  let r = [];
  for (let t of qo(e)) n ? r.push({
    from: t.from,
    insert: e.doc.slice(t.from, t.to) + e.lineBreak
  }) : r.push({
    from: t.to,
    insert: e.lineBreak + e.doc.slice(t.from, t.to)
  });
  let i = e.changes(r);
  return t(e.update({
    changes: i,
    selection: e.selection.map(i, n ? 1 : -1),
    scrollIntoView: !0,
    userEvent: `input.copyline`
  })), !0;
}
var Qo = ({
    state: e,
    dispatch: t
  }) => Zo(e, t, !1),
  $o = ({
    state: e,
    dispatch: t
  }) => Zo(e, t, !0),
  es = e => {
    if (e.state.readOnly) return !1;
    let {
        state: t
      } = e,
      n = t.changes(qo(t).map(({
        from: e,
        to: n
      }) => (e > 0 ? e-- : n < t.doc.length && n++, {
        from: e,
        to: n
      }))),
      r = ka(t.selection, t => {
        let n;
        if (e.lineWrapping) {
          let r = e.lineBlockAt(t.head),
            i = e.coordsAtPos(t.head, t.assoc || 1);
          i && (n = r.bottom + e.documentTop - i.bottom + e.defaultLineHeight / 2);
        }
        return e.moveVertically(t, !0, n);
      }).map(n);
    return e.dispatch({
      changes: n,
      selection: r,
      scrollIntoView: !0,
      userEvent: `delete.line`
    }), !0;
  };
function ts(e, t) {
  if (/\(\)|\[\]|\{\}/.test(e.sliceDoc(t - 1, t + 1))) return {
    from: t,
    to: t
  };
  let n = y(e).resolveInner(t),
    r = n.childBefore(t),
    i = n.childAfter(t),
    o;
  return r && i && r.to <= t && i.from >= t && (o = r.type.prop(a.closedBy)) && o.indexOf(i.name) > -1 && e.doc.lineAt(r.to).from == e.doc.lineAt(i.from).from && !/\S/.test(e.sliceDoc(r.to, i.from)) ? {
    from: r.to,
    to: i.from
  } : null;
}
var ns = is(!1),
  rs = is(!0);
function is(e) {
  return ({
    state: t,
    dispatch: n
  }) => {
    if (t.readOnly) return !1;
    let r = t.changeByRange(n => {
      let {
          from: r,
          to: i
        } = n,
        a = t.doc.lineAt(r),
        o = !e && r == i && ts(t, r);
      e && (r = i = (i <= a.to ? a : t.doc.lineAt(i)).to);
      let s = new Ie(t, {
          simulateBreak: r,
          simulateDoubleBreak: !!o
        }),
        c = Pe(s, r);
      for (c ??= w(/^\s*/.exec(t.doc.lineAt(r).text)[0], t.tabSize); i < a.to && /\s/.test(a.text[i - a.from]);) i++;
      o ? {
        from: r,
        to: i
      } = o : r > a.from && r < a.from + 100 && !/\S/.test(a.text.slice(0, r)) && (r = a.from);
      let l = [``, b(t, c)];
      return o && l.push(b(t, s.lineIndent(a.from, -1))), {
        changes: {
          from: r,
          to: i,
          insert: ye.of(l)
        },
        range: j.cursor(r + 1 + l[1].length)
      };
    });
    return n(t.update(r, {
      scrollIntoView: !0,
      userEvent: `input`
    })), !0;
  };
}
function as(e, t) {
  let n = -1;
  return e.changeByRange(r => {
    let i = [];
    for (let a = r.from; a <= r.to;) {
      let o = e.doc.lineAt(a);
      o.number > n && (r.empty || r.to > o.from) && (t(o, i, r), n = o.number), a = o.to + 1;
    }
    let a = e.changes(i);
    return {
      changes: i,
      range: j.range(a.mapPos(r.anchor, 1), a.mapPos(r.head, 1))
    };
  });
}
var os = ({
    state: e,
    dispatch: t
  }) => {
    if (e.readOnly) return !1;
    let n = Object.create(null),
      r = new Ie(e, {
        overrideIndentation: e => n[e] ?? -1
      }),
      i = as(e, (t, i, a) => {
        let o = Pe(r, t.from);
        if (o == null) return;
        /\S/.test(t.text) || (o = 0);
        let s = /^\s*/.exec(t.text)[0],
          c = b(e, o);
        (s != c || a.from < t.from + s.length) && (n[t.from] = o, i.push({
          from: t.from,
          to: t.from + s.length,
          insert: c
        }));
      });
    return i.changes.empty || t(e.update(i, {
      userEvent: `indent`
    })), !0;
  },
  ss = ({
    state: e,
    dispatch: t
  }) => !e.readOnly && (t(e.update(as(e, (t, n) => {
    n.push({
      from: t.from,
      insert: e.facet(x)
    });
  }), {
    userEvent: `input.indent`
  })), !0),
  cs = ({
    state: e,
    dispatch: t
  }) => !e.readOnly && (t(e.update(as(e, (t, n) => {
    let r = /^\s*/.exec(t.text)[0];
    if (!r) return;
    let i = w(r, e.tabSize),
      a = 0,
      o = b(e, Math.max(0, i - S(e)));
    for (; a < r.length && a < o.length && r.charCodeAt(a) == o.charCodeAt(a);) a++;
    n.push({
      from: t.from + a,
      to: t.from + r.length,
      insert: o.slice(a)
    });
  }), {
    userEvent: `delete.dedent`
  })), !0),
  ls = e => (e.setTabFocusMode(), !0),
  us = [{
    key: `Ctrl-b`,
    run: Ma,
    shift: ro,
    preventDefault: !0
  }, {
    key: `Ctrl-f`,
    run: Na,
    shift: io
  }, {
    key: `Ctrl-p`,
    run: Ha,
    shift: fo
  }, {
    key: `Ctrl-n`,
    run: Ua,
    shift: po
  }, {
    key: `Ctrl-a`,
    run: Qa,
    shift: xo
  }, {
    key: `Ctrl-e`,
    run: $a,
    shift: So
  }, {
    key: `Ctrl-d`,
    run: Ro
  }, {
    key: `Ctrl-h`,
    run: Lo
  }, {
    key: `Ctrl-k`,
    run: Ho
  }, {
    key: `Ctrl-Alt-h`,
    run: Bo
  }, {
    key: `Ctrl-o`,
    run: Go
  }, {
    key: `Ctrl-t`,
    run: Ko
  }, {
    key: `Ctrl-v`,
    run: qa
  }],
  ds = [{
    key: `ArrowLeft`,
    run: Ma,
    shift: ro,
    preventDefault: !0
  }, {
    key: `Mod-ArrowLeft`,
    mac: `Alt-ArrowLeft`,
    run: Fa,
    shift: oo,
    preventDefault: !0
  }, {
    mac: `Cmd-ArrowLeft`,
    run: Xa,
    shift: yo,
    preventDefault: !0
  }, {
    key: `ArrowRight`,
    run: Na,
    shift: io,
    preventDefault: !0
  }, {
    key: `Mod-ArrowRight`,
    mac: `Alt-ArrowRight`,
    run: Ia,
    shift: so,
    preventDefault: !0
  }, {
    mac: `Cmd-ArrowRight`,
    run: Za,
    shift: bo,
    preventDefault: !0
  }, {
    key: `ArrowUp`,
    run: Ha,
    shift: fo,
    preventDefault: !0
  }, {
    mac: `Cmd-ArrowUp`,
    run: Co,
    shift: To
  }, {
    mac: `Ctrl-ArrowUp`,
    run: Ka,
    shift: ho
  }, {
    key: `ArrowDown`,
    run: Ua,
    shift: po,
    preventDefault: !0
  }, {
    mac: `Cmd-ArrowDown`,
    run: wo,
    shift: Eo
  }, {
    mac: `Ctrl-ArrowDown`,
    run: qa,
    shift: go
  }, {
    key: `PageUp`,
    run: Ka,
    shift: ho
  }, {
    key: `PageDown`,
    run: qa,
    shift: go
  }, {
    key: `Home`,
    run: Ya,
    shift: vo,
    preventDefault: !0
  }, {
    key: `Mod-Home`,
    run: Co,
    shift: To
  }, {
    key: `End`,
    run: Ja,
    shift: _o,
    preventDefault: !0
  }, {
    key: `Mod-End`,
    run: wo,
    shift: Eo
  }, {
    key: `Enter`,
    run: ns,
    shift: ns
  }, {
    key: `Mod-a`,
    run: Do
  }, {
    key: `Backspace`,
    run: Lo,
    shift: Lo,
    preventDefault: !0
  }, {
    key: `Delete`,
    run: Ro,
    preventDefault: !0
  }, {
    key: `Mod-Backspace`,
    mac: `Alt-Backspace`,
    run: Bo,
    preventDefault: !0
  }, {
    key: `Mod-Delete`,
    mac: `Alt-Delete`,
    run: Vo,
    preventDefault: !0
  }, {
    mac: `Mod-Backspace`,
    run: Uo,
    preventDefault: !0
  }, {
    mac: `Mod-Delete`,
    run: Wo,
    preventDefault: !0
  }].concat(us.map(e => ({
    mac: e.key,
    run: e.run,
    shift: e.shift
  }))),
  fs = [{
    key: `Alt-ArrowLeft`,
    mac: `Ctrl-ArrowLeft`,
    run: za,
    shift: co
  }, {
    key: `Alt-ArrowRight`,
    mac: `Ctrl-ArrowRight`,
    run: Ba,
    shift: lo
  }, {
    key: `Alt-ArrowUp`,
    run: Yo
  }, {
    key: `Shift-Alt-ArrowUp`,
    run: Qo
  }, {
    key: `Alt-ArrowDown`,
    run: Xo
  }, {
    key: `Shift-Alt-ArrowDown`,
    run: $o
  }, {
    key: `Mod-Alt-ArrowUp`,
    run: jo
  }, {
    key: `Mod-Alt-ArrowDown`,
    run: Mo
  }, {
    key: `Escape`,
    run: No
  }, {
    key: `Mod-Enter`,
    run: rs
  }, {
    key: `Alt-l`,
    mac: `Ctrl-l`,
    run: Oo
  }, {
    key: `Mod-i`,
    run: ko,
    preventDefault: !0
  }, {
    key: `Mod-[`,
    run: cs
  }, {
    key: `Mod-]`,
    run: ss
  }, {
    key: `Mod-Alt-\\`,
    run: os
  }, {
    key: `Shift-Mod-k`,
    run: es
  }, {
    key: `Shift-Mod-\\`,
    run: to
  }, {
    key: `Mod-/`,
    run: Yi
  }, {
    key: `Alt-A`,
    mac: `Ctrl-A`,
    run: Qi
  }, {
    key: `Ctrl-m`,
    mac: `Shift-Alt-m`,
    run: ls
  }].concat(ds),
  ps = {
    key: `Tab`,
    run: ss,
    shift: cs
  },
  ms = typeof String.prototype.normalize == `function` ? e => e.normalize(`NFKD`) : e => e,
  hs = class {
    constructor(e, t, n = 0, r = e.length, i, a) {
      this.test = a, this.value = {
        from: 0,
        to: 0,
        precise: !1
      }, this.done = !1, this.matches = [], this.buffer = ``, this.bufferPos = 0, this.iter = e.iterRange(n, r), this.bufferStart = n, this.normalize = i ? e => i(ms(e)) : ms, this.query = this.normalize(t);
    }
    peek() {
      if (this.bufferPos == this.buffer.length) {
        if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
        this.bufferPos = 0, this.buffer = this.iter.value;
      }
      return at(this.buffer, this.bufferPos);
    }
    next() {
      for (; this.matches.length;) this.matches.pop();
      return this.nextOverlapping();
    }
    nextOverlapping() {
      for (;;) {
        let e = this.peek();
        if (e < 0) return this.done = !0, this;
        let t = tt(e),
          n = this.bufferStart + this.bufferPos;
        this.bufferPos += xe(e);
        let r = this.normalize(t);
        if (r.length) for (let e = 0, i = n, a = !0;; e++) {
          let n = r.charCodeAt(e),
            o = this.match(n, i, a, this.bufferPos + this.bufferStart, e == r.length - 1);
          if (o) return this.value = o, this;
          if (e == r.length - 1) break;
          a && e < t.length && t.charCodeAt(e) == n ? i++ : a = !1;
        }
      }
    }
    match(e, t, n, r, i) {
      let a = null;
      for (let t = 0; t < this.matches.length;) {
        let n = this.matches[t],
          o = !1;
        this.query.charCodeAt(n.index) == e && (n.index == this.query.length - 1 ? a = {
          from: n.from,
          to: r,
          precise: i && n.precise
        } : (n.index++, o = !0)), o ? t++ : this.matches.splice(t, 1);
      }
      return this.query.charCodeAt(0) == e && (this.query.length == 1 ? a = {
        from: t,
        to: r,
        precise: n && i
      } : this.matches.push({
        from: t,
        index: 1,
        precise: n
      })), a && this.test && !this.test(a.from, a.to, this.buffer, this.bufferStart) && (a = null), a;
    }
  };
typeof Symbol < `u` && (hs.prototype[Symbol.iterator] = function () {
  return this;
});
var gs = {
    from: -1,
    to: -1,
    match: /.*/.exec(``),
    precise: !0
  },
  _s = `gm` + (/x/.unicode == null ? `` : `u`),
  vs = class {
    constructor(e, t, n, r = 0, i = e.length) {
      if (this.text = e, this.to = i, this.curLine = ``, this.done = !1, this.value = gs, /\\[sWDnr]|\n|\r|\[\^/.test(t)) return new xs(e, t, n, r, i);
      this.re = new RegExp(t, _s + (n?.ignoreCase ? `i` : ``)), this.test = n?.test, this.iter = e.iter();
      let a = e.lineAt(r);
      this.curLineStart = a.from, this.matchPos = Cs(e, r), this.getLine(this.curLineStart);
    }
    getLine(e) {
      this.iter.next(e), this.iter.lineBreak ? this.curLine = `` : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next());
    }
    nextLine() {
      this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = `` : this.getLine(0);
    }
    next() {
      for (let e = this.matchPos - this.curLineStart;;) {
        this.re.lastIndex = e;
        let t = this.matchPos <= this.to && this.re.exec(this.curLine);
        if (t) {
          let n = this.curLineStart + t.index,
            r = n + t[0].length;
          if (this.matchPos = Cs(this.text, r + +(n == r)), n == this.curLineStart + this.curLine.length && this.nextLine(), (n < r || n > this.value.to) && (!this.test || this.test(n, r, t))) return this.value = {
            from: n,
            to: r,
            precise: !0,
            match: t
          }, this;
          e = this.matchPos - this.curLineStart;
        } else if (this.curLineStart + this.curLine.length < this.to) this.nextLine(), e = 0;else return this.done = !0, this;
      }
    }
  },
  ys = new WeakMap(),
  bs = class e {
    constructor(e, t) {
      this.from = e, this.text = t;
    }
    get to() {
      return this.from + this.text.length;
    }
    static get(t, n, r) {
      let i = ys.get(t);
      if (!i || i.from >= r || i.to <= n) {
        let i = new e(n, t.sliceString(n, r));
        return ys.set(t, i), i;
      }
      if (i.from == n && i.to == r) return i;
      let {
        text: a,
        from: o
      } = i;
      return o > n && (a = t.sliceString(n, o) + a, o = n), i.to < r && (a += t.sliceString(i.to, r)), ys.set(t, new e(o, a)), new e(n, a.slice(n - o, r - o));
    }
  },
  xs = class {
    constructor(e, t, n, r, i) {
      this.text = e, this.to = i, this.done = !1, this.value = gs, this.matchPos = Cs(e, r), this.re = new RegExp(t, _s + (n?.ignoreCase ? `i` : ``)), this.test = n?.test, this.flat = bs.get(e, r, this.chunkEnd(r + 5e3));
    }
    chunkEnd(e) {
      return e >= this.to ? this.to : this.text.lineAt(e).to;
    }
    next() {
      for (;;) {
        let e = this.re.lastIndex = this.matchPos - this.flat.from,
          t = this.re.exec(this.flat.text);
        if (t && !t[0] && t.index == e && (this.re.lastIndex = e + 1, t = this.re.exec(this.flat.text)), t) {
          let e = this.flat.from + t.index,
            n = e + t[0].length;
          if ((this.flat.to >= this.to || t.index + t[0].length <= this.flat.text.length - 10) && (!this.test || this.test(e, n, t))) return this.value = {
            from: e,
            to: n,
            precise: !0,
            match: t
          }, this.matchPos = Cs(this.text, n + +(e == n)), this;
        }
        if (this.flat.to == this.to) return this.done = !0, this;
        this.flat = bs.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + this.flat.text.length * 2));
      }
    }
  };
typeof Symbol < `u` && (vs.prototype[Symbol.iterator] = xs.prototype[Symbol.iterator] = function () {
  return this;
});
function Ss(e) {
  try {
    return new RegExp(e, _s), !0;
  } catch {
    return !1;
  }
}
function Cs(e, t) {
  if (t >= e.length) return t;
  let n = e.lineAt(t),
    r;
  for (; t < n.to && (r = n.text.charCodeAt(t - n.from)) >= 56320 && r < 57344;) t++;
  return t;
}
var ws = e => {
    let {
        state: t
      } = e,
      n = String(t.doc.lineAt(e.state.selection.main.head).number),
      {
        close: r,
        result: i
      } = Ke(e, {
        label: t.phrase(`Go to line`),
        input: {
          type: `text`,
          name: `line`,
          value: n
        },
        focus: !0,
        submitLabel: t.phrase(`go`)
      });
    return i.then(n => {
      let i = n && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(n.elements.line.value);
      if (!i) {
        e.dispatch({
          effects: r
        });
        return;
      }
      let a = t.doc.lineAt(t.selection.main.head),
        [, o, s, c, l] = i,
        u = c ? +c.slice(1) : 0,
        d = s ? +s : a.number;
      if (s && l) {
        let e = d / 100;
        o && (e = e * (o == `-` ? -1 : 1) + a.number / t.doc.lines), d = Math.round(t.doc.lines * e);
      } else s && o && (d = d * (o == `-` ? -1 : 1) + a.number);
      let f = t.doc.line(Math.max(1, Math.min(t.doc.lines, d))),
        p = j.cursor(f.from + Math.max(0, Math.min(u, f.length)));
      e.dispatch({
        effects: [r, g.scrollIntoView(p.from, {
          y: `center`
        })],
        selection: p
      });
    }), !0;
  },
  Ts = {
    highlightWordAroundCursor: !1,
    minSelectionLength: 1,
    maxMatches: 100,
    wholeWords: !1
  },
  Es = De.define({
    combine(e) {
      return rt(e, Ts, {
        highlightWordAroundCursor: (e, t) => e || t,
        minSelectionLength: Math.min,
        maxMatches: Math.min
      });
    }
  });
function Ds(e) {
  let t = [Ns, Ms];
  return e && t.push(Es.of(e)), t;
}
var Os = C.mark({
    class: `cm-selectionMatch`
  }),
  ks = C.mark({
    class: `cm-selectionMatch cm-selectionMatch-main`
  });
function As(e, t, n, r) {
  return (n == 0 || e(t.sliceDoc(n - 1, n)) != A.Word) && (r == t.doc.length || e(t.sliceDoc(r, r + 1)) != A.Word);
}
function js(e, t, n, r) {
  return e(t.sliceDoc(n, n + 1)) == A.Word && e(t.sliceDoc(r - 1, r)) == A.Word;
}
var Ms = me.fromClass(class {
    constructor(e) {
      this.decorations = this.getDeco(e);
    }
    update(e) {
      (e.selectionSet || e.docChanged || e.viewportChanged) && (this.decorations = this.getDeco(e.view));
    }
    getDeco(e) {
      let t = e.state.facet(Es),
        {
          state: n
        } = e,
        r = n.selection;
      if (r.ranges.length > 1) return C.none;
      let i = r.main,
        a,
        o = null;
      if (i.empty) {
        if (!t.highlightWordAroundCursor) return C.none;
        let e = n.wordAt(i.head);
        if (!e) return C.none;
        o = n.charCategorizer(i.head), a = n.sliceDoc(e.from, e.to);
      } else {
        let e = i.to - i.from;
        if (e < t.minSelectionLength || e > 200) return C.none;
        if (t.wholeWords) {
          if (a = n.sliceDoc(i.from, i.to), o = n.charCategorizer(i.head), !(As(o, n, i.from, i.to) && js(o, n, i.from, i.to))) return C.none;
        } else if (a = n.sliceDoc(i.from, i.to), !a) return C.none;
      }
      let s = [];
      for (let r of e.visibleRanges) {
        let e = new hs(n.doc, a, r.from, r.to);
        for (; !e.next().done;) {
          let {
            from: r,
            to: a
          } = e.value;
          if ((!o || As(o, n, r, a)) && (i.empty && r <= i.from && a >= i.to ? s.push(ks.range(r, a)) : (r >= i.to || a <= i.from) && s.push(Os.range(r, a)), s.length > t.maxMatches)) return C.none;
        }
      }
      return C.set(s);
    }
  }, {
    decorations: e => e.decorations
  }),
  Ns = g.baseTheme({
    ".cm-selectionMatch": {
      backgroundColor: `#99ff7780`
    },
    ".cm-searchMatch .cm-selectionMatch": {
      backgroundColor: `transparent`
    }
  }),
  Ps = ({
    state: e,
    dispatch: t
  }) => {
    let {
        selection: n
      } = e,
      r = j.create(n.ranges.map(t => e.wordAt(t.head) || j.cursor(t.head)), n.mainIndex);
    return !r.eq(n) && (t(e.update({
      selection: r
    })), !0);
  };
function Fs(e, t) {
  let {
      main: n,
      ranges: r
    } = e.selection,
    i = e.wordAt(n.head),
    a = i && i.from == n.from && i.to == n.to;
  for (let n = !1, i = new hs(e.doc, t, r[r.length - 1].to);;) if (i.next(), i.done) {
    if (n) return null;
    i = new hs(e.doc, t, 0, Math.max(0, r[r.length - 1].from - 1)), n = !0;
  } else {
    if (n && r.some(e => e.from == i.value.from)) continue;
    if (a) {
      let t = e.wordAt(i.value.from);
      if (!t || t.from != i.value.from || t.to != i.value.to) continue;
    }
    return i.value;
  }
}
var Is = ({
    state: e,
    dispatch: t
  }) => {
    let {
      ranges: n
    } = e.selection;
    if (n.some(e => e.from === e.to)) return Ps({
      state: e,
      dispatch: t
    });
    let r = e.sliceDoc(n[0].from, n[0].to);
    if (e.selection.ranges.some(t => e.sliceDoc(t.from, t.to) != r)) return !1;
    let i = Fs(e, r);
    return i ? (t(e.update({
      selection: e.selection.addRange(j.range(i.from, i.to), !1),
      effects: g.scrollIntoView(i.to)
    })), !0) : !1;
  },
  Ls = De.define({
    combine(e) {
      return rt(e, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: e => new gc(e),
        scrollToMatch: e => g.scrollIntoView(e)
      });
    }
  }),
  Rs = class {
    constructor(e) {
      this.search = e.search, this.caseSensitive = !!e.caseSensitive, this.literal = !!e.literal, this.regexp = !!e.regexp, this.replace = e.replace || ``, this.valid = !!this.search && (!this.regexp || Ss(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!e.wholeWord, this.test = e.test;
    }
    unquote(e) {
      return this.literal ? e : e.replace(/\\([nrt\\])/g, (e, t) => t == `n` ? `
` : t == `r` ? `\r` : t == `t` ? `	` : `\\`);
    }
    eq(e) {
      return this.search == e.search && this.replace == e.replace && this.caseSensitive == e.caseSensitive && this.regexp == e.regexp && this.wholeWord == e.wholeWord && this.test == e.test;
    }
    create() {
      return this.regexp ? new Ys(this) : new Us(this);
    }
    getCursor(e, t = 0, n) {
      let r = e.doc ? e : O.create({
        doc: e
      });
      return n ??= r.doc.length, this.regexp ? Gs(this, r, t, n) : Vs(this, r, t, n);
    }
  },
  zs = class {
    constructor(e) {
      this.spec = e;
    }
  };
function Bs(e, t, n) {
  return (r, i, a, o) => n && !n(r, i, a, o) ? !1 : e(r >= o && i <= o + a.length ? a.slice(r - o, i - o) : t.doc.sliceString(r, i), t, r, i);
}
function Vs(e, t, n, r) {
  let i;
  return e.wholeWord && (i = Hs(t.doc, t.charCategorizer(t.selection.main.head))), e.test && (i = Bs(e.test, t, i)), new hs(t.doc, e.unquoted, n, r, e.caseSensitive ? void 0 : e => e.toLowerCase(), i);
}
function Hs(e, t) {
  return (n, r, i, a) => ((a > n || a + i.length < r) && (a = Math.max(0, n - 2), i = e.sliceString(a, Math.min(e.length, r + 2))), (t(Ks(i, n - a)) != A.Word || t(qs(i, n - a)) != A.Word) && (t(qs(i, r - a)) != A.Word || t(Ks(i, r - a)) != A.Word));
}
var Us = class extends zs {
  constructor(e) {
    super(e);
  }
  nextMatch(e, t, n) {
    let r = Vs(this.spec, e, n, e.doc.length).nextOverlapping();
    if (r.done) {
      let n = Math.min(e.doc.length, t + this.spec.unquoted.length);
      r = Vs(this.spec, e, 0, n).nextOverlapping();
    }
    return r.done || r.value.from == t && r.value.to == n ? null : r.value;
  }
  prevMatchInRange(e, t, n) {
    for (let r = n;;) {
      let n = Math.max(t, r - 1e4 - this.spec.unquoted.length),
        i = Vs(this.spec, e, n, r),
        a = null;
      for (; !i.nextOverlapping().done;) a = i.value;
      if (a) return a;
      if (n == t) return null;
      r -= 1e4;
    }
  }
  prevMatch(e, t, n) {
    let r = this.prevMatchInRange(e, 0, t);
    return r ||= this.prevMatchInRange(e, Math.max(0, n - this.spec.unquoted.length), e.doc.length), r && (r.from != t || r.to != n) ? r : null;
  }
  getReplacement(e) {
    return this.spec.unquote(this.spec.replace);
  }
  matchAll(e, t) {
    let n = Vs(this.spec, e, 0, e.doc.length),
      r = [];
    for (; !n.next().done;) {
      if (r.length >= t) return null;
      r.push(n.value);
    }
    return r;
  }
  highlight(e, t, n, r) {
    let i = Vs(this.spec, e, Math.max(0, t - this.spec.unquoted.length), Math.min(n + this.spec.unquoted.length, e.doc.length));
    for (; !i.next().done;) r(i.value.from, i.value.to);
  }
};
function Ws(e, t, n) {
  return (r, i, a) => (!n || n(r, i, a)) && e(a[0], t, r, i);
}
function Gs(e, t, n, r) {
  let i;
  return e.wholeWord && (i = Js(t.charCategorizer(t.selection.main.head))), e.test && (i = Ws(e.test, t, i)), new vs(t.doc, e.search, {
    ignoreCase: !e.caseSensitive,
    test: i
  }, n, r);
}
function Ks(e, t) {
  return e.slice(_(e, t, !1), t);
}
function qs(e, t) {
  return e.slice(t, _(e, t));
}
function Js(e) {
  return (t, n, r) => !r[0].length || (e(Ks(r.input, r.index)) != A.Word || e(qs(r.input, r.index)) != A.Word) && (e(qs(r.input, r.index + r[0].length)) != A.Word || e(Ks(r.input, r.index + r[0].length)) != A.Word);
}
var Ys = class extends zs {
    nextMatch(e, t, n) {
      let r = Gs(this.spec, e, n, e.doc.length).next();
      return r.done && (r = Gs(this.spec, e, 0, t).next()), r.done ? null : r.value;
    }
    prevMatchInRange(e, t, n) {
      for (let r = 1;; r++) {
        let i = Math.max(t, n - r * 1e4),
          a = Gs(this.spec, e, i, n),
          o = null;
        for (; !a.next().done;) o = a.value;
        if (o && (i == t || o.from > i + 10)) return o;
        if (i == t) return null;
      }
    }
    prevMatch(e, t, n) {
      return this.prevMatchInRange(e, 0, t) || this.prevMatchInRange(e, n, e.doc.length);
    }
    getReplacement(e) {
      return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, (t, n) => {
        if (n == `&`) return e.match[0];
        if (n == `$`) return `$`;
        for (let t = n.length; t > 0; t--) {
          let r = +n.slice(0, t);
          if (r > 0 && r < e.match.length) return e.match[r] + n.slice(t);
        }
        return t;
      });
    }
    matchAll(e, t) {
      let n = Gs(this.spec, e, 0, e.doc.length),
        r = [];
      for (; !n.next().done;) {
        if (r.length >= t) return null;
        r.push(n.value);
      }
      return r;
    }
    highlight(e, t, n, r) {
      let i = Gs(this.spec, e, Math.max(0, t - 250), Math.min(n + 250, e.doc.length));
      for (; !i.next().done;) r(i.value.from, i.value.to);
    }
  },
  Xs = k.define(),
  Zs = k.define(),
  X = ke.define({
    create(e) {
      return new Qs(uc(e).create(), null);
    },
    update(e, t) {
      for (let n of t.effects) n.is(Xs) ? e = new Qs(n.value.create(), e.panel) : n.is(Zs) && (e = new Qs(e.query, n.value ? lc : null));
      return e;
    },
    provide: e => Me.from(e, e => e.panel)
  }),
  Qs = class {
    constructor(e, t) {
      this.query = e, this.panel = t;
    }
  },
  $s = C.mark({
    class: `cm-searchMatch`
  }),
  ec = C.mark({
    class: `cm-searchMatch cm-searchMatch-selected`
  }),
  tc = me.fromClass(class {
    constructor(e) {
      this.view = e, this.decorations = this.highlight(e.state.field(X));
    }
    update(e) {
      let t = e.state.field(X);
      (t != e.startState.field(X) || e.docChanged || e.selectionSet || e.viewportChanged) && (this.decorations = this.highlight(t));
    }
    highlight({
      query: e,
      panel: t
    }) {
      if (!t || !e.spec.valid) return C.none;
      let {
          view: n
        } = this,
        r = new Le();
      for (let t = 0, i = n.visibleRanges, a = i.length; t < a; t++) {
        let {
          from: o,
          to: s
        } = i[t];
        for (; t < a - 1 && s > i[t + 1].from - 500;) s = i[++t].to;
        e.highlight(n.state, o, s, (e, t) => {
          let i = n.state.selection.ranges.some(n => n.from == e && n.to == t);
          r.add(e, t, i ? ec : $s);
        });
      }
      return r.finish();
    }
  }, {
    decorations: e => e.decorations
  });
function nc(e) {
  return t => {
    let n = t.state.field(X, !1);
    return n && n.query.spec.valid ? e(t, n) : pc(t);
  };
}
var rc = nc((e, {
    query: t
  }) => {
    let {
        to: n
      } = e.state.selection.main,
      r = t.nextMatch(e.state, n, n);
    if (!r) return !1;
    let i = j.single(r.from, r.to),
      a = e.state.facet(Ls);
    return e.dispatch({
      selection: i,
      effects: [yc(e, r), a.scrollToMatch(i.main, e)],
      userEvent: `select.search`
    }), fc(e), !0;
  }),
  ic = nc((e, {
    query: t
  }) => {
    let {
        state: n
      } = e,
      {
        from: r
      } = n.selection.main,
      i = t.prevMatch(n, r, r);
    if (!i) return !1;
    let a = j.single(i.from, i.to),
      o = e.state.facet(Ls);
    return e.dispatch({
      selection: a,
      effects: [yc(e, i), o.scrollToMatch(a.main, e)],
      userEvent: `select.search`
    }), fc(e), !0;
  }),
  ac = nc((e, {
    query: t
  }) => {
    let n = t.matchAll(e.state, 1e3);
    return !n || !n.length ? !1 : (e.dispatch({
      selection: j.create(n.map(e => j.range(e.from, e.to))),
      userEvent: `select.search.matches`
    }), !0);
  }),
  oc = ({
    state: e,
    dispatch: t
  }) => {
    let n = e.selection;
    if (n.ranges.length > 1 || n.main.empty) return !1;
    let {
        from: r,
        to: i
      } = n.main,
      a = [],
      o = 0;
    for (let t = new hs(e.doc, e.sliceDoc(r, i)); !t.next().done;) {
      if (a.length > 1e3) return !1;
      t.value.from == r && (o = a.length), a.push(j.range(t.value.from, t.value.to));
    }
    return t(e.update({
      selection: j.create(a, o),
      userEvent: `select.search.matches`
    })), !0;
  },
  sc = nc((e, {
    query: t
  }) => {
    let {
        state: n
      } = e,
      {
        from: r,
        to: i
      } = n.selection.main;
    if (n.readOnly) return !1;
    let a = t.nextMatch(n, r, r);
    if (!a) return !1;
    let o = a,
      s = [],
      c,
      l,
      u = [];
    o.precise ? o.from == r && o.to == i && (l = n.toText(t.getReplacement(o)), s.push({
      from: o.from,
      to: o.to,
      insert: l
    }), o = t.nextMatch(n, o.from, o.to), u.push(g.announce.of(n.phrase(`replaced match on line $`, n.doc.lineAt(r).number) + `.`))) : o = t.nextMatch(n, o.from, o.to);
    let d = e.state.changes(s);
    return o && (c = j.single(o.from, o.to).map(d), u.push(yc(e, o)), u.push(n.facet(Ls).scrollToMatch(c.main, e))), e.dispatch({
      changes: d,
      selection: c,
      effects: u,
      userEvent: `input.replace`
    }), !0;
  }),
  cc = nc((e, {
    query: t
  }) => {
    if (e.state.readOnly) return !1;
    let n = [];
    for (let r of t.matchAll(e.state, 1e9)) {
      let {
        from: e,
        to: i,
        precise: a
      } = r;
      a && n.push({
        from: e,
        to: i,
        insert: t.getReplacement(r)
      });
    }
    if (!n.length) return !1;
    let r = e.state.phrase(`replaced $ matches`, n.length) + `.`;
    return e.dispatch({
      changes: n,
      effects: g.announce.of(r),
      userEvent: `input.replace.all`
    }), !0;
  });
function lc(e) {
  return e.state.facet(Ls).createPanel(e);
}
function uc(e, t) {
  let n = e.selection.main,
    r = n.empty || n.to > n.from + 100 ? `` : e.sliceDoc(n.from, n.to);
  if (t && !r) return t;
  let i = e.facet(Ls);
  return new Rs({
    search: t?.literal ?? i.literal ? r : r.replace(/\n/g, `\\n`),
    caseSensitive: t?.caseSensitive ?? i.caseSensitive,
    literal: t?.literal ?? i.literal,
    regexp: t?.regexp ?? i.regexp,
    wholeWord: t?.wholeWord ?? i.wholeWord
  });
}
function dc(e) {
  let t = We(e, lc);
  return t && t.dom.querySelector(`[main-field]`);
}
function fc(e) {
  let t = dc(e);
  t && t == e.root.activeElement && t.select();
}
var pc = e => {
    let t = e.state.field(X, !1);
    if (t && t.panel) {
      let n = dc(e);
      if (n && n != e.root.activeElement) {
        let r = uc(e.state, t.query.spec);
        r.valid && e.dispatch({
          effects: Xs.of(r)
        }), n.focus(), n.select();
      }
    } else e.dispatch({
      effects: [Zs.of(!0), t ? Xs.of(uc(e.state, t.query.spec)) : k.appendConfig.of(xc)]
    });
    return !0;
  },
  mc = e => {
    let t = e.state.field(X, !1);
    if (!t || !t.panel) return !1;
    let n = We(e, lc);
    return n && n.dom.contains(e.root.activeElement) && e.focus(), e.dispatch({
      effects: Zs.of(!1)
    }), !0;
  },
  hc = [{
    key: `Mod-f`,
    run: pc,
    scope: `editor search-panel`
  }, {
    key: `F3`,
    run: rc,
    shift: ic,
    scope: `editor search-panel`,
    preventDefault: !0
  }, {
    key: `Mod-g`,
    run: rc,
    shift: ic,
    scope: `editor search-panel`,
    preventDefault: !0
  }, {
    key: `Escape`,
    run: mc,
    scope: `editor search-panel`
  }, {
    key: `Mod-Shift-l`,
    run: oc
  }, {
    key: `Mod-Alt-g`,
    run: ws
  }, {
    key: `Mod-d`,
    run: Is,
    preventDefault: !0
  }],
  gc = class {
    constructor(e) {
      this.view = e;
      let t = this.query = e.state.field(X).query.spec;
      this.commit = this.commit.bind(this), this.searchField = D(`input`, {
        value: t.search,
        placeholder: Z(e, `Find`),
        "aria-label": Z(e, `Find`),
        class: `cm-textfield`,
        name: `search`,
        form: ``,
        "main-field": `true`,
        onchange: this.commit,
        onkeyup: this.commit
      }), this.replaceField = D(`input`, {
        value: t.replace,
        placeholder: Z(e, `Replace`),
        "aria-label": Z(e, `Replace`),
        class: `cm-textfield`,
        name: `replace`,
        form: ``,
        onchange: this.commit,
        onkeyup: this.commit
      }), this.caseField = D(`input`, {
        type: `checkbox`,
        name: `case`,
        form: ``,
        checked: t.caseSensitive,
        onchange: this.commit
      }), this.reField = D(`input`, {
        type: `checkbox`,
        name: `re`,
        form: ``,
        checked: t.regexp,
        onchange: this.commit
      }), this.wordField = D(`input`, {
        type: `checkbox`,
        name: `word`,
        form: ``,
        checked: t.wholeWord,
        onchange: this.commit
      });
      function n(e, t, n) {
        return D(`button`, {
          class: `cm-button`,
          name: e,
          onclick: t,
          type: `button`
        }, n);
      }
      this.dom = D(`div`, {
        onkeydown: e => this.keydown(e),
        class: `cm-search`
      }, [this.searchField, n(`next`, () => rc(e), [Z(e, `next`)]), n(`prev`, () => ic(e), [Z(e, `previous`)]), n(`select`, () => ac(e), [Z(e, `all`)]), D(`label`, null, [this.caseField, Z(e, `match case`)]), D(`label`, null, [this.reField, Z(e, `regexp`)]), D(`label`, null, [this.wordField, Z(e, `by word`)]), ...(e.state.readOnly ? [] : [D(`br`), this.replaceField, n(`replace`, () => sc(e), [Z(e, `replace`)]), n(`replaceAll`, () => cc(e), [Z(e, `replace all`)])]), D(`button`, {
        name: `close`,
        onclick: () => mc(e),
        "aria-label": Z(e, `close`),
        type: `button`
      }, [`×`])]);
    }
    commit() {
      let e = new Rs({
        search: this.searchField.value,
        caseSensitive: this.caseField.checked,
        regexp: this.reField.checked,
        wholeWord: this.wordField.checked,
        replace: this.replaceField.value
      });
      e.eq(this.query) || (this.query = e, this.view.dispatch({
        effects: Xs.of(e)
      }));
    }
    keydown(e) {
      ze(this.view, e, `search-panel`) ? e.preventDefault() : e.keyCode == 13 && e.target == this.searchField ? (e.preventDefault(), (e.shiftKey ? ic : rc)(this.view)) : e.keyCode == 13 && e.target == this.replaceField && (e.preventDefault(), sc(this.view));
    }
    update(e) {
      for (let t of e.transactions) for (let e of t.effects) e.is(Xs) && !e.value.eq(this.query) && this.setQuery(e.value);
    }
    setQuery(e) {
      this.query = e, this.searchField.value = e.search, this.replaceField.value = e.replace, this.caseField.checked = e.caseSensitive, this.reField.checked = e.regexp, this.wordField.checked = e.wholeWord;
    }
    mount() {
      this.searchField.select();
    }
    get pos() {
      return 80;
    }
    get top() {
      return this.view.state.facet(Ls).top;
    }
  };
function Z(e, t) {
  return e.state.phrase(t);
}
var _c = 30,
  vc = /[\s\.,:;?!]/;
function yc(e, {
  from: t,
  to: n
}) {
  let r = e.state.doc.lineAt(t),
    i = e.state.doc.lineAt(n).to,
    a = Math.max(r.from, t - _c),
    o = Math.min(i, n + _c),
    s = e.state.sliceDoc(a, o);
  if (a != r.from) {
    for (let e = 0; e < _c; e++) if (!vc.test(s[e + 1]) && vc.test(s[e])) {
      s = s.slice(e);
      break;
    }
  }
  if (o != i) {
    for (let e = s.length - 1; e > s.length - _c; e--) if (!vc.test(s[e - 1]) && vc.test(s[e])) {
      s = s.slice(0, e);
      break;
    }
  }
  return g.announce.of(`${e.state.phrase(`current match`)}. ${s} ${e.state.phrase(`on line`)} ${r.number}.`);
}
var bc = g.baseTheme({
    ".cm-panel.cm-search": {
      padding: `2px 6px 4px`,
      position: `relative`,
      "& [name=close]": {
        position: `absolute`,
        top: `0`,
        right: `4px`,
        backgroundColor: `inherit`,
        border: `none`,
        font: `inherit`,
        padding: 0,
        margin: 0
      },
      "& input, & button, & label": {
        margin: `.2em .6em .2em 0`
      },
      "& input[type=checkbox]": {
        marginRight: `.2em`
      },
      "& label": {
        fontSize: `80%`,
        whiteSpace: `pre`
      }
    },
    "&light .cm-searchMatch": {
      backgroundColor: `#ffff0054`
    },
    "&dark .cm-searchMatch": {
      backgroundColor: `#00ffff8a`
    },
    "&light .cm-searchMatch-selected": {
      backgroundColor: `#ff6a0054`
    },
    "&dark .cm-searchMatch-selected": {
      backgroundColor: `#ff00ff8a`
    }
  }),
  xc = [X, Ue.low(tc), bc],
  Sc = class {
    constructor(e, t, n) {
      this.from = e, this.to = t, this.diagnostic = n;
    }
  },
  Cc = class e {
    constructor(e, t, n) {
      this.diagnostics = e, this.panel = t, this.selected = n;
    }
    static init(t, n, r) {
      let i = r.facet(Fc).markerFilter;
      i && (t = i(t, r));
      let a = t.slice().sort((e, t) => e.from - t.from || e.to - t.to),
        o = new Le(),
        s = [],
        c = 0,
        l = r.doc.iter(),
        u = 0,
        d = r.doc.length;
      for (let e = 0;;) {
        let t = e == a.length ? null : a[e];
        if (!t && !s.length) break;
        let n, r;
        if (s.length) n = c, r = s.reduce((e, t) => Math.min(e, t.to), t && t.from > n ? t.from : 1e8);else {
          if (n = t.from, n > d) break;
          r = t.to, s.push(t), e++;
        }
        for (; e < a.length;) {
          let t = a[e];
          if (t.from == n && (t.to > t.from || t.to == n)) s.push(t), e++, r = Math.min(t.to, r);else {
            r = Math.min(t.from, r);
            break;
          }
        }
        r = Math.min(r, d);
        let i = !1;
        if (s.some(e => e.from == n && (e.to == r || r == d)) && (i = n == r, !i && r - n < 10)) {
          let e = n - (u + l.value.length);
          e > 0 && (l.next(e), u = n);
          for (let e = n;;) {
            if (e >= r) {
              i = !0;
              break;
            }
            if (!l.lineBreak && u + l.value.length > e) break;
            e = u + l.value.length, u += l.value.length, l.next();
          }
        }
        let f = Kc(s);
        if (i) o.add(n, n, C.widget({
          widget: new zc(f),
          diagnostics: s.slice()
        }));else {
          let e = s.reduce((e, t) => t.markClass ? e + ` ` + t.markClass : e, ``);
          o.add(n, r, C.mark({
            class: `cm-lintRange cm-lintRange-` + f + e,
            diagnostics: s.slice(),
            inclusiveEnd: s.some(e => e.to > r)
          }));
        }
        if (c = r, c == d) break;
        for (let e = 0; e < s.length; e++) s[e].to <= c && s.splice(e--, 1);
      }
      let f = o.finish();
      return new e(f, n, Q(f));
    }
  };
function Q(e, t = null, n = 0) {
  let r = null;
  return e.between(n, 1e9, (e, n, {
    spec: i
  }) => {
    if (!(t && i.diagnostics.indexOf(t) < 0)) {
      if (!r) r = new Sc(e, n, t || i.diagnostics[0]);else if (i.diagnostics.indexOf(r.diagnostic) < 0) return !1;else r = new Sc(r.from, n, r.diagnostic);
    }
  }), r;
}
function wc(e, t) {
  let n = t.pos,
    r = t.end || n,
    i = e.state.facet(Fc).hideOn(e, n, r);
  if (i != null) return i;
  let a = e.startState.doc.lineAt(t.pos);
  return !!(e.effects.some(e => e.is(Ec)) || e.changes.touchesRange(a.from, Math.max(a.to, r)));
}
function Tc(e, t) {
  return e.field($, !1) ? t : t.concat(k.appendConfig.of(Jc));
}
var Ec = k.define(),
  Dc = k.define(),
  Oc = k.define(),
  $ = ke.define({
    create() {
      return new Cc(C.none, null, null);
    },
    update(e, t) {
      if (t.docChanged && e.diagnostics.size) {
        let n = e.diagnostics.map(t.changes),
          r = null,
          i = e.panel;
        if (e.selected) {
          let i = t.changes.mapPos(e.selected.from, 1);
          r = Q(n, e.selected.diagnostic, i) || Q(n, null, i);
        }
        !n.size && i && t.state.facet(Fc).autoPanel && (i = null), e = new Cc(n, i, r);
      }
      for (let n of t.effects) if (n.is(Ec)) {
        let r = t.state.facet(Fc).autoPanel ? n.value.length ? Vc.open : null : e.panel;
        e = Cc.init(n.value, r, t.state);
      } else n.is(Dc) ? e = new Cc(e.diagnostics, n.value ? Vc.open : null, e.selected) : n.is(Oc) && (e = new Cc(e.diagnostics, e.panel, n.value));
      return e;
    },
    provide: e => [Me.from(e, e => e.panel), g.decorations.from(e, e => e.diagnostics)]
  }),
  kc = C.mark({
    class: `cm-lintRange cm-lintRange-active`
  });
function Ac(e, t, n) {
  let {
      diagnostics: r
    } = e.state.field($),
    i,
    a = -1,
    o = -1;
  r.between(t - +(n < 0), t + +(n > 0), (e, r, {
    spec: s
  }) => {
    if (t >= e && t <= r && (e == r || (t > e || n > 0) && (t < r || n < 0))) return i = s.diagnostics, a = e, o = r, !1;
  });
  let s = e.state.facet(Fc).tooltipFilter;
  return i && s && (i = s(i, e.state)), i ? {
    pos: a,
    end: o,
    above: !0,
    create() {
      return {
        dom: jc(e, i)
      };
    }
  } : null;
}
function jc(e, t) {
  return D(`ul`, {
    class: `cm-tooltip-lint`
  }, t.map(t => Rc(e, t, !1)));
}
var Mc = e => {
    let t = e.state.field($, !1);
    (!t || !t.panel) && e.dispatch({
      effects: Tc(e.state, [Dc.of(!0)])
    });
    let n = We(e, Vc.open);
    return n && n.dom.querySelector(`.cm-panel-lint ul`).focus(), !0;
  },
  Nc = e => {
    let t = e.state.field($, !1);
    return !t || !t.panel ? !1 : (e.dispatch({
      effects: Dc.of(!1)
    }), !0);
  },
  Pc = [{
    key: `Mod-Shift-m`,
    run: Mc,
    preventDefault: !0
  }, {
    key: `F8`,
    run: e => {
      let t = e.state.field($, !1);
      if (!t) return !1;
      let n = e.state.selection.main,
        r = Q(t.diagnostics, null, n.to + 1);
      return !r && (r = Q(t.diagnostics, null, 0), !r || r.from == n.from && r.to == n.to) ? !1 : (e.dispatch({
        selection: {
          anchor: r.from,
          head: r.to
        },
        scrollIntoView: !0
      }), pe(e, r.from, 1, {
        tooltip: qc,
        until: e => e.docChanged || e.newSelection.main.head < r.from || e.newSelection.main.head > r.to
      }), !0);
    }
  }],
  Fc = De.define({
    combine(e) {
      return {
        sources: e.map(e => e.source).filter(e => e != null),
        ...rt(e.map(e => e.config), {
          delay: 750,
          markerFilter: null,
          tooltipFilter: null,
          needsRefresh: null,
          hideOn: () => null
        }, {
          delay: Math.max,
          markerFilter: Ic,
          tooltipFilter: Ic,
          needsRefresh: (e, t) => e ? t ? n => e(n) || t(n) : e : t,
          hideOn: (e, t) => e ? t ? (n, r, i) => e(n, r, i) || t(n, r, i) : e : t,
          autoPanel: (e, t) => e || t
        })
      };
    }
  });
function Ic(e, t) {
  return e ? t ? (n, r) => t(e(n, r), r) : e : t;
}
function Lc(e) {
  let t = [];
  if (e) actions: for (let {
    name: n
  } of e) {
    for (let e = 0; e < n.length; e++) {
      let r = n[e];
      if (/[a-zA-Z]/.test(r) && !t.some(e => e.toLowerCase() == r.toLowerCase())) {
        t.push(r);
        continue actions;
      }
    }
    t.push(``);
  }
  return t;
}
function Rc(e, t, n) {
  let r = n ? Lc(t.actions) : [];
  return D(`li`, {
    class: `cm-diagnostic cm-diagnostic-` + t.severity
  }, D(`span`, {
    class: `cm-diagnosticText`
  }, t.renderMessage ? t.renderMessage(e) : t.message), t.actions?.map((n, i) => {
    let a = !1,
      o = r => {
        if (r.preventDefault(), a) return;
        a = !0;
        let i = Q(e.state.field($).diagnostics, t);
        i && n.apply(e, i.from, i.to);
      },
      {
        name: s
      } = n,
      c = r[i] ? s.indexOf(r[i]) : -1,
      l = c < 0 ? s : [s.slice(0, c), D(`u`, s.slice(c, c + 1)), s.slice(c + 1)],
      u = n.markClass ? ` ` + n.markClass : ``;
    return D(`button`, {
      type: `button`,
      class: `cm-diagnosticAction` + u,
      onclick: o,
      onmousedown: o,
      "aria-label": ` Action: ${s}${c < 0 ? `` : ` (access key "${r[i]})"`}.`
    }, l);
  }), t.source && D(`div`, {
    class: `cm-diagnosticSource`
  }, t.source));
}
var zc = class extends ae {
    constructor(e) {
      super(), this.sev = e;
    }
    eq(e) {
      return e.sev == this.sev;
    }
    toDOM() {
      return D(`span`, {
        class: `cm-lintPoint cm-lintPoint-` + this.sev
      });
    }
  },
  Bc = class {
    constructor(e, t) {
      this.diagnostic = t, this.id = `item_` + Math.floor(Math.random() * 4294967295).toString(16), this.dom = Rc(e, t, !0), this.dom.id = this.id, this.dom.setAttribute(`role`, `option`);
    }
  },
  Vc = class e {
    constructor(e) {
      this.view = e, this.items = [];
      let t = t => {
          if (!(t.ctrlKey || t.altKey || t.metaKey)) {
            if (t.keyCode == 27) Nc(this.view), this.view.focus();else if (t.keyCode == 38 || t.keyCode == 33) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);else if (t.keyCode == 40 || t.keyCode == 34) this.moveSelection((this.selectedIndex + 1) % this.items.length);else if (t.keyCode == 36) this.moveSelection(0);else if (t.keyCode == 35) this.moveSelection(this.items.length - 1);else if (t.keyCode == 13) this.view.focus();else if (t.keyCode >= 65 && t.keyCode <= 90 && this.selectedIndex >= 0) {
              let {
                  diagnostic: n
                } = this.items[this.selectedIndex],
                r = Lc(n.actions);
              for (let i = 0; i < r.length; i++) if (r[i].toUpperCase().charCodeAt(0) == t.keyCode) {
                let t = Q(this.view.state.field($).diagnostics, n);
                t && n.actions[i].apply(e, t.from, t.to);
              }
            } else return;
            t.preventDefault();
          }
        },
        n = e => {
          for (let t = 0; t < this.items.length; t++) this.items[t].dom.contains(e.target) && this.moveSelection(t);
        };
      this.list = D(`ul`, {
        tabIndex: 0,
        role: `listbox`,
        "aria-label": this.view.state.phrase(`Diagnostics`),
        onkeydown: t,
        onclick: n
      }), this.dom = D(`div`, {
        class: `cm-panel-lint`
      }, this.list, D(`button`, {
        type: `button`,
        name: `close`,
        "aria-label": this.view.state.phrase(`close`),
        onclick: () => Nc(this.view)
      }, `×`)), this.update();
    }
    get selectedIndex() {
      let e = this.view.state.field($).selected;
      if (!e) return -1;
      for (let t = 0; t < this.items.length; t++) if (this.items[t].diagnostic == e.diagnostic) return t;
      return -1;
    }
    update() {
      let {
          diagnostics: e,
          selected: t
        } = this.view.state.field($),
        n = 0,
        r = !1,
        i = null,
        a = new Set();
      for (e.between(0, this.view.state.doc.length, (e, o, {
        spec: s
      }) => {
        for (let e of s.diagnostics) {
          if (a.has(e)) continue;
          a.add(e);
          let o = -1,
            s;
          for (let t = n; t < this.items.length; t++) if (this.items[t].diagnostic == e) {
            o = t;
            break;
          }
          o < 0 ? (s = new Bc(this.view, e), this.items.splice(n, 0, s), r = !0) : (s = this.items[o], o > n && (this.items.splice(n, o - n), r = !0)), t && s.diagnostic == t.diagnostic ? s.dom.hasAttribute(`aria-selected`) || (s.dom.setAttribute(`aria-selected`, `true`), i = s) : s.dom.hasAttribute(`aria-selected`) && s.dom.removeAttribute(`aria-selected`), n++;
        }
      }); n < this.items.length && !(this.items.length == 1 && this.items[0].diagnostic.from < 0);) r = !0, this.items.pop();
      this.items.length == 0 && (this.items.push(new Bc(this.view, {
        from: -1,
        to: -1,
        severity: `info`,
        message: this.view.state.phrase(`No diagnostics`)
      })), r = !0), i ? (this.list.setAttribute(`aria-activedescendant`, i.id), this.view.requestMeasure({
        key: this,
        read: () => ({
          sel: i.dom.getBoundingClientRect(),
          panel: this.list.getBoundingClientRect()
        }),
        write: ({
          sel: e,
          panel: t
        }) => {
          let n = t.height / this.list.offsetHeight;
          e.top < t.top ? this.list.scrollTop -= (t.top - e.top) / n : e.bottom > t.bottom && (this.list.scrollTop += (e.bottom - t.bottom) / n);
        }
      })) : this.selectedIndex < 0 && this.list.removeAttribute(`aria-activedescendant`), r && this.sync();
    }
    sync() {
      let e = this.list.firstChild;
      function t() {
        let t = e;
        e = t.nextSibling, t.remove();
      }
      for (let n of this.items) if (n.dom.parentNode == this.list) {
        for (; e != n.dom;) t();
        e = n.dom.nextSibling;
      } else this.list.insertBefore(n.dom, e);
      for (; e;) t();
    }
    moveSelection(e) {
      if (this.selectedIndex < 0) return;
      let t = Q(this.view.state.field($).diagnostics, this.items[e].diagnostic);
      t && this.view.dispatch({
        selection: {
          anchor: t.from,
          head: t.to
        },
        scrollIntoView: !0,
        effects: Oc.of(t)
      });
    }
    static open(t) {
      return new e(t);
    }
  };
function Hc(e, t = `viewBox="0 0 40 40"`) {
  return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${t}>${encodeURIComponent(e)}</svg>')`;
}
function Uc(e) {
  return Hc(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${e}" fill="none" stroke-width=".7"/>`, `width="6" height="3"`);
}
var Wc = g.baseTheme({
  ".cm-diagnostic": {
    padding: `3px 6px 3px 8px`,
    marginLeft: `-1px`,
    display: `block`,
    whiteSpace: `pre-wrap`
  },
  ".cm-diagnostic-error": {
    borderLeft: `5px solid #d11`
  },
  ".cm-diagnostic-warning": {
    borderLeft: `5px solid orange`
  },
  ".cm-diagnostic-info": {
    borderLeft: `5px solid #999`
  },
  ".cm-diagnostic-hint": {
    borderLeft: `5px solid #66d`
  },
  ".cm-diagnosticAction": {
    font: `inherit`,
    border: `none`,
    padding: `2px 4px`,
    backgroundColor: `#444`,
    color: `white`,
    borderRadius: `3px`,
    marginLeft: `8px`,
    cursor: `pointer`
  },
  ".cm-diagnosticSource": {
    fontSize: `70%`,
    opacity: .7
  },
  ".cm-lintRange": {
    backgroundPosition: `left bottom`,
    backgroundRepeat: `repeat-x`,
    paddingBottom: `0.7px`
  },
  ".cm-lintRange-error": {
    backgroundImage: Uc(`#f11`)
  },
  ".cm-lintRange-warning": {
    backgroundImage: Uc(`orange`)
  },
  ".cm-lintRange-info": {
    backgroundImage: Uc(`#999`)
  },
  ".cm-lintRange-hint": {
    backgroundImage: Uc(`#66d`)
  },
  ".cm-lintRange-active": {
    backgroundColor: `#ffdd9980`
  },
  ".cm-tooltip-lint": {
    padding: 0,
    margin: 0
  },
  ".cm-lintPoint": {
    position: `relative`,
    "&:after": {
      content: `""`,
      position: `absolute`,
      bottom: 0,
      left: `-2px`,
      borderLeft: `3px solid transparent`,
      borderRight: `3px solid transparent`,
      borderBottom: `4px solid #d11`
    }
  },
  ".cm-lintPoint-warning": {
    "&:after": {
      borderBottomColor: `orange`
    }
  },
  ".cm-lintPoint-info": {
    "&:after": {
      borderBottomColor: `#999`
    }
  },
  ".cm-lintPoint-hint": {
    "&:after": {
      borderBottomColor: `#66d`
    }
  },
  ".cm-panel.cm-panel-lint": {
    position: `relative`,
    "& ul": {
      maxHeight: `100px`,
      overflowY: `auto`,
      "& [aria-selected]": {
        backgroundColor: `#ddd`,
        "& u": {
          textDecoration: `underline`
        }
      },
      "&:focus [aria-selected]": {
        background_fallback: `#bdf`,
        backgroundColor: `Highlight`,
        color_fallback: `white`,
        color: `HighlightText`
      },
      "& u": {
        textDecoration: `none`
      },
      padding: 0,
      margin: 0
    },
    "& [name=close]": {
      position: `absolute`,
      top: `0`,
      right: `2px`,
      background: `inherit`,
      border: `none`,
      font: `inherit`,
      padding: 0,
      margin: 0
    }
  },
  "&dark .cm-lintRange-active": {
    backgroundColor: `#86714a80`
  },
  "&dark .cm-panel.cm-panel-lint ul": {
    "& [aria-selected]": {
      backgroundColor: `#2e343e`
    }
  }
});
function Gc(e) {
  return e == `error` ? 4 : e == `warning` ? 3 : e == `info` ? 2 : 1;
}
function Kc(e) {
  let t = `hint`,
    n = 1;
  for (let r of e) {
    let e = Gc(r.severity);
    e > n && (n = e, t = r.severity);
  }
  return t;
}
var qc = _e(Ac, {
    hideOn: wc
  }),
  Jc = [$, g.decorations.compute([$], e => {
    let {
      selected: t,
      panel: n
    } = e.field($);
    return !t || !n || t.from == t.to ? C.none : C.set([kc.range(t.from, t.to)]);
  }), qc, Wc],
  Yc = function (e) {
    e === void 0 && (e = {});
    var t = e.crosshairCursor,
      n = t !== void 0 && t,
      r = [];
    e.closeBracketsKeymap !== !1 && (r = r.concat(Fe)), e.defaultKeymap !== !1 && (r = r.concat(fs)), e.searchKeymap !== !1 && (r = r.concat(hc)), e.historyKeymap !== !1 && (r = r.concat(Oa)), e.foldKeymap !== !1 && (r = r.concat(fe)), e.completionKeymap !== !1 && (r = r.concat(Ze)), e.lintKeymap !== !1 && (r = r.concat(Pc));
    var i = [];
    return e.lineNumbers !== !1 && i.push(ee()), e.highlightActiveLineGutter !== !1 && i.push(ge()), e.highlightSpecialChars !== !1 && i.push(T()), e.history !== !1 && i.push(da()), e.foldGutter !== !1 && i.push(et()), e.drawSelection !== !1 && i.push(ie()), e.dropCursor !== !1 && i.push(ce()), e.allowMultipleSelections !== !1 && i.push(O.allowMultipleSelections.of(!0)), e.indentOnInput !== !1 && i.push(Ne()), e.syntaxHighlighting !== !1 && i.push(oe(de, {
      fallback: !0
    })), e.bracketMatching !== !1 && i.push(be()), e.closeBrackets !== !1 && i.push(Se()), e.autocompletion !== !1 && i.push(qe()), e.rectangularSelection !== !1 && i.push(Xe()), n !== !1 && i.push(he()), e.highlightActiveLine !== !1 && i.push(se()), e.highlightSelectionMatches !== !1 && i.push(Ds()), e.tabSize && typeof e.tabSize == `number` && i.push(x.of(` `.repeat(e.tabSize))), i.concat([ue.of(r.flat())]).filter(Boolean);
  },
  Xc = `#e5c07b`,
  Zc = `#e06c75`,
  Qc = `#56b6c2`,
  $c = `#ffffff`,
  el = `#abb2bf`,
  tl = `#7d8799`,
  nl = `#61afef`,
  rl = `#98c379`,
  il = `#d19a66`,
  al = `#c678dd`,
  ol = `#21252b`,
  sl = `#2c313a`,
  cl = `#282c34`,
  ll = `#353a42`,
  ul = `#3E4451`,
  dl = `#528bff`,
  fl = g.theme({
    "&": {
      color: el,
      backgroundColor: cl
    },
    ".cm-content": {
      caretColor: dl
    },
    ".cm-cursor, .cm-dropCursor": {
      borderLeftColor: dl
    },
    "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
      backgroundColor: ul
    },
    ".cm-panels": {
      backgroundColor: ol,
      color: el
    },
    ".cm-panels.cm-panels-top": {
      borderBottom: `2px solid black`
    },
    ".cm-panels.cm-panels-bottom": {
      borderTop: `2px solid black`
    },
    ".cm-searchMatch": {
      backgroundColor: `#72a1ff59`,
      outline: `1px solid #457dff`
    },
    ".cm-searchMatch.cm-searchMatch-selected": {
      backgroundColor: `#6199ff2f`
    },
    ".cm-activeLine": {
      backgroundColor: `#6699ff0b`
    },
    ".cm-selectionMatch": {
      backgroundColor: `#aafe661a`
    },
    "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": {
      backgroundColor: `#bad0f847`
    },
    ".cm-gutters": {
      backgroundColor: cl,
      color: tl,
      border: `none`
    },
    ".cm-activeLineGutter": {
      backgroundColor: sl
    },
    ".cm-foldPlaceholder": {
      backgroundColor: `transparent`,
      border: `none`,
      color: `#ddd`
    },
    ".cm-tooltip": {
      border: `none`,
      backgroundColor: ll
    },
    ".cm-tooltip .cm-tooltip-arrow:before": {
      borderTopColor: `transparent`,
      borderBottomColor: `transparent`
    },
    ".cm-tooltip .cm-tooltip-arrow:after": {
      borderTopColor: ll,
      borderBottomColor: ll
    },
    ".cm-tooltip-autocomplete": {
      "& > ul > li[aria-selected]": {
        backgroundColor: sl,
        color: el
      }
    }
  }, {
    dark: !0
  }),
  pl = He.define([{
    tag: d.keyword,
    color: al
  }, {
    tag: [d.name, d.deleted, d.character, d.propertyName, d.macroName],
    color: Zc
  }, {
    tag: [d.function(d.variableName), d.labelName],
    color: nl
  }, {
    tag: [d.color, d.constant(d.name), d.standard(d.name)],
    color: il
  }, {
    tag: [d.definition(d.name), d.separator],
    color: el
  }, {
    tag: [d.typeName, d.className, d.number, d.changed, d.annotation, d.modifier, d.self, d.namespace],
    color: Xc
  }, {
    tag: [d.operator, d.operatorKeyword, d.url, d.escape, d.regexp, d.link, d.special(d.string)],
    color: Qc
  }, {
    tag: [d.meta, d.comment],
    color: tl
  }, {
    tag: d.strong,
    fontWeight: `bold`
  }, {
    tag: d.emphasis,
    fontStyle: `italic`
  }, {
    tag: d.strikethrough,
    textDecoration: `line-through`
  }, {
    tag: d.link,
    color: tl,
    textDecoration: `underline`
  }, {
    tag: d.heading,
    fontWeight: `bold`,
    color: Zc
  }, {
    tag: [d.atom, d.bool, d.special(d.variableName)],
    color: il
  }, {
    tag: [d.processingInstruction, d.string, d.inserted],
    color: rl
  }, {
    tag: d.invalid,
    color: $c
  }]),
  ml = [fl, oe(pl)],
  hl = g.theme({
    "&": {
      backgroundColor: `#fff`
    }
  }, {
    dark: !1
  }),
  gl = function (e) {
    e === void 0 && (e = {});
    var t = e,
      n = t.indentWithTab,
      r = n === void 0 || n,
      i = t.editable,
      a = i === void 0 || i,
      o = t.readOnly,
      s = o !== void 0 && o,
      c = t.theme,
      l = c === void 0 ? `light` : c,
      u = t.placeholder,
      d = u === void 0 ? `` : u,
      f = t.basicSetup,
      p = f === void 0 || f,
      m = [];
    switch (r && m.unshift(ue.of([ps])), p && (typeof p == `boolean` ? m.unshift(Yc()) : m.unshift(Yc(p))), d && m.unshift(Te(d)), l) {
      case `light`:
        m.push(hl);
        break;
      case `dark`:
        m.push(ml);
        break;
      case `none`:
        break;
      default:
        m.push(l);
    }
    return a === !1 && m.push(g.editable.of(!1)), s && m.push(O.readOnly.of(!0)), [...m];
  },
  _l = e => ({
    line: e.state.doc.lineAt(e.state.selection.main.from),
    lineCount: e.state.doc.lines,
    lineBreak: e.state.lineBreak,
    length: e.state.doc.length,
    readOnly: e.state.readOnly,
    tabSize: e.state.tabSize,
    selection: e.state.selection,
    selectionAsSingle: e.state.selection.asSingle().main,
    ranges: e.state.selection.ranges,
    selectionCode: e.state.sliceDoc(e.state.selection.main.from, e.state.selection.main.to),
    selections: e.state.selection.ranges.map(t => e.state.sliceDoc(t.from, t.to)),
    selectedText: e.state.selection.ranges.some(e => !e.empty)
  }),
  vl = class {
    constructor(e, t) {
      this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = t, this.timeoutMS = t, this.callbacks.push(e);
    }
    tick() {
      if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
        this.isTimeExhausted = !0;
        var e = this.callbacks.slice();
        this.callbacks.length = 0, e.forEach(e => {
          try {
            e();
          } catch (e) {
            console.error(`TimeoutLatch callback error:`, e);
          }
        });
      }
    }
    cancel() {
      this.isCancelled = !0, this.callbacks.length = 0;
    }
    reset() {
      this.timeLeftMS = this.timeoutMS, this.isCancelled = !1, this.isTimeExhausted = !1;
    }
    get isDone() {
      return this.isCancelled || this.isTimeExhausted;
    }
  },
  yl = class {
    constructor() {
      this.interval = null, this.latches = new Set();
    }
    add(e) {
      this.latches.add(e), this.start();
    }
    remove(e) {
      this.latches.delete(e), this.latches.size === 0 && this.stop();
    }
    start() {
      this.interval === null && (this.interval = setInterval(() => {
        this.latches.forEach(e => {
          e.tick(), e.isDone && this.remove(e);
        });
      }, 1));
    }
    stop() {
      this.interval !== null && (clearInterval(this.interval), this.interval = null);
    }
  },
  bl = null,
  xl = () => typeof window > `u` ? new yl() : (bl ||= new yl(), bl),
  Sl = g.theme({
    "& .cm-scroller": {
      height: `100% !important`
    }
  }),
  Cl = null,
  wl = null;
function Tl(e, t, n, r, i, a) {
  if (!e && !t && !n && !r && !i && !a) return null;
  var o = JSON.stringify({
    height: e,
    minHeight: t,
    maxHeight: n,
    width: r,
    minWidth: i,
    maxWidth: a
  });
  return o === Cl ? wl : (Cl = o, wl = g.theme({
    "&": {
      height: e,
      minHeight: t,
      maxHeight: n,
      width: r,
      minWidth: i,
      maxWidth: a
    }
  }), wl);
}
var El = Ve.define(),
  Dl = 200,
  Ol = [];
function kl(e) {
  var t = e.value,
    n = e.selection,
    r = e.onChange,
    i = e.onStatistics,
    a = e.onCreateEditor,
    o = e.onUpdate,
    s = e.extensions,
    c = s === void 0 ? Ol : s,
    l = e.autoFocus,
    u = e.theme,
    d = u === void 0 ? `light` : u,
    f = e.height,
    p = f === void 0 ? null : f,
    m = e.minHeight,
    ee = m === void 0 ? null : m,
    h = e.maxHeight,
    te = h === void 0 ? null : h,
    _ = e.width,
    ne = _ === void 0 ? null : _,
    re = e.minWidth,
    v = re === void 0 ? null : re,
    ie = e.maxWidth,
    ae = ie === void 0 ? null : ie,
    oe = e.placeholder,
    se = oe === void 0 ? `` : oe,
    ce = e.editable,
    y = ce === void 0 || ce,
    b = e.readOnly,
    x = b !== void 0 && b,
    S = e.indentWithTab,
    le = S === void 0 || S,
    ue = e.basicSetup,
    C = ue === void 0 || ue,
    de = e.root,
    w = e.initialState,
    fe = (0, H.useState)(),
    pe = fe[0],
    me = fe[1],
    he = (0, H.useState)(),
    T = he[0],
    ge = he[1],
    _e = (0, H.useState)(),
    ve = _e[0],
    ye = _e[1],
    E = (0, H.useState)(() => ({
      current: null
    }))[0],
    D = (0, H.useState)(() => ({
      current: null
    }))[0],
    be = Tl(p, ee, te, ne, v, ae),
    xe = g.updateListener.of(e => {
      e.docChanged && typeof r == `function` && !e.transactions.some(e => e.annotation(El)) && (E.current ? E.current.reset() : (E.current = new vl(() => {
        if (D.current) {
          var e = D.current;
          D.current = null, e();
        }
        E.current = null;
      }, Dl), xl().add(E.current)), r(e.state.doc.toString(), e)), i && i(_l(e));
    }),
    Se = gl({
      theme: d,
      editable: y,
      readOnly: x,
      placeholder: se,
      indentWithTab: le,
      basicSetup: C
    }),
    Ce = [xe, ...(be ? [be] : []), Sl, ...Se];
  return o && typeof o == `function` && Ce.push(g.updateListener.of(o)), Ce = Ce.concat(c), (0, H.useLayoutEffect)(() => {
    if (pe && !ve) {
      var e = {
          doc: t,
          selection: n,
          extensions: Ce
        },
        r = w ? O.fromJSON(w.json, e, w.fields) : O.create(e);
      if (ye(r), !T) {
        var i = new g({
          state: r,
          parent: pe,
          root: de
        });
        ge(i), a && a(i, r);
      }
    }
    return () => {
      T && (ye(void 0), ge(void 0));
    };
  }, [pe, ve]), (0, H.useEffect)(() => {
    e.container && me(e.container);
  }, [e.container]), (0, H.useEffect)(() => () => {
    T && (T.destroy(), ge(void 0)), E.current &&= (E.current.cancel(), null);
  }, [T]), (0, H.useEffect)(() => {
    l && T && T.focus();
  }, [l, T]), (0, H.useEffect)(() => {
    T && T.dispatch({
      effects: k.reconfigure.of(Ce)
    });
  }, [d, c, p, ee, te, ne, v, ae, se, y, x, le, C, r, o]), (0, H.useEffect)(() => {
    if (t !== void 0) {
      var e = T ? T.state.doc.toString() : ``;
      if (T && t !== e) {
        var n = E.current && !E.current.isDone,
          r = () => {
            T && t !== T.state.doc.toString() && T.dispatch({
              changes: {
                from: 0,
                to: T.state.doc.toString().length,
                insert: t || ``
              },
              annotations: [El.of(!0)]
            });
          };
        n ? D.current = r : r();
      }
    }
  }, [t, T]), {
    state: ve,
    setState: ye,
    view: T,
    setView: ge,
    container: pe,
    setContainer: me
  };
}
var Al = e(n()),
  jl = [`className`, `value`, `selection`, `extensions`, `onChange`, `onStatistics`, `onCreateEditor`, `onUpdate`, `autoFocus`, `theme`, `height`, `minHeight`, `maxHeight`, `width`, `minWidth`, `maxWidth`, `basicSetup`, `placeholder`, `indentWithTab`, `editable`, `readOnly`, `root`, `initialState`],
  Ml = (0, H.forwardRef)((e, t) => {
    var n = e.className,
      r = e.value,
      i = r === void 0 ? `` : r,
      a = e.selection,
      o = e.extensions,
      s = o === void 0 ? [] : o,
      c = e.onChange,
      l = e.onStatistics,
      u = e.onCreateEditor,
      d = e.onUpdate,
      f = e.autoFocus,
      p = e.theme,
      m = p === void 0 ? `light` : p,
      ee = e.height,
      h = e.minHeight,
      g = e.maxHeight,
      te = e.width,
      _ = e.minWidth,
      ne = e.maxWidth,
      re = e.basicSetup,
      v = e.placeholder,
      ie = e.indentWithTab,
      ae = e.editable,
      oe = e.readOnly,
      se = e.root,
      ce = e.initialState,
      y = Ji(e, jl),
      b = (0, H.useRef)(null),
      x = kl({
        root: se,
        value: i,
        autoFocus: f,
        theme: m,
        height: ee,
        minHeight: h,
        maxHeight: g,
        width: te,
        minWidth: _,
        maxWidth: ne,
        basicSetup: re,
        placeholder: v,
        indentWithTab: ie,
        editable: ae,
        readOnly: oe,
        selection: a,
        onChange: c,
        onStatistics: l,
        onCreateEditor: u,
        onUpdate: d,
        extensions: s,
        initialState: ce
      }),
      S = x.state,
      le = x.view,
      ue = x.container,
      C = x.setContainer;
    (0, H.useImperativeHandle)(t, () => ({
      editor: b.current,
      state: S,
      view: le
    }), [b, ue, S, le]);
    var de = (0, H.useCallback)(e => {
      b.current = e, C(e);
    }, [C]);
    if (typeof i != `string`) throw Error(`value must be typeof string but got ` + typeof i);
    var w = typeof m == `string` ? `cm-theme-` + m : `cm-theme`;
    return (0, Al.jsx)(`div`, qi({
      ref: de,
      className: `` + w + (n ? ` ` + n : ``)
    }, y));
  });
Ml.displayName = `CodeMirror`;
var Nl = {
    tsx: Ye({
      typescript: !0,
      jsx: !0
    }),
    css: we(),
    md: Vi()
  },
  Pl = `color-mix(in oklab, var(--shell-fg) 4%, transparent)`,
  Fl = `var(--font-code)`,
  Il = He.define([{
    tag: [d.comment, d.lineComment, d.blockComment],
    color: `var(--shell-fg-faint)`
  }, {
    tag: [d.keyword, d.modifier, d.controlKeyword, d.operatorKeyword, d.self],
    color: `var(--info)`
  }, {
    tag: [d.string, d.special(d.string), d.regexp],
    color: `var(--success)`
  }, {
    tag: [d.number, d.bool, d.null, d.escape],
    color: `var(--warning)`
  }, {
    tag: [d.typeName, d.className, d.namespace],
    color: `var(--info)`
  }, {
    tag: [d.function(d.variableName), d.propertyName],
    color: `var(--shell-fg)`
  }, {
    tag: [d.operator, d.punctuation, d.separator],
    color: `var(--shell-fg-faint)`
  }, {
    tag: d.heading,
    color: `var(--shell-fg)`,
    fontWeight: `600`
  }, {
    tag: [d.processingInstruction, d.list, d.quote],
    color: `var(--info)`
  }, {
    tag: d.emphasis,
    fontStyle: `italic`
  }, {
    tag: d.strong,
    color: `var(--shell-fg)`,
    fontWeight: `600`
  }, {
    tag: [d.link, d.url],
    color: `var(--info)`,
    textDecoration: `underline`
  }, {
    tag: d.monospace,
    color: `var(--success)`
  }]),
  Ll = g.theme({
    "&": {
      backgroundColor: `transparent`,
      color: `var(--shell-fg-muted)`
    },
    "&.cm-focused": {
      outline: `none`
    },
    ".cm-scroller": {
      fontFamily: Fl,
      fontSize: `13px`,
      lineHeight: `1.5rem`
    },
    ".cm-content": {
      padding: `12px 0 16px`,
      caretColor: `var(--shell-fg)`
    },
    ".cm-line": {
      padding: `0 16px 0 6px`
    },
    ".cm-cursor, .cm-dropCursor": {
      borderLeftColor: `var(--shell-fg)`
    },
    "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
      backgroundColor: `var(--selection-background)`
    },
    ".cm-gutters": {
      backgroundColor: `transparent`,
      border: `none`,
      color: `var(--shell-fg-faint)`
    },
    ".cm-lineNumbers .cm-gutterElement": {
      padding: `0 6px 0 16px`,
      minWidth: `0`
    },
    ".cm-activeLine": {
      backgroundColor: Pl
    },
    ".cm-activeLineGutter": {
      backgroundColor: Pl,
      color: `var(--shell-fg)`
    }
  });
function Rl({
  file: e,
  value: t,
  onChange: n,
  label: r
}) {
  return (0, Al.jsx)(Ml, {
    value: t,
    onChange: n,
    extensions: [Nl[e], oe(Il), g.contentAttributes.of({
      "aria-label": r
    })],
    theme: Ll,
    indentWithTab: !0,
    basicSetup: {
      foldGutter: !1,
      autocompletion: !1,
      highlightSelectionMatches: !1,
      bracketMatching: !1,
      searchKeymap: !1
    },
    className: `min-h-0 flex-1 overflow-hidden [&_.cm-editor]:h-full`
  });
}
export { Rl as default };

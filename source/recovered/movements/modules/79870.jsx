// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module10242 from "./10242.js";
import * as _module26997 from "./26997.js";
import * as _module79995 from "./79995.js";
import * as _module41791 from "./41791.js";
var t = _module10242;
var r = _module26997,
  i = _module79995,
  o = _module41791;
const _export_adaptiveOrigin = {
  name: "adaptiveOrigin",
  async fn(e) {
    let {
        x: n,
        y: l,
        rects: {
          floating: s
        },
        elements: {
          floating: u
        },
        platform: a,
        strategy: c,
        placement: f
      } = e,
      d = (0, i.ownerWindow)(u),
      g = d.getComputedStyle(u);
    if ("0s" === g.transitionDuration || "" === g.transitionDuration) return {
      x: n,
      y: l,
      data: o.DEFAULT_SIDES
    };
    let p = await a.getOffsetParent?.(u),
      m = {
        width: 0,
        height: 0
      };
    if ("fixed" === c && d?.visualViewport) m = {
      width: d.visualViewport.width,
      height: d.visualViewport.height
    };else if (p === d) {
      let e = (0, r.ownerDocument)(u);
      m = {
        width: e.documentElement.clientWidth,
        height: e.documentElement.clientHeight
      };
    } else (await a.isElement?.(p)) && (m = await a.getDimensions(p));
    let h = (0, t.getSide)(f),
      v = n,
      y = l;
    return "left" === h && (v = m.width - (n + s.width)), "top" === h && (y = m.height - (l + s.height)), {
      x: v,
      y,
      data: {
        sideX: "left" === h ? "right" : o.DEFAULT_SIDES.sideX,
        sideY: "top" === h ? "bottom" : o.DEFAULT_SIDES.sideY
      }
    };
  }
};
export { _export_adaptiveOrigin as adaptiveOrigin };

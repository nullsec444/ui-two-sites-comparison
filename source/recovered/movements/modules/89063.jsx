// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
let t = {
    r: 1,
    g: 1,
    b: 1,
    a: 1
  },
  a = {
    r: 0,
    g: 0,
    b: 0,
    a: .06
  };
function e(s) {
  return {
    type: "DROP_SHADOW",
    color: {
      r: 0,
      g: 0,
      b: 0,
      a: s.a
    },
    offset: {
      x: s.x,
      y: s.y
    },
    radius: s.blur,
    visible: !0,
    blendMode: "NORMAL",
    spread: 0,
    showShadowBehindNode: !1
  };
}
async function i({
  layers: n,
  ring: l,
  hairline: c
}) {
  let {
      encodeFigmaData: h,
      composeClipboardHtml: r
    } = await s.A(29371),
    m = n.map(e);
  l && m.push({
    type: "DROP_SHADOW",
    color: a,
    offset: {
      x: 0,
      y: 0
    },
    radius: 0,
    visible: !0,
    blendMode: "NORMAL",
    spread: c ? .5 : 1,
    showShadowBehindNode: !1
  });
  let o = Math.floor(1e9 * Math.random()),
    {
      base64: u
    } = h({
      type: "NODE_CHANGES",
      sessionID: 0,
      ackID: 0,
      pasteID: o,
      pasteOffset: {
        x: 0,
        y: 0
      },
      pasteFileKey: "umbra",
      pasteIsPartiallyOutsideEnclosingFrame: !1,
      pastePageId: {
        sessionID: 0,
        localID: 1
      },
      isCut: !1,
      nodeChanges: [{
        guid: {
          sessionID: 0,
          localID: 0
        },
        type: "DOCUMENT",
        name: "Document",
        visible: !0,
        phase: "CREATED"
      }, {
        guid: {
          sessionID: 0,
          localID: 1
        },
        type: "CANVAS",
        name: "Page 1",
        visible: !0,
        phase: "CREATED",
        parentIndex: {
          guid: {
            sessionID: 0,
            localID: 0
          },
          position: "!"
        },
        backgroundColor: {
          r: .984,
          g: .984,
          b: .984,
          a: 1
        }
      }, {
        guid: {
          sessionID: 1,
          localID: 2
        },
        type: "ROUNDED_RECTANGLE",
        name: "Shadow",
        visible: !0,
        phase: "CREATED",
        opacity: 1,
        parentIndex: {
          guid: {
            sessionID: 0,
            localID: 1
          },
          position: "!"
        },
        size: {
          x: 120,
          y: 120
        },
        transform: {
          m00: 1,
          m01: 0,
          m02: 0,
          m10: 0,
          m11: 1,
          m12: 0
        },
        fillPaints: [{
          type: "SOLID",
          color: t,
          opacity: 1,
          visible: !0,
          blendMode: "NORMAL"
        }],
        cornerRadius: 16,
        effects: m
      }]
    });
  return r(u, {
    dataType: "scene",
    fileKey: "umbra",
    pasteID: o
  });
}
async function n({
  parent: a,
  gap: e,
  child: i
}) {
  let {
      encodeFigmaData: l,
      composeClipboardHtml: c
    } = await s.A(29371),
    h = Math.max(0, 200 - 2 * e),
    r = Math.floor(1e9 * Math.random()),
    {
      base64: m
    } = l({
      type: "NODE_CHANGES",
      sessionID: 0,
      ackID: 0,
      pasteID: r,
      pasteOffset: {
        x: 0,
        y: 0
      },
      pasteFileKey: "umbra",
      pasteIsPartiallyOutsideEnclosingFrame: !1,
      pastePageId: {
        sessionID: 0,
        localID: 1
      },
      isCut: !1,
      nodeChanges: [{
        guid: {
          sessionID: 0,
          localID: 0
        },
        type: "DOCUMENT",
        name: "Document",
        visible: !0,
        phase: "CREATED"
      }, {
        guid: {
          sessionID: 0,
          localID: 1
        },
        type: "CANVAS",
        name: "Page 1",
        visible: !0,
        phase: "CREATED",
        parentIndex: {
          guid: {
            sessionID: 0,
            localID: 0
          },
          position: "!"
        },
        backgroundColor: {
          r: .984,
          g: .984,
          b: .984,
          a: 1
        }
      }, {
        guid: {
          sessionID: 1,
          localID: 2
        },
        type: "FRAME",
        name: "Radius",
        visible: !0,
        phase: "CREATED",
        opacity: 1,
        parentIndex: {
          guid: {
            sessionID: 0,
            localID: 1
          },
          position: "!"
        },
        size: {
          x: 200,
          y: 200
        },
        transform: {
          m00: 1,
          m01: 0,
          m02: 0,
          m10: 0,
          m11: 1,
          m12: 0
        },
        fillPaints: [{
          type: "SOLID",
          color: {
            r: .925,
            g: .925,
            b: .933,
            a: 1
          },
          opacity: 1,
          visible: !0,
          blendMode: "NORMAL"
        }],
        cornerRadius: a
      }, {
        guid: {
          sessionID: 1,
          localID: 3
        },
        type: "ROUNDED_RECTANGLE",
        name: "Inner",
        visible: !0,
        phase: "CREATED",
        opacity: 1,
        parentIndex: {
          guid: {
            sessionID: 1,
            localID: 2
          },
          position: "!"
        },
        size: {
          x: h,
          y: h
        },
        transform: {
          m00: 1,
          m01: 0,
          m02: e,
          m10: 0,
          m11: 1,
          m12: e
        },
        fillPaints: [{
          type: "SOLID",
          color: t,
          opacity: 1,
          visible: !0,
          blendMode: "NORMAL"
        }],
        cornerRadius: i
      }]
    });
  return c(m, {
    dataType: "scene",
    fileKey: "umbra",
    pasteID: r
  });
}
async function l(s, t = "movements.dev") {
  let a = new Blob([s], {
    type: "text/html"
  });
  await navigator.clipboard.write([new ClipboardItem({
    "text/html": a,
    "text/plain": new Blob([t], {
      type: "text/plain"
    })
  })]);
}
const _export_buildFigmaClipboardHtml = i;
const _export_buildRadiusFigmaClipboardHtml = n;
const _export_copyFigmaClipboardHtml = l;
export { _export_buildFigmaClipboardHtml as buildFigmaClipboardHtml, _export_buildRadiusFigmaClipboardHtml as buildRadiusFigmaClipboardHtml, _export_copyFigmaClipboardHtml as copyFigmaClipboardHtml };

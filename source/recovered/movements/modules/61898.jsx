// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module31908 from "./jsx-runtime-31908.js";
import * as _module35999 from "./35999.js";
import * as _module35353 from "./35353.js";
import * as _module45032 from "./45032.js";
let n, i, a, s, l, d;
var h, f;
let g = "diffs-container";
let m = "header-prefix",
  b = "header-filename-suffix",
  y = "header-metadata",
  v = "header-custom",
  w = {
    dark: "pierre-dark",
    light: "pierre-light"
  },
  k = "--diffs-scrollbar-gutter-measured",
  S = {
    hunkLineCount: 50,
    lineHeight: 20,
    diffHeaderHeight: 44,
    spacing: 8
  };
let C = {
    startingLine: 0,
    totalLines: 1 / 0,
    bufferBefore: 0,
    bufferAfter: 0
  },
  x = {
    startingLine: 0,
    totalLines: 0,
    bufferBefore: 0,
    bufferAfter: 0
  };
function A(e) {
  return `annotation-${"side" in e ? `${e.side}-` : ""}${e.lineNumber}`;
}
let E = {
  position: "absolute",
  top: 0,
  bottom: 0,
  textAlign: "center",
  whiteSpace: "normal",
  touchAction: "none"
};
function L() {
  return null;
}
var _ = _module31908;
function T(e, t, n) {
  if (e === t || null == e || null == t) return e === t;
  let r = new Set(n),
    i = Object.keys(e),
    a = new Set(Object.keys(t));
  for (let n of i) if (a.delete(n), !r.has(n) && (!(n in t) || e[n] !== t[n])) return !1;
  for (let e of Array.from(a)) if (!r.has(e)) return !1;
  return !0;
}
function R(e, t) {
  return null == e || null == t || "string" == typeof e || "string" == typeof t ? e === t : e.dark === t.dark && e.light === t.light;
}
function M(e, t) {
  let n = e?.theme ?? w,
    r = t?.theme ?? w,
    i = N(e),
    a = N(t);
  return R(n, r) && T(e, t, ["theme", "parseDiffOptions"]) && T(i, a);
}
function N(e) {
  if (null != e && "parseDiffOptions" in e) return e.parseDiffOptions;
}
function P(e) {
  if ("u" > typeof HTMLStyleElement && e instanceof HTMLStyleElement) return !0;
  let t = e.tagName ?? e.nodeName;
  return "string" == typeof t && "style" === t.toLowerCase();
}
function I(e, t) {
  return e?.cacheKey === t?.cacheKey && e?.contents === t?.contents && e?.name === t?.name && e?.lang === t?.lang;
}
let O = new Set(),
  D = null;
function $(e) {
  O.add(e), D ??= requestAnimationFrame(U);
}
function B(e) {
  O.delete(e) && 0 === O.size && null != D && (cancelAnimationFrame(D), D = null);
}
function U(e) {
  let t = new Set(O);
  for (let n of (O.clear(), t)) try {
    n(e);
  } catch (e) {
    console.error(e);
  }
  D = O.size > 0 ? requestAnimationFrame(U) : null;
}
function z(e, t) {
  return e?.start === t?.start && e?.end === t?.end && e?.side === t?.side && e?.endSide === t?.endSide;
}
function H(e) {
  return {
    type: "text",
    value: e
  };
}
function F({
  tagName: e,
  children: t = [],
  properties: n = {}
}) {
  return {
    type: "element",
    tagName: e,
    properties: n,
    children: t
  };
}
function j({
  name: e,
  width: t = 16,
  height: n = 16,
  properties: r
}) {
  return F({
    tagName: "svg",
    properties: {
      width: t,
      height: n,
      viewBox: "0 0 16 16",
      ...r
    },
    children: [F({
      tagName: "use",
      properties: {
        href: `#${e.replace(/^#/, "")}`
      }
    })]
  });
}
function G(e) {
  return F({
    tagName: "div",
    properties: {
      "data-gutter": ""
    },
    children: e
  });
}
function W(e, t, n) {
  return F({
    tagName: "div",
    properties: {
      "data-gutter-buffer": t,
      "data-buffer-size": n,
      "data-line-type": "annotation" === t ? void 0 : e,
      style: "annotation" === t ? `grid-row: span ${n};` : `grid-row: span ${n};min-height:calc(${n} * 1lh);`
    }
  });
}
function V(e) {
  for (let t of e) if (t instanceof HTMLElement && (t.hasAttribute("data-utility-button") || t.hasAttribute("data-gutter-utility-slot") || "gutter-utility-slot" === t.getAttribute("slot") || "gutter-utility-slot" === t.getAttribute("name"))) return !0;
  return !1;
}
let q = ["area", "base", "basefont", "bgsound", "br", "col", "command", "embed", "frame", "hr", "image", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"];
class X {
  constructor(e, t, n) {
    this.normal = t, this.property = e, n && (this.space = n);
  }
}
function K(e, t) {
  let n = {},
    r = {};
  for (let t of e) Object.assign(n, t.property), Object.assign(r, t.normal);
  return new X(n, r, t);
}
function Q(e) {
  return e.toLowerCase();
}
class Y {
  constructor(e, t) {
    this.attribute = t, this.property = e;
  }
}
let J = 0,
  Z = eo(),
  ee = eo(),
  et = eo(),
  en = eo(),
  er = eo(),
  ei = eo(),
  ea = eo();
function eo() {
  return 2 ** ++J;
}
var es = _module35999;
let el = Object.keys(es);
class ed extends Y {
  constructor(e, t, n, r) {
    let i = -1;
    if (super(e, t), function (e, t, n) {
      n && (e[t] = n);
    }(this, "space", r), "number" == typeof n) for (; ++i < el.length;) {
      const e = el[i];
      !function (e, t, n) {
        n && (e[t] = n);
      }(this, el[i], (n & es[e]) === es[e]);
    }
  }
}
function eu(e) {
  let t = {},
    n = {};
  for (let [r, i] of Object.entries(e.properties)) {
    let a = new ed(r, e.transform(e.attributes || {}, r), i, e.space);
    e.mustUseProperty && e.mustUseProperty.includes(r) && (a.mustUseProperty = !0), t[r] = a, n[Q(r)] = r, n[Q(a.attribute)] = r;
  }
  return new X(t, n, e.space);
}
let eh = eu({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: ee,
    ariaAutoComplete: null,
    ariaBusy: ee,
    ariaChecked: ee,
    ariaColCount: en,
    ariaColIndex: en,
    ariaColSpan: en,
    ariaControls: er,
    ariaCurrent: null,
    ariaDescribedBy: er,
    ariaDetails: null,
    ariaDisabled: ee,
    ariaDropEffect: er,
    ariaErrorMessage: null,
    ariaExpanded: ee,
    ariaFlowTo: er,
    ariaGrabbed: ee,
    ariaHasPopup: null,
    ariaHidden: ee,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: er,
    ariaLevel: en,
    ariaLive: null,
    ariaModal: ee,
    ariaMultiLine: ee,
    ariaMultiSelectable: ee,
    ariaOrientation: null,
    ariaOwns: er,
    ariaPlaceholder: null,
    ariaPosInSet: en,
    ariaPressed: ee,
    ariaReadOnly: ee,
    ariaRelevant: null,
    ariaRequired: ee,
    ariaRoleDescription: er,
    ariaRowCount: en,
    ariaRowIndex: en,
    ariaRowSpan: en,
    ariaSelected: ee,
    ariaSetSize: en,
    ariaSort: null,
    ariaValueMax: en,
    ariaValueMin: en,
    ariaValueNow: en,
    ariaValueText: null,
    role: null
  },
  transform: (e, t) => "role" === t ? t : "aria-" + t.slice(4).toLowerCase()
});
function ec(e, t) {
  return t in e ? e[t] : t;
}
function ef(e, t) {
  return ec(e, t.toLowerCase());
}
let ep = eu({
    attributes: {
      acceptcharset: "accept-charset",
      classname: "class",
      htmlfor: "for",
      httpequiv: "http-equiv"
    },
    mustUseProperty: ["checked", "multiple", "muted", "selected"],
    properties: {
      abbr: null,
      accept: ei,
      acceptCharset: er,
      accessKey: er,
      action: null,
      allow: null,
      allowFullScreen: Z,
      allowPaymentRequest: Z,
      allowUserMedia: Z,
      alpha: Z,
      alt: null,
      as: null,
      async: Z,
      autoCapitalize: null,
      autoComplete: er,
      autoFocus: Z,
      autoPlay: Z,
      blocking: er,
      capture: null,
      charSet: null,
      checked: Z,
      cite: null,
      className: er,
      closedBy: null,
      colorSpace: null,
      cols: en,
      colSpan: en,
      command: null,
      commandFor: null,
      content: null,
      contentEditable: ee,
      controls: Z,
      controlsList: er,
      coords: en | ei,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: Z,
      defer: Z,
      dir: null,
      dirName: null,
      disabled: Z,
      download: et,
      draggable: ee,
      encType: null,
      enterKeyHint: null,
      fetchPriority: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: Z,
      formTarget: null,
      headers: er,
      height: en,
      hidden: et,
      high: en,
      href: null,
      hrefLang: null,
      htmlFor: er,
      httpEquiv: er,
      id: null,
      imageSizes: null,
      imageSrcSet: null,
      inert: Z,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: Z,
      itemId: null,
      itemProp: er,
      itemRef: er,
      itemScope: Z,
      itemType: er,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: Z,
      low: en,
      manifest: null,
      max: null,
      maxLength: en,
      media: null,
      method: null,
      min: null,
      minLength: en,
      multiple: Z,
      muted: Z,
      name: null,
      nonce: null,
      noModule: Z,
      noValidate: Z,
      onAbort: null,
      onAfterPrint: null,
      onAuxClick: null,
      onBeforeMatch: null,
      onBeforePrint: null,
      onBeforeToggle: null,
      onBeforeUnload: null,
      onBlur: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onContextLost: null,
      onContextMenu: null,
      onContextRestored: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFormData: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLanguageChange: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadEnd: null,
      onLoadStart: null,
      onMessage: null,
      onMessageError: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRejectionHandled: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onScrollEnd: null,
      onSecurityPolicyViolation: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onSlotChange: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnhandledRejection: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onWheel: null,
      open: Z,
      optimum: en,
      pattern: null,
      ping: er,
      placeholder: null,
      playsInline: Z,
      popover: null,
      popoverTarget: null,
      popoverTargetAction: null,
      poster: null,
      preload: null,
      readOnly: Z,
      referrerPolicy: null,
      rel: er,
      required: Z,
      reversed: Z,
      rows: en,
      rowSpan: en,
      sandbox: er,
      scope: null,
      scoped: Z,
      seamless: Z,
      selected: Z,
      shadowRootClonable: Z,
      shadowRootCustomElementRegistry: Z,
      shadowRootDelegatesFocus: Z,
      shadowRootMode: null,
      shadowRootSerializable: Z,
      shape: null,
      size: en,
      sizes: null,
      slot: null,
      span: en,
      spellCheck: ee,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: null,
      start: en,
      step: null,
      style: null,
      tabIndex: en,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: Z,
      useMap: null,
      value: ee,
      width: en,
      wrap: null,
      writingSuggestions: null,
      align: null,
      aLink: null,
      archive: er,
      axis: null,
      background: null,
      bgColor: null,
      border: en,
      borderColor: null,
      bottomMargin: en,
      cellPadding: null,
      cellSpacing: null,
      char: null,
      charOff: null,
      classId: null,
      clear: null,
      code: null,
      codeBase: null,
      codeType: null,
      color: null,
      compact: Z,
      declare: Z,
      event: null,
      face: null,
      frame: null,
      frameBorder: null,
      hSpace: en,
      leftMargin: en,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: en,
      marginWidth: en,
      noResize: Z,
      noHref: Z,
      noShade: Z,
      noWrap: Z,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: en,
      rules: null,
      scheme: null,
      scrolling: ee,
      standby: null,
      summary: null,
      text: null,
      topMargin: en,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: en,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      credentialless: Z,
      disablePictureInPicture: Z,
      disableRemotePlayback: Z,
      exportParts: ei,
      part: er,
      prefix: null,
      property: null,
      results: en,
      security: null,
      unselectable: null
    },
    space: "html",
    transform: ef
  }),
  eg = eu({
    attributes: {
      accentHeight: "accent-height",
      alignmentBaseline: "alignment-baseline",
      arabicForm: "arabic-form",
      baselineShift: "baseline-shift",
      capHeight: "cap-height",
      className: "class",
      clipPath: "clip-path",
      clipRule: "clip-rule",
      colorInterpolation: "color-interpolation",
      colorInterpolationFilters: "color-interpolation-filters",
      colorProfile: "color-profile",
      colorRendering: "color-rendering",
      crossOrigin: "crossorigin",
      dataType: "datatype",
      dominantBaseline: "dominant-baseline",
      enableBackground: "enable-background",
      fillOpacity: "fill-opacity",
      fillRule: "fill-rule",
      floodColor: "flood-color",
      floodOpacity: "flood-opacity",
      fontFamily: "font-family",
      fontSize: "font-size",
      fontSizeAdjust: "font-size-adjust",
      fontStretch: "font-stretch",
      fontStyle: "font-style",
      fontVariant: "font-variant",
      fontWeight: "font-weight",
      glyphName: "glyph-name",
      glyphOrientationHorizontal: "glyph-orientation-horizontal",
      glyphOrientationVertical: "glyph-orientation-vertical",
      hrefLang: "hreflang",
      horizAdvX: "horiz-adv-x",
      horizOriginX: "horiz-origin-x",
      horizOriginY: "horiz-origin-y",
      imageRendering: "image-rendering",
      letterSpacing: "letter-spacing",
      lightingColor: "lighting-color",
      markerEnd: "marker-end",
      markerMid: "marker-mid",
      markerStart: "marker-start",
      maskType: "mask-type",
      navDown: "nav-down",
      navDownLeft: "nav-down-left",
      navDownRight: "nav-down-right",
      navLeft: "nav-left",
      navNext: "nav-next",
      navPrev: "nav-prev",
      navRight: "nav-right",
      navUp: "nav-up",
      navUpLeft: "nav-up-left",
      navUpRight: "nav-up-right",
      onAbort: "onabort",
      onActivate: "onactivate",
      onAfterPrint: "onafterprint",
      onBeforePrint: "onbeforeprint",
      onBegin: "onbegin",
      onCancel: "oncancel",
      onCanPlay: "oncanplay",
      onCanPlayThrough: "oncanplaythrough",
      onChange: "onchange",
      onClick: "onclick",
      onClose: "onclose",
      onCopy: "oncopy",
      onCueChange: "oncuechange",
      onCut: "oncut",
      onDblClick: "ondblclick",
      onDrag: "ondrag",
      onDragEnd: "ondragend",
      onDragEnter: "ondragenter",
      onDragExit: "ondragexit",
      onDragLeave: "ondragleave",
      onDragOver: "ondragover",
      onDragStart: "ondragstart",
      onDrop: "ondrop",
      onDurationChange: "ondurationchange",
      onEmptied: "onemptied",
      onEnd: "onend",
      onEnded: "onended",
      onError: "onerror",
      onFocus: "onfocus",
      onFocusIn: "onfocusin",
      onFocusOut: "onfocusout",
      onHashChange: "onhashchange",
      onInput: "oninput",
      onInvalid: "oninvalid",
      onKeyDown: "onkeydown",
      onKeyPress: "onkeypress",
      onKeyUp: "onkeyup",
      onLoad: "onload",
      onLoadedData: "onloadeddata",
      onLoadedMetadata: "onloadedmetadata",
      onLoadStart: "onloadstart",
      onMessage: "onmessage",
      onMouseDown: "onmousedown",
      onMouseEnter: "onmouseenter",
      onMouseLeave: "onmouseleave",
      onMouseMove: "onmousemove",
      onMouseOut: "onmouseout",
      onMouseOver: "onmouseover",
      onMouseUp: "onmouseup",
      onMouseWheel: "onmousewheel",
      onOffline: "onoffline",
      onOnline: "ononline",
      onPageHide: "onpagehide",
      onPageShow: "onpageshow",
      onPaste: "onpaste",
      onPause: "onpause",
      onPlay: "onplay",
      onPlaying: "onplaying",
      onPopState: "onpopstate",
      onProgress: "onprogress",
      onRateChange: "onratechange",
      onRepeat: "onrepeat",
      onReset: "onreset",
      onResize: "onresize",
      onScroll: "onscroll",
      onSeeked: "onseeked",
      onSeeking: "onseeking",
      onSelect: "onselect",
      onShow: "onshow",
      onStalled: "onstalled",
      onStorage: "onstorage",
      onSubmit: "onsubmit",
      onSuspend: "onsuspend",
      onTimeUpdate: "ontimeupdate",
      onToggle: "ontoggle",
      onUnload: "onunload",
      onVolumeChange: "onvolumechange",
      onWaiting: "onwaiting",
      onZoom: "onzoom",
      overlinePosition: "overline-position",
      overlineThickness: "overline-thickness",
      paintOrder: "paint-order",
      panose1: "panose-1",
      pointerEvents: "pointer-events",
      referrerPolicy: "referrerpolicy",
      renderingIntent: "rendering-intent",
      shapeRendering: "shape-rendering",
      stopColor: "stop-color",
      stopOpacity: "stop-opacity",
      strikethroughPosition: "strikethrough-position",
      strikethroughThickness: "strikethrough-thickness",
      strokeDashArray: "stroke-dasharray",
      strokeDashOffset: "stroke-dashoffset",
      strokeLineCap: "stroke-linecap",
      strokeLineJoin: "stroke-linejoin",
      strokeMiterLimit: "stroke-miterlimit",
      strokeOpacity: "stroke-opacity",
      strokeWidth: "stroke-width",
      tabIndex: "tabindex",
      textAnchor: "text-anchor",
      textDecoration: "text-decoration",
      textRendering: "text-rendering",
      transformOrigin: "transform-origin",
      typeOf: "typeof",
      underlinePosition: "underline-position",
      underlineThickness: "underline-thickness",
      unicodeBidi: "unicode-bidi",
      unicodeRange: "unicode-range",
      unitsPerEm: "units-per-em",
      vAlphabetic: "v-alphabetic",
      vHanging: "v-hanging",
      vIdeographic: "v-ideographic",
      vMathematical: "v-mathematical",
      vectorEffect: "vector-effect",
      vertAdvY: "vert-adv-y",
      vertOriginX: "vert-origin-x",
      vertOriginY: "vert-origin-y",
      wordSpacing: "word-spacing",
      writingMode: "writing-mode",
      xHeight: "x-height",
      playbackOrder: "playbackorder",
      timelineBegin: "timelinebegin"
    },
    properties: {
      about: ea,
      accentHeight: en,
      accumulate: null,
      additive: null,
      alignmentBaseline: null,
      alphabetic: en,
      amplitude: en,
      arabicForm: null,
      ascent: en,
      attributeName: null,
      attributeType: null,
      azimuth: en,
      bandwidth: null,
      baselineShift: null,
      baseFrequency: null,
      baseProfile: null,
      bbox: null,
      begin: null,
      bias: en,
      by: null,
      calcMode: null,
      capHeight: en,
      className: er,
      clip: null,
      clipPath: null,
      clipPathUnits: null,
      clipRule: null,
      color: null,
      colorInterpolation: null,
      colorInterpolationFilters: null,
      colorProfile: null,
      colorRendering: null,
      content: null,
      contentScriptType: null,
      contentStyleType: null,
      crossOrigin: null,
      cursor: null,
      cx: null,
      cy: null,
      d: null,
      dataType: null,
      defaultAction: null,
      descent: en,
      diffuseConstant: en,
      direction: null,
      display: null,
      dur: null,
      divisor: en,
      dominantBaseline: null,
      download: Z,
      dx: null,
      dy: null,
      edgeMode: null,
      editable: null,
      elevation: en,
      enableBackground: null,
      end: null,
      event: null,
      exponent: en,
      externalResourcesRequired: null,
      fill: null,
      fillOpacity: en,
      fillRule: null,
      filter: null,
      filterRes: null,
      filterUnits: null,
      floodColor: null,
      floodOpacity: null,
      focusable: null,
      focusHighlight: null,
      fontFamily: null,
      fontSize: null,
      fontSizeAdjust: null,
      fontStretch: null,
      fontStyle: null,
      fontVariant: null,
      fontWeight: null,
      format: null,
      fr: null,
      from: null,
      fx: null,
      fy: null,
      g1: ei,
      g2: ei,
      glyphName: ei,
      glyphOrientationHorizontal: null,
      glyphOrientationVertical: null,
      glyphRef: null,
      gradientTransform: null,
      gradientUnits: null,
      handler: null,
      hanging: en,
      hatchContentUnits: null,
      hatchUnits: null,
      height: null,
      href: null,
      hrefLang: null,
      horizAdvX: en,
      horizOriginX: en,
      horizOriginY: en,
      id: null,
      ideographic: en,
      imageRendering: null,
      initialVisibility: null,
      in: null,
      in2: null,
      intercept: en,
      k: en,
      k1: en,
      k2: en,
      k3: en,
      k4: en,
      kernelMatrix: ea,
      kernelUnitLength: null,
      keyPoints: null,
      keySplines: null,
      keyTimes: null,
      kerning: null,
      lang: null,
      lengthAdjust: null,
      letterSpacing: null,
      lightingColor: null,
      limitingConeAngle: en,
      local: null,
      markerEnd: null,
      markerMid: null,
      markerStart: null,
      markerHeight: null,
      markerUnits: null,
      markerWidth: null,
      mask: null,
      maskContentUnits: null,
      maskType: null,
      maskUnits: null,
      mathematical: null,
      max: null,
      media: null,
      mediaCharacterEncoding: null,
      mediaContentEncodings: null,
      mediaSize: en,
      mediaTime: null,
      method: null,
      min: null,
      mode: null,
      name: null,
      navDown: null,
      navDownLeft: null,
      navDownRight: null,
      navLeft: null,
      navNext: null,
      navPrev: null,
      navRight: null,
      navUp: null,
      navUpLeft: null,
      navUpRight: null,
      numOctaves: null,
      observer: null,
      offset: null,
      onAbort: null,
      onActivate: null,
      onAfterPrint: null,
      onBeforePrint: null,
      onBegin: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnd: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFocusIn: null,
      onFocusOut: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadStart: null,
      onMessage: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onMouseWheel: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRepeat: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onShow: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onZoom: null,
      opacity: null,
      operator: null,
      order: null,
      orient: null,
      orientation: null,
      origin: null,
      overflow: null,
      overlay: null,
      overlinePosition: en,
      overlineThickness: en,
      paintOrder: null,
      panose1: null,
      path: null,
      pathLength: en,
      patternContentUnits: null,
      patternTransform: null,
      patternUnits: null,
      phase: null,
      ping: er,
      pitch: null,
      playbackOrder: null,
      pointerEvents: null,
      points: null,
      pointsAtX: en,
      pointsAtY: en,
      pointsAtZ: en,
      preserveAlpha: null,
      preserveAspectRatio: null,
      primitiveUnits: null,
      propagate: null,
      property: ea,
      r: null,
      radius: null,
      referrerPolicy: null,
      refX: null,
      refY: null,
      rel: ea,
      rev: ea,
      renderingIntent: null,
      repeatCount: null,
      repeatDur: null,
      requiredExtensions: ea,
      requiredFeatures: ea,
      requiredFonts: ea,
      requiredFormats: ea,
      resource: null,
      restart: null,
      result: null,
      rotate: null,
      rx: null,
      ry: null,
      scale: null,
      seed: null,
      shapeRendering: null,
      side: null,
      slope: null,
      snapshotTime: null,
      specularConstant: en,
      specularExponent: en,
      spreadMethod: null,
      spacing: null,
      startOffset: null,
      stdDeviation: null,
      stemh: null,
      stemv: null,
      stitchTiles: null,
      stopColor: null,
      stopOpacity: null,
      strikethroughPosition: en,
      strikethroughThickness: en,
      string: null,
      stroke: null,
      strokeDashArray: ea,
      strokeDashOffset: null,
      strokeLineCap: null,
      strokeLineJoin: null,
      strokeMiterLimit: en,
      strokeOpacity: en,
      strokeWidth: null,
      style: null,
      surfaceScale: en,
      syncBehavior: null,
      syncBehaviorDefault: null,
      syncMaster: null,
      syncTolerance: null,
      syncToleranceDefault: null,
      systemLanguage: ea,
      tabIndex: en,
      tableValues: null,
      target: null,
      targetX: en,
      targetY: en,
      textAnchor: null,
      textDecoration: null,
      textRendering: null,
      textLength: null,
      timelineBegin: null,
      title: null,
      transformBehavior: null,
      type: null,
      typeOf: ea,
      to: null,
      transform: null,
      transformOrigin: null,
      u1: null,
      u2: null,
      underlinePosition: en,
      underlineThickness: en,
      unicode: null,
      unicodeBidi: null,
      unicodeRange: null,
      unitsPerEm: en,
      values: null,
      vAlphabetic: en,
      vMathematical: en,
      vectorEffect: null,
      vHanging: en,
      vIdeographic: en,
      version: null,
      vertAdvY: en,
      vertOriginX: en,
      vertOriginY: en,
      viewBox: null,
      viewTarget: null,
      visibility: null,
      width: null,
      widths: null,
      wordSpacing: null,
      writingMode: null,
      x: null,
      x1: null,
      x2: null,
      xChannelSelector: null,
      xHeight: en,
      y: null,
      y1: null,
      y2: null,
      yChannelSelector: null,
      z: null,
      zoomAndPan: null
    },
    space: "svg",
    transform: ec
  }),
  em = eu({
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null
    },
    space: "xlink",
    transform: (e, t) => "xlink:" + t.slice(5).toLowerCase()
  }),
  eb = eu({
    attributes: {
      xmlnsxlink: "xmlns:xlink"
    },
    properties: {
      xmlnsXLink: null,
      xmlns: null
    },
    space: "xmlns",
    transform: ef
  }),
  ey = eu({
    properties: {
      xmlBase: null,
      xmlLang: null,
      xmlSpace: null
    },
    space: "xml",
    transform: (e, t) => "xml:" + t.slice(3).toLowerCase()
  }),
  ev = K([eh, ep, em, eb, ey], "html"),
  ew = K([eh, eg, em, eb, ey], "svg"),
  ek = {}.hasOwnProperty,
  eS = /["&'<>`]/g,
  eC = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
  ex = /[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,
  eA = /[|\\{}()[\]^$+*?.]/g,
  eE = new WeakMap(),
  eL = /[\dA-Fa-f]/,
  e_ = /\d/,
  eT = ["AElig", "AMP", "Aacute", "Acirc", "Agrave", "Aring", "Atilde", "Auml", "COPY", "Ccedil", "ETH", "Eacute", "Ecirc", "Egrave", "Euml", "GT", "Iacute", "Icirc", "Igrave", "Iuml", "LT", "Ntilde", "Oacute", "Ocirc", "Ograve", "Oslash", "Otilde", "Ouml", "QUOT", "REG", "THORN", "Uacute", "Ucirc", "Ugrave", "Uuml", "Yacute", "aacute", "acirc", "acute", "aelig", "agrave", "amp", "aring", "atilde", "auml", "brvbar", "ccedil", "cedil", "cent", "copy", "curren", "deg", "divide", "eacute", "ecirc", "egrave", "eth", "euml", "frac12", "frac14", "frac34", "gt", "iacute", "icirc", "iexcl", "igrave", "iquest", "iuml", "laquo", "lt", "macr", "micro", "middot", "nbsp", "not", "ntilde", "oacute", "ocirc", "ograve", "ordf", "ordm", "oslash", "otilde", "ouml", "para", "plusmn", "pound", "quot", "raquo", "reg", "sect", "shy", "sup1", "sup2", "sup3", "szlig", "thorn", "times", "uacute", "ucirc", "ugrave", "uml", "uuml", "yacute", "yen", "yuml"],
  eM = ["cent", "copy", "divide", "gt", "lt", "not", "para", "times"],
  eN = {}.hasOwnProperty,
  eP = {};
let eI = /[^\dA-Za-z]/;
function eO(e, t, n) {
  var r, i;
  let a,
    o,
    s = (r = n.omitOptionalSemicolons, a = "&#x" + e.toString(16).toUpperCase(), r && t && !eL.test(String.fromCharCode(t)) ? a : a + ";");
  if ((n.useNamedReferences || n.useShortestReferences) && (o = function (e, t, n, r) {
    let i = String.fromCharCode(e);
    if (eN.call(eP, i)) {
      let e = eP[i],
        a = "&" + e;
      return n && eT.includes(e) && !eM.includes(e) && (!r || t && 61 !== t && eI.test(String.fromCharCode(t))) ? a : a + ";";
    }
    return "";
  }(e, t, n.omitOptionalSemicolons, n.attribute)), (n.useShortestReferences || !o) && n.useShortestReferences) {
    let r,
      a = (i = n.omitOptionalSemicolons, r = "&#" + String(e), i && t && !e_.test(String.fromCharCode(t)) ? r : r + ";");
    a.length < s.length && (s = a);
  }
  return o && (!n.useShortestReferences || o.length < s.length) ? o : s;
}
function eD(e, t) {
  let n;
  var r,
    i = e,
    a = Object.assign({
      format: eO
    }, t);
  if (i = i.replace(a.subset ? (r = a.subset, (n = eE.get(r)) || (n = function (e) {
    let t = [],
      n = -1;
    for (; ++n < e.length;) t.push(e[n].replace(eA, "\\$&"));
    return RegExp("(?:" + t.join("|") + ")", "g");
  }(r), eE.set(r, n)), n) : eS, o), a.subset || a.escapeOnly) return i;
  return i.replace(eC, function (e, t, n) {
    return a.format((e.charCodeAt(0) - 55296) * 1024 + e.charCodeAt(1) - 56320 + 65536, n.charCodeAt(t + 2), a);
  }).replace(ex, o);
  function o(e, t, n) {
    return a.format(e.charCodeAt(0), n.charCodeAt(t + 1), a);
  }
}
let e$ = /^>|^->|<!--|-->|--!>|<!-$/g,
  eB = [">"],
  eU = ["<", ">"];
function ez(e, t) {
  let n = String(e);
  if ("string" != typeof t) throw TypeError("Expected character");
  let r = 0,
    i = n.indexOf(t);
  for (; -1 !== i;) r++, i = n.indexOf(t, i + t.length);
  return r;
}
let eH = /[A-Z]/g,
  eF = /-[a-z]/g,
  ej = /^data[-\w.:]+$/i;
function eG(e) {
  return "-" + e.toLowerCase();
}
function eW(e) {
  return e.charAt(1).toUpperCase();
}
let eV = /[ \t\n\f\r]/g;
function eq(e) {
  return "object" == typeof e ? "text" === e.type && eX(e.value) : eX(e);
}
function eX(e) {
  return "" === e.replace(eV, "");
}
let eK = eJ(1),
  eQ = eJ(-1),
  eY = [];
function eJ(e) {
  return function (t, n, r) {
    let i = t ? t.children : eY,
      a = (n || 0) + e,
      o = i[a];
    if (!r) for (; o && eq(o);) a += e, o = i[a];
    return o;
  };
}
let eZ = {}.hasOwnProperty;
function e0(e) {
  return function (t, n, r) {
    return eZ.call(e, t.tagName) && e[t.tagName](t, n, r);
  };
}
let e1 = e0({
  body: function (e, t, n) {
    let r = eK(n, t);
    return !r || "comment" !== r.type;
  },
  caption: e2,
  colgroup: e2,
  dd: function (e, t, n) {
    let r = eK(n, t);
    return !r || "element" === r.type && ("dt" === r.tagName || "dd" === r.tagName);
  },
  dt: function (e, t, n) {
    let r = eK(n, t);
    return !!(r && "element" === r.type && ("dt" === r.tagName || "dd" === r.tagName));
  },
  head: e2,
  html: function (e, t, n) {
    let r = eK(n, t);
    return !r || "comment" !== r.type;
  },
  li: function (e, t, n) {
    let r = eK(n, t);
    return !r || "element" === r.type && "li" === r.tagName;
  },
  optgroup: function (e, t, n) {
    let r = eK(n, t);
    return !r || "element" === r.type && "optgroup" === r.tagName;
  },
  option: function (e, t, n) {
    let r = eK(n, t);
    return !r || "element" === r.type && ("option" === r.tagName || "optgroup" === r.tagName);
  },
  p: function (e, t, n) {
    let r = eK(n, t);
    return r ? "element" === r.type && ("address" === r.tagName || "article" === r.tagName || "aside" === r.tagName || "blockquote" === r.tagName || "details" === r.tagName || "div" === r.tagName || "dl" === r.tagName || "fieldset" === r.tagName || "figcaption" === r.tagName || "figure" === r.tagName || "footer" === r.tagName || "form" === r.tagName || "h1" === r.tagName || "h2" === r.tagName || "h3" === r.tagName || "h4" === r.tagName || "h5" === r.tagName || "h6" === r.tagName || "header" === r.tagName || "hgroup" === r.tagName || "hr" === r.tagName || "main" === r.tagName || "menu" === r.tagName || "nav" === r.tagName || "ol" === r.tagName || "p" === r.tagName || "pre" === r.tagName || "section" === r.tagName || "table" === r.tagName || "ul" === r.tagName) : !n || "element" !== n.type || "a" !== n.tagName && "audio" !== n.tagName && "del" !== n.tagName && "ins" !== n.tagName && "map" !== n.tagName && "noscript" !== n.tagName && "video" !== n.tagName;
  },
  rp: e8,
  rt: e8,
  tbody: function (e, t, n) {
    let r = eK(n, t);
    return !r || "element" === r.type && ("tbody" === r.tagName || "tfoot" === r.tagName);
  },
  td: e5,
  tfoot: function (e, t, n) {
    return !eK(n, t);
  },
  th: e5,
  thead: function (e, t, n) {
    let r = eK(n, t);
    return !!(r && "element" === r.type && ("tbody" === r.tagName || "tfoot" === r.tagName));
  },
  tr: function (e, t, n) {
    let r = eK(n, t);
    return !r || "element" === r.type && "tr" === r.tagName;
  }
});
function e2(e, t, n) {
  let r = eK(n, t, !0);
  return !r || "comment" !== r.type && !("text" === r.type && eq(r.value.charAt(0)));
}
function e8(e, t, n) {
  let r = eK(n, t);
  return !r || "element" === r.type && ("rp" === r.tagName || "rt" === r.tagName);
}
function e5(e, t, n) {
  let r = eK(n, t);
  return !r || "element" === r.type && ("td" === r.tagName || "th" === r.tagName);
}
let e6 = e0({
    body: function (e) {
      let t = eK(e, -1, !0);
      return !t || "comment" !== t.type && !("text" === t.type && eq(t.value.charAt(0))) && ("element" !== t.type || "meta" !== t.tagName && "link" !== t.tagName && "script" !== t.tagName && "style" !== t.tagName && "template" !== t.tagName);
    },
    colgroup: function (e, t, n) {
      let r = eQ(n, t),
        i = eK(e, -1, !0);
      return !(n && r && "element" === r.type && "colgroup" === r.tagName && e1(r, n.children.indexOf(r), n)) && !!(i && "element" === i.type && "col" === i.tagName);
    },
    head: function (e) {
      let t = new Set();
      for (let n of e.children) if ("element" === n.type && ("base" === n.tagName || "title" === n.tagName)) {
        if (t.has(n.tagName)) return !1;
        t.add(n.tagName);
      }
      let n = e.children[0];
      return !n || "element" === n.type;
    },
    html: function (e) {
      let t = eK(e, -1);
      return !t || "comment" !== t.type;
    },
    tbody: function (e, t, n) {
      let r = eQ(n, t),
        i = eK(e, -1);
      return !(n && r && "element" === r.type && ("thead" === r.tagName || "tbody" === r.tagName) && e1(r, n.children.indexOf(r), n)) && !!(i && "element" === i.type && "tr" === i.tagName);
    }
  }),
  e7 = {
    name: [["	\n\f\r &/=>".split(""), "	\n\f\r \"&'/=>`".split("")], ["\0	\n\f\r \"&'/<=>".split(""), "\0	\n\f\r \"&'/<=>`".split("")]],
    unquoted: [["	\n\f\r &>".split(""), "\0	\n\f\r \"&'<=>`".split("")], ["\0	\n\f\r \"&'<=>`".split(""), "\0	\n\f\r \"&'<=>`".split("")]],
    single: [["&'".split(""), "\"&'`".split("")], ["\0&'".split(""), "\0\"&'`".split("")]],
    double: [['"&'.split(""), "\"&'`".split("")], ['\0"&'.split(""), "\0\"&'`".split("")]]
  },
  e3 = ["<", "&"];
function e4(e, t, n, r) {
  return n && "element" === n.type && ("script" === n.tagName || "style" === n.tagName) ? e.value : eD(e.value, Object.assign({}, r.settings.characterReferences, {
    subset: e3
  }));
}
let e9 = function (e, t) {
    let n = t || {};
    function r(t, ...n) {
      let i = r.invalid,
        a = r.handlers;
      if (t && ek.call(t, e)) {
        let n = String(t[e]);
        i = ek.call(a, n) ? a[n] : r.unknown;
      }
      if (i) return i.call(this, t, ...n);
    }
    return r.handlers = n.handlers || {}, r.invalid = n.invalid, r.unknown = n.unknown, r;
  }("type", {
    invalid: function (e) {
      throw Error("Expected node, not `" + e + "`");
    },
    unknown: function (e) {
      throw Error("Cannot compile unknown node `" + e.type + "`");
    },
    handlers: {
      comment: function (e, t, n, r) {
        return r.settings.bogusComments ? "<?" + eD(e.value, Object.assign({}, r.settings.characterReferences, {
          subset: eB
        })) + ">" : "<!--" + e.value.replace(e$, function (e) {
          return eD(e, Object.assign({}, r.settings.characterReferences, {
            subset: eU
          }));
        }) + "-->";
      },
      doctype: function (e, t, n, r) {
        return "<!" + (r.settings.upperDoctype ? "DOCTYPE" : "doctype") + (r.settings.tightDoctype ? "" : " ") + "html>";
      },
      element: function (e, t, n, r) {
        let i,
          a = r.schema,
          o = "svg" !== a.space && r.settings.omitOptionalTags,
          s = "svg" === a.space ? r.settings.closeEmptyElements : r.settings.voids.includes(e.tagName.toLowerCase()),
          l = [];
        "html" === a.space && "svg" === e.tagName && (r.schema = ew);
        let d = function (e, t) {
            let n,
              r = [],
              i = -1;
            if (t) {
              for (n in t) if (null !== t[n] && void 0 !== t[n]) {
                let i = function (e, t, n) {
                  let r,
                    i = function (e, t) {
                      let n = Q(t),
                        r = t,
                        i = Y;
                      if (n in e.normal) return e.property[e.normal[n]];
                      if (n.length > 4 && "data" === n.slice(0, 4) && ej.test(t)) {
                        if ("-" === t.charAt(4)) {
                          let e = t.slice(5).replace(eF, eW);
                          r = "data" + e.charAt(0).toUpperCase() + e.slice(1);
                        } else {
                          let e = t.slice(4);
                          if (!eF.test(e)) {
                            let n = e.replace(eH, eG);
                            "-" !== n.charAt(0) && (n = "-" + n), t = "data" + n;
                          }
                        }
                        i = ed;
                      }
                      return new i(r, t);
                    }(e.schema, t),
                    a = e.settings.allowParseErrors && "html" === e.schema.space ? 0 : 1,
                    o = +!e.settings.allowDangerousCharacters,
                    s = e.quote;
                  if (i.overloadedBoolean && (n === i.attribute || "" === n) ? n = !0 : (i.boolean || i.overloadedBoolean) && ("string" != typeof n || n === i.attribute || "" === n) && (n = !!n), null == n || !1 === n || "number" == typeof n && Number.isNaN(n)) return "";
                  let l = eD(i.attribute, Object.assign({}, e.settings.characterReferences, {
                    subset: e7.name[a][o]
                  }));
                  return !0 === n || (n = Array.isArray(n) ? (i.commaSeparated ? function (e, t) {
                    let n = t || {};
                    return ("" === e[e.length - 1] ? [...e, ""] : e).join((n.padRight ? " " : "") + "," + (!1 === n.padLeft ? "" : " ")).trim();
                  } : function (e) {
                    return e.join(" ").trim();
                  })(n, {
                    padLeft: !e.settings.tightCommaSeparatedLists
                  }) : String(n), e.settings.collapseEmptyAttributes && !n) ? l : (e.settings.preferUnquoted && (r = eD(n, Object.assign({}, e.settings.characterReferences, {
                    attribute: !0,
                    subset: e7.unquoted[a][o]
                  }))), r !== n && (e.settings.quoteSmart && ez(n, s) > ez(n, e.alternative) && (s = e.alternative), r = s + eD(n, Object.assign({}, e.settings.characterReferences, {
                    subset: ("'" === s ? e7.single : e7.double)[a][o],
                    attribute: !0
                  })) + s), l + (r ? "=" + r : r));
                }(e, n, t[n]);
                i && r.push(i);
              }
            }
            for (; ++i < r.length;) {
              let t = e.settings.tightAttributes ? r[i].charAt(r[i].length - 1) : void 0;
              i !== r.length - 1 && '"' !== t && "'" !== t && (r[i] += " ");
            }
            return r.join("");
          }(r, e.properties),
          u = r.all("html" === a.space && "template" === e.tagName ? e.content : e);
        return r.schema = a, u && (s = !1), !d && o && e6(e, t, n) || (l.push("<", e.tagName, d ? " " + d : ""), s && ("svg" === a.space || r.settings.closeSelfClosing) && (i = d.charAt(d.length - 1), (!r.settings.tightSelfClosing || "/" === i || i && '"' !== i && "'" !== i) && l.push(" "), l.push("/")), l.push(">")), l.push(u), s || o && e1(e, t, n) || l.push("</" + e.tagName + ">"), l.join("");
      },
      raw: function (e, t, n, r) {
        return r.settings.allowDangerousHtml ? e.value : e4(e, t, n, r);
      },
      root: function (e, t, n, r) {
        return r.all(e);
      },
      text: e4
    }
  }),
  te = {},
  tt = {},
  tn = [];
function tr(e, t) {
  let n = t || te,
    r = n.quote || '"';
  if ('"' !== r && "'" !== r) throw Error("Invalid quote `" + r + "`, expected `'` or `\"`");
  return {
    one: ti,
    all: ta,
    settings: {
      omitOptionalTags: n.omitOptionalTags || !1,
      allowParseErrors: n.allowParseErrors || !1,
      allowDangerousCharacters: n.allowDangerousCharacters || !1,
      quoteSmart: n.quoteSmart || !1,
      preferUnquoted: n.preferUnquoted || !1,
      tightAttributes: n.tightAttributes || !1,
      upperDoctype: n.upperDoctype || !1,
      tightDoctype: n.tightDoctype || !1,
      bogusComments: n.bogusComments || !1,
      tightCommaSeparatedLists: n.tightCommaSeparatedLists || !1,
      tightSelfClosing: n.tightSelfClosing || !1,
      collapseEmptyAttributes: n.collapseEmptyAttributes || !1,
      allowDangerousHtml: n.allowDangerousHtml || !1,
      voids: n.voids || q,
      characterReferences: n.characterReferences || tt,
      closeSelfClosing: n.closeSelfClosing || !1,
      closeEmptyElements: n.closeEmptyElements || !1
    },
    schema: "svg" === n.space ? ew : ev,
    quote: r,
    alternative: '"' === r ? "'" : '"'
  }.one(Array.isArray(e) ? {
    type: "root",
    children: e
  } : e, void 0, void 0);
}
function ti(e, t, n) {
  return e9(e, t, n, this);
}
function ta(e) {
  let t = [],
    n = e && e.children || tn,
    r = -1;
  for (; ++r < n.length;) t[r] = this.one(n[r], r, e);
  return t.join("");
}
var to = class {
  mode;
  options;
  hoveredLine;
  hoveredToken;
  pre;
  gutterUtilityLine;
  gutterUtilityContainer;
  gutterUtilityButton;
  gutterUtilitySlot;
  interactiveLinesAttr = !1;
  interactiveLineNumbersAttr = !1;
  hasPointerListeners = !1;
  hasDocumentPointerListeners = !1;
  selectedRange = null;
  selectedRangeHighlightSide;
  selectedRangeLineNumberOnly = !1;
  editorActiveLine = null;
  editorActiveLineSide;
  editorLineNumberOnly = !1;
  proposedSelectedRange;
  renderedSelectedLinesState;
  renderedEditorActiveLineState;
  selectionAnchor;
  pointerSession = {
    mode: "idle"
  };
  constructor(e, t) {
    this.mode = e, this.options = t;
  }
  setOptions(e) {
    this.options = e;
  }
  cleanUp() {
    this.pre?.removeEventListener("click", this.handlePointerClick), this.pre?.removeEventListener("pointerdown", this.handlePointerDown), this.pre?.removeEventListener("pointermove", this.handlePointerMove), this.pre?.removeEventListener("pointerleave", this.handlePointerLeave), this.pre?.removeAttribute("data-interactive-lines"), this.pre?.removeAttribute("data-interactive-line-numbers"), this.pre = void 0, this.gutterUtilityContainer?.remove(), this.gutterUtilityLine = void 0, this.gutterUtilityContainer = void 0, this.gutterUtilityButton = void 0, this.gutterUtilitySlot = void 0, this.clearHoveredLine(), this.clearHoveredToken(), this.detachDocumentPointerListeners(), this.clearPointerSession(), B(this.renderSelection), this.interactiveLinesAttr = !1, this.interactiveLineNumbersAttr = !1, this.hasPointerListeners = !1, this.setSelectionDirty();
  }
  setup(e) {
    this.setSelectionDirty();
    let {
      usesCustomGutterUtility: t = !1,
      enableGutterUtility: n = !1
    } = this.options;
    this.pre !== e && (this.cleanUp(), this.pre = e), n ? this.ensureGutterUtilityNode(t) : null != this.gutterUtilityContainer && (this.gutterUtilityContainer.remove(), this.gutterUtilityLine = void 0, this.gutterUtilityContainer = void 0, this.gutterUtilityButton = void 0, this.gutterUtilitySlot = void 0, "gutterSelecting" === this.pointerSession.mode && (this.clearPointerSession(), this.detachDocumentPointerListeners())), this.syncPointerListeners(e), this.updateInteractiveLineAttributes(), this.renderSelection(), this.placeUtility();
  }
  setSelectionDirty() {
    this.renderedSelectedLinesState = void 0, this.renderedEditorActiveLineState = void 0;
  }
  isSelectionDirty() {
    return void 0 === this.renderedSelectedLinesState || void 0 === this.renderedEditorActiveLineState;
  }
  setSelection(e, t) {
    let n = !(e === this.selectedRange || z(e ?? void 0, this.selectedRange ?? void 0)),
      r = t?.lineNumberOnly ?? !1,
      i = t?.activeLineSide !== this.selectedRangeHighlightSide || r !== this.selectedRangeLineNumberOnly;
    (this.isSelectionDirty() || n || i) && (this.proposedSelectedRange = void 0, this.selectedRange = e, this.selectedRangeHighlightSide = t?.activeLineSide, this.selectedRangeLineNumberOnly = r, this.renderSelection(), this.placeUtility(), n && t?.notify !== !1 && this.notifySelectionCommitted(e));
  }
  setEditorActiveLine(e, {
    lineNumberOnly: t = !1,
    side: n
  } = {}) {
    let r = e !== this.editorActiveLine,
      i = n !== this.editorActiveLineSide || t !== this.editorLineNumberOnly;
    (this.isSelectionDirty() || r || i) && (this.editorActiveLine = e, this.editorActiveLineSide = n, this.editorLineNumberOnly = t, this.renderSelection());
  }
  getSelection() {
    return this.selectedRange;
  }
  getHoveredLine = () => {
    let e = this.gutterUtilityLine ?? this.hoveredLine;
    if (null != e) {
      if ("diff" === this.mode && "diff-line" === e.type) return {
        lineNumber: e.lineNumber,
        side: e.annotationSide
      };
      if ("file" === this.mode && "line" === e.type) return {
        lineNumber: e.lineNumber
      };
    }
  };
  handlePointerClick = e => {
    let {
      onHunkExpand: t,
      onLineClick: n,
      onLineNumberClick: r,
      onTokenClick: i,
      onMergeConflictActionClick: a
    } = this.options;
    null == t && null == n && null == r && null == a && null == i || null != this.options.onGutterUtilityClick && V(e.composedPath()) || (tb(this.options.__debugPointerEvents, "click", "FileDiff.DEBUG.handlePointerClick:", e), this.handlePointerEvent({
      eventType: "click",
      event: e
    }));
  };
  handlePointerMove = e => {
    if ("mouse" !== e.pointerType) return;
    let {
      lineHoverHighlight: t = "disabled",
      onLineEnter: n,
      onLineLeave: r,
      onTokenEnter: i,
      onTokenLeave: a,
      enableGutterUtility: o = !1
    } = this.options;
    ("disabled" !== t || o || null != n || null != r || null != i || null != a) && (tb(this.options.__debugPointerEvents, "move", "FileDiff.DEBUG.handlePointerMove:", e), this.handlePointerEvent({
      eventType: "move",
      event: e
    }));
  };
  handlePointerLeave = e => {
    let {
      __debugPointerEvents: t
    } = this.options;
    (tb(t, "move", "FileDiff.DEBUG.handlePointerLeave: no event"), null == this.hoveredLine && null == this.hoveredToken) ? tb(t, "move", "FileDiff.DEBUG.handlePointerLeave: returned early, no hovered line or token") : (null != this.hoveredToken && (this.options.onTokenLeave?.(this.hoveredToken, e), this.clearHoveredToken()), null != this.hoveredLine && (this.options.onLineLeave?.({
      ...this.hoveredLine,
      event: e
    }), this.clearHoveredLine()), this.placeUtility());
  };
  handlePointerEvent({
    eventType: e,
    event: t
  }) {
    let {
        __debugPointerEvents: n
      } = this.options,
      r = t.composedPath();
    tb(n, e, "FileDiff.DEBUG.handlePointerEvent:", {
      eventType: e,
      composedPath: r
    });
    let i = this.resolvePointerTarget(r);
    tb(n, e, "FileDiff.DEBUG.handlePointerEvent: resolvePointerTarget result:", i);
    let {
      onLineClick: a,
      onLineNumberClick: o,
      onLineEnter: s,
      onLineLeave: l,
      onTokenClick: d,
      onTokenEnter: u,
      onTokenLeave: h,
      onHunkExpand: c,
      onMergeConflictActionClick: f
    } = this.options;
    switch (e) {
      case "move":
        {
          let e = tu(i) && this.hoveredLine?.lineElement === i.lineElement;
          !(td(i) && this.hoveredToken?.tokenElement === i.tokenElement) && (null != this.hoveredToken && (h?.(this.hoveredToken, t), this.clearHoveredToken()), td(i) && (this.setHoveredToken(this.toTokenEventBaseProps(i)), u?.(this.hoveredToken, t))), e || (null != this.hoveredLine && (l?.({
            ...this.hoveredLine,
            event: t
          }), this.clearHoveredLine()), tu(i) ? (this.setHoveredLine(this.toEventBaseProps(i)), this.placeUtility(), s?.({
            ...this.hoveredLine,
            event: t
          })) : this.placeUtility());
          break;
        }
      case "click":
        {
          var p, g;
          if (null == i) break;
          if ("kind" in (p = i) && "merge-conflict-action" === p.kind && null != f) {
            f(i);
            break;
          }
          if ("type" in (g = i) && "line-info" === g.type && null != c) {
            c(i.hunkIndex, i.all || t.shiftKey ? "both" : i.direction, i.all || t.shiftKey ? 1 / 0 : void 0);
            break;
          }
          if (!tu(i)) break;
          td(i) && null != d && d(this.toTokenEventBaseProps(i), t);
          let e = this.toEventBaseProps(i);
          null != o && i.numberColumn ? o({
            ...e,
            event: t
          }) : null != a && a({
            ...e,
            event: t
          });
        }
    }
  }
  syncPointerListeners(e) {
    let {
        __debugPointerEvents: t,
        lineHoverHighlight: n = "disabled",
        onLineClick: r,
        onLineNumberClick: i,
        onLineEnter: a,
        onLineLeave: o,
        onTokenClick: s,
        onTokenEnter: l,
        onTokenLeave: d,
        onHunkExpand: u,
        onMergeConflictActionClick: h,
        enableGutterUtility: c = !1,
        enableLineSelection: f = !1,
        onGutterUtilityClick: p
      } = this.options,
      g = null != p,
      m = "disabled" !== n || null != r || null != i || null != a || null != o || null != s || null != l || null != d || null != u || null != h || c || f || g;
    if (m && !this.hasPointerListeners) {
      let n;
      e.addEventListener("click", this.handlePointerClick), e.addEventListener("pointerdown", this.handlePointerDown), e.addEventListener("pointermove", this.handlePointerMove), e.addEventListener("pointerleave", this.handlePointerLeave), this.hasPointerListeners = !0, tb(t, "click", "FileDiff.DEBUG.attachEventListeners: Attaching click events for:", (n = [], ("both" === t || "click" === t) && (null != r && n.push("onLineClick"), null != i && n.push("onLineNumberClick"), null != u && n.push("expandable hunk separators"), null != h && n.push("merge conflict actions")), n)), tb(t, "move", "FileDiff.DEBUG.attachEventListeners: Attaching pointer move event"), tb(t, "move", "FileDiff.DEBUG.attachEventListeners: Attaching pointer leave event");
    } else !m && this.hasPointerListeners && (e.removeEventListener("click", this.handlePointerClick), e.removeEventListener("pointerdown", this.handlePointerDown), e.removeEventListener("pointermove", this.handlePointerMove), e.removeEventListener("pointerleave", this.handlePointerLeave), this.hasPointerListeners = !1);
    let b = "selecting" === this.pointerSession.mode || "pendingSingleLineUnselect" === this.pointerSession.mode,
      y = "gutterSelecting" === this.pointerSession.mode;
    (!f && b || !g && y) && (this.clearPointerSession(), this.detachDocumentPointerListeners(), this.selectionAnchor = void 0, this.clearPendingSingleLineState());
  }
  updateInteractiveLineAttributes() {
    if (null == this.pre) return;
    let {
        onLineClick: e,
        onLineNumberClick: t,
        enableLineSelection: n = !1
      } = this.options,
      r = null != e,
      i = null != t || n;
    r && !this.interactiveLinesAttr ? (this.pre.setAttribute("data-interactive-lines", ""), this.interactiveLinesAttr = !0) : !r && this.interactiveLinesAttr && (this.pre.removeAttribute("data-interactive-lines"), this.interactiveLinesAttr = !1), i && !this.interactiveLineNumbersAttr ? (this.pre.setAttribute("data-interactive-line-numbers", ""), this.interactiveLineNumbersAttr = !0) : !i && this.interactiveLineNumbersAttr && (this.pre.removeAttribute("data-interactive-line-numbers"), this.interactiveLineNumbersAttr = !1);
  }
  handlePointerDown = e => {
    if ("mouse" === e.pointerType && 0 !== e.button || null == this.pre || "idle" !== this.pointerSession.mode) return;
    let t = e.composedPath();
    V(t) && null != this.options.onGutterUtilityClick ? this.startGutterSelectionFromPointerDown(e) : ("mouse" !== e.pointerType && this.revealUtilityFromGutterPath(t), this.startLineSelectionFromPointerDown(e));
  };
  startLineSelectionFromPointerDown(e) {
    let {
      enableLineSelection: t = !1
    } = this.options;
    if (!t) return;
    let n = this.resolveSelectionInfo(e, {
      source: "event-path",
      requireNumberColumn: !0
    });
    if (null == n) return;
    let {
      pre: r
    } = this;
    if (null == r) return;
    let {
      lineNumber: i,
      eventSide: a,
      lineIndex: o
    } = n;
    if (e.shiftKey && null != this.selectedRange) {
      let t = this.getIndexesFromSelection(this.selectedRange, "split" === r.getAttribute("data-diff-type"));
      if (null == t) return;
      let n = t.start <= t.end ? o >= t.start : o <= t.end;
      this.selectionAnchor = {
        lineNumber: n ? this.selectedRange.start : this.selectedRange.end,
        side: n ? this.selectedRange.side : this.selectedRange.endSide ?? this.selectedRange.side
      }, this.updateSelection(i, a, !1), this.notifySelectionStart(this.getCurrentSelectionRange()), this.pointerSession = {
        mode: "selecting",
        pointerId: e.pointerId
      }, this.attachDocumentPointerListeners();
      return;
    }
    if (this.selectedRange?.start === i && this.selectedRange?.end === i) {
      let t = {
        lineNumber: i,
        side: a
      };
      this.selectionAnchor = t, this.pointerSession = {
        mode: "pendingSingleLineUnselect",
        pointerId: e.pointerId,
        anchor: t,
        pending: t
      }, this.attachDocumentPointerListeners();
      return;
    }
    !0 === this.options.controlledSelection ? this.proposedSelectedRange = null : this.selectedRange = null, this.placeUtility(), this.selectionAnchor = {
      lineNumber: i,
      side: a
    }, this.updateSelection(i, a, !1), this.notifySelectionStart(this.getCurrentSelectionRange()), this.pointerSession = {
      mode: "selecting",
      pointerId: e.pointerId
    }, this.attachDocumentPointerListeners();
  }
  startGutterSelectionFromPointerDown(e) {
    let {
      onGutterUtilityClick: t
    } = this.options;
    if (null == t) return;
    let n = this.currentSelectionEnds(),
      r = n?.bottom ?? this.resolveSelectionPoint(e, {
        source: "event-path",
        excludeUtility: !1
      }),
      i = n?.top ?? r;
    null != r && null != i && (e.preventDefault(), e.stopPropagation(), this.pointerSession = {
      mode: "gutterSelecting",
      pointerId: e.pointerId,
      anchor: i,
      current: r
    }, this.selectionAnchor = {
      lineNumber: i.lineNumber,
      side: i.side
    }, this.updateSelection(r.lineNumber, r.side, !1), this.notifySelectionStart(this.getCurrentSelectionRange()), this.attachDocumentPointerListeners());
  }
  handleDocumentPointerMove = e => {
    switch (this.pointerSession.mode) {
      case "idle":
        return;
      case "gutterSelecting":
        {
          if (e.pointerId !== this.pointerSession.pointerId) return;
          e.preventDefault();
          let t = this.resolveSelectionPoint(e, {
            source: "coordinates-first"
          });
          if (null == t) return;
          this.pointerSession.current = t, this.updateSelection(t.lineNumber, t.side);
          return;
        }
      case "selecting":
        {
          if (e.pointerId !== this.pointerSession.pointerId) return;
          e.preventDefault();
          let t = this.resolveSelectionInfo(e, {
            source: "coordinates-first",
            requireNumberColumn: !1
          });
          if (null == t || null == this.selectionAnchor) return;
          this.updateSelection(t.lineNumber, t.eventSide);
          return;
        }
      case "pendingSingleLineUnselect":
        {
          var t;
          if (e.pointerId !== this.pointerSession.pointerId) return;
          e.preventDefault();
          let n = this.resolveSelectionInfo(e, {
            source: "coordinates-first",
            requireNumberColumn: !1
          });
          if (null == n || null == this.selectionAnchor) return;
          let r = {
            lineNumber: n.lineNumber,
            side: n.eventSide
          };
          if (t = this.pointerSession.pending, t.lineNumber === r.lineNumber && t.side === r.side) return;
          this.updateSelection(n.lineNumber, n.eventSide, !1), this.notifySelectionStart(this.getCurrentSelectionRange()), this.notifySelectionChangeDelta(), this.pointerSession = {
            mode: "selecting",
            pointerId: e.pointerId
          };
          return;
        }
    }
  };
  handleDocumentPointerUp = e => {
    let {
      onGutterUtilityClick: t
    } = this.options;
    switch (this.pointerSession.mode) {
      case "idle":
        return;
      case "gutterSelecting":
        {
          let {
            pointerSession: n
          } = this;
          if (e.pointerId !== n.pointerId) return;
          e.preventDefault();
          let r = this.resolveSelectionPoint(e, {
            source: "coordinates-first"
          });
          null != r && (n.current = r, this.updateSelection(r.lineNumber, r.side));
          let i = this.buildSelectedLineRange(n.anchor, n.current);
          t?.({
            ...i
          }), this.selectionAnchor = void 0, this.notifySelectionEnd(i), this.notifySelectionCommitted(i), this.clearProposedSelection(), this.clearPointerSession(), this.detachDocumentPointerListeners();
          return;
        }
      case "pendingSingleLineUnselect":
        if (e.pointerId !== this.pointerSession.pointerId) return;
        e.preventDefault(), this.updateSelection(null, void 0, !1), this.selectionAnchor = void 0, this.clearPendingSingleLineState(), this.detachDocumentPointerListeners(), this.notifySelectionEnd(this.getCurrentSelectionRange()), this.notifySelectionCommitted(this.getCurrentSelectionRange()), this.clearProposedSelection();
        return;
      case "selecting":
        if (e.pointerId !== this.pointerSession.pointerId) return;
        e.preventDefault(), this.selectionAnchor = void 0, this.detachDocumentPointerListeners(), this.clearPointerSession(), this.notifySelectionEnd(this.getCurrentSelectionRange()), this.notifySelectionCommitted(this.getCurrentSelectionRange()), this.clearProposedSelection();
    }
  };
  handleDocumentPointerCancel = e => {
    switch (this.pointerSession.mode) {
      case "idle":
        return;
      case "gutterSelecting":
      case "selecting":
      case "pendingSingleLineUnselect":
        if ("pointerId" in this.pointerSession && e.pointerId !== this.pointerSession.pointerId) return;
        this.selectionAnchor = void 0, this.clearProposedSelection(), this.clearPendingSingleLineState(), this.clearPointerSession(), this.detachDocumentPointerListeners();
    }
  };
  clearHoveredLine() {
    null != this.hoveredLine && (this.hoveredLine.lineElement.removeAttribute("data-hovered"), this.hoveredLine.numberElement.removeAttribute("data-hovered"), this.hoveredLine = void 0);
  }
  setHoveredLine(e) {
    let {
      lineHoverHighlight: t = "disabled"
    } = this.options;
    null != this.hoveredLine && this.clearHoveredLine(), this.hoveredLine = e, "disabled" !== t && (("both" === t || "line" === t) && this.hoveredLine.lineElement.setAttribute("data-hovered", ""), ("both" === t || "number" === t) && this.hoveredLine.numberElement.setAttribute("data-hovered", ""));
  }
  clearHoveredToken() {
    null != this.hoveredToken && (this.hoveredToken = void 0);
  }
  setHoveredToken(e) {
    null != this.hoveredToken && this.clearHoveredToken(), this.hoveredToken = e;
  }
  ensureGutterUtilityNode(e) {
    if (null == this.gutterUtilityContainer && (this.gutterUtilityContainer = document.createElement("div"), this.gutterUtilityContainer.setAttribute("data-gutter-utility-slot", "")), e) null != this.gutterUtilityButton && (this.gutterUtilityButton.remove(), this.gutterUtilityButton = void 0), null == this.gutterUtilitySlot && (this.gutterUtilitySlot = document.createElement("slot"), this.gutterUtilitySlot.name = "gutter-utility-slot"), this.gutterUtilitySlot.parentNode !== this.gutterUtilityContainer && this.gutterUtilityContainer.replaceChildren(this.gutterUtilitySlot);else {
      if (this.gutterUtilitySlot?.remove(), this.gutterUtilitySlot = void 0, null == this.gutterUtilityButton) {
        let e = document.createElement("div");
        e.innerHTML = tr(F({
          tagName: "button",
          properties: {
            "data-utility-button": "",
            type: "button"
          },
          children: [j({
            name: "diffs-icon-plus",
            properties: {
              "data-icon": ""
            }
          })]
        }));
        let t = e.firstElementChild;
        if (!(t instanceof HTMLButtonElement)) throw Error("InteractionManager.ensureGutterUtilityNode: Node element should be a button");
        t.remove(), this.gutterUtilityButton = t;
      }
      this.gutterUtilityButton.parentNode !== this.gutterUtilityContainer && this.gutterUtilityContainer.replaceChildren(this.gutterUtilityButton);
    }
  }
  revealUtilityFromGutterPath(e) {
    if (this.placeUtilityFromSelection()) return;
    let t = this.resolvePointerTarget(e);
    tl(t) && t.numberColumn && this.showUtilityOnLine(this.toEventBaseProps(t));
  }
  placeUtility() {
    if (!this.placeUtilityFromSelection()) {
      if (null != this.hoveredLine) return void this.showUtilityOnLine(this.hoveredLine);
      this.hideUtility();
    }
  }
  placeUtilityFromSelection() {
    let e = this.currentSelectionEnds();
    if (null == e) return !1;
    let t = this.targetForSelectionPoint(e.bottom);
    return null == t ? this.hideUtility() : this.showUtilityOnLine(this.toEventBaseProps(t)), !0;
  }
  showUtilityOnLine(e) {
    null != this.gutterUtilityContainer && (this.gutterUtilityLine = e, e.numberElement.appendChild(this.gutterUtilityContainer));
  }
  hideUtility() {
    this.gutterUtilityContainer?.remove(), this.gutterUtilityLine = void 0;
  }
  currentSelectionEnds() {
    let e = this.getCurrentSelectionRange();
    return null == e ? void 0 : this.selectionEnds(e);
  }
  selectionEnds(e) {
    let t = {
        lineNumber: e.start,
        side: e.side
      },
      n = {
        lineNumber: e.end,
        side: e.endSide ?? e.side
      },
      r = this.selectionPointRowIndex(t),
      i = this.selectionPointRowIndex(n);
    if (null != r && null != i) return r > i ? {
      top: n,
      bottom: t
    } : {
      top: t,
      bottom: n
    };
  }
  selectionPointRowIndex(e) {
    let t = this.getLineIndex(e.lineNumber, e.side);
    if (null != t) return this.isSplitDiff() ? t[1] : t[0];
  }
  targetForSelectionPoint(e) {
    if (null == this.pre) return;
    let t = this.getLineIndex(e.lineNumber, e.side);
    if (null == t) return;
    let n = "diff" === this.mode ? `${t[0]},${t[1]}` : `${t[0]}`;
    for (let t of this.pre.querySelectorAll(`[data-column-number="${e.lineNumber}"][data-line-index="${n}"]`)) {
      if (!(t instanceof HTMLElement)) continue;
      let n = this.resolvePointerTarget(tc(t));
      if (tl(n) && ("diff" !== this.mode || null == e.side || n.side === e.side)) return n;
    }
  }
  attachDocumentPointerListeners() {
    this.hasDocumentPointerListeners || (document.addEventListener("pointermove", this.handleDocumentPointerMove), document.addEventListener("pointerup", this.handleDocumentPointerUp), document.addEventListener("pointercancel", this.handleDocumentPointerCancel), this.hasDocumentPointerListeners = !0);
  }
  detachDocumentPointerListeners() {
    this.hasDocumentPointerListeners && (document.removeEventListener("pointermove", this.handleDocumentPointerMove), document.removeEventListener("pointerup", this.handleDocumentPointerUp), document.removeEventListener("pointercancel", this.handleDocumentPointerCancel), this.hasDocumentPointerListeners = !1);
  }
  clearPointerSession() {
    this.pointerSession = {
      mode: "idle"
    };
  }
  clearPendingSingleLineState() {
    "pendingSingleLineUnselect" === this.pointerSession.mode && (this.pointerSession = {
      mode: "idle"
    });
  }
  selectionInfoFromPath(e, t) {
    let n = this.resolvePointerTarget(e);
    if (tl(n) && (!t || n.numberColumn) && null != n.splitLineIndex) return {
      lineIndex: n.splitLineIndex,
      lineNumber: n.lineNumber,
      eventSide: "diff" === this.mode ? n.side : void 0
    };
  }
  resolveSelectionInfo(e, t) {
    let n = this.resolveSelectionPath(e, t);
    return null != n ? this.selectionInfoFromPath(n, t.requireNumberColumn) : void 0;
  }
  selectionPointFromPath(e) {
    let t = this.resolvePointerTarget(e);
    if (tl(t)) return {
      lineNumber: t.lineNumber,
      side: "diff" === this.mode ? t.side : void 0
    };
  }
  resolveSelectionPoint(e, t) {
    let n = this.resolveSelectionPath(e, t);
    return null != n ? this.selectionPointFromPath(n) : void 0;
  }
  resolveSelectionPath(e, t) {
    let n = !1 !== t.excludeUtility;
    switch (t.source) {
      case "event-path":
        return this.pathFromEventPath(e.composedPath(), n);
      case "coordinates-first":
        {
          let t = this.pathFromCoordinates(e, n);
          if (void 0 !== t) return t ?? void 0;
          return this.pathFromEventPath(e.composedPath(), n);
        }
    }
  }
  pathFromCoordinates(e, t) {
    let n = this.hitTest(e);
    if (void 0 !== n) return null === n ? null : this.pathFromElement(n, t) ?? null;
  }
  pathFromEventPath(e, t) {
    if (!(t && V(e))) {
      for (let n of e) if (n instanceof Element) return this.pathFromElement(n, t);
    }
  }
  pathFromElement(e, t) {
    let n = tc(e);
    if (t && V(n)) return;
    let r = function (e) {
      let t = e.closest("[data-line], [data-column-number]");
      if (t instanceof HTMLElement) return t;
      let n = e.closest('[data-line-annotation], [data-gutter-buffer="annotation"]');
      if (!(n instanceof HTMLElement)) return;
      let r = n.previousElementSibling;
      return r instanceof HTMLElement && (r.hasAttribute("data-line") || r.hasAttribute("data-column-number")) ? r : void 0;
    }(e);
    return null != r ? tc(r) : this.pathFromAnnotationSlot(e);
  }
  pathFromAnnotationSlot(e) {
    let t = function (e) {
      if (null == e) return;
      let t = /^annotation-(?:(additions|deletions)-)?(\d+)$/.exec(e);
      if (null == t) return;
      let n = Number.parseInt(t[2], 10);
      if (Number.isFinite(n) && !(n <= 0)) return {
        lineNumber: n,
        side: t[1]
      };
    }(function (e) {
      let t = e.closest('[slot^="annotation-"]');
      if (t instanceof HTMLElement) return t.getAttribute("slot") ?? void 0;
      if (e instanceof HTMLElement) {
        let t = e.getAttribute("name") ?? void 0;
        return null != t && t.startsWith("annotation-") ? t : void 0;
      }
    }(e));
    if (null == t) return;
    let n = this.targetForSelectionPoint(t);
    return null != n ? tc(n.lineElement) : void 0;
  }
  hitTest(e) {
    if (!Number.isFinite(e.clientX) || !Number.isFinite(e.clientY)) return;
    let t = this.pre?.getRootNode(),
      n = tf(t) ? t : tf(document) ? document : void 0;
    if (null != n) return n.elementFromPoint(e.clientX, e.clientY);
  }
  getLineIndex(e, t) {
    let {
      getLineIndex: n
    } = this.options;
    return null != n ? n(e, t) : [e - 1, e - 1];
  }
  getCurrentSelectionRange() {
    return void 0 !== this.proposedSelectedRange ? this.proposedSelectedRange : this.selectedRange;
  }
  clearProposedSelection() {
    this.proposedSelectedRange = void 0;
  }
  updateSelection(e, t, n = !0) {
    let r,
      i = this.getCurrentSelectionRange();
    if (null == e) r = null;else {
      let n = this.selectionAnchor?.side ?? t,
        i = this.selectionAnchor?.lineNumber ?? e;
      r = this.buildSelectionRange(i, e, n, t);
    }
    !z(i ?? void 0, r ?? void 0) && (this.selectedRangeHighlightSide = void 0, this.selectedRangeLineNumberOnly = !1, !0 === this.options.controlledSelection ? this.proposedSelectedRange = r : (this.selectedRange = r, $(this.renderSelection)), this.placeUtility(), n && this.notifySelectionChangeDelta());
  }
  getIndexesFromSelection(e, t) {
    if (null == this.pre) return;
    let n = this.getLineIndex(e.start, e.side),
      r = this.getLineIndex(e.end, e.endSide ?? e.side);
    return null != n && null != r ? {
      start: t ? n[1] : n[0],
      end: t ? r[1] : r[0]
    } : void 0;
  }
  getSelectionRenderState() {
    return {
      selectedLines: {
        range: this.selectedRange,
        highlightSide: this.selectedRangeHighlightSide,
        lineNumberOnly: this.selectedRangeLineNumberOnly
      },
      editorActiveLine: {
        range: null == this.editorActiveLine ? null : {
          start: this.editorActiveLine,
          end: this.editorActiveLine,
          side: this.editorActiveLineSide
        },
        highlightSide: this.editorActiveLineSide,
        lineNumberOnly: this.editorLineNumberOnly
      }
    };
  }
  resolveLineRenderRange(e, t, n) {
    if (null == e.range) return;
    let r = this.getIndexesFromSelection(e.range, t);
    if (null == r) throw console.error({
      rowRange: r,
      range: e.range
    }), Error(`InteractionManager.renderSelection: No valid ${n} rowRange`);
    return r;
  }
  getLineRenderColumns(e, t, n, r) {
    if (null == this.pre || null == t && null == r) return [];
    let {
      children: i
    } = this.pre;
    if (i.length > 2) throw console.error(i), Error("InteractionManager.renderSelection: Somehow there are more than 2 code elements...");
    let a = [];
    for (let o of i) {
      let i = o.hasAttribute("data-deletions") ? "deletions" : o.hasAttribute("data-additions") ? "additions" : void 0,
        s = null != e && null != t && (null == e.highlightSide || null == i || e.highlightSide === i),
        l = null != n && null != r && (null == n.highlightSide || null == i || n.highlightSide === i);
      if (!s && !l) continue;
      let [d, u] = o.children;
      if (!(d instanceof HTMLElement) || !(u instanceof HTMLElement)) throw Error("InteractionManager.renderSelection: missing gutter or content element");
      if (u.children.length !== d.children.length) throw Error("InteractionManager.renderSelection: gutter and content children dont match, something is wrong");
      a.push({
        content: u,
        gutter: d,
        renderEditorActiveLine: l,
        renderSelectedLines: s
      });
    }
    return a;
  }
  renderSelection = () => {
    B(this.renderSelection);
    let e = this.getSelectionRenderState();
    if (null == this.pre) return;
    let {
        editorActiveLine: t,
        selectedLines: n
      } = e,
      r = !tp(this.renderedSelectedLinesState, n),
      i = !tp(this.renderedEditorActiveLineState, t);
    if (!r && !i) return;
    r && (this.renderedSelectedLinesState = void 0), i && (this.renderedEditorActiveLineState = void 0);
    let a = "split" === this.pre.getAttribute("data-diff-type"),
      o = r ? this.resolveLineRenderRange(n, a, "selected-lines") : void 0,
      s = i ? this.resolveLineRenderRange(t, a, "editor-active-line") : void 0,
      l = this.getLineRenderColumns(r ? n : void 0, o, i ? t : void 0, s),
      d = null == n.range || l.some(e => e.renderSelectedLines),
      u = null == t.range || l.some(e => e.renderEditorActiveLine);
    if (r) for (let e of this.pre.querySelectorAll("[data-selected-line]")) e.removeAttribute("data-selected-line");
    if (i) for (let e of this.pre.querySelectorAll("[data-editor-active-line]")) e.removeAttribute("data-editor-active-line");
    let h = null == o ? void 0 : Math.min(o.start, o.end),
      c = null == o ? void 0 : Math.max(o.start, o.end),
      f = h === c,
      p = s?.start;
    for (let e of l) {
      let {
          content: r,
          gutter: i,
          renderEditorActiveLine: o,
          renderSelectedLines: s
        } = e,
        l = Math.max(s ? c ?? -1 / 0 : -1 / 0, o ? p ?? -1 / 0 : -1 / 0),
        d = r.children.length;
      for (let e = 0; e < d; e++) {
        let d = r.children[e],
          u = i.children[e];
        if (!(d instanceof HTMLElement) || !(u instanceof HTMLElement)) continue;
        let g = this.parseLineIndex(d, a);
        if ((g ?? 0) > l) break;
        if (null != g) {
          if (s && null != h && null != c && g >= h && g <= c) {
            let e = f ? "single" : g === h ? "first" : g === c ? "last" : "";
            u.setAttribute("data-selected-line", e), !n.lineNumberOnly && (d.setAttribute("data-selected-line", e), u.nextSibling instanceof HTMLElement && d.nextSibling instanceof HTMLElement && (d.nextSibling.hasAttribute("data-line-annotation") || d.nextSibling.hasAttribute("data-merge-conflict-actions")) && (f ? (e = "last", d.setAttribute("data-selected-line", "first")) : g === h ? e = "" : g === c && d.setAttribute("data-selected-line", ""), d.nextSibling.setAttribute("data-selected-line", e), u.nextSibling.setAttribute("data-selected-line", e)));
          }
          o && g === p && (u.setAttribute("data-editor-active-line", ""), t.lineNumberOnly || d.setAttribute("data-editor-active-line", ""));
        }
      }
    }
    r && d && (this.renderedSelectedLinesState = n), i && u && (this.renderedEditorActiveLineState = t);
  };
  notifySelectionCommitted(e) {
    this.options.onLineSelected?.(e);
  }
  notifySelectionChangeDelta() {
    this.options.onLineSelectionChange?.(this.getCurrentSelectionRange() ?? null);
  }
  notifySelectionStart(e) {
    this.options.onLineSelectionStart?.(e);
  }
  notifySelectionEnd(e) {
    this.options.onLineSelectionEnd?.(e);
  }
  toEventBaseProps(e) {
    return "file" === this.mode ? {
      type: "line",
      lineElement: e.lineElement,
      lineNumber: e.lineNumber,
      numberColumn: e.numberColumn,
      numberElement: e.numberElement
    } : {
      type: "diff-line",
      annotationSide: e.side,
      lineType: e.lineType,
      lineElement: e.lineElement,
      numberElement: e.numberElement,
      lineNumber: e.lineNumber,
      numberColumn: e.numberColumn
    };
  }
  toTokenEventBaseProps({
    lineCharEnd: e,
    lineCharStart: t,
    lineNumber: n,
    side: r,
    tokenElement: i,
    tokenText: a
  }) {
    return "file" === this.mode ? {
      type: "token",
      lineCharEnd: e,
      lineCharStart: t,
      lineNumber: n,
      tokenElement: i,
      tokenText: a
    } : {
      type: "token",
      lineCharEnd: e,
      lineCharStart: t,
      lineNumber: n,
      side: r,
      tokenElement: i,
      tokenText: a
    };
  }
  buildSelectedLineRange(e, t) {
    return this.buildSelectionRange(e.lineNumber, t.lineNumber, e.side, t.side);
  }
  buildSelectionRange(e, t, n, r) {
    return {
      start: e,
      end: t,
      ...(null != n ? {
        side: n
      } : {}),
      ...(n !== r && null != r ? {
        endSide: r
      } : {})
    };
  }
  resolvePointerTarget(e) {
    let t,
      n,
      r,
      i,
      a,
      o,
      s,
      l,
      d,
      u,
      h = !1;
    for (let f of e) {
      if (!(f instanceof HTMLElement)) continue;
      if (null == u && f.hasAttribute("data-merge-conflict-action")) {
        var c;
        let e = f.getAttribute("data-merge-conflict-action") ?? void 0,
          t = f.getAttribute("data-merge-conflict-conflict-index") ?? void 0,
          n = null != t ? Number.parseInt(t, 10) : NaN;
        ("current" === (c = e) || "incoming" === c || "both" === c) && Number.isFinite(n) && (u = {
          kind: "merge-conflict-action",
          resolution: e,
          conflictIndex: n
        });
      }
      if (null == o && f.hasAttribute("data-char")) {
        o = f;
        let e = f.getAttribute("data-char");
        if (null != e) {
          let t = Number.parseInt(e, 10);
          if (!Number.isNaN(t)) {
            let e = f.textContent ?? "",
              n = t + e.length;
            ("" !== e.trim() || !0 === this.options.enableTokenInteractionsOnWhitespace) && (s = {
              tokenElement: o,
              lineCharStart: t,
              lineCharEnd: n,
              tokenText: e
            });
            continue;
          }
        }
      }
      let e = null == a ? f.getAttribute("data-column-number") ?? void 0 : void 0;
      if (null != e) {
        a = f, d = Number.parseInt(e, 10), h = !0, t = tm(f), i = f.getAttribute("data-line-index") ?? void 0;
        continue;
      }
      let p = null == r ? f.getAttribute("data-line") ?? void 0 : void 0;
      if (null != p) {
        r = f, d = Number.parseInt(p, 10), t = tm(f), i = f.getAttribute("data-line-index") ?? void 0;
        continue;
      }
      if (null == l && (f.hasAttribute("data-expand-button") || f.hasAttribute("data-unmodified-lines"))) {
        l = {
          hunkIndex: void 0,
          direction: f.hasAttribute("data-expand-up") ? "up" : f.hasAttribute("data-expand-down") ? "down" : "both",
          all: f.hasAttribute("data-expand-all-button")
        };
        continue;
      }
      let g = null != l ? f.getAttribute("data-expand-index") ?? void 0 : void 0;
      if (null != l && null != g) {
        let e = Number.parseInt(g, 10);
        Number.isNaN(e) || (l.hunkIndex = e);
        continue;
      }
      if (null == n && f.hasAttribute("data-code")) {
        n = f;
        break;
      }
    }
    if (null != u) return u;
    if (l?.hunkIndex != null) return {
      type: "line-info",
      hunkIndex: l.hunkIndex,
      direction: l.direction,
      all: l.all
    };
    if (r ??= null != i ? th(n, `[data-line][data-line-index="${i}"]`) : void 0, a ??= null != i ? th(n, `[data-column-number][data-line-index="${i}"]`) : void 0, null == n || null == r || null == a || null == t || null == d || Number.isNaN(d)) return;
    let f = this.parseLineIndex(r, this.isSplitDiff());
    return null != s ? "file" === this.mode ? {
      kind: "token",
      lineType: t,
      lineElement: r,
      lineNumber: d,
      numberColumn: h,
      numberElement: a,
      side: void 0,
      splitLineIndex: f,
      ...s
    } : {
      kind: "token",
      lineType: t,
      lineElement: r,
      lineNumber: d,
      numberColumn: h,
      numberElement: a,
      side: tg(t, n),
      splitLineIndex: f,
      ...s
    } : "file" === this.mode ? {
      kind: "line",
      lineType: t,
      lineElement: r,
      lineNumber: d,
      numberColumn: h,
      numberElement: a,
      side: void 0,
      splitLineIndex: f
    } : {
      kind: "line",
      lineType: t,
      lineElement: r,
      lineNumber: d,
      numberColumn: h,
      numberElement: a,
      side: tg(t, n),
      splitLineIndex: f
    };
  }
  isSplitDiff() {
    return this.pre?.getAttribute("data-diff-type") === "split";
  }
  parseLineIndex(e, t) {
    let n = (e.getAttribute("data-line-index") ?? "").split(",").map(e => Number.parseInt(e, 10)).filter(e => !Number.isNaN(e));
    return t && 2 === n.length ? n[1] : t ? void 0 : n[0];
  }
};
function ts({
  enableTokenInteractionsOnWhitespace: e,
  enableGutterUtility: t,
  lineHoverHighlight: n,
  onGutterUtilityClick: r,
  onLineClick: i,
  onLineEnter: a,
  onLineLeave: o,
  onLineNumberClick: s,
  onTokenClick: l,
  onTokenEnter: d,
  onTokenLeave: u,
  renderGutterUtility: h,
  __debugPointerEvents: c,
  enableLineSelection: f,
  controlledSelection: p,
  onLineSelected: g,
  onLineSelectionStart: m,
  onLineSelectionChange: b,
  onLineSelectionEnd: y
}, v, w, k) {
  return {
    enableTokenInteractionsOnWhitespace: e,
    enableGutterUtility: function ({
      enableGutterUtility: e,
      renderGutterUtility: t,
      onGutterUtilityClick: n
    }) {
      if (null != n && null != t) throw Error("Cannot use both 'onGutterUtilityClick' and 'renderGutterUtility'. Use only one gutter utility API.");
      return e ?? !1;
    }({
      enableGutterUtility: t,
      renderGutterUtility: h,
      onGutterUtilityClick: r
    }),
    usesCustomGutterUtility: null != h,
    lineHoverHighlight: n,
    onGutterUtilityClick: r,
    onHunkExpand: v,
    onMergeConflictActionClick: k,
    onLineClick: i,
    onLineEnter: a,
    onLineLeave: o,
    onLineNumberClick: s,
    onTokenClick: l,
    onTokenEnter: d,
    onTokenLeave: u,
    __debugPointerEvents: c,
    enableLineSelection: f,
    controlledSelection: p,
    onLineSelected: g,
    onLineSelectionStart: m,
    onLineSelectionChange: b,
    onLineSelectionEnd: y,
    getLineIndex: w
  };
}
function tl(e) {
  return null != e && "kind" in e && "line" === e.kind;
}
function td(e) {
  return null != e && "kind" in e && "token" === e.kind;
}
function tu(e) {
  return tl(e) || td(e);
}
function th(e, t) {
  let n = e?.querySelector(t);
  return n instanceof HTMLElement ? n : void 0;
}
function tc(e) {
  let t = [],
    n = e;
  for (; null != n;) t.push(n), n = n.parentNode;
  return t;
}
function tf(e) {
  return null != e && "function" == typeof e.elementFromPoint;
}
function tp(e, t) {
  var n, r;
  return e?.highlightSide === t.highlightSide && e?.lineNumberOnly === t.lineNumberOnly && ((n = e?.range ?? null) === (r = t.range) || z(n ?? void 0, r ?? void 0));
}
function tg(e, t) {
  switch (e) {
    case "change-deletion":
      return "deletions";
    case "change-addition":
      return "additions";
    default:
      return t.hasAttribute("data-deletions") ? "deletions" : "additions";
  }
}
function tm(e) {
  let t = e.getAttribute("data-line-type");
  if (null != t) switch (t) {
    case "change-deletion":
    case "change-addition":
    case "context":
    case "context-expanded":
      return t;
    default:
      return;
  }
}
function tb(e = "none", t, ...n) {
  switch (e) {
    case "none":
      return;
    case "both":
      break;
    case "click":
      if ("click" !== t) return;
      break;
    case "move":
      if ("move" !== t) return;
  }
  console.log(...n);
}
var ty = class e {
  static resizeObserver;
  static managersByElement = new Map();
  static getResizeObserver() {
    let t = e.resizeObserver ?? new ResizeObserver(e.handleSharedResizeEntries);
    return e.resizeObserver = t, t;
  }
  static handleSharedResizeEntries(t) {
    let n = new Map();
    for (let r of t) {
      let t = e.managersByElement.get(r.target);
      if (null == t) continue;
      let i = n.get(t);
      null == i ? n.set(t, [r]) : i.push(r);
    }
    for (let [e, t] of n) e.handleResizeEntries(t);
  }
  observedNodes = new Map();
  setup(e, {
    disableAnnotations: t,
    columnVariables: n = "apply"
  }) {
    var r, i, a, o;
    let s = new Set(),
      l = "apply" === n,
      d = 0,
      u = new Map(this.observedNodes);
    for (let t of (this.observedNodes.clear(), e.children)) {
      if (2 === d) break;
      let e = (() => {
        if (t instanceof HTMLElement && "CODE" === t.tagName) return t;
      })();
      if (null == e) continue;
      d++;
      let n = u.get(e);
      if (null != n && "code" !== n.type) throw Error("ResizeManager.setup: somehow a code node is being used for an annotation, should be impossible");
      let a = e.firstElementChild;
      a instanceof HTMLElement || (a = null), null != n ? (this.observedNodes.set(e, n), u.delete(e), n.numberElement !== a ? (null != n.numberElement && (this.unobserve(n.numberElement), u.delete(n.numberElement)), null != a && (this.observe(a), u.delete(a), this.observedNodes.set(a, n)), n.numberElement = a, n.numberWidth = 0) : null != n.numberElement ? (u.delete(n.numberElement), this.observedNodes.set(n.numberElement, n)) : n.numberWidth = 0, r = n, i = l, r.applyColumnVariables !== i && (r.applyColumnVariables = i, i ? tv(r, {
        codeWidthChanged: !0,
        numberWidthChanged: !0
      }) : tw(r))) : (n = {
        type: "code",
        codeElement: e,
        numberElement: a,
        codeWidth: "auto",
        numberWidth: 0,
        applyColumnVariables: l
      }, this.observedNodes.set(e, n), this.observe(e), null != a && (this.observedNodes.set(a, n), this.observe(a)));
    }
    if (d > 1 && !t) {
      let t = e.querySelectorAll('[data-line-annotation*=","]'),
        n = new Map();
      for (let e of t) {
        if (!(e instanceof HTMLElement)) continue;
        let t = e.getAttribute("data-line-annotation") ?? "";
        if (!/^-?\d+,-?\d+$/.test(t)) {
          console.error("DiffFileRenderer.setupResizeObserver: Invalid element or annotation", {
            lineAnnotation: t,
            element: e
          });
          continue;
        }
        let r = n.get(t);
        null == r && (r = [], n.set(t, r)), r.push(e);
      }
      for (let [e, t] of n) {
        if (2 !== t.length) {
          console.error("DiffFileRenderer.setupResizeObserver: Bad Pair", e, t);
          continue;
        }
        let [n, r] = t,
          i = n.firstElementChild,
          a = r.firstElementChild;
        if (!(n instanceof HTMLElement) || !(r instanceof HTMLElement) || !(i instanceof HTMLElement) || !(a instanceof HTMLElement)) continue;
        let o = u.get(i);
        if (null != o) {
          this.observedNodes.set(i, o), this.observedNodes.set(a, o), u.delete(i), u.delete(a);
          continue;
        }
        let l = i.getBoundingClientRect().height,
          d = a.getBoundingClientRect().height;
        o = {
          type: "annotations",
          column1: {
            container: n,
            child: i,
            childHeight: l
          },
          column2: {
            container: r,
            child: a,
            childHeight: d
          },
          currentHeight: "auto"
        }, s.add({
          child1: i,
          child2: a,
          item: o,
          newHeight: Math.max(l, d)
        });
      }
      for (let e of s) this.applyNewHeight(e.item, e.newHeight), this.observedNodes.set(e.child1, e.item), this.observedNodes.set(e.child2, e.item), this.observe(e.child1), this.observe(e.child2);
      s.clear();
    }
    for (let [e, t] of u) {
      this.unobserve(e), "code" === t.type ? (a = t).codeElement.isConnected && tw(a) : ((o = t).column1.container.isConnected && o.column1.container.style.removeProperty("--diffs-annotation-min-height"), o.column2.container.isConnected && o.column2.container.style.removeProperty("--diffs-annotation-min-height"));
    }
    u.clear();
  }
  cleanUp() {
    for (let e of this.observedNodes.keys()) this.unobserve(e);
    this.observedNodes.clear();
  }
  observe(t) {
    let {
        managersByElement: n
      } = e,
      r = n.get(t);
    if (r !== this) {
      if (null != r && r !== this) throw Error("ResizeManager.observe: element is already owned by another ResizeManager");
      n.set(t, this), e.getResizeObserver().observe(t);
    }
  }
  unobserve(t) {
    let {
        managersByElement: n,
        resizeObserver: r
      } = e,
      i = n.get(t);
    if (null != i) {
      if (i !== this) throw Error("ResizeManager.unobserve: element is owned by another ResizeManager");
      n.delete(t), r?.unobserve(t), null != r && 0 === n.size && (r.disconnect(), e.resizeObserver = void 0);
    }
  }
  handleResizeEntries(e) {
    let t = new Map(),
      n = new Set();
    for (let r of e) {
      let {
        target: e,
        borderBoxSize: i,
        contentBoxSize: a
      } = r;
      if (!(e instanceof HTMLElement)) {
        console.error("ResizeManager.handleResizeEntries: Invalid element for ResizeObserver", r);
        continue;
      }
      let o = this.observedNodes.get(e);
      if (null == o) {
        console.error("ResizeManager.handleResizeEntries: Not a valid observed node", r);
        continue;
      }
      if ("annotations" === o.type) {
        let t = e === o.column1.child ? o.column1 : e === o.column2.child ? o.column2 : void 0;
        if (null == t) {
          console.error("ResizeManager.handleResizeEntries: Couldn't find a column for", {
            item: o,
            target: e
          });
          continue;
        }
        t.childHeight = i[0].blockSize, n.add(o);
      } else if ("code" === o.type) {
        let n = t.get(o) ?? {},
          r = a[0].inlineSize;
        e === o.codeElement ? n.codeInlineSize = r : e === o.numberElement && (n.numberInlineSize = r), t.set(o, n);
      }
    }
    this.applyAnnotationUpdates(n), n.clear(), this.applyColumnUpdates(t), t.clear();
  }
  applyAnnotationUpdates(e) {
    for (let t of e) this.applyNewHeight(t, Math.max(t.column1.childHeight, t.column2.childHeight));
  }
  applyColumnUpdates = e => {
    for (let [t, n] of e) {
      let e = null != n.codeInlineSize ? function (e) {
          let t = Math.max(Math.floor(e), 0);
          return 0 === t ? "auto" : t;
        }(n.codeInlineSize) : t.codeWidth,
        r = null != n.numberInlineSize ? Math.max(Math.ceil(n.numberInlineSize), 0) : t.numberWidth,
        i = e !== t.codeWidth,
        a = r !== t.numberWidth;
      (i || a) && (t.codeWidth = e, t.numberWidth = r, t.applyColumnVariables && tv(t, {
        codeWidthChanged: i,
        numberWidthChanged: a
      }));
    }
  };
  applyNewHeight(e, t) {
    t !== e.currentHeight && (e.currentHeight = Math.max(t, 0), e.column1.container.style.setProperty("--diffs-annotation-min-height", `${e.currentHeight}px`), e.column2.container.style.setProperty("--diffs-annotation-min-height", `${e.currentHeight}px`));
  }
};
function tv(e, {
  codeWidthChanged: t,
  numberWidthChanged: n
}) {
  let {
    codeElement: r,
    codeWidth: i,
    numberWidth: a
  } = e;
  if (t && r.style.setProperty("--diffs-column-width", `${"number" == typeof i ? `${i}px` : "auto"}`), n && r.style.setProperty("--diffs-column-number-width", `${0 === a ? "auto" : `${a}px`}`), t || n && "auto" !== i) {
    let e = "number" == typeof i ? Math.max(i - a, 0) : 0;
    r.style.setProperty("--diffs-column-content-width", `${e > 0 ? `${e}px` : "auto"}`);
  }
}
function tw(e) {
  e.codeElement.style.removeProperty("--diffs-column-content-width"), e.codeElement.style.removeProperty("--diffs-column-number-width"), e.codeElement.style.removeProperty("--diffs-column-width");
}
function tk(e, t) {
  return null == e || null == t ? e === t : e.startingLine === t.startingLine && e.totalLines === t.totalLines && e.bufferBefore === t.bufferBefore && e.bufferAfter === t.bufferAfter;
}
let tS = new Map(),
  tC = {
    "1c": "1c",
    abap: "abap",
    as: "actionscript-3",
    ada: "ada",
    adb: "ada",
    ads: "ada",
    adoc: "asciidoc",
    asciidoc: "asciidoc",
    "component.html": "angular-html",
    "component.ts": "angular-ts",
    conf: "nginx",
    htaccess: "apache",
    cls: "tex",
    trigger: "apex",
    apl: "apl",
    applescript: "applescript",
    scpt: "applescript",
    ara: "ara",
    asm: "asm",
    s: "riscv",
    astro: "astro",
    awk: "awk",
    bal: "ballerina",
    sh: "zsh",
    bash: "zsh",
    bat: "cmd",
    cmd: "cmd",
    be: "berry",
    beancount: "beancount",
    bib: "bibtex",
    bicep: "bicep",
    "blade.php": "blade",
    bsl: "bsl",
    c: "c",
    h: "objective-cpp",
    cs: "csharp",
    cpp: "cpp",
    hpp: "cpp",
    cc: "cpp",
    cxx: "cpp",
    hh: "cpp",
    cdc: "cdc",
    cairo: "cairo",
    clar: "clarity",
    clj: "clojure",
    cljs: "clojure",
    cljc: "clojure",
    soy: "soy",
    cmake: "cmake",
    "CMakeLists.txt": "cmake",
    cob: "cobol",
    cbl: "cobol",
    cobol: "cobol",
    CODEOWNERS: "codeowners",
    ql: "ql",
    coffee: "coffeescript",
    lisp: "lisp",
    cl: "lisp",
    lsp: "lisp",
    log: "log",
    v: "verilog",
    cql: "cql",
    cr: "crystal",
    css: "css",
    csv: "csv",
    cue: "cue",
    cypher: "cypher",
    cyp: "cypher",
    d: "d",
    dart: "dart",
    dax: "dax",
    desktop: "desktop",
    diff: "diff",
    patch: "diff",
    Dockerfile: "dockerfile",
    dockerfile: "dockerfile",
    env: "dotenv",
    dm: "dream-maker",
    edge: "edge",
    el: "emacs-lisp",
    ex: "elixir",
    exs: "elixir",
    elm: "elm",
    erb: "erb",
    erl: "erlang",
    hrl: "erlang",
    f: "fortran-fixed-form",
    for: "fortran-fixed-form",
    fs: "fsharp",
    fsi: "fsharp",
    fsx: "fsharp",
    f03: "f03",
    f08: "f08",
    f18: "f18",
    f77: "f77",
    f90: "fortran-free-form",
    f95: "fortran-free-form",
    fnl: "fennel",
    fish: "fish",
    ftl: "ftl",
    tres: "gdresource",
    res: "gdresource",
    gd: "gdscript",
    gdshader: "gdshader",
    gs: "genie",
    feature: "gherkin",
    COMMIT_EDITMSG: "git-commit",
    "git-rebase-todo": "git-rebase",
    gjs: "glimmer-js",
    gleam: "gleam",
    gts: "glimmer-ts",
    glsl: "glsl",
    vert: "glsl",
    frag: "glsl",
    shader: "shaderlab",
    gp: "gnuplot",
    plt: "gnuplot",
    gnuplot: "gnuplot",
    go: "go",
    graphql: "graphql",
    gql: "graphql",
    groovy: "groovy",
    gvy: "groovy",
    hack: "hack",
    haml: "haml",
    hbs: "handlebars",
    handlebars: "handlebars",
    hs: "haskell",
    lhs: "haskell",
    hx: "haxe",
    hcl: "hcl",
    hjson: "hjson",
    hlsl: "hlsl",
    fx: "hlsl",
    html: "html",
    htm: "html",
    http: "http",
    rest: "http",
    hxml: "hxml",
    hy: "hy",
    imba: "imba",
    ini: "ini",
    cfg: "ini",
    jade: "pug",
    pug: "pug",
    java: "java",
    js: "javascript",
    mjs: "javascript",
    cjs: "javascript",
    jinja: "jinja",
    jinja2: "jinja",
    j2: "jinja",
    jison: "jison",
    jl: "julia",
    json: "json",
    json5: "json5",
    jsonc: "jsonc",
    jsonl: "jsonl",
    jsonnet: "jsonnet",
    libsonnet: "jsonnet",
    jssm: "jssm",
    jsx: "jsx",
    kt: "kotlin",
    kts: "kts",
    kql: "kusto",
    tex: "tex",
    ltx: "tex",
    lean: "lean4",
    less: "less",
    liquid: "liquid",
    lit: "lit",
    ll: "llvm",
    logo: "logo",
    lua: "lua",
    luau: "luau",
    Makefile: "makefile",
    mk: "makefile",
    makefile: "makefile",
    md: "markdown",
    markdown: "markdown",
    marko: "marko",
    m: "wolfram",
    mat: "matlab",
    mdc: "mdc",
    mdx: "mdx",
    wiki: "wikitext",
    mediawiki: "wikitext",
    mmd: "mermaid",
    mermaid: "mermaid",
    mips: "mipsasm",
    mojo: "mojo",
    "🔥": "mojo",
    move: "move",
    nar: "narrat",
    nf: "nextflow",
    nim: "nim",
    nims: "nim",
    nimble: "nim",
    nix: "nix",
    nu: "nushell",
    mm: "objective-cpp",
    ml: "ocaml",
    mli: "ocaml",
    mll: "ocaml",
    mly: "ocaml",
    pas: "pascal",
    p: "pascal",
    pl: "prolog",
    pm: "perl",
    t: "perl",
    raku: "raku",
    p6: "raku",
    pl6: "raku",
    php: "php",
    phtml: "php",
    pls: "plsql",
    sql: "sql",
    po: "po",
    polar: "polar",
    pcss: "postcss",
    pot: "pot",
    potx: "potx",
    pq: "powerquery",
    pqm: "powerquery",
    ps1: "powershell",
    psm1: "powershell",
    psd1: "powershell",
    prisma: "prisma",
    pro: "prolog",
    P: "prolog",
    properties: "properties",
    proto: "protobuf",
    pp: "puppet",
    purs: "purescript",
    py: "python",
    pyw: "python",
    pyi: "python",
    qml: "qml",
    qmldir: "qmldir",
    qss: "qss",
    r: "r",
    R: "r",
    rkt: "racket",
    rktl: "racket",
    razor: "razor",
    cshtml: "razor",
    rb: "ruby",
    rbw: "ruby",
    reg: "reg",
    regex: "regexp",
    rel: "rel",
    rs: "rust",
    rst: "rst",
    rake: "ruby",
    gemspec: "ruby",
    jbuilder: "ruby",
    builder: "ruby",
    rabl: "ruby",
    arb: "ruby",
    ru: "ruby",
    podspec: "ruby",
    Gemfile: "ruby",
    Rakefile: "ruby",
    Guardfile: "ruby",
    Capfile: "ruby",
    Berksfile: "ruby",
    Brewfile: "ruby",
    Vagrantfile: "ruby",
    Thorfile: "ruby",
    Appraisals: "ruby",
    Dangerfile: "ruby",
    sas: "sas",
    sass: "sass",
    scala: "scala",
    sc: "scala",
    scm: "scheme",
    ss: "scheme",
    sld: "scheme",
    scss: "scss",
    sdbl: "sdbl",
    shadergraph: "shader",
    st: "smalltalk",
    sol: "solidity",
    sparql: "sparql",
    rq: "sparql",
    spl: "splunk",
    config: "ssh-config",
    do: "stata",
    ado: "stata",
    dta: "stata",
    styl: "stylus",
    stylus: "stylus",
    svelte: "svelte",
    swift: "swift",
    sv: "system-verilog",
    svh: "system-verilog",
    service: "systemd",
    socket: "systemd",
    device: "systemd",
    timer: "systemd",
    talon: "talonscript",
    tasl: "tasl",
    tcl: "tcl",
    templ: "templ",
    tf: "tf",
    tfvars: "tfvars",
    toml: "toml",
    ts: "typescript",
    mts: "typescript",
    cts: "typescript",
    tsp: "typespec",
    tsv: "tsv",
    tsx: "tsx",
    ttl: "turtle",
    twig: "twig",
    typ: "typst",
    vv: "v",
    vala: "vala",
    vapi: "vala",
    vb: "vb",
    vbs: "vb",
    bas: "vb",
    vh: "verilog",
    vhd: "vhdl",
    vhdl: "vhdl",
    vim: "vimscript",
    vue: "vue",
    "vine.ts": "vue-vine",
    vy: "vyper",
    wasm: "wasm",
    wat: "wasm",
    wy: "文言",
    wgsl: "wgsl",
    wit: "wit",
    wl: "wolfram",
    nb: "wolfram",
    xml: "xml",
    xsl: "xsl",
    xslt: "xsl",
    yaml: "yaml",
    yml: "yml",
    zs: "zenscript",
    zig: "zig",
    zsh: "zsh",
    sty: "tex"
  };
function tx(e) {
  if (tS.has(e)) return tS.get(e) ?? "text";
  if (null != tC[e]) return tC[e];
  let t = e.match(/\.([^/\\]+\.[^/\\]+)$/);
  if (null != t) {
    if (tS.has(t[1])) return tS.get(t[1]) ?? "text";
    if (null != tC[t[1]]) return tC[t[1]] ?? "text";
  }
  let n = e.match(/\.([^.]+)$/)?.[1] ?? "";
  return tS.has(n) ? tS.get(n) ?? "text" : tC[n] ?? "text";
}
function tA(e) {
  return (e.lang ?? tx(e.name)) === "text";
}
function tE(e) {
  return e?.some(e => 0 === e.lineNumber) ?? !1;
}
function tL(e) {
  return 0 === e.startingLine && e.totalLines > 0;
}
let t_ = new Map(),
  tT = new Map(),
  tR = new Map(),
  tM = new Set();
function tN(e) {
  for (let t of Array.isArray(e) ? e : [e]) if ("text" !== t && "ansi" !== t && !tM.has(t)) return !1;
  return !0;
}
function tP(e, t) {
  for (let n of e = Array.isArray(e) ? e : [e]) {
    if (tM.has(n.name)) continue;
    let e = t_.get(n.name);
    null == e && (e = n, t_.set(n.name, e)), tM.add(e.name), t.loadLanguageSync(e.data);
  }
}
function tI() {
  return "u" > typeof WorkerGlobalScope && "u" > typeof self && self instanceof WorkerGlobalScope;
}
let tO = [{
    id: "abap",
    name: "ABAP",
    import: () => e.A(4390)
  }, {
    id: "actionscript-3",
    name: "ActionScript",
    aliases: ["actionscript", "as3"],
    import: () => e.A(21766)
  }, {
    id: "ada",
    name: "Ada",
    import: () => e.A(27843)
  }, {
    id: "ahk",
    name: "AutoHotkey",
    aliases: ["ahk1"],
    import: () => e.A(45781)
  }, {
    id: "ahk2",
    name: "AutoHotkey2",
    import: () => e.A(4442)
  }, {
    id: "angular-html",
    name: "Angular HTML",
    import: () => e.A(49019)
  }, {
    id: "angular-ts",
    name: "Angular TypeScript",
    import: () => e.A(67179)
  }, {
    id: "apache",
    name: "Apache Conf",
    import: () => e.A(76135)
  }, {
    id: "apex",
    name: "Apex",
    import: () => e.A(44134)
  }, {
    id: "apl",
    name: "APL",
    import: () => e.A(36860)
  }, {
    id: "applescript",
    name: "AppleScript",
    import: () => e.A(86875)
  }, {
    id: "ara",
    name: "Ara",
    import: () => e.A(62778)
  }, {
    id: "asciidoc",
    name: "AsciiDoc",
    aliases: ["adoc"],
    import: () => e.A(78016)
  }, {
    id: "asm",
    name: "Assembly",
    import: () => e.A(87078)
  }, {
    id: "astro",
    name: "Astro",
    import: () => e.A(48200)
  }, {
    id: "awk",
    name: "AWK",
    import: () => e.A(10982)
  }, {
    id: "ballerina",
    name: "Ballerina",
    import: () => e.A(31400)
  }, {
    id: "bat",
    name: "Batch File",
    aliases: ["batch", "cmd"],
    import: () => e.A(29480)
  }, {
    id: "beancount",
    name: "Beancount",
    import: () => e.A(39047)
  }, {
    id: "berry",
    name: "Berry",
    aliases: ["be"],
    import: () => e.A(13583)
  }, {
    id: "bibtex",
    name: "BibTeX",
    import: () => e.A(88619)
  }, {
    id: "bicep",
    name: "Bicep",
    import: () => e.A(87690)
  }, {
    id: "bird2",
    name: "BIRD2 Configuration",
    aliases: ["bird"],
    import: () => e.A(60854)
  }, {
    id: "blade",
    name: "Blade",
    import: () => e.A(31610)
  }, {
    id: "bsl",
    name: "1C (Enterprise)",
    aliases: ["1c"],
    import: () => e.A(84332)
  }, {
    id: "c",
    name: "C",
    import: () => e.A(25309)
  }, {
    id: "c3",
    name: "C3",
    import: () => e.A(87611)
  }, {
    id: "cadence",
    name: "Cadence",
    aliases: ["cdc"],
    import: () => e.A(9872)
  }, {
    id: "cairo",
    name: "Cairo",
    import: () => e.A(48280)
  }, {
    id: "chapel",
    name: "Chapel",
    aliases: ["chpl"],
    import: () => e.A(99361)
  }, {
    id: "clarity",
    name: "Clarity",
    import: () => e.A(34271)
  }, {
    id: "clojure",
    name: "Clojure",
    aliases: ["clj"],
    import: () => e.A(96767)
  }, {
    id: "cmake",
    name: "CMake",
    import: () => e.A(50597)
  }, {
    id: "cobol",
    name: "COBOL",
    import: () => e.A(52250)
  }, {
    id: "codeowners",
    name: "CODEOWNERS",
    import: () => e.A(37133)
  }, {
    id: "codeql",
    name: "CodeQL",
    aliases: ["ql"],
    import: () => e.A(75039)
  }, {
    id: "coffee",
    name: "CoffeeScript",
    aliases: ["coffeescript"],
    import: () => e.A(39523)
  }, {
    id: "common-lisp",
    name: "Common Lisp",
    aliases: ["lisp"],
    import: () => e.A(86944)
  }, {
    id: "coq",
    name: "Rocq",
    import: () => e.A(49717)
  }, {
    id: "cpp",
    name: "C++",
    aliases: ["c++"],
    import: () => e.A(95336)
  }, {
    id: "crystal",
    name: "Crystal",
    import: () => e.A(69216)
  }, {
    id: "csharp",
    name: "C#",
    aliases: ["c#", "cs"],
    import: () => e.A(69903)
  }, {
    id: "css",
    name: "CSS",
    import: () => e.A(8480)
  }, {
    id: "csv",
    name: "CSV",
    import: () => e.A(43048)
  }, {
    id: "cue",
    name: "CUE",
    import: () => e.A(82994)
  }, {
    id: "cypher",
    name: "Cypher",
    aliases: ["cql"],
    import: () => e.A(38853)
  }, {
    id: "d",
    name: "D",
    import: () => e.A(73748)
  }, {
    id: "dart",
    name: "Dart",
    import: () => e.A(58655)
  }, {
    id: "dax",
    name: "DAX",
    import: () => e.A(66698)
  }, {
    id: "desktop",
    name: "Desktop",
    import: () => e.A(90758)
  }, {
    id: "diff",
    name: "Diff",
    import: () => e.A(32952)
  }, {
    id: "docker",
    name: "Dockerfile",
    aliases: ["dockerfile"],
    import: () => e.A(48998)
  }, {
    id: "dotenv",
    name: "dotEnv",
    import: () => e.A(64338)
  }, {
    id: "dream-maker",
    name: "Dream Maker",
    import: () => e.A(81411)
  }, {
    id: "edge",
    name: "Edge",
    import: () => e.A(30113)
  }, {
    id: "elixir",
    name: "Elixir",
    import: () => e.A(44429)
  }, {
    id: "elm",
    name: "Elm",
    import: () => e.A(79829)
  }, {
    id: "emacs-lisp",
    name: "Emacs Lisp",
    aliases: ["elisp"],
    import: () => e.A(63442)
  }, {
    id: "erb",
    name: "ERB",
    import: () => e.A(56723)
  }, {
    id: "erlang",
    name: "Erlang",
    aliases: ["erl"],
    import: () => e.A(3702)
  }, {
    id: "fennel",
    name: "Fennel",
    import: () => e.A(39865)
  }, {
    id: "fish",
    name: "Fish",
    import: () => e.A(95965)
  }, {
    id: "fluent",
    name: "Fluent",
    aliases: ["ftl"],
    import: () => e.A(78600)
  }, {
    id: "fortran-fixed-form",
    name: "Fortran (Fixed Form)",
    aliases: ["f", "for", "f77"],
    import: () => e.A(98605)
  }, {
    id: "fortran-free-form",
    name: "Fortran (Free Form)",
    aliases: ["f90", "f95", "f03", "f08", "f18"],
    import: () => e.A(83757)
  }, {
    id: "fsharp",
    name: "F#",
    aliases: ["f#", "fs"],
    import: () => e.A(64153)
  }, {
    id: "gdresource",
    name: "GDResource",
    aliases: ["tscn", "tres"],
    import: () => e.A(4984)
  }, {
    id: "gdscript",
    name: "GDScript",
    aliases: ["gd"],
    import: () => e.A(42665)
  }, {
    id: "gdshader",
    name: "GDShader",
    import: () => e.A(10854)
  }, {
    id: "genie",
    name: "Genie",
    import: () => e.A(51922)
  }, {
    id: "gherkin",
    name: "Gherkin",
    import: () => e.A(51542)
  }, {
    id: "git-commit",
    name: "Git Commit Message",
    import: () => e.A(39097)
  }, {
    id: "git-rebase",
    name: "Git Rebase Message",
    import: () => e.A(53215)
  }, {
    id: "gleam",
    name: "Gleam",
    import: () => e.A(88570)
  }, {
    id: "glimmer-js",
    name: "Glimmer JS",
    aliases: ["gjs"],
    import: () => e.A(19005)
  }, {
    id: "glimmer-ts",
    name: "Glimmer TS",
    aliases: ["gts"],
    import: () => e.A(97287)
  }, {
    id: "glsl",
    name: "GLSL",
    import: () => e.A(90567)
  }, {
    id: "gn",
    name: "GN",
    import: () => e.A(65353)
  }, {
    id: "gnuplot",
    name: "Gnuplot",
    import: () => e.A(18032)
  }, {
    id: "go",
    name: "Go",
    import: () => e.A(1844)
  }, {
    id: "graphql",
    name: "GraphQL",
    aliases: ["gql"],
    import: () => e.A(88475)
  }, {
    id: "groovy",
    name: "Groovy",
    import: () => e.A(23188)
  }, {
    id: "hack",
    name: "Hack",
    import: () => e.A(34955)
  }, {
    id: "haml",
    name: "Ruby Haml",
    import: () => e.A(79273)
  }, {
    id: "handlebars",
    name: "Handlebars",
    aliases: ["hbs"],
    import: () => e.A(92465)
  }, {
    id: "haskell",
    name: "Haskell",
    aliases: ["hs"],
    import: () => e.A(11500)
  }, {
    id: "haxe",
    name: "Haxe",
    import: () => e.A(87370)
  }, {
    id: "hcl",
    name: "HashiCorp HCL",
    import: () => e.A(45793)
  }, {
    id: "hjson",
    name: "Hjson",
    import: () => e.A(90209)
  }, {
    id: "hlsl",
    name: "HLSL",
    import: () => e.A(96108)
  }, {
    id: "html",
    name: "HTML",
    import: () => e.A(250)
  }, {
    id: "html-derivative",
    name: "HTML (Derivative)",
    import: () => e.A(8650)
  }, {
    id: "http",
    name: "HTTP",
    import: () => e.A(57009)
  }, {
    id: "hurl",
    name: "Hurl",
    import: () => e.A(70068)
  }, {
    id: "hxml",
    name: "HXML",
    import: () => e.A(7383)
  }, {
    id: "hy",
    name: "Hy",
    import: () => e.A(76261)
  }, {
    id: "imba",
    name: "Imba",
    import: () => e.A(39081)
  }, {
    id: "ini",
    name: "INI",
    aliases: ["properties"],
    import: () => e.A(77101)
  }, {
    id: "java",
    name: "Java",
    import: () => e.A(14125)
  }, {
    id: "javascript",
    name: "JavaScript",
    aliases: ["js", "cjs", "mjs"],
    import: () => e.A(55237)
  }, {
    id: "jinja",
    name: "Jinja",
    import: () => e.A(68230)
  }, {
    id: "jison",
    name: "Jison",
    import: () => e.A(18761)
  }, {
    id: "json",
    name: "JSON",
    import: () => e.A(76830)
  }, {
    id: "json5",
    name: "JSON5",
    import: () => e.A(68858)
  }, {
    id: "jsonc",
    name: "JSON with Comments",
    import: () => e.A(26297)
  }, {
    id: "jsonl",
    name: "JSON Lines",
    import: () => e.A(49047)
  }, {
    id: "jsonnet",
    name: "Jsonnet",
    import: () => e.A(46472)
  }, {
    id: "jssm",
    name: "JSSM",
    aliases: ["fsl"],
    import: () => e.A(60934)
  }, {
    id: "jsx",
    name: "JSX",
    import: () => e.A(48323)
  }, {
    id: "julia",
    name: "Julia",
    aliases: ["jl"],
    import: () => e.A(57663)
  }, {
    id: "just",
    name: "Just",
    aliases: ["justfile"],
    import: () => e.A(90449)
  }, {
    id: "kdl",
    name: "KDL",
    import: () => e.A(42301)
  }, {
    id: "kotlin",
    name: "Kotlin",
    aliases: ["kt", "kts"],
    import: () => e.A(62610)
  }, {
    id: "kusto",
    name: "Kusto",
    aliases: ["kql"],
    import: () => e.A(17722)
  }, {
    id: "latex",
    name: "LaTeX",
    import: () => e.A(1757)
  }, {
    id: "lean",
    name: "Lean 4",
    aliases: ["lean4"],
    import: () => e.A(70173)
  }, {
    id: "less",
    name: "Less",
    import: () => e.A(37340)
  }, {
    id: "liquid",
    name: "Liquid",
    import: () => e.A(90136)
  }, {
    id: "llvm",
    name: "LLVM IR",
    import: () => e.A(80334)
  }, {
    id: "log",
    name: "Log file",
    import: () => e.A(25048)
  }, {
    id: "logo",
    name: "Logo",
    import: () => e.A(94839)
  }, {
    id: "lua",
    name: "Lua",
    import: () => e.A(65442)
  }, {
    id: "luau",
    name: "Luau",
    import: () => e.A(19725)
  }, {
    id: "make",
    name: "Makefile",
    aliases: ["makefile"],
    import: () => e.A(11237)
  }, {
    id: "markdown",
    name: "Markdown",
    aliases: ["md"],
    import: () => e.A(84003)
  }, {
    id: "marko",
    name: "Marko",
    import: () => e.A(1375)
  }, {
    id: "matlab",
    name: "MATLAB",
    import: () => e.A(30266)
  }, {
    id: "mdc",
    name: "MDC",
    import: () => e.A(41725)
  }, {
    id: "mdx",
    name: "MDX",
    import: () => e.A(83708)
  }, {
    id: "mermaid",
    name: "Mermaid",
    aliases: ["mmd"],
    import: () => e.A(79828)
  }, {
    id: "mipsasm",
    name: "MIPS Assembly",
    aliases: ["mips"],
    import: () => e.A(10091)
  }, {
    id: "mojo",
    name: "Mojo",
    import: () => e.A(72412)
  }, {
    id: "moonbit",
    name: "MoonBit",
    aliases: ["mbt", "mbti"],
    import: () => e.A(85657)
  }, {
    id: "move",
    name: "Move",
    import: () => e.A(10458)
  }, {
    id: "narrat",
    name: "Narrat Language",
    aliases: ["nar"],
    import: () => e.A(98910)
  }, {
    id: "nextflow",
    name: "Nextflow",
    aliases: ["nf"],
    import: () => e.A(48988)
  }, {
    id: "nextflow-groovy",
    name: "Nextflow Groovy",
    import: () => e.A(80702)
  }, {
    id: "nginx",
    name: "Nginx",
    import: () => e.A(77750)
  }, {
    id: "nim",
    name: "Nim",
    import: () => e.A(16304)
  }, {
    id: "nix",
    name: "Nix",
    import: () => e.A(16848)
  }, {
    id: "nsis",
    name: "NSIS",
    import: () => e.A(22929)
  }, {
    id: "nushell",
    name: "nushell",
    aliases: ["nu"],
    import: () => e.A(10268)
  }, {
    id: "objective-c",
    name: "Objective-C",
    aliases: ["objc"],
    import: () => e.A(55997)
  }, {
    id: "objective-cpp",
    name: "Objective-C++",
    import: () => e.A(7059)
  }, {
    id: "ocaml",
    name: "OCaml",
    import: () => e.A(59205)
  }, {
    id: "odin",
    name: "Odin",
    import: () => e.A(5777)
  }, {
    id: "openscad",
    name: "OpenSCAD",
    aliases: ["scad"],
    import: () => e.A(22928)
  }, {
    id: "org",
    name: "Org Markup",
    import: () => e.A(92463)
  }, {
    id: "pascal",
    name: "Pascal",
    import: () => e.A(77225)
  }, {
    id: "perl",
    name: "Perl",
    import: () => e.A(80363)
  }, {
    id: "php",
    name: "PHP",
    import: () => e.A(67474)
  }, {
    id: "pkl",
    name: "Pkl",
    import: () => e.A(81732)
  }, {
    id: "plsql",
    name: "PL/SQL",
    import: () => e.A(55723)
  }, {
    id: "po",
    name: "Gettext PO",
    aliases: ["pot", "potx"],
    import: () => e.A(62307)
  }, {
    id: "polar",
    name: "Polar",
    import: () => e.A(90741)
  }, {
    id: "postcss",
    name: "PostCSS",
    import: () => e.A(29325)
  }, {
    id: "powerquery",
    name: "PowerQuery",
    import: () => e.A(21279)
  }, {
    id: "powershell",
    name: "PowerShell",
    aliases: ["ps", "ps1", "pwsh"],
    import: () => e.A(91906)
  }, {
    id: "prisma",
    name: "Prisma",
    import: () => e.A(71651)
  }, {
    id: "prolog",
    name: "Prolog",
    import: () => e.A(56314)
  }, {
    id: "proto",
    name: "Protocol Buffer 3",
    aliases: ["protobuf"],
    import: () => e.A(30528)
  }, {
    id: "pug",
    name: "Pug",
    aliases: ["jade"],
    import: () => e.A(85352)
  }, {
    id: "puppet",
    name: "Puppet",
    import: () => e.A(32682)
  }, {
    id: "purescript",
    name: "PureScript",
    import: () => e.A(38398)
  }, {
    id: "python",
    name: "Python",
    aliases: ["py"],
    import: () => e.A(65055)
  }, {
    id: "qml",
    name: "QML",
    import: () => e.A(69817)
  }, {
    id: "qmldir",
    name: "QML Directory",
    import: () => e.A(91250)
  }, {
    id: "qss",
    name: "Qt Style Sheets",
    import: () => e.A(58552)
  }, {
    id: "r",
    name: "R",
    import: () => e.A(1032)
  }, {
    id: "racket",
    name: "Racket",
    import: () => e.A(8818)
  }, {
    id: "raku",
    name: "Raku",
    aliases: ["perl6"],
    import: () => e.A(77960)
  }, {
    id: "razor",
    name: "ASP.NET Razor",
    import: () => e.A(48508)
  }, {
    id: "rbs",
    name: "RBS",
    aliases: ["ruby-signature"],
    import: () => e.A(95367)
  }, {
    id: "reg",
    name: "Windows Registry Script",
    import: () => e.A(6984)
  }, {
    id: "regexp",
    name: "RegExp",
    aliases: ["regex"],
    import: () => e.A(96426)
  }, {
    id: "rel",
    name: "Rel",
    import: () => e.A(17317)
  }, {
    id: "riscv",
    name: "RISC-V",
    import: () => e.A(30374)
  }, {
    id: "ron",
    name: "RON",
    import: () => e.A(26483)
  }, {
    id: "rosmsg",
    name: "ROS Interface",
    import: () => e.A(85493)
  }, {
    id: "rst",
    name: "reStructuredText",
    import: () => e.A(43319)
  }, {
    id: "ruby",
    name: "Ruby",
    aliases: ["rb"],
    import: () => e.A(91844)
  }, {
    id: "rust",
    name: "Rust",
    aliases: ["rs"],
    import: () => e.A(30262)
  }, {
    id: "sas",
    name: "SAS",
    import: () => e.A(41718)
  }, {
    id: "sass",
    name: "Sass",
    import: () => e.A(64800)
  }, {
    id: "scala",
    name: "Scala",
    import: () => e.A(28906)
  }, {
    id: "scheme",
    name: "Scheme",
    import: () => e.A(1483)
  }, {
    id: "scss",
    name: "SCSS",
    import: () => e.A(80962)
  }, {
    id: "sdbl",
    name: "1C (Query)",
    aliases: ["1c-query"],
    import: () => e.A(58032)
  }, {
    id: "shaderlab",
    name: "ShaderLab",
    aliases: ["shader"],
    import: () => e.A(4117)
  }, {
    id: "shellscript",
    name: "Shell",
    aliases: ["bash", "sh", "shell", "zsh"],
    import: () => e.A(29773)
  }, {
    id: "shellsession",
    name: "Shell Session",
    aliases: ["console"],
    import: () => e.A(50280)
  }, {
    id: "smalltalk",
    name: "GNU Smalltalk",
    import: () => e.A(16035)
  }, {
    id: "smithy",
    name: "Smithy",
    import: () => e.A(46329)
  }, {
    id: "solidity",
    name: "Solidity",
    import: () => e.A(27785)
  }, {
    id: "soy",
    name: "Closure Templates",
    aliases: ["closure-templates"],
    import: () => e.A(33667)
  }, {
    id: "sparql",
    name: "SPARQL",
    import: () => e.A(36287)
  }, {
    id: "splunk",
    name: "Splunk Query Language",
    aliases: ["spl"],
    import: () => e.A(18329)
  }, {
    id: "sql",
    name: "SQL",
    import: () => e.A(27768)
  }, {
    id: "ssh-config",
    name: "SSH Config",
    import: () => e.A(30654)
  }, {
    id: "stata",
    name: "Stata",
    import: () => e.A(10112)
  }, {
    id: "stylus",
    name: "Stylus",
    aliases: ["styl"],
    import: () => e.A(51049)
  }, {
    id: "surrealql",
    name: "SurrealQL",
    aliases: ["surql"],
    import: () => e.A(6186)
  }, {
    id: "svelte",
    name: "Svelte",
    import: () => e.A(614)
  }, {
    id: "swift",
    name: "Swift",
    import: () => e.A(92392)
  }, {
    id: "system-verilog",
    name: "SystemVerilog",
    import: () => e.A(23570)
  }, {
    id: "systemd",
    name: "Systemd Units",
    import: () => e.A(2693)
  }, {
    id: "talonscript",
    name: "TalonScript",
    aliases: ["talon"],
    import: () => e.A(19965)
  }, {
    id: "tasl",
    name: "Tasl",
    import: () => e.A(38758)
  }, {
    id: "tcl",
    name: "Tcl",
    import: () => e.A(46686)
  }, {
    id: "templ",
    name: "Templ",
    import: () => e.A(22103)
  }, {
    id: "terraform",
    name: "Terraform",
    aliases: ["tf", "tfvars"],
    import: () => e.A(95061)
  }, {
    id: "tex",
    name: "TeX",
    import: () => e.A(40033)
  }, {
    id: "toml",
    name: "TOML",
    import: () => e.A(58865)
  }, {
    id: "ts-tags",
    name: "TypeScript with Tags",
    aliases: ["lit"],
    import: () => e.A(91724)
  }, {
    id: "tsv",
    name: "TSV",
    import: () => e.A(81357)
  }, {
    id: "tsx",
    name: "TSX",
    import: () => e.A(10791)
  }, {
    id: "turtle",
    name: "Turtle",
    import: () => e.A(25971)
  }, {
    id: "twig",
    name: "Twig",
    import: () => e.A(97019)
  }, {
    id: "typescript",
    name: "TypeScript",
    aliases: ["ts", "cts", "mts"],
    import: () => e.A(47596)
  }, {
    id: "typespec",
    name: "TypeSpec",
    aliases: ["tsp"],
    import: () => e.A(77590)
  }, {
    id: "typst",
    name: "Typst",
    aliases: ["typ"],
    import: () => e.A(7554)
  }, {
    id: "v",
    name: "V",
    import: () => e.A(82492)
  }, {
    id: "vala",
    name: "Vala",
    import: () => e.A(43848)
  }, {
    id: "vb",
    name: "Visual Basic",
    import: () => e.A(20214)
  }, {
    id: "verilog",
    name: "Verilog",
    import: () => e.A(46589)
  }, {
    id: "vhdl",
    name: "VHDL",
    import: () => e.A(25516)
  }, {
    id: "viml",
    name: "Vim Script",
    aliases: ["vim", "vimscript"],
    import: () => e.A(66208)
  }, {
    id: "vue",
    name: "Vue",
    import: () => e.A(89715)
  }, {
    id: "vue-html",
    name: "Vue HTML",
    import: () => e.A(31211)
  }, {
    id: "vue-vine",
    name: "Vue Vine",
    import: () => e.A(74841)
  }, {
    id: "vyper",
    name: "Vyper",
    aliases: ["vy"],
    import: () => e.A(36995)
  }, {
    id: "wasm",
    name: "WebAssembly",
    import: () => e.A(4426)
  }, {
    id: "wenyan",
    name: "Wenyan",
    aliases: ["文言"],
    import: () => e.A(61448)
  }, {
    id: "wgsl",
    name: "WGSL",
    import: () => e.A(1834)
  }, {
    id: "wikitext",
    name: "Wikitext",
    aliases: ["mediawiki", "wiki"],
    import: () => e.A(60736)
  }, {
    id: "wit",
    name: "WebAssembly Interface Types",
    import: () => e.A(77102)
  }, {
    id: "wolfram",
    name: "Wolfram",
    aliases: ["wl"],
    import: () => e.A(15200)
  }, {
    id: "xml",
    name: "XML",
    import: () => e.A(74216)
  }, {
    id: "xsl",
    name: "XSL",
    import: () => e.A(92580)
  }, {
    id: "yaml",
    name: "YAML",
    aliases: ["yml"],
    import: () => e.A(62783)
  }, {
    id: "zenscript",
    name: "ZenScript",
    import: () => e.A(60707)
  }, {
    id: "zig",
    name: "Zig",
    import: () => e.A(44815)
  }],
  tD = Object.fromEntries(tO.map(e => [e.id, e.import])),
  t$ = Object.fromEntries(tO.flatMap(e => e.aliases?.map(t => [t, e.import]) || [])),
  tB = {
    ...tD,
    ...t$
  };
async function tU(e) {
  if (tI()) throw Error(`resolveLanguage("${e}") cannot be called from a worker context. Languages must be pre-resolved on the main thread and passed to the worker via the resolvedLanguages parameter.`);
  let t = tT.get(e);
  if (null != t) return t;
  try {
    let t = tR.get(e);
    if (null == t && Object.prototype.hasOwnProperty.call(tB, e) && (t = tB[e]), null == t) throw Error(`resolveLanguage: "${e}" not found in bundled or custom languages`);
    let n = t().then(({
      default: t
    }) => {
      let n = {
        name: e,
        data: t
      };
      return t_.has(e) || t_.set(e, n), n;
    });
    return tT.set(e, n), await n;
  } finally {
    tT.delete(e);
  }
}
function tz(e) {
  return t_.get(e) ?? tU(e);
}
function tH(e) {
  return null !== e && "object" == typeof e && "default" in e ? e.default : e;
}
var tF = class extends Error {
    constructor(e) {
      super(`Theme "${e}" is already registered`), this.name = "DuplicateThemeError";
    }
  },
  tj = class extends Error {
    constructor(e) {
      super(`No loader registered for theme "${e}"`), this.name = "UnregisteredThemeError";
    }
  },
  tG = class extends Error {
    constructor(e) {
      super(`Theme "${e}" has not been resolved`), this.name = "UnresolvedThemeError";
    }
  };
let tW = function () {
    let e = new Map(),
      t = new Map(),
      n = new Map(),
      r = 0;
    function i(i) {
      let a = t.get(i);
      if (void 0 !== a) return Promise.resolve(a);
      let o = n.get(i);
      if (void 0 !== o) return o;
      let s = e.get(i);
      if (void 0 === s) return Promise.reject(new tj(i));
      let l = r,
        d = s().then(e => {
          let a = tH(e);
          return l === r && t.set(i, a), n.get(i) === d && n.delete(i), a;
        }).catch(e => {
          throw n.get(i) === d && n.delete(i), e;
        });
      return n.set(i, d), d;
    }
    function a(e, n) {
      t.set(e, n);
    }
    return {
      clearResolvedThemes: function () {
        r++, t.clear(), n.clear();
      },
      getResolvedOrResolveTheme: function (e) {
        let n = t.get(e);
        return void 0 !== n ? n : i(e);
      },
      getResolvedTheme: function (e) {
        return t.get(e);
      },
      getResolvedThemes: function (e) {
        let n = [];
        for (let r of e) {
          let e = t.get(r);
          if (void 0 === e) throw new tG(r);
          n.push(e);
        }
        return n;
      },
      hasRegisteredTheme: function (t) {
        return e.has(t);
      },
      hasResolvedTheme: function (e) {
        return t.has(e);
      },
      hasResolvedThemes: function (e) {
        for (let n of e) if (!t.has(n)) return !1;
        return !0;
      },
      registerTheme: function (t, n) {
        if (e.has(t)) throw new tF(t);
        e.set(t, n);
      },
      registerThemeIfAbsent: function (t, n) {
        return !e.has(t) && (e.set(t, n), !0);
      },
      resolveTheme: i,
      resolveThemes: function (e) {
        return Promise.all(e.map(e => i(e)));
      },
      seedResolvedTheme: a,
      seedResolvedThemes: function (e) {
        for (let [t, n] of e) a(t, n);
      }
    };
  }(),
  tV = new Set();
function tq(e, t) {
  for (let n of e = Array.isArray(e) ? e : [e]) {
    let e;
    if ("string" == typeof n) {
      if (null == (e = tW.getResolvedTheme(n))) throw Error(`loadResolvedThemes: ${n} is not resolved, you must resolve it before calling loadResolvedThemes`);
    } else e = n, n = n.name, null == tW.getResolvedTheme(n) && tW.seedResolvedTheme(n, e);
    tV.has(n) || (tV.add(n), t.loadThemeSync(e));
  }
}
function tX(e) {
  var t, n, r;
  let i = [],
    a = new Set();
  for (let o of tK(n = t = e.themes) || "string" == typeof (r = n).name && "function" == typeof r.load ? [t] : t) for (let e of tK(o) ? o.getThemes() : [o]) {
    if (a.has(e.name)) throw Error(`Theme collection already contains theme "${e.name}"`);
    a.add(e.name), i.push(e);
  }
  let o = Object.freeze([...i]),
    s = Object.freeze(o.filter(e => "light" === e.colorScheme)),
    l = Object.freeze(o.filter(e => "dark" === e.colorScheme)),
    d = new Map(o.map(e => [e.name, e])),
    u = Object.freeze(o.map(e => e.name)),
    h = Object.freeze(s.map(e => e.name)),
    c = Object.freeze(l.map(e => e.name));
  function f(e) {
    if (null == e) return o;
    let {
      colorScheme: t,
      collection: n
    } = e;
    return null == n ? "light" === t ? s : "dark" === t ? l : o : o.filter(e => e.collection === n && (null == t || e.colorScheme === t));
  }
  return {
    getTheme: e => d.get(e),
    getThemes: e => f(e),
    getThemeNames: e => e?.collection == null ? e?.colorScheme === "light" ? h : e?.colorScheme === "dark" ? c : u : f(e).map(e => e.name),
    hasTheme: e => d.has(e),
    orderBy: e => tX({
      themes: o.map((e, t) => ({
        descriptor: e,
        index: t
      })).sort((t, n) => {
        let r = e(t.descriptor, n.descriptor);
        return 0 !== r ? r : t.index - n.index;
      }).map(e => e.descriptor)
    }),
    pick(e) {
      let t = [],
        n = new Set();
      for (let r of e) {
        if (n.has(r)) throw Error(`Theme collection pick already includes theme "${r}"`);
        n.add(r);
        let e = d.get(r);
        if (null == e) throw Error(`Theme collection does not contain theme "${r}"`);
        t.push(e);
      }
      return tX({
        themes: t
      });
    },
    registerInto(e) {
      for (let t of o) e.registerThemeIfAbsent(t.name, t.load);
    }
  };
}
function tK(e) {
  return "function" == typeof e.getThemes;
}
var tQ = class extends Error {
  constructor(e) {
    super(e), this.name = "ShikiError";
  }
};
function tY(e, ...t) {
  return t.forEach(t => {
    for (let n in t) e[n] = t[n];
  }), e;
}
var tJ = /\$(\d+)|\${(\d+):\/(downcase|upcase)}/g,
  tZ = class {
    static hasCaptures(e) {
      return null !== e && (tJ.lastIndex = 0, tJ.test(e));
    }
    static replaceCaptures(e, t, n) {
      return e.replace(tJ, (e, r, i, a) => {
        let o = n[parseInt(r || i, 10)];
        if (!o) return e;
        {
          let e = t.substring(o.start, o.end);
          for (; "." === e[0];) e = e.substring(1);
          switch (a) {
            case "downcase":
              return e.toLowerCase();
            case "upcase":
              return e.toUpperCase();
            default:
              return e;
          }
        }
      });
    }
  };
function t0(e, t) {
  if (null === e && null === t) return 0;
  if (!e) return -1;
  if (!t) return 1;
  let n = e.length,
    r = t.length;
  if (n === r) {
    for (let r = 0; r < n; r++) {
      var i, a;
      let n = (i = e[r], i < (a = t[r]) ? -1 : +(i > a));
      if (0 !== n) return n;
    }
    return 0;
  }
  return n - r;
}
function t1(e) {
  return !!(/^#[0-9a-f]{6}$/i.test(e) || /^#[0-9a-f]{8}$/i.test(e) || /^#[0-9a-f]{3}$/i.test(e) || /^#[0-9a-f]{4}$/i.test(e));
}
function t2(e) {
  return e.replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&");
}
var t8 = class {
    constructor(e) {
      this.fn = e;
    }
    cache = new Map();
    get(e) {
      if (this.cache.has(e)) return this.cache.get(e);
      let t = this.fn(e);
      return this.cache.set(e, t), t;
    }
  },
  t5 = class {
    constructor(e, t, n) {
      this._colorMap = e, this._defaults = t, this._root = n;
    }
    static createFromRawTheme(e, t) {
      return this.createFromParsedTheme(function (e) {
        if (!e || !e.settings || !Array.isArray(e.settings)) return [];
        let t = e.settings,
          n = [],
          r = 0;
        for (let e = 0, i = t.length; e < i; e++) {
          let i,
            a = t[e];
          if (!a.settings) continue;
          if ("string" == typeof a.scope) {
            let e = a.scope;
            i = (e = (e = e.replace(/^[,]+/, "")).replace(/[,]+$/, "")).split(",");
          } else i = Array.isArray(a.scope) ? a.scope : [""];
          let o = -1;
          if ("string" == typeof a.settings.fontStyle) {
            o = 0;
            let e = a.settings.fontStyle.split(" ");
            for (let t = 0, n = e.length; t < n; t++) switch (e[t]) {
              case "italic":
                o |= 1;
                break;
              case "bold":
                o |= 2;
                break;
              case "underline":
                o |= 4;
                break;
              case "strikethrough":
                o |= 8;
            }
          }
          let s = null;
          "string" == typeof a.settings.foreground && t1(a.settings.foreground) && (s = a.settings.foreground);
          let l = null;
          "string" == typeof a.settings.background && t1(a.settings.background) && (l = a.settings.background);
          for (let t = 0, a = i.length; t < a; t++) {
            let a = i[t].trim().split(" "),
              d = a[a.length - 1],
              u = null;
            a.length > 1 && (u = a.slice(0, a.length - 1)).reverse(), n[r++] = new t3(d, u, e, o, s, l);
          }
        }
        return n;
      }(e), t);
    }
    static createFromParsedTheme(e, t) {
      return function (e, t) {
        e.sort((e, t) => {
          var n, r;
          let i = (n = e.scope, n < (r = t.scope) ? -1 : +(n > r));
          return 0 !== i || 0 !== (i = t0(e.parentScopes, t.parentScopes)) ? i : e.index - t.index;
        });
        let n = 0,
          r = "#000000",
          i = "#ffffff";
        for (; e.length >= 1 && "" === e[0].scope;) {
          let t = e.shift();
          -1 !== t.fontStyle && (n = t.fontStyle), null !== t.foreground && (r = t.foreground), null !== t.background && (i = t.background);
        }
        let a = new t9(t),
          o = new t7(n, a.getId(r), a.getId(i)),
          s = new nn(new nt(0, null, -1, 0, 0), []);
        for (let t = 0, n = e.length; t < n; t++) {
          let n = e[t];
          s.insert(0, n.scope, n.parentScopes, n.fontStyle, a.getId(n.foreground), a.getId(n.background));
        }
        return new t5(a, o, s);
      }(e, t);
    }
    _cachedMatchRoot = new t8(e => this._root.match(e));
    getColorMap() {
      return this._colorMap.getColorMap();
    }
    getDefaults() {
      return this._defaults;
    }
    match(e) {
      if (null === e) return this._defaults;
      let t = e.scopeName,
        n = this._cachedMatchRoot.get(t).find(t => function (e, t) {
          if (0 === t.length) return !0;
          for (let i = 0; i < t.length; i++) {
            var n, r;
            let a = t[i],
              o = !1;
            if (">" === a) {
              if (i === t.length - 1) return !1;
              a = t[++i], o = !0;
            }
            for (; e && (n = e.scopeName, !((r = a) === n || n.startsWith(r) && "." === n[r.length]));) {
              if (o) return !1;
              e = e.parent;
            }
            if (!e) return !1;
            e = e.parent;
          }
          return !0;
        }(e.parent, t.parentScopes));
      return n ? new t7(n.fontStyle, n.foreground, n.background) : null;
    }
  },
  t6 = class e {
    constructor(e, t) {
      this.parent = e, this.scopeName = t;
    }
    static push(t, n) {
      for (let r of n) t = new e(t, r);
      return t;
    }
    static from(...t) {
      let n = null;
      for (let r = 0; r < t.length; r++) n = new e(n, t[r]);
      return n;
    }
    push(t) {
      return new e(this, t);
    }
    getSegments() {
      let e = this,
        t = [];
      for (; e;) t.push(e.scopeName), e = e.parent;
      return t.reverse(), t;
    }
    toString() {
      return this.getSegments().join(" ");
    }
    extends(e) {
      return this === e || null !== this.parent && this.parent.extends(e);
    }
    getExtensionIfDefined(e) {
      let t = [],
        n = this;
      for (; n && n !== e;) t.push(n.scopeName), n = n.parent;
      return n === e ? t.reverse() : void 0;
    }
  },
  t7 = class {
    constructor(e, t, n) {
      this.fontStyle = e, this.foregroundId = t, this.backgroundId = n;
    }
  },
  t3 = class {
    constructor(e, t, n, r, i, a) {
      this.scope = e, this.parentScopes = t, this.index = n, this.fontStyle = r, this.foreground = i, this.background = a;
    }
  },
  t4 = ((h = t4 || {})[h.NotSet = -1] = "NotSet", h[h.None = 0] = "None", h[h.Italic = 1] = "Italic", h[h.Bold = 2] = "Bold", h[h.Underline = 4] = "Underline", h[h.Strikethrough = 8] = "Strikethrough", h),
  t9 = class {
    _isFrozen;
    _lastColorId;
    _id2color;
    _color2id;
    constructor(e) {
      if (this._lastColorId = 0, this._id2color = [], this._color2id = Object.create(null), Array.isArray(e)) {
        this._isFrozen = !0;
        for (let t = 0, n = e.length; t < n; t++) this._color2id[e[t]] = t, this._id2color[t] = e[t];
      } else this._isFrozen = !1;
    }
    getId(e) {
      if (null === e) return 0;
      e = e.toUpperCase();
      let t = this._color2id[e];
      if (t) return t;
      if (this._isFrozen) throw Error(`Missing color in color map - ${e}`);
      return t = ++this._lastColorId, this._color2id[e] = t, this._id2color[t] = e, t;
    }
    getColorMap() {
      return this._id2color.slice(0);
    }
  },
  ne = Object.freeze([]),
  nt = class e {
    scopeDepth;
    parentScopes;
    fontStyle;
    foreground;
    background;
    constructor(e, t, n, r, i) {
      this.scopeDepth = e, this.parentScopes = t || ne, this.fontStyle = n, this.foreground = r, this.background = i;
    }
    clone() {
      return new e(this.scopeDepth, this.parentScopes, this.fontStyle, this.foreground, this.background);
    }
    static cloneArr(e) {
      let t = [];
      for (let n = 0, r = e.length; n < r; n++) t[n] = e[n].clone();
      return t;
    }
    acceptOverwrite(e, t, n, r) {
      this.scopeDepth > e ? console.log("how did this happen?") : this.scopeDepth = e, -1 !== t && (this.fontStyle = t), 0 !== n && (this.foreground = n), 0 !== r && (this.background = r);
    }
  },
  nn = class e {
    constructor(e, t = [], n = {}) {
      this._mainRule = e, this._children = n, this._rulesWithParentScopes = t;
    }
    _rulesWithParentScopes;
    static _cmpBySpecificity(e, t) {
      if (e.scopeDepth !== t.scopeDepth) return t.scopeDepth - e.scopeDepth;
      let n = 0,
        r = 0;
      for (; ">" === e.parentScopes[n] && n++, ">" === t.parentScopes[r] && r++, !(n >= e.parentScopes.length) && !(r >= t.parentScopes.length);) {
        let i = t.parentScopes[r].length - e.parentScopes[n].length;
        if (0 !== i) return i;
        n++, r++;
      }
      return t.parentScopes.length - e.parentScopes.length;
    }
    match(t) {
      if ("" !== t) {
        let e,
          n,
          r = t.indexOf(".");
        if (-1 === r ? (e = t, n = "") : (e = t.substring(0, r), n = t.substring(r + 1)), this._children.hasOwnProperty(e)) return this._children[e].match(n);
      }
      let n = this._rulesWithParentScopes.concat(this._mainRule);
      return n.sort(e._cmpBySpecificity), n;
    }
    insert(t, n, r, i, a, o) {
      let s, l, d;
      if ("" === n) return void this._doInsertHere(t, r, i, a, o);
      let u = n.indexOf(".");
      -1 === u ? (s = n, l = "") : (s = n.substring(0, u), l = n.substring(u + 1)), this._children.hasOwnProperty(s) ? d = this._children[s] : (d = new e(this._mainRule.clone(), nt.cloneArr(this._rulesWithParentScopes)), this._children[s] = d), d.insert(t + 1, l, r, i, a, o);
    }
    _doInsertHere(e, t, n, r, i) {
      if (null === t) return void this._mainRule.acceptOverwrite(e, n, r, i);
      for (let a = 0, o = this._rulesWithParentScopes.length; a < o; a++) {
        let o = this._rulesWithParentScopes[a];
        if (0 === t0(o.parentScopes, t)) return void o.acceptOverwrite(e, n, r, i);
      }
      -1 === n && (n = this._mainRule.fontStyle), 0 === r && (r = this._mainRule.foreground), 0 === i && (i = this._mainRule.background), this._rulesWithParentScopes.push(new nt(e, t, n, r, i));
    }
  },
  nr = class e {
    static toBinaryStr(e) {
      return e.toString(2).padStart(32, "0");
    }
    static print(t) {
      let n = e.getLanguageId(t),
        r = e.getTokenType(t),
        i = e.getFontStyle(t);
      console.log({
        languageId: n,
        tokenType: r,
        fontStyle: i,
        foreground: e.getForeground(t),
        background: e.getBackground(t)
      });
    }
    static getLanguageId(e) {
      return (255 & e) >>> 0;
    }
    static getTokenType(e) {
      return (768 & e) >>> 8;
    }
    static containsBalancedBrackets(e) {
      return (1024 & e) != 0;
    }
    static getFontStyle(e) {
      return (30720 & e) >>> 11;
    }
    static getForeground(e) {
      return (0xff8000 & e) >>> 15;
    }
    static getBackground(e) {
      return (0xff000000 & e) >>> 24;
    }
    static set(t, n, r, i, a, o, s) {
      let l = e.getLanguageId(t),
        d = e.getTokenType(t),
        u = +!!e.containsBalancedBrackets(t),
        h = e.getFontStyle(t),
        c = e.getForeground(t),
        f = e.getBackground(t);
      return 0 !== n && (l = n), 8 !== r && (d = r), null !== i && (u = +!!i), -1 !== a && (h = a), 0 !== o && (c = o), 0 !== s && (f = s), (l | d << 8 | u << 10 | h << 11 | c << 15 | f << 24) >>> 0;
    }
  };
function ni(e, t) {
  var n;
  let r,
    i,
    a = [],
    o = (n = e, i = (r = /([LR]:|[\w\.:][\w\.:\-]*|[\,\|\-\(\)])/g).exec(n), {
      next: () => {
        if (!i) return null;
        let e = i[0];
        return i = r.exec(n), e;
      }
    }),
    s = o.next();
  for (; null !== s;) {
    let e = 0;
    if (2 === s.length && ":" === s.charAt(1)) {
      switch (s.charAt(0)) {
        case "R":
          e = 1;
          break;
        case "L":
          e = -1;
          break;
        default:
          console.log(`Unknown priority ${s} in scope selector`);
      }
      s = o.next();
    }
    let t = d();
    if (a.push({
      matcher: t,
      priority: e
    }), "," !== s) break;
    s = o.next();
  }
  return a;
  function l() {
    if ("-" === s) {
      s = o.next();
      let e = l();
      return t => !!e && !e(t);
    }
    if ("(" === s) {
      s = o.next();
      let e = function () {
        let e = [],
          t = d();
        for (; t && (e.push(t), "|" === s || "," === s);) {
          do s = o.next(); while ("|" === s || "," === s);
          t = d();
        }
        return t => e.some(e => e(t));
      }();
      return ")" === s && (s = o.next()), e;
    }
    if (na(s)) {
      let e = [];
      do e.push(s), s = o.next(); while (na(s));
      return n => t(e, n);
    }
    return null;
  }
  function d() {
    let e = [],
      t = l();
    for (; t;) e.push(t), t = l();
    return t => e.every(e => e(t));
  }
}
function na(e) {
  return !!e && !!e.match(/[\w\.:]+/);
}
function ns(e) {
  "function" == typeof e.dispose && e.dispose();
}
var nl = class {
    constructor(e) {
      this.scopeName = e;
    }
    toKey() {
      return this.scopeName;
    }
  },
  nd = class {
    constructor(e, t) {
      this.scopeName = e, this.ruleName = t;
    }
    toKey() {
      return `${this.scopeName}#${this.ruleName}`;
    }
  },
  nu = class {
    _references = [];
    _seenReferenceKeys = new Set();
    get references() {
      return this._references;
    }
    visitedRule = new Set();
    add(e) {
      let t = e.toKey();
      this._seenReferenceKeys.has(t) || (this._seenReferenceKeys.add(t), this._references.push(e));
    }
  },
  nh = class {
    constructor(e, t) {
      this.repo = e, this.initialScopeName = t, this.seenFullScopeRequests.add(this.initialScopeName), this.Q = [new nl(this.initialScopeName)];
    }
    seenFullScopeRequests = new Set();
    seenPartialScopeRequests = new Set();
    Q;
    processQueue() {
      let e = this.Q;
      this.Q = [];
      let t = new nu();
      for (let n of e) !function (e, t, n, r) {
        let i = n.lookup(e.scopeName);
        if (!i) {
          if (e.scopeName === t) throw Error(`No grammar provided for <${t}>`);
          return;
        }
        let a = n.lookup(t);
        e instanceof nl ? nf({
          baseGrammar: a,
          selfGrammar: i
        }, r) : nc(e.ruleName, {
          baseGrammar: a,
          selfGrammar: i,
          repository: i.repository
        }, r);
        let o = n.injections(e.scopeName);
        if (o) for (let e of o) r.add(new nl(e));
      }(n, this.initialScopeName, this.repo, t);
      for (let e of t.references) if (e instanceof nl) {
        if (this.seenFullScopeRequests.has(e.scopeName)) continue;
        this.seenFullScopeRequests.add(e.scopeName), this.Q.push(e);
      } else {
        if (this.seenFullScopeRequests.has(e.scopeName) || this.seenPartialScopeRequests.has(e.toKey())) continue;
        this.seenPartialScopeRequests.add(e.toKey()), this.Q.push(e);
      }
    }
  };
function nc(e, t, n) {
  t.repository && t.repository[e] && np([t.repository[e]], t, n);
}
function nf(e, t) {
  e.selfGrammar.patterns && Array.isArray(e.selfGrammar.patterns) && np(e.selfGrammar.patterns, {
    ...e,
    repository: e.selfGrammar.repository
  }, t), e.selfGrammar.injections && np(Object.values(e.selfGrammar.injections), {
    ...e,
    repository: e.selfGrammar.repository
  }, t);
}
function np(e, t, n) {
  for (let r of e) {
    if (n.visitedRule.has(r)) continue;
    n.visitedRule.add(r);
    let e = r.repository ? tY({}, t.repository, r.repository) : t.repository;
    Array.isArray(r.patterns) && np(r.patterns, {
      ...t,
      repository: e
    }, n);
    let i = r.include;
    if (!i) continue;
    let a = nw(i);
    switch (a.kind) {
      case 0:
        nf({
          ...t,
          selfGrammar: t.baseGrammar
        }, n);
        break;
      case 1:
        nf(t, n);
        break;
      case 2:
        nc(a.ruleName, {
          ...t,
          repository: e
        }, n);
        break;
      case 3:
      case 4:
        let o = a.scopeName === t.selfGrammar.scopeName ? t.selfGrammar : a.scopeName === t.baseGrammar.scopeName ? t.baseGrammar : void 0;
        if (o) {
          let r = {
            baseGrammar: t.baseGrammar,
            selfGrammar: o,
            repository: e
          };
          4 === a.kind ? nc(a.ruleName, r, n) : nf(r, n);
        } else 4 === a.kind ? n.add(new nd(a.scopeName, a.ruleName)) : n.add(new nl(a.scopeName));
    }
  }
}
var ng = class {
    kind = 0;
  },
  nm = class {
    kind = 1;
  },
  nb = class {
    constructor(e) {
      this.ruleName = e;
    }
    kind = 2;
  },
  ny = class {
    constructor(e) {
      this.scopeName = e;
    }
    kind = 3;
  },
  nv = class {
    constructor(e, t) {
      this.scopeName = e, this.ruleName = t;
    }
    kind = 4;
  };
function nw(e) {
  if ("$base" === e) return new ng();
  if ("$self" === e) return new nm();
  let t = e.indexOf("#");
  return -1 === t ? new ny(e) : 0 === t ? new nb(e.substring(1)) : new nv(e.substring(0, t), e.substring(t + 1));
}
var nk = /\\(\d+)/,
  nS = /\\(\d+)/g;
var nC = class {
    $location;
    id;
    _nameIsCapturing;
    _name;
    _contentNameIsCapturing;
    _contentName;
    constructor(e, t, n, r) {
      this.$location = e, this.id = t, this._name = n || null, this._nameIsCapturing = tZ.hasCaptures(this._name), this._contentName = r || null, this._contentNameIsCapturing = tZ.hasCaptures(this._contentName);
    }
    get debugName() {
      let e = this.$location ? `${function e(t) {
        let n = ~t.lastIndexOf("/") || ~t.lastIndexOf("\\");
        return 0 === n ? t : ~n == t.length - 1 ? e(t.substring(0, t.length - 1)) : t.substr(~n + 1);
      }(this.$location.filename)}:${this.$location.line}` : "unknown";
      return `${this.constructor.name}#${this.id} @ ${e}`;
    }
    getName(e, t) {
      return this._nameIsCapturing && null !== this._name && null !== e && null !== t ? tZ.replaceCaptures(this._name, e, t) : this._name;
    }
    getContentName(e, t) {
      return this._contentNameIsCapturing && null !== this._contentName ? tZ.replaceCaptures(this._contentName, e, t) : this._contentName;
    }
  },
  nx = class extends nC {
    retokenizeCapturedWithRuleId;
    constructor(e, t, n, r, i) {
      super(e, t, n, r), this.retokenizeCapturedWithRuleId = i;
    }
    dispose() {}
    collectPatterns(e, t) {
      throw Error("Not supported!");
    }
    compile(e, t) {
      throw Error("Not supported!");
    }
    compileAG(e, t, n, r) {
      throw Error("Not supported!");
    }
  },
  nA = class extends nC {
    _match;
    captures;
    _cachedCompiledPatterns;
    constructor(e, t, n, r, i) {
      super(e, t, n, null), this._match = new nR(r, this.id), this.captures = i, this._cachedCompiledPatterns = null;
    }
    dispose() {
      this._cachedCompiledPatterns && (this._cachedCompiledPatterns.dispose(), this._cachedCompiledPatterns = null);
    }
    get debugMatchRegExp() {
      return `${this._match.source}`;
    }
    collectPatterns(e, t) {
      t.push(this._match);
    }
    compile(e, t) {
      return this._getCachedCompiledPatterns(e).compile(e);
    }
    compileAG(e, t, n, r) {
      return this._getCachedCompiledPatterns(e).compileAG(e, n, r);
    }
    _getCachedCompiledPatterns(e) {
      return this._cachedCompiledPatterns || (this._cachedCompiledPatterns = new nM(), this.collectPatterns(e, this._cachedCompiledPatterns)), this._cachedCompiledPatterns;
    }
  },
  nE = class extends nC {
    hasMissingPatterns;
    patterns;
    _cachedCompiledPatterns;
    constructor(e, t, n, r, i) {
      super(e, t, n, r), this.patterns = i.patterns, this.hasMissingPatterns = i.hasMissingPatterns, this._cachedCompiledPatterns = null;
    }
    dispose() {
      this._cachedCompiledPatterns && (this._cachedCompiledPatterns.dispose(), this._cachedCompiledPatterns = null);
    }
    collectPatterns(e, t) {
      for (let n of this.patterns) e.getRule(n).collectPatterns(e, t);
    }
    compile(e, t) {
      return this._getCachedCompiledPatterns(e).compile(e);
    }
    compileAG(e, t, n, r) {
      return this._getCachedCompiledPatterns(e).compileAG(e, n, r);
    }
    _getCachedCompiledPatterns(e) {
      return this._cachedCompiledPatterns || (this._cachedCompiledPatterns = new nM(), this.collectPatterns(e, this._cachedCompiledPatterns)), this._cachedCompiledPatterns;
    }
  },
  nL = class extends nC {
    _begin;
    beginCaptures;
    _end;
    endHasBackReferences;
    endCaptures;
    applyEndPatternLast;
    hasMissingPatterns;
    patterns;
    _cachedCompiledPatterns;
    constructor(e, t, n, r, i, a, o, s, l, d) {
      super(e, t, n, r), this._begin = new nR(i, this.id), this.beginCaptures = a, this._end = new nR(o || "￿", -1), this.endHasBackReferences = this._end.hasBackReferences, this.endCaptures = s, this.applyEndPatternLast = l || !1, this.patterns = d.patterns, this.hasMissingPatterns = d.hasMissingPatterns, this._cachedCompiledPatterns = null;
    }
    dispose() {
      this._cachedCompiledPatterns && (this._cachedCompiledPatterns.dispose(), this._cachedCompiledPatterns = null);
    }
    get debugBeginRegExp() {
      return `${this._begin.source}`;
    }
    get debugEndRegExp() {
      return `${this._end.source}`;
    }
    getEndWithResolvedBackReferences(e, t) {
      return this._end.resolveBackReferences(e, t);
    }
    collectPatterns(e, t) {
      t.push(this._begin);
    }
    compile(e, t) {
      return this._getCachedCompiledPatterns(e, t).compile(e);
    }
    compileAG(e, t, n, r) {
      return this._getCachedCompiledPatterns(e, t).compileAG(e, n, r);
    }
    _getCachedCompiledPatterns(e, t) {
      if (!this._cachedCompiledPatterns) {
        for (let t of (this._cachedCompiledPatterns = new nM(), this.patterns)) e.getRule(t).collectPatterns(e, this._cachedCompiledPatterns);
        this.applyEndPatternLast ? this._cachedCompiledPatterns.push(this._end.hasBackReferences ? this._end.clone() : this._end) : this._cachedCompiledPatterns.unshift(this._end.hasBackReferences ? this._end.clone() : this._end);
      }
      return this._end.hasBackReferences && (this.applyEndPatternLast ? this._cachedCompiledPatterns.setSource(this._cachedCompiledPatterns.length() - 1, t) : this._cachedCompiledPatterns.setSource(0, t)), this._cachedCompiledPatterns;
    }
  },
  n_ = class extends nC {
    _begin;
    beginCaptures;
    whileCaptures;
    _while;
    whileHasBackReferences;
    hasMissingPatterns;
    patterns;
    _cachedCompiledPatterns;
    _cachedCompiledWhilePatterns;
    constructor(e, t, n, r, i, a, o, s, l) {
      super(e, t, n, r), this._begin = new nR(i, this.id), this.beginCaptures = a, this.whileCaptures = s, this._while = new nR(o, -2), this.whileHasBackReferences = this._while.hasBackReferences, this.patterns = l.patterns, this.hasMissingPatterns = l.hasMissingPatterns, this._cachedCompiledPatterns = null, this._cachedCompiledWhilePatterns = null;
    }
    dispose() {
      this._cachedCompiledPatterns && (this._cachedCompiledPatterns.dispose(), this._cachedCompiledPatterns = null), this._cachedCompiledWhilePatterns && (this._cachedCompiledWhilePatterns.dispose(), this._cachedCompiledWhilePatterns = null);
    }
    get debugBeginRegExp() {
      return `${this._begin.source}`;
    }
    get debugWhileRegExp() {
      return `${this._while.source}`;
    }
    getWhileWithResolvedBackReferences(e, t) {
      return this._while.resolveBackReferences(e, t);
    }
    collectPatterns(e, t) {
      t.push(this._begin);
    }
    compile(e, t) {
      return this._getCachedCompiledPatterns(e).compile(e);
    }
    compileAG(e, t, n, r) {
      return this._getCachedCompiledPatterns(e).compileAG(e, n, r);
    }
    _getCachedCompiledPatterns(e) {
      if (!this._cachedCompiledPatterns) for (let t of (this._cachedCompiledPatterns = new nM(), this.patterns)) e.getRule(t).collectPatterns(e, this._cachedCompiledPatterns);
      return this._cachedCompiledPatterns;
    }
    compileWhile(e, t) {
      return this._getCachedCompiledWhilePatterns(e, t).compile(e);
    }
    compileWhileAG(e, t, n, r) {
      return this._getCachedCompiledWhilePatterns(e, t).compileAG(e, n, r);
    }
    _getCachedCompiledWhilePatterns(e, t) {
      return this._cachedCompiledWhilePatterns || (this._cachedCompiledWhilePatterns = new nM(), this._cachedCompiledWhilePatterns.push(this._while.hasBackReferences ? this._while.clone() : this._while)), this._while.hasBackReferences && this._cachedCompiledWhilePatterns.setSource(0, t || "￿"), this._cachedCompiledWhilePatterns;
    }
  },
  nT = class e {
    static createCaptureRule(e, t, n, r, i) {
      return e.registerRule(e => new nx(t, e, n, r, i));
    }
    static getCompiledRuleId(t, n, r) {
      return t.id || n.registerRule(i => {
        if (t.id = i, t.match) return new nA(t.$vscodeTextmateLocation, t.id, t.name, t.match, e._compileCaptures(t.captures, n, r));
        if (void 0 === t.begin) {
          t.repository && (r = tY({}, r, t.repository));
          let i = t.patterns;
          return void 0 === i && t.include && (i = [{
            include: t.include
          }]), new nE(t.$vscodeTextmateLocation, t.id, t.name, t.contentName, e._compilePatterns(i, n, r));
        }
        return t.while ? new n_(t.$vscodeTextmateLocation, t.id, t.name, t.contentName, t.begin, e._compileCaptures(t.beginCaptures || t.captures, n, r), t.while, e._compileCaptures(t.whileCaptures || t.captures, n, r), e._compilePatterns(t.patterns, n, r)) : new nL(t.$vscodeTextmateLocation, t.id, t.name, t.contentName, t.begin, e._compileCaptures(t.beginCaptures || t.captures, n, r), t.end, e._compileCaptures(t.endCaptures || t.captures, n, r), t.applyEndPatternLast, e._compilePatterns(t.patterns, n, r));
      }), t.id;
    }
    static _compileCaptures(t, n, r) {
      let i = [];
      if (t) {
        let a = 0;
        for (let e in t) {
          if ("$vscodeTextmateLocation" === e) continue;
          let t = parseInt(e, 10);
          t > a && (a = t);
        }
        for (let e = 0; e <= a; e++) i[e] = null;
        for (let a in t) {
          if ("$vscodeTextmateLocation" === a) continue;
          let o = parseInt(a, 10),
            s = 0;
          t[a].patterns && (s = e.getCompiledRuleId(t[a], n, r)), i[o] = e.createCaptureRule(n, t[a].$vscodeTextmateLocation, t[a].name, t[a].contentName, s);
        }
      }
      return i;
    }
    static _compilePatterns(t, n, r) {
      let i = [];
      if (t) for (let a = 0, o = t.length; a < o; a++) {
        let o = t[a],
          s = -1;
        if (o.include) {
          let t = nw(o.include);
          switch (t.kind) {
            case 0:
            case 1:
              s = e.getCompiledRuleId(r[o.include], n, r);
              break;
            case 2:
              let i = r[t.ruleName];
              i && (s = e.getCompiledRuleId(i, n, r));
              break;
            case 3:
            case 4:
              let a = t.scopeName,
                l = 4 === t.kind ? t.ruleName : null,
                d = n.getExternalGrammar(a, r);
              if (d) if (l) {
                let t = d.repository[l];
                t && (s = e.getCompiledRuleId(t, n, d.repository));
              } else s = e.getCompiledRuleId(d.repository.$self, n, d.repository);
          }
        } else s = e.getCompiledRuleId(o, n, r);
        if (-1 !== s) {
          let e = n.getRule(s),
            t = !1;
          if ((e instanceof nE || e instanceof nL || e instanceof n_) && e.hasMissingPatterns && 0 === e.patterns.length && (t = !0), t) continue;
          i.push(s);
        }
      }
      return {
        patterns: i,
        hasMissingPatterns: (t ? t.length : 0) !== i.length
      };
    }
  },
  nR = class e {
    source;
    ruleId;
    hasAnchor;
    hasBackReferences;
    _anchorCache;
    constructor(e, t) {
      if (e && "string" == typeof e) {
        const t = e.length;
        let n = 0,
          r = [],
          i = !1;
        for (let a = 0; a < t; a++) if ("\\" === e.charAt(a) && a + 1 < t) {
          const t = e.charAt(a + 1);
          "z" === t ? (r.push(e.substring(n, a)), r.push("$(?!\\n)(?<!\\n)"), n = a + 2) : ("A" === t || "G" === t) && (i = !0), a++;
        }
        this.hasAnchor = i, 0 === n ? this.source = e : (r.push(e.substring(n, t)), this.source = r.join(""));
      } else this.hasAnchor = !1, this.source = e;
      this.hasAnchor ? this._anchorCache = this._buildAnchorCache() : this._anchorCache = null, this.ruleId = t, "string" == typeof this.source ? this.hasBackReferences = nk.test(this.source) : this.hasBackReferences = !1;
    }
    clone() {
      return new e(this.source, this.ruleId);
    }
    setSource(e) {
      this.source !== e && (this.source = e, this.hasAnchor && (this._anchorCache = this._buildAnchorCache()));
    }
    resolveBackReferences(e, t) {
      if ("string" != typeof this.source) throw Error("This method should only be called if the source is a string");
      let n = t.map(t => e.substring(t.start, t.end));
      return nS.lastIndex = 0, this.source.replace(nS, (e, t) => t2(n[parseInt(t, 10)] || ""));
    }
    _buildAnchorCache() {
      let e, t, n, r;
      if ("string" != typeof this.source) throw Error("This method should only be called if the source is a string");
      let i = [],
        a = [],
        o = [],
        s = [];
      for (e = 0, t = this.source.length; e < t; e++) n = this.source.charAt(e), i[e] = n, a[e] = n, o[e] = n, s[e] = n, "\\" === n && e + 1 < t && ("A" === (r = this.source.charAt(e + 1)) ? (i[e + 1] = "￿", a[e + 1] = "￿", o[e + 1] = "A", s[e + 1] = "A") : "G" === r ? (i[e + 1] = "￿", a[e + 1] = "G", o[e + 1] = "￿", s[e + 1] = "G") : (i[e + 1] = r, a[e + 1] = r, o[e + 1] = r, s[e + 1] = r), e++);
      return {
        A0_G0: i.join(""),
        A0_G1: a.join(""),
        A1_G0: o.join(""),
        A1_G1: s.join("")
      };
    }
    resolveAnchors(e, t) {
      if (!this.hasAnchor || !this._anchorCache || "string" != typeof this.source) return this.source;
      if (e) if (t) return this._anchorCache.A1_G1;else return this._anchorCache.A1_G0;
      return t ? this._anchorCache.A0_G1 : this._anchorCache.A0_G0;
    }
  },
  nM = class {
    _items;
    _hasAnchors;
    _cached;
    _anchorCache;
    constructor() {
      this._items = [], this._hasAnchors = !1, this._cached = null, this._anchorCache = {
        A0_G0: null,
        A0_G1: null,
        A1_G0: null,
        A1_G1: null
      };
    }
    dispose() {
      this._disposeCaches();
    }
    _disposeCaches() {
      this._cached && (this._cached.dispose(), this._cached = null), this._anchorCache.A0_G0 && (this._anchorCache.A0_G0.dispose(), this._anchorCache.A0_G0 = null), this._anchorCache.A0_G1 && (this._anchorCache.A0_G1.dispose(), this._anchorCache.A0_G1 = null), this._anchorCache.A1_G0 && (this._anchorCache.A1_G0.dispose(), this._anchorCache.A1_G0 = null), this._anchorCache.A1_G1 && (this._anchorCache.A1_G1.dispose(), this._anchorCache.A1_G1 = null);
    }
    push(e) {
      this._items.push(e), this._hasAnchors = this._hasAnchors || e.hasAnchor;
    }
    unshift(e) {
      this._items.unshift(e), this._hasAnchors = this._hasAnchors || e.hasAnchor;
    }
    length() {
      return this._items.length;
    }
    setSource(e, t) {
      this._items[e].source !== t && (this._disposeCaches(), this._items[e].setSource(t));
    }
    compile(e) {
      if (!this._cached) {
        let t = this._items.map(e => e.source);
        this._cached = new nN(e, t, this._items.map(e => e.ruleId));
      }
      return this._cached;
    }
    compileAG(e, t, n) {
      if (!this._hasAnchors) return this.compile(e);
      if (t) if (n) return this._anchorCache.A1_G1 || (this._anchorCache.A1_G1 = this._resolveAnchors(e, t, n)), this._anchorCache.A1_G1;else return this._anchorCache.A1_G0 || (this._anchorCache.A1_G0 = this._resolveAnchors(e, t, n)), this._anchorCache.A1_G0;
      return n ? (this._anchorCache.A0_G1 || (this._anchorCache.A0_G1 = this._resolveAnchors(e, t, n)), this._anchorCache.A0_G1) : (this._anchorCache.A0_G0 || (this._anchorCache.A0_G0 = this._resolveAnchors(e, t, n)), this._anchorCache.A0_G0);
    }
    _resolveAnchors(e, t, n) {
      return new nN(e, this._items.map(e => e.resolveAnchors(t, n)), this._items.map(e => e.ruleId));
    }
  },
  nN = class {
    constructor(e, t, n) {
      this.regExps = t, this.rules = n, this.scanner = e.createOnigScanner(t);
    }
    scanner;
    dispose() {
      "function" == typeof this.scanner.dispose && this.scanner.dispose();
    }
    toString() {
      let e = [];
      for (let t = 0, n = this.rules.length; t < n; t++) e.push("   - " + this.rules[t] + ": " + this.regExps[t]);
      return e.join("\n");
    }
    findNextMatchSync(e, t, n) {
      let r = this.scanner.findNextMatchSync(e, t, n);
      return r ? {
        ruleId: this.rules[r.index],
        captureIndices: r.captureIndices
      } : null;
    }
  },
  nP = class {
    constructor(e, t) {
      this.languageId = e, this.tokenType = t;
    }
  },
  nI = class e {
    _defaultAttributes;
    _embeddedLanguagesMatcher;
    constructor(e, t) {
      this._defaultAttributes = new nP(e, 8), this._embeddedLanguagesMatcher = new nO(Object.entries(t || {}));
    }
    getDefaultAttributes() {
      return this._defaultAttributes;
    }
    getBasicScopeAttributes(t) {
      return null === t ? e._NULL_SCOPE_METADATA : this._getBasicScopeAttributes.get(t);
    }
    static _NULL_SCOPE_METADATA = new nP(0, 0);
    _getBasicScopeAttributes = new t8(e => new nP(this._scopeToLanguage(e), this._toStandardTokenType(e)));
    _scopeToLanguage(e) {
      return this._embeddedLanguagesMatcher.match(e) || 0;
    }
    _toStandardTokenType(t) {
      let n = t.match(e.STANDARD_TOKEN_TYPE_REGEXP);
      if (!n) return 8;
      switch (n[1]) {
        case "comment":
          return 1;
        case "string":
          return 2;
        case "regex":
          return 3;
        case "meta.embedded":
          return 0;
      }
      throw Error("Unexpected match for standard token type!");
    }
    static STANDARD_TOKEN_TYPE_REGEXP = /\b(comment|string|regex|meta\.embedded)\b/;
  },
  nO = class {
    values;
    scopesRegExp;
    constructor(e) {
      if (0 === e.length) this.values = null, this.scopesRegExp = null;else {
        this.values = new Map(e);
        const t = e.map(([e, t]) => t2(e));
        t.sort(), t.reverse(), this.scopesRegExp = RegExp(`^((${t.join(")|(")}))($|\\.)`, "");
      }
    }
    match(e) {
      if (!this.scopesRegExp) return;
      let t = e.match(this.scopesRegExp);
      if (t) return this.values.get(t[1]);
    }
  };
var nD = class {
  constructor(e, t) {
    this.stack = e, this.stoppedEarly = t;
  }
};
function n$(e, t, n, r, i, a, o, s) {
  let l = t.content.length,
    d = !1,
    u = -1;
  if (o) {
    let o = function (e, t, n, r, i, a) {
      let o = i.beginRuleCapturedEOL ? 0 : -1,
        s = [];
      for (let t = i; t; t = t.pop()) {
        let n = t.getRule(e);
        n instanceof n_ && s.push({
          rule: n,
          stack: t
        });
      }
      for (let f = s.pop(); f; f = s.pop()) {
        var l, d, u, h, c;
        let {
            ruleScanner: s,
            findOptions: p
          } = (l = f.rule, d = e, u = f.stack.endRule, h = n, c = r === o, {
            ruleScanner: l.compileWhileAG(d, u, h, c),
            findOptions: 0
          }),
          g = s.findNextMatchSync(t, r, p);
        if (g) {
          if (-2 !== g.ruleId) {
            i = f.stack.pop();
            break;
          }
          g.captureIndices && g.captureIndices.length && (a.produce(f.stack, g.captureIndices[0].start), nU(e, t, n, f.stack, a, f.rule.whileCaptures, g.captureIndices), a.produce(f.stack, g.captureIndices[0].end), o = g.captureIndices[0].end, g.captureIndices[0].end > r && (r = g.captureIndices[0].end, n = !1));
        } else {
          i = f.stack.pop();
          break;
        }
      }
      return {
        stack: i,
        linePos: r,
        anchorPosition: o,
        isFirstLine: n
      };
    }(e, t, n, r, i, a);
    i = o.stack, r = o.linePos, n = o.isFirstLine, u = o.anchorPosition;
  }
  let h = Date.now();
  for (; !d;) {
    if (0 !== s && Date.now() - h > s) return new nD(i, !0);
    !function () {
      let o = function (e, t, n, r, i, a) {
        let o = function (e, t, n, r, i, a) {
            let {
                ruleScanner: o,
                findOptions: s
              } = nB(i.getRule(e), e, i.endRule, n, r === a),
              l = o.findNextMatchSync(t, r, s);
            return l ? {
              captureIndices: l.captureIndices,
              matchedRuleId: l.ruleId
            } : null;
          }(e, t, n, r, i, a),
          s = e.getInjections();
        if (0 === s.length) return o;
        let l = function (e, t, n, r, i, a, o) {
          let s,
            l = Number.MAX_VALUE,
            d = null,
            u = 0,
            h = a.contentNameScopesList.getScopeNames();
          for (let a = 0, c = e.length; a < c; a++) {
            let c = e[a];
            if (!c.matcher(h)) continue;
            let {
                ruleScanner: f,
                findOptions: p
              } = nB(t.getRule(c.ruleId), t, null, r, i === o),
              g = f.findNextMatchSync(n, i, p);
            if (!g) continue;
            let m = g.captureIndices[0].start;
            if (!(m >= l) && (l = m, d = g.captureIndices, s = g.ruleId, u = c.priority, l === i)) break;
          }
          return d ? {
            priorityMatch: -1 === u,
            captureIndices: d,
            matchedRuleId: s
          } : null;
        }(s, e, t, n, r, i, a);
        if (!l) return o;
        if (!o) return l;
        let d = o.captureIndices[0].start,
          u = l.captureIndices[0].start;
        return u < d || l.priorityMatch && u === d ? l : o;
      }(e, t, n, r, i, u);
      if (!o) {
        a.produce(i, l), d = !0;
        return;
      }
      let s = o.captureIndices,
        h = o.matchedRuleId,
        c = !!s && s.length > 0 && s[0].end > r;
      if (-1 === h) {
        let o = i.getRule(e);
        a.produce(i, s[0].start), i = i.withContentNameScopesList(i.nameScopesList), nU(e, t, n, i, a, o.endCaptures, s), a.produce(i, s[0].end);
        let h = i;
        if (i = i.parent, u = h.getAnchorPos(), !c && h.getEnterPos() === r) {
          i = h, a.produce(i, l), d = !0;
          return;
        }
      } else {
        let o = e.getRule(h);
        a.produce(i, s[0].start);
        let f = i,
          p = o.getName(t.content, s),
          g = i.contentNameScopesList.pushAttributed(p, e);
        if (i = i.push(h, r, u, s[0].end === l, null, g, g), o instanceof nL) {
          nU(e, t, n, i, a, o.beginCaptures, s), a.produce(i, s[0].end), u = s[0].end;
          let r = o.getContentName(t.content, s),
            h = g.pushAttributed(r, e);
          if (i = i.withContentNameScopesList(h), o.endHasBackReferences && (i = i.withEndRule(o.getEndWithResolvedBackReferences(t.content, s))), !c && f.hasSameRuleAs(i)) {
            i = i.pop(), a.produce(i, l), d = !0;
            return;
          }
        } else if (o instanceof n_) {
          nU(e, t, n, i, a, o.beginCaptures, s), a.produce(i, s[0].end), u = s[0].end;
          let r = o.getContentName(t.content, s),
            h = g.pushAttributed(r, e);
          if (i = i.withContentNameScopesList(h), o.whileHasBackReferences && (i = i.withEndRule(o.getWhileWithResolvedBackReferences(t.content, s))), !c && f.hasSameRuleAs(i)) {
            i = i.pop(), a.produce(i, l), d = !0;
            return;
          }
        } else if (nU(e, t, n, i, a, o.captures, s), a.produce(i, s[0].end), i = i.pop(), !c) {
          i = i.safePop(), a.produce(i, l), d = !0;
          return;
        }
      }
      s[0].end > r && (r = s[0].end, n = !1);
    }();
  }
  return new nD(i, !1);
}
function nB(e, t, n, r, i) {
  return {
    ruleScanner: e.compileAG(t, n, r, i),
    findOptions: 0
  };
}
function nU(e, t, n, r, i, a, o) {
  if (0 === a.length) return;
  let s = t.content,
    l = Math.min(a.length, o.length),
    d = [],
    u = o[0].end;
  for (let t = 0; t < l; t++) {
    let l = a[t];
    if (null === l) continue;
    let h = o[t];
    if (0 === h.length) continue;
    if (h.start > u) break;
    for (; d.length > 0 && d[d.length - 1].endPos <= h.start;) i.produceFromScopes(d[d.length - 1].scopes, d[d.length - 1].endPos), d.pop();
    if (d.length > 0 ? i.produceFromScopes(d[d.length - 1].scopes, h.start) : i.produce(r, h.start), l.retokenizeCapturedWithRuleId) {
      let t = l.getName(s, o),
        a = r.contentNameScopesList.pushAttributed(t, e),
        d = l.getContentName(s, o),
        u = a.pushAttributed(d, e),
        c = r.push(l.retokenizeCapturedWithRuleId, h.start, -1, !1, null, a, u),
        f = e.createOnigString(s.substring(0, h.end));
      n$(e, f, n && 0 === h.start, h.start, c, i, !1, 0), ns(f);
      continue;
    }
    let c = l.getName(s, o);
    if (null !== c) {
      let t = (d.length > 0 ? d[d.length - 1].scopes : r.contentNameScopesList).pushAttributed(c, e);
      d.push(new nz(t, h.end));
    }
  }
  for (; d.length > 0;) i.produceFromScopes(d[d.length - 1].scopes, d[d.length - 1].endPos), d.pop();
}
var nz = class {
  scopes;
  endPos;
  constructor(e, t) {
    this.scopes = e, this.endPos = t;
  }
};
function nH(e, t, n, r, i) {
  let a = ni(t, nF),
    o = nT.getCompiledRuleId(n, r, i.repository);
  for (let n of a) e.push({
    debugSelector: t,
    matcher: n.matcher,
    ruleId: o,
    grammar: i,
    priority: n.priority
  });
}
function nF(e, t) {
  if (t.length < e.length) return !1;
  let n = 0;
  return e.every(e => {
    for (let r = n; r < t.length; r++) if (function (e, t) {
      if (!e) return !1;
      if (e === t) return !0;
      let n = t.length;
      return e.length > n && e.substr(0, n) === t && "." === e[n];
    }(t[r], e)) return n = r + 1, !0;
    return !1;
  });
}
var nj = class {
  constructor(e, t, n, r, i, a, o, s) {
    if (this._rootScopeName = e, this.balancedBracketSelectors = a, this._onigLib = s, this._basicScopeAttributesProvider = new nI(n, r), this._rootId = -1, this._lastRuleId = 0, this._ruleId2desc = [null], this._includedGrammars = {}, this._grammarRepository = o, this._grammar = nG(t, null), this._injections = null, this._tokenTypeMatchers = [], i) for (const e of Object.keys(i)) for (const t of ni(e, nF)) this._tokenTypeMatchers.push({
      matcher: t.matcher,
      type: i[e]
    });
  }
  _rootId;
  _lastRuleId;
  _ruleId2desc;
  _includedGrammars;
  _grammarRepository;
  _grammar;
  _injections;
  _basicScopeAttributesProvider;
  _tokenTypeMatchers;
  get themeProvider() {
    return this._grammarRepository;
  }
  dispose() {
    for (let e of this._ruleId2desc) e && e.dispose();
  }
  createOnigScanner(e) {
    return this._onigLib.createOnigScanner(e);
  }
  createOnigString(e) {
    return this._onigLib.createOnigString(e);
  }
  getMetadataForScope(e) {
    return this._basicScopeAttributesProvider.getBasicScopeAttributes(e);
  }
  _collectInjections() {
    let e = [],
      t = this._rootScopeName,
      n = {
        lookup: e => e === this._rootScopeName ? this._grammar : this.getExternalGrammar(e),
        injections: e => this._grammarRepository.injections(e)
      }.lookup(t);
    if (n) {
      let r = n.injections;
      if (r) for (let t in r) nH(e, t, r[t], this, n);
      let i = this._grammarRepository.injections(t);
      i && i.forEach(t => {
        let n = this.getExternalGrammar(t);
        if (n) {
          let t = n.injectionSelector;
          t && nH(e, t, n, this, n);
        }
      });
    }
    return e.sort((e, t) => e.priority - t.priority), e;
  }
  getInjections() {
    return null === this._injections && (this._injections = this._collectInjections()), this._injections;
  }
  registerRule(e) {
    let t = ++this._lastRuleId,
      n = e(t);
    return this._ruleId2desc[t] = n, n;
  }
  getRule(e) {
    return this._ruleId2desc[e];
  }
  getExternalGrammar(e, t) {
    if (this._includedGrammars[e]) return this._includedGrammars[e];
    if (this._grammarRepository) {
      let n = this._grammarRepository.lookup(e);
      if (n) return this._includedGrammars[e] = nG(n, t && t.$base), this._includedGrammars[e];
    }
  }
  tokenizeLine(e, t, n = 0) {
    let r = this._tokenize(e, t, !1, n);
    return {
      tokens: r.lineTokens.getResult(r.ruleStack, r.lineLength),
      ruleStack: r.ruleStack,
      stoppedEarly: r.stoppedEarly
    };
  }
  tokenizeLine2(e, t, n = 0) {
    let r = this._tokenize(e, t, !0, n);
    return {
      tokens: r.lineTokens.getBinaryResult(r.ruleStack, r.lineLength),
      ruleStack: r.ruleStack,
      stoppedEarly: r.stoppedEarly
    };
  }
  _tokenize(e, t, n, r) {
    let i;
    if (-1 === this._rootId && (this._rootId = nT.getCompiledRuleId(this._grammar.repository.$self, this, this._grammar.repository), this.getInjections()), t && t !== nV.NULL) i = !1, t.reset();else {
      let e;
      i = !0;
      let n = this._basicScopeAttributesProvider.getDefaultAttributes(),
        r = this.themeProvider.getDefaults(),
        a = nr.set(0, n.languageId, n.tokenType, null, r.fontStyle, r.foregroundId, r.backgroundId),
        o = this.getRule(this._rootId).getName(null, null);
      e = o ? nW.createRootAndLookUpScopeName(o, a, this) : nW.createRoot("unknown", a), t = new nV(null, this._rootId, -1, -1, !1, null, e, e);
    }
    e += "\n";
    let a = this.createOnigString(e),
      o = a.content.length,
      s = new nX(n, e, this._tokenTypeMatchers, this.balancedBracketSelectors),
      l = n$(this, a, i, 0, t, s, !0, r);
    return ns(a), {
      lineLength: o,
      lineTokens: s,
      ruleStack: l.stack,
      stoppedEarly: l.stoppedEarly
    };
  }
};
function nG(e, t) {
  return (e = function e(t) {
    return Array.isArray(t) ? function (t) {
      let n = [];
      for (let r = 0, i = t.length; r < i; r++) n[r] = e(t[r]);
      return n;
    }(t) : t instanceof RegExp ? t : "object" == typeof t ? function (t) {
      let n = {};
      for (let r in t) n[r] = e(t[r]);
      return n;
    }(t) : t;
  }(e)).repository = e.repository || {}, e.repository.$self = {
    $vscodeTextmateLocation: e.$vscodeTextmateLocation,
    patterns: e.patterns,
    name: e.scopeName
  }, e.repository.$base = t || e.repository.$self, e;
}
var nW = class e {
    constructor(e, t, n) {
      this.parent = e, this.scopePath = t, this.tokenAttributes = n;
    }
    static fromExtension(t, n) {
      let r = t,
        i = t?.scopePath ?? null;
      for (let t of n) r = new e(r, i = t6.push(i, t.scopeNames), t.encodedTokenAttributes);
      return r;
    }
    static createRoot(t, n) {
      return new e(null, new t6(null, t), n);
    }
    static createRootAndLookUpScopeName(t, n, r) {
      let i = r.getMetadataForScope(t),
        a = new t6(null, t),
        o = r.themeProvider.themeMatch(a),
        s = e.mergeAttributes(n, i, o);
      return new e(null, a, s);
    }
    get scopeName() {
      return this.scopePath.scopeName;
    }
    toString() {
      return this.getScopeNames().join(" ");
    }
    equals(t) {
      return e.equals(this, t);
    }
    static equals(e, t) {
      for (;;) {
        if (e === t || !e && !t) return !0;
        if (!e || !t || e.scopeName !== t.scopeName || e.tokenAttributes !== t.tokenAttributes) return !1;
        e = e.parent, t = t.parent;
      }
    }
    static mergeAttributes(e, t, n) {
      let r = -1,
        i = 0,
        a = 0;
      return null !== n && (r = n.fontStyle, i = n.foregroundId, a = n.backgroundId), nr.set(e, t.languageId, t.tokenType, null, r, i, a);
    }
    pushAttributed(t, n) {
      if (null === t) return this;
      if (-1 === t.indexOf(" ")) return e._pushAttributed(this, t, n);
      let r = t.split(/ /g),
        i = this;
      for (let t of r) i = e._pushAttributed(i, t, n);
      return i;
    }
    static _pushAttributed(t, n, r) {
      let i = r.getMetadataForScope(n),
        a = t.scopePath.push(n),
        o = r.themeProvider.themeMatch(a),
        s = e.mergeAttributes(t.tokenAttributes, i, o);
      return new e(t, a, s);
    }
    getScopeNames() {
      return this.scopePath.getSegments();
    }
    getExtensionIfDefined(e) {
      let t = [],
        n = this;
      for (; n && n !== e;) t.push({
        encodedTokenAttributes: n.tokenAttributes,
        scopeNames: n.scopePath.getExtensionIfDefined(n.parent?.scopePath ?? null)
      }), n = n.parent;
      return n === e ? t.reverse() : void 0;
    }
  },
  nV = class e {
    constructor(e, t, n, r, i, a, o, s) {
      this.parent = e, this.ruleId = t, this.beginRuleCapturedEOL = i, this.endRule = a, this.nameScopesList = o, this.contentNameScopesList = s, this.depth = this.parent ? this.parent.depth + 1 : 1, this._enterPos = n, this._anchorPos = r;
    }
    _stackElementBrand = void 0;
    static NULL = new e(null, 0, 0, 0, !1, null, null, null);
    _enterPos;
    _anchorPos;
    depth;
    equals(t) {
      return null !== t && e._equals(this, t);
    }
    static _equals(e, t) {
      return e === t || !!this._structuralEquals(e, t) && nW.equals(e.contentNameScopesList, t.contentNameScopesList);
    }
    static _structuralEquals(e, t) {
      for (;;) {
        if (e === t || !e && !t) return !0;
        if (!e || !t || e.depth !== t.depth || e.ruleId !== t.ruleId || e.endRule !== t.endRule) return !1;
        e = e.parent, t = t.parent;
      }
    }
    clone() {
      return this;
    }
    static _reset(e) {
      for (; e;) e._enterPos = -1, e._anchorPos = -1, e = e.parent;
    }
    reset() {
      e._reset(this);
    }
    pop() {
      return this.parent;
    }
    safePop() {
      return this.parent ? this.parent : this;
    }
    push(t, n, r, i, a, o, s) {
      return new e(this, t, n, r, i, a, o, s);
    }
    getEnterPos() {
      return this._enterPos;
    }
    getAnchorPos() {
      return this._anchorPos;
    }
    getRule(e) {
      return e.getRule(this.ruleId);
    }
    toString() {
      let e = [];
      return this._writeString(e, 0), "[" + e.join(",") + "]";
    }
    _writeString(e, t) {
      return this.parent && (t = this.parent._writeString(e, t)), e[t++] = `(${this.ruleId}, ${this.nameScopesList?.toString()}, ${this.contentNameScopesList?.toString()})`, t;
    }
    withContentNameScopesList(e) {
      return this.contentNameScopesList === e ? this : this.parent.push(this.ruleId, this._enterPos, this._anchorPos, this.beginRuleCapturedEOL, this.endRule, this.nameScopesList, e);
    }
    withEndRule(t) {
      return this.endRule === t ? this : new e(this.parent, this.ruleId, this._enterPos, this._anchorPos, this.beginRuleCapturedEOL, t, this.nameScopesList, this.contentNameScopesList);
    }
    hasSameRuleAs(e) {
      let t = this;
      for (; t && t._enterPos === e._enterPos;) {
        if (t.ruleId === e.ruleId) return !0;
        t = t.parent;
      }
      return !1;
    }
    toStateStackFrame() {
      return {
        ruleId: this.ruleId,
        beginRuleCapturedEOL: this.beginRuleCapturedEOL,
        endRule: this.endRule,
        nameScopesList: this.nameScopesList?.getExtensionIfDefined(this.parent?.nameScopesList ?? null) ?? [],
        contentNameScopesList: this.contentNameScopesList?.getExtensionIfDefined(this.nameScopesList) ?? []
      };
    }
    static pushFrame(t, n) {
      let r = nW.fromExtension(t?.nameScopesList ?? null, n.nameScopesList);
      return new e(t, n.ruleId, n.enterPos ?? -1, n.anchorPos ?? -1, n.beginRuleCapturedEOL, n.endRule, r, nW.fromExtension(r, n.contentNameScopesList));
    }
  },
  nq = class {
    balancedBracketScopes;
    unbalancedBracketScopes;
    allowAny = !1;
    constructor(e, t) {
      this.balancedBracketScopes = e.flatMap(e => "*" === e ? (this.allowAny = !0, []) : ni(e, nF).map(e => e.matcher)), this.unbalancedBracketScopes = t.flatMap(e => ni(e, nF).map(e => e.matcher));
    }
    get matchesAlways() {
      return this.allowAny && 0 === this.unbalancedBracketScopes.length;
    }
    get matchesNever() {
      return 0 === this.balancedBracketScopes.length && !this.allowAny;
    }
    match(e) {
      for (let t of this.unbalancedBracketScopes) if (t(e)) return !1;
      for (let t of this.balancedBracketScopes) if (t(e)) return !0;
      return this.allowAny;
    }
  },
  nX = class {
    constructor(e, t, n, r) {
      this.balancedBracketSelectors = r, this._emitBinaryTokens = e, this._tokenTypeOverrides = n, this._lineText = null, this._tokens = [], this._binaryTokens = [], this._lastTokenEndIndex = 0;
    }
    _emitBinaryTokens;
    _lineText;
    _tokens;
    _binaryTokens;
    _lastTokenEndIndex;
    _tokenTypeOverrides;
    produce(e, t) {
      this.produceFromScopes(e.contentNameScopesList, t);
    }
    produceFromScopes(e, t) {
      if (this._lastTokenEndIndex >= t) return;
      if (this._emitBinaryTokens) {
        let n = e?.tokenAttributes ?? 0,
          r = !1;
        if (this.balancedBracketSelectors?.matchesAlways && (r = !0), this._tokenTypeOverrides.length > 0 || this.balancedBracketSelectors && !this.balancedBracketSelectors.matchesAlways && !this.balancedBracketSelectors.matchesNever) {
          let t = e?.getScopeNames() ?? [];
          for (let e of this._tokenTypeOverrides) e.matcher(t) && (n = nr.set(n, 0, e.type, null, -1, 0, 0));
          this.balancedBracketSelectors && (r = this.balancedBracketSelectors.match(t));
        }
        if (r && (n = nr.set(n, 0, 8, r, -1, 0, 0)), this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 1] === n) {
          this._lastTokenEndIndex = t;
          return;
        }
        this._binaryTokens.push(this._lastTokenEndIndex), this._binaryTokens.push(n), this._lastTokenEndIndex = t;
        return;
      }
      let n = e?.getScopeNames() ?? [];
      this._tokens.push({
        startIndex: this._lastTokenEndIndex,
        endIndex: t,
        scopes: n
      }), this._lastTokenEndIndex = t;
    }
    getResult(e, t) {
      return this._tokens.length > 0 && this._tokens[this._tokens.length - 1].startIndex === t - 1 && this._tokens.pop(), 0 === this._tokens.length && (this._lastTokenEndIndex = -1, this.produce(e, t), this._tokens[this._tokens.length - 1].startIndex = 0), this._tokens;
    }
    getBinaryResult(e, t) {
      this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 2] === t - 1 && (this._binaryTokens.pop(), this._binaryTokens.pop()), 0 === this._binaryTokens.length && (this._lastTokenEndIndex = -1, this.produce(e, t), this._binaryTokens[this._binaryTokens.length - 2] = 0);
      let n = new Uint32Array(this._binaryTokens.length);
      for (let e = 0, t = this._binaryTokens.length; e < t; e++) n[e] = this._binaryTokens[e];
      return n;
    }
  },
  nK = class {
    constructor(e, t) {
      this._onigLib = t, this._theme = e;
    }
    _grammars = new Map();
    _rawGrammars = new Map();
    _injectionGrammars = new Map();
    _theme;
    dispose() {
      for (let e of this._grammars.values()) e.dispose();
    }
    setTheme(e) {
      this._theme = e;
    }
    getColorMap() {
      return this._theme.getColorMap();
    }
    addGrammar(e, t) {
      this._rawGrammars.set(e.scopeName, e), t && this._injectionGrammars.set(e.scopeName, t);
    }
    lookup(e) {
      return this._rawGrammars.get(e);
    }
    injections(e) {
      return this._injectionGrammars.get(e);
    }
    getDefaults() {
      return this._theme.getDefaults();
    }
    themeMatch(e) {
      return this._theme.match(e);
    }
    grammarForScopeName(e, t, n, r, i) {
      if (!this._grammars.has(e)) {
        let a = this._rawGrammars.get(e);
        if (!a) return null;
        this._grammars.set(e, new nj(e, a, t, n, r, i, this, this._onigLib));
      }
      return this._grammars.get(e);
    }
  },
  nQ = class {
    _options;
    _syncRegistry;
    _ensureGrammarCache;
    constructor(e) {
      this._options = e, this._syncRegistry = new nK(t5.createFromRawTheme(e.theme, e.colorMap), e.onigLib), this._ensureGrammarCache = new Map();
    }
    dispose() {
      this._syncRegistry.dispose();
    }
    setTheme(e, t) {
      this._syncRegistry.setTheme(t5.createFromRawTheme(e, t));
    }
    getColorMap() {
      return this._syncRegistry.getColorMap();
    }
    loadGrammarWithEmbeddedLanguages(e, t, n) {
      return this.loadGrammarWithConfiguration(e, t, {
        embeddedLanguages: n
      });
    }
    loadGrammarWithConfiguration(e, t, n) {
      return this._loadGrammar(e, t, n.embeddedLanguages, n.tokenTypes, new nq(n.balancedBracketSelectors || [], n.unbalancedBracketSelectors || []));
    }
    loadGrammar(e) {
      return this._loadGrammar(e, 0, null, null, null);
    }
    _loadGrammar(e, t, n, r, i) {
      let a = new nh(this._syncRegistry, e);
      for (; a.Q.length > 0;) a.Q.map(e => this._loadSingleGrammar(e.scopeName)), a.processQueue();
      return this._grammarForScopeName(e, t, n, r, i);
    }
    _loadSingleGrammar(e) {
      this._ensureGrammarCache.has(e) || (this._doLoadSingleGrammar(e), this._ensureGrammarCache.set(e, !0));
    }
    _doLoadSingleGrammar(e) {
      let t = this._options.loadGrammar(e);
      if (t) {
        let n = "function" == typeof this._options.getInjections ? this._options.getInjections(e) : void 0;
        this._syncRegistry.addGrammar(t, n);
      }
    }
    addGrammar(e, t = [], n = 0, r = null) {
      return this._syncRegistry.addGrammar(e, t), this._grammarForScopeName(e.scopeName, n, r);
    }
    _grammarForScopeName(e, t = 0, n = null, r = null, i = null) {
      return this._syncRegistry.grammarForScopeName(e, t, n, r, i);
    }
  },
  nY = nV.NULL;
function nJ(e, t) {
  let n = "string" == typeof e ? {} : {
      ...e.colorReplacements
    },
    r = "string" == typeof e ? e : e.name;
  for (let [e, i] of Object.entries(t?.colorReplacements || {})) "string" == typeof i ? n[e] = i : e === r && Object.assign(n, i);
  return n;
}
function nZ(e, t) {
  return e && t?.[e?.toLowerCase()] || e;
}
async function n0(e) {
  return Promise.resolve("function" == typeof e ? e() : e).then(e => e.default || e);
}
function n1(e) {
  return !e || ["plaintext", "txt", "text", "plain"].includes(e);
}
function n2(e) {
  return "ansi" === e || n1(e);
}
function n8(e) {
  return "none" === e;
}
let n5 = /(\r?\n)/g;
function n6(e, t = !1) {
  if (0 === e.length) return [["", 0]];
  let n = e.split(n5),
    r = 0,
    i = [];
  for (let e = 0; e < n.length; e += 2) {
    let a = t ? n[e] + (n[e + 1] || "") : n[e];
    i.push([a, r]), r += n[e].length, r += n[e + 1]?.length || 0;
  }
  return i;
}
let n7 = "__shiki_resolved";
function n3(e) {
  if (e?.[n7]) return e;
  let t = {
    ...e
  };
  t.tokenColors && !t.settings && (t.settings = t.tokenColors, delete t.tokenColors), t.type ||= "dark", t.colorReplacements = {
    ...t.colorReplacements
  }, t.settings ||= [];
  let {
    bg: n,
    fg: r
  } = t;
  if (!n || !r) {
    let e = t.settings ? t.settings.find(e => !e.name && !e.scope) : void 0;
    e?.settings?.foreground && (r = e.settings.foreground), e?.settings?.background && (n = e.settings.background), !r && t?.colors?.["editor.foreground"] && (r = t.colors["editor.foreground"]), !n && t?.colors?.["editor.background"] && (n = t.colors["editor.background"]), r || (r = "light" === t.type ? "#333333" : "#bbbbbb"), n || (n = "light" === t.type ? "#fffffe" : "#1e1e1e"), t.fg = r, t.bg = n;
  }
  t.settings[0] && t.settings[0].settings && !t.settings[0].scope || t.settings.unshift({
    settings: {
      foreground: t.fg,
      background: t.bg
    }
  });
  let i = 0,
    a = new Map();
  function o(e) {
    if (a.has(e)) return a.get(e);
    i += 1;
    let n = `#${i.toString(16).padStart(8, "0").toLowerCase()}`;
    return t.colorReplacements?.[`#${n}`] ? o(e) : (a.set(e, n), n);
  }
  for (let e of (t.settings = t.settings.map(e => {
    let n = e.settings?.foreground && !e.settings.foreground.startsWith("#"),
      r = e.settings?.background && !e.settings.background.startsWith("#");
    if (!n && !r) return e;
    let i = {
      ...e,
      settings: {
        ...e.settings
      }
    };
    if (n) {
      let n = o(e.settings.foreground);
      t.colorReplacements[n] = e.settings.foreground, i.settings.foreground = n;
    }
    if (r) {
      let n = o(e.settings.background);
      t.colorReplacements[n] = e.settings.background, i.settings.background = n;
    }
    return i;
  }), Object.keys(t.colors || {}))) if (("editor.foreground" === e || "editor.background" === e || e.startsWith("terminal.ansi")) && !t.colors[e]?.startsWith("#")) {
    let n = o(t.colors[e]);
    t.colorReplacements[n] = t.colors[e], t.colors[e] = n;
  }
  return Object.defineProperty(t, n7, {
    enumerable: !1,
    writable: !1,
    value: !0
  }), t;
}
async function n4(e) {
  return [...new Set((await Promise.all(e.filter(e => !n2(e)).map(async e => await n0(e).then(e => Array.isArray(e) ? e : [e])))).flat())];
}
async function n9(e) {
  return (await Promise.all(e.map(async e => n8(e) ? null : n3(await n0(e))))).filter(e => !!e);
}
function re(e, t) {
  if (!t) return e;
  if (t[e]) {
    let n = new Set([e]);
    for (; t[e];) {
      if (e = t[e], n.has(e)) throw new tQ(`Circular alias \`${[...n].join(" -> ")} -> ${e}\``);
      n.add(e);
    }
  }
  return e;
}
var rt = class extends nQ {
    _resolver;
    _themes;
    _langs;
    _alias;
    _resolvedThemes = new Map();
    _resolvedGrammars = new Map();
    _langMap = new Map();
    _langGraph = new Map();
    _textmateThemeCache = new WeakMap();
    _loadedThemesCache = null;
    _loadedLanguagesCache = null;
    constructor(e, t, n, r = {}) {
      super(e), this._resolver = e, this._themes = t, this._langs = n, this._alias = r, this._themes.map(e => this.loadTheme(e)), this.loadLanguages(this._langs);
    }
    getTheme(e) {
      return "string" == typeof e ? this._resolvedThemes.get(e) : this.loadTheme(e);
    }
    loadTheme(e) {
      let t = n3(e);
      return t.name && (this._resolvedThemes.set(t.name, t), this._loadedThemesCache = null), t;
    }
    getLoadedThemes() {
      return this._loadedThemesCache || (this._loadedThemesCache = [...this._resolvedThemes.keys()]), this._loadedThemesCache;
    }
    setTheme(e) {
      let t = this._textmateThemeCache.get(e);
      t || (t = t5.createFromRawTheme(e), this._textmateThemeCache.set(e, t)), this._syncRegistry.setTheme(t);
    }
    getGrammar(e) {
      return e = re(e, this._alias), this._resolvedGrammars.get(e);
    }
    loadLanguage(e) {
      if (this.getGrammar(e.name)) return;
      let t = new Set([...this._langMap.values()].filter(t => t.embeddedLangsLazy?.includes(e.name)));
      this._resolver.addLanguage(e);
      let n = {
        balancedBracketSelectors: e.balancedBracketSelectors || ["*"],
        unbalancedBracketSelectors: e.unbalancedBracketSelectors || []
      };
      this._syncRegistry._rawGrammars.set(e.scopeName, e);
      let r = this.loadGrammarWithConfiguration(e.scopeName, 1, n);
      if (r.name = e.name, this._resolvedGrammars.set(e.name, r), e.aliases && e.aliases.forEach(t => {
        this._alias[t] = e.name;
      }), this._loadedLanguagesCache = null, t.size) for (let e of t) this._resolvedGrammars.delete(e.name), this._loadedLanguagesCache = null, this._syncRegistry?._injectionGrammars?.delete(e.scopeName), this._syncRegistry?._grammars?.delete(e.scopeName), this.loadLanguage(this._langMap.get(e.name));
    }
    dispose() {
      super.dispose(), this._resolvedThemes.clear(), this._resolvedGrammars.clear(), this._langMap.clear(), this._langGraph.clear(), this._loadedThemesCache = null;
    }
    loadLanguages(e) {
      for (let t of e) this.resolveEmbeddedLanguages(t);
      let t = [...this._langGraph.entries()],
        n = t.filter(([e, t]) => !t);
      if (n.length) {
        let e = t.filter(([e, t]) => !!t && (t.embeddedLanguages || t.embeddedLangs)?.some(e => n.map(([e]) => e).includes(e))).filter(e => !n.includes(e));
        throw new tQ(`Missing languages ${n.map(([e]) => `\`${e}\``).join(", ")}, required by ${e.map(([e]) => `\`${e}\``).join(", ")}`);
      }
      for (let [e, n] of t) this._resolver.addLanguage(n);
      for (let [e, n] of t) this.loadLanguage(n);
    }
    getLoadedLanguages() {
      return this._loadedLanguagesCache || (this._loadedLanguagesCache = [...new Set([...this._resolvedGrammars.keys(), ...Object.keys(this._alias)])]), this._loadedLanguagesCache;
    }
    resolveEmbeddedLanguages(e) {
      this._langMap.set(e.name, e), this._langGraph.set(e.name, e);
      let t = e.embeddedLanguages ?? e.embeddedLangs;
      if (t) for (let e of t) this._langGraph.set(e, this._langMap.get(e));
    }
  },
  rn = class {
    _langs = new Map();
    _scopeToLang = new Map();
    _injections = new Map();
    _onigLib;
    constructor(e, t) {
      this._onigLib = {
        createOnigScanner: t => e.createScanner(t),
        createOnigString: t => e.createString(t)
      }, t.forEach(e => this.addLanguage(e));
    }
    get onigLib() {
      return this._onigLib;
    }
    getLangRegistration(e) {
      return this._langs.get(e);
    }
    loadGrammar(e) {
      return this._scopeToLang.get(e);
    }
    addLanguage(e) {
      this._langs.set(e.name, e), e.aliases && e.aliases.forEach(t => {
        this._langs.set(t, e);
      }), this._scopeToLang.set(e.scopeName, e), e.injectTo && e.injectTo.forEach(t => {
        this._injections.get(t) || this._injections.set(t, []), this._injections.get(t).push(e.scopeName);
      });
    }
    getInjections(e) {
      let t = e.split("."),
        n = [];
      for (let e = 1; e <= t.length; e++) {
        let r = t.slice(0, e).join(".");
        n = [...n, ...(this._injections.get(r) || [])];
      }
      return n;
    }
  };
let rr = 0;
async function ri(e) {
  e.engine || console.warn("`engine` option is required. Use `createOnigurumaEngine` or `createJavaScriptRegexEngine` to create an engine.");
  let [t, n, r] = await Promise.all([n9(e.themes || []), n4(e.langs || []), e.engine]);
  return function (e) {
    let t;
    rr += 1, !1 !== e.warnings && rr >= 10 && rr % 10 == 0 && console.warn(`[Shiki] ${rr} instances have been created. Shiki is supposed to be used as a singleton, consider refactoring your code to cache your highlighter instance; Or call \`highlighter.dispose()\` to release unused instances.`);
    let n = !1;
    if (!e.engine) throw new tQ("`engine` option is required for synchronous mode");
    let r = (e.langs || []).flat(1),
      i = (e.themes || []).flat(1).map(n3),
      a = new rt(new rn(e.engine, r), i, r, e.langAlias);
    function o(e) {
      if ("none" === e) return {
        bg: "",
        fg: "",
        name: "none",
        settings: [],
        type: "dark"
      };
      d();
      let t = a.getTheme(e);
      if (!t) throw new tQ(`Theme \`${e}\` not found, you may need to load it first`);
      return t;
    }
    function s(...e) {
      d(), a.loadLanguages(e.flat(1));
    }
    function l(...e) {
      for (let t of (d(), e.flat(1))) a.loadTheme(t);
    }
    function d() {
      if (n) throw new tQ("Shiki instance has been disposed");
    }
    function u() {
      n || (n = !0, a.dispose(), rr -= 1);
    }
    return {
      setTheme: function (e) {
        d();
        let n = o(e);
        return t !== e && (a.setTheme(n), t = e), {
          theme: n,
          colorMap: a.getColorMap()
        };
      },
      getTheme: o,
      getLanguage: function (e) {
        d();
        let t = a.getGrammar("string" == typeof e ? e : e.name);
        if (!t) throw new tQ(`Language \`${e}\` not found, you may need to load it first`);
        return t;
      },
      getLoadedThemes: function () {
        return d(), a.getLoadedThemes();
      },
      getLoadedLanguages: function () {
        return d(), a.getLoadedLanguages();
      },
      resolveLangAlias: function (t) {
        return re(t, e.langAlias);
      },
      loadLanguage: async function (...e) {
        return s(await n4(e));
      },
      loadLanguageSync: s,
      loadTheme: async function (...e) {
        return d(), l(await n9(e));
      },
      loadThemeSync: l,
      dispose: u,
      [Symbol.dispose]: u
    };
  }({
    ...e,
    themes: t,
    langs: n,
    engine: r
  });
}
let ra = new WeakMap();
function ro(e, t) {
  ra.set(e, t);
}
function rs(e) {
  return ra.get(e);
}
var rl = class e {
  _stacks = {};
  lang;
  get themes() {
    return Object.keys(this._stacks);
  }
  get theme() {
    return this.themes[0];
  }
  get _stack() {
    return this._stacks[this.theme];
  }
  static initial(t, n) {
    return new e(Object.fromEntries((Array.isArray(n) ? n : [n]).map(e => [e, nY])), t);
  }
  constructor(...e) {
    if (2 === e.length) {
      const [t, n] = e;
      this.lang = n, this._stacks = t;
    } else {
      const [t, n, r] = e;
      this.lang = n, this._stacks = {
        [r]: t
      };
    }
  }
  getInternalStack(e = this.theme) {
    return this._stacks[e];
  }
  getScopes(e = this.theme) {
    var t;
    let n, r;
    return t = this._stacks[e], n = [], r = new Set(), !function e(t) {
      if (r.has(t)) return;
      r.add(t);
      let i = t?.nameScopesList?.scopeName;
      i && n.push(i), t.parent && e(t.parent);
    }(t), n;
  }
  toJSON() {
    return {
      lang: this.lang,
      theme: this.theme,
      themes: this.themes,
      scopes: this.getScopes()
    };
  }
};
let rd = /,/,
  ru = / /;
function rh(e, t, n = {}) {
  var r, i;
  let a,
    o,
    {
      theme: s = e.getLoadedThemes()[0]
    } = n;
  if (n1(e.resolveLangAlias(n.lang || "text")) || n8(s)) return n6(t).map(e => [{
    content: e[0],
    offset: e[1]
  }]);
  let {
      theme: l,
      colorMap: d
    } = e.setTheme(s),
    u = e.getLanguage(n.lang || "text");
  if (n.grammarState) {
    if (n.grammarState.lang !== u.name) throw new tQ(`Grammar state language "${n.grammarState.lang}" does not match highlight language "${u.name}"`);
    if (!n.grammarState.themes.includes(l.name)) throw new tQ(`Grammar state themes "${n.grammarState.themes}" do not contain highlight theme "${l.name}"`);
  }
  return o = new rl((a = rc(t, r = u, i = l, d, n)).stateStack, r.name, i.name), ro(a.tokens, o), a.tokens;
}
function rc(e, t, n, r, i) {
  let a = nJ(n, i),
    {
      tokenizeMaxLineLength: o = 0,
      tokenizeTimeLimit: s = 500,
      includeExplanation: l = !1
    } = i,
    d = n6(e),
    u = i.grammarState ? function (e, t) {
      if (!(e instanceof rl)) throw new tQ("Invalid grammar state");
      return e.getInternalStack(t);
    }(i.grammarState, n.name) ?? nY : null != i.grammarContextCode ? rc(i.grammarContextCode, t, n, r, {
      ...i,
      grammarState: void 0,
      grammarContextCode: void 0
    }).stateStack : nY,
    h = [],
    c = [];
  for (let e = 0, i = d.length; e < i; e++) {
    let i,
      f,
      [p, g] = d[e];
    if ("" === p) {
      h = [], c.push([]);
      continue;
    }
    if (o > 0 && p.length >= o) {
      h = [], c.push([{
        content: p,
        offset: g,
        color: "",
        fontStyle: 0
      }]);
      continue;
    }
    l && "tokenType" !== l && (i = t.tokenizeLine(p, u, s).tokens, f = 0);
    let m = t.tokenizeLine2(p, u, s),
      b = m.tokens.length / 2;
    for (let e = 0; e < b; e++) {
      let t = m.tokens[2 * e],
        o = e + 1 < b ? m.tokens[2 * e + 2] : p.length;
      if (t === o) continue;
      let s = m.tokens[2 * e + 1],
        d = nZ(r[nr.getForeground(s)], a),
        u = nr.getFontStyle(s),
        c = {
          content: p.substring(t, o),
          offset: g + t,
          color: d,
          fontStyle: u
        };
      if ("tokenType" === l) c.type = nr.getTokenType(s);else if (l) {
        let e = [];
        if ("scopeName" !== l) for (let t of n.settings) {
          let n;
          switch (typeof t.scope) {
            case "string":
              n = t.scope.split(rd).map(e => e.trim());
              break;
            case "object":
              n = t.scope;
              break;
            default:
              continue;
          }
          e.push({
            settings: t,
            selectors: n.map(e => e.split(ru))
          });
        }
        c.explanation = [];
        let r = 0;
        for (; t + r < o;) {
          let t = i[f],
            n = p.substring(t.startIndex, t.endIndex);
          r += n.length, c.explanation.push({
            content: n,
            scopes: "scopeName" === l ? t.scopes.map(e => ({
              scopeName: e
            })) : function (e, t) {
              let n = [];
              for (let r = 0, i = t.length; r < i; r++) {
                let i = t[r];
                n[r] = {
                  scopeName: i,
                  themeMatches: function (e, t, n) {
                    let r = [];
                    for (let {
                      selectors: i,
                      settings: a
                    } of e) for (let e of i) if (function (e, t, n) {
                      if (!rf(e.at(-1), t)) return !1;
                      let r = e.length - 2,
                        i = n.length - 1;
                      for (; r >= 0 && i >= 0;) rf(e[r], n[i]) && (r -= 1), i -= 1;
                      return -1 === r;
                    }(e, t, n)) {
                      r.push(a);
                      break;
                    }
                    return r;
                  }(e, i, t.slice(0, r))
                };
              }
              return n;
            }(e, t.scopes)
          }), f += 1;
        }
      }
      h.push(c);
    }
    c.push(h), h = [], u = m.ruleStack;
  }
  return {
    tokens: c,
    stateStack: u
  };
}
function rf(e, t) {
  return e === t || t.substring(0, e.length) === e && "." === t[e.length];
}
function rp(e, t, n, r = rh) {
  let i = Object.entries(n.themes).filter(e => e[1]).map(e => ({
      color: e[0],
      theme: e[1]
    })),
    a = i.map(i => {
      let a = r(e, t, {
        ...n,
        theme: i.theme
      });
      return {
        tokens: a,
        state: rs(a),
        theme: "string" == typeof i.theme ? i.theme : i.theme.name
      };
    }),
    o = function (...e) {
      let t = e.map(() => []),
        n = e.length;
      for (let r = 0; r < e[0].length; r++) {
        let i = e.map(e => e[r]),
          a = t.map(() => []);
        t.forEach((e, t) => e.push(a[t]));
        let o = i.map(() => 0),
          s = i.map(e => e[0]);
        for (; s.every(e => e);) {
          let e = Math.min(...s.map(e => e.content.length));
          for (let t = 0; t < n; t++) {
            let n = s[t];
            n.content.length === e ? (a[t].push(n), o[t] += 1, s[t] = i[t][o[t]]) : (a[t].push({
              ...n,
              content: n.content.slice(0, e)
            }), s[t] = {
              ...n,
              content: n.content.slice(e),
              offset: n.offset + e
            });
          }
        }
      }
      return t;
    }(...a.map(e => e.tokens)),
    s = o[0].map((e, t) => e.map((e, r) => {
      let a = {
        content: e.content,
        variants: {},
        offset: e.offset
      };
      return "includeExplanation" in n && n.includeExplanation && (a.explanation = e.explanation), o.forEach((e, n) => {
        let {
          content: o,
          explanation: s,
          offset: l,
          ...d
        } = e[t][r];
        a.variants[i[n].color] = d;
      }), a;
    })),
    l = a[0].state ? new rl(Object.fromEntries(a.map(e => [e.theme, e.state?.getInternalStack(e.theme)])), a[0].state.lang) : void 0;
  return l && ro(s, l), s;
}
function rg({
  name: e,
  load: t,
  colorScheme: n,
  collection: r,
  displayName: i
}) {
  var a;
  return {
    name: e,
    colorScheme: n,
    collection: r,
    displayName: i,
    load: (a = t, async () => n3(tH(await a())))
  };
}
let rm = ["ayu-light", "catppuccin-latte", "everforest-light", "github-light", "github-light-default", "github-light-high-contrast", "gruvbox-light-hard", "gruvbox-light-medium", "gruvbox-light-soft", "horizon-bright", "kanagawa-lotus", "light-plus", "material-theme-lighter", "min-light", "night-owl-light", "one-light", "rose-pine-dawn", "slack-ochin", "snazzy-light", "solarized-light", "vitesse-light"],
  rb = new Set(rm),
  ry = {
    andromeeda: () => e.A(49106),
    "aurora-x": () => e.A(1945),
    "ayu-dark": () => e.A(72988),
    "ayu-light": () => e.A(41127),
    "ayu-mirage": () => e.A(94226),
    "catppuccin-frappe": () => e.A(87649),
    "catppuccin-latte": () => e.A(45417),
    "catppuccin-macchiato": () => e.A(74230),
    "catppuccin-mocha": () => e.A(75518),
    "dark-plus": () => e.A(84691),
    dracula: () => e.A(15449),
    "dracula-soft": () => e.A(76454),
    "everforest-dark": () => e.A(47311),
    "everforest-light": () => e.A(57335),
    "github-dark": () => e.A(31126),
    "github-dark-default": () => e.A(38432),
    "github-dark-dimmed": () => e.A(40135),
    "github-dark-high-contrast": () => e.A(28706),
    "github-light": () => e.A(47504),
    "github-light-default": () => e.A(71720),
    "github-light-high-contrast": () => e.A(77007),
    "gruvbox-dark-hard": () => e.A(68946),
    "gruvbox-dark-medium": () => e.A(73202),
    "gruvbox-dark-soft": () => e.A(84564),
    "gruvbox-light-hard": () => e.A(9792),
    "gruvbox-light-medium": () => e.A(45751),
    "gruvbox-light-soft": () => e.A(78555),
    horizon: () => e.A(63397),
    "horizon-bright": () => e.A(76907),
    houston: () => e.A(8249),
    "kanagawa-dragon": () => e.A(41651),
    "kanagawa-lotus": () => e.A(77467),
    "kanagawa-wave": () => e.A(17153),
    laserwave: () => e.A(91095),
    "light-plus": () => e.A(10222),
    "material-theme": () => e.A(49138),
    "material-theme-darker": () => e.A(37860),
    "material-theme-lighter": () => e.A(81285),
    "material-theme-ocean": () => e.A(8258),
    "material-theme-palenight": () => e.A(99022),
    "min-dark": () => e.A(75533),
    "min-light": () => e.A(92633),
    monokai: () => e.A(52955),
    "night-owl": () => e.A(66216),
    "night-owl-light": () => e.A(59297),
    nord: () => e.A(77592),
    "one-dark-pro": () => e.A(70869),
    "one-light": () => e.A(92224),
    plastic: () => e.A(80707),
    poimandres: () => e.A(35158),
    red: () => e.A(37836),
    "rose-pine": () => e.A(95692),
    "rose-pine-dawn": () => e.A(99407),
    "rose-pine-moon": () => e.A(70232),
    "slack-dark": () => e.A(81322),
    "slack-ochin": () => e.A(74536),
    "snazzy-light": () => e.A(18758),
    "solarized-dark": () => e.A(89193),
    "solarized-light": () => e.A(64959),
    "synthwave-84": () => e.A(22899),
    "tokyo-night": () => e.A(60743),
    vesper: () => e.A(26985),
    "vitesse-black": () => e.A(66728),
    "vitesse-dark": () => e.A(77206),
    "vitesse-light": () => e.A(83771)
  };
function rv(e) {
  return rg({
    name: e,
    collection: "shiki",
    colorScheme: rb.has(e) ? "light" : "dark",
    load: ry[e]
  });
}
let rw = tX({
  themes: Object.freeze([...rm.map(e => rv(e)), ...["andromeeda", "aurora-x", "ayu-dark", "ayu-mirage", "catppuccin-frappe", "catppuccin-macchiato", "catppuccin-mocha", "dark-plus", "dracula", "dracula-soft", "everforest-dark", "github-dark", "github-dark-default", "github-dark-dimmed", "github-dark-high-contrast", "gruvbox-dark-hard", "gruvbox-dark-medium", "gruvbox-dark-soft", "horizon", "houston", "kanagawa-dragon", "kanagawa-wave", "laserwave", "material-theme", "material-theme-darker", "material-theme-ocean", "material-theme-palenight", "min-dark", "monokai", "night-owl", "nord", "one-dark-pro", "plastic", "poimandres", "red", "rose-pine", "rose-pine-moon", "slack-dark", "solarized-dark", "synthwave-84", "tokyo-night", "vesper", "vitesse-black", "vitesse-dark"].map(e => rv(e))])
});
function rk(e) {
  if (tI()) throw Error(`Theme "${e}" cannot be resolved from a worker context. Themes must be pre-resolved on the main thread and passed to the worker via the resolvedLanguages parameter.`);
  if (tW.hasRegisteredTheme(e)) return;
  let t = rw.getTheme(e);
  if (null != t) return void tW.registerThemeIfAbsent(t.name, t.load);
  throw Error(`No valid theme loader registered for "${e}"`);
}
function rS(e, t) {
  if (t.name !== e) throw Error(`resolvedTheme: themeName: ${e} does not match theme.name: ${t.name}`);
}
async function rC(e) {
  rk(e);
  let t = await tW.resolveTheme(e);
  return rS(e, t), t;
}
var rx = Object.defineProperty,
  rT = _module35353,
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
var rG = ((e, t) => {
  let n = {};
  for (var r in e) rx(n, r, {
    get: e[r],
    enumerable: !0
  });
  return t || rx(n, Symbol.toStringTag, {
    value: "Module"
  }), n;
})({});
let rW = Object.fromEntries([{
    id: "andromeeda",
    displayName: "Andromeeda",
    type: "dark",
    import: () => e.A(49106)
  }, {
    id: "aurora-x",
    displayName: "Aurora X",
    type: "dark",
    import: () => e.A(1945)
  }, {
    id: "ayu-dark",
    displayName: "Ayu Dark",
    type: "dark",
    import: () => e.A(72988)
  }, {
    id: "ayu-light",
    displayName: "Ayu Light",
    type: "light",
    import: () => e.A(41127)
  }, {
    id: "ayu-mirage",
    displayName: "Ayu Mirage",
    type: "dark",
    import: () => e.A(94226)
  }, {
    id: "catppuccin-frappe",
    displayName: "Catppuccin Frappé",
    type: "dark",
    import: () => e.A(87649)
  }, {
    id: "catppuccin-latte",
    displayName: "Catppuccin Latte",
    type: "light",
    import: () => e.A(45417)
  }, {
    id: "catppuccin-macchiato",
    displayName: "Catppuccin Macchiato",
    type: "dark",
    import: () => e.A(74230)
  }, {
    id: "catppuccin-mocha",
    displayName: "Catppuccin Mocha",
    type: "dark",
    import: () => e.A(75518)
  }, {
    id: "dark-plus",
    displayName: "Dark Plus",
    type: "dark",
    import: () => e.A(84691)
  }, {
    id: "dracula",
    displayName: "Dracula Theme",
    type: "dark",
    import: () => e.A(15449)
  }, {
    id: "dracula-soft",
    displayName: "Dracula Theme Soft",
    type: "dark",
    import: () => e.A(76454)
  }, {
    id: "everforest-dark",
    displayName: "Everforest Dark",
    type: "dark",
    import: () => e.A(47311)
  }, {
    id: "everforest-light",
    displayName: "Everforest Light",
    type: "light",
    import: () => e.A(57335)
  }, {
    id: "github-dark",
    displayName: "GitHub Dark",
    type: "dark",
    import: () => e.A(31126)
  }, {
    id: "github-dark-default",
    displayName: "GitHub Dark Default",
    type: "dark",
    import: () => e.A(38432)
  }, {
    id: "github-dark-dimmed",
    displayName: "GitHub Dark Dimmed",
    type: "dark",
    import: () => e.A(40135)
  }, {
    id: "github-dark-high-contrast",
    displayName: "GitHub Dark High Contrast",
    type: "dark",
    import: () => e.A(28706)
  }, {
    id: "github-light",
    displayName: "GitHub Light",
    type: "light",
    import: () => e.A(47504)
  }, {
    id: "github-light-default",
    displayName: "GitHub Light Default",
    type: "light",
    import: () => e.A(71720)
  }, {
    id: "github-light-high-contrast",
    displayName: "GitHub Light High Contrast",
    type: "light",
    import: () => e.A(77007)
  }, {
    id: "gruvbox-dark-hard",
    displayName: "Gruvbox Dark Hard",
    type: "dark",
    import: () => e.A(68946)
  }, {
    id: "gruvbox-dark-medium",
    displayName: "Gruvbox Dark Medium",
    type: "dark",
    import: () => e.A(73202)
  }, {
    id: "gruvbox-dark-soft",
    displayName: "Gruvbox Dark Soft",
    type: "dark",
    import: () => e.A(84564)
  }, {
    id: "gruvbox-light-hard",
    displayName: "Gruvbox Light Hard",
    type: "light",
    import: () => e.A(9792)
  }, {
    id: "gruvbox-light-medium",
    displayName: "Gruvbox Light Medium",
    type: "light",
    import: () => e.A(45751)
  }, {
    id: "gruvbox-light-soft",
    displayName: "Gruvbox Light Soft",
    type: "light",
    import: () => e.A(78555)
  }, {
    id: "horizon",
    displayName: "Horizon",
    type: "dark",
    import: () => e.A(63397)
  }, {
    id: "horizon-bright",
    displayName: "Horizon Bright",
    type: "light",
    import: () => e.A(76907)
  }, {
    id: "houston",
    displayName: "Houston",
    type: "dark",
    import: () => e.A(8249)
  }, {
    id: "kanagawa-dragon",
    displayName: "Kanagawa Dragon",
    type: "dark",
    import: () => e.A(41651)
  }, {
    id: "kanagawa-lotus",
    displayName: "Kanagawa Lotus",
    type: "light",
    import: () => e.A(77467)
  }, {
    id: "kanagawa-wave",
    displayName: "Kanagawa Wave",
    type: "dark",
    import: () => e.A(17153)
  }, {
    id: "laserwave",
    displayName: "LaserWave",
    type: "dark",
    import: () => e.A(91095)
  }, {
    id: "light-plus",
    displayName: "Light Plus",
    type: "light",
    import: () => e.A(10222)
  }, {
    id: "material-theme",
    displayName: "Material Theme",
    type: "dark",
    import: () => e.A(49138)
  }, {
    id: "material-theme-darker",
    displayName: "Material Theme Darker",
    type: "dark",
    import: () => e.A(37860)
  }, {
    id: "material-theme-lighter",
    displayName: "Material Theme Lighter",
    type: "light",
    import: () => e.A(81285)
  }, {
    id: "material-theme-ocean",
    displayName: "Material Theme Ocean",
    type: "dark",
    import: () => e.A(8258)
  }, {
    id: "material-theme-palenight",
    displayName: "Material Theme Palenight",
    type: "dark",
    import: () => e.A(99022)
  }, {
    id: "min-dark",
    displayName: "Min Dark",
    type: "dark",
    import: () => e.A(75533)
  }, {
    id: "min-light",
    displayName: "Min Light",
    type: "light",
    import: () => e.A(92633)
  }, {
    id: "monokai",
    displayName: "Monokai",
    type: "dark",
    import: () => e.A(52955)
  }, {
    id: "night-owl",
    displayName: "Night Owl",
    type: "dark",
    import: () => e.A(66216)
  }, {
    id: "night-owl-light",
    displayName: "Night Owl Light",
    type: "light",
    import: () => e.A(59297)
  }, {
    id: "nord",
    displayName: "Nord",
    type: "dark",
    import: () => e.A(77592)
  }, {
    id: "one-dark-pro",
    displayName: "One Dark Pro",
    type: "dark",
    import: () => e.A(70869)
  }, {
    id: "one-light",
    displayName: "One Light",
    type: "light",
    import: () => e.A(92224)
  }, {
    id: "plastic",
    displayName: "Plastic",
    type: "dark",
    import: () => e.A(80707)
  }, {
    id: "poimandres",
    displayName: "Poimandres",
    type: "dark",
    import: () => e.A(35158)
  }, {
    id: "red",
    displayName: "Red",
    type: "dark",
    import: () => e.A(37836)
  }, {
    id: "rose-pine",
    displayName: "Rosé Pine",
    type: "dark",
    import: () => e.A(95692)
  }, {
    id: "rose-pine-dawn",
    displayName: "Rosé Pine Dawn",
    type: "light",
    import: () => e.A(99407)
  }, {
    id: "rose-pine-moon",
    displayName: "Rosé Pine Moon",
    type: "dark",
    import: () => e.A(70232)
  }, {
    id: "slack-dark",
    displayName: "Slack Dark",
    type: "dark",
    import: () => e.A(81322)
  }, {
    id: "slack-ochin",
    displayName: "Slack Ochin",
    type: "light",
    import: () => e.A(74536)
  }, {
    id: "snazzy-light",
    displayName: "Snazzy Light",
    type: "light",
    import: () => e.A(18758)
  }, {
    id: "solarized-dark",
    displayName: "Solarized Dark",
    type: "dark",
    import: () => e.A(89193)
  }, {
    id: "solarized-light",
    displayName: "Solarized Light",
    type: "light",
    import: () => e.A(64959)
  }, {
    id: "synthwave-84",
    displayName: "Synthwave '84",
    type: "dark",
    import: () => e.A(22899)
  }, {
    id: "tokyo-night",
    displayName: "Tokyo Night",
    type: "dark",
    import: () => e.A(60743)
  }, {
    id: "vesper",
    displayName: "Vesper",
    type: "dark",
    import: () => e.A(26985)
  }, {
    id: "vitesse-black",
    displayName: "Vitesse Black",
    type: "dark",
    import: () => e.A(66728)
  }, {
    id: "vitesse-dark",
    displayName: "Vitesse Dark",
    type: "dark",
    import: () => e.A(77206)
  }, {
    id: "vitesse-light",
    displayName: "Vitesse Light",
    type: "light",
    import: () => e.A(83771)
  }].map(e => [e.id, e.import])),
  rV = /\s+/g;
function rq(e, t) {
  if (!t) return e;
  for (let n of (e.properties ||= {}, e.properties.class ||= [], "string" == typeof e.properties.class && (e.properties.class = e.properties.class.split(rV)), Array.isArray(e.properties.class) || (e.properties.class = []), Array.isArray(t) ? t : t.split(rV))) n && !e.properties.class.includes(n) && e.properties.class.push(n);
  return e;
}
let rX = ["color", "background-color"];
function rK(e) {
  let t = {};
  if (e.color && (t.color = e.color), e.bgColor && (t["background-color"] = e.bgColor), e.fontStyle) {
    e.fontStyle & t4.Italic && (t["font-style"] = "italic"), e.fontStyle & t4.Bold && (t["font-weight"] = "bold");
    let n = [];
    e.fontStyle & t4.Underline && n.push("underline"), e.fontStyle & t4.Strikethrough && n.push("line-through"), n.length && (t["text-decoration"] = n.join(" "));
  }
  return t;
}
function rQ(e) {
  return "string" == typeof e ? e : Object.entries(e).map(([e, t]) => `${e}:${t}`).join(";");
}
let rY = [function () {
  let e = new WeakMap();
  function t(t) {
    if (!e.has(t.meta)) {
      var n;
      let i,
        a = {
          lines: i = n6(n = t.source, !0).map(([e]) => e),
          indexToPos: function (e) {
            if (e === n.length) return {
              line: i.length - 1,
              character: i.at(-1).length
            };
            let t = e,
              r = 0;
            for (let e of i) {
              if (t < e.length) break;
              t -= e.length, r++;
            }
            return {
              line: r,
              character: t
            };
          },
          posToIndex: function (e, t) {
            let n = 0;
            for (let t = 0; t < e; t++) n += i[t].length;
            return n + t;
          }
        };
      function r(e) {
        if ("number" == typeof e) {
          if (e < 0 || e > t.source.length) throw new tQ(`Invalid decoration offset: ${e}. Code length: ${t.source.length}`);
          return {
            ...a.indexToPos(e),
            offset: e
          };
        }
        {
          let t = a.lines[e.line];
          if (void 0 === t) throw new tQ(`Invalid decoration position ${JSON.stringify(e)}. Lines length: ${a.lines.length}`);
          let n = e.character;
          if (n < 0 && (n = t.length + n), n < 0 || n > t.length) throw new tQ(`Invalid decoration position ${JSON.stringify(e)}. Line ${e.line} length: ${t.length}`);
          return {
            ...e,
            character: n,
            offset: a.posToIndex(e.line, n)
          };
        }
      }
      let o = (t.options.decorations || []).map(e => ({
        ...e,
        start: r(e.start),
        end: r(e.end)
      }));
      (function (e) {
        for (let t = 0; t < e.length; t++) {
          let n = e[t];
          if (n.start.offset > n.end.offset) throw new tQ(`Invalid decoration range: ${JSON.stringify(n.start)} - ${JSON.stringify(n.end)}`);
          for (let r = t + 1; r < e.length; r++) {
            let t = e[r],
              i = n.start.offset <= t.start.offset && t.start.offset < n.end.offset,
              a = n.start.offset < t.end.offset && t.end.offset <= n.end.offset,
              o = t.start.offset <= n.start.offset && n.start.offset < t.end.offset,
              s = t.start.offset < n.end.offset && n.end.offset <= t.end.offset;
            if (i || a || o || s) {
              if (i && a || o && s || o && n.start.offset === n.end.offset || a && t.start.offset === t.end.offset) continue;
              throw new tQ(`Decorations ${JSON.stringify(n.start)} and ${JSON.stringify(t.start)} intersect.`);
            }
          }
        }
      })(o), e.set(t.meta, {
        decorations: o,
        converter: a,
        source: t.source
      });
    }
    return e.get(t.meta);
  }
  return {
    name: "shiki:decorations",
    tokens(e) {
      if (this.options.decorations?.length) {
        var n;
        let r;
        return (r = [...((n = t(this).decorations.flatMap(e => [e.start.offset, e.end.offset])) instanceof Set ? n : new Set(n))].sort((e, t) => e - t)).length ? e.map(e => e.flatMap(e => {
          let t = e.offset + e.content.length,
            n = function (e, t) {
              let n = 0,
                r = e.length;
              for (; n < r;) {
                let i = n + (r - n >> 1);
                e[i] <= t ? n = i + 1 : r = i;
              }
              return n;
            }(r, e.offset),
            i = n;
          for (; i < r.length && r[i] < t;) i++;
          if (n === i) return e;
          let a = r.slice(n, i);
          for (let t = 0; t < a.length; t++) a[t] -= e.offset;
          let o = 0,
            s = [];
          for (let t of a) t > o && s.push({
            ...e,
            content: e.content.slice(o, t),
            offset: e.offset + o
          }), o = t;
          return o < e.content.length && s.push({
            ...e,
            content: e.content.slice(o),
            offset: e.offset + o
          }), s;
        })) : e;
      }
    },
    code(e) {
      if (!this.options.decorations?.length) return;
      let n = t(this),
        r = [...e.children].filter(e => "element" === e.type && "span" === e.tagName);
      if (r.length !== n.converter.lines.length) throw new tQ(`Number of lines in code element (${r.length}) does not match the number of lines in the source (${n.converter.lines.length}). Failed to apply decorations.`);
      function i(e, t, n, i) {
        let o = r[e],
          s = "",
          l = -1,
          d = -1;
        if (0 === t && (l = 0), 0 === n && (d = 0), n === 1 / 0 && (d = o.children.length), -1 === l || -1 === d) for (let e = 0; e < o.children.length; e++) s += function e(t) {
          return "text" === t.type ? t.value : "element" === t.type ? t.children.map(e).join("") : "";
        }(o.children[e]), -1 === l && s.length === t && (l = e + 1), -1 === d && s.length === n && (d = e + 1);
        if (-1 === l) throw new tQ(`Failed to find start index for decoration ${JSON.stringify(i.start)}`);
        if (-1 === d) throw new tQ(`Failed to find end index for decoration ${JSON.stringify(i.end)}`);
        let u = o.children.slice(l, d);
        if (i.alwaysWrap || u.length !== o.children.length) {
          if (i.alwaysWrap || 1 !== u.length || "element" !== u[0].type) {
            let e = {
              type: "element",
              tagName: "span",
              properties: {},
              children: u
            };
            a(e, i, "wrapper"), o.children.splice(l, u.length, e);
          } else a(u[0], i, "token");
        } else a(o, i, "line");
      }
      function a(e, t, n) {
        let r = t.properties || {},
          i = t.transform || (e => e);
        return e.tagName = t.tagName || "span", e.properties = {
          ...e.properties,
          ...r,
          class: e.properties.class
        }, t.properties?.class && rq(e, t.properties.class), e = i(e, n) || e;
      }
      let o = [];
      for (let e of n.decorations.sort((e, t) => t.start.offset - e.start.offset || e.end.offset - t.end.offset)) {
        let {
          start: t,
          end: n
        } = e;
        if (t.line === n.line) i(t.line, t.character, n.character, e);else if (t.line < n.line) {
          i(t.line, t.character, 1 / 0, e);
          for (let i = t.line + 1; i < n.line; i++) o.unshift(() => {
            var t;
            r[t = i] = a(r[t], e, "line");
          });
          i(n.line, 0, n.character, e);
        }
      }
      o.forEach(e => e());
    }
  };
}()];
function rJ(e) {
  let t = function (e) {
    let t = [],
      n = [],
      r = [];
    for (let i of e) switch (i.enforce) {
      case "pre":
        t.push(i);
        break;
      case "post":
        n.push(i);
        break;
      default:
        r.push(i);
    }
    return {
      pre: t,
      post: n,
      normal: r
    };
  }(e.transformers || []);
  return [...t.pre, ...t.normal, ...t.post, ...rY];
}
var rZ = ["black", "red", "green", "yellow", "blue", "magenta", "cyan", "white", "brightBlack", "brightRed", "brightGreen", "brightYellow", "brightBlue", "brightMagenta", "brightCyan", "brightWhite"],
  r0 = {
    1: "bold",
    2: "dim",
    3: "italic",
    4: "underline",
    7: "reverse",
    8: "hidden",
    9: "strikethrough"
  };
function r1(e) {
  let t = e.shift();
  if ("2" === t) {
    let t = e.splice(0, 3).map(e => Number.parseInt(e));
    if (3 !== t.length || t.some(e => Number.isNaN(e))) return;
    return {
      type: "rgb",
      rgb: t
    };
  }
  if ("5" === t) {
    let t = e.shift();
    if (t) return {
      type: "table",
      index: Number(t)
    };
  }
}
var r2 = {
  black: "#000000",
  red: "#bb0000",
  green: "#00bb00",
  yellow: "#bbbb00",
  blue: "#0000bb",
  magenta: "#ff00ff",
  cyan: "#00bbbb",
  white: "#eeeeee",
  brightBlack: "#555555",
  brightRed: "#ff5555",
  brightGreen: "#00ff00",
  brightYellow: "#ffff55",
  brightBlue: "#5555ff",
  brightMagenta: "#ff55ff",
  brightCyan: "#55ffff",
  brightWhite: "#ffffff"
};
let r8 = /#([0-9a-f]{3,8})/i,
  r5 = /var\((--[\w-]+-ansi-[\w-]+)\)/,
  r6 = {
    black: "#000000",
    red: "#cd3131",
    green: "#0DBC79",
    yellow: "#E5E510",
    blue: "#2472C8",
    magenta: "#BC3FBC",
    cyan: "#11A8CD",
    white: "#E5E5E5",
    brightBlack: "#666666",
    brightRed: "#F14C4C",
    brightGreen: "#23D18B",
    brightYellow: "#F5F543",
    brightBlue: "#3B8EEA",
    brightMagenta: "#D670D6",
    brightCyan: "#29B8DB",
    brightWhite: "#FFFFFF"
  };
function r7(e, t, n = {}) {
  let r = e.resolveLangAlias(n.lang || "text"),
    {
      theme: i = e.getLoadedThemes()[0]
    } = n;
  if (!n1(r) && !n8(i) && "ansi" === r) {
    let r,
      a,
      o,
      s,
      l,
      d,
      u,
      {
        theme: h
      } = e.setTheme(i);
    return r = nJ(h, n), a = n6(t), o = function (e = r2) {
      let t;
      function n(e) {
        return `#${e.map(e => Math.max(0, Math.min(e, 255)).toString(16).padStart(2, "0")).join("")}`;
      }
      return {
        value: function (r) {
          switch (r.type) {
            case "named":
              return e[r.name];
            case "rgb":
              return n(r.rgb);
            case "table":
              var i;
              return i = r.index, function () {
                if (t) return t;
                t = [];
                for (let n = 0; n < rZ.length; n++) t.push(e[rZ[n]]);
                let r = [0, 95, 135, 175, 215, 255];
                for (let e = 0; e < 6; e++) for (let i = 0; i < 6; i++) for (let a = 0; a < 6; a++) t.push(n([r[e], r[i], r[a]]));
                let i = 8;
                for (let e = 0; e < 24; e++, i += 10) t.push(n([i, i, i]));
                return t;
              }()[i];
          }
        }
      };
    }(Object.fromEntries(rZ.map(e => {
      let t = `terminal.ansi${e[0].toUpperCase()}${e.substring(1)}`;
      return [e, h.colors?.[t] || r6[e]];
    }))), s = null, l = null, d = new Set(), u = {
      parse(e) {
        let t = [],
          n = 0;
        do {
          let r = function (e, t) {
              let n = e.indexOf("\x1b", t);
              if (-1 !== n && "[" === e[n + 1]) {
                let t = e.indexOf("m", n);
                if (-1 !== t) return {
                  sequence: e.substring(n + 2, t).split(";"),
                  startPosition: n,
                  position: t + 1
                };
              }
              return {
                position: e.length
              };
            }(e, n),
            i = r.sequence ? e.substring(n, r.startPosition) : e.substring(n);
          if (i.length > 0 && t.push({
            value: i,
            foreground: s,
            background: l,
            decorations: new Set(d)
          }), r.sequence) {
            let e = function (e) {
              let t = [];
              for (; e.length > 0;) {
                let n = e.shift();
                if (!n) continue;
                let r = Number.parseInt(n);
                if (!Number.isNaN(r)) if (0 === r) t.push({
                  type: "resetAll"
                });else if (r <= 9) r0[r] && t.push({
                  type: "setDecoration",
                  value: r0[r]
                });else if (r <= 29) {
                  let e = r0[r - 20];
                  e && (t.push({
                    type: "resetDecoration",
                    value: e
                  }), "dim" === e && t.push({
                    type: "resetDecoration",
                    value: "bold"
                  }));
                } else if (r <= 37) t.push({
                  type: "setForegroundColor",
                  value: {
                    type: "named",
                    name: rZ[r - 30]
                  }
                });else if (38 === r) {
                  let n = r1(e);
                  n && t.push({
                    type: "setForegroundColor",
                    value: n
                  });
                } else if (39 === r) t.push({
                  type: "resetForegroundColor"
                });else if (r <= 47) t.push({
                  type: "setBackgroundColor",
                  value: {
                    type: "named",
                    name: rZ[r - 40]
                  }
                });else if (48 === r) {
                  let n = r1(e);
                  n && t.push({
                    type: "setBackgroundColor",
                    value: n
                  });
                } else 49 === r ? t.push({
                  type: "resetBackgroundColor"
                }) : 53 === r ? t.push({
                  type: "setDecoration",
                  value: "overline"
                }) : 55 === r ? t.push({
                  type: "resetDecoration",
                  value: "overline"
                }) : r >= 90 && r <= 97 ? t.push({
                  type: "setForegroundColor",
                  value: {
                    type: "named",
                    name: rZ[r - 90 + 8]
                  }
                }) : r >= 100 && r <= 107 && t.push({
                  type: "setBackgroundColor",
                  value: {
                    type: "named",
                    name: rZ[r - 100 + 8]
                  }
                });
              }
              return t;
            }(r.sequence);
            for (let t of e) "resetAll" === t.type ? (s = null, l = null, d.clear()) : "resetForegroundColor" === t.type ? s = null : "resetBackgroundColor" === t.type ? l = null : "resetDecoration" === t.type && d.delete(t.value);
            for (let t of e) "setForegroundColor" === t.type ? s = t.value : "setBackgroundColor" === t.type ? l = t.value : "setDecoration" === t.type && d.add(t.value);
          }
          n = r.position;
        } while (n < e.length);
        return t;
      }
    }, a.map(e => u.parse(e[0]).map(t => {
      let n, i;
      t.decorations.has("reverse") ? (n = t.background ? o.value(t.background) : h.bg, i = t.foreground ? o.value(t.foreground) : h.fg) : (n = t.foreground ? o.value(t.foreground) : h.fg, i = t.background ? o.value(t.background) : void 0), n = nZ(n, r), i = nZ(i, r), t.decorations.has("dim") && (n = function (e) {
        let t = e.match(r8);
        if (t) {
          let e = t[1];
          if (8 === e.length) {
            let t = Math.round(Number.parseInt(e.slice(6, 8), 16) / 2).toString(16).padStart(2, "0");
            return `#${e.slice(0, 6)}${t}`;
          }
          if (6 === e.length) return `#${e}80`;
          if (4 === e.length) {
            let t = e[0],
              n = e[1],
              r = e[2],
              i = e[3];
            return `#${t}${t}${n}${n}${r}${r}${Math.round(Number.parseInt(`${i}${i}`, 16) / 2).toString(16).padStart(2, "0")}`;
          } else if (3 === e.length) {
            let t = e[0],
              n = e[1],
              r = e[2];
            return `#${t}${t}${n}${n}${r}${r}80`;
          }
        }
        let n = e.match(r5);
        return n ? `var(${n[1]}-dim)` : e;
      }(n));
      let a = t4.None;
      return t.decorations.has("bold") && (a |= t4.Bold), t.decorations.has("italic") && (a |= t4.Italic), t.decorations.has("underline") && (a |= t4.Underline), t.decorations.has("strikethrough") && (a |= t4.Strikethrough), {
        content: t.value,
        offset: e[1],
        color: n,
        bgColor: i,
        fontStyle: a
      };
    }));
  }
  return rh(e, t, n);
}
function r3(e, t, n) {
  let r, i, a, o, s, l;
  if ("themes" in n) {
    let {
        defaultColor: d = "light",
        cssVariablePrefix: u = "--shiki-",
        colorsRendering: h = "css-vars"
      } = n,
      c = Object.entries(n.themes).filter(e => e[1]).map(e => ({
        color: e[0],
        theme: e[1]
      })).sort((e, t) => e.color === d ? -1 : +(t.color === d));
    if (0 === c.length) throw new tQ("`themes` option must not be empty");
    let f = rp(e, t, n, r7);
    if (l = rs(f), d && "light-dark()" !== d && !c.some(e => e.color === d)) throw new tQ(`\`themes\` option must contain the defaultColor key \`${d}\``);
    let p = c.map(t => e.getTheme(t.theme)),
      g = c.map(e => e.color);
    a = f.map(e => e.map(e => function (e, t, n, r, i = "css-vars") {
      let a = {
          content: e.content,
          explanation: e.explanation,
          offset: e.offset
        },
        o = t.map(t => rK(e.variants[t])),
        s = new Set(o.flatMap(e => Object.keys(e))),
        l = {},
        d = (e, r) => {
          let i = "color" === r ? "" : "background-color" === r ? "-bg" : `-${r}`;
          return n + t[e] + ("color" === r ? "" : i);
        };
      return o.forEach((e, n) => {
        for (let a of s) {
          let s = e[a] || "inherit";
          if (0 === n && r && rX.includes(a)) {
            if ("light-dark()" === r && o.length > 1) {
              let e = t.findIndex(e => "light" === e),
                r = t.findIndex(e => "dark" === e);
              if (-1 === e || -1 === r) throw new tQ('When using `defaultColor: "light-dark()"`, you must provide both `light` and `dark` themes');
              let u = o[e][a] || "inherit",
                h = o[r][a] || "inherit";
              l[a] = `light-dark(${u}, ${h})`, "css-vars" === i && (l[d(n, a)] = s);
            } else l[a] = s;
          } else "css-vars" === i && (l[d(n, a)] = s);
        }
      }), a.htmlStyle = l, a;
    }(e, g, u, d, h))), l && ro(a, l);
    let m = c.map(e => nJ(e.theme, n));
    i = r4(c, p, m, u, d, "fg", h), r = r4(c, p, m, u, d, "bg", h), o = `shiki-themes ${p.map(e => e.name).join(" ")}`, s = d ? void 0 : [i, r].join(";");
  } else if ("theme" in n) {
    let s = nJ(n.theme, n);
    a = r7(e, t, n);
    let d = e.getTheme(n.theme);
    r = nZ(d.bg, s), i = nZ(d.fg, s), o = d.name, l = rs(a);
  } else throw new tQ("Invalid options, either `theme` or `themes` must be provided");
  return {
    tokens: a,
    fg: i,
    bg: r,
    themeName: o,
    rootStyle: s,
    grammarState: l
  };
}
function r4(e, t, n, r, i, a, o) {
  return e.map((s, l) => {
    let d = nZ(t[l][a], n[l]) || "inherit",
      u = `${r + s.color}${"bg" === a ? "-bg" : ""}:${d}`;
    if (0 === l && i) {
      if ("light-dark()" === i && e.length > 1) {
        let r = e.findIndex(e => "light" === e.color),
          i = e.findIndex(e => "dark" === e.color);
        if (-1 === r || -1 === i) throw new tQ('When using `defaultColor: "light-dark()"`, you must provide both `light` and `dark` themes');
        return `light-dark(${nZ(t[r][a], n[r]) || "inherit"}, ${nZ(t[i][a], n[i]) || "inherit"});${u}`;
      }
      return d;
    }
    return "css-vars" === o ? u : null;
  }).filter(e => !!e).join(";");
}
let r9 = /^\s+$/,
  ie = /^(\s*)(.*?)(\s*)$/;
function it(e, t, n, r = {
  meta: {},
  options: n,
  codeToHast: (t, n) => it(e, t, n),
  codeToTokens: (t, n) => r3(e, t, n)
}) {
  let i = t;
  for (let e of rJ(n)) i = e.preprocess?.call(r, i, n) || i;
  let {
      tokens: a,
      fg: o,
      bg: s,
      themeName: l,
      rootStyle: d,
      grammarState: u
    } = r3(e, i, n),
    {
      mergeWhitespaces: h = !0,
      mergeSameStyleTokens: c = !1
    } = n;
  !0 === h ? a = a.map(e => {
    let t,
      n = [],
      r = "";
    return e.forEach((i, a) => {
      let o = !(i.fontStyle && (i.fontStyle & t4.Underline || i.fontStyle & t4.Strikethrough));
      o && r9.test(i.content) && e[a + 1] ? (void 0 === t && (t = i.offset), r += i.content) : r ? (o ? n.push({
        ...i,
        offset: t,
        content: r + i.content
      }) : n.push({
        content: r,
        offset: t
      }, i), t = void 0, r = "") : n.push(i);
    }), n;
  }) : "never" === h && (a = a.map(e => e.flatMap(e => {
    if (r9.test(e.content)) return e;
    let t = e.content.match(ie);
    if (!t) return e;
    let [, n, r, i] = t;
    if (!n && !i) return e;
    let a = [{
      ...e,
      offset: e.offset + n.length,
      content: r
    }];
    return n && a.unshift({
      content: n,
      offset: e.offset
    }), i && a.push({
      content: i,
      offset: e.offset + n.length + r.length
    }), a;
  }))), c && (a = a.map(e => {
    let t = [];
    for (let n of e) {
      if (0 === t.length) {
        t.push({
          ...n
        });
        continue;
      }
      let e = t.at(-1),
        r = rQ(e.htmlStyle || rK(e)),
        i = rQ(n.htmlStyle || rK(n)),
        a = e.fontStyle && (e.fontStyle & t4.Underline || e.fontStyle & t4.Strikethrough),
        o = n.fontStyle && (n.fontStyle & t4.Underline || n.fontStyle & t4.Strikethrough);
      a || o || r !== i ? t.push({
        ...n
      }) : e.content += n.content;
    }
    return t;
  }));
  let f = {
    ...r,
    get source() {
      return i;
    }
  };
  for (let e of rJ(n)) a = e.tokens?.call(f, a) || a;
  return function (e, t, n, r = rs(e)) {
    let i = rJ(t),
      a = [],
      o = {
        type: "root",
        children: []
      },
      {
        structure: s = "classic",
        tabindex: l = "0"
      } = t,
      d = {
        class: `shiki ${t.themeName || ""}`
      };
    for (let [e, n] of (!1 !== t.rootStyle && (null != t.rootStyle ? d.style = t.rootStyle : d.style = `background-color:${t.bg};color:${t.fg}`), !1 !== l && null != l && (d.tabindex = l.toString()), Object.entries(t.meta || {}))) e.startsWith("_") || (d[e] = n);
    let u = {
        type: "element",
        tagName: "pre",
        properties: d,
        children: [],
        data: t.data
      },
      h = {
        type: "element",
        tagName: "code",
        properties: {},
        children: a
      },
      c = [],
      f = {
        ...n,
        structure: s,
        addClassToHast: rq,
        get source() {
          return n.source;
        },
        get tokens() {
          return e;
        },
        get options() {
          return t;
        },
        get root() {
          return o;
        },
        get pre() {
          return u;
        },
        get code() {
          return h;
        },
        get lines() {
          return c;
        }
      };
    if (e.forEach((e, t) => {
      t && ("inline" === s ? o.children.push({
        type: "element",
        tagName: "br",
        properties: {},
        children: []
      }) : "classic" === s && a.push({
        type: "text",
        value: "\n"
      }));
      let n = {
          type: "element",
          tagName: "span",
          properties: {
            class: "line"
          },
          children: []
        },
        r = 0;
      for (let a of e) {
        let e = {
            type: "element",
            tagName: "span",
            properties: {
              ...a.htmlAttrs
            },
            children: [{
              type: "text",
              value: a.content
            }]
          },
          l = rQ(a.htmlStyle || rK(a));
        for (let o of (l && (e.properties.style = l), i)) e = o?.span?.call(f, e, t + 1, r, n, a) || e;
        "inline" === s ? o.children.push(e) : "classic" === s && n.children.push(e), r += a.content.length;
      }
      if ("classic" === s) {
        for (let e of i) n = e?.line?.call(f, n, t + 1) || n;
        c.push(n), a.push(n);
      } else "inline" === s && c.push(n);
    }), "classic" === s) {
      for (let e of i) h = e?.code?.call(f, h) || h;
      for (let e of (u.children.push(h), i)) u = e?.pre?.call(f, u) || u;
      o.children.push(u);
    } else if ("inline" === s) {
      let e = [],
        t = {
          type: "element",
          tagName: "span",
          properties: {
            class: "line"
          },
          children: []
        };
      for (let n of o.children) "element" === n.type && "br" === n.tagName ? (e.push(t), t = {
        type: "element",
        tagName: "span",
        properties: {
          class: "line"
        },
        children: []
      }) : ("element" === n.type || "text" === n.type) && t.children.push(n);
      e.push(t);
      let n = {
        type: "element",
        tagName: "code",
        properties: {},
        children: e
      };
      for (let e of i) n = e?.code?.call(f, n) || n;
      o.children = [];
      for (let e = 0; e < n.children.length; e++) {
        e > 0 && o.children.push({
          type: "element",
          tagName: "br",
          properties: {},
          children: []
        });
        let t = n.children[e];
        "element" === t.type && o.children.push(...t.children);
      }
    }
    let p = o;
    for (let e of i) p = e?.root?.call(f, p) || p;
    return r && ro(p, r), p;
  }(a, {
    ...n,
    fg: o,
    bg: s,
    themeName: l,
    rootStyle: !1 !== n.rootStyle && (n.rootStyle ?? d)
  }, f, u);
}
async function ir(e) {
  let t = await ri(e);
  return {
    getLastGrammarState: (...e) => function (...e) {
      if (2 === e.length) return rs(e[1]);
      let [t, n, r = {}] = e,
        {
          lang: i = "text",
          theme: a = t.getLoadedThemes()[0]
        } = r;
      if (n1(i) || n8(a)) throw new tQ("Plain language does not have grammar state");
      if ("ansi" === i) throw new tQ("ANSI language does not have grammar state");
      let {
          theme: o,
          colorMap: s
        } = t.setTheme(a),
        l = t.getLanguage(i);
      return new rl(rc(n, l, o, s, r).stateStack, l.name, o.name);
    }(t, ...e),
    codeToTokensBase: (e, n) => r7(t, e, n),
    codeToTokensWithThemes: (e, n) => rp(t, e, n),
    codeToTokens: (e, n) => r3(t, e, n),
    codeToHast: (e, n) => it(t, e, n),
    codeToHtml: (e, n) => function (e, t, n) {
      let r = {
          meta: {},
          options: n,
          codeToHast: (t, n) => it(e, t, n),
          codeToTokens: (t, n) => r3(e, t, n)
        },
        i = tr(it(e, t, n, r));
      for (let e of rJ(n)) i = e.postprocess?.call(r, i, n) || i;
      return i;
    }(t, e, n),
    getBundledLanguages: () => ({}),
    getBundledThemes: () => ({}),
    ...t,
    getInternalContext: () => t
  };
}
let ii = (s = (f = {
  langs: tB,
  themes: rW,
  engine: () => (0, rG.createOnigurumaEngine)(e.A(77473))
}).langs, l = f.themes, d = f.engine, async function (e) {
  function t(t) {
    if ("string" == typeof t) {
      if (n2(t = e.langAlias?.[t] || t)) return [];
      let n = s[t];
      if (!n) throw new tQ(`Language \`${t}\` is not included in this bundle. You may want to load it from external source.`);
      return n;
    }
    return t;
  }
  function n(e) {
    if (n8(e)) return "none";
    if ("string" == typeof e) {
      let t = l[e];
      if (!t) throw new tQ(`Theme \`${e}\` is not included in this bundle. You may want to load it from external source.`);
      return t;
    }
    return e;
  }
  let r = (e.themes ?? []).map(e => n(e)),
    i = (e.langs ?? []).map(e => t(e)),
    a = await ir({
      engine: e.engine ?? d(),
      ...e,
      themes: r,
      langs: i
    });
  return {
    ...a,
    loadLanguage: (...e) => a.loadLanguage(...e.map(t)),
    loadTheme: (...e) => a.loadTheme(...e.map(n)),
    getBundledLanguages: () => s,
    getBundledThemes: () => l
  };
});
var ia = class {
  patterns;
  options;
  regexps;
  constructor(e, t = {}) {
    this.patterns = e, this.options = t;
    const {
      forgiving: n = !1,
      cache: r,
      regexConstructor: i
    } = t;
    if (!i) throw Error("Option `regexConstructor` is not provided");
    this.regexps = e.map(e => {
      if ("string" != typeof e) return e;
      let t = r?.get(e);
      if (t) {
        if (t instanceof RegExp) return t;
        if (n) return null;
        throw t;
      }
      try {
        let t = i(e);
        return r?.set(e, t), t;
      } catch (t) {
        if (r?.set(e, t), n) return null;
        throw t;
      }
    });
  }
  findNextMatchSync(e, t, n) {
    let r = "string" == typeof e ? e : e.content,
      i = [];
    function a(e, t, n = 0) {
      return {
        index: e,
        captureIndices: t.indices.map(e => null == e ? {
          start: 0xffffffff,
          end: 0xffffffff,
          length: 0
        } : {
          start: e[0] + n,
          end: e[1] + n,
          length: e[1] - e[0]
        })
      };
    }
    for (let e = 0; e < this.regexps.length; e++) {
      let n = this.regexps[e];
      if (n) try {
        n.lastIndex = t;
        let o = n.exec(r);
        if (!o) continue;
        if (o.index === t) return a(e, o, 0);
        i.push([e, o, 0]);
      } catch (e) {
        if (this.options.forgiving) continue;
        throw e;
      }
    }
    if (i.length) {
      let e = Math.min(...i.map(e => e[1].index));
      for (let [t, n, r] of i) if (n.index === e) return a(t, n, r);
    }
    return null;
  }
};
function io(e) {
  if (1 != [...e].length) throw Error(`Expected "${e}" to be a single code point`);
  return e.codePointAt(0);
}
let is = new Set(["alnum", "alpha", "ascii", "blank", "cntrl", "digit", "graph", "lower", "print", "punct", "space", "upper", "word", "xdigit"]),
  il = String.raw;
function id(e, t) {
  if (null == e) throw Error(t ?? "Value expected");
  return e;
}
let iu = il`\[\^?`,
  ih = `c.? | C(?:-.?)?|${il`[pP]\{(?:\^?[-\x20_]*[A-Za-z][-\x20\w]*\})?`}|${il`x[89A-Fa-f]\p{AHex}(?:\\x[89A-Fa-f]\p{AHex})*`}|${il`u(?:\p{AHex}{4})? | x\{[^\}]*\}? | x\p{AHex}{0,2}`}|${il`o\{[^\}]*\}?`}|${il`\d{1,3}`}`,
  ic = /[?*+][?+]?|\{(?:\d+(?:,\d*)?|,\d+)\}\??/,
  ip = RegExp(il`
  \\ (?:
    ${ih}
    | [gk]<[^>]*>?
    | [gk]'[^']*'?
    | .
  )
  | \( (?:
    \? (?:
      [:=!>({]
      | <[=!]
      | <[^>]*>
      | '[^']*'
      | ~\|?
      | #(?:[^)\\]|\\.?)*
      | [^:)]*[:)]
    )?
    | \*[^\)]*\)?
  )?
  | (?:${ic.source})+
  | ${iu}
  | .
`.replace(/\s+/g, ""), "gsu"),
  ig = RegExp(il`
  \\ (?:
    ${ih}
    | .
  )
  | \[:(?:\^?\p{Alpha}+|\^):\]
  | ${iu}
  | &&
  | .
`.replace(/\s+/g, ""), "gsu");
function im(e, {
  inCharClass: t
}) {
  let n = e[1];
  if ("c" === n || "C" === n) {
    var r,
      i = e;
    let t = "c" === i[1] ? i[2] : i[3];
    if (!t || !/[A-Za-z]/.test(t)) throw Error(`Unsupported control character "${i}"`);
    return iv(io(t.toUpperCase()) - 64, i);
  }
  if ("dDhHsSwW".includes(n)) {
    let t;
    return ik({
      d: "digit",
      h: "hex",
      s: "space",
      w: "word"
    }[t = (r = e)[1].toLowerCase()], r, {
      negate: r[1] !== t
    });
  }
  if (e.startsWith(il`\o{`)) throw Error(`Incomplete, invalid, or unsupported octal code point "${e}"`);
  if (/^\\[pP]\{/.test(e)) {
    if (3 === e.length) throw Error(`Incomplete or invalid Unicode property "${e}"`);
    return function (e) {
      let {
        p: t,
        neg: n,
        value: r
      } = /^\\(?<p>[pP])\{(?<neg>\^?)(?<value>[^}]+)/.exec(e).groups;
      return ik("property", e, {
        value: r,
        negate: "P" === t && !n || "p" === t && !!n
      });
    }(e);
  }
  if (/^\\x[89A-Fa-f]\p{AHex}/u.test(e)) try {
    let t = e.split(/\\x/).slice(1).map(e => parseInt(e, 16)),
      n = new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
      }).decode(new Uint8Array(t)),
      r = new TextEncoder();
    return [...n].map(e => {
      let t = [...r.encode(e)].map(e => `\\x${e.toString(16)}`).join("");
      return iv(io(e), t);
    });
  } catch {
    throw Error(`Multibyte code "${e}" incomplete or invalid in Oniguruma`);
  }
  if ("u" === n || "x" === n) return iv(function (e) {
    if (/^(?:\\u(?!\p{AHex}{4})|\\x(?!\p{AHex}{1,2}|\{\p{AHex}{1,8}\}))/u.test(e)) throw Error(`Incomplete or invalid escape "${e}"`);
    return parseInt("{" === e[2] ? /^\\x\{\s*(?<hex>\p{AHex}+)/u.exec(e).groups.hex : e.slice(2), 16);
  }(e), e);
  if (iA.has(n)) return iv(iA.get(n), e);
  if (/\d/.test(n)) return {
    type: "EscapedNumber",
    inCharClass: t,
    raw: e
  };
  if ("\\" === e) throw Error(il`Incomplete escape "\"`);
  if ("M" === n) throw Error(`Unsupported meta "${e}"`);
  if (2 == [...e].length) return iv(e.codePointAt(1), e);
  throw Error(`Unexpected escape "${e}"`);
}
function ib(e, t) {
  return {
    type: "Assertion",
    kind: e,
    raw: t
  };
}
function iy(e) {
  return {
    type: "Backreference",
    raw: e
  };
}
function iv(e, t) {
  return {
    type: "Character",
    value: e,
    raw: t
  };
}
function iw(e, t) {
  return {
    type: "CharacterClassOpen",
    negate: e,
    raw: t
  };
}
function ik(e, t, n = {}) {
  return {
    type: "CharacterSet",
    kind: e,
    ...n,
    raw: t
  };
}
function iS(e, t, n = {}) {
  return "keep" === e ? {
    type: "Directive",
    kind: e,
    raw: t
  } : {
    type: "Directive",
    kind: e,
    flags: id(n.flags),
    raw: t
  };
}
function iC(e, t, n = {}) {
  return {
    type: "GroupOpen",
    kind: e,
    ...n,
    raw: t
  };
}
let ix = new Set(["COUNT", "CMP", "ERROR", "FAIL", "MAX", "MISMATCH", "SKIP", "TOTAL_COUNT"]),
  iA = new Map([["a", 7], ["b", 8], ["e", 27], ["f", 12], ["n", 10], ["r", 13], ["t", 9], ["v", 11]]);
function iE(e) {
  let t = null,
    n,
    r;
  if ("{" === e[0]) {
    let {
      minStr: i,
      maxStr: a
    } = /^\{(?<minStr>\d*)(?:,(?<maxStr>\d*))?/.exec(e).groups;
    if (+i > 1e5 || a && +a > 1e5) throw Error("Quantifier value unsupported in Oniguruma");
    if ((n = +i) > (r = void 0 === a ? +i : "" === a ? 1 / 0 : +a) && (t = "possessive", [n, r] = [r, n]), e.endsWith("?")) {
      if ("possessive" === t) throw Error('Unsupported possessive interval quantifier chain with "?"');
      t = "lazy";
    } else t || (t = "greedy");
  } else n = +("+" === e[0]), r = "?" === e[0] ? 1 : 1 / 0, t = "+" === e[1] ? "possessive" : "?" === e[1] ? "lazy" : "greedy";
  return {
    type: "Quantifier",
    kind: t,
    min: n,
    max: r,
    raw: e
  };
}
function iL(e) {
  let t = {};
  return e.includes("i") && (t.ignoreCase = !0), e.includes("m") && (t.dotAll = !0), e.includes("x") && (t.extended = !0), Object.keys(t).length ? t : null;
}
function i_(e, t) {
  if (!Array.isArray(e.body)) throw Error("Expected node with body array");
  if (1 !== e.body.length) return !1;
  let n = e.body[0];
  return !t || Object.keys(t).every(e => t[e] === n[e]);
}
let iT = new Set(["AbsenceFunction", "Backreference", "CapturingGroup", "Character", "CharacterClass", "CharacterSet", "Group", "Quantifier", "Subroutine"]);
function iR(e, t = {}) {
  var n;
  let r = {
      flags: "",
      normalizeUnknownPropertyNames: !1,
      skipBackrefValidation: !1,
      skipLookbehindValidation: !1,
      skipPropertyNameValidation: !1,
      unicodePropertyMap: null,
      ...t,
      rules: {
        captureGroup: !1,
        singleline: !1,
        ...t.rules
      }
    },
    i = function (e, t = {}) {
      let n = {
        flags: "",
        ...t,
        rules: {
          captureGroup: !1,
          singleline: !1,
          ...t.rules
        }
      };
      if ("string" != typeof e) throw Error("String expected as pattern");
      let r = function (e) {
          let t = {
            ignoreCase: !1,
            dotAll: !1,
            extended: !1,
            digitIsAscii: !1,
            posixIsAscii: !1,
            spaceIsAscii: !1,
            wordIsAscii: !1,
            textSegmentMode: null
          };
          for (let n = 0; n < e.length; n++) {
            let r = e[n];
            if (!"imxDPSWy".includes(r)) throw Error(`Invalid flag "${r}"`);
            if ("y" === r) {
              if (!/^y{[gw]}/.test(e.slice(n))) throw Error('Invalid or unspecified flag "y" mode');
              t.textSegmentMode = "g" === e[n + 2] ? "grapheme" : "word", n += 3;
              continue;
            }
            t[{
              i: "ignoreCase",
              m: "dotAll",
              x: "extended",
              D: "digitIsAscii",
              P: "posixIsAscii",
              S: "spaceIsAscii",
              W: "wordIsAscii"
            }[r]] = !0;
          }
          return t;
        }(n.flags),
        i = [r.extended],
        a = {
          captureGroup: n.rules.captureGroup,
          getCurrentModX: () => i.at(-1),
          numOpenGroups: 0,
          popModX() {
            i.pop();
          },
          pushModX(e) {
            i.push(e);
          },
          replaceCurrentModX(e) {
            i[i.length - 1] = e;
          },
          singleline: n.rules.singleline
        },
        o = [],
        s;
      for (ip.lastIndex = 0; s = ip.exec(e);) {
        let t = function (e, t, n, r) {
          let [i, a] = n;
          if ("[" === n || "[^" === n) {
            let e = function (e, t, n) {
              let r = [iw("^" === t[1], t)],
                i = 1,
                a;
              for (ig.lastIndex = n; a = ig.exec(e);) {
                let e = a[0];
                if ("[" === e[0] && ":" !== e[1]) i++, r.push(iw("^" === e[1], e));else if ("]" === e) {
                  if ("CharacterClassOpen" === r.at(-1).type) r.push(iv(93, e));else if (i--, r.push({
                    type: "CharacterClassClose",
                    raw: e
                  }), !i) break;
                } else {
                  let t = function (e) {
                    if ("\\" === e[0]) return im(e, {
                      inCharClass: !0
                    });
                    if ("[" === e[0]) {
                      let t = /\[:(?<negate>\^?)(?<name>[a-z]+):\]/.exec(e);
                      if (!t || !is.has(t.groups.name)) throw Error(`Invalid POSIX class "${e}"`);
                      return ik("posix", e, {
                        value: t.groups.name,
                        negate: !!t.groups.negate
                      });
                    }
                    return "-" === e ? {
                      type: "CharacterClassHyphen",
                      raw: e
                    } : "&&" === e ? {
                      type: "CharacterClassIntersector",
                      raw: e
                    } : iv(io(e), e);
                  }(e);
                  Array.isArray(t) ? r.push(...t) : r.push(t);
                }
              }
              return {
                tokens: r,
                lastIndex: ig.lastIndex || e.length
              };
            }(t, n, r);
            return {
              tokens: e.tokens,
              lastIndex: e.lastIndex
            };
          }
          if ("\\" === i) {
            if ("AbBGyYzZ".includes(a)) return {
              token: ib(n, n)
            };
            if (/^\\g[<']/.test(n)) {
              if (!/^\\g(?:<[^>]+>|'[^']+')$/.test(n)) throw Error(`Invalid group name "${n}"`);
              return {
                token: {
                  type: "Subroutine",
                  raw: n
                }
              };
            }
            if (/^\\k[<']/.test(n)) {
              if (!/^\\k(?:<[^>]+>|'[^']+')$/.test(n)) throw Error(`Invalid group name "${n}"`);
              return {
                token: iy(n)
              };
            }
            if ("K" === a) return {
              token: iS("keep", n)
            };
            if ("N" === a || "R" === a) return {
              token: ik("newline", n, {
                negate: "N" === a
              })
            };
            if ("O" === a) return {
              token: ik("any", n)
            };
            if ("X" === a) return {
              token: ik("text_segment", n)
            };
            let e = im(n, {
              inCharClass: !1
            });
            return Array.isArray(e) ? {
              tokens: e
            } : {
              token: e
            };
          }
          if ("(" === i) {
            if ("*" === a) return {
              token: function (e) {
                let t = /\(\*(?<name>[A-Za-z_]\w*)?(?:\[(?<tag>(?:[A-Za-z_]\w*)?)\])?(?:\{(?<args>[^}]*)\})?\)/.exec(e);
                if (!t) throw Error(`Incomplete or invalid named callout "${e}"`);
                let {
                  name: n,
                  tag: r,
                  args: i
                } = t.groups;
                if (!n) throw Error(`Invalid named callout "${e}"`);
                if ("" === r) throw Error(`Named callout tag with empty value not allowed "${e}"`);
                let a = i ? i.split(",").filter(e => "" !== e).map(e => /^[+-]?\d+$/.test(e) ? +e : e) : [],
                  [o, s, l] = a,
                  d = ix.has(n) ? n.toLowerCase() : "custom";
                switch (d) {
                  case "fail":
                  case "mismatch":
                  case "skip":
                    if (a.length > 0) throw Error(`Named callout arguments not allowed "${a}"`);
                    break;
                  case "error":
                    if (a.length > 1) throw Error(`Named callout allows only one argument "${a}"`);
                    if ("string" == typeof o) throw Error(`Named callout argument must be a number "${o}"`);
                    break;
                  case "max":
                    if (!a.length || a.length > 2) throw Error(`Named callout must have one or two arguments "${a}"`);
                    if ("string" == typeof o && !/^[A-Za-z_]\w*$/.test(o)) throw Error(`Named callout argument one must be a tag or number "${o}"`);
                    if (2 === a.length && ("number" == typeof s || !/^[<>X]$/.test(s))) throw Error(`Named callout optional argument two must be '<', '>', or 'X' "${s}"`);
                    break;
                  case "count":
                  case "total_count":
                    if (a.length > 1) throw Error(`Named callout allows only one argument "${a}"`);
                    if (1 === a.length && ("number" == typeof o || !/^[<>X]$/.test(o))) throw Error(`Named callout optional argument must be '<', '>', or 'X' "${o}"`);
                    break;
                  case "cmp":
                    if (3 !== a.length) throw Error(`Named callout must have three arguments "${a}"`);
                    if ("string" == typeof o && !/^[A-Za-z_]\w*$/.test(o)) throw Error(`Named callout argument one must be a tag or number "${o}"`);
                    if ("number" == typeof s || !/^(?:[<>!=]=|[<>])$/.test(s)) throw Error(`Named callout argument two must be '==', '!=', '>', '<', '>=', or '<=' "${s}"`);
                    if ("string" == typeof l && !/^[A-Za-z_]\w*$/.test(l)) throw Error(`Named callout argument three must be a tag or number "${l}"`);
                    break;
                  case "custom":
                    throw Error(`Undefined callout name "${n}"`);
                  default:
                    throw Error(`Unexpected named callout kind "${d}"`);
                }
                return {
                  type: "NamedCallout",
                  kind: d,
                  tag: r ?? null,
                  arguments: i?.split(",") ?? null,
                  raw: e
                };
              }(n)
            };
            if ("(?{" === n) throw Error(`Unsupported callout "${n}"`);
            if (n.startsWith("(?#")) {
              if (")" !== t[r]) throw Error('Unclosed comment group "(?#"');
              return {
                lastIndex: r + 1
              };
            }
            if (/^\(\?[-imx]+[:)]$/.test(n)) return {
              token: function (e, t) {
                let {
                  on: n,
                  off: r
                } = /^\(\?(?<on>[imx]*)(?:-(?<off>[-imx]*))?/.exec(e).groups;
                r ??= "";
                let i = (t.getCurrentModX() || n.includes("x")) && !r.includes("x"),
                  a = iL(n),
                  o = iL(r),
                  s = {};
                if (a && (s.enable = a), o && (s.disable = o), e.endsWith(")")) return t.replaceCurrentModX(i), iS("flags", e, {
                  flags: s
                });
                if (e.endsWith(":")) return t.pushModX(i), t.numOpenGroups++, iC("group", e, {
                  ...((a || o) && {
                    flags: s
                  })
                });
                throw Error(`Unexpected flag modifier "${e}"`);
              }(n, e)
            };
            if (e.pushModX(e.getCurrentModX()), e.numOpenGroups++, "(" === n && !e.captureGroup || "(?:" === n) return {
              token: iC("group", n)
            };
            if ("(?>" === n) return {
              token: iC("atomic", n)
            };
            if ("(?=" === n || "(?!" === n || "(?<=" === n || "(?<!" === n) return {
              token: iC("<" === n[2] ? "lookbehind" : "lookahead", n, {
                negate: n.endsWith("!")
              })
            };
            if ("(" === n && e.captureGroup || n.startsWith("(?<") && n.endsWith(">") || n.startsWith("(?'") && n.endsWith("'")) return {
              token: iC("capturing", n, {
                ...("(" !== n && {
                  name: n.slice(3, -1)
                })
              })
            };
            if (n.startsWith("(?~")) {
              if ("(?~|" === n) throw Error(`Unsupported absence function kind "${n}"`);
              return {
                token: iC("absence_repeater", n)
              };
            }
            throw "(?(" === n ? Error(`Unsupported conditional "${n}"`) : Error(`Invalid or unsupported group option "${n}"`);
          }
          if (")" === n) {
            if (e.popModX(), e.numOpenGroups--, e.numOpenGroups < 0) throw Error('Unmatched ")"');
            return {
              token: {
                type: "GroupClose",
                raw: n
              }
            };
          }
          if (e.getCurrentModX()) {
            if ("#" === n) {
              let e = t.indexOf(`
`, r);
              return {
                lastIndex: -1 === e ? t.length : e
              };
            }
            if (/^\s$/.test(n)) {
              let e = /\s+/y;
              return e.lastIndex = r, {
                lastIndex: e.exec(t) ? e.lastIndex : r
              };
            }
          }
          return "." === n ? {
            token: ik("dot", n)
          } : "^" === n || "$" === n ? {
            token: ib(e.singleline ? {
              "^": il`\A`,
              $: il`\Z`
            }[n] : n, n)
          } : "|" === n ? {
            token: {
              type: "Alternator",
              raw: n
            }
          } : ic.test(n) ? {
            tokens: function (e) {
              let t,
                n = [],
                r = RegExp(ic, "gy");
              for (; t = r.exec(e);) {
                let e = t[0];
                if ("{" === e[0]) {
                  let t = /^\{(?<min>\d+),(?<max>\d+)\}\??$/.exec(e);
                  if (t) {
                    let {
                      min: i,
                      max: a
                    } = t.groups;
                    if (+i > +a && e.endsWith("?")) {
                      r.lastIndex--, n.push(iE(e.slice(0, -1)));
                      continue;
                    }
                  }
                }
                n.push(iE(e));
              }
              return n;
            }(n)
          } : {
            token: iv(io(n), n)
          };
        }(a, e, s[0], ip.lastIndex);
        t.tokens ? o.push(...t.tokens) : t.token && o.push(t.token), void 0 !== t.lastIndex && (ip.lastIndex = t.lastIndex);
      }
      let l = [],
        d = 0;
      o.filter(e => "GroupOpen" === e.type).forEach(e => {
        "capturing" === e.kind ? e.number = ++d : "(" === e.raw && l.push(e);
      }), d || l.forEach((e, t) => {
        e.kind = "capturing", e.number = t + 1;
      });
      let u = d || l.length;
      return {
        tokens: o.map(e => "EscapedNumber" === e.type ? function (e, t) {
          let {
              raw: n,
              inCharClass: r
            } = e,
            i = n.slice(1);
          if (!r && ("0" !== i && 1 === i.length || "0" !== i[0] && +i <= t)) return [iy(n)];
          let a = [],
            o = i.match(/^[0-7]+|\d/g);
          for (let e = 0; e < o.length; e++) {
            let t,
              r = o[e];
            if (0 === e && "8" !== r && "9" !== r) {
              if ((t = parseInt(r, 8)) > 127) throw Error(il`Octal encoded byte above 177 unsupported "${n}"`);
            } else t = io(r);
            a.push(iv(t, (0 === e ? "\\" : "") + r));
          }
          return a;
        }(e, u) : e).flat(),
        flags: r
      };
    }(e, {
      flags: r.flags,
      rules: {
        captureGroup: r.rules.captureGroup,
        singleline: r.rules.singleline
      }
    }),
    a = (e, t) => {
      let n = i.tokens[o.nextIndex];
      switch (o.parent = e, o.nextIndex++, n.type) {
        case "Alternator":
          return iM();
        case "Assertion":
          return function ({
            kind: e
          }) {
            return iN(id({
              "^": "line_start",
              $: "line_end",
              "\\A": "string_start",
              "\\b": "word_boundary",
              "\\B": "word_boundary",
              "\\G": "search_start",
              "\\y": "text_segment_boundary",
              "\\Y": "text_segment_boundary",
              "\\z": "string_end",
              "\\Z": "string_end_newline"
            }[e], `Unexpected assertion kind "${e}"`), {
              negate: e === il`\B` || e === il`\Y`
            });
          }(n);
        case "Backreference":
          return function ({
            raw: e
          }, t) {
            let n = /^\\k[<']/.test(e),
              r = n ? e.slice(3, -1) : e.slice(1),
              i = (n, r = !1) => {
                let i = t.capturingGroups.length,
                  a = !1;
                if (n > i) if (t.skipBackrefValidation) a = !0;else throw Error(`Not enough capturing groups defined to the left "${e}"`);
                return t.hasNumberedRef = !0, iP(r ? i + 1 - n : n, {
                  orphan: a
                });
              };
            if (n) {
              let n = /^(?<sign>-?)0*(?<num>[1-9]\d*)$/.exec(r);
              if (n) return i(+n.groups.num, !!n.groups.sign);
              if (/[-+]/.test(r)) throw Error(`Invalid backref name "${e}"`);
              if (!t.namedGroupsByName.has(r)) throw Error(`Group name not defined to the left "${e}"`);
              return iP(r);
            }
            return i(+r);
          }(n, o);
        case "Character":
          return iO(n.value, {
            useLastValid: !!t.isCheckingRangeEnd
          });
        case "CharacterClassHyphen":
          return function (e, t) {
            let {
                tokens: n,
                walk: r
              } = e,
              i = e.parent,
              a = i.body.at(-1),
              o = n[e.nextIndex];
            if (!t.isCheckingRangeEnd && a && "CharacterClass" !== a.type && "CharacterClassRange" !== a.type && o && "CharacterClassOpen" !== o.type && "CharacterClassClose" !== o.type && "CharacterClassIntersector" !== o.type) {
              let e = r(i, {
                ...t,
                isCheckingRangeEnd: !0
              });
              if ("Character" === a.type && "Character" === e.type) return i.body.pop(), function (e, t) {
                if (t.value < e.value) throw Error("Character class range out of order");
                return {
                  type: "CharacterClassRange",
                  min: e,
                  max: t
                };
              }(a, e);
              throw Error("Invalid character class range");
            }
            return iO(io("-"));
          }(o, t);
        case "CharacterClassOpen":
          return function ({
            negate: e
          }, t, n) {
            let {
                tokens: r,
                walk: i
              } = t,
              a = [iD()],
              o = r[t.nextIndex],
              s = iX(o);
            for (; "CharacterClassClose" !== s.type;) {
              if ("CharacterClassIntersector" === s.type) a.push(iD()), t.nextIndex++;else {
                let e = a.at(-1);
                e.body.push(i(e, n));
              }
              s = iX(r[t.nextIndex], o);
            }
            let l = iD({
              negate: e
            });
            return 1 === a.length ? l.body = a[0].body : (l.kind = "intersection", l.body = a.map(e => 1 === e.body.length ? e.body[0] : e)), t.nextIndex++, l;
          }(n, o, t);
        case "CharacterSet":
          return function ({
            kind: e,
            negate: t,
            value: n
          }, r) {
            let {
              normalizeUnknownPropertyNames: i,
              skipPropertyNameValidation: a,
              unicodePropertyMap: o
            } = r;
            if ("property" === e) {
              let r = iq(n);
              if (!is.has(r) || o?.has(r)) return iF(n, {
                negate: t,
                normalizeUnknownPropertyNames: i,
                skipPropertyNameValidation: a,
                unicodePropertyMap: o
              });
              e = "posix", n = r;
            }
            return "posix" === e ? function (e, t) {
              let n = !!t?.negate;
              if (!is.has(e)) throw Error(`Invalid POSIX class "${e}"`);
              return {
                type: "CharacterSet",
                kind: "posix",
                value: e,
                negate: n
              };
            }(n, {
              negate: t
            }) : i$(e, {
              negate: t
            });
          }(n, o);
        case "Directive":
          return function (e, t = {}) {
            if ("keep" === e) return {
              type: "Directive",
              kind: e
            };
            if ("flags" === e) return {
              type: "Directive",
              kind: e,
              flags: id(t.flags)
            };
            throw Error(`Unexpected directive kind "${e}"`);
          }(n.kind, {
            flags: n.flags
          });
        case "GroupOpen":
          return function (e, t, n) {
            var r, i;
            let {
                tokens: a,
                capturingGroups: o,
                namedGroupsByName: s,
                skipLookbehindValidation: l,
                walk: d
              } = t,
              u = function ({
                flags: e,
                kind: t,
                name: n,
                negate: r,
                number: i
              }) {
                switch (t) {
                  case "absence_repeater":
                    var a = "repeater";
                    !1;
                    return {
                      type: "AbsenceFunction",
                      kind: a,
                      body: ij(void 0)
                    };
                  case "atomic":
                    return iB({
                      atomic: !0
                    });
                  case "capturing":
                    return iI(i, {
                      name: n
                    });
                  case "group":
                    return iB({
                      flags: e
                    });
                  case "lookahead":
                  case "lookbehind":
                    return iU({
                      behind: "lookbehind" === t,
                      negate: r
                    });
                  default:
                    throw Error(`Unexpected group kind "${t}"`);
                }
              }(e),
              h = "AbsenceFunction" === u.type,
              c = iV(u),
              f = c && u.negate;
            if ("CapturingGroup" === u.type && (o.push(u), u.name && (r = u.name, i = [], s.has(r) || s.set(r, i), s.get(r)).push(u)), h && n.isInAbsenceFunction) throw Error("Nested absence function not supported by Oniguruma");
            let p = iK(a[t.nextIndex]);
            for (; "GroupClose" !== p.type;) {
              if ("Alternator" === p.type) u.body.push(iM()), t.nextIndex++;else {
                let e = u.body.at(-1),
                  t = d(e, {
                    ...n,
                    isInAbsenceFunction: n.isInAbsenceFunction || h,
                    isInLookbehind: n.isInLookbehind || c,
                    isInNegLookbehind: n.isInNegLookbehind || f
                  });
                if (e.body.push(t), (c || n.isInLookbehind) && !l) {
                  let e = "Lookbehind includes a pattern not allowed by Oniguruma";
                  if (f || n.isInNegLookbehind) {
                    if (iW(t) || "CapturingGroup" === t.type) throw Error(e);
                  } else if (iW(t) || iV(t) && t.negate) throw Error(e);
                }
              }
              p = iK(a[t.nextIndex]);
            }
            return t.nextIndex++, u;
          }(n, o, t);
        case "NamedCallout":
          var r, a;
          return r = n.kind, a = n.tag, {
            type: "NamedCallout",
            kind: r,
            tag: a,
            arguments: n.arguments
          };
        case "Quantifier":
          return function ({
            kind: e,
            min: t,
            max: n
          }, r) {
            let i = r.parent,
              a = i.body.at(-1);
            if (!a || !iT.has(a.type)) throw Error("Quantifier requires a repeatable token");
            let o = iz(e, t, n, a);
            return i.body.pop(), o;
          }(n, o);
        case "Subroutine":
          return function ({
            raw: e
          }, t) {
            let {
                capturingGroups: n,
                subroutines: r
              } = t,
              i = e.slice(3, -1),
              a = /^(?<sign>[-+]?)0*(?<num>[1-9]\d*)$/.exec(i);
            if (a) {
              let e = +a.groups.num,
                r = n.length;
              if (t.hasNumberedRef = !0, (i = {
                "": e,
                "+": r + e,
                "-": r + 1 - e
              }[a.groups.sign]) < 1) throw Error("Invalid subroutine number");
            } else "0" === i && (i = 0);
            let o = iH(i);
            return r.push(o), o;
          }(n, o);
        default:
          throw Error(`Unexpected token type "${n.type}"`);
      }
    },
    o = {
      capturingGroups: [],
      hasNumberedRef: !1,
      namedGroupsByName: new Map(),
      nextIndex: 0,
      normalizeUnknownPropertyNames: r.normalizeUnknownPropertyNames,
      parent: null,
      skipBackrefValidation: r.skipBackrefValidation,
      skipLookbehindValidation: r.skipLookbehindValidation,
      skipPropertyNameValidation: r.skipPropertyNameValidation,
      subroutines: [],
      tokens: i.tokens,
      unicodePropertyMap: r.unicodePropertyMap,
      walk: a
    },
    s = (n = {
      type: "Flags",
      ...i.flags
    }, {
      type: "Regex",
      body: ij(void 0),
      flags: n
    }),
    l = s.body[0];
  for (; o.nextIndex < i.tokens.length;) {
    let e = a(l, {});
    "Alternative" === e.type ? (s.body.push(e), l = e) : l.body.push(e);
  }
  let {
    capturingGroups: d,
    hasNumberedRef: u,
    namedGroupsByName: h,
    subroutines: c
  } = o;
  if (u && h.size && !r.rules.captureGroup) throw Error("Numbered backref/subroutine not allowed when using named capture");
  for (let {
    ref: e
  } of c) if ("number" == typeof e) {
    if (e > d.length) throw Error("Subroutine uses a group number that's not defined");
    e && (d[e - 1].isSubroutined = !0);
  } else if (h.has(e)) {
    if (h.get(e).length > 1) throw Error(il`Subroutine uses a duplicate group name "\g<${e}>"`);
    h.get(e)[0].isSubroutined = !0;
  } else throw Error(il`Subroutine uses a group name that's not defined "\g<${e}>"`);
  return s;
}
function iM(e) {
  return {
    type: "Alternative",
    body: iG(e?.body)
  };
}
function iN(e, t) {
  let n = {
    type: "Assertion",
    kind: e
  };
  return ("word_boundary" === e || "text_segment_boundary" === e) && (n.negate = !!t?.negate), n;
}
function iP(e, t) {
  let n = !!t?.orphan;
  return {
    type: "Backreference",
    ref: e,
    ...(n && {
      orphan: n
    })
  };
}
function iI(e, t) {
  var n;
  let r = {
    name: void 0,
    isSubroutined: !1,
    ...t
  };
  if (void 0 !== r.name && (n = r.name, !/^[\p{Alpha}\p{Pc}][^)]*$/u.test(n))) throw Error(`Group name "${r.name}" invalid in Oniguruma`);
  return {
    type: "CapturingGroup",
    number: e,
    ...(r.name && {
      name: r.name
    }),
    ...(r.isSubroutined && {
      isSubroutined: r.isSubroutined
    }),
    body: ij(t?.body)
  };
}
function iO(e, t) {
  let n = {
    useLastValid: !1,
    ...t
  };
  if (e > 1114111) {
    let t = e.toString(16);
    if (n.useLastValid) e = 1114111;else throw e > 1310719 ? Error(`Invalid code point out of range "\\x{${t}}"`) : Error(`Invalid code point out of range in JS "\\x{${t}}"`);
  }
  return {
    type: "Character",
    value: e
  };
}
function iD(e) {
  let t = {
    kind: "union",
    negate: !1,
    ...e
  };
  return {
    type: "CharacterClass",
    kind: t.kind,
    negate: t.negate,
    body: iG(e?.body)
  };
}
function i$(e, t) {
  let n = !!t?.negate,
    r = {
      type: "CharacterSet",
      kind: e
    };
  return ("digit" === e || "hex" === e || "newline" === e || "space" === e || "word" === e) && (r.negate = n), "text_segment" !== e && ("newline" !== e || n) || (r.variableLength = !0), r;
}
function iB(e) {
  let t = e?.atomic,
    n = e?.flags;
  if (t && n) throw Error("Atomic group cannot have flags");
  return {
    type: "Group",
    ...(t && {
      atomic: t
    }),
    ...(n && {
      flags: n
    }),
    body: ij(e?.body)
  };
}
function iU(e) {
  let t = {
    behind: !1,
    negate: !1,
    ...e
  };
  return {
    type: "LookaroundAssertion",
    kind: t.behind ? "lookbehind" : "lookahead",
    negate: t.negate,
    body: ij(e?.body)
  };
}
function iz(e, t, n, r) {
  if (t > n) throw Error("Invalid reversed quantifier range");
  return {
    type: "Quantifier",
    kind: e,
    min: t,
    max: n,
    body: r
  };
}
function iH(e) {
  return {
    type: "Subroutine",
    ref: e
  };
}
function iF(e, t) {
  let n = {
      negate: !1,
      normalizeUnknownPropertyNames: !1,
      skipPropertyNameValidation: !1,
      unicodePropertyMap: null,
      ...t
    },
    r = n.unicodePropertyMap?.get(iq(e));
  if (!r) {
    if (n.normalizeUnknownPropertyNames) r = e.trim().replace(/[- _]+/g, "_").replace(/[A-Z][a-z]+(?=[A-Z])/g, "$&_").replace(/[A-Za-z]+/g, e => e[0].toUpperCase() + e.slice(1).toLowerCase());else if (n.unicodePropertyMap && !n.skipPropertyNameValidation) throw Error(il`Invalid Unicode property "\p{${e}}"`);
  }
  return {
    type: "CharacterSet",
    kind: "property",
    value: r ?? e,
    negate: n.negate
  };
}
function ij(e) {
  if (void 0 === e) e = [iM()];else if (!Array.isArray(e) || !e.length || !e.every(e => "Alternative" === e.type)) throw Error("Invalid body; expected array of one or more Alternative nodes");
  return e;
}
function iG(e) {
  if (void 0 === e) e = [];else if (!Array.isArray(e) || !e.every(e => !!e.type)) throw Error("Invalid body; expected array of nodes");
  return e;
}
function iW(e) {
  return "LookaroundAssertion" === e.type && "lookahead" === e.kind;
}
function iV(e) {
  return "LookaroundAssertion" === e.type && "lookbehind" === e.kind;
}
function iq(e) {
  return e.replace(/[- _]+/g, "").toLowerCase();
}
function iX(e, t) {
  return id(e, `Unclosed character class${t?.type === "Character" && 93 === t.value && "]" === t.raw ? ' (started with "]")' : ""}`);
}
function iK(e) {
  return id(e, "Unclosed group");
}
function iQ(e, t, n = null) {
  function r(e, t) {
    for (let n = 0; n < e.length; n++) {
      let r = i(e[n], t, n, e);
      n = Math.max(-1, n + r);
    }
  }
  function i(a, o = null, s = null, l = null) {
    let d = 0,
      u = !1,
      h = {
        node: a,
        parent: o,
        key: s,
        container: l,
        root: e,
        remove() {
          iY(l).splice(Math.max(0, iJ(s) + d), 1), d--, u = !0;
        },
        removeAllNextSiblings: () => iY(l).splice(iJ(s) + 1),
        removeAllPrevSiblings() {
          let e = iJ(s) + d;
          return d -= e, iY(l).splice(0, Math.max(0, e));
        },
        replaceWith(e, t = {}) {
          let n = !!t.traverse;
          l ? l[Math.max(0, iJ(s) + d)] = e : id(o, "Can't replace root node")[s] = e, n && i(e, o, s, l), u = !0;
        },
        replaceWithMultiple(e, t = {}) {
          let n = !!t.traverse;
          if (iY(l).splice(Math.max(0, iJ(s) + d), 1, ...e), d += e.length - 1, n) {
            let t = 0;
            for (let n = 0; n < e.length; n++) t += i(e[n], o, iJ(s) + n + t, l);
          }
          u = !0;
        },
        skip() {
          u = !0;
        }
      },
      {
        type: c
      } = a,
      f = t["*"],
      p = t[c],
      g = "function" == typeof f ? f : f?.enter,
      m = "function" == typeof p ? p : p?.enter;
    if (g?.(h, n), m?.(h, n), !u) switch (c) {
      case "AbsenceFunction":
      case "Alternative":
      case "CapturingGroup":
      case "CharacterClass":
      case "Group":
      case "LookaroundAssertion":
        r(a.body, a);
        break;
      case "Assertion":
      case "Backreference":
      case "Character":
      case "CharacterSet":
      case "Directive":
      case "Flags":
      case "NamedCallout":
      case "Subroutine":
        break;
      case "CharacterClassRange":
        i(a.min, a, "min"), i(a.max, a, "max");
        break;
      case "Quantifier":
        i(a.body, a, "body");
        break;
      case "Regex":
        r(a.body, a), i(a.flags, a, "flags");
        break;
      default:
        throw Error(`Unexpected node type "${c}"`);
    }
    return p?.exit?.(h, n), f?.exit?.(h, n), d;
  }
  return i(e), e;
}
function iY(e) {
  if (!Array.isArray(e)) throw Error("Container expected");
  return e;
}
function iJ(e) {
  if ("number" != typeof e) throw Error("Numeric key expected");
  return e;
}
let iZ = String.raw`\(\?(?:[:=!>A-Za-z\-]|<[=!]|\(DEFINE\))`,
  i0 = Object.freeze({
    DEFAULT: "DEFAULT",
    CHAR_CLASS: "CHAR_CLASS"
  });
function i1(e, t, n, r) {
  let i = RegExp(String.raw`${t}|(?<$skip>\[\^?|\\?.)`, "gsu"),
    a = [!1],
    o = 0,
    s = "";
  for (let t of e.matchAll(i)) {
    let {
      0: e,
      groups: {
        $skip: i
      }
    } = t;
    if (!i && (!r || r === i0.DEFAULT == !o)) {
      n instanceof Function ? s += n(t, {
        context: o ? i0.CHAR_CLASS : i0.DEFAULT,
        negated: a[a.length - 1]
      }) : s += n;
      continue;
    }
    "[" === e[0] ? (o++, a.push("^" === e[1])) : "]" === e && o && (o--, a.pop()), s += e;
  }
  return s;
}
function i2(e, t, n) {
  return !!function (e, t, n = 0, r) {
    let i;
    if (!RegExp(t, "su").test(e)) return null;
    let a = RegExp(`${t}|(?<$skip>\\\\?.)`, "gsu");
    a.lastIndex = n;
    let o = 0;
    for (; i = a.exec(e);) {
      let {
        0: e,
        groups: {
          $skip: t
        }
      } = i;
      if (!t && (!r || r === i0.DEFAULT == !o)) return i;
      "[" === e ? o++ : "]" === e && o && o--, a.lastIndex == i.index && a.lastIndex++;
    }
    return null;
  }(e, t, 0, n);
}
let i8 = RegExp(String.raw`(?<noncapturingStart>${iZ})|(?<capturingStart>\((?:\?<[^>]+>)?)|\\?.`, "gsu"),
  i5 = String.raw`(?:[?*+]|\{\d+(?:,\d*)?\})`,
  i6 = RegExp(String.raw`
\\(?: \d+
  | c[A-Za-z]
  | [gk]<[^>]+>
  | [pPu]\{[^\}]+\}
  | u[A-Fa-f\d]{4}
  | x[A-Fa-f\d]{2}
  )
| \((?: \? (?: [:=!>]
  | <(?:[=!]|[^>]+>)
  | [A-Za-z\-]+:
  | \(DEFINE\)
  ))?
| (?<qBase>${i5})(?<qMod>[?+]?)(?<invalidQ>[?*+\{]?)
| \\?.
`.replace(/\s+/g, ""), "gsu"),
  i7 = String.raw,
  i3 = i7`\\g<(?<gRNameOrNum>[^>&]+)&R=(?<gRDepth>[^>]+)>`,
  i4 = i7`\(\?R=(?<rDepth>[^\)]+)\)|${i3}`,
  i9 = i7`\(\?<(?![=!])(?<captureName>[^>]+)>`,
  ae = i7`${i9}|(?<unnamed>\()(?!\?)`,
  at = RegExp(i7`${i9}|${i4}|\(\?|\\?.`, "gsu"),
  an = "Cannot use multiple overlapping recursions";
function ar(e) {
  let t = `Max depth must be integer between 2 and 100; used ${e}`;
  if (!/^[1-9]\d*$/.test(e) || (e *= 1) < 2 || e > 100) throw Error(t);
}
function ai(e, t, n, r, i, a, o) {
  let s = new Set();
  r && i1(e + t, i9, ({
    groups: {
      captureName: e
    }
  }) => {
    s.add(e);
  }, i0.DEFAULT);
  let l = [n, r ? s : null, i, a, o];
  return `${e}${aa(`(?:${e}`, "forward", ...l)}(?:)${aa(`${t})`, "backward", ...l)}${t}`;
}
function aa(e, t, n, r, i, a, o) {
  let s = e => "forward" === t ? e + 2 : n - e + 2 - 1,
    l = "";
  for (let t = 0; t < n; t++) {
    let n = s(t);
    l += i1(e, i7`${ae}|\\k<(?<backref>[^>]+)>`, ({
      0: e,
      groups: {
        captureName: t,
        unnamed: s,
        backref: l
      }
    }) => {
      if (l && r && !r.has(l)) return e;
      let d = `_$${n}`;
      if (s || t) {
        let n = o + a.length + 1;
        return a.push(n), function (e, t) {
          for (let n = 0; n < e.length; n++) e[n] >= t && e[n]++;
        }(i, n), s ? e : `(?<${t}${d}>`;
      }
      return i7`\k<${l}${d}>`;
    }, i0.DEFAULT);
  }
  return l;
}
function ao(e, t, n, r, i, a) {
  if (e.size && r) {
    let o = 0;
    i1(t, ae, () => o++, i0.DEFAULT);
    let s = a - o + i,
      l = new Map();
    return e.forEach((e, t) => {
      let i = (r - o * n) / n,
        a = o * n,
        d = t > s + o ? t + r : t,
        u = [];
      for (let t of e) if (t <= s) u.push(t);else if (t > s + o + i) u.push(t + r);else if (t <= s + o) for (let e = 0; e <= n; e++) u.push(t + o * e);else for (let e = 0; e <= n; e++) u.push(t + a + i * e);
      l.set(d, u);
    }), l;
  }
  return e;
}
var as = String.fromCodePoint,
  al = String.raw,
  ad = {};
function ah(e, {
  enable: t,
  disable: n
}) {
  return {
    dotAll: !n?.dotAll && !!(t?.dotAll || e.dotAll),
    ignoreCase: !n?.ignoreCase && !!(t?.ignoreCase || e.ignoreCase)
  };
}
function ac(e, t, n) {
  return e.has(t) || e.set(t, n), e.get(t);
}
var af = {
    ES2025: 2025,
    ES2024: 2024,
    ES2018: 2018
  },
  ap = {
    auto: "auto",
    ES2025: "ES2025",
    ES2024: "ES2024",
    ES2018: "ES2018"
  };
function ag(e = {}) {
  if ("[object Object]" !== {}.toString.call(e)) throw Error("Unexpected options");
  if (void 0 !== e.target && !ap[e.target]) throw Error(`Unexpected target "${e.target}"`);
  let t = {
    accuracy: "default",
    avoidSubclass: !1,
    flags: "",
    global: !1,
    hasIndices: !1,
    lazyCompileLength: 1 / 0,
    target: "auto",
    verbose: !1,
    ...e,
    rules: {
      allowOrphanBackrefs: !1,
      asciiWordBoundaries: !1,
      captureGroup: !1,
      recursionLimit: 20,
      singleline: !1,
      ...e.rules
    }
  };
  return "auto" === t.target && (t.target = ad.flagGroups ? "ES2025" : ad.unicodeSets ? "ES2024" : "ES2018"), t;
}
var am = new Set([as(304), as(305)]),
  ab = al`[\p{L}\p{M}\p{N}\p{Pc}]`;
function ay(e) {
  if (am.has(e)) return [e];
  let t = new Set(),
    n = e.toLowerCase(),
    r = n.toUpperCase(),
    i = aS.get(n),
    a = aw.get(n),
    o = ak.get(n);
  return 1 == [...r].length && t.add(r), o && t.add(o), i && t.add(i), t.add(n), a && t.add(a), [...t];
}
var av = new Map(`C Other
Cc Control cntrl
Cf Format
Cn Unassigned
Co Private_Use
Cs Surrogate
L Letter
LC Cased_Letter
Ll Lowercase_Letter
Lm Modifier_Letter
Lo Other_Letter
Lt Titlecase_Letter
Lu Uppercase_Letter
M Mark Combining_Mark
Mc Spacing_Mark
Me Enclosing_Mark
Mn Nonspacing_Mark
N Number
Nd Decimal_Number digit
Nl Letter_Number
No Other_Number
P Punctuation punct
Pc Connector_Punctuation
Pd Dash_Punctuation
Pe Close_Punctuation
Pf Final_Punctuation
Pi Initial_Punctuation
Po Other_Punctuation
Ps Open_Punctuation
S Symbol
Sc Currency_Symbol
Sk Modifier_Symbol
Sm Math_Symbol
So Other_Symbol
Z Separator
Zl Line_Separator
Zp Paragraph_Separator
Zs Space_Separator
ASCII
ASCII_Hex_Digit AHex
Alphabetic Alpha
Any
Assigned
Bidi_Control Bidi_C
Bidi_Mirrored Bidi_M
Case_Ignorable CI
Cased
Changes_When_Casefolded CWCF
Changes_When_Casemapped CWCM
Changes_When_Lowercased CWL
Changes_When_NFKC_Casefolded CWKCF
Changes_When_Titlecased CWT
Changes_When_Uppercased CWU
Dash
Default_Ignorable_Code_Point DI
Deprecated Dep
Diacritic Dia
Emoji
Emoji_Component EComp
Emoji_Modifier EMod
Emoji_Modifier_Base EBase
Emoji_Presentation EPres
Extended_Pictographic ExtPict
Extender Ext
Grapheme_Base Gr_Base
Grapheme_Extend Gr_Ext
Hex_Digit Hex
IDS_Binary_Operator IDSB
IDS_Trinary_Operator IDST
ID_Continue IDC
ID_Start IDS
Ideographic Ideo
Join_Control Join_C
Logical_Order_Exception LOE
Lowercase Lower
Math
Noncharacter_Code_Point NChar
Pattern_Syntax Pat_Syn
Pattern_White_Space Pat_WS
Quotation_Mark QMark
Radical
Regional_Indicator RI
Sentence_Terminal STerm
Soft_Dotted SD
Terminal_Punctuation Term
Unified_Ideograph UIdeo
Uppercase Upper
Variation_Selector VS
White_Space space
XID_Continue XIDC
XID_Start XIDS`.split(/\s/).map(e => [iq(e), e])),
  aw = new Map([["s", as(383)], [as(383), "s"]]),
  ak = new Map([[as(223), as(7838)], [as(107), as(8490)], [as(229), as(8491)], [as(969), as(8486)]]),
  aS = new Map([ax(453), ax(456), ax(459), ax(498), ...aA(8072, 8079), ...aA(8088, 8095), ...aA(8104, 8111), ax(8124), ax(8140), ax(8188)]),
  aC = new Map([["alnum", al`[\p{Alpha}\p{Nd}]`], ["alpha", al`\p{Alpha}`], ["ascii", al`\p{ASCII}`], ["blank", al`[\p{Zs}\t]`], ["cntrl", al`\p{Cc}`], ["digit", al`\p{Nd}`], ["graph", al`[\P{space}&&\P{Cc}&&\P{Cn}&&\P{Cs}]`], ["lower", al`\p{Lower}`], ["print", al`[[\P{space}&&\P{Cc}&&\P{Cn}&&\P{Cs}]\p{Zs}]`], ["punct", al`[\p{P}\p{S}]`], ["space", al`\p{space}`], ["upper", al`\p{Upper}`], ["word", al`[\p{Alpha}\p{M}\p{Nd}\p{Pc}]`], ["xdigit", al`\p{AHex}`]]);
function ax(e) {
  let t = as(e);
  return [t.toLowerCase(), t];
}
function aA(e, t) {
  return function (e, t) {
    let n = [];
    for (let r = e; r <= t; r++) n.push(r);
    return n;
  }(e, t).map(e => ax(e));
}
var aE = new Set(["Lower", "Lowercase", "Upper", "Uppercase", "Ll", "Lowercase_Letter", "Lt", "Titlecase_Letter", "Lu", "Uppercase_Letter"]),
  aL = {
    AbsenceFunction({
      node: e,
      parent: t,
      replaceWith: n
    }) {
      let {
        body: r,
        kind: i
      } = e;
      if ("repeater" === i) {
        let e = iB();
        e.body[0].body.push(iU({
          negate: !0,
          body: r
        }), iF("Any"));
        let i = iB();
        i.body[0].body.push(iz("greedy", 0, 1 / 0, e)), n(aU(i, t), {
          traverse: !0
        });
      } else throw Error('Unsupported absence function "(?~|"');
    },
    Alternative: {
      enter({
        node: e,
        parent: t,
        key: n
      }, {
        flagDirectivesByAlt: r
      }) {
        let i = e.body.filter(e => "flags" === e.kind);
        for (let e = n + 1; e < t.body.length; e++) ac(r, t.body[e], []).push(...i);
      },
      exit({
        node: e
      }, {
        flagDirectivesByAlt: t
      }) {
        if (t.get(e)?.length) {
          let n = aP(t.get(e));
          if (n) {
            let t = iB({
              flags: n
            });
            t.body[0].body = e.body, e.body = [aU(t, e)];
          }
        }
      }
    },
    Assertion({
      node: e,
      parent: t,
      key: n,
      container: r,
      root: i,
      remove: a,
      replaceWith: o
    }, s) {
      let {
          kind: l,
          negate: d
        } = e,
        {
          asciiWordBoundaries: u,
          avoidSubclass: h,
          supportedGNodes: c,
          wordIsAscii: f
        } = s;
      if ("text_segment_boundary" === l) throw Error(`Unsupported text segment boundary "\\${d ? "Y" : "y"}"`);
      if ("line_end" === l) o(aU(iU({
        body: [iM({
          body: [iN("string_end")]
        }), iM({
          body: [iO(10)]
        })]
      }), t));else if ("line_start" === l) o(aU(aD(al`(?<=\A|\n(?!\z))`, {
        skipLookbehindValidation: !0
      }), t));else if ("search_start" === l) {
        if (c.has(e)) i.flags.sticky = !0, a();else {
          var p;
          let e,
            i = r[n - 1];
          if (i && ((e = ["Character", "CharacterClass", "CharacterSet"]).includes((p = i).type) || "Quantifier" === p.type && p.min && e.includes(p.body.type))) o(aU(iU({
            negate: !0
          }), t));else if (h) throw Error(al`Uses "\G" in a way that requires a subclass`);else o(aB(iN("string_start"), t)), s.strategy = "clip_search";
        }
      } else if ("string_end" === l || "string_start" === l) ;else if ("string_end_newline" === l) o(aU(aD(al`(?=\n?\z)`), t));else if ("word_boundary" === l) {
        if (!f && !u) {
          let e = `(?:(?<=${ab})(?!${ab})|(?<!${ab})(?=${ab}))`,
            n = `(?:(?<=${ab})(?=${ab})|(?<!${ab})(?!${ab}))`;
          o(aU(aD(d ? n : e), t));
        }
      } else throw Error(`Unexpected assertion kind "${l}"`);
    },
    Backreference({
      node: e
    }, {
      jsGroupNameMap: t
    }) {
      let {
        ref: n
      } = e;
      "string" != typeof n || aO(n) || (e.ref = n = aN(n, t));
    },
    CapturingGroup({
      node: e
    }, {
      jsGroupNameMap: t,
      subroutineRefMap: n
    }) {
      let {
        name: r
      } = e;
      r && !aO(r) && (e.name = r = aN(r, t)), n.set(e.number, e), r && n.set(r, e);
    },
    CharacterClassRange({
      node: e,
      parent: t,
      replaceWith: n
    }) {
      "intersection" === t.kind && n(aU(iD({
        body: [e]
      }), t), {
        traverse: !0
      });
    },
    CharacterSet({
      node: e,
      parent: t,
      replaceWith: n
    }, {
      accuracy: r,
      minTargetEs2024: i,
      digitIsAscii: a,
      spaceIsAscii: o,
      wordIsAscii: s
    }) {
      let {
        kind: l,
        negate: d,
        value: u
      } = e;
      if (a && ("digit" === l || "digit" === u)) return void n(aB(i$("digit", {
        negate: d
      }), t));
      if (o && ("space" === l || "space" === u)) return void n(aU(a$(aD("[	-\r ]"), d), t));
      if (s && ("word" === l || "word" === u)) return void n(aB(i$("word", {
        negate: d
      }), t));
      if ("any" === l) n(aB(iF("Any"), t));else if ("digit" === l) n(aB(iF("Nd", {
        negate: d
      }), t));else if ("dot" === l) ;else if ("text_segment" === l) {
        if ("strict" === r) throw Error(al`Use of "\X" requires non-strict accuracy`);
        let e = "\\p{Emoji}(?:\\p{EMod}|\\uFE0F\\u20E3?|[\\x{E0020}-\\x{E007E}]+\\x{E007F})?",
          a = al`\p{RI}{2}|${e}(?:\u200D${e})*`;
        n(aU(aD(al`(?>\r\n|${i ? al`\p{RGI_Emoji}` : a}|\P{M}\p{M}*)`, {
          skipPropertyNameValidation: !0
        }), t));
      } else if ("hex" === l) n(aB(iF("AHex", {
        negate: d
      }), t));else if ("newline" === l) n(aU(aD(d ? "[^\n]" : "(?>\r\n?|[\n\v\f\u2028\u2029])"), t));else if ("posix" === l) {
        if (i || "graph" !== u && "print" !== u) n(aU(a$(aD(aC.get(u)), d), t));else {
          if ("strict" === r) throw Error(`POSIX class "${u}" requires min target ES2024 or non-strict accuracy`);
          let e = {
            graph: "!-~",
            print: " -~"
          }[u];
          d && (e = `\0-${as(e.codePointAt(0) - 1)}${as(e.codePointAt(2) + 1)}-\u{10FFFF}`), n(aU(aD(`[${e}]`), t));
        }
      } else if ("property" === l) av.has(iq(u)) || (e.key = "sc");else if ("space" === l) n(aB(iF("space", {
        negate: d
      }), t));else if ("word" === l) n(aU(a$(aD(ab), d), t));else throw Error(`Unexpected character set kind "${l}"`);
    },
    Directive({
      node: e,
      parent: t,
      root: n,
      remove: r,
      replaceWith: i,
      removeAllPrevSiblings: a,
      removeAllNextSiblings: o
    }) {
      let {
        kind: s,
        flags: l
      } = e;
      if ("flags" === s) {
        if (l.enable || l.disable) {
          let e = iB({
            flags: l
          });
          e.body[0].body = o(), i(aU(e, t), {
            traverse: !0
          });
        } else r();
      } else if ("keep" === s) {
        let e = n.body[0],
          r = 1 === n.body.length && i_(e, {
            type: "Group"
          }) && 1 === e.body[0].body.length ? e.body[0] : n;
        if (t.parent !== r || r.body.length > 1) throw Error(al`Uses "\K" in a way that's unsupported`);
        let o = iU({
          behind: !0
        });
        o.body[0].body = a(), i(aU(o, t));
      } else throw Error(`Unexpected directive kind "${s}"`);
    },
    Flags({
      node: e,
      parent: t
    }) {
      if (e.posixIsAscii) throw Error('Unsupported flag "P"');
      if ("word" === e.textSegmentMode) throw Error('Unsupported flag "y{w}"');
      ["digitIsAscii", "extended", "posixIsAscii", "spaceIsAscii", "wordIsAscii", "textSegmentMode"].forEach(t => delete e[t]), Object.assign(e, {
        global: !1,
        hasIndices: !1,
        multiline: !1,
        sticky: e.sticky ?? !1
      }), t.options = {
        disable: {
          x: !0,
          n: !0
        },
        force: {
          v: !0
        }
      };
    },
    Group({
      node: e
    }) {
      if (!e.flags) return;
      let {
        enable: t,
        disable: n
      } = e.flags;
      t?.extended && delete t.extended, n?.extended && delete n.extended, t?.dotAll && n?.dotAll && delete t.dotAll, t?.ignoreCase && n?.ignoreCase && delete t.ignoreCase, t && !Object.keys(t).length && delete e.flags.enable, n && !Object.keys(n).length && delete e.flags.disable, e.flags.enable || e.flags.disable || delete e.flags;
    },
    LookaroundAssertion({
      node: e
    }, t) {
      let {
        kind: n
      } = e;
      "lookbehind" === n && (t.passedLookbehind = !0);
    },
    NamedCallout({
      node: e,
      parent: t,
      replaceWith: n
    }) {
      let {
        kind: r
      } = e;
      if ("fail" === r) n(aU(iU({
        negate: !0
      }), t));else throw Error(`Unsupported named callout "(*${r.toUpperCase()}"`);
    },
    Quantifier({
      node: e
    }) {
      if ("Quantifier" === e.body.type) {
        let t = iB();
        t.body[0].body.push(e.body), e.body = aU(t, e);
      }
    },
    Regex: {
      enter({
        node: e
      }, {
        supportedGNodes: t
      }) {
        let n = [],
          r = !1,
          i = !1;
        for (let t of e.body) if (1 === t.body.length && "search_start" === t.body[0].kind) t.body.pop();else {
          let e = function e(t) {
            let n = t.find(e => "search_start" === e.kind || function (e, t) {
              let n = {
                negate: null,
                ...t
              };
              return "LookaroundAssertion" === e.type && (null === n.negate || e.negate === n.negate) && 1 === e.body.length && i_(e.body[0], {
                type: "Assertion",
                kind: "search_start"
              });
            }(e, {
              negate: !1
            }) || !function ({
              type: e
            }) {
              return "Assertion" === e || "Directive" === e || "LookaroundAssertion" === e;
            }(e));
            if (!n) return null;
            if ("search_start" === n.kind) return n;
            if ("LookaroundAssertion" === n.type) return n.body[0].body[0];
            if ("CapturingGroup" === n.type || "Group" === n.type) {
              let t = [];
              for (let r of n.body) {
                let n = e(r.body);
                if (!n) return null;
                Array.isArray(n) ? t.push(...n) : t.push(n);
              }
              return t;
            }
            return null;
          }(t.body);
          e ? (r = !0, Array.isArray(e) ? n.push(...e) : n.push(e)) : i = !0;
        }
        r && !i && n.forEach(e => t.add(e));
      },
      exit(e, {
        accuracy: t,
        passedLookbehind: n,
        strategy: r
      }) {
        if ("strict" === t && n && r) throw Error(al`Uses "\G" in a way that requires non-strict accuracy`);
      }
    },
    Subroutine({
      node: e
    }, {
      jsGroupNameMap: t
    }) {
      let {
        ref: n
      } = e;
      "string" != typeof n || aO(n) || (e.ref = n = aN(n, t));
    }
  },
  a_ = {
    Backreference({
      node: e
    }, {
      multiplexCapturesToLeftByRef: t,
      reffedNodesByReferencer: n
    }) {
      let {
        orphan: r,
        ref: i
      } = e;
      r || n.set(e, [...t.get(i).map(({
        node: e
      }) => e)]);
    },
    CapturingGroup: {
      enter({
        node: e,
        parent: t,
        replaceWith: n,
        skip: r
      }, {
        groupOriginByCopy: i,
        groupsByName: a,
        multiplexCapturesToLeftByRef: o,
        openRefs: s,
        reffedNodesByReferencer: l
      }) {
        let d = i.get(e);
        if (d && s.has(e.number)) {
          let r = aB(aM(e.number), t);
          l.set(r, s.get(e.number)), n(r);
          return;
        }
        s.set(e.number, e), o.set(e.number, []), e.name && ac(o, e.name, []);
        let u = o.get(e.name ?? e.number);
        for (let t = 0; t < u.length; t++) {
          let n = u[t];
          if (d === n.node || d && d === n.origin || e === n.origin) {
            u.splice(t, 1);
            break;
          }
        }
        if (o.get(e.number).push({
          node: e,
          origin: d
        }), e.name && o.get(e.name).push({
          node: e,
          origin: d
        }), e.name) {
          let t = ac(a, e.name, new Map()),
            n = !1;
          if (d) n = !0;else for (let e of t.values()) if (!e.hasDuplicateNameToRemove) {
            n = !0;
            break;
          }
          a.get(e.name).set(e, {
            node: e,
            hasDuplicateNameToRemove: n
          });
        }
      },
      exit({
        node: e
      }, {
        openRefs: t
      }) {
        t.get(e.number) === e && t.delete(e.number);
      }
    },
    Group: {
      enter({
        node: e
      }, t) {
        t.prevFlags = t.currentFlags, e.flags && (t.currentFlags = ah(t.currentFlags, e.flags));
      },
      exit(e, t) {
        t.currentFlags = t.prevFlags;
      }
    },
    Subroutine({
      node: e,
      parent: t,
      replaceWith: n
    }, r) {
      let {
        isRecursive: i,
        ref: a
      } = e;
      if (i) {
        let n = t;
        for (; (n = n.parent) && ("CapturingGroup" !== n.type || n.name !== a && n.number !== a););
        r.reffedNodesByReferencer.set(e, n);
        return;
      }
      let o = r.subroutineRefMap.get(a),
        s = 0 === a,
        l = s ? aM(0) : function e(t, n, r, i) {
          let a = Array.isArray(t) ? [] : {};
          for (let [o, s] of Object.entries(t)) "parent" === o ? a.parent = Array.isArray(r) ? i : r : s && "object" == typeof s ? a[o] = e(s, n, a, r) : ("type" === o && "CapturingGroup" === s && n.set(a, n.get(t) ?? t), a[o] = s);
          return a;
        }(o, r.groupOriginByCopy, null),
        d = l;
      if (!s) {
        var u, h;
        let e = aP(function (e, t) {
            let n = [];
            for (; e = e.parent;) (!t || t(e)) && n.push(e);
            return n;
          }(o, e => "Group" === e.type && !!e.flags)),
          t = e ? ah(r.globalFlags, e) : r.globalFlags;
        u = t, h = r.currentFlags, (u.dotAll !== h.dotAll || u.ignoreCase !== h.ignoreCase) && (d = iB({
          flags: function ({
            dotAll: e,
            ignoreCase: t
          }) {
            let n = {};
            return (e || t) && (n.enable = {}, e && (n.enable.dotAll = !0), t && (n.enable.ignoreCase = !0)), e && t || (n.disable = {}, e || (n.disable.dotAll = !0), t || (n.disable.ignoreCase = !0)), n;
          }(t)
        })).body[0].body.push(l);
      }
      n(aU(d, t), {
        traverse: !s
      });
    }
  },
  aT = {
    Backreference({
      node: e,
      parent: t,
      replaceWith: n
    }, r) {
      if (e.orphan) {
        r.highestOrphanBackref = Math.max(r.highestOrphanBackref, e.ref);
        return;
      }
      let i = r.reffedNodesByReferencer.get(e).filter(t => function (e, t) {
        let n = t;
        do {
          if ("Regex" === n.type) return !1;
          if ("Alternative" === n.type) continue;
          if (n === e) return !1;
          for (let t of aI(n.parent)) {
            if (t === n) break;
            if (t === e || function e(t, n) {
              for (let r of aI(t) ?? []) if (r === n || e(r, n)) return !0;
              return !1;
            }(t, e)) return !0;
          }
        } while (n = n.parent);
        throw Error("Unexpected path");
      }(t, e));
      i.length ? i.length > 1 ? n(aU(iB({
        atomic: !0,
        body: i.reverse().map(e => iM({
          body: [iP(e.number)]
        }))
      }), t)) : e.ref = i[0].number : n(aU(iU({
        negate: !0
      }), t));
    },
    CapturingGroup({
      node: e
    }, t) {
      e.number = ++t.numCapturesToLeft, e.name && t.groupsByName.get(e.name).get(e).hasDuplicateNameToRemove && delete e.name;
    },
    Regex: {
      exit({
        node: e
      }, t) {
        let n = Math.max(t.highestOrphanBackref - t.numCapturesToLeft, 0);
        for (let t = 0; t < n; t++) {
          let t = iI();
          e.body.at(-1).body.push(t);
        }
      }
    },
    Subroutine({
      node: e
    }, t) {
      e.isRecursive && 0 !== e.ref && (e.ref = t.reffedNodesByReferencer.get(e).number);
    }
  };
function aR(e) {
  iQ(e, {
    "*"({
      node: e,
      parent: t
    }) {
      e.parent = t;
    }
  });
}
function aM(e) {
  let t = iH(e);
  return t.isRecursive = !0, t;
}
function aN(e, t) {
  if (t.has(e)) return t.get(e);
  let n = `$${t.size}_${e.replace(/^[^$_\p{IDS}]|[^$\u200C\u200D\p{IDC}]/ug, "_")}`;
  return t.set(e, n), n;
}
function aP(e) {
  let t = ["dotAll", "ignoreCase"],
    n = {
      enable: {},
      disable: {}
    };
  return (e.forEach(({
    flags: e
  }) => {
    t.forEach(t => {
      e.enable?.[t] && (delete n.disable[t], n.enable[t] = !0), e.disable?.[t] && (n.disable[t] = !0);
    });
  }), Object.keys(n.enable).length || delete n.enable, Object.keys(n.disable).length || delete n.disable, n.enable || n.disable) ? n : null;
}
function aI(e) {
  if (!e) throw Error("Node expected");
  let {
    body: t
  } = e;
  return Array.isArray(t) ? t : t ? [t] : null;
}
function aO(e) {
  return /^[$_\p{IDS}][$\u200C\u200D\p{IDC}]*$/u.test(e);
}
function aD(e, t) {
  let n = iR(e, {
    ...t,
    unicodePropertyMap: av
  }).body;
  return n.length > 1 || n[0].body.length > 1 ? iB({
    body: n
  }) : n[0].body[0];
}
function a$(e, t) {
  return e.negate = t, e;
}
function aB(e, t) {
  return e.parent = t, e;
}
function aU(e, t) {
  return aR(e), e.parent = t, e;
}
var az = {
    "*": {
      enter({
        node: e
      }, t) {
        if (aQ(e)) {
          let n = t.getCurrentModI();
          t.pushModI(e.flags ? ah({
            ignoreCase: n
          }, e.flags).ignoreCase : n);
        }
      },
      exit({
        node: e
      }, t) {
        aQ(e) && t.popModI();
      }
    },
    Backreference(e, t) {
      t.setHasCasedChar();
    },
    Character({
      node: e
    }, t) {
      aq(as(e.value)) && t.setHasCasedChar();
    },
    CharacterClassRange({
      node: e,
      skip: t
    }, n) {
      t(), aX(e, {
        firstOnly: !0
      }).length && n.setHasCasedChar();
    },
    CharacterSet({
      node: e
    }, t) {
      "property" === e.kind && aE.has(e.value) && t.setHasCasedChar();
    }
  },
  aH = {
    Alternative: ({
      body: e
    }, t, n) => e.map(n).join(""),
    Assertion({
      kind: e,
      negate: t
    }) {
      if ("string_end" === e) return "$";
      if ("string_start" === e) return "^";
      if ("word_boundary" === e) return t ? al`\B` : al`\b`;
      throw Error(`Unexpected assertion kind "${e}"`);
    },
    Backreference({
      ref: e
    }, t) {
      if ("number" != typeof e) throw Error("Unexpected named backref in transformed AST");
      if (!t.useFlagMods && "strict" === t.accuracy && t.currentFlags.ignoreCase && !t.captureMap.get(e).ignoreCase) throw Error("Use of case-insensitive backref to case-sensitive group requires target ES2025 or non-strict accuracy");
      return "\\" + e;
    },
    CapturingGroup(e, t, n) {
      let {
          body: r,
          name: i,
          number: a
        } = e,
        o = {
          ignoreCase: t.currentFlags.ignoreCase
        },
        s = t.originMap.get(e);
      return s && (o.hidden = !0, a > s.number && (o.transferTo = s.number)), t.captureMap.set(a, o), `(${i ? `?<${i}>` : ""}${r.map(n).join("|")})`;
    },
    Character({
      value: e
    }, t) {
      let n = as(e),
        r = aK(e, {
          escDigit: "Backreference" === t.lastNode.type,
          inCharClass: t.inCharClass,
          useFlagV: t.useFlagV
        });
      if (r !== n) return r;
      if (t.useAppliedIgnoreCase && t.currentFlags.ignoreCase && aq(n)) {
        let e = ay(n);
        return t.inCharClass ? e.join("") : e.length > 1 ? `[${e.join("")}]` : e[0];
      }
      return n;
    },
    CharacterClass(e, t, n) {
      let {
          kind: r,
          negate: i,
          parent: a
        } = e,
        {
          body: o
        } = e;
      if ("intersection" === r && !t.useFlagV) throw Error("Use of character class intersection requires min target ES2024");
      ad.bugFlagVLiteralHyphenIsRange && t.useFlagV && o.some(aY) && (o = [iO(45), ...o.filter(e => !aY(e))]);
      let s = () => `[${i ? "^" : ""}${o.map(n).join("intersection" === r ? "&&" : "")}]`;
      if (!t.inCharClass) {
        if ((!t.useFlagV || ad.bugNestedClassIgnoresNegation) && !i) {
          let t = o.filter(e => "CharacterClass" === e.type && "union" === e.kind && e.negate);
          if (t.length) {
            let r = iB(),
              i = r.body[0];
            return r.parent = a, i.parent = r, e.body = o = o.filter(e => !t.includes(e)), o.length ? (e.parent = i, i.body.push(e)) : r.body.pop(), t.forEach(e => {
              let t = iM({
                body: [e]
              });
              e.parent = t, t.parent = r, r.body.push(t);
            }), n(r);
          }
        }
        t.inCharClass = !0;
        let r = s();
        return t.inCharClass = !1, r;
      }
      let l = o[0];
      if ("union" === r && !i && l && ((!t.useFlagV || !t.verbose) && "union" === a.kind && !(ad.bugFlagVLiteralHyphenIsRange && t.useFlagV) || !t.verbose && "intersection" === a.kind && 1 === o.length && "CharacterClassRange" !== l.type)) return o.map(n).join("");
      if (!t.useFlagV && "CharacterClass" === a.type) throw Error("Uses nested character class in a way that requires min target ES2024");
      return s();
    },
    CharacterClassRange(e, t) {
      let n = e.min.value,
        r = e.max.value,
        i = {
          escDigit: !1,
          inCharClass: !0,
          useFlagV: t.useFlagV
        },
        a = aK(n, i),
        o = aK(r, i),
        s = new Set();
      return t.useAppliedIgnoreCase && t.currentFlags.ignoreCase && function (e) {
        let t = e.map(e => e.codePointAt(0)).sort((e, t) => e - t),
          n = [],
          r = null;
        for (let e = 0; e < t.length; e++) t[e + 1] === t[e] + 1 ? r ??= t[e] : null === r ? n.push(t[e]) : (n.push([r, t[e]]), r = null);
        return n;
      }(aX(e)).forEach(e => {
        s.add(Array.isArray(e) ? `${aK(e[0], i)}-${aK(e[1], i)}` : aK(e, i));
      }), `${a}-${o}${[...s].join("")}`;
    },
    CharacterSet({
      kind: e,
      negate: t,
      value: n,
      key: r
    }, i) {
      if ("dot" === e) return i.currentFlags.dotAll ? i.appliedGlobalFlags.dotAll || i.useFlagMods ? "." : "[^]" : al`[^\n]`;
      if ("digit" === e) return t ? al`\D` : al`\d`;
      if ("property" === e) {
        if (i.useAppliedIgnoreCase && i.currentFlags.ignoreCase && aE.has(n)) throw Error(`Unicode property "${n}" can't be case-insensitive when other chars have specific case`);
        return `${t ? al`\P` : al`\p`}{${r ? `${r}=` : ""}${n}}`;
      }
      if ("word" === e) return t ? al`\W` : al`\w`;
      throw Error(`Unexpected character set kind "${e}"`);
    },
    Flags: (e, t) => (t.appliedGlobalFlags.ignoreCase ? "i" : "") + (e.dotAll ? "s" : "") + (e.sticky ? "y" : ""),
    Group({
      atomic: e,
      body: t,
      flags: n,
      parent: r
    }, i, a) {
      let o = i.currentFlags;
      n && (i.currentFlags = ah(o, n));
      let s = t.map(a).join("|"),
        l = i.verbose || 1 !== t.length || "Quantifier" === r.type || e || i.useFlagMods && n ? `(?${function (e, t, n) {
          if (e) return ">";
          let r = "";
          if (t && n) {
            let {
              enable: e,
              disable: n
            } = t;
            r = (e?.ignoreCase ? "i" : "") + (e?.dotAll ? "s" : "") + (n ? "-" : "") + (n?.ignoreCase ? "i" : "") + (n?.dotAll ? "s" : "");
          }
          return `${r}:`;
        }(e, n, i.useFlagMods)}${s})` : s;
      return i.currentFlags = o, l;
    },
    LookaroundAssertion({
      body: e,
      kind: t,
      negate: n
    }, r, i) {
      let a = `${"lookahead" === t ? "" : "<"}${n ? "!" : "="}`;
      return `(?${a}${e.map(i).join("|")})`;
    },
    Quantifier: (e, t, n) => n(e.body) + function ({
      kind: e,
      max: t,
      min: n
    }) {
      return (n || 1 !== t ? n || t !== 1 / 0 ? 1 === n && t === 1 / 0 ? "+" : n === t ? `{${n}}` : `{${n},${t === 1 / 0 ? "" : t}}` : "*" : "?") + {
        greedy: "",
        lazy: "?",
        possessive: "+"
      }[e];
    }(e),
    Subroutine({
      isRecursive: e,
      ref: t
    }, n) {
      if (!e) throw Error("Unexpected non-recursive subroutine in transformed AST");
      let r = n.recursionLimit;
      return 0 === t ? `(?R=${r})` : al`\g<${t}&R=${r}>`;
    }
  },
  aF = new Set(["$", "(", ")", "*", "+", ".", "?", "[", "\\", "]", "^", "{", "|", "}"]),
  aj = new Set(["-", "\\", "]", "^", "["]),
  aG = new Set(["(", ")", "-", "/", "[", "\\", "]", "^", "{", "|", "}", "!", "#", "$", "%", "&", "*", "+", ",", ".", ":", ";", "<", "=", ">", "?", "@", "`", "~"]),
  aW = new Map([[9, al`\t`], [10, al`\n`], [11, al`\v`], [12, al`\f`], [13, al`\r`], [8232, al`\u2028`], [8233, al`\u2029`], [65279, al`\uFEFF`]]),
  aV = /^\p{Cased}$/u;
function aq(e) {
  return aV.test(e);
}
function aX(e, t) {
  let n = !!t?.firstOnly,
    r = e.min.value,
    i = e.max.value,
    a = [];
  if (r < 65 && (65535 === i || i >= 131071) || 65536 === r && i >= 131071) return a;
  for (let e = r; e <= i; e++) {
    let t = as(e);
    if (!aq(t)) continue;
    let o = ay(t).filter(e => {
      let t = e.codePointAt(0);
      return t < r || t > i;
    });
    if (o.length && (a.push(...o), n)) break;
  }
  return a;
}
function aK(e, {
  escDigit: t,
  inCharClass: n,
  useFlagV: r
}) {
  var i;
  if (aW.has(e)) return aW.get(e);
  if (e < 32 || e > 126 && e < 160 || e > 262143 || t && (i = e) > 47 && i < 58) return e > 255 ? `\\u{${e.toString(16).toUpperCase()}}` : `\\x${e.toString(16).toUpperCase().padStart(2, "0")}`;
  let a = as(e);
  return ((n ? r ? aG : aj : aF).has(a) ? "\\" : "") + a;
}
function aQ({
  type: e
}) {
  return "CapturingGroup" === e || "Group" === e || "LookaroundAssertion" === e;
}
function aY({
  type: e,
  value: t
}) {
  return "Character" === e && 45 === t;
}
var aJ = class e extends RegExp {
  #e = new Map();
  #t = null;
  #n;
  #r = null;
  #i = null;
  rawOptions = {};
  get source() {
    return this.#n || "(?:)";
  }
  constructor(t, n, r) {
    const i = !!r?.lazyCompile;
    if (t instanceof RegExp) {
      if (r) throw Error("Cannot provide options when copying a regexp");
      super(t, n), this.#n = t.source, t instanceof e && (this.#e = t.#e, this.#r = t.#r, this.#i = t.#i, this.rawOptions = t.rawOptions);
    } else {
      const e = {
        hiddenCaptures: [],
        strategy: null,
        transfers: [],
        ...r
      };
      super(i ? "" : t, n), this.#n = t, this.#e = function (e, t) {
        let n = new Map();
        for (let t of e) n.set(t, {
          hidden: !0
        });
        for (let [e, r] of t) for (let t of r) ac(n, t, {}).transferTo = e;
        return n;
      }(e.hiddenCaptures, e.transfers), this.#i = e.strategy, this.rawOptions = r ?? {};
    }
    i || (this.#t = this);
  }
  exec(t) {
    if (!this.#t) {
      let {
        lazyCompile: t,
        ...n
      } = this.rawOptions;
      this.#t = new e(this.#n, this.flags, n);
    }
    let n = this.global || this.sticky,
      r = this.lastIndex;
    if ("clip_search" === this.#i && n && r) {
      this.lastIndex = 0;
      let e = this.#a(t.slice(r));
      return e && (function (e, t, n, r) {
        if (e.index += t, e.input = n, r) {
          let n = e.indices;
          for (let e = 0; e < n.length; e++) {
            let r = n[e];
            r && (n[e] = [r[0] + t, r[1] + t]);
          }
          let r = n.groups;
          r && Object.keys(r).forEach(e => {
            let n = r[e];
            n && (r[e] = [n[0] + t, n[1] + t]);
          });
        }
      }(e, r, t, this.hasIndices), this.lastIndex += r), e;
    }
    return this.#a(t);
  }
  #a(e) {
    let t;
    this.#t.lastIndex = this.lastIndex;
    let n = super.exec.call(this.#t, e);
    if (this.lastIndex = this.#t.lastIndex, !n || !this.#e.size) return n;
    let r = [...n];
    n.length = 1, this.hasIndices && (t = [...n.indices], n.indices.length = 1);
    let i = [0];
    for (let e = 1; e < r.length; e++) {
      let {
        hidden: a,
        transferTo: o
      } = this.#e.get(e) ?? {};
      if (a ? i.push(null) : (i.push(n.length), n.push(r[e]), this.hasIndices && n.indices.push(t[e])), o && void 0 !== r[e]) {
        let a = i[o];
        if (!a) throw Error(`Invalid capture transfer to "${a}"`);
        if (n[a] = r[e], this.hasIndices && (n.indices[a] = t[e]), n.groups) {
          this.#r || (this.#r = function (e) {
            let t,
              n = /(?<capture>\((?:\?<(?![=!])(?<name>[^>]+)>|(?!\?)))|\\?./gsu,
              r = new Map(),
              i = 0,
              a = 0;
            for (; t = n.exec(e);) {
              let {
                0: e,
                groups: {
                  capture: n,
                  name: o
                }
              } = t;
              "[" === e ? i++ : i ? "]" === e && i-- : n && (a++, o && r.set(a, o));
            }
            return r;
          }(this.source));
          let i = this.#r.get(o);
          i && (n.groups[i] = r[e], this.hasIndices && (n.indices.groups[i] = t[e]));
        }
      }
    }
    return n;
  }
};
async function a5({
  themes: t,
  langs: n,
  preferredHighlighter: r = "shiki-js"
}) {
  let a = !function (e = i) {
    return null != e && "then" in e;
  }(i ??= ii({
    themes: [],
    langs: ["text"],
    engine: "shiki-wasm" === r ? rF(e.A(77473)) : function (e = {}) {
      let t = {
        target: "auto",
        cache: new Map(),
        ...e
      };
      return t.regexConstructor ||= e => {
        let n;
        return (n = function (e, t) {
          var n;
          let r,
            i,
            a,
            o,
            s = ag(t),
            l = (n = iR(e, {
              flags: s.flags,
              normalizeUnknownPropertyNames: !0,
              rules: {
                captureGroup: s.rules.captureGroup,
                singleline: s.rules.singleline
              },
              skipBackrefValidation: s.rules.allowOrphanBackrefs,
              unicodePropertyMap: av
            }), r = {
              accuracy: "default",
              asciiWordBoundaries: !1,
              avoidSubclass: !1,
              bestEffortTarget: "ES2025",
              ...{
                accuracy: s.accuracy,
                asciiWordBoundaries: s.rules.asciiWordBoundaries,
                avoidSubclass: s.avoidSubclass,
                bestEffortTarget: s.target
              }
            }, aR(n), i = {
              accuracy: r.accuracy,
              asciiWordBoundaries: r.asciiWordBoundaries,
              avoidSubclass: r.avoidSubclass,
              flagDirectivesByAlt: new Map(),
              jsGroupNameMap: new Map(),
              minTargetEs2024: af[r.bestEffortTarget] >= af.ES2024,
              passedLookbehind: !1,
              strategy: null,
              subroutineRefMap: new Map(),
              supportedGNodes: new Set(),
              digitIsAscii: n.flags.digitIsAscii,
              spaceIsAscii: n.flags.spaceIsAscii,
              wordIsAscii: n.flags.wordIsAscii
            }, iQ(n, aL, i), o = {
              currentFlags: a = {
                dotAll: n.flags.dotAll,
                ignoreCase: n.flags.ignoreCase
              },
              prevFlags: null,
              globalFlags: a,
              groupOriginByCopy: new Map(),
              groupsByName: new Map(),
              multiplexCapturesToLeftByRef: new Map(),
              openRefs: new Map(),
              reffedNodesByReferencer: new Map(),
              subroutineRefMap: i.subroutineRefMap
            }, iQ(n, a_, o), iQ(n, aT, {
              groupsByName: o.groupsByName,
              highestOrphanBackref: 0,
              numCapturesToLeft: 0,
              reffedNodesByReferencer: o.reffedNodesByReferencer
            }), n._originMap = o.groupOriginByCopy, n._strategy = i.strategy, n),
            d = function (e, t) {
              let n = ag(t),
                r = af[n.target] >= af.ES2024,
                i = af[n.target] >= af.ES2025,
                a = n.rules.recursionLimit;
              if (!Number.isInteger(a) || a < 2 || a > 20) throw Error("Invalid recursionLimit; use 2-20");
              let o = null,
                s = null;
              if (!i) {
                let t = [e.flags.ignoreCase];
                iQ(e, az, {
                  getCurrentModI: () => t.at(-1),
                  popModI() {
                    t.pop();
                  },
                  pushModI(e) {
                    t.push(e);
                  },
                  setHasCasedChar() {
                    t.at(-1) ? o = !0 : s = !0;
                  }
                });
              }
              let l = {
                  dotAll: e.flags.dotAll,
                  ignoreCase: !!((e.flags.ignoreCase || o) && !s)
                },
                d = e,
                u = {
                  accuracy: n.accuracy,
                  appliedGlobalFlags: l,
                  captureMap: new Map(),
                  currentFlags: {
                    dotAll: e.flags.dotAll,
                    ignoreCase: e.flags.ignoreCase
                  },
                  inCharClass: !1,
                  lastNode: d,
                  originMap: e._originMap,
                  recursionLimit: a,
                  useAppliedIgnoreCase: !!(!i && o && s),
                  useFlagMods: i,
                  useFlagV: r,
                  verbose: n.verbose
                };
              function h(e) {
                return u.lastNode = d, d = e, function (e, t) {
                  if (null == e) throw Error(t ?? "Value expected");
                  return e;
                }(aH[e.type], `Unexpected node type "${e.type}"`)(e, u, h);
              }
              let c = {
                pattern: e.body.map(h).join("|"),
                flags: h(e.flags),
                options: {
                  ...e.options
                }
              };
              return r || (delete c.options.force.v, c.options.disable.v = !0, c.options.unicodeSetsPlugin = null), c._captureTransfers = new Map(), c._hiddenCaptures = [], u.captureMap.forEach((e, t) => {
                e.hidden && c._hiddenCaptures.push(t), e.transferTo && ac(c._captureTransfers, e.transferTo, []).push(t);
              }), c;
            }(l, s),
            u = function (e, t) {
              let n,
                {
                  hiddenCaptures: r,
                  mode: i
                } = {
                  hiddenCaptures: [],
                  mode: "plugin",
                  ...t
                },
                a = t?.captureTransfers ?? new Map();
              if (!RegExp(i4, "su").test(e)) return {
                pattern: e,
                captureTransfers: a,
                hiddenCaptures: r
              };
              if ("plugin" === i && i2(e, i7`\(\?\(DEFINE\)`, i0.DEFAULT)) throw Error("DEFINE groups cannot be used with recursion");
              let o = [],
                s = i2(e, i7`\\[1-9]`, i0.DEFAULT),
                l = new Map(),
                d = [],
                u = !1,
                h = 0,
                c = 0;
              for (at.lastIndex = 0; n = at.exec(e);) {
                let {
                  0: t,
                  groups: {
                    captureName: f,
                    rDepth: p,
                    gRNameOrNum: g,
                    gRDepth: m
                  }
                } = n;
                if ("[" === t) h++;else if (h) "]" === t && h--;else if (p) {
                  if (ar(p), u) throw Error(an);
                  if (s) throw Error(`${"external" === i ? "Backrefs" : "Numbered backrefs"} cannot be used with global recursion`);
                  let t = e.slice(0, n.index),
                    l = e.slice(at.lastIndex);
                  if (i2(l, i4, i0.DEFAULT)) throw Error(an);
                  let d = p - 1;
                  e = ai(t, l, d, !1, r, o, c), a = ao(a, t, d, o.length, 0, c);
                  break;
                } else if (g) {
                  ar(m);
                  let h = !1;
                  for (let e of d) if (e.name === g || e.num === +g) {
                    if (h = !0, e.hasRecursedWithin) throw Error(an);
                    break;
                  }
                  if (!h) throw Error(i7`Recursive \g cannot be used outside the referenced group "${"external" === i ? g : i7`\g<${g}&R=${m}>`}"`);
                  let f = l.get(g),
                    p = function (e, t) {
                      let n,
                        r = /\\?./gsu;
                      r.lastIndex = t;
                      let i = e.length,
                        a = 0,
                        o = 1;
                      for (; n = r.exec(e);) {
                        let [e] = n;
                        if ("[" === e) a++;else if (a) "]" === e && a--;else if ("(" === e) o++;else if (")" === e && ! --o) {
                          i = n.index;
                          break;
                        }
                      }
                      return e.slice(t, i);
                    }(e, f);
                  if (s && i2(p, i7`${i9}|\((?!\?)`, i0.DEFAULT)) throw Error(`${"external" === i ? "Backrefs" : "Numbered backrefs"} cannot be used with recursion of capturing groups`);
                  let b = e.slice(f, n.index),
                    y = p.slice(b.length + t.length),
                    v = o.length,
                    w = m - 1,
                    k = ai(b, y, w, !0, r, o, c);
                  a = ao(a, b, w, o.length - v, v, c);
                  let S = e.slice(0, f),
                    C = e.slice(f + p.length);
                  e = `${S}${k}${C}`, at.lastIndex += k.length - t.length - b.length - y.length, d.forEach(e => e.hasRecursedWithin = !0), u = !0;
                } else if (f) c++, l.set(String(c), at.lastIndex), l.set(f, at.lastIndex), d.push({
                  num: c,
                  name: f
                });else if ("(" === t[0]) {
                  let e = "(" === t;
                  e && (c++, l.set(String(c), at.lastIndex)), d.push(e ? {
                    num: c
                  } : {});
                } else ")" === t && d.pop();
              }
              return r.push(...o), {
                pattern: e,
                captureTransfers: a,
                hiddenCaptures: r
              };
            }(d.pattern, {
              captureTransfers: d._captureTransfers,
              hiddenCaptures: d._hiddenCaptures,
              mode: "external"
            }),
            h = function (e, t) {
              let n,
                r = t?.hiddenCaptures ?? [],
                i = t?.captureTransfers ?? new Map();
              if (!/\(\?>/.test(e)) return {
                pattern: e,
                captureTransfers: i,
                hiddenCaptures: r
              };
              let a = "(?:(?=(",
                o = [0],
                s = [],
                l = 0,
                d = 0,
                u = NaN;
              do {
                let t;
                n = !1;
                let h = 0,
                  c = 0,
                  f = !1;
                for (i8.lastIndex = Number.isNaN(u) ? 0 : u + a.length; t = i8.exec(e);) {
                  let {
                    0: p,
                    index: g,
                    groups: {
                      capturingStart: m,
                      noncapturingStart: b
                    }
                  } = t;
                  if ("[" === p) h++;else if (h) "]" === p && h--;else if ("(?>" !== p || f) {
                    if (f && b) c++;else if (m) f ? c++ : (l++, o.push(l + d));else if (")" === p && f) {
                      if (!c) {
                        let t = l + ++d;
                        e = `${e.slice(0, u)}${a}${e.slice(u + 3, g)}))<$$${t}>)${e.slice(g + 1)}`, n = !0, s.push(t);
                        for (let e = 0; e < r.length; e++) r[e] >= t && r[e]++;
                        if (i.size) {
                          let e = new Map();
                          i.forEach((n, r) => {
                            e.set(r >= t ? r + 1 : r, n.map(e => e >= t ? e + 1 : e));
                          }), i = e;
                        }
                        break;
                      }
                      c--;
                    }
                  } else u = g, f = !0;
                }
              } while (n);
              return r.push(...s), {
                pattern: e = i1(e, String.raw`\\(?<backrefNum>[1-9]\d*)|<\$\$(?<wrappedBackrefNum>\d+)>`, ({
                  0: e,
                  groups: {
                    backrefNum: t,
                    wrappedBackrefNum: n
                  }
                }) => {
                  if (t) {
                    let n = +t;
                    if (n > o.length - 1) throw Error(`Backref "${e}" greater than number of captures`);
                    return `\\${o[n]}`;
                  }
                  return `\\${n}`;
                }, i0.DEFAULT),
                captureTransfers: i,
                hiddenCaptures: r
              };
            }(function (e) {
              let t;
              if (!RegExp(`${i5}\\+`).test(e)) return {
                pattern: e
              };
              let n = [],
                r = null,
                i = null,
                a = "",
                o = 0;
              for (i6.lastIndex = 0; t = i6.exec(e);) {
                let {
                  0: d,
                  index: u,
                  groups: {
                    qBase: h,
                    qMod: c,
                    invalidQ: f
                  }
                } = t;
                if ("[" === d) o || (i = u), o++;else if ("]" === d) o ? o-- : i = null;else if (!o) if ("+" === c && a && !a.startsWith("(")) {
                  if (f) throw Error(`Invalid quantifier "${d}"`);
                  let t = -1;
                  if (/^\{\d+\}$/.test(h)) {
                    var s, l;
                    s = e, l = u + h.length, e = s.slice(0, l) + "" + s.slice(l + c.length);
                  } else {
                    if (")" === a || "]" === a) {
                      let t = ")" === a ? r : i;
                      if (null === t) throw Error(`Invalid unmatched "${a}"`);
                      e = `${e.slice(0, t)}(?>${e.slice(t, u)}${h})${e.slice(u + d.length)}`;
                    } else e = `${e.slice(0, u - a.length)}(?>${a}${h})${e.slice(u + d.length)}`;
                    t += 4;
                  }
                  i6.lastIndex += t;
                } else "(" === d[0] ? n.push(u) : ")" === d && (r = n.length ? n.pop() : null);
                a = d;
              }
              return {
                pattern: e
              };
            }(u.pattern).pattern, {
              captureTransfers: u.captureTransfers,
              hiddenCaptures: u.hiddenCaptures
            }),
            c = {
              pattern: h.pattern,
              flags: `${s.hasIndices ? "d" : ""}${s.global ? "g" : ""}${d.flags}${d.options.disable.v ? "u" : "v"}`
            };
          if (s.avoidSubclass) {
            if (s.lazyCompileLength !== 1 / 0) throw Error("Lazy compilation requires subclass");
          } else {
            let e = h.hiddenCaptures.sort((e, t) => e - t),
              t = Array.from(h.captureTransfers),
              n = l._strategy,
              r = c.pattern.length >= s.lazyCompileLength;
            (e.length || t.length || n || r) && (c.options = {
              ...(e.length && {
                hiddenCaptures: e
              }),
              ...(t.length && {
                transfers: t
              }),
              ...(n && {
                strategy: n
              }),
              ...(r && {
                lazyCompile: r
              })
            });
          }
          return c;
        }(e, {
          global: !0,
          hasIndices: !0,
          lazyCompileLength: 3e3,
          rules: {
            allowOrphanBackrefs: !0,
            asciiWordBoundaries: !0,
            captureGroup: !0,
            recursionLimit: 5,
            singleline: !0
          },
          ...{
            target: t.target
          }
        })).options ? new aJ(n.pattern, n.flags, n.options) : new RegExp(n.pattern, n.flags);
      }, {
        createScanner: e => new ia(e, t),
        createString: e => ({
          content: e
        })
      };
    }()
  })) ? i : await i;
  i = a;
  let o = [];
  for (let e of n) {
    if ("text" === e || "ansi" === e) continue;
    let t = tz(e);
    "then" in t ? o.push(t) : tP(t, a);
  }
  let s = [];
  for (let e of t) {
    let t = tW.getResolvedTheme(e) ?? rC(e);
    "then" in t ? s.push(t) : tq(t, i);
  }
  return (o.length > 0 || s.length > 0) && (await Promise.all([Promise.all(o).then(e => {
    tP(e, a);
  }), Promise.all(s).then(e => {
    tq(e, a);
  })])), a;
}
function a6(e = w) {
  let t = [];
  return "string" == typeof e ? t.push(e) : (t.push(e.dark), t.push(e.light)), t;
}
function a7(e) {
  for (let t of a6(e)) if (!tV.has(t)) return !1;
  return !0;
}
function a3(e, t) {
  return R(e.theme, t.theme) && e.useTokenTransformer === t.useTokenTransformer && e.tokenizeMaxLineLength === t.tokenizeMaxLineLength;
}
function a4(e) {
  let t = function (e) {
    let t = [0],
      n = e.indexOf("\r"),
      r = e.indexOf("\n"),
      i = 0,
      a = 0;
    for (; -1 !== n || -1 !== r;) {
      let o;
      if (-1 !== n && (-1 === r || n < r) ? r === n + 1 ? (o = r + 1, n = e.indexOf("\r", o), r = e.indexOf("\n", o)) : (o = n + 1, n = e.indexOf("\r", o)) : (o = r + 1, r = e.indexOf("\n", o)), t.push(o), 4 == ++a) {
        if (o - i <= 40) {
          for (let n = o; n < e.length; n++) {
            let r = e.charCodeAt(n);
            (10 === r || 13 === r) && (13 === r && n + 1 < e.length && 10 === e.charCodeAt(n + 1) && n++, t.push(n + 1));
          }
          return t;
        }
        i = o, a = 0;
      }
    }
    return t;
  }(e);
  return Array.from({
    length: t.length
  }, (n, r) => {
    let i = t[r],
      a = t[r + 1] ?? e.length;
    return e.slice(i, a);
  });
}
function a9(e) {
  return F({
    tagName: "div",
    children: [F({
      tagName: "div",
      children: e.annotations?.map(e => F({
        tagName: "slot",
        properties: {
          name: e
        }
      })),
      properties: {
        "data-annotation-content": ""
      }
    })],
    properties: {
      "data-line-annotation": `${e.hunkIndex},${e.lineIndex}`
    }
  });
}
let oe = Symbol("no-token"),
  ot = Symbol("multiple-tokens");
function on(e) {
  if ("element" === e.type) for (let t of (e.properties["data-char"] = void 0, e.children)) on(t);
}
let or = function (e = {}) {
    let {
        classPrefix: t = "__shiki_",
        classSuffix: n = "",
        classReplacer: r = e => e
      } = e,
      i = new Map();
    function a(e) {
      return Object.entries(e).map(([e, t]) => `${e}:${t}`).join(";");
    }
    function o(e) {
      let o = t + function (e, t = 0) {
        let n = 0xdeadbeef ^ t,
          r = 0x41c6ce57 ^ t;
        for (let t = 0, i; t < e.length; t++) n = Math.imul(n ^ (i = e.charCodeAt(t)), 0x9e3779b1), r = Math.imul(r ^ i, 0x5f356495);
        return n = Math.imul(n ^ n >>> 16, 0x85ebca6b) ^ Math.imul(r ^ r >>> 13, 0xc2b2ae35), (0x100000000 * (2097151 & (r = Math.imul(r ^ r >>> 16, 0x85ebca6b) ^ Math.imul(n ^ n >>> 13, 0xc2b2ae35))) + (n >>> 0)).toString(36).slice(0, 6);
      }("string" == typeof e ? e : a(e)) + n;
      return o = r(o), i.has(o) || i.set(o, "string" == typeof e ? e : {
        ...e
      }), o;
    }
    return {
      name: "@shikijs/transformers:style-to-class",
      pre(e) {
        if (!e.properties.style) return;
        let t = o(e.properties.style);
        delete e.properties.style, this.addClassToHast(e, t);
      },
      tokens(e) {
        for (let t of e) for (let e of t) {
          if (!e.htmlStyle) continue;
          let t = o(e.htmlStyle);
          e.htmlStyle = {}, e.htmlAttrs ||= {}, e.htmlAttrs.class ? e.htmlAttrs.class += ` ${t}` : e.htmlAttrs.class = t;
        }
      },
      getClassRegistry: () => i,
      getCSS() {
        let e = "";
        for (let [t, n] of i.entries()) e += `.${t}{${"string" == typeof n ? n : a(n)}}`;
        return e;
      },
      clearRegistry() {
        i.clear();
      }
    };
  }({
    classPrefix: "hl-"
  }),
  oi = {
    name: "token-style-normalizer",
    tokens(e) {
      for (let t of e) for (let e of t) {
        if (null != e.htmlStyle) continue;
        let t = {};
        null != e.color && (t.color = e.color), null != e.bgColor && (t["background-color"] = e.bgColor), null != e.fontStyle && 0 !== e.fontStyle && ((1 & e.fontStyle) != 0 && (t["font-style"] = "italic"), (2 & e.fontStyle) != 0 && (t["font-weight"] = "bold"), (4 & e.fontStyle) != 0 && (t["text-decoration"] = "underline")), Object.keys(t).length > 0 && (e.htmlStyle = t);
      }
    }
  };
function oa(e) {
  return `--${"token" === e ? "diffs-token" : "diffs"}-`;
}
let oo = /^#(?:[0-9a-f]{3}0|[0-9a-f]{6}00)$/i,
  os = /^0(?:\.0+)?%?$/;
function ol(e) {
  if (null == e) return null;
  let t = function (e) {
    let t,
      n = /^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})\b/i.exec(e.trim());
    if (null == n) return null;
    let r = n[1],
      i = 1;
    return 3 === r.length ? t = r.split("").map(e => e + e).join("") : 6 === r.length ? t = r : (t = r.slice(0, 6), i = parseInt(r.slice(6, 8), 16) / 255), [parseInt(t.slice(0, 2), 16), parseInt(t.slice(2, 4), 16), parseInt(t.slice(4, 6), 16), i];
  }(e);
  if (null == t) return null;
  let n = t[0] / 255,
    r = t[1] / 255,
    i = t[2] / 255,
    a = e => e <= .03928 ? e / 12.92 : ((e + .055) / 1.055) ** 2.4;
  return .2126 * a(n) + .7152 * a(r) + .0722 * a(i);
}
function od(e) {
  if (null == e) return !1;
  let t = e.trim().toLowerCase();
  if ("transparent" === t || oo.test(t)) return !0;
  let n = function (e) {
    let t = e.indexOf("(");
    if (t <= 0 || !e.endsWith(")")) return;
    let n = e.slice(0, t).trim();
    if (!/^(?:rgb|rgba|hsl|hsla|hwb|lab|lch|oklab|oklch|color)$/i.test(n)) return;
    let r = e.slice(t + 1, -1).trim();
    if (0 === r.length) return;
    let i = r.lastIndexOf("/");
    if (-1 !== i) return r.slice(i + 1).trim();
    if (/^(?:rgba|hsla)$/i.test(n)) {
      let e = r.split(",");
      if (4 === e.length) return e[3]?.trim();
    }
  }(t);
  return null != n && os.test(n);
}
let ou = new WeakMap();
function oh(e) {
  var t, n;
  let r = ou.get(e);
  if (null != r) return r;
  let i = e.colors ?? {},
    a = {
      ...i
    },
    o = i["editor.background"] ?? e.bg,
    s = i["editor.foreground"] ?? e.fg,
    l = i["sideBar.background"] ?? o,
    d = i["sideBar.foreground"] ?? s;
  oc(a, "editor.background", o), oc(a, "editor.foreground", s), oc(a, "sideBar.background", l), oc(a, "sideBar.foreground", d), oc(a, "input.background", i["input.background"] ?? l), oc(a, "sideBarSectionHeader.foreground", i["sideBarSectionHeader.foreground"] ?? d), oc(a, "list.activeSelectionForeground", i["list.activeSelectionForeground"] ?? d), oc(a, "gitDecoration.addedResourceForeground", of(i["gitDecoration.addedResourceForeground"], i["terminal.ansiGreen"], i["editorGutter.addedBackground"])), oc(a, "gitDecoration.modifiedResourceForeground", of(i["gitDecoration.modifiedResourceForeground"], i["terminal.ansiBlue"], i["editorGutter.modifiedBackground"])), oc(a, "gitDecoration.deletedResourceForeground", of(i["gitDecoration.deletedResourceForeground"], i["terminal.ansiRed"], i["editorGutter.deletedBackground"]));
  let u = (od(i["list.focusOutline"]) ? void 0 : i["list.focusOutline"]) ?? (od(i.focusBorder) ? void 0 : i.focusBorder);
  null != u ? a["list.focusOutline"] = u : delete a["list.focusOutline"];
  let h = i["list.hoverBackground"];
  null != h && (t = h, null != (n = l) && t.toLowerCase() === n.toLowerCase() || function (e, t, n) {
    if (null == t || null == n) return !1;
    let r = ol(e),
      i = ol(t),
      a = ol(n);
    return null != r && null != i && null != a && Math.abs(r - a) < Math.abs(r - i);
  }(h, l, d)) && delete a["list.hoverBackground"];
  let c = Object.freeze({
    ...e,
    colors: Object.freeze(a)
  });
  return ou.set(e, c), c;
}
function oc(e, t, n) {
  null != n && "" !== n && (e[t] = n);
}
function of(...e) {
  for (let t of e) if (null != t && "" !== t) return t;
}
function op(e, t) {
  t = null != t ? `${t}-` : "";
  let n = "",
    r = e.colors?.["gitDecoration.addedResourceForeground"] ?? e.colors?.["terminal.ansiGreen"];
  null != r && (n += `${oa("global")}${t}addition-color:${r};`);
  let i = e.colors?.["gitDecoration.deletedResourceForeground"] ?? e.colors?.["terminal.ansiRed"];
  null != i && (n += `${oa("global")}${t}deletion-color:${i};`);
  let a = e.colors?.["gitDecoration.modifiedResourceForeground"] ?? e.colors?.["terminal.ansiBlue"];
  return null != a && (n += `${oa("global")}${t}modified-color:${a};`), n;
}
let og = {
  forcePlainText: !1
};
function om(e, t) {
  return null == t.cacheKey ? e.file === t && e.sourceContents === t.contents : e.cacheKey === t.cacheKey;
}
let ob = -1;
var oy = class {
  options;
  onRenderUpdate;
  workerManager;
  __id = `file-renderer:${++ob}`;
  highlighter;
  renderCache;
  computedLang = "text";
  lineAnnotations = {};
  lineCache;
  pendingStructuralRows;
  textDocumentCache = new WeakMap();
  editSessionActive = !1;
  constructor(e = {
    theme: w
  }, t, n) {
    this.options = e, this.onRenderUpdate = t, this.workerManager = n, n?.isWorkingPool() !== !0 && (this.highlighter = a7(e.theme ?? w) ? function () {
      if (null != i && !("then" in i)) return i;
    }() : void 0);
  }
  setOptions(e) {
    this.options = e;
  }
  mergeOptions(e) {
    this.options = {
      ...this.options,
      ...e
    };
  }
  setLineAnnotations(e) {
    for (let t of (this.lineAnnotations = {}, e)) {
      let e = this.lineAnnotations[t.lineNumber] ?? [];
      this.lineAnnotations[t.lineNumber] = e, e.push(t);
    }
  }
  cleanUp() {
    this.recycle(), this.workerManager = void 0, this.onRenderUpdate = void 0;
  }
  beginEditSession() {
    this.editSessionActive = !0;
  }
  endEditSession() {
    this.editSessionActive = !1;
  }
  editorRenderReady() {
    return this.renderCache?.options.useTokenTransformer === !0 && this.renderCache.highlighted && null != this.renderCache.result;
  }
  recycle() {
    this.clearRenderCache(), this.highlighter = void 0, this.workerManager?.cleanUpTasks(this), this.lineCache = void 0, this.endEditSession(), this.textDocumentCache = new WeakMap();
  }
  syncEditedContentsToFile() {
    let {
      renderCache: e,
      lineCache: t
    } = this;
    e?.isDirty === !0 && null != t && om(t, e.file) && (e.file.contents = t.lines.join(""));
  }
  hasUnkeyedFileContentsChanged(e) {
    let {
      lineCache: t
    } = this;
    return null == e.cacheKey && null != t && t.file === e && t.sourceContents !== e.contents;
  }
  invalidateChangedUnkeyedFile(e) {
    this.hasUnkeyedFileContentsChanged(e) && (this.workerManager?.cleanUpTasks(this), this.clearRenderCache(), this.lineCache = void 0, this.textDocumentCache = new WeakMap());
  }
  clearRenderCache() {
    this.syncEditedContentsToFile(), this.pendingStructuralRows = void 0;
    let e = this.renderCache;
    this.renderCache = void 0, null != e && !0 === e.isDirty && null != e.file.cacheKey && this.workerManager?.evictFileFromCache(e.file.cacheKey);
  }
  hydrate(e) {
    var t;
    let {
        options: n
      } = this.getRenderOptions(e),
      r = (t = this.getOrCreateLineCache(e).length, t > this.getTokenizeMaxLength()),
      i = this.workerManager?.getFileResultCache(e);
    null == i || a3(n, i.options) || (i = void 0), this.renderCache ??= {
      file: e,
      options: n,
      highlighted: !r && !tA(e),
      result: r ? void 0 : i?.result,
      renderRange: void 0
    }, this.editSessionActive || this.workerManager?.isWorkingPool() !== !0 ? null == this.highlighter && (this.computedLang = e.lang ?? tx(e.name), this.initializeHighlighter()) : null != this.renderCache.result || r || this.workerManager.highlightFileAST(this, e);
  }
  getLocalHighlightTheme() {
    return this.workerManager?.getFileRenderOptions().theme ?? this.options.theme ?? w;
  }
  getEffectiveCodeOptions() {
    let e = this.workerManager?.isWorkingPool() === !0 ? this.workerManager.getFileRenderOptions() : void 0;
    return {
      theme: this.getLocalHighlightTheme(),
      tokenizeMaxLineLength: e?.tokenizeMaxLineLength ?? this.options.tokenizeMaxLineLength
    };
  }
  getRenderOptions(e) {
    let t = (() => {
        if (this.workerManager?.isWorkingPool() === !0) {
          let e = this.workerManager.getFileRenderOptions();
          return this.editSessionActive && !0 !== e.useTokenTransformer ? {
            ...e,
            useTokenTransformer: !0
          } : e;
        }
        let {
          tokenizeMaxLineLength: e = 1e3
        } = this.options;
        return {
          theme: this.getLocalHighlightTheme(),
          useTokenTransformer: this.editSessionActive || !0 === this.options.useTokenTransformer,
          tokenizeMaxLineLength: e
        };
      })(),
      {
        renderCache: n
      } = this;
    return n?.result != null && I(e, n.file) && a3(t, n.options) ? {
      options: t,
      forceHighlight: !1
    } : {
      options: t,
      forceHighlight: !0
    };
  }
  getOrCreateLineCache(e) {
    this.invalidateChangedUnkeyedFile(e);
    let {
      lineCache: t
    } = this;
    return null != t && om(t, e) || (t = {
      cacheKey: e.cacheKey,
      file: e,
      sourceContents: e.contents,
      lines: a4(e.contents)
    }), this.lineCache = t, t.lines;
  }
  getLineCount(e) {
    let t = this.getOrCreateLineCache(e);
    return this.textDocumentCache.get(e)?.lineCount ?? t.length;
  }
  updateRenderCache(e, t, n = !1) {
    if (this.pendingStructuralRows = void 0, null == this.renderCache) return;
    let {
      file: r,
      result: i
    } = this.renderCache;
    if (null == i) return;
    let a = n ? new Map() : void 0;
    this.pendingStructuralRows = a;
    let o = null != this.lineCache && om(this.lineCache, r) ? this.lineCache : void 0;
    for (let [t, n] of e) {
      if (void 0 === a && null != o && t < o.lines.length) {
        var s;
        let e = n.map(e => e[2]).join("");
        o.lines[t] = (s = o.lines[t] ?? "", s.endsWith("\r\n") ? e + "\r\n" : s.endsWith("\r") ? e + "\r" : s.endsWith("\n") ? e + "\n" : e);
      }
      let e = {
        type: "element",
        tagName: "div",
        properties: {
          "data-line": t + 1,
          "data-line-type": "context",
          "data-line-index": t
        },
        children: n.map(([e, t, n]) => 0 === e && "" === t ? "" === n ? {
          type: "element",
          tagName: "br",
          properties: {},
          children: []
        } : {
          type: "text",
          value: n
        } : {
          type: "element",
          tagName: "span",
          properties: {
            "data-char": e,
            style: `color:${t};`
          },
          children: [{
            type: "text",
            value: n
          }]
        })
      };
      void 0 !== a ? a.set(t, e) : i.code[t] = e;
    }
    i.baseThemeType = t, this.renderCache.isDirty = !0;
  }
  applyDocumentChange(e) {
    let t = this.pendingStructuralRows;
    if (this.pendingStructuralRows = void 0, null == this.renderCache) return;
    let {
      file: n,
      result: r
    } = this.renderCache;
    if (null == r) return;
    let i = null != this.lineCache && om(this.lineCache, n) ? this.lineCache.lines : a4(n.contents),
      a = a4(e.getText());
    if (i.length !== a.length) {
      let n = Math.min(i.length, a.length),
        o = 0;
      for (; o < n && i[o] === a[o];) o++;
      let s = 0;
      for (; s < n - o && i[i.length - 1 - s] === a[a.length - 1 - s];) s++;
      let l = r.code;
      r.code = Array(a.length);
      for (let e = 0; e < o; e++) r.code[e] = l[e];
      for (let e = 0; e < s; e++) r.code[a.length - 1 - e] = l[i.length - 1 - e];
      if (void 0 !== t) for (let [e, n] of t) e < a.length && (r.code[e] = n);
      for (let t = o; t < a.length - s; t++) r.code[t] ??= {
        type: "element",
        tagName: "div",
        properties: {
          "data-line": t + 1,
          "data-line-type": "context",
          "data-line-index": t
        },
        children: [{
          type: "element",
          tagName: "span",
          properties: {
            "data-char": 0
          },
          children: [{
            type: "text",
            value: e.getLineText(t)
          }]
        }]
      };
      for (let e = 0; e < r.code.length; e++) {
        let t = r.code[e];
        t?.type === "element" && (t.properties["data-line"] = e + 1, t.properties["data-line-index"] = e);
      }
      this.renderCache.isDirty = !0;
    }
    this.lineCache = {
      cacheKey: n.cacheKey,
      file: n,
      sourceContents: n.contents,
      lines: a
    }, this.textDocumentCache.set(n, e);
  }
  renderFile(e = this.renderCache?.file, t = C) {
    var n;
    if (null == e) return;
    this.invalidateChangedUnkeyedFile(e), this.renderCache?.isDirty !== !0 || I(e, this.renderCache.file) || (this.clearRenderCache(), this.lineCache = void 0, this.textDocumentCache = new WeakMap());
    let {
      options: r,
      forceHighlight: i
    } = this.getRenderOptions(e);
    this.renderCache?.isDirty !== !0 || a3(r, this.renderCache.options) || this.clearRenderCache();
    let a = this.getMatchingWorkerResultCache(e, r);
    null == a || this.hasHighlightedRenderCache(e, r) || (this.renderCache = {
      file: e,
      highlighted: !0,
      renderRange: void 0,
      ...a
    }, i = !1), this.renderCache ??= {
      file: e,
      highlighted: !1,
      options: r,
      result: void 0,
      renderRange: void 0
    };
    let o = this.getOrCreateLineCache(e),
      s = e.contents.length > 0,
      l = !s || tA(e) || (n = o.length, n > this.getTokenizeMaxLength()),
      d = !I(e, this.renderCache.file),
      u = !tk(this.renderCache.renderRange, t);
    if (this.editSessionActive || this.workerManager?.isWorkingPool() !== !0) {
      this.computedLang = e.lang ?? tx(e.name);
      let t = null != this.highlighter && a7(r.theme),
        n = null != this.highlighter && tN(this.computedLang),
        a = !l && n;
      if (null != this.highlighter && t && (i || l || !this.renderCache.highlighted && a || null == this.renderCache.result)) {
        let {
          result: t,
          options: r
        } = this.renderFileWithHighlighter(e, this.highlighter, l || !n);
        this.renderCache = {
          file: e,
          options: r,
          highlighted: a,
          result: t,
          renderRange: void 0
        };
      }
      t && (l || n) || this.asyncHighlight(e).then(({
        result: t,
        options: n
      }) => {
        null != this.renderCache && (this.renderCache.highlighted = !1), this.applyHighlightResult(e, t, n, !l);
      });
    } else (l || null == this.renderCache.result || !this.renderCache.highlighted && (d || u)) && (this.renderCache.file = e, this.renderCache.options = r, this.renderCache.highlighted = !1, (null == this.renderCache.result || d || u || i) && (this.renderCache.result = this.workerManager.getPlainFileAST(e, t.startingLine, t.totalLines, o)), this.renderCache.renderRange = t), !l && s && (!this.renderCache.highlighted || i) && this.workerManager.highlightFileAST(this, e);
    return null != this.renderCache.result ? this.processFileResult(this.renderCache.file, t, this.renderCache.result) : void 0;
  }
  async asyncRender(e, t = C) {
    let {
      result: n
    } = await this.asyncHighlight(e);
    return this.processFileResult(e, t, n);
  }
  async asyncHighlight(e) {
    var t, n;
    let r = (t = this.getOrCreateLineCache(e).length, t > this.getTokenizeMaxLength());
    this.computedLang = r ? "text" : e.lang ?? tx(e.name);
    let i = null != this.highlighter && (n = a6(this.getLocalHighlightTheme()), tW.hasResolvedThemes(n)),
      a = r || null != this.highlighter && tN(this.computedLang);
    return null != this.highlighter && i && a || (this.highlighter = await this.initializeHighlighter()), this.renderFileWithHighlighter(e, this.highlighter, r);
  }
  renderFileWithHighlighter(e, t, n = !1) {
    let {
      options: r
    } = this.getRenderOptions(e);
    return {
      result: function (e, t, {
        theme: n = w,
        tokenizeMaxLineLength: r,
        useTokenTransformer: i
      }, {
        forcePlainText: a,
        startingLine: o,
        totalLines: s,
        lines: l
      } = og) {
        a ? (o ??= 0, s ??= 1 / 0) : (o = 0, s = 1 / 0);
        let d = o > 0 || s < 1 / 0,
          {
            state: u,
            transformers: h
          } = function (e = !1, t = !1) {
            let n = {
                lineInfo: []
              },
              r = [{
                line: e => (delete e.properties.class, e),
                pre(t) {
                  let r = function (e) {
                      let t = e.children[0];
                      for (; null != t;) {
                        if ("element" === t.type && "code" === t.tagName) return t;
                        t = "children" in t ? t.children[0] : null;
                      }
                    }(t),
                    i = [];
                  if (null != r) {
                    let t = 1;
                    for (let a of r.children) "element" === a.type && (e && function e(t) {
                      let n,
                        r = function (e) {
                          let t = e.properties["data-char"];
                          if ("number" == typeof t) return t;
                        }(t);
                      if (null != r) return r;
                      let i = oe,
                        a = [],
                        o = [],
                        s = () => {
                          if (0 === o.length || null == n) {
                            o = [], n = void 0;
                            return;
                          }
                          if (1 === o.length) {
                            let r = o[0];
                            if (r?.type === "element") {
                              var e, t;
                              for (let i of (e = r, t = n, e.properties["data-char"] = t, r.children)) on(i);
                            } else on(r);
                            a.push(r), o = [], n = void 0;
                            return;
                          }
                          for (let e of o) on(e);
                          a.push(F({
                            tagName: "span",
                            properties: {
                              "data-char": n
                            },
                            children: o
                          })), o = [], n = void 0;
                        },
                        l = e => {
                          if (e !== oe) {
                            if (e === ot) {
                              i = ot;
                              return;
                            }
                            if (i === oe) {
                              i = e;
                              return;
                            }
                            i !== e && (i = ot);
                          }
                        };
                      for (let r of t.children) {
                        let t = "element" === r.type ? e(r) : oe;
                        if (l(t), "number" != typeof t) {
                          s(), a.push(r);
                          continue;
                        }
                        null != n && n !== t && s(), n ??= t, o.push(r);
                      }
                      return s(), t.children = a, i;
                    }(a), i.push(function (e, t, n) {
                      let r = "function" == typeof n.lineInfo ? n.lineInfo(t) : n.lineInfo[t - 1];
                      if (null == r) {
                        let r = `processLine: line ${t}, contains no state.lineInfo`;
                        throw console.error(r, {
                          node: e,
                          line: t,
                          state: n
                        }), Error(r);
                      }
                      return e.tagName = "div", e.properties["data-line"] = r.lineNumber, e.properties["data-alt-line"] = r.altLineNumber, e.properties["data-line-type"] = r.type, e.properties["data-line-index"] = r.lineIndex, 0 === e.children.length && e.children.push(H("\n")), e;
                    }(a, t, n)), t++);
                    r.children = i;
                  }
                  return t;
                },
                ...(e ? {
                  tokens(e) {
                    for (let t of e) {
                      let e = 0;
                      for (let n of t) n.__lineChar ??= e, e += n.content.length;
                    }
                  },
                  preprocess(e, t) {
                    t.mergeWhitespaces = "never";
                  },
                  span(e, t, n, r, i) {
                    if (i?.offset != null && null != i.content) {
                      let t = i.__lineChar;
                      null != t && (e.properties["data-char"] = t);
                    }
                    return e;
                  }
                } : null)
              }];
            return t && r.push(oi, or), e && r.push({
              line: e => ("element" === e.type && 0 === e.children.length && e.children.push({
                type: "element",
                tagName: "br",
                properties: {},
                children: []
              }), e)
            }), {
              state: n,
              transformers: r,
              toClass: or
            };
          }(i),
          c = a ? "text" : e.lang ?? tx(e.name),
          f = "string" == typeof n ? t.getTheme(n).type : void 0,
          p = function ({
            theme: e = w,
            highlighter: t,
            prefix: n
          }) {
            let r = "";
            if ("string" == typeof e) {
              let i = t.getTheme(e),
                a = oh(i);
              r += `color:${a.fg};`, r += `background-color:${a.bg};`, r += `${oa("global")}fg:${a.fg};`, r += `${oa("global")}bg:${a.bg};`, r += op(i, n);
            } else {
              let n = t.getTheme(e.dark),
                i = oh(n);
              r += `${oa("global")}dark:${i.fg};`, r += `${oa("global")}dark-bg:${i.bg};`, r += op(n, "dark"), i = oh(n = t.getTheme(e.light)), r += `${oa("global")}light:${i.fg};`, r += `${oa("global")}light-bg:${i.bg};`, r += op(n, "light");
            }
            return r;
          }({
            theme: n,
            highlighter: t
          });
        u.lineInfo = e => ({
          type: "context",
          lineIndex: e - 1 + o,
          lineNumber: e + o
        });
        let g = "string" == typeof n ? {
            lang: c,
            theme: n,
            transformers: h,
            defaultColor: !1,
            cssVariablePrefix: oa("token"),
            tokenizeMaxLineLength: r,
            tokenizeTimeLimit: 0
          } : {
            lang: c,
            themes: n,
            transformers: h,
            defaultColor: !1,
            cssVariablePrefix: oa("token"),
            tokenizeMaxLineLength: r,
            tokenizeTimeLimit: 0
          },
          m = function (e) {
            let t = e.children[0];
            for (; null != t;) {
              if ("element" === t.type && "code" === t.tagName) return t.children;
              t = "children" in t ? t.children[0] : null;
            }
            throw console.error(e), Error("getLineNodes: Unable to find children");
          }(t.codeToHast(d ? function (e, t, n) {
            if (0 === e.length) return "";
            let r = Math.min(t + n, e.length);
            return e.slice(t, r).join("");
          }(l ?? a4(e.contents), o, s) : e.contents, g)),
          b = d ? Array(o) : m;
        return d && b.push(...m), {
          code: b,
          themeStyles: p,
          baseThemeType: f
        };
      }(e, t, r, {
        forcePlainText: n
      }),
      options: r
    };
  }
  processFileResult(e, t, {
    code: n,
    themeStyles: r,
    baseThemeType: i
  }) {
    let a,
      o = this.getLineCount(e),
      {
        disableFileHeader: s = !1
      } = this.options,
      l = [],
      d = G(),
      u = Math.min(t.startingLine + t.totalLines, o),
      h = 0,
      c = tL(t) && null != (a = this.lineAnnotations[0]) && a.length > 0 ? a : void 0;
    null != c && (d.children.push(W("context", "annotation", 1)), l.push(a9({
      type: "annotation",
      hunkIndex: -1,
      lineIndex: -1,
      annotations: c.map(e => A(e))
    })), h++);
    for (let r = t.startingLine; r < u; r++) {
      let t = r + 1,
        i = n[r];
      if (null == i) {
        let n = "FileRenderer.processFileResult: Line doesnt exist";
        throw console.error(n, {
          name: e.name,
          lineIndex: r,
          lineNumber: t
        }), Error(n);
      }
      d.children.push(function (e, t, n, r = {}) {
        return F({
          tagName: "div",
          properties: {
            "data-line-type": e,
            "data-column-number": t,
            "data-line-index": n,
            ...r
          },
          children: null != t ? [F({
            tagName: "span",
            properties: {
              "data-line-number-content": ""
            },
            children: [H(`${t}`)]
          })] : void 0
        });
      }("context", t, `${r}`)), l.push(i), h++;
      let a = this.lineAnnotations[t];
      null != a && (d.children.push(W("context", "annotation", 1)), l.push(a9({
        type: "annotation",
        hunkIndex: 0,
        lineIndex: t,
        annotations: a.map(e => A(e))
      })), h++);
    }
    return d.properties.style = `grid-row: span ${h}`, {
      gutterAST: d.children ?? [],
      contentAST: l,
      preAST: this.createPreElement(o),
      headerAST: s ? void 0 : this.renderHeader(e),
      totalLines: o,
      rowCount: h,
      themeStyles: r,
      baseThemeType: i,
      bufferBefore: t.bufferBefore,
      bufferAfter: t.bufferAfter,
      css: ""
    };
  }
  renderHeader(e) {
    let {
      headerRenderMode: t = "default",
      stickyHeader: n = !1
    } = this.options;
    return function ({
      fileOrDiff: e,
      mode: t,
      stickyHeader: n
    }) {
      let r = "type" in e ? e : void 0,
        i = {
          "data-diffs-header": t,
          "data-change-type": r?.type,
          "data-sticky": n ? "" : void 0
        };
      return F({
        tagName: "div",
        children: ["custom" === t ? F({
          tagName: "slot",
          properties: {
            name: v
          }
        }) : function ({
          name: e,
          prevName: t,
          iconType: n
        }) {
          let r = [F({
            tagName: "slot",
            properties: {
              name: m
            }
          }), j({
            name: function (e) {
              switch (e) {
                case "file":
                  return "diffs-icon-file-code";
                case "change":
                  return "diffs-icon-symbol-modified";
                case "new":
                  return "diffs-icon-symbol-added";
                case "deleted":
                  return "diffs-icon-symbol-deleted";
                case "rename-pure":
                case "rename-changed":
                  return "diffs-icon-symbol-moved";
              }
            }(n),
            properties: {
              "data-change-icon": n
            }
          })];
          return null != t && (r.push(F({
            tagName: "div",
            children: [F({
              tagName: "bdi",
              children: [H(t)]
            })],
            properties: {
              "data-prev-name": ""
            }
          })), r.push(j({
            name: "diffs-icon-arrow-right-short",
            properties: {
              "data-rename-icon": ""
            }
          }))), r.push(F({
            tagName: "div",
            children: [F({
              tagName: "bdi",
              children: [H(e)]
            })],
            properties: {
              "data-title": ""
            }
          })), r.push(F({
            tagName: "slot",
            properties: {
              name: b
            }
          })), F({
            tagName: "div",
            children: r,
            properties: {
              "data-header-content": ""
            }
          });
        }({
          name: e.name,
          prevName: "prevName" in e ? e.prevName : void 0,
          iconType: r?.type ?? "file"
        }), ...("custom" === t ? [] : [function (e) {
          let t = [];
          if (null != e) {
            let n = 0,
              r = 0;
            for (let t of e.hunks) n += t.additionLines, r += t.deletionLines;
            (r > 0 || 0 === n) && t.push(F({
              tagName: "span",
              children: [H(`-${r}`)],
              properties: {
                "data-deletions-count": ""
              }
            })), (n > 0 || 0 === r) && t.push(F({
              tagName: "span",
              children: [H(`+${n}`)],
              properties: {
                "data-additions-count": ""
              }
            }));
          }
          return t.push(F({
            tagName: "slot",
            properties: {
              name: y
            }
          })), F({
            tagName: "div",
            children: t,
            properties: {
              "data-metadata": ""
            }
          });
        }(r)])],
        properties: i
      });
    }({
      fileOrDiff: e,
      mode: t,
      stickyHeader: n
    });
  }
  renderFullHTML(e) {
    return tr(this.renderFullAST(e));
  }
  renderFullAST(e, t = []) {
    return t.push(F({
      tagName: "code",
      children: this.renderCodeAST(e),
      properties: {
        "data-code": ""
      }
    })), {
      ...e.preAST,
      children: t
    };
  }
  renderCodeAST(e) {
    var t, n;
    let r = G();
    return r.children = e.gutterAST, r.properties.style = `grid-row: span ${e.rowCount}`, [r, (t = e.contentAST, n = e.rowCount, F({
      tagName: "div",
      children: t,
      properties: {
        "data-content": "",
        style: `grid-row: span ${n}`
      }
    }))];
  }
  renderPartialHTML(e, t = !1) {
    return t ? tr(F({
      tagName: "code",
      children: e,
      properties: {
        "data-code": ""
      }
    })) : tr(e);
  }
  async initializeHighlighter() {
    return this.highlighter = await a5(function (e, {
      theme: t,
      preferredHighlighter: n = "shiki-js"
    }) {
      return {
        langs: [e ?? "text"],
        themes: a6(t),
        preferredHighlighter: n
      };
    }(this.computedLang, {
      theme: this.getLocalHighlightTheme(),
      preferredHighlighter: this.workerManager?.getPreferredHighlighter() ?? this.options.preferredHighlighter
    })), this.highlighter;
  }
  onHighlightSuccess(e, t, n, r = !0) {
    this.editSessionActive || this.applyHighlightResult(e, t, n, r);
  }
  applyHighlightResult(e, t, n, r = !0) {
    if (null == this.renderCache) return;
    let i = !I(e, this.renderCache.file) || !this.renderCache.highlighted || !a3(n, this.renderCache.options);
    this.renderCache = {
      file: e,
      options: n,
      highlighted: r,
      result: t,
      renderRange: void 0
    }, i && this.onRenderUpdate?.();
  }
  getMatchingWorkerResultCache(e, t) {
    if (this.editSessionActive) return;
    let n = this.workerManager?.getFileResultCache(e);
    if (null != n && a3(t, n.options)) return n;
  }
  hasHighlightedRenderCache(e, t) {
    let {
      renderCache: n
    } = this;
    return n?.result != null && n.highlighted && I(e, n.file) && a3(t, n.options);
  }
  onHighlightError(e) {
    console.error(e);
  }
  getTokenizeMaxLength() {
    return this.options.tokenizeMaxLength ?? 1e5;
  }
  createPreElement(e) {
    let {
      disableLineNumbers: t = !1,
      overflow: n = "scroll"
    } = this.options;
    return F({
      tagName: "pre",
      properties: function ({
        diffIndicators: e,
        disableBackground: t,
        disableLineNumbers: n,
        overflow: r,
        split: i,
        totalLines: a,
        type: o,
        customProperties: s
      }) {
        return {
          ...s,
          "data-diff": "diff" === o ? "" : void 0,
          "data-file": "file" === o ? "" : void 0,
          "data-diff-type": "diff" === o ? i ? "split" : "single" : void 0,
          "data-overflow": r,
          "data-disable-line-numbers": n ? "" : void 0,
          "data-background": t ? void 0 : "",
          "data-indicators": "bars" === e || "classic" === e ? e : void 0,
          style: `--diffs-min-number-column-width-default:${`${a}`.length}ch;`
        };
      }({
        type: "file",
        diffIndicators: "none",
        disableBackground: !0,
        disableLineNumbers: t,
        overflow: n,
        split: !1,
        totalLines: e
      })
    });
  }
};
let ov = `<svg data-icon-sprite aria-hidden="true" width="0" height="0">
  <symbol id="diffs-icon-arrow-right-short" viewBox="0 0 16 16">
    <path d="M8.47 4.22a.75.75 0 0 0 0 1.06l1.97 1.97H3.75a.75.75 0 0 0 0 1.5h6.69l-1.97 1.97a.75.75 0 1 0 1.06 1.06l3.25-3.25a.75.75 0 0 0 0-1.06L9.53 4.22a.75.75 0 0 0-1.06 0"/>
  </symbol>
  <symbol id="diffs-icon-brand-github" viewBox="0 0 16 16">
    <path d="M8 0c4.42 0 8 3.58 8 8a8.01 8.01 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27s-1.36.09-2 .27c-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8"/>
  </symbol>
  <symbol id="diffs-icon-chevron" viewBox="0 0 16 16">
    <path d="M1.47 4.47a.75.75 0 0 1 1.06 0L8 9.94l5.47-5.47a.75.75 0 1 1 1.06 1.06l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 0 1 0-1.06"/>
  </symbol>
  <symbol id="diffs-icon-chevrons-narrow" viewBox="0 0 10 16">
    <path d="M4.47 2.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1-1.06 1.06L5 3.81 2.28 6.53a.75.75 0 0 1-1.06-1.06zM1.22 9.47a.75.75 0 0 1 1.06 0L5 12.19l2.72-2.72a.75.75 0 0 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 0 1 0-1.06"/>
  </symbol>
  <symbol id="diffs-icon-diff-split" viewBox="0 0 16 16">
    <path d="M14 0H8.5v16H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-1.5 6.5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0"/><path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5.5V0zm.5 7.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1" opacity=".3"/>
  </symbol>
  <symbol id="diffs-icon-diff-unified" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8.5h16zm-8-4a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1A.5.5 0 0 0 8 10" clip-rule="evenodd"/><path fill-rule="evenodd" d="M14 0a2 2 0 0 1 2 2v5.5H0V2a2 2 0 0 1 2-2zM6.5 3.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z" clip-rule="evenodd" opacity=".4"/>
  </symbol>
  <symbol id="diffs-icon-expand" viewBox="0 0 16 16">
    <path d="M3.47 5.47a.75.75 0 0 1 1.06 0L8 8.94l3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06"/>
  </symbol>
  <symbol id="diffs-icon-expand-all" viewBox="0 0 16 16">
    <path d="M11.47 9.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06L8 12.94zM7.526 1.418a.75.75 0 0 1 1.004.052l4 4a.75.75 0 1 1-1.06 1.06L8 3.06 4.53 6.53a.75.75 0 1 1-1.06-1.06l4-4z"/>
  </symbol>
  <symbol id="diffs-icon-file-code" viewBox="0 0 16 16">
    <path d="M10.75 0c.199 0 .39.08.53.22l3.5 3.5c.14.14.22.331.22.53v9A2.75 2.75 0 0 1 12.25 16h-8.5A2.75 2.75 0 0 1 1 13.25V2.75A2.75 2.75 0 0 1 3.75 0zm-7 1.5c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25h8.5c.69 0 1.25-.56 1.25-1.25V5h-1.25A2.25 2.25 0 0 1 10 2.75V1.5z"/><path d="M7.248 6.19a.75.75 0 0 1 .063 1.058L5.753 9l1.558 1.752a.75.75 0 0 1-1.122.996l-2-2.25a.75.75 0 0 1 0-.996l2-2.25a.75.75 0 0 1 1.06-.063M8.69 7.248a.75.75 0 1 1 1.12-.996l2 2.25a.75.75 0 0 1 0 .996l-2 2.25a.75.75 0 1 1-1.12-.996L10.245 9z"/>
  </symbol>
  <symbol id="diffs-icon-plus" viewBox="0 0 16 16">
    <path d="M8 3a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 0 1.5h-3.5v3.5a.75.75 0 0 1-1.5 0v-3.5h-3.5a.75.75 0 0 1 0-1.5h3.5v-3.5A.75.75 0 0 1 8 3"/>
  </symbol>
  <symbol id="diffs-icon-symbol-added" viewBox="0 0 16 16">
    <path d="M8 4a.75.75 0 0 1 .75.75v2.5h2.5a.75.75 0 0 1 0 1.5h-2.5v2.5a.75.75 0 0 1-1.5 0v-2.5h-2.5a.75.75 0 0 1 0-1.5h2.5v-2.5A.75.75 0 0 1 8 4"/><path d="M1.788 4.296c.196-.88.478-1.381.802-1.706s.826-.606 1.706-.802C5.194 1.588 6.387 1.5 8 1.5s2.806.088 3.704.288c.88.196 1.381.478 1.706.802s.607.826.802 1.706c.2.898.288 2.091.288 3.704s-.088 2.806-.288 3.704c-.195.88-.478 1.381-.802 1.706s-.826.607-1.706.802c-.898.2-2.091.288-3.704.288s-2.806-.088-3.704-.288c-.88-.195-1.381-.478-1.706-.802s-.606-.826-.802-1.706C1.588 10.806 1.5 9.613 1.5 8s.088-2.806.288-3.704M8 0C1.412 0 0 1.412 0 8s1.412 8 8 8 8-1.412 8-8-1.412-8-8-8"/>
  </symbol>
  <symbol id="diffs-icon-symbol-deleted" viewBox="0 0 16 16">
    <path d="M4 8a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 4 8"/><path d="M1.788 4.296c.196-.88.478-1.381.802-1.706s.826-.606 1.706-.802C5.194 1.588 6.387 1.5 8 1.5s2.806.088 3.704.288c.88.196 1.381.478 1.706.802s.607.826.802 1.706c.2.898.288 2.091.288 3.704s-.088 2.806-.288 3.704c-.195.88-.478 1.381-.802 1.706s-.826.607-1.706.802c-.898.2-2.091.288-3.704.288s-2.806-.088-3.704-.288c-.88-.195-1.381-.478-1.706-.802s-.606-.826-.802-1.706C1.588 10.806 1.5 9.613 1.5 8s.088-2.806.288-3.704M8 0C1.412 0 0 1.412 0 8s1.412 8 8 8 8-1.412 8-8-1.412-8-8-8"/>
  </symbol>
  <symbol id="diffs-icon-symbol-diffstat" viewBox="0 0 16 16">
    <path d="M1.788 4.296c.196-.88.478-1.381.802-1.706s.826-.606 1.706-.802C5.194 1.588 6.387 1.5 8 1.5s2.806.088 3.704.288c.88.196 1.381.478 1.706.802s.607.826.802 1.706c.2.898.288 2.091.288 3.704s-.088 2.806-.288 3.704c-.195.88-.478 1.381-.802 1.706s-.826.607-1.706.802c-.898.2-2.091.288-3.704.288s-2.806-.088-3.704-.288c-.88-.195-1.381-.478-1.706-.802s-.606-.826-.802-1.706C1.588 10.806 1.5 9.613 1.5 8s.088-2.806.288-3.704M8 0C1.412 0 0 1.412 0 8s1.412 8 8 8 8-1.412 8-8-1.412-8-8-8"/><path d="M8.75 4.296a.75.75 0 0 0-1.5 0V6.25h-2a.75.75 0 0 0 0 1.5h2v1.5h1.5v-1.5h2a.75.75 0 0 0 0-1.5h-2zM5.25 10a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5z"/>
  </symbol>
  <symbol id="diffs-icon-symbol-ignored" viewBox="0 0 16 16">
    <path d="M1.5 8c0 1.613.088 2.806.288 3.704.196.88.478 1.381.802 1.706s.826.607 1.706.802c.898.2 2.091.288 3.704.288s2.806-.088 3.704-.288c.88-.195 1.381-.478 1.706-.802s.607-.826.802-1.706c.2-.898.288-2.091.288-3.704s-.088-2.806-.288-3.704c-.195-.88-.478-1.381-.802-1.706s-.826-.606-1.706-.802C10.806 1.588 9.613 1.5 8 1.5s-2.806.088-3.704.288c-.88.196-1.381.478-1.706.802s-.606.826-.802 1.706C1.588 5.194 1.5 6.387 1.5 8M0 8c0-6.588 1.412-8 8-8s8 1.412 8 8-1.412 8-8 8-8-1.412-8-8m11.53-2.47a.75.75 0 0 0-1.06-1.06l-6 6a.75.75 0 1 0 1.06 1.06z"/>
  </symbol>
  <symbol id="diffs-icon-symbol-modified" viewBox="0 0 16 16">
    <path d="M1.5 8c0 1.613.088 2.806.288 3.704.196.88.478 1.381.802 1.706s.826.607 1.706.802c.898.2 2.091.288 3.704.288s2.806-.088 3.704-.288c.88-.195 1.381-.478 1.706-.802s.607-.826.802-1.706c.2-.898.288-2.091.288-3.704s-.088-2.806-.288-3.704c-.195-.88-.478-1.381-.802-1.706s-.826-.606-1.706-.802C10.806 1.588 9.613 1.5 8 1.5s-2.806.088-3.704.288c-.88.196-1.381.478-1.706.802s-.606.826-.802 1.706C1.588 5.194 1.5 6.387 1.5 8M0 8c0-6.588 1.412-8 8-8s8 1.412 8 8-1.412 8-8 8-8-1.412-8-8m8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
  </symbol>
  <symbol id="diffs-icon-symbol-moved" viewBox="0 0 16 16">
    <path d="M1.788 4.296c.196-.88.478-1.381.802-1.706s.826-.606 1.706-.802C5.194 1.588 6.387 1.5 8 1.5s2.806.088 3.704.288c.88.196 1.381.478 1.706.802s.607.826.802 1.706c.2.898.288 2.091.288 3.704s-.088 2.806-.288 3.704c-.195.88-.478 1.381-.802 1.706s-.826.607-1.706.802c-.898.2-2.091.288-3.704.288s-2.806-.088-3.704-.288c-.88-.195-1.381-.478-1.706-.802s-.606-.826-.802-1.706C1.588 10.806 1.5 9.613 1.5 8s.088-2.806.288-3.704M8 0C1.412 0 0 1.412 0 8s1.412 8 8 8 8-1.412 8-8-1.412-8-8-8"/><path d="M8.495 4.695a.75.75 0 0 0-.05 1.06L10.486 8l-2.041 2.246a.75.75 0 0 0 1.11 1.008l2.5-2.75a.75.75 0 0 0 0-1.008l-2.5-2.75a.75.75 0 0 0-1.06-.051m-4 0a.75.75 0 0 0-.05 1.06l2.044 2.248-1.796 1.995a.75.75 0 0 0 1.114 1.004l2.25-2.5a.75.75 0 0 0-.002-1.007l-2.5-2.75a.75.75 0 0 0-1.06-.05"/>
  </symbol>
  <symbol id="diffs-icon-symbol-ref" viewBox="0 0 16 16">
    <path d="M1.5 8c0 1.613.088 2.806.288 3.704.196.88.478 1.381.802 1.706.286.286.71.54 1.41.73V1.86c-.7.19-1.124.444-1.41.73-.324.325-.606.826-.802 1.706C1.588 5.194 1.5 6.387 1.5 8m4 6.397c.697.07 1.522.103 2.5.103 1.613 0 2.806-.088 3.704-.288.88-.195 1.381-.478 1.706-.802s.607-.826.802-1.706c.2-.898.288-2.091.288-3.704s-.088-2.806-.288-3.704c-.195-.88-.478-1.381-.802-1.706s-.826-.606-1.706-.802C10.806 1.588 9.613 1.5 8 1.5c-.978 0-1.803.033-2.5.103zM0 8c0-6.588 1.412-8 8-8s8 1.412 8 8-1.412 8-8 8-8-1.412-8-8m7-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"/>
  </symbol>
</svg>`,
  ow = {};
function ok(e) {
  if (null != a) return a;
  let t = e.host;
  if ("u" > typeof HTMLElement && t instanceof HTMLElement && !t.isConnected) return;
  let n = document.createElement("div");
  n.setAttribute("data-code", ""), n.setAttribute("data-diffs-scrollbar-measure", "true");
  let r = document.createElement("div");
  return r.style.position = "relative", r.style.width = "200%", r.style.height = "200%", n.appendChild(r), e.appendChild(n), a = Math.max(n.offsetHeight - n.clientHeight, 0), n.remove(), a;
}
function oS(e) {
  return `${k}: ${null == e ? "var(--diffs-scrollbar-gutter-fallback)" : `${e}px`};`;
}
let oC = "@layer base, theme, rendered, unsafe;",
  ox = RegExp(`${k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*:\\s*[^;]+;`);
function oA(e) {
  return {
    theme: e?.theme,
    disableLineNumbers: e?.disableLineNumbers,
    overflow: e?.overflow,
    themeType: e?.themeType,
    collapsed: e?.collapsed,
    disableFileHeader: e?.disableFileHeader,
    disableVirtualizationBuffers: e?.disableVirtualizationBuffers,
    stickyHeader: e?.stickyHeader,
    preferredHighlighter: e?.preferredHighlighter,
    useCSSClasses: e?.useCSSClasses,
    useTokenTransformer: e?.useTokenTransformer === !0 || e?.onTokenClick != null || e?.onTokenEnter != null || e?.onTokenLeave != null,
    tokenizeMaxLineLength: e?.tokenizeMaxLineLength,
    tokenizeMaxLength: e?.tokenizeMaxLength,
    unsafeCSS: e?.unsafeCSS,
    headerRenderMode: e?.renderCustomHeader != null ? "custom" : "default"
  };
}
let oE = [""],
  oL = -1;
var o_ = class {
  options;
  workerManager;
  isContainerManaged;
  static LoadedCustomComponent = !0;
  __id = `file:${++oL}`;
  type = "file";
  fileContainer;
  spriteSVG;
  pre;
  code;
  bufferBefore;
  bufferAfter;
  themeCSSStyle;
  appliedThemeCSS;
  hasAdoptedThemeCSS = !1;
  unsafeCSSStyle;
  appliedUnsafeCSS;
  gutterUtilityContent;
  errorWrapper;
  placeHolder;
  lastRenderedHeaderHTML;
  cachedHeaderHTML;
  appliedPreAttributes;
  lastRowCount;
  mounted = !1;
  headerElement;
  headerCustom;
  headerPrefix;
  headerFilenameSuffix;
  headerMetadata;
  fileRenderer;
  resizeManager;
  interactionManager;
  annotationCache = new Map();
  lineAnnotations = [];
  managersDirty = !1;
  file;
  renderRange;
  enabled = !0;
  editor;
  constructor(e = {
    theme: w
  }, t, n = !1) {
    this.options = e, this.workerManager = t, this.isContainerManaged = n, this.fileRenderer = new oy(e, this.handleHighlightRender, this.workerManager), this.resizeManager = new ty(), this.interactionManager = new to("file", ts(e)), this.workerManager?.subscribeToThemeChanges(this);
  }
  handleHighlightRender = () => {
    this.rerender();
  };
  rerender() {
    this.enabled && null != this.file && this.render({
      file: this.file,
      forceRender: !0,
      renderRange: this.renderRange
    });
  }
  __getCurrentFile() {
    return this.file;
  }
  onThemeChange() {
    this.fileRenderer.clearRenderCache(), this.rerender();
  }
  setOptions(e) {
    null != e && (this.options = e, this.cachedHeaderHTML = void 0, this.syncInteractionOptions());
  }
  syncInteractionOptions() {
    this.interactionManager.setOptions(ts(this.options));
  }
  mergeOptions(e) {
    this.options = {
      ...this.options,
      ...e
    };
  }
  setThemeType(e) {
    (this.options.themeType ?? "system") !== e && (this.mergeOptions({
      themeType: e
    }), this.applyCachedThemeState(e));
  }
  applyCachedThemeState(e) {
    if ("string" == typeof this.options.theme || null == this.fileContainer || null == this.appliedThemeCSS) return !1;
    let t = this.appliedThemeCSS.baseThemeType ?? e;
    return this.appliedThemeCSS.themeType !== t && (this.applyThemeState(this.fileContainer, this.appliedThemeCSS.themeStyles, e, this.appliedThemeCSS.baseThemeType), !0);
  }
  hasThemeChanged() {
    return null != this.appliedThemeCSS && !R(this.appliedThemeCSS.theme, this.options.theme ?? w);
  }
  getHoveredLine = () => this.interactionManager.getHoveredLine();
  setLineAnnotations(e) {
    this.lineAnnotations = e;
  }
  setSelectedLines(e, t) {
    this.interactionManager.setSelection(e, t);
  }
  setEditorActiveLine(e, t) {
    this.interactionManager.setEditorActiveLine(e, {
      lineNumberOnly: t?.lineNumberOnly,
      side: t?.side ?? "additions"
    });
  }
  getCodeScrollLeft() {
    return this.code?.scrollLeft ?? 0;
  }
  setCodeScrollLeft(e) {
    null != this.code && (this.code.scrollLeft = e);
  }
  __getEffectiveCodeOptions() {
    return {
      ...this.options,
      ...this.fileRenderer.getEffectiveCodeOptions()
    };
  }
  flushManagers() {
    if (!this.managersDirty || null == this.pre) {
      this.managersDirty = !1;
      return;
    }
    let {
      overflow: e = "scroll"
    } = this.options;
    this.interactionManager.setup(this.pre), this.resizeManager.setup(this.pre, {
      disableAnnotations: "wrap" === e,
      columnVariables: this.shouldApplyColumnVariables(e) ? "apply" : "measure"
    }), this.managersDirty = !1;
  }
  shouldApplyColumnVariables(e) {
    return "scroll" === e && this.lineAnnotations.length > 0;
  }
  cleanUp(e = !1) {
    this.emitPostRender(!0), this.editor?.cleanUp(e), this.editor = void 0, this.resizeManager.cleanUp(), this.interactionManager.cleanUp(), this.managersDirty = !1, this.workerManager?.unsubscribeToThemeChanges(this), this.renderRange = void 0, this.isContainerManaged || this.fileContainer?.remove(), this.fileContainer = void 0, this.mounted = !1, e || (this.lineAnnotations = []), this.clearAuxiliaryNodes(), this.pre = void 0, this.code = void 0, this.bufferBefore?.remove(), this.bufferBefore = void 0, this.bufferAfter?.remove(), this.bufferAfter = void 0, this.appliedPreAttributes = void 0, this.lastRowCount = void 0, this.headerElement = void 0, this.headerPrefix = void 0, this.headerFilenameSuffix = void 0, this.headerMetadata = void 0, this.headerCustom = void 0, this.lastRenderedHeaderHTML = void 0, e || (this.cachedHeaderHTML = void 0), this.errorWrapper?.remove(), this.errorWrapper = void 0, this.spriteSVG = void 0, this.themeCSSStyle = void 0, this.appliedThemeCSS = void 0, this.hasAdoptedThemeCSS = !1, this.unsafeCSSStyle = void 0, this.appliedUnsafeCSS = void 0, this.placeHolder?.remove(), this.placeHolder = void 0, e ? this.fileRenderer.recycle() : (this.fileRenderer.cleanUp(), this.workerManager = void 0, this.file = void 0), this.enabled = !1;
  }
  virtualizedSetup() {
    this.enabled = !0, this.workerManager?.subscribeToThemeChanges(this);
  }
  hydrate(e) {
    let {
      fileContainer: t,
      prerenderedHTML: n,
      preventEmit: r = !1,
      file: i,
      lineAnnotations: a
    } = e;
    if (!this.enabled) throw Error("File.hydrate: attempting to call hydrate after cleaned up");
    if (null != this.fileContainer) throw Error("File.hydrate: hydrate can only be called before the instance has rendered or hydrated");
    this.hydrateElements(t, n), function (e, t, n = !1) {
      return !n && null == e && null != t;
    }(this.pre, i, this.options.collapsed) || function (e, t, n = !1) {
      return null == e && null != t && !n;
    }(this.headerElement, i, this.options.disableFileHeader) ? this.render({
      ...e,
      preventEmit: !0
    }) : this.hydrationSetup({
      file: i,
      lineAnnotations: a
    }), r || this.emitPostRender();
  }
  hydrateElements(e, t) {
    for (let n of (this.fileContainer !== e && this.emitPostRender(!0), !function (e, t) {
      if (null == t) return;
      let n = e.shadowRoot ?? e.attachShadow({
        mode: "open"
      });
      "" === n.innerHTML && (n.innerHTML = t);
    }(e, t), Array.from(e.shadowRoot?.children ?? []))) {
      if (n instanceof SVGElement) {
        this.spriteSVG = n;
        continue;
      }
      if (n instanceof HTMLElement) {
        if (n instanceof HTMLPreElement) {
          this.pre = n, this.appliedPreAttributes = void 0;
          continue;
        }
        if (n instanceof HTMLStyleElement && n.hasAttribute("data-theme-css")) {
          this.themeCSSStyle = n;
          continue;
        }
        if (n instanceof HTMLStyleElement && n.hasAttribute("data-unsafe-css")) {
          this.unsafeCSSStyle = n, this.appliedUnsafeCSS = n.textContent;
          continue;
        }
        if ("diffsHeader" in n.dataset) {
          this.headerElement = n, this.lastRenderedHeaderHTML = void 0;
          continue;
        }
      }
    }
    null != this.pre && (this.syncCodeNodeFromPre(this.pre), this.pre.removeAttribute("data-dehydrated")), this.fileContainer = e, this.hydrateMeasuredScrollbar();
  }
  hydrationSetup({
    file: e,
    lineAnnotations: t
  }) {
    this.lineAnnotations = t ?? this.lineAnnotations, this.file = e, this.fileRenderer.setOptions(oA(this.options)), this.syncInteractionOptions(), null != this.pre && (this.fileRenderer.hydrate(e), this.renderAnnotations(), this.renderGutterUtility(), this.injectUnsafeCSS(), this.managersDirty = !0, this.flushManagers());
  }
  getOrCreateLineCache(e = this.file) {
    return null != e ? this.fileRenderer.getOrCreateLineCache(e) : oE;
  }
  updateBuffers(e) {
    null != this.pre && this.applyBuffers(this.pre, e);
  }
  syncRenderViewToEditor() {
    let e = this.editor,
      t = this.fileContainer,
      n = this.file,
      r = this.lineAnnotations,
      i = this.renderRange;
    null != e && null != t && null != n && this.fileRenderer.initializeHighlighter().then(a => {
      this.enabled && this.editor === e && this.fileContainer === t && this.file === n && e.__syncRenderView(a, t, n, r, i);
    });
  }
  attachEditor(e) {
    this.editor?.cleanUp(), this.editor = e, this.fileRenderer.beginEditSession();
    let t = null == this.file ? void 0 : e.__prepareFile?.(this.file);
    return void 0 !== t && t !== this.file ? this.renderPreparedFile({
      file: t,
      forceRender: !0,
      preventEmit: !0,
      renderRange: this.renderRange
    }) : this.fileRenderer.editorRenderReady() ? this.syncRenderViewToEditor() : this.rerender(), () => {
      this.editor = void 0, this.fileRenderer.endEditSession();
    };
  }
  applyDocumentChange(e, t) {
    this.fileRenderer.applyDocumentChange(e), null != t && t !== this.lineAnnotations && null != this.file && (this.setLineAnnotations(t), this.fileRenderer.setLineAnnotations(this.lineAnnotations), this.renderAnnotations());
  }
  updateRenderCache(e, t, n) {
    this.fileRenderer.updateRenderCache(e, t, n?.lineCountChangeInFlight);
  }
  render(e) {
    if (!this.enabled) throw Error("File.render: attempting to call render after cleaned up");
    let t = this.editor?.__prepareFile?.(e.file) ?? e.file;
    return this.renderPreparedFile(t === e.file ? e : {
      ...e,
      file: t
    });
  }
  renderPreparedFile({
    file: e,
    fileContainer: t,
    forceRender: n = !1,
    preventEmit: r = !1,
    containerWrapper: i,
    deferManagers: a = !1,
    lineAnnotations: o,
    renderRange: s
  }) {
    this.editor?.__postponeBgTokenizeToNextFrame();
    let {
        collapsed: l = !1,
        themeType: d = "system"
      } = this.options,
      u = l ? void 0 : s,
      h = this.renderRange,
      c = this.hasThemeChanged(),
      f = null != o && (o.length > 0 || this.lineAnnotations.length > 0) && o !== this.lineAnnotations,
      p = !I(this.file, e) || this.fileRenderer.hasUnkeyedFileContentsChanged(e);
    if (!l && !n && tk(u, this.renderRange) && !p && !f && !c) return this.applyCachedThemeState(d);
    this.renderRange = u, p && (this.cachedHeaderHTML = void 0), this.file = e, this.fileRenderer.setOptions(oA(this.options)), this.syncInteractionOptions(), null != o && this.setLineAnnotations(o), this.fileRenderer.setLineAnnotations(this.lineAnnotations);
    let {
      disableErrorHandling: g = !1,
      disableFileHeader: m = !1
    } = this.options;
    if (m && (null != this.headerElement && (this.headerElement.remove(), this.headerElement = void 0, this.lastRenderedHeaderHTML = void 0), this.clearHeaderSlots()), t = this.getOrCreateFileContainerNode(t, i), this.applyCachedThemeState(d), l) {
      this.removeRenderedCode(), this.clearAuxiliaryNodes();
      try {
        let n = this.fileRenderer.renderFile(e, x);
        null != n && this.applyThemeState(t, n.themeStyles, d, n.baseThemeType), n?.headerAST != null && this.applyHeaderToDOM(n.headerAST, t), this.injectUnsafeCSS();
      } catch (e) {
        if (g) throw e;
        console.error(e), e instanceof Error && this.applyErrorToDOM(e, t);
      }
      return r || this.emitPostRender(), !0;
    }
    try {
      let r = this.getOrCreatePreNode(t);
      if (!this.canPartiallyRender(n, f, p || c) || !this.applyPartialRender(h, u)) {
        let n = this.fileRenderer.renderFile(e, u);
        if (null == n) return this.workerManager?.isInitialized() === !1 && this.workerManager.initialize().then(() => this.rerender()), !1;
        this.applyThemeState(t, n.themeStyles, d, n.baseThemeType), null != n.headerAST && this.applyHeaderToDOM(n.headerAST, t), this.applyFullRender(n, r);
      }
      this.applyBuffers(r, u), this.injectUnsafeCSS(), this.renderAnnotations(), this.renderGutterUtility(), this.managersDirty = !0, a || this.flushManagers(), null != this.editor && this.syncRenderViewToEditor();
    } catch (e) {
      if (g) throw e;
      console.error(e), e instanceof Error && this.applyErrorToDOM(e, t);
    }
    return r || this.emitPostRender(), !0;
  }
  emitPostRender(e = !1) {
    let {
      fileContainer: t,
      options: {
        onPostRender: n
      }
    } = this;
    if (e) {
      if (!this.mounted || (this.mounted = !1, null == t)) return;
      n?.(t, this, "unmount");
      return;
    }
    if (null == t) return;
    let r = this.mounted ? "update" : "mount";
    this.mounted = !0, n?.(t, this, r);
  }
  removeRenderedCode() {
    this.resizeManager.cleanUp(), this.interactionManager.cleanUp(), this.bufferBefore?.remove(), this.bufferBefore = void 0, this.bufferAfter?.remove(), this.bufferAfter = void 0, this.code?.remove(), this.code = void 0, this.pre?.remove(), this.pre = void 0, this.appliedPreAttributes = void 0, this.lastRowCount = void 0;
  }
  clearAuxiliaryNodes() {
    for (let {
      element: e
    } of this.annotationCache.values()) e.remove();
    this.annotationCache.clear(), this.gutterUtilityContent?.remove(), this.gutterUtilityContent = void 0;
  }
  canPartiallyRender(e, t, n) {
    return !e && !t && !n;
  }
  renderPlaceholder(e) {
    if (null == this.fileContainer) return !1;
    if (this.emitPostRender(!0), this.cleanChildNodes(), null == this.placeHolder) {
      let e = this.fileContainer.shadowRoot ?? this.fileContainer.attachShadow({
        mode: "open"
      });
      this.placeHolder = document.createElement("div"), this.placeHolder.dataset.placeholder = "", e.appendChild(this.placeHolder);
    }
    return this.placeHolder.style.setProperty("height", `${e}px`), !0;
  }
  async primeHighlightCache(e = this.file) {
    let {
      workerManager: t
    } = this;
    if (null == e || null == t || !t.isWorkingPool() || null == e.cacheKey || tA(e)) return;
    let n = this.options.tokenizeMaxLength ?? 1e5;
    this.fileRenderer.getOrCreateLineCache(e).length > n || (await t.primeFileHighlightCache(e).catch(e => {
      console.error(e);
    }));
  }
  cleanChildNodes() {
    this.resizeManager.cleanUp(), this.interactionManager.cleanUp(), this.clearAuxiliaryNodes(), this.bufferAfter?.remove(), this.bufferBefore?.remove(), this.code?.remove(), this.errorWrapper?.remove(), this.headerElement?.remove(), this.headerPrefix?.remove(), this.headerFilenameSuffix?.remove(), this.headerMetadata?.remove(), this.headerCustom?.remove(), this.pre?.remove(), this.spriteSVG?.remove(), this.themeCSSStyle?.remove(), this.unsafeCSSStyle?.remove(), this.bufferAfter = void 0, this.bufferBefore = void 0, this.code = void 0, this.errorWrapper = void 0, this.headerElement = void 0, this.headerPrefix = void 0, this.headerFilenameSuffix = void 0, this.headerMetadata = void 0, this.headerCustom = void 0, this.pre = void 0, this.spriteSVG = void 0, this.themeCSSStyle = void 0, this.appliedThemeCSS = void 0, this.hasAdoptedThemeCSS = !1, this.unsafeCSSStyle = void 0, this.appliedUnsafeCSS = void 0, this.lastRenderedHeaderHTML = void 0, this.lastRowCount = void 0, this.mounted = !1;
  }
  renderAnnotations() {
    if (this.isContainerManaged || null == this.fileContainer) {
      for (let {
        element: e
      } of this.annotationCache.values()) e.remove();
      this.annotationCache.clear();
      return;
    }
    let e = new Map(this.annotationCache),
      {
        renderAnnotation: t
      } = this.options;
    if (null != t && this.lineAnnotations.length > 0) for (let [r, i] of this.lineAnnotations.entries()) {
      var n;
      let a = `${r}-${A(i)}`,
        o = this.annotationCache.get(a);
      if (null == o || (n = o.annotation, i.lineNumber !== n.lineNumber || i.metadata !== n.metadata)) {
        o?.element.remove();
        let e = t(i);
        if (null == e) continue;
        (o = {
          element: function (e) {
            let t = document.createElement("div");
            return t.dataset.annotationSlot = "", t.slot = e, t.style.whiteSpace = "normal", t;
          }(A(i)),
          annotation: i
        }).element.appendChild(e), this.fileContainer.appendChild(o.element), this.annotationCache.set(a, o);
      }
      e.delete(a);
    }
    for (let [t, {
      element: n
    }] of e.entries()) this.annotationCache.delete(t), n.remove();
  }
  renderGutterUtility() {
    let e,
      {
        renderGutterUtility: t
      } = this.options;
    if (null == this.fileContainer || null == t) {
      this.gutterUtilityContent?.remove(), this.gutterUtilityContent = void 0;
      return;
    }
    let n = t(this.interactionManager.getHoveredLine);
    if (null != n && null != this.gutterUtilityContent) return;
    if (null == n) {
      this.gutterUtilityContent?.remove(), this.gutterUtilityContent = void 0;
      return;
    }
    let r = ((e = document.createElement("div")).slot = "gutter-utility-slot", e.style.position = "absolute", e.style.top = "0", e.style.bottom = "0", e.style.textAlign = "center", e.style.whiteSpace = "normal", e.style.touchAction = "none", e);
    r.appendChild(n), this.fileContainer.appendChild(r), this.gutterUtilityContent = r;
  }
  injectUnsafeCSS() {
    let {
        unsafeCSS: e
      } = this.options,
      t = this.fileContainer?.shadowRoot;
    if (null != t) {
      if (null == e || "" === e) {
        null != this.unsafeCSSStyle && (this.unsafeCSSStyle.remove(), this.unsafeCSSStyle = void 0), this.appliedUnsafeCSS = void 0;
        return;
      }
      if (this.unsafeCSSStyle?.parentNode !== t || this.appliedUnsafeCSS !== e) {
        let n;
        this.unsafeCSSStyle ??= ((n = document.createElement("style")).setAttribute("data-unsafe-css", ""), n), this.unsafeCSSStyle.parentNode !== t && t.appendChild(this.unsafeCSSStyle), this.unsafeCSSStyle.textContent = `${oC}
@layer unsafe {
  ${e}
}`, this.appliedUnsafeCSS = e;
      }
    }
  }
  applyThemeState(e, t, n, r) {
    let i = e.shadowRoot ?? e.attachShadow({
        mode: "open"
      }),
      a = r ?? n,
      o = this.options.theme ?? w,
      s = "string" == typeof o ? o : {
        ...o
      },
      l = ok(i);
    if (this.themeCSSStyle?.parentNode === i && this.appliedThemeCSS?.themeStyles === t && this.appliedThemeCSS.themeType === a && this.appliedThemeCSS.scrollbarGutter === l) {
      this.appliedThemeCSS.theme = s;
      return;
    }
    if (this.hasAdoptedThemeCSS && this.themeCSSStyle?.parentNode === i) {
      this.hasAdoptedThemeCSS = !1, this.appliedThemeCSS = {
        theme: s,
        themeStyles: t,
        themeType: a,
        baseThemeType: r,
        scrollbarGutter: l
      };
      return;
    }
    this.themeCSSStyle = function ({
      shadowRoot: e,
      currentNode: t,
      themeCSS: n
    }) {
      let r;
      return "" === n.trim() ? void t?.remove() : ((t ??= ((r = document.createElement("style")).setAttribute("data-theme-css", ""), r)).textContent = n, t.parentNode !== e && e.appendChild(t), t);
    }({
      shadowRoot: i,
      currentNode: this.themeCSSStyle,
      themeCSS: function (e, t = "system", n) {
        return `${oC}
@layer rendered {
  :host {${"system" === t ? "" : `
  color-scheme: ${t};`}
  ${oS(n)}
  ${e}
  }
}`;
      }(t, a, l)
    }), this.appliedThemeCSS = null != this.themeCSSStyle ? {
      theme: s,
      themeStyles: t,
      themeType: a,
      baseThemeType: r,
      scrollbarGutter: l
    } : void 0;
  }
  hydrateMeasuredScrollbar() {
    let e = this.fileContainer?.shadowRoot;
    if (null != e && null != this.themeCSSStyle) {
      var t;
      let n;
      this.themeCSSStyle.textContent = (t = this.themeCSSStyle.textContent ?? "", n = oS(ok(e)), t.replace(ox, n));
    }
  }
  shouldGuardRebuildScroll() {
    return null != this.editor && (u ??= "safari" in window && "pushNotification" in window.safari || /^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }
  applyFullRender(e, t) {
    this.cleanupErrorWrapper(), this.applyPreNodeAttributes(t, e);
    let n = this.code = function ({
        code: e,
        pre: t,
        columnType: n,
        rowSpan: r,
        containerSize: i = !1
      } = {}) {
        return null == e && ((e = document.createElement("code")).setAttribute("data-code", ""), null != n && e.setAttribute(`data-${n}`, ""), t?.appendChild(e)), null != r ? e.style.setProperty("grid-row", `span ${r}`) : e.style.removeProperty("grid-row"), i ? e.setAttribute("data-container-size", "") : e.removeAttribute("data-container-size"), e;
      }({
        code: this.code
      }),
      r = this.fileRenderer.renderCodeAST(e);
    this.editor?.__captureFocusForDOMReplacement();
    let i = () => {
      if (n.childElementCount >= 2) for (let e = 0; e < 2; e++) {
        let t = n.children[e],
          i = r[e];
        t.innerHTML = tr(i.children), t.style.cssText = i.properties.style;
      } else n.innerHTML = tr(r);
      t.contains(n) || t.replaceChildren(n);
    };
    this.shouldGuardRebuildScroll() ? function (e, t) {
      let n = e?.offsetHeight ?? 0;
      if (null == e || 0 === n) return t();
      e.style.minHeight = `${n}px`;
      try {
        t(), e.offsetHeight;
      } finally {
        e.style.minHeight = "";
      }
    }(t, i) : i(), this.lastRowCount = e.rowCount;
  }
  applyPartialRender(e, t) {
    if (null == e || null == t) return !1;
    let {
        file: n,
        code: r
      } = this,
      i = null != r ? this.getColumns(r) : void 0;
    if (null == n || null == r || null == i) return !1;
    let a = e.startingLine,
      o = t.startingLine,
      s = e.totalLines === 1 / 0 ? 1 / 0 : a + e.totalLines,
      l = t.totalLines === 1 / 0 ? 1 / 0 : o + t.totalLines,
      d = Math.max(a, o),
      u = Math.min(s, l);
    if (u <= d) return !1;
    if (!this.trimDOMToOverlap(i.gutter, d, u) || !this.trimDOMToOverlap(i.content, d, u)) throw Error("File.applyPartialRender: failed to trim to overlap");
    let {
        length: h
      } = i.content.children,
      c = (e, t) => {
        if (!(t <= 0)) return this.fileRenderer.renderFile(n, {
          startingLine: e,
          totalLines: t,
          bufferBefore: 0,
          bufferAfter: 0
        });
      },
      f = o < d ? c(o, d - o) : void 0;
    if (void 0 === f && o < d) return !1;
    let p = l === 1 / 0 ? 1 / 0 : Math.max(0, l - u),
      g = l > u ? c(u, p) : void 0;
    return (void 0 !== g || !(l > u)) && (this.cleanupErrorWrapper(), null != f && (i.gutter.insertAdjacentHTML("afterbegin", this.fileRenderer.renderPartialHTML(f.gutterAST)), i.content.insertAdjacentHTML("afterbegin", this.fileRenderer.renderPartialHTML(f.contentAST)), h += f.rowCount), null != g && (i.gutter.insertAdjacentHTML("beforeend", this.fileRenderer.renderPartialHTML(g.gutterAST)), i.content.insertAdjacentHTML("beforeend", this.fileRenderer.renderPartialHTML(g.contentAST)), h += g.rowCount), this.lastRowCount !== h && (i.gutter.style.setProperty("grid-row", `span ${h}`), i.content.style.setProperty("grid-row", `span ${h}`), this.lastRowCount = h), !0);
  }
  getColumns(e) {
    let t = e.children[0],
      n = e.children[1];
    if (t instanceof HTMLElement && n instanceof HTMLElement && null != t.dataset.gutter && null != n.dataset.content) return {
      gutter: t,
      content: n
    };
  }
  trimDOMToOverlap(e, t, n) {
    let r = this.getDOMBoundaryIndices(e, [t, n]),
      i = r.get(t) ?? e.children.length,
      a = r.get(n) ?? e.children.length;
    if (i > a) return !1;
    for (let t = e.children.length - 1; t >= a; t -= 1) e.children[t]?.remove();
    for (let t = i - 1; t >= 0; t -= 1) e.children[t]?.remove();
    return !0;
  }
  getDOMBoundaryIndices(e, t) {
    let n = [...new Set(t)].sort((e, t) => e - t),
      r = new Map();
    if (0 === n.length) return r;
    let i = 0,
      a = n[0],
      {
        children: o
      } = e;
    0 === a && (r.set(0, 0), i += 1, a = n[i]);
    for (let e = 0; e < o.length; e += 1) {
      let t = o[e];
      if (!(t instanceof HTMLElement)) continue;
      let s = this.getLineIndexFromDOMNode(t);
      if (null != s) {
        for (; null != a && s >= a;) r.set(a, e), i += 1, a = n[i];
        if (i >= n.length) break;
      }
    }
    for (let e of n) r.has(e) || r.set(e, o.length);
    return r;
  }
  getLineIndexFromDOMNode(e) {
    let t = e.dataset.lineIndex;
    if (null == t) return;
    let n = Number(t);
    return Number.isNaN(n) ? void 0 : n;
  }
  applyBuffers(e, t) {
    if (null == t || this.shouldDisableVirtualizationBuffers()) {
      null != this.bufferBefore && (this.bufferBefore.remove(), this.bufferBefore = void 0), null != this.bufferAfter && (this.bufferAfter.remove(), this.bufferAfter = void 0);
      return;
    }
    t.bufferBefore > 0 ? (null == this.bufferBefore && (this.bufferBefore = document.createElement("div"), this.bufferBefore.dataset.virtualizerBuffer = "before", e.before(this.bufferBefore)), this.bufferBefore.style.setProperty("height", `${t.bufferBefore}px`), this.bufferBefore.style.setProperty("contain", "strict")) : null != this.bufferBefore && (this.bufferBefore.remove(), this.bufferBefore = void 0), t.bufferAfter > 0 ? (null == this.bufferAfter && (this.bufferAfter = document.createElement("div"), this.bufferAfter.dataset.virtualizerBuffer = "after", e.after(this.bufferAfter)), this.bufferAfter.style.setProperty("height", `${t.bufferAfter}px`), this.bufferAfter.style.setProperty("contain", "strict")) : null != this.bufferAfter && (this.bufferAfter.remove(), this.bufferAfter = void 0);
  }
  shouldDisableVirtualizationBuffers() {
    return this.options.disableVirtualizationBuffers ?? !1;
  }
  applyHeaderToDOM(e, t) {
    let {
      file: n
    } = this;
    if (null == n) return;
    this.cleanupErrorWrapper(), this.placeHolder?.remove(), this.placeHolder = void 0;
    let r = this.cachedHeaderHTML ?? tr(e);
    if (this.cachedHeaderHTML = r, r !== this.lastRenderedHeaderHTML) {
      let e = document.createElement("div");
      e.innerHTML = r;
      let n = e.firstElementChild;
      if (!(n instanceof HTMLElement)) return;
      null != this.headerElement ? t.shadowRoot?.replaceChild(n, this.headerElement) : t.shadowRoot?.prepend(n), this.headerElement = n, this.lastRenderedHeaderHTML = r;
    }
    if (this.isContainerManaged) return;
    let {
      renderHeaderPrefix: i,
      renderHeaderFilenameSuffix: a,
      renderCustomHeader: o,
      renderHeaderMetadata: s
    } = this.options;
    if (null != o) {
      let e = o(n) ?? void 0;
      this.headerCustom = this.upsertHeaderSlotElement(t, this.headerCustom, v, e), this.headerPrefix?.remove(), this.headerFilenameSuffix?.remove(), this.headerMetadata?.remove(), this.headerPrefix = void 0, this.headerFilenameSuffix = void 0, this.headerMetadata = void 0;
    } else {
      let e = i?.(n) ?? void 0,
        r = a?.(n) ?? void 0,
        o = s?.(n) ?? void 0;
      this.headerPrefix = this.upsertHeaderSlotElement(t, this.headerPrefix, m, e), this.headerFilenameSuffix = this.upsertHeaderSlotElement(t, this.headerFilenameSuffix, b, r), this.headerMetadata = this.upsertHeaderSlotElement(t, this.headerMetadata, y, o), this.headerCustom?.remove(), this.headerCustom = void 0;
    }
  }
  clearHeaderSlots() {
    this.headerPrefix?.remove(), this.headerFilenameSuffix?.remove(), this.headerMetadata?.remove(), this.headerCustom?.remove(), this.headerPrefix = void 0, this.headerFilenameSuffix = void 0, this.headerMetadata = void 0, this.headerCustom = void 0;
  }
  upsertHeaderSlotElement(e, t, n, r) {
    if (null == r) return void t?.remove();
    let i = t ?? this.createHeaderSlotElement(n);
    return null == t && e.appendChild(i), this.replaceHeaderSlotContent(i, r), i;
  }
  replaceHeaderSlotContent(e, t) {
    e.replaceChildren(), t instanceof Element ? e.appendChild(t) : e.innerText = `${t}`;
  }
  createHeaderSlotElement(e) {
    let t = document.createElement("div");
    return t.slot = e, t;
  }
  getOrCreateFileContainerNode(e, t) {
    let {
        fileContainer: n
      } = this,
      r = e ?? n ?? document.createElement("diffs-container"),
      i = n !== r;
    return null != n && i && this.editor?.__captureFocusForDOMReplacement(), i && this.emitPostRender(!0), this.fileContainer = r, null != n && i && (this.lastRenderedHeaderHTML = void 0, this.headerElement = void 0), null != t && this.fileContainer.parentNode !== t && t.appendChild(this.fileContainer), i && this.adoptReusableShellElements(this.fileContainer), this.ensureSpriteSVG(this.fileContainer), this.fileContainer;
  }
  adoptReusableShellElements(e) {
    let {
      shadowRoot: t
    } = e;
    if (null != t) for (let e of t.children) e instanceof SVGElement ? this.spriteSVG ??= e : P(e) && e.hasAttribute("data-theme-css") ? (this.themeCSSStyle ??= e, this.hasAdoptedThemeCSS = !0) : P(e) && e.hasAttribute("data-unsafe-css") && (this.unsafeCSSStyle ??= e, this.appliedUnsafeCSS ??= this.options.unsafeCSS ?? void 0);
  }
  ensureSpriteSVG(e) {
    let t = e.shadowRoot ?? e.attachShadow({
      mode: "open"
    });
    if (null == this.spriteSVG) {
      let e = document.createElement("div");
      e.innerHTML = ov;
      let t = e.firstChild;
      t instanceof SVGElement && (this.spriteSVG = t);
    }
    null != this.spriteSVG && this.spriteSVG.parentNode !== t && t.appendChild(this.spriteSVG);
  }
  getOrCreatePreNode(e) {
    let t = e.shadowRoot ?? e.attachShadow({
      mode: "open"
    });
    return null == this.pre ? (this.pre = document.createElement("pre"), this.appliedPreAttributes = void 0, this.code = void 0, t.appendChild(this.pre)) : this.pre.parentNode !== t && (this.editor?.__captureFocusForDOMReplacement(), e.shadowRoot?.appendChild(this.pre), this.appliedPreAttributes = void 0), this.placeHolder?.remove(), this.placeHolder = void 0, this.pre;
  }
  syncCodeNodeFromPre(e) {
    for (let t of (this.code = void 0, Array.from(e.children))) if (t instanceof HTMLElement && t.hasAttribute("data-code")) {
      this.code = t;
      return;
    }
  }
  applyPreNodeAttributes(e, {
    totalLines: t
  }) {
    var n;
    let {
        overflow: r = "scroll",
        disableLineNumbers: i = !1
      } = this.options,
      a = {
        type: "file",
        split: !1,
        overflow: r,
        disableLineNumbers: i,
        diffIndicators: "none",
        disableBackground: !0,
        totalLines: t
      };
    n = this.appliedPreAttributes, (null == a || null == n ? a !== n : !function (e = ow, t = ow) {
      if (e === t) return !0;
      let n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (let r of n) if (e[r] !== t[r]) return !1;
      return !0;
    }(a.customProperties, n.customProperties) || a.type !== n.type || a.diffIndicators !== n.diffIndicators || a.disableBackground !== n.disableBackground || a.disableLineNumbers !== n.disableLineNumbers || a.overflow !== n.overflow || a.split !== n.split || a.totalLines !== n.totalLines) && (!function (e, {
      type: t,
      diffIndicators: n,
      disableBackground: r,
      disableLineNumbers: i,
      overflow: a,
      split: o,
      totalLines: s,
      customProperties: l
    }) {
      if (null != l) for (let t in l) {
        let n = l[t];
        null != n && e.setAttribute(t, `${n}`);
      }
      switch ("diff" === t ? (e.setAttribute("data-diff", ""), e.removeAttribute("data-file")) : (e.setAttribute("data-file", ""), e.removeAttribute("data-diff")), n) {
        case "bars":
        case "classic":
          e.setAttribute("data-indicators", n);
          break;
        case "none":
          e.removeAttribute("data-indicators");
      }
      i ? e.setAttribute("data-disable-line-numbers", "") : e.removeAttribute("data-disable-line-numbers"), r ? e.removeAttribute("data-background") : e.setAttribute("data-background", ""), "diff" === t ? e.setAttribute("data-diff-type", o ? "split" : "single") : e.removeAttribute("data-diff-type"), e.setAttribute("data-overflow", a), e.style.setProperty("--diffs-min-number-column-width-default", `${`${s}`.length}ch`);
    }(e, a), this.appliedPreAttributes = a);
  }
  applyErrorToDOM(e, t) {
    this.cleanupErrorWrapper(), this.pre?.remove(), this.pre = void 0, this.appliedPreAttributes = void 0;
    let n = t.shadowRoot ?? t.attachShadow({
      mode: "open"
    });
    this.errorWrapper ??= document.createElement("div"), this.errorWrapper.dataset.errorWrapper = "", this.errorWrapper.textContent = "", n.appendChild(this.errorWrapper);
    let r = document.createElement("div");
    r.dataset.errorMessage = "", r.innerText = e.message, this.errorWrapper.appendChild(r);
    let i = document.createElement("pre");
    i.dataset.errorStack = "", i.innerText = e.stack ?? "No Error Stack", this.errorWrapper.appendChild(i);
  }
  cleanupErrorWrapper() {
    this.errorWrapper?.remove(), this.errorWrapper = void 0;
  }
};
function oT(e, t) {
  var n, r;
  let i = (n = e, r = t, n.paddingTop ?? (r ? n.spacing : 0));
  return t ? i : e.diffHeaderHeight + i;
}
function oR(e) {
  return e.paddingBottom ?? e.spacing;
}
let oM = -1;
var oN = class extends o_ {
    virtualizer;
    metrics;
    __id = `virtualized-file:${++oM}`;
    top;
    height = 0;
    cache = {
      heights: new Map(),
      checkpoints: [],
      fileAnnotationHeight: 0
    };
    isVisible = !1;
    isSetup = !1;
    layoutDirty = !0;
    forceRenderOverride;
    currentCollapsed;
    constructor(e, t, n = S, r, i = !1) {
      super(e, r, i), this.virtualizer = t, this.metrics = n;
    }
    setMetrics(e, t = !1) {
      let n = {
        ...S,
        ...e
      };
      !t && T(this.metrics, n) || (this.metrics = n, this.resetLayoutCache());
    }
    setLineAnnotations(e) {
      this.syncLineAnnotations(e) && this.resetLayoutCache();
    }
    syncLineAnnotations(e) {
      return null != e && e !== this.lineAnnotations && (0 !== e.length || 0 !== this.lineAnnotations.length) && (super.setLineAnnotations(e), !0);
    }
    hasLineAnnotations() {
      return this.lineAnnotations.some(e => e.lineNumber > 0);
    }
    getLineHeight(e, t = !1) {
      let n = this.cache.heights.get(e);
      return null != n ? n : this.metrics.lineHeight * (t ? 2 : 1);
    }
    setOptions(e) {
      if (this.isAdvancedMode()) throw Error("VirtualizedFile.setOptions cannot be used inside CodeView. Update CodeView options instead.");
      if (null == e) return;
      let {
          options: t
        } = this,
        n = !M(t, e),
        r = (t.overflow ?? "scroll") !== (e.overflow ?? "scroll") || (t.collapsed ?? !1) !== (e.collapsed ?? !1) || (t.disableLineNumbers ?? !1) !== (e.disableLineNumbers ?? !1) || (t.disableFileHeader ?? !1) !== (e.disableFileHeader ?? !1) || t.unsafeCSS !== e.unsafeCSS;
      super.setOptions(e), r && this.resetLayoutCache(!0), n && (this.forceRenderOverride = !0), n && this.virtualizer.instanceChanged(this, r);
    }
    setThemeType(e) {
      if (this.isAdvancedMode()) throw Error("VirtualizedFile.setThemeType cannot be used inside CodeView. Update CodeView options instead.");
      super.setThemeType(e);
    }
    resetLayoutCache(e = !1, t = !0) {
      this.layoutDirty = !0, this.cache.fileAnnotationHeight = 0, this.cache.heights.size > 0 && this.cache.heights.clear(), this.cache.checkpoints.length > 0 && (this.cache.checkpoints.length = 0), null != this.renderRange && t && (this.renderRange = void 0), e && this.isSimpleMode() && this.computeApproximateSize();
    }
    reconcileHeights() {
      let e = !1;
      if (null == this.fileContainer || null == this.file) return 0 !== this.height && (e = !0), this.height = 0, e;
      let {
        overflow: t = "scroll"
      } = this.options;
      if (this.top = this.getVirtualizedTop(), "scroll" === t && 0 === this.lineAnnotations.length && !this.isResizeDebuggingEnabled() || null == this.code) return e;
      let n = this.code.children[1];
      if (!(n instanceof HTMLElement)) return e;
      let r = tE(this.lineAnnotations);
      if (null != this.renderRange && r && tL(this.renderRange)) {
        let t = function (e) {
          let t;
          for (let n of e.children) n instanceof HTMLElement && "-1,-1" === n.dataset.lineAnnotation && (t = Math.max(t ?? 0, n.getBoundingClientRect().height));
          return t;
        }(n) ?? 0;
        t !== this.cache.fileAnnotationHeight && (this.cache.fileAnnotationHeight = t, e = !0);
      } else r || 0 === this.cache.fileAnnotationHeight || (this.cache.fileAnnotationHeight = 0, e = !0);
      for (let t of n.children) {
        if (!(t instanceof HTMLElement)) continue;
        let n = t.dataset.lineIndex;
        if (null == n) continue;
        let r = Number(n),
          i = t.getBoundingClientRect().height,
          a = !1;
        t.nextElementSibling instanceof HTMLElement && ("lineAnnotation" in t.nextElementSibling.dataset || "noNewline" in t.nextElementSibling.dataset) && ("noNewline" in t.nextElementSibling.dataset && (a = !0), i += t.nextElementSibling.getBoundingClientRect().height), i !== this.getLineHeight(r, a) && (e = !0, i === this.metrics.lineHeight * (a ? 2 : 1) ? this.cache.heights.delete(r) : this.cache.heights.set(r, i));
      }
      return (e || this.isResizeDebuggingEnabled()) && this.computeApproximateSize(!0), e;
    }
    onRender = e => null != this.fileContainer && null != this.file && (e && (this.top = this.getVirtualizedTop()), this.render({
      file: this.file
    }));
    prepareCodeViewItem(e, t, n, r) {
      let i = this.syncLineAnnotations(r),
        a = !I(this.file, e) || this.fileRenderer.hasUnkeyedFileContentsChanged(e),
        o = n?.resetFileLayoutCache === !0 || a || i;
      n?.metrics != null && (this.metrics = n.metrics, o = !0);
      let {
        collapsed: s = !1
      } = this.options;
      return this.currentCollapsed !== s && (this.currentCollapsed = s, o = !0), o && this.resetLayoutCache(), this.file !== e && (this.layoutDirty = !0), this.file = e, this.top = t, this.computeApproximateSize(), this.height;
    }
    getLinePosition(e) {
      if (null == this.file || e < 1) return;
      let {
          disableFileHeader: t = !1,
          collapsed: n = !1
        } = this.options,
        r = this.fileRenderer.getLineCount(this.file) - 1,
        i = oT(this.metrics, t);
      if (n || r < 0) return {
        top: i,
        height: 0
      };
      let a = Math.min(Math.max(e - 1, 0), r),
        {
          overflow: o = "scroll"
        } = this.options,
        {
          lineHeight: s
        } = this.metrics;
      if (i += this.cache.fileAnnotationHeight, "scroll" === o && !this.hasLineAnnotations()) return {
        top: i + a * s,
        height: s
      };
      let l = this.getLayoutCheckpointBeforeLineIndex(a);
      i = l?.top ?? i;
      for (let e = l?.lineIndex ?? 0; e < a; e++) i += this.getLineHeight(e, !1);
      return {
        top: i,
        height: this.getLineHeight(a, !1)
      };
    }
    getEditorViewport() {
      return "simple" === this.virtualizer.type ? this.virtualizer.getRoot() : this.virtualizer.getContainerElement();
    }
    getNumericScrollAnchor(e) {
      if (null == this.file || null == this.renderRange) return;
      let {
        disableFileHeader: t = !1,
        collapsed: n = !1,
        overflow: r = "scroll"
      } = this.options;
      if (n || this.renderRange.totalLines <= 0) return;
      let i = this.fileRenderer.getLineCount(this.file) - 1;
      if (i < 0) return;
      let a = oT(this.metrics, t),
        o = Math.min(this.renderRange.startingLine, i),
        s = Math.min(o + this.renderRange.totalLines - 1, i);
      if (s < o) return;
      let {
        fileAnnotationHeight: l
      } = this.cache;
      if ("scroll" === r && !this.hasLineAnnotations()) {
        let {
            lineHeight: t
          } = this.metrics,
          n = a + (0 === o ? l : this.renderRange.bufferBefore),
          r = o + Math.max(Math.ceil((e - n) / t), 0);
        if (r > s) return;
        return {
          lineNumber: r + 1,
          top: a + l + r * t
        };
      }
      let d = a + (0 === o ? l : this.renderRange.bufferBefore);
      for (let t = o; t <= s; t++) {
        if (d >= e) return {
          lineNumber: t + 1,
          top: d
        };
        d += this.getLineHeight(t);
      }
    }
    getVirtualizedHeight() {
      return this.height;
    }
    getAdvancedStickySpecs(e) {
      if (null == this.top || null == this.file) return;
      if (!0 === this.options.collapsed) return {
        topOffset: this.top,
        height: this.height
      };
      let t = null != e ? this.computeRenderRangeFromWindow(this.file, this.top, e) : this.renderRange;
      if (null == t) return;
      let {
          bufferBefore: n,
          bufferAfter: r,
          totalLines: i
        } = t,
        a = 0;
      if (0 === i) {
        let t = e ?? this.virtualizer.getWindowSpecs();
        this.top < t.top && (a = r);
      }
      return {
        topOffset: this.top + n + a,
        height: this.height - (n + r)
      };
    }
    cleanUp(e = !1) {
      null != this.fileContainer && this.isSimpleMode() && this.getSimpleVirtualizer()?.disconnect(this.fileContainer), e || this.resetLayoutCache(), this.isSetup = !1, super.cleanUp(e);
    }
    computeApproximateSize(e = !1, t = this.file) {
      let n = this.isResizeDebuggingEnabled();
      if (!e && !this.layoutDirty && !n) return;
      let r = 0 === this.height;
      if (this.height = 0, this.cache.checkpoints = [], null == t) {
        this.layoutDirty = !1;
        return;
      }
      let {
          disableFileHeader: i = !1,
          collapsed: a = !1,
          overflow: o = "scroll"
        } = this.options,
        {
          lineHeight: s
        } = this.metrics,
        l = this.fileRenderer.getLineCount(t),
        d = oT(this.metrics, i),
        u = oR(this.metrics);
      if (this.height += d, a) {
        this.layoutDirty = !1;
        return;
      }
      if (this.height += this.cache.fileAnnotationHeight, "scroll" !== o || this.hasLineAnnotations()) for (let e = 0; e < l; e++) this.addLayoutCheckpoint(e, this.height), this.height += this.getLineHeight(e, !1);else this.height += l * s;
      if (l > 0 && (this.height += u), null != this.fileContainer && n && !r) {
        let e = this.fileContainer.getBoundingClientRect();
        e.height !== this.height ? console.log("VirtualizedFile.computeApproximateSize: computed height doesnt match", {
          name: t.name,
          elementHeight: e.height,
          computedHeight: this.height
        }) : console.log("VirtualizedFile.computeApproximateSize: computed height IS CORRECT");
      }
      this.layoutDirty = !1;
    }
    setVisibility(e) {
      this.isAdvancedMode() || null == this.fileContainer || (this.renderRange = void 0, e && !this.isVisible ? (this.top = this.getVirtualizedTop(), this.isVisible = !0) : !e && this.isVisible && (this.isVisible = !1, this.rerender()));
    }
    rerender() {
      this.enabled && null != this.file && (this.forceRenderOverride = !0, this.virtualizer.instanceChanged(this, !1));
    }
    applyDocumentChange(e, t, n = !1) {
      let {
        renderRange: r
      } = this;
      if (this.getAdvancedVirtualizer()?.capturePendingLayoutAnchor(), super.applyDocumentChange(e, t), this.getSimpleVirtualizer()?.markDOMDirty(), this.resetLayoutCache(this.isSimpleMode(), !1), this.isSimpleMode()) {
        if (n && void 0 !== r && void 0 !== this.file) {
          let e = this.virtualizer.getWindowSpecs(),
            t = this.computeRenderRangeFromWindow(this.file, this.top ?? 0, e);
          t.bufferAfter !== r.bufferAfter && this.updateBuffers(t);
        }
      } else this.computeApproximateSize(!0);
      this.forceRenderOverride = !0, this.virtualizer.instanceChanged(this, !0);
    }
    renderPreparedFile({
      fileContainer: e,
      file: t,
      forceRender: n = !1,
      lineAnnotations: r,
      ...i
    }) {
      let a = null == this.file || !I(this.file, t) || this.fileRenderer.hasUnkeyedFileContentsChanged(t),
        {
          forceRenderOverride: o,
          isSetup: s
        } = this;
      this.forceRenderOverride = void 0;
      let l = this.syncLineAnnotations(r);
      if (l && this.resetLayoutCache(), e = this.getOrCreateFileContainerNode(e), null == t) return console.error("VirtualizedFile.render: attempting to virtually render when we dont have file"), !1;
      if (s) this.top ??= this.getVirtualizedTop(), a && this.isSimpleMode() && (this.getSimpleVirtualizer()?.markDOMDirty(), this.resetLayoutCache(!1), this.computeApproximateSize(!1, t));else {
        this.computeApproximateSize(!1, t);
        let n = this.getSimpleVirtualizer();
        if (this.top ??= this.getVirtualizedTop(), this.isAdvancedMode()) this.isVisible = !0;else {
          if (null == n) throw Error("VirtualizedFile.render: simple virtualizer is not available");
          n.connect(e, this), this.isVisible = n.isInstanceVisible(this.top ?? 0, this.height);
        }
        this.isSetup = !0;
      }
      if (!this.isVisible && this.isSimpleMode() && (!a || !s)) return this.file = t, a && (this.cachedHeaderHTML = void 0), this.renderPlaceholder(this.height);
      let d = this.virtualizer.getWindowSpecs(),
        u = this.top ?? 0,
        h = this.computeRenderRangeFromWindow(t, u, d),
        c = super.renderPreparedFile({
          file: t,
          fileContainer: e,
          renderRange: h,
          lineAnnotations: r,
          forceRender: (o ?? n) || l || a,
          ...i
        });
      return this.isSimpleMode() && c && this.getSimpleVirtualizer()?.requestHeightReconcile(this), c;
    }
    syncVirtualizedTop() {
      this.top = this.getVirtualizedTop();
    }
    shouldDisableVirtualizationBuffers() {
      return this.isAdvancedMode() || super.shouldDisableVirtualizationBuffers();
    }
    shouldGuardRebuildScroll() {
      return !1;
    }
    isSimpleMode() {
      return "simple" === this.virtualizer.type;
    }
    isAdvancedMode() {
      return "advanced" === this.virtualizer.type;
    }
    addLayoutCheckpoint(e, t) {
      e % 5e3 == 0 && this.cache.checkpoints.push({
        lineIndex: e,
        top: t
      });
    }
    getLayoutCheckpointBeforeLineIndex(e) {
      let t;
      if (e <= 0 || 0 === this.cache.checkpoints.length) return;
      let n = 0,
        r = this.cache.checkpoints.length - 1;
      for (; n <= r;) {
        let i = n + r >> 1,
          a = this.cache.checkpoints[i];
        if (null == a) throw Error("VirtualizedFile: invalid checkpoint index");
        a.lineIndex <= e ? (t = a, n = i + 1) : r = i - 1;
      }
      return t;
    }
    getLayoutCheckpointBeforeTop(e, t) {
      let n = 0,
        r = this.cache.checkpoints.length - 1,
        i = -1;
      for (; n <= r;) {
        let t = n + r >> 1,
          a = this.cache.checkpoints[t];
        if (null == a) throw Error("VirtualizedFile: invalid checkpoint index");
        a.top <= e ? (i = t, n = t + 1) : r = t - 1;
      }
      if (null == t) return i >= 0 ? this.cache.checkpoints[i] : void 0;
      for (let e = i; e >= 0; e--) {
        let n = this.cache.checkpoints[e];
        if (null == n) throw Error("VirtualizedFile: invalid checkpoint index");
        if (n.lineIndex % t == 0) return n;
      }
    }
    getVirtualizedTop() {
      return "advanced" === this.virtualizer.type ? this.virtualizer.getLocalTopForInstance(this) : null != this.fileContainer ? this.virtualizer.getOffsetInScrollContainer(this.fileContainer) : 0;
    }
    getSimpleVirtualizer() {
      return "simple" === this.virtualizer.type ? this.virtualizer : void 0;
    }
    getAdvancedVirtualizer() {
      return "advanced" === this.virtualizer.type ? this.virtualizer : void 0;
    }
    isResizeDebuggingEnabled() {
      return this.getSimpleVirtualizer()?.config.resizeDebugging ?? !1;
    }
    computeRenderRangeFromWindow(e, t, {
      top: n,
      bottom: r
    }) {
      let i,
        a,
        o,
        {
          disableFileHeader: s = !1,
          overflow: l = "scroll"
        } = this.options,
        {
          hunkLineCount: d,
          lineHeight: u
        } = this.metrics,
        h = this.fileRenderer.getLineCount(e),
        c = this.height,
        f = oT(this.metrics, s),
        p = h > 0 ? oR(this.metrics) : 0,
        {
          fileAnnotationHeight: g
        } = this.cache,
        m = f + g,
        b = Math.max(0, c - f - g - p),
        y = tE(this.lineAnnotations),
        v = t + f,
        w = g > 0 && y && v < r && v + g > n;
      if (t < n - c || t > r) return {
        startingLine: 0,
        totalLines: 0,
        bufferBefore: 0,
        bufferAfter: c - f - p
      };
      if (h <= d) return {
        startingLine: 0,
        totalLines: d,
        bufferBefore: 0,
        bufferAfter: 0
      };
      let k = Math.ceil(Math.ceil(Math.max(r - n, 0) / u) / d) * d + d,
        S = k / d,
        C = (n + r) / 2;
      if ("scroll" === l && !this.hasLineAnnotations()) {
        let e = t + m;
        if (!w && !(e < r && e + b > n)) return {
          startingLine: 0,
          totalLines: 0,
          bufferBefore: 0,
          bufferAfter: c - f - p
        };
        let i = Math.floor(Math.floor(w && C < t + m ? 0 : (C - (t + m)) / u) / d) - Math.floor(S / 2),
          a = Math.max(0, Math.min(i, Math.ceil(h / d))) * d,
          o = i < 0 ? k + i * d : k,
          s = Math.min(o, h - a);
        return {
          startingLine: a,
          totalLines: o,
          bufferBefore: 0 === a ? 0 : g + a * u,
          bufferAfter: Math.max(0, (h - a - s) * u)
        };
      }
      let x = [],
        A = this.getLayoutCheckpointBeforeTop(Math.max(0, n - t - k * u * 2), d),
        E = t + (A?.top ?? m),
        L = A?.lineIndex ?? 0,
        _ = A?.lineIndex ?? 0;
      for (let e = _; e < h; e++) {
        let s = L % d == 0,
          l = Math.floor(L / d);
        if (s && (x[l] = E - (t + m), null != o)) {
          if (o <= 0) break;
          o--;
        }
        let u = this.getLineHeight(e, !1);
        E > n - u && E < r && (i ??= l), E + u > C && (a ??= l), null == o && E >= r && s && (o = S), L++, E += u;
      }
      if (null == i) if (!w) return {
        startingLine: 0,
        totalLines: 0,
        bufferBefore: 0,
        bufferAfter: c - f - p
      };else i = 0, a = 0;
      let T = Math.round((a ??= i) - S / 2),
        R = Math.max(0, Math.min(T, Math.max(0, Math.ceil(h / d) - S))),
        M = R * d,
        N = T < 0 ? k + T * d : k,
        P = x[R] ?? 0,
        I = R + N / d;
      return {
        startingLine: M,
        totalLines: N,
        bufferBefore: 0 === M ? 0 : g + P,
        bufferAfter: Math.max(0, I < x.length ? b - x[I] : b - (E - t - m))
      };
    }
  },
  oP = _module45032;
let oI = (0, oP.createContext)(void 0);
let oK = (0, oP.createContext)(void 0);
let o2 = (0, oP.createContext)(void 0),
  o8 = "u" < typeof window ? oP.useEffect : oP.useLayoutEffect;
function o5({
  options: e,
  controlledSelection: t,
  hasCustomHeader: n,
  hasGutterRenderUtility: r
}) {
  return t || r || n ? {
    ...e,
    controlledSelection: t,
    renderCustomHeader: n ? L : e?.renderCustomHeader,
    renderGutterUtility: r ? L : e?.renderGutterUtility
  } : e;
}
const _export_File = function ({
  file: e,
  lineAnnotations: t,
  selectedLines: n,
  options: r,
  editorOptions: i,
  metrics: a,
  className: o,
  style: s,
  renderAnnotation: l,
  renderCustomHeader: d,
  renderHeaderPrefix: u,
  renderHeaderFilenameSuffix: h,
  renderHeaderMetadata: c,
  prerenderedHTML: f,
  renderGutterUtility: p,
  disableWorkerPool: m = !1,
  edit: b = !1
}) {
  var y;
  let {
    ref: w,
    getHoveredLine: k
  } = function ({
    file: e,
    options: t,
    editorOptions: n,
    lineAnnotations: r,
    selectedLines: i,
    prerenderedHTML: a,
    metrics: o,
    hasGutterRenderUtility: s,
    hasCustomHeader: l,
    disableWorkerPool: d,
    edit: u
  }) {
    var h;
    let c,
      f = (0, oP.useContext)(o2),
      p = void 0 !== i,
      g = (0, oP.useContext)(oK),
      m = (0, oP.useContext)(oI),
      b = (0, oP.useRef)(null),
      y = (h = n => {
        if (null != n) {
          if (null != b.current) throw Error("File: An instance should not already exist when a node is created");
          null != f ? b.current = new oN(o5({
            controlledSelection: p,
            hasCustomHeader: l,
            hasGutterRenderUtility: s,
            options: t
          }), f, o, !d ? g : void 0, !0) : b.current = new o_(o5({
            controlledSelection: p,
            hasCustomHeader: l,
            hasGutterRenderUtility: s,
            options: t
          }), !d ? g : void 0, !0), b.current.hydrate({
            file: e,
            fileContainer: n,
            lineAnnotations: r,
            prerenderedHTML: a
          });
        } else {
          if (null == b.current) throw Error("File: A File instance should exist when unmounting");
          b.current.cleanUp(), b.current = null;
        }
      }, c = (0, oP.useRef)(h), (0, oP.useInsertionEffect)(() => void (c.current = h)), (0, oP.useCallback)((...e) => c.current(...e), []));
    return o8(() => {
      if (null == b.current) return;
      let n = o5({
          controlledSelection: p,
          hasCustomHeader: l,
          hasGutterRenderUtility: s,
          options: t
        }),
        a = void 0 !== n && !M(b.current.options, n);
      b.current.setOptions(n), b.current.render({
        file: e,
        lineAnnotations: r,
        forceRender: a
      }), void 0 !== i && b.current.setSelectedLines(i);
    }), o8(() => {
      if (u && null != b.current) {
        if (void 0 === m) throw Error("File: EditContext is not attached");
        let e = m(n ?? {});
        if (null == e) throw Error("File: EditProvider.createEditor must return an editor instance");
        try {
          return e.edit(b.current);
        } catch (t) {
          throw e.cleanUp(), t;
        }
      }
    }, [u]), {
      ref: y,
      getHoveredLine: (0, oP.useCallback)(() => b.current?.getHoveredLine(), [])
    };
  }({
    file: e,
    options: r,
    editorOptions: i,
    metrics: a,
    lineAnnotations: t,
    selectedLines: n,
    prerenderedHTML: f,
    hasGutterRenderUtility: null != p,
    hasCustomHeader: null != d,
    disableWorkerPool: m,
    edit: b
  });
  return (0, _.jsx)(g, {
    ref: w,
    className: o,
    style: s,
    children: (y = function ({
      file: e,
      renderCustomHeader: t,
      renderHeaderPrefix: n,
      renderHeaderFilenameSuffix: r,
      renderHeaderMetadata: i,
      renderAnnotation: a,
      lineAnnotations: o,
      renderGutterUtility: s,
      getHoveredLine: l
    }) {
      let d = t?.(e),
        u = n?.(e),
        h = r?.(e),
        c = i?.(e);
      return (0, _.jsxs)(_.Fragment, {
        children: [null != d ? <div slot={v}>{d}</div> : (0, _.jsxs)(_.Fragment, {
          children: [null != u && <div slot={"header-prefix"}>{u}</div>, null != h && <div slot={"header-filename-suffix"}>{h}</div>, null != c && <div slot={"header-metadata"}>{c}</div>]
        }), null != a && o?.map((e, t) => <div slot={A(e)} key={t}>{a(e)}</div>), null != s && <div slot={"gutter-utility-slot"} style={E}>{s(l)}</div>]
      });
    }({
      file: e,
      renderAnnotation: l,
      renderCustomHeader: d,
      renderHeaderPrefix: u,
      renderHeaderFilenameSuffix: h,
      renderHeaderMetadata: c,
      renderGutterUtility: p,
      lineAnnotations: t,
      getHoveredLine: k
    }), "u" < typeof window && null != f ? (0, _.jsxs)(_.Fragment, {
      children: [<template shadowrootmode={"open"} dangerouslySetInnerHTML={{
        __html: f
      }} />, y]
    }) : (0, _.jsx)(_.Fragment, {
      children: y
    }))
  });
};
export { _export_File as File };

// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
function e(t) {
  return Array.from({
    length: t * t
  }, () => !1);
}
function s(t, s) {
  let a = e(t),
    i = t * t;
  for (let t of s) t >= 0 && t < i && (a[t] = !0);
  return a;
}
function a(t) {
  let e = [];
  for (let s = 0; s < t.length; s++) t[s] && e.push(s);
  return e;
}
function i(t) {
  let e = [];
  for (let s = 0; s < t; s++) e.push(s);
  for (let s = 1; s < t; s++) e.push(s * t + (t - 1));
  for (let s = t - 2; s >= 0; s--) e.push((t - 1) * t + s);
  for (let s = t - 2; s >= 1; s--) e.push(s * t);
  let a = Math.max(1, Math.round(e.length / 3));
  return e.map((i, n) => {
    let l = [];
    for (let t = 0; t < a; t++) l.push(e[(n + t) % e.length]);
    return s(t, l);
  });
}
function n(t) {
  let e = [],
    a = (t - 1) * 2;
  for (let i = 0; i <= a; i++) {
    let a = [];
    for (let e = 0; e < t; e++) {
      let s = i - e;
      s >= 0 && s < t && a.push(e * t + s);
    }
    e.push(s(t, a));
  }
  return e;
}
function l(t) {
  let e = (t - 1) / 2,
    a = Math.ceil(t / 2),
    i = [];
  for (let n = 0; n <= a; n++) {
    let a = [];
    for (let s = 0; s < t; s++) for (let i = 0; i < t; i++) Math.max(Math.abs(s - e), Math.abs(i - e)) <= n && a.push(s * t + i);
    i.push(s(t, a));
  }
  for (let n = a - 1; n >= 0; n--) {
    let a = [];
    for (let s = 0; s < t; s++) for (let i = 0; i < t; i++) Math.max(Math.abs(s - e), Math.abs(i - e)) <= n && a.push(s * t + i);
    i.push(s(t, a));
  }
  return i;
}
let r = 0;
function c() {
  return r += 1, `frame-${r}`;
}
const _export_DEFAULT_ACTIVE_COLOR = "#1a1a1c";
const _export_DEFAULT_FRAME_DURATION = 120;
const _export_DEFAULT_INACTIVE_COLOR = "#e8e8ea";
const _export_DEFAULT_LOADER_SIZE = 3;
const _export_DEFAULT_TRANSITION_DURATION = 90;
const _export_LOADER_COLOR_PRESETS = [{
  id: "ink",
  label: "Ink",
  active: "#1a1a1c",
  inactive: "#e8e8ea"
}, {
  id: "blue",
  label: "Blue",
  active: "#3b5bdb",
  inactive: "#dbe4ff"
}, {
  id: "teal",
  label: "Teal",
  active: "#0c8a7a",
  inactive: "#c3fae8"
}, {
  id: "amber",
  label: "Amber",
  active: "#e67700",
  inactive: "#fff3bf"
}, {
  id: "rose",
  label: "Rose",
  active: "#c2255c",
  inactive: "#ffdeeb"
}];
const _export_LOADER_GRID_SIZES = [3, 4, 5, 6];
const _export_LOADER_PRESETS = [{
  id: "spinner",
  label: "Spinner"
}, {
  id: "sweep",
  label: "Sweep"
}, {
  id: "pulse",
  label: "Pulse"
}];
const _export_LOADER_TRANSITIONS = [{
  id: "none",
  label: "Hard step",
  hint: "Instant cut between frames"
}, {
  id: "fade",
  label: "Fade",
  hint: "Opacity crossfade on cells that change"
}, {
  id: "color",
  label: "Color fade",
  hint: "Blend active ↔ inactive colors"
}];
const _export_buildDotLoaderConfig = function (t) {
  return {
    size: t.size,
    frames: t.frames.map(a),
    frameDuration: t.frameDuration,
    transition: t.transition,
    transitionDuration: t.transitionDuration,
    colors: {
      active: t.activeColor,
      inactive: t.inactiveColor
    }
  };
};
const _export_createFrameId = c;
const _export_createFrameIds = function (t) {
  return Array.from({
    length: t
  }, () => c());
};
const _export_createPulseFrames = l;
const _export_createSpinnerFrames = i;
const _export_createSweepFrames = n;
const _export_emptyFrame = e;
const _export_framesForPreset = function (t, e) {
  switch (t) {
    case "spinner":
      return i(e);
    case "sweep":
      return n(e);
    case "pulse":
      return l(e);
    default:
      return t;
  }
};
const _export_indicesFromFrame = a;
const _export_normalizeHex = function (t) {
  let e = t.trim().match(/^#?([0-9a-fA-F]{6})$/);
  return e ? `#${e[1].toLowerCase()}` : null;
};
const _export_resizeFrame = function (t, s) {
  let a = e(s),
    i = Math.round(Math.sqrt(t.length));
  if (!Number.isFinite(i) || i < 1) return a;
  let n = Math.min(i, s);
  for (let e = 0; e < n; e++) for (let l = 0; l < n; l++) a[e * s + l] = !!t[e * i + l];
  return a;
};
export { _export_DEFAULT_ACTIVE_COLOR as DEFAULT_ACTIVE_COLOR, _export_DEFAULT_FRAME_DURATION as DEFAULT_FRAME_DURATION, _export_DEFAULT_INACTIVE_COLOR as DEFAULT_INACTIVE_COLOR, _export_DEFAULT_LOADER_SIZE as DEFAULT_LOADER_SIZE, _export_DEFAULT_TRANSITION_DURATION as DEFAULT_TRANSITION_DURATION, _export_LOADER_COLOR_PRESETS as LOADER_COLOR_PRESETS, _export_LOADER_GRID_SIZES as LOADER_GRID_SIZES, _export_LOADER_PRESETS as LOADER_PRESETS, _export_LOADER_TRANSITIONS as LOADER_TRANSITIONS, _export_buildDotLoaderConfig as buildDotLoaderConfig, _export_createFrameId as createFrameId, _export_createFrameIds as createFrameIds, _export_createPulseFrames as createPulseFrames, _export_createSpinnerFrames as createSpinnerFrames, _export_createSweepFrames as createSweepFrames, _export_emptyFrame as emptyFrame, _export_framesForPreset as framesForPreset, _export_indicesFromFrame as indicesFromFrame, _export_normalizeHex as normalizeHex, _export_resizeFrame as resizeFrame };

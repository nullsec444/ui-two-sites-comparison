// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module80269 from "./80269.js";
import * as _module34561 from "./34561.js";
import * as _module86631 from "./86631.js";
var t = _module80269,
  n = _module34561;
let r = "data-base-ui-focusable",
  i = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
var o = _module86631;
function l(e) {
  return (0, t.isHTMLElement)(e) && e.matches(i);
}
const _export_getFloatingFocusElement = function (e) {
  return e ? e.hasAttribute(r) ? e : e.querySelector(`[${r}]`) || e : null;
};
const _export_isEventTargetWithin = function (e, t) {
  return null != t && ("composedPath" in e ? e.composedPath().includes(t) : null != e.target && t.contains(e.target));
};
const _export_isInteractiveElement = function (e) {
  return e?.closest(`button,a[href],[role="button"],select,[tabindex]:not([tabindex="-1"]),${i}`) != null;
};
const _export_isRootElement = function (e) {
  return e.matches("html,body");
};
const _export_isTargetInsideEnabledTrigger = function (e, n) {
  if (!(0, t.isElement)(e)) return !1;
  if (n.hasElement(e)) return !e.hasAttribute("data-trigger-disabled");
  for (let [, t] of n.entries()) if ((0, o.contains)(t, e)) return !t.hasAttribute("data-trigger-disabled");
  return !1;
};
const _export_isTypeableCombobox = function (e) {
  return !!e && "combobox" === e.getAttribute("role") && l(e);
};
const _export_isTypeableElement = l;
const _export_matchesFocusVisible = function (e) {
  if (!e || n.platform.env.jsdom) return !0;
  try {
    return e.matches(":focus-visible");
  } catch (e) {
    return !0;
  }
};
export { _export_getFloatingFocusElement as getFloatingFocusElement, _export_isEventTargetWithin as isEventTargetWithin, _export_isInteractiveElement as isInteractiveElement, _export_isRootElement as isRootElement, _export_isTargetInsideEnabledTrigger as isTargetInsideEnabledTrigger, _export_isTypeableCombobox as isTypeableCombobox, _export_isTypeableElement as isTypeableElement, _export_matchesFocusVisible as matchesFocusVisible };

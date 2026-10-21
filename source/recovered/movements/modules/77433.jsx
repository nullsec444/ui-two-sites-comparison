// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
let E = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
  C = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function D(t) {
  return C.has(t.tagName) || !0 === t.isContentEditable;
}
const _export_isElementKeyboardAccessible = function (t) {
  return E.has(t.tagName) || !0 === t.isContentEditable;
};
const _export_isElementTextInput = D;
export { _export_isElementKeyboardAccessible as isElementKeyboardAccessible, _export_isElementTextInput as isElementTextInput };

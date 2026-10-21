// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
let _ = t => e => "string" == typeof e && e.startsWith(t),
  J = _("--"),
  Q = _("var(--"),
  tt = t => !!Q(t) && te.test(t.split("/*")[0].trim()),
  te = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function ti(t) {
  return "string" == typeof t && t.split("/*")[0].includes("var(--");
}
const _export_containsCSSVariable = ti;
const _export_isCSSVariableName = J;
const _export_isCSSVariableToken = tt;
export { _export_containsCSSVariable as containsCSSVariable, _export_isCSSVariableName as isCSSVariableName, _export_isCSSVariableToken as isCSSVariableToken };

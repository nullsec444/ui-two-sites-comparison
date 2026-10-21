// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
let t = function (e, ...t) {
  let r = new URL("https://base-ui.com/production-error");
  return r.searchParams.set("code", e.toString()), t.forEach(e => r.searchParams.append("args[]", e)), `Base UI error #${e}; visit ${r} for the full message.`;
};
const _export_default = t;
export { _export_default as "default" };

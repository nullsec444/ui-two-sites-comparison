// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
async function t(e) {
  if ("u" > typeof navigator && navigator.clipboard?.writeText) try {
    await navigator.clipboard.writeText(e);
    return;
  } catch {}
  let t = document.createElement("textarea");
  t.value = e, t.setAttribute("readonly", ""), t.style.position = "fixed", t.style.top = "0", t.style.left = "0", t.style.width = "1px", t.style.height = "1px", t.style.padding = "0", t.style.border = "none", t.style.outline = "none", t.style.boxShadow = "none", t.style.background = "transparent", t.style.opacity = "0", document.body.appendChild(t), t.focus(), t.select(), t.setSelectionRange(0, e.length);
  let n = document.execCommand("copy");
  if (document.body.removeChild(t), !n) throw Error("Copy failed");
}
const _export_copyText = t;
export { _export_copyText as copyText };

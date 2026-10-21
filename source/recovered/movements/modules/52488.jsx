// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module45032 from "./45032.js";
import * as _module95074 from "./95074.js";
var t = _module45032,
  n = _module95074;
const _export_ThemeSync = function () {
  let e = (0, n.useThemeStore)(e => e.dark);
  return (0, t.useEffect)(() => {
    document.documentElement.classList.toggle("dark", e), document.documentElement.style.colorScheme = e ? "dark" : "light";
  }, [e]), null;
};
export { _export_ThemeSync as ThemeSync };

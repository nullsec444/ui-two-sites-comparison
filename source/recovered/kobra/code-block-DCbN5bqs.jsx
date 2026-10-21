// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import { a as e } from "./rolldown-runtime-B0Z9INg1.js";
import { t } from "./jsx-runtime-Ciaf_P-h.js";
import { r as n } from "./code-block-8j4abSW0.js";
import { i as r } from "./playground-BFoI71NC.js";
var i = e(t(), 1),
  {
    CodeBlock: a
  } = r(`code-block`, n),
  o = `export const sum = (a: number, b: number) =>
  a + b;

export const clamp = (n: number, min: number, max: number) =>
  Math.min(Math.max(n, min), max);
`;
function s() {
  return (0, i.jsx)(a, {
    filename: `utils.ts`,
    code: o,
    className: `w-[32rem]`
  });
}
export { s as default };

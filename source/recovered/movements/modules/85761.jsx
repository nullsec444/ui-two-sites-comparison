// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module31908 from "./jsx-runtime-31908.js";
import * as _module85735 from "./85735.js";
var c = _module31908,
  h = _module85735;
let o = {
  match: "import {",
  text: "No stylesheet to import — every option is a prop."
};
const _export_PackageUsage = function ({
  pkg: t,
  code: e,
  notes: s = []
}) {
  return <div className={"flex flex-col gap-3"}>{[(0, c.jsx)(h.CodeSnippet, {
      fileName: "Terminal",
      code: `npm i ${t}`,
      language: "bash"
    }), (0, c.jsx)(h.CodeSnippet, {
      fileName: "Example.tsx",
      code: e,
      language: "tsx",
      notes: [o, ...s]
    })]}</div>;
};
export { _export_PackageUsage as PackageUsage };

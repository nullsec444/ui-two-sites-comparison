// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
const _export_mergeCleanups = function (...e) {
  return () => {
    for (let t = 0; t < e.length; t += 1) {
      let r = e[t];
      r && r();
    }
  };
};
export { _export_mergeCleanups as mergeCleanups };

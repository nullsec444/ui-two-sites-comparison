# Kobra + Movements recovery: PARTIAL / UNVERIFIED

Generated: 2026-10-21T14:45:20.045181+00:00

Live comparison: https://nullsec444.github.io/ui-two-sites-comparison/
New repository: https://github.com/nullsec444/ui-two-sites-comparison

## Acceptance result

acceptance_pass = false. The strict executable validator returns exit code 1. It has not been weakened to count rendering, DOM equality, source parsing, or animation noise as full equivalence.

All 87 canonical component routes found in the frozen homepage inventories are represented: 81 Kobra and 6 Movements. Canonical routes missing from the manifest: 0. This does NOT mean all variants or interaction states have been recovered.

Recorded replay configurations: 188. Chrome exercised both views for 188 configurations across 87 routes. Nonempty render + both toggles + identical iframe dimensions + correctly selected named example passed for 188 configurations. These are recorded configurations, not an exhaustive count of unique component states.

Raw DOM equal: 178. Exact screenshot pixel matches: 159. Visual mismatches remaining UNVERIFIED: 29. Fully verified interaction/animation equivalence: 0.

Every recorded configuration has raw DOM and PNG evidence for both modes, plus original-repeat baselines for defaults. Pixel equality is exact, without a mismatch threshold; mismatch metrics and baseline noise are reported, not waived. Fixed Math.random and Date are applied in the isolated iframe. performance.now, CSS animation clocks, canvas timing, layout, font scheduling, and async behavior are not all deterministic.

Configurations with some media not loaded at snapshot time: 1. The lightbox includes lazy/off-viewport image nodes; this snapshot does not prove their scrolling/loading behavior. Resource files are independently present and checked; absent image load at capture is not labeled a complete match.

## What the two buttons actually execute

Original demo executes extracted official public demo functions and their public dependency graph. The functions are not a screenshot, mock, or original-site mirror. The harness supplies React/React DOM 19.2.8, a scoped Vite gallery closure, and a Turbopack factory loader where needed. Runtime normalization and loader adaptation mean this is not a byte-identical replay of an entire donor application.

Inspect replay executes rebuilt recovered ESM/JSX modules. The AST reconstruction discovers JSX runtime imports and scope bindings rather than relying on a universal n/r alias. Destructured bindings and class declarations are retained in the lifted closure. Minified names remain when public bundles lack author names/types. Compiled JS is never presented as recovered author TSX.

Both buttons use one same-size iframe. Source is initially collapsed below the viewport. One searchable index links both sites. Movements named examples scope the real rendered top-level figure by its public figcaption; all figures remain part of the actual official example component, and hidden figures are not counted as interaction equivalence.

Media/font resource URLs in the local build are localized to relative paths; downloaded donor bytes are unchanged. The Vite preload helper's asset base is made repository-prefix safe. Original source copies retain original resource references. Downloaded or already-present resources: 77; blocked resource downloads after normal retries against the exact public URL: 0.

GitHub rejected the first unpublished snapshot because media/turks-and-caicos.webm exceeds its 100 MiB per-file limit (290012891 bytes). The live deployment alone uses the exact original donor URL https://kobra.systems/media/turks-and-caicos.webm instead of the local resource path. The original bytes remain cached in the local build and source archive without re-encoding. This external live resource is explicitly mapped in deployment-resources.json and checked separately; the live site is not fully offline. No published history was rewritten; the rejected unpublished staging repository is preserved locally.

## Sources and builds

Exact public registry source available for 10 Kobra routes, preserved with native TSX/TS/JS extensions under official-source/. All 10 native registry component entries separately bundle successfully. Exact source is integrated into this replay for 5 routes. The remaining exact-source routes are packaged and built separately but their replay still uses the recovered official demo implementation; this is an explicit incomplete integration, not a decompilation claim.

Registry author source blocked by HTTP 401 for 71 Kobra routes. No login/paywall/authentication bypass was attempted. Their publicly delivered demo implementations are reconstructed, not their unavailable paid author source.

Movements official npm JS/d.ts distributions are preserved under official-packages/. Their source maps do not contain sourcesContent; the private/unavailable GitHub source was not fabricated as TSX.

Parsed source files (adapters, recovered modules and exact registry files; not a component count): 526. Syntax failures: 0. Original/reconstructed builds succeeded for both sites. A standalone portable pack installed its own pinned npm dependencies and executed its full rebuild and syntax check successfully. Its four executable bundles and two CSS outputs are byte-identical to the final local build, including repository-safe asset-base handling: True. The independently executed strict validator returns 1 with the same coverage totals; acceptance remains false.

Per-component generated route adapters are in components/. Per-component dependency descriptors are in dependencies/. Kobra descriptors explicitly reference a shared demo bundle closure, NOT a minimal isolated per-component author dependency set. Native package versions are pinned and can differ from production vendor versions; no behavior equivalence is assumed.

## Explicit uncovered work

The finite control values currently exercised are one-axis-at-a-time, not full Cartesian products. Custom editors, continuous values, conditional combinations, dialogs, keyboard navigation, dragging, resizing, sound, video playback, and animation lifecycle behavior do not have exhaustive component-specific acceptance sequences.

Additional publicly discoverable finite axes not exposed/exercised in this partial replay: 3.

- kobra-alert: alertTone = ["error", "warning", "success", "info"].
- kobra-aspect-ratio: aspectRatio = ["21 / 9", "16 / 9", "3 / 2", "4 / 3", "1 / 1", "9 / 16"].
- kobra-textarea: textareaResize = ["both", "vertical", "horizontal", "none"].

Exact source available but not fully integrated into the replay:

- kobra-carousel
- kobra-command-menu
- kobra-sound
- kobra-toast
- kobra-video

Every uncovered control is retained under finite_axes, uncovered_finite_axes or custom_or_unresolved_controls in its manifest entry. Every component retains extraction/build/verification status and blockers. No canonical route is silently omitted.

## Visual mismatches (not successes)

- kobra-advertisement / default: 3 of 605280 pixels differ (0.00049564%); mean absolute channel difference 0.00033703.
- kobra-button / loading-true: 104 of 605280 pixels differ (0.01718213%); mean absolute channel difference 0.00556932.
- kobra-chart / default: 6800 of 605280 pixels differ (1.12344700%); mean absolute channel difference 0.46576626.
- kobra-chart / chartkind-line: 131 of 605280 pixels differ (0.02164288%); mean absolute channel difference 0.01058133.
- kobra-chart / chartkind-area: 6100 of 605280 pixels differ (1.00779804%); mean absolute channel difference 0.11792449.
- kobra-chart / chartkind-bar: 4472 of 605280 pixels differ (0.73883162%); mean absolute channel difference 0.03451350.
- kobra-conversation / default: 8708 of 605280 pixels differ (1.43867301%); mean absolute channel difference 1.09776632.
- kobra-grouped-table / default: 27969 of 605280 pixels differ (4.62083664%); mean absolute channel difference 3.16563849.
- kobra-grouped-table / groupedtableanimated-true: 28821 of 605280 pixels differ (4.76159794%); mean absolute channel difference 3.02313585.
- kobra-plan-card / default: 59 of 605280 pixels differ (0.00974755%); mean absolute channel difference 0.00118788.
- kobra-question-card / default: 56555 of 605280 pixels differ (9.34360957%); mean absolute channel difference 2.89438662.
- kobra-reasoning-steps / default: 554 of 605280 pixels differ (0.09152789%); mean absolute channel difference 0.03000154.
- kobra-skeleton / default: 4662 of 605280 pixels differ (0.77022205%); mean absolute channel difference 0.02032778.
- kobra-spinner / default: 183 of 605280 pixels differ (0.03023394%); mean absolute channel difference 0.01278912.
- kobra-spinner / spinnervariant-default: 187 of 605280 pixels differ (0.03089479%); mean absolute channel difference 0.01193828.
- kobra-spinner / spinnervariant-gradient: 256 of 605280 pixels differ (0.04229448%); mean absolute channel difference 0.00233280.
- kobra-spinner / spinnervariant-bars: 286 of 605280 pixels differ (0.04725086%); mean absolute channel difference 0.00352729.
- kobra-spinner / spinnerdynamic-false: 123 of 605280 pixels differ (0.02032117%); mean absolute channel difference 0.00577088.
- kobra-spinner / spinnerdynamic-true: 106 of 605280 pixels differ (0.01751256%); mean absolute channel difference 0.00294409.
- kobra-streaming-text / default: 79 of 605280 pixels differ (0.01305181%); mean absolute channel difference 0.00117466.
- kobra-streaming-text / streamspeed-44: 78 of 605280 pixels differ (0.01288660%); mean absolute channel difference 0.00254097.
- kobra-streaming-text / streamspeed-28: 83 of 605280 pixels differ (0.01371266%); mean absolute channel difference 0.00195447.
- kobra-streaming-text / streamspeed-16: 45 of 605280 pixels differ (0.00743458%); mean absolute channel difference 0.00069224.
- kobra-streaming-text / streamspeed-10: 78 of 605280 pixels differ (0.01288660%); mean absolute channel difference 0.00300192.
- kobra-task-list / default: 217 of 605280 pixels differ (0.03585118%); mean absolute channel difference 0.00915279.
- kobra-video / default: 22832 of 605280 pixels differ (3.77213851%); mean absolute channel difference 1.07241167.
- movements-loader / default: 329 of 605280 pixels differ (0.05435501%); mean absolute channel difference 0.00942209.
- movements-loader / status-row: 46 of 605280 pixels differ (0.00759979%); mean absolute channel difference 0.00384395.
- movements-loader / empty-state: 256 of 605280 pixels differ (0.04229448%); mean absolute channel difference 0.01480307.

## Live deployment verification

Exact deployment commit checked: 5f31057aaea1d5a3a29d41a14c94b3f2b96b20b0. Canonical route pages covered by static reference checks: 87. References checked: 377; passed: 377. Status: pass. Executable bundles, CSS, HTML and manifests were fetched and compared byte-for-byte to the local snapshot; source and resource endpoints were checked independently.

Live Chrome configurations checked: 14; both views rendered: 14. Representative original/reconstruction toggles were exercised on the exact live URL, including lazy component routes. This is not live browser coverage of every component or full interaction equivalence. The quick video snapshot originally captured one mode before metadata finished loading; a separate delayed live test confirmed metadata, advancing playback time and pause for both modes (evidence/live-video-media.json). Cancelled iframe/media/font requests during navigation remain in raw evidence and are not presented as completed downloads.

## Artifacts and reproduction

manifest.json: canonical route/source mapping, status, uncovered controls and blockers.
acceptance-report.json: complete machine-readable strict acceptance result for all recorded configurations.
validate.py: executable acceptance validator; exit 1 means partial/unverified. --allow-partial changes only packaging exit status, never acceptance_pass.
source-pack/: portable source, pinned npm dependencies, sources and executable rebuild/validator.
ui-two-sites-source.zip: Python zipfile archive; excludes every .git and node_modules directory.
dist/: static local preview; serve with python -m http.server 8772 --directory dist.
evidence/browser/: final local raw DOM and PNGs for both modes, generic smoke actions and default repeat baselines.
evidence/live/: representative live CDP results and screenshots.
evidence/live-static.json: all-route live reference verification.
evidence/native-builds.json and source-syntax.json: real native build and parse outputs.
evidence/portable-rebuild.json: independently installed portable rebuild evidence and output hashes.

Source code and assets retain upstream authorship and license terms; this archive does not grant rights to paid author source. No previous affectUI artifact or deployment, Hermes configuration/memory, Telegram chat, or other profile was changed.

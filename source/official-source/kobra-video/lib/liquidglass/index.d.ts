/*! @ybouane/liquidglass 1.0.3 — MIT License, Copyright (c) Yassine Bouane. Vendored verbatim from the published package: it runs patch-package on install, which fails in any project without it, so it ships inside the Kobra video item instead. Do not edit; replace the folder to update. */
/**
 * liquidglass — A liquid glass effect library for the web.
 *
 * Apply realistic glass refraction, blur, chromatic aberration, and
 * lighting to any HTML element using WebGL shaders.
 *
 * @example
 *   import { LiquidGlass } from '@ybouane/liquidglass';
 *
 *   const instance = await LiquidGlass.init({
 *       root: document.querySelector('#my-root'),
 *       glassElements: document.querySelectorAll('.glass'),
 *   });
 *
 *   // Later:
 *   instance.destroy();
 *
 * @module @ybouane/liquidglass
 */
export { LiquidGlass } from './LiquidGlass.js';
export type { LiquidGlassOptions } from './LiquidGlass.js';
export { DEFAULTS } from './defaults.js';
export type { GlassConfig } from './defaults.js';
export { invalidateFontEmbedCache } from './HtmlCapture.js';
//# sourceMappingURL=index.d.ts.map
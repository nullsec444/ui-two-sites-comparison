"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment, useId, useMemo, useSyncExternalStore, } from "react";
import { displacementMapURL, filterPad, glassBoxShadow, glassTint, GLASS_SATURATE, supportsBackdropFilterUrl, } from "./lens.js";
/** Browser support never changes at runtime. */
const subscribeNever = () => () => { };
const SHEEN = "linear-gradient(180deg, rgb(255 255 255 / 0.55) 0%, rgb(255 255 255 / 0) 38%)";
/**
 * Refractive glass over whatever is behind it — no stylesheet needed.
 *
 * Chromium bends the backdrop through an SVG displacement filter; Safari and
 * Firefox fall back to blur + tint + rim.
 */
export function Glass({ width = 50, height = 50, radius = 25, rim = 18, bend = 60, blur = 2, aberration = 12, tint = 0.1, theme = "light", children, className, style, }) {
    const filterId = `mv-glass${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
    const r = Math.min(radius, width / 2, height / 2);
    const pad = filterPad(bend, aberration);
    // Server and first hydration pass render the blur fallback; Chromium then
    // switches to the refracting filter.
    const supported = useSyncExternalStore(subscribeNever, supportsBackdropFilterUrl, () => false);
    const map = useMemo(() => (supported ? displacementMapURL(width, height, r, rim, pad) : null), [supported, width, height, r, rim, pad]);
    const backdrop = map
        ? {
            backdropFilter: `url(#${filterId}) blur(${blur}px) saturate(${GLASS_SATURATE})`,
        }
        : {
            backdropFilter: `blur(${blur + 1}px) saturate(${GLASS_SATURATE})`,
            WebkitBackdropFilter: `blur(${blur + 1}px) saturate(${GLASS_SATURATE})`,
        };
    return (_jsxs("div", { className: className, style: {
            position: "relative",
            width,
            height,
            borderRadius: r,
            background: glassTint(tint, theme),
            boxShadow: glassBoxShadow(theme),
            ...backdrop,
            ...style,
        }, children: [map ? (_jsx("svg", { width: 0, height: 0, "aria-hidden": true, style: { position: "absolute", overflow: "hidden" }, children: _jsxs("filter", { id: filterId, filterUnits: "userSpaceOnUse", x: -pad, y: -pad, width: width + pad * 2, height: height + pad * 2, colorInterpolationFilters: "sRGB", children: [_jsx("feImage", { href: map, x: -pad, y: -pad, width: width + pad * 2, height: height + pad * 2, preserveAspectRatio: "none", result: "map" }), [
                            [
                                "r",
                                bend + aberration,
                                "1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0",
                            ],
                            ["g", bend, "0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0"],
                            [
                                "b",
                                bend - aberration,
                                "0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0",
                            ],
                        ].map(([channel, scale, matrix]) => (_jsxs(Fragment, { children: [_jsx("feDisplacementMap", { in: "SourceGraphic", in2: "map", scale: scale, xChannelSelector: "R", yChannelSelector: "G", result: `d${channel}` }), _jsx("feColorMatrix", { in: `d${channel}`, type: "matrix", values: matrix, result: channel })] }, channel))), _jsx("feBlend", { in: "r", in2: "g", mode: "screen", result: "rg" }), _jsx("feBlend", { in: "rg", in2: "b", mode: "screen" })] }) })) : null, _jsx("div", { "aria-hidden": true, style: {
                    position: "absolute",
                    inset: 0,
                    borderRadius: "inherit",
                    background: SHEEN,
                    mixBlendMode: "screen",
                    opacity: 0.8,
                    pointerEvents: "none",
                } }), children ? (_jsx("div", { style: { position: "relative", width: "100%", height: "100%" }, children: children })) : null] }));
}
//# sourceMappingURL=Glass.js.map
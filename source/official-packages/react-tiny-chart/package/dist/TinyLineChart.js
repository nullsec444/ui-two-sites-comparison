"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useId, useMemo } from "react";
import { buildChartPaths } from "./geometry.js";
export const CHART_SIZES = {
    sm: { width: 120, height: 38 },
    md: { width: 200, height: 64 },
    lg: { width: 280, height: 90 },
};
/** The studio's palette; `color` also accepts any CSS color. */
export const CHART_COLORS = {
    ink: "#1a1a1c",
    blue: "#3b5bdb",
    teal: "#0c8a7a",
    amber: "#e67700",
    rose: "#c2255c",
    violet: "#7048e8",
};
/** Soft horizontal fade on each side, in px. */
const EDGE_FADE_PX = 8;
const EDGE_FADE_MASK = `linear-gradient(to right, transparent, black ${EDGE_FADE_PX}px, black calc(100% - ${EDGE_FADE_PX}px), transparent)`;
/** A tiny SVG sparkline. Every option is a prop — no stylesheet needed. */
export function TinyLineChart({ data, color = "#e67700", easing = "low-ease", size = "md", width, height, gradient = false, edgeFade = true, strokeWidth = 2, className, style, "aria-label": ariaLabel = "Line chart", }) {
    const w = width !== null && width !== void 0 ? width : CHART_SIZES[size].width;
    const h = height !== null && height !== void 0 ? height : CHART_SIZES[size].height;
    const gradientId = `tlc${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
    const { linePath, areaPath } = useMemo(() => buildChartPaths(data, w, h, easing), [data, w, h, easing]);
    return (_jsxs("svg", { width: w, height: h, viewBox: `0 0 ${w} ${h}`, className: className, role: "img", "aria-label": ariaLabel, style: {
            display: "block",
            ...(edgeFade
                ? { maskImage: EDGE_FADE_MASK, WebkitMaskImage: EDGE_FADE_MASK }
                : null),
            ...style,
        }, children: [gradient ? (_jsxs(_Fragment, { children: [_jsx("defs", { children: _jsxs("linearGradient", { id: gradientId, x1: "0", y1: "0", x2: "0", y2: "1", children: [_jsx("stop", { offset: "0%", stopColor: color, stopOpacity: 0.28 }), _jsx("stop", { offset: "100%", stopColor: color, stopOpacity: 0 })] }) }), _jsx("path", { d: areaPath, fill: `url(#${gradientId})` })] })) : null, _jsx("path", { d: linePath, fill: "none", stroke: color, strokeWidth: strokeWidth, strokeLinecap: "round", strokeLinejoin: "round" })] }));
}
//# sourceMappingURL=TinyLineChart.js.map
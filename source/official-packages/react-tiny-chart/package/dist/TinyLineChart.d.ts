import { type CSSProperties } from "react";
import { type ChartEasing } from "./geometry.js";
export type ChartSize = "sm" | "md" | "lg";
export declare const CHART_SIZES: Record<ChartSize, {
    width: number;
    height: number;
}>;
/** The studio's palette; `color` also accepts any CSS color. */
export declare const CHART_COLORS: {
    readonly ink: "#1a1a1c";
    readonly blue: "#3b5bdb";
    readonly teal: "#0c8a7a";
    readonly amber: "#e67700";
    readonly rose: "#c2255c";
    readonly violet: "#7048e8";
};
export type TinyLineChartProps = {
    /** The series — at least two numbers read best. */
    data: readonly number[];
    /** Stroke (and gradient) color; any CSS color, including `var(--…)`. */
    color?: string;
    /** How the line travels between points. */
    easing?: ChartEasing;
    /** Preset frame size; `width` / `height` override it. */
    size?: ChartSize;
    width?: number;
    height?: number;
    /** Soft color fill under the line. */
    gradient?: boolean;
    /** Fade the left and right edges out. */
    edgeFade?: boolean;
    strokeWidth?: number;
    className?: string;
    style?: CSSProperties;
    "aria-label"?: string;
};
/** A tiny SVG sparkline. Every option is a prop — no stylesheet needed. */
export declare function TinyLineChart({ data, color, easing, size, width, height, gradient, edgeFade, strokeWidth, className, style, "aria-label": ariaLabel, }: TinyLineChartProps): import("react").JSX.Element;
//# sourceMappingURL=TinyLineChart.d.ts.map
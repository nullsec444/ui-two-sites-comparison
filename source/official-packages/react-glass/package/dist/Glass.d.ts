import { type CSSProperties, type ReactNode } from "react";
export type GlassProps = {
    width?: number;
    height?: number;
    /** Corner radius; capped at half the shorter side. */
    radius?: number;
    /** How far in from the edge the refraction reaches (6–70). */
    rim?: number;
    /** Strength of the refraction at the rim. */
    bend?: number;
    /** Backdrop blur in px. */
    blur?: number;
    /** Red/blue split along the rim — chromatic aberration. */
    aberration?: number;
    /** White tint over the backdrop, 0–1. */
    tint?: number;
    /** Tint and edge treatment for light or dark surroundings. */
    theme?: "light" | "dark";
    /** Content placed on the glass (icons, labels…). */
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
};
/**
 * Refractive glass over whatever is behind it — no stylesheet needed.
 *
 * Chromium bends the backdrop through an SVG displacement filter; Safari and
 * Firefox fall back to blur + tint + rim.
 */
export declare function Glass({ width, height, radius, rim, bend, blur, aberration, tint, theme, children, className, style, }: GlassProps): import("react").JSX.Element;
//# sourceMappingURL=Glass.d.ts.map
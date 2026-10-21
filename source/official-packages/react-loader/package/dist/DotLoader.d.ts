import { type CSSProperties } from "react";
import { type LoaderGridSize, type LoaderPreset } from "./frames.js";
export type LoaderTransition = "none" | "fade" | "color";
export type DotLoaderProps = {
    /** Square grid edge length. */
    size?: LoaderGridSize;
    /**
     * Active cell indices per frame (0 … size² − 1, row-major).
     * Overrides `preset` when set.
     */
    frames?: number[][];
    /** Built-in animation used when `frames` is not set. */
    preset?: LoaderPreset;
    /** How long each frame stays visible, in ms. */
    frameDuration?: number;
    /** Hard cut, opacity crossfade, or active ↔ inactive color blend. */
    transition?: LoaderTransition;
    /** Blend length in ms; ignored when `transition` is `"none"`. */
    transitionDuration?: number;
    activeColor?: string;
    inactiveColor?: string;
    /** Rendered width and height of the whole grid, in px. */
    pixelSize?: number;
    /** Freeze the animation. */
    paused?: boolean;
    /** Show one specific frame (also stops the animation). */
    frameIndex?: number;
    className?: string;
    style?: CSSProperties;
    "aria-label"?: string;
};
/**
 * A square grid of dots that steps through frames. Every option is a prop —
 * no stylesheet needed.
 */
export declare function DotLoader({ size, frames: framesProp, preset, frameDuration, transition, transitionDuration, activeColor, inactiveColor, pixelSize, paused, frameIndex, className, style, "aria-label": ariaLabel, }: DotLoaderProps): import("react").JSX.Element;
//# sourceMappingURL=DotLoader.d.ts.map
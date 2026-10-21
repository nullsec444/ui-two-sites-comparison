"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from "react";
import { presetFrames, } from "./frames.js";
const cellBase = {
    minWidth: 0,
    minHeight: 0,
    borderRadius: 9999,
};
/**
 * A square grid of dots that steps through frames. Every option is a prop —
 * no stylesheet needed.
 */
export function DotLoader({ size = 3, frames: framesProp, preset = "spinner", frameDuration = 120, transition = "color", transitionDuration = 90, activeColor = "#1a1a1c", inactiveColor = "#e8e8ea", pixelSize = 56, paused = false, frameIndex, className, style, "aria-label": ariaLabel = "Loading", }) {
    var _a;
    const frames = useMemo(() => framesProp !== null && framesProp !== void 0 ? framesProp : presetFrames(preset, size), [framesProp, preset, size]);
    const [internalFrame, setInternalFrame] = useState(0);
    const playing = !paused &&
        frameIndex === undefined &&
        frames.length > 1 &&
        frameDuration > 0;
    useEffect(() => {
        if (!playing)
            return;
        const id = window.setInterval(() => {
            setInternalFrame((prev) => (prev + 1) % frames.length);
        }, frameDuration);
        return () => window.clearInterval(id);
    }, [playing, frameDuration, frames.length]);
    const activeIndex = frameIndex !== undefined
        ? Math.min(Math.max(frameIndex, 0), Math.max(frames.length - 1, 0))
        : frames.length === 0
            ? 0
            : internalFrame % frames.length;
    const active = new Set((_a = frames[activeIndex]) !== null && _a !== void 0 ? _a : []);
    const gap = Math.max(2, Math.round(pixelSize * 0.08));
    const blendMs = transition === "none" ? 0 : Math.max(0, transitionDuration);
    let cellTransition;
    switch (transition) {
        case "none":
            cellTransition = "none";
            break;
        case "fade":
            cellTransition = `opacity ${blendMs}ms ease`;
            break;
        case "color":
            cellTransition = `background-color ${blendMs}ms ease`;
            break;
        default: {
            const exhaustive = transition;
            cellTransition = exhaustive;
        }
    }
    return (_jsx("div", { className: className, role: "img", "aria-label": ariaLabel, style: {
            width: pixelSize,
            height: pixelSize,
            display: "grid",
            gridTemplateColumns: `repeat(${size}, 1fr)`,
            gridTemplateRows: `repeat(${size}, 1fr)`,
            gap,
            ...style,
        }, children: Array.from({ length: size * size }, (_, index) => {
            const on = active.has(index);
            if (transition === "fade") {
                return (_jsx("div", { style: {
                        ...cellBase,
                        position: "relative",
                        overflow: "hidden",
                        backgroundColor: inactiveColor,
                    }, children: _jsx("div", { style: {
                            position: "absolute",
                            inset: 0,
                            borderRadius: 9999,
                            backgroundColor: activeColor,
                            opacity: on ? 1 : 0,
                            transition: cellTransition,
                        } }) }, index));
            }
            return (_jsx("div", { style: {
                    ...cellBase,
                    backgroundColor: on ? activeColor : inactiveColor,
                    transition: cellTransition,
                } }, index));
        }) }));
}
//# sourceMappingURL=DotLoader.js.map
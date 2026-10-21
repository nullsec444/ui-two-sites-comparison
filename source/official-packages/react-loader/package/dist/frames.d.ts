export type LoaderGridSize = 3 | 4 | 5 | 6;
export type LoaderPreset = "spinner" | "sweep" | "pulse";
/** Clockwise ring around the perimeter with a trailing third — classic spinner. */
export declare function spinnerFrames(size: LoaderGridSize): number[][];
/** Diagonal sweep from the top-left to the bottom-right corner. */
export declare function sweepFrames(size: LoaderGridSize): number[][];
/** Square pulse that grows from the center and collapses back. */
export declare function pulseFrames(size: LoaderGridSize): number[][];
export declare function presetFrames(preset: LoaderPreset, size: LoaderGridSize): number[][];
//# sourceMappingURL=frames.d.ts.map
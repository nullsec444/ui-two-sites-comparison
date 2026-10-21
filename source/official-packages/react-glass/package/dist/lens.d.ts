export declare const GLASS_SATURATE = 1.4;
/** Extra pixels around the shape so the rim can pull in backdrop from outside it. */
export declare function filterPad(bend: number, aberration: number): number;
/**
 * PNG data URL for feDisplacementMap. The shape sits centered in a padded
 * map; R/G encode the outward normal × lens profile, 128 is neutral.
 */
export declare function displacementMapURL(width: number, height: number, radius: number, rim: number, pad: number): string;
/** Only Chromium can use an SVG filter inside `backdrop-filter`. */
export declare function supportsBackdropFilterUrl(): boolean;
export declare function glassBoxShadow(theme: "light" | "dark"): string;
export declare function glassTint(tint: number, theme: "light" | "dark"): string;
//# sourceMappingURL=lens.d.ts.map
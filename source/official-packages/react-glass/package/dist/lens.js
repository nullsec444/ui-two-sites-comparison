/** Rim thickness range the lens profile is normalized against. */
const RIM_MIN = 6;
const RIM_MAX = 70;
export const GLASS_SATURATE = 1.4;
function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
}
/** Signed distance to a rounded rectangle centered at the origin. */
function sdRoundedRect(px, py, hw, hh, r) {
    const qx = Math.abs(px) - hw + r;
    const qy = Math.abs(py) - hh + r;
    return (Math.hypot(Math.max(qx, 0), Math.max(qy, 0)) +
        Math.min(Math.max(qx, qy), 0) -
        r);
}
/** Extra pixels around the shape so the rim can pull in backdrop from outside it. */
export function filterPad(bend, aberration) {
    return Math.ceil(Math.max(Math.abs(bend) + Math.abs(aberration) + 16, 40));
}
/**
 * Outward normal × rim profile at a point. Falloff runs toward the center of
 * the shape, so a thick rim never collapses into a hard inset rectangle.
 */
function lensAt(px, py, hw, hh, radius, rim) {
    const rr = Math.min(Math.max(radius, 0), hw, hh);
    const sd = sdRoundedRect(px, py, hw, hh, rr);
    if (sd >= 0)
        return { nx: 0, ny: 0, amt: 0 };
    let nx = sdRoundedRect(px + 1, py, hw, hh, rr) -
        sdRoundedRect(px - 1, py, hw, hh, rr);
    let ny = sdRoundedRect(px, py + 1, hw, hh, rr) -
        sdRoundedRect(px, py - 1, hw, hh, rr);
    const len = Math.hypot(nx, ny) || 1;
    nx /= len;
    ny /= len;
    const toCenter = Math.max(Math.min(hw, hh), 1);
    const rimT = (clamp(rim, RIM_MIN, RIM_MAX) - RIM_MIN) / (RIM_MAX - RIM_MIN);
    const rimSpan = toCenter * (0.16 + 0.84 * rimT);
    const fall = Math.min(-sd / Math.max(rimSpan, 1), 1);
    let lens = 1 - fall;
    lens = lens * lens * lens * (lens * (lens * 6 - 15) + 10);
    return { nx, ny, amt: lens ** 1.6 };
}
/**
 * PNG data URL for feDisplacementMap. The shape sits centered in a padded
 * map; R/G encode the outward normal × lens profile, 128 is neutral.
 */
export function displacementMapURL(width, height, radius, rim, pad) {
    const w = Math.max(1, Math.round(width + pad * 2));
    const h = Math.max(1, Math.round(height + pad * 2));
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    if (!ctx)
        return "";
    const image = ctx.createImageData(w, h);
    const data = image.data;
    const hw = width / 2;
    const hh = height / 2;
    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            const { nx, ny, amt } = lensAt(x + 0.5 - w / 2, y + 0.5 - h / 2, hw, hh, radius, rim);
            const i = (y * w + x) * 4;
            data[i] = 128 + nx * amt * 127;
            data[i + 1] = 128 + ny * amt * 127;
            data[i + 2] = 0;
            data[i + 3] = 255;
        }
    }
    ctx.putImageData(image, 0, 0);
    return canvas.toDataURL();
}
/** Only Chromium can use an SVG filter inside `backdrop-filter`. */
export function supportsBackdropFilterUrl() {
    return (typeof CSS !== "undefined" &&
        typeof CSS.supports === "function" &&
        CSS.supports("backdrop-filter", "url(#x)"));
}
export function glassBoxShadow(theme) {
    if (theme === "dark") {
        return [
            "inset 0 0 0 1px rgb(255 255 255 / 0.22)",
            "inset 1px 1px 0 0 rgb(255 255 255 / 0.5)",
            "0 30px 60px -20px rgb(0 0 0 / 0.6)",
        ].join(", ");
    }
    return [
        "inset 0 0 0 1px rgb(255 255 255 / 0.55)",
        "inset 1px 1px 0 0 rgb(255 255 255 / 0.95)",
        "inset -1px -1px 0 0 rgb(0 0 0 / 0.05)",
        "0 30px 60px -20px rgb(0 0 0 / 0.28)",
        "0 4px 12px rgb(0 0 0 / 0.08)",
    ].join(", ");
}
export function glassTint(tint, theme) {
    const alpha = theme === "dark" ? tint * 0.36 : tint;
    return `rgb(255 255 255 / ${Math.round(alpha * 1000) / 1000})`;
}
//# sourceMappingURL=lens.js.map
/** Samples per segment between two data points. */
const SAMPLES = 16;
function easingFn(easing) {
    switch (easing) {
        case "linear":
            return (t) => t;
        case "low-ease":
            // Quadratic in-out — gentler than cubic.
            return (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
        case "ease":
            return (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
        default: {
            const exhaustive = easing;
            return exhaustive;
        }
    }
}
/**
 * Line and area paths for a sparkline. Between consecutive points, Y is
 * interpolated with the chosen ease so the line reads smooth, not jagged.
 */
export function buildChartPaths(data, width, height, easing, padding = 2) {
    const values = data.length === 0 ? [0, 0] : data.length === 1 ? [data[0], data[0]] : data;
    const min = Math.min(...values);
    const max = Math.max(...values);
    const range = max - min || 1;
    const innerW = Math.max(1, width - padding * 2);
    const innerH = Math.max(1, height - padding * 2);
    const ease = easingFn(easing);
    const last = values.length - 1;
    const yAt = (v) => padding + innerH - ((v - min) / range) * innerH;
    const points = [];
    for (let i = 0; i < last; i++) {
        const x0 = padding + (i / last) * innerW;
        const x1 = padding + ((i + 1) / last) * innerW;
        const y0 = yAt(values[i]);
        const y1 = yAt(values[i + 1]);
        for (let s = 0; s < SAMPLES; s++) {
            const t = s / SAMPLES;
            points.push({ x: x0 + (x1 - x0) * t, y: y0 + (y1 - y0) * ease(t) });
        }
    }
    points.push({ x: padding + innerW, y: yAt(values[last]) });
    const linePath = points
        .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(2)} ${p.y.toFixed(2)}`)
        .join(" ");
    const bottom = (height - padding).toFixed(2);
    const areaPath = `${linePath} L ${points[points.length - 1].x.toFixed(2)} ${bottom} L ${points[0].x.toFixed(2)} ${bottom} Z`;
    return { linePath, areaPath };
}
//# sourceMappingURL=geometry.js.map
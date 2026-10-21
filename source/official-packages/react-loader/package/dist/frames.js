/** Clockwise ring around the perimeter with a trailing third — classic spinner. */
export function spinnerFrames(size) {
    const n = size;
    const ring = [];
    for (let c = 0; c < n; c++)
        ring.push(c);
    for (let r = 1; r < n; r++)
        ring.push(r * n + (n - 1));
    for (let c = n - 2; c >= 0; c--)
        ring.push((n - 1) * n + c);
    for (let r = n - 2; r >= 1; r--)
        ring.push(r * n);
    const trail = Math.max(1, Math.round(ring.length / 3));
    return ring.map((_, start) => {
        const frame = [];
        for (let t = 0; t < trail; t++)
            frame.push(ring[(start + t) % ring.length]);
        return frame.sort((a, b) => a - b);
    });
}
/** Diagonal sweep from the top-left to the bottom-right corner. */
export function sweepFrames(size) {
    const frames = [];
    for (let d = 0; d <= (size - 1) * 2; d++) {
        const frame = [];
        for (let row = 0; row < size; row++) {
            const col = d - row;
            if (col >= 0 && col < size)
                frame.push(row * size + col);
        }
        frames.push(frame);
    }
    return frames;
}
/** Square pulse that grows from the center and collapses back. */
export function pulseFrames(size) {
    const center = (size - 1) / 2;
    const maxR = Math.ceil(size / 2);
    const ring = (radius) => {
        const frame = [];
        for (let row = 0; row < size; row++) {
            for (let col = 0; col < size; col++) {
                const dist = Math.max(Math.abs(row - center), Math.abs(col - center));
                if (dist <= radius)
                    frame.push(row * size + col);
            }
        }
        return frame;
    };
    const frames = [];
    for (let r = 0; r <= maxR; r++)
        frames.push(ring(r));
    for (let r = maxR - 1; r >= 0; r--)
        frames.push(ring(r));
    return frames;
}
export function presetFrames(preset, size) {
    switch (preset) {
        case "spinner":
            return spinnerFrames(size);
        case "sweep":
            return sweepFrames(size);
        case "pulse":
            return pulseFrames(size);
        default: {
            const exhaustive = preset;
            return exhaustive;
        }
    }
}
//# sourceMappingURL=frames.js.map
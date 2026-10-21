export type ChartEasing = "linear" | "low-ease" | "ease";
/**
 * Line and area paths for a sparkline. Between consecutive points, Y is
 * interpolated with the chosen ease so the line reads smooth, not jagged.
 */
export declare function buildChartPaths(data: readonly number[], width: number, height: number, easing: ChartEasing, padding?: number): {
    linePath: string;
    areaPath: string;
};
//# sourceMappingURL=geometry.d.ts.map
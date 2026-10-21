# @movements/react-tiny-chart

A tiny SVG sparkline for React: easing, gradient, edge fade, and size. Tune it at [movements.dev/chart](https://movements.dev/chart) and copy the props.

No stylesheet to import. It's one inline SVG.

```bash
npm i @movements/react-tiny-chart
```

```tsx
import { TinyLineChart } from "@movements/react-tiny-chart";

export function Example() {
  return (
    <TinyLineChart data={[7, 11, 4, 14, 9, 18]} color="#0c8a7a" gradient />
  );
}
```

## Props

| Prop                               | Type                               | Default      |                                                                             |
| ---------------------------------- | ---------------------------------- | ------------ | --------------------------------------------------------------------------- |
| `data`                             | `number[]`                         | required     | The series.                                                                 |
| `color`                            | `string`                           | `"#e67700"`  | Any CSS color, including `var(--…)`. `CHART_COLORS` has the studio palette. |
| `easing`                           | `"linear" \| "low-ease" \| "ease"` | `"low-ease"` | How the line travels between points.                                        |
| `size`                             | `"sm" \| "md" \| "lg"`             | `"md"`       | 120×38, 200×64, 280×90.                                                     |
| `width`, `height`                  | `number`                           |              | Override `size`.                                                            |
| `gradient`                         | `boolean`                          | `false`      | Soft fill under the line.                                                   |
| `edgeFade`                         | `boolean`                          | `true`       | Fade the left and right edges.                                              |
| `strokeWidth`                      | `number`                           | `2`          |                                                                             |
| `className`, `style`, `aria-label` |                                    |              | Passed to the SVG.                                                          |

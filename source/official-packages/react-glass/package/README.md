# @movements/react-glass

Refractive glass for React: rim, bend, blur, and chromatic aberration over whatever sits behind it. Tune it at [movements.dev/glass](https://movements.dev/glass) and copy the props.

No stylesheet to import. Everything is inline styles and an inline SVG filter.

```bash
npm i @movements/react-glass
```

```tsx
import { Glass } from "@movements/react-glass";

export function Example() {
  return <Glass width={148} height={48} radius={24} rim={16} bend={60} />;
}
```

## Props

| Prop                 | Type                | Default   |                                                         |
| -------------------- | ------------------- | --------- | ------------------------------------------------------- |
| `width`              | `number`            | `50`      | px                                                      |
| `height`             | `number`            | `50`      | px                                                      |
| `radius`             | `number`            | `25`      | Capped at half the shorter side.                        |
| `rim`                | `number`            | `18`      | How far in from the edge the refraction reaches (6–70). |
| `bend`               | `number`            | `60`      | Refraction strength at the rim.                         |
| `blur`               | `number`            | `2`       | Backdrop blur, px.                                      |
| `aberration`         | `number`            | `12`      | Red/blue split along the rim.                           |
| `tint`               | `number`            | `0.1`     | White tint over the backdrop, 0–1.                      |
| `theme`              | `"light" \| "dark"` | `"light"` | Tint and edge treatment.                                |
| `children`           | `ReactNode`         |           | Content on the glass.                                   |
| `className`, `style` |                     |           | Passed to the root element.                             |

## Browser support

Chromium bends the backdrop through an SVG displacement filter inside `backdrop-filter`. Safari and Firefox don't support SVG filters there, so they get blur, tint, and the rim instead. The first server render also uses that fallback; the refraction switches on after hydration.

# @movements/react-loader

A dot-grid loading animation for React: frames, timing, transitions, and colors. Paint your own at [movements.dev/loader](https://movements.dev/loader) and copy the props.

No stylesheet to import. Everything is inline styles.

```bash
npm i @movements/react-loader
```

```tsx
import { DotLoader } from "@movements/react-loader";

export function Example() {
  return (
    <DotLoader
      size={4}
      preset="sweep"
      activeColor="#3b5bdb"
      inactiveColor="#dbe4ff"
    />
  );
}
```

## Props

| Prop                               | Type                              | Default     |                                                                |
| ---------------------------------- | --------------------------------- | ----------- | -------------------------------------------------------------- |
| `size`                             | `3 \| 4 \| 5 \| 6`                | `3`         | Grid edge length.                                              |
| `frames`                           | `number[][]`                      |             | Active cell indices per frame (row-major). Overrides `preset`. |
| `preset`                           | `"spinner" \| "sweep" \| "pulse"` | `"spinner"` | Used when `frames` is not set.                                 |
| `frameDuration`                    | `number`                          | `120`       | ms per frame.                                                  |
| `transition`                       | `"none" \| "fade" \| "color"`     | `"color"`   | Hard cut, opacity crossfade, or color blend.                   |
| `transitionDuration`               | `number`                          | `90`        | ms; ignored for `"none"`.                                      |
| `activeColor`                      | `string`                          | `"#1a1a1c"` |                                                                |
| `inactiveColor`                    | `string`                          | `"#e8e8ea"` |                                                                |
| `pixelSize`                        | `number`                          | `56`        | Rendered size of the whole grid, px.                           |
| `paused`                           | `boolean`                         | `false`     |                                                                |
| `frameIndex`                       | `number`                          |             | Show one frame; stops the animation.                           |
| `className`, `style`, `aria-label` |                                   |             | Passed to the root element.                                    |

The preset generators are exported too: `spinnerFrames(size)`, `sweepFrames(size)`, `pulseFrames(size)`.

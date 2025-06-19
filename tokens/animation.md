# Animation & Timing Tokens

This file defines the animation and timing scale for the design system. All values use a 1–x scale, with `none` as a special value for disabling animations.

## Duration Tokens
| Token             | Value (ms) | Usage Example               |
|-------------------|------------|----------------------------|
| duration.fast     | 150        | Quick hover transitions     |
| duration.normal   | 300        | Standard transitions        |
| duration.slow     | 500        | Complex state changes       |
| duration.spin     | 1000       | Continuous rotations        |
| duration.pulse    | 2000       | Breathing animations        |

## Easing Functions
| Token               | Cubic Bezier Value           | Usage Example               |
|---------------------|-------------------------------|----------------------------|
| easing.ease-out     | cubic-bezier(0.4, 0, 0.2, 1) | Standard UI transitions     |
| easing.ease-in      | cubic-bezier(0.4, 0, 1, 1)   | Element exits               |
| easing.ease-in-out  | cubic-bezier(0.4, 0, 0.6, 1) | Complex state changes       |
| easing.linear       | linear                        | Continuous animations       |

## Transition Tokens
| Token               | Value                                                       | Usage Example               |
|---------------------|------------------------------------------------------------|-----------------------------|
| transition.none     | none                                                       | Disable animations          |
| transition.fast     | all 150ms cubic-bezier(0.4, 0, 0.2, 1)                   | Quick hover states          |
| transition.normal   | all 300ms cubic-bezier(0.4, 0, 0.2, 1)                   | Standard transitions        |
| transition.slow     | all 500ms cubic-bezier(0.4, 0, 0.2, 1)                   | Complex state changes       |
| transition.colors   | color, background-color, border-color 300ms ease-out      | Color-only transitions      |
| transition.opacity  | opacity 300ms cubic-bezier(0.4, 0, 0.2, 1)               | Fade effects                |
| transition.shadow   | box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1)            | Elevation changes           |
| transition.transform| transform 300ms cubic-bezier(0.4, 0, 0.2, 1)             | Movement and rotation       |

## Animation Tokens
| Token              | Value                                           | Usage Example               |
|--------------------|------------------------------------------------|-----------------------------|
| animation.none     | none                                           | Disable animations          |
| animation.spin     | spin 1000ms linear infinite                    | Loading spinners            |
| animation.ping     | ping 1000ms cubic-bezier(0, 0, 0.2, 1) infinite | Pulse indicators          |
| animation.pulse    | pulse 2000ms cubic-bezier(0.4, 0, 0.6, 1) infinite | Breathing effects      |
| animation.bounce   | bounce 1000ms infinite                         | Playful interactions        |
| animation.fade-in  | fadeIn 300ms cubic-bezier(0.4, 0, 0.2, 1)     | Element entrances           |
| animation.fade-out | fadeOut 300ms cubic-bezier(0.4, 0, 0.2, 1)    | Element exits               |
| animation.slide-in | slideIn 300ms cubic-bezier(0.4, 0, 0.2, 1)    | Panel/modal entrances       |
| animation.slide-out| slideOut 300ms cubic-bezier(0.4, 0, 0.2, 1)   | Panel/modal exits           |

## Usage Guidelines
- Use `duration.fast` for hover states and quick feedback
- Use `duration.normal` for most UI transitions
- Use `duration.slow` for complex state changes or large content areas
- Always use `easing.ease-out` for standard UI transitions (feels most natural)
- Use `transition.colors` when only changing colors to optimize performance
- Use `animation.spin` for loading indicators
- Use `animation.fade-in`/`animation.fade-out` for content that appears/disappears
- Use `animation.pulse` for elements that need user attention

## Implementation Examples

### MoonZoon (Rust)
```rust
// Using duration tokens
.s(Transitions::new([
    Transition::background_color().duration(animation::DURATION_NORMAL),
    Transition::transform().duration(animation::DURATION_FAST)
]))

// Using transition helpers
.s(animation::transition_colors())
.s(animation::transition_transform())

// Creating custom animations
let (height_tween, height_signal) = animation::create_height_animation(0.0);
```

### Vue/TypeScript
```typescript
// Using transition tokens
style: {
  transition: tokens.transition.colors,
  transform: tokens.transition.transform,
}

// Using animation tokens
style: {
  animation: tokens.animation.spin,
}
```

## Accessibility Considerations
- Respect `prefers-reduced-motion` media query by setting `animation.none` and `transition.none`
- Ensure animations don't cause seizures (avoid rapid flashing)
- Keep essential information visible during animations
- Provide alternatives for users who disable animations

> Use only the token values defined here. Never use hardcoded animation durations, easing functions, or transition properties in components.
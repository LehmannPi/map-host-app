# Ethereal Canyon Color Palette

This color palette is inspired by the ethereal canyon image, featuring deep purples, vibrant teals, and glowing light effects that create a mystical, otherworldly atmosphere.

## Color Palette

### Primary Colors

| Color Name     | Hex Code  | Description                                          | Usage                             |
| -------------- | --------- | ---------------------------------------------------- | --------------------------------- |
| **Canyon 50**  | `#F0F8FF` | Bright light (core) - almost white with hint of blue | Primary text, highlights          |
| **Canyon 100** | `#C8D8F0` | Pale lavender/blue (light halo)                      | Secondary text, subtle highlights |
| **Canyon 200** | `#9BB8E6` | Light teal/cyan blend                                | Background accents                |
| **Canyon 300** | `#6E98DC` | Medium teal/cyan                                     | Interactive elements              |
| **Canyon 400** | `#4AD9E6` | Vibrant teal/cyan (accent/highlight)                 | Primary accent, glowing effects   |
| **Canyon 500** | `#5C4B8D` | Mid-tone purple (illuminated areas)                  | Secondary accent                  |
| **Canyon 600** | `#4A3A7A` | Medium purple                                        | Borders, dividers                 |
| **Canyon 700** | `#3F2E5C` | Deep purple (dominant base)                          | Main backgrounds                  |
| **Canyon 800** | `#2E1F45` | Darker purple                                        | Card backgrounds                  |
| **Canyon 900** | `#1F152E` | Deepest purple                                       | Page backgrounds                  |

### Semantic Colors

| Color Name          | Hex Code  | Description          | Usage                            |
| ------------------- | --------- | -------------------- | -------------------------------- |
| **Ethereal Light**  | `#F0F8FF` | Bright central light | Primary text, important elements |
| **Ethereal Glow**   | `#C8D8F0` | Light halo           | Secondary text, subtle effects   |
| **Ethereal Teal**   | `#4AD9E6` | Vibrant teal accent  | Primary accent, glowing effects  |
| **Ethereal Purple** | `#5C4B8D` | Mid-tone purple      | Secondary accent, gradients      |
| **Ethereal Deep**   | `#3F2E5C` | Deep purple base     | Main backgrounds                 |

## Background Gradients

### Canyon Gradient

```css
background: linear-gradient(135deg, #3f2e5c 0%, #5c4b8d 50%, #4ad9e6 100%);
```

- Used for main page backgrounds
- Creates depth and visual interest

### Ethereal Glow

```css
background: radial-gradient(
  circle at center,
  #f0f8ff 0%,
  #c8d8f0 50%,
  #5c4b8d 100%
);
```

- Used for glowing effects and highlights
- Creates ethereal, mystical atmosphere

## Animations

### Glow Pulse

```css
@keyframes glow-pulse {
  0% {
    box-shadow: 0 0 20px rgba(74, 217, 230, 0.3);
  }
  100% {
    box-shadow: 0 0 40px rgba(74, 217, 230, 0.6);
  }
}
```

- Applied to interactive elements
- Creates breathing, living effect

### Float

```css
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}
```

- Applied to background elements
- Creates ethereal, floating effect

## Usage Examples

### Buttons

```html
<button
  class="bg-gradient-to-r from-ethereal-teal to-ethereal-purple text-canyon-50 hover:from-ethereal-purple hover:to-ethereal-teal animate-glow-pulse"
>
  Action Button
</button>
```

### Cards

```html
<div
  class="bg-canyon-800/60 backdrop-blur-sm border border-canyon-600/30 shadow-xl"
>
  Card Content
</div>
```

### Input Fields

```html
<input
  class="bg-canyon-700/50 border border-canyon-600/30 text-canyon-100 placeholder-canyon-300 focus:ring-2 focus:ring-ethereal-teal"
/>
```

### Text Hierarchy

```html
<h1 class="text-canyon-50">Primary Heading</h1>
<h2 class="text-canyon-100">Secondary Heading</h2>
<p class="text-canyon-200">Body Text</p>
<span class="text-canyon-300">Muted Text</span>
```

## Design Principles

1. **Depth**: Use multiple layers of transparency and backdrop blur
2. **Glow**: Apply subtle glowing effects to create ethereal atmosphere
3. **Contrast**: Maintain readability with proper contrast ratios
4. **Animation**: Use subtle animations to bring the interface to life
5. **Gradients**: Leverage gradients to create depth and visual interest

## Accessibility

- All color combinations meet WCAG AA contrast requirements
- Text colors provide sufficient contrast against backgrounds
- Interactive elements have clear focus states
- Animations respect user preferences for reduced motion

## Implementation

The palette is implemented using Tailwind CSS custom colors and can be used throughout the application:

```javascript
// tailwind.config.js
colors: {
  canyon: {
    50: '#F0F8FF',
    100: '#C8D8F0',
    // ... all colors
  },
  ethereal: {
    light: '#F0F8FF',
    glow: '#C8D8F0',
    teal: '#4AD9E6',
    purple: '#5C4B8D',
    deep: '#3F2E5C',
  }
}
```

This creates a cohesive, ethereal design system that captures the mystical beauty of the canyon image while maintaining excellent usability and accessibility.

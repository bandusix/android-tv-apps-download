# Android TV Apps Download Center - Design Notes

## Design Philosophy: Neo-Brutalism

The website follows a **Neo-Brutalist** design approach, characterized by:

### Visual Style
- **High Contrast Colors**: Bright yellow (#ffed00), electric blue (#0066ff), vivid red (#ff3333), deep green (#00cc66)
- **Thick Black Borders**: 4px solid black borders on all major elements
- **Hard Shadows**: 6px offset box shadows with no blur
- **Zero Border Radius**: All elements have sharp, rectangular corners
- **Bold Typography**: Space Grotesk (900 weight) for headings, IBM Plex Sans (500-600 weight) for body text

### Layout Approach
- **Asymmetric Grid**: Cards are arranged in a responsive grid with slight rotations (±1-2 degrees)
- **Bento Box Style**: Unequal card sizes with prominent spacing
- **Geometric Background**: Mondrian-inspired abstract shapes in the hero section

### Interaction Design
- **Hard Transitions**: 75ms duration with no easing
- **Stamp Effect**: Hover triggers slight translation, click creates "stamp" effect
- **No Smooth Animations**: Embraces the raw, unpolished aesthetic

### Color Assignment
Each app card uses one of four primary colors in rotation:
- Yellow: Kinopoisk, Rutube, Okko
- Red: START, VK Video, Tricolor
- Blue: KION, IVI, Movix
- Green: Yandex Browser, Amediateka

## Technical Implementation

### Typography
- **Headings**: Space Grotesk (400, 500, 600, 700, 900 weights)
- **Body**: IBM Plex Sans (400, 500, 600 weights)
- **Letter Spacing**: Tight (-0.02em for headings, -0.01em for body)

### Custom CSS Classes
- `.brutalist-border`: 4px solid black border
- `.brutalist-shadow`: 6px 6px 0px 0px rgba(0, 0, 0, 1)
- `.brutalist-shadow-sm`: 3px 3px 0px 0px rgba(0, 0, 0, 1)

### Generated Assets
1. **Hero Background**: Geometric Mondrian-style composition
2. **Download Icons**: Bold, hand-drawn style icons (not used in final implementation)
3. **TV Illustration**: Neo-brutalist TV graphic (not used in final implementation)

## App Data Structure

Each app includes:
- Name (English and Russian)
- Description
- Package name
- Google Play Store link
- APK Mirror link (when available)
- Color assignment (yellow/blue/red/green)

## Responsive Design

- **Mobile**: Single column grid
- **Tablet (md)**: 2 column grid
- **Desktop (lg)**: 3 column grid
- All text sizes scale appropriately across breakpoints

## Accessibility Considerations

- High contrast text on colored backgrounds
- Sufficient padding for touch targets
- Clear visual hierarchy with bold typography
- Semantic HTML structure

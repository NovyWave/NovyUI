## Map
🗺️ A component for selecting or displaying a geographic location on an interactive map.
- **Id:** MapLocationPicker
- **Appearance:** An interactive map with a marker or pin. May include search input, zoom controls, and address display.
- **Behavior:** User can move marker, search for location, or click map to select. Updates value and may show address or coordinates.
- **Used in blocks:**
  - [ContactCard](../blocks/ContactCard.md)
### Accessibility
- Provide text alternatives for map content.
- Ensure controls (zoom, search) are keyboard accessible.
- Announce location changes to screen readers.

### Variants
#### Map - **Basic**
- **Id:** Basic
- **Appearance:** Simple map.
- **Behavior:** Basic map interaction.
#### Map - **With search**
- **Id:** WithSearch
- **Appearance:** Includes search input.
- **Behavior:** Searches location.

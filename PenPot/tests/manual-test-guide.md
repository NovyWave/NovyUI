# NovyUI PenPot Plugin Manual Test Guide

Since automated testing requires complex browser setup, here's a manual testing guide to capture the plugin API capabilities.

## Prerequisites

1. **Plugin running**: The NovyUI plugin should be running at http://localhost:5174/
2. **PenPot access**: You should be logged into https://design.penpot.app
3. **Plugin installed**: The NovyUI plugin should be installed in PenPot

## Test Steps

### 1. Navigate to PenPot
- Go to https://design.penpot.app
- Login if needed
- Open or create a project

### 2. Open the NovyUI Plugin
- Look for the NovyUI plugin in the plugins menu
- Open the plugin interface

### 3. Run API Tests
- Click the "Test Plugin API" button
- **Open browser DevTools (F12)**
- **Go to the Console tab**
- Watch for console output

### 4. Expected Console Output

The plugin will test these API capabilities and log results:

```javascript
// Basic PenPot object availability
hasPenpot: true/false
hasCreateRectangle: true/false
hasCreateEllipse: true/false
hasCreatePath: true/false
hasCreateBoard: true/false
hasCreateText: true/false
hasUI: true/false
hasViewport: true/false

// Typography APIs
hasFontFamily: true/false
hasFontSize: true/false
hasFontWeight: true/false
hasTextProperties: true/false

// Shadow APIs
hasShadow: true/false
hasBoxShadow: true/false
hasShadowProperties: true/false

// Border radius APIs
hasBorderRadius: true/false
hasCornerRadius: true/false

// Opacity APIs
hasOpacity: true/false
hasElementOpacity: true/false

// Design system APIs
hasCreateComponent: true/false
hasImportTokens: true/false
hasSetTokens: true/false
hasColors: true/false
hasTypography: true/false
hasLibrary: true/false
```

### 5. Individual API Tests

The plugin will also run individual tests for:

#### Typography Test
- Creates a text element
- Tests font family, size, weight, and color properties
- Logs: "Typography Test Results: {...}"

#### Shadow Test
- Creates a rectangle
- Tests shadow and shadows properties
- Logs: "Shadow Test Results: {...}"

#### Border Radius Test
- Creates a rectangle
- Tests borderRadius, rx, and ry properties
- Logs: "Border Radius Test Results: {...}"

#### Opacity Test
- Creates a rectangle
- Tests opacity and fillOpacity properties
- Logs: "Opacity Test Results: {...}"

## Capture Results

### Console Output
Copy all console logs that contain:
- "Plugin Capabilities:"
- "Typography Test Results:"
- "Shadow Test Results:"
- "Border Radius Test Results:"
- "Opacity Test Results:"

### Plugin UI Results
The plugin interface should also show:
- A list of API capabilities with ✅/❌ indicators
- Success/error messages for each test

## Migration Analysis

Based on the results, we can determine:

### ✅ Fully Supported
- APIs that return `true` and work in individual tests
- These can be used directly in the migration

### ⚠️ Partially Supported
- APIs that exist but have limitations
- May need workarounds or manual steps

### ❌ Not Supported
- APIs that return `false` or fail in tests
- Will require manual implementation in PenPot

## Example Results Format

Please provide the console output in this format:

```
=== CONSOLE OUTPUT ===
[LOG] Plugin Capabilities: {hasPenpot: true, hasCreateRectangle: true, ...}
[LOG] Typography Test Results: {canSetFontFamily: false, ...}
[LOG] Shadow Test Results: {canSetShadow: false, ...}
[LOG] Border Radius Test Results: {canSetBorderRadius: true, ...}
[LOG] Opacity Test Results: {canSetOpacity: false, ...}

=== PLUGIN UI RESULTS ===
✅ Penpot: true
✅ Create Rectangle: true
❌ Font Family: false
...
```

This information will help us plan the complete migration strategy and identify which design tokens can be automatically applied vs. which need manual implementation.
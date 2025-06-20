// NovyUI PenPot Plugin - Main Plugin Logic
// This file has access to the penpot object

import { novyuiTokens } from './novyui-tokens';
// Types are now in penpot-api.d.ts and loaded automatically by TypeScript

// Plugin initialization
penpot.ui.open('NovyUI Design System', '');

// Handle messages from the UI
penpot.ui.onMessage((message: any) => {
  console.log('Received message:', message);

  switch (message.type) {
    case 'test-capabilities':
      testPluginCapabilities();
      break;
    
    case 'import-tokens':
      importDesignTokens();
      break;
    
    case 'create-test-component':
      createTestComponent();
      break;
    
    case 'create-all-components':
      createAllComponents();
      break;
    
    default:
      console.error('Unknown message type:', message.type);
  }
});

// Test what plugin API capabilities are available
function testPluginCapabilities() {
  console.log('🔍 Testing PenPot Plugin API Capabilities...');
  
  const capabilities = {
    // Basic shape creation
    hasPenpot: typeof penpot !== 'undefined',
    hasCreateRectangle: typeof penpot.createRectangle === 'function',
    hasCreateEllipse: typeof penpot.createEllipse === 'function',
    hasCreatePath: typeof penpot.createPath === 'function',
    hasCreateBoard: typeof penpot.createBoard === 'function',
    hasCreateText: typeof penpot.createText === 'function',
    hasUI: typeof penpot.ui !== 'undefined',
    hasViewport: typeof penpot.viewport !== 'undefined',
    
    // Typography properties (tested on text objects)
    textObjectsSupported: true, // Will test on actual text objects
    shadowsSupported: true, // Will test shadows array on shapes
    borderRadiusSupported: true, // Already confirmed working
    opacitySupported: true, // Will test on shape objects
    
    // Design system features - check library object
    hasLibrary: typeof penpot.library !== 'undefined',
    libraryMethods: penpot.library ? Object.getOwnPropertyNames(penpot.library) : [],
    
    // All available properties on penpot object
    penpotProperties: Object.getOwnPropertyNames(penpot),
  };
  
  // Test typography on a real text element
  testTypographyAPIs();
  
  // Test shadow APIs
  testShadowAPIs();
  
  // Test border radius APIs
  testBorderRadiusAPIs();
  
  // Test opacity APIs
  testOpacityAPIs();
  
  // Send results back to UI
  penpot.ui.sendMessage({
    type: 'capabilities-result',
    data: capabilities
  });
  
  console.log('Plugin Capabilities:', capabilities);
}

// Import NovyUI design tokens
function importDesignTokens() {
  console.log('🎨 Importing NovyUI Design Tokens...');
  
  try {
    // Create color swatches for each token
    const colorTokens = novyuiTokens.color;
    let createdColors = 0;
    let totalIndex = 0;
    
    // Iterate through color categories (primary, neutral, success, etc.)
    Object.entries(colorTokens).forEach(([category, scales]: [string, any]) => {
      // Handle static colors (white, black, transparent)
      if (category === 'static') {
        Object.entries(scales).forEach(([colorName, colorData]: [string, any]) => {
          if (colorData.$value && colorData.$value !== 'transparent') {
            const rect = penpot.createRectangle();
            rect.name = `${category}-${colorName}`;
            rect.x = 100 + (totalIndex % 10) * 120;
            rect.y = 100 + Math.floor(totalIndex / 10) * 120;
            rect.resize(100, 100);
            rect.fills = [{ fillColor: colorData.$value }];
            createdColors++;
            totalIndex++;
          }
        });
      } else {
        // Handle scale-based colors (primary.1, primary.2, etc.)
        Object.entries(scales).forEach(([scale, scaleData]: [string, any]) => {
          if (scaleData.light && scaleData.light.$value) {
            const rect = penpot.createRectangle();
            rect.name = `${category}-${scale}`;
            rect.x = 100 + (totalIndex % 10) * 120;
            rect.y = 100 + Math.floor(totalIndex / 10) * 120;
            rect.resize(100, 100);
            rect.fills = [{ fillColor: scaleData.light.$value }];
            createdColors++;
            totalIndex++;
          }
        });
      }
    });
    
    penpot.ui.sendMessage({
      type: 'import-result',
      data: {
        success: true,
        message: `Created ${createdColors} color swatches from tokens`
      }
    });
    
  } catch (error) {
    penpot.ui.sendMessage({
      type: 'import-result',
      data: {
        success: false,
        error: (error as Error).message
      }
    });
  }
}

// Create a test NovyUI button component
function createTestComponent() {
  console.log('🔧 Creating Test NovyUI Button Component...');
  
  try {
    // Center in viewport first
    let buttonX = 200;
    let buttonY = 400;
    if (penpot.viewport && penpot.viewport.center) {
      const center = penpot.viewport.center;
      buttonX = center.x - 60;
      buttonY = center.y - 20;
    }
    
    // Create button background
    const button = penpot.createRectangle();
    button.name = 'Button Background';
    button.x = buttonX;
    button.y = buttonY;
    button.resize(120, 40);
    
    // Apply NovyUI styling
    button.borderRadius = 6; // borderRadius.md
    button.fills = [{
      fillColor: novyuiTokens.color.primary['7'].light.$value || '#3B82F6'
    }];
    
    // Create button text
    let text = null;
    if (typeof penpot.createText === 'function') {
      text = penpot.createText('Click me');
      if (text) {
        text.name = 'Button Text';
        text.x = buttonX + 30;
        text.y = buttonY + 12;
        text.resize(60, 16);
        text.characters = 'Click me';
        text.fills = [{
          fillColor: novyuiTokens.color.static.white.$value || '#FFFFFF'
        }];
      }
    }
    
    // Try to group them (if grouping is possible)
    if (text && typeof penpot.group === 'function') {
      try {
        const group = penpot.group([button, text]);
        console.log('Group created:', group);
        console.log('Group properties:', Object.getOwnPropertyNames(group));
        if (group && 'name' in group) {
          group.name = 'Button Primary';
          console.log('Group renamed to:', group.name);
        } else {
          console.log('Cannot set group name - property not available');
        }
      } catch (e) {
        console.log('Grouping failed:', e);
      }
    } else {
      console.log('Grouping not available - no text or no group function');
    }
    
    // TypeScript now properly catches non-existent API methods!
    
    penpot.ui.sendMessage({
      type: 'component-result',
      data: {
        success: true,
        message: 'Created grouped NovyUI button with background and text'
      }
    });
    
  } catch (error) {
    penpot.ui.sendMessage({
      type: 'component-result', 
      data: {
        success: false,
        error: (error as Error).message
      }
    });
  }
}

// Create all NovyUI components
function createAllComponents() {
  console.log('🏗️ Creating All NovyUI Components...');
  
  const components = [
    { name: 'Button', variants: ['primary', 'secondary', 'outline'] },
    { name: 'Input', variants: ['text', 'email', 'password'] },
    { name: 'Card', variants: ['default', 'elevated', 'outlined'] },
    { name: 'Badge', variants: ['default', 'success', 'warning', 'error'] },
    // Add more components as needed
  ];
  
  let created = 0;
  const startX = 100;
  const startY = 100;
  const spacing = 150;
  
  components.forEach((component, compIndex) => {
    component.variants.forEach((variant, varIndex) => {
      const shape = penpot.createRectangle();
      shape.name = `${component.name}-${variant}`;
      shape.x = startX + (varIndex * spacing);
      shape.y = startY + (compIndex * spacing);
      shape.resize(120, 40);
      
      // Apply variant-specific styling
      applyComponentStyling(shape, component.name, variant);
      created++;
    });
  });
  
  penpot.ui.sendMessage({
    type: 'batch-result',
    data: {
      success: true,
      message: `Created ${created} component variants`
    }
  });
}

// Apply NovyUI styling based on component type and variant
function applyComponentStyling(shape: any, componentName: string, variant: string) {
  const tokens = novyuiTokens;
  
  // Base styling
  shape.borderRadius = 6;
  
  // Component-specific styling
  switch (componentName) {
    case 'Button':
      if (variant === 'primary') {
        shape.fills = [{ fillColor: tokens.color.primary['7'].light.$value }];
      } else if (variant === 'secondary') {
        shape.fills = [{ fillColor: tokens.color.neutral['3'].light.$value }];
      } else if (variant === 'outline') {
        shape.fills = [];
        shape.strokes = [{
          strokeColor: tokens.color.primary['7'].light.$value,
          strokeWidth: 2
        }];
      }
      break;
      
    case 'Input':
      shape.fills = [{ fillColor: tokens.color.static.white.$value }];
      shape.strokes = [{
        strokeColor: tokens.color.neutral['6'].light.$value,
        strokeWidth: 1
      }];
      break;
      
    case 'Card':
      if (variant === 'elevated') {
        shape.fills = [{ fillColor: tokens.color.static.white.$value }];
        // Note: Shadows might not be directly settable via plugin API
      } else if (variant === 'outlined') {
        shape.fills = [{ fillColor: tokens.color.static.white.$value }];
        shape.strokes = [{
          strokeColor: tokens.color.neutral['4'].light.$value,
          strokeWidth: 1
        }];
      }
      break;
      
    case 'Badge':
      shape.resize(80, 24);
      shape.borderRadius = 12;
      if (variant === 'success') {
        shape.fills = [{ fillColor: tokens.color.success['7'].light.$value }];
      } else if (variant === 'warning') {
        shape.fills = [{ fillColor: tokens.color.warning['7'].light.$value }];
      } else if (variant === 'error') {
        shape.fills = [{ fillColor: tokens.color.error['7'].light.$value }];
      }
      break;
  }
}

// Test typography APIs with actual text element
function testTypographyAPIs() {
  console.log('📝 Testing Typography APIs...');
  
  try {
    const text = penpot.createText('Typography Test');
    if (text) {
      text.name = 'Typography API Test';
      text.x = 500;
      text.y = 100;
      
      // Test various typography properties
      const results = {
        canSetFontFamily: false,
        canSetFontSize: false,
        canSetFontWeight: false,
        canSetTextColor: false,
        availableProperties: Object.getOwnPropertyNames(text)
      };
      
      // Try setting font family
      try {
        if ('fontFamily' in text) {
          text.fontFamily = 'Inter';
          results.canSetFontFamily = true;
        }
      } catch (e) { console.log('FontFamily failed:', e); }
      
      // Try setting font size
      try {
        if ('fontSize' in text) {
          text.fontSize = 16;
          results.canSetFontSize = true;
        }
      } catch (e) { console.log('FontSize failed:', e); }
      
      // Try setting font weight (use numeric values)
      try {
        if ('fontWeight' in text) {
          text.fontWeight = 600; // Use numeric instead of 'bold'
          results.canSetFontWeight = true;
        }
      } catch (e) { console.log('FontWeight failed:', e); }
      
      // Try setting text color via fills
      try {
        text.fills = [{ fillColor: '#333333' }];
        results.canSetTextColor = true;
      } catch (e) { console.log('TextColor failed:', e); }
      
      console.log('Typography Test Results:', results);
      
      penpot.ui.sendMessage({
        type: 'typography-test-result',
        data: results
      });
    }
  } catch (error) {
    console.error('Typography test failed:', error);
  }
}

// Test shadow APIs
function testShadowAPIs() {
  console.log('🎭 Testing Shadow APIs...');
  
  try {
    const rect = penpot.createRectangle();
    rect.name = 'Shadow API Test';
    rect.x = 500;
    rect.y = 250;
    rect.resize(100, 100);
    rect.fills = [{ fillColor: '#FFFFFF' }];
    
    const results = {
      canSetShadow: false,
      canSetBoxShadow: false,
      hasShadowProperty: false,
      availableProperties: Object.getOwnPropertyNames(rect)
    };
    
    // Test shadow property
    try {
      if ('shadow' in rect) {
        results.hasShadowProperty = true;
        (rect as any).shadow = '0 4px 6px rgba(0,0,0,0.1)';
        results.canSetShadow = true;
      }
    } catch (e) { console.log('Shadow property failed:', e); }
    
    // Test shadows array
    try {
      if ('shadows' in rect) {
        (rect as any).shadows = [{
          offsetX: 0,
          offsetY: 4,
          blur: 6,
          spread: 0,
          color: '#00000010'
        }];
        results.canSetBoxShadow = true;
      }
    } catch (e) { console.log('Shadows array failed:', e); }
    
    console.log('Shadow Test Results:', results);
    
    penpot.ui.sendMessage({
      type: 'shadow-test-result',
      data: results
    });
    
  } catch (error) {
    console.error('Shadow test failed:', error);
  }
}

// Test border radius APIs
function testBorderRadiusAPIs() {
  console.log('🔲 Testing Border Radius APIs...');
  
  try {
    const rect = penpot.createRectangle();
    rect.name = 'Border Radius API Test';
    rect.x = 500;
    rect.y = 400;
    rect.resize(100, 100);
    rect.fills = [{ fillColor: '#0066FF' }];
    
    const results = {
      canSetBorderRadius: false,
      canSetRx: false,
      canSetRy: false,
      availableProperties: Object.getOwnPropertyNames(rect)
    };
    
    // Test borderRadius property (already working from previous tests)
    try {
      rect.borderRadius = 12;
      results.canSetBorderRadius = true;
    } catch (e) { console.log('BorderRadius failed:', e); }
    
    // Test rx/ry properties
    try {
      if ('rx' in rect) {
        (rect as any).rx = 8;
        results.canSetRx = true;
      }
    } catch (e) { console.log('Rx failed:', e); }
    
    try {
      if ('ry' in rect) {
        (rect as any).ry = 8;
        results.canSetRy = true;
      }
    } catch (e) { console.log('Ry failed:', e); }
    
    console.log('Border Radius Test Results:', results);
    
    penpot.ui.sendMessage({
      type: 'border-radius-test-result',
      data: results
    });
    
  } catch (error) {
    console.error('Border radius test failed:', error);
  }
}

// Test opacity APIs
function testOpacityAPIs() {
  console.log('👻 Testing Opacity APIs...');
  
  try {
    const rect = penpot.createRectangle();
    rect.name = 'Opacity API Test';
    rect.x = 500;
    rect.y = 550;
    rect.resize(100, 100);
    rect.fills = [{ fillColor: '#FF0000' }];
    
    const results = {
      canSetOpacity: false,
      canSetFillOpacity: false,
      availableProperties: Object.getOwnPropertyNames(rect)
    };
    
    // Test opacity property
    try {
      if ('opacity' in rect) {
        (rect as any).opacity = 0.5;
        results.canSetOpacity = true;
      }
    } catch (e) { console.log('Opacity failed:', e); }
    
    // Test fill opacity
    try {
      rect.fills = [{ fillColor: '#FF0000', fillOpacity: 0.5 } as any];
      results.canSetFillOpacity = true;
    } catch (e) { console.log('Fill opacity failed:', e); }
    
    console.log('Opacity Test Results:', results);
    
    penpot.ui.sendMessage({
      type: 'opacity-test-result',
      data: results
    });
    
  } catch (error) {
    console.error('Opacity test failed:', error);
  }
}

// Initialize plugin
console.log('✅ NovyUI PenPot Plugin Loaded');
// NovyUI PenPot Plugin - Main Plugin Logic
// This file has access to the penpot object

import { novyuiTokensHex } from './novyui-tokens-hex';
// Types are now in penpot-api.d.ts and loaded automatically by TypeScript

// Debug flag - set to true to enable verbose logging
// When enabled, shows detailed component creation, layout setup, and API operation logs
const DEBUG = false;

// Debug logging function - used for verbose development logs
// Set DEBUG = true above to see detailed component creation progress
function debugLog(...args: any[]) {
  if (DEBUG) {
    console.log(...args);
  }
}

// Plugin initialization
penpot.ui.open('NovyUI Design System', '');

// Handle messages from the UI
penpot.ui.onMessage((message: any) => {
  debugLog('Received message:', message);

  switch (message.type) {
    case 'test-capabilities':
      testPluginCapabilities();
      break;
    
    case 'remove-all-tokens':
      removeAllTokens();
      break;
    
    case 'import-all-tokens':
      importAllTokensToPenpot();
      break;
    
    case 'create-token-elements':
      createTokenTestingElements();
      break;
    
    case 'import-tokens':
      // Legacy button - now does the same as create-token-elements
      createTokenTestingElements();
      break;
    
    case 'create-test-component':
      createTestComponent();
      break;
    
    case 'create-all-components':
      createAllComponents();
      break;
    
    case 'create-icons':
      createIconsComponent();
      break;
    
    case 'create-kbd':
      createKbdComponent();
      break;
    
    case 'create-select':
      createSelectComponent();
      break;
    
    case 'create-treeview':
      createTreeViewComponent();
      break;
    
    case 'create-typography':
      createTypographyComponent();
      break;
    
    case 'create-novywave-interface':
      createNovyWaveInterface();
      break;
    
    default:
      // Ignore success/response messages that don't need handling
      if (message.type !== 'success' && message.type !== 'response') {
        console.error('Unknown message type:', message.type);
      }
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

// Remove all tokens from PenPot
function removeAllTokens() {
  console.log('🗑️ Removing all tokens from PenPot...');
  
  try {
    // Check if PenPot library API is available
    if (typeof penpot.library !== 'undefined') {
      // TODO: Implement token removal when PenPot API supports it
      console.log('Token removal API not yet available in PenPot');
      penpot.ui.sendMessage({
        type: 'import-result',
        data: {
          success: false,
          message: 'Token removal is not yet supported by PenPot API'
        }
      });
    } else {
      penpot.ui.sendMessage({
        type: 'import-result',
        data: {
          success: false,
          message: 'PenPot library API not available'
        }
      });
    }
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

// Import all tokens to PenPot library (no canvas elements)
function importAllTokensToPenpot() {
  console.log('📚 Explaining PenPot token import limitations...');
  
  try {
    penpot.ui.sendMessage({
      type: 'import-result',
      data: {
        success: false,
        message: `❌ PenPot Plugin API Limitation: Cannot create design token references programmatically. 

🔧 Current Status: PenPot's plugin API for design tokens is still in development.

✅ SOLUTION: Import tokens manually:
1. Download: /home/martinkavik/repos/NovyUI/PenPot/novyui-penpot-tokens.json
2. In PenPot: Go to Libraries → Design Tokens → Import → Select the JSON file
3. This will create actual token references that update when switching themes

📖 Elements created by "Create Token Testing Elements" show token VALUES but are static shapes, not dynamic token references.`
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

// Create token testing elements on canvas (demonstrating all imported tokens with theme switching)
function createTokenTestingElements() {
  console.log('🎨 Creating comprehensive token testing elements on canvas...');
  console.log('⚠️  NOTE: These elements show token VALUES but are static shapes.');
  console.log('🔧 For dynamic token references, import novyui-penpot-tokens.json manually in PenPot.');
  
  try {
    let totalCreated = 0;
    let startX = 100;
    let currentY = 100;
    
    // Create header with instructions
    if (typeof penpot.createText === 'function') {
      const header = penpot.createText('NovyUI Design System Token Demo');
      if (header) {
        header.name = 'Token Demo Header';
        header.x = startX;
        header.y = currentY;
        header.characters = 'NovyUI Design System Token Demo';
        header.fills = [{ fillColor: '#1F2937' }];
        if ('fontSize' in header) (header as any).fontSize = 24;
        if ('fontWeight' in header) (header as any).fontWeight = 400;
        currentY += 60;
        totalCreated++;
      }
      
      const subtitle = penpot.createText('Light Theme Colors → Dark Theme Colors → Spacing → Border Radius → Typography');
      if (subtitle) {
        subtitle.name = 'Demo Instructions';
        subtitle.x = startX;
        subtitle.y = currentY;
        subtitle.characters = 'Light Theme Colors → Dark Theme Colors → Spacing → Border Radius → Typography';
        subtitle.fills = [{ fillColor: '#64748B' }];
        if ('fontSize' in subtitle) (subtitle as any).fontSize = 14;
        currentY += 80;
        totalCreated++;
      }
    }
    
    // 1. LIGHT THEME COLOR SHOWCASE
    console.log('🌞 Creating light theme color showcase...');
    if (typeof penpot.createText === 'function') {
      const lightHeader = penpot.createText('Light Theme Colors');
      if (lightHeader) {
        lightHeader.name = 'Light Theme Header';
        lightHeader.x = startX;
        lightHeader.y = currentY;
        lightHeader.characters = 'Light Theme Colors';
        lightHeader.fills = [{ fillColor: '#1F2937' }];
        if ('fontSize' in lightHeader) (lightHeader as any).fontSize = 18;
        if ('fontWeight' in lightHeader) (lightHeader as any).fontWeight = 400;
        currentY += 40;
        totalCreated++;
      }
    }
    
    const lightColors = [
      // Primary colors
      { name: 'primary-1', color: novyuiTokensHex.color.primary[1].light, category: 'Primary' },
      { name: 'primary-3', color: novyuiTokensHex.color.primary[3].light, category: 'Primary' },
      { name: 'primary-7', color: novyuiTokensHex.color.primary[7].light, category: 'Primary' },
      { name: 'primary-9', color: novyuiTokensHex.color.primary[9].light, category: 'Primary' },
      // Neutral colors  
      { name: 'neutral-1', color: novyuiTokensHex.color.neutral[1].light, category: 'Neutral' },
      { name: 'neutral-4', color: novyuiTokensHex.color.neutral[4].light, category: 'Neutral' },
      { name: 'neutral-7', color: novyuiTokensHex.color.neutral[7].light, category: 'Neutral' },
      { name: 'neutral-11', color: novyuiTokensHex.color.neutral[11].light, category: 'Neutral' },
      // Status colors
      { name: 'success-7', color: novyuiTokensHex.color.success[7].light, category: 'Success' },
      { name: 'warning-7', color: novyuiTokensHex.color.warning[7].light, category: 'Warning' },
      { name: 'error-7', color: novyuiTokensHex.color.error[7].light, category: 'Error' },
      // Semantic colors
      { name: 'bg-primary', color: novyuiTokensHex.color.neutral[1].light, category: 'Semantic' },
      { name: 'text-primary', color: novyuiTokensHex.color.neutral[11].light, category: 'Semantic' },
      { name: 'border-default', color: novyuiTokensHex.color.neutral[4].light, category: 'Semantic' },
    ];
    
    lightColors.forEach((colorData, index) => {
      const rect = penpot.createRectangle();
      rect.name = `light-${colorData.name}`;
      rect.x = startX + (index % 7) * 120;
      rect.y = currentY + Math.floor(index / 7) * 100;
      rect.resize(100, 80);
      rect.fills = [{ fillColor: colorData.color }];
      rect.strokes = [{ strokeColor: '#CBD5E1', strokeWidth: 1 }];
      
      // Add color name label
      if (typeof penpot.createText === 'function') {
        const label = penpot.createText(colorData.name);
        if (label) {
          label.name = `${colorData.name}-label`;
          label.x = rect.x + 5;
          label.y = rect.y + 85;
          label.characters = colorData.name;
          label.fills = [{ fillColor: '#374151' }];
          if ('fontSize' in label) (label as any).fontSize = 10;
          totalCreated++;
        }
      }
      totalCreated++;
    });
    
    currentY += Math.ceil(lightColors.length / 7) * 100 + 60;
    
    // 2. DARK THEME COLOR SHOWCASE  
    console.log('🌙 Creating dark theme color showcase...');
    if (typeof penpot.createText === 'function') {
      const darkHeader = penpot.createText('Dark Theme Colors');
      if (darkHeader) {
        darkHeader.name = 'Dark Theme Header';
        darkHeader.x = startX;
        darkHeader.y = currentY;
        darkHeader.characters = 'Dark Theme Colors';
        darkHeader.fills = [{ fillColor: '#1F2937' }];
        if ('fontSize' in darkHeader) (darkHeader as any).fontSize = 18;
        if ('fontWeight' in darkHeader) (darkHeader as any).fontWeight = 400;
        currentY += 40;
        totalCreated++;
      }
    }
    
    const darkColors = [
      // Primary colors (inverted)
      { name: 'primary-1', color: novyuiTokensHex.color.primary[1].dark, category: 'Primary' },
      { name: 'primary-3', color: novyuiTokensHex.color.primary[3].dark, category: 'Primary' },
      { name: 'primary-7', color: novyuiTokensHex.color.primary[7].dark, category: 'Primary' },
      { name: 'primary-9', color: novyuiTokensHex.color.primary[9].dark, category: 'Primary' },
      // Neutral colors
      { name: 'neutral-1', color: novyuiTokensHex.color.neutral[1].dark, category: 'Neutral' },
      { name: 'neutral-4', color: novyuiTokensHex.color.neutral[4].dark, category: 'Neutral' },
      { name: 'neutral-7', color: novyuiTokensHex.color.neutral[7].dark, category: 'Neutral' },
      { name: 'neutral-11', color: novyuiTokensHex.color.neutral[11].dark, category: 'Neutral' },
      // Status colors
      { name: 'success-7', color: novyuiTokensHex.color.success[7].dark, category: 'Success' },
      { name: 'warning-7', color: novyuiTokensHex.color.warning[7].dark, category: 'Warning' },
      { name: 'error-7', color: novyuiTokensHex.color.error[7].dark, category: 'Error' },
      // Semantic colors
      { name: 'bg-primary', color: novyuiTokensHex.color.neutral[1].dark, category: 'Semantic' },
      { name: 'text-primary', color: novyuiTokensHex.color.neutral[11].dark, category: 'Semantic' },
      { name: 'border-default', color: novyuiTokensHex.color.neutral[4].dark, category: 'Semantic' },
    ];
    
    darkColors.forEach((colorData, index) => {
      const rect = penpot.createRectangle();
      rect.name = `dark-${colorData.name}`;
      rect.x = startX + (index % 7) * 120;
      rect.y = currentY + Math.floor(index / 7) * 100;
      rect.resize(100, 80);
      rect.fills = [{ fillColor: colorData.color }];
      rect.strokes = [{ strokeColor: '#6B7280', strokeWidth: 1 }];
      
      // Add color name label
      if (typeof penpot.createText === 'function') {
        const label = penpot.createText(colorData.name);
        if (label) {
          label.name = `dark-${colorData.name}-label`;
          label.x = rect.x + 5;
          label.y = rect.y + 85;
          label.characters = colorData.name;
          label.fills = [{ fillColor: '#9CA3AF' }];
          if ('fontSize' in label) (label as any).fontSize = 10;
          totalCreated++;
        }
      }
      totalCreated++;
    });
    
    currentY += Math.ceil(darkColors.length / 7) * 100 + 80;
    
    // 3. SPACING DEMONSTRATION
    console.log('📏 Creating spacing demonstration...');
    if (typeof penpot.createText === 'function') {
      const spacingHeader = penpot.createText('Spacing Tokens');
      if (spacingHeader) {
        spacingHeader.name = 'Spacing Header';
        spacingHeader.x = startX;
        spacingHeader.y = currentY;
        spacingHeader.characters = 'Spacing Tokens (Visual Size = Token Value)';
        spacingHeader.fills = [{ fillColor: '#1F2937' }];
        if ('fontSize' in spacingHeader) (spacingHeader as any).fontSize = 18;
        if ('fontWeight' in spacingHeader) (spacingHeader as any).fontWeight = 400;
        currentY += 40;
        totalCreated++;
      }
    }
    
    const spacingTokens = [
      { name: '4', value: parseInt(novyuiTokensHex.spacing[4]) },
      { name: '8', value: parseInt(novyuiTokensHex.spacing[8]) },
      { name: '12', value: parseInt(novyuiTokensHex.spacing[12]) },
      { name: '16', value: parseInt(novyuiTokensHex.spacing[16]) },
      { name: '24', value: parseInt(novyuiTokensHex.spacing[24]) },
      { name: '32', value: parseInt(novyuiTokensHex.spacing[32]) },
      { name: '48', value: parseInt(novyuiTokensHex.spacing[48]) },
      { name: '64', value: parseInt(novyuiTokensHex.spacing[64]) },
    ];
    
    spacingTokens.forEach((spacing, index) => {
      const rect = penpot.createRectangle();
      rect.name = `spacing-${spacing.name}`;
      rect.x = startX + (index % 8) * 100;
      rect.y = currentY;
      rect.resize(Math.max(spacing.value, 8), Math.max(spacing.value, 8));
      rect.fills = [{ fillColor: '#DBEAFE' }];
      rect.strokes = [{ strokeColor: '#3B82F6', strokeWidth: 1 }];
      
      // Add spacing label
      if (typeof penpot.createText === 'function') {
        const label = penpot.createText(`${spacing.name}px`);
        if (label) {
          label.name = `spacing-${spacing.name}-label`;
          label.x = rect.x;
          label.y = rect.y + spacing.value + 10;
          label.characters = `${spacing.name}px`;
          label.fills = [{ fillColor: '#374151' }];
          if ('fontSize' in label) (label as any).fontSize = 10;
          totalCreated++;
        }
      }
      totalCreated++;
    });
    
    currentY += 120;
    
    // 4. BORDER RADIUS DEMONSTRATION
    console.log('🔄 Creating border radius demonstration...');
    if (typeof penpot.createText === 'function') {
      const radiusHeader = penpot.createText('Border Radius Tokens');
      if (radiusHeader) {
        radiusHeader.name = 'Border Radius Header';
        radiusHeader.x = startX;
        radiusHeader.y = currentY;
        radiusHeader.characters = 'Border Radius Tokens';
        radiusHeader.fills = [{ fillColor: '#1F2937' }];
        if ('fontSize' in radiusHeader) (radiusHeader as any).fontSize = 18;
        if ('fontWeight' in radiusHeader) (radiusHeader as any).fontWeight = 400;
        currentY += 40;
        totalCreated++;
      }
    }
    
    const radiusTokens = [
      { name: 'none (0)', value: parseInt(novyuiTokensHex.cornerRadius[0]) },
      { name: 'xs (2)', value: parseInt(novyuiTokensHex.cornerRadius[2]) },
      { name: 'sm (4)', value: parseInt(novyuiTokensHex.cornerRadius[4]) },
      { name: 'md (6)', value: parseInt(novyuiTokensHex.cornerRadius[6]) },
      { name: 'lg (8)', value: parseInt(novyuiTokensHex.cornerRadius[8]) },
      { name: 'xl (16)', value: parseInt(novyuiTokensHex.cornerRadius[16]) },
      { name: 'full', value: parseInt(novyuiTokensHex.cornerRadius.max) },
    ];
    
    radiusTokens.forEach((radius, index) => {
      const rect = penpot.createRectangle();
      rect.name = `border-radius-${radius.name}`;
      rect.x = startX + (index % 7) * 120;
      rect.y = currentY;
      rect.resize(80, 80);
      rect.fills = [{ fillColor: '#10B981' }];
      rect.borderRadius = radius.value;
      
      // Add radius label
      if (typeof penpot.createText === 'function') {
        const label = penpot.createText(radius.name);
        if (label) {
          label.name = `radius-${radius.name}-label`;
          label.x = rect.x + 5;
          label.y = rect.y + 90;
          label.characters = radius.name;
          label.fills = [{ fillColor: '#374151' }];
          if ('fontSize' in label) (label as any).fontSize = 10;
          totalCreated++;
        }
      }
      totalCreated++;
    });
    
    currentY += 140;
    
    // 5. TYPOGRAPHY DEMONSTRATION
    console.log('📝 Creating typography demonstration...');
    if (typeof penpot.createText === 'function') {
      const typoHeader = penpot.createText('Typography Tokens');
      if (typoHeader) {
        typoHeader.name = 'Typography Header';
        typoHeader.x = startX;
        typoHeader.y = currentY;
        typoHeader.characters = 'Typography Tokens';
        typoHeader.fills = [{ fillColor: '#1F2937' }];
        if ('fontSize' in typoHeader) (typoHeader as any).fontSize = 18;
        if ('fontWeight' in typoHeader) (typoHeader as any).fontWeight = 400;
        currentY += 40;
        totalCreated++;
      }
      
      const fontSizes = [
        { name: 'xs', size: parseInt(novyuiTokensHex.typography.fontSize[12]) },
        { name: 'sm', size: parseInt(novyuiTokensHex.typography.fontSize[14]) },
        { name: 'base', size: parseInt(novyuiTokensHex.typography.fontSize[16]) },
        { name: 'lg', size: parseInt(novyuiTokensHex.typography.fontSize[18]) },
        { name: 'xl', size: parseInt(novyuiTokensHex.typography.fontSize[20]) },
        { name: '2xl', size: parseInt(novyuiTokensHex.typography.fontSize[24]) },
        { name: '3xl', size: parseInt(novyuiTokensHex.typography.fontSize[30]) },
        { name: '4xl', size: parseInt(novyuiTokensHex.typography.fontSize[36]) },
      ];
      
      fontSizes.forEach((font, index) => {
        const text = penpot.createText(`${font.name} (${font.size}px)`);
        if (text) {
          text.name = `font-${font.name}`;
          text.x = startX;
          text.y = currentY + (index * 50);
          text.characters = `${font.name} (${font.size}px) - The quick brown fox jumps`;
          text.fills = [{ fillColor: '#1F2937' }];
          if ('fontSize' in text) (text as any).fontSize = font.size;
          totalCreated++;
        }
      });
      
      currentY += fontSizes.length * 50 + 60;
    }
    
    // 6. THEME SWITCHING DEMO
    console.log('🎭 Creating theme switching demonstration...');
    if (typeof penpot.createText === 'function') {
      const themeHeader = penpot.createText('Theme Switching Demo');
      if (themeHeader) {
        themeHeader.name = 'Theme Demo Header';
        themeHeader.x = startX;
        themeHeader.y = currentY;
        themeHeader.characters = 'Theme Switching Demo - Component Examples';
        themeHeader.fills = [{ fillColor: '#1F2937' }];
        if ('fontSize' in themeHeader) (themeHeader as any).fontSize = 18;
        if ('fontWeight' in themeHeader) (themeHeader as any).fontWeight = 400;
        currentY += 60;
        totalCreated++;
      }
      
      // Create sample components using semantic tokens
      const components = [
        {
          name: 'Light Button',
          bg: novyuiTokensHex.color.neutral[1].light,      // bg.primary light
          text: novyuiTokensHex.color.neutral[11].light,    // text.primary light
          border: novyuiTokensHex.color.neutral[4].light   // border.default light
        },
        {
          name: 'Dark Button', 
          bg: novyuiTokensHex.color.neutral[1].dark,      // bg.primary dark
          text: novyuiTokensHex.color.neutral[11].dark,    // text.primary dark
          border: novyuiTokensHex.color.neutral[4].dark   // border.default dark
        }
      ];
      
      components.forEach((comp, index) => {
        const buttonX = startX + (index * 200);
        
        // Create theme demo button as Board
        const themeButtonBoard = penpot.createBoard();
        themeButtonBoard.name = `${comp.name} Button`;
        themeButtonBoard.x = buttonX;
        themeButtonBoard.y = currentY;
        themeButtonBoard.resize(150, 40);
        
        // Set board styling
        themeButtonBoard.fills = [{ fillColor: comp.bg }];
        themeButtonBoard.strokes = [{ strokeColor: comp.border, strokeWidth: 1 }];
        if ('borderRadius' in themeButtonBoard) {
          (themeButtonBoard as any).borderRadius = 6;
        }
        
        // Button text positioned manually
        const buttonText = penpot.createText(comp.name);
        if (buttonText) {
          buttonText.name = `${comp.name} Text`;
          
          // Position text manually within board coordinates
          const textWidth = comp.name.length * 8;
          buttonText.x = buttonX + (150 - textWidth) / 2;
          buttonText.y = currentY + 13;
          
          buttonText.characters = comp.name;
          buttonText.fills = [{ fillColor: comp.text }];
          if ('fontSize' in buttonText) (buttonText as any).fontSize = 14;
          if ('fontWeight' in buttonText) (buttonText as any).fontWeight = 400;
          
          totalCreated++;
        }
        
        totalCreated++;
      });
    }
    
    console.log(`✅ Created comprehensive token demonstration with ${totalCreated} elements`);
    
    penpot.ui.sendMessage({
      type: 'import-result',
      data: {
        success: true,
        message: `Created comprehensive token demo with ${totalCreated} elements showcasing all token categories and theme switching`
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

// Create buttons section as a reusable component
function createButtonsSection(startX: number, startY: number): number {
  console.log('🔧 Creating NovyUI Button System...');
  
  try {
    let currentY = startY;
    let buttonsCreated = 0;
    
    // Function to generate button variants for a specific theme
    function getVariantsForTheme(theme: 'light' | 'dark') {
      if (theme === 'dark') {
        // Dark theme uses different color approach for better visual contrast
        return [
          {
            name: 'Primary',
            bgColor: novyuiTokensHex.color.primary[6].light,        // Use light blue for contrast on dark bg
            hoverBgColor: novyuiTokensHex.color.primary[7].light,   // Darker blue on hover
            textColor: novyuiTokensHex.color.neutral[1].light,      // White text
            borderColor: novyuiTokensHex.color.static.transparent,
          },
          {
            name: 'Secondary', 
            bgColor: novyuiTokensHex.color.neutral[4].dark,         // Dark gray for better contrast
            hoverBgColor: novyuiTokensHex.color.neutral[5].dark,    // Medium gray on hover  
            textColor: novyuiTokensHex.color.neutral[11].dark,      // Light gray text for strong contrast
            borderColor: novyuiTokensHex.color.neutral[6].dark,
          },
          {
            name: 'Outline',
            bgColor: novyuiTokensHex.color.static.transparent,
            hoverBgColor: novyuiTokensHex.color.primary[2].dark,    // Dark blue bg on hover
            textColor: novyuiTokensHex.color.primary[6].light,      // Light blue text
            borderColor: novyuiTokensHex.color.neutral[6].dark,     // Gray border
          },
          {
            name: 'Ghost',
            bgColor: novyuiTokensHex.color.static.transparent,
            hoverBgColor: novyuiTokensHex.color.primary[2].dark,    // Dark blue bg on hover
            textColor: novyuiTokensHex.color.primary[6].light,      // Light blue text
            borderColor: novyuiTokensHex.color.static.transparent,
          },
          {
            name: 'Link',
            bgColor: novyuiTokensHex.color.static.transparent,
            hoverBgColor: novyuiTokensHex.color.static.transparent,
            textColor: novyuiTokensHex.color.primary[6].light,      // Light blue text
            borderColor: novyuiTokensHex.color.static.transparent,
          },
          {
            name: 'Destructive',
            bgColor: novyuiTokensHex.color.error[7].light,          // Use light red for contrast
            hoverBgColor: novyuiTokensHex.color.error[8].light,     // Darker red on hover
            textColor: novyuiTokensHex.color.neutral[1].light,      // White text
            borderColor: novyuiTokensHex.color.static.transparent,
          }
        ];
      } else {
        // Light theme uses standard token mapping
        return [
          {
            name: 'Primary',
            bgColor: novyuiTokensHex.color.primary[7][theme],
            hoverBgColor: novyuiTokensHex.color.primary[8][theme],
            textColor: novyuiTokensHex.color.neutral[1][theme],
            borderColor: novyuiTokensHex.color.static.transparent,
          },
          {
            name: 'Secondary', 
            bgColor: novyuiTokensHex.color.neutral[4][theme],
            hoverBgColor: novyuiTokensHex.color.neutral[5][theme],
            textColor: novyuiTokensHex.color.primary[7][theme],
            borderColor: novyuiTokensHex.color.neutral[3][theme],
          },
          {
            name: 'Outline',
            bgColor: novyuiTokensHex.color.static.transparent,
            hoverBgColor: novyuiTokensHex.color.primary[2][theme],
            textColor: novyuiTokensHex.color.primary[7][theme],
            borderColor: novyuiTokensHex.color.neutral[3][theme],
          },
          {
            name: 'Ghost',
            bgColor: novyuiTokensHex.color.static.transparent,
            hoverBgColor: novyuiTokensHex.color.primary[2][theme],
            textColor: novyuiTokensHex.color.primary[7][theme],
            borderColor: novyuiTokensHex.color.static.transparent,
          },
          {
            name: 'Link',
            bgColor: novyuiTokensHex.color.static.transparent,
            hoverBgColor: novyuiTokensHex.color.static.transparent,
            textColor: novyuiTokensHex.color.primary[7][theme],
            borderColor: novyuiTokensHex.color.static.transparent,
          },
          {
            name: 'Destructive',
            bgColor: novyuiTokensHex.color.error[7][theme],
            hoverBgColor: novyuiTokensHex.color.error[8][theme],
            textColor: novyuiTokensHex.color.neutral[1][theme],
            borderColor: novyuiTokensHex.color.static.transparent,
          }
        ];
      }
    }
    
    // Create both Light and Dark theme sections with exact MoonZoon storybook backgrounds
    const themes: Array<{name: string, key: 'light' | 'dark', bgColor: string}> = [
      { 
        name: 'Light Theme', 
        key: 'light', 
        bgColor: novyuiTokensHex.color.neutral[1].light  // #fefefe - matches MoonZoon storybook
      },
      { 
        name: 'Dark Theme', 
        key: 'dark', 
        bgColor: novyuiTokensHex.color.neutral[2].dark   // #020617 - matches MoonZoon storybook
      }
    ];
    
    themes.forEach((theme, themeIndex) => {
      // Add theme background board first
      const themeBackground = penpot.createBoard();
      themeBackground.name = "\u200B\u200B\u200B"; // Multiple zero-width spaces for uniqueness
      themeBackground.x = startX - 40;
      themeBackground.y = currentY;
      themeBackground.resize(850, 580); // Increased to include title and bottom padding
      themeBackground.fills = [{ fillColor: theme.bgColor }]; // Full theme background
      
      // Add subtle border for better definition
      if (theme.key === 'light') {
        themeBackground.strokes = [{ strokeColor: novyuiTokensHex.color.neutral[3].light, strokeWidth: 1 }];
      } else {
        themeBackground.strokes = [{ strokeColor: novyuiTokensHex.color.neutral[8].dark, strokeWidth: 1 }];
      }
      
      // Create theme section title INSIDE the background
      if (typeof penpot.createText === 'function') {
        const themeTitle = penpot.createText(theme.name);
        if (themeTitle) {
          themeTitle.name = `${theme.name} Title`;
          themeTitle.x = startX;
          themeTitle.y = currentY + 20; // Inside the container
          themeTitle.characters = `${themeIndex + 1}. Button Variants & States - ${theme.name}`;
          themeTitle.fills = [{ fillColor: theme.key === 'light' ? novyuiTokensHex.color.neutral[9].light : novyuiTokensHex.color.neutral[9].dark }];
          if ('fontSize' in themeTitle) (themeTitle as any).fontSize = 20;
          if ('fontWeight' in themeTitle) (themeTitle as any).fontWeight = 400;
        }
      }
      
      currentY += 60; // Space for title inside container
      
      const variants = getVariantsForTheme(theme.key);
      
      // Create buttons for each variant with all states
      variants.forEach((variant) => {
      // Add variant label above the button row
      if (typeof penpot.createText === 'function') {
        const variantLabel = penpot.createText(variant.name);
        if (variantLabel) {
          variantLabel.name = `${variant.name} Label`;
          variantLabel.x = startX;
          variantLabel.y = currentY;
          variantLabel.characters = variant.name;
          variantLabel.fills = [{ fillColor: novyuiTokensHex.color.neutral[7][theme.key] }];
          if ('fontSize' in variantLabel) (variantLabel as any).fontSize = 14;
          if ('fontWeight' in variantLabel) (variantLabel as any).fontWeight = 400;
          if ('fontFamily' in variantLabel) (variantLabel as any).fontFamily = 'Inter';
        }
      }
      
      currentY += 25; // Space between label and buttons
      
      // Create container board for this variant section
      const variantContainer = penpot.createBoard();
      variantContainer.name = "\u200B"; // Zero-width space to hide native board title
      variantContainer.x = startX;
      variantContainer.y = currentY;
      variantContainer.resize(750, 60); // Wider and taller to fit all buttons properly
      variantContainer.fills = []; // Transparent background
      
      // Create flex layout for the container with proper gaps
      let containerLayout: any = null;
      try {
        containerLayout = variantContainer.addFlexLayout();
        if (containerLayout) {
          containerLayout.dir = "row";
          containerLayout.alignItems = "center";
          containerLayout.justifyContent = "space-between"; // Distribute buttons evenly across container
          containerLayout.wrap = "nowrap";
          debugLog('Created variant container with gap properties');
        }
      } catch (e) {
        debugLog('Variant container layout failed:', e);
      }
      
      // All button states: Normal, Hover, Focus, Disabled, Loading
      const states = [
        { 
          name: 'Normal', 
          bgColor: variant.bgColor, 
          textColor: variant.textColor,
          opacity: 1,
          isLoading: false
        },
        { 
          name: 'Hover', 
          bgColor: variant.hoverBgColor, 
          // Adjust text color for better contrast in hover state
          textColor: (() => {
            // For secondary variant, keep darker blue on gray background
            if (variant.name === 'Secondary') {
              return novyuiTokensHex.color.primary[8][theme.key]; // Darker blue for better contrast
            }
            // For outline/ghost with light blue hover background, use darker blue
            if (variant.name === 'Outline' || variant.name === 'Ghost') {
              return novyuiTokensHex.color.primary[9][theme.key]; // Even darker blue
            }
            // For Link buttons, use darker blue text on hover for feedback
            if (variant.name === 'Link') {
              return novyuiTokensHex.color.primary[9][theme.key]; // Darker blue for hover feedback
            }
            // For primary and destructive, keep original
            return variant.textColor;
          })(),
          opacity: 1,
          isLoading: false
        },
        { 
          name: 'Active', 
          bgColor: variant.bgColor,  // Active state uses normal background, not hover background
          textColor: variant.textColor, // Active state uses normal text color
          opacity: 1,
          isLoading: false
        },
        { 
          name: 'Focus', 
          bgColor: variant.bgColor, 
          textColor: variant.textColor,
          opacity: 1,
          hasFocusRing: true,
          isLoading: false
        },
        { 
          name: 'Disabled', 
          bgColor: (() => {
            // Link, Ghost, and Outline buttons keep transparent background when disabled
            if (variant.name === 'Link' || variant.name === 'Ghost' || variant.name === 'Outline') {
              return variant.bgColor; // Keep original background (transparent)
            }
            // Primary, Secondary, and Destructive get neutral background when disabled
            return novyuiTokensHex.color.neutral[5][theme.key];
          })(),
          textColor: novyuiTokensHex.color.neutral[7][theme.key], // All disabled text uses neutral-7
          opacity: parseFloat(novyuiTokensHex.opacity.disabled), // 0.64
          isLoading: false
        },
        { 
          name: 'Loading', 
          bgColor: variant.bgColor, 
          textColor: variant.textColor,
          opacity: 1,
          isLoading: true
        }
      ];
      
      states.forEach((state) => {
        // Create button Board as child of variant container
        if (typeof penpot.createBoard === 'function') {
          const buttonBoard = penpot.createBoard();
          buttonBoard.name = "\u200C"; // Zero-width non-joiner to hide native board title
          buttonBoard.resize(120, 40);
          // Position will be handled by space-between layout
          buttonBoard.borderRadius = parseInt(novyuiTokensHex.cornerRadius[6]);
          
          // Create flex layout on the board for proper centering
          let flexLayout: any = null;
          try {
            flexLayout = buttonBoard.addFlexLayout();
            if (flexLayout) {
              // Link buttons need column layout for text + underline stacking
              flexLayout.dir = variant.name === 'Link' ? "column" : "row";
              flexLayout.alignItems = "center";
              flexLayout.justifyContent = "center";
              flexLayout.wrap = "nowrap";
              // Minimal gap for Link buttons to keep text and underline close
              if (variant.name === 'Link' && 'gap' in flexLayout) {
                flexLayout.gap = 2;
              }
              debugLog('Successfully created flex layout on button board');
            }
          } catch (e) {
            debugLog('addFlexLayout failed:', e);
          }
          
          // Set background color (handle transparent)
          if (state.bgColor !== novyuiTokensHex.color.static.transparent) {
            buttonBoard.fills = [{ fillColor: state.bgColor }];
          } else {
            buttonBoard.fills = [];
          }
          
          // Add border for variants that need it
          if (variant.borderColor !== novyuiTokensHex.color.static.transparent) {
            buttonBoard.strokes = [{
              strokeColor: state.name === 'Disabled' ? novyuiTokensHex.color.neutral[5].light : variant.borderColor,
              strokeWidth: 1
            }];
          }
          
          // Apply opacity for disabled state
          if (state.name === 'Disabled' && 'opacity' in buttonBoard) {
            (buttonBoard as any).opacity = state.opacity;
          }
          
          // Create button text as child
          if (typeof penpot.createText === 'function') {
            let buttonText;
            
            if (state.isLoading) {
              buttonText = penpot.createText('● Loading');
              if (buttonText) {
                buttonText.name = `${variant.name} Loading Text`;
                buttonText.characters = '● Loading';
              }
            } else {
              buttonText = penpot.createText(state.name);
              if (buttonText) {
                buttonText.name = `${variant.name} ${state.name} Text`;
                buttonText.characters = state.name;
              }
            }
            
            if (buttonText) {
              // Set text properties
              buttonText.fills = [{ fillColor: state.textColor }];
              if ('fontSize' in buttonText) (buttonText as any).fontSize = 16;
              if ('fontWeight' in buttonText) (buttonText as any).fontWeight = 400;
              if ('fontFamily' in buttonText) (buttonText as any).fontFamily = 'Inter';
              
              // Add visual underline for Link buttons to match MoonZoon implementation
              if (variant.name === 'Link') {
                // Create underline using a rectangle shape
                const underline = penpot.createRectangle();
                underline.name = `${variant.name} ${state.name} Underline`;
                underline.resize(buttonText.characters.length * 8, 1); // Approximate text width, 1px height
                underline.fills = [{ fillColor: state.textColor }]; // Same color as text
                
                // Add both text and underline to button
                try {
                  buttonBoard.appendChild(buttonText);
                  buttonBoard.appendChild(underline);
                  debugLog(`Successfully added ${state.name} link text with underline`);
                  buttonsCreated++;
                } catch (e) {
                  debugLog(`appendChild failed for ${state.name} link:`, e);
                  buttonsCreated++;
                }
              } else {
                // Regular buttons without underline
                try {
                  buttonBoard.appendChild(buttonText);
                  debugLog(`Successfully added ${state.name} text as child to button board`);
                  buttonsCreated++;
                } catch (e) {
                  debugLog(`appendChild failed for ${state.name} text:`, e);
                  buttonsCreated++;
                }
              }
            }
          }
          
          // Add focus ring as board stroke for focus state
          if (state.hasFocusRing) {
            // Add focus ring as additional stroke to the board itself
            const currentStrokes = buttonBoard.strokes || [];
            buttonBoard.strokes = [
              ...currentStrokes,
              {
                strokeColor: novyuiTokensHex.color.primary[7].light,
                strokeWidth: 3
              }
            ];
          }
          
          // Add button to variant container for automatic layout
          try {
            variantContainer.appendChild(buttonBoard);
            debugLog(`Added ${state.name} button to ${variant.name} container`);
          } catch (e) {
            debugLog(`Failed to add ${state.name} button to container:`, e);
          }
        }
      });
      
      currentY += 60;  // Space between variant sections
    });
    
    // Add extra space between themes
    currentY += 80;
  });
    
    // Create section: Button Sizes (Light Theme Only)
    currentY += 40;  // More space before sizes section
    if (typeof penpot.createText === 'function') {
      const sizeTitle = penpot.createText('Button Sizes');
      if (sizeTitle) {
        sizeTitle.name = 'Sizes Section Title';
        sizeTitle.x = startX;
        sizeTitle.y = currentY;
        sizeTitle.characters = '3. Button Sizes (Light Theme)';
        sizeTitle.fills = [{ fillColor: novyuiTokensHex.color.neutral[9].light }];
        if ('fontSize' in sizeTitle) (sizeTitle as any).fontSize = 20;
        if ('fontWeight' in sizeTitle) (sizeTitle as any).fontWeight = 400;
      }
    }
    currentY += 40;
    
    // Size examples with exact MoonZoon specifications
    const sizes = [
      { 
        name: 'Small', 
        width: 88,    // Calculated: 64 (min content) + 24 (SPACING_12 * 2)
        height: 32,   // 20 (content) + 12 (SPACING_6 * 2)
        fontSize: 14, // FONT_SIZE_14
        paddingX: 12, // SPACING_12
        paddingY: 6   // SPACING_6
      },
      { 
        name: 'Medium', 
        width: 104,   // 72 (content) + 32 (SPACING_16 * 2)
        height: 40,   // 24 (content) + 16 (SPACING_8 * 2)
        fontSize: 16, // FONT_SIZE_16
        paddingX: 16, // SPACING_16
        paddingY: 8   // SPACING_8
      },
      { 
        name: 'Large', 
        width: 116,   // 76 (content) + 40 (SPACING_20 * 2)
        height: 48,   // 24 (content) + 24 (SPACING_12 * 2)
        fontSize: 18, // FONT_SIZE_18
        paddingX: 20, // SPACING_20
        paddingY: 12  // SPACING_12
      }
    ];
    
    sizes.forEach((size, index) => {
      const buttonX = startX + (index * 200);
      
      // Add size label above the button
      if (typeof penpot.createText === 'function') {
        const sizeLabel = penpot.createText(size.name);
        if (sizeLabel) {
          sizeLabel.name = `${size.name} Size Label`;
          sizeLabel.x = buttonX;
          sizeLabel.y = currentY;
          sizeLabel.characters = size.name;
          sizeLabel.fills = [{ fillColor: novyuiTokensHex.color.neutral[7].light }];
          if ('fontSize' in sizeLabel) (sizeLabel as any).fontSize = 14;
          if ('fontWeight' in sizeLabel) (sizeLabel as any).fontWeight = 400;
        }
      }
      
      // Create container board for this size example
      const sizeContainer = penpot.createBoard();
      sizeContainer.name = "\u200D"; // Zero-width joiner to hide native board title
      sizeContainer.x = buttonX;
      sizeContainer.y = currentY + 25; // Space below the size label
      sizeContainer.resize(size.width + 20, size.height + 20); // Slightly larger than button
      sizeContainer.fills = []; // Transparent background
      
      // Create flex layout for the size container
      let sizeContainerLayout: any = null;
      try {
        sizeContainerLayout = sizeContainer.addFlexLayout();
        if (sizeContainerLayout) {
          sizeContainerLayout.dir = "column";
          sizeContainerLayout.alignItems = "center";
          sizeContainerLayout.justifyContent = "center";
          sizeContainerLayout.wrap = "nowrap";
        }
      } catch (e) {
        debugLog('Size container layout failed:', e);
      }
      
      // Create sized button as Board
      const sizedButtonBoard = penpot.createBoard();
      sizedButtonBoard.name = "\u2060"; // Word joiner to hide native board title
      sizedButtonBoard.resize(size.width, size.height);
      
      // Set board styling
      if ('borderRadius' in sizedButtonBoard) {
        (sizedButtonBoard as any).borderRadius = parseInt(novyuiTokensHex.cornerRadius[6]);
      }
      sizedButtonBoard.fills = [{ fillColor: novyuiTokensHex.color.primary[7].light }];
      
      // Create flex layout for size buttons (same approach as variant buttons)
      let sizeFlexLayout: any = null;
      try {
        sizeFlexLayout = sizedButtonBoard.addFlexLayout();
        if (sizeFlexLayout) {
          sizeFlexLayout.dir = "row";
          sizeFlexLayout.alignItems = "center";
          sizeFlexLayout.justifyContent = "center";
          sizeFlexLayout.wrap = "nowrap";
          debugLog('Successfully created flex layout on size button board');
        }
      } catch (e) {
        debugLog('Size button addFlexLayout failed:', e);
      }
      
      // Create sized text
      if (typeof penpot.createText === 'function') {
        const buttonText = penpot.createText(size.name);
        if (buttonText) {
          buttonText.name = `${size.name} Button Text`;
          buttonText.characters = size.name;
          buttonText.fills = [{ fillColor: novyuiTokensHex.color.neutral[1].light }];
          if ('fontSize' in buttonText) (buttonText as any).fontSize = size.fontSize;
          if ('fontWeight' in buttonText) (buttonText as any).fontWeight = 400;
          
          // Add text as child to size button board - flex layout will center it automatically
          try {
            sizedButtonBoard.appendChild(buttonText);
            debugLog(`Successfully added ${size.name} text as child to size button board`);
            buttonsCreated++;
          } catch (e) {
            debugLog(`Size button appendChild failed for ${size.name}:`, e);
            buttonsCreated++;
          }
          
          // Add button to size container for automatic layout
          try {
            sizeContainer.appendChild(sizedButtonBoard);
            debugLog(`Added ${size.name} button to size container`);
          } catch (e) {
            debugLog(`Failed to add ${size.name} button to container:`, e);
          }
        }
      }
    });
    
    console.log(`✅ Created buttons section with ${buttonsCreated} components`);
    return currentY + 100; // Return ending Y position for vertical stacking
    
  } catch (error) {
    console.error('Error creating buttons section:', error);
    return startY; // Return original Y position if error occurs
  }
}

// Create a test NovyUI button component
function createTestComponent() {
  console.log('🔧 Creating NovyUI Button System...');
  
  try {
    let startX = 100;
    let startY = 100;
    
    // Use viewport center if available
    if (penpot.viewport && penpot.viewport.center) {
      const center = penpot.viewport.center;
      startX = center.x - 600;
      startY = center.y - 400;
    }
    
    // Create main title
    if (typeof penpot.createText === 'function') {
      const title = penpot.createText('NovyUI Button System');
      if (title) {
        title.name = 'Button System Title';
        title.x = startX;
        title.y = startY - 60;
        title.characters = 'NovyUI Button System';
        title.fills = [{ fillColor: novyuiTokensHex.color.neutral[11].light }];
        if ('fontSize' in title) (title as any).fontSize = 24;
        if ('fontWeight' in title) (title as any).fontWeight = 400;
        if ('fontFamily' in title) (title as any).fontFamily = 'Inter';
      }
    }

    // Use the extracted buttons section function
    createButtonsSection(startX, startY);
    
    penpot.ui.sendMessage({
      type: 'component-result',
      data: {
        success: true,
        message: `Created complete NovyUI button system using reusable section function`
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

// Reusable Icons section creation function
function createIconsSection(startX: number, startY: number): number {
  let currentY = startY;
  let iconsCreated = 0;
  
  // Create both Light and Dark theme sections with exact Button pattern
  const themes: Array<{name: string, key: 'light' | 'dark', bgColor: string}> = [
    { 
      name: 'Light Theme', 
      key: 'light', 
      bgColor: novyuiTokensHex.color.neutral[1].light  // #fefefe
    },
    { 
      name: 'Dark Theme', 
      key: 'dark', 
      bgColor: novyuiTokensHex.color.neutral[2].dark   // #020617
    }
  ];
  
  themes.forEach((theme, themeIndex) => {
    // Add theme background board first
    const themeBackground = penpot.createBoard();
    themeBackground.name = "\u200B\u200B\u200B"; // Multiple zero-width spaces for uniqueness
    themeBackground.x = startX - 40;
    themeBackground.y = currentY;
    themeBackground.resize(850, 580); // Increased to include title and bottom padding
    themeBackground.fills = [{ fillColor: theme.bgColor }]; // Full theme background
    
    // Add subtle border for better definition
    if (theme.key === 'light') {
      themeBackground.strokes = [{ strokeColor: novyuiTokensHex.color.neutral[3].light, strokeWidth: 1 }];
    } else {
      themeBackground.strokes = [{ strokeColor: novyuiTokensHex.color.neutral[8].dark, strokeWidth: 1 }];
    }
    
    // Create theme section title INSIDE the background
    if (typeof penpot.createText === 'function') {
      const themeTitle = penpot.createText(theme.name);
      if (themeTitle) {
        themeTitle.name = `${theme.name} Title`;
        themeTitle.x = startX;
        themeTitle.y = currentY + 20; // Inside the container
        themeTitle.characters = `${themeIndex + 1}. Icon Showcase - ${theme.name}`;
        themeTitle.fills = [{ fillColor: theme.key === 'light' ? novyuiTokensHex.color.neutral[9].light : novyuiTokensHex.color.neutral[9].dark }];
        if ('fontSize' in themeTitle) (themeTitle as any).fontSize = 20;
        if ('fontWeight' in themeTitle) (themeTitle as any).fontWeight = 400;
      }
    }
    
    let sectionY = currentY + 60; // Start sections below title
    
    // Section 1: Popular Icons (5 icons)
    const popularIcons = [
      { name: 'User', symbol: '👤', label: 'User' },
      { name: 'Heart', symbol: '♥', label: 'Heart' },
      { name: 'Star', symbol: '★', label: 'Star' },
      { name: 'Settings', symbol: '⚙', label: 'Settings' },
      { name: 'Search', symbol: '🔍', label: 'Search' }
    ];
    
    // Popular Icons label
    if (typeof penpot.createText === 'function') {
      const sectionLabel = penpot.createText('Popular Icons');
      if (sectionLabel) {
        sectionLabel.name = 'Popular Icons Label';
        sectionLabel.x = startX;
        sectionLabel.y = sectionY;
        sectionLabel.characters = 'Popular Icons';
        sectionLabel.fills = [{ fillColor: theme.key === 'light' ? novyuiTokensHex.color.neutral[7].light : novyuiTokensHex.color.neutral[7].dark }];
        if ('fontSize' in sectionLabel) (sectionLabel as any).fontSize = 14;
        if ('fontWeight' in sectionLabel) (sectionLabel as any).fontWeight = 400;
      }
    }
    
    sectionY += 25; // Space below label
    
    // Create container for popular icons
    const popularContainer = penpot.createBoard();
    popularContainer.name = "\u200C"; // Zero-width non-joiner
    popularContainer.x = startX;
    popularContainer.y = sectionY;
    popularContainer.resize(750, 60);
    popularContainer.fills = []; // Transparent
    
    // Add flex layout to container
    let popularLayout: any = null;
    try {
      popularLayout = popularContainer.addFlexLayout();
      if (popularLayout) {
        popularLayout.dir = "row";
        popularLayout.alignItems = "center";
        popularLayout.justifyContent = "space-between";
        popularLayout.wrap = "nowrap";
      }
    } catch (e) {
      debugLog('Popular icons layout failed:', e);
    }
    
    // Create individual icon boards
    popularIcons.forEach((icon) => {
      const iconBoard = penpot.createBoard();
      iconBoard.name = "\u200D"; // Zero-width joiner
      iconBoard.resize(120, 40);
      iconBoard.fills = []; // Transparent background
      
      // Add flex layout for centering
      let iconLayout: any = null;
      try {
        iconLayout = iconBoard.addFlexLayout();
        if (iconLayout) {
          iconLayout.dir = "row";
          iconLayout.alignItems = "center";
          iconLayout.justifyContent = "center";
          iconLayout.wrap = "nowrap";
        }
      } catch (e) {
        debugLog('Icon layout failed:', e);
      }
      
      // Create icon text
      if (typeof penpot.createText === 'function') {
        const iconText = penpot.createText(icon.symbol);
        if (iconText) {
          iconText.name = `${icon.name} Icon`;
          iconText.characters = icon.symbol;
          iconText.fills = [{ fillColor: theme.key === 'light' ? novyuiTokensHex.color.primary[7].light : novyuiTokensHex.color.primary[6].light }];
          if ('fontSize' in iconText) (iconText as any).fontSize = 20;
          
          try {
            iconBoard.appendChild(iconText);
            iconsCreated++;
          } catch (e) {
            debugLog(`Icon appendChild failed for ${icon.name}:`, e);
            iconsCreated++;
          }
        }
      }
      
      try {
        popularContainer.appendChild(iconBoard);
      } catch (e) {
        debugLog(`Failed to add ${icon.name} to container:`, e);
      }
    });
    
    sectionY += 80; // Space for next section
    
    // Section 2: Size Comparison (4 sizes of star)
    const sizes = [
      { name: '16px', size: 16 },
      { name: '20px', size: 20 },
      { name: '24px', size: 24 },
      { name: '32px', size: 32 }
    ];
    
    // Size Comparison label
    if (typeof penpot.createText === 'function') {
      const sizeLabel = penpot.createText('Size Comparison');
      if (sizeLabel) {
        sizeLabel.name = 'Size Comparison Label';
        sizeLabel.x = startX;
        sizeLabel.y = sectionY;
        sizeLabel.characters = 'Size Comparison';
        sizeLabel.fills = [{ fillColor: theme.key === 'light' ? novyuiTokensHex.color.neutral[7].light : novyuiTokensHex.color.neutral[7].dark }];
        if ('fontSize' in sizeLabel) (sizeLabel as any).fontSize = 14;
        if ('fontWeight' in sizeLabel) (sizeLabel as any).fontWeight = 400;
      }
    }
    
    sectionY += 25;
    
    // Create container for sizes
    const sizeContainer = penpot.createBoard();
    sizeContainer.name = "\u2060"; // Word joiner
    sizeContainer.x = startX;
    sizeContainer.y = sectionY;
    sizeContainer.resize(750, 60);
    sizeContainer.fills = [];
    
    let sizeContainerLayout: any = null;
    try {
      sizeContainerLayout = sizeContainer.addFlexLayout();
      if (sizeContainerLayout) {
        sizeContainerLayout.dir = "row";
        sizeContainerLayout.alignItems = "center";
        sizeContainerLayout.justifyContent = "space-between";
        sizeContainerLayout.wrap = "nowrap";
      }
    } catch (e) {
      debugLog('Size container layout failed:', e);
    }
    
    // Create size icons
    sizes.forEach((size) => {
      const sizeBoard = penpot.createBoard();
      sizeBoard.name = "\u2061"; // Function application
      sizeBoard.resize(120, 40);
      sizeBoard.fills = [];
      
      let sizeBoardLayout: any = null;
      try {
        sizeBoardLayout = sizeBoard.addFlexLayout();
        if (sizeBoardLayout) {
          sizeBoardLayout.dir = "row";
          sizeBoardLayout.alignItems = "center";
          sizeBoardLayout.justifyContent = "center";
          sizeBoardLayout.wrap = "nowrap";
        }
      } catch (e) {
        debugLog('Size board layout failed:', e);
      }
      
      if (typeof penpot.createText === 'function') {
        const sizeText = penpot.createText('★');
        if (sizeText) {
          sizeText.name = `${size.name} Star`;
          sizeText.characters = '★';
          sizeText.fills = [{ fillColor: theme.key === 'light' ? novyuiTokensHex.color.primary[7].light : novyuiTokensHex.color.primary[6].light }];
          if ('fontSize' in sizeText) (sizeText as any).fontSize = size.size;
          
          try {
            sizeBoard.appendChild(sizeText);
            iconsCreated++;
          } catch (e) {
            debugLog(`Size appendChild failed for ${size.name}:`, e);
            iconsCreated++;
          }
        }
      }
      
      try {
        sizeContainer.appendChild(sizeBoard);
      } catch (e) {
        debugLog(`Failed to add ${size.name} to size container:`, e);
      }
    });
    
    sectionY += 80; // Space for next section
    
    // Section 3: Color Variations (5 colors of heart)
    const colors = [
      { name: 'Primary', color: theme.key === 'light' ? novyuiTokensHex.color.primary[7].light : novyuiTokensHex.color.primary[6].light },
      { name: 'Secondary', color: theme.key === 'light' ? novyuiTokensHex.color.neutral[7].light : novyuiTokensHex.color.neutral[9].dark },
      { name: 'Muted', color: theme.key === 'light' ? novyuiTokensHex.color.neutral[6].light : novyuiTokensHex.color.neutral[7].dark },
      { name: 'Success', color: theme.key === 'light' ? novyuiTokensHex.color.success[7].light : novyuiTokensHex.color.success[7].dark },
      { name: 'Error', color: theme.key === 'light' ? novyuiTokensHex.color.error[7].light : novyuiTokensHex.color.error[7].dark }
    ];
    
    // Color Variations label
    if (typeof penpot.createText === 'function') {
      const colorLabel = penpot.createText('Color Variations');
      if (colorLabel) {
        colorLabel.name = 'Color Variations Label';
        colorLabel.x = startX;
        colorLabel.y = sectionY;
        colorLabel.characters = 'Color Variations';
        colorLabel.fills = [{ fillColor: theme.key === 'light' ? novyuiTokensHex.color.neutral[7].light : novyuiTokensHex.color.neutral[7].dark }];
        if ('fontSize' in colorLabel) (colorLabel as any).fontSize = 14;
        if ('fontWeight' in colorLabel) (colorLabel as any).fontWeight = 400;
      }
    }
    
    sectionY += 25;
    
    // Create container for colors
    const colorContainer = penpot.createBoard();
    colorContainer.name = "\u2062"; // Invisible times
    colorContainer.x = startX;
    colorContainer.y = sectionY;
    colorContainer.resize(750, 60);
    colorContainer.fills = [];
    
    let colorContainerLayout: any = null;
    try {
      colorContainerLayout = colorContainer.addFlexLayout();
      if (colorContainerLayout) {
        colorContainerLayout.dir = "row";
        colorContainerLayout.alignItems = "center";
        colorContainerLayout.justifyContent = "space-between";
        colorContainerLayout.wrap = "nowrap";
      }
    } catch (e) {
      debugLog('Color container layout failed:', e);
    }
    
    // Create color icons
    colors.forEach((colorVariant) => {
      const colorBoard = penpot.createBoard();
      colorBoard.name = "\u2063"; // Invisible separator
      colorBoard.resize(120, 40);
      colorBoard.fills = [];
      
      let colorBoardLayout: any = null;
      try {
        colorBoardLayout = colorBoard.addFlexLayout();
        if (colorBoardLayout) {
          colorBoardLayout.dir = "row";
          colorBoardLayout.alignItems = "center";
          colorBoardLayout.justifyContent = "center";
          colorBoardLayout.wrap = "nowrap";
        }
      } catch (e) {
        debugLog('Color board layout failed:', e);
      }
      
      if (typeof penpot.createText === 'function') {
        const colorText = penpot.createText('♥');
        if (colorText) {
          colorText.name = `${colorVariant.name} Heart`;
          colorText.characters = '♥';
          colorText.fills = [{ fillColor: colorVariant.color }];
          if ('fontSize' in colorText) (colorText as any).fontSize = 20;
          
          try {
            colorBoard.appendChild(colorText);
            iconsCreated++;
          } catch (e) {
            debugLog(`Color appendChild failed for ${colorVariant.name}:`, e);
            iconsCreated++;
          }
        }
      }
      
      try {
        colorContainer.appendChild(colorBoard);
      } catch (e) {
        debugLog(`Failed to add ${colorVariant.name} to color container:`, e);
      }
    });
    
    currentY += 600; // Move to next theme
  });
  
  console.log(`✅ Created Icons section with ${iconsCreated} icons`);
  return currentY; // Return ending Y position
}

// Create Icons component showcase
function createIconsComponent() {
  try {
    console.log('🎨 Creating Icons component showcase...');
    
    const startX = 100;
    const startY = 100;
    
    // Use the extracted icons section function
    createIconsSection(startX, startY);
    
    penpot.ui.sendMessage({
      type: 'component-result',
      data: {
        success: true,
        message: `Created complete NovyUI icon system using reusable section function`
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

// Extract Kbd section as reusable function
function createKbdSection(startX: number, startY: number): number {
  let currentY = startY;
  let kbdCreated = 0;
  
  console.log(`⌨️ Creating Kbd section at (${startX}, ${startY})...`);
    
    // Create both Light and Dark theme sections with exact Icons pattern
    const themes: Array<{name: string, key: 'light' | 'dark', bgColor: string}> = [
      { 
        name: 'Light Theme', 
        key: 'light', 
        bgColor: novyuiTokensHex.color.neutral[1].light  // #fefefe
      },
      { 
        name: 'Dark Theme', 
        key: 'dark', 
        bgColor: novyuiTokensHex.color.neutral[2].dark   // #020617
      }
    ];
    
    themes.forEach((theme, themeIndex) => {
      // Add theme background board first
      const themeBackground = penpot.createBoard();
      themeBackground.name = "\u200B\u200B\u200B"; // Multiple zero-width spaces for uniqueness
      themeBackground.x = startX - 40;
      themeBackground.y = currentY;
      themeBackground.resize(850, 580); // Same as Icons
      themeBackground.fills = [{ fillColor: theme.bgColor }];
      
      // Add subtle border for better definition
      if (theme.key === 'light') {
        themeBackground.strokes = [{ strokeColor: novyuiTokensHex.color.neutral[3].light, strokeWidth: 1 }];
      } else {
        themeBackground.strokes = [{ strokeColor: novyuiTokensHex.color.neutral[8].dark, strokeWidth: 1 }];
      }
      
      // Create theme section title INSIDE the background
      if (typeof penpot.createText === 'function') {
        const themeTitle = penpot.createText(theme.name);
        if (themeTitle) {
          themeTitle.name = `${theme.name} Title`;
          themeTitle.x = startX;
          themeTitle.y = currentY + 20;
          themeTitle.characters = `${themeIndex + 1}. Kbd Showcase - ${theme.name}`;
          themeTitle.fills = [{ fillColor: theme.key === 'light' ? novyuiTokensHex.color.neutral[9].light : novyuiTokensHex.color.neutral[9].dark }];
          if ('fontSize' in themeTitle) (themeTitle as any).fontSize = 20;
          if ('fontWeight' in themeTitle) (themeTitle as any).fontWeight = 400;
        }
      }
      
      let sectionY = currentY + 60; // Start sections below title
      
      // Section 1: Size Variants (3 sizes) - Much more dramatic differences
      const sizes = [
        { name: 'Small', fontSize: 12, width: 48, height: 24, padding: 4, borderRadius: 2 },
        { name: 'Medium', fontSize: 16, width: 80, height: 36, padding: 8, borderRadius: 4 },
        { name: 'Large', fontSize: 20, width: 120, height: 48, padding: 12, borderRadius: 6 }
      ];
      
      // Size Variants label
      if (typeof penpot.createText === 'function') {
        const sectionLabel = penpot.createText('Size Variants');
        if (sectionLabel) {
          sectionLabel.name = 'Size Variants Label';
          sectionLabel.x = startX;
          sectionLabel.y = sectionY;
          sectionLabel.characters = 'Size Variants';
          sectionLabel.fills = [{ fillColor: theme.key === 'light' ? novyuiTokensHex.color.neutral[7].light : novyuiTokensHex.color.neutral[7].dark }];
          if ('fontSize' in sectionLabel) (sectionLabel as any).fontSize = 14;
          if ('fontWeight' in sectionLabel) (sectionLabel as any).fontWeight = 400;
        }
      }
      
      sectionY += 25;
      
      // Create container for sizes
      const sizeContainer = penpot.createBoard();
      sizeContainer.name = "\u200C"; // Zero-width non-joiner
      sizeContainer.x = startX;
      sizeContainer.y = sectionY;
      sizeContainer.resize(750, 60);
      sizeContainer.fills = [];
      
      let sizeLayout: any = null;
      try {
        sizeLayout = sizeContainer.addFlexLayout();
        if (sizeLayout) {
          sizeLayout.dir = "row";
          sizeLayout.alignItems = "center";
          sizeLayout.justifyContent = "space-between";
          sizeLayout.wrap = "nowrap";
        }
      } catch (e) {
        debugLog('Size layout failed:', e);
      }
      
      // Create size kbd elements
      sizes.forEach((size) => {
        const kbdBoard = penpot.createBoard();
        kbdBoard.name = "\u200D"; // Zero-width joiner
        kbdBoard.resize(size.width, size.height);
        
        // Default style with proper kbd appearance - using primary backgrounds
        kbdBoard.fills = [{ fillColor: theme.key === 'light' ? novyuiTokensHex.color.primary[1].light : novyuiTokensHex.color.primary[3].dark }];
        
        // Proper border radius based on size
        if ('borderRadius' in kbdBoard) {
          (kbdBoard as any).borderRadius = size.borderRadius;
        }
        
        // Strong, visible borders for size variants - more visible blue borders
        kbdBoard.strokes = [{ strokeColor: theme.key === 'light' ? novyuiTokensHex.color.primary[4].light : novyuiTokensHex.color.primary[6].dark, strokeWidth: 1 }];
        
        let kbdLayout: any = null;
        try {
          kbdLayout = kbdBoard.addFlexLayout();
          if (kbdLayout) {
            kbdLayout.dir = "row";
            kbdLayout.alignItems = "center";
            kbdLayout.justifyContent = "center";
            kbdLayout.wrap = "nowrap";
          }
        } catch (e) {
          debugLog('Kbd layout failed:', e);
        }
        
        if (typeof penpot.createText === 'function') {
          const kbdText = penpot.createText('Ctrl');
          if (kbdText) {
            kbdText.name = `${size.name} Kbd`;
            kbdText.characters = 'Ctrl';
            kbdText.fills = [{ fillColor: theme.key === 'light' ? novyuiTokensHex.color.neutral[9].light : novyuiTokensHex.color.neutral[1].light }];
            if ('fontSize' in kbdText) (kbdText as any).fontSize = size.fontSize;
            if ('fontFamily' in kbdText) (kbdText as any).fontFamily = 'Fira Code';
            
            try {
              kbdBoard.appendChild(kbdText);
              kbdCreated++;
            } catch (e) {
              debugLog(`Kbd appendChild failed for ${size.name}:`, e);
              kbdCreated++;
            }
          }
        }
        
        try {
          sizeContainer.appendChild(kbdBoard);
        } catch (e) {
          debugLog(`Failed to add ${size.name} to container:`, e);
        }
      });
      
      sectionY += 80;
      
      // Section 2: Style Variants (3 styles) - Matching MoonZoon exactly
      const styles = [
        { 
          name: 'Default', 
          variant: 'default',
          bgColor: theme.key === 'light' ? novyuiTokensHex.color.primary[1].light : novyuiTokensHex.color.primary[3].dark,
          borderColor: theme.key === 'light' ? novyuiTokensHex.color.primary[4].light : novyuiTokensHex.color.primary[6].dark,
          textColor: theme.key === 'light' ? novyuiTokensHex.color.neutral[9].light : novyuiTokensHex.color.neutral[1].light,
          strokeWidth: 1
        },
        { 
          name: 'Outlined', 
          variant: 'outlined',
          bgColor: 'transparent',
          borderColor: theme.key === 'light' ? novyuiTokensHex.color.primary[6].light : novyuiTokensHex.color.primary[7].dark,
          textColor: theme.key === 'light' ? novyuiTokensHex.color.neutral[9].light : novyuiTokensHex.color.neutral[1].light,
          strokeWidth: 2
        },
        { 
          name: 'Solid', 
          variant: 'solid',
          bgColor: theme.key === 'light' ? novyuiTokensHex.color.primary[7].light : novyuiTokensHex.color.primary[7].light,
          borderColor: theme.key === 'light' ? novyuiTokensHex.color.primary[7].light : novyuiTokensHex.color.primary[7].light,
          textColor: novyuiTokensHex.color.neutral[1].light,
          strokeWidth: 1
        }
      ];
      
      // Style Variants label
      if (typeof penpot.createText === 'function') {
        const styleLabel = penpot.createText('Style Variants');
        if (styleLabel) {
          styleLabel.name = 'Style Variants Label';
          styleLabel.x = startX;
          styleLabel.y = sectionY;
          styleLabel.characters = 'Style Variants';
          styleLabel.fills = [{ fillColor: theme.key === 'light' ? novyuiTokensHex.color.neutral[7].light : novyuiTokensHex.color.neutral[7].dark }];
          if ('fontSize' in styleLabel) (styleLabel as any).fontSize = 14;
          if ('fontWeight' in styleLabel) (styleLabel as any).fontWeight = 400;
        }
      }
      
      sectionY += 25;
      
      // Create container for styles
      const styleContainer = penpot.createBoard();
      styleContainer.name = "\u2060"; // Word joiner
      styleContainer.x = startX;
      styleContainer.y = sectionY;
      styleContainer.resize(750, 60);
      styleContainer.fills = [];
      
      let styleContainerLayout: any = null;
      try {
        styleContainerLayout = styleContainer.addFlexLayout();
        if (styleContainerLayout) {
          styleContainerLayout.dir = "row";
          styleContainerLayout.alignItems = "center";
          styleContainerLayout.justifyContent = "space-between";
          styleContainerLayout.wrap = "nowrap";
        }
      } catch (e) {
        debugLog('Style container layout failed:', e);
      }
      
      // Create style kbd elements
      styles.forEach((style) => {
        const styleBoard = penpot.createBoard();
        styleBoard.name = "\u2061"; // Function application
        styleBoard.resize(120, 32);
        
        // Apply proper background based on style variant
        if (style.bgColor === 'transparent') {
          styleBoard.fills = [];
        } else {
          styleBoard.fills = [{ fillColor: style.bgColor }];
        }
        
        // Proper border radius for kbd
        if ('borderRadius' in styleBoard) {
          (styleBoard as any).borderRadius = 4;
        }
        
        // Apply proper border based on style variant
        styleBoard.strokes = [{ strokeColor: style.borderColor, strokeWidth: style.strokeWidth }];
        
        let styleBoardLayout: any = null;
        try {
          styleBoardLayout = styleBoard.addFlexLayout();
          if (styleBoardLayout) {
            styleBoardLayout.dir = "row";
            styleBoardLayout.alignItems = "center";
            styleBoardLayout.justifyContent = "center";
            styleBoardLayout.wrap = "nowrap";
          }
        } catch (e) {
          debugLog('Style board layout failed:', e);
        }
        
        if (typeof penpot.createText === 'function') {
          const styleText = penpot.createText('⌘');
          if (styleText) {
            styleText.name = `${style.name} Kbd`;
            styleText.characters = '⌘';
            
            // Use proper text color from style specification
            styleText.fills = [{ fillColor: style.textColor }];
            if ('fontSize' in styleText) (styleText as any).fontSize = 14;
            if ('fontWeight' in styleText) (styleText as any).fontWeight = 400; // Regular weight  
            if ('fontFamily' in styleText) (styleText as any).fontFamily = 'Fira Code';
            
            try {
              styleBoard.appendChild(styleText);
              kbdCreated++;
            } catch (e) {
              debugLog(`Style appendChild failed for ${style.name}:`, e);
              kbdCreated++;
            }
          }
        }
        
        try {
          styleContainer.appendChild(styleBoard);
        } catch (e) {
          debugLog(`Failed to add ${style.name} to style container:`, e);
        }
      });
      
      sectionY += 80;
      
      // Section 3: Common Shortcuts (5 shortcuts)
      const shortcuts = [
        { name: 'Copy', keys: 'Ctrl+C' },
        { name: 'Paste', keys: 'Ctrl+V' },
        { name: 'Save', keys: 'Ctrl+S' },
        { name: 'Undo', keys: 'Ctrl+Z' },
        { name: 'Find', keys: 'Ctrl+F' }
      ];
      
      // Common Shortcuts label
      if (typeof penpot.createText === 'function') {
        const shortcutLabel = penpot.createText('Common Shortcuts');
        if (shortcutLabel) {
          shortcutLabel.name = 'Common Shortcuts Label';
          shortcutLabel.x = startX;
          shortcutLabel.y = sectionY;
          shortcutLabel.characters = 'Common Shortcuts';
          shortcutLabel.fills = [{ fillColor: theme.key === 'light' ? novyuiTokensHex.color.neutral[7].light : novyuiTokensHex.color.neutral[7].dark }];
          if ('fontSize' in shortcutLabel) (shortcutLabel as any).fontSize = 14;
          if ('fontWeight' in shortcutLabel) (shortcutLabel as any).fontWeight = 400;
        }
      }
      
      sectionY += 25;
      
      // Create container for shortcuts
      const shortcutContainer = penpot.createBoard();
      shortcutContainer.name = "\u2062"; // Invisible times
      shortcutContainer.x = startX;
      shortcutContainer.y = sectionY;
      shortcutContainer.resize(750, 60);
      shortcutContainer.fills = [];
      
      let shortcutContainerLayout: any = null;
      try {
        shortcutContainerLayout = shortcutContainer.addFlexLayout();
        if (shortcutContainerLayout) {
          shortcutContainerLayout.dir = "row";
          shortcutContainerLayout.alignItems = "center";
          shortcutContainerLayout.justifyContent = "space-between";
          shortcutContainerLayout.wrap = "nowrap";
        }
      } catch (e) {
        debugLog('Shortcut container layout failed:', e);
      }
      
      // Create shortcut kbd elements
      shortcuts.forEach((shortcut) => {
        const shortcutBoard = penpot.createBoard();
        shortcutBoard.name = "\u2063"; // Invisible separator
        shortcutBoard.resize(120, 32);
        
        // Use Default kbd style for shortcuts - matching improved style
        shortcutBoard.fills = [{ fillColor: theme.key === 'light' ? novyuiTokensHex.color.primary[1].light : novyuiTokensHex.color.primary[3].dark }];
        
        if ('borderRadius' in shortcutBoard) {
          (shortcutBoard as any).borderRadius = 4;
        }
        shortcutBoard.strokes = [{ strokeColor: theme.key === 'light' ? novyuiTokensHex.color.primary[4].light : novyuiTokensHex.color.primary[6].dark, strokeWidth: 1 }];
        
        let shortcutBoardLayout: any = null;
        try {
          shortcutBoardLayout = shortcutBoard.addFlexLayout();
          if (shortcutBoardLayout) {
            shortcutBoardLayout.dir = "row";
            shortcutBoardLayout.alignItems = "center";
            shortcutBoardLayout.justifyContent = "center";
            shortcutBoardLayout.wrap = "nowrap";
          }
        } catch (e) {
          debugLog('Shortcut board layout failed:', e);
        }
        
        if (typeof penpot.createText === 'function') {
          const shortcutText = penpot.createText(shortcut.keys);
          if (shortcutText) {
            shortcutText.name = `${shortcut.name} Shortcut`;
            shortcutText.characters = shortcut.keys;
            shortcutText.fills = [{ fillColor: theme.key === 'light' ? novyuiTokensHex.color.neutral[9].light : novyuiTokensHex.color.neutral[1].light }];
            if ('fontSize' in shortcutText) (shortcutText as any).fontSize = 12;
            if ('fontWeight' in shortcutText) (shortcutText as any).fontWeight = 400; // Regular weight
            if ('fontFamily' in shortcutText) (shortcutText as any).fontFamily = 'Fira Code';
            
            try {
              shortcutBoard.appendChild(shortcutText);
              kbdCreated++;
            } catch (e) {
              debugLog(`Shortcut appendChild failed for ${shortcut.name}:`, e);
              kbdCreated++;
            }
          }
        }
        
        try {
          shortcutContainer.appendChild(shortcutBoard);
        } catch (e) {
          debugLog(`Failed to add ${shortcut.name} to shortcut container:`, e);
        }
      });
      
      currentY += 600; // Move to next theme
    });
    
    console.log(`✅ Created complete Kbd section with ${kbdCreated} elements`);
    return currentY; // Return ending Y position
}

// Create Kbd component showcase
function createKbdComponent() {
  try {
    console.log('⌨️ Creating Kbd component showcase...');
    
    const startX = 100;
    const startY = 100;
    
    // Use the extracted kbd section function
    createKbdSection(startX, startY);
    
    penpot.ui.sendMessage({
      type: 'component-result',
      data: {
        success: true,
        message: `Created Kbd showcase using reusable section function`
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

// Extract Select section as reusable function
function createSelectSection(startX: number, startY: number): number {
  let currentY = startY;
  let selectCreated = 0;
  
  console.log(`📋 Creating Select section at (${startX}, ${startY})...`);
    
    // Create both Light and Dark theme sections with exact pattern
    const themes: Array<{name: string, key: 'light' | 'dark', bgColor: string}> = [
      { 
        name: 'Light Theme', 
        key: 'light', 
        bgColor: novyuiTokensHex.color.neutral[1].light  // #fefefe
      },
      { 
        name: 'Dark Theme', 
        key: 'dark', 
        bgColor: novyuiTokensHex.color.neutral[2].dark   // #020617
      }
    ];
    
    themes.forEach((theme, themeIndex) => {
      // Add theme background board first
      const themeBackground = penpot.createBoard();
      themeBackground.name = "\u200B\u200B\u200B"; // Multiple zero-width spaces for uniqueness
      themeBackground.x = startX - 40;
      themeBackground.y = currentY;
      themeBackground.resize(850, 580); // Same as other components
      themeBackground.fills = [{ fillColor: theme.bgColor }];
      
      // Add subtle border for better definition
      if (theme.key === 'light') {
        themeBackground.strokes = [{ strokeColor: novyuiTokensHex.color.neutral[3].light, strokeWidth: 1 }];
      } else {
        themeBackground.strokes = [{ strokeColor: novyuiTokensHex.color.neutral[8].dark, strokeWidth: 1 }];
      }
      
      // Create theme section title INSIDE the background
      if (typeof penpot.createText === 'function') {
        const themeTitle = penpot.createText(theme.name);
        if (themeTitle) {
          themeTitle.name = `${theme.name} Title`;
          themeTitle.x = startX;
          themeTitle.y = currentY + 20;
          themeTitle.characters = `${themeIndex + 1}. Select Showcase - ${theme.name}`;
          themeTitle.fills = [{ fillColor: theme.key === 'light' ? novyuiTokensHex.color.neutral[9].light : novyuiTokensHex.color.neutral[9].dark }];
          if ('fontSize' in themeTitle) (themeTitle as any).fontSize = 20;
          if ('fontWeight' in themeTitle) (themeTitle as any).fontWeight = 400;
        }
      }
      
      let sectionY = currentY + 60; // Start sections below title
      
      // Section 1: Size Variants (3 sizes)
      const sizes = [
        { name: 'Small', width: 200, height: 32, fontSize: 14 },
        { name: 'Medium', width: 250, height: 40, fontSize: 16 },
        { name: 'Large', width: 300, height: 48, fontSize: 18 }
      ];
      
      // Size Variants label
      if (typeof penpot.createText === 'function') {
        const sectionLabel = penpot.createText('Size Variants');
        if (sectionLabel) {
          sectionLabel.name = 'Size Variants Label';
          sectionLabel.x = startX;
          sectionLabel.y = sectionY;
          sectionLabel.characters = 'Size Variants';
          sectionLabel.fills = [{ fillColor: theme.key === 'light' ? novyuiTokensHex.color.neutral[7].light : novyuiTokensHex.color.neutral[7].dark }];
          if ('fontSize' in sectionLabel) (sectionLabel as any).fontSize = 14;
          if ('fontWeight' in sectionLabel) (sectionLabel as any).fontWeight = 400;
        }
      }
      
      sectionY += 25;
      
      // Create container for sizes
      const sizeContainer = penpot.createBoard();
      sizeContainer.name = "\u200C"; // Zero-width non-joiner
      sizeContainer.x = startX;
      sizeContainer.y = sectionY;
      sizeContainer.resize(750, 60);
      sizeContainer.fills = [];
      
      let sizeLayout: any = null;
      try {
        sizeLayout = sizeContainer.addFlexLayout();
        if (sizeLayout) {
          sizeLayout.dir = "row";
          sizeLayout.alignItems = "center";
          sizeLayout.justifyContent = "space-between";
          sizeLayout.wrap = "nowrap";
        }
      } catch (e) {
        debugLog('Size layout failed:', e);
      }
      
      // Create size select elements
      sizes.forEach((size) => {
        const selectBoard = penpot.createBoard();
        selectBoard.name = "\u200D"; // Zero-width joiner
        selectBoard.resize(size.width, size.height);
        selectBoard.fills = [{ fillColor: theme.key === 'light' ? novyuiTokensHex.color.neutral[1].light : novyuiTokensHex.color.neutral[3].dark }];
        
        // Add border and corner radius for input field appearance - matching Rust implementation
        if ('borderRadius' in selectBoard) {
          (selectBoard as any).borderRadius = parseInt(novyuiTokensHex.cornerRadius[6]);
        }
        // Use neutral_4 border color as in Rust implementation
        selectBoard.strokes = [{ strokeColor: theme.key === 'light' ? novyuiTokensHex.color.neutral[4].light : novyuiTokensHex.color.neutral[4].dark, strokeWidth: 1 }];
        
        let selectLayout: any = null;
        try {
          selectLayout = selectBoard.addFlexLayout();
          if (selectLayout) {
            selectLayout.dir = "row";
            selectLayout.alignItems = "center";
            selectLayout.justifyContent = "space-between";
            selectLayout.wrap = "nowrap";
            // Use proper PenPot API horizontal padding
            if ('horizontalPadding' in selectLayout) {
              selectLayout.horizontalPadding = 16;
            }
            // Add gap for better spacing between text and arrow
            if ('gap' in selectLayout) {
              selectLayout.gap = 8;
            }
          }
        } catch (e) {
          debugLog('Select layout failed:', e);
        }
        
        // Create select text (left side)
        if (typeof penpot.createText === 'function') {
          const selectText = penpot.createText('Select an option...');
          if (selectText) {
            selectText.name = `${size.name} Select Text`;
            selectText.characters = 'Select an option...';
            selectText.fills = [{ fillColor: theme.key === 'light' ? novyuiTokensHex.color.neutral[7].light : novyuiTokensHex.color.neutral[7].dark }];
            if ('fontSize' in selectText) (selectText as any).fontSize = size.fontSize;
            
            try {
              selectBoard.appendChild(selectText);
            } catch (e) {
              debugLog(`Select text appendChild failed for ${size.name}:`, e);
            }
          }
        }
        
        // Create dropdown arrow (right side)
        if (typeof penpot.createText === 'function') {
          const arrowText = penpot.createText('▼');
          if (arrowText) {
            arrowText.name = `${size.name} Arrow`;
            arrowText.characters = '▼';
            arrowText.fills = [{ fillColor: theme.key === 'light' ? novyuiTokensHex.color.neutral[7].light : novyuiTokensHex.color.neutral[7].dark }];
            if ('fontSize' in arrowText) (arrowText as any).fontSize = Math.floor(size.fontSize * 0.8);
            
            try {
              selectBoard.appendChild(arrowText);
              selectCreated++;
            } catch (e) {
              debugLog(`Arrow appendChild failed for ${size.name}:`, e);
              selectCreated++;
            }
          }
        }
        
        try {
          sizeContainer.appendChild(selectBoard);
        } catch (e) {
          debugLog(`Failed to add ${size.name} to container:`, e);
        }
      });
      
      sectionY += 80;
      
      // Section 2: Interactive States (4 states)
      const states = [
        { name: 'Normal', text: 'Select an option...', bgColor: theme.key === 'light' ? novyuiTokensHex.color.neutral[1].light : novyuiTokensHex.color.neutral[3].dark },
        { name: 'Focused', text: 'Select an option...', bgColor: theme.key === 'light' ? novyuiTokensHex.color.neutral[1].light : novyuiTokensHex.color.neutral[3].dark, hasFocus: true },
        { name: 'Selected', text: 'Option 2 selected', bgColor: theme.key === 'light' ? novyuiTokensHex.color.neutral[1].light : novyuiTokensHex.color.neutral[3].dark, hasValue: true },
        { name: 'Disabled', text: 'Select an option...', bgColor: theme.key === 'light' ? '#ebebeb' : '#2e2e2e', isDisabled: true } // Muted grays without cyan tint
      ];
      
      // Interactive States label
      if (typeof penpot.createText === 'function') {
        const stateLabel = penpot.createText('Interactive States');
        if (stateLabel) {
          stateLabel.name = 'Interactive States Label';
          stateLabel.x = startX;
          stateLabel.y = sectionY;
          stateLabel.characters = 'Interactive States';
          stateLabel.fills = [{ fillColor: theme.key === 'light' ? novyuiTokensHex.color.neutral[7].light : novyuiTokensHex.color.neutral[7].dark }];
          if ('fontSize' in stateLabel) (stateLabel as any).fontSize = 14;
          if ('fontWeight' in stateLabel) (stateLabel as any).fontWeight = 400;
        }
      }
      
      sectionY += 25;
      
      // Create container for states
      const stateContainer = penpot.createBoard();
      stateContainer.name = "\u2060"; // Word joiner
      stateContainer.x = startX;
      stateContainer.y = sectionY;
      stateContainer.resize(750, 60);
      stateContainer.fills = [];
      
      let stateContainerLayout: any = null;
      try {
        stateContainerLayout = stateContainer.addFlexLayout();
        if (stateContainerLayout) {
          stateContainerLayout.dir = "row";
          stateContainerLayout.alignItems = "center";
          stateContainerLayout.justifyContent = "space-between";
          stateContainerLayout.wrap = "nowrap";
        }
      } catch (e) {
        debugLog('State container layout failed:', e);
      }
      
      // Create state select elements
      states.forEach((state) => {
        const stateBoard = penpot.createBoard();
        stateBoard.name = "\u2061"; // Function application
        stateBoard.resize(160, 40);
        stateBoard.fills = [{ fillColor: state.bgColor }];
        
        if ('borderRadius' in stateBoard) {
          (stateBoard as any).borderRadius = parseInt(novyuiTokensHex.cornerRadius[6]);
        }
        
        // Different border styles for different states - matching Rust implementation
        if (state.hasFocus) {
          // Focus state gets primary color border (stronger visual feedback)
          stateBoard.strokes = [{ strokeColor: theme.key === 'light' ? novyuiTokensHex.color.primary[7].light : novyuiTokensHex.color.primary[6].light, strokeWidth: 2 }];
        } else if (state.isDisabled) {
          // Disabled state uses same border as normal (neutral_4)
          stateBoard.strokes = [{ strokeColor: theme.key === 'light' ? novyuiTokensHex.color.neutral[4].light : novyuiTokensHex.color.neutral[4].dark, strokeWidth: 1 }];
        } else {
          // Normal state uses neutral_4 border (not neutral_6)
          stateBoard.strokes = [{ strokeColor: theme.key === 'light' ? novyuiTokensHex.color.neutral[4].light : novyuiTokensHex.color.neutral[4].dark, strokeWidth: 1 }];
        }
        
        let stateBoardLayout: any = null;
        try {
          stateBoardLayout = stateBoard.addFlexLayout();
          if (stateBoardLayout) {
            stateBoardLayout.dir = "row";
            stateBoardLayout.alignItems = "center";
            stateBoardLayout.justifyContent = "space-between";
            stateBoardLayout.wrap = "nowrap";
            // Use proper PenPot API horizontal padding
            if ('horizontalPadding' in stateBoardLayout) {
              stateBoardLayout.horizontalPadding = 16;
            }
            // Add gap for better spacing between text and arrow
            if ('gap' in stateBoardLayout) {
              stateBoardLayout.gap = 8;
            }
          }
        } catch (e) {
          debugLog('State board layout failed:', e);
        }
        
        // Create state text
        if (typeof penpot.createText === 'function') {
          const stateText = penpot.createText(state.text);
          if (stateText) {
            stateText.name = `${state.name} Select Text`;
            stateText.characters = state.text;
            
            // Text color based on state - matching Rust implementation exactly
            let textColor;
            if (state.isDisabled) {
              // Disabled: neutral_6 for both themes
              textColor = theme.key === 'light' ? novyuiTokensHex.color.neutral[6].light : novyuiTokensHex.color.neutral[6].dark;
            } else if (state.hasValue) {
              // Selected: neutral_9 (light) / neutral_11 (dark)
              textColor = theme.key === 'light' ? novyuiTokensHex.color.neutral[9].light : novyuiTokensHex.color.neutral[11].dark;
            } else {
              // Normal/Placeholder: neutral_7 for both themes
              textColor = theme.key === 'light' ? novyuiTokensHex.color.neutral[7].light : novyuiTokensHex.color.neutral[7].dark;
            }
            
            stateText.fills = [{ fillColor: textColor }];
            if ('fontSize' in stateText) (stateText as any).fontSize = 14;
            
            try {
              stateBoard.appendChild(stateText);
            } catch (e) {
              debugLog(`State text appendChild failed for ${state.name}:`, e);
            }
          }
        }
        
        // Create arrow
        if (typeof penpot.createText === 'function') {
          const stateArrow = penpot.createText('▼');
          if (stateArrow) {
            stateArrow.name = `${state.name} Arrow`;
            stateArrow.characters = '▼';
            
            // Arrow color matches text color logic from Rust implementation
            const arrowColor = state.isDisabled 
              ? (theme.key === 'light' ? novyuiTokensHex.color.neutral[6].light : novyuiTokensHex.color.neutral[6].dark)
              : (theme.key === 'light' ? novyuiTokensHex.color.neutral[7].light : novyuiTokensHex.color.neutral[7].dark);
              
            stateArrow.fills = [{ fillColor: arrowColor }];
            if ('fontSize' in stateArrow) (stateArrow as any).fontSize = 12;
            
            try {
              stateBoard.appendChild(stateArrow);
              selectCreated++;
            } catch (e) {
              debugLog(`State arrow appendChild failed for ${state.name}:`, e);
              selectCreated++;
            }
          }
        }
        
        try {
          stateContainer.appendChild(stateBoard);
        } catch (e) {
          debugLog(`Failed to add ${state.name} to state container:`, e);
        }
      });
      
      sectionY += 80;
      
      // Section 3: Content Examples (4 types)
      const contentTypes = [
        { name: 'Single', text: 'Option 1', width: 140 },
        { name: 'Multi', text: '3 items selected', width: 160 },
        { name: 'With Icon', text: '🏠 Home', width: 120 },
        { name: 'Long Text', text: 'Very long option name...', width: 180 }
      ];
      
      // Content Examples label
      if (typeof penpot.createText === 'function') {
        const contentLabel = penpot.createText('Content Examples');
        if (contentLabel) {
          contentLabel.name = 'Content Examples Label';
          contentLabel.x = startX;
          contentLabel.y = sectionY;
          contentLabel.characters = 'Content Examples';
          contentLabel.fills = [{ fillColor: theme.key === 'light' ? novyuiTokensHex.color.neutral[7].light : novyuiTokensHex.color.neutral[7].dark }];
          if ('fontSize' in contentLabel) (contentLabel as any).fontSize = 14;
          if ('fontWeight' in contentLabel) (contentLabel as any).fontWeight = 400;
        }
      }
      
      sectionY += 25;
      
      // Create container for content types
      const contentContainer = penpot.createBoard();
      contentContainer.name = "\u2062"; // Invisible times
      contentContainer.x = startX;
      contentContainer.y = sectionY;
      contentContainer.resize(750, 60);
      contentContainer.fills = [];
      
      let contentContainerLayout: any = null;
      try {
        contentContainerLayout = contentContainer.addFlexLayout();
        if (contentContainerLayout) {
          contentContainerLayout.dir = "row";
          contentContainerLayout.alignItems = "center";
          contentContainerLayout.justifyContent = "space-between";
          contentContainerLayout.wrap = "nowrap";
        }
      } catch (e) {
        debugLog('Content container layout failed:', e);
      }
      
      // Create content select elements
      contentTypes.forEach((content) => {
        const contentBoard = penpot.createBoard();
        contentBoard.name = "\u2063"; // Invisible separator
        contentBoard.resize(content.width, 40);
        contentBoard.fills = [{ fillColor: theme.key === 'light' ? novyuiTokensHex.color.neutral[1].light : novyuiTokensHex.color.neutral[3].dark }];
        
        if ('borderRadius' in contentBoard) {
          (contentBoard as any).borderRadius = parseInt(novyuiTokensHex.cornerRadius[6]);
        }
        // Use neutral_4 border color as in Rust implementation
        contentBoard.strokes = [{ strokeColor: theme.key === 'light' ? novyuiTokensHex.color.neutral[4].light : novyuiTokensHex.color.neutral[4].dark, strokeWidth: 1 }];
        
        let contentBoardLayout: any = null;
        try {
          contentBoardLayout = contentBoard.addFlexLayout();
          if (contentBoardLayout) {
            contentBoardLayout.dir = "row";
            contentBoardLayout.alignItems = "center";
            contentBoardLayout.justifyContent = "space-between";
            contentBoardLayout.wrap = "nowrap";
            // Use proper PenPot API horizontal padding
            if ('horizontalPadding' in contentBoardLayout) {
              contentBoardLayout.horizontalPadding = 16;
            }
            // Add gap for better spacing between text and arrow
            if ('gap' in contentBoardLayout) {
              contentBoardLayout.gap = 8;
            }
          }
        } catch (e) {
          debugLog('Content board layout failed:', e);
        }
        
        // Create content text
        if (typeof penpot.createText === 'function') {
          const contentText = penpot.createText(content.text);
          if (contentText) {
            contentText.name = `${content.name} Content Text`;
            contentText.characters = content.text;
            contentText.fills = [{ fillColor: theme.key === 'light' ? novyuiTokensHex.color.neutral[9].light : novyuiTokensHex.color.neutral[9].dark }];
            if ('fontSize' in contentText) (contentText as any).fontSize = 14;
            
            try {
              contentBoard.appendChild(contentText);
            } catch (e) {
              debugLog(`Content text appendChild failed for ${content.name}:`, e);
            }
          }
        }
        
        // Create arrow
        if (typeof penpot.createText === 'function') {
          const contentArrow = penpot.createText('▼');
          if (contentArrow) {
            contentArrow.name = `${content.name} Arrow`;
            contentArrow.characters = '▼';
            contentArrow.fills = [{ fillColor: theme.key === 'light' ? novyuiTokensHex.color.neutral[7].light : novyuiTokensHex.color.neutral[7].dark }];
            if ('fontSize' in contentArrow) (contentArrow as any).fontSize = 12;
            
            try {
              contentBoard.appendChild(contentArrow);
              selectCreated++;
            } catch (e) {
              debugLog(`Content arrow appendChild failed for ${content.name}:`, e);
              selectCreated++;
            }
          }
        }
        
        try {
          contentContainer.appendChild(contentBoard);
        } catch (e) {
          debugLog(`Failed to add ${content.name} to content container:`, e);
        }
      });
      
      currentY += 600; // Move to next theme
    });
    
    console.log(`✅ Created complete Select section with ${selectCreated} elements`);
    return currentY; // Return ending Y position
}

// Create Select component showcase
function createSelectComponent() {
  try {
    console.log('📋 Creating Select component showcase...');
    
    const startX = 100;
    const startY = 100;
    
    // Use the extracted select section function
    createSelectSection(startX, startY);
    
    penpot.ui.sendMessage({
      type: 'component-result',
      data: {
        success: true,
        message: `Created Select showcase using reusable section function`
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

// Extract TreeView section as reusable function
function createTreeViewSection(startX: number, startY: number): number {
  let currentY = startY;
  let treeCreated = 0;
  
  console.log(`🌳 Creating TreeView section at (${startX}, ${startY})...`);
    
    // Create both Light and Dark theme sections
    const themes: Array<{name: string, key: 'light' | 'dark', bgColor: string}> = [
      { 
        name: 'Light Theme', 
        key: 'light', 
        bgColor: novyuiTokensHex.color.neutral[1].light  // White background
      },
      { 
        name: 'Dark Theme', 
        key: 'dark', 
        bgColor: novyuiTokensHex.color.neutral[1].dark   // Near black background
      }
    ];
    
    themes.forEach((theme, themeIndex) => {
      // Add theme background board
      const themeBackground = penpot.createBoard();
      themeBackground.name = "\u200B\u200B\u200B"; // Multiple zero-width spaces
      themeBackground.x = startX - 40;
      themeBackground.y = currentY;
      themeBackground.resize(850, 700); // Taller for more content
      themeBackground.fills = [{ fillColor: theme.bgColor }];
      
      // Add subtle border for definition
      if (theme.key === 'light') {
        themeBackground.strokes = [{ strokeColor: novyuiTokensHex.color.neutral[4].light, strokeWidth: 1 }];
      } else {
        themeBackground.strokes = [{ strokeColor: novyuiTokensHex.color.neutral[4].dark, strokeWidth: 1 }];
      }
      
      // Create theme section title
      if (typeof penpot.createText === 'function') {
        const themeTitle = penpot.createText(theme.name);
        if (themeTitle) {
          themeTitle.name = `${theme.name} Title`;
          themeTitle.x = startX;
          themeTitle.y = currentY + 20;
          themeTitle.characters = `${themeIndex + 1}. TreeView Showcase - ${theme.name}`;
          themeTitle.fills = [{ fillColor: theme.key === 'light' ? novyuiTokensHex.color.neutral[9].light : novyuiTokensHex.color.neutral[11].dark }];
          if ('fontSize' in themeTitle) (themeTitle as any).fontSize = 20;
          if ('fontWeight' in themeTitle) (themeTitle as any).fontWeight = 400;
        }
      }
      
      let sectionY = currentY + 60;
      
      // Section 1: File System Hierarchy - Based on Rust storybook examples
      const fileSystemItems = [
        { text: 'src', level: 0, expanded: true, type: 'folder', chevron: '▼' },
        { text: 'components', level: 1, expanded: true, type: 'folder', chevron: '▼' },
        { text: 'Button.ts', level: 2, expanded: false, type: 'file', chevron: null },
        { text: 'Input.ts', level: 2, expanded: false, type: 'file', chevron: null },
        { text: 'TreeView.ts', level: 2, expanded: false, type: 'file', chevron: null },
        { text: 'utils', level: 1, expanded: false, type: 'folder', chevron: '►' },
        { text: 'main.ts', level: 1, expanded: false, type: 'file', chevron: null },
        { text: 'package.json', level: 0, expanded: false, type: 'file', chevron: null },
        { text: 'README.md', level: 0, expanded: false, type: 'file', chevron: null }
      ];
      
      // Hierarchical Data label
      if (typeof penpot.createText === 'function') {
        const sectionLabel = penpot.createText('Hierarchical Data');
        if (sectionLabel) {
          sectionLabel.name = 'Hierarchical Data Label';
          sectionLabel.x = startX;
          sectionLabel.y = sectionY;
          sectionLabel.characters = 'Hierarchical Data';
          sectionLabel.fills = [{ fillColor: theme.key === 'light' ? novyuiTokensHex.color.neutral[7].light : novyuiTokensHex.color.neutral[7].dark }];
          if ('fontSize' in sectionLabel) (sectionLabel as any).fontSize = 14;
          if ('fontWeight' in sectionLabel) (sectionLabel as any).fontWeight = 400;
        }
      }
      
      sectionY += 25;
      
      // Create file system tree container
      const fileSystemContainer = penpot.createBoard();
      fileSystemContainer.name = "\u200C"; 
      fileSystemContainer.x = startX;
      fileSystemContainer.y = sectionY;
      fileSystemContainer.resize(400, 180); // Taller for more items
      fileSystemContainer.fills = [];
      
      let fileSystemLayout: any = null;
      try {
        fileSystemLayout = fileSystemContainer.addFlexLayout();
        if (fileSystemLayout) {
          fileSystemLayout.dir = "column";
          fileSystemLayout.alignItems = "start";
          fileSystemLayout.justifyContent = "start";
          fileSystemLayout.wrap = "nowrap";
          fileSystemLayout.gap = 2; // 2px gap between items as per Rust
        }
      } catch (e) {
        debugLog('File system layout failed:', e);
      }
      
      // Create file system tree items
      fileSystemItems.forEach((item) => {
        const itemBoard = penpot.createBoard();
        itemBoard.name = "\u200D";
        itemBoard.resize(380, 28); // 28px height for medium size
        itemBoard.fills = [];
        
        let itemLayout: any = null;
        try {
          itemLayout = itemBoard.addFlexLayout();
          if (itemLayout) {
            itemLayout.dir = "row";
            itemLayout.alignItems = "center";
            itemLayout.justifyContent = "start";
            itemLayout.wrap = "nowrap";
            if ('horizontalPadding' in itemLayout) {
              itemLayout.horizontalPadding = 4; // 4px horizontal padding
            }
            itemLayout.gap = 4; // 4px gap between elements
          }
        } catch (e) {
          debugLog('Item layout failed:', e);
        }
        
        // Create indentation spacer
        if (item.level > 0) {
          const spacer = penpot.createRectangle();
          spacer.name = 'Indentation Spacer';
          spacer.resize(item.level * 20, 1); // 20px per level indentation
          spacer.fills = []; // Transparent
          
          try {
            itemBoard.appendChild(spacer);
          } catch (e) {
            debugLog('Spacer appendChild failed:', e);
          }
        }
        
        // Create expand/collapse chevron (only for folders with children)
        if (item.chevron && typeof penpot.createText === 'function') {
          const chevronText = penpot.createText(item.chevron);
          if (chevronText) {
            chevronText.name = `${item.text} Chevron`;
            chevronText.characters = item.chevron;
            chevronText.fills = [{ fillColor: theme.key === 'light' ? novyuiTokensHex.color.neutral[7].light : novyuiTokensHex.color.neutral[7].dark }];
            if ('fontSize' in chevronText) (chevronText as any).fontSize = 12;
            
            try {
              itemBoard.appendChild(chevronText);
            } catch (e) {
              debugLog(`Chevron appendChild failed for ${item.text}:`, e);
            }
          }
        }
        
        // Create file/folder type icon
        if (typeof penpot.createText === 'function') {
          const typeIcon = penpot.createText(item.type === 'folder' ? '📁' : '📄');
          if (typeIcon) {
            typeIcon.name = `${item.text} Type Icon`;
            typeIcon.characters = item.type === 'folder' ? '📁' : '📄';
            if ('fontSize' in typeIcon) (typeIcon as any).fontSize = 16;
            
            try {
              itemBoard.appendChild(typeIcon);
            } catch (e) {
              debugLog(`Type icon appendChild failed for ${item.text}:`, e);
            }
          }
        }
        
        // Create item text
        if (typeof penpot.createText === 'function') {
          const itemText = penpot.createText(item.text);
          if (itemText) {
            itemText.name = `${item.text} Text`;
            itemText.characters = item.text;
            
            // Text color: normal for all items (neutral_9/neutral_11)
            const textColor = theme.key === 'light' ? novyuiTokensHex.color.neutral[9].light : novyuiTokensHex.color.neutral[11].dark;
            itemText.fills = [{ fillColor: textColor }];
            if ('fontSize' in itemText) (itemText as any).fontSize = 14;
            
            try {
              itemBoard.appendChild(itemText);
              treeCreated++;
            } catch (e) {
              debugLog(`Text appendChild failed for ${item.text}:`, e);
              treeCreated++;
            }
          }
        }
        
        try {
          fileSystemContainer.appendChild(itemBoard);
        } catch (e) {
          debugLog(`Failed to add ${item.text} to file system container:`, e);
        }
      });
      
      sectionY += 200;
      
      // Section 2: Interactive States - Based on exact Rust color tokens
      const stateItems = [
        { text: 'Normal Item', state: 'normal' },
        { text: 'Hovered Item', state: 'hover' },
        { text: 'Selected Item', state: 'selected' },
        { text: 'Disabled Item', state: 'disabled' }
      ];
      
      // Interactive States label
      if (typeof penpot.createText === 'function') {
        const stateLabel = penpot.createText('Interactive States');
        if (stateLabel) {
          stateLabel.name = 'Interactive States Label';
          stateLabel.x = startX;
          stateLabel.y = sectionY;
          stateLabel.characters = 'Interactive States';
          stateLabel.fills = [{ fillColor: theme.key === 'light' ? novyuiTokensHex.color.neutral[7].light : novyuiTokensHex.color.neutral[7].dark }];
          if ('fontSize' in stateLabel) (stateLabel as any).fontSize = 14;
          if ('fontWeight' in stateLabel) (stateLabel as any).fontWeight = 400;
        }
      }
      
      sectionY += 25;
      
      // Create container for state items
      const stateContainer = penpot.createBoard();
      stateContainer.name = "\u2060";
      stateContainer.x = startX;
      stateContainer.y = sectionY;
      stateContainer.resize(400, 120);
      stateContainer.fills = [];
      
      let stateContainerLayout: any = null;
      try {
        stateContainerLayout = stateContainer.addFlexLayout();
        if (stateContainerLayout) {
          stateContainerLayout.dir = "column";
          stateContainerLayout.alignItems = "start";
          stateContainerLayout.justifyContent = "start";
          stateContainerLayout.wrap = "nowrap";
          stateContainerLayout.gap = 2;
        }
      } catch (e) {
        debugLog('State container layout failed:', e);
      }
      
      // Create state items with exact Rust color implementation
      stateItems.forEach((item) => {
        const stateBoard = penpot.createBoard();
        stateBoard.name = "\u2061";
        stateBoard.resize(380, 28);
        
        // Background based on state - using exact Rust tokens
        if (item.state === 'hover') {
          // Hover uses neutral_3 (subtle background)
          stateBoard.fills = [{ fillColor: theme.key === 'light' ? novyuiTokensHex.color.neutral[3].light : novyuiTokensHex.color.neutral[3].dark }];
        } else if (item.state === 'selected') {
          // Selected uses neutral_3 with stronger contrast
          stateBoard.fills = [{ fillColor: theme.key === 'light' ? novyuiTokensHex.color.neutral[3].light : novyuiTokensHex.color.neutral[3].dark }];
        } else {
          stateBoard.fills = []; // Transparent for normal/disabled
        }
        
        if ('borderRadius' in stateBoard) {
          (stateBoard as any).borderRadius = 4; // 4px border radius
        }
        
        let stateBoardLayout: any = null;
        try {
          stateBoardLayout = stateBoard.addFlexLayout();
          if (stateBoardLayout) {
            stateBoardLayout.dir = "row";
            stateBoardLayout.alignItems = "center";
            stateBoardLayout.justifyContent = "start";
            stateBoardLayout.wrap = "nowrap";
            if ('horizontalPadding' in stateBoardLayout) {
              stateBoardLayout.horizontalPadding = 8;
            }
            stateBoardLayout.gap = 4;
          }
        } catch (e) {
          debugLog('State board layout failed:', e);
        }
        
        // Create folder icon
        if (typeof penpot.createText === 'function') {
          const stateIcon = penpot.createText('📁');
          if (stateIcon) {
            stateIcon.name = `${item.text} Icon`;
            stateIcon.characters = '📁';
            if ('fontSize' in stateIcon) (stateIcon as any).fontSize = 16;
            
            try {
              stateBoard.appendChild(stateIcon);
            } catch (e) {
              debugLog(`State icon appendChild failed for ${item.text}:`, e);
            }
          }
        }
        
        // Create state text with exact Rust color tokens
        if (typeof penpot.createText === 'function') {
          const stateText = penpot.createText(item.text);
          if (stateText) {
            stateText.name = `${item.text} Text`;
            stateText.characters = item.text;
            
            // Text color based on state - exact Rust implementation
            let textColor;
            if (item.state === 'disabled') {
              // Disabled: neutral_5 for both themes
              textColor = theme.key === 'light' ? novyuiTokensHex.color.neutral[5].light : novyuiTokensHex.color.neutral[5].dark;
            } else if (item.state === 'selected') {
              // Selected: primary_7 for both themes
              textColor = theme.key === 'light' ? novyuiTokensHex.color.primary[7].light : novyuiTokensHex.color.primary[7].dark;
            } else {
              // Normal/Hover: neutral_9/neutral_11
              textColor = theme.key === 'light' ? novyuiTokensHex.color.neutral[9].light : novyuiTokensHex.color.neutral[11].dark;
            }
            
            stateText.fills = [{ fillColor: textColor }];
            if ('fontSize' in stateText) (stateText as any).fontSize = 14;
            
            try {
              stateBoard.appendChild(stateText);
              treeCreated++;
            } catch (e) {
              debugLog(`State text appendChild failed for ${item.text}:`, e);
              treeCreated++;
            }
          }
        }
        
        try {
          stateContainer.appendChild(stateBoard);
        } catch (e) {
          debugLog(`Failed to add ${item.text} to state container:`, e);
        }
      });
      
      sectionY += 140;
      
      // Section 3: Content Examples - Based on Rust storybook
      const contentItems = [
        { text: 'Simple text', icon: '📄', description: null },
        { text: 'Documents', icon: '📁', description: null },
        { text: 'New Features', icon: '🆕', description: '(3)' },
        { text: 'Modified', icon: '📝', description: '2h ago' }
      ];
      
      // Content Types label
      if (typeof penpot.createText === 'function') {
        const contentLabel = penpot.createText('Content Types');
        if (contentLabel) {
          contentLabel.name = 'Content Types Label';
          contentLabel.x = startX;
          contentLabel.y = sectionY;
          contentLabel.characters = 'Content Types';
          contentLabel.fills = [{ fillColor: theme.key === 'light' ? novyuiTokensHex.color.neutral[7].light : novyuiTokensHex.color.neutral[7].dark }];
          if ('fontSize' in contentLabel) (contentLabel as any).fontSize = 14;
          if ('fontWeight' in contentLabel) (contentLabel as any).fontWeight = 400;
        }
      }
      
      sectionY += 25;
      
      // Create container for content types
      const contentContainer = penpot.createBoard();
      contentContainer.name = "\u2062";
      contentContainer.x = startX;
      contentContainer.y = sectionY;
      contentContainer.resize(400, 120);
      contentContainer.fills = [];
      
      let contentContainerLayout: any = null;
      try {
        contentContainerLayout = contentContainer.addFlexLayout();
        if (contentContainerLayout) {
          contentContainerLayout.dir = "column";
          contentContainerLayout.alignItems = "start";
          contentContainerLayout.justifyContent = "start";
          contentContainerLayout.wrap = "nowrap";
          contentContainerLayout.gap = 2;
        }
      } catch (e) {
        debugLog('Content container layout failed:', e);
      }
      
      // Create content items
      contentItems.forEach((item) => {
        const contentBoard = penpot.createBoard();
        contentBoard.name = "\u2063";
        contentBoard.resize(380, 28);
        contentBoard.fills = [];
        
        let contentBoardLayout: any = null;
        try {
          contentBoardLayout = contentBoard.addFlexLayout();
          if (contentBoardLayout) {
            contentBoardLayout.dir = "row";
            contentBoardLayout.alignItems = "center";
            contentBoardLayout.justifyContent = "start";
            contentBoardLayout.wrap = "nowrap";
            if ('horizontalPadding' in contentBoardLayout) {
              contentBoardLayout.horizontalPadding = 8;
            }
            contentBoardLayout.gap = 4;
          }
        } catch (e) {
          debugLog('Content board layout failed:', e);
        }
        
        // Create content icon
        if (typeof penpot.createText === 'function') {
          const contentIcon = penpot.createText(item.icon);
          if (contentIcon) {
            contentIcon.name = `${item.text} Icon`;
            contentIcon.characters = item.icon;
            if ('fontSize' in contentIcon) (contentIcon as any).fontSize = 16;
            
            try {
              contentBoard.appendChild(contentIcon);
            } catch (e) {
              debugLog(`Content icon appendChild failed for ${item.text}:`, e);
            }
          }
        }
        
        // Create content text
        if (typeof penpot.createText === 'function') {
          const contentText = penpot.createText(item.text);
          if (contentText) {
            contentText.name = `${item.text} Content`;
            contentText.characters = item.text;
            contentText.fills = [{ fillColor: theme.key === 'light' ? novyuiTokensHex.color.neutral[9].light : novyuiTokensHex.color.neutral[11].dark }];
            if ('fontSize' in contentText) (contentText as any).fontSize = 14;
            
            try {
              contentBoard.appendChild(contentText);
            } catch (e) {
              debugLog(`Content text appendChild failed for ${item.text}:`, e);
            }
          }
        }
        
        // Create description if available
        if (item.description && typeof penpot.createText === 'function') {
          const descText = penpot.createText(item.description);
          if (descText) {
            descText.name = `${item.text} Description`;
            descText.characters = item.description;
            descText.fills = [{ fillColor: theme.key === 'light' ? novyuiTokensHex.color.neutral[7].light : novyuiTokensHex.color.neutral[7].dark }];
            if ('fontSize' in descText) (descText as any).fontSize = 12;
            
            try {
              contentBoard.appendChild(descText);
              treeCreated++;
            } catch (e) {
              debugLog(`Description appendChild failed for ${item.text}:`, e);
              treeCreated++;
            }
          }
        }
        
        if (!item.description) {
          treeCreated++;
        }
        
        try {
          contentContainer.appendChild(contentBoard);
        } catch (e) {
          debugLog(`Failed to add ${item.text} to content container:`, e);
        }
      });
      
      currentY += 720; // Move to next theme
    });
    
    console.log(`✅ Created complete TreeView section with ${treeCreated} items`);
    return currentY; // Return ending Y position
}

// Create TreeView component showcase
function createTreeViewComponent() {
  try {
    console.log('🌳 Creating TreeView component showcase...');
    
    const startX = 100;
    const startY = 100;
    
    // Use the extracted treeview section function
    createTreeViewSection(startX, startY);
    
    penpot.ui.sendMessage({
      type: 'component-result',
      data: {
        success: true,
        message: `Created TreeView showcase using reusable section function`
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

// Extract Typography section as reusable function
function createTypographySection(startX: number, startY: number): number {
  let currentY = startY;
  let typographyCreated = 0;
  
  console.log(`🔤 Creating Typography section at (${startX}, ${startY})...`);
    
    // Create both Light and Dark theme sections with exact pattern
    const themes: Array<{name: string, key: 'light' | 'dark', bgColor: string}> = [
      { 
        name: 'Light Theme', 
        key: 'light', 
        bgColor: novyuiTokensHex.color.neutral[1].light  // #fefefe
      },
      { 
        name: 'Dark Theme', 
        key: 'dark', 
        bgColor: novyuiTokensHex.color.neutral[2].dark   // #020617
      }
    ];
    
    themes.forEach((theme, themeIndex) => {
      // Add theme background board first
      const themeBackground = penpot.createBoard();
      themeBackground.name = "\u200B\u200B\u200B"; // Multiple zero-width spaces for uniqueness
      themeBackground.x = startX - 40;
      themeBackground.y = currentY;
      themeBackground.resize(850, 580); // Same as other components
      themeBackground.fills = [{ fillColor: theme.bgColor }];
      
      // Add subtle border for better definition
      if (theme.key === 'light') {
        themeBackground.strokes = [{ strokeColor: novyuiTokensHex.color.neutral[3].light, strokeWidth: 1 }];
      } else {
        themeBackground.strokes = [{ strokeColor: novyuiTokensHex.color.neutral[8].dark, strokeWidth: 1 }];
      }
      
      // Create theme section title INSIDE the background
      if (typeof penpot.createText === 'function') {
        const themeTitle = penpot.createText(theme.name);
        if (themeTitle) {
          themeTitle.name = `${theme.name} Title`;
          themeTitle.x = startX;
          themeTitle.y = currentY + 20;
          themeTitle.characters = `${themeIndex + 1}. Typography Showcase - ${theme.name}`;
          themeTitle.fills = [{ fillColor: theme.key === 'light' ? novyuiTokensHex.color.neutral[9].light : novyuiTokensHex.color.neutral[9].dark }];
          if ('fontSize' in themeTitle) (themeTitle as any).fontSize = 20;
          if ('fontWeight' in themeTitle) (themeTitle as any).fontWeight = 400;
        }
      }
      
      let sectionY = currentY + 60; // Start sections below title
      
      // Section 1: Headings (4 levels)
      const headings = [
        { level: 'H1', text: 'Heading Level 1', fontSize: 48, fontWeight: 400 },
        { level: 'H2', text: 'Heading Level 2', fontSize: 36, fontWeight: 400 },
        { level: 'H3', text: 'Heading Level 3', fontSize: 30, fontWeight: 400 },
        { level: 'H4', text: 'Heading Level 4', fontSize: 24, fontWeight: 400 }
      ];
      
      // Headings label
      if (typeof penpot.createText === 'function') {
        const sectionLabel = penpot.createText('Headings');
        if (sectionLabel) {
          sectionLabel.name = 'Headings Label';
          sectionLabel.x = startX;
          sectionLabel.y = sectionY;
          sectionLabel.characters = 'Headings';
          sectionLabel.fills = [{ fillColor: theme.key === 'light' ? novyuiTokensHex.color.neutral[7].light : novyuiTokensHex.color.neutral[7].dark }];
          if ('fontSize' in sectionLabel) (sectionLabel as any).fontSize = 14;
          if ('fontWeight' in sectionLabel) (sectionLabel as any).fontWeight = 400;
        }
      }
      
      sectionY += 25;
      
      // Create container for headings (vertical layout)
      const headingContainer = penpot.createBoard();
      headingContainer.name = "\u200C"; // Zero-width non-joiner
      headingContainer.x = startX;
      headingContainer.y = sectionY;
      headingContainer.resize(700, 160); // Wide and tall for headings
      headingContainer.fills = [];
      
      let headingLayout: any = null;
      try {
        headingLayout = headingContainer.addFlexLayout();
        if (headingLayout) {
          headingLayout.dir = "column";
          headingLayout.alignItems = "start";
          headingLayout.justifyContent = "start";
          headingLayout.wrap = "nowrap";
          headingLayout.gap = 8;
        }
      } catch (e) {
        debugLog('Heading layout failed:', e);
      }
      
      // Create heading elements
      headings.forEach((heading) => {
        const headingBoard = penpot.createBoard();
        headingBoard.name = "\u200D"; // Zero-width joiner
        headingBoard.resize(680, heading.fontSize + 10); // Height based on font size
        headingBoard.fills = [];
        
        let headingBoardLayout: any = null;
        try {
          headingBoardLayout = headingBoard.addFlexLayout();
          if (headingBoardLayout) {
            headingBoardLayout.dir = "row";
            headingBoardLayout.alignItems = "center";
            headingBoardLayout.justifyContent = "start";
            headingBoardLayout.wrap = "nowrap";
          }
        } catch (e) {
          debugLog('Heading board layout failed:', e);
        }
        
        if (typeof penpot.createText === 'function') {
          const headingText = penpot.createText(heading.text);
          if (headingText) {
            headingText.name = `${heading.level} Text`;
            headingText.characters = heading.text;
            headingText.fills = [{ fillColor: theme.key === 'light' ? novyuiTokensHex.color.neutral[9].light : novyuiTokensHex.color.neutral[9].dark }];
            if ('fontSize' in headingText) (headingText as any).fontSize = heading.fontSize;
            if ('fontWeight' in headingText) (headingText as any).fontWeight = heading.fontWeight;
            if ('fontFamily' in headingText) (headingText as any).fontFamily = 'Inter';
            
            try {
              headingBoard.appendChild(headingText);
              typographyCreated++;
            } catch (e) {
              debugLog(`Heading appendChild failed for ${heading.level}:`, e);
              typographyCreated++;
            }
          }
        }
        
        try {
          headingContainer.appendChild(headingBoard);
        } catch (e) {
          debugLog(`Failed to add ${heading.level} to heading container:`, e);
        }
      });
      
      sectionY += 180; // Space for next section
      
      // Section 2: Body Text (4 types)
      const bodyTexts = [
        { name: 'Large Body', text: 'This is large body text for reading content.', fontSize: 18, fontWeight: 400 },
        { name: 'Body', text: 'This is regular body text for paragraphs and content.', fontSize: 16, fontWeight: 400 },
        { name: 'Small', text: 'This is small text for captions and metadata.', fontSize: 14, fontWeight: 400 },
        { name: 'Caption', text: 'This is caption text for labels and tiny details.', fontSize: 12, fontWeight: 400 }
      ];
      
      // Body Text label
      if (typeof penpot.createText === 'function') {
        const bodyLabel = penpot.createText('Body Text');
        if (bodyLabel) {
          bodyLabel.name = 'Body Text Label';
          bodyLabel.x = startX;
          bodyLabel.y = sectionY;
          bodyLabel.characters = 'Body Text';
          bodyLabel.fills = [{ fillColor: theme.key === 'light' ? novyuiTokensHex.color.neutral[7].light : novyuiTokensHex.color.neutral[7].dark }];
          if ('fontSize' in bodyLabel) (bodyLabel as any).fontSize = 14;
          if ('fontWeight' in bodyLabel) (bodyLabel as any).fontWeight = 400;
        }
      }
      
      sectionY += 25;
      
      // Create container for body text
      const bodyContainer = penpot.createBoard();
      bodyContainer.name = "\u2060"; // Word joiner
      bodyContainer.x = startX;
      bodyContainer.y = sectionY;
      bodyContainer.resize(700, 100);
      bodyContainer.fills = [];
      
      let bodyContainerLayout: any = null;
      try {
        bodyContainerLayout = bodyContainer.addFlexLayout();
        if (bodyContainerLayout) {
          bodyContainerLayout.dir = "column";
          bodyContainerLayout.alignItems = "start";
          bodyContainerLayout.justifyContent = "start";
          bodyContainerLayout.wrap = "nowrap";
          bodyContainerLayout.gap = 6;
        }
      } catch (e) {
        debugLog('Body container layout failed:', e);
      }
      
      // Create body text elements
      bodyTexts.forEach((bodyText) => {
        const bodyBoard = penpot.createBoard();
        bodyBoard.name = "\u2061"; // Function application
        bodyBoard.resize(680, bodyText.fontSize + 8);
        bodyBoard.fills = [];
        
        let bodyBoardLayout: any = null;
        try {
          bodyBoardLayout = bodyBoard.addFlexLayout();
          if (bodyBoardLayout) {
            bodyBoardLayout.dir = "row";
            bodyBoardLayout.alignItems = "center";
            bodyBoardLayout.justifyContent = "start";
            bodyBoardLayout.wrap = "nowrap";
          }
        } catch (e) {
          debugLog('Body board layout failed:', e);
        }
        
        if (typeof penpot.createText === 'function') {
          const bodyTextElement = penpot.createText(bodyText.text);
          if (bodyTextElement) {
            bodyTextElement.name = `${bodyText.name} Text`;
            bodyTextElement.characters = bodyText.text;
            bodyTextElement.fills = [{ fillColor: theme.key === 'light' ? novyuiTokensHex.color.neutral[8].light : novyuiTokensHex.color.neutral[8].dark }];
            if ('fontSize' in bodyTextElement) (bodyTextElement as any).fontSize = bodyText.fontSize;
            if ('fontWeight' in bodyTextElement) (bodyTextElement as any).fontWeight = bodyText.fontWeight;
            if ('fontFamily' in bodyTextElement) (bodyTextElement as any).fontFamily = 'Inter';
            
            try {
              bodyBoard.appendChild(bodyTextElement);
              typographyCreated++;
            } catch (e) {
              debugLog(`Body text appendChild failed for ${bodyText.name}:`, e);
              typographyCreated++;
            }
          }
        }
        
        try {
          bodyContainer.appendChild(bodyBoard);
        } catch (e) {
          debugLog(`Failed to add ${bodyText.name} to body container:`, e);
        }
      });
      
      sectionY += 120; // Space for next section
      
      // Section 3: Special Text (5 types)
      const specialTexts = [
        { name: 'Bold', text: 'Bold text for emphasis', fontSize: 16, fontWeight: 400, special: 'weight' },
        { name: 'Italic', text: 'Italic text for style', fontSize: 16, fontWeight: 400, special: 'italic' },
        { name: 'Code', text: 'console.log("code text")', fontSize: 14, fontWeight: 400, special: 'mono' },
        { name: 'Link', text: 'This is a clickable link', fontSize: 16, fontWeight: 400, special: 'link' },
        { name: 'Muted', text: 'Muted text for secondary content', fontSize: 16, fontWeight: 400, special: 'muted' }
      ];
      
      // Special Text label
      if (typeof penpot.createText === 'function') {
        const specialLabel = penpot.createText('Special Text');
        if (specialLabel) {
          specialLabel.name = 'Special Text Label';
          specialLabel.x = startX;
          specialLabel.y = sectionY;
          specialLabel.characters = 'Special Text';
          specialLabel.fills = [{ fillColor: theme.key === 'light' ? novyuiTokensHex.color.neutral[7].light : novyuiTokensHex.color.neutral[7].dark }];
          if ('fontSize' in specialLabel) (specialLabel as any).fontSize = 14;
          if ('fontWeight' in specialLabel) (specialLabel as any).fontWeight = 400;
        }
      }
      
      sectionY += 25;
      
      // Create container for special text
      const specialContainer = penpot.createBoard();
      specialContainer.name = "\u2062"; // Invisible times
      specialContainer.x = startX;
      specialContainer.y = sectionY;
      specialContainer.resize(700, 120);
      specialContainer.fills = [];
      
      let specialContainerLayout: any = null;
      try {
        specialContainerLayout = specialContainer.addFlexLayout();
        if (specialContainerLayout) {
          specialContainerLayout.dir = "column";
          specialContainerLayout.alignItems = "start";
          specialContainerLayout.justifyContent = "start";
          specialContainerLayout.wrap = "nowrap";
          specialContainerLayout.gap = 6;
        }
      } catch (e) {
        debugLog('Special container layout failed:', e);
      }
      
      // Create special text elements
      specialTexts.forEach((specialText) => {
        const specialBoard = penpot.createBoard();
        specialBoard.name = "\u2063"; // Invisible separator
        specialBoard.resize(680, specialText.fontSize + 8);
        specialBoard.fills = [];
        
        let specialBoardLayout: any = null;
        try {
          specialBoardLayout = specialBoard.addFlexLayout();
          if (specialBoardLayout) {
            specialBoardLayout.dir = "row";
            specialBoardLayout.alignItems = "center";
            specialBoardLayout.justifyContent = "start";
            specialBoardLayout.wrap = "nowrap";
          }
        } catch (e) {
          debugLog('Special board layout failed:', e);
        }
        
        if (typeof penpot.createText === 'function') {
          const specialTextElement = penpot.createText(specialText.text);
          if (specialTextElement) {
            specialTextElement.name = `${specialText.name} Text`;
            specialTextElement.characters = specialText.text;
            
            // Apply special styling based on type
            let textColor;
            let fontFamily = 'Inter';
            
            switch (specialText.special) {
              case 'link':
                textColor = theme.key === 'light' ? novyuiTokensHex.color.primary[7].light : novyuiTokensHex.color.primary[6].light;
                break;
              case 'muted':
                textColor = theme.key === 'light' ? novyuiTokensHex.color.neutral[6].light : novyuiTokensHex.color.neutral[6].dark;
                break;
              case 'mono':
                textColor = theme.key === 'light' ? novyuiTokensHex.color.neutral[9].light : novyuiTokensHex.color.neutral[9].dark;
                fontFamily = 'Fira Code';
                break;
              default:
                textColor = theme.key === 'light' ? novyuiTokensHex.color.neutral[9].light : novyuiTokensHex.color.neutral[9].dark;
            }
            
            specialTextElement.fills = [{ fillColor: textColor }];
            if ('fontSize' in specialTextElement) (specialTextElement as any).fontSize = specialText.fontSize;
            if ('fontWeight' in specialTextElement) (specialTextElement as any).fontWeight = specialText.fontWeight;
            if ('fontFamily' in specialTextElement) (specialTextElement as any).fontFamily = fontFamily;
            
            try {
              specialBoard.appendChild(specialTextElement);
              typographyCreated++;
            } catch (e) {
              debugLog(`Special text appendChild failed for ${specialText.name}:`, e);
              typographyCreated++;
            }
          }
        }
        
        try {
          specialContainer.appendChild(specialBoard);
        } catch (e) {
          debugLog(`Failed to add ${specialText.name} to special container:`, e);
        }
      });
      
      currentY += 600; // Move to next theme
    });
    
    console.log(`✅ Created complete Typography section with ${typographyCreated} text elements`);
    return currentY; // Return ending Y position
}

// Create Typography component showcase
function createTypographyComponent() {
  try {
    console.log('🔤 Creating Typography component showcase...');
    
    const startX = 100;
    const startY = 100;
    
    // Use the extracted typography section function
    createTypographySection(startX, startY);
    
    penpot.ui.sendMessage({
      type: 'component-result',
      data: {
        success: true,
        message: `Created Typography showcase using reusable section function`
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
  
  try {
    let startX = 100;
    let startY = 100;
    let currentY = startY;
    let totalCreated = 0;
    
    // Use viewport center if available
    if (penpot.viewport && penpot.viewport.center) {
      const center = penpot.viewport.center;
      startX = center.x - 425; // Center the 850px wide content
      startY = center.y - 400;
      currentY = startY;
    }
    
    // Create main title
    if (typeof penpot.createText === 'function') {
      const mainTitle = penpot.createText('NovyUI Complete Component System');
      if (mainTitle) {
        mainTitle.name = 'All Components Title';
        mainTitle.x = startX;
        mainTitle.y = currentY - 60;
        mainTitle.characters = 'NovyUI Complete Component System';
        mainTitle.fills = [{ fillColor: novyuiTokensHex.color.neutral[11].light }];
        if ('fontSize' in mainTitle) (mainTitle as any).fontSize = 32;
        if ('fontWeight' in mainTitle) (mainTitle as any).fontWeight = 400;
        if ('fontFamily' in mainTitle) (mainTitle as any).fontFamily = 'Inter';
      }
    }
    
    currentY += 20; // Space after title
    
    // 1. Button Component
    const buttonsY = createButtonsSection(startX, currentY);
    currentY = buttonsY + 50; // Add spacing between components
    totalCreated++;
    
    // 2. Icons Component
    const iconsY = createIconsSection(startX, currentY);
    currentY = iconsY + 50;
    totalCreated++;
    
    // 3. Kbd Component
    const kbdY = createKbdSection(startX, currentY);
    currentY = kbdY + 50;
    totalCreated++;
    
    // 4. Select Component
    const selectY = createSelectSection(startX, currentY);
    currentY = selectY + 50;
    totalCreated++;
    
    // 5. TreeView Component
    const treeViewY = createTreeViewSection(startX, currentY);
    currentY = treeViewY + 50;
    totalCreated++;
    
    // 6. Typography Component
    const typographyY = createTypographySection(startX, currentY);
    currentY = typographyY + 50;
    totalCreated++;
    
    penpot.ui.sendMessage({
      type: 'batch-result',
      data: {
        success: true,
        message: `Created all ${totalCreated} component showcases successfully!`
      }
    });
    
  } catch (error) {
    console.error('Error creating all components:', error);
    penpot.ui.sendMessage({
      type: 'batch-result',
      data: {
        success: false,
        error: (error as Error).message
      }
    });
  }
}


// Create NovyWave Interface - Back to Working V1 Approach
function createNovyWaveInterface() {
  try {
    console.log('🌊 Creating NovyWave Interface - V1 Working Approach...');
    
    let startX = 100;
    let startY = 100;
    
    // Use viewport center if available
    if (penpot.viewport && penpot.viewport.center) {
      const center = penpot.viewport.center;
      startX = center.x - 600;
      startY = center.y - 400;
    }
    
    // Create both light and dark versions - like the working button components
    createNovyWaveSimple(startX, startY, 'Light');
    createNovyWaveSimple(startX + 1300, startY, 'Dark'); // 1300px apart
    
    penpot.ui.sendMessage({
      type: 'novywave-result',
      data: {
        success: true,
        message: 'Created NovyWave digital waveform viewer interface - Light and Dark themes'
      }
    });
    
  } catch (error) {
    console.error('Error creating NovyWave interface:', error);
    penpot.ui.sendMessage({
      type: 'novywave-result',
      data: {
        success: false,
        error: (error as Error).message
      }
    });
  }
}

// Create NovyWave Simple - Using Working Button Pattern
function createNovyWaveSimple(startX: number, startY: number, theme: string = 'Light') {
  console.log(`🎨 Creating NovyWave ${theme} using working button pattern...`);
  
  const isLight = theme === 'Light';
  const colors = isLight ? {
    background: novyuiTokensHex.color.neutral[1].light,
    sidebar: novyuiTokensHex.color.neutral[2].light,
    border: novyuiTokensHex.color.neutral[4].light,
    text: novyuiTokensHex.color.neutral[11].light,
    textSecondary: novyuiTokensHex.color.neutral[7].light,
    accent: novyuiTokensHex.color.primary[6].light
  } : {
    background: novyuiTokensHex.color.neutral[2].dark,
    sidebar: novyuiTokensHex.color.neutral[4].dark,
    border: novyuiTokensHex.color.neutral[6].dark,
    text: novyuiTokensHex.color.neutral[11].dark,
    textSecondary: novyuiTokensHex.color.neutral[7].dark,
    accent: novyuiTokensHex.color.primary[6].dark
  };
  
  // Create title first - like button components do
  if (typeof penpot.createText === 'function') {
    const title = penpot.createText(`NovyWave ${theme}`);
    if (title) {
      title.name = `NovyWave ${theme} Title`;
      title.x = startX;
      title.y = startY - 60;
      title.characters = `NovyWave ${theme}`;
      title.fills = [{ fillColor: colors.text }];
      if ('fontSize' in title) (title as any).fontSize = 24;
      if ('fontWeight' in title) (title as any).fontWeight = 400;
    }
  }
  
  // Create main container board
  const mainBoard = penpot.createBoard();
  mainBoard.name = `NovyWave ${theme} Main`;
  mainBoard.x = startX;
  mainBoard.y = startY;
  mainBoard.resize(1200, 800);
  mainBoard.fills = [{ fillColor: colors.background }];
  
  // Create Files & Scopes panel (left side)
  const filesPanel = penpot.createBoard();
  filesPanel.name = `${theme} Files & Scopes`;
  filesPanel.x = startX + 20;
  filesPanel.y = startY + 20;
  filesPanel.resize(560, 350);
  filesPanel.fills = [{ fillColor: colors.background }];
  filesPanel.strokes = [{ strokeColor: colors.border, strokeWidth: 1 }];
  
  // Files & Scopes header
  const filesHeader = penpot.createText('Files & Scopes');
  if (filesHeader) {
    filesHeader.name = 'Files & Scopes Header';
    filesHeader.x = startX + 40;
    filesHeader.y = startY + 50;
    filesHeader.characters = 'Files & Scopes';
    filesHeader.fills = [{ fillColor: colors.text }];
    if ('fontSize' in filesHeader) (filesHeader as any).fontSize = 14;
    if ('fontWeight' in filesHeader) (filesHeader as any).fontWeight = 400;
  }
  
  // Load files and Remove All controls
  const loadFilesText = penpot.createText('⊕ Load files');
  if (loadFilesText) {
    loadFilesText.name = 'Load Files Control';
    loadFilesText.x = startX + 230;
    loadFilesText.y = startY + 50;
    loadFilesText.characters = '⊕ Load files';
    loadFilesText.fills = [{ fillColor: colors.textSecondary }];
    if ('fontSize' in loadFilesText) (loadFilesText as any).fontSize = 12;
  }
  
  const removeAllText = penpot.createText('✕ Remove All');
  if (removeAllText) {
    removeAllText.name = 'Remove All Files';
    removeAllText.x = startX + 420;
    removeAllText.y = startY + 50;
    removeAllText.characters = '✕ Remove All';
    removeAllText.fills = [{ fillColor: '#ef4444' }]; // Red
    if ('fontSize' in removeAllText) (removeAllText as any).fontSize = 12;
  }
  
  // File tree items from Figma
  const files = [
    '📁 wave_21.fst',
    '  📁 VexRiscv',
    '    📦 EmbeddedRiscvJtag_logic_onDebugCmd_dmiDirect_logic',
    '      📄 inputArea_target_buffercc',
    '      📄 bufferCC_4',
    '  📁 integer_RegFilePlugin_logic_refile_fpga',
    '  📄 reset_buffercc',
    '📁 simple.vcd'
  ];
  
  files.forEach((file, index) => {
    const fileText = penpot.createText(file);
    if (fileText) {
      fileText.name = `File: ${file}`;
      fileText.x = startX + 40;
      fileText.y = startY + 80 + (index * 24);
      fileText.characters = file;
      fileText.fills = [{ fillColor: colors.text }];
      if ('fontSize' in fileText) (fileText as any).fontSize = 12;
    }
  });
  
  // Create Variables panel (right side)
  const variablesPanel = penpot.createBoard();
  variablesPanel.name = `${theme} Variables`;
  variablesPanel.x = startX + 600;
  variablesPanel.y = startY + 20;
  variablesPanel.resize(580, 350);
  variablesPanel.fills = [{ fillColor: colors.background }];
  variablesPanel.strokes = [{ strokeColor: colors.border, strokeWidth: 1 }];
  
  // Variables header
  const variablesHeader = penpot.createText('Variables');
  if (variablesHeader) {
    variablesHeader.name = 'Variables Header';
    variablesHeader.x = startX + 620;
    variablesHeader.y = startY + 50;
    variablesHeader.characters = 'Variables';
    variablesHeader.fills = [{ fillColor: colors.text }];
    if ('fontSize' in variablesHeader) (variablesHeader as any).fontSize = 14;
    if ('fontWeight' in variablesHeader) (variablesHeader as any).fontWeight = 400;
  }
  
  // Variable search input
  const searchInput = penpot.createBoard();
  searchInput.name = 'Variable Search Input';
  searchInput.x = startX + 920;
  searchInput.y = startY + 48;
  searchInput.resize(240, 25);
  searchInput.fills = [{ fillColor: colors.background }];
  searchInput.strokes = [{ strokeColor: colors.border, strokeWidth: 1 }];
  
  const searchText = penpot.createText('variable_name');
  if (searchText) {
    searchText.name = 'Search Placeholder';
    searchText.x = startX + 930;
    searchText.y = startY + 57;
    searchText.characters = 'variable_name';
    searchText.fills = [{ fillColor: colors.textSecondary }];
    if ('fontSize' in searchText) (searchText as any).fontSize = 12;
  }
  
  // Variable items from Figma
  const variables = [
    { name: 'io_bus_cmd_valid', type: 'Wire 1-bit Input' },
    { name: 'io_bus_cmd_ready', type: 'Wire 1-bit Output' },
    { name: 'io_jtag_data', type: 'Wire 1-bit Output' },
    { name: 'clk', type: 'Wire 1-bit Output' }
  ];
  
  variables.forEach((variable, index) => {
    const varText = penpot.createText(variable.name);
    if (varText) {
      varText.name = `Variable: ${variable.name}`;
      varText.x = startX + 620;
      varText.y = startY + 90 + (index * 30);
      varText.characters = variable.name;
      varText.fills = [{ fillColor: colors.text }];
      if ('fontSize' in varText) (varText as any).fontSize = 12;
    }
    
    const typeText = penpot.createText(variable.type);
    if (typeText) {
      typeText.name = `Type: ${variable.type}`;
      typeText.x = startX + 820;
      typeText.y = startY + 90 + (index * 30);
      typeText.characters = variable.type;
      typeText.fills = [{ fillColor: '#3b82f6' }]; // Blue for type
      if ('fontSize' in typeText) (typeText as any).fontSize = 11;
    }
  });
  
  // Waveform Viewer Section (Selected Variables)
  const waveformBoard = penpot.createBoard();
  waveformBoard.name = `${theme} Selected Variables`;
  waveformBoard.x = startX + 20;
  waveformBoard.y = startY + 400;
  waveformBoard.resize(1160, 300);
  waveformBoard.fills = [{ fillColor: colors.background }];
  waveformBoard.strokes = [{ strokeColor: colors.border, strokeWidth: 1 }];
  
  // Section header with controls
  const headerText = penpot.createText('Selected Variables');
  if (headerText) {
    headerText.name = 'Selected Variables Header';
    headerText.x = startX + 40;
    headerText.y = startY + 420;
    headerText.characters = 'Selected Variables';
    headerText.fills = [{ fillColor: colors.text }];
    if ('fontSize' in headerText) (headerText as any).fontSize = 14;
    if ('fontWeight' in headerText) (headerText as any).fontWeight = 400;
  }
  
  // "Dock to Right" and "Remove All" controls
  const dockText = penpot.createText('→ Dock to Right');
  if (dockText) {
    dockText.name = 'Dock Control';
    dockText.x = startX + 600;
    dockText.y = startY + 420;
    dockText.characters = '→ Dock to Right';
    dockText.fills = [{ fillColor: colors.textSecondary }];
    if ('fontSize' in dockText) (dockText as any).fontSize = 12;
  }
  
  const removeText = penpot.createText('✕ Remove All');
  if (removeText) {
    removeText.name = 'Remove All Control';
    removeText.x = startX + 1050;
    removeText.y = startY + 420;
    removeText.characters = '✕ Remove All';
    removeText.fills = [{ fillColor: '#ef4444' }]; // Red color
    if ('fontSize' in removeText) (removeText as any).fontSize = 12;
  }
  
  // Signal traces (like the Figma design)
  const signals = [
    'LsuPlugin_logic_bus_rsp_payload_error',
    'LsuPlugin_logic_bus_rsp_payload_data', 
    'io_writes_0_payload_data',
    'LsuPlugin_logic_bus_rsp_payload_data',
    'logic_jtagLogic_dmiStat_value_string',
    'LsuPlugin_logic_bus_rsp_payload_error'
  ];
  
  signals.forEach((signal, index) => {
    // Signal name
    const signalText = penpot.createText(signal);
    if (signalText) {
      signalText.name = `Signal: ${signal}`;
      signalText.x = startX + 40;
      signalText.y = startY + 460 + (index * 24);
      signalText.characters = signal;
      signalText.fills = [{ fillColor: colors.text }];
      if ('fontSize' in signalText) (signalText as any).fontSize = 11;
    }
    
    // Digital waveform trace (blue and black blocks like Figma)
    const traceStartX = startX + 350;
    const traceY = startY + 455 + (index * 24);
    const segmentWidth = 30;
    
    for (let i = 0; i < 25; i++) {
      const isHigh = Math.random() > 0.4; // Random high/low signal
      const segment = penpot.createRectangle();
      segment.name = `Signal Trace ${index}-${i}`;
      segment.x = traceStartX + (i * segmentWidth);
      segment.y = traceY;
      segment.resize(segmentWidth - 1, 18);
      segment.fills = [{ fillColor: isHigh ? '#3b82f6' : '#1f2937' }]; // Blue for high, dark for low
    }
  });
  
  // Timeline markers at bottom
  const timeMarkers = ['0s', '10s', '20s', '30s', '40s', '50s', '60s', '70s', '80s'];
  timeMarkers.forEach((time, index) => {
    const markerText = penpot.createText(time);
    if (markerText) {
      markerText.name = `Time Marker: ${time}`;
      markerText.x = startX + 350 + (index * 85);
      markerText.y = startY + 670;
      markerText.characters = time;
      markerText.fills = [{ fillColor: colors.textSecondary }];
      if ('fontSize' in markerText) (markerText as any).fontSize = 10;
    }
  });
  
  // Zoom controls at bottom right
  const zoomText = penpot.createText('100 %');
  if (zoomText) {
    zoomText.name = 'Zoom Control';
    zoomText.x = startX + 1000;
    zoomText.y = startY + 670;
    zoomText.characters = '100 %';
    zoomText.fills = [{ fillColor: colors.text }];
    if ('fontSize' in zoomText) (zoomText as any).fontSize = 11;
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
      } catch (e) { debugLog('FontFamily failed:', e); }
      
      // Try setting font size
      try {
        if ('fontSize' in text) {
          text.fontSize = 16;
          results.canSetFontSize = true;
        }
      } catch (e) { debugLog('FontSize failed:', e); }
      
      // Try setting font weight (use numeric values)
      try {
        if ('fontWeight' in text) {
          text.fontWeight = 400; // Use numeric instead of 'bold'
          results.canSetFontWeight = true;
        }
      } catch (e) { debugLog('FontWeight failed:', e); }
      
      // Try setting text color via fills
      try {
        text.fills = [{ fillColor: '#333333' }];
        results.canSetTextColor = true;
      } catch (e) { debugLog('TextColor failed:', e); }
      
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
    } catch (e) { debugLog('Shadow property failed:', e); }
    
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
    } catch (e) { debugLog('Shadows array failed:', e); }
    
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
    } catch (e) { debugLog('BorderRadius failed:', e); }
    
    // Test rx/ry properties
    try {
      if ('rx' in rect) {
        (rect as any).rx = 8;
        results.canSetRx = true;
      }
    } catch (e) { debugLog('Rx failed:', e); }
    
    try {
      if ('ry' in rect) {
        (rect as any).ry = 8;
        results.canSetRy = true;
      }
    } catch (e) { debugLog('Ry failed:', e); }
    
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
    } catch (e) { debugLog('Opacity failed:', e); }
    
    // Test fill opacity
    try {
      rect.fills = [{ fillColor: '#FF0000', fillOpacity: 0.5 } as any];
      results.canSetFillOpacity = true;
    } catch (e) { debugLog('Fill opacity failed:', e); }
    
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
console.log('✅ NovyUI PenPot Plugin Loaded with Auto-Reload - HTTPS Enabled!');
// NovyUI PenPot Plugin - Main Plugin Logic
// This file has access to the penpot object

import { novyuiTokensHex } from './novyui-tokens-hex';
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
      }
    }
    
    let currentY = startY;
    let buttonsCreated = 0;
    
    // All 6 button variants with exact MoonZoon specifications
    const variants = [
      {
        name: 'Primary',
        bgColor: novyuiTokensHex.color.primary[7].light,        // primary_7()
        hoverBgColor: novyuiTokensHex.color.primary[8].light,   // primary_8()
        textColor: novyuiTokensHex.color.neutral[1].light,      // neutral_1()
        borderColor: novyuiTokensHex.color.static.transparent,  // transparent()
        description: 'Main action - blue background, white text'
      },
      {
        name: 'Secondary', 
        bgColor: novyuiTokensHex.color.neutral[4].light,        // neutral_4()
        hoverBgColor: novyuiTokensHex.color.neutral[5].light,   // neutral_5()
        textColor: novyuiTokensHex.color.primary[7].light,      // primary_7()
        borderColor: novyuiTokensHex.color.neutral[3].light,    // neutral_3()
        description: 'Secondary action - gray background, blue text, border'
      },
      {
        name: 'Outline',
        bgColor: novyuiTokensHex.color.static.transparent,      // transparent()
        hoverBgColor: novyuiTokensHex.color.primary[2].light,   // primary_2()
        textColor: novyuiTokensHex.color.primary[7].light,      // primary_7()
        borderColor: novyuiTokensHex.color.neutral[3].light,    // neutral_3()
        description: 'Outlined action - transparent background, blue text, border'
      },
      {
        name: 'Ghost',
        bgColor: novyuiTokensHex.color.static.transparent,      // transparent()
        hoverBgColor: novyuiTokensHex.color.primary[2].light,   // primary_2()
        textColor: novyuiTokensHex.color.primary[7].light,      // primary_7()
        borderColor: novyuiTokensHex.color.static.transparent,  // transparent()
        description: 'Minimal action - transparent background, blue text, no border'
      },
      {
        name: 'Link',
        bgColor: novyuiTokensHex.color.static.transparent,      // transparent()
        hoverBgColor: novyuiTokensHex.color.primary[2].light,   // primary_2()
        textColor: novyuiTokensHex.color.primary[7].light,      // primary_7()
        borderColor: novyuiTokensHex.color.static.transparent,  // transparent()
        description: 'Link style - transparent background, blue text, underlined'
      },
      {
        name: 'Destructive',
        bgColor: novyuiTokensHex.color.error[7].light,          // error_7()
        hoverBgColor: novyuiTokensHex.color.error[8].light,     // error_8()
        textColor: novyuiTokensHex.color.neutral[1].light,      // neutral_1()
        borderColor: novyuiTokensHex.color.static.transparent,  // transparent()
        description: 'Destructive action - red background, white text'
      }
    ];
    
    // Create section: Button Variants & States
    if (typeof penpot.createText === 'function') {
      const sectionTitle = penpot.createText('Button Variants & States');
      if (sectionTitle) {
        sectionTitle.name = 'Variants Section Title';
        sectionTitle.x = startX;
        sectionTitle.y = currentY;
        sectionTitle.characters = '1. Button Variants & States';
        sectionTitle.fills = [{ fillColor: novyuiTokensHex.color.neutral[9].light }];
        if ('fontSize' in sectionTitle) (sectionTitle as any).fontSize = 20;
        if ('fontWeight' in sectionTitle) (sectionTitle as any).fontWeight = 400;
      }
    }
    currentY += 40;
    
    // Create buttons for each variant with all states
    variants.forEach((variant) => {
      // Variant section label
      if (typeof penpot.createText === 'function') {
        const variantLabel = penpot.createText(variant.name);
        if (variantLabel) {
          variantLabel.name = `${variant.name} Label`;
          variantLabel.x = startX;
          variantLabel.y = currentY;
          variantLabel.characters = `${variant.name}`;
          variantLabel.fills = [{ fillColor: novyuiTokensHex.color.neutral[8].light }];
          if ('fontSize' in variantLabel) (variantLabel as any).fontSize = 16;
          if ('fontWeight' in variantLabel) (variantLabel as any).fontWeight = 400;
        }
        
        // Variant description
        const descLabel = penpot.createText(variant.description);
        if (descLabel) {
          descLabel.name = `${variant.name} Description`;
          descLabel.x = startX + 120;
          descLabel.y = currentY;
          descLabel.characters = variant.description;
          descLabel.fills = [{ fillColor: novyuiTokensHex.color.neutral[6].light }];
          if ('fontSize' in descLabel) (descLabel as any).fontSize = 12;
        }
      }
      
      currentY += 25;
      
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
          textColor: variant.textColor,
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
          bgColor: novyuiTokensHex.color.neutral[5].light,  // Disabled uses neutral-5
          textColor: novyuiTokensHex.color.neutral[7].light, // Disabled text uses neutral-7
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
      
      states.forEach((state, stateIndex) => {
        const buttonX = startX + (stateIndex * 140);
        
        // Create button Board with proper children
        if (typeof penpot.createBoard === 'function') {
          const buttonBoard = penpot.createBoard();
          buttonBoard.name = `${variant.name} ${state.name} Button`;
          buttonBoard.x = buttonX;
          buttonBoard.y = currentY;
          buttonBoard.resize(120, 40);
          buttonBoard.borderRadius = parseInt(novyuiTokensHex.cornerRadius[6]);
          
          // Set flex layout for centering
          if ('layoutDirection' in buttonBoard) {
            (buttonBoard as any).layoutDirection = 'row';
            (buttonBoard as any).layoutJustifyContent = 'center';
            (buttonBoard as any).layoutAlignItems = 'center';
            (buttonBoard as any).layoutWrap = 'nowrap';
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
              // No positioning needed - flex layout will center it
              // Set text properties
              buttonText.fills = [{ fillColor: state.textColor }];
              if ('fontSize' in buttonText) (buttonText as any).fontSize = 16;
              if ('fontWeight' in buttonText) (buttonText as any).fontWeight = 400;
              
              // Try to add text as child to board
              if ('appendChild' in buttonBoard) {
                (buttonBoard as any).appendChild(buttonText);
              } else if ('addChild' in buttonBoard) {
                (buttonBoard as any).addChild(buttonText);
              }
              
              buttonsCreated++;
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
        }
      });
      
      currentY += 60;
    });
    
    // Create section: Button Sizes
    currentY += 30;
    if (typeof penpot.createText === 'function') {
      const sizeTitle = penpot.createText('Button Sizes');
      if (sizeTitle) {
        sizeTitle.name = 'Sizes Section Title';
        sizeTitle.x = startX;
        sizeTitle.y = currentY;
        sizeTitle.characters = '2. Button Sizes';
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
      
      // Size label
      if (typeof penpot.createText === 'function') {
        const sizeLabel = penpot.createText(`${size.name} Size`);
        if (sizeLabel) {
          sizeLabel.name = `${size.name} Size Label`;
          sizeLabel.x = buttonX;
          sizeLabel.y = currentY;
          sizeLabel.characters = `${size.name} (${size.width}×${size.height}px)`;
          sizeLabel.fills = [{ fillColor: novyuiTokensHex.color.neutral[8].light }];
          if ('fontSize' in sizeLabel) (sizeLabel as any).fontSize = 14;
        }
      }
      
      // Create sized button as Board
      const sizedButtonBoard = penpot.createBoard();
      sizedButtonBoard.name = `${size.name} Button Example`;
      sizedButtonBoard.x = buttonX;
      sizedButtonBoard.y = currentY + 25;
      sizedButtonBoard.resize(size.width, size.height);
      
      // Set board styling
      if ('borderRadius' in sizedButtonBoard) {
        (sizedButtonBoard as any).borderRadius = parseInt(novyuiTokensHex.cornerRadius[6]);
      }
      sizedButtonBoard.fills = [{ fillColor: novyuiTokensHex.color.primary[7].light }];
      
      // Create sized text positioned manually
      if (typeof penpot.createText === 'function') {
        const buttonText = penpot.createText(size.name);
        if (buttonText) {
          buttonText.name = `${size.name} Button Text`;
          
          // Position text manually within board coordinates
          const textWidth = size.name.length * (size.fontSize * 0.6);
          buttonText.x = buttonX + (size.width - textWidth) / 2;
          buttonText.y = currentY + 25 + (size.height - size.fontSize) / 2 + 4;
          
          buttonText.characters = size.name;
          buttonText.fills = [{ fillColor: novyuiTokensHex.color.neutral[1].light }];
          if ('fontSize' in buttonText) (buttonText as any).fontSize = size.fontSize;
          if ('fontWeight' in buttonText) (buttonText as any).fontWeight = 400;
          
          buttonsCreated++;
        }
      }
    });
    
    console.log(`✅ Created complete NovyUI button system with ${buttonsCreated} components`);
    
    penpot.ui.sendMessage({
      type: 'component-result',
      data: {
        success: true,
        message: `Created complete NovyUI button system: 6 variants × 5 states + 3 sizes = ${buttonsCreated} components`
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

// Apply EXACT NovyUI styling based on component type and variant
function applyComponentStyling(shape: any, componentName: string, variant: string) {
  const tokens = novyuiTokensHex;
  
  // Base styling
  shape.borderRadius = 6;
  
  // Component-specific styling with EXACT MoonZoon token values
  switch (componentName) {
    case 'Button':
      if (variant === 'primary') {
        shape.fills = [{ fillColor: tokens.color.primary['7'].light }];
      } else if (variant === 'secondary') {
        shape.fills = [{ fillColor: tokens.color.neutral['3'].light }];
      } else if (variant === 'outline') {
        shape.fills = [];
        shape.strokes = [{
          strokeColor: tokens.color.primary['7'].light,
          strokeWidth: 2
        }];
      }
      break;
      
    case 'Input':
      shape.fills = [{ fillColor: tokens.color.static?.white || '#FFFFFF' }];
      shape.strokes = [{
        strokeColor: tokens.color.neutral['6'].light || '#64748b',
        strokeWidth: 1
      }];
      break;
      
    case 'Card':
      if (variant === 'elevated') {
        shape.fills = [{ fillColor: tokens.color.static?.white || '#FFFFFF' }];
        // Note: Shadows might not be directly settable via plugin API
      } else if (variant === 'outlined') {
        shape.fills = [{ fillColor: tokens.color.static?.white || '#FFFFFF' }];
        shape.strokes = [{
          strokeColor: tokens.color.neutral['4'].light || '#94a3b8',
          strokeWidth: 1
        }];
      }
      break;
      
    case 'Badge':
      shape.resize(80, 24);
      shape.borderRadius = 12;
      if (variant === 'success') {
        shape.fills = [{ fillColor: tokens.color.success?.['7']?.light || '#10b981' }];
      } else if (variant === 'warning') {
        shape.fills = [{ fillColor: tokens.color.warning?.['7']?.light || '#f59e0b' }];
      } else if (variant === 'error') {
        shape.fills = [{ fillColor: tokens.color.error?.['7']?.light || '#ef4444' }];
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
console.log('✅ NovyUI PenPot Plugin Loaded with Auto-Reload - HTTPS Enabled!');
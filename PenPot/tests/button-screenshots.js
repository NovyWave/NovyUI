#!/usr/bin/env node
/**
 * Screenshot utility for MoonZoon button variants
 * Takes screenshots of all button states and variants for PenPot plugin recreation
 */

import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const STORYBOOK_URL = 'http://localhost:8080';
const OUTPUT_DIR = '/home/martinkavik/repos/NovyUI/PenPot/output/button-screenshots';

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function takeButtonScreenshots() {
  console.log('🎬 Starting MoonZoon Button Screenshots...');
  
  const browser = await chromium.launch({ 
    headless: false,  // Show browser for debugging
    slowMo: 500      // Slow down for visibility
  });
  
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  
  const page = await context.newPage();
  
  try {
    // Navigate to the storybook
    console.log(`📖 Opening storybook at ${STORYBOOK_URL}`);
    await page.goto(STORYBOOK_URL, { 
      waitUntil: 'domcontentloaded',
      timeout: 60000 
    });
    
    // Wait for the page to load completely
    console.log('⏳ Waiting for page to fully load...');
    await page.waitForTimeout(5000);
    
    // Look for button navigation or content
    console.log('🔍 Looking for button stories...');
    
    // Take a screenshot of the main page first to see what we're working with
    await page.screenshot({ 
      path: path.join(OUTPUT_DIR, '00-storybook-main.png'),
      fullPage: true 
    });
    console.log('📸 Main page screenshot taken');
    
    // MoonZoon storybook specific navigation
    // First check if there's a sidebar with story links
    const storyLinks = await page.$$('a');
    console.log(`🔗 Found ${storyLinks.length} links on page`);
    
    // Look for button story link
    let buttonStoryFound = false;
    for (const link of storyLinks) {
      const text = await link.textContent();
      if (text && text.toLowerCase().includes('button')) {
        console.log(`🎯 Found button story link: "${text}"`);
        await link.click();
        await page.waitForTimeout(3000);
        buttonStoryFound = true;
        break;
      }
    }
    
    if (!buttonStoryFound) {
      // Try direct URL navigation for MoonZoon storybook
      console.log('🔗 Trying direct navigation to button story...');
      await page.goto(`${STORYBOOK_URL}/button`, { 
        waitUntil: 'domcontentloaded',
        timeout: 30000 
      }).catch(() => {
        console.log('⚠️  Direct button URL not available');
      });
    }
    
    // Take screenshot after navigation attempt
    await page.screenshot({ 
      path: path.join(OUTPUT_DIR, '01-after-navigation.png'),
      fullPage: true 
    });
    
    // Look for all elements that might be buttons or button showcases
    const buttonSelectors = [
      'button',
      '[role="button"]',
      '.button',
      '[class*="button"]',
      '[data-testid*="button"]'
    ];
    
    let allButtons = [];
    for (const selector of buttonSelectors) {
      const elements = await page.$$(selector);
      console.log(`   Found ${elements.length} elements with selector: ${selector}`);
      allButtons = allButtons.concat(elements);
    }
    
    // Remove duplicates (can't use Set with ElementHandles, so we'll use the allButtons array)
    console.log(`📸 Found total of ${allButtons.length} button-like elements`);
    
    // Take screenshots of all visible buttons with different states
    const buttons = allButtons.length > 0 ? allButtons : await page.$$('button');
    console.log(`📸 Taking screenshots of ${buttons.length} button elements...`);
    
    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
      
      try {
        // Get button text for naming
        const buttonText = await button.textContent() || `button-${i}`;
        const cleanText = buttonText.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
        
        // Scroll button into view
        await button.scrollIntoViewIfNeeded();
        await page.waitForTimeout(500);
        
        // Normal state
        await button.screenshot({ 
          path: path.join(OUTPUT_DIR, `${String(i+1).padStart(2, '0')}-${cleanText}-normal.png`)
        });
        
        // Hover state
        await button.hover();
        await page.waitForTimeout(300);
        await button.screenshot({ 
          path: path.join(OUTPUT_DIR, `${String(i+1).padStart(2, '0')}-${cleanText}-hover.png`)
        });
        
        // Focus state (if possible)
        try {
          await button.focus();
          await page.waitForTimeout(300);
          await button.screenshot({ 
            path: path.join(OUTPUT_DIR, `${String(i+1).padStart(2, '0')}-${cleanText}-focus.png`)
          });
        } catch (e) {
          console.log(`   ⚠️  Could not focus button ${i+1}`);
        }
        
        // Move mouse away to reset state
        await page.mouse.move(0, 0);
        await page.waitForTimeout(300);
        
        console.log(`   ✅ Screenshots taken for button ${i+1}: "${buttonText}"`);
        
      } catch (error) {
        console.log(`   ❌ Failed to screenshot button ${i+1}: ${error.message}`);
      }
    }
    
    // Take a final full page screenshot
    await page.screenshot({ 
      path: path.join(OUTPUT_DIR, '99-full-page-final.png'),
      fullPage: true 
    });
    
    console.log(`✅ Screenshot session complete! Check ${OUTPUT_DIR}`);
    
  } catch (error) {
    console.error('❌ Error during screenshot session:', error);
  } finally {
    await browser.close();
  }
}

// Run the screenshot function
takeButtonScreenshots().catch(console.error);
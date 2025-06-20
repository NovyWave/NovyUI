#!/usr/bin/env node

import { chromium } from 'playwright';

console.log('🚀 Starting Simple NovyUI Plugin Test...');

async function testPlugin() {
  let browser;
  let consoleLogs = [];
  
  try {
    console.log('🌐 Launching browser...');
    browser = await chromium.launch({ 
      headless: false,  // Run in headed mode so we can see what's happening
      slowMo: 1000     // Slow down actions for better observation
    });
    
    const context = await browser.newContext();
    const page = await context.newPage();

    // Capture console logs
    page.on('console', msg => {
      const logText = `[${msg.type().toUpperCase()}] ${msg.text()}`;
      consoleLogs.push(logText);
      console.log(`📝 Console: ${logText}`);
    });

    // Capture errors
    page.on('pageerror', err => {
      const errorText = `[ERROR] ${err.message}`;
      consoleLogs.push(errorText);
      console.log(`❌ Error: ${errorText}`);
    });

    console.log('📍 Navigating to PenPot...');
    await page.goto('https://design.penpot.app', { waitUntil: 'networkidle' });
    
    console.log('⏳ Waiting 10 seconds for manual login and navigation...');
    console.log('📋 Please:');
    console.log('   1. Login to PenPot if needed');
    console.log('   2. Open or create a project');
    console.log('   3. Install/Open the NovyUI plugin');
    console.log('   4. The script will continue automatically...');
    
    await page.waitForTimeout(10000);

    console.log('🔍 Looking for plugin content...');
    
    // Try to detect plugin iframe
    const iframes = await page.locator('iframe').all();
    console.log(`Found ${iframes.length} iframes`);
    
    let pluginFrame = null;
    for (let i = 0; i < iframes.length; i++) {
      try {
        const src = await iframes[i].getAttribute('src');
        console.log(`  Iframe ${i}: ${src}`);
        if (src && (src.includes('5173') || src.includes('5174') || src.includes('localhost'))) {
          pluginFrame = page.frameLocator(`iframe[src="${src}"]`);
          console.log(`✅ Found plugin iframe: ${src}`);
          break;
        }
      } catch (e) {
        // Skip iframes we can't access
      }
    }

    if (pluginFrame) {
      console.log('🔘 Looking for Test Plugin API button in iframe...');
      
      try {
        const testButton = pluginFrame.locator('text="Test Plugin API"').first();
        const buttonVisible = await testButton.isVisible({ timeout: 5000 });
        
        if (buttonVisible) {
          console.log('✅ Found Test Plugin API button, clicking...');
          await testButton.click();
          
          console.log('⏳ Waiting 15 seconds for test results...');
          await page.waitForTimeout(15000);
          
          // Try to capture results from the plugin
          try {
            const resultsBox = pluginFrame.locator('#capabilities-result');
            const resultsVisible = await resultsBox.isVisible({ timeout: 5000 });
            if (resultsVisible) {
              const resultsText = await resultsBox.textContent();
              console.log('📊 Plugin Results:', resultsText);
            }
          } catch (e) {
            console.log('ℹ️  Could not capture plugin results box');
          }
          
        } else {
          console.log('❌ Test Plugin API button not found in iframe');
        }
      } catch (e) {
        console.log('❌ Error interacting with plugin iframe:', e.message);
      }
    } else {
      console.log('⚠️  Plugin iframe not found');
      
      // Try looking for the button in the main page
      console.log('🔍 Looking for Test Plugin API button in main page...');
      const mainPageButton = page.locator('text="Test Plugin API"');
      const mainButtonVisible = await mainPageButton.isVisible({ timeout: 5000 });
      
      if (mainButtonVisible) {
        console.log('✅ Found Test Plugin API button in main page, clicking...');
        await mainPageButton.click();
        await page.waitForTimeout(15000);
      } else {
        console.log('❌ Test Plugin API button not found anywhere');
        
        // List all buttons for debugging
        const allButtons = await page.locator('button').all();
        console.log(`Found ${allButtons.length} buttons on main page:`);
        for (let i = 0; i < Math.min(allButtons.length, 10); i++) {
          try {
            const buttonText = await allButtons[i].textContent();
            console.log(`  Button ${i}: "${buttonText?.trim()}"`);
          } catch (e) {
            console.log(`  Button ${i}: [could not read text]`);
          }
        }
      }
    }

    console.log('\n📋 === FINAL CONSOLE LOGS ===');
    consoleLogs.forEach((log, index) => {
      console.log(`${index + 1}. ${log}`);
    });

    // Filter for specific plugin API results
    const apiLogs = consoleLogs.filter(log => 
      log.includes('Plugin Capabilities') || 
      log.includes('Typography Test') ||
      log.includes('Shadow Test') ||
      log.includes('Border Radius Test') ||
      log.includes('Opacity Test') ||
      log.includes('Testing') ||
      log.includes('API')
    );

    console.log('\n🎯 === API-RELATED LOGS ===');
    if (apiLogs.length > 0) {
      apiLogs.forEach((log, index) => {
        console.log(`${index + 1}. ${log}`);
      });
    } else {
      console.log('No API-related logs found');
    }

    console.log('\n⏳ Keeping browser open for 30 more seconds for manual inspection...');
    await page.waitForTimeout(30000);

  } catch (error) {
    console.error('❌ Test failed:', error.message);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

testPlugin().then(() => {
  console.log('✅ Test completed');
  process.exit(0);
}).catch(err => {
  console.error('❌ Test failed:', err);
  process.exit(1);
});
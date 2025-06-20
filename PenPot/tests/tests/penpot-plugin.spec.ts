import { test, expect, Page } from '@playwright/test';

// Interface for captured test results
interface TestResults {
  capabilities: any;
  typographyResults: any;
  shadowResults: any;
  borderRadiusResults: any;
  opacityResults: any;
  consoleLogs: string[];
}

test.describe('NovyUI PenPot Plugin API Testing', () => {
  let testResults: TestResults = {
    capabilities: null,
    typographyResults: null,
    shadowResults: null,
    borderRadiusResults: null,
    opacityResults: null,
    consoleLogs: []
  };

  test.beforeEach(async ({ page }) => {
    // Capture all console logs
    page.on('console', msg => {
      const logText = `[${msg.type()}] ${msg.text()}`;
      testResults.consoleLogs.push(logText);
      console.log(logText);
    });

    // Capture console errors specifically
    page.on('pageerror', err => {
      const errorText = `[ERROR] ${err.message}`;
      testResults.consoleLogs.push(errorText);
      console.error(errorText);
    });
  });

  test('Test NovyUI Plugin API Capabilities', async ({ page }) => {
    console.log('🚀 Starting PenPot Plugin API Test...');
    
    // Step 1: Navigate to PenPot
    console.log('📍 Navigating to design.penpot.app...');
    await page.goto('https://design.penpot.app');
    
    // Wait for page to load
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(3000);

    // Step 2: Handle login if needed
    console.log('🔐 Checking for login state...');
    
    // Check if we're already logged in or need to login
    const isLoggedIn = await page.locator('[data-testid="workspace-hero"]').isVisible().catch(() => false) ||
                      await page.locator('[data-testid="dashboard"]').isVisible().catch(() => false) ||
                      await page.locator('text="Projects"').isVisible().catch(() => false);

    if (!isLoggedIn) {
      console.log('⚠️  Login required. Please ensure you are logged in to PenPot first.');
      console.log('ℹ️  You can login manually and then run this test.');
      
      // Try to find login elements and provide guidance
      const loginButton = await page.locator('text="Login"').first().isVisible().catch(() => false);
      if (loginButton) {
        console.log('🔑 Login button found. Please login manually first.');
      }
      
      // Wait a bit longer for potential auto-login
      await page.waitForTimeout(5000);
    }

    // Step 3: Look for projects or create new one
    console.log('📁 Looking for projects...');
    
    // Try to find an existing project or create a new one
    let projectOpened = false;
    
    // Look for recent projects
    const recentProject = await page.locator('[data-testid="recent-project"]').first().isVisible().catch(() => false);
    if (recentProject) {
      console.log('📂 Opening recent project...');
      await page.locator('[data-testid="recent-project"]').first().click();
      projectOpened = true;
    } else {
      // Try to create new project
      const newProjectBtn = await page.locator('text="New project"').first().isVisible().catch(() => false) ||
                           await page.locator('[data-testid="new-project"]').first().isVisible().catch(() => false);
      
      if (newProjectBtn) {
        console.log('➕ Creating new project...');
        await page.locator('text="New project"').first().click().catch(() => 
          page.locator('[data-testid="new-project"]').first().click()
        );
        
        // Fill project details if needed
        const projectNameInput = await page.locator('input[placeholder*="project"]').isVisible().catch(() => false);
        if (projectNameInput) {
          await page.locator('input[placeholder*="project"]').fill('NovyUI Plugin Test');
          await page.locator('text="Create"').click();
        }
        projectOpened = true;
      }
    }

    if (!projectOpened) {
      console.log('🔍 Looking for any clickable project...');
      // Try to find any project link
      const anyProject = await page.locator('a[href*="/workspace/"]').first().isVisible().catch(() => false);
      if (anyProject) {
        await page.locator('a[href*="/workspace/"]').first().click();
        projectOpened = true;
      }
    }

    // Wait for workspace to load
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(5000);

    // Step 4: Look for the NovyUI plugin
    console.log('🔌 Looking for NovyUI plugin...');
    
    // Try different ways to access plugins
    const pluginSelectors = [
      'text="NovyUI"',
      '[data-testid="plugin-novyui"]',
      '[title*="NovyUI"]',
      'text="Plugins"',
      '[data-testid="plugins"]',
      '[data-testid="sidebar-plugins"]'
    ];

    let pluginFound = false;
    for (const selector of pluginSelectors) {
      try {
        const element = await page.locator(selector).first().isVisible();
        if (element) {
          console.log(`✅ Found plugin element: ${selector}`);
          await page.locator(selector).first().click();
          pluginFound = true;
          break;
        }
      } catch (e) {
        console.log(`❌ Selector ${selector} not found`);
      }
    }

    // If plugin not found, try to access plugins menu
    if (!pluginFound) {
      console.log('🔍 Looking for plugins menu...');
      
      // Look for plugins in various places
      const pluginMenuSelectors = [
        'text="Extensions"',
        'text="Add-ons"',
        '[data-testid="main-menu"]',
        '[title*="menu"]'
      ];

      for (const selector of pluginMenuSelectors) {
        try {
          const element = await page.locator(selector).first().isVisible();
          if (element) {
            console.log(`🎯 Clicking menu: ${selector}`);
            await page.locator(selector).first().click();
            await page.waitForTimeout(2000);
            
            // Now look for NovyUI plugin
            const novyuiPlugin = await page.locator('text="NovyUI"').first().isVisible().catch(() => false);
            if (novyuiPlugin) {
              await page.locator('text="NovyUI"').first().click();
              pluginFound = true;
              break;
            }
          }
        } catch (e) {
          console.log(`❌ Menu selector ${selector} not found`);
        }
      }
    }

    if (!pluginFound) {
      console.log('⚠️  NovyUI plugin not found. Plugin might not be installed.');
      console.log('📋 Available elements on page:');
      
      // Log available text content for debugging
      const allText = await page.locator('body').textContent();
      const lines = allText?.split('\n').filter(line => line.trim().length > 0).slice(0, 20);
      lines?.forEach(line => console.log(`  - ${line.trim()}`));
      
      throw new Error('NovyUI plugin not found on the page');
    }

    // Step 5: Wait for plugin to load and find the Test Plugin API button
    console.log('⏳ Waiting for plugin to load...');
    await page.waitForTimeout(5000);

    // Look for the plugin iframe or content
    const pluginFrame = await page.frameLocator('iframe[src*="localhost:5173"]').first() || 
                       await page.frameLocator('iframe[src*="5173"]').first();

    let testButton;
    if (pluginFrame) {
      console.log('🖼️  Plugin iframe found');
      testButton = pluginFrame.locator('text="Test Plugin API"').first();
    } else {
      console.log('📄 Looking for plugin content in main page');
      testButton = page.locator('text="Test Plugin API"').first();
    }

    // Step 6: Click the Test Plugin API button
    console.log('🔘 Clicking Test Plugin API button...');
    
    const buttonVisible = await testButton.isVisible({ timeout: 10000 }).catch(() => false);
    if (!buttonVisible) {
      console.log('❌ Test Plugin API button not found');
      
      // Try to find any button with "test" in it
      const testButtons = await (pluginFrame || page).locator('button').all();
      console.log(`Found ${testButtons.length} buttons`);
      
      for (let i = 0; i < testButtons.length; i++) {
        const buttonText = await testButtons[i].textContent();
        console.log(`  Button ${i}: "${buttonText}"`);
        if (buttonText?.toLowerCase().includes('test')) {
          console.log(`🎯 Clicking button with text: ${buttonText}`);
          await testButtons[i].click();
          break;
        }
      }
    } else {
      await testButton.click();
    }

    // Step 7: Wait for test results and capture output
    console.log('⏳ Waiting for test results...');
    await page.waitForTimeout(10000);

    // Look for results in the plugin
    const resultsVisible = await (pluginFrame || page).locator('[id*="result"]').first().isVisible().catch(() => false);
    if (resultsVisible) {
      const resultsText = await (pluginFrame || page).locator('[id*="result"]').first().textContent();
      console.log('📊 Plugin Results:', resultsText);
    }

    // Step 8: Capture final console logs
    console.log('📝 Capturing final console output...');
    await page.waitForTimeout(5000);

    // Parse console logs for specific test results
    const capabilityLogs = testResults.consoleLogs.filter(log => 
      log.includes('Plugin Capabilities:') || 
      log.includes('Typography Test Results:') ||
      log.includes('Shadow Test Results:') ||
      log.includes('Border Radius Test Results:') ||
      log.includes('Opacity Test Results:')
    );

    console.log('\n🎯 === FINAL TEST RESULTS ===');
    console.log('\n📋 All Console Logs:');
    testResults.consoleLogs.forEach(log => console.log(log));

    console.log('\n🔍 API Capability Logs:');
    capabilityLogs.forEach(log => console.log(log));

    // Extract structured results from console logs
    const parseLogResults = (logs: string[]) => {
      const results = {};
      logs.forEach(log => {
        if (log.includes('Plugin Capabilities:')) {
          try {
            const jsonMatch = log.match(/Plugin Capabilities: (.+)/);
            if (jsonMatch) {
              testResults.capabilities = JSON.parse(jsonMatch[1]);
            }
          } catch (e) {
            console.log('Failed to parse capabilities JSON');
          }
        }
      });
      return results;
    };

    parseLogResults(testResults.consoleLogs);

    // Final summary
    console.log('\n📊 === API CAPABILITIES SUMMARY ===');
    if (testResults.capabilities) {
      Object.entries(testResults.capabilities).forEach(([key, value]) => {
        const status = value ? '✅' : '❌';
        console.log(`${status} ${key}: ${value}`);
      });
    } else {
      console.log('⚠️  No structured capabilities data captured');
    }

    console.log('\n✅ Test completed successfully!');
  });

  test.afterAll(async () => {
    // Write results to file for later analysis
    const fs = await import('fs/promises');
    const resultsJson = JSON.stringify(testResults, null, 2);
    
    try {
      await fs.writeFile('/home/martinkavik/repos/NovyUI/PenPot/tests/test-results.json', resultsJson);
      console.log('📄 Test results saved to test-results.json');
    } catch (e) {
      console.log('❌ Failed to save test results to file');
    }

    console.log('\n🎯 === MIGRATION PLANNING SUMMARY ===');
    console.log('Based on the test results, here are the PenPot API capabilities:');
    
    if (testResults.capabilities) {
      const workingAPIs = Object.entries(testResults.capabilities)
        .filter(([_, value]) => value === true)
        .map(([key, _]) => key);
      
      const missingAPIs = Object.entries(testResults.capabilities)
        .filter(([_, value]) => value === false)
        .map(([key, _]) => key);

      console.log('\n✅ Working APIs:');
      workingAPIs.forEach(api => console.log(`  - ${api}`));

      console.log('\n❌ Missing/Non-functional APIs:');
      missingAPIs.forEach(api => console.log(`  - ${api}`));

      console.log('\n📋 Migration Recommendations:');
      if (workingAPIs.includes('hasCreateRectangle')) {
        console.log('  ✅ Basic shape creation available - can create component foundations');
      }
      if (workingAPIs.includes('hasCreateText')) {
        console.log('  ✅ Text creation available - can create typography components');
      }
      if (workingAPIs.includes('hasBorderRadius')) {
        console.log('  ✅ Border radius available - can apply corner styling');
      }
      if (missingAPIs.includes('hasShadow')) {
        console.log('  ⚠️  Shadow API not available - shadows will need manual application');
      }
      if (missingAPIs.includes('hasOpacity')) {
        console.log('  ⚠️  Opacity API not available - opacity will need manual application');
      }
    }
  });
});
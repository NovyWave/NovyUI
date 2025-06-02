const { test, expect } = require('@playwright/test');

test.describe('Responsive Design Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:8080');
    await page.waitForLoadState('networkidle');
  });

  test('Button stories should wrap on mobile', async ({ page }) => {
    // Navigate to Button component
    await page.click('text=Button');
    await page.waitForLoadState('networkidle');

    // Test desktop layout (wide screen)
    await page.setViewportSize({ width: 1200, height: 800 });
    
    // Check that buttons are in a row (horizontal layout)
    const buttonSection = page.locator('text=Basic Variants').locator('..').locator('..').first();
    const buttons = buttonSection.locator('button');
    
    // Get positions of first two buttons
    const button1Box = await buttons.nth(0).boundingBox();
    const button2Box = await buttons.nth(1).boundingBox();
    
    // On desktop, buttons should be side by side (same row)
    expect(Math.abs(button1Box.y - button2Box.y)).toBeLessThan(10);
    
    // Test mobile layout (narrow screen)
    await page.setViewportSize({ width: 400, height: 800 });
    await page.waitForTimeout(500); // Wait for layout to adjust
    
    // Get positions again after resize
    const button1BoxMobile = await buttons.nth(0).boundingBox();
    const button2BoxMobile = await buttons.nth(1).boundingBox();
    
    // On mobile, buttons should wrap (different rows)
    expect(Math.abs(button1BoxMobile.y - button2BoxMobile.y)).toBeGreaterThan(30);
  });

  test('Input stories should wrap on mobile', async ({ page }) => {
    // Navigate to Input component
    await page.click('text=Input');
    await page.waitForLoadState('networkidle');

    // Test desktop layout
    await page.setViewportSize({ width: 1200, height: 800 });
    
    // Check that inputs are in a row
    const inputSection = page.locator('text=Basic Variants').locator('..').locator('..').first();
    const inputs = inputSection.locator('input');
    
    if (await inputs.count() > 1) {
      const input1Box = await inputs.nth(0).boundingBox();
      const input2Box = await inputs.nth(1).boundingBox();
      
      // On desktop, inputs should be side by side
      expect(Math.abs(input1Box.y - input2Box.y)).toBeLessThan(10);
      
      // Test mobile layout
      await page.setViewportSize({ width: 400, height: 800 });
      await page.waitForTimeout(500);
      
      const input1BoxMobile = await inputs.nth(0).boundingBox();
      const input2BoxMobile = await inputs.nth(1).boundingBox();
      
      // On mobile, inputs should wrap
      expect(Math.abs(input1BoxMobile.y - input2BoxMobile.y)).toBeGreaterThan(30);
    }
  });

  test('Badge stories should wrap on mobile', async ({ page }) => {
    // Navigate to Badge component
    await page.click('text=Badge');
    await page.waitForLoadState('networkidle');

    // Test desktop layout
    await page.setViewportSize({ width: 1200, height: 800 });
    
    // Check that badges are in a row
    const badgeSection = page.locator('text=Variants').locator('..').locator('..').first();
    const badges = badgeSection.locator('[class*="badge"], span').filter({ hasText: /Default|Primary|Secondary/ });
    
    if (await badges.count() > 1) {
      const badge1Box = await badges.nth(0).boundingBox();
      const badge2Box = await badges.nth(1).boundingBox();
      
      // On desktop, badges should be side by side
      expect(Math.abs(badge1Box.y - badge2Box.y)).toBeLessThan(10);
      
      // Test mobile layout
      await page.setViewportSize({ width: 400, height: 800 });
      await page.waitForTimeout(500);
      
      const badge1BoxMobile = await badges.nth(0).boundingBox();
      const badge2BoxMobile = await badges.nth(1).boundingBox();
      
      // On mobile, badges should wrap
      expect(Math.abs(badge1BoxMobile.y - badge2BoxMobile.y)).toBeGreaterThan(20);
    }
  });

  test('Select stories should wrap on mobile', async ({ page }) => {
    // Navigate to Select component
    await page.click('text=Select');
    await page.waitForLoadState('networkidle');

    // Test desktop layout
    await page.setViewportSize({ width: 1200, height: 800 });
    
    // Check that selects are in a row
    const selectSection = page.locator('text=Sizes').locator('..').locator('..').first();
    const selects = selectSection.locator('select, [role="combobox"], [class*="select"]');
    
    if (await selects.count() > 1) {
      const select1Box = await selects.nth(0).boundingBox();
      const select2Box = await selects.nth(1).boundingBox();
      
      // On desktop, selects should be side by side
      expect(Math.abs(select1Box.y - select2Box.y)).toBeLessThan(50);
      
      // Test mobile layout
      await page.setViewportSize({ width: 400, height: 800 });
      await page.waitForTimeout(500);
      
      const select1BoxMobile = await selects.nth(0).boundingBox();
      const select2BoxMobile = await selects.nth(1).boundingBox();
      
      // On mobile, selects should wrap
      expect(Math.abs(select1BoxMobile.y - select2BoxMobile.y)).toBeGreaterThan(50);
    }
  });

  test('KBD stories should wrap on mobile', async ({ page }) => {
    // Navigate to KBD component
    await page.click('text=Kbd');
    await page.waitForLoadState('networkidle');

    // Test desktop layout
    await page.setViewportSize({ width: 1200, height: 800 });
    
    // Check that kbd elements are in a row
    const kbdSection = page.locator('text=Sizes').locator('..').locator('..').first();
    const kbds = kbdSection.locator('kbd');
    
    if (await kbds.count() > 1) {
      const kbd1Box = await kbds.nth(0).boundingBox();
      const kbd2Box = await kbds.nth(1).boundingBox();
      
      // On desktop, kbds should be side by side
      expect(Math.abs(kbd1Box.y - kbd2Box.y)).toBeLessThan(10);
      
      // Test mobile layout
      await page.setViewportSize({ width: 400, height: 800 });
      await page.waitForTimeout(500);
      
      const kbd1BoxMobile = await kbds.nth(0).boundingBox();
      const kbd2BoxMobile = await kbds.nth(1).boundingBox();
      
      // On mobile, kbds should wrap
      expect(Math.abs(kbd1BoxMobile.y - kbd2BoxMobile.y)).toBeGreaterThan(20);
    }
  });

  test('Header should remain functional on mobile', async ({ page }) => {
    // Test mobile layout
    await page.setViewportSize({ width: 400, height: 800 });
    await page.waitForTimeout(500);
    
    // Check that header elements are still visible and clickable
    const title = page.locator('h1:has-text("NovyUI for MoonZoon")');
    await expect(title).toBeVisible();
    
    // Check that navigation is still functional
    const buttonLink = page.locator('text=Button');
    await expect(buttonLink).toBeVisible();
    await buttonLink.click();
    
    // Verify navigation worked
    await expect(page.locator('text=Basic Variants')).toBeVisible();
  });
});

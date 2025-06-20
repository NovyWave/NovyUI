# 🚀 NovyUI PenPot Plugin Installation Guide

## ✅ **Plugin Server is Running!**

The development server is now active at: **http://localhost:5173/**

## 📋 **Installation Steps in PenPot**

### 1. **Open PenPot** (https://design.penpot.app)
   - Log in to your account
   - Open any design file (or create a new one)

### 2. **Access Plugin Manager**
   - Look for the **Plugins** menu in PenPot
   - Click **"Manage Plugins"** or **"Plugin Manager"**

### 3. **Install NovyUI Plugin**
   - Click **"Install plugin from URL"**
   - Enter: `http://localhost:5173/manifest.json`
   - Click **Install**

### 4. **Run the Plugin**
   - Find "NovyUI Design System" in your plugins list
   - Click to open it
   - A panel should appear with the plugin interface

## 🧪 **Testing the Plugin**

### **Step 1: Test API Capabilities**
- Click **"Test Plugin API"** button
- This shows what PenPot methods are available
- Look for ✅ marks next to supported features

### **Step 2: Import Color Tokens**
- Click **"Import Color Tokens"** button
- This creates color swatches on your canvas
- You should see ~98 color rectangles appear

### **Step 3: Create Test Component**
- Click **"Create Test Button"** button
- A styled button should appear in the center
- This validates component creation works

### **Step 4: Batch Create Components**
- Click **"Create All Components"** button
- Multiple component variants will be created
- Includes buttons, inputs, cards, and badges

## 🔍 **What to Look For**

### **Success Indicators:**
- ✅ Color swatches appear on canvas
- ✅ Components have proper styling (colors, borders, radius)
- ✅ Components are named correctly (e.g., "Button-primary")
- ✅ Plugin shows success messages

### **Possible Issues:**
- ❌ "Enable JavaScript" error → Cloudflare blocking (shouldn't happen with plugin)
- ❌ No shapes appear → Check browser console for errors
- ❌ Connection refused → Make sure dev server is running

## 📊 **Expected Results**

After running all tests, you should have:
- **98 color swatches** from NovyUI tokens
- **1 test button** component
- **12+ component variants** (buttons, inputs, cards, badges)

## 🛠️ **Troubleshooting**

### **Plugin Won't Install:**
1. Check if URL is accessible: http://localhost:5173/manifest.json
2. Try refreshing PenPot page
3. Check browser console for CORS errors

### **No Shapes Created:**
1. Open browser DevTools (F12)
2. Check Console tab for errors
3. Verify you have edit permissions in the file

### **Server Stopped:**
Restart with:
```bash
cd /home/martinkavik/repos/NovyUI/PenPot/novyui-plugin
npm run dev
```

## 🎯 **Next Steps**

If the plugin works successfully:
1. We can expand to all 18 NovyUI components
2. Add theme switching functionality
3. Create component organization features
4. Build production version for distribution

## 📝 **Report Back**

Please let me know:
1. ✅/❌ Plugin installation successful?
2. ✅/❌ API capabilities test results?
3. ✅/❌ Color token import working?
4. ✅/❌ Component creation successful?
5. Any error messages you see?

---

**The plugin approach bypasses Cloudflare completely!** This should work where the API failed.
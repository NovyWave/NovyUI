#!/usr/bin/env node

// Simple test using system Chrome browser
import { spawn } from 'child_process';
import fs from 'fs';

console.log('🚀 Starting NovyUI Plugin Test with System Chrome...');

// Create a simple HTML page that will test the plugin via iframe
const testPageContent = `
<!DOCTYPE html>
<html>
<head>
    <title>NovyUI Plugin Test</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .container { max-width: 1200px; margin: 0 auto; }
        .instructions { background: #e3f2fd; padding: 15px; border-radius: 5px; margin: 20px 0; }
        .results { background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0; }
        iframe { width: 100%; height: 600px; border: 1px solid #ccc; border-radius: 5px; }
        #console-output { background: #000; color: #0f0; padding: 10px; border-radius: 5px; font-family: monospace; white-space: pre-wrap; }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎨 NovyUI PenPot Plugin Test</h1>
        
        <div class="instructions">
            <h2>📋 Test Instructions:</h2>
            <ol>
                <li>Make sure the NovyUI plugin is running at <a href="http://localhost:5174" target="_blank">http://localhost:5174</a></li>
                <li>Open <a href="https://design.penpot.app" target="_blank">https://design.penpot.app</a> in another tab</li>
                <li>Login and open a project</li>
                <li>Install/open the NovyUI plugin</li>
                <li>Click "Test Plugin API" and watch the console below</li>
            </ol>
        </div>

        <div class="results">
            <h2>🔌 Plugin Interface (for reference):</h2>
            <iframe src="http://localhost:5174" title="NovyUI Plugin"></iframe>
        </div>

        <div class="results">
            <h2>📊 Console Output:</h2>
            <div id="console-output">Waiting for console logs...\n</div>
        </div>
    </div>

    <script>
        // Capture console logs
        const originalLog = console.log;
        const originalError = console.error;
        const originalWarn = console.warn;
        const outputDiv = document.getElementById('console-output');
        
        function addToOutput(type, ...args) {
            const timestamp = new Date().toLocaleTimeString();
            const message = args.map(arg => 
                typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
            ).join(' ');
            outputDiv.textContent += \`[\${timestamp}] [\${type.toUpperCase()}] \${message}\\n\`;
            outputDiv.scrollTop = outputDiv.scrollHeight;
        }
        
        console.log = function(...args) {
            originalLog.apply(console, args);
            addToOutput('log', ...args);
        };
        
        console.error = function(...args) {
            originalError.apply(console, args);
            addToOutput('error', ...args);
        };
        
        console.warn = function(...args) {
            originalWarn.apply(console, args);
            addToOutput('warn', ...args);
        };

        // Listen for messages from iframe or other windows
        window.addEventListener('message', function(event) {
            console.log('Message received:', event.data);
        });

        console.log('Test page loaded. Ready to capture plugin API test results.');
        console.log('Plugin should be available at: http://localhost:5174');
        console.log('Please follow the instructions above to run the API tests.');
    </script>
</body>
</html>
`;

// Write the test page
const testPagePath = '/tmp/novyui-plugin-test.html';
fs.writeFileSync(testPagePath, testPageContent);

console.log('📄 Created test page at:', testPagePath);
console.log('🌐 Opening Chrome with test page...');

// Open Chrome with the test page
const chrome = spawn('google-chrome', [
    '--new-window',
    '--disable-web-security',
    '--disable-features=VizDisplayCompositor',
    '--allow-running-insecure-content',
    '--user-data-dir=/tmp/chrome-test-profile',
    testPagePath
], {
    stdio: 'pipe',
    detached: true
});

chrome.unref();

console.log('✅ Chrome opened with test interface');
console.log('');
console.log('📋 Manual Steps Required:');
console.log('1. In the opened Chrome window, follow the instructions');
console.log('2. Go to https://design.penpot.app in another tab');
console.log('3. Login and open/create a project');
console.log('4. Install and open the NovyUI plugin');
console.log('5. Click "Test Plugin API" button');
console.log('6. Return to the test page to see console output');
console.log('');
console.log('The test page will capture and display all console output from the plugin tests.');
console.log('Press Ctrl+C when done to exit this script.');

// Keep the script running
process.on('SIGINT', () => {
    console.log('\n👋 Test completed. Chrome window will remain open for inspection.');
    process.exit(0);
});

// Keep alive
setInterval(() => {
    // Just keep the process alive
}, 10000);
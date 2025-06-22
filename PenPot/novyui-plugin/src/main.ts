// NovyUI Plugin UI Interface
// This file handles the plugin's user interface

// Ensure parent exists and has sendMessage
const sendMessage = (msg: any) => {
  if (window.parent && typeof window.parent.postMessage === 'function') {
    window.parent.postMessage(msg, '*');
  } else {
    console.error('Cannot send message to parent');
  }
};

// Initialize UI
document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    <div class="plugin-container">
      <h1>🎨 NovyUI Design System</h1>
      <p>Import NovyUI tokens and components into PenPot</p>
      
      <section class="actions">
        <h2>🔍 Plugin Capabilities</h2>
        <button id="test-capabilities" class="btn btn-secondary">
          Test Plugin API
        </button>
        <div id="capabilities-result" class="result-box"></div>
      </section>

      <section class="actions">
        <h2>🎨 Design Tokens</h2>
        <button id="remove-all-tokens" class="btn btn-danger">
          Remove All Tokens
        </button>
        <button id="import-all-tokens" class="btn btn-primary">
          Import All Tokens
        </button>
        <button id="create-token-elements" class="btn btn-success">
          Create Token Testing Elements
        </button>
        <div id="token-result" class="result-box"></div>
      </section>

      <section class="actions">
        <h2>🔧 Components</h2>
        <button id="create-test" class="btn btn-primary">
          Create Buttons
        </button>
        <button id="create-all" class="btn btn-success">
          Create All Components
        </button>
        <div id="component-result" class="result-box"></div>
      </section>

      <footer>
        <p>NovyUI → PenPot Migration Tool</p>
      </footer>
    </div>
  `;

  // Add event listeners
  document.getElementById('test-capabilities')?.addEventListener('click', () => {
    sendMessage({ type: 'test-capabilities' });
  });

  document.getElementById('remove-all-tokens')?.addEventListener('click', () => {
    sendMessage({ type: 'remove-all-tokens' });
  });

  document.getElementById('import-all-tokens')?.addEventListener('click', () => {
    sendMessage({ type: 'import-all-tokens' });
  });

  document.getElementById('create-token-elements')?.addEventListener('click', () => {
    sendMessage({ type: 'create-token-elements' });
  });

  document.getElementById('create-test')?.addEventListener('click', () => {
    sendMessage({ type: 'create-test-component' });
  });

  document.getElementById('create-all')?.addEventListener('click', () => {
    sendMessage({ type: 'create-all-components' });
  });
});

// Handle messages from plugin
window.addEventListener('message', (event) => {
  const message = event.data;
  
  switch (message.type) {
    case 'capabilities-result':
      displayCapabilities(message.data);
      break;
      
    case 'import-result':
      displayResult('token-result', message.data);
      break;
      
    case 'component-result':
    case 'batch-result':
      displayResult('component-result', message.data);
      break;
  }
});

function displayCapabilities(capabilities: any) {
  const resultBox = document.getElementById('capabilities-result');
  if (!resultBox) return;

  const items = Object.entries(capabilities)
    .map(([key, value]) => {
      const icon = value ? '✅' : '❌';
      const label = key.replace(/^has/, '').replace(/([A-Z])/g, ' $1').trim();
      return `<li>${icon} ${label}</li>`;
    })
    .join('');

  resultBox.innerHTML = `
    <h3>Plugin API Capabilities:</h3>
    <ul class="capabilities-list">${items}</ul>
  `;
}

function displayResult(elementId: string, result: any) {
  const resultBox = document.getElementById(elementId);
  if (!resultBox) return;

  if (result.success) {
    resultBox.innerHTML = `
      <div class="success">
        ✅ ${result.message}
      </div>
    `;
  } else {
    resultBox.innerHTML = `
      <div class="error">
        ❌ Error: ${result.error || 'Unknown error'}
      </div>
    `;
  }
}
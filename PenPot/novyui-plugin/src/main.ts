// NovyUI Plugin UI Interface - TypeScript
// This file handles the plugin's user interface

// Get theme from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const theme = urlParams.get('theme') || 'light';
document.body.setAttribute('data-theme', theme);

// Ensure parent exists and has sendMessage
const sendMessage = (msg: any): void => {
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
        <h2>🌊 NovyWave Interface</h2>
        <button id="create-novywave" class="btn btn-success">
          🎨 NovyWave Designs
        </button>
        <div id="novywave-result" class="result-box"></div>
      </section>

      <section class="actions">
        <h2>🔧 Components</h2>
        <button id="create-test" class="btn btn-primary">
          Create Buttons
        </button>
        <button id="create-icons" class="btn btn-primary">
          Create Icons
        </button>
        <button id="create-kbd" class="btn btn-primary">
          Create Kbd
        </button>
        <button id="create-select" class="btn btn-primary">
          Create Select
        </button>
        <button id="create-treeview" class="btn btn-primary">
          Create TreeView
        </button>
        <button id="create-typography" class="btn btn-primary">
          Create Typography
        </button>
        <button id="create-input" class="btn btn-primary">
          Create Input
        </button>
        <button id="create-datatable" class="btn btn-primary">
          Create Data Table
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

  document.getElementById('create-icons')?.addEventListener('click', () => {
    sendMessage({ type: 'create-icons' });
  });

  document.getElementById('create-kbd')?.addEventListener('click', () => {
    sendMessage({ type: 'create-kbd' });
  });

  document.getElementById('create-select')?.addEventListener('click', () => {
    sendMessage({ type: 'create-select' });
  });

  document.getElementById('create-treeview')?.addEventListener('click', () => {
    sendMessage({ type: 'create-treeview' });
  });

  document.getElementById('create-typography')?.addEventListener('click', () => {
    sendMessage({ type: 'create-typography' });
  });

  document.getElementById('create-input')?.addEventListener('click', () => {
    sendMessage({ type: 'create-input' });
  });

  document.getElementById('create-datatable')?.addEventListener('click', () => {
    sendMessage({ type: 'create-datatable' });
  });

  document.getElementById('create-novywave')?.addEventListener('click', () => {
    sendMessage({ type: 'create-novywave-interface' });
  });
});

// Handle messages from plugin
window.addEventListener('message', (event: MessageEvent) => {
  const message = event.data;
  
  switch (message.type) {
    case 'themechange':
      // Update theme when plugin sends theme change
      document.body.setAttribute('data-theme', message.theme);
      break;
      
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
      
    case 'novywave-result':
      displayResult('novywave-result', message.data);
      break;
  }
});

interface Capabilities {
  [key: string]: any;
}

function displayCapabilities(capabilities: Capabilities): void {
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

interface ResultData {
  success: boolean;
  message?: string;
  error?: string;
}

function displayResult(elementId: string, result: ResultData): void {
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
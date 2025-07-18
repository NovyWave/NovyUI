# NovyUI PenPot Plugin

Import NovyUI design tokens and create components in PenPot.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm
- PenPot account with plugin access

### Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Generate development certificates (first time only):**
   ```bash
   npm run generate-certs
   # or
   ./scripts/generate-dev-certs.sh
   ```
   
   ⚠️ **Security Note**: The generated `cert.pem` and `key.pem` files are for local development only and are automatically excluded from version control.

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Install plugin in PenPot:**
   - Go to PenPot → Plugins → Install Plugin
   - Enter URL: `https://localhost:4400/manifest.json`
   - Accept the self-signed certificate warning (first time only)

## 📝 Development

### Commands

- `npm run dev` - Start development server with auto-reload (HTTPS on port 4400)
- `npm run build` - Build for production
- `npm run generate-certs` - Generate self-signed certificates for HTTPS

### Features

- 🔄 **Auto-reload**: Changes to source files automatically rebuild and reload
- 🔒 **HTTPS Support**: Required for PenPot plugin development
- 📘 **TypeScript**: Full type safety with PenPot plugin types
- 🎨 **Design Tokens**: Import NovyUI tokens into PenPot

### Project Structure

```
novyui-plugin/
├── src/
│   ├── plugin.ts      # Main plugin logic (has access to penpot API)
│   ├── main.ts        # UI logic (runs in iframe)
│   └── novyui-tokens-hex.ts  # Design token definitions
├── scripts/
│   └── generate-dev-certs.sh  # Certificate generation script
├── index.html         # Plugin UI
├── manifest.json      # Plugin configuration
├── vite.config.ts     # Build configuration
└── tsconfig.json      # TypeScript configuration
```

## 🔒 Security Best Practices

### Development Certificates

This plugin uses HTTPS for local development to match PenPot's security requirements. The self-signed certificates are:

- **Generated locally** using the provided script
- **Unique per developer** - never shared
- **Excluded from git** via `.gitignore`
- **For development only** - never use in production

### Why HTTPS is Required

PenPot runs on HTTPS, and modern browsers block "mixed content" (HTTPS pages loading HTTP resources). The development server must use HTTPS to:
- Load the plugin in PenPot
- Avoid CORS and security errors
- Match production environment behavior
- Bypass Cloudflare and CDN restrictions that block direct HTTP access

### CORS Configuration

The development server includes CORS headers to allow cross-origin requests from PenPot:
```javascript
cors: {
  origin: "*",           // Allow all origins for development
  credentials: false     // Disable credentials for security
}
```

This configuration is essential for the plugin to load properly in PenPot's iframe environment.

## 🛠️ Troubleshooting

### Certificate Warnings
When first installing the plugin, your browser will warn about the self-signed certificate. This is normal for local development. Accept the certificate to proceed.

### Plugin Not Loading
1. Ensure the dev server is running (`npm run dev`)
2. Check that certificates exist (`cert.pem` and `key.pem`)
3. **First-time setup**: Open `https://localhost:4400` directly in your browser and accept the self-signed certificate before installing the plugin in PenPot
4. Try accessing `https://localhost:4400/manifest.json` directly in browser
5. Check browser console for CORS or certificate errors

### Important: Certificate Acceptance Workflow
🔒 **Critical Step**: Before installing the plugin in PenPot, you MUST:
1. Navigate to `https://localhost:4400` directly in your browser 
2. Accept the self-signed certificate warning ("Advanced" → "Proceed to localhost")
3. Only then install the plugin in PenPot using the manifest URL

**Why**: Browsers require explicit certificate acceptance for self-signed certificates. PenPot cannot load the plugin if the certificate hasn't been accepted first.

### Auto-reload Not Working
- Ensure you're using `npm run dev` (not `npm run build`)
- Check that `vite-live-preview` is properly installed
- Try restarting the dev server

## 📄 License

Part of the NovyUI Design System.
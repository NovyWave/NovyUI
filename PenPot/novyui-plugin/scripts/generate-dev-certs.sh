#!/bin/bash

# Generate self-signed certificates for local HTTPS development
# These certificates should NEVER be committed to version control

echo "🔐 Generating self-signed certificates for local development..."

# Check if certificates already exist
if [ -f "cert.pem" ] && [ -f "key.pem" ]; then
    echo "⚠️  Certificates already exist. Remove them first if you want to regenerate."
    echo "   Run: rm cert.pem key.pem"
    exit 1
fi

# Generate self-signed certificate
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes \
    -subj "/C=US/ST=State/L=City/O=NovyUI Development/CN=localhost"

if [ $? -eq 0 ]; then
    echo "✅ Certificates generated successfully!"
    echo "   - cert.pem: Certificate file"
    echo "   - key.pem: Private key file"
    echo ""
    echo "🔒 Security reminder: These files are in .gitignore and should NEVER be committed!"
else
    echo "❌ Failed to generate certificates"
    exit 1
fi
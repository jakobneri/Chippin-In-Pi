#!/bin/bash

# Chippin-In-Pi Quick Start Script
# This script helps you get started quickly with Chippin-In-Pi

set -e

echo "🔧 Chippin-In-Pi Quick Start"
echo "=============================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed."
    echo "Please install Node.js 18 or higher first:"
    echo "  https://nodejs.org/"
    exit 1
fi

NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "⚠️  Node.js version $NODE_VERSION detected."
    echo "Please upgrade to Node.js 18 or higher."
    exit 1
fi

echo "✓ Node.js $(node --version) detected"
echo ""

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo "✓ Dependencies installed"
    echo ""
fi

# Check if .env exists
if [ ! -f ".env" ]; then
    echo "⚙️  Creating .env file from template..."
    cp .env.example .env
    echo "✓ .env file created"
    echo ""
fi

# Make CLI executable
chmod +x cli/index.js

echo "✅ Setup complete!"
echo ""
echo "🚀 You can now use Chippin-In-Pi:"
echo ""
echo "  View all commands:    node cli/index.js --help"
echo "  System information:   node cli/index.js system info"
echo "  Start server:         node cli/index.js server start"
echo "  List security tools:  node cli/index.js tools list"
echo ""
echo "  Or install globally:  npm link"
echo "  Then use:             chippin --help"
echo ""
echo "📖 For more information, see README.md and docs/GETTING_STARTED.md"
echo ""

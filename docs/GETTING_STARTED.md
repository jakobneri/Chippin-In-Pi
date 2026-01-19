# Getting Started with Chippin-In-Pi

This guide will help you get started with Chippin-In-Pi on your Raspberry Pi or development machine.

## Prerequisites

### Hardware

📋 **Need hardware for your build?** See the [Hardware Shopping List](HARDWARE.md) for:
- Complete parts lists with prices (German retailers)
- Portable, battery-powered configurations
- WiFi/Bluetooth/RF modules for wireless testing
- Budget-friendly and premium options

### Software Requirements

- Raspberry Pi (any model) or Linux system
- Node.js 18 or higher
- Git

## Installation Steps

### 1. System Preparation

#### On Raspberry Pi OS

```bash
# Update your system
sudo apt update && sudo apt upgrade -y

# Install required packages
sudo apt install -y git curl build-essential
```

#### On Other Linux Distributions

Ensure you have Git and curl installed.

### 2. Install Node.js

```bash
# For Raspberry Pi (ARM) - Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Verify installation
node --version  # Should be v18.x or higher
npm --version
```

### 3. Clone and Setup

```bash
# Clone the repository
git clone https://github.com/jakobneri/Chippin-In-Pi.git
cd Chippin-In-Pi

# Install dependencies
npm install

# Setup environment
cp .env.example .env

# Make CLI globally available (optional)
npm link
```

## First Run

### Option 1: Using the CLI

```bash
# Check if everything is working
chippin --help

# Start the server
chippin server start

# In another terminal, check system info
chippin system info
```

### Option 2: Using npm scripts

```bash
# Start the server
npm run server

# Or with auto-reload during development
npm run server:dev
```

## Verifying the Installation

1. **Check server is running**:
   ```bash
   chippin server status
   ```

2. **Test the API**:
   ```bash
   curl http://localhost:3000/health
   ```

3. **View system information**:
   ```bash
   chippin system info
   chippin system network
   ```

## Next Steps

1. **Explore available commands**:
   ```bash
   chippin --help
   chippin server --help
   chippin tools --help
   ```

2. **Setup the frontend** (optional):
   - See `frontend/README.md` for Angular setup instructions

3. **Configure for production**:
   - Edit `.env` file
   - Setup systemd service (see README.md)

4. **Install security tools**:
   ```bash
   chippin tools list
   chippin tools install
   ```

## Common Issues

### Port Already in Use

If port 3000 is already in use:
```bash
chippin server start --port 3001
```

Or set in `.env`:
```
PORT=3001
```

### Permission Denied

If you get permission errors:
```bash
sudo chmod +x cli/index.js
```

### Module Not Found

Make sure dependencies are installed:
```bash
npm install
```

## Development Mode

For active development:

```bash
# Terminal 1: Server with auto-reload
npm run server:dev

# Terminal 2: Watch for changes
npm run dev
```

## Getting Help

- Check the documentation in `docs/`
- Run `chippin --help` for command reference
- Open an issue on GitHub for bugs
- Check existing issues for solutions

## What's Next?

- Read [ARCHITECTURE.md](ARCHITECTURE.md) to understand the system
- Explore the CLI commands
- Start building security tools
- Contribute to the project!

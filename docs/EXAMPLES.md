# Examples and Usage Scenarios

This document provides practical examples of using Chippin-In-Pi.

## Basic Usage

### Starting the System

```bash
# Quick start - run the setup script
./quickstart.sh

# View all available commands
node cli/index.js --help

# Check system information
node cli/index.js system info
```

### Server Management

```bash
# Start the server on default port (3000)
node cli/index.js server start

# Start on custom port
node cli/index.js server start --port 8080

# Start in development mode with auto-reload
node cli/index.js server start --dev

# Check if server is running
node cli/index.js server status

# Stop the server
node cli/index.js server stop

# Restart the server
node cli/index.js server restart
```

### System Monitoring

```bash
# Display comprehensive system information
node cli/index.js system info

# Check overall system status
node cli/index.js system status

# View network interfaces and IP addresses
node cli/index.js system network
```

### Security Tools

```bash
# List all available security tools
node cli/index.js tools list

# Quick network scan (planned feature)
node cli/index.js tools scan

# Interactive tool installation
node cli/index.js tools install
```

## API Usage

### Testing with curl

```bash
# Health check
curl http://localhost:3000/health

# Get server information
curl http://localhost:3000/

# System information
curl http://localhost:3000/api/system

# Server status
curl http://localhost:3000/api/status

# List available tools
curl http://localhost:3000/tools/list

# Get tool status
curl http://localhost:3000/tools/status/network-scanner
```

### Using with fetch (JavaScript)

```javascript
// Health check
const health = await fetch('http://localhost:3000/health');
const data = await health.json();
console.log(data);

// Get system info
const sysInfo = await fetch('http://localhost:3000/api/system');
const systemData = await sysInfo.json();
console.log(systemData);

// List tools
const tools = await fetch('http://localhost:3000/tools/list');
const toolsData = await tools.json();
console.log(toolsData.tools);
```

## Development Scenarios

### Working on the Server

```bash
# Terminal 1: Start server with auto-reload
npm run server:dev

# Terminal 2: Make changes to server code
# The server will automatically restart

# Test your changes
curl http://localhost:3000/api/status
```

### Working on CLI Commands

```bash
# Edit command files in cli/commands/

# Test immediately
node cli/index.js [your-command]

# Example: After modifying system.js
node cli/index.js system info
```

### Working on the Frontend (when initialized)

```bash
# Terminal 1: Backend server
npm run server:dev

# Terminal 2: Frontend dev server
npm run frontend:dev

# Frontend will be available at http://localhost:4200
# Backend API at http://localhost:3000
```

## Raspberry Pi Specific Examples

### Network Reconnaissance (Planned)

```bash
# Scan local network
node cli/index.js tools scan --target 192.168.1.0/24

# Scan specific host
node cli/index.js tools scan --target 192.168.1.1

# Port scan
node cli/index.js tools portscan --target 192.168.1.1 --ports 1-1000
```

### WiFi Analysis (Planned)

```bash
# List available networks
node cli/index.js tools wifi list

# Analyze network
node cli/index.js tools wifi analyze --network "NetworkName"

# Monitor network traffic
node cli/index.js tools wifi monitor
```

### Packet Analysis (Planned)

```bash
# Start packet capture
node cli/index.js tools capture start --interface wlan0

# Stop capture
node cli/index.js tools capture stop

# Analyze captured packets
node cli/index.js tools capture analyze --file capture.pcap
```

## Production Deployment

### Running as a Service

```bash
# Create systemd service
sudo nano /etc/systemd/system/chippin.service

# Enable and start
sudo systemctl enable chippin
sudo systemctl start chippin

# Check status
sudo systemctl status chippin

# View logs
sudo journalctl -u chippin -f
```

### Using with PM2

```bash
# Install PM2
npm install -g pm2

# Start server with PM2
pm2 start server/index.js --name chippin-server

# Start on boot
pm2 startup
pm2 save

# Monitor
pm2 monit

# Logs
pm2 logs chippin-server
```

### Docker Deployment (Planned)

```bash
# Build image
docker build -t chippin-in-pi .

# Run container
docker run -p 3000:3000 chippin-in-pi

# Run with docker-compose
docker-compose up -d
```

## Security Best Practices

### Safe Testing Environment

```bash
# Always test in isolated network
# Use virtual machines or dedicated test lab
# Example: VirtualBox network setup

# 1. Create isolated virtual network
# 2. Deploy Chippin-In-Pi in VM
# 3. Test tools safely without affecting production
```

### Authorized Testing Only

```bash
# Before running any security tools:
# 1. Obtain written permission
# 2. Define scope clearly
# 3. Document all activities
# 4. Report findings responsibly

# Example authorization check
node cli/index.js tools scan --target 192.168.1.0/24 --confirm
```

## Advanced Usage

### Custom Tool Development

```javascript
// Create custom tool in server/routes/custom-tool.js
import express from 'express';

const router = express.Router();

router.post('/execute', async (req, res) => {
  // Your custom tool logic
  res.json({ result: 'Tool executed' });
});

export default router;
```

### Extending CLI

```javascript
// Add to cli/commands/custom.js
import { Command } from 'commander';

const customCommand = new Command('custom')
  .description('Custom functionality');

customCommand
  .command('action')
  .description('Perform custom action')
  .action(() => {
    console.log('Custom action executed');
  });

export { customCommand };
```

## Troubleshooting Examples

### Port Already in Use

```bash
# Find process using port
lsof -ti:3000

# Kill the process
kill $(lsof -ti:3000)

# Or use different port
node cli/index.js server start --port 3001
```

### Permission Issues

```bash
# Make scripts executable
chmod +x cli/index.js
chmod +x quickstart.sh

# Run with appropriate permissions
# Some tools may require sudo on Pi
sudo node cli/index.js tools scan
```

### Module Not Found

```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Clear npm cache if needed
npm cache clean --force
npm install
```

## Getting Help

```bash
# Any command with --help
node cli/index.js --help
node cli/index.js server --help
node cli/index.js tools --help

# Check version
node cli/index.js --version

# System diagnostics
node cli/index.js system info
node cli/index.js system status
```

# Chippin-In-Pi 🔧🥧

> Transform your Raspberry Pi into a comprehensive hacking and security testing tool

Chippin-In-Pi is a powerful, modular security toolkit designed to run on Raspberry Pi devices. It provides a command-line interface, web-based dashboard, and a suite of security tools for penetration testing, network analysis, and security research.

## Features

🛠️ **Modular Architecture**
- CLI tool for system management
- RESTful API server
- Web-based dashboard (Angular)
- Extensible plugin system

🔐 **Security Tools** (Planned)
- Network scanner
- Port scanner
- WiFi analyzer
- Packet sniffer
- Vulnerability scanner
- Password strength tester

📊 **System Management**
- Real-time system monitoring
- Network interface management
- Service control
- Resource monitoring

## Quick Start

### Prerequisites

- Raspberry Pi (any model) or compatible Linux system
- Node.js 18 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/jakobneri/Chippin-In-Pi.git
cd Chippin-In-Pi

# Install dependencies
npm install

# Copy environment configuration
cp .env.example .env

# Make CLI executable (optional)
chmod +x cli/index.js
npm link
```

### Usage

#### Using the CLI

```bash
# Show available commands
chippin --help

# Start the server
chippin server start

# Start server in development mode
chippin server start --dev

# Check system information
chippin system info

# View system status
chippin system status

# List available security tools
chippin tools list
```

#### Direct npm scripts

```bash
# Start the server
npm run server

# Start server with auto-reload
npm run server:dev

# Start frontend development
npm run frontend:dev
```

## CLI Commands

### Server Management

```bash
chippin server start [options]   # Start the server
chippin server stop              # Stop the server
chippin server restart           # Restart the server
chippin server status            # Check server status
```

Options:
- `-p, --port <port>` - Port to run on (default: 3000)
- `-d, --dev` - Run in development mode with hot reload

### Frontend Management

```bash
chippin frontend start           # Start frontend dev server
chippin frontend build           # Build for production
chippin frontend deploy          # Deploy to Pi
```

### System Information

```bash
chippin system info              # Display system information
chippin system status            # Overall system status
chippin system network           # Network interface details
```

### Security Tools

```bash
chippin tools list               # List available tools
chippin tools scan               # Quick network scan
chippin tools install            # Install additional tools
```

## API Endpoints

### Server Endpoints

- `GET /` - API information
- `GET /health` - Health check
- `GET /api/system` - System information
- `GET /api/status` - Server status

### Tools Endpoints

- `GET /tools/list` - List available security tools
- `POST /tools/execute/:toolId` - Execute a security tool
- `GET /tools/status/:toolId` - Get tool execution status

## Project Structure

```
chippin-in-pi/
├── cli/                 # Command-line interface
│   ├── commands/       # Command modules
│   └── index.js        # CLI entry point
├── server/             # Backend API server
│   ├── routes/        # API routes
│   └── index.js       # Server entry point
├── frontend/          # Angular frontend (to be initialized)
├── shared/            # Shared code and types
│   ├── types/        # TypeScript types
│   └── utils/        # Utility functions
└── docs/             # Documentation
```

For detailed architecture information, see [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).

## Development

### Setting up the Frontend

The Angular frontend needs to be initialized separately:

```bash
# Install Angular CLI globally
npm install -g @angular/cli@21

# Initialize Angular in frontend directory
cd frontend
# Follow instructions in frontend/README.md
```

### Running in Development Mode

```bash
# Terminal 1: Start the backend server
npm run server:dev

# Terminal 2: Start the frontend (after initialization)
npm run frontend:dev
```

### Building for Production

```bash
# Build both server and frontend
npm run build
```

## Configuration

Configuration is managed through environment variables. Copy `.env.example` to `.env` and adjust:

```env
PORT=3000
NODE_ENV=development
CORS_ORIGIN=*
LOG_LEVEL=info
```

## Raspberry Pi Setup

### Recommended Hardware

- Raspberry Pi 4 (4GB+ RAM recommended)
- Raspberry Pi 400
- Raspberry Pi 5

### Installation on Pi

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Clone and setup
git clone https://github.com/jakobneri/Chippin-In-Pi.git
cd Chippin-In-Pi
npm install
```

### Running as a Service (systemd)

Create `/etc/systemd/system/chippin.service`:

```ini
[Unit]
Description=Chippin-In-Pi Server
After=network.target

[Service]
Type=simple
User=pi
WorkingDirectory=/home/pi/Chippin-In-Pi
ExecStart=/usr/bin/node server/index.js
Restart=always

[Install]
WantedBy=multi-user.target
```

Enable and start:
```bash
sudo systemctl enable chippin
sudo systemctl start chippin
```

## Security Considerations

⚠️ **Warning**: This tool is designed for authorized security testing only. Always ensure you have proper authorization before conducting any security assessments.

- Use in isolated/lab environments
- Keep the system updated
- Configure firewall rules
- Use strong authentication (when implemented)
- Follow responsible disclosure practices

## Roadmap

- [x] Project structure and CLI foundation
- [x] Server skeleton with basic API
- [ ] Angular frontend initialization
- [ ] Network scanning tools
- [ ] Port scanning functionality
- [ ] WiFi analysis tools
- [ ] Packet capture and analysis
- [ ] Authentication and user management
- [ ] Real-time dashboard
- [ ] Plugin system for custom tools
- [ ] Docker support
- [ ] Automated updates

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

MIT License - see LICENSE file for details

## Disclaimer

This tool is for educational and authorized security testing purposes only. The authors are not responsible for any misuse or damage caused by this program. Always ensure you have permission before testing any systems you do not own.

## Support

- 📖 Documentation: [docs/](docs/)
- 🐛 Issues: [GitHub Issues](https://github.com/jakobneri/Chippin-In-Pi/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/jakobneri/Chippin-In-Pi/discussions)

---

Made with ❤️ for the security research community
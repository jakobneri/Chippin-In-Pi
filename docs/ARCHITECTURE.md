# Project Architecture

## Overview

Chippin-In-Pi is a comprehensive Raspberry Pi-based hacking and security testing tool with a modular architecture consisting of:

- **CLI Tool**: Command-line interface for managing the system
- **Backend Server**: Express.js API server for tool execution and management
- **Frontend**: Angular-based web interface (planned)
- **Shared Libraries**: Common types and utilities

## Directory Structure

```
chippin-in-pi/
├── cli/                    # CLI tool
│   ├── commands/          # Command modules
│   │   ├── server.js     # Server management commands
│   │   ├── frontend.js   # Frontend management commands
│   │   ├── system.js     # System information commands
│   │   └── tools.js      # Security tools commands
│   └── index.js          # CLI entry point
├── server/                # Backend server
│   ├── routes/           # API routes
│   │   ├── api.js       # General API routes
│   │   └── tools.js     # Tools API routes
│   ├── middleware/       # Express middleware
│   ├── config/          # Configuration files
│   └── index.js         # Server entry point
├── frontend/             # Angular frontend (to be initialized)
│   └── README.md        # Frontend setup instructions
├── shared/              # Shared code
│   ├── types/          # TypeScript type definitions
│   └── utils/          # Utility functions
├── docs/               # Documentation
└── .env.example       # Environment variables template
```

## Components

### CLI Tool

The CLI tool (`chippin`) provides commands for:
- Starting/stopping/restarting the server
- Managing the frontend
- System information and diagnostics
- Security tool management

Built with:
- Commander.js for command parsing
- Inquirer.js for interactive prompts
- Chalk for colored output
- Ora for spinners

### Backend Server

Express.js server providing:
- RESTful API for security tools
- System information endpoints
- Health checks
- Tool execution management

### Frontend (Planned)

Angular 21 application with:
- Server-side rendering (SSR)
- Tailwind CSS for styling
- Signals for state management
- Standalone components

### Shared Libraries

Common code used by both server and frontend:
- Type definitions
- Utility functions
- Constants and configuration

## API Endpoints

### Server API

- `GET /` - API information
- `GET /health` - Health check
- `GET /api/system` - System information
- `GET /api/status` - Server status
- `GET /api/config` - Configuration

### Tools API

- `GET /tools/list` - List available tools
- `POST /tools/execute/:toolId` - Execute a tool
- `GET /tools/status/:toolId` - Get tool status

## Technology Stack

- **Runtime**: Node.js 18+
- **Server**: Express.js
- **CLI**: Commander.js, Inquirer.js
- **Frontend**: Angular 21 (planned)
- **Styling**: Tailwind CSS 4 (planned)
- **Language**: JavaScript (ES modules)

## Development Workflow

1. Start development with: `npm run dev`
2. Server development: `npm run server:dev`
3. Frontend development: `npm run frontend:dev`
4. Build for production: `npm run build`

## Security Considerations

- Environment variables for sensitive configuration
- CORS configuration for API security
- Input validation on all endpoints
- Rate limiting (to be implemented)
- Authentication/authorization (to be implemented)

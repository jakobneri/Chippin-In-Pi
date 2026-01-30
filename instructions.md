# Pi Music Server Development Guidelines

This File is used as a set of Ground Rules and Best practices for Development.

## Repository Structure

This is a monorepo for the Pi Music Server project.

- **cli/** - Command-line interface for server management
- **server/** - Node.js/Express backend with audio services
  - **services/** - Core business logic for audio, Bluetooth, library, and playback
  - **routes/** - API endpoints for music control
- **frontend/** - Angular 21 web dashboard for control
- **shared/** - Shared TypeScript types and utilities

## Development Commands

All development tasks are managed through npm scripts.

### Core Development Commands

```bash
# Start development servers (requires two terminals)
npm run frontend:dev    # Start Angular dev server
npm run server:dev      # Start Express backend with hot reload

# Build for production
npm run build           # Builds both frontend and backend

# Build individual components
npm run build:frontend  # Build Angular app
npm run build:server    # Compile server TypeScript

# Code quality
npm run format          # Format code with Prettier
npm run lint            # Run ESLint

# Upgrade dependencies (excludes @types/node)
npm run upgrade

# CLI development
npm run dev             # Run CLI in development mode
```

## Automated Build & Deploy

**Pre-commit hooks are enabled via Husky.** Before any commit:

1. Builds Angular and TypeScript
2. Runs ESLint and Prettier
3. Commits fail if build or linting fails

This ensures only working code is committed to GitHub. On the Pi, you only need to:

```bash
npm install
npm run build  # If not already built
npm run server
```

## Code Architecture

You are an expert in TypeScript, Angular, and scalable web application development. Write maintainable, performant, and accessible code following Angular and TypeScript best practices.

## TypeScript Best Practices

- Use strict type checking
- Prefer type inference when the type is obvious
- Avoid the `any` type; use `unknown` when type is uncertain
- DO NOT USE INTERFACE BUT TYPE
- All services must have proper TypeScript typings

## Backend (Node.js/Express) Best Practices

### Services Architecture

- Each service file (`*.service.js`) handles one responsibility
- Services are instantiated as singletons and exported
- All async operations should use async/await
- Return consistent response formats from services

### Current Services

1. **AudioService** - DAC/AMP HAT integration, volume control, playback
2. **PlaybackService** - Queue management and playback state
3. **LocalLibraryService** - Music file scanning and metadata
4. **BluetoothService** - Bluetooth device management
5. **YouTubeMusicService** - YouTube Music integration (auth, search, streaming)

### API Routes

- Routes are organized by feature (music.js, library.js, bluetooth.js, youtube-music.js)
- RESTful conventions with proper HTTP methods
- Consistent error handling with status codes
- All responses are JSON format

## Angular Best Practices

- Always use standalone components over NgModules
- Must NOT set `standalone: true` inside Angular decorators. It's the default.
- Use signals for state management
- Implement lazy loading for feature routes
- Do NOT use the `@HostBinding` and `@HostListener` decorators. Put host bindings inside the `host` object of the `@Component` or `@Directive` decorator instead
- Use `NgOptimizedImage` for all static images.
  - `NgOptimizedImage` does not work for inline base64 images.

## Components

- Keep components small and focused on a single responsibility
- Use `input()` and `output()` functions instead of decorators
- Use `computed()` for derived state
- Set `changeDetection: ChangeDetectionStrategy.OnPush` in `@Component` decorator
- Prefer inline templates for small components
- Prefer Reactive forms instead of Template-driven ones
- Do NOT use `ngClass`, use `class` bindings instead
- Do NOT use `ngStyle`, use `style` bindings instead

## Music Server Components

**Player Control Component** - Play/pause/stop/next/previous, volume slider

**Queue Component** - Display and manage playback queue

**Library Browser** - Browse local music (artists, albums, songs)

**Now Playing Display** - Show current track and metadata

**Source Selector** - Switch between Local/YouTube Music/Bluetooth

**Bluetooth Manager** - Connect/disconnect devices

## State Management

- Use signals for local component state
- Use `computed()` for derived state (e.g., queue position)
- Keep state transformations pure and predictable
- DO NOT use `mutate` on signals, use `update` or `set` instead
- Share playback state across components via injected service

## Templates

- Keep templates simple and avoid complex logic
- Use native control flow (`@if`, `@for`, `@switch`) instead of `*ngIf`, `*ngFor`, `*ngSwitch`
- Use the async pipe to handle observables from API calls
- Display album art and now-playing information clearly

## Services (Frontend & Backend)

### Backend (Express Routes)

- Design services around a single responsibility
- Export singleton instances
- Use consistent error handling

### Frontend (Angular Services)

- Design services around a single responsibility
- Use the `providedIn: 'root'` option for singleton services
- Use the `inject()` function instead of constructor injection
- All HTTP calls should handle errors gracefully

## Music Server Features

### Playback Sources

1. **Local Music** - MP3, FLAC, AAC, OGG, WAV from `/mnt/music`
2. **YouTube Music** - Stream via authenticated account
3. **Bluetooth** - Audio from paired mobile devices

### Audio Hardware

- DAC/AMP HAT integration for high-quality audio output
- Volume control through systemd/ALSA
- Automatic source switching

### Frontend Dashboard Features

- Now-playing display with album artwork
- Queue management interface
- Playback controls (play, pause, next, prev, volume)
- Library browser with search
- Source selection (Local/YouTube/Bluetooth)
- Bluetooth device connection UI
- YouTube Music search and playlist integration

## Key Technologies

- **Angular 21** (Standalone components, Signals)
- **Node.js** with Express for backend
- **TypeScript** throughout
- **Tailwind CSS 4** for styling
- **RxJS** for reactive programming
- **Zod** for runtime schema validation (future)
- **Husky** for pre-commit build automation
- **Prettier** for code formatting
- **FFmpeg** for audio processing (via fluent-ffmpeg)
- **Node Speaker** for DAC/AMP output
- **Bluetoothctl** for Bluetooth management

## Environment Variables

```env
# Audio
MUSIC_PATH=/mnt/music              # Local music directory
AUDIO_DEVICE=default               # ALSA audio device

# YouTube Music (future)
YOUTUBE_EMAIL=user@gmail.com
YOUTUBE_PASSWORD=password

# Bluetooth
BLUETOOTH_ADAPTER=hci0

# Server
PORT=3000
NODE_ENV=production
```

## Deployment

1. Clone repository on Pi
2. Run `npm install`
3. Configure `.env` file with music path and credentials
4. Run `npm run build` to build Angular and backend
5. Start with `npm run server`
6. Access dashboard at `http://pi-ip:3000`

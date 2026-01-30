```
╔══════════════════════════════════════════════════════════════╗
║   ▓▓▓▓▓  ▒▒ ╔═════╗  ▓▓▓  ░░░  ▓▓▓   ▒▒   ▓▓▓  ╔═════╗   ║
║   ▓▓▓▓▓  ▒▒ ║ ◉   ║  ▓▓▓  ░░░  ▓▓▓   ▒▒   ▓▓▓  ║ ◉   ║   ║
║   ▓▓       ╚═════╝  ▓▓▓          ▓▓▓       ▓▓▓  ╚═════╝   ║
║                       CHIPPIN' IN PI                        ║
║              A Cyberpunk Music Server for Pi                ║
╚══════════════════════════════════════════════════════════════╝
```

> **"My name is Johnny Silverhand, and I'm a rebel, baby."** — Stream music, not corporate propaganda.

---

## What Is This?

A music server for your Raspberry Pi with a DAC/AMP HAT. Stream from local files, YouTube Music, or Bluetooth. Control everything from your web dashboard.

**Three Audio Sources:**

- 🎵 Local music files (MP3, FLAC, AAC, OGG, WAV)
- 📺 YouTube Music streaming
- 📱 Bluetooth from your phone

---

## Quick Start

```bash
# Install
npm install

# Setup
cp .env.example .env
nano .env  # Edit with your music path

# Develop
npm run server:dev      # Terminal 1: Backend
cd frontend && npm run dev  # Terminal 2: Frontend

# Build & Deploy
npm run build
npm run server
```

Access the dashboard at `http://localhost:3000`

---

## NPM Commands

```bash
npm run dev              # Start CLI tool
npm run server           # Run production server
npm run server:dev       # Development with hot reload
npm run frontend:dev     # Angular dev server
npm run build            # Build everything
npm run format           # Format code
npm run lint             # Run linter
```

---

## API Quick Reference

**Playback:** `POST /api/playback/{play|pause|stop|next|previous}`  
**Volume:** `POST /api/playback/volume` → `{level: 0-100}`  
**Queue:** `GET|POST|DELETE /api/queue`  
**Library:** `GET /api/library/{songs|artists|albums}`  
**Bluetooth:** `GET|POST /api/bluetooth/{devices|connect|disconnect}`  
**YouTube:** `POST /api/youtube-music/authenticate`

See [API_REFERENCE.md](API_REFERENCE.md) for full documentation.

---

## Setup on Raspberry Pi

```bash
# Install dependencies
sudo apt update && sudo apt install -y ffmpeg bluez alsa-utils

# Clone & install
git clone <repo>
cd pi-music-server
npm install

# Configure
cp .env.example .env
nano .env

# Build
npm run build

# Run
npm run server
```

Optional: Run as systemd service (see [instructions.md](instructions.md))

---

## Project Structure

```
├── cli/commands/           # Audio, server, system commands
├── server/
│   ├── services/           # Audio, playback, library, Bluetooth, YouTube
│   └── routes/             # API endpoints (music, library, bluetooth, youtube-music)
├── frontend/               # Angular 21 dashboard (ready for dev)
├── shared/                 # Shared types & utils
└── documentation/          # Detailed guides
```

---

## Development

**Backend Services** (ready for implementation):

- `audio.service.js` — DAC/AMP control
- `playback.service.js` — Queue management
- `local-library.service.js` — Music file indexing
- `bluetooth.service.js` — Device management
- `youtube-music.service.js` — YouTube integration

**Frontend Components** (to build):

- Player controls
- Queue display
- Library browser
- Now-playing display
- Bluetooth manager

---

## Documentation

- **[instructions.md](instructions.md)** — Development guidelines
- **[API_REFERENCE.md](API_REFERENCE.md)** — Complete API docs
- **[PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)** — Architecture details
- **[QUICK_REFERENCE.md](QUICK_REFERENCE.md)** — Quick start guide

---

## License

MIT — See [LICENSE](LICENSE)

---

**Chippin' in Pi.** 🎵 | _Stay rebellious. Stay musical._

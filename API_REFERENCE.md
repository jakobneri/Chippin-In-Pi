# Pi Music Server - Complete API Reference

Base URL: `http://localhost:3000/api`

---

## 🎵 Playback Control

### Get Current Status

```http
GET /playback/status
```

**Response:**

```json
{
  "isPlaying": false,
  "currentTrack": {
    "id": "song123",
    "title": "Song Title",
    "artist": "Artist Name",
    "album": "Album Name"
  },
  "volume": 75,
  "position": 0,
  "duration": 240,
  "currentIndex": 0,
  "queueLength": 10,
  "source": "local"
}
```

### Start Playback

```http
POST /playback/play
Content-Type: application/json

{
  "songId": "song123"
}
```

### Pause Playback

```http
POST /playback/pause
```

### Stop Playback

```http
POST /playback/stop
```

### Next Track

```http
POST /playback/next
```

**Response:**

```json
{
  "message": "Playing next song",
  "currentSong": {
    "id": "song124",
    "title": "Next Song",
    "artist": "Artist Name"
  }
}
```

### Previous Track

```http
POST /playback/previous
```

### Set Volume

```http
POST /playback/volume
Content-Type: application/json

{
  "level": 75
}
```

**Volume range:** 0-100

---

## 📋 Queue Management

### Get Current Queue

```http
GET /queue
```

**Response:**

```json
{
  "queue": [
    {
      "id": "song1",
      "title": "Song 1",
      "artist": "Artist",
      "duration": 180
    },
    {
      "id": "song2",
      "title": "Song 2",
      "artist": "Artist",
      "duration": 200
    }
  ]
}
```

### Add to Queue

```http
POST /queue/add
Content-Type: application/json

{
  "song": {
    "id": "song123",
    "title": "Song Title",
    "artist": "Artist Name",
    "album": "Album Name",
    "duration": 240
  },
  "position": 0
}
```

**position** (optional): Insert at specific queue position. Omit to add at end.

### Remove from Queue

```http
DELETE /queue/0
```

Remove song at index 0

### Clear Queue

```http
POST /queue/clear
```

### Shuffle Queue

```http
POST /queue/shuffle
```

---

## 🎼 Local Library

### Get All Songs

```http
GET /library/songs
```

**Query Parameters:**

- `artist` (optional): Filter by artist
- `album` (optional): Filter by album
- `genre` (optional): Filter by genre

**Response:**

```json
{
  "songs": [
    {
      "id": "song1",
      "title": "Song Title",
      "artist": "Artist Name",
      "album": "Album Name",
      "duration": 240,
      "genre": "Rock"
    }
  ],
  "count": 1
}
```

### Get All Artists

```http
GET /library/artists
```

**Response:**

```json
{
  "artists": ["Artist 1", "Artist 2", "Artist 3"],
  "count": 3
}
```

### Get Albums by Artist

```http
GET /library/albums/Artist%20Name
```

**Response:**

```json
{
  "albums": ["Album 1", "Album 2"],
  "count": 2
}
```

### Get Song Metadata

```http
GET /library/song/song123
```

**Response:**

```json
{
  "id": "song123",
  "title": "Song Title",
  "artist": "Artist Name",
  "album": "Album Name",
  "duration": 240,
  "genre": "Rock",
  "year": 2023,
  "artwork": "base64-image-data"
}
```

### Scan and Index Library

```http
POST /library/scan
```

Scans `/mnt/music` directory and updates index

---

## 📱 Bluetooth Management

### Get Connected Devices

```http
GET /bluetooth/devices
```

**Response:**

```json
{
  "devices": [
    {
      "id": "device-mac-address",
      "name": "iPhone 15",
      "connected": true
    }
  ],
  "count": 1
}
```

### Scan for Devices

```http
GET /bluetooth/scan
```

Searches for available Bluetooth devices nearby

### Connect to Device

```http
POST /bluetooth/connect/device-mac-address
```

**Response:**

```json
{
  "message": "Connected to device",
  "deviceId": "device-mac-address"
}
```

### Disconnect Device

```http
POST /bluetooth/disconnect/device-mac-address
```

### Set Bluetooth as Audio Source

```http
POST /bluetooth/set-as-source
```

---

## 🎵 YouTube Music

### Authenticate

```http
POST /youtube-music/authenticate
Content-Type: application/json

{
  "email": "user@gmail.com",
  "password": "password123"
}
```

### Check Authentication Status

```http
GET /youtube-music/status
```

**Response:**

```json
{
  "authenticated": true
}
```

### Search YouTube Music

```http
GET /youtube-music/search?q=Imagine&type=song
```

**Query Parameters:**

- `q` (required): Search query
- `type` (optional): `song`, `artist`, `album`, or `playlist`

**Response:**

```json
{
  "results": [
    {
      "id": "youtube-song-id",
      "title": "Imagine",
      "artist": "John Lennon",
      "album": "Imagine",
      "type": "song"
    }
  ],
  "count": 1
}
```

### Get User Playlists

```http
GET /youtube-music/playlists
```

**Response:**

```json
{
  "playlists": [
    {
      "id": "playlist-id",
      "title": "My Playlist",
      "count": 50
    }
  ],
  "count": 1
}
```

### Get Now Playing

```http
GET /youtube-music/now-playing
```

Returns the song currently playing on YouTube Music account

---

## 🔊 Audio Source Selection

### Set Audio Source

```http
POST /source/set
Content-Type: application/json

{
  "source": "local"
}
```

**Valid sources:**

- `local` - Local music files
- `youtube` - YouTube Music streaming
- `bluetooth` - Bluetooth audio from device

---

## Error Responses

All endpoints return appropriate HTTP status codes:

```json
{
  "error": "Error message description"
}
```

### Status Codes

- `200` - Success
- `400` - Bad request (invalid parameters)
- `401` - Unauthorized (authentication failed)
- `404` - Not found (song/device not found)
- `500` - Server error

### Example Error

```http
POST /playback/volume
Content-Type: application/json

{
  "level": 150
}

// Response (400 Bad Request)
{
  "error": "Volume must be between 0 and 100"
}
```

---

## Frontend Integration Examples

### React Example

```javascript
async function playNextTrack() {
  const response = await fetch('http://localhost:3000/api/playback/next', {
    method: 'POST',
  });
  const data = await response.json();
  console.log('Now playing:', data.currentSong);
}
```

### Angular Example (RxJS)

```typescript
playNextTrack() {
  return this.http.post('/api/playback/next', {})
    .subscribe(
      (response: any) => this.currentSong = response.currentSong
    );
}
```

### JavaScript Fetch

```javascript
// Get playback status
fetch('http://localhost:3000/api/playback/status')
  .then(res => res.json())
  .then(data => console.log(data));

// Add song to queue
fetch('http://localhost:3000/api/queue/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ song: { id: 'song1', title: 'Song' } }),
})
  .then(res => res.json())
  .then(data => console.log(data));
```

---

## WebSocket Support (Future)

Real-time updates for:

- Track changes
- Volume adjustments
- Queue updates
- Device connections/disconnections
- YouTube Music authentication changes

(To be implemented)

---

## Rate Limiting (Future)

- General endpoints: 100 requests per minute
- Playback endpoints: 500 requests per minute
- Authentication: 5 attempts per minute

(To be implemented)

---

## Environment Variables for API

```env
# Server
API_PORT=3000
API_HOST=0.0.0.0

# Music
MUSIC_PATH=/mnt/music
SCAN_INTERVAL=3600000  # Rescan library every hour

# Audio
DEFAULT_VOLUME=50
DEFAULT_SOURCE=local
```

---

## Testing the API

### Using cURL

```bash
# Get status
curl http://localhost:3000/api/playback/status

# Play next
curl -X POST http://localhost:3000/api/playback/next

# Set volume
curl -X POST http://localhost:3000/api/playback/volume \
  -H "Content-Type: application/json" \
  -d '{"level": 80}'

# Get queue
curl http://localhost:3000/api/queue

# Scan library
curl -X POST http://localhost:3000/api/library/scan
```

### Using Postman

1. Create new request
2. Set method (GET/POST)
3. Enter URL: `http://localhost:3000/api/...`
4. Add JSON body for POST requests
5. Send

---

Last Updated: January 2026
API Version: 1.0.0

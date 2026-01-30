import { Router } from 'express';
import { youtubeMusic } from '../services/youtube-music.service.js';

const router = Router();

/**
 * POST /api/youtube-music/authenticate
 * Authenticate with YouTube Music account
 */
router.post('/authenticate', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const success = await youtubeMusic.authenticate(email, password);

    if (success) {
      res.json({ message: 'Successfully authenticated with YouTube Music' });
    } else {
      res.status(401).json({ error: 'Authentication failed' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * GET /api/youtube-music/status
 * Check YouTube Music authentication status
 */
router.get('/status', (req, res) => {
  try {
    const authenticated = youtubeMusic.isAuthenticated();
    res.json({ authenticated });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * GET /api/youtube-music/search
 * Search YouTube Music
 */
router.get('/search', async (req, res) => {
  try {
    const { q, type = 'song' } = req.query;

    if (!q) {
      return res.status(400).json({ error: 'Search query required' });
    }

    const results = await youtubeMusic.search(q, type);
    res.json({ results, count: results.length });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * GET /api/youtube-music/playlists
 * Get user's YouTube Music playlists
 */
router.get('/playlists', async (req, res) => {
  try {
    const playlists = await youtubeMusic.getPlaylists();
    res.json({ playlists, count: playlists.length });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * GET /api/youtube-music/now-playing
 * Get currently playing song on YouTube Music account
 */
router.get('/now-playing', async (req, res) => {
  try {
    const song = await youtubeMusic.getCurrentSong();

    if (song) {
      res.json(song);
    } else {
      res.status(404).json({ error: 'No song currently playing' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;

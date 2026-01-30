import { Router } from 'express';
import { localLibraryService } from '../services/local-library.service.js';

const router = Router();

/**
 * GET /api/library/songs
 * Get all songs from local library
 */
router.get('/songs', async (req, res) => {
  try {
    const { artist, album, genre } = req.query;
    const filters = { artist, album, genre };
    const songs = await localLibraryService.getSongs(filters);
    res.json({ songs, count: songs.length });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * GET /api/library/artists
 * Get all artists in library
 */
router.get('/artists', async (req, res) => {
  try {
    const artists = await localLibraryService.getArtists();
    res.json({ artists, count: artists.length });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * GET /api/library/albums/:artist
 * Get albums by artist
 */
router.get('/albums/:artist', async (req, res) => {
  try {
    const { artist } = req.params;
    const albums = await localLibraryService.getAlbums(artist);
    res.json({ albums, count: albums.length });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * GET /api/library/song/:id
 * Get song metadata
 */
router.get('/song/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const metadata = await localLibraryService.getSongMetadata(id);

    if (!metadata) {
      return res.status(404).json({ error: 'Song not found' });
    }

    res.json(metadata);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * POST /api/library/scan
 * Scan local music directory and index library
 */
router.post('/scan', async (req, res) => {
  try {
    await localLibraryService.scanLibrary();
    await localLibraryService.reindexLibrary();
    res.json({ message: 'Library scan and indexing complete' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;

import { Router } from 'express';
import { audioService } from '../services/audio.service.js';
import { playbackService } from '../services/playback.service.js';
import { bluetoothService } from '../services/bluetooth.service.js';
import { localLibraryService } from '../services/local-library.service.js';
import { youtubeMusic } from '../services/youtube-music.service.js';

const router = Router();

// ==================== Playback Routes ====================

/**
 * GET /api/playback/status
 * Get current playback status
 */
router.get('/playback/status', async (req, res) => {
  try {
    const status = await audioService.getStatus();
    const currentSong = playbackService.getCurrentSong();

    res.json({
      ...status,
      currentSong,
      currentIndex: playbackService.currentIndex,
      queueLength: playbackService.queue.length,
      source: playbackService.source,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * POST /api/playback/play
 * Start playback
 */
router.post('/playback/play', async (req, res) => {
  try {
    const { songId } = req.body;
    // TODO: Implement playback based on source and song
    res.json({ message: 'Playback started' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * POST /api/playback/pause
 * Pause playback
 */
router.post('/playback/pause', async (req, res) => {
  try {
    await audioService.pause();
    res.json({ message: 'Playback paused' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * POST /api/playback/stop
 * Stop playback
 */
router.post('/playback/stop', async (req, res) => {
  try {
    await audioService.stop();
    res.json({ message: 'Playback stopped' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * POST /api/playback/next
 * Play next song
 */
router.post('/playback/next', async (req, res) => {
  try {
    const nextSong = playbackService.playNext();
    if (nextSong) {
      res.json({ message: 'Playing next song', currentSong: nextSong });
    } else {
      res.status(404).json({ error: 'No next song in queue' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * POST /api/playback/previous
 * Play previous song
 */
router.post('/playback/previous', async (req, res) => {
  try {
    const prevSong = playbackService.playPrevious();
    if (prevSong) {
      res.json({ message: 'Playing previous song', currentSong: prevSong });
    } else {
      res.status(404).json({ error: 'No previous song in queue' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * POST /api/playback/volume
 * Set volume level
 */
router.post('/playback/volume', async (req, res) => {
  try {
    const { level } = req.body;
    if (level < 0 || level > 100) {
      return res.status(400).json({ error: 'Volume must be between 0 and 100' });
    }
    await audioService.setVolume(level);
    res.json({ message: 'Volume updated', level });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ==================== Queue Routes ====================

/**
 * GET /api/queue
 * Get current playback queue
 */
router.get('/queue', (req, res) => {
  try {
    const queue = playbackService.getQueue();
    res.json({ queue });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * POST /api/queue/add
 * Add song to queue
 */
router.post('/queue/add', (req, res) => {
  try {
    const { song, position } = req.body;
    playbackService.addToQueue(song, position);
    res.json({ message: 'Song added to queue', queue: playbackService.getQueue() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * DELETE /api/queue/:index
 * Remove song from queue
 */
router.delete('/queue/:index', (req, res) => {
  try {
    const { index } = req.params;
    playbackService.removeFromQueue(parseInt(index));
    res.json({ message: 'Song removed from queue' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * POST /api/queue/clear
 * Clear entire queue
 */
router.post('/queue/clear', (req, res) => {
  try {
    playbackService.clearQueue();
    res.json({ message: 'Queue cleared' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * POST /api/queue/shuffle
 * Shuffle queue
 */
router.post('/queue/shuffle', (req, res) => {
  try {
    playbackService.shuffleQueue();
    res.json({ message: 'Queue shuffled' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ==================== Source Routes ====================

/**
 * POST /api/source/set
 * Set audio source
 */
router.post('/source/set', async (req, res) => {
  try {
    const { source } = req.body;
    const validSources = ['local', 'youtube', 'bluetooth'];

    if (!validSources.includes(source)) {
      return res.status(400).json({ error: `Source must be one of: ${validSources.join(', ')}` });
    }

    playbackService.setSource(source);
    res.json({ message: `Audio source set to ${source}`, source });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;

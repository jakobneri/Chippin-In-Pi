/**
 * PlaybackService - Central playback queue and state management
 * Manages the playback queue and current playback state
 */

export class PlaybackService {
  constructor() {
    this.queue = [];
    this.currentIndex = -1;
    this.isPlaying = false;
    this.source = null; // 'local', 'youtube', or 'bluetooth'
  }

  /**
   * Add song to queue
   * @param {object} song - Song object
   * @param {number} position - Queue position (optional)
   * @returns {void}
   */
  addToQueue(song, position = null) {
    if (position !== null) {
      this.queue.splice(position, 0, song);
    } else {
      this.queue.push(song);
    }
  }

  /**
   * Remove song from queue
   * @param {number} index - Queue index
   * @returns {void}
   */
  removeFromQueue(index) {
    this.queue.splice(index, 1);
    if (this.currentIndex > index) {
      this.currentIndex--;
    }
  }

  /**
   * Clear entire queue
   * @returns {void}
   */
  clearQueue() {
    this.queue = [];
    this.currentIndex = -1;
  }

  /**
   * Get current queue
   * @returns {array}
   */
  getQueue() {
    return this.queue;
  }

  /**
   * Get current song
   * @returns {object|null}
   */
  getCurrentSong() {
    if (this.currentIndex >= 0 && this.currentIndex < this.queue.length) {
      return this.queue[this.currentIndex];
    }
    return null;
  }

  /**
   * Play next song
   * @returns {object|null}
   */
  playNext() {
    if (this.currentIndex < this.queue.length - 1) {
      this.currentIndex++;
      return this.getCurrentSong();
    }
    return null;
  }

  /**
   * Play previous song
   * @returns {object|null}
   */
  playPrevious() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      return this.getCurrentSong();
    }
    return null;
  }

  /**
   * Jump to specific song in queue
   * @param {number} index - Queue index
   * @returns {object|null}
   */
  jumpToIndex(index) {
    if (index >= 0 && index < this.queue.length) {
      this.currentIndex = index;
      return this.getCurrentSong();
    }
    return null;
  }

  /**
   * Shuffle queue
   * @returns {void}
   */
  shuffleQueue() {
    for (let i = this.queue.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.queue[i], this.queue[j]] = [this.queue[j], this.queue[i]];
    }
  }

  /**
   * Set playback source
   * @param {string} source - 'local', 'youtube', or 'bluetooth'
   * @returns {void}
   */
  setSource(source) {
    this.source = source;
  }
}

export const playbackService = new PlaybackService();

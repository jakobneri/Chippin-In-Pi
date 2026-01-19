import express from 'express';

const router = express.Router();

// Get system information
router.get('/system', (req, res) => {
  res.json({
    platform: process.platform,
    arch: process.arch,
    nodeVersion: process.version,
    memory: {
      total: process.memoryUsage().heapTotal,
      used: process.memoryUsage().heapUsed
    }
  });
});

// Get server status
router.get('/status', (req, res) => {
  res.json({
    status: 'operational',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Get configuration (non-sensitive)
router.get('/config', (req, res) => {
  res.json({
    environment: process.env.NODE_ENV || 'development',
    version: '1.0.0'
  });
});

export default router;

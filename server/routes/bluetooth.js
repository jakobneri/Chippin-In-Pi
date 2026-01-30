import { Router } from 'express';
import { bluetoothService } from '../services/bluetooth.service.js';

const router = Router();

/**
 * GET /api/bluetooth/devices
 * Get list of connected Bluetooth devices
 */
router.get('/devices', async (req, res) => {
  try {
    const devices = await bluetoothService.getConnectedDevices();
    res.json({ devices, count: devices.length });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * GET /api/bluetooth/scan
 * Scan for available Bluetooth devices
 */
router.get('/scan', async (req, res) => {
  try {
    const devices = await bluetoothService.scanDevices();
    res.json({ devices, count: devices.length });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * POST /api/bluetooth/connect/:deviceId
 * Connect to a Bluetooth device
 */
router.post('/connect/:deviceId', async (req, res) => {
  try {
    const { deviceId } = req.params;
    const success = await bluetoothService.connectDevice(deviceId);

    if (success) {
      res.json({ message: 'Connected to device', deviceId });
    } else {
      res.status(400).json({ error: 'Failed to connect to device' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * POST /api/bluetooth/disconnect/:deviceId
 * Disconnect from a Bluetooth device
 */
router.post('/disconnect/:deviceId', async (req, res) => {
  try {
    const { deviceId } = req.params;
    const success = await bluetoothService.disconnectDevice(deviceId);

    if (success) {
      res.json({ message: 'Disconnected from device', deviceId });
    } else {
      res.status(400).json({ error: 'Failed to disconnect from device' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * POST /api/bluetooth/set-as-source
 * Set Bluetooth as the active audio source
 */
router.post('/set-as-source', async (req, res) => {
  try {
    await bluetoothService.setAsAudioSource();
    res.json({ message: 'Bluetooth set as active audio source' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;

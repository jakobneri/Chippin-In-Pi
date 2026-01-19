/**
 * Common type definitions shared between server and frontend
 * 
 * @typedef {'active' | 'inactive' | 'planned' | 'error'} ToolStatus
 * 
 * @typedef {Object} Tool
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {ToolStatus} status
 * @property {string} [category]
 * 
 * @typedef {Object} SystemInfo
 * @property {string} platform
 * @property {string} arch
 * @property {string} hostname
 * @property {number} cpus
 * @property {number} totalMemory
 * @property {number} freeMemory
 * @property {number} uptime
 * 
 * @typedef {Object} ServerStatus
 * @property {'running' | 'stopped' | 'error'} status
 * @property {string} timestamp
 * @property {number} uptime
 * 
 * @typedef {Object} NetworkInterface
 * @property {string} name
 * @property {string} address
 * @property {string} mac
 * @property {string} family
 * 
 * @typedef {Object} ScanResult
 * @property {string} target
 * @property {string} timestamp
 * @property {unknown[]} results
 */

export {};

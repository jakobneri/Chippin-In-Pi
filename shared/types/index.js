/**
 * Common type definitions shared between server and frontend
 */

export type ToolStatus = 'active' | 'inactive' | 'planned' | 'error';

export type Tool = {
  id: string;
  name: string;
  description: string;
  status: ToolStatus;
  category?: string;
};

export type SystemInfo = {
  platform: string;
  arch: string;
  hostname: string;
  cpus: number;
  totalMemory: number;
  freeMemory: number;
  uptime: number;
};

export type ServerStatus = {
  status: 'running' | 'stopped' | 'error';
  timestamp: string;
  uptime: number;
};

export type NetworkInterface = {
  name: string;
  address: string;
  mac: string;
  family: string;
};

export type ScanResult = {
  target: string;
  timestamp: string;
  results: unknown[];
};

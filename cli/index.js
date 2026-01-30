#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import { serverCommands } from './commands/server.js';
import { frontendCommands } from './commands/frontend.js';
import { audioCommands } from './commands/audio.js';
import { systemCommands } from './commands/system.js';

const program = new Command();

program
  .name('pi-music')
  .description('Pi Music Server: Web-based music server for Raspberry Pi')
  .version('1.0.0');

// Add command groups
program.addCommand(serverCommands);
program.addCommand(frontendCommands);
program.addCommand(audioCommands);
program.addCommand(systemCommands);

// Interactive mode
program
  .command('interactive')
  .alias('i')
  .description('Start interactive mode')
  .action(async () => {
    console.log(chalk.cyan.bold('\n🎵 Pi Music Server Interactive Mode\n'));

// Show help if no arguments provided
if (!process.argv.slice(2).length) {
  program.outputHelp();
}

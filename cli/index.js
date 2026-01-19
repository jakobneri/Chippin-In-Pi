#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import { serverCommands } from './commands/server.js';
import { frontendCommands } from './commands/frontend.js';
import { systemCommands } from './commands/system.js';
import { toolsCommands } from './commands/tools.js';

const program = new Command();

program
  .name('chippin')
  .description('Chippin-In-Pi: Raspberry Pi comprehensive hacking and security testing tool')
  .version('1.0.0');

// Add command groups
program.addCommand(serverCommands);
program.addCommand(frontendCommands);
program.addCommand(systemCommands);
program.addCommand(toolsCommands);

// Interactive mode
program
  .command('interactive')
  .alias('i')
  .description('Start interactive mode')
  .action(async () => {
    console.log(chalk.cyan.bold('\n🔧 Chippin-In-Pi Interactive Mode\n'));
    console.log(chalk.yellow('Interactive mode not yet implemented.'));
    console.log(chalk.gray('Use --help to see available commands.\n'));
  });

// Parse arguments
program.parse(process.argv);

// Show help if no arguments provided
if (!process.argv.slice(2).length) {
  program.outputHelp();
}

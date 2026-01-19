import { Command } from 'commander';
import chalk from 'chalk';
import ora from 'ora';
import { spawn } from 'child_process';
import { promisify } from 'util';
import { exec } from 'child_process';

const execAsync = promisify(exec);

const frontendCommands = new Command('frontend')
  .description('Manage the frontend application');

frontendCommands
  .command('start')
  .description('Start the frontend development server')
  .option('-p, --port <port>', 'Port to run the frontend on', '4200')
  .action((options) => {
    console.log(chalk.cyan(`\n🎨 Starting frontend development server on port ${options.port}...\n`));
    
    const frontendProcess = spawn('npm', ['run', 'frontend:dev'], {
      stdio: 'inherit',
      env: { ...process.env, PORT: options.port }
    });

    frontendProcess.on('error', (error) => {
      console.error(chalk.red('Failed to start frontend:', error.message));
      process.exit(1);
    });
  });

frontendCommands
  .command('build')
  .description('Build the frontend for production')
  .action(async () => {
    const spinner = ora('Building frontend...').start();
    
    try {
      await execAsync('npm run build:frontend');
      spinner.succeed('Frontend built successfully');
      console.log(chalk.green('\n✓ Production build complete\n'));
    } catch (error) {
      spinner.fail('Failed to build frontend');
      console.error(chalk.red(error.message));
      process.exit(1);
    }
  });

frontendCommands
  .command('deploy')
  .description('Deploy the frontend to the Pi')
  .action(() => {
    console.log(chalk.yellow('\n⚠ Frontend deployment not yet implemented\n'));
    console.log(chalk.gray('This will deploy the built frontend to the Raspberry Pi.\n'));
  });

export { frontendCommands };

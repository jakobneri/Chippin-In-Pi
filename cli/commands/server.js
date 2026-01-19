import { Command } from 'commander';
import chalk from 'chalk';
import ora from 'ora';
import { spawn, exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

const serverCommands = new Command('server');

serverCommands
  .command('start')
  .description('Start the backend server')
  .option('-p, --port <port>', 'Port to run the server on', '3000')
  .option('-d, --dev', 'Run in development mode with hot reload')
  .action(async (options) => {
    const spinner = ora('Starting server...').start();
    
    try {
      if (options.dev) {
        spinner.text = `Starting server in development mode on port ${options.port}...`;
        console.log(chalk.cyan(`\n🚀 Starting development server on port ${options.port}...\n`));
        
        const serverProcess = spawn('npm', ['run', 'server:dev'], {
          stdio: 'inherit',
          env: { ...process.env, PORT: options.port }
        });

        serverProcess.on('error', (error) => {
          spinner.fail('Failed to start server');
          console.error(chalk.red(error.message));
          process.exit(1);
        });
      } else {
        spinner.text = `Starting server on port ${options.port}...`;
        console.log(chalk.cyan(`\n🚀 Starting server on port ${options.port}...\n`));
        
        const serverProcess = spawn('npm', ['run', 'server'], {
          stdio: 'inherit',
          env: { ...process.env, PORT: options.port }
        });

        serverProcess.on('error', (error) => {
          spinner.fail('Failed to start server');
          console.error(chalk.red(error.message));
          process.exit(1);
        });
      }
      
      spinner.succeed(`Server command initiated on port ${options.port}`);
    } catch (error) {
      spinner.fail('Failed to start server');
      console.error(chalk.red(error.message));
      process.exit(1);
    }
  });

serverCommands
  .command('stop')
  .description('Stop the backend server')
  .action(async () => {
    const spinner = ora('Stopping server...').start();
    
    try {
      // Try to find and kill the server process
      const { stdout } = await execAsync('lsof -ti:3000 || echo ""');
      const pid = stdout.trim();
      
      if (pid) {
        await execAsync(`kill ${pid}`);
        spinner.succeed('Server stopped successfully');
      } else {
        spinner.info('No server process found running on port 3000');
      }
    } catch (error) {
      spinner.fail('Failed to stop server');
      console.error(chalk.red(error.message));
      process.exit(1);
    }
  });

serverCommands
  .command('status')
  .description('Check server status')
  .action(async () => {
    const spinner = ora('Checking server status...').start();
    
    try {
      const { stdout } = await execAsync('lsof -ti:3000 || echo ""');
      const pid = stdout.trim();
      
      if (pid) {
        spinner.succeed(`Server is running (PID: ${pid})`);
        console.log(chalk.green('✓ Server is active on port 3000'));
      } else {
        spinner.info('Server is not running');
        console.log(chalk.yellow('⚠ Server is not active'));
      }
    } catch (error) {
      spinner.fail('Failed to check server status');
      console.error(chalk.red(error.message));
    }
  });

serverCommands
  .command('restart')
  .description('Restart the backend server')
  .option('-p, --port <port>', 'Port to run the server on', '3000')
  .action(async (options) => {
    console.log(chalk.cyan('🔄 Restarting server...\n'));
    
    // Stop the server
    try {
      const { stdout } = await execAsync('lsof -ti:3000 || echo ""');
      const pid = stdout.trim();
      if (pid) {
        await execAsync(`kill ${pid}`);
        console.log(chalk.green('✓ Server stopped'));
      }
    } catch (error) {
      console.log(chalk.yellow('⚠ No running server found'));
    }
    
    // Wait a bit
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Start the server
    console.log(chalk.cyan(`\n🚀 Starting server on port ${options.port}...\n`));
    const serverProcess = spawn('npm', ['run', 'server'], {
      stdio: 'inherit',
      env: { ...process.env, PORT: options.port }
    });

    serverProcess.on('error', (error) => {
      console.error(chalk.red('Failed to restart server:', error.message));
      process.exit(1);
    });
  });

export { serverCommands };

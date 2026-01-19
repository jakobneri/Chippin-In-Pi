import { Command } from 'commander';
import chalk from 'chalk';
import ora from 'ora';
import { promisify } from 'util';
import { exec } from 'child_process';
import os from 'os';

const execAsync = promisify(exec);

const systemCommands = new Command('system')
  .description('System information and diagnostics');

systemCommands
  .command('info')
  .description('Display system information')
  .action(async () => {
    console.log(chalk.cyan.bold('\n📊 System Information\n'));
    
    const spinner = ora('Gathering system information...').start();
    
    try {
      // Basic system info
      console.log(chalk.white('Platform:'), chalk.green(os.platform()));
      console.log(chalk.white('Architecture:'), chalk.green(os.arch()));
      console.log(chalk.white('Hostname:'), chalk.green(os.hostname()));
      console.log(chalk.white('CPUs:'), chalk.green(os.cpus().length));
      console.log(chalk.white('Total Memory:'), chalk.green(`${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`));
      console.log(chalk.white('Free Memory:'), chalk.green(`${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)} GB`));
      console.log(chalk.white('Uptime:'), chalk.green(`${(os.uptime() / 3600).toFixed(2)} hours`));
      
      // Check if running on Raspberry Pi
      try {
        const { stdout } = await execAsync('cat /proc/device-tree/model 2>/dev/null || echo "Not a Raspberry Pi"');
        console.log(chalk.white('\nDevice Model:'), chalk.green(stdout.trim()));
      } catch (error) {
        console.log(chalk.white('\nDevice Model:'), chalk.yellow('Unable to determine'));
      }
      
      spinner.succeed('System information retrieved');
      console.log('');
    } catch (error) {
      spinner.fail('Failed to get system information');
      console.error(chalk.red(error.message));
    }
  });

systemCommands
  .command('status')
  .description('Check overall system status')
  .action(async () => {
    console.log(chalk.cyan.bold('\n🔍 System Status\n'));
    
    const spinner = ora('Checking system status...').start();
    
    try {
      // Check server status
      const { stdout: serverPid } = await execAsync('lsof -ti:3000 || echo ""');
      const serverStatus = serverPid.trim() ? chalk.green('✓ Running') : chalk.yellow('⚠ Stopped');
      console.log(chalk.white('Server:'), serverStatus);
      
      // Check disk usage
      try {
        const { stdout: diskUsage } = await execAsync('df -h / | tail -1 | awk \'{print $5}\'');
        console.log(chalk.white('Disk Usage:'), chalk.green(diskUsage.trim()));
      } catch (error) {
        console.log(chalk.white('Disk Usage:'), chalk.yellow('Unable to determine'));
      }
      
      // Check network interfaces
      const interfaces = os.networkInterfaces();
      const activeInterfaces = Object.keys(interfaces).filter(name => 
        interfaces[name].some(iface => !iface.internal && iface.family === 'IPv4')
      );
      console.log(chalk.white('Network Interfaces:'), chalk.green(activeInterfaces.join(', ') || 'None'));
      
      spinner.succeed('Status check complete');
      console.log('');
    } catch (error) {
      spinner.fail('Failed to check system status');
      console.error(chalk.red(error.message));
    }
  });

systemCommands
  .command('network')
  .description('Display network information')
  .action(() => {
    console.log(chalk.cyan.bold('\n🌐 Network Information\n'));
    
    const interfaces = os.networkInterfaces();
    
    for (const [name, ifaces] of Object.entries(interfaces)) {
      console.log(chalk.yellow.bold(`\n${name}:`));
      ifaces.forEach(iface => {
        console.log(chalk.white(`  ${iface.family}:`), chalk.green(iface.address));
        console.log(chalk.white(`  MAC:`), chalk.green(iface.mac));
      });
    }
    
    console.log('');
  });

export { systemCommands };

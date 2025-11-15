import { CoreService } from '@template/core';
import { Command } from 'commander';

const program = new Command();

const config = {
  name: 'Template CLI',
  version: '0.1.0',
  environment: 'development' as const,
};

const coreService = new CoreService(config);

program.name('template-cli').description('Template CLI application').version('0.1.0');

program
  .command('greet')
  .description('Greet a user')
  .argument('<name>', 'Name to greet')
  .action((name: string) => {
    console.log(coreService.greet(name));
  });

program
  .command('info')
  .description('Show application info')
  .action(() => {
    const cfg = coreService.getConfig();
    console.log('Application Info:');
    console.log(`  Name: ${cfg.name}`);
    console.log(`  Version: ${cfg.version}`);
    console.log(`  Environment: ${cfg.environment}`);
  });

program.parse();

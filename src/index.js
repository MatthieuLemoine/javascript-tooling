import chalk from 'chalk';

out(chalk.blue('*** Javascript Tooling ***'));
out(chalk.green('Hello', 'World', '!'));
out(chalk.red('*** Javascript Tooling ***'));

export function out(...strings) {
  return process.stdout.write(
    `${strings.reduce((text, string) => `${text} ${string}`, '').trim()}\n`
  );
}

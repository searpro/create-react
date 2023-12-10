#!/usr/bin/env node

/**
 * @author Lijin Kurian K
 * Scaffolds a react-redux-typescript-vite starter kit project
 */
import path from 'path';
import fs from 'fs';
import { exec } from 'node:child_process';
import { readPackage } from 'read-pkg';
import ora from 'ora';
import chalk from 'chalk';

const pkg = await readPackage();



let projectName = process.argv[2];
const gitRepo = 'https://github.com/searpro/react-redux-ts.git';

console.log('\n');
console.log(chalk.blue.bgWhiteBright.blue(` @searpro/create-react@${pkg.version} `));
console.log('\n');

const spinner = ora({ color: 'white' }).start();

if (process.argv.length < 3) {
  console.log(chalk.red('Please provide a name for the project'));
  process.exit(1);
}

const currentPath = process.cwd();
const projectPath = path.join(currentPath, projectName);

try {
  spinner.start(chalk.green(`Creating project directory... `));
  fs.mkdirSync(projectPath);
  spinner.succeed();
} catch (err) {
  if (err.code === 'EEXIST') {
    spinner.color = 'red';
    spinner.fail(`The directory ${chalk.bold.yellow(projectName)} already exist in the current directory. Please choose a different name`);
  } else {
    console.log(err);
  }
  process.exit(0);
}

async function start(message) {
  setTimeout(() => spinner.start(message))
  return;
}

async function succeed() {
  setTimeout(() => spinner.succeed())
  return;
}

async function main() {
  try {
    spinner.start(chalk.green('Downloading files..'));
    await runCommand(`git clone --depth 1 ${gitRepo} ${projectPath}`)
    spinner.succeed();
    process.chdir(projectPath);
    spinner.start(chalk.green('Installing dependencies..'));
    await runCommand('npm install');
    spinner.succeed()
    spinner.start(chalk.green('Removing unused files..'));
    await runCommand('npx rimraf ./.git');
    //await runCommand('git init && git branch -M main');
    spinner.succeed()
    console.log('\n')
    spinner.info(chalk.yellow.bold('Installation complete'));
    console.log(chalk.green('Run the below command to start the application in development mode.'))
    console.log(chalk.yellow.bold(`cd ${projectName} && npm run dev`));
    process.exit(0);
  } catch (err) {
    console.log(chalk.red(err));
    process.exit(1);
  }
}

main();

function runCommand(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd)
      .on('close', code => {
        if (code === 0) resolve();
        reject();
      })
  })
}
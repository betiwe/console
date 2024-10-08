#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const argv = yargs(hideBin(process.argv))
  .command({
    command: 'current',
    describe: 'Получает год, месяц или дату',
    builder: (yargs) => {
      yargs
        .option('year', {
          alias: 'y',
          describe: 'Текущий год',
          type: 'number',
        })
        .option('month', {
          alias: 'm',
          describe: 'Текущий месяц',
          type: 'number',
        })
        .option('date', {
          alias: 'd',
          describe: 'Текущая дата',
          type: 'number',
        });
    },
    handler: (argv) => {
      if (argv.year) {
        console.log(new Date().getFullYear());
      } else if (argv.month) {
        console.log(new Date().getMonth() + 1);
      } else if (argv.date) {
        console.log(new Date().getDate());
      }
    },
  })
  .command({
    command: 'add',
    describe: 'Получает год, месяц или дату в будущем',
    builder: (yargs) => {
      yargs
        .option('year', {
          alias: 'y',
          describe: 'Прибавляет год',
          type: 'number',
        })
        .option('month', {
          alias: 'm',
          describe: 'Прибавляет месяц',
          type: 'number',
        })
        .option('date', {
          alias: 'd',
          describe: 'Прибавляет дату',
          type: 'number',
        });
    },
    handler: (argv) => {
      if (argv.year) {
        console.log(new Date().getFullYear() + argv.year);
      } else if (argv.month) {
        console.log(new Date().getMonth() + 1 + argv.month);
      } else if (argv.date) {
        console.log(new Date().getDate() + argv.date);
      }
    },
  })
  .command({
    command: 'sub',
    describe: 'Получает год, месяц или дату в прошлом',
    builder: (yargs) => {
      yargs
        .option('year', {
          alias: 'y',
          describe: 'Отнимает год',
          type: 'number',
        })
        .option('month', {
          alias: 'm',
          describe: 'Отнимает месяц',
          type: 'number',
        })
        .option('date', {
          alias: 'd',
          describe: 'Отнимает дату',
          type: 'number',
        });
    },
    handler: (argv) => {
      if (argv.year) {
        console.log(new Date().getFullYear() - argv.year);
      } else if (argv.month) {
        console.log(new Date().getMonth() + 1 - argv.month);
      } else if (argv.date) {
        console.log(new Date().getDate() - argv.date);
      }
    },
  }).argv;



// Не выводятся текущие года, месяца и даты, хотя будущие и прошлые выводятся спокойно. Необходимо ли учитывать то что почти в каждом месяце 30/31 день и то что в году 12 месяцев?
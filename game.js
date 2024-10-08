#!/usr/bin/env node

const redline = require('node:readline');
const rl = redline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const randomNumberInMinMax = randomInteger(1, 100);

console.log('Загадайте число от 1 до 100!');

const userGuesses = () => {
  rl.question('Введите число:', (e) => {
    const number = +e;
    if (number === randomNumberInMinMax) {
      console.log('Вы угадали загаданное число!');
      rl.close();
      return;
    }
    if (number > randomNumberInMinMax) {
      console.log('Загаданное число меньше!');
    } else if (number < randomNumberInMinMax) {
      console.log('Загаданное число больше!');
    }
    userGuesses();
  });
};

userGuesses();

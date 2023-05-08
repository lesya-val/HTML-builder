import * as fs from 'node:fs';
import path from 'node:path';
import * as readline from 'node:readline';

const pathFile = path.resolve("02-write-file", "text.txt");
const nodeWriteable = fs.createWriteStream (pathFile, {encoding: "utf-8"});

console.log('Введите текст. Для завершения введите "exit" или нажмите Ctrl+C');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function textInput(input) {
  if (input.trim().toLowerCase() === 'exit') {
    console.log('Программа завершена');
    nodeWriteable.end();
    process.exit();
  }
  nodeWriteable.write(input + '\n');
  rl.question('', textInput);
}
rl.question('', textInput);
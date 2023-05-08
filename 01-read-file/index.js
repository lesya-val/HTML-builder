import * as fs from 'node:fs';
import { Readable } from 'node:stream';
import path from 'node:path';

const pathFile = path.resolve("01-read-file", "text.txt");
const nodeReadable = fs.createReadStream (pathFile, {encoding: "utf-8"});
const webReadableStream = Readable.toWeb(nodeReadable);

for await (const line of webReadableStream) {
  console.log(line);
}
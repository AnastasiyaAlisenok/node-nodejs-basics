import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const dir = dirname(fileURLToPath(import.meta.url));
const message = 'FS operation failed';
const file = path.join(dir, 'files', 'fileToRead.txt');

const read = async () => {
    fs.readFile(file, 'utf-8', (err, text) => {
        if (err) {
            throw new Error(message);
        } else {
            console.log(text);
        }
    })
};

await read();
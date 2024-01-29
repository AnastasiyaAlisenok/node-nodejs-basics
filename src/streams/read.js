import fs from 'fs';
import url from 'url';
import path, { dirname } from 'path';

const dir = dirname(url.fileURLToPath(import.meta.url));

const filePath = path.join(dir, 'files', 'fileToRead.txt');

const read = async () => {
    const streamRead = fs.createReadStream(filePath);
    streamRead.on('data', (chunk) => {
        process.stdout.write(chunk);
      });
    
    streamRead.on('error', (err) => {
      console.error('Error reading file:', err);
    });
};

await read();
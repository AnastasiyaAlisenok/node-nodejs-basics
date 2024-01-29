import fs from 'fs';
import url from 'url';
import path, { dirname } from 'path';

const dir = dirname(url.fileURLToPath(import.meta.url));
const filePath = path.join(dir, 'files', 'fileToWrite.txt');

const write = async () => {
  const writeStream = fs.createWriteStream(filePath);
  process.stdin.on('data', (data) => {
    if (data.toString().trim().toLowerCase() === 'close') {
        writeStream.end()
        process.stdin.end();
    } else {
        writeStream.write(data);
    }
  });
  process.on('SIGINT', () => {
    writeStream.close();
    process.stdin.end();
  });
  writeStream.on('finish', () => {
    process.exit();
  });
  writeStream.on('close', () => {
    process.exit();
});
  writeStream.on('error', (err) => {
    console.log('Error writing to file:', err);
    process.exit(1);
  });
};

await write();
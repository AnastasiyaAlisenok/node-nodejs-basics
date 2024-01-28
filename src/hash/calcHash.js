import fs from 'fs';
import crypto from 'crypto';
import url from 'url';
import path, { dirname } from 'path';

const dir = dirname(url.fileURLToPath(import.meta.url));

const fileToHash = path.join(dir, 'files', 'fileToCalculateHashFor.txt');
const hash = crypto.createHash('sha256');

const calculateHash = async () => {
  const input = fs.createReadStream(fileToHash);
  input.on('readable', () => {
  const data = input.read();
  if (data) {
    hash.update(data);
  } else {
    const fileHash = hash.digest('hex');
    console.log(fileHash);
  }
  });
};

await calculateHash();
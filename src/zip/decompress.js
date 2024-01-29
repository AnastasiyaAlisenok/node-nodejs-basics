import fs from 'fs';
import zlib from 'zlib';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const dir = dirname(fileURLToPath(import.meta.url));
const filePath = path.join(dir, 'fileToCompress.txt');
const zipFile = path.join(dir, 'archive.gz');

const decompress = async () => {
    const readStream = fs.createReadStream(zipFile);
    const writeStream = fs.createWriteStream(filePath);

    const decompress = zlib.createGunzip();
    readStream.pipe(decompress).pipe(writeStream);
};

await decompress();
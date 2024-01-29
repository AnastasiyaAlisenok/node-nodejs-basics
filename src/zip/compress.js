import fs from 'fs';
import zlib from 'zlib';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const dir = dirname(fileURLToPath(import.meta.url));
const filePath = path.join(dir, 'files', 'fileToCompress.txt');
const zipFile = path.join(dir, 'archive.gz');

const compress = async () => {
    const readStream = fs.createReadStream(filePath);
    const writeStream = fs.createWriteStream(zipFile);

    const compress = zlib.createGzip();
    readStream.pipe(compress).pipe(writeStream);
};

await compress();
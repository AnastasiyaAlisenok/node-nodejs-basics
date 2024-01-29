import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const dir = dirname(fileURLToPath(import.meta.url));
const message = 'FS operation failed';
const _dirname = path.join(dir, 'files');

const list = async () => {
    fs.readdir(_dirname, (err, files) => {
        if (err) {
            throw new Error(message);
        } else {
          console.log(files);
        }
    })
};

await list();
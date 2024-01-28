import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const dir = dirname(fileURLToPath(import.meta.url));
const message = 'FS operation failed';
const file = path.join(dir, 'files', 'fileToRemove.txt');

const remove = async () => {
    fs.access(file, (err) => {
        if (err) {
            throw new Error(message)
        } else {
            fs.unlink(file, () => {})
        };
    })
};

await remove();
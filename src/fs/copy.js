import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const dir = dirname(fileURLToPath(import.meta.url));
const filesDir = path.join(dir, 'files');
const copyDir = path.join(dir, 'files_copy');

const copy = async () => {
    fs.cp(filesDir, copyDir, {errorOnExist: true, force: false, recursive: true}, (err) => {
        if (err) throw new Error('FS operation failed');
    })
};

await copy();

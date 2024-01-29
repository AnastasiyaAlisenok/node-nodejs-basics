import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const dir = dirname(fileURLToPath(import.meta.url));
const message = 'FS operation failed';
const file = path.join(dir, 'files', 'wrongFilename.txt');
const renamedFile = path.join(dir, 'files', 'properFilename.md');

const rename = async () => {
    fs.access(renamedFile, (err) => {
        if (err) {
            fs.rename(file, renamedFile, (err) => {
                if (err) throw new Error(message);
            })
        } else {
            throw new Error(message);
        }
    })
};

await rename();
import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const dir = dirname(fileURLToPath(import.meta.url));

const file = path.join(dir, 'files', 'fresh.txt');

const create = async () => {
    fs.access(file, (err) => {
        if (err) {
            fs.writeFile(file, 'I am fresh and young', () => {
            })
        } else {
            throw new Error('FS operation failed');
        }
    })
};

await create();
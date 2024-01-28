import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import url from 'url';
import module from 'module';
import './files/c.js';


const urlFile = import.meta.url;
const require = module.createRequire(urlFile);

const filename = url.fileURLToPath(urlFile);
const dirname = path.dirname(filename);

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = require('./files/a.json');
} else {
    unknownObject = require('./files/b.json');
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${filename}`);
console.log(`Path to current directory is ${dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export {unknownObject, myServer };



const parseArgs = () => {
    for (let i = 0; i<process.argv.length; i += 2) {
        const name = process.argv[i].replace(/--/, '');
        const value = process.argv[i + 1];
        console.log(`${name} is ${value}`);
    }
};

parseArgs();
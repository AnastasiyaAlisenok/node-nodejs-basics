const parseEnv = () => {
    for (let variable in process.env) {
      if (variable.startsWith('RSS_')) {
        const value = process.env[variable];
        console.log(`${variable}=${value}`)
      }
    }
};

parseEnv();
import path from 'path';


let config = {
    viewDir: path.join(__dirname, '../', 'views'),
    staticDir: path.join(__dirname, '../', 'assets'),
    varControls: ['[[', ']]'], 
}


if (process.env.NODE_ENV === 'development') {
    config = {
        ...config,
        port: 3000,
        cache: false,
    }
}


if (process.env.NODE_ENV === 'production') {
    config = {
        ...config,
        port: 80,
        cache: 'memory',
    }
}


export default config;


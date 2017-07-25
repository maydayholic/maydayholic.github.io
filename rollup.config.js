import resolve from 'rollup-plugin-node-resolve';

export default {
    entry: 'v1/app.js',
    dest: 'v1/bundle.js',
    format: 'umd',
    plugins: [
        resolve({
            jsnext: true,
            main: true,
            module: true
        })
    ],
    moduleName: 'app'
};
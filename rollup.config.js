// import babel from 'rollup-plugin-babel';
// import resolve from 'rollup-plugin-node-resolve';
// import json from 'rollup-plugin-json';
// import { uglify } from 'rollup-plugin-uglify';
import x from './plugins/x.js'
// import y from './plugins/y.js';

export default {
    input: './src/index.js',
    output: {
        name:'example',
        strict: true,
        banner: `var global = this;`,
        file: './dist/index.min.js',
        format: 'iife'
    },
    plugins:[
        // resolve(),
        // babel({
        //     exclude: 'node_modules/**'
        // }),
        x(),
        // y()
        //,json(),uglify(),
    ],
    watch:{
        include: './src/**'
    },

    treeshake: true, // 必须是ES6 module syntax
    
    context: undefined, // 有时候需要改为'window'
}
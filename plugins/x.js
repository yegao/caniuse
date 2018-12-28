import { loadavg } from "os";

// import fs from 'fs';
// import path from 'path'

export default () => {
    return {
        // 插件名称
        name: 'rollup-plugin-x',
        resolveId(importee,importer){
            console.log("resolvedId:",importee)
            if(importee==="./a.js"){
                console.log("ssssss")
                return importee;
            }
            return null;
        },
        load(id){
            console.log("load:",id)
            if(id==='./a.js'){
                return `export default "hello world"`;
            }
            return null
        }
    }
}
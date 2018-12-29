// import fs from 'fs';
// import path from 'path'
import getMap from "./map.js"
export default () => {
    return {
        // 插件名称
        name: 'rollup-plugin-x',
        resolveId(importee,importer){
            console.log("resolvedId:",importee)
            if(importee==="api-document"){
                return importee;
            }
            return null;
        },
        load(id){
            console.log("load:",id)
            if(id==='api-document'){
                return getMap().then(function(res){
                    return "export default "+JSON.stringify(res)
                })
            }
            return null
        }
    }
}
const m2j = require('md2json')
let cache = [];
let map = {};

const getApiDetail = async () => {
    await m2j.scan(__dirname+'/InternetTechDevelop/docs/api',/\.((md)|(markdown))$/i,[],(res)=>{
        cache.push(res);
    });
    
    for(let one of cache){
        let str = one.content;
        str.replace(/\#\#\#(\s*)([\w._$]*)\([^\)]*\)(\s*\`?)(\d*)(\+?\`?)/g,function(a,b,c,d,e){
           map[c] = {
               version: +e || 1020
           }
        })
    }
    return map;
}

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
                return getApiDetail().then(function(res){
                    return "export default "+JSON.stringify(res)
                })
            }
            return null
        }
    }
}
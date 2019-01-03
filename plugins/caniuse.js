const m2j = require('md2json')
let cache = [];
let map = {};

// const getApiDetail = async () => {
//     await m2j.scan(__dirname+'/InternetTechDevelop/docs/api',/\.((md)|(markdown))$/i,[],(res)=>{
//         cache.push(res);
//     });
    
//     for(let one of cache){
//         let str = one.content;
//         str.replace(/\#\#\#(\s*)([\w._$]*)\([^\)]*\)(\s*\`?)(\d*)(\+?\`?)/g,function(a,b,c,d,e){
//            map[c] = {
//                version: +e || 1020
//            }
//         })
//     }
//     return map;
// }


const m2j = require('md2json')
let cache = [];
let map = {};

function getApiDetail () {
    // m2j这个方法本身好像是阻塞的
    m2j.scan(__dirname+'/../../../InternetTechDevelop/docs/api',/\.((md)|(markdown))$/i,[],(res)=>{
        cache.push(res);
    });

    for(let one of cache){
        one.children = [];
        one.content.replace(/^[^#]?#[^#]?\s?([^\n\r]*)/g,(a,b) => {
             // title
            one.title = b;
            return ""
        }).replace(/[^#]?###\s?([\w._$]*)\(([^\)]*)\)/g,function(a,b,c){
            // children
            one.children.push({
                method:b,
                argument:c
            })
        })
    }
    // console.log(cache[1].children)
    // for(let one of cache){
    //     let str = one.content;
    //     str.replace(/\#\#\#(\s*)([\w._$]*)\(([^\)]*)\)(\s*\`?)(\d*)(\+?\`?)/g,function(a,b,c,d,e,f){
    //         map[c] = {
    //             params:d,
    //             version: +f || 1020
    //         }
    //     })
    // }
    return "export default "+JSON.stringify(cache);
}

export default () => {
    return {
        // 插件名称
        name: 'rollup-plugin-x',
        resolveId(importee){
            if(importee==="api-document"){
                return importee;
            }
            return null;
        },
        load(id){
            if(id==='api-document'){
                let x = getApiDetail();
                return x;
            }
            return null
        }
    }
}




// export default () => {
//     return {
//         // 插件名称
//         name: 'rollup-plugin-x',
//         resolveId(importee,importer){
//             console.log("resolvedId:",importee)
//             if(importee==="api-document"){
//                 return importee;
//             }
//             return null;
//         },
//         load(id){
//             console.log("load:",id)
//             if(id==='api-document'){
//                 return getApiDetail().then(function(res){
//                     return "export default "+JSON.stringify(res)
//                 })
//             }
//             return null
//         }
//     }
// }
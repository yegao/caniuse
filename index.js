const m2j = require('md2json')
let cache = [];
let map = {};

m2j.scan(__dirname+'/src/api',/\.((md)|(markdown))$/i,[],(res)=>{
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

module.exports = map;

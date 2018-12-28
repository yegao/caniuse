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

export default function caniuse () {
    return {
    //   name: 'caniuse', 
    //   resolveId ( importee ) {
    //     console.log('----------------')
    //     console.log(importee);
    //   },
    //   load ( id ) {
    //     console.log('>>>>>>>>>>>>>>>>')
    //     console.log(id);
    name: "filesize",
    ongenerate(bundle,{code}) {
        // console.log(code);
        console.log(map);
    }
        // return `module.exports = "xxx"`
    //   }
    };
  }
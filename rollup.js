import map from './index.js'

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
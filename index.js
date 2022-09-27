// import { readFile} from 'fs'

// readFile('./corpus/data.json', (err, data) => {
//     if (! err) {
//         console.log(data.toString('utf-8'));
//     } else {
//         console.error(err);
//     }
// })


// import { readFileSync } from 'fs'
// const data = readFileSync('./corpus/data.json', { encoding: 'utf-8'})
// console.log(data);

import { readFileSync } from 'fs'
import { fileURLToPath  } from 'url'
import { dirname, resolve } from 'path'

const url = import.meta.url // 获取当前脚本的url
const path = resolve(dirname(fileURLToPath(url)), 'corpus/data.json')
const data = readFileSync(path, { encoding: 'utf-8'})
console.log(typeof data)
console.log(url);
console.log(fileURLToPath(url));
console.log(dirname(fileURLToPath(url)));

// file:///E:/it/bullshit_generator/index.js
// E:\it\bullshit_generator\index.js
// E:\it\bullshit_generator


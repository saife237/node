const path = require ('path')

console.log(path.sep);
console.log(path.delimiter);
console.log(path.normalize('/test/test1//2slash/1slash/tab/'));
console.log(path.join('/test','/test1'),'/slash1');
console.log(path.resolve('index1.js'));
console.log(path.extname('log.js'));
// console.log(path.sep);
// console.log(path.delimiter);

let pathToFile = path.format({
dir:"public_html/home/js",
base:"app.js"
});

console.log(pathToFile,__dirname);
console.log(path.parse("C:Desktop/React/node"));
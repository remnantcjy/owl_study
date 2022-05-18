var fs = require('fs');

/*
//sync있으면 동기, 없으면 비동기, 없는 걸 선호함, nodejs만든 사람들이 비동기 선호
//readFileSync
console.log('A');
var result = fs.readFileSync('syntax/sample.txt', 'utf-8');
console.log(result);
console.log('C');
*/

console.log('A');
fs.readFile('syntax/sample.txt', 'utf-8', function(err, result){
  console.log(result);
});
console.log('C');

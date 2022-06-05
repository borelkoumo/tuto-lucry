const sum = require('./test.js').sum;

console.log('sum = ', sum);

function myPrint(text) {
  console.log(text);
}

sum(1, 2);

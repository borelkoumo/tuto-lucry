let a = [];
let o = {};

a[0] = 1;
o['0'] = 1; // o.1 = 5

a[1] = 5;
o['1'] = 5; // o.1 = 5

a[2] = 55;
o['2'] = 5; // o.1 = 5

a['borel'] = 10;
o['borel'] = 10; // o.borel = 5

console.log(a);
console.log(o);

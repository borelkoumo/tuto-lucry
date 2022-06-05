function f(a, b) {
  console.log(arguments);
  console.log(typeof arguments);
  console.log(f.length);
  console.log(Array.from(arguments).slice(0, f.length));
}

f(2, 3, 6);


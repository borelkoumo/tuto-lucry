// A common operation in JavaScript programs is needing to copy the properties of one
// object to another object. It is easy to do that with code like this:
let target = { x: 1 },
  source = { y: 2, z: 3 };
for (let key of Object.keys(source)) {
  target[key] = source[key];
}
target; // => {x: 1, y: 2, z: 3}
// But because this is a common operation, various JavaScript frameworks have defined
// utility functions, often named extend(), to perform this copying operation. Finally,
// in ES6, this ability comes to the core JavaScript language in the form of
Object.assign();

// Object.assign() expects two or more objects as its arguments. It modifies and
// returns the first argument, which is the target object, but does not alter the second or
// any subsequent arguments, which are the source objects. For each source object, it
// copies the enumerable own properties of that object (including those whose names
// are Symbols) into the target object.

// One reason to assign properties from one object into another is when you have an
// object that defines default values for many properties and you want to copy those
// default properties into another object if a property by that name does not already
// exist in that object. Using Object.assign() naively will not do what you want:
Object.assign(o, defaults); // overwrites everything in o with defaults
// Instead, what you can do is to create a new object, copy the defaults into it, and then
// override those defaults with the properties in o:
o = Object.assign({}, defaults, o);
// We’ll see in §6.10.4 that you can also express this object copy-and-override operation
// using the ... spread operator like this:
o = { ...defaults, ...o };

// We could also avoid the overhead of the extra object creation and copying by writing
// a version of Object.assign() that copies properties only if they are missing:
// Like Object.assign() but doesn't override existing properties
// (and also doesn't handle Symbol properties)
function merge(target, ...sources) {
  for (let source of sources) {
    for (let key of Object.keys(source)) {
      if (!(key in target)) {
        // This is different than Object.assign()
        target[key] = source[key];
      }
    }
  }
  return target;
}
Object.assign({ x: 1 }, { x: 2, y: 2 }, { y: 3, z: 4 }); // => {x: 2, y: 3, z: 4}
merge({ x: 1 }, { x: 2, y: 2 }, { y: 3, z: 4 }); // => {x: 1, y: 2, z: 4}
// It is straightforward to write other property manipulation utilities like this merge()
// function. A restrict() function could delete properties of an object if they do not
// appear in another template object, for example. Or a subtract() function could
// remove all of the properties of one object from another object.

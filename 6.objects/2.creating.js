// Objects can be created with object literals, with the new keyword, and with the
// Object.create() function. The subsections below describe each technique

// Object Literals

// In its simplest form, an object literal is a comma - separated list of colonseparated name:value pairs, enclosed within curly braces.
let empty = {}; // An object with no properties
let point = { x: 0, y: 0 }; // Two numeric properties
let p2 = { x: point.x, y: point.y + 1 }; // More complex values
let book = {
  'main title': 'JavaScript', // These property names include spaces,
  'sub-title': 'The Definitive Guide', // and hyphens, so use string literals.
  for: 'all audiences', // for is reserved, but no quotes.
  author: {
    // The value of this property is
    firstname: 'David', // itself an object.
    surname: 'Flanagan',
  },
};

// object literal 
var person = {
  firstName:'Steve',
  lastName:'Jobs'
};


// Creating Objects with new

// The new operator creates and initializes a new object. The new keyword must be fol‐
// lowed by a function invocation. A function used in this way is called a constructor and
// serves to initialize a newly created object. JavaScript includes constructors for its
// built-in types.

let obj = new Object(); // Create an empty object: same as {}.
let a = new Array(); // Create an empty array: same as [].
let d = new Date(); // Create a Date object representing the current time
let m = new Map(); // Create a Map object for key/value mapping

function Person(name, age) {
  this.name = name
  this.age = age
}

const p = new Person("borel", 1)

const person2 = Person()

//  A constructor is a function designed for the initialization of newly created objects. Constructors
// are invoked using the new keyword as described in §8.2.3. Constructor invocations
// using new automatically create the new object, so the constructor itself only needs to
// initialize the state of that new object.

// This is a constructor function that initializes new Range objects.
// Note that it does not create or return the object. It just initializes this.
function Range(from, to) {
  // Store the start and end points (state) of this new range object.
  // These are noninherited properties that are unique to this object.
  this.from = from;
  this.to = to;
}
// All Range objects inherit from this object.
// Note that the property name must be "prototype" for this to work.
Range.prototype = {
  // Return true if x is in the range, false otherwise
  // This method works for textual and Date ranges as well as numeric.
  includes: function (x) {
    return this.from <= x && x <= this.to;
  },
  // A generator function that makes instances of the class iterable.
  // Note that it only works for numeric ranges.
  [Symbol.iterator]: function* () {
    for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
  }, // Return a string representation of the range

  toString: function () {
    return '(' + this.from + '...' + this.to + ')';
  },
};
// Here are example uses of this new Range class
let r = new Range(1, 3); // Create a Range object; note the use of new
r.includes(2); // => true: 2 is in the range
r.toString(); // => "(1...3)"
[...r]; // => [1, 2, 3]; convert to an array via iterator


// Constructor function
function Student(){
  this.name = "John";
  this.gender = "Male";
  this.sayHi = function(){
    alert('Hi');
  }
}
var student1 = new Student();
console.log(student1.name);
console.log(student1.gender);
student1.sayHi();

/**
 *
 *  Object prototypes IS LIKE A MOLD (le MOULE) 
 * 
 **/

// Almost every JavaScript object has a second JavaScript object
// associated with it. This second object is known as a prototype, and the first object
// inherits properties from the prototype

// All objects created by object literals have the same prototype object, and we can refer
// to this prototype object in JavaScript code as Object.prototype.

// Objects created using the new keyword and a constructor invocation use the value of the prototype
// property of the constructor function as their prototype.

// So the object created by new Object() inherits from Object.prototype, just as the object created by {} does. Sim‐
// ilarly, the object created by new Array() uses Array.prototype as its prototype, and
// the object created by new Date() uses Date.prototype as its prototype. This can be
// confusing when first learning JavaScript. Remember: almost all objects have a proto‐
// type, but only a relatively small number of objects have a prototype property. It is
// these objects with prototype properties that define the prototypes for all the other
// objects.

// Object.prototype is one of the rare objects that has no prototype: it does not inherit
// any properties. Other prototype objects are normal objects that do have a prototype.
// Most built-in constructors (and most user-defined constructors) have a prototype
// that inherits from Object.prototype. For example, Date.prototype inherits proper‐
// ties from Object.prototype, so a Date object created by new Date() inherits proper‐
// ties from both Date.prototype and Object.prototype. This linked series of
// prototype objects is known as a prototype chain.


// Object.prototype
const point = {
  x: "a",
  y: "b",
}

// Person.prototype
function Person(name, age, sex) {
  this.sex = sex
  this.name = name
  this.age = age
}
Person.prototype = {
  sex:undefined,
  printName() {
    return `Je m'appelle ${this.name}`
  }
}
const p = new Person("borel", 1);
console.log(p)
console.log(Person.prototype)
const borello = new Person("Borello", 1);
console.log(borello.printName())

// Array.prototype
const a = new Array()
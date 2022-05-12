/**
 *
 * Prototype in JavaScript*/

// JavaScript is a dynamic language. You can attach new properties to an object at any time as shown below.

// Example: Attach property to object
function Student() {
  this.name = 'John';
  this.gender = 'Male';
}

var studObj1 = new Student();
studObj1.age = 15;
alert(studObj1.age); // 15

var studObj2 = new Student();
alert(studObj2.age); // undefined
// As you can see in the above example, age property is attached to studObj1 instance. However, studObj2 instance will not have age property because it is defined only on studObj1 instance.

// So what to do if we want to add new properties at later stage to a function which will be shared across all the instances?

// The answer is Prototype.

// The ***************prototype is an object that is associated with every functions and objects by default in JavaScript, where function's prototype property is accessible and modifiable and object's prototype property (aka attribute) is not visible.

// Every function includes prototype object by default.

// Prototype in JavaScript
// The prototype object is special type of enumerable object to which additional properties can be attached to it which will be shared across all the instances of it's constructor function.

// So, use prototype property of a function in the above example in order to have age properties across all the objects as shown below.

// Example: prototype
function Student() {
  this.name = 'John';
  this.gender = 'M';
}

Student.prototype.age = 15;

var studObj1 = new Student();
alert(studObj1.age); // 15

var studObj2 = new Student();
alert(studObj2.age); // 15

// Every object which is created using literal syntax or constructor syntax with the new keyword, includes __proto__ property that points to prototype object of a function that created this object.

console.log(Student.prototype)
studObj1.__proto__.age
studObj1.age
// Prototype in JavaScript
// You can debug and see object's or function's prototype property in chrome or firefox's developer tool. Consider the following example.

// Example: prototype
function Student() {
  this.name = 'John';
  this.gender = 'M';
}

var studObj = new Student();

console.log(Student.prototype); // object
console.log(studObj.prototype); // undefined
console.log(studObj.__proto__); // object

console.log(typeof Student.prototype); // object
console.log(typeof studObj.__proto__); // object

console.log(Student.prototype === studObj.__proto__); // true

// As you can see in the above example, Function's prototype property can be accessed using <function-name>.prototype. However, an object (instance) does not expose prototype property, instead you can access it using __proto__.

//  Note:
// The prototype property is special type of enumerable object which cannot be iterate using for..in or foreach loop.

// Object's Prototype
// As mentioned before, object's prototype property is invisible. Use Object.getPrototypeOf(obj) method instead of __proto__ to access prototype object.

// Example: Object's prototype
function Student() {
  this.name = 'John';
  this.gender = 'M';
}

var studObj = new Student();

Student.prototype.sayHi = function () {
  alert('Hi');
};

var studObj1 = new Student();
var proto = Object.getPrototypeOf(studObj1); // returns Student's prototype object

alert(proto.constructor); // returns Student function

// The prototype object includes following properties and methods.

// Property	Description
// constructor	Returns a function that created instance.
// __proto__	This is invisible property of an object. It returns prototype object of a function to which it links to.
// Method	Description
// hasOwnProperty()	Returns a boolean indicating whether an object contains the specified property as a direct property of that object and not inherited through the prototype chain.
// isPrototypeOf()	Returns a boolean indication whether the specified object is in the prototype chain of the object this method is called upon.
// propertyIsEnumerable()	Returns a boolean that indicates whether the specified property is enumerable or not.
// toLocaleString()	Returns string in local format.
// toString()	Returns string.
// valueOf	Returns the primitive value of the specified object.
// Chrome and Firefox denotes object's prototype as __proto__ which is public link whereas internally it reference as [[Prototype]]. Internet Explorer does not include __proto__. Only IE 11 includes it.

// The getPrototypeOf() method is standardize since ECMAScript 5 and is available since IE 9.

// Changing Prototype
// As mentioned above, each object's prototype is linked to function's prototype object. If you change function's prototype then only new objects will be linked to changed prototype. All other existing objects will still link to old prototype of function. The following example demonstrates this scenario.

// Example: Changing Prototype
function Student() {
  this.name = 'John';
  this.gender = 'M';
}

Student.prototype.age = 15;

var studObj1 = new Student();
alert('studObj1.age = ' + studObj1.age); // 15

var studObj2 = new Student();
alert('studObj2.age = ' + studObj2.age); // 15

Student.prototype = { age: 20 };

var studObj3 = new Student();
alert('studObj3.age = ' + studObj3.age); // 20

alert('studObj1.age = ' + studObj1.age); // 15
alert('studObj2.age = ' + studObj2.age); // 15

// Use of Prototype
// The prototype object is being used by JavaScript engine in two things,
//     1) to find properties and methods of an object
//     2) to implement inheritance in JavaScript.

function Student() {
  this.name = 'John';
  this.gender = 'M';
}

Student.prototype.sayHi = function () {
  alert('Hi');
};

var studObj = new Student();
studObj.toString();

// In the above example, toString() method is not defined in Student, so how and from where it finds toString()?

// Here, prototype comes into picture. First of all, JavaScript engine checks whether toString() method is attached to studObj? (It is possible to attach a new function to a instance in JavaScript). If it does not find there then it uses studObj's __proto__ link which points to the prototype object of Student function. If it still cannot find it there then it goes up in the heirarchy and check prototype object of Object function because all the objects are derived from Object in JavaScript, and look for toString() method. Thus, it finds toString() method in the prototype object of Object function and so we can call studObj.toString().

// This way, prototype is useful in keeping only one copy of functions for all the objects (instances).

// The following figure illustrates the above scenario.
/**
 *
 *
 * CLASSES + PROTOTYPES in JSDG
 *
 *
 */
/**
 * 
 * A constructor function, its prototype, and instances
 * 
    CONSTRUCTOR -------------     PROTOTYPE         ---------------------    INSTANCES

function Range() {            |   constructor  |   <--- inherits            new Range(1, 2)
  protoype         -------->  |   includes: f  |
}                             |   toString: f  |   <--- inherits            new Range(3, 4)

*/

// All functions, except arrow functions, have a prototype property that refers to an
// object known as the prototype object. Every function has a different prototype object.
// When a function is used as a constructor, the newly created object inherits properties
// from the prototype object.

// In JavaScript, a class is a set of objects that inherit properties from the same prototype
// object. The prototype object, therefore, is the central feature of a class. Chapter 6 cov‐
// ered the Object.create() function that returns a newly created object that inherits
// from a specified prototype object. If we define a prototype object and then use
// Object.create() to create objects that inherit from it, we have defined a JavaScript
// class. Usually, the instances of a class require further initialization, and it is common
// to define a function that creates and initializes the new object. Example 9-1 demon‐
// strates this: it defines a prototype object for a class that represents a range of values
// and also defines a factory function that creates and initializes a new instance of the
// class.
// Example 9-1. A simple JavaScript class
// This is a factory function that returns a new range object.
function range(from, to) {
  // Use Object.create() to create an object that inherits from the
  // prototype object defined below. The prototype object is stored as
  // a property of this function, and defines the shared methods (behavior)
  // for all range objects.
  let r = Object.create(range.methods);
  // Store the start and end points (state) of this new range object.
  // These are noninherited properties that are unique to this object.
  r.from = from;
  r.to = to;
  // Finally return the new object
  return r;
}
// This prototype object defines methods inherited by all range objects.
range.methods = {
  // Return true if x is in the range, false otherwise
  // This method works for textual and Date ranges as well as numeric.
  includes(x) {
    return this.from <= x && x <= this.to;
  },
  // A generator function that makes instances of the class iterable.
  // Note that it only works for numeric ranges.
  *[Symbol.iterator]() {
    for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
  },
  // Return a string representation of the range
  toString() {
    return '(' + this.from + '...' + this.to + ')';
  },
};
// Here are example uses of a range object.
let r = range(1, 3); // Create a range object
r.includes(2); // => true: 2 is in the range
r.toString(); // => "(1...3)"
const r2 = [...r]; // => [1, 2, 3]; convert to an array via iterator

// There are a few things worth noting in the code of Example 9-1:
// • This code defines a factory function range() for creating new Range objects.
// • It uses the methods property of this range() function as a convenient place to
// store the prototype object that defines the class. There is nothing special or
// idiomatic about putting the prototype object here.
// • The range() function defines from and to properties on each Range object.
// These are the unshared, noninherited properties that define the unique state of
// each individual Range object.
// • The range.methods object uses the ES6 shorthand syntax for defining methods,
// which is why you don’t see the function keyword anywhere. (See §6.10.5 to
// review object literal shorthand method syntax.)
// • One of the methods in the prototype has the computed name (§6.10.2) Sym
// bol.iterator, which means that it is defining an iterator for Range objects. The
// name of this method is prefixed with *, which indicates that it is a generator
// function instead of a regular function. Iterators and generators are covered in
// detail in Chapter 12. For now, the upshot is that instances of this Range class can
// be used with the for/of loop and with the ... spread operator.
// • The shared, inherited methods defined in range.methods all use the from and to
// properties that were initialized in the range() factory function. In order to refer
// to them, they use the this keyword to refer to the object through which they
// were invoked. This use of this is a fundamental characteristic of the methods of
// any class.

/**
 *
 * CLASSES + CONSTRUCTOR
 *
 *
 */

// It is not the idiomatic way to do so, however, because it did not define a constructor. A construc‐
// tor is a function designed for the initialization of newly created objects. Constructors
// are invoked using the new keyword as described in §8.2.3. Constructor invocations
// using new automatically create the new object, so the constructor itself only needs to
// initialize the state of that new object. The critical feature of constructor invocations is
// that the prototype property of the constructor is used as the prototype of the new
//   object.

//   §6.2.3 introduced prototypes and emphasized that while almost all objects
// have a prototype, only a few objects have a prototype property. Finally, we can clarify
// this: it is function objects that have a prototype property. This means that all objects
// created with the same constructor function inherit from the same object and are
// therefore members of the same class.

// A Range class using a constructor
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
  },
  // Return a string representation of the range
  toString: function () {
    return '(' + this.from + '...' + this.to + ')';
  },
};
// Here are example uses of this new Range class
r = new Range(1, 3); // Create a Range object; note the use of new
r.includes(2); // => true: 2 is in the range
r.toString(); // => "(1...3)"
const r3 = [...r]; // => [1, 2, 3]; convert to an array via iterator

// It is worth comparing Examples 9-1 and 9-2 fairly carefully and noting the differences
// between these two techniques for defining classes.
//   - First, notice that we renamed the range() factory function to Range() when we converted it to a constructor. This is a very common coding convention: constructor functions define, in a sense, classes,
// and classes have names that (by convention) begin with capital letters. Regular func‐
// tions and methods have names that begin with lowercase letters.
//   - Next, notice that the Range() constructor is invoked (at the end of the example) with
// the new keyword while the range() factory function was invoked without it.
// Example 9-1 uses regular function invocation (§8.2.1) to create the new object, and
// Example 9-2 uses constructor invocation (§8.2.3). Because the Range() constructor is
// invoked with new, it does not have to call Object.create() or take any action to cre‐
// ate a new object. The new object is automatically created before the constructor is
// called, and it is accessible as the this value. The Range() constructor merely has to
// initialize this. 
//   - Constructors do not even have to return the newly created object.
// Constructor invocation automatically creates a new object, invokes the constructor as
// a method of that object, and returns the new object. The fact that constructor invoca‐
// tion is so different from regular function invocation is another reason that we give
// constructors names that start with capital letters. 
//   - Constructors are written to be invoked as constructors, with the new keyword, and they usually won’t work properly if they are invoked as regular functions. A naming convention that keeps constructor
// functions distinct from regular functions helps programmers know when to use new.
//   - Another critical difference between Examples 9 - 1 and 9 - 2 is the way the prototype
// object is named. In the first example, the prototype was range.methods. This was a
// convenient and descriptive name, but arbitrary. In the second example, the prototype
// is Range.prototype, and this name is mandatory. An invocation of the Range() con‐
// structor automatically uses Range.prototype as the prototype of the new Range
// object.
//   - Finally, also note the things that do not change between Examples 9 - 1 and 9 - 2 : the
// range methods are defined and invoked in the same way for both classes. Because
// Example 9-2 demonstrates the idiomatic way to create classes in versions of Java‐
// Script before ES6, it does not use the ES6 shorthand method syntax in the prototype
// object and explicitly spells out the methods with the function keyword. But you can
// see that the implementation of the methods is the same in both examples.

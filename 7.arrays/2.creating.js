// There are several ways to create arrays. The subsections that follow explain how to
// create arrays with:
// • Array literals
// • The ... spread operator on an iterable object
// • The Array() constructor
// • The Array.of() and Array.from() factory methods

/**
 * Array litterals
 */
let empty = []; // An array with no elements
let primes = [2, 3, 5, 7, 11]; // An array with 5 numeric elements
let misc = [1.1, true, 'a']; // 3 elements of various types + tra
b = [
  [1, { x: 1, y: 2 }],
  [2, { x: 3, y: 4 }],
];
// Array elements for which values are omitted do not exist
// but appear to be undefined if you query them:
let count = [1, , 3]; // Elements at indexes 0 and 2. No element at index 1
let undefs = [, ,]; // An array with no elements but a length of 2

/**
 * The Spread Operator
 * */
// In ES6 and later, you can use the “spread operator,” ..., to include the elements of
// one array within an array literal:
a = [1, 2, 3];
let b = [0, ...a, 4]; // b == [0, 1, 2, 3, 4]
// The three dots “spread” the array a so that its elements become elements within the
// array literal that is being created. It is as if the ...a was replaced by the elements of
// the array a, listed literally as part of the enclosing array literal. (Note that, although
// we call these three dots a spread operator, this is not a true operator because it can
// only be used in array literals and, as we’ll see later in the book, function invocations.)
// The spread operator is a convenient way to create a (shallow) copy of an array:
let original = [1, 2, 3];
let copy = [...original];
copy[0] = 0; // Modifying the copy does not change the original
original[0]; // => 1

// The spread operator works on any iterable object. (Iterable objects are what the
// for/of loop iterates over; we first saw them in §5.4.4, and we’ll see much more about
// them in Chapter 12.) Strings are iterable, so you can use a spread operator to turn any
// string into an array of single-character strings:
let digits = [...'0123456789ABCDEF'];
digits; // => ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]

/**
 * The Array() Constructor
 */
// Another way to create an array is with the Array() constructor. You can invoke this
// constructor in three distinct ways:
// • Call it with no arguments:
let a = new Array();
// This method creates an empty array with no elements and is equivalent to the
// array literal [].
// • Call it with a single numeric argument, which specifies a length:
a = new Array(10);
// • Explicitly specify two or more array elements or a single non-numeric element
// for the array:
a = new Array(5, 4, 3, 2, 1, 'testing');
// In this form, the constructor arguments become the elements of the new array.
// Using an array literal is almost always simpler than this usage of the Array()
// constructor.

/**
 * Array.of()
 */
// When the Array() constructor function is invoked with one numeric argument, it
// uses that argument as an array length. But when invoked with more than one
// numeric argument, it treats those arguments as elements for the array to be created.
// This means that the Array() constructor cannot be used to create an array with a sin‐
// gle numeric element.
// In ES6, the Array.of() function addresses this problem: it is a factory method that
// creates and returns a new array, using its argument values (regardless of how many of
// them there are) as the array elements:
Array.of(); // => []; returns empty array with no arguments
Array.of(10); // => [10]; can create arrays with a single numeric argument
Array.of(1, 2, 3); // => [1, 2, 3]

/**
 * Array.from()
 */
// Array.from() permet de créer des instances d'Array à partir :
// - d'objets semblables à des tableaux (qui disposent d'une propriété length et d'éléments indexés) ou
// - d'objets itérables (des objets dont on peut avoir les éléments comme Map et Set).
// Array.from is another array factory method introduced in ES6. It expects an iterable
// or array-like object as its first argument and returns a new array that contains the ele‐
// ments of that object. With an iterable argument, Array.from(iterable) works like
// the spread operator [...iterable] does. It is also a simple way to make a copy of an
// array:
let copy = Array.from(original);

// Array.from() is also important because it defines a way to make a true-array copy of
// an array-like object. Array-like objects are non-array objects that have a numeric
// length property and have values stored with properties whose names happen to be
// integers. When working with client-side JavaScript, the return values of some web
// browser methods are array-like, and it can be easier to work with them if you first
// convert them to true arrays:
let truearray = Array.from(arraylike);
// Array.from() also accepts an optional second argument. If you pass a function as the
// second argument, then as the new array is being built, each element from the source
// object will be passed to the function you specify, and the return value of the function
// will be stored in the array instead of the original value.
let obj = 'Borel';
console.log(Array.from(obj)); // ["B", "o", "r", "e", "l"]

console.log(Array.from([1, 2, 3], (x) => x + x));
// expected output: Array [2, 4, 6]

// Ça fonctionne avec tous les objets itérables...
// Set
const s = new Set(['toto', 'truc', 'truc', 'bidule']);
Array.from(s);
// ["toto", "truc", "bidule"]

// Map
const m = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
]);
Array.from(m);
// [[1, 2], [2, 4], [4, 8]]

// An iterable object is any object that has a Symbol.iterator property whose value is a function that returns an Iterator.
// Un itérable est un objet dont on peut parcourir les valeurs, à l'aide d'un for par exemple.

// You can loop over all values in an iterable object by using a for (const value of iterable) { } loop.

// You may create your own iterable object by assigning the Symbol.iterator property to a generator function (function* () {}) or an object with a next() method.

let o = {
  x1: 'a',
  x2: 'b',
  x3: 'c',
};
console.log(Array.from(o)); // []

o = {
  x1: 'a',
  x2: 'b',
  x3: 'c',
  length: 3,
  [Symbol.iterator]: function* () {
    for (let i = 1; i <= 3; i++) {
      yield this[`x${i}`];
    }
  },
};

console.log(Array.from(obj)); // [ 'a', 'b', 'c' ]
console.log(...obj); // a b c

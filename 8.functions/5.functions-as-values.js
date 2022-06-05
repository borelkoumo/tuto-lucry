// Functions as Values

// The most important features of functions are that they can be defined and invoked.
// Function definition and invocation are syntactic features of JavaScript and of most
// other programming languages. In JavaScript, however, functions are not only syntax
// but also values, which means they can be assigned to variables, stored in the proper‐
// ties of objects or the elements of arrays, passed as arguments to functions, and so on.3
// To understand how functions can be JavaScript data as well as JavaScript syntax, con‐
// sider this function definition:
function square(x) {
  return x * x;
}

// This definition creates a new function object and assigns it to the variable square.
// The name of a function is really immaterial; it is simply the name of a variable that
// refers to the function object. The function can be assigned to another variable and
// still work the same way:
let s = square; // Now s refers to the same function that square does
square(4); // => 16
s(4); // => 16
// Functions can also be assigned to object properties rather than variables. As we’ve
// already discussed, we call the functions “methods” when we do this:
let o = {
  square: function (x) {
    return x * x;
  },
}; // An object literal
let y = o.square(16); // y == 256
// Functions don’t even require names at all, as when they’re assigned to array elements:
let a = [(x) => x * x, 20]; // An array literal
a[0](a[1]); // => 400

// As an example of how useful it is to treat functions as values, consider the
// Array.sort() method. This method sorts the elements of an array. Because there are
// many possible orders to sort by (numerical order, alphabetical order, date order,
// ascending, descending, and so on), the sort() method optionally takes a function as
// an argument to tell it how to perform the sort. This function has a simple job: for any
// two values it is passed, it returns a value that specifies which element would come
// first in a sorted array. This function argument makes Array.sort() perfectly general
// and infinitely flexible; it can sort any type of data into any conceivable order. Exam‐
// ples are shown in 7.8.6

/**
 * Defining Your Own Function Properties
 *
 *
 *Functions are not primitive values in JavaScript, but a specialized kind of object,
which means that functions can have properties. When a function needs a “static”
variable whose value persists across invocations, it is often convenient to use a prop‐
erty of the function itself. For example, suppose you want to write a function that
returns a unique integer whenever it is invoked. The function must never return the
same value twice. In order to manage this, the function needs to keep track of the
values it has already returned, and this information must persist across function invo‐
cations. You could store this information in a global variable, but that is unnecessary,
because the information is used only by the function itself. It is better to store the
information in a property of the Function object. Here is an example that returns a
unique integer whenever it is called:
 *
 *
 *
 *
 */

let mat = 0
function getMatricule() {
  return mat++
}
getMatricule()

//////////////////////////////////////////////

const univ = (function () {
  let matr = 0
  const o = {
    getMatricule: function () {
      return "USER-"+matr++
    },
    getUnivName: function () {
      return "Univ de SOA"
    }
  }
  return o
})()

univ.getMatricule()

console.log("Univ name = ", univ.getUnivName())
// Initialize the counter property of the function object.
// Function declarations are hoisted so we really can
// do this assignment before the function declaration.
uniqueInteger.counter = 0;
// This function returns a different integer each time it is called.
// It uses a property of itself to remember the next value to be returned.
function uniqueInteger() {
  return uniqueInteger.counter++; // Return and increment counter property
}
uniqueInteger(); // => 0
uniqueInteger(); // => 1

// As another example, consider the following factorial() function that uses proper‐
// ties of itself (treating itself as an array) to cache previously computed results:
// Compute factorials and cache results as properties of the function itself.
function factorial(n) {
  if (Number.isInteger(n) && n > 0) {
    // Positive integers only
    if (!(n in factorial)) {
      // If no cached result
      factorial[n] = n * factorial(n - 1); // Compute and cache it
    }
    return factorial[n]; // Return the cached result
  } else {
    return NaN; // If input was bad
  }
}
factorial[1] = 1; // Initialize the cache to hold this base case.
factorial(6); // => 720
factorial[5]; // => 120; the call above caches this value

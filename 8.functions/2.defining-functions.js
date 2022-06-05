/**
 * The most straightforward way to define a JavaScript function is with the function
keyword, which can be used as a ************declaration or as an *************expression. ES6 defines an
important new way to define functions without the function keyword: ************“arrow functions” have a particularly compact syntax and are useful when passing one function as
an argument to another function. 

In object literals and class definitions, there is a convenient shorthand syntax for
defining methods. This shorthand syntax was covered in §6.10.5 and is equivalent to
using a function definition expression and assigning it to an object property using the
basic name:value object literal syntax. In another special case, you can use keywords
************get and ************set in object literals to define special property getter and setter methods.
This function definition syntax was covered in §6.10.6.
Note that functions can also be defined with the Function() constructor, which is the
subject of §8.7.7. Also, JavaScript defines some specialized kinds of functions.
function* defines generator functions (see Chapter 12) and async function defines
asynchronous functions (see Chapter 13).

 */
/**
 * Function declaration
 */
// Les déclarations de fonctions
// Une déclarations de fonction (aussi appelée définition de fonction ou instruction de fonction) est construite avec le mot-clé function, suivie par ...
// Here are some example function declarations:
// Print the name and value of each property of o. Return undefined.
function printprops(o) {
  for (let p in o) {
    console.log(`${p}: ${o[p]}\n`);
  }
}

/**
 * The printprops() function job is to output the names and values of
an object’s properties. No return value is necessary, and the function does not include
a return statement. The value of an invocation of the printprops() function is
always undefined. If a function does not contain a return statement, it simply exe‐
cutes each statement in the function body until it reaches the end, and returns the
undefined value to the caller.

 * One of the important things to understand about function declarations is that ***** the name of the function becomes a variable whose value is the function itself. 
 * Function declaration statements are **************“hoisted” to the top of the enclosing script, function, or block so that functions defined in this way may be invoked from code that appears
before the definition. Another way to say this is that all of the functions declared in a
block of JavaScript code will be defined throughout that block, and they will be
defined before the JavaScript interpreter begins to execute any of the code in that
block.
 */

/**************
 * Function expression
 */
/**
 * Function expressions look a lot like function declarations, but they appear within the
 context of a larger expression or statement, and the name is optional. Here are some
 example function expressions:*/
 // Syntaxiquement, la déclaration de fonction utilisée ci - dessus est une instruction.On peut également créer une fonction grâce à une expression de fonction.De telles fonctions peuvent être anonymes(ne pas avoir de nom correspondant).La fonction carré aurait pu être définie de la façon suivante:
// This function expression defines a function that squares its argument.
// Note that we assign it to a variable
const square = function (x) {
  return x * x;
};

// Function expressions can include names, which is useful for recursion.
const f = function fact(x) {
  if (x <= 1) return 1;
  else return x * fact(x - 1);
};

// Function expressions can also be used as arguments to other functions:
[3, 2, 1].sort(function (a, b) {
  return a - b;
});
// Function expressions are sometimes defined and immediately invoked:
let tensquared = (function (x) {
  return x * x;
})(10);


/**
Note that the function name is optional for functions defined as expressions, and
most of the preceding function expressions we’ve shown omit it. 

A function declara‐
tion actually declares a variable and assigns a function object to it. 

A function expres‐
sion, on the other hand, does not declare a variable: it is up to you to assign the newly
defined function object to a constant or variable if you are going to need to refer to it
multiple times. It is a good practice to use const with function expressions so you
don’t accidentally overwrite your functions by assigning new values.

A name is allowed for functions, like the factorial function, that need to refer to
themselves. If a function expression includes a name, the local function scope for that
function will include a binding of that name to the function object. In effect, the
************function name becomes a local variable within the function.
 */

/**
 * Difference between function declaration and expression
 * 
 * 
 * There is an important difference between defining a function f() with a function
declaration and assigning a function to the variable f after creating it as an expres‐
sion. 
- When you use the declaration form, the function objects are created *****before the
code that contains them starts to run, and the definitions are hoisted so that you can
call these functions from code that appears above the definition statement. 
- This is not true for functions defined as expressions, however: these functions do not exist until
the expression that defines them are actually evaluated. Furthermore, in order to
invoke a function, you must be able to refer to it, and you can’t refer to a function
defined as an expression until it is assigned to a variable, so functions defined with
expressions cannot be invoked before they are defined.
 */

// There is an important difference between defining a function f() with a function
// declaration and assigning a function to the variable f after creating it as an expres‐
// sion. When you use the declaration form, the function objects are created before the
// code that contains them starts to run, and the definitions are hoisted so that you can
// call these functions from code that appears above the definition statement. This is not
// true for functions defined as expressions, however: these functions do not exist until
// the expression that defines them are actually evaluated. Furthermore, in order to
// invoke a function, you must be able to refer to it, and you can’t refer to a function
// defined as an expression until it is assigned to a variable, so functions defined with
// expressions cannot be invoked before they are defined

// Expression de fonction 1: OK (la fonction est definie avant son appel)
const sum = function (a, b) {
  return a + b;
};
sum(1, 2)

// Expression de fonction 2: NOT OK (la fonction est appelée avant d'être définie)
sum(1, 2) // Ca passe
const sum = function (a, b) {
  return a + b;
};

// Déclaration de fonction : OK (peu importe qu'on l'appelle avant ou après l'avoir définie, la fonction est toujours disponible)
sum(3,4)
function sum(a, b) {
  return a + b;
};
sum(1, 2)



/**
 * Arrow functions
 */
// In ES6, you can define functions using a particularly compact syntax known as
// “arrow functions.” This syntax is reminiscent of mathematical notation and uses an =>
// “arrow” to separate the function parameters from the function body. The function
// keyword is not used, and, since arrow functions are expressions instead of statements,
// there is no need for a function name, either. The general form of an arrow function is
// a comma-separated list of parameters in parentheses, followed by the => arrow, fol‐
// lowed by the function body in curly braces:
let sum = (x, y) => {
  return x + y;
};
sum = (x, y) => x + y;
const polynomial = (x) => x * x + 2 * x + 3;
const constantFunc = () => 42;

// Also, if the body of your arrow function is a single return statement but the expres‐
// sion to be returned is an object literal, then you have to put the object literal inside
// parentheses to avoid syntactic ambiguity between the curly braces of a function body
// and the curly braces of an object literal:
f = (x) => {
  return { value: x };
}; // Good: f() returns an object
const g = (x) => ({ value: x }); // Good: g() returns an object
const h = (x) => {
  value: x;
}; // Bad: h() returns nothing
// const i = x => { v: x, w: x };

// The concise syntax of arrow functions makes them ideal when you need to pass one
// function to another function, which is a common thing to do with array methods like
// map(), filter(), and reduce() (see §7.8.1), for example:
// Make a copy of an array with null elements removed.
let filtered = [1, null, 2, 3].filter((x) => x !== null); // filtered == [1,2,3]
// Square some numbers:
let squares = [1, 2, 3, 4].map((x) => x * x); // squares == [1,4,9,16]

/**
 * Differences between arrow functions and the others
 */
/** Arrow functions differ from functions defined in other ways in one critical way:
**********they inherit the value of the this keyword from the environment in which they are
defined rather than defining their own invocation context as functions defined in
  other ways do. 
This is an important and very useful feature of arrow functions, and
we’ll return to it again later in this chapter.  Arrow functions also differ from other functions in that ***************they do not have a prototype property, which means that they cannot be used as constructor functions for new classes (see §9.2).
*/
function f() {
  this.x = 2;
  this.f = function () {
    console.log('f this = ', this);
  };
}
let o = new f();
o.f(); // Outputs f this =  f { x: 2, f: [Function] }

function f2() {
  console.log(this);
}
f2(); /* Outputs Object [global] {
  global: [Circular],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] { [Symbol(util.promisify.custom)]: [Function] },
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(util.promisify.custom)]: [Function]
  }
} */

let obj = {
  x: 1,
  y: 2,
  sum() {
    console.log('sum this', this);
  },
  div: () => {
    this.x = 'div';
    this.f = function () {};
    console.log('div this', this);
  },
};

obj.sum(); // sum this { x: 1, y: 2, sum: [Function: sum], div: [Function: div] }
obj.div(); // div this { x: 'div', f: [Function] }

/**
 * Nested functions
 */
/**
 * In JavaScript, functions may be nested within other functions. For example:
 The interesting thing about nested functions is their variable scoping rules: they can
 access the parameters and variables of the function (or functions) they are nested
 within. In the code shown here, for example, the inner function square() can read
 and write the parameters a and b defined by the outer function hypotenuse(). These
 scope rules for nested functions are very important, and we will consider them again
 in §8.6.
 */
function hypotenuse(a, b) {
  function square(x) {
    return x * x;
  }
  return Math.sqrt(square(a) + square(b));
}

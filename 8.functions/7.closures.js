/**
 * 
 * 8.6 Closures (en résumé, c'est la paire formée par la fonction et l'environnement dans lequel elle a été définie)
 * 
 * Like most modern programming languages, JavaScript uses lexical scoping. This
means that functions are executed using the variable scope that was in effect when
they were defined, not the variable scope that is in effect when they are invoked. 

Lexical scope : means that in a nested group of functions, the inner functions have access to the variables and other resources of their parent scope. This means that the child's functions are lexically bound to the execution context of their parents.
*/
function grandfather() {
  var name = 'Hammad';
  // 'likes' is not accessible here
  function parent() {
    // 'name' is accessible here
    // 'likes' is not accessible here
    function child() {
      // Innermost level of the scope chain
      // 'name' is also accessible here
      var likes = 'Coding';
    }
  }
}

/**
In order to implement lexical scoping, the internal state of a JavaScript function object
must include not only the code of the function but also a reference to the scope in
which the function definition appears. This combination of a function object and a
scope (a set of variable bindings) in which the function’s variables are resolved is
called a closure in the computer science literature.

Une fermeture (closure) est la paire formée d'une fonction et des références à son état environnant (l'environnement lexical). En d'autres termes, une fermeture donne accès à la portée d'une fonction externe à partir d'une fonction interne (on dit aussi que la fonction « capture son environnement »). En JavaScript, une fermeture est créée chaque fois qu'une fonction est créée.
 */

/**
Technically, all JavaScript functions are closures, but because most functions are
invoked from the same scope that they were defined in, it normally doesn’t really
matter that there is a closure involved. Closures become interesting when they are
invoked from a different scope than the one they were defined in. This happens most
commonly when a nested function object is returned from the function within which
it was defined. There are a number of powerful programming techniques that involve
this kind of nested function closures, and their use has become relatively common in
JavaScript programming. Closures may seem confusing when you first encounter
them, but it is important that you understand them well enough to use them
comfortably.
The first step to understanding closures is to review the lexical scoping rules for nes‐
ted functions. Consider the following code:
*/
let scope = 'global scope'; // A global variable
function checkscope() {
  let scope = 'local scope'; // A local variable
  function f() {
    return scope;
  } // Return the value in scope here
  return f();
}
checkscope(); // => "local scope"
// The checkscope() function declares a local variable and then defines and invokes a
// function that returns the value of that variable. It should be clear to you why the call
// to checkscope() returns “local scope”. Now, let’s change the code just slightly. Can
// you tell what this code will return?
scope = 'global scope'; // A global variable
function checkscope() {
  let scope = 'local scope'; // A local variable
  function f() {
    return scope;
  } // Return the value in scope here
  return f;
}
let s = checkscope()(); // What does this return?
// In this code, a pair of parentheses has moved from inside checkscope() to outside of
// it. Instead of invoking the nested function and returning its result, checkscope()
// now just returns the nested function object itself. What happens when we invoke that
// nested function (with the second pair of parentheses in the last line of code) outside
// of the function in which it was defined?
// Remember the fundamental rule of lexical scoping: JavaScript functions are executed
// using the scope they were defined in. The nested function f() was defined in a scope
// where the variable scope was bound to the value “local scope”. That binding is still in
// effect when f is executed, no matter where it is executed from. So the last line of the
// preceding code example returns “local scope”, not “global scope”. This, in a nutshell, is
// the surprising and powerful nature of closures: they capture the local variable (and
// parameter) bindings of the outer function within which they are defined.

// In §8.4.1, we defined a uniqueInteger() function that used a property of the func‐
// tion itself to keep track of the next value to be returned. A shortcoming of that
// approach is that buggy or malicious code could reset the counter or set it to a nonin‐
// teger, causing the uniqueInteger() function to violate the “unique” or the “integer”
// part of its contract. Closures capture the local variables of a single function invocation
// and can use those variables as private state. Here is how we could rewrite the unique
// Integer() using an immediately invoked function expression to define a namespace
// and a closure that uses that namespace to keep its state private:
let uniqueInteger = (function () {
  // Define and invoke
  let counter = 0; // Private state of function below
  return function () {
    return counter++;
  };
})();
uniqueInteger(); // => 0
uniqueInteger(); // => 1
// In order to understand this code, you have to read it carefully. At first glance, the first
// line of code looks like it is assigning a function to the variable uniqueInteger. In fact,
// the code is defining and invoking (as hinted by the open parenthesis on the first line)
// a function, so it is the return value of the function that is being assigned to uniqueIn
// teger. Now, if we study the body of the function, we see that its return value is
// another function. It is this nested function object that gets assigned to uniqueIn
// teger. The nested function has access to the variables in its scope and can use the
// counter variable defined in the outer function. Once that outer function returns, no
// other code can see the counter variable: the inner function has exclusive access to it.
// Private variables like counter need not be exclusive to a single closure: it is perfectly
// possible for two or more nested functions to be defined within the same outer func‐
// tion and share the same scope. Consider the following code:
function counter() {
  let n = 0;
  return {
    count: function () {
      return n++;
    },
    reset: function () {
      n = 0;
    },
  };
}
let c = counter(),
  d = counter(); // Create two counters
c.count(); // => 0
d.count(); // => 0: they count independently
c.reset(); // reset() and count() methods share state
c.count(); // => 0: because we reset c
d.count(); // => 1: d was not reset
// The counter() function returns a “counter” object. This object has two methods:
// count() returns the next integer, and reset() resets the internal state. The first thing
// to understand is that the two methods share access to the private variable n. The sec‐
// ond thing to understand is that each invocation of counter() creates a new scope—
// independent of the scopes used by previous invocations—and a new private variable
// within that scope. So if you call counter() twice, you get two counter objects with
// different private variables. Calling count() or reset() on one counter object has no
// effect on the other.
// It is worth noting here that you can combine this closure technique with property
// getters and setters. The following version of the counter() function is a variation on
// code that appeared in §6.10.6, but it uses closures for private state rather than relying
// on a regular object property:
function counter(n) {
  // Function argument n is the private variable
  return {
    // Property getter method returns and increments private counter var.
    get count() {
      return n++;
    },
    // Property setter doesn't allow the value of n to decrease
    set count(m) {
      if (m > n) n = m;
      else throw Error('count can only be set to a larger value');
    },
  };
}
c = counter(1000);
c.count; // => 1000
c.count; // => 1001
c.count = 2000;
c.count; // => 2000
c.count = 2000; // !Error: count can only be set to a larger value
// Note that this version of the counter() function does not declare a local variable but
// just uses its parameter n to hold the private state shared by the property accessor
// methods. This allows the caller of counter() to specify the initial value of the private
// variable.
// Example 8-2 is a generalization of the shared private state through the closures tech‐
// nique we’ve been demonstrating here. This example defines an addPrivateProp
// erty() function that defines a private variable and two nested functions to get and set
// the value of that variable. It adds these nested functions as methods of the object you
// specify.

// We’ve now seen a number of examples in which two closures are defined in the same
// scope and share access to the same private variable or variables. This is an important
// technique, but it is just as important to recognize when closures inadvertently share
// access to a variable that they should not share. Consider the following code:
// This function returns a function that always returns v
function constfunc(v) {
  return () => v;
}
// Create an array of constant functions:
let funcs = [];
for (var i = 0; i < 10; i++) funcs[i] = constfunc(i);
// The function at array element 5 returns the value 5.
funcs[5](); // => 5
// When working with code like this that creates multiple closures using a loop, it is a
// common error to try to move the loop within the function that defines the closures.
// Think about the following code, for example:
// Return an array of functions that return the values 0-9
function constfuncs() {
  let funcs = [];
  for (var i = 0; i < 10; i++) {
    funcs[i] = () => i;
  }
  return funcs;
}
funcs = constfuncs();
funcs[5](); // => 10; Why doesn't this return 5?
// This code creates 10 closures and stores them in an array. The closures are all defined
// within the same invocation of the function, so they share access to the variable i.
// When constfuncs() returns, the value of the variable i is 10, and all 10 closures
// share this value. Therefore, all the functions in the returned array of functions return
// the same value, which is not what we wanted at all. It is important to remember that
// the scope associated with a closure is “live.” Nested functions do not make private
// copies of the scope or make static snapshots of the variable bindings. Fundamentally,
// the problem here is that variables declared with var are defined throughout the func‐
// tion. Our for loop declares the loop variable with var i, so the variable i is defined
// throughout the function rather than being more narrowly scoped to the body of the
// loop. The code demonstrates a common category of bugs in ES5 and before, but the
// introduction of block-scoped variables in ES6 addresses the issue. If we just replace
// the var with a let or a const, then the problem goes away. Because let and const are
// block scoped, each iteration of the loop defines a scope that is independent of the
// scopes for all other iterations, and each of these scopes has its own independent bind‐
// ing of i.
// Another thing to remember when writing closures is that this is a JavaScript key‐
// word, not a variable. As discussed earlier, arrow functions inherit the this value of
// the function that contains them, but functions defined with the function keyword do
// not. So if you’re writing a closure that needs to use the this value of its containing
// function, you should use an arrow function, or call bind(), on the closure before
// returning it, or assign the outer this value to a variable that your closure will inherit:

const self = this; // Make the this value available to nested functions




function calc() {
  let a = 5;
  let b = 6;

  return {
    add() {
      return a + b
    },
    sous() {
      return a - b
    },
    div() {
      return a / b
    },
    mult() {
      return a * b
    },
    incr() {
      return a++
    }
  }
}

const c = calc()
console.log(c.incr())
console.log(c.incr())

////////////////////////




const univ = (function () {
  let matr = 0
  const o = {
    getMatricule: function () {
      matr++
      return "USER-" + matr
    },
    getUnivName: function () {
      return "Univ de SOA"
    }
  }
  return o
})()

console.log(univ)
console.log(univ.getMatricule())
console.log(univ.getMatricule())


///////////////////////////////////////



function getMatr() {
  let mat = 0;
  function incr() {
    mat += 1;
  }
  incr();
  return mat;
}


console.log(getMatr())
console.log(getMatr())
console.log(getMatr())
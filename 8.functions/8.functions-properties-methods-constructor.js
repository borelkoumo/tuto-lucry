/**
 * 
 * Function Properties, Methods, and Constructor
 * 
 * 
 * We’ve seen that functions are values in JavaScript programs. The typeof operator
returns the string “function” when applied to a function, but functions are really a
specialized kind of JavaScript object. Since functions are objects, they can have prop‐
erties and methods, just like any other object. There is even a Function() constructor
to create new function objects. The subsections that follow document the length,
name, and prototype properties; the call(), apply(), bind(), and toString() meth‐
ods; and the Function() constructor
 */

/**
 * The length Property


The read-only length property of a function specifies the arity of the function—the
number of parameters it declares in its parameter list, which is usually the number of
arguments that the function expects. If a function has a rest parameter, that parame‐
ter is not counted for the purposes of this length property. 

*/

function f(a, b) {
  console.log(arguments); // Arguments(3) [2, 3, 6, callee: ƒ, Symbol(Symbol.iterator): ƒ]
  console.log(typeof arguments); // object
  console.log(f.length); // 2
  console.log(Array.from(arguments).slice(0, f.length)); // [2, 3]
}

f(2, 3, 6);

/**
 *  The name Property
 * 
 * 
The read-only name property of a function specifies the name that was used when the
function was defined, if it was defined with a name, or the name of the variable or
property that an unnamed function expression was assigned to when it was first cre‐
ated. This property is primarily useful when writing debugging or error messages.


*/

/** 
 * 
 * 
 * The prototype Property
 * 
All functions, except arrow functions, have a prototype property that refers to an
object known as the prototype object. Every function has a different prototype object.
When a function is used as a constructor, the newly created object inherits properties
from the prototype object. Prototypes and the prototype property were discussed in
§6.2.3 and will be covered again in Chapter 9.
*/



/**
 * 
 * 
 * 
 * The call() and apply() Methods
 * */

// call() and apply() allow you to indirectly invoke (§8.2.4) a function as if it were a
// method of some other object. The first argument to both call() and apply() is the
// object on which the function is to be invoked; this argument is the invocation context
// and becomes the value of the this keyword within the body of the function. To
// invoke the function f() as a method of the object o (passing no arguments), you
// could use either call() or apply():
f.call(o);
f.apply(o);

// Either of these lines of code are similar to the following (which assume that o does
// not already have a property named m):
o.m = f; // Make f a temporary method of o.
o.m(); // Invoke it, passing no arguments.
delete o.m; // Remove the temporary method.

// Remember that arrow functions inherit the this value of the context where they are
// defined. This cannot be overridden with the call() and apply() methods. If you call
// either of those methods on an arrow function, the first argument is effectively
// ignored.
// Any arguments to call() after the first invocation context argument are the values
// that are passed to the function that is invoked (and these arguments are not ignored
// for arrow functions). For example, to pass two numbers to the function f() and
// invoke it as if it were a method of the object o, you could use code like this:
f.call(o, 1, 2);

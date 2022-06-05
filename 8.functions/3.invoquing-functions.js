/**
 * Invoking Functions
 *
 */
/**
 * The JavaScript code that makes up the body of a function is not executed when the
function is defined, but rather when it is invoked. JavaScript functions can be invoked
in five ways:
• As functions
• As methods
• As constructors
• Indirectly through their call() and apply() methods
• Implicitly, via JavaScript language features that do not appear like normal func‐
tion invocations

 */

/**
 * Function invocation
 */
// Functions are invoked as functions or as methods with an invocation expression
// (§4.5). An invocation expression consists of a function expression that evaluates to a
// function object followed by an open parenthesis, a comma-separated list of zero or
// more argument expressions, and a close parenthesis. If the function expression is a
// property-access expression—if the function is the property of an object or an element
// of an array—then it is a method invocation expression. That case will be explained in
// the following example. The following code includes a number of regular function
// invocation expressions:
printprops({ x: 1 });
let total = distance(0, 0, 2, 1) + distance(2, 1, 3, 5);
let probability = factorial(5) / factorial(13);
// In an invocation, each argument expression (the ones between the parentheses) is
// evaluated, and the resulting values become the arguments to the function. These val‐
// ues are assigned to the parameters named in the function definition. In the body of
// the function, a reference to a parameter evaluates to the corresponding argument
// value.
// For regular function invocation, the return value of the function becomes the value of
// the invocation expression. If the function returns because the interpreter reaches the
// end, the return value is undefined. If the function returns because the interpreter
// executes a return statement, then the return value is the value of the expression that
// follows the return or is undefined if the return statement has no value.

/**
 * Conditionnal invocation (a special syntax)
 */
// In ES2020 you can insert ?. after the function expression and before the open paren‐
// thesis in a function invocation in order to invoke the function only if it is not null or
// undefined. That is, the expression f?.(x) is equivalent (assuming no side effects) to:
f !== null && f !== undefined ? f(x) : undefined;

/**
 * Method invocation
 */
// The arguments and return value of a method invocation are handled exactly as
// described for regular function invocation. Method invocations differ from function
// invocations in one important way, however: the invocation context. Property access
// expressions consist of two parts: an object (in this case o) and a property name (m). In
// a method-invocation expression like this, the object o becomes the invocation con‐
// text, and the function body can refer to that object by using the keyword this. Here
// is a concrete example:
let calculator = {
  // An object literal
  operand1: 1,
  operand2: 1,
  add() {
    // We're using method shorthand syntax for this function
    // Note the use of the this keyword to refer to the containing object.
    this.result = this.operand1 + this.operand2;
  },
};
calculator.add(); // A method invocation to compute 1+1.
calculator.result; // => 2
// Most method invocations use the dot notation for property access, but property
// access expressions that use square brackets also cause method invocation. The follow‐
// ing are both method invocations, for example:
o['m'](x, y); // Another way to write o.m(x,y).
a[0](z); // Also a method invocation (assuming a[0] is a function)

// Method invocations may also involve more complex property access expressions:
// customer.surname.toUpperCase(); // Invoke method on customer.surname
f().m(); // Invoke method m() on return value of f()
// Methods and the this keyword are central to the object-oriented programming para‐
// digm. Any function that is used as a method is effectively passed an implicit argu‐
// ment—the object through which it is invoked.

// The this keyword is not scoped the way variables are, and, except for arrow func‐
// tions, nested functions do not inherit the this value of the containing function. If a
// nested function is invoked as a method, its this value is the object it was invoked on.
// If a nested function (that is not an arrow function) is invoked as a function, then its
// this value will be either the global object (non-strict mode) or undefined (strict
// mode). It is a common mistake to assume that a nested function defined within a
// method and invoked as a function can use this to obtain the invocation context of
// the method. The following code demonstrates the problem:
let o = {
  // An object o.
  m: function () {
    // Method m of the object.
    let self = this; // Save the "this" value in a variable.
    this === o; // => true: "this" is the object o.
    f(); // Now call the helper function f().
    function f() {
      // A nested function f
      this === o; // => false: "this" is global or undefined
      self === o; // => true: self is the outer "this" value.
    }
  },
};
o.m(); // Invoke the method m on the object o.

// Inside the nested function f(), the this keyword is not equal to the object o. This is
// widely considered to be a flaw in the JavaScript language, and it is important to be
// aware of it. The code above demonstrates one common workaround. Within the
// method m, we assign the this value to a variable self, and within the nested function
// f, we can use self instead of this to refer to the containing object.
// In ES6 and later, another workaround to this issue is to convert the nested function f
// into an arrow function, which will properly inherit the this value:
f = () => {
  this === o; // true, since arrow functions inherit this
};
// Functions defined as expressions instead of statements are not hoisted, so in order to
// make this code work, the function definition for f will need to be moved within the
// method m so that it appears before it is invoked.
// Another workaround is to invoke the bind() method of the nested function to define
// a new function that is implicitly invoked on a specified object:
f = function () {
  this === o; // true, since we bound this function to the outer this
}.bind(this);
// We’ll talk more about bind() in §8.7.5

/**
 * Constructor invocation
 */
/*
If a function or method invocation is preceded by the keyword new, then it is a con‐
structor invocation. (Constructor invocations were introduced in §4.6 and §6.2.2, and
constructors will be covered in more detail in Chapter 9.) Constructor invocations
differ from regular function and method invocations in their handling of arguments,
invocation context, and return value.
If a constructor invocation includes an argument list in parentheses, those argument
expressions are evaluated and passed to the function in the same way they would be
for function and method invocations. It is not common practice, but you can omit a
pair of empty parentheses in a constructor invocation. The following two lines, for
example, are equivalent:
A constructor invocation creates a new, empty object that inherits from the object
specified by the prototype property of the constructor. Constructor functions are
intended to initialize objects, and this newly created object is used as the invocation
context, so the constructor function can refer to it with the this keyword. 
*/
o = new Object();
o = new Object;

/*Note that the new object is used as the invocation context even if the constructor invocation
8.2 Invoking Functions | 191looks like a method invocation. That is, in the expression new o.m(), o is not used as the invocation context.


Constructor functions do not normally use the return keyword. They typically initi‐
alize the new object and then return implicitly when they reach the end of their body.
In this case, the new object is the value of the constructor invocation expression. If,
however, a constructor explicitly uses the return statement to return an object, then
that object becomes the value of the invocation expression. If the constructor uses
return with no value, or if it returns a primitive value, that return value is ignored
and the new object is used as the value of the invocation.

*/
/**
 * Indirect invocation
 * 
 */
/*
JavaScript functions are objects, and like all JavaScript objects, they have methods.
Two of these methods, call() and apply(), invoke the function indirectly. Both
methods allow you to explicitly specify the this value for the invocation, which
means you can invoke any function as a method of any object, even if it is not actually
a method of that object. Both methods also allow you to specify the arguments for the
invocation. The call() method uses its own argument list as arguments to the func‐
tion, and the apply() method expects an array of values to be used as arguments. The
call() and apply() methods are described in detail in §8.7.4.
*/

/**
 * Implicit Function Invocation
 * */
/*
There are various JavaScript language features that do not look like function invoca‐
tions but that cause functions to be invoked. Be extra careful when writing functions
that may be implicitly invoked, because bugs, side effects, and performance issues in
these functions are harder to diagnose and fix than in regular functions for the simple
reason that it may not be obvious from a simple inspection of your code when they
are being called.
The language features that can cause implicit function invocation include:
• If an object has getters or setters defined, then querying or setting the value of its
properties may invoke those methods. See §6.10.6 for more information.
• When an object is used in a string context (such as when it is concatenated with a
string), its toString() method is called. Similarly, when an object is used in a
numeric context, its valueOf() method is invoked. See §3.9.3 for details.
• When you loop over the elements of an iterable object, there are a number of
method calls that occur. Chapter 12 explains how iterators work at the function
call level and demonstrates how to write these methods so that you can define
your own iterable types.
• A tagged template literal is a function invocation in disguise. §14.5 demonstrates
how to write functions that can be used in conjunction with template literal
strings.
• Proxy objects (described in §14.7) have their behavior completely controlled by
functions. Just about any operation on one of these objects will cause a function
to be invoked.
*/

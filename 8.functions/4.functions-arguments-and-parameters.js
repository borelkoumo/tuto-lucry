/**
 * JavaScript function definitions do not specify an expected type for the function
parameters, and function invocations do not do any type checking on the argument
values you pass. In fact, JavaScript function invocations do not even check the num‐
ber of arguments being passed. The subsections that follow describe what happens
when a function is invoked with fewer arguments than declared parameters or with
more arguments than declared parameters
 */

/**
 * Optional Parameters and Defaults
 * 
 * 
When a function is invoked with fewer arguments than declared parameters, the
additional parameters are set to their default value, which is normally undefined.

 */
// Append the names of the enumerable properties of object o to the
// array a, and return a. If a is omitted, create and return a new array.
function getPropertyNames(o, a) {
  if (a === undefined) a = []; // If undefined, use a new array
  for (let property in o) a.push(property);
  return a;
}
// getPropertyNames() can be invoked with one or two arguments:
let o = { x: 1 },
  p = { y: 2, z: 3 }; // Two objects for testing
let a = getPropertyNames(o); // a == ["x"]; get o's properties in a new array
getPropertyNames(p, a); // a == ["x","y","z"]; add p's properties to it

// Instead of using an if statement in the first line of this function, you can use the || operator in this idiomatic way:
a = a || [];

// In ES6 and later, you can define a default value for each of your function parameters
// directly in the parameter list of your function. Simply follow the parameter name
// with an equals sign and the default value to use when no argument is supplied for
// that parameter:
// Append the names of the enumerable properties of object o to the
// array a, and return a. If a is omitted, create and return a new array.
function getPropertyNames(o, a = []) {
  for (let property in o) a.push(property);
  return a;
}

/**
 * Rest Parameters and Variable-Length Argument Lists
 * 
 * Parameter defaults enable us to write functions that can be invoked with fewer argu‐
ments than parameters. Rest parameters enable the opposite case: they allow us to
write functions that can be invoked with arbitrarily more arguments than parameters.
 * 
 * Paramètres du reste (Rest parameters)
Cette syntaxe permet de représenter un nombre indéfini d'arguments sous forme d'un tableau.


Les différences entre les paramètres du reste et l'objet arguments
Il y a trois principales différences entre les paramètres du reste et l'objet arguments :

les paramètres du reste sont uniquement ceux qui ne possèdent pas de noms à part entière (autrement dit ceux qui ne sont pas formellement définis dans l'expression de fonction), l'objet arguments contient chaque argument passé à la fonction
l'objet arguments n'est pas, à strictement parler, un tableau. Le paramètre représentant les arguments restant est une instance d'Array à laquelle on peut appliquer directement des méthodes comme sort, map, forEach ou pop
l'objet arguments possède des fonctionnalités spécifiques (comme, par exemple, la propriété callee)

function f(a, b){
  var args = Array.prototype.slice.call(arguments, f.length);
}

function f(a, b) {
  console.log(arguments);
  console.log(f.length);
}

f(2, 3, 6);
 * 
 */

function max(first = -Infinity, ...rest) {
  let maxValue = first; // Start by assuming the first arg is biggest
  // Then loop through the rest of the arguments, looking for bigger
  for (let n of rest) {
    if (n > maxValue) {
      maxValue = n;
    }
  }
  // Return the biggest
  return maxValue;
}
max(1, 10, 100, 2, 3, 1000, 4, 5, 6); // => 1000
/**
 * A rest parameter is preceded by three periods, and it must be the last parameter in a
function declaration. When you invoke a function with a rest parameter, the argu‐
ments you pass are first assigned to the non-rest parameters, and then any remaining
arguments (i.e., the “rest” of the arguments) are stored in an array that becomes the
value of the rest parameter. 
 */
function maFonction(a, b, ...autres) {
  console.log(a);
  console.log(b);
  console.log(autres);
}

maFonction('un', 'deux', 'trois');
// affichera ceci dans la console
// "un"
// "deux"
// ["trois"]

/**
 * The Arguments Object
 * 
 * 
 * 
 * Rest parameters were introduced into JavaScript in ES6. Before that version of the
language, varargs functions were written using the Arguments object: within the
body of any function, the identifier arguments refers to the Arguments object for that
invocation. The Arguments object is an array-like object (see §7.9) that allows the
argument values passed to the function to be retrieved by number, rather than by
name. Here is the max() function from earlier, rewritten to use the Arguments object
instead of a rest parameter:
 */
function max(x) {
  let maxValue = -Infinity;
  // Loop through the arguments, looking for, and remembering, the biggest.
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > maxValue) maxValue = arguments[i];
  } // Return the biggest
  return maxValue;
}

/**
 * The Spread Operator for Function Calls
 * 
 * 
 * 
 * The spread operator ... is used to unpack, or “spread out,” the elements of an array
(or any other iterable object, such as strings) in a context where individual values are
expected. We’ve seen the spread operator used with array literals in §7.1.2. The opera‐
tor can be used, in the same way, in function invocations:
let numbers = [5, 2, 10, -1, 9, 100, 1];
Math.min(...numbers) // => -1
Note that ... is not a true operator in the sense that it cannot be evaluated to produce
a value. Instead, it is a special JavaScript syntax that can be used in array literals and
function invocations.
 */

// Destructuring Function Arguments into Parameters
// When you invoke a function with a list of argument values, those values end up being
// assigned to the parameters declared in the function definition. This initial phase of
// function invocation is a lot like variable assignment. So it should not be surprising
// that we can use the techniques of destructuring assignment (see §3.10.3) with
// functions.
// If you define a function that has parameter names within square brackets, you are
// telling the function to expect an array value to be passed for each pair of square
// brackets. As part of the invocation process, the array arguments will be unpacked into
// the individually named parameters. As an example, suppose we are representing 2D
// vectors as arrays of two numbers, where the first element is the X coordinate and the
// second element is the Y coordinate. With this simple data structure, we could write
// the following function to add two vectors:
function vectorAdd(v1, v2) {
  return [v1[0] + v2[0], v1[1] + v2[1]];
}
vectorAdd([1, 2], [3, 4]); // => [4,6]
// The code would be easier to understand if we destructured the two vector arguments
// into more clearly named parameters:
function vectorAdd([x1, y1], [x2, y2]) {
  // Unpack 2 arguments into 4 parameters
  return [x1 + x2, y1 + y2];
}
vectorAdd([1, 2], [3, 4]); // => [4,6]
// Similarly, if you are defining a function that expects an object argument, you can
// destructure parameters of that object. Let’s use a vector example again, except this
// time, let’s suppose that we represent vectors as objects with x and y parameters:
// Multiply the vector {x,y} by a scalar value
function vectorMultiply({ x, y }, scalar) {
  return { x: x * scalar, y: y * scalar };
}
vectorMultiply({ x: 1, y: 2 }, 2); // => {x: 2, y: 4}

// This example of destructuring a single object argument into two parameters is a fairly
// clear one because the parameter names we use match the property names of the
// incoming object. The syntax is more verbose and more confusing when you need to
// destructure properties with one name into parameters with different names. Here’s
// the vector addition example, implemented for object-based vectors:
function vectorAdd(
  { x: x1, y: y1 }, // Unpack 1st object into x1 and y1 params
  { x: x2, y: y2 } // Unpack 2nd object into x2 and y2 params
) {
  return { x: x1 + x2, y: y1 + y2 };
}
vectorAdd({ x: 1, y: 2 }, { x: 3, y: 4 }); // => {x: 4, y: 6}

// Multiply the vector {x,y} or {x,y,z} by a scalar value
function vectorMultiply({ x, y, z = 0 }, scalar) {
  return { x: x * scalar, y: y * scalar, z: z * scalar };
}
vectorMultiply({ x: 1, y: 2 }, 2); // => {x: 2, y: 4, z: 0}

/**
 * Argument Types
 * 
 * 
 * 
 * 
 * 
 * 
JavaScript method parameters have no declared types, and no type checking is per‐
formed on the values you pass to a function. You can help make your code selfdocumenting by choosing descriptive names for function arguments and by
documenting them carefully in the comments for each function. (Alternatively, see
§17.8 for a language extension that allows you to layer type checking on top of regular
JavaScript.)
 */

// As described in §3.9, JavaScript performs liberal type conversion as needed. So if you
// write a function that expects a string argument and then call that function with a
// value of some other type, the value you passed will simply be converted to a string
// when the function tries to use it as a string. All primitive types can be converted to
// strings, and all objects have toString() methods (if not necessarily useful ones), so
// an error never occurs in this case.
// This is not always true, however. Consider again the arraycopy() method shown ear‐
// lier. It expects one or two array arguments and will fail if these arguments are of the
// wrong type. Unless you are writing a private function that will only be called from
// nearby parts of your code, it may be worth adding code to check the types of argu‐
// ments like this. It is better for a function to fail immediately and predictably when
// passed bad values than to begin executing and fail later with an error message that is
// likely to be unclear. Here is an example function that performs type-checking:
// Return the sum of the elements an iterable object a.
// The elements of a must all be numbers.
function sum(a) {
  let total = 0;
  for (let element of a) {
    // Throws TypeError if a is not iterable
    if (typeof element !== 'number') {
      throw new TypeError('sum(): elements must be numbers');
    }
    total += element;
  }
  return total;
}
sum([1, 2, 3]); // => 6
sum(1, 2, 3); // !TypeError: 1 is not iterable
sum([1, 2, '3']); // !TypeError: element 2 is not a number

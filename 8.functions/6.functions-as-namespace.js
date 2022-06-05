/**
 * Functions as Namespaces
 * 
 * 
 * 
 * 
 * Variables declared within a function are not visible outside of the function. For this
reason, it is sometimes useful to define a function simply to act as a temporary name‐
space in which you can define variables without cluttering the global namespace.
Suppose, for example, you have a chunk of JavaScript code that you want to use in a
number of different JavaScript programs (or, for client-side JavaScript, on a number
of different web pages). Assume that this code, like most code, defines variables to
store the intermediate results of its computation. The problem is that since this chunk
of code will be used in many different programs, you don’t know whether the vari‐
ables it creates will conflict with variables created by the programs that use it. The
solution is to put the chunk of code into a function and then invoke the function.
This way, variables that would have been global become local to the function:
* 
*/

function chunkNamespace() {
  // Chunk of code goes here
  // Any variables defined in the chunk are local to this function
  // instead of cluttering up the global namespace.
}
chunkNamespace(); // But don't forget to invoke the function!

// This code defines only a single global variable: the function name chunkNamespace. If
// defining even a single property is too much, you can define and invoke an anony‐
// mous function in a single expression:
(function () {
  // chunkNamespace() function rewritten as an unnamed expression.
  // Chunk of code goes here
})(); // End the function literal and invoke it now.
// This technique of defining and invoking a function in a single expression is used fre‐
// quently enough that it has become idiomatic and has been given the name “immedi‐
// ately invoked function expression.” Note the use of parentheses in the previous code
// example. The open parenthesis before function is required because without it, the
// JavaScript interpreter tries to parse the function keyword as a function declaration
// statement. With the parenthesis, the interpreter correctly recognizes this as a function
// definition expression. The leading parenthesis also helps human readers recognize
// when a function is being defined to be immediately invoked instead of defined for
// later use.
// This use of functions as namespaces becomes really useful when we define one or
// more functions inside the namespace function using variables within that namesapce,
// but then pass them back out as the return value of the namespace function. Functions
// like this are known as closures, and they’re the topic of the next section.

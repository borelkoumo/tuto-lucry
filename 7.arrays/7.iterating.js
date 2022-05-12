/**
 * for/of
 */
// As of ES6, the easiest way to loop through each of the elements of an array(or any
// iterable object) is with the for/of loop, which was covered in detail in §5.4.4:
let letters = [...'Hello world']; // An array of letters
let string = '';
for (let letter of letters) {
  string += letter;
}
string; // => "Hello world"; we reassembled the original text
// The built-in array iterator that the for/of loop uses returns the elements of an array
// in ascending order. It has no special behavior for sparse arrays and simply returns
// undefined for any array elements that do not exist.
// If you want to use a for/of loop for an array and need to know the index of each
// array element, use the entries() method of the array, along with destructuring
// assignment, like this:
let everyother = '';
for (let [index, letter] of letters.entries()) {
  if (index % 2 === 0) everyother += letter; // letters at even indexes
}
everyother; // => "Hlowrd"
// Another good way to iterate arrays is with forEach(). This is not a new form of the
// for loop, but an array method that offers a functional approach to array iteration.
// You pass a function to the forEach() method of an array, and forEach() invokes
// your function once on each element of the array:
let uppercase = '';
letters.forEach((letter) => {
  // Note arrow function syntax here
  uppercase += letter.toUpperCase();
});
uppercase; // => "HELLO WORLD"
// As you would expect, forEach() iterates the array in order, and it actually passes the
// array index to your function as a second argument, which is occasionally useful.
// Unlike the for/of loop, the forEach() is aware of sparse arrays and does not invoke
// your function for elements that are not there.
// §7.8.1 documents the forEach() method in more detail. That section also covers
// related methods such as map() and filter() that perform specialized kinds of array
// iteration.
// You can also loop through the elements of an array with a good old-fashioned for
// loop (§5.4.3):
let vowels = '';
for (let i = 0; i < letters.length; i++) {
  // For each index in the array
  let letter = letters[i]; // Get the element at that index
  if (/[aeiou]/.test(letter)) {
    // if(['a', 'e', 'i', 'o', 'u'].includes(letter)) {}
    // if(['a', 'e', 'i', 'o', 'u'].indexOf(letter) !== -1) {}
    // Use a regular expression test
    vowels += letter; // If it is a vowel, remember it
  }
}
vowels; // => "eoo"
// In nested loops, or other contexts where performance is critical, you may sometimes
// see this basic array iteration loop written so that the array length is only looked up
// once rather than on each iteration. Both of the following for loop forms are
// 7.6 Iterating Arrays | 163idiomatic, though not particularly common, and with modern JavaScript interpreters,
// it is not at all clear that they have any performance impact:
// Save the array length into a local variable
for (let i = 0, len = letters.length; i < len; i++) {
  // loop body remains the same
}
// Iterate backwards from the end of the array to the start
for (let i = letters.length - 1; i >= 0; i--) {
  // loop body remains the same
}
// These examples assume that the array is dense and that all elements contain valid
// data. If this is not the case, you should test the array elements before using them. If
// you want to skip undefined and nonexistent elements, you might write:
for (let i = 0; i < a.length; i++) {
  if (a[i] === undefined) continue; // Skip undefined + nonexistent elements
  // loop body here
}

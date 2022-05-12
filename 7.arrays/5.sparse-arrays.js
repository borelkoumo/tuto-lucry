/**
 * Sparse Arrays
 */
// A sparse array is one in which the elements do not have contiguous indexes starting at
// 0. Normally, the length property of an array specifies the number of elements in the
// array. If the array is sparse, the value of the length property is greater than the num‐
// ber of elements. Sparse arrays can be created with the Array() constructor or simply
// by assigning to an array index larger than the current array length.
let a = new Array(5); // No elements, but a.length is 5.
a = []; // Create an array with no elements and length = 0.
a[1000] = 0; // Assignment adds one element but sets length to 1001.
// We’ll see later that you can also make an array sparse with the delete operator.
// Arrays that are sufficiently sparse are typically implemented in a slower, more
// memory-efficient way than dense arrays are, and looking up elements in such an
// array will take about as much time as regular object property lookup.
// Note that when you omit a value in an array literal (using repeated commas as in
// [1,,3]), the resulting array is sparse, and the omitted elements simply do not exist:
let a1 = [,]; // This array has no elements and length 1. Last virgule is optional
let a2 = [undefined]; // This array has one undefined element
0 in a1; // => false: a1 has no element with index 0
0 in a2; // => true: a2 has the undefined value at index 0

// Dense arrays are the most well known type of Array. They are the "normal" arrays most are familiar with.
// A dense array is an array where the elements are all sequential starting at index 0.
// A sparse array is one in which the elements are not sequential, and they don't always start at 0.
// They are essentially Arrays with "holes", or gaps in the sequence of their indices.
// So an example would be:
let array = [];
array[100] = "Holes now exist";
array.length // 101, but only 1 element
// Why can Arrays be sparse?
// Arrays under the hood in JavaScript are Objects. Their keys are numbers, and their values are the elements.
console.log(typeof arr); // object
console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true
console.log(arr.__proto__.constructor); // constructor	Returns a function that created instance: Array()
console.log(Object.getPrototypeOf(arr).constructor); // f Array()

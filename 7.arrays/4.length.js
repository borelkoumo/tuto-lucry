// Every array has a length property, and it is this property that makes arrays different
// from regular JavaScript objects. For arrays that are dense (i.e., not sparse), the length
// property specifies the number of elements in the array. Its value is one more than the
// highest index in the array:
[].length[('a', 'b', 'c')].length; // => 0: the array has no elements // => 3: highest index is 2, length is 3
// When an array is sparse, the length property is greater than the number of elements,
// and all we can say about it is that length is guaranteed to be larger than the index of
// every element in the array. Or, put another way, an array (sparse or not) will never
// have an element whose index is greater than or equal to its length. In order to main‐
// tain this invariant, arrays have two special behaviors.
// - The first we described above: if
// you assign a value to an array element whose index i is greater than or equal to the
// array’s current length, the value of the length property is set to i+1.
// - The second special behavior that arrays implement in order to maintain the length
// invariant is that, if you set the length property to a non-negative integer n smaller
// than its current value, any array elements whose index is greater than or equal to n
// are deleted from the array:

a = [1, 2, 3, 4, 5]; // Start with a 5-element array.
a.length = 3; // a is now [1,2,3].
a.length = 0; // Delete all elements. a is [].
a.length = 5; // Length is 5, but no elements, like new Array(5)
// You can also set the length property of an array to a value larger than its current
// value. Doing this does not actually add any new elements to the array; it simply cre‐
// ates a sparse area at the end of the array.

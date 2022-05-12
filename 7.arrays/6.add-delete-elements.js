// We’ve already seen the simplest way to add elements to an array: just assign values to
// new indexes:
let a = []; // Start with an empty array.
a[0] = "zero"; // And add elements to it.
a[1] = "one";
// You can also use the push() method to add one or more values to the end of an array:
let a = []; // Start with an empty array
a.push("zero"); // Add a value at the end. a = ["zero"]
a.push("one", "two"); // Add two more values. a = ["zero", "one", "two"]
// Pushing a value onto an array a is the same as assigning the value to a[a.length].
// You can use the unshift() method (described in §7.8) to insert a value at the begin‐
// ning of an array, shifting the existing array elements to higher indexes. The pop()
// method is the opposite of push(): it removes the last element of the array and returns
// it, reducing the length of an array by 1. Similarly, the shift() method removes and
// returns the first element of the array, reducing the length by 1 and shifting all ele‐
// ments down to an index one lower than their current index. See §7.8 for more on
// these methods.

// You can delete array elements with the delete operator, just as you can delete object
// properties:
let a = [1,2,3];
delete a[2]; // a now has no element at index 2
2 in a // => false: no array index 2 is defined
a.length // => 3: delete does not affect array length
// Deleting an array element is similar to (but subtly different than) assigning unde
// fined to that element. Note that using delete on an array element does not alter the
// length property and does not shift elements with higher indexes down to fill in
// the gap that is left by the deleted property. If you delete an element from an array, the
// array becomes sparse.
// As we saw above, you can also remove elements from the end of an array simply by
// setting the length property to the new desired length.
// Finally, splice() is the general-purpose method for inserting, deleting, or replacing
// array elements. It alters the length property and shifts array elements to higher or
// lower indexes as needed. See §7.8 for details.
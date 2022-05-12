// 6.3 Querying and Setting Properties

// To obtain the value of a property, use the dot (.) or square bracket ([]) operators
// described in §4.4. The lefthand side should be an expression whose value is an object.
// If using the dot operator, the righthand side must be a simple identifier that names
// the property. 

object.property
object["property"]

// A concise and idiomatic alternative to get surname or null or undefined
surname = book && book.author && book.author.surname;
// As described in §4.4.1, ES2020 supports conditional property access with ?., which
// allows us to rewrite the previous assignment expression as:
let surname = book?.author?.surname;

/**
 * Objects As Associative Arrays
 */
// The first syntax, using the dot and an identifier, is like the syntax used to access a
// static field of a struct or object in C or Java. The second syntax, using square brackets
// and a string, looks like array access, but to an array indexed by strings rather than by
// numbers. This kind of array is known as an associative array (or hash or map or dic‐
// tionary). JavaScript objects are associative arrays, and this section explains why that is
// important.

// On the other hand, when you access a property of an object with the [] array nota‐
// tion, the name of the property is expressed as a string. Strings are JavaScript data‐
// types, so they can be manipulated and created while a program is running. So, for
// example, you can write the following code in JavaScript:
let addr = "";
for(let i = 0; i < 4; i++) {
addr += customer[`address${i}`] + "\n";
}

/**
 * Inheritance
 */

// JavaScript objects have a set of “own properties,” and they also inherit a set of proper‐
// ties from their prototype object. To understand this, we must consider property
// access in more detail. The examples in this section use the Object.create() function
// to create objects with specified prototypes. We’ll see in Chapter 9, however, that every
// time you create an instance of a class with new, you are creating an object that inherits
// properties from a prototype object


// Suppose you query the property x in the object o. If o does not have an own property
// with that name, the prototype object of o1 is queried for the property x. If the proto‐
// type object does not have an own property by that name, but has a prototype itself,
// the query is performed on the prototype of the prototype. This continues until the
// property x is found or until an object with a null prototype is searched. As you can
// see, the prototype attribute of an object creates a chain or linked list from which
// properties are inherited:
let o = {}; // o inherits object methods from Object.prototype
o.x = 1; // and it now has an own property x.
let p = Object.create(o); // p inherits properties from o and Object.prototype
p.y = 2; // and has an own property y.
let q = Object.create(p); // q inherits properties from p, o, and...
q.z = 3; // ...Object.prototype and has an own property z.
let f = q.toString(); // toString is inherited from Object.prototype
q.x + q.y // => 3; x and y are inherited from o and p
// Now suppose you assign to the property x of the object o. If o already has an own
// (non-inherited) property named x, then the assignment simply changes the value of
// this existing property. Otherwise, the assignment creates a new property named x on
// the object o. If o previously inherited the property x, that inherited property is now
// hidden by the newly created own property with the same name
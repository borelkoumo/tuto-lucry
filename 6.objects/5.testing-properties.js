// https://www.tutorialsteacher.com/javascript/javascript-hoisting


// JavaScript objects can be thought of as sets of properties, and it is often useful to be
// able to test for membership in the set—to check whether an object has a property
// with a given name.You can do this with
//   - the in operator,
//   - the hasOwnProperty()
//   - and propertyIsEnumerable() methods,
//   - or simply by querying the property

let o = { x: 1 };
'x' in o; // => true: o has an own property "x"
'y' in o; // => false: o doesn't have a property "y"
'toString' in o; // => true: o inherits a toString property

// The hasOwnProperty() method of an object tests whether that object has an own
// property with the given name.It returns false for inherited properties:

o.hasOwnProperty('x'); // => true: o has an own property x
o.hasOwnProperty('y'); // => false: o doesn't have a property y
o.hasOwnProperty('toString'); // => false: toString is an inherited property

// The propertyIsEnumerable() refines the hasOwnProperty() test. It returns true
// only if the named property is an own property and its enumerable attribute is true.
// Certain built-in properties are not enumerable. Properties created by normal Java‐
// Script code are enumerable unless you’ve used one of the techniques shown in §14.1
// to make them non-enumerable.

o.propertyIsEnumerable('x'); // => true: o has an own enumerable property x
o.propertyIsEnumerable('toString'); // => false: not an own property
Object.prototype.propertyIsEnumerable('toString'); // => false: not enumerable

// Instead of using the in operator, it is often sufficient to simply query the property and
// use !== to make sure it is not undefined:

o.x !== undefined; // => true: o has a property x
o.y !== undefined; // => false: o doesn't have a property y
o.toString !== undefined; // => true: o inherits a toString property
// There is one thing the in operator can do that the simple property access technique
// shown here cannot do. in can distinguish between properties that do not exist and
// properties that exist but have been set to undefined. Consider this code:

o.x !== undefined; // => false: property exists but is undefined
o.y !== undefined; // => false: property doesn't even exist
'x' in o; // => true: the property exists
'y' in o; // => false: the property doesn't exist
delete o.x; // Delete the property x
'x' in o; // => false: it doesn't exist anymore

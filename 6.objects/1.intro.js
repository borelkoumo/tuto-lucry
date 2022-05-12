// An object is a ********composite value: it aggregates multiple values (primitive values or
// other objects) and allows you to store and retrieve those values by name. An object is
// an unordered collection of properties, each of which has a name and a value.

// An object is more than a simple string-to-value map, however. In addition to
// maintaining its own set of properties, a JavaScript object also inherits the properties
// of another object, known as its “prototype.” The methods of an object are typically
// inherited properties, and this “prototypal inheritance” is a key feature of JavaScript.
const o = {
  x: 2, // writable, enumerable, configurable
  y: 'borel', // writable, enumerable, configurable
  z: true, // writable, enumerable, configurable
};

o.toString();

// *********Any value in JavaScript that is not a string, a number, a Symbol, or true, false, null,
// or undefined is an object. And even though strings, numbers, and booleans are not
// objects, they can behave like immutable objects.

// Recall from §3.8 that ***********objects are mutable and manipulated by reference rather than by
// value. If the variable x refers to an object and the code let y = x; is executed, the
// variable y holds a reference to the same object, not a copy of that object. Any
// modifications made to the object through the variable y are also visible through the
// variable x.

// In addition to its name and value, each property has three property attributes:

// • The writable attribute specifies whether the value of the property can be set.
// • The enumerable attribute specifies whether the property name is returned by a
// for/in loop.
// • The configurable attribute specifies whether the property can be deleted and
// whether its attributes can be altered.

// The JavaScript methods for querying and setting the attributes of a property use an
// object called a property descriptor to represent the set of four attributes.
// Returns {value: 1, writable:true, enumerable:true, configurable:true}
Object.getOwnPropertyDescriptor({ x: 1 }, 'x');

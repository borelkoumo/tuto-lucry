/**
 * Shorthand
 *
 */
let x = 1,
  y = 2;
let o = {
  x: x,
  y: y,
};
// In ES6 and later, you can drop the colon and one copy of the identifier and end up
// with much simpler code:
(x = 1), (y = 2);
o = { x, y };
o.x + o.y; // => 3

/**
 * Computed property name
 */
// Sometimes you need to create an object with a specific property, but the name of that
// property is not a compile-time constant that you can type literally in your source
// code. Instead, the property name you need is stored in a variable or is the return
// value of a function that you invoke. You can’t use a basic object literal for this kind of
// property. Instead, you have to create an object and then add the desired properties as
// an extra step:
let PROPERTY_NAME = 'p1';
function computePropertyName() {
  return 'p' + 2;
}
o = {};
o[PROPERTY_NAME] = 1;
o[computePropertyName()] = 2;
// It is much simpler to set up an object like this with an ES6 feature known as computed
// properties that lets you take the square brackets from the preceding code and move
// them directly into the object literal:
PROPERTY_NAME = 'p1';
function computePropertyName() {
  return 'p' + 2;
}
let p = {
  [PROPERTY_NAME]: 1,
  [computePropertyName()]: 2,
};
p.p1 + p.p2; // => 3

/**
 * Use symbols as property names
 */
// The computed property syntax enables one other very important object literal fea‐
// ture. In ES6 and later, property names can be strings or symbols. If you assign a sym‐
// bol to a variable or constant, then you can use that symbol as a property name using
// the computed property syntax:
const extension = Symbol('my extension symbol');
o = {
  [extension]: {
    /* extension data stored in this object */
  },
};
o[extension].x = 0; // This won't conflict with other properties of o
// As explained in §3.6, Symbols are opaque values. You can’t do anything with them
// other than use them as property names. Every Symbol is different from every other
// Symbol, however, which means that Symbols are good for creating unique property
// names. Create a new Symbol by calling the Symbol() factory function. (Symbols are
// primitive values, not objects, so Symbol() is not a constructor function that you
// invoke with new.) The value returned by Symbol() is not equal to any other Symbol or
// other value. You can pass a string to Symbol(), and this string is used when your
// Symbol is converted to a string. But this is a debugging aid only: two Symbols created
// with the same string argument are still different from one another.

// The point of Symbols is not security, but to define a safe extension mechanism for
// JavaScript objects. If you get an object from third-party code that you do not control
// and need to add some of your own properties to that object but want to be sure that
// your properties will not conflict with any properties that may already exist on the
// object, you can safely use Symbols as your property names. If you do this, you can
// also be confident that the third-party code will not accidentally alter your symboli‐
// cally named properties. (That third-party code could, of course, use Object.getOwn
// PropertySymbols() to discover the Symbols you’re using and could then alter or
// delete your properties. This is why Symbols are not a security mechanism.)

/**
 * Spead operator
 */
// In ES2018 and later, you can copy the properties of an existing object into a new
// object using the “spread operator” ... inside an object literal:
let position = { x: 0, y: 0 };
let dimensions = { width: 100, height: 75 };
let rect = { ...position, ...dimensions };
rect.x + rect.y + rect.width + rect.height; // => 175
// In this code, the properties of the position and dimensions objects are “spread out”
// into the rect object literal as if they had been written literally inside those curly
// braces. Note that this ... syntax is often called a spread operator but is not a true
// JavaScript operator in any sense.
// If the object that is spread and the object it is being spread into both have a property
// with the same name, then the value of that property will be the one that comes last:
// Also note that the spread operator only spreads the own properties of an object, not
// any inherited ones

/**
 * Shorthand method
 */
// When a function is defined as a property of an object, we call that function a method
// (we’ll have a lot more to say about methods in Chapters 8 and 9). Prior to ES6, you
// would define a method in an object literal using a function definition expression just
// as you would define any other property of an object:
let square = {
  area: function () {
    return this.side * this.side;
  },
  side: 10,
};
square.area(); // => 100
// In ES6, however, the object literal syntax (and also the class definition syntax we’ll see
// in Chapter 9) has been extended to allow a shortcut where the function keyword and
// the colon are omitted, resulting in code like this:
square = {
  area() {
    return this.side * this.side;
  },
  side: 10,
};
square.area(); // => 100

/**
 * Getters and setters
 */
// All of the object properties we’ve discussed so far in this chapter have been data prop‐
// erties with a name and an ordinary value. JavaScript also supports accessor properties,
// which do not have a single value but instead have one or two accessor methods: a
// getter and/or a setter.
// When a program queries the value of an accessor property, JavaScript invokes the get‐
// ter method (passing no arguments). The return value of this method becomes the
// value of the property access expression. When a program sets the value of an accessor
// property, JavaScript invokes the setter method, passing the value of the righthand side
// of the assignment. This method is responsible for “setting,” in some sense, the prop‐
// erty value.The return value of the setter method is ignored.

// If a property has both a getter and a setter method, it is a read/write property. If it has
// only a getter method, it is a read-only property. And if it has only a setter method, it
// is a write-only property (something that is not possible with data properties), and
// attempts to read it always evaluate to undefined

// The accessor methods defined above simply get and set the value of a data property,
// and there is no reason to prefer the accessor property over the data property. But as a
// more interesting example, consider the following object that represents a 2D Carte‐
// sian point. It has ordinary data properties to represent the x and y coordinates of the
// point, and it has accessor properties that give the equivalent polar coordinates of the
// point:
p = {
  // x and y are regular read-write data properties.
  x: 1.0,
  y: 1.0,
  // r is a read-write accessor property with getter and setter.
  // Don't forget to put a comma after accessor methods.
  get r() {
    return Math.hypot(this.x, this.y);
  },
  set r(newvalue) {
    let oldvalue = Math.hypot(this.x, this.y);
    let ratio = newvalue / oldvalue;
    this.x *= ratio;
    this.y *= ratio;
  },
  // theta is a read-only accessor property with getter only.
  get theta() {
    return Math.atan2(this.y, this.x);
  },
};
p.r; // => Math.SQRT2
p.theta; // => Math.PI / 4

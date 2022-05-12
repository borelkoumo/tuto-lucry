/**
 *
 * The toString() Method 
 *
 **/

// The toString() method takes no arguments; it returns a string that somehow repre‐
// sents the value of the object on which it is invoked. JavaScript invokes this method of
// an object whenever it needs to convert the object to a string. This occurs, for example,
// when you use the + operator to concatenate a string with an object or when you pass
// an object to a method that expects a string.
// The default toString() method is not very informative (though it is useful for deter‐
// mining the class of an object, as we will see in §14.4.3). For example, the following
// line of code simply evaluates to the string “[object Object]”:
let s = { x: 1, y: 1 }.toString(); // s == "[object Object]"
// Because this default method does not display much useful information, many classes
// define their own versions of toString(). For example, when an array is converted to
// a string, you obtain a list of the array elements, themselves each converted to a string,
// and when a function is converted to a string, you obtain the source code for the func‐
// tion. You might define your own toString() method like this:
point = {
  x: 1,
  y: 2,
  toString: function () {
    return `(${this.x}, ${this.y})`;
  },
};
String(point); // => "(1, 2)": toString() is used for string conversions

/**
 *
 * The toLocaleString() Method */

// In addition to the basic toString() method, objects all have a toLocaleString().
// The purpose of this method is to return a localized string representation of the object.
// The default toLocaleString() method defined by Object doesn’t do any localization
// itself: it simply calls toString() and returns that value. The Date and Number classes
// define customized versions of toLocaleString() that attempt to format numbers,
// dates, and times according to local conventions. Array defines a toLocaleString()
// method that works like toString() except that it formats array elements by calling
// their toLocaleString() methods instead of their toString() methods. You might do
// the same thing with a point object like this:
point = {
  x: 1000,
  y: 2000,
  toString: function () {
    return `(${this.x}, ${this.y})`;
  },
  toLocaleString: function () {
    return `(${this.x.toLocaleString()}, ${this.y.toLocaleString()})`;
  },
};
point.toString(); // => "(1000, 2000)"
point.toLocaleString(); // => "(1,000, 2,000)": note thousands separators

/**
 *
 * The valueOf() Method*/

// The valueOf() method is much like the toString() method, but it is called when
// JavaScript needs to convert an object to some primitive type other than a string—
// typically, a number. JavaScript calls this method automatically if an object is used in a
// context where a primitive value is required. The default valueOf() method does
// nothing interesting, but some of the built-in classes define their own valueOf()
// method. The Date class defines valueOf() to convert dates to numbers, and this
// allows Date objects to be chronologically compared with < and >. You could do some‐
// thing similar with a point object, defining a valueOf() method that returns the dis‐
// tance from the origin to the point:
point = {
  x: 3,
  y: 4,
  valueOf: function () {
    return Math.hypot(this.x, this.y);
  },
};
Number(point); // => 5: valueOf() is used for conversions to numbers
point > 4; // => true
point > 5; // => false
point < 6; // => true

/**
 *
 * The toJSON() Method*/
// Object.prototype does not actually define a toJSON() method, but the JSON.string
// ify() method (see §6.8) looks for a toJSON() method on any object it is asked to
// serialize. If this method exists on the object to be serialized, it is invoked, and the
// return value is serialized, instead of the original object. The Date class (§11.4) defines
// a toJSON() method that returns a serializable string representation of the date. We
// could do the same for our Point object like this:
let point = {
  x: 1,
  y: 2,
  toString: function () {
    return `(${this.x}, ${this.y})`;
  },
  toJSON: function () {
    return this.toString();
  },
};
JSON.stringify([point]); // => '["(1, 2)"]'

/**
 *  Deleting Properties
 * */

// The delete operator (§4.13.4) removes a property from an object. Its single operand
// should be a property access expression. Surprisingly, delete does not operate on the
// value of the property but on the property itself:

delete book.author; // The book object now has no author property.
delete book["main title"]; // Now it doesn't have "main title", either.

// The delete operator only deletes own properties, not inherited ones. (To delete an
// inherited property, you must delete it from the prototype object in which it is defined.
// Doing this affects every object that inherits from that prototype.)
// A delete expression evaluates to true if the delete succeeded or if the delete had no
// effect (such as deleting a nonexistent property). delete also evaluates to true when
// used(meaninglessly) with an expression that is not a property access expression:

let o = {x: 1}; // o has own property x and inherits property toString
delete o.x // => true: deletes property x
delete o.x // => true: does nothing (x doesn't exist) but true anyway
delete o.toString // => true: does nothing (toString isn't an own property)
delete 1 // => true: nonsense, but true anyway
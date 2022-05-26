/** 
 * JavaScript objects were covered in Chapter 6. That chapter treated each ************object as a
unique set of properties, different from every other object. It is often useful, however,
  to define a **********class of objects that share certain properties. Members, or instances, of the
class have their own properties to hold or define their state, but they also have meth‐
ods that define their behavior.These *************methods are defined by the class and shared by
all instances.

In JavaScript, ********************classes use prototype - based inheritance: if two objects inherit proper‐
ties(generally function- valued properties, or methods) from the same prototype,
  then we say that those objects are *************instances of the same class.That, in a nutshell, is
how JavaScript classes work. 

If two objects inherit from the same prototype, this typically (but not necessarily)
means that they were created and initialized by the same constructor function or fac‐
tory function.

JavaScript has always allowed the definition of classes. ES6 introduced a brand-new
syntax (including a class keyword) that makes it even easier to create classes. These
new JavaScript classes work in the same way that old-style classes do, and this chapter
starts by explaining the old way of creating classes because that demonstrates more
clearly what is going on behind the scenes to make classes work.
*/
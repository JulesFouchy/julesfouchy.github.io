---
title: Unit Type-System
authors: jules
---

How often have you used an angle in radians when the function was expecting it in degrees, or vice-versa? I personnaly have, way too often. And so I decided that that time was over. We need to enforce these kind of checks in the signature of our functions and our type-system!

<!--truncate-->

```C++
void rotate(Radian angle);
void rotate(Degree angle);

rotate(60_deg);  // User-defined litteral that creates a Degree
rotate(1.3_rad); // User-defined litteral that creates a Radian
```

How nice would such an API be? No more confusion as to what type you are supposed to use ; and the compiler can check it too.

We can do the same for things like pixels vs. screen coordinates vs. normalized position, and much more! Maybe even space conversion (world space vs. object space. vs view space vs light space vs. *etc.*): applying a matrix of type *World2View* to a vector of type *World* would return a vector of type *View*.

We could also implement all the nice things we are used to in physics: you cannot add meters and seconds, but you can divide meters per seconds to get a velocity. (NB: I have no idea yet as to how to implement the magic the *builds* a type "meter/second" from the types "meter" and "second")
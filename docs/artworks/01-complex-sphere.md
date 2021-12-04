---
title: Complex Sphere
---

<iframe width="962" height="541" src="https://www.youtube.com/embed/mCS6Ye1YN5Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

*A single fragment shader ([available here](https://pastebin.com/29tUCsef)), rendered using [CoolLab](https://coollibs.github.io/home/docs/lab/)*.

What you see here is a simple sphere, plus two rendering tricks.
The main one is inspired by **Conformal Geometric Algebra**, an alternative way of doing geometry.

**Geometric Algebra** is a theory that generalizes many concepts such as complex numbers, quaternions, dual numbers and many more. It offers a very abstract and powerful way of working with geometric primitives.

In particular, **3D Conformal Geometric Algebra** is a 32-dimensional vector space where both points, pairs of points, directions, lines, planes, circles and spheres can be natively represented as (32-dimensional) vectors. Using the many products defined on this algebra we can express usual operations very easily.

For example we can compute the two intersection points between a ray and a sphere using the so-called *outer product* between the dual representations of our objects:

```intersectionPtPair = dual(outer(dualSphere, dual(rayLine)));```

And note that the two points are represented as a single vector! From there on we can extract the two points from the pair
and proceed with our rendering as usual.

But now comes the very interesting part: what happens if there is no actual intersection?

Well, we then obtain an *imaginary* point pair (the "dot product" of the vector with itself is negative).
But it still represents a pair of points nonetheless! We could check the sign of the "dot product" and discard the negative ones
to get a traditional sphere rendering.
Or we could consider those *imaginary* point pairs as valid ones and still render them as if they were part of the sphere!

And there you are. This is what I did to get this interesting result outside of the regular sphere, and this is why I called it
a *complex* sphere.

The second rendering trick is more mundane.
What you see rendered is the normals of the sphere. But to make sure that negative values still appear, I take an absolute value.
And finally to get brighter colors I apply a square root, and that's it!
---
title: Int or Float?
authors: jules
---

After a lot of trouble and bugs, I have come to the conclusion that you sould use floats most of the time.

The reason is simple : when you are doing maths, it is rare that the logic of your calculations will only output integers.

<!--truncate-->

Integers are good for one thing : absolutely perfect 100% exactness. This properly is rarely required ; the only case I typically encounter is indexing into an array. But even though they are good at representing *some* numbers exactly, they are very bad at doing calculations in general because they need to *round* to the nearest integer. And in most cases I much rather have 3 / 2 = 1.5000000000001 than 3 / 2 = 1 ; this second calculation is really not what you want in 99% of the cases, except if you are specifically dealing with an integer reasoning. And, let me reiterate it, there is almost no problem or domain model were the only sensible values are integers. Most of the time we want the middle of 1 and 4 to be 2.5, not 2.

One common misconception is that, when positionning shapes in space, since the coordinates are expressed in pixels, people tend to use integer to represent them. But this is wrong, and I realized it as I was doing a fractal.

Why is it so tilted ? Because I am constantly rounding my position to the nearest integer as I trace the fractal, and the errors accumulate to some significant amounts over time.
The rounding to an integer should be done at the last moment, when rendering. Before that we want to be as exact as possible about are actual position in space, and integers are absolutely not fit for that job.
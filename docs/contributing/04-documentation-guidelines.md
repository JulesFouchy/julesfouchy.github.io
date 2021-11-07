---
title: Documentation guidelines
---

## Write documentation

We use Doxygen-style documentation. I would suggest you install this extension for VS Code : [cschlosser.doxdocgen](https://marketplace.visualstudio.com/items?itemName=cschlosser.doxdocgen)

Then you simply need to type `/**` and press *enter* to generate the documenting comment for the class or function.

## Be close to the code

The documentation should be as close as possible to the thing it explains. This means that function and class documentation should be just above their declaration. To document the whole module there is a `_README.md` file inside each folder (see [Document your design decisions](#document-your-design-decisions) to know what to put in that readme). 

## Be complete

Try to be as descriptive as possible in your documentation: mention any hickups and subtleties, and give an example if the usage is not obvious.

```cpp
/**
 * @brief Returns the Color of the (x, y) pixel. No bound checking is done, so undefined behaviour will occur if x is not inside [0, width() - 1] or y is not inside [0, height() - 1]
 * 
 * @param x x coordinate of the pixel (0 is at the left of the image)
 * @param y y coordinate of the pixel (0 is at the bottom of the image)
 */
Color& color_at(unsigned int x, unsigned int y) { return _pixel_colors[x + y * _width]; }
```

## Document only when necessary

There is no point in writting documentation if you can't do a better job than the function name already does. Only write documentation when you have something meaningful to add (which should be most of the time).

For example, this is some useless documentation:

```cpp
/**
 * @brief Returns the minimum of the two numbers
 * 
 * @param a The first number to compare
 * @param b The second number to compare
 */
int min(int a, int b);
```

while this one is useful:

```cpp
/**
 * @brief Uses < to compare the two arguments.
 * /!\ Returns a reference to one of the arguments, so you can't pass a temporary value into this function or you will get a dangling reference.
 * For example `const std::string& res = min("yo"s, my_string + "!");` is a bug because `my_string + "!"` creates a temporary that will be destroyed at the end of the line while `res` might be pointing to it.
 */
template<typename T>
T& min(T& a, T& b);
```

## Document your design decisions

Each module is accompanied by a `_README.md` file. This is where we (and you) document our design process, the options we considered, the choices we made and why we made them.

It is very useful to understand the intent of the people that came before you, which in turn helps you make a more educated decision as to how to work with the code. For example if the readme says *"I did it this way because I couldn't find any better solution"* then you know that you can safely rewrite the code and that the strange bits are not here for any particular reason. On the other hand if it says that the naive and simple solution actually doesn't work, then you know that the complex code is here for a reason, and if you still try to improve it at least you won't fall in the same pitfalls as the previous implementer did.

It is a great way of creating and sharing knowledge: these resources will surely prove useful to many one day, and forcing you to write down the choices you made should have you question whether they are really the best and strive to improve your own design.

This is also a great place to explain the overall architecture of the module, the relation between classes, where to look first *etc.*.
The readme should be the first place to look when you want to understand a module.
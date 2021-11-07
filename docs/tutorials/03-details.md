---
title: Details you need to know
---

## imgui.ini

The ```imgui.ini``` file stores the position and size of our ImGui windows. It is nice to have it on the repo so that anyone cloning it will get a nice UI layout from the get go.

But you might want to do 

```
git update-index --assume-unchanged imgui.ini
```

to ignore it from your commits (It does change every time you move a window in your app, so basically it would be present in every commit).

You should only commit it once in a while, when new windows are added for example.

## Logging

To log to the console, use
```cpp
Log::info("You can use a variable, or a string like this one, which can be templated with some curly braces like so : {} {}", variable1ThatWillGoInTheCurlyBraces, variable2);
Log::warn("same parameters");
Log::error("same parameters");
```
The difference is that ```info``` outputs green text, ```warn``` is yellow and ```error``` is red.
Also, ```error``` will trigger a breakpoint (you can use ```error_without_breakpoint``` instead if you don't want that behaviour).

Note that those logs will be removed in release builds.
If you want to display a message to the end user, use ```Log::ToUser``` instead of ```Log``` (you will need to include ```<Cool/Log/ToUser.h> ```).

## OpenGL

### GLDebug

Always wrap your OpenGL calls in the ```GLDebug(...)``` macro. It will add debug checks even if your computer doesn't support modern OpenGL debugging.

```cpp
GLDebug(GLuint program_id = glCreateProgram());
GLDebug(glLinkProgram(program_id));
GLDebug(glValidateProgram(program_id));
```

### Modern Debugging

Modern debugging requires OpenGL 4.3 or later. If you have it then it will happen automatically.

You can ignore some warnings and control the look of the messages in the ```Window``` module, under ```internal/GLDebugCallback.h```.

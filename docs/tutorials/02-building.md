---
title: Compiling your first project
---

## Clone

Since we use Git submodules you need to clone them alongside the project. The easiest way is to use the command
```
git clone --recursive https://github.com/CoolLibs/Demo
```

If later on while compiling you get an error like
```cmake
include could not find requested file:
  Cool/cmake/IncludeMe.cmake
```

it most likely means you forgot the submodules. To grab them after having cloned the project, use 
```
git submodule update --init --recursive
```

## Build

Install [CMake](https://cmake.org/download/). If you already have it, make sure you have version 3.16 or later.

Then, I recommend this VS Code extension : [ms-vscode.cmake-tools](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cmake-tools).

Finally you will need to setup the extension with a compiler. Here is [the tutorial](https://code.visualstudio.com/docs/cpp/cmake-linux). It is based on Linux but at the bottom of the page you will find the explanations to adapt it for [Windows](https://code.visualstudio.com/docs/cpp/config-msvc) and [Mac](https://code.visualstudio.com/docs/cpp/config-clang-mac).
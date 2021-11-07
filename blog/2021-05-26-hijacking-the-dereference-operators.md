---
title: Hijacking the Dereference Operators
authors: jules
---

I often end up writting classes that wrap other classes or primitive types.

```cpp
struct MyData {
      float field1;
      float field2;
      float field3;
      float field4;
      float field5;

      void do_something();
};
```

```cpp
class MyDataWrapper {
public:
      void do_something_else();

private:
      MyData _my_data;
};
```


And for a long time I was annoyed when needing to access the underlying wrapped class. At first I was writting one getter function for each method or field of the wrapped class that I still needed to access.

<!--truncate-->

```cpp
class MyDataWrapper {
public:
      void do_something_else();
      // -- Getters --
      float field1() { return _my_data.field1; }
      float field2() { return _my_data.field2; }
      float field3() { return _my_data.field3; }
      float field4() { return _my_data.field4; }
      float field5() { return _my_data.field5; }
      void do_something() { _my_data.do_something(); }
      // -- Getters --

private:
      MyData _my_data;
};
```

But that was a lot of boilerplate code to write and I couldn't stand it. It get's especially annoying when you do some refactor or API change, because now you have to propagate the changes in two classes instead of one.

 So I moved to having only one getter function, typically called *get*, that would return a reference to the whole wrapped class.

 ```cpp
class MyDataWrapper {
public:
      void do_something_else();
      // -- Getters --
      const MyData& get() const { return _my_data; }
      // -- Getters --

private:
      MyData _my_data;
};
```

In my opinion this is already much better because the implementor of the wrapper class needs to write way less code, and doesn't need to maintain it when the wrapped class changes.

But the API isn't as nice anymore ! We moved from

```cpp
my_data_wrapper.do_something();
```

to

```cpp
my_data_wrapper.get().do_something();
```

Basically, no matter what I call my getter function, it is still too long of a name and clutters the code.

So here comes the ultimate solution : **Overload the dereference operators** ! This makes the API only one character longuer than the original solution, and doesn't require the implementor to write a lot of boilerplate code either ! The best of both worlds !

```cpp
my_data_wrapper->do_something();
```

The only downside I can think of is that the syntax can be confusing for people who are not used to this pattern ; but I swear that when you are used to it, this is the greatest thing ever !

For reference, this is how you would overload the dereference operators :

```cpp
class MyDataWrapper {
public:
      void do_something_else();
      // -- Getters --
      const MyData& operator* () const { return _my_data; }
      const MyData* operator->() const { return &operator*(); } // Reuse the implementation of operator*
      // -- Getters --

private:
      MyData _my_data;
};
```

You can see this pattern in action in the [*Params* module](https://github.com/CoolLibs/Params/blob/main/src/Cool/Params/Params.h) for example.

This is also used in [std::optional](https://en.cppreference.com/w/cpp/utility/optional) by the way !
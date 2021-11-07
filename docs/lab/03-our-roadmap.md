---
title: "Our Roadmap"
toc: true
---

## Layer system

How do we combine the outputs from our different system / from different instances of the same system.
Do we use a classic layer structure, or a graph ?

## Audio

Import audio files and play them along the image generation (ideal to produce audio clips). Retrieve data from the audio to drive the images (pitch, bpm, volume etc.)

We can search a lib in this list : https://awesomeopensource.com/projects/audio-library
I currently found https://github.com/mackron/miniaudio for audio playback
and https://www.kfrlib.com/newdocs/index.html or https://aubio.org/ for audio analysis.

## Parameter system

Data usable across the different systems.

## History / Multiple histories in parallel ?

## Simple compute shaders

## Project save

## Post-processing

## Color spaces ?

## Bezier instead of interpolation for function curves (a.k.a. RGB curves).

See [Bezier Rgb Curves](https://github.com/CoolLibs/Cool/blob/main/src/Cool/RgbCurve/_README.md)

And how do we send these curves to the shader ? Do we bake it into a texture ?

## Premultiplied alpha

## Improve timeline navigation / display

## Keybinds remapping (inspired from Django ?)

## Abstract GPU  API over OpenGL and Vulkan

## Scripting

Everythin that is doable from the UI should be doable via scripting.

For the language I really like Typescript, but all options should be considered.

## Node system

## Ray Marching

### Write many nodes

### Setup a material system

## Shaders

### Write libraries of shader functions

### Good include system / meta language on top of glsl

### Glsl Parsing !

-> Look at shaderc (https://github.com/google/shaderc, https://www.youtube.com/watch?v=SXDlZRDjtXg) or naga (https://github.com/gfx-rs/naga)
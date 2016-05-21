# Rc-iscroll

Simulate iscroll component for [react](https://facebook.github.io/react/)

Using [iscroll-component](https://www.npmjs.com/package/iscroll-component) inside.

Build with [webpack](https://webpack.github.io/) and [CSS Modules](https://github.com/css-modules/css-modules)

[Story book](https://rc-component.github.io/iscroll/)

## Usage

```
<Iscroll
  className="scrollable"
  barClass="my-iscroll-bar">
  <p>Children inside iscroll</p>
</Iscroll>
```

## Props

name   | type   | default    | description
-------| ------ | ---------- | ------------
handlebar | boolean| true      | whether use handlebar
barClass  | string | 'handlebar' class from src/style.css  | style for handlebar element
onStart | func | null | on start event handler
onScroll | func | null | on scroll event handler
onRelease | func | null | on release event handler
onScrollend | func | null | on scrollend event handler

Other props goes to underneath div React.element.

# License

Copyright 2016 chemzqm@gmail.com

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE
OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

# Craco Glslify Plugin

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

This is a [craco](https://github.com/sharegate/craco) plugin that makes it easy to use the webpack [glslify-loader](https://github.com/stackgl/glslify-loader) with [create-react-app](https://facebook.github.io/create-react-app/) version >= 2.

## Installation

```bash
$ yarn add craco-glslify-loader

# OR

$ npm install --save craco-raw-loader
```

## Basic Usage

`craco-glslify-loader` expect optional `test` and `exclude` options containing your regex selector.

default options:

```js
test: /\.(glsl|vs|fs|vert|frag)$/,
exclude: /node_modules/,
```

Here is a simple `craco.config.js` example:

```js
const glslifyLoader = require("craco-glslify-loader");

module.exports = {
  plugins: [glslifyLoader],
};
```

# With Typescript

`craco-glslify-loader` has it's default types that cover all the default extensions.

Here's how they can be extended in your app

```ts
/* src/craco-glslify-loader.d.ts */
/// <reference types="craco-glslify-loader" />
```

# dnathandillon.com

The portfolio website of D. Nathan (Nate) Dillon.

## Requirements

- Ruby
- [Bundler](http://bundler.io/)
- [npm](https://www.npmjs.com/)
- [Grunt](http://gruntjs.com/)

## Instructions

1. Install Jekyll and other dependencies:

    ```
    bundle install
    ```

2. Install npm packages:

    ```
    npm install
    ```

## Commands

<dl>
  <dt>`grunt`</dt>
  <dd>The default command: runs the `grunt serve` command</dd>
  <dt>`grunt serve`</dt>
  <dd>Runs `grunt sass`, `grunt postcss`, `grunt watch`, and `jekyll serve`</dd>
  <dt>`grunt build`</dt>
  <dd>Runs `jekyll build`, `grunt sass`, and `grunt postcss`</dd>
  <dt>`grunt sass`</dt>
  <dd>Builds the Sass files into CSS</dd>
  <dt>`grunt postcss`</dt>
  <dd>Runs Autoprefixer on the CSS</dd>
  <dt>`grunt watch`</dt>
  <dd>Watches Sass files for changes</dd>
  <dt>`jekyll build`</dt>
  <dd>Builds the Jekyll files into HTML and other static resources</dd>
  <dt>`jekyll serve`</dt>
  <dd>Runs the Jekyll web server</dd>
</dl>

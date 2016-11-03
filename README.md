# dnathandillon.com

The portfolio website of D. Nathan (Nate) Dillon.

## Running Locally

### Requirements

- Ruby
- [Bundler](http://bundler.io/)
- [npm](https://www.npmjs.com/)
- [Grunt](http://gruntjs.com/)

### Instructions

1. Install Jekyll and other dependencies:

    ```
    bundle install
    ```

2. Install npm packages:

    ```
    npm install
    ```

### Commands

<dl>
  <dt><code>grunt</code></dt>
  <dd>The default command: runs the <code>grunt serve</code> command</dd>
  <dt><code>grunt serve</code></dt>
  <dd>Runs <code>grunt sass</code>, <code>grunt postcss</code>, <code>grunt watch</code>, and <code>jekyll serve</code></dd>
  <dt><code>grunt build</code></dt>
  <dd>Runs <code>jekyll build</code>, <code>grunt sass</code>, and <code>grunt postcss</code></dd>
  <dt><code>grunt sass</code></dt>
  <dd>Builds the Sass files into CSS</dd>
  <dt><code>grunt postcss</code></dt>
  <dd>Runs Autoprefixer on the CSS</dd>
  <dt><code>grunt watch</code></dt>
  <dd>Watches Sass files for changes</dd>
  <dt><code>jekyll build</code></dt>
  <dd>Builds the Jekyll files into HTML and other static resources</dd>
  <dt><code>jekyll serve</code></dt>
  <dd>Runs the Jekyll web server</dd>
</dl>

# dnathandillon.com

The portfolio website of D. Nathan (Nate) Dillon.

## Running Locally

### Requirements

- Ruby
- [Bundler](http://bundler.io/)
- [npm](https://www.npmjs.com/)
- [Grunt](http://gruntjs.com/)
- [LiveReload browser extension](http://livereload.com/extensions/) (for optional live reloading)

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

#### `grunt`

The default command: runs the `grunt serve` command

#### `grunt serve`

Runs `grunt sass`, `grunt postcss`, `grunt watch`, and `jekyll serve`

#### `grunt build`

Runs `jekyll build`, `grunt sass`, and `grunt postcss`

#### `grunt dist`

Prepares files for distribution

#### `grunt sass`

Builds the Sass files into CSS

#### `grunt postcss`

Runs Autoprefixer on the CSS

#### `grunt watch`

Watches Sass files for changes

#### `jekyll build`

Builds the Jekyll files into HTML and other static resources

#### `jekyll serve`

Runs the Jekyll web server

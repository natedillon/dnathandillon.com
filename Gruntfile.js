module.exports = function(grunt) {

  const sass = require('sass');

  // Display the elapsed execution time of Grunt tasks
  require('time-grunt')(grunt);

  // Load Grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Shell commands for use in Grunt tasks
    shell: {
      jekyllBuild: {
        command: 'jekyll build --config _config.yml,_config.dev.yml'
      },
      jekyllServe: {
        command: 'jekyll serve --config _config.yml,_config.dev.yml --port 8002'
      },
    },

    // Clean command
    clean: [
      '_site/',
      '_build/',
    ],

    // Sass command
    sass: {
      options: {
        implementation: sass,
        sourceMap: true,
      },
      build: {
        options: {
          outputStyle: 'expanded',
        },
        files: [{
          expand: true,
          cwd: 'src/assets/css/',
          src: ['**/*.{scss,sass}'],
          dest: '_build/assets/css',
          ext: '.css',
        }],
      },
      dist: {
        options: {
          outputStyle: 'compressed',
        },
        files: [{
          expand: true,
          cwd: 'src/assets/css/',
          src: ['**/*.{scss,sass}'],
          dest: '_build/assets/css',
          ext: '.css',
        }],
      },
    },

    // PostCSS command
    postcss: {
      options: {
        processors: [
          require('autoprefixer')({
            browsers: ['last 2 versions']
          })
        ],
      },
      dist: {
        src: '_build/assets/css/*.css',
      },
    },

    // Copy command
    copy: {
      dist: {
        files: [
          {
            expand: true,
            cwd: 'src/assets/',
            src: [
              '**',
              '!**/css/**',
              '!**/*.{sketch,eps,psd,ai}',
              '!**/img/**/_drafts/**',
            ],
            dest: '_build/',
          },
          {
            expand: true,
            cwd: '_build',
            src: [
              '**'
            ],
            dest: '_site/',
          }
        ],
      },
    },

    // ImageOptim command
    imageoptim: {
      options: {
        imageAlpha: true,
        jpegMini: false,
        quitAfter: true,
      },
      dist: {
        src: [
          '_build/assets/img',
        ],
      },
    },

    // Watch command
    watch: {
      sass: {
        files: [
          'src/assets/css/**/*.{scss,sass}'
        ],
        tasks: [
          'sass:build',
          'postcss',
        ],
      },
      livereload: {
        options: {
          livereload: true,
        },
        files: [
          '_site/_build/assets/css/**/*.css'
        ],
      },
    },

    // Run tasks in parallel
    concurrent: {
      serve: [
        'watch',
        'shell:jekyllServe'
      ],
      options: {
        logConcurrentOutput: true,
      },
    },
  });

  // Build task
  grunt.registerTask('build', [
    'clean',
    'sass:build',
    'postcss',
    'copy',
    'shell:jekyllBuild',
  ]);

  // Dist task
  grunt.registerTask('dist', [
    'clean',
    'sass:dist',
    'postcss',
    'copy',
    'imageoptim:dist',
    'shell:jekyllBuild',
  ]);

  // Serve task
  grunt.registerTask('serve', [
    'build',
    'concurrent:serve',
  ]);

  // Default task
  grunt.registerTask('default', 'serve');
};

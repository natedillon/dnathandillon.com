module.exports = function(grunt) {

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
        command: 'jekyll serve --config _config.yml,_config.dev.yml'
      },
    },

    // Clean command
    clean: [
      '_site/',
      'dist/',
    ],

    // Sass command
    sass: {
      options: {
        sourceMap: true,
        outputStyle: 'expanded',
      },
      build: {
        files: [{
          expand: true,
          cwd: 'src/css/',
          src: ['**/*.{scss,sass}'],
          dest: 'dist/css',
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
      build: {
        src: 'dist/css/*.css',
      },
    },

    // Copy command
    copy: {
      build: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: [
              '**',
              '!**/css/**',
              '!**/*.{sketch,eps,psd,ai}',
            ],
            dest: 'dist/',
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
          'dist/img',
        ],
      },
    },

    // Watch command
    watch: {
      sass: {
        files: [
          'src/css/**/*.{scss,sass}'
        ],
        tasks: [
          'sass',
          'postcss',
        ],
      },
      livereload: {
        options: {
          livereload: true,
        },
        files: [
          '_site/dist/css/**/*.css'
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
    'sass',
    'postcss',
    'copy',
    'shell:jekyllBuild',
  ]);

  // Dist task
  grunt.registerTask('dist', [
    'clean',
    'sass',
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

module.exports = function(grunt) {

  const sass = require('sass');

  // Display the elapsed execution time of Grunt tasks
  require('time-grunt')(grunt);

  // Load Grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // File locations
    path_src: 'src',
    path_build: 'build',

    // Local server port
    port: '8002',

    // Shell commands for use in Grunt tasks
    shell: {
      jekyllBuild: {
        command: 'jekyll build --config _config.yml,_config.dev.yml'
      },
      jekyllServe: {
        command: 'jekyll serve --config _config.yml,_config.dev.yml --port <%= port %>'
      },
    },

    // Clean command
    clean: [
      '<%= path_build %>',
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
          cwd: '<%= path_src %>/assets/css/',
          src: ['**/*.{scss,sass}'],
          dest: '<%= path_build %>/assets/css',
          ext: '.css',
        }],
      },
      dist: {
        options: {
          outputStyle: 'compressed',
        },
        files: [{
          expand: true,
          cwd: '<%= path_src %>/assets/css/',
          src: ['**/*.{scss,sass}'],
          dest: '<%= path_build %>/assets/css',
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
        src: '<%= path_build %>/assets/css/*.css',
      },
    },

    // Copy command
    copy: {
      build: {
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
            dest: '<%= path_build %>/assets/',
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
          '<%= path_build %>/assets/img',
        ],
      },
    },

    // imagemin command
    imagemin: {
      dist: {
        options: {
          optimizationLevel: 3,
          progressive: true
        },
        files: [{
          expand: true,
          cwd: '<%= path_build %>/assets/img',
          src: ['**/*.{png,jpg,jpeg,gif}'],
          dest: '<%= path_build %>/assets/img',
        }],
      },
    },

    // Watch command
    watch: {
      sass: {
        files: [
          '<%= path_src %>/assets/css/**/*.{scss,sass}'
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
          '<%= path_build %>/assets/css/**/*.css'
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
    'shell:jekyllBuild',
    'sass:build',
    'postcss',
    'copy',
  ]);

  // Dist task
  grunt.registerTask('dist', [
    'build',
    'imagemin',
  ]);

  // Serve task
  grunt.registerTask('serve', [
    'build',
    'concurrent:serve',
  ]);

  // Default task
  grunt.registerTask('default', 'serve');
};

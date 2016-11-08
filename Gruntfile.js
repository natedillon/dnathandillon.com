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
      }
    },

    // Sass command
    sass: {
      options: {
        sourceMap: true,
        relativeAssets: false,
        outputStyle: 'expanded',
        sassDir: 'assets/css',
        cssDir: 'css'
      },
      build: {
        files: [{
          expand: true,
          cwd: 'assets/css/',
          src: ['**/*.{scss,sass}'],
          dest: 'css',
          ext: '.css'
        }]
      }
    },

    // PostCSS command
    postcss: {
      options: {
        processors: [
          require('autoprefixer')({
            browsers: ['last 2 versions']
          })
        ]
      },
      build: {
        src: 'css/*.css'
      }
    },

    // Watch command
    watch: {
      sass: {
        files: ['assets/css/**/*.{scss,sass}'],
        tasks: [
          'sass',
          'postcss'
        ],
      },
      livereload: {
        options: { livereload: true },
        files: ['_site/css/**/*.css'],
      },
    },

    // Run tasks in parallel
    concurrent: {
      serve: [
        'watch',
        'shell:jekyllServe'
      ],
      options: {
        logConcurrentOutput: true
      }
    },
  });

  // Serve task
  grunt.registerTask('serve', [
    'build',
    'concurrent:serve'
  ]);

  // Build task
  grunt.registerTask('build', [
    'shell:jekyllBuild',
    'sass',
    'postcss'
  ]);

  // Default task
  grunt.registerTask('default', 'serve');

};

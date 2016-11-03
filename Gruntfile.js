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
        command: 'jekyll build'
      },
      jekyllServe: {
        command: 'jekyll serve --incremental'
      }
    },

    // Sass command
    sass: {
      options: {
        sourceMap: true,
        relativeAssets: false,
        outputStyle: 'expanded',
        sassDir: 'src/assets/css',
        cssDir: '_site/css'
      },
      build: {
        files: [{
          expand: true,
          cwd: 'src/assets/css/',
          src: ['**/*.{scss,sass}'],
          dest: '_site/css',
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
        src: '_site/css/*.css'
      }
    },

    // Watch command
    watch: {
      sass: {
        files: ['src/assets/css/**/*.{scss,sass}'],
        tasks: [
          'sass',
          'postcss'
        ]
      }
    },

    // Run tasks in parallel
    concurrent: {
      serve: [
        'sass',
        'postcss',
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

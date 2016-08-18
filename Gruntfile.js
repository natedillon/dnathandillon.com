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
        command: 'jekyll serve'
      }
    },

    // Sass command
    sass: {
      options: {
        sourceMap: true,
        relativeAssets: false,
        outputStyle: 'expanded',
        sassDir: '_css',
        cssDir: '_site/css'
      },
      build: {
        files: [{
          expand: true,
          cwd: '_css/',
          src: ['**/*.{scss,sass}'],
          dest: '_site/css',
          ext: '.css'
        }]
      }
    },

    // Watch command
    watch: {
      sass: {
        files: ['_css/**/*.{scss,sass}'],
        tasks: ['sass']
      }
    },

    // Run tasks in parallel
    concurrent: {
      serve: [
        'sass',
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
    'sass'
  ]);

  // Default task
  grunt.registerTask('default', 'serve');

};

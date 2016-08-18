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
    }
  });

  // Serve task
  grunt.registerTask('serve', [
    'shell:jekyllServe'
  ]);

  // Build task
  grunt.registerTask('build', [
    'shell:jekyllBuild'
  ]);

  // Default task
  grunt.registerTask('default', 'build');

};

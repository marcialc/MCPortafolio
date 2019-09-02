module.exports = function(grunt) {
  
  // Configuration
  // grunt.initConfig({
  //   concat: {
  //     js: {
  //       src: ['src/screens/*.js']
  //       dest: 'build/scripts.js'
  //     }
  //   }
  // });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Register Tasks
  grunt.registerTask('run', function(){
    console.log('running site');
  });

  grunt.registerTask('sleep', function(){
    console.log('sleeping');
  });

  grunt.registerTask('default', ['sleep', 'run']);
};  

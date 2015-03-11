module.exports = function(grunt) {
  grunt.registerTask('js', ['jslint:build', 'jshint:build', 'uglify:build']);
};
module.exports = function (grunt) {
  grunt.registerTask('css', [/*'csslint:build',*/ 'autoprefixer:build', 'cssmin:build']);
}
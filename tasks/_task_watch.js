module.exports = function (grunt) {
  grunt.registerTask('w_sass', ['watch:build_sass']);
  grunt.registerTask('w_sprite', ['watch:build_sprite']);
};
module.exports = function(grunt) {
  grunt.config('imagemin', {
    dynamic: {
      files: [{
        expand: true,
        src: ['<%= path.source.images %>**/*.{png,jpg,gif}'],
        dest: '<%= path.source.images %>'
      }]
    }
  });
}
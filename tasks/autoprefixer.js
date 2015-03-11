module.exports = function(grunt) {
  grunt.config('autoprefixer', {
    options: {
      browsers: ['last 2 versions', 'ie 8', 'ie 9']
    },
    build: {
      expand: true,
      flatten: true,
      src: '<%= path.source.css %>*.css',
      dest: '<%= path.source.css %>'
    }
  });
}
module.exports = function (grunt) {
  grunt.config('jshint', {
    options: {
      jshintrc : '.jshintrc'
    },
    build: {
      files : {
        src: ['<%= path.source.js %>*.js'],
      }
    }
  });
}
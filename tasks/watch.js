module.exports = function (grunt) {
  grunt.config('watch', {

    build: {
      files: ['<%= path.source.css %>*.css', '<%= path.source.js %>*.js'],
      tasks: ['css', '']
    }

  });
};
module.exports = function (grunt) {
  grunt.config('jslint', {
    build : {
      src: ['<%= path.source.js %>*.js'],
      directives : {
        indent  : 2,
        maxlen  : 160,
        maxerr  : 10,
        predef  : [
          'jQuery'
        ]
      }
    },
  });
}
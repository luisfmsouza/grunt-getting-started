module.exports = function (grunt) {
  grunt.config('jslint', {
    build : {
      expand : true,
      src: ['<%= path.source.js %>*.js'],
      exclude : [],
      directives : {
        indent  : 2,
        maxlen  : 160,
        maxerr  : 10,
        white   : true,
        browser : true,
        devel   : true,
        node    : true,
        todo    : true,
        nomen   : true,
        sloppy  : true,
        unparam : true,
        predef  : [
          'jQuery'
        ]
      }
    },
  });
}
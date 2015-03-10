module.exports = function(grunt) {
  grunt.config('csslint', {
    options : {
      csslintrc : '.csslintrc'
    },
    build : {
      src : ['<%= path.source.css %>*.css']
    }
  });
}
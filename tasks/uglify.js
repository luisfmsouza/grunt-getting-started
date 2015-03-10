module.exports = function(grunt) {
  grunt.config('uglify', {
    options : {
      mangle                      : true,
      compress                    : true,
      beautify                    : false
    },
    build: {
      expand: true,
      files: {
        '<%= path.dest.js %><%= pkg.name %>.min.js' : ['<%= path.source.js %>*.js']
      }
    }
  });
}
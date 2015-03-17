module.exports = function (grunt) {
  grunt.config('sass', {
    options: {
        sourcemap: 'auto',
        style: 'compressed'
    },
    dist: {
      files: [{
        '<%= path.dest.css %><%= pkg.name %>.min.css' : ['<%= path.source.sass %>*.sass']
      }]
    }
  });
}
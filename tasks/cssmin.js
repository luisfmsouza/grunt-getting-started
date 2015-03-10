module.exports = function(grunt) {
  grunt.config('cssmin', {
    build : {
        files : {
          '<%= path.dest.css %><%= pkg.name %>.min.css' : ['<%= path.source.css %>*.css']
        }
      }
  });
}
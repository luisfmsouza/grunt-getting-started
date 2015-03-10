module.exports = function(grunt) {
  grunt.config('browserSync', {
    dev: {
      bsFiles: {
        src : '<%= path.source.css %>*.css'
      },
      options: {
        server: {
          baseDir: "../"
        },
        port: 82
      }
    }
  });
}
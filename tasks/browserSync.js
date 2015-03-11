module.exports = function(grunt) {
  grunt.config('browserSync', {
    build: {
      bsFiles: {
        src : '<%= path.dest.css %>*.css'
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
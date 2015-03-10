module.exports = function (grunt) {
  grunt.config('concurrent', {
    dev: {
      tasks: [
        'watch:build'
      ],
      options: {
        logConcurrentOutput: true
      }
    }
  });
};
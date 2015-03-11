module.exports = function (grunt) {
  grunt.config('concurrent', {
    build: {
      tasks: ['watch', 'sync'],
      options: {
        logConcurrentOutput: true
      }
    }
  });
};
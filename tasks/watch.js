module.exports = function (grunt) {
  grunt.config('watch', {

    build_sass: {
      files: ['<%= path.source.sass %>**/*.sass'],
      tasks: ['sass']
    },

    build_sprite: {
      files: ['<%= path.source.images %>**/*.png'],
      tasks: ['sprite:sprite1', 'sprite:sprite2']
    }

  });
};
module.exports = function (grunt) {
  grunt.config('sprite', {
    sprite1: {
      src: '<%= path.source.images1 %>*.png',
      dest: '<%= path.dest.images %>sprite1.png',
      destCss: '<%= path.source.sass %>sprite1.css'
    },
    sprite2: {
      src: '<%= path.source.images2 %>*.png',
      dest: '<%= path.dest.images %>sprite2.png',
      destCss: '<%= path.source.sass %>sprite2.css'
    }
  });
}
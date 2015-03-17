module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    path : {
      source : {
        css : "../src/css/",
        sass : "../src/sass/",
        js : "../src/js/",
        images : "../images/",
        images1 : "../images/sprite1/",
        images2 : "../images/sprite2/"
      },
      dest : {
        css : "../css/",
        sass : "../css/",
        js : "../js/",
        images: "../images/"
      }
    }
  });

  grunt.loadTasks('tasks');
};
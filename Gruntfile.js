module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    path : {
      source : {
        css : "../src/css/",
        js : "../src/js/",
        images : "../images/"
      },
      dest : {
        css : "../css/",
        js : "../js/"
      }
    }
  });

  grunt.loadTasks('tasks');
};
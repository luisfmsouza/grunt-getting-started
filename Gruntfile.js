module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /* Begin - BrowserSync setup */
    browserSync: {
      dev: {
        bsFiles: {
          src : '../css/*.css'
        },
        options: {
          server: {
            baseDir: "../"
          },
          port: 82
        }
      }
    },
    /* End - BrowserSync setup */

    /* Begin - ImageMin setup */
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: '../images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: '../images/'
        }]
      }
    },
    /* End - ImageMin setup */

    /* Begin - Uglify JS setup */
    uglify: {
      // options : {
      //   mangle                      : true,
      //   compress                    : true,
      //   beautify                    : false
      // },
      build: {
        expand: true,
        cwd: '../src',
        src: ['js/**/*.js'],
        dest: '../',
      }
    },
    /* End - Uglify JS setup */

    /* Begin - CSS Lint setup */
    csslint : {
      options : {
        csslintrc : '.csslintrc'
      },
      build : {
        src : ['../css/**/*.css']
      }
    },
    /* End - CSS Lint setup */

    /* Begin - cssmin setup */
    cssmin : {
      build : {
        files : {
          '../css/<%= pkg.name %>.min.css' : ['../src/css/**/*.css']
        }
      }
    },
    /* End - cssmin setup */

    /* Begin - jshint setup */
    // jshint: {
    //   options: {
    //     jshintrc : '.jshintrc'
    //   },
    //   build: {
    //     files : {
    //       src: ['../src/js/**/*.js'],
    //     }
    //   }
    // },
    /* End - jshint setup */

    /* Begin - jslint setup */
    // jslint : {
    //   build : {
    //     expand : true,
    //     src: ['../src/js/**/*.js'],
    //     exclude : [],
    //     directives : {
    //       indent  : 2,
    //       maxlen  : 160,
    //       maxerr  : 10,
    //       white   : true,
    //       browser : true,
    //       devel   : true,
    //       node    : true,
    //       todo    : true,
    //       nomen   : true,
    //       sloppy  : true,
    //       unparam : true,
    //       predef  : [
    //         'jQuery'
    //       ]
    //     }
    //   },
    // },
    /* End - jslint setup */
  });

  // Load all plugins dependencies
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);


  /**
  * Tasks
  **/

  // BrowserSync task
  grunt.registerTask('sync', ['browserSync']);

  // ImageMin task
  grunt.registerTask('imgmin', ['imagemin']);

  // JS minify task
  grunt.registerTask('js', ['uglify:build']);

  // CSS minify and concat task
  grunt.registerTask('css', [/*'csslint:build',*/ 'cssmin:build']);



  // Default task(s).
  grunt.registerTask('default', ['']);


};
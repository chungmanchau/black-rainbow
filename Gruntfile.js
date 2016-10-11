/*jslint node: true */
"use strict";


module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    connect: {
      server: {
        options: {
          hostname: 'localhost',
          port: 8080
        }
      }
    },

    sass: {
      dist: {
        files: {
          'css/styles.css' : 'scss/styles.scss'
        }
      }
    },

    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      }
    },

    autoprefixer: {
      dist:{
        files:{
          'css/styles.css':'css/styles.css'
        }
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  
  grunt.registerTask('dev', ['connect:server', 'watch']);
  grunt.registerTask('build', ['sass', 'autoprefixer']);
};
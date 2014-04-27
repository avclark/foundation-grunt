module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      scripts: {
        files: ['js/**/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
          livereload: true
        }
      },

      compass: {
        files: ['sass/**/*.{scss,sass}'],
        tasks: ['compass']
      },

      css: {
        files: ['public/assets/css/*'],
        options: {
          livereload: true
        }
      }
    },

    concat: {
      dist: {
        src: [
          'bower_components/jquery/jquery.js',
          'bower_components/foundation/js/foundation.js',
          'js/libs/*.js',
          'js/app.js'
        ],
        dest: 'public/assets/js/app.js',
      }
    },

    uglify: {
      build: {
        files: {
          'public/assets/js/app.min.js': ['public/assets/js/app.js'],
          'public/assets/js/modernizr.js': ['bower_components/modernizr/modernizr.js'],
        }
      }
    },

    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-notify');

  grunt.registerTask('default', ['concat', 'uglify', 'compass']);
  grunt.registerTask('dev', ['concat', 'uglify', 'compass', 'watch']);

};
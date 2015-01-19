module.exports = function (grunt) {
  'use strict';

  var files = [{
    expand: true,
    cwd: 'test/fixtures/',
    src: ['**/*.exe']
  }];

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    rcedit: {
      file: {
        files: files,
        options: {
          'file-version': '0.1.3'
        }
      },
      product: {
        files: files,
        options: {
          'product-version': '0.1.4'
        }
      },
      icon: {
        files: files,
        options: {
          'icon': 'test/fixtures/icon.ico'
        }
      },
      info: {
        files: files,
        options: {
          'version-string': {
            'LegalCopyright': 'Copyright 2015 Foobar Inc.'
          }
        }
      }
    },

    nodeunit: {
      tests: ['test/*_test.js']
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first lint everything, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['jshint', 'rcedit', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['test']);
};

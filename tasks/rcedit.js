'use strict';

module.exports = function (grunt) {
  var _ = grunt.util._;
  var async = require('async');
  var chalk = require('chalk');
  var rcedit = require('rcedit');

  grunt.registerMultiTask('rcedit', 'Edit resources of EXE files.', function () {
    modifyFiles(getFiles(this.files), this.options(), this.async());
  });

  var getFiles = function (files) {
    return _.reduce(files, function (memo, filePair) {
      return memo.concat(_.map(filePair.src, _.identity));
    }, []);
  };

  var modifyFiles = function (files, options, done) {
    var tasks = _.map(files, function (file) {
      return function (callback) {
        rcedit(file, options, callback);
      };
    });

    async.parallel(tasks, function (err, results) {
      if (err) {
        return done(new Error(err));
      }

      grunt.log.ok('Edited ' +
        chalk.cyan(results.length.toString()) + (results.length === 1 ? ' file' : ' files'));

      done();
    });
  };
};

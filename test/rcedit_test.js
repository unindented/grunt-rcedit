'use strict';

var fs = require('fs');

var testExistence = function (test, expectations) {
  test.expect(expectations.length);

  expectations.forEach(function (expectation) {
    test.equal(fs.existsSync(expectation), true, expectation + ' should exist');
  });

  test.done();
};

exports.rcedit = {
  file: function (test) {
    testExistence(test, [
      'test/fixtures/rcedit1.exe',
      'test/fixtures/rcedit2.exe'
    ]);
  },
  product: function (test) {
    testExistence(test, [
      'test/fixtures/rcedit1.exe',
      'test/fixtures/rcedit2.exe'
    ]);
  },
  icon: function (test) {
    testExistence(test, [
      'test/fixtures/rcedit1.exe',
      'test/fixtures/rcedit2.exe'
    ]);
  },
  info: function (test) {
    testExistence(test, [
      'test/fixtures/rcedit1.exe',
      'test/fixtures/rcedit2.exe'
    ]);
  }
};

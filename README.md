# grunt-rcedit [![Version](https://img.shields.io/npm/v/grunt-rcedit.svg)](https://www.npmjs.com/package/grunt-rcedit) [![Build Status](https://img.shields.io/travis/unindented/grunt-rcedit.svg)](http://travis-ci.org/unindented/grunt-rcedit) [![Dependency Status](https://img.shields.io/gemnasium/unindented/grunt-rcedit.svg)](https://gemnasium.com/unindented/grunt-rcedit)

> Edit resources of EXE files.


## Getting Started

This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-rcedit --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-rcedit');
```

*This plugin was designed to work with Grunt 0.4.x. If you're still using grunt v0.3.x it's strongly recommended that [you upgrade](http://gruntjs.com/upgrading-from-0.3-to-0.4), but in case you can't please use [v0.3.2](https://github.com/gruntjs/grunt-contrib-copy/tree/grunt-0.3-stable).*


## RcEdit task

_Run this task with the `grunt rcedit` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

### Options

#### icon
Type: `String`

#### file-version
Type: `String`

#### product-version
Type: `String`

#### version-string
Type: `Object`

### Usage

```js
rcedit: {
  exes: {
    files: [{
      expand: true,
      cwd: 'dist/',
      src: ['**/*.exe']
    }],
    options: {
      'icon': 'res/icon.ico',
      'file-version': '0.0.1',
      'product-version': '0.0.2',
      'version-string': {
        'CompanyName': 'Foobar Inc.',
        'LegalCopyright': 'Copyright 2015 Foobar Inc.'
      }
    }
  }
}
```

This task supports all the file mapping format Grunt supports. Please read [Globbing patterns](http://gruntjs.com/configuring-tasks#globbing-patterns) and [Building the files object dynamically](http://gruntjs.com/configuring-tasks#building-the-files-object-dynamically) for additional details.


## Meta

* Code: `git clone git://github.com/unindented/grunt-rcedit.git`
* Home: <https://github.com/unindented/grunt-rcedit/>


## Contributors

* Daniel Perez Alvarez ([unindented@gmail.com](mailto:unindented@gmail.com))


## License

Copyright (c) 2015 Daniel Perez Alvarez ([unindented.org](http://unindented.org/)). This is free software, and may be redistributed under the terms specified in the LICENSE file.

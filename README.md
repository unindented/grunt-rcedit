# grunt-rcedit [![Version](https://img.shields.io/npm/v/grunt-rcedit.svg)](https://www.npmjs.com/package/grunt-rcedit) [![Build Status](https://img.shields.io/travis/unindented/grunt-rcedit.svg)](http://travis-ci.org/unindented/grunt-rcedit) [![Build Status](https://img.shields.io/appveyor/ci/unindented/grunt-rcedit.svg)](https://ci.appveyor.com/project/unindented/grunt-rcedit) [![Dependency Status](https://img.shields.io/gemnasium/unindented/grunt-rcedit.svg)](https://gemnasium.com/unindented/grunt-rcedit)

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

| Option            | Type      | Description |
| ------------------| --------- | ----------- |
| `icon`            | `String`  | Path to the application icon. |
| `file-version`    | `String`  | Version number for the file. |
| `product-version` | `String`  | Version number for the product with which the file is distributed. |
| `version-string`  | `Object`  | Key-value object containing the Version Information to replace in the `.exe` file. To get all the possible keys, you can check out the [table below](#version-information) or open the `.exe` with a resource editor program like [ResEdit](http://www.resedit.net). |


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
        'ProductName': 'Foobar',
        'FileDescription': 'Foobar',
        'CompanyName': 'Foobar Inc.',
        'LegalCopyright': 'Copyright 2015 Foobar Inc.'
      }
    }
  }
}
```

This task supports all the file mapping format Grunt supports. Please read [Globbing patterns](http://gruntjs.com/configuring-tasks#globbing-patterns) and [Building the files object dynamically](http://gruntjs.com/configuring-tasks#building-the-files-object-dynamically) for additional details.


### Version Information

The `version-string` supports the following properties (extracted from the [MSDN](https://msdn.microsoft.com/en-us/library/windows/desktop/aa381058(v=vs.85).aspx)):

| Property              | Description |
| --------------------- | ----------- |
| `Comments`            | Additional information that should be displayed for diagnostic purposes. |
| `CompanyName`         | Company that produced the file, for example "Microsoft Corporation" or "Standard Microsystems Corporation, Inc.". |
| `FileDescription`     | File description to be presented to users. This string may be displayed in a list box when the user is choosing files to install, for example, "Keyboard Driver for AT-Style Keyboards". |
| `FileVersion`         | Version number of the file, for example, "3.10" or "5.00.RC2". |
| `InternalName`        | Internal name of the file, if one exists, for example, a module name if the file is a dynamic-link library. If the file has no internal name, this string should be the original filename, without extension. |
| `LegalCopyright`      | Copyright notices that apply to the file. This should include the full text of all notices, legal symbols, copyright dates, and so on. |
| `LegalTrademarks`     | Trademarks and registered trademarks that apply to the file. This should include the full text of all notices, legal symbols, trademark numbers, and so on. |
| `OriginalFilename`    | Original name of the file, not including a path. This information enables an application to determine whether a file has been renamed by a user. The format of the name depends on the file system for which the file was created. |
| `ProductName`         | Name of the product with which the file is distributed. This string is required. |
| `ProductVersion`      | Version of the product with which the file is distributed, for example, "3.10" or "5.00.RC2". |


## Meta

* Code: `git clone git://github.com/unindented/grunt-rcedit.git`
* Home: <https://github.com/unindented/grunt-rcedit/>


## Contributors

* Daniel Perez Alvarez ([unindented@gmail.com](mailto:unindented@gmail.com))


## License

Copyright (c) 2015 Daniel Perez Alvarez ([unindented.org](http://unindented.org/)). This is free software, and may be redistributed under the terms specified in the LICENSE file.

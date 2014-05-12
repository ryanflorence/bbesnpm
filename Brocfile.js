var makeModules = require('broccoli-es6-module-filter');
var browserify = require('broccoli-browserify');

var modules = makeModules('app', {
  moduleType: 'cjs',
  compatFix: true
});

module.exports = browserify(modules, {
  entries: ['./main.js'],
  outputFile: 'application.js'
});


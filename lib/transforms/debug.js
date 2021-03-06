'use strict';

var through = require('gulp-through');
var gutil = require('gulp-util');
var path = require('path');

var defaults = {
  debug: true
}

module.exports = through('debug', function(file, config) {
  if(!config.debug) return;
  d(file);
}, defaults);

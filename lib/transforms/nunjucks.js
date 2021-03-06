'use strict';

var through = require('gulp-through');
var nunjucks = require('nunjucks');
var path = require('path');

var defaults = {
  strict: false,
  rename: true,
  debug: true
};

var regex = /\.(tpl|nunjucks)(\..+)$/;

module.exports = through('nunjucks', function(file, config) {
  if(config.strict && !path.basename(file.path).match(regex)) return;

  var env = nunjucks.configure(config.cwd || file.base, {
    // Please don"t !
    watch: false
  });

  var result = env.renderString(String(file.contents), config.locals);
  file.contents = new Buffer(result);
  if(config.rename) {
    file.path = file.path.replace(regex, '$2');
  }
}, defaults);

'use strict';

var gulp = require('gulp');
var config = require('./../config'), src = config.src;
var pkg = require(process.cwd() + '/package.json');

var concat = require('gulp-concat-util');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');

var concatScripts = require('./../helpers/concat-scripts');
var annotate = require('./../helpers/ng-annotate');
var uglify = require('./../helpers/uglify-js');

gulp.task('ng-factory:scripts(dist)', function(foo) {

  // Build unified pkg.name scripts
  return gulp.src([src.scripts], {cwd: src.cwd})
    .pipe(sourcemaps.init())
    .pipe(annotate())
    .pipe(concatScripts(pkg.name + '.js'))
    .pipe(concat.header(config.banner))
    .pipe(gulp.dest(src.dist))
    .pipe(rename(function(path) { path.extname = '.min.js'; }))
    .pipe(uglify())
    .pipe(concat.header(config.banner))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(src.dist));

});

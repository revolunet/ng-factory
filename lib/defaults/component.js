'use strict';

exports.src = {
  cwd: 'src',
  dest: 'dist',
  tmp: '.tmp', // @todo .tmp/src breaks
  styles: '*.{css,less,sass,scss}',
  scripts: '*.js',
  templates: '*.tpl.{html,jade}',
  test: '{,*/}test{,*/}*{.spec,Spec}.js',
};

exports.bower = {
  exclude: /jquery|js\/bootstrap/
};

exports.test = {
  cwd: 'test',
  dest: 'test',
  tmp: '.tmp/test',
  coverage: 'coverage',
  scripts: '{,*/}*{.spec,Spec}.js'
};

exports.docs = {
  cwd: 'docs',
  templates: 'templates/pages',
  readme: 'templates/readme',
  dest: 'pages',
  tmp: '.tmp/docs',
  scripts: 'scripts/**/*.js',
  styles: 'styles/*.less',
  watchedStyles: 'styles/**/*.less',
  views: 'views/**/*.jade',
  images: 'images/{,*/}*.{jpg,png,svg}',
  index: 'index{,.tpl}.jade'
};

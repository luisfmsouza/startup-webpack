'use-strict';

console.time('Load');

// import $ from 'jquery';
// import _ from 'underscore';
// import Backbone from 'backbone';
$ = jQuery = require('jquery');
_ = require('underscore');
Backbone = require('backbone');

// import 'bootstrap/css/bootstrap.css!';
require("bootstrap-webpack");

console.log('jquery: ' + $.fn.jquery);
console.log('underscore: ' + _.VERSION);
console.log('backbone: ' + Backbone.VERSION);

$('.btn-primary').on('click', function () {
  console.time('Module');

  createContent = require('../content/init.js');

  createContent();
});

console.timeEnd('Init');
console.timeEnd('Load');

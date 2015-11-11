console.time('Load');

// require("!style!css!./style.css");
document.write(require("./content.js"));

$ = jQuery = require('jquery');

require("bootstrap-webpack");

console.log(jQuery.fn.jquery);
console.log($.fn.jquery);

console.timeEnd('Init');
console.timeEnd('Load');

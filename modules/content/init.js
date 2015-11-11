'use-strict';


module.exports = function createContent() {

  // import handlebars from 'handlebars';
  Handlebars = require('handlebars');

  //template
  // import contentTemplate from './contentTemplate.html!text';
  contentTemplate = require('html!./contentTemplate.html');

  //data
  // import contentData from './contentData.json!';
  contentData = require('json!./contentData.json');

  var template = Handlebars.compile(contentTemplate);
  var html    = template(contentData);


  $('.container').append(html);

  console.timeEnd('Module');
}

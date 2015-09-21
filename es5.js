'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var commonmark = require('commonmark');

var reader = new commonmark.Parser();
var writer = new commonmark.HtmlRenderer();

exports['default'] = function (markdown) {
  return writer.render(reader.parse(markdown));
};

module.exports = exports['default'];

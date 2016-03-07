'use strict';

var React = require('react');
var Link = require('./LinkComponent.jsx');
module.exports = React.createClass({
  displayName: 'Menu',
  render: function render() {
    return React.createElement(
      'div',
      { className: 'Menu' },
      React.createElement(Link, { url: 'http://1', title: 'Hey', description: 'plop' }),
      React.createElement(Link, { url: 'http://2', title: 'Hey', description: 'plop' })
    );
  }
});
'use strict';

var React = require('react');

module.exports = React.createClass({
  displayName: 'Link',
  render: function render() {
    return React.createElement(
      'div',
      { className: 'link' },
      React.createElement(
        'h3',
        null,
        React.createElement(
          'a',
          { href: this.props.url },
          this.props.title
        )
      ),
      React.createElement(
        'p',
        null,
        this.props.description
      )
    );
  }
});
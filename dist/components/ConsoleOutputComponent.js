"use strict";

var React = require("react");
var Highlight = require("react-highlight");
module.exports = React.createClass({
  displayName: "ConsoleOutputComponent",
  render: function render() {
    return React.createElement(
      Highlight,
      { className: "bash" },
      this.props.text
    );
  }
});
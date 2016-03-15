"use strict";

var React = require("react");
//const Highlight = require("react-highlight");
module.exports = React.createClass({
  displayName: "ConsoleOutputComponent",
  render: function render() {
    return React.createElement(
      "div",
      { className: "bash" },
      this.props.text
    );
  }
});
"use strict";

var React = require("react");
//const Highlight = require("react-highlight");
module.exports = React.createClass({
  displayName: "ConsoleOutputComponent",

  render: function render() {

    var className = "bash " + this.props.className;

    return React.createElement(
      "div",
      { className: className },
      this.props.text
    );
  }
});
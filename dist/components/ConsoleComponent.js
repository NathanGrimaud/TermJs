"use strict";

var React = require("react");
var ConsoleOutputComponent = require("./ConsoleOutputComponent.js");

module.exports = React.createClass({
  displayName: "ConsoleComponent",
  render: function render() {
    return React.createElement(
      "div",
      { id: "Console", className: "Console" },
      React.createElement(ConsoleOutputComponent, { text: "# Bienvenue dans le terminal" }),
      React.createElement("input", { id: "ConsoleInput", type: "text" })
    );
  }
});
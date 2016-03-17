"use strict";

var React = require("react");
var ConsoleOutputComponent = require("./ConsoleOutputComponent.js");

module.exports = React.createClass({

  displayName: "ConsoleComponent",

  getInitialState: function getInitialState() {
    return { path: process.cwd() };
  },

  changePath: function changePath() {
    this.setState(function (previousState, currentProp) {
      return { path: process.cwd() };
    });
    this.forceUpdate();
  },


  render: function render() {

    return React.createElement(
      "div",
      { id: "Console", className: "Console" },
      React.createElement(ConsoleOutputComponent, { text: "# Bienvenue dans le terminal" }),
      React.createElement(
        "div",
        { className: "inputWrapper" },
        React.createElement(
          "span",
          { className: "inputPath" },
          this.state.path + " > ",
          "  "
        ),
        React.createElement("div", { className: "inputDiv", contentEditable: "True", id: "ConsoleInput", type: "text" })
      )
    );
  }
});
"use strict";

var React = require("react");
module.exports = React.createClass({
  displayName: "Snippet",
  render: function render() {
    console.log("props", this.props);
    return React.createElement(
      "div",
      { className: "snippet" },
      React.createElement(
        "span",
        null,
        React.createElement(
          "b",
          null,
          this.props.name
        )
      ),
      " :",
      React.createElement("br", null),
      " ",
      React.createElement(
        "span",
        null,
        this.props.command
      )
    );
  }
});
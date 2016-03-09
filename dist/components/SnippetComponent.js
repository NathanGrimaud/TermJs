"use strict";

var React = require("react");
module.exports = React.createClass({
  displayName: "SnippetComponent",
  render: function render() {
    console.log("props", this.props);
    return React.createElement(
      "div",
      { className: "snippet", key: "{this.props.key}" },
      React.createElement(
        "span",
        null,
        React.createElement(
          "b",
          null,
          this.props.name
        )
      ),
      " : ",
      React.createElement(
        "span",
        null,
        this.props.command
      )
    );
  }
});
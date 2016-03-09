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
        { className: "name" },
        this.props.name,
        " :"
      ),
      React.createElement(
        "span",
        { className: "command" },
        this.props.command
      )
    );
  }
});
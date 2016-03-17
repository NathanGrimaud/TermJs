"use strict";

var React = require("react");
module.exports = React.createClass({
  displayName: "SnippetComponent",

  handleClick: function handleClick(evt) {
    this.props._console.innerHTML = this.props.command;
  },

  render: function render() {

    return React.createElement(
      "div",
      { onClick: this.handleClick, className: "snippet", key: "{this.props.key}" },
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
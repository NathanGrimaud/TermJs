"use strict";

var React = require("react");

var SNIPPET = require("./SnippetComponent.js");

module.exports = React.createClass({
  displayName: "SnippetsContainerComponent",

  render: function render() {

    return React.createElement(
      "div",
      { className: "snippets" },
      " ",
      this.props.children.map(function (elem) {
        return elem;
      }),
      " "
    );
  }
});
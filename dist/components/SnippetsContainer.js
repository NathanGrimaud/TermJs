"use strict";

var React = require("react");

var SNIPPET = require("./SnippetComponent");
var data = require("../private/snippets.json");

module.exports = React.createClass({
  displayName: "SnippetsContainerComponent",
  render: function render() {
    return React.createElement(
      "div",
      { className: "snippets" },
      " ",
      data.snippets.map(function (val) {
        return React.createElement(SNIPPET, { name: val.name, command: val.command });
      }),
      " "
    );
  }
});
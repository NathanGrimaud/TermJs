"use strict";
const React = require("react");

const SNIPPET = require("./SnippetComponent");
let data = require("../private/snippets.json");

module.exports = React.createClass({
  displayName: "SnippetsContainerComponent",
  render: function() {
    return (
      <div className = "snippets"> {
        data.snippets.map((val) => <SNIPPET key={val.key} name={val.name} command={val.command}/> )
    } </div>);
  }
});

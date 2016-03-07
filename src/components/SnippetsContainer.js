"use strict";
const React = require("react");
const SNIPPET = require("./Snippet");
let data = require("json!../private/snippets.json");

module.exports = React.createClass({
  displayName: "SnippetsContainer",
  render: function() {
    return ( < div className = "snippets"> {
      //data.snippets.forEach((val) =><SNIPPET name={val.name} command={val.command}/>)
    } < /div>);
  }
});

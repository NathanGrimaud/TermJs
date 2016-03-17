"use strict";
const React = require("react");

const SNIPPET = require("./SnippetComponent.js");


module.exports = React.createClass({
  displayName: "SnippetsContainerComponent",
  
  render: function() {
            
    return (
      <div className = "snippets"> {
          this.props.children.map((elem)=>elem)
    } </div>);
  }
});

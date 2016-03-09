"use strict";
const React = require("react");
module.exports = React.createClass({
  displayName: "SnippetComponent",
  render: function() {
    console.log("props",this.props);
    return (
        <div className='snippet' key="{this.props.key}">
          <span><b>{this.props.name}</b></span> : <span>{this.props.command}</span>
        </div>
    );
  }
});

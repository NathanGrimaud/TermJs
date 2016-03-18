"use strict";
const React = require("react");
//const Highlight = require("react-highlight");
module.exports = React.createClass({
  displayName: "ConsoleOutputComponent",
  
  render: function() {

    var className = `bash ${this.props.className}`;
    
    return (
        <div className={className}>
          
          {this.props.text}
      
        </div>
    );
  }
});

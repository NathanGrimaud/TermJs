"use strict";
const React = require("react");
module.exports = React.createClass({
  displayName: "SnippetComponent",
  
  handleClick : function(evt){
      this.props._console.innerHTML = this.props.command;
  },
    
  render: function() {  
    
    return (
        
        <div onClick={this.handleClick} className='snippet' key="{this.props.key}">
          <span  className="name">{this.props.name} :</span><span className="command">{this.props.command}</span>
        </div>
        
    );
  }
  
});

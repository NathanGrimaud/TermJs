"use strict";
const React = require("react");
const ConsoleOutputComponent = require("./ConsoleOutputComponent.js");

module.exports = React.createClass({
    
  displayName: "ConsoleComponent",
  
   getInitialState: function() {
    return {path: process.cwd()};
  },  
  
  changePath(){      
    this.setState((previousState,currentProp)=>{
        return {path : process.cwd()};
    });
    this.forceUpdate();
  },
  
  render: function() {

    return (
      
      <div id="Console" className="Console">
      
        <ConsoleOutputComponent text={"# Bienvenue dans le terminal"} />
        
        <div className="inputWrapper" ><span className="inputPath">{this.state.path + " > "}  </span>
        
            <div className="inputDiv" contentEditable="True" id="ConsoleInput" type="text"/>
            
        </div>
        
      </div>
      
    );
  }
});

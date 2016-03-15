"use strict";
const React = require("react");
const ConsoleOutputComponent = require("./ConsoleOutputComponent.js");

module.exports = React.createClass({
  displayName: "ConsoleComponent",
  render: function() {
    return (
      <div id="Console" className="Console">
        <ConsoleOutputComponent text={"# Bienvenue dans le terminal"} />
        <div contentEditable="True" id="ConsoleInput" type="text"/>
      </div>
    );
  }
});

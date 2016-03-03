"use strict";
const ReactDOM = require("react-dom");
const React = require("react");
const CONSOLE_COMPONENT = require("./components/ConsoleComponent.jsx");
const ConsoleClass = require("./model/ConsoleClass.js").ConsoleClass;


class Main{
  constructor(){
    let ConsoleInstance = new ConsoleClass("ConsoleInput");
    this.console = ConsoleInstance;
  }
}

window.onload = function() {
  ReactDOM.render( <CONSOLE_COMPONENT /> ,  document.getElementById("appcontainer"));
  new Main();
};

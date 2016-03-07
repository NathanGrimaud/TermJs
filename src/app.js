"use strict";
const ReactDOM = require("react-dom");
const React = require("react");
const CONSOLE_COMPONENT = require("./components/ConsoleComponent.js");
const SNIPPETS_CONTAINER = require("./components/SnippetsContainer.js");
const ConsoleClass = require("./model/ConsoleClass.js").ConsoleClass;
// const hljs = require("highlight.js");

class Main{
  constructor(){
    let ConsoleInstance = new ConsoleClass("Console","ConsoleInput");
    this.console = ConsoleInstance;
    // hljs.initHighlightingOnLoad();
  }
}

window.onload = function() {
  let appContainer =  document.getElementById("appcontainer");
  ReactDOM.render( <CONSOLE_COMPONENT />, appContainer);
  let snippetsContainer = document.createElement("div");
  ReactDOM.render( <SNIPPETS_CONTAINER />, snippetsContainer);
    appContainer.appendChild(snippetsContainer);
  new Main();
};

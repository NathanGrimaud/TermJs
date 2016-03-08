"use strict";
const ReactDOM = require("react-dom");
const React = require("react");

const SNIPPETS_CONTAINER = require("./components/SnippetsContainer.js");
const Terminal = require("./model/Terminal.js").Terminal;
const SnippetClass = require("./model/Snippet.js").SnippetClass;


class Main{
  loadConsole(){
    this.appContainer =  document.getElementById("appcontainer");
    this.terminal = new Terminal("Console","ConsoleInput",this.appContainer);
  }
  loadSnippets(){
    this.snippets = new SnippetClass();
    this.snippetsContainer = document.createElement("div");
    ReactDOM.render( <SNIPPETS_CONTAINER />, this.snippetsContainer);
    this.appContainer.appendChild(this.snippetsContainer);
  }
}

window.onload = function() {
  let main = new Main();
  main.loadConsole();
  main.loadSnippets();
};

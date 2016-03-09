"use strict";
/*
  const ReactDOM = require("react-dom");
  const React = require("react");


  regarder le content encoding sur les headers
*/

const Terminal = require("./model/Terminal.js").Terminal;
const SnippetClass = require("./model/Snippet.js").SnippetClass;


class Main{
  loadConsole(){
    this.appContainer =  document.getElementById("appcontainer");
    this.terminal = new Terminal("Console","ConsoleInput",this.appContainer);
  }
  loadSnippets(){
    this.snippets = new SnippetClass("ConsoleInput", this.appContainer);

  }
}

window.onload = function() {
  let main = new Main();
  main.loadConsole();
  main.loadSnippets();
};

"use strict";
/*
  const ReactDOM = require("react-dom");
  const React = require("react");


  regarder le content encoding sur les headers
*/
const pageLocation = process.cwd();
const Terminal = require(`${pageLocation}/dist/model/Terminal`).Terminal;
const SnippetClass = require(`${pageLocation}/dist/model/Snippet`).SnippetClass;

class Main{
    
   constructor() {
    this.appContainer = document.getElementById("app");
   }    

  loadConsole(){
      
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

// use contenteEditable = true
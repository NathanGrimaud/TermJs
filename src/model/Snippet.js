"use strict";
// const React = require('React');
const ReactDOM = require("react-dom");
const React = require("react");
const SNIPPETS_CONTAINER = require("../components/SnippetsContainer.js");

export class SnippetClass {
  constructor(appContainer) {
    this.snippetsContainer = document.createElement("div");
    ReactDOM.render( <SNIPPETS_CONTAINER />, this.snippetsContainer);
    appContainer.appendChild(this.snippetsContainer);
    this.loadEvents();
  }
  loadEvents(){
    this.snippets = document.getElementsByClassName("snippet");
    console.log(this.snippets);
    this.snippets.forEach((snip)=>{
      snip.addEventListener("click",(evt)=>console.log(evt.target));
    });
  }
}

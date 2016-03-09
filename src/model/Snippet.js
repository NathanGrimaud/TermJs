"use strict";
// const React = require('React');
const ReactDOM = require("react-dom");
const React = require("react");
const SNIPPETS_CONTAINER = require("../components/SnippetsContainer.js");

export class SnippetClass {
  constructor(consoleInput, appContainer) {
    this._snippetsContainer = document.createElement("div");
    this._consoleInput = document.getElementById(consoleInput);
    ReactDOM.render( <SNIPPETS_CONTAINER />, this._snippetsContainer);
    appContainer.appendChild(this._snippetsContainer);
    this.loadEvents();
  }
  loadEvents(){
    this._snippets = document.getElementsByClassName("snippet");

    [].forEach.call(this._snippets,(snip)=>{
      console.log(snip);
      snip.addEventListener("click",(evt)=>{
        // 2 * parent because react adds a span
          console.log(evt.target.parentElement.parentElement);
      });
    });
  }
}

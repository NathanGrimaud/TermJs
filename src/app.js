"use strict";
const ReactDOM = require('react-dom');
const React = require('react');
const CONSOLE_COMPONENT = require('./components/ConsoleComponent.jsx');

class Console {
  constructor(input, focusCallback, blurCallback) {
    this._input = input;
    this._focusCallback = focusCallback;
    this._blurCallback = blurCallback;
    console.log("Console created");
    console.log(this._focusCallback() , this._blurCallback());
  }
  init() {
    console.log("init",this._input);
    this._input.addEventListener("onfocus", ()=>this._focusCallback());
    /*this._input.addEventListener("onblur", () => {
      this._input.removeEventListener("focus", ()=>this._focusHandler());
      this._blurCallback();
    });*/
  }
}

window.onload = function() {
  ReactDOM.render( < CONSOLE_COMPONENT / > ,
    document.getElementById('appcontainer'));
  let c_input = document.getElementById("console_input");
  let console_instance = new Console(c_input, () => console.log("focus is on"), () => console.log("focus is of"));
  console_instance.init();
}

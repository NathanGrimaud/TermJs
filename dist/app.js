"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactDOM = require("react-dom");
var React = require("react");
var CONSOLE_COMPONENT = require("./components/ConsoleComponent.js");
var SNIPPETS_CONTAINER = require("./components/SnippetsContainer.js");
var ConsoleClass = require("./model/ConsoleClass.js").ConsoleClass;
// const hljs = require("highlight.js");

var Main = function Main() {
  _classCallCheck(this, Main);

  var ConsoleInstance = new ConsoleClass("Console", "ConsoleInput");
  this.console = ConsoleInstance;
  // hljs.initHighlightingOnLoad();
};

window.onload = function () {
  var appContainer = document.getElementById("appcontainer");
  ReactDOM.render(React.createElement(CONSOLE_COMPONENT, null), appContainer);
  var snippetsContainer = document.createElement("div");
  ReactDOM.render(React.createElement(SNIPPETS_CONTAINER, null), snippetsContainer);
  appContainer.appendChild(snippetsContainer);
  new Main();
};
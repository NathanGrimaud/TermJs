"use strict";
/*
  const ReactDOM = require("react-dom");
  const React = require("react");


  regarder le content encoding sur les headers
*/

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Terminal = require("./model/Terminal.js").Terminal;
var SnippetClass = require("./model/Snippet.js").SnippetClass;

var Main = function () {
  function Main() {
    _classCallCheck(this, Main);
  }

  _createClass(Main, [{
    key: "loadConsole",
    value: function loadConsole() {
      this.appContainer = document.getElementById("appcontainer");
      this.terminal = new Terminal("Console", "ConsoleInput", this.appContainer);
    }
  }, {
    key: "loadSnippets",
    value: function loadSnippets() {
      this.snippets = new SnippetClass("ConsoleInput", this.appContainer);
    }
  }]);

  return Main;
}();

window.onload = function () {
  var main = new Main();
  main.loadConsole();
  main.loadSnippets();
};
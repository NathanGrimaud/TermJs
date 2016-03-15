"use strict";
// const React = require('React');

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactDOM = require("react-dom");
var React = require("react");
var SNIPPETS_CONTAINER = require("../components/SnippetsContainer.js");

var SnippetClass = exports.SnippetClass = function () {
  function SnippetClass(consoleInput, appContainer) {
    _classCallCheck(this, SnippetClass);

    this._snippetsContainer = document.createElement("div");
    this._consoleInput = document.getElementById(consoleInput);
    ReactDOM.render(React.createElement(SNIPPETS_CONTAINER, null), this._snippetsContainer);
    appContainer.appendChild(this._snippetsContainer);
    this.loadEvents();
  }

  _createClass(SnippetClass, [{
    key: "loadEvents",
    value: function loadEvents() {
      var _this = this;

      this._snippets = document.getElementsByClassName("snippet");

      [].forEach.call(this._snippets, function (snip) {
        //console.log(snip);
        snip.addEventListener("click", function (evt) {
          // 2 * parent because react adds a span
          var snippetDiv = evt.target.parentElement.parentElement;
          var snippetCommand = snippetDiv.getElementsByClassName("command")[0];
          console.log(snippetDiv, snippetCommand, snippetDiv.getElementsByClassName("command"));
          _this._consoleInput.value = snippetCommand.innerHTML;
        });
      });
    }
  }]);

  return SnippetClass;
}();
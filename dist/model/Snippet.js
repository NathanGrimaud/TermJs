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
  function SnippetClass(appContainer) {
    _classCallCheck(this, SnippetClass);

    this.snippetsContainer = document.createElement("div");
    ReactDOM.render(React.createElement(SNIPPETS_CONTAINER, null), this.snippetsContainer);
    appContainer.appendChild(this.snippetsContainer);
    this.loadEvents();
  }

  _createClass(SnippetClass, [{
    key: "loadEvents",
    value: function loadEvents() {
      this.snippets = document.getElementsByClassName("snippet");
      console.log(this.snippets);
      this.snippets.forEach(function (snip) {
        snip.addEventListener("click", function (evt) {
          return console.log(evt.target);
        });
      });
    }
  }]);

  return SnippetClass;
}();
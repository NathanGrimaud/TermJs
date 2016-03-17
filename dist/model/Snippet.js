"use strict";
// const React = require('React');

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactDOM = require("react-dom");
var React = require("react");
var SNIPPET = require("../components/SnippetComponent");
var SNIPPETS_CONTAINER = require("../components/SnippetsContainer");
var data = require("../private/snippets.json");

var SnippetClass = exports.SnippetClass = function SnippetClass(consoleInput, appContainer) {
    var _this = this;

    _classCallCheck(this, SnippetClass);

    this._snippetsContainer = document.createElement("div");
    this._consoleInput = document.getElementById(consoleInput);

    this._sinppetsInstance = ReactDOM.render(React.createElement(
        SNIPPETS_CONTAINER,
        null,
        data.snippets.map(function (val) {
            return React.createElement(SNIPPET, { key: val.key, _console: _this._consoleInput, name: val.name, command: val.command });
        })
    ), this._snippetsContainer);

    appContainer.appendChild(this._snippetsContainer);
};
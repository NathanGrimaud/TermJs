"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SnippetClass = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//const React = require("react");
var ReactDOM = require("react-dom");
var pageLocation = process.cwd();

var SNIPPET = require(pageLocation + "/dist/components/SnippetComponent").SnippetComponent;
var SNIPPETS_CONTAINER = require(pageLocation + "/dist/components/SnippetsContainer").SnippetsContainerComponent;
var data = require(pageLocation + "/dist/private/snippets.json");

var SnippetClass = exports.SnippetClass = function SnippetClass(consoleInput, appContainer) {
    var _this = this;

    _classCallCheck(this, SnippetClass);

    this._snippetsContainer = document.createElement("div");

    this._consoleInput = document.getElementById(consoleInput);

    this._sinppetsInstance = ReactDOM.render(_react2.default.createElement(
        SNIPPETS_CONTAINER,
        null,
        data.snippets.map(function (val) {
            return _react2.default.createElement(SNIPPET, { key: val.key, _console: _this._consoleInput, name: val.name, command: val.command });
        })
    ), this._snippetsContainer);

    appContainer.appendChild(this._snippetsContainer);
};
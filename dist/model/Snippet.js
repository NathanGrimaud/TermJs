"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fs = require("fs");

var Snippet = exports.Snippet = function () {
  /**
   * The model to create, update and save a snippet
   *
   * @param {string} name
   * @param {string} command
   * @returns Snippet
   */

  function Snippet(name, command) {
    _classCallCheck(this, Snippet);

    this._snippetsJson = require("../private/snippets.json");

    this._name = name;
    this._command = command;

    this._snippetsJson.snippets.push({
      key: this._snippetsJson.snippets.length + 1,
      name: this._name,
      command: this._command
    });
  }

  _createClass(Snippet, [{
    key: "save",
    value: function save() {

      console.log(require("../private/snippets.json"));

      fs.writeFile("./dist/private/snippets.json", JSON.stringify(this._snippetsJson), function (err) {
        if (err) throw err;
        console.log(require("../private/snippets.json"));
      });
    }
  }, {
    key: "update",
    value: function update(name, command) {

      if (this._name !== name) this._name = name;
      if (this._command !== command) this._command = command;
    }
  }]);

  return Snippet;
}();
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fs = require("fs");
var _ = require("lodash");

var Snippet = exports.Snippet = function () {
  /**
   * The model to create, update and save a snippet
   *
   * @param {string} name
   * @param {string} command
   * @param {number} key
   * @returns Snippet
   */

  function Snippet(name, command, key) {
    _classCallCheck(this, Snippet);

    this._snippetsJson = require("../private/snippets.json");
    this._name = name;
    this._command = command;

    this._key = key === undefined ? this._snippetsJson.snippets.length + 1 : key;
  }

  _createClass(Snippet, [{
    key: "pushNewSnippet",
    value: function pushNewSnippet() {

      this._snippetsJson.snippets.push({
        key: this._key,
        name: this._name,
        command: this._command
      });
      this.save();
    }
  }, {
    key: "update",
    value: function update() {
      var _this = this;

      var snipIndex = _.findIndex(this._snippetsJson.snippets, function (o) {
        return o.key === _this._key;
      });
      var snip = { "command": this._command, "name": this._name, "key": this._key };
      this._snippetsJson.snippets[snipIndex] = snip;
      this.save();
    }
  }, {
    key: "save",
    value: function save() {

      fs.writeFile("./dist/private/snippets.json", JSON.stringify(this._snippetsJson), function (err) {
        if (err) throw err;
        console.log(require("../private/snippets.json"));
      });
    }
  }]);

  return Snippet;
}();
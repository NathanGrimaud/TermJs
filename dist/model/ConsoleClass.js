"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactDOM = require("react-dom");
var React = require("react");
var ConsoleOutputComponent = require("../components/ConsoleOutputComponent.js");

var spawn = require("cross-spawn");

var ConsoleClass = exports.ConsoleClass = function () {
  function ConsoleClass(Console, ConsuleInput) {
    _classCallCheck(this, ConsoleClass);

    // console.log("creating new instance of ConsoleClass");
    this._console = document.getElementById(Console);
    this._consoleInput = document.getElementById(ConsuleInput);
    // console.log(this._consoleInput);
    this._history = [];
    this._indexHistory = 0;
    this.loadEvent();
  }

  _createClass(ConsoleClass, [{
    key: "loadEvent",
    value: function loadEvent() {
      var _this = this;

      this._consoleInput.addEventListener("keydown", function (keyEvent) {
        if (keyEvent.keyIdentifier === "Enter" && _this._consoleInput.value !== "") _this.onEnterPress();
        if (keyEvent.keyIdentifier === "Up" && _this._history.length > 0) //-1
          _this.onUpDownPress(-1);
        if (keyEvent.keyIdentifier === "Down" && _this._history.length > 0) // +1
          _this.onUpDownPress(1);
      });
    }
  }, {
    key: "onUpDownPress",
    value: function onUpDownPress(value) {
      if (this._indexHistory >= 0 && this._indexHistory <= this._history.length) {
        this._consoleInput.value = this._history[this._indexHistory] !== undefined ? this._history[this._indexHistory] : "";
        if (value === 1 && this._indexHistory + value <= this._history.length || value === -1 && this._indexHistory + value >= 0) this._indexHistory += this._indexHistory + value >= 0 ? value : 0;
      }
    }
  }, {
    key: "createOutput",
    value: function createOutput(data) {
      var output = document.createElement("div");
      ReactDOM.render(React.createElement(ConsoleOutputComponent, { text: data.toString()
      }), output);
      return output;
    }
  }, {
    key: "onEnterPress",
    value: function onEnterPress() {
      var _this2 = this;

      var fullCommand = this._consoleInput.value;

      this._history.push(fullCommand);
      this._indexHistory += 1;

      var commandArray = fullCommand.split(" ").filter(function (elem, i) {
        return i !== 0;
      });
      var firstCommand = fullCommand.split(" ")[0];
      if (firstCommand === "cd") {

        process.chdir(commandArray[0]);
        console.log(process.cwd());
        this._console.insertBefore(this.createOutput(process.cwd()), this._console.childNodes[this._console.childNodes.length - 1]);
      } else {

        // console.log(commandArray);
        var command = spawn(firstCommand, commandArray, "utf8");

        command.stdout.on("data", function (data) {
          if (data !== "") _this2._console.insertBefore(_this2.createOutput(data), _this2._console.childNodes[_this2._console.childNodes.length - 1]);
        });
        command.stderr.on("data", function (data) {
          if (data !== "") _this2._console.insertBefore(_this2.createOutput(data), _this2._console.childNodes[_this2._console.childNodes.length - 1]);
        });
        command.stderr.on("data", function (data) {
          if (data !== "") _this2._console.insertBefore(_this2.createOutput(data), _this2._console.childNodes[_this2._console.childNodes.length - 1]);
        });
        command.on("error", function (error) {
          console.log(error);
        });
        command.on("close", function () {
          // this._console.insertBefore(this.createOutput("\n"), this._console.childNodes[this._console.childNodes.length - 1]);
        });
        this._consoleInput.value = "";
      }
    }
  }]);

  return ConsoleClass;
}();
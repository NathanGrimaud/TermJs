"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactDOM = require("react-dom");
var React = require("react");
var CONSOLE_COMPONENT = require("../components/ConsoleComponent.js");
var ConsoleOutputComponent = require("../components/ConsoleOutputComponent.js");
var spawn = require("cross-spawn").spawn;
var exec = require("child_process").exec;

var Terminal = exports.Terminal = function () {
    function Terminal(Console, ConsuleInput, appContainer) {
        _classCallCheck(this, Terminal);

        ReactDOM.render(React.createElement(CONSOLE_COMPONENT, null), appContainer);
        this._console = document.getElementById(Console);
        this._consoleInput = document.getElementById(ConsuleInput);
        this._history = [];
        this._indexHistory = 0;
        this.loadEvent();
    }

    _createClass(Terminal, [{
        key: "loadEvent",
        value: function loadEvent() {
            var _this = this;

            this._consoleInput.addEventListener("keydown", function (keyEvent) {

                if (keyEvent.keyIdentifier === "Enter" && _this._consoleInput.innerHTML !== "") _this.onEnterPress();

                if (keyEvent.keyIdentifier === "Up" && _this._history.length > 0) //-1

                    _this.onUpDownPress(-1);

                if (keyEvent.keyIdentifier === "Down" && _this._history.length > 0) // +1

                    _this.onUpDownPress(1);

                // c key = U+0043
                if (keyEvent.keyIdentifier === "U+0043" && keyEvent.ctrlKey) // +1

                    _this.stopCommand();
            });
        }
    }, {
        key: "isWindows",
        value: function isWindows() {
            return (/^win/.test(process.platform)
            );
        }
    }, {
        key: "stopCommand",
        value: function stopCommand() {
            console.log("stop");
            if (this._runningCmd !== null && this._runningCmd !== undefined) {
                console.log(this._runningCmd);
                this._runningCmd.stdin.pause();
                var pid = this._runningCmd.pid;
                if (!this.isWindows()) this._runningCmd.kill(pid);else exec('taskkill /PID ' + this._runningCmd.pid + ' /T /F', function (err, stdout, stderr) {
                    console.log(err);
                    console.log(stdout);
                    console.log(stderr);
                });
            }
        }
    }, {
        key: "onUpDownPress",
        value: function onUpDownPress(value) {

            if (this._indexHistory >= 0 && this._indexHistory <= this._history.length) {

                this._consoleInput.innerHTML = this._history[this._indexHistory] !== undefined ? this._history[this._indexHistory] : "";

                if (value === 1 && this._indexHistory + value <= this._history.length || value === -1 && this._indexHistory + value >= 0) this._indexHistory += this._indexHistory + value >= 0 ? value : 0;
            }
        }
    }, {
        key: "insertOutput",
        value: function insertOutput(data) {

            var output = this.createOutput(data);
            var refElement = this._console.childNodes[this._console.childNodes.length - 1];
            this._console.insertBefore(output, refElement);
        }
    }, {
        key: "createOutput",
        value: function createOutput(data) {

            var output = document.createElement("div");
            console.log(data.toString("utf8"));
            ReactDOM.render(React.createElement(ConsoleOutputComponent, { text: data.toString("utf8") }), output);
            return output;
        }
    }, {
        key: "execCommand",
        value: function execCommand(comm, args) {
            var _this2 = this;

            return new Promise(function (resolve, reject) {

                var command = spawn(comm, args, "utf8", { detached: true });

                _this2._runningCmd = command;

                command.stdout.on("data", function (data) {
                    _this2.insertOutput(data);
                });

                command.on("error", function (error) {
                    reject(error);
                });

                _this2._consoleInput.innerHTML = "";
                command.on("close", function () {
                    _this2._runningCmd = null;
                    resolve();
                });
            });
        }
    }, {
        key: "execCD",
        value: function execCD(destination) {
            process.chdir(destination);
            var output = this.createOutput(process.cwd());
            var refElem = this._console.childNodes[this._console.childNodes.length - 1];
            this._console.insertBefore(output, refElem);
        }
    }, {
        key: "getCommand",
        value: function getCommand(rawCommand) {
            return {
                "raw": rawCommand,
                "command": rawCommand.split(" ")[0],
                "args": rawCommand.split(" ").filter(function (elem, i) {
                    return i !== 0;
                })
            };
        }
    }, {
        key: "onEnterPress",
        value: function onEnterPress() {

            var fullCommand = this.getCommand(this._consoleInput.innerHTML);

            this._history.push(fullCommand.raw);
            this._indexHistory += 1;

            var firstCommand = fullCommand.command;
            var commandArray = fullCommand.args;

            if (firstCommand === "cd") {

                var destination = commandArray[0];
                this.execCD(destination);
            } else {
                this.execCommand(firstCommand, commandArray).then(function () {
                    return console.log("command ended");
                }, function (error) {
                    return console.log(error);
                });
            }
        }
    }]);

    return Terminal;
}();
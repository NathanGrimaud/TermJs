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

        this._consoleComponent = ReactDOM.render(React.createElement(CONSOLE_COMPONENT, null), appContainer);
        this._console = document.getElementById(Console);
        this._consoleInput = document.getElementById(ConsuleInput);
        this._history = [];
        this._indexHistory = 0;
        this.loadEvent();
    }
    /**
     * Terminal.loadEvent :
     * 
     * loads all keyboards events related to a terminal
     */


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
        /**
        * terminal.isWindows : 
        * return true if app is running on window
        */

    }, {
        key: "isWindows",
        value: function isWindows() {

            return (/^win/.test(process.platform)
            );
        }
        /**
         * terminal.stopCommand : 
         * 
         * stops a process if one is running in background
         * 
         * window don't allow to kill directly from PID,
         * need to lunch a taskill command
         */

    }, {
        key: "stopCommand",
        value: function stopCommand() {

            if (this._runningCmd !== null && this._runningCmd !== undefined) {

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
        value: function insertOutput(data, className) {

            var output = this.createOutput(data, className);
            var refElement = this._console.childNodes[this._console.childNodes.length - 1];
            this._console.insertBefore(output, refElement);
        }
    }, {
        key: "createOutput",
        value: function createOutput(data, className) {

            if (className === undefined) className = "";
            var output = document.createElement("div");
            ReactDOM.render(React.createElement(ConsoleOutputComponent, { className: className, text: data.toString("utf8") }), output);
            return output;
        }
        /**
         * Terminal.execCommand : 
         * 
         * execs a command , needs 2 params, cmd and arguments array
         */

    }, {
        key: "execCommand",
        value: function execCommand(comm, args) {
            var _this2 = this;

            return new Promise(function (resolve, reject) {

                var command = spawn(comm, args, "utf8", { detached: true });

                _this2._runningCmd = command;

                command.stdout.on("data", function (data) {

                    if (data !== undefined) ;
                    _this2.insertOutput(data, "output");
                });

                command.stderr.on("data", function (data) {

                    if (data !== undefined) _this2.insertOutput(data, "output");
                });

                command.on("error", function (error) {
                    reject(error);
                });

                command.on("close", function () {
                    _this2._runningCmd = null;
                    resolve();
                });
            });
        }
        /**
         * Moves current directory to parameter
         * 
         * spawning cd isn't working, so need to use node.chdir
         */

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

            this._consoleComponent.changePath();

            var fullCommand = this.getCommand(this._consoleInput.innerHTML);

            this._history.push(fullCommand.raw);
            this._indexHistory += 1;

            var firstCommand = fullCommand.command;
            var commandArray = fullCommand.args;

            this._consoleInput.innerHTML = "";

            var raw = process.cwd() + " : " + fullCommand.raw;

            this.insertOutput(raw, "raw");

            if (firstCommand === "cd") {

                var destination = commandArray[0];
                this.execCD(destination);
            } else {
                this.execCommand(firstCommand, commandArray).then(function () {
                    return console.log("command ended");
                }, function (error) {
                    return console.log("___", error, "____");
                });
            }
        }
    }]);

    return Terminal;
}();
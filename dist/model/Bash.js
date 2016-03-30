"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var spawn = require("cross-spawn").spawn;
var exec = require("child_process").exec;
var ConsoleOutputComponent = require("../components/ConsoleOutputComponent.js").ConsoleOutputComponent;

/**
 * @class Bash
 */

var Bash = exports.Bash = function () {
    /**
     * @constructor
     * @param {ConsoleComponent} console - the ref to the console.
     */

    function Bash(console) {
        _classCallCheck(this, Bash);

        this._console = console;
    }

    _createClass(Bash, [{
        key: "insertOutput",
        value: function insertOutput(data, className) {
            this._console.insertOutput(data, className);
        }
    }, {
        key: "move",
        value: function move(destination) {
            process.chdir(destination);
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
    }, {
        key: "stopCommand",
        value: function stopCommand() {

            if (this._runningCmd !== null && this._runningCmd !== undefined) {

                this._runningCmd.stdin.pause();
                var pid = this._runningCmd.pid;

                if (!this.isWindows()) this._runningCmd.kill(pid);else {
                    exec('taskkill /PID ' + this._runningCmd.pid + ' /T /F', function (err, stdout, stderr) {
                        console.log(err);
                        console.log(stdout);
                        console.log(stderr);
                    });
                }
            }
        }
        /**
         * get command called by component
         * and executes it
         * @param {string} command - the input inner string
         */

    }, {
        key: "exec",
        value: function exec(command) {

            var comm = command.split(" ")[0];
            var args = command.split(" ").filter(function (val, index) {
                return index !== 0;
            });
            var path = process.cwd();
            var backlog = path + "> " + command;

            this.insertOutput(backlog, "backlog");

            if (comm === "cd") this.move(args[0]);else this.execCommand(comm, args).then(function (_) {
                return console.log('done');
            });
        }

        /**
        * Terminal.execCommand : 
        * @param {String} comm - main command
        * @param {String[]} args - command arguments
        * execs a command , needs 2 params, cmd and arguments array
        */

    }, {
        key: "execCommand",
        value: function execCommand(comm, args) {
            var _this = this;

            return new Promise(function (resolve, reject) {

                var command = spawn(comm, args, "utf8", { detached: true });

                _this._runningCmd = command;

                command.stdout.on("data", function (data) {

                    if (data !== undefined) ;
                    _this.insertOutput(data, "output");
                });

                command.stderr.on("data", function (data) {

                    if (data !== undefined) _this.insertOutput(data, "output");
                });

                command.on("error", function (error) {
                    reject(error);
                });

                command.on("close", function () {
                    _this._runningCmd = null;
                    resolve();
                });
            });
        }
    }]);

    return Bash;
}();
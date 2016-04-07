"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var spawn = require("cross-spawn").spawn;
var exec = require("child_process").exec;

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
    /**
     * inserts an output to the console
     *
     * @param {string} data - the text to fill the output
     * @param {string} className - the class added to the output
     * @returns {void}
     */


    _createClass(Bash, [{
        key: "insertOutput",
        value: function insertOutput(data, className) {
            this._console.insertOutput(data, className);
        }
    }, {
        key: "move",
        value: function move(destination, input) {
            process.chdir(destination);
            this._console.updatePath();
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
         * stops the instance running command
         *
         * @returns
         */

    }, {
        key: "stopCommand",
        value: function stopCommand() {

            if (this._runningCmd !== null && this._runningCmd !== undefined) {

                this._runningCmd.stdin.pause();
                var pid = this._runningCmd.pid;

                if (!this.isWindows()) this._runningCmd.kill(pid);else {
                    exec("taskkill /PID " + this._runningCmd.pid + " /T /F", function (err, stdout, stderr) {
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

            if (comm === "cd") this.move(args[0]);else this.execCommand(comm, args).then(function () {
                return console.log("done");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbC9CYXNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBQ0EsSUFBTSxRQUFRLFFBQVEsYUFBUixFQUF1QixLQUF2QjtBQUNkLElBQU0sT0FBTyxRQUFRLGVBQVIsRUFBeUIsSUFBekI7Ozs7OztJQUtBOzs7Ozs7QUFLVCxhQUxTLElBS1QsQ0FBWSxPQUFaLEVBQXFCOzhCQUxaLE1BS1k7O0FBQ2pCLGFBQUssUUFBTCxHQUFnQixPQUFoQixDQURpQjtLQUFyQjs7Ozs7Ozs7OztpQkFMUzs7cUNBZUssTUFBSyxXQUFXO0FBQzFCLGlCQUFLLFFBQUwsQ0FBYyxZQUFkLENBQTJCLElBQTNCLEVBQWdDLFNBQWhDLEVBRDBCOzs7OzZCQUd6QixhQUFhLE9BQU07QUFDcEIsb0JBQVEsS0FBUixDQUFjLFdBQWQsRUFEb0I7QUFFcEIsaUJBQUssUUFBTCxDQUFjLFVBQWQsR0FGb0I7Ozs7Ozs7OztvQ0FRWjs7QUFFUixtQkFBTyxRQUFPLElBQVAsQ0FBWSxRQUFRLFFBQVIsQ0FBbkI7Y0FGUTs7Ozs7Ozs7OztzQ0FTRTs7QUFFVixnQkFBSSxLQUFLLFdBQUwsS0FBcUIsSUFBckIsSUFBNkIsS0FBSyxXQUFMLEtBQXFCLFNBQXJCLEVBQWdDOztBQUU3RCxxQkFBSyxXQUFMLENBQWlCLEtBQWpCLENBQXVCLEtBQXZCLEdBRjZEO0FBRzdELG9CQUFJLE1BQU0sS0FBSyxXQUFMLENBQWlCLEdBQWpCLENBSG1EOztBQUs3RCxvQkFBSSxDQUFDLEtBQUssU0FBTCxFQUFELEVBQ0EsS0FBSyxXQUFMLENBQWlCLElBQWpCLENBQXNCLEdBQXRCLEVBREosS0FFSTtBQUNELHlCQUFLLG1CQUFtQixLQUFLLFdBQUwsQ0FBaUIsR0FBakIsR0FBdUIsUUFBMUMsRUFBb0QsVUFBQyxHQUFELEVBQU0sTUFBTixFQUFjLE1BQWQsRUFBeUI7QUFDN0UsZ0NBQVEsR0FBUixDQUFZLEdBQVosRUFENkU7QUFFN0UsZ0NBQVEsR0FBUixDQUFZLE1BQVosRUFGNkU7QUFHN0UsZ0NBQVEsR0FBUixDQUFZLE1BQVosRUFINkU7cUJBQXpCLENBQXpELENBREM7aUJBRko7YUFMSjs7Ozs7Ozs7Ozs2QkFxQkMsU0FBUTs7QUFFVCxnQkFBSSxPQUFPLFFBQVEsS0FBUixDQUFjLEdBQWQsRUFBbUIsQ0FBbkIsQ0FBUCxDQUZLO0FBR1QsZ0JBQUksT0FBTyxRQUFRLEtBQVIsQ0FBYyxHQUFkLEVBQW1CLE1BQW5CLENBQTBCLFVBQUMsR0FBRCxFQUFLLEtBQUw7dUJBQWEsVUFBUyxDQUFUO2FBQWIsQ0FBakMsQ0FISztBQUlULGdCQUFJLE9BQU8sUUFBUSxHQUFSLEVBQVAsQ0FKSztBQUtULGdCQUFJLFVBQWEsY0FBUyxPQUF0QixDQUxLOztBQU9ULGlCQUFLLFlBQUwsQ0FBa0IsT0FBbEIsRUFBMEIsU0FBMUIsRUFQUzs7QUFTVCxnQkFBRyxTQUFTLElBQVQsRUFDQyxLQUFLLElBQUwsQ0FBVSxLQUFLLENBQUwsQ0FBVixFQURKLEtBSUksS0FBSyxXQUFMLENBQWlCLElBQWpCLEVBQXNCLElBQXRCLEVBQTRCLElBQTVCLENBQWlDO3VCQUFJLFFBQVEsR0FBUixDQUFZLE1BQVo7YUFBSixDQUFqQyxDQUpKOzs7Ozs7Ozs7Ozs7b0NBYVEsTUFBTSxNQUFNOzs7QUFFcEIsbUJBQU8sSUFBSSxPQUFKLENBQVksVUFBQyxPQUFELEVBQVUsTUFBVixFQUFxQjs7QUFHcEMsb0JBQUksVUFBVSxNQUFNLElBQU4sRUFBWSxJQUFaLEVBQWtCLE1BQWxCLEVBQTBCLEVBQUUsVUFBVSxJQUFWLEVBQTVCLENBQVYsQ0FIZ0M7O0FBS3BDLHNCQUFLLFdBQUwsR0FBbUIsT0FBbkIsQ0FMb0M7O0FBT3BDLHdCQUFRLE1BQVIsQ0FBZSxFQUFmLENBQWtCLE1BQWxCLEVBQTBCLFVBQUMsSUFBRCxFQUFVOztBQUVoQyx3QkFBSSxTQUFTLFNBQVQsRUFBbUIsQ0FBdkI7QUFDSSwwQkFBSyxZQUFMLENBQWtCLElBQWxCLEVBQXdCLFFBQXhCLEVBSDRCO2lCQUFWLENBQTFCLENBUG9DOztBQWNwQyx3QkFBUSxNQUFSLENBQWUsRUFBZixDQUFrQixNQUFsQixFQUEwQixVQUFDLElBQUQsRUFBVTs7QUFFaEMsd0JBQUksU0FBUyxTQUFULEVBQ0EsTUFBSyxZQUFMLENBQWtCLElBQWxCLEVBQXdCLFFBQXhCLEVBREo7aUJBRnNCLENBQTFCLENBZG9DOztBQXFCcEMsd0JBQVEsRUFBUixDQUFXLE9BQVgsRUFBb0IsVUFBQyxLQUFELEVBQVc7QUFDM0IsMkJBQU8sS0FBUCxFQUQyQjtpQkFBWCxDQUFwQixDQXJCb0M7O0FBeUJwQyx3QkFBUSxFQUFSLENBQVcsT0FBWCxFQUFvQixZQUFNO0FBQ3RCLDBCQUFLLFdBQUwsR0FBbUIsSUFBbkIsQ0FEc0I7QUFFdEIsOEJBRnNCO2lCQUFOLENBQXBCLENBekJvQzthQUFyQixDQUFuQixDQUZvQjs7OztXQWhGZiIsImZpbGUiOiJCYXNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbmNvbnN0IHNwYXduID0gcmVxdWlyZShcImNyb3NzLXNwYXduXCIpLnNwYXduO1xyXG5jb25zdCBleGVjID0gcmVxdWlyZShcImNoaWxkX3Byb2Nlc3NcIikuZXhlYztcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgQmFzaFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJhc2gge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqIEBwYXJhbSB7Q29uc29sZUNvbXBvbmVudH0gY29uc29sZSAtIHRoZSByZWYgdG8gdGhlIGNvbnNvbGUuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGNvbnNvbGUpIHtcclxuICAgICAgICB0aGlzLl9jb25zb2xlID0gY29uc29sZTtcclxuICAgIH1cclxuICAvKipcclxuICAgKiBpbnNlcnRzIGFuIG91dHB1dCB0byB0aGUgY29uc29sZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEgLSB0aGUgdGV4dCB0byBmaWxsIHRoZSBvdXRwdXRcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIC0gdGhlIGNsYXNzIGFkZGVkIHRvIHRoZSBvdXRwdXRcclxuICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgKi9cclxuICAgICBpbnNlcnRPdXRwdXQoZGF0YSxjbGFzc05hbWUpIHtcclxuICAgICAgICB0aGlzLl9jb25zb2xlLmluc2VydE91dHB1dChkYXRhLGNsYXNzTmFtZSk7XHJcbiAgICB9XHJcbiAgICBtb3ZlKGRlc3RpbmF0aW9uLCBpbnB1dCl7XHJcbiAgICAgICAgcHJvY2Vzcy5jaGRpcihkZXN0aW5hdGlvbik7XHJcbiAgICAgICAgdGhpcy5fY29uc29sZS51cGRhdGVQYXRoKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICogdGVybWluYWwuaXNXaW5kb3dzIDpcclxuICAgICogcmV0dXJuIHRydWUgaWYgYXBwIGlzIHJ1bm5pbmcgb24gd2luZG93XHJcbiAgICAqL1xyXG4gICAgaXNXaW5kb3dzKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gL153aW4vLnRlc3QocHJvY2Vzcy5wbGF0Zm9ybSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIHN0b3BzIHRoZSBpbnN0YW5jZSBydW5uaW5nIGNvbW1hbmRcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBzdG9wQ29tbWFuZCgpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3J1bm5pbmdDbWQgIT09IG51bGwgJiYgdGhpcy5fcnVubmluZ0NtZCAhPT0gdW5kZWZpbmVkKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9ydW5uaW5nQ21kLnN0ZGluLnBhdXNlKCk7XHJcbiAgICAgICAgICAgIGxldCBwaWQgPSB0aGlzLl9ydW5uaW5nQ21kLnBpZDtcclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1dpbmRvd3MoKSlcclxuICAgICAgICAgICAgICAgIHRoaXMuX3J1bm5pbmdDbWQua2lsbChwaWQpO1xyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICBleGVjKFwidGFza2tpbGwgL1BJRCBcIiArIHRoaXMuX3J1bm5pbmdDbWQucGlkICsgXCIgL1QgL0ZcIiwgKGVyciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0ZG91dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc3RkZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXQgY29tbWFuZCBjYWxsZWQgYnkgY29tcG9uZW50XHJcbiAgICAgKiBhbmQgZXhlY3V0ZXMgaXRcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb21tYW5kIC0gdGhlIGlucHV0IGlubmVyIHN0cmluZ1xyXG4gICAgICovXHJcbiAgICBleGVjKGNvbW1hbmQpe1xyXG5cclxuICAgICAgICBsZXQgY29tbSA9IGNvbW1hbmQuc3BsaXQoXCIgXCIpWzBdO1xyXG4gICAgICAgIGxldCBhcmdzID0gY29tbWFuZC5zcGxpdChcIiBcIikuZmlsdGVyKCh2YWwsaW5kZXgpPT5pbmRleCE9PSAwKTtcclxuICAgICAgICBsZXQgcGF0aCA9IHByb2Nlc3MuY3dkKCk7XHJcbiAgICAgICAgbGV0IGJhY2tsb2cgPSBgJHtwYXRofT4gJHtjb21tYW5kfWA7XHJcblxyXG4gICAgICAgIHRoaXMuaW5zZXJ0T3V0cHV0KGJhY2tsb2csXCJiYWNrbG9nXCIpO1xyXG5cclxuICAgICAgICBpZihjb21tID09PSBcImNkXCIpXHJcbiAgICAgICAgICAgIHRoaXMubW92ZShhcmdzWzBdKTtcclxuXHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLmV4ZWNDb21tYW5kKGNvbW0sYXJncykudGhlbigoKT0+Y29uc29sZS5sb2coXCJkb25lXCIpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogVGVybWluYWwuZXhlY0NvbW1hbmQgOlxyXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gY29tbSAtIG1haW4gY29tbWFuZFxyXG4gICAgKiBAcGFyYW0ge1N0cmluZ1tdfSBhcmdzIC0gY29tbWFuZCBhcmd1bWVudHNcclxuICAgICogZXhlY3MgYSBjb21tYW5kICwgbmVlZHMgMiBwYXJhbXMsIGNtZCBhbmQgYXJndW1lbnRzIGFycmF5XHJcbiAgICAqL1xyXG4gICAgZXhlY0NvbW1hbmQoY29tbSwgYXJncykge1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCBjb21tYW5kID0gc3Bhd24oY29tbSwgYXJncywgXCJ1dGY4XCIsIHsgZGV0YWNoZWQ6IHRydWUgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9ydW5uaW5nQ21kID0gY29tbWFuZDtcclxuXHJcbiAgICAgICAgICAgIGNvbW1hbmQuc3Rkb3V0Lm9uKFwiZGF0YVwiLCAoZGF0YSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhICE9PSB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zZXJ0T3V0cHV0KGRhdGEsIFwib3V0cHV0XCIpO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb21tYW5kLnN0ZGVyci5vbihcImRhdGFcIiwgKGRhdGEpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zZXJ0T3V0cHV0KGRhdGEsIFwib3V0cHV0XCIpO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb21tYW5kLm9uKFwiZXJyb3JcIiwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbW1hbmQub24oXCJjbG9zZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ydW5uaW5nQ21kID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
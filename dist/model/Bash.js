"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var spawn = require("cross-spawn").spawn;
var exec = require("child_process").exec;
var Search = require("./Search.js").Search;
var isWindows = require("../tools.js").isWindows;
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
        this._search = new Search();
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
        value: function move(destination) {
            process.chdir(destination);
            this._console.updatePath();
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

                if (!isWindows()) this._runningCmd.kill(pid);else {
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

            if (comm === "cd") this.move(args[0]);else if (comm === "google") this.search(args.join(" "));else this.execCommand(comm, args).then(function () {
                return console.log("done");
            });
        }
    }, {
        key: "search",
        value: function search(keyWorkds) {
            var _this = this;

            this._search.search(keyWorkds, function (res) {
                _this.insertOutput(res);
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
    }]);

    return Bash;
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbC9CYXNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBQ0EsSUFBTSxRQUFRLFFBQVEsYUFBUixFQUF1QixLQUF2QjtBQUNkLElBQU0sT0FBTyxRQUFRLGVBQVIsRUFBeUIsSUFBekI7QUFDYixJQUFNLFNBQVMsUUFBUSxhQUFSLEVBQXVCLE1BQXZCO0FBQ2YsSUFBTSxZQUFZLFFBQVEsYUFBUixFQUF1QixTQUF2Qjs7Ozs7SUFJTDs7Ozs7O0FBS1QsYUFMUyxJQUtULENBQVksT0FBWixFQUFxQjs4QkFMWixNQUtZOztBQUNqQixhQUFLLFFBQUwsR0FBZ0IsT0FBaEIsQ0FEaUI7QUFFakIsYUFBSyxPQUFMLEdBQWUsSUFBSSxNQUFKLEVBQWYsQ0FGaUI7S0FBckI7Ozs7Ozs7Ozs7aUJBTFM7O3FDQWdCSyxNQUFLLFdBQVc7QUFDMUIsaUJBQUssUUFBTCxDQUFjLFlBQWQsQ0FBMkIsSUFBM0IsRUFBZ0MsU0FBaEMsRUFEMEI7Ozs7NkJBR3pCLGFBQVk7QUFDYixvQkFBUSxLQUFSLENBQWMsV0FBZCxFQURhO0FBRWIsaUJBQUssUUFBTCxDQUFjLFVBQWQsR0FGYTs7Ozs7Ozs7Ozs7c0NBVUg7O0FBRVYsZ0JBQUksS0FBSyxXQUFMLEtBQXFCLElBQXJCLElBQTZCLEtBQUssV0FBTCxLQUFxQixTQUFyQixFQUFnQzs7QUFFN0QscUJBQUssV0FBTCxDQUFpQixLQUFqQixDQUF1QixLQUF2QixHQUY2RDtBQUc3RCxvQkFBSSxNQUFNLEtBQUssV0FBTCxDQUFpQixHQUFqQixDQUhtRDs7QUFLN0Qsb0JBQUksQ0FBQyxXQUFELEVBQ0EsS0FBSyxXQUFMLENBQWlCLElBQWpCLENBQXNCLEdBQXRCLEVBREosS0FFSTtBQUNELHlCQUFLLG1CQUFtQixLQUFLLFdBQUwsQ0FBaUIsR0FBakIsR0FBdUIsUUFBMUMsRUFBb0QsVUFBQyxHQUFELEVBQU0sTUFBTixFQUFjLE1BQWQsRUFBeUI7QUFDN0UsZ0NBQVEsR0FBUixDQUFZLEdBQVosRUFENkU7QUFFN0UsZ0NBQVEsR0FBUixDQUFZLE1BQVosRUFGNkU7QUFHN0UsZ0NBQVEsR0FBUixDQUFZLE1BQVosRUFINkU7cUJBQXpCLENBQXpELENBREM7aUJBRko7YUFMSjs7Ozs7Ozs7Ozs2QkFxQkMsU0FBUTs7QUFFVCxnQkFBSSxPQUFPLFFBQVEsS0FBUixDQUFjLEdBQWQsRUFBbUIsQ0FBbkIsQ0FBUCxDQUZLO0FBR1QsZ0JBQUksT0FBTyxRQUFRLEtBQVIsQ0FBYyxHQUFkLEVBQW1CLE1BQW5CLENBQTBCLFVBQUMsR0FBRCxFQUFLLEtBQUw7dUJBQWEsVUFBUyxDQUFUO2FBQWIsQ0FBakMsQ0FISztBQUlULGdCQUFJLE9BQU8sUUFBUSxHQUFSLEVBQVAsQ0FKSztBQUtULGdCQUFJLFVBQWEsY0FBUyxPQUF0QixDQUxLOztBQU9ULGlCQUFLLFlBQUwsQ0FBa0IsT0FBbEIsRUFBMEIsU0FBMUIsRUFQUzs7QUFTVCxnQkFBRyxTQUFTLElBQVQsRUFDQyxLQUFLLElBQUwsQ0FBVSxLQUFLLENBQUwsQ0FBVixFQURKLEtBRUssSUFBRyxTQUFTLFFBQVQsRUFDSixLQUFLLE1BQUwsQ0FBWSxLQUFLLElBQUwsQ0FBVSxHQUFWLENBQVosRUFEQyxLQUdELEtBQUssV0FBTCxDQUFpQixJQUFqQixFQUFzQixJQUF0QixFQUE0QixJQUE1QixDQUFpQzt1QkFBSSxRQUFRLEdBQVIsQ0FBWSxNQUFaO2FBQUosQ0FBakMsQ0FIQzs7OzsrQkFLRixXQUFVOzs7QUFDYixpQkFBSyxPQUFMLENBQWEsTUFBYixDQUFvQixTQUFwQixFQUE4QixVQUFDLEdBQUQsRUFBTztBQUNqQyxzQkFBSyxZQUFMLENBQWtCLEdBQWxCLEVBRGlDO2FBQVAsQ0FBOUIsQ0FEYTs7Ozs7Ozs7Ozs7b0NBV0wsTUFBTSxNQUFNOzs7QUFFcEIsbUJBQU8sSUFBSSxPQUFKLENBQVksVUFBQyxPQUFELEVBQVUsTUFBVixFQUFxQjs7QUFHcEMsb0JBQUksVUFBVSxNQUFNLElBQU4sRUFBWSxJQUFaLEVBQWtCLE1BQWxCLEVBQTBCLEVBQUUsVUFBVSxJQUFWLEVBQTVCLENBQVYsQ0FIZ0M7O0FBS3BDLHVCQUFLLFdBQUwsR0FBbUIsT0FBbkIsQ0FMb0M7O0FBT3BDLHdCQUFRLE1BQVIsQ0FBZSxFQUFmLENBQWtCLE1BQWxCLEVBQTBCLFVBQUMsSUFBRCxFQUFVOztBQUVoQyx3QkFBSSxTQUFTLFNBQVQsRUFBbUIsQ0FBdkI7QUFDSSwyQkFBSyxZQUFMLENBQWtCLElBQWxCLEVBQXdCLFFBQXhCLEVBSDRCO2lCQUFWLENBQTFCLENBUG9DOztBQWNwQyx3QkFBUSxNQUFSLENBQWUsRUFBZixDQUFrQixNQUFsQixFQUEwQixVQUFDLElBQUQsRUFBVTs7QUFFaEMsd0JBQUksU0FBUyxTQUFULEVBQ0EsT0FBSyxZQUFMLENBQWtCLElBQWxCLEVBQXdCLFFBQXhCLEVBREo7aUJBRnNCLENBQTFCLENBZG9DOztBQXFCcEMsd0JBQVEsRUFBUixDQUFXLE9BQVgsRUFBb0IsVUFBQyxLQUFELEVBQVc7QUFDM0IsMkJBQU8sS0FBUCxFQUQyQjtpQkFBWCxDQUFwQixDQXJCb0M7O0FBeUJwQyx3QkFBUSxFQUFSLENBQVcsT0FBWCxFQUFvQixZQUFNO0FBQ3RCLDJCQUFLLFdBQUwsR0FBbUIsSUFBbkIsQ0FEc0I7QUFFdEIsOEJBRnNCO2lCQUFOLENBQXBCLENBekJvQzthQUFyQixDQUFuQixDQUZvQjs7OztXQS9FZiIsImZpbGUiOiJCYXNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbmNvbnN0IHNwYXduID0gcmVxdWlyZShcImNyb3NzLXNwYXduXCIpLnNwYXduO1xyXG5jb25zdCBleGVjID0gcmVxdWlyZShcImNoaWxkX3Byb2Nlc3NcIikuZXhlYztcclxuY29uc3QgU2VhcmNoID0gcmVxdWlyZShcIi4vU2VhcmNoLmpzXCIpLlNlYXJjaDtcclxuY29uc3QgaXNXaW5kb3dzID0gcmVxdWlyZShcIi4uL3Rvb2xzLmpzXCIpLmlzV2luZG93cztcclxuLyoqXHJcbiAqIEBjbGFzcyBCYXNoXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQmFzaCB7XHJcbiAgICAvKipcclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICogQHBhcmFtIHtDb25zb2xlQ29tcG9uZW50fSBjb25zb2xlIC0gdGhlIHJlZiB0byB0aGUgY29uc29sZS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY29uc29sZSkge1xyXG4gICAgICAgIHRoaXMuX2NvbnNvbGUgPSBjb25zb2xlO1xyXG4gICAgICAgIHRoaXMuX3NlYXJjaCA9IG5ldyBTZWFyY2goKTtcclxuICAgIH1cclxuICAvKipcclxuICAgKiBpbnNlcnRzIGFuIG91dHB1dCB0byB0aGUgY29uc29sZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEgLSB0aGUgdGV4dCB0byBmaWxsIHRoZSBvdXRwdXRcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIC0gdGhlIGNsYXNzIGFkZGVkIHRvIHRoZSBvdXRwdXRcclxuICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgKi9cclxuICAgICBpbnNlcnRPdXRwdXQoZGF0YSxjbGFzc05hbWUpIHtcclxuICAgICAgICB0aGlzLl9jb25zb2xlLmluc2VydE91dHB1dChkYXRhLGNsYXNzTmFtZSk7XHJcbiAgICB9XHJcbiAgICBtb3ZlKGRlc3RpbmF0aW9uKXtcclxuICAgICAgICBwcm9jZXNzLmNoZGlyKGRlc3RpbmF0aW9uKTtcclxuICAgICAgICB0aGlzLl9jb25zb2xlLnVwZGF0ZVBhdGgoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHN0b3BzIHRoZSBpbnN0YW5jZSBydW5uaW5nIGNvbW1hbmRcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBzdG9wQ29tbWFuZCgpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3J1bm5pbmdDbWQgIT09IG51bGwgJiYgdGhpcy5fcnVubmluZ0NtZCAhPT0gdW5kZWZpbmVkKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9ydW5uaW5nQ21kLnN0ZGluLnBhdXNlKCk7XHJcbiAgICAgICAgICAgIGxldCBwaWQgPSB0aGlzLl9ydW5uaW5nQ21kLnBpZDtcclxuXHJcbiAgICAgICAgICAgIGlmICghaXNXaW5kb3dzKCkpXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ydW5uaW5nQ21kLmtpbGwocGlkKTtcclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgZXhlYyhcInRhc2traWxsIC9QSUQgXCIgKyB0aGlzLl9ydW5uaW5nQ21kLnBpZCArIFwiIC9UIC9GXCIsIChlcnIsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzdGRvdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0ZGVycik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogZ2V0IGNvbW1hbmQgY2FsbGVkIGJ5IGNvbXBvbmVudFxyXG4gICAgICogYW5kIGV4ZWN1dGVzIGl0XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29tbWFuZCAtIHRoZSBpbnB1dCBpbm5lciBzdHJpbmdcclxuICAgICAqL1xyXG4gICAgZXhlYyhjb21tYW5kKXtcclxuXHJcbiAgICAgICAgbGV0IGNvbW0gPSBjb21tYW5kLnNwbGl0KFwiIFwiKVswXTtcclxuICAgICAgICBsZXQgYXJncyA9IGNvbW1hbmQuc3BsaXQoXCIgXCIpLmZpbHRlcigodmFsLGluZGV4KT0+aW5kZXghPT0gMCk7XHJcbiAgICAgICAgbGV0IHBhdGggPSBwcm9jZXNzLmN3ZCgpO1xyXG4gICAgICAgIGxldCBiYWNrbG9nID0gYCR7cGF0aH0+ICR7Y29tbWFuZH1gO1xyXG5cclxuICAgICAgICB0aGlzLmluc2VydE91dHB1dChiYWNrbG9nLFwiYmFja2xvZ1wiKTtcclxuXHJcbiAgICAgICAgaWYoY29tbSA9PT0gXCJjZFwiKVxyXG4gICAgICAgICAgICB0aGlzLm1vdmUoYXJnc1swXSk7XHJcbiAgICAgICAgZWxzZSBpZihjb21tID09PSBcImdvb2dsZVwiKVxyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaChhcmdzLmpvaW4oXCIgXCIpKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuZXhlY0NvbW1hbmQoY29tbSxhcmdzKS50aGVuKCgpPT5jb25zb2xlLmxvZyhcImRvbmVcIikpO1xyXG4gICAgfVxyXG4gICAgc2VhcmNoKGtleVdvcmtkcyl7XHJcbiAgICAgICAgdGhpcy5fc2VhcmNoLnNlYXJjaChrZXlXb3JrZHMsKHJlcyk9PntcclxuICAgICAgICAgICAgdGhpcy5pbnNlcnRPdXRwdXQocmVzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgKiBUZXJtaW5hbC5leGVjQ29tbWFuZCA6XHJcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb21tIC0gbWFpbiBjb21tYW5kXHJcbiAgICAqIEBwYXJhbSB7U3RyaW5nW119IGFyZ3MgLSBjb21tYW5kIGFyZ3VtZW50c1xyXG4gICAgKiBleGVjcyBhIGNvbW1hbmQgLCBuZWVkcyAyIHBhcmFtcywgY21kIGFuZCBhcmd1bWVudHMgYXJyYXlcclxuICAgICovXHJcbiAgICBleGVjQ29tbWFuZChjb21tLCBhcmdzKSB7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IGNvbW1hbmQgPSBzcGF3bihjb21tLCBhcmdzLCBcInV0ZjhcIiwgeyBkZXRhY2hlZDogdHJ1ZSB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3J1bm5pbmdDbWQgPSBjb21tYW5kO1xyXG5cclxuICAgICAgICAgICAgY29tbWFuZC5zdGRvdXQub24oXCJkYXRhXCIsIChkYXRhKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEgIT09IHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnNlcnRPdXRwdXQoZGF0YSwgXCJvdXRwdXRcIik7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbW1hbmQuc3RkZXJyLm9uKFwiZGF0YVwiLCAoZGF0YSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnNlcnRPdXRwdXQoZGF0YSwgXCJvdXRwdXRcIik7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbW1hbmQub24oXCJlcnJvclwiLCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29tbWFuZC5vbihcImNsb3NlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3J1bm5pbmdDbWQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19
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
        this._search = new Search("http://google.com");
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
            var s = this._search.search(keyWorkds);
            this.insertOutput(s);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbC9CYXNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBQ0EsSUFBTSxRQUFRLFFBQVEsYUFBUixFQUF1QixLQUF2QjtBQUNkLElBQU0sT0FBTyxRQUFRLGVBQVIsRUFBeUIsSUFBekI7QUFDYixJQUFNLFNBQVMsUUFBUSxhQUFSLEVBQXVCLE1BQXZCO0FBQ2YsSUFBTSxZQUFZLFFBQVEsYUFBUixFQUF1QixTQUF2Qjs7Ozs7SUFJTDs7Ozs7O0FBS1QsYUFMUyxJQUtULENBQVksT0FBWixFQUFxQjs4QkFMWixNQUtZOztBQUNqQixhQUFLLFFBQUwsR0FBZ0IsT0FBaEIsQ0FEaUI7QUFFakIsYUFBSyxPQUFMLEdBQWUsSUFBSSxNQUFKLENBQVcsbUJBQVgsQ0FBZixDQUZpQjtLQUFyQjs7Ozs7Ozs7OztpQkFMUzs7cUNBZ0JLLE1BQUssV0FBVztBQUMxQixpQkFBSyxRQUFMLENBQWMsWUFBZCxDQUEyQixJQUEzQixFQUFnQyxTQUFoQyxFQUQwQjs7Ozs2QkFHekIsYUFBYSxPQUFNO0FBQ3BCLG9CQUFRLEtBQVIsQ0FBYyxXQUFkLEVBRG9CO0FBRXBCLGlCQUFLLFFBQUwsQ0FBYyxVQUFkLEdBRm9COzs7Ozs7Ozs7OztzQ0FVVjs7QUFFVixnQkFBSSxLQUFLLFdBQUwsS0FBcUIsSUFBckIsSUFBNkIsS0FBSyxXQUFMLEtBQXFCLFNBQXJCLEVBQWdDOztBQUU3RCxxQkFBSyxXQUFMLENBQWlCLEtBQWpCLENBQXVCLEtBQXZCLEdBRjZEO0FBRzdELG9CQUFJLE1BQU0sS0FBSyxXQUFMLENBQWlCLEdBQWpCLENBSG1EOztBQUs3RCxvQkFBSSxDQUFDLFdBQUQsRUFDQSxLQUFLLFdBQUwsQ0FBaUIsSUFBakIsQ0FBc0IsR0FBdEIsRUFESixLQUVJO0FBQ0QseUJBQUssbUJBQW1CLEtBQUssV0FBTCxDQUFpQixHQUFqQixHQUF1QixRQUExQyxFQUFvRCxVQUFDLEdBQUQsRUFBTSxNQUFOLEVBQWMsTUFBZCxFQUF5QjtBQUM3RSxnQ0FBUSxHQUFSLENBQVksR0FBWixFQUQ2RTtBQUU3RSxnQ0FBUSxHQUFSLENBQVksTUFBWixFQUY2RTtBQUc3RSxnQ0FBUSxHQUFSLENBQVksTUFBWixFQUg2RTtxQkFBekIsQ0FBekQsQ0FEQztpQkFGSjthQUxKOzs7Ozs7Ozs7OzZCQXFCQyxTQUFROztBQUVULGdCQUFJLE9BQU8sUUFBUSxLQUFSLENBQWMsR0FBZCxFQUFtQixDQUFuQixDQUFQLENBRks7QUFHVCxnQkFBSSxPQUFPLFFBQVEsS0FBUixDQUFjLEdBQWQsRUFBbUIsTUFBbkIsQ0FBMEIsVUFBQyxHQUFELEVBQUssS0FBTDt1QkFBYSxVQUFTLENBQVQ7YUFBYixDQUFqQyxDQUhLO0FBSVQsZ0JBQUksT0FBTyxRQUFRLEdBQVIsRUFBUCxDQUpLO0FBS1QsZ0JBQUksVUFBYSxjQUFTLE9BQXRCLENBTEs7O0FBT1QsaUJBQUssWUFBTCxDQUFrQixPQUFsQixFQUEwQixTQUExQixFQVBTOztBQVNULGdCQUFHLFNBQVMsSUFBVCxFQUNDLEtBQUssSUFBTCxDQUFVLEtBQUssQ0FBTCxDQUFWLEVBREosS0FFSyxJQUFHLFNBQVMsUUFBVCxFQUNKLEtBQUssTUFBTCxDQUFZLEtBQUssSUFBTCxDQUFVLEdBQVYsQ0FBWixFQURDLEtBR0QsS0FBSyxXQUFMLENBQWlCLElBQWpCLEVBQXNCLElBQXRCLEVBQTRCLElBQTVCLENBQWlDO3VCQUFJLFFBQVEsR0FBUixDQUFZLE1BQVo7YUFBSixDQUFqQyxDQUhDOzs7OytCQUtGLFdBQVU7QUFDYixnQkFBSSxJQUFJLEtBQUssT0FBTCxDQUFhLE1BQWIsQ0FBb0IsU0FBcEIsQ0FBSixDQURTO0FBRWIsaUJBQUssWUFBTCxDQUFrQixDQUFsQixFQUZhOzs7Ozs7Ozs7OztvQ0FVTCxNQUFNLE1BQU07OztBQUVwQixtQkFBTyxJQUFJLE9BQUosQ0FBWSxVQUFDLE9BQUQsRUFBVSxNQUFWLEVBQXFCOztBQUdwQyxvQkFBSSxVQUFVLE1BQU0sSUFBTixFQUFZLElBQVosRUFBa0IsTUFBbEIsRUFBMEIsRUFBRSxVQUFVLElBQVYsRUFBNUIsQ0FBVixDQUhnQzs7QUFLcEMsc0JBQUssV0FBTCxHQUFtQixPQUFuQixDQUxvQzs7QUFPcEMsd0JBQVEsTUFBUixDQUFlLEVBQWYsQ0FBa0IsTUFBbEIsRUFBMEIsVUFBQyxJQUFELEVBQVU7O0FBRWhDLHdCQUFJLFNBQVMsU0FBVCxFQUFtQixDQUF2QjtBQUNJLDBCQUFLLFlBQUwsQ0FBa0IsSUFBbEIsRUFBd0IsUUFBeEIsRUFINEI7aUJBQVYsQ0FBMUIsQ0FQb0M7O0FBY3BDLHdCQUFRLE1BQVIsQ0FBZSxFQUFmLENBQWtCLE1BQWxCLEVBQTBCLFVBQUMsSUFBRCxFQUFVOztBQUVoQyx3QkFBSSxTQUFTLFNBQVQsRUFDQSxNQUFLLFlBQUwsQ0FBa0IsSUFBbEIsRUFBd0IsUUFBeEIsRUFESjtpQkFGc0IsQ0FBMUIsQ0Fkb0M7O0FBcUJwQyx3QkFBUSxFQUFSLENBQVcsT0FBWCxFQUFvQixVQUFDLEtBQUQsRUFBVztBQUMzQiwyQkFBTyxLQUFQLEVBRDJCO2lCQUFYLENBQXBCLENBckJvQzs7QUF5QnBDLHdCQUFRLEVBQVIsQ0FBVyxPQUFYLEVBQW9CLFlBQU07QUFDdEIsMEJBQUssV0FBTCxHQUFtQixJQUFuQixDQURzQjtBQUV0Qiw4QkFGc0I7aUJBQU4sQ0FBcEIsQ0F6Qm9DO2FBQXJCLENBQW5CLENBRm9COzs7O1dBOUVmIiwiZmlsZSI6IkJhc2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuY29uc3Qgc3Bhd24gPSByZXF1aXJlKFwiY3Jvc3Mtc3Bhd25cIikuc3Bhd247XHJcbmNvbnN0IGV4ZWMgPSByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKS5leGVjO1xyXG5jb25zdCBTZWFyY2ggPSByZXF1aXJlKFwiLi9TZWFyY2guanNcIikuU2VhcmNoO1xyXG5jb25zdCBpc1dpbmRvd3MgPSByZXF1aXJlKFwiLi4vdG9vbHMuanNcIikuaXNXaW5kb3dzO1xyXG4vKipcclxuICogQGNsYXNzIEJhc2hcclxuICovXHJcbmV4cG9ydCBjbGFzcyBCYXNoIHtcclxuICAgIC8qKlxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKiBAcGFyYW0ge0NvbnNvbGVDb21wb25lbnR9IGNvbnNvbGUgLSB0aGUgcmVmIHRvIHRoZSBjb25zb2xlLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25zb2xlKSB7XHJcbiAgICAgICAgdGhpcy5fY29uc29sZSA9IGNvbnNvbGU7XHJcbiAgICAgICAgdGhpcy5fc2VhcmNoID0gbmV3IFNlYXJjaChcImh0dHA6Ly9nb29nbGUuY29tXCIpO1xyXG4gICAgfVxyXG4gIC8qKlxyXG4gICAqIGluc2VydHMgYW4gb3V0cHV0IHRvIHRoZSBjb25zb2xlXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YSAtIHRoZSB0ZXh0IHRvIGZpbGwgdGhlIG91dHB1dFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgLSB0aGUgY2xhc3MgYWRkZWQgdG8gdGhlIG91dHB1dFxyXG4gICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAqL1xyXG4gICAgIGluc2VydE91dHB1dChkYXRhLGNsYXNzTmFtZSkge1xyXG4gICAgICAgIHRoaXMuX2NvbnNvbGUuaW5zZXJ0T3V0cHV0KGRhdGEsY2xhc3NOYW1lKTtcclxuICAgIH1cclxuICAgIG1vdmUoZGVzdGluYXRpb24sIGlucHV0KXtcclxuICAgICAgICBwcm9jZXNzLmNoZGlyKGRlc3RpbmF0aW9uKTtcclxuICAgICAgICB0aGlzLl9jb25zb2xlLnVwZGF0ZVBhdGgoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHN0b3BzIHRoZSBpbnN0YW5jZSBydW5uaW5nIGNvbW1hbmRcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBzdG9wQ29tbWFuZCgpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3J1bm5pbmdDbWQgIT09IG51bGwgJiYgdGhpcy5fcnVubmluZ0NtZCAhPT0gdW5kZWZpbmVkKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9ydW5uaW5nQ21kLnN0ZGluLnBhdXNlKCk7XHJcbiAgICAgICAgICAgIGxldCBwaWQgPSB0aGlzLl9ydW5uaW5nQ21kLnBpZDtcclxuXHJcbiAgICAgICAgICAgIGlmICghaXNXaW5kb3dzKCkpXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ydW5uaW5nQ21kLmtpbGwocGlkKTtcclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgZXhlYyhcInRhc2traWxsIC9QSUQgXCIgKyB0aGlzLl9ydW5uaW5nQ21kLnBpZCArIFwiIC9UIC9GXCIsIChlcnIsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzdGRvdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0ZGVycik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogZ2V0IGNvbW1hbmQgY2FsbGVkIGJ5IGNvbXBvbmVudFxyXG4gICAgICogYW5kIGV4ZWN1dGVzIGl0XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29tbWFuZCAtIHRoZSBpbnB1dCBpbm5lciBzdHJpbmdcclxuICAgICAqL1xyXG4gICAgZXhlYyhjb21tYW5kKXtcclxuXHJcbiAgICAgICAgbGV0IGNvbW0gPSBjb21tYW5kLnNwbGl0KFwiIFwiKVswXTtcclxuICAgICAgICBsZXQgYXJncyA9IGNvbW1hbmQuc3BsaXQoXCIgXCIpLmZpbHRlcigodmFsLGluZGV4KT0+aW5kZXghPT0gMCk7XHJcbiAgICAgICAgbGV0IHBhdGggPSBwcm9jZXNzLmN3ZCgpO1xyXG4gICAgICAgIGxldCBiYWNrbG9nID0gYCR7cGF0aH0+ICR7Y29tbWFuZH1gO1xyXG5cclxuICAgICAgICB0aGlzLmluc2VydE91dHB1dChiYWNrbG9nLFwiYmFja2xvZ1wiKTtcclxuXHJcbiAgICAgICAgaWYoY29tbSA9PT0gXCJjZFwiKVxyXG4gICAgICAgICAgICB0aGlzLm1vdmUoYXJnc1swXSk7XHJcbiAgICAgICAgZWxzZSBpZihjb21tID09PSBcImdvb2dsZVwiKVxyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaChhcmdzLmpvaW4oXCIgXCIpKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuZXhlY0NvbW1hbmQoY29tbSxhcmdzKS50aGVuKCgpPT5jb25zb2xlLmxvZyhcImRvbmVcIikpO1xyXG4gICAgfVxyXG4gICAgc2VhcmNoKGtleVdvcmtkcyl7XHJcbiAgICAgICAgbGV0IHMgPSB0aGlzLl9zZWFyY2guc2VhcmNoKGtleVdvcmtkcyk7XHJcbiAgICAgICAgdGhpcy5pbnNlcnRPdXRwdXQocyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICogVGVybWluYWwuZXhlY0NvbW1hbmQgOlxyXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gY29tbSAtIG1haW4gY29tbWFuZFxyXG4gICAgKiBAcGFyYW0ge1N0cmluZ1tdfSBhcmdzIC0gY29tbWFuZCBhcmd1bWVudHNcclxuICAgICogZXhlY3MgYSBjb21tYW5kICwgbmVlZHMgMiBwYXJhbXMsIGNtZCBhbmQgYXJndW1lbnRzIGFycmF5XHJcbiAgICAqL1xyXG4gICAgZXhlY0NvbW1hbmQoY29tbSwgYXJncykge1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCBjb21tYW5kID0gc3Bhd24oY29tbSwgYXJncywgXCJ1dGY4XCIsIHsgZGV0YWNoZWQ6IHRydWUgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9ydW5uaW5nQ21kID0gY29tbWFuZDtcclxuXHJcbiAgICAgICAgICAgIGNvbW1hbmQuc3Rkb3V0Lm9uKFwiZGF0YVwiLCAoZGF0YSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhICE9PSB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zZXJ0T3V0cHV0KGRhdGEsIFwib3V0cHV0XCIpO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb21tYW5kLnN0ZGVyci5vbihcImRhdGFcIiwgKGRhdGEpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zZXJ0T3V0cHV0KGRhdGEsIFwib3V0cHV0XCIpO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb21tYW5kLm9uKFwiZXJyb3JcIiwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbW1hbmQub24oXCJjbG9zZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ydW5uaW5nQ21kID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
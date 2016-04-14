"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var spawn = require("cross-spawn").spawn;
var exec = require("child_process").exec;
var Search = require("./Search.js").Search;
var Windows = require("../tools.js").isWindows;
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

                if (!Windows()) this._runningCmd.kill(pid);else {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbC9CYXNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBQ0EsSUFBTSxRQUFRLFFBQVEsYUFBUixFQUF1QixLQUF2QjtBQUNkLElBQU0sT0FBTyxRQUFRLGVBQVIsRUFBeUIsSUFBekI7QUFDYixJQUFNLFNBQVMsUUFBUSxhQUFSLEVBQXVCLE1BQXZCO0FBQ2YsSUFBTSxVQUFVLFFBQVEsYUFBUixFQUF1QixTQUF2Qjs7Ozs7SUFJSDs7Ozs7O0FBS1QsYUFMUyxJQUtULENBQVksT0FBWixFQUFxQjs4QkFMWixNQUtZOztBQUNqQixhQUFLLFFBQUwsR0FBZ0IsT0FBaEIsQ0FEaUI7QUFFakIsYUFBSyxPQUFMLEdBQWUsSUFBSSxNQUFKLENBQVcsbUJBQVgsQ0FBZixDQUZpQjtLQUFyQjs7Ozs7Ozs7OztpQkFMUzs7cUNBZ0JLLE1BQUssV0FBVztBQUMxQixpQkFBSyxRQUFMLENBQWMsWUFBZCxDQUEyQixJQUEzQixFQUFnQyxTQUFoQyxFQUQwQjs7Ozs2QkFHekIsYUFBYSxPQUFNO0FBQ3BCLG9CQUFRLEtBQVIsQ0FBYyxXQUFkLEVBRG9CO0FBRXBCLGlCQUFLLFFBQUwsQ0FBYyxVQUFkLEdBRm9COzs7Ozs7Ozs7OztzQ0FVVjs7QUFFVixnQkFBSSxLQUFLLFdBQUwsS0FBcUIsSUFBckIsSUFBNkIsS0FBSyxXQUFMLEtBQXFCLFNBQXJCLEVBQWdDOztBQUU3RCxxQkFBSyxXQUFMLENBQWlCLEtBQWpCLENBQXVCLEtBQXZCLEdBRjZEO0FBRzdELG9CQUFJLE1BQU0sS0FBSyxXQUFMLENBQWlCLEdBQWpCLENBSG1EOztBQUs3RCxvQkFBSSxDQUFDLFNBQUQsRUFDQSxLQUFLLFdBQUwsQ0FBaUIsSUFBakIsQ0FBc0IsR0FBdEIsRUFESixLQUVJO0FBQ0QseUJBQUssbUJBQW1CLEtBQUssV0FBTCxDQUFpQixHQUFqQixHQUF1QixRQUExQyxFQUFvRCxVQUFDLEdBQUQsRUFBTSxNQUFOLEVBQWMsTUFBZCxFQUF5QjtBQUM3RSxnQ0FBUSxHQUFSLENBQVksR0FBWixFQUQ2RTtBQUU3RSxnQ0FBUSxHQUFSLENBQVksTUFBWixFQUY2RTtBQUc3RSxnQ0FBUSxHQUFSLENBQVksTUFBWixFQUg2RTtxQkFBekIsQ0FBekQsQ0FEQztpQkFGSjthQUxKOzs7Ozs7Ozs7OzZCQXFCQyxTQUFROztBQUVULGdCQUFJLE9BQU8sUUFBUSxLQUFSLENBQWMsR0FBZCxFQUFtQixDQUFuQixDQUFQLENBRks7QUFHVCxnQkFBSSxPQUFPLFFBQVEsS0FBUixDQUFjLEdBQWQsRUFBbUIsTUFBbkIsQ0FBMEIsVUFBQyxHQUFELEVBQUssS0FBTDt1QkFBYSxVQUFTLENBQVQ7YUFBYixDQUFqQyxDQUhLO0FBSVQsZ0JBQUksT0FBTyxRQUFRLEdBQVIsRUFBUCxDQUpLO0FBS1QsZ0JBQUksVUFBYSxjQUFTLE9BQXRCLENBTEs7O0FBT1QsaUJBQUssWUFBTCxDQUFrQixPQUFsQixFQUEwQixTQUExQixFQVBTOztBQVNULGdCQUFHLFNBQVMsSUFBVCxFQUNDLEtBQUssSUFBTCxDQUFVLEtBQUssQ0FBTCxDQUFWLEVBREosS0FFSyxJQUFHLFNBQVMsUUFBVCxFQUNKLEtBQUssTUFBTCxDQUFZLEtBQUssSUFBTCxDQUFVLEdBQVYsQ0FBWixFQURDLEtBR0QsS0FBSyxXQUFMLENBQWlCLElBQWpCLEVBQXNCLElBQXRCLEVBQTRCLElBQTVCLENBQWlDO3VCQUFJLFFBQVEsR0FBUixDQUFZLE1BQVo7YUFBSixDQUFqQyxDQUhDOzs7OytCQUtGLFdBQVU7QUFDYixnQkFBSSxJQUFJLEtBQUssT0FBTCxDQUFhLE1BQWIsQ0FBb0IsU0FBcEIsQ0FBSixDQURTO0FBRWIsaUJBQUssWUFBTCxDQUFrQixDQUFsQixFQUZhOzs7Ozs7Ozs7OztvQ0FVTCxNQUFNLE1BQU07OztBQUVwQixtQkFBTyxJQUFJLE9BQUosQ0FBWSxVQUFDLE9BQUQsRUFBVSxNQUFWLEVBQXFCOztBQUdwQyxvQkFBSSxVQUFVLE1BQU0sSUFBTixFQUFZLElBQVosRUFBa0IsTUFBbEIsRUFBMEIsRUFBRSxVQUFVLElBQVYsRUFBNUIsQ0FBVixDQUhnQzs7QUFLcEMsc0JBQUssV0FBTCxHQUFtQixPQUFuQixDQUxvQzs7QUFPcEMsd0JBQVEsTUFBUixDQUFlLEVBQWYsQ0FBa0IsTUFBbEIsRUFBMEIsVUFBQyxJQUFELEVBQVU7O0FBRWhDLHdCQUFJLFNBQVMsU0FBVCxFQUFtQixDQUF2QjtBQUNJLDBCQUFLLFlBQUwsQ0FBa0IsSUFBbEIsRUFBd0IsUUFBeEIsRUFINEI7aUJBQVYsQ0FBMUIsQ0FQb0M7O0FBY3BDLHdCQUFRLE1BQVIsQ0FBZSxFQUFmLENBQWtCLE1BQWxCLEVBQTBCLFVBQUMsSUFBRCxFQUFVOztBQUVoQyx3QkFBSSxTQUFTLFNBQVQsRUFDQSxNQUFLLFlBQUwsQ0FBa0IsSUFBbEIsRUFBd0IsUUFBeEIsRUFESjtpQkFGc0IsQ0FBMUIsQ0Fkb0M7O0FBcUJwQyx3QkFBUSxFQUFSLENBQVcsT0FBWCxFQUFvQixVQUFDLEtBQUQsRUFBVztBQUMzQiwyQkFBTyxLQUFQLEVBRDJCO2lCQUFYLENBQXBCLENBckJvQzs7QUF5QnBDLHdCQUFRLEVBQVIsQ0FBVyxPQUFYLEVBQW9CLFlBQU07QUFDdEIsMEJBQUssV0FBTCxHQUFtQixJQUFuQixDQURzQjtBQUV0Qiw4QkFGc0I7aUJBQU4sQ0FBcEIsQ0F6Qm9DO2FBQXJCLENBQW5CLENBRm9COzs7O1dBOUVmIiwiZmlsZSI6IkJhc2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuY29uc3Qgc3Bhd24gPSByZXF1aXJlKFwiY3Jvc3Mtc3Bhd25cIikuc3Bhd247XHJcbmNvbnN0IGV4ZWMgPSByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKS5leGVjO1xyXG5jb25zdCBTZWFyY2ggPSByZXF1aXJlKFwiLi9TZWFyY2guanNcIikuU2VhcmNoO1xyXG5jb25zdCBXaW5kb3dzID0gcmVxdWlyZShcIi4uL3Rvb2xzLmpzXCIpLmlzV2luZG93cztcclxuLyoqXHJcbiAqIEBjbGFzcyBCYXNoXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQmFzaCB7XHJcbiAgICAvKipcclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICogQHBhcmFtIHtDb25zb2xlQ29tcG9uZW50fSBjb25zb2xlIC0gdGhlIHJlZiB0byB0aGUgY29uc29sZS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY29uc29sZSkge1xyXG4gICAgICAgIHRoaXMuX2NvbnNvbGUgPSBjb25zb2xlO1xyXG4gICAgICAgIHRoaXMuX3NlYXJjaCA9IG5ldyBTZWFyY2goXCJodHRwOi8vZ29vZ2xlLmNvbVwiKTtcclxuICAgIH1cclxuICAvKipcclxuICAgKiBpbnNlcnRzIGFuIG91dHB1dCB0byB0aGUgY29uc29sZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEgLSB0aGUgdGV4dCB0byBmaWxsIHRoZSBvdXRwdXRcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIC0gdGhlIGNsYXNzIGFkZGVkIHRvIHRoZSBvdXRwdXRcclxuICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgKi9cclxuICAgICBpbnNlcnRPdXRwdXQoZGF0YSxjbGFzc05hbWUpIHtcclxuICAgICAgICB0aGlzLl9jb25zb2xlLmluc2VydE91dHB1dChkYXRhLGNsYXNzTmFtZSk7XHJcbiAgICB9XHJcbiAgICBtb3ZlKGRlc3RpbmF0aW9uLCBpbnB1dCl7XHJcbiAgICAgICAgcHJvY2Vzcy5jaGRpcihkZXN0aW5hdGlvbik7XHJcbiAgICAgICAgdGhpcy5fY29uc29sZS51cGRhdGVQYXRoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzdG9wcyB0aGUgaW5zdGFuY2UgcnVubmluZyBjb21tYW5kXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgc3RvcENvbW1hbmQoKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9ydW5uaW5nQ21kICE9PSBudWxsICYmIHRoaXMuX3J1bm5pbmdDbWQgIT09IHVuZGVmaW5lZCkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fcnVubmluZ0NtZC5zdGRpbi5wYXVzZSgpO1xyXG4gICAgICAgICAgICBsZXQgcGlkID0gdGhpcy5fcnVubmluZ0NtZC5waWQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVdpbmRvd3MoKSlcclxuICAgICAgICAgICAgICAgIHRoaXMuX3J1bm5pbmdDbWQua2lsbChwaWQpO1xyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICBleGVjKFwidGFza2tpbGwgL1BJRCBcIiArIHRoaXMuX3J1bm5pbmdDbWQucGlkICsgXCIgL1QgL0ZcIiwgKGVyciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0ZG91dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc3RkZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXQgY29tbWFuZCBjYWxsZWQgYnkgY29tcG9uZW50XHJcbiAgICAgKiBhbmQgZXhlY3V0ZXMgaXRcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb21tYW5kIC0gdGhlIGlucHV0IGlubmVyIHN0cmluZ1xyXG4gICAgICovXHJcbiAgICBleGVjKGNvbW1hbmQpe1xyXG5cclxuICAgICAgICBsZXQgY29tbSA9IGNvbW1hbmQuc3BsaXQoXCIgXCIpWzBdO1xyXG4gICAgICAgIGxldCBhcmdzID0gY29tbWFuZC5zcGxpdChcIiBcIikuZmlsdGVyKCh2YWwsaW5kZXgpPT5pbmRleCE9PSAwKTtcclxuICAgICAgICBsZXQgcGF0aCA9IHByb2Nlc3MuY3dkKCk7XHJcbiAgICAgICAgbGV0IGJhY2tsb2cgPSBgJHtwYXRofT4gJHtjb21tYW5kfWA7XHJcblxyXG4gICAgICAgIHRoaXMuaW5zZXJ0T3V0cHV0KGJhY2tsb2csXCJiYWNrbG9nXCIpO1xyXG5cclxuICAgICAgICBpZihjb21tID09PSBcImNkXCIpXHJcbiAgICAgICAgICAgIHRoaXMubW92ZShhcmdzWzBdKTtcclxuICAgICAgICBlbHNlIGlmKGNvbW0gPT09IFwiZ29vZ2xlXCIpXHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoKGFyZ3Muam9pbihcIiBcIikpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5leGVjQ29tbWFuZChjb21tLGFyZ3MpLnRoZW4oKCk9PmNvbnNvbGUubG9nKFwiZG9uZVwiKSk7XHJcbiAgICB9XHJcbiAgICBzZWFyY2goa2V5V29ya2RzKXtcclxuICAgICAgICBsZXQgcyA9IHRoaXMuX3NlYXJjaC5zZWFyY2goa2V5V29ya2RzKTtcclxuICAgICAgICB0aGlzLmluc2VydE91dHB1dChzKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgKiBUZXJtaW5hbC5leGVjQ29tbWFuZCA6XHJcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb21tIC0gbWFpbiBjb21tYW5kXHJcbiAgICAqIEBwYXJhbSB7U3RyaW5nW119IGFyZ3MgLSBjb21tYW5kIGFyZ3VtZW50c1xyXG4gICAgKiBleGVjcyBhIGNvbW1hbmQgLCBuZWVkcyAyIHBhcmFtcywgY21kIGFuZCBhcmd1bWVudHMgYXJyYXlcclxuICAgICovXHJcbiAgICBleGVjQ29tbWFuZChjb21tLCBhcmdzKSB7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IGNvbW1hbmQgPSBzcGF3bihjb21tLCBhcmdzLCBcInV0ZjhcIiwgeyBkZXRhY2hlZDogdHJ1ZSB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3J1bm5pbmdDbWQgPSBjb21tYW5kO1xyXG5cclxuICAgICAgICAgICAgY29tbWFuZC5zdGRvdXQub24oXCJkYXRhXCIsIChkYXRhKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEgIT09IHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnNlcnRPdXRwdXQoZGF0YSwgXCJvdXRwdXRcIik7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbW1hbmQuc3RkZXJyLm9uKFwiZGF0YVwiLCAoZGF0YSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnNlcnRPdXRwdXQoZGF0YSwgXCJvdXRwdXRcIik7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbW1hbmQub24oXCJlcnJvclwiLCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29tbWFuZC5vbihcImNsb3NlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3J1bm5pbmdDbWQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19
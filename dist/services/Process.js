"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Process = exports.Process = function () {
    /**
     * class Process
     * @constructor
     * @param {ConsoleComponent} term - the terminal instance the current term will use
     */

    function Process(term) {
        _classCallCheck(this, Process);

        this._console = term;
    }
    /**
     * @function Process.exec
     * @param {String} command 
     * - the command that will be sent to the terminal instance
     */


    _createClass(Process, [{
        key: "exec",
        value: function exec(command) {
            this._console.exec(command);
        }
    }, {
        key: "stopCommand",
        value: function stopCommand() {
            this._console.stopCommand();
        }
    }]);

    return Process;
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9Qcm9jZXNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0lBQ2E7Ozs7Ozs7QUFNVCxhQU5TLE9BTVQsQ0FBWSxJQUFaLEVBQWtCOzhCQU5ULFNBTVM7O0FBQ2QsYUFBSyxRQUFMLEdBQWdCLElBQWhCLENBRGM7S0FBbEI7Ozs7Ozs7O2lCQU5TOzs2QkFjSixTQUFTO0FBQ1YsaUJBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsT0FBbkIsRUFEVTs7OztzQ0FHRDtBQUNULGlCQUFLLFFBQUwsQ0FBYyxXQUFkLEdBRFM7Ozs7V0FqQkoiLCJmaWxlIjoiUHJvY2Vzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5leHBvcnQgY2xhc3MgUHJvY2VzcyB7XHJcbiAgICAvKipcclxuICAgICAqIGNsYXNzIFByb2Nlc3NcclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICogQHBhcmFtIHtDb25zb2xlQ29tcG9uZW50fSB0ZXJtIC0gdGhlIHRlcm1pbmFsIGluc3RhbmNlIHRoZSBjdXJyZW50IHRlcm0gd2lsbCB1c2VcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IodGVybSkge1xyXG4gICAgICAgIHRoaXMuX2NvbnNvbGUgPSB0ZXJtO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBAZnVuY3Rpb24gUHJvY2Vzcy5leGVjXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY29tbWFuZCBcclxuICAgICAqIC0gdGhlIGNvbW1hbmQgdGhhdCB3aWxsIGJlIHNlbnQgdG8gdGhlIHRlcm1pbmFsIGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGV4ZWMoY29tbWFuZCkge1xyXG4gICAgICAgIHRoaXMuX2NvbnNvbGUuZXhlYyhjb21tYW5kKTtcclxuICAgIH1cclxuICAgIHN0b3BDb21tYW5kKCl7XHJcbiAgICAgICAgdGhpcy5fY29uc29sZS5zdG9wQ29tbWFuZCgpO1xyXG4gICAgfVxyXG59Il19
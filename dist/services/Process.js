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
    }, {
        key: "isWindows",
        value: function isWindows() {
            return this._console.isWindows();
        }
    }]);

    return Process;
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9Qcm9jZXNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0lBR2E7Ozs7Ozs7QUFNVCxhQU5TLE9BTVQsQ0FBWSxJQUFaLEVBQWtCOzhCQU5ULFNBTVM7O0FBQ2QsYUFBSyxRQUFMLEdBQWdCLElBQWhCLENBRGM7S0FBbEI7Ozs7Ozs7O2lCQU5TOzs2QkFjSixTQUFTO0FBQ1YsaUJBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsT0FBbkIsRUFEVTs7OztzQ0FHRDtBQUNULGlCQUFLLFFBQUwsQ0FBYyxXQUFkLEdBRFM7Ozs7b0NBR0Y7QUFDUCxtQkFBTyxLQUFLLFFBQUwsQ0FBYyxTQUFkLEVBQVAsQ0FETzs7OztXQXBCRiIsImZpbGUiOiJQcm9jZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFByb2Nlc3Mge1xyXG4gICAgLyoqXHJcbiAgICAgKiBjbGFzcyBQcm9jZXNzXHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqIEBwYXJhbSB7Q29uc29sZUNvbXBvbmVudH0gdGVybSAtIHRoZSB0ZXJtaW5hbCBpbnN0YW5jZSB0aGUgY3VycmVudCB0ZXJtIHdpbGwgdXNlXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHRlcm0pIHtcclxuICAgICAgICB0aGlzLl9jb25zb2xlID0gdGVybTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQGZ1bmN0aW9uIFByb2Nlc3MuZXhlY1xyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbW1hbmQgXHJcbiAgICAgKiAtIHRoZSBjb21tYW5kIHRoYXQgd2lsbCBiZSBzZW50IHRvIHRoZSB0ZXJtaW5hbCBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBleGVjKGNvbW1hbmQpIHtcclxuICAgICAgICB0aGlzLl9jb25zb2xlLmV4ZWMoY29tbWFuZCk7XHJcbiAgICB9XHJcbiAgICBzdG9wQ29tbWFuZCgpe1xyXG4gICAgICAgIHRoaXMuX2NvbnNvbGUuc3RvcENvbW1hbmQoKTtcclxuICAgIH1cclxuICAgIGlzV2luZG93cygpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb25zb2xlLmlzV2luZG93cygpO1xyXG4gICAgfVxyXG59Il19
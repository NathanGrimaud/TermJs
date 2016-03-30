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
     * @param {Console} term - the terminal instance the current term will use
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
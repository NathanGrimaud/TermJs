"use strict";

//mutiny on the bounty
//const pageLocation = process.cwd();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var React = require("react");
var ReactDOM = require("react-dom");

var CONSOLE_COMPONENT = require("./dist/components/Console/ConsoleComponent").ConsoleComponent;

var Main = function () {
    function Main() {
        _classCallCheck(this, Main);

        this.appContainer = document.getElementById("app");
    }

    _createClass(Main, [{
        key: "loadConsole",
        value: function loadConsole() {
            ReactDOM.render(React.createElement(CONSOLE_COMPONENT, null), this.appContainer);
        }
    }]);

    return Main;
}();

window.onload = function () {
    var main = new Main();
    main.loadConsole();
};
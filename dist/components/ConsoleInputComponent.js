"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require("react");
var pageLocation = process.cwd();
var ConsoleOutputComponent = require(pageLocation + "/dist/components/ConsoleOutputComponent.js").ConsoleOutputComponent;

var ConsoleInputComponent = exports.ConsoleInputComponent = function (_React$Component) {
    _inherits(ConsoleInputComponent, _React$Component);

    function ConsoleInputComponent(props) {
        _classCallCheck(this, ConsoleInputComponent);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ConsoleInputComponent).call(this, props));

        _this._handleTouch = _this.handleTouch.bind(_this);
        _this._changePath = _this.changePath.bind(_this);

        _this.state = { path: process.cwd() };
        return _this;
    }

    _createClass(ConsoleInputComponent, [{
        key: "handleTouch",
        value: function handleTouch(evt) {

            if (evt.key === "Enter") this._changePath(process.cwd());
        }
    }, {
        key: "changePath",
        value: function changePath(path) {

            this.state.path = path;
            this.forceUpdate();
        }
    }, {
        key: "render",
        value: function render() {

            return React.createElement(
                "div",
                { className: "inputWrapper" },
                React.createElement(
                    "span",
                    { className: "inputPath" },
                    this.state.path + " > ",
                    " "
                ),
                React.createElement("div", { onKeyPress: this._handleTouch, className: "inputDiv", contentEditable: "True", id: "ConsoleInput", type: "text" })
            );
        }
    }]);

    return ConsoleInputComponent;
}(React.Component);
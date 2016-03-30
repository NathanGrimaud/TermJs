"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require("react");

var ConsoleOutputComponent = require("./ConsoleOutputComponent.js").ConsoleOutputComponent;

var ConsoleInputComponent = exports.ConsoleInputComponent = function (_React$Component) {
    _inherits(ConsoleInputComponent, _React$Component);

    /**
     * @constructor
     * @param {Object} props - contains { process: Process }
     */

    function ConsoleInputComponent(props) {
        _classCallCheck(this, ConsoleInputComponent);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ConsoleInputComponent).call(this, props));

        _this._process = props.process;
        _this._parent = props.parent;
        _this.state = {
            path: process.cwd(),
            inputText: "",
            currentLine: "",
            history: [],
            historyIndex: 0
        };
        return _this;
    }

    _createClass(ConsoleInputComponent, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "div",
                { className: "inputWrapper" },
                React.createElement(
                    "span",
                    { className: "inputPath" },
                    this.state.path + " > ",
                    " "
                ),
                React.createElement("div", { ref: "input", onKeyDown: function onKeyDown(evt) {
                        return _this2.handleTouch(evt);
                    }, className: "inputDiv", contentEditable: "True", id: "ConsoleInput", type: "text" })
            );
        }
    }, {
        key: "insertInput",
        value: function insertInput(input) {
            this.refs.input.textContent = input;
        }
    }, {
        key: "handleTouch",
        value: function handleTouch(evt) {

            if (evt.key === "Enter") this.handleEnterTouch(evt);else if (evt.key === "ArrowUp") this.handleArrowTouch(-1);else if (evt.key === "ArrowDown") this.handleArrowTouch(+1);
            // c = 67   
            else if (evt.keyCode === 67 && evt.ctrlKey) this.handleCtrlCTouch();
        }
    }, {
        key: "handleCtrlCTouch",
        value: function handleCtrlCTouch() {

            this.refs.input.textContent = "";
            this._parent.insertOutput("command stopped by keyboard");
            this._process.stopCommand();
        }
    }, {
        key: "handleArrowTouch",
        value: function handleArrowTouch(i) {

            var nextIndex = this.state.historyIndex + i;
            if (nextIndex >= 0 && nextIndex <= this.state.history.length) {

                this.state.historyIndex += i;
                this.refs.input.textContent = this.state.history[nextIndex];
            }
        }
    }, {
        key: "handleEnterTouch",
        value: function handleEnterTouch(evt) {

            var command = evt.target.textContent;
            this.state.historyIndex += 1;
            this.state.history.push(command);
            evt.target.textContent = "";
            this.changePath(process.cwd());
            this._process.exec(command);
        }
    }, {
        key: "changePath",
        value: function changePath(path) {

            this.state.path = path;
            this.forceUpdate();
        }
    }]);

    return ConsoleInputComponent;
}(React.Component);
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
var ConsoleInputComponent = require("./ConsoleInputComponent.js").ConsoleInputComponent;
var SnippetsContainerComponent = require("../Snippets/SnippetsContainerComponent.js").SnippetsContainerComponent;
var Process = require("../../services/Process").Process;
var Bash = require("../../model/Bash").Bash;

var ConsoleComponent = exports.ConsoleComponent = function (_React$Component) {
    _inherits(ConsoleComponent, _React$Component);

    function ConsoleComponent(props) {
        _classCallCheck(this, ConsoleComponent);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ConsoleComponent).call(this, props));

        _this.state = {
            key: 0,
            outputs: [React.createElement(ConsoleOutputComponent, { key: "0", console: _this, text: "# Bienvenue dans le terminal" })]
        };

        _this._process = new Process(new Bash(_this));
        return _this;
    }
    /**
     * @method insertOutput - creates a new ConsoleOutput with the provided text
     * @param {String} text - the text that need to be a new console input
     * @param {String} className - the string to give class to the component
     */


    _createClass(ConsoleComponent, [{
        key: "insertOutput",
        value: function insertOutput(text, className) {
            this.state.key += 1;
            this.state.outputs.push(React.createElement(ConsoleOutputComponent, { key: this.state.key, console: this, className: className, text: text.toString() }));
            this.forceUpdate();
        }
    }, {
        key: "insertInput",
        value: function insertInput(input) {
            this.refs.ConsoleInputComponent.insertInput(input);
        }
    }, {
        key: "render",
        value: function render() {

            return React.createElement(
                "div",
                { className: "consoleWrapper" },
                React.createElement(
                    "div",
                    { id: "Console", className: "Console" },
                    this.state.outputs.map(function (output) {
                        return output;
                    }),
                    React.createElement(ConsoleInputComponent, { ref: "ConsoleInputComponent", parent: this, process: this._process })
                ),
                React.createElement(SnippetsContainerComponent, { parent: this, process: this._process })
            );
        }
    }]);

    return ConsoleComponent;
}(React.Component);
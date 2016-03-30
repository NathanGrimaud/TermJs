"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require("react");
var HIGHLIGHT = require("react-highlight");

var ConsoleOutputComponent = exports.ConsoleOutputComponent = function (_React$Component) {
    _inherits(ConsoleOutputComponent, _React$Component);

    function ConsoleOutputComponent(props) {
        _classCallCheck(this, ConsoleOutputComponent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ConsoleOutputComponent).call(this, props));
    }

    _createClass(ConsoleOutputComponent, [{
        key: "render",
        value: function render() {
            var className = "bash " + this.props.className;
            return React.createElement(
                HIGHLIGHT,
                { className: className },
                this.props.text
            );
        }
    }]);

    return ConsoleOutputComponent;
}(React.Component);
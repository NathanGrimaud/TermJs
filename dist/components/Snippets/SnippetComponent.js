"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require("react");

var SnippetComponent = exports.SnippetComponent = function (_React$Component) {
    _inherits(SnippetComponent, _React$Component);

    function SnippetComponent(props) {
        _classCallCheck(this, SnippetComponent);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SnippetComponent).call(this, props));

        _this._parent = props.parent;
        return _this;
    }

    _createClass(SnippetComponent, [{
        key: "handleClick",
        value: function handleClick(evt) {
            this._parent.insertInput(this.refs.command.innerText);
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "div",
                { onClick: function onClick(evt) {
                        return _this2.handleClick(evt);
                    }, className: "snippet", key: "{this.props.key}" },
                React.createElement(
                    "span",
                    { ref: "name", className: "name" },
                    this.props.name,
                    ": "
                ),
                React.createElement(
                    "span",
                    { ref: "command", className: "command" },
                    this.props.command
                )
            );
        }
    }]);

    return SnippetComponent;
}(React.Component);
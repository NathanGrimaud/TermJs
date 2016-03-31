"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require("react");
var SnippetComponent = require("./SnippetComponent.js").SnippetComponent;
var Snippet = require("../../model/Snippet.js").Snippet;
var Modal = require("boron/FadeModal");

var SnippetsContainerComponent = exports.SnippetsContainerComponent = function (_React$Component) {
    _inherits(SnippetsContainerComponent, _React$Component);

    function SnippetsContainerComponent(props) {
        _classCallCheck(this, SnippetsContainerComponent);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SnippetsContainerComponent).call(this, props));

        _this.state = {
            snippetsArray: []
        };
        _this.loadData();
        _this._parent = props.parent;
        return _this;
    }

    _createClass(SnippetsContainerComponent, [{
        key: "showModal",
        value: function showModal() {
            this.refs.modal.show();
        }
    }, {
        key: "hideModal",
        value: function hideModal() {

            var name = this.refs.nameInput.value;
            var command = this.refs.commandInput.value;
            var a = new Snippet(name, command);
            if (name !== "" && command !== "") a.save();

            this.refs.modal.hide();
            this.state.snippetsArray.push(React.createElement(SnippetComponent, { parent: this, key: a._key, name: a._name, command: a._command }));
            this.forceUpdate();
        }
    }, {
        key: "insertInput",
        value: function insertInput(input) {
            this._parent.insertInput(input);
        }
    }, {
        key: "loadData",
        value: function loadData() {
            var _this2 = this;

            var data = require("../../private/snippets.json");

            [].forEach.call(data.snippets, function (value) {

                _this2.state.snippetsArray.push(React.createElement(SnippetComponent, { parent: _this2, key: value.key, name: value.name, command: value.command }));
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            return React.createElement(
                "div",
                { className: "snippetsWrapper" },
                React.createElement(
                    "div",
                    { className: "snippets" },
                    " ",
                    this.state.snippetsArray,
                    " "
                ),
                React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "div",
                        { className: "snippetAdd button", onClick: function onClick() {
                                return _this3.showModal();
                            } },
                        " + "
                    )
                ),
                React.createElement(
                    Modal,
                    { ref: "modal" },
                    React.createElement(
                        "h2",
                        null,
                        "New snippet"
                    ),
                    React.createElement("input", { ref: "nameInput", placeholder: "name", type: "text" }),
                    React.createElement("input", { ref: "commandInput", placeholder: "command", type: "text" }),
                    React.createElement(
                        "button",
                        { onClick: function onClick() {
                                return _this3.hideModal();
                            } },
                        "Close"
                    )
                )
            );
        }
    }]);

    return SnippetsContainerComponent;
}(React.Component);
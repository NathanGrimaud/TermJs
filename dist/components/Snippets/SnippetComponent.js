"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require("react");
var Modal = require("boron/FadeModal");
var Snippet = require("../../model/Snippet").Snippet;
/**
 * class that represents a snippet
 */

var SnippetComponent = exports.SnippetComponent = function (_React$Component) {
    _inherits(SnippetComponent, _React$Component);

    function SnippetComponent(props) {
        _classCallCheck(this, SnippetComponent);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SnippetComponent).call(this, props));

        _this._parent = props.parent;
        _this._key = props.i;
        _this._name = props.name;
        _this._command = props.command;
        return _this;
    }
    /**
     * shows the modal window
     */


    _createClass(SnippetComponent, [{
        key: "showModal",
        value: function showModal() {
            this.refs.modal.show();
        }
        /**
         * hides the modal window
         */

    }, {
        key: "hideModal",
        value: function hideModal() {
            this.refs.modal.hide();
        }
        /**
         * trigered when the update button is clicked
         */

    }, {
        key: "updateModal",
        value: function updateModal() {

            this._name = this.refs.nameInput.value;
            this._command = this.refs.commandInput.value;
            var a = new Snippet(this._name, this._command, this._key);
            a.update();
            this.refs.modal.hide();
            this.forceUpdate();
        }
    }, {
        key: "handleClick",
        value: function handleClick() {
            this._parent.insertInput(this.refs.command.innerText);
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "div",
                { className: "snippet" },
                React.createElement(
                    "div",
                    { onClick: function onClick(evt) {
                            return _this2.handleClick(evt);
                        }, key: "{this._key}" },
                    React.createElement(
                        "span",
                        { ref: "name", className: "name" },
                        this._name,
                        ": "
                    ),
                    React.createElement(
                        "span",
                        { ref: "command", className: "command" },
                        this._command
                    )
                ),
                React.createElement(
                    "i",
                    {
                        className: "material-icons mdl-button mdl-button--icon mdl-button--colored mdl-js-button md-16" //
                        , onClick: function onClick() {
                            return _this2.showModal();
                        } },
                    "edit"
                ),
                React.createElement(
                    Modal,
                    { ref: "modal" },
                    React.createElement(
                        "h2",
                        null,
                        "New snippet"
                    ),
                    React.createElement("input", { ref: "nameInput", type: "text", defaultValue: this._name }),
                    React.createElement("input", { ref: "commandInput", type: "text", defaultValue: this._command }),
                    React.createElement(
                        "button",
                        { onClick: function onClick() {
                                return _this2.updateModal();
                            } },
                        "Validate"
                    ),
                    React.createElement(
                        "button",
                        { onClick: function onClick() {
                                return _this2.hideModal();
                            } },
                        "Close"
                    )
                )
            );
        }
    }]);

    return SnippetComponent;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NuaXBwZXRzL1NuaXBwZXRDb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSxRQUFRLFFBQVEsT0FBUixDQUFSO0FBQ04sSUFBTSxRQUFRLFFBQVEsaUJBQVIsQ0FBUjtBQUNOLElBQU0sVUFBVSxRQUFRLHFCQUFSLEVBQStCLE9BQS9COzs7OztJQUlIOzs7QUFDVCxhQURTLGdCQUNULENBQVksS0FBWixFQUFtQjs4QkFEVixrQkFDVTs7MkVBRFYsNkJBRUMsUUFEUzs7QUFFZixjQUFLLE9BQUwsR0FBZSxNQUFNLE1BQU4sQ0FGQTtBQUdmLGNBQUssSUFBTCxHQUFXLE1BQU0sQ0FBTixDQUhJO0FBSWYsY0FBSyxLQUFMLEdBQVksTUFBTSxJQUFOLENBSkc7QUFLZixjQUFLLFFBQUwsR0FBZSxNQUFNLE9BQU4sQ0FMQTs7S0FBbkI7Ozs7OztpQkFEUzs7b0NBV0U7QUFDUCxpQkFBSyxJQUFMLENBQVUsS0FBVixDQUFnQixJQUFoQixHQURPOzs7Ozs7OztvQ0FNQTtBQUNQLGlCQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLElBQWhCLEdBRE87Ozs7Ozs7O3NDQU1FOztBQUVYLGlCQUFLLEtBQUwsR0FBYSxLQUFLLElBQUwsQ0FBVSxTQUFWLENBQW9CLEtBQXBCLENBRkY7QUFHWCxpQkFBSyxRQUFMLEdBQWdCLEtBQUssSUFBTCxDQUFVLFlBQVYsQ0FBdUIsS0FBdkIsQ0FITDtBQUlYLGdCQUFJLElBQUksSUFBSSxPQUFKLENBQWEsS0FBSyxLQUFMLEVBQVcsS0FBSyxRQUFMLEVBQWMsS0FBSyxJQUFMLENBQTFDLENBSk87QUFLWCxjQUFFLE1BQUYsR0FMVztBQU1YLGlCQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLElBQWhCLEdBTlc7QUFPWCxpQkFBSyxXQUFMLEdBUFc7Ozs7c0NBU0M7QUFDVixpQkFBSyxPQUFMLENBQWEsV0FBYixDQUF5QixLQUFLLElBQUwsQ0FBVSxPQUFWLENBQWtCLFNBQWxCLENBQXpCLENBRFU7Ozs7aUNBR0w7OztBQUNMLG1CQUNFOztrQkFBSyxXQUFVLFNBQVYsRUFBTDtnQkFDRTs7c0JBQUssU0FBUzttQ0FBSyxPQUFLLFdBQUwsQ0FBaUIsR0FBakI7eUJBQUwsRUFBNEIsS0FBSSxhQUFKLEVBQTFDO29CQUNJOzswQkFBTSxLQUFJLE1BQUosRUFBWSxXQUFVLE1BQVYsRUFBbEI7d0JBQW9DLEtBQUssS0FBTDs0QkFBcEM7cUJBREo7b0JBRUk7OzBCQUFNLEtBQUksU0FBSixFQUFjLFdBQVUsU0FBVixFQUFwQjt3QkFBeUMsS0FBSyxRQUFMO3FCQUY3QztpQkFERjtnQkFLRTs7O0FBQ0EsbUNBQVUsb0ZBQVY7MEJBQ0EsU0FBUzttQ0FBSSxPQUFLLFNBQUw7eUJBQUosRUFGVDs7aUJBTEY7Z0JBUUU7QUFBQyx5QkFBRDtzQkFBTyxLQUFJLE9BQUosRUFBUDtvQkFDTzs7OztxQkFEUDtvQkFFTywrQkFBTyxLQUFJLFdBQUosRUFBZ0IsTUFBSyxNQUFMLEVBQVcsY0FBYyxLQUFLLEtBQUwsRUFBaEQsQ0FGUDtvQkFHTywrQkFBTyxLQUFJLGNBQUosRUFBbUIsTUFBSyxNQUFMLEVBQVksY0FBYyxLQUFLLFFBQUwsRUFBcEQsQ0FIUDtvQkFJTzs7MEJBQVEsU0FBUzt1Q0FBSSxPQUFLLFdBQUw7NkJBQUosRUFBakI7O3FCQUpQO29CQUtPOzswQkFBUSxTQUFTO3VDQUFJLE9BQUssU0FBTDs2QkFBSixFQUFqQjs7cUJBTFA7aUJBUkY7YUFERixDQURLOzs7O1dBbkNBO0VBQXlCLE1BQU0sU0FBTiIsImZpbGUiOiJTbmlwcGV0Q29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcclxuY29uc3QgTW9kYWwgPSByZXF1aXJlKFwiYm9yb24vRmFkZU1vZGFsXCIpO1xyXG5jb25zdCBTbmlwcGV0ID0gcmVxdWlyZShcIi4uLy4uL21vZGVsL1NuaXBwZXRcIikuU25pcHBldDtcclxuLyoqXHJcbiAqIGNsYXNzIHRoYXQgcmVwcmVzZW50cyBhIHNuaXBwZXRcclxuICovXHJcbmV4cG9ydCBjbGFzcyBTbmlwcGV0Q29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuX3BhcmVudCA9IHByb3BzLnBhcmVudDtcclxuICAgICAgICB0aGlzLl9rZXk9IHByb3BzLmk7XHJcbiAgICAgICAgdGhpcy5fbmFtZT0gcHJvcHMubmFtZTtcclxuICAgICAgICB0aGlzLl9jb21tYW5kPSBwcm9wcy5jb21tYW5kO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBzaG93cyB0aGUgbW9kYWwgd2luZG93XHJcbiAgICAgKi9cclxuICAgIHNob3dNb2RhbCgpe1xyXG4gICAgICAgIHRoaXMucmVmcy5tb2RhbC5zaG93KCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIGhpZGVzIHRoZSBtb2RhbCB3aW5kb3dcclxuICAgICAqL1xyXG4gICAgaGlkZU1vZGFsKCl7XHJcbiAgICAgICAgdGhpcy5yZWZzLm1vZGFsLmhpZGUoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogdHJpZ2VyZWQgd2hlbiB0aGUgdXBkYXRlIGJ1dHRvbiBpcyBjbGlja2VkXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZU1vZGFsKCl7XHJcblxyXG4gICAgICB0aGlzLl9uYW1lID0gdGhpcy5yZWZzLm5hbWVJbnB1dC52YWx1ZTtcclxuICAgICAgdGhpcy5fY29tbWFuZCA9IHRoaXMucmVmcy5jb21tYW5kSW5wdXQudmFsdWU7XHJcbiAgICAgIGxldCBhID0gbmV3IFNuaXBwZXQoIHRoaXMuX25hbWUsdGhpcy5fY29tbWFuZCx0aGlzLl9rZXkpO1xyXG4gICAgICBhLnVwZGF0ZSgpO1xyXG4gICAgICB0aGlzLnJlZnMubW9kYWwuaGlkZSgpO1xyXG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVDbGljaygpIHtcclxuICAgICAgICB0aGlzLl9wYXJlbnQuaW5zZXJ0SW5wdXQodGhpcy5yZWZzLmNvbW1hbmQuaW5uZXJUZXh0KTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbmlwcGV0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17ZXZ0PT50aGlzLmhhbmRsZUNsaWNrKGV2dCl9IGtleT1cInt0aGlzLl9rZXl9XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiByZWY9XCJuYW1lXCIgIGNsYXNzTmFtZT1cIm5hbWVcIj57dGhpcy5fbmFtZX06IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHJlZj1cImNvbW1hbmRcIiBjbGFzc05hbWU9XCJjb21tYW5kXCI+e3RoaXMuX2NvbW1hbmR9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgbWRsLWJ1dHRvbiBtZGwtYnV0dG9uLS1pY29uIG1kbC1idXR0b24tLWNvbG9yZWQgbWRsLWpzLWJ1dHRvbiBtZC0xNlwiIC8vXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpPT50aGlzLnNob3dNb2RhbCgpfT5lZGl0PC9pPlxyXG4gICAgICAgICAgICA8TW9kYWwgcmVmPVwibW9kYWxcIj5cclxuICAgICAgICAgICAgICAgICAgIDxoMj5OZXcgc25pcHBldDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICA8aW5wdXQgcmVmPVwibmFtZUlucHV0XCIgdHlwZT1cInRleHRcImRlZmF1bHRWYWx1ZT17dGhpcy5fbmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgIDxpbnB1dCByZWY9XCJjb21tYW5kSW5wdXRcIiB0eXBlPVwidGV4dFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5fY29tbWFuZH0vPlxyXG4gICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+dGhpcy51cGRhdGVNb2RhbCgpfT5WYWxpZGF0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+dGhpcy5oaWRlTW9kYWwoKX0+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIl19
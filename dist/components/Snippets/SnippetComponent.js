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
        _this.state = {
            key: props.i,
            name: props.name,
            command: props.command
        };
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

            this.state.name = this.refs.nameInput.value;
            this.state.command = this.refs.commandInput.value;
            var a = new Snippet(this.state.name, this.state.command, this.state.key);
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
                        }, key: "{this.state.key}" },
                    React.createElement(
                        "span",
                        { ref: "name", className: "name" },
                        this.state.name,
                        ": "
                    ),
                    React.createElement(
                        "span",
                        { ref: "command", className: "command" },
                        this.state.command
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
                    React.createElement("input", { ref: "nameInput", type: "text", defaultValue: this.state.name }),
                    React.createElement("input", { ref: "commandInput", type: "text", defaultValue: this.state.command }),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NuaXBwZXRzL1NuaXBwZXRDb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSxRQUFRLFFBQVEsT0FBUixDQUFSO0FBQ04sSUFBTSxRQUFRLFFBQVEsaUJBQVIsQ0FBUjtBQUNOLElBQU0sVUFBVSxRQUFRLHFCQUFSLEVBQStCLE9BQS9COzs7OztJQUlIOzs7QUFDVCxhQURTLGdCQUNULENBQVksS0FBWixFQUFtQjs4QkFEVixrQkFDVTs7MkVBRFYsNkJBRUMsUUFEUzs7QUFFZixjQUFLLE9BQUwsR0FBZSxNQUFNLE1BQU4sQ0FGQTtBQUdmLGNBQUssS0FBTCxHQUFhO0FBQ1gsaUJBQUssTUFBTSxDQUFOO0FBQ0wsa0JBQU0sTUFBTSxJQUFOO0FBQ04scUJBQVMsTUFBTSxPQUFOO1NBSFgsQ0FIZTs7S0FBbkI7Ozs7OztpQkFEUzs7b0NBYUU7QUFDUCxpQkFBSyxJQUFMLENBQVUsS0FBVixDQUFnQixJQUFoQixHQURPOzs7Ozs7OztvQ0FNQTtBQUNQLGlCQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLElBQWhCLEdBRE87Ozs7Ozs7O3NDQU1FOztBQUVYLGlCQUFLLEtBQUwsQ0FBVyxJQUFYLEdBQWtCLEtBQUssSUFBTCxDQUFVLFNBQVYsQ0FBb0IsS0FBcEIsQ0FGUDtBQUdYLGlCQUFLLEtBQUwsQ0FBVyxPQUFYLEdBQXFCLEtBQUssSUFBTCxDQUFVLFlBQVYsQ0FBdUIsS0FBdkIsQ0FIVjtBQUlYLGdCQUFJLElBQUksSUFBSSxPQUFKLENBQWEsS0FBSyxLQUFMLENBQVcsSUFBWCxFQUFnQixLQUFLLEtBQUwsQ0FBVyxPQUFYLEVBQW1CLEtBQUssS0FBTCxDQUFXLEdBQVgsQ0FBcEQsQ0FKTztBQUtYLGNBQUUsTUFBRixHQUxXO0FBTVgsaUJBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsSUFBaEIsR0FOVztBQU9YLGlCQUFLLFdBQUwsR0FQVzs7OztzQ0FTQztBQUNWLGlCQUFLLE9BQUwsQ0FBYSxXQUFiLENBQXlCLEtBQUssSUFBTCxDQUFVLE9BQVYsQ0FBa0IsU0FBbEIsQ0FBekIsQ0FEVTs7OztpQ0FHTDs7O0FBQ0wsbUJBQ0U7O2tCQUFLLFdBQVUsU0FBVixFQUFMO2dCQUNFOztzQkFBSyxTQUFTO21DQUFLLE9BQUssV0FBTCxDQUFpQixHQUFqQjt5QkFBTCxFQUE0QixLQUFJLGtCQUFKLEVBQTFDO29CQUNJOzswQkFBTSxLQUFJLE1BQUosRUFBWSxXQUFVLE1BQVYsRUFBbEI7d0JBQW9DLEtBQUssS0FBTCxDQUFXLElBQVg7NEJBQXBDO3FCQURKO29CQUVJOzswQkFBTSxLQUFJLFNBQUosRUFBYyxXQUFVLFNBQVYsRUFBcEI7d0JBQXlDLEtBQUssS0FBTCxDQUFXLE9BQVg7cUJBRjdDO2lCQURGO2dCQUtFOzs7QUFDQSxtQ0FBVSxvRkFBVjswQkFDQSxTQUFTO21DQUFJLE9BQUssU0FBTDt5QkFBSixFQUZUOztpQkFMRjtnQkFRRTtBQUFDLHlCQUFEO3NCQUFPLEtBQUksT0FBSixFQUFQO29CQUNPOzs7O3FCQURQO29CQUVPLCtCQUFPLEtBQUksV0FBSixFQUFnQixNQUFLLE1BQUwsRUFBVyxjQUFjLEtBQUssS0FBTCxDQUFXLElBQVgsRUFBaEQsQ0FGUDtvQkFHTywrQkFBTyxLQUFJLGNBQUosRUFBbUIsTUFBSyxNQUFMLEVBQVksY0FBYyxLQUFLLEtBQUwsQ0FBVyxPQUFYLEVBQXBELENBSFA7b0JBSU87OzBCQUFRLFNBQVM7dUNBQUksT0FBSyxXQUFMOzZCQUFKLEVBQWpCOztxQkFKUDtvQkFLTzs7MEJBQVEsU0FBUzt1Q0FBSSxPQUFLLFNBQUw7NkJBQUosRUFBakI7O3FCQUxQO2lCQVJGO2FBREYsQ0FESzs7OztXQXJDQTtFQUF5QixNQUFNLFNBQU4iLCJmaWxlIjoiU25pcHBldENvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XHJcbmNvbnN0IE1vZGFsID0gcmVxdWlyZShcImJvcm9uL0ZhZGVNb2RhbFwiKTtcclxuY29uc3QgU25pcHBldCA9IHJlcXVpcmUoXCIuLi8uLi9tb2RlbC9TbmlwcGV0XCIpLlNuaXBwZXQ7XHJcbi8qKlxyXG4gKiBjbGFzcyB0aGF0IHJlcHJlc2VudHMgYSBzbmlwcGV0XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU25pcHBldENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLl9wYXJlbnQgPSBwcm9wcy5wYXJlbnQ7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgIGtleTogcHJvcHMuaSxcclxuICAgICAgICAgIG5hbWU6IHByb3BzLm5hbWUsXHJcbiAgICAgICAgICBjb21tYW5kOiBwcm9wcy5jb21tYW5kXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIHNob3dzIHRoZSBtb2RhbCB3aW5kb3dcclxuICAgICAqL1xyXG4gICAgc2hvd01vZGFsKCl7XHJcbiAgICAgICAgdGhpcy5yZWZzLm1vZGFsLnNob3coKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogaGlkZXMgdGhlIG1vZGFsIHdpbmRvd1xyXG4gICAgICovXHJcbiAgICBoaWRlTW9kYWwoKXtcclxuICAgICAgICB0aGlzLnJlZnMubW9kYWwuaGlkZSgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiB0cmlnZXJlZCB3aGVuIHRoZSB1cGRhdGUgYnV0dG9uIGlzIGNsaWNrZWRcclxuICAgICAqL1xyXG4gICAgdXBkYXRlTW9kYWwoKXtcclxuXHJcbiAgICAgIHRoaXMuc3RhdGUubmFtZSA9IHRoaXMucmVmcy5uYW1lSW5wdXQudmFsdWU7XHJcbiAgICAgIHRoaXMuc3RhdGUuY29tbWFuZCA9IHRoaXMucmVmcy5jb21tYW5kSW5wdXQudmFsdWU7XHJcbiAgICAgIGxldCBhID0gbmV3IFNuaXBwZXQoIHRoaXMuc3RhdGUubmFtZSx0aGlzLnN0YXRlLmNvbW1hbmQsdGhpcy5zdGF0ZS5rZXkpO1xyXG4gICAgICBhLnVwZGF0ZSgpO1xyXG4gICAgICB0aGlzLnJlZnMubW9kYWwuaGlkZSgpO1xyXG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVDbGljaygpIHtcclxuICAgICAgICB0aGlzLl9wYXJlbnQuaW5zZXJ0SW5wdXQodGhpcy5yZWZzLmNvbW1hbmQuaW5uZXJUZXh0KTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbmlwcGV0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17ZXZ0PT50aGlzLmhhbmRsZUNsaWNrKGV2dCl9IGtleT1cInt0aGlzLnN0YXRlLmtleX1cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHJlZj1cIm5hbWVcIiAgY2xhc3NOYW1lPVwibmFtZVwiPnt0aGlzLnN0YXRlLm5hbWV9OiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiByZWY9XCJjb21tYW5kXCIgY2xhc3NOYW1lPVwiY29tbWFuZFwiPnt0aGlzLnN0YXRlLmNvbW1hbmR9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGkgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIG1kbC1idXR0b24gbWRsLWJ1dHRvbi0taWNvbiBtZGwtYnV0dG9uLS1jb2xvcmVkIG1kbC1qcy1idXR0b24gbWQtMTZcIiAvL1xyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKT0+dGhpcy5zaG93TW9kYWwoKX0+ZWRpdDwvaT4gICAgICAgICAgIFxyXG4gICAgICAgICAgICA8TW9kYWwgcmVmPVwibW9kYWxcIj5cclxuICAgICAgICAgICAgICAgICAgIDxoMj5OZXcgc25pcHBldDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICA8aW5wdXQgcmVmPVwibmFtZUlucHV0XCIgdHlwZT1cInRleHRcImRlZmF1bHRWYWx1ZT17dGhpcy5zdGF0ZS5uYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgPGlucHV0IHJlZj1cImNvbW1hbmRJbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLmNvbW1hbmR9Lz5cclxuICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PnRoaXMudXBkYXRlTW9kYWwoKX0+VmFsaWRhdGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PnRoaXMuaGlkZU1vZGFsKCl9PkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
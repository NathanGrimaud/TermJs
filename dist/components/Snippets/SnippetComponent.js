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
                    "button",
                    { onClick: function onClick() {
                            return _this2.showModal();
                        } },
                    "Edit"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NuaXBwZXRzL1NuaXBwZXRDb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSxRQUFRLFFBQVEsT0FBUixDQUFSO0FBQ04sSUFBTSxRQUFRLFFBQVEsaUJBQVIsQ0FBUjtBQUNOLElBQU0sVUFBVSxRQUFRLHFCQUFSLEVBQStCLE9BQS9COzs7OztJQUlIOzs7QUFDVCxhQURTLGdCQUNULENBQVksS0FBWixFQUFtQjs4QkFEVixrQkFDVTs7MkVBRFYsNkJBRUMsUUFEUzs7QUFFZixjQUFLLE9BQUwsR0FBZSxNQUFNLE1BQU4sQ0FGQTtBQUdmLGNBQUssS0FBTCxHQUFhO0FBQ1gsaUJBQUssTUFBTSxDQUFOO0FBQ0wsa0JBQU0sTUFBTSxJQUFOO0FBQ04scUJBQVMsTUFBTSxPQUFOO1NBSFgsQ0FIZTs7S0FBbkI7Ozs7OztpQkFEUzs7b0NBYUU7QUFDUCxpQkFBSyxJQUFMLENBQVUsS0FBVixDQUFnQixJQUFoQixHQURPOzs7Ozs7OztvQ0FNQTtBQUNQLGlCQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLElBQWhCLEdBRE87Ozs7Ozs7O3NDQU1FOztBQUVYLGlCQUFLLEtBQUwsQ0FBVyxJQUFYLEdBQWtCLEtBQUssSUFBTCxDQUFVLFNBQVYsQ0FBb0IsS0FBcEIsQ0FGUDtBQUdYLGlCQUFLLEtBQUwsQ0FBVyxPQUFYLEdBQXFCLEtBQUssSUFBTCxDQUFVLFlBQVYsQ0FBdUIsS0FBdkIsQ0FIVjtBQUlYLGdCQUFJLElBQUksSUFBSSxPQUFKLENBQWEsS0FBSyxLQUFMLENBQVcsSUFBWCxFQUFnQixLQUFLLEtBQUwsQ0FBVyxPQUFYLEVBQW1CLEtBQUssS0FBTCxDQUFXLEdBQVgsQ0FBcEQsQ0FKTztBQUtYLGNBQUUsTUFBRixHQUxXO0FBTVgsaUJBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsSUFBaEIsR0FOVztBQU9YLGlCQUFLLFdBQUwsR0FQVzs7OztzQ0FTQztBQUNWLGlCQUFLLE9BQUwsQ0FBYSxXQUFiLENBQXlCLEtBQUssSUFBTCxDQUFVLE9BQVYsQ0FBa0IsU0FBbEIsQ0FBekIsQ0FEVTs7OztpQ0FHTDs7O0FBQ0wsbUJBQ0U7O2tCQUFLLFdBQVUsU0FBVixFQUFMO2dCQUNFOztzQkFBSyxTQUFTO21DQUFLLE9BQUssV0FBTCxDQUFpQixHQUFqQjt5QkFBTCxFQUE0QixLQUFJLGtCQUFKLEVBQTFDO29CQUNJOzswQkFBTSxLQUFJLE1BQUosRUFBWSxXQUFVLE1BQVYsRUFBbEI7d0JBQW9DLEtBQUssS0FBTCxDQUFXLElBQVg7NEJBQXBDO3FCQURKO29CQUVJOzswQkFBTSxLQUFJLFNBQUosRUFBYyxXQUFVLFNBQVYsRUFBcEI7d0JBQXlDLEtBQUssS0FBTCxDQUFXLE9BQVg7cUJBRjdDO2lCQURGO2dCQUtFOztzQkFBUSxTQUFTO21DQUFJLE9BQUssU0FBTDt5QkFBSixFQUFqQjs7aUJBTEY7Z0JBT0U7QUFBQyx5QkFBRDtzQkFBTyxLQUFJLE9BQUosRUFBUDtvQkFDTzs7OztxQkFEUDtvQkFFTywrQkFBTyxLQUFJLFdBQUosRUFBZ0IsTUFBSyxNQUFMLEVBQVcsY0FBYyxLQUFLLEtBQUwsQ0FBVyxJQUFYLEVBQWhELENBRlA7b0JBR08sK0JBQU8sS0FBSSxjQUFKLEVBQW1CLE1BQUssTUFBTCxFQUFZLGNBQWMsS0FBSyxLQUFMLENBQVcsT0FBWCxFQUFwRCxDQUhQO29CQUlPOzswQkFBUSxTQUFTO3VDQUFJLE9BQUssV0FBTDs2QkFBSixFQUFqQjs7cUJBSlA7b0JBS087OzBCQUFRLFNBQVM7dUNBQUksT0FBSyxTQUFMOzZCQUFKLEVBQWpCOztxQkFMUDtpQkFQRjthQURGLENBREs7Ozs7V0FyQ0E7RUFBeUIsTUFBTSxTQUFOIiwiZmlsZSI6IlNuaXBwZXRDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xyXG5jb25zdCBNb2RhbCA9IHJlcXVpcmUoXCJib3Jvbi9GYWRlTW9kYWxcIik7XHJcbmNvbnN0IFNuaXBwZXQgPSByZXF1aXJlKFwiLi4vLi4vbW9kZWwvU25pcHBldFwiKS5TbmlwcGV0O1xyXG4vKipcclxuICogY2xhc3MgdGhhdCByZXByZXNlbnRzIGEgc25pcHBldFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNuaXBwZXRDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5fcGFyZW50ID0gcHJvcHMucGFyZW50O1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICBrZXk6IHByb3BzLmksXHJcbiAgICAgICAgICBuYW1lOiBwcm9wcy5uYW1lLFxyXG4gICAgICAgICAgY29tbWFuZDogcHJvcHMuY29tbWFuZFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBzaG93cyB0aGUgbW9kYWwgd2luZG93XHJcbiAgICAgKi9cclxuICAgIHNob3dNb2RhbCgpe1xyXG4gICAgICAgIHRoaXMucmVmcy5tb2RhbC5zaG93KCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIGhpZGVzIHRoZSBtb2RhbCB3aW5kb3dcclxuICAgICAqL1xyXG4gICAgaGlkZU1vZGFsKCl7XHJcbiAgICAgICAgdGhpcy5yZWZzLm1vZGFsLmhpZGUoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogdHJpZ2VyZWQgd2hlbiB0aGUgdXBkYXRlIGJ1dHRvbiBpcyBjbGlja2VkXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZU1vZGFsKCl7XHJcblxyXG4gICAgICB0aGlzLnN0YXRlLm5hbWUgPSB0aGlzLnJlZnMubmFtZUlucHV0LnZhbHVlO1xyXG4gICAgICB0aGlzLnN0YXRlLmNvbW1hbmQgPSB0aGlzLnJlZnMuY29tbWFuZElucHV0LnZhbHVlO1xyXG4gICAgICBsZXQgYSA9IG5ldyBTbmlwcGV0KCB0aGlzLnN0YXRlLm5hbWUsdGhpcy5zdGF0ZS5jb21tYW5kLHRoaXMuc3RhdGUua2V5KTtcclxuICAgICAgYS51cGRhdGUoKTtcclxuICAgICAgdGhpcy5yZWZzLm1vZGFsLmhpZGUoKTtcclxuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlQ2xpY2soKSB7XHJcbiAgICAgICAgdGhpcy5fcGFyZW50Lmluc2VydElucHV0KHRoaXMucmVmcy5jb21tYW5kLmlubmVyVGV4dCk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic25pcHBldFwiPlxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2V2dD0+dGhpcy5oYW5kbGVDbGljayhldnQpfSBrZXk9XCJ7dGhpcy5zdGF0ZS5rZXl9XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiByZWY9XCJuYW1lXCIgIGNsYXNzTmFtZT1cIm5hbWVcIj57dGhpcy5zdGF0ZS5uYW1lfTogPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gcmVmPVwiY29tbWFuZFwiIGNsYXNzTmFtZT1cImNvbW1hbmRcIj57dGhpcy5zdGF0ZS5jb21tYW5kfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PnRoaXMuc2hvd01vZGFsKCl9PkVkaXQ8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDxNb2RhbCByZWY9XCJtb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgPGgyPk5ldyBzbmlwcGV0PC9oMj5cclxuICAgICAgICAgICAgICAgICAgIDxpbnB1dCByZWY9XCJuYW1lSW5wdXRcIiB0eXBlPVwidGV4dFwiZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICA8aW5wdXQgcmVmPVwiY29tbWFuZElucHV0XCIgdHlwZT1cInRleHRcIiBkZWZhdWx0VmFsdWU9e3RoaXMuc3RhdGUuY29tbWFuZH0vPlxyXG4gICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+dGhpcy51cGRhdGVNb2RhbCgpfT5WYWxpZGF0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+dGhpcy5oaWRlTW9kYWwoKX0+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIl19
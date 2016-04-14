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
/**
 * class that wraps all the snippets
 */

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
    /**
     * shows the modal window
     */


    _createClass(SnippetsContainerComponent, [{
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

            var name = this.refs.nameInput.value;
            var command = this.refs.commandInput.value;

            if (name !== "" && command !== "") {

                var a = new Snippet(name, command);
                a.save();
                this.state.snippetsArray.push(React.createElement(SnippetComponent, { parent: this, key: a._key, name: a._name, command: a._command }));
            }
            this.refs.modal.hide();
            this.forceUpdate();
        }
        /**
         * insert an output to the parent
         * @param {string} input - the text that will be in the output component
         */

    }, {
        key: "insertInput",
        value: function insertInput(input) {
            this._parent.insertInput(input);
        }
        /**
         * creates the snippets components , from snippets.json
         * @return {String[]} loadData
         */

    }, {
        key: "loadData",
        value: function loadData() {
            var _this2 = this;

            var data = require("../../../private/snippets.json");

            [].forEach.call(data.snippets, function (value) {

                _this2.state.snippetsArray.push(React.createElement(SnippetComponent, { parent: _this2, key: value.key, i: value.key, name: value.name, command: value.command }));
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
                        React.createElement(
                            "i",
                            { className: "material-icons md-light md-16" },
                            " add "
                        )
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NuaXBwZXRzL1NuaXBwZXRzQ29udGFpbmVyQ29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU0sUUFBUSxRQUFRLE9BQVIsQ0FBUjtBQUNOLElBQU0sbUJBQW1CLGlDQUFpQyxnQkFBakM7QUFDekIsSUFBTSxVQUFVLFFBQVEsd0JBQVIsRUFBa0MsT0FBbEM7QUFDaEIsSUFBTSxRQUFRLFFBQVEsaUJBQVIsQ0FBUjs7Ozs7SUFJTzs7O0FBRVQsYUFGUywwQkFFVCxDQUFZLEtBQVosRUFBbUI7OEJBRlYsNEJBRVU7OzJFQUZWLHVDQUlDLFFBRlM7O0FBR2YsY0FBSyxLQUFMLEdBQWE7QUFDVCwyQkFBYyxFQUFkO1NBREosQ0FIZTtBQU1mLGNBQUssUUFBTCxHQU5lO0FBT2YsY0FBSyxPQUFMLEdBQWUsTUFBTSxNQUFOLENBUEE7O0tBQW5COzs7Ozs7aUJBRlM7O29DQWNFO0FBQ1AsaUJBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsSUFBaEIsR0FETzs7Ozs7Ozs7b0NBTUE7O0FBRVQsZ0JBQUksT0FBTyxLQUFLLElBQUwsQ0FBVSxTQUFWLENBQW9CLEtBQXBCLENBRkY7QUFHVCxnQkFBSSxVQUFVLEtBQUssSUFBTCxDQUFVLFlBQVYsQ0FBdUIsS0FBdkIsQ0FITDs7QUFLVCxnQkFBRyxTQUFTLEVBQVQsSUFBZSxZQUFZLEVBQVosRUFBZTs7QUFFL0Isb0JBQUksSUFBSSxJQUFJLE9BQUosQ0FBWSxJQUFaLEVBQWlCLE9BQWpCLENBQUosQ0FGMkI7QUFHL0Isa0JBQUUsSUFBRixHQUgrQjtBQUkvQixxQkFBSyxLQUFMLENBQVcsYUFBWCxDQUF5QixJQUF6QixDQUE4QixvQkFBQyxnQkFBRCxJQUFrQixRQUFRLElBQVIsRUFBYyxLQUFLLEVBQUUsSUFBRixFQUFTLE1BQU0sRUFBRSxLQUFGLEVBQVMsU0FBUyxFQUFFLFFBQUYsRUFBdEUsQ0FBOUIsRUFKK0I7YUFBakM7QUFNQSxpQkFBSyxJQUFMLENBQVUsS0FBVixDQUFnQixJQUFoQixHQVhTO0FBWVQsaUJBQUssV0FBTCxHQVpTOzs7Ozs7Ozs7b0NBa0JDLE9BQU07QUFDZixpQkFBSyxPQUFMLENBQWEsV0FBYixDQUF5QixLQUF6QixFQURlOzs7Ozs7Ozs7bUNBT1I7OztBQUNOLGdCQUFJLE9BQU8sUUFBUSxnQ0FBUixDQUFQLENBREU7O0FBR04sZUFBRyxPQUFILENBQVcsSUFBWCxDQUFnQixLQUFLLFFBQUwsRUFBYyxVQUFDLEtBQUQsRUFBUzs7QUFFbkMsdUJBQUssS0FBTCxDQUFXLGFBQVgsQ0FBeUIsSUFBekIsQ0FBOEIsb0JBQUMsZ0JBQUQsSUFBa0IsZ0JBQWMsS0FBSyxNQUFNLEdBQU4sRUFBVyxHQUFHLE1BQU0sR0FBTixFQUFXLE1BQU0sTUFBTSxJQUFOLEVBQVksU0FBUyxNQUFNLE9BQU4sRUFBekYsQ0FBOUIsRUFGbUM7YUFBVCxDQUE5QixDQUhNOzs7O2lDQVNEOzs7QUFFTCxtQkFDQTs7a0JBQUssV0FBWSxpQkFBWixFQUFMO2dCQUNJOztzQkFBSyxXQUFZLFVBQVosRUFBTDs7b0JBQ0ksS0FBSyxLQUFMLENBQVcsYUFBWDt1QkFESjtpQkFESjtnQkFJSTs7O29CQUNJOzswQkFBSyxXQUFVLG1CQUFWLEVBQThCLFNBQVM7dUNBQUksT0FBSyxTQUFMOzZCQUFKLEVBQTVDO3dCQUNBOzs4QkFBRyxXQUFVLCtCQUFWLEVBQUg7O3lCQURBO3FCQURKO2lCQUpKO2dCQVNJO0FBQUMseUJBQUQ7c0JBQU8sS0FBSSxPQUFKLEVBQVA7b0JBQ087Ozs7cUJBRFA7b0JBRU8sK0JBQU8sS0FBSSxXQUFKLEVBQWdCLGFBQVksTUFBWixFQUFtQixNQUFLLE1BQUwsRUFBMUMsQ0FGUDtvQkFHTywrQkFBTyxLQUFJLGNBQUosRUFBbUIsYUFBWSxTQUFaLEVBQXNCLE1BQUssTUFBTCxFQUFoRCxDQUhQO29CQUlPOzswQkFBUSxTQUFTO3VDQUFJLE9BQUssU0FBTDs2QkFBSixFQUFqQjs7cUJBSlA7aUJBVEo7YUFEQSxDQUZLOzs7O1dBdERBO0VBQW1DLE1BQU0sU0FBTiIsImZpbGUiOiJTbmlwcGV0c0NvbnRhaW5lckNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XHJcbmNvbnN0IFNuaXBwZXRDb21wb25lbnQgPSByZXF1aXJlKGAuL1NuaXBwZXRDb21wb25lbnQuanNgKS5TbmlwcGV0Q29tcG9uZW50O1xyXG5jb25zdCBTbmlwcGV0ID0gcmVxdWlyZShcIi4uLy4uL21vZGVsL1NuaXBwZXQuanNcIikuU25pcHBldDtcclxuY29uc3QgTW9kYWwgPSByZXF1aXJlKFwiYm9yb24vRmFkZU1vZGFsXCIpO1xyXG4vKipcclxuICogY2xhc3MgdGhhdCB3cmFwcyBhbGwgdGhlIHNuaXBwZXRzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU25pcHBldHNDb250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblxyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzbmlwcGV0c0FycmF5OltdXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmxvYWREYXRhKCk7XHJcbiAgICAgICAgdGhpcy5fcGFyZW50ID0gcHJvcHMucGFyZW50O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBzaG93cyB0aGUgbW9kYWwgd2luZG93XHJcbiAgICAgKi9cclxuICAgIHNob3dNb2RhbCgpe1xyXG4gICAgICAgIHRoaXMucmVmcy5tb2RhbC5zaG93KCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIGhpZGVzIHRoZSBtb2RhbCB3aW5kb3dcclxuICAgICAqL1xyXG4gICAgaGlkZU1vZGFsKCl7XHJcblxyXG4gICAgICBsZXQgbmFtZSA9IHRoaXMucmVmcy5uYW1lSW5wdXQudmFsdWU7XHJcbiAgICAgIGxldCBjb21tYW5kID0gdGhpcy5yZWZzLmNvbW1hbmRJbnB1dC52YWx1ZTtcclxuXHJcbiAgICAgIGlmKG5hbWUgIT09IFwiXCIgJiYgY29tbWFuZCAhPT0gXCJcIil7XHJcblxyXG4gICAgICAgIGxldCBhID0gbmV3IFNuaXBwZXQobmFtZSxjb21tYW5kKTtcclxuICAgICAgICBhLnNhdmUoKTtcclxuICAgICAgICB0aGlzLnN0YXRlLnNuaXBwZXRzQXJyYXkucHVzaCg8U25pcHBldENvbXBvbmVudCBwYXJlbnQ9e3RoaXN9IGtleT17YS5fa2V5fSAgbmFtZT17YS5fbmFtZX0gY29tbWFuZD17YS5fY29tbWFuZH0vPik7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5yZWZzLm1vZGFsLmhpZGUoKTtcclxuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBpbnNlcnQgYW4gb3V0cHV0IHRvIHRoZSBwYXJlbnRcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dCAtIHRoZSB0ZXh0IHRoYXQgd2lsbCBiZSBpbiB0aGUgb3V0cHV0IGNvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBpbnNlcnRJbnB1dChpbnB1dCl7XHJcbiAgICAgICB0aGlzLl9wYXJlbnQuaW5zZXJ0SW5wdXQoaW5wdXQpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBjcmVhdGVzIHRoZSBzbmlwcGV0cyBjb21wb25lbnRzICwgZnJvbSBzbmlwcGV0cy5qc29uXHJcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmdbXX0gbG9hZERhdGFcclxuICAgICAqL1xyXG4gICAgbG9hZERhdGEoKXtcclxuICAgICAgICBsZXQgZGF0YSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9wcml2YXRlL3NuaXBwZXRzLmpzb25cIik7XHJcblxyXG4gICAgICAgIFtdLmZvckVhY2guY2FsbChkYXRhLnNuaXBwZXRzLCh2YWx1ZSk9PntcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc25pcHBldHNBcnJheS5wdXNoKDxTbmlwcGV0Q29tcG9uZW50IHBhcmVudD17dGhpc30ga2V5PXt2YWx1ZS5rZXl9IGk9e3ZhbHVlLmtleX0gbmFtZT17dmFsdWUubmFtZX0gY29tbWFuZD17dmFsdWUuY29tbWFuZH0vPik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJzbmlwcGV0c1dyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcInNuaXBwZXRzXCI+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc25pcHBldHNBcnJheVxyXG4gICAgICAgICAgICB9IDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbmlwcGV0QWRkIGJ1dHRvblwiIG9uQ2xpY2s9eygpPT50aGlzLnNob3dNb2RhbCgpfT5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIG1kLWxpZ2h0IG1kLTE2XCI+IGFkZCA8L2k+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPE1vZGFsIHJlZj1cIm1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICA8aDI+TmV3IHNuaXBwZXQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgPGlucHV0IHJlZj1cIm5hbWVJbnB1dFwiIHBsYWNlaG9sZGVyPVwibmFtZVwiIHR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgIDxpbnB1dCByZWY9XCJjb21tYW5kSW5wdXRcIiBwbGFjZWhvbGRlcj1cImNvbW1hbmRcIiB0eXBlPVwidGV4dFwiLz5cclxuICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PnRoaXMuaGlkZU1vZGFsKCl9PkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
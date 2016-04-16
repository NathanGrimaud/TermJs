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

        _this._snippetsArray = [];
        _this._parent = props.parent;
        _this.loadData();
        return _this;
    }
    /**
     * shows the modal window
     */


    _createClass(SnippetsContainerComponent, [{
        key: "getSnippets",
        value: function getSnippets() {
            return this._snippetsArray;
        }
    }, {
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
                this._snippetsArray.push(React.createElement(SnippetComponent, { parent: this, key: a._key, name: a._name, command: a._command }));
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

            this._snippetsArray = [].map.call(data.snippets, function (value) {
                return React.createElement(SnippetComponent, { parent: _this2, key: value.key, i: value.key, name: value.name, command: value.command });
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
                    this._snippetsArray,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NuaXBwZXRzL1NuaXBwZXRzQ29udGFpbmVyQ29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU0sUUFBUSxRQUFRLE9BQVIsQ0FBUjtBQUNOLElBQU0sbUJBQW1CLGlDQUFpQyxnQkFBakM7QUFDekIsSUFBTSxVQUFVLFFBQVEsd0JBQVIsRUFBa0MsT0FBbEM7QUFDaEIsSUFBTSxRQUFRLFFBQVEsaUJBQVIsQ0FBUjs7Ozs7SUFJTzs7O0FBRVQsYUFGUywwQkFFVCxDQUFZLEtBQVosRUFBbUI7OEJBRlYsNEJBRVU7OzJFQUZWLHVDQUlDLFFBRlM7O0FBR2YsY0FBSyxjQUFMLEdBQW9CLEVBQXBCLENBSGU7QUFJZixjQUFLLE9BQUwsR0FBZSxNQUFNLE1BQU4sQ0FKQTtBQUtmLGNBQUssUUFBTCxHQUxlOztLQUFuQjs7Ozs7O2lCQUZTOztzQ0FZSztBQUNYLG1CQUFPLEtBQUssY0FBTCxDQURJOzs7O29DQUdIO0FBQ1AsaUJBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsSUFBaEIsR0FETzs7Ozs7Ozs7b0NBTUE7O0FBRVQsZ0JBQUksT0FBTyxLQUFLLElBQUwsQ0FBVSxTQUFWLENBQW9CLEtBQXBCLENBRkY7QUFHVCxnQkFBSSxVQUFVLEtBQUssSUFBTCxDQUFVLFlBQVYsQ0FBdUIsS0FBdkIsQ0FITDs7QUFLVCxnQkFBRyxTQUFTLEVBQVQsSUFBZSxZQUFZLEVBQVosRUFBZTs7QUFFL0Isb0JBQUksSUFBSSxJQUFJLE9BQUosQ0FBWSxJQUFaLEVBQWlCLE9BQWpCLENBQUosQ0FGMkI7QUFHL0Isa0JBQUUsSUFBRixHQUgrQjtBQUkvQixxQkFBSyxjQUFMLENBQW9CLElBQXBCLENBQXlCLG9CQUFDLGdCQUFELElBQWtCLFFBQVEsSUFBUixFQUFjLEtBQUssRUFBRSxJQUFGLEVBQVMsTUFBTSxFQUFFLEtBQUYsRUFBUyxTQUFTLEVBQUUsUUFBRixFQUF0RSxDQUF6QixFQUorQjthQUFqQztBQU1BLGlCQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLElBQWhCLEdBWFM7QUFZVCxpQkFBSyxXQUFMLEdBWlM7Ozs7Ozs7OztvQ0FtQkMsT0FBTTtBQUNmLGlCQUFLLE9BQUwsQ0FBYSxXQUFiLENBQXlCLEtBQXpCLEVBRGU7Ozs7Ozs7OzttQ0FPUjs7O0FBQ04sZ0JBQUksT0FBTyxRQUFRLGdDQUFSLENBQVAsQ0FERTs7QUFHTixpQkFBSyxjQUFMLEdBQXNCLEdBQUcsR0FBSCxDQUFPLElBQVAsQ0FBWSxLQUFLLFFBQUwsRUFBYyxVQUFDLEtBQUQsRUFBUztBQUN2RCx1QkFBTyxvQkFBQyxnQkFBRCxJQUFrQixnQkFBYyxLQUFLLE1BQU0sR0FBTixFQUFXLEdBQUcsTUFBTSxHQUFOLEVBQVcsTUFBTSxNQUFNLElBQU4sRUFBWSxTQUFTLE1BQU0sT0FBTixFQUF6RixDQUFQLENBRHVEO2FBQVQsQ0FBaEQsQ0FITTs7OztpQ0FRRDs7O0FBRUwsbUJBQ0E7O2tCQUFLLFdBQVksaUJBQVosRUFBTDtnQkFDSTs7c0JBQUssV0FBWSxVQUFaLEVBQUw7O29CQUNJLEtBQUssY0FBTDt1QkFESjtpQkFESjtnQkFJSTs7O29CQUNJOzswQkFBSyxXQUFVLG1CQUFWLEVBQThCLFNBQVM7dUNBQUksT0FBSyxTQUFMOzZCQUFKLEVBQTVDO3dCQUNBOzs4QkFBRyxXQUFVLCtCQUFWLEVBQUg7O3lCQURBO3FCQURKO2lCQUpKO2dCQVNJO0FBQUMseUJBQUQ7c0JBQU8sS0FBSSxPQUFKLEVBQVA7b0JBQ087Ozs7cUJBRFA7b0JBRU8sK0JBQU8sS0FBSSxXQUFKLEVBQWdCLGFBQVksTUFBWixFQUFtQixNQUFLLE1BQUwsRUFBMUMsQ0FGUDtvQkFHTywrQkFBTyxLQUFJLGNBQUosRUFBbUIsYUFBWSxTQUFaLEVBQXNCLE1BQUssTUFBTCxFQUFoRCxDQUhQO29CQUlPOzswQkFBUSxTQUFTO3VDQUFJLE9BQUssU0FBTDs2QkFBSixFQUFqQjs7cUJBSlA7aUJBVEo7YUFEQSxDQUZLOzs7O1dBdkRBO0VBQW1DLE1BQU0sU0FBTiIsImZpbGUiOiJTbmlwcGV0c0NvbnRhaW5lckNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XHJcbmNvbnN0IFNuaXBwZXRDb21wb25lbnQgPSByZXF1aXJlKGAuL1NuaXBwZXRDb21wb25lbnQuanNgKS5TbmlwcGV0Q29tcG9uZW50O1xyXG5jb25zdCBTbmlwcGV0ID0gcmVxdWlyZShcIi4uLy4uL21vZGVsL1NuaXBwZXQuanNcIikuU25pcHBldDtcclxuY29uc3QgTW9kYWwgPSByZXF1aXJlKFwiYm9yb24vRmFkZU1vZGFsXCIpO1xyXG4vKipcclxuICogY2xhc3MgdGhhdCB3cmFwcyBhbGwgdGhlIHNuaXBwZXRzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU25pcHBldHNDb250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblxyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLl9zbmlwcGV0c0FycmF5PVtdO1xyXG4gICAgICAgIHRoaXMuX3BhcmVudCA9IHByb3BzLnBhcmVudDtcclxuICAgICAgICB0aGlzLmxvYWREYXRhKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIHNob3dzIHRoZSBtb2RhbCB3aW5kb3dcclxuICAgICAqL1xyXG4gICAgIGdldFNuaXBwZXRzKCl7XHJcbiAgICAgICByZXR1cm4gdGhpcy5fc25pcHBldHNBcnJheTtcclxuICAgICB9XHJcbiAgICBzaG93TW9kYWwoKXtcclxuICAgICAgICB0aGlzLnJlZnMubW9kYWwuc2hvdygpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBoaWRlcyB0aGUgbW9kYWwgd2luZG93XHJcbiAgICAgKi9cclxuICAgIGhpZGVNb2RhbCgpe1xyXG5cclxuICAgICAgbGV0IG5hbWUgPSB0aGlzLnJlZnMubmFtZUlucHV0LnZhbHVlO1xyXG4gICAgICBsZXQgY29tbWFuZCA9IHRoaXMucmVmcy5jb21tYW5kSW5wdXQudmFsdWU7XHJcblxyXG4gICAgICBpZihuYW1lICE9PSBcIlwiICYmIGNvbW1hbmQgIT09IFwiXCIpe1xyXG5cclxuICAgICAgICBsZXQgYSA9IG5ldyBTbmlwcGV0KG5hbWUsY29tbWFuZCk7XHJcbiAgICAgICAgYS5zYXZlKCk7XHJcbiAgICAgICAgdGhpcy5fc25pcHBldHNBcnJheS5wdXNoKDxTbmlwcGV0Q29tcG9uZW50IHBhcmVudD17dGhpc30ga2V5PXthLl9rZXl9ICBuYW1lPXthLl9uYW1lfSBjb21tYW5kPXthLl9jb21tYW5kfS8+KTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnJlZnMubW9kYWwuaGlkZSgpO1xyXG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcblxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBpbnNlcnQgYW4gb3V0cHV0IHRvIHRoZSBwYXJlbnRcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dCAtIHRoZSB0ZXh0IHRoYXQgd2lsbCBiZSBpbiB0aGUgb3V0cHV0IGNvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBpbnNlcnRJbnB1dChpbnB1dCl7XHJcbiAgICAgICB0aGlzLl9wYXJlbnQuaW5zZXJ0SW5wdXQoaW5wdXQpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBjcmVhdGVzIHRoZSBzbmlwcGV0cyBjb21wb25lbnRzICwgZnJvbSBzbmlwcGV0cy5qc29uXHJcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmdbXX0gbG9hZERhdGFcclxuICAgICAqL1xyXG4gICAgbG9hZERhdGEoKXtcclxuICAgICAgICBsZXQgZGF0YSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9wcml2YXRlL3NuaXBwZXRzLmpzb25cIik7XHJcblxyXG4gICAgICAgIHRoaXMuX3NuaXBwZXRzQXJyYXkgPSBbXS5tYXAuY2FsbChkYXRhLnNuaXBwZXRzLCh2YWx1ZSk9PntcclxuICAgICAgICAgIHJldHVybiA8U25pcHBldENvbXBvbmVudCBwYXJlbnQ9e3RoaXN9IGtleT17dmFsdWUua2V5fSBpPXt2YWx1ZS5rZXl9IG5hbWU9e3ZhbHVlLm5hbWV9IGNvbW1hbmQ9e3ZhbHVlLmNvbW1hbmR9Lz47XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJzbmlwcGV0c1dyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcInNuaXBwZXRzXCI+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NuaXBwZXRzQXJyYXlcclxuICAgICAgICAgICAgfSA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic25pcHBldEFkZCBidXR0b25cIiBvbkNsaWNrPXsoKT0+dGhpcy5zaG93TW9kYWwoKX0+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBtZC1saWdodCBtZC0xNlwiPiBhZGQgPC9pPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxNb2RhbCByZWY9XCJtb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgPGgyPk5ldyBzbmlwcGV0PC9oMj5cclxuICAgICAgICAgICAgICAgICAgIDxpbnB1dCByZWY9XCJuYW1lSW5wdXRcIiBwbGFjZWhvbGRlcj1cIm5hbWVcIiB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICA8aW5wdXQgcmVmPVwiY29tbWFuZElucHV0XCIgcGxhY2Vob2xkZXI9XCJjb21tYW5kXCIgdHlwZT1cInRleHRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT50aGlzLmhpZGVNb2RhbCgpfT5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19
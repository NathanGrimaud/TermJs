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

            var data = require("../../private/snippets.json");

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NuaXBwZXRzL1NuaXBwZXRzQ29udGFpbmVyQ29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU0sUUFBUSxRQUFRLE9BQVIsQ0FBUjtBQUNOLElBQU0sbUJBQW1CLGlDQUFpQyxnQkFBakM7QUFDekIsSUFBTSxVQUFVLFFBQVEsd0JBQVIsRUFBa0MsT0FBbEM7QUFDaEIsSUFBTSxRQUFRLFFBQVEsaUJBQVIsQ0FBUjs7Ozs7SUFJTzs7O0FBRVQsYUFGUywwQkFFVCxDQUFZLEtBQVosRUFBbUI7OEJBRlYsNEJBRVU7OzJFQUZWLHVDQUlDLFFBRlM7O0FBR2YsY0FBSyxLQUFMLEdBQWE7QUFDVCwyQkFBYyxFQUFkO1NBREosQ0FIZTtBQU1mLGNBQUssUUFBTCxHQU5lO0FBT2YsY0FBSyxPQUFMLEdBQWUsTUFBTSxNQUFOLENBUEE7O0tBQW5COzs7Ozs7aUJBRlM7O29DQWNFO0FBQ1AsaUJBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsSUFBaEIsR0FETzs7Ozs7Ozs7b0NBTUE7O0FBRVQsZ0JBQUksT0FBTyxLQUFLLElBQUwsQ0FBVSxTQUFWLENBQW9CLEtBQXBCLENBRkY7QUFHVCxnQkFBSSxVQUFVLEtBQUssSUFBTCxDQUFVLFlBQVYsQ0FBdUIsS0FBdkIsQ0FITDs7QUFLVCxnQkFBRyxTQUFTLEVBQVQsSUFBZSxZQUFZLEVBQVosRUFBZTs7QUFFL0Isb0JBQUksSUFBSSxJQUFJLE9BQUosQ0FBWSxJQUFaLEVBQWlCLE9BQWpCLENBQUosQ0FGMkI7QUFHL0Isa0JBQUUsSUFBRixHQUgrQjtBQUkvQixxQkFBSyxLQUFMLENBQVcsYUFBWCxDQUF5QixJQUF6QixDQUE4QixvQkFBQyxnQkFBRCxJQUFrQixRQUFRLElBQVIsRUFBYyxLQUFLLEVBQUUsSUFBRixFQUFTLE1BQU0sRUFBRSxLQUFGLEVBQVMsU0FBUyxFQUFFLFFBQUYsRUFBdEUsQ0FBOUIsRUFKK0I7YUFBakM7QUFNQSxpQkFBSyxJQUFMLENBQVUsS0FBVixDQUFnQixJQUFoQixHQVhTO0FBWVQsaUJBQUssV0FBTCxHQVpTOzs7Ozs7Ozs7b0NBa0JDLE9BQU07QUFDZixpQkFBSyxPQUFMLENBQWEsV0FBYixDQUF5QixLQUF6QixFQURlOzs7Ozs7Ozs7bUNBT1I7OztBQUNOLGdCQUFJLE9BQU8sUUFBUSw2QkFBUixDQUFQLENBREU7O0FBR04sZUFBRyxPQUFILENBQVcsSUFBWCxDQUFnQixLQUFLLFFBQUwsRUFBYyxVQUFDLEtBQUQsRUFBUzs7QUFFbkMsdUJBQUssS0FBTCxDQUFXLGFBQVgsQ0FBeUIsSUFBekIsQ0FBOEIsb0JBQUMsZ0JBQUQsSUFBa0IsZ0JBQWMsS0FBSyxNQUFNLEdBQU4sRUFBVyxHQUFHLE1BQU0sR0FBTixFQUFXLE1BQU0sTUFBTSxJQUFOLEVBQVksU0FBUyxNQUFNLE9BQU4sRUFBekYsQ0FBOUIsRUFGbUM7YUFBVCxDQUE5QixDQUhNOzs7O2lDQVNEOzs7QUFFTCxtQkFDQTs7a0JBQUssV0FBWSxpQkFBWixFQUFMO2dCQUNJOztzQkFBSyxXQUFZLFVBQVosRUFBTDs7b0JBQ0ksS0FBSyxLQUFMLENBQVcsYUFBWDt1QkFESjtpQkFESjtnQkFJSTs7O29CQUNJOzswQkFBSyxXQUFVLG1CQUFWLEVBQThCLFNBQVM7dUNBQUksT0FBSyxTQUFMOzZCQUFKLEVBQTVDOztxQkFESjtpQkFKSjtnQkFRSTtBQUFDLHlCQUFEO3NCQUFPLEtBQUksT0FBSixFQUFQO29CQUNPOzs7O3FCQURQO29CQUVPLCtCQUFPLEtBQUksV0FBSixFQUFnQixhQUFZLE1BQVosRUFBbUIsTUFBSyxNQUFMLEVBQTFDLENBRlA7b0JBR08sK0JBQU8sS0FBSSxjQUFKLEVBQW1CLGFBQVksU0FBWixFQUFzQixNQUFLLE1BQUwsRUFBaEQsQ0FIUDtvQkFJTzs7MEJBQVEsU0FBUzt1Q0FBSSxPQUFLLFNBQUw7NkJBQUosRUFBakI7O3FCQUpQO2lCQVJKO2FBREEsQ0FGSzs7OztXQXREQTtFQUFtQyxNQUFNLFNBQU4iLCJmaWxlIjoiU25pcHBldHNDb250YWluZXJDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xyXG5jb25zdCBTbmlwcGV0Q29tcG9uZW50ID0gcmVxdWlyZShgLi9TbmlwcGV0Q29tcG9uZW50LmpzYCkuU25pcHBldENvbXBvbmVudDtcclxuY29uc3QgU25pcHBldCA9IHJlcXVpcmUoXCIuLi8uLi9tb2RlbC9TbmlwcGV0LmpzXCIpLlNuaXBwZXQ7XHJcbmNvbnN0IE1vZGFsID0gcmVxdWlyZShcImJvcm9uL0ZhZGVNb2RhbFwiKTtcclxuLyoqXHJcbiAqIGNsYXNzIHRoYXQgd3JhcHMgYWxsIHRoZSBzbmlwcGV0c1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNuaXBwZXRzQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc25pcHBldHNBcnJheTpbXVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xyXG4gICAgICAgIHRoaXMuX3BhcmVudCA9IHByb3BzLnBhcmVudDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogc2hvd3MgdGhlIG1vZGFsIHdpbmRvd1xyXG4gICAgICovXHJcbiAgICBzaG93TW9kYWwoKXtcclxuICAgICAgICB0aGlzLnJlZnMubW9kYWwuc2hvdygpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBoaWRlcyB0aGUgbW9kYWwgd2luZG93XHJcbiAgICAgKi9cclxuICAgIGhpZGVNb2RhbCgpe1xyXG5cclxuICAgICAgbGV0IG5hbWUgPSB0aGlzLnJlZnMubmFtZUlucHV0LnZhbHVlO1xyXG4gICAgICBsZXQgY29tbWFuZCA9IHRoaXMucmVmcy5jb21tYW5kSW5wdXQudmFsdWU7XHJcblxyXG4gICAgICBpZihuYW1lICE9PSBcIlwiICYmIGNvbW1hbmQgIT09IFwiXCIpe1xyXG5cclxuICAgICAgICBsZXQgYSA9IG5ldyBTbmlwcGV0KG5hbWUsY29tbWFuZCk7XHJcbiAgICAgICAgYS5zYXZlKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zbmlwcGV0c0FycmF5LnB1c2goPFNuaXBwZXRDb21wb25lbnQgcGFyZW50PXt0aGlzfSBrZXk9e2EuX2tleX0gIG5hbWU9e2EuX25hbWV9IGNvbW1hbmQ9e2EuX2NvbW1hbmR9Lz4pO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucmVmcy5tb2RhbC5oaWRlKCk7XHJcbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogaW5zZXJ0IGFuIG91dHB1dCB0byB0aGUgcGFyZW50XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXQgLSB0aGUgdGV4dCB0aGF0IHdpbGwgYmUgaW4gdGhlIG91dHB1dCBjb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgaW5zZXJ0SW5wdXQoaW5wdXQpe1xyXG4gICAgICAgdGhpcy5fcGFyZW50Lmluc2VydElucHV0KGlucHV0KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogY3JlYXRlcyB0aGUgc25pcHBldHMgY29tcG9uZW50cyAsIGZyb20gc25pcHBldHMuanNvblxyXG4gICAgICogQHJldHVybiB7U3RyaW5nW119IGxvYWREYXRhXHJcbiAgICAgKi9cclxuICAgIGxvYWREYXRhKCl7XHJcbiAgICAgICAgbGV0IGRhdGEgPSByZXF1aXJlKFwiLi4vLi4vcHJpdmF0ZS9zbmlwcGV0cy5qc29uXCIpO1xyXG5cclxuICAgICAgICBbXS5mb3JFYWNoLmNhbGwoZGF0YS5zbmlwcGV0cywodmFsdWUpPT57XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNuaXBwZXRzQXJyYXkucHVzaCg8U25pcHBldENvbXBvbmVudCBwYXJlbnQ9e3RoaXN9IGtleT17dmFsdWUua2V5fSBpPXt2YWx1ZS5rZXl9IG5hbWU9e3ZhbHVlLm5hbWV9IGNvbW1hbmQ9e3ZhbHVlLmNvbW1hbmR9Lz4pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwic25pcHBldHNXcmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJzbmlwcGV0c1wiPiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNuaXBwZXRzQXJyYXlcclxuICAgICAgICAgICAgfSA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic25pcHBldEFkZCBidXR0b25cIiBvbkNsaWNrPXsoKT0+dGhpcy5zaG93TW9kYWwoKX0+ICsgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPE1vZGFsIHJlZj1cIm1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICA8aDI+TmV3IHNuaXBwZXQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgPGlucHV0IHJlZj1cIm5hbWVJbnB1dFwiIHBsYWNlaG9sZGVyPVwibmFtZVwiIHR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgIDxpbnB1dCByZWY9XCJjb21tYW5kSW5wdXRcIiBwbGFjZWhvbGRlcj1cImNvbW1hbmRcIiB0eXBlPVwidGV4dFwiLz5cclxuICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PnRoaXMuaGlkZU1vZGFsKCl9PkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
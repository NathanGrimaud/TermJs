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
var TreeViewComponent = require("../TreeView/TreeViewComponent.js").TreeViewComponent;
var Process = require("../../services/Process").Process;
var Bash = require("../../model/Bash").Bash;

var ConsoleComponent = exports.ConsoleComponent = function (_React$Component) {
    _inherits(ConsoleComponent, _React$Component);

    function ConsoleComponent(props) {
        _classCallCheck(this, ConsoleComponent);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ConsoleComponent).call(this, props));

        _this._key = 0;
        _this._path = props.path;
        _this._outputs = [React.createElement(ConsoleOutputComponent, { key: "0", console: _this, text: "# Bienvenue dans le terminal" })];
        _this._process = new Process(new Bash(_this));
        return _this;
    }
    /**
     * updates the input
     */


    _createClass(ConsoleComponent, [{
        key: "updatePath",
        value: function updatePath() {
            this.refs.ConsoleInputComponent.changePath(process.cwd());
        }
        /**
         * @method insertOutput - creates a new ConsoleOutput with the provided text
         * @param {String} text - the text that need to be a new console input
         * @param {String} className - the string to give class to the component
         */

    }, {
        key: "insertOutput",
        value: function insertOutput(text, className) {
            this._key += 1;
            this._outputs.push(React.createElement(ConsoleOutputComponent, { key: this._key, console: this, className: className, text: text.toString() }));
            this.forceUpdate();
        }
    }, {
        key: "getSnippets",
        value: function getSnippets() {
            console.log(this.refs);
            return this.refs.snippets.getSnippets();
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
                    { className: "treeViewWrapper" },
                    React.createElement(TreeViewComponent, { path: this._path, ref: "treeView", parent: this, process: this._process })
                ),
                React.createElement(
                    "div",
                    { className: "Console" },
                    this._outputs.map(function (output) {
                        return output;
                    }),
                    React.createElement(ConsoleInputComponent, { ref: "ConsoleInputComponent", parent: this, process: this._process })
                ),
                React.createElement(SnippetsContainerComponent, { ref: "snippets", parent: this, process: this._process })
            );
        }
    }]);

    return ConsoleComponent;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvbnNvbGUvQ29uc29sZUNvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLFFBQVEsUUFBUSxPQUFSLENBQVI7O0FBRU4sSUFBTSx5QkFBeUIsdUNBQXVDLHNCQUF2QztBQUMvQixJQUFNLHdCQUF3QixzQ0FBc0MscUJBQXRDO0FBQzlCLElBQU0sNkJBQTZCLHFEQUFxRCwwQkFBckQ7QUFDbkMsSUFBTSxvQkFBb0IsNENBQTRDLGlCQUE1QztBQUMxQixJQUFNLFVBQVUsa0NBQWtDLE9BQWxDO0FBQ2hCLElBQU0sT0FBTyw0QkFBNEIsSUFBNUI7O0lBRUE7OztBQUVULGFBRlMsZ0JBRVQsQ0FBWSxLQUFaLEVBQW1COzhCQUZWLGtCQUVVOzsyRUFGViw2QkFHQyxRQURTOztBQUVmLGNBQUssSUFBTCxHQUFVLENBQVYsQ0FGZTtBQUdmLGNBQUssS0FBTCxHQUFhLE1BQU0sSUFBTixDQUhFO0FBSWYsY0FBSyxRQUFMLEdBQWdCLENBQUMsb0JBQUMsc0JBQUQsSUFBd0IsS0FBSSxHQUFKLEVBQVMsZ0JBQWUsTUFBTSw4QkFBTixFQUFoRCxDQUFELENBQWhCLENBSmU7QUFLZixjQUFLLFFBQUwsR0FBZ0IsSUFBSSxPQUFKLENBQVksSUFBSSxJQUFKLE9BQVosQ0FBaEIsQ0FMZTs7S0FBbkI7Ozs7OztpQkFGUzs7cUNBWUc7QUFDUixpQkFBSyxJQUFMLENBQVUscUJBQVYsQ0FBZ0MsVUFBaEMsQ0FBMkMsUUFBUSxHQUFSLEVBQTNDLEVBRFE7Ozs7Ozs7Ozs7cUNBUUMsTUFBTSxXQUFXO0FBQzFCLGlCQUFLLElBQUwsSUFBYSxDQUFiLENBRDBCO0FBRTFCLGlCQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLG9CQUFDLHNCQUFELElBQXdCLEtBQU8sS0FBSyxJQUFMLEVBQVksU0FBUyxJQUFULEVBQWUsV0FBVyxTQUFYLEVBQXNCLE1BQU0sS0FBSyxRQUFMLEVBQU4sRUFBaEYsQ0FBbkIsRUFGMEI7QUFHMUIsaUJBQUssV0FBTCxHQUgwQjs7OztzQ0FLakI7QUFDTCxvQkFBUSxHQUFSLENBQVksS0FBSyxJQUFMLENBQVosQ0FESztBQUVYLG1CQUFPLEtBQUssSUFBTCxDQUFVLFFBQVYsQ0FBbUIsV0FBbkIsRUFBUCxDQUZXOzs7O29DQUlELE9BQU07QUFDZCxpQkFBSyxJQUFMLENBQVUscUJBQVYsQ0FBZ0MsV0FBaEMsQ0FBNEMsS0FBNUMsRUFEYzs7OztpQ0FHVDs7QUFFTCxtQkFDSTs7a0JBQUssV0FBVSxnQkFBVixFQUFMO2dCQUNJOztzQkFBSyxXQUFVLGlCQUFWLEVBQUw7b0JBQ0ksb0JBQUMsaUJBQUQsSUFBbUIsTUFBTSxLQUFLLEtBQUwsRUFBWSxLQUFJLFVBQUosRUFBZSxRQUFRLElBQVIsRUFBYyxTQUFTLEtBQUssUUFBTCxFQUEzRSxDQURKO2lCQURKO2dCQUlJOztzQkFBSyxXQUFVLFNBQVYsRUFBTDtvQkFDSyxLQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCOytCQUFVO3FCQUFWLENBRHZCO29CQUVJLG9CQUFDLHFCQUFELElBQXVCLEtBQUksdUJBQUosRUFBNEIsUUFBUSxJQUFSLEVBQWMsU0FBUyxLQUFLLFFBQUwsRUFBMUUsQ0FGSjtpQkFKSjtnQkFRSSxvQkFBQywwQkFBRCxJQUE0QixLQUFJLFVBQUosRUFBZSxRQUFRLElBQVIsRUFBYyxTQUFTLEtBQUssUUFBTCxFQUFsRSxDQVJKO2FBREosQ0FGSzs7OztXQWhDQTtFQUF5QixNQUFNLFNBQU4iLCJmaWxlIjoiQ29uc29sZUNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XHJcblxyXG5jb25zdCBDb25zb2xlT3V0cHV0Q29tcG9uZW50ID0gcmVxdWlyZShgLi9Db25zb2xlT3V0cHV0Q29tcG9uZW50LmpzYCkuQ29uc29sZU91dHB1dENvbXBvbmVudDtcclxuY29uc3QgQ29uc29sZUlucHV0Q29tcG9uZW50ID0gcmVxdWlyZShgLi9Db25zb2xlSW5wdXRDb21wb25lbnQuanNgKS5Db25zb2xlSW5wdXRDb21wb25lbnQ7XHJcbmNvbnN0IFNuaXBwZXRzQ29udGFpbmVyQ29tcG9uZW50ID0gcmVxdWlyZShgLi4vU25pcHBldHMvU25pcHBldHNDb250YWluZXJDb21wb25lbnQuanNgKS5TbmlwcGV0c0NvbnRhaW5lckNvbXBvbmVudDtcclxuY29uc3QgVHJlZVZpZXdDb21wb25lbnQgPSByZXF1aXJlKGAuLi9UcmVlVmlldy9UcmVlVmlld0NvbXBvbmVudC5qc2ApLlRyZWVWaWV3Q29tcG9uZW50O1xyXG5jb25zdCBQcm9jZXNzID0gcmVxdWlyZShgLi4vLi4vc2VydmljZXMvUHJvY2Vzc2ApLlByb2Nlc3M7XHJcbmNvbnN0IEJhc2ggPSByZXF1aXJlKGAuLi8uLi9tb2RlbC9CYXNoYCkuQmFzaDtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb25zb2xlQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLl9rZXk9MDtcclxuICAgICAgICB0aGlzLl9wYXRoID0gcHJvcHMucGF0aDtcclxuICAgICAgICB0aGlzLl9vdXRwdXRzID0gWzxDb25zb2xlT3V0cHV0Q29tcG9uZW50IGtleT1cIjBcIiAgY29uc29sZT17dGhpc30gdGV4dD17XCIjIEJpZW52ZW51ZSBkYW5zIGxlIHRlcm1pbmFsXCJ9IC8+XTtcclxuICAgICAgICB0aGlzLl9wcm9jZXNzID0gbmV3IFByb2Nlc3MobmV3IEJhc2godGhpcykpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiB1cGRhdGVzIHRoZSBpbnB1dFxyXG4gICAgICovXHJcbiAgICB1cGRhdGVQYXRoKCl7XHJcbiAgICAgICAgdGhpcy5yZWZzLkNvbnNvbGVJbnB1dENvbXBvbmVudC5jaGFuZ2VQYXRoKHByb2Nlc3MuY3dkKCkpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBAbWV0aG9kIGluc2VydE91dHB1dCAtIGNyZWF0ZXMgYSBuZXcgQ29uc29sZU91dHB1dCB3aXRoIHRoZSBwcm92aWRlZCB0ZXh0XHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdGV4dCAtIHRoZSB0ZXh0IHRoYXQgbmVlZCB0byBiZSBhIG5ldyBjb25zb2xlIGlucHV0XHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIC0gdGhlIHN0cmluZyB0byBnaXZlIGNsYXNzIHRvIHRoZSBjb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgaW5zZXJ0T3V0cHV0KHRleHQsIGNsYXNzTmFtZSkge1xyXG4gICAgICAgIHRoaXMuX2tleSArPSAxO1xyXG4gICAgICAgIHRoaXMuX291dHB1dHMucHVzaCg8Q29uc29sZU91dHB1dENvbXBvbmVudCBrZXkgPSB7dGhpcy5fa2V5fSAgY29uc29sZT17dGhpc30gY2xhc3NOYW1lPXtjbGFzc05hbWV9IHRleHQ9e3RleHQudG9TdHJpbmcoKSB9IC8+KTtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcbiAgICBnZXRTbmlwcGV0cygpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlZnMpO1xyXG4gICAgICByZXR1cm4gdGhpcy5yZWZzLnNuaXBwZXRzLmdldFNuaXBwZXRzKCk7XHJcbiAgICB9XHJcbiAgICBpbnNlcnRJbnB1dChpbnB1dCl7XHJcbiAgICAgICAgdGhpcy5yZWZzLkNvbnNvbGVJbnB1dENvbXBvbmVudC5pbnNlcnRJbnB1dChpbnB1dCk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uc29sZVdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlZVZpZXdXcmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyZWVWaWV3Q29tcG9uZW50IHBhdGg9e3RoaXMuX3BhdGh9IHJlZj1cInRyZWVWaWV3XCIgcGFyZW50PXt0aGlzfSBwcm9jZXNzPXt0aGlzLl9wcm9jZXNzfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNvbnNvbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5fb3V0cHV0cy5tYXAob3V0cHV0ID0+IG91dHB1dCkgfVxyXG4gICAgICAgICAgICAgICAgICAgIDxDb25zb2xlSW5wdXRDb21wb25lbnQgcmVmPVwiQ29uc29sZUlucHV0Q29tcG9uZW50XCIgcGFyZW50PXt0aGlzfSBwcm9jZXNzPXt0aGlzLl9wcm9jZXNzfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxTbmlwcGV0c0NvbnRhaW5lckNvbXBvbmVudCByZWY9XCJzbmlwcGV0c1wiIHBhcmVudD17dGhpc30gcHJvY2Vzcz17dGhpcy5fcHJvY2Vzc30vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iXX0=
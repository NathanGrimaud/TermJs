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
                React.createElement(SnippetsContainerComponent, { parent: this, process: this._process })
            );
        }
    }]);

    return ConsoleComponent;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvbnNvbGUvQ29uc29sZUNvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLFFBQVEsUUFBUSxPQUFSLENBQVI7O0FBRU4sSUFBTSx5QkFBeUIsdUNBQXVDLHNCQUF2QztBQUMvQixJQUFNLHdCQUF3QixzQ0FBc0MscUJBQXRDO0FBQzlCLElBQU0sNkJBQTZCLHFEQUFxRCwwQkFBckQ7QUFDbkMsSUFBTSxvQkFBb0IsNENBQTRDLGlCQUE1QztBQUMxQixJQUFNLFVBQVUsa0NBQWtDLE9BQWxDO0FBQ2hCLElBQU0sT0FBTyw0QkFBNEIsSUFBNUI7O0lBRUE7OztBQUVULGFBRlMsZ0JBRVQsQ0FBWSxLQUFaLEVBQW1COzhCQUZWLGtCQUVVOzsyRUFGViw2QkFHQyxRQURTOztBQUVmLGNBQUssSUFBTCxHQUFVLENBQVYsQ0FGZTtBQUdmLGNBQUssS0FBTCxHQUFhLE1BQU0sSUFBTixDQUhFO0FBSWYsY0FBSyxRQUFMLEdBQWdCLENBQUMsb0JBQUMsc0JBQUQsSUFBd0IsS0FBSSxHQUFKLEVBQVMsZ0JBQWUsTUFBTSw4QkFBTixFQUFoRCxDQUFELENBQWhCLENBSmU7QUFLZixjQUFLLFFBQUwsR0FBZ0IsSUFBSSxPQUFKLENBQVksSUFBSSxJQUFKLE9BQVosQ0FBaEIsQ0FMZTs7S0FBbkI7Ozs7OztpQkFGUzs7cUNBWUc7QUFDUixpQkFBSyxJQUFMLENBQVUscUJBQVYsQ0FBZ0MsVUFBaEMsQ0FBMkMsUUFBUSxHQUFSLEVBQTNDLEVBRFE7Ozs7Ozs7Ozs7cUNBUUMsTUFBTSxXQUFXO0FBQzFCLGlCQUFLLElBQUwsSUFBYSxDQUFiLENBRDBCO0FBRTFCLGlCQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLG9CQUFDLHNCQUFELElBQXdCLEtBQU8sS0FBSyxJQUFMLEVBQVksU0FBUyxJQUFULEVBQWUsV0FBVyxTQUFYLEVBQXNCLE1BQU0sS0FBSyxRQUFMLEVBQU4sRUFBaEYsQ0FBbkIsRUFGMEI7QUFHMUIsaUJBQUssV0FBTCxHQUgwQjs7OztvQ0FNbEIsT0FBTTtBQUNkLGlCQUFLLElBQUwsQ0FBVSxxQkFBVixDQUFnQyxXQUFoQyxDQUE0QyxLQUE1QyxFQURjOzs7O2lDQUdUOztBQUVMLG1CQUNJOztrQkFBSyxXQUFVLGdCQUFWLEVBQUw7Z0JBQ0k7O3NCQUFLLFdBQVUsaUJBQVYsRUFBTDtvQkFDSSxvQkFBQyxpQkFBRCxJQUFtQixNQUFNLEtBQUssS0FBTCxFQUFZLEtBQUksVUFBSixFQUFlLFFBQVEsSUFBUixFQUFjLFNBQVMsS0FBSyxRQUFMLEVBQTNFLENBREo7aUJBREo7Z0JBSUk7O3NCQUFLLFdBQVUsU0FBVixFQUFMO29CQUNLLEtBQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0I7K0JBQVU7cUJBQVYsQ0FEdkI7b0JBRUksb0JBQUMscUJBQUQsSUFBdUIsS0FBSSx1QkFBSixFQUE0QixRQUFRLElBQVIsRUFBYyxTQUFTLEtBQUssUUFBTCxFQUExRSxDQUZKO2lCQUpKO2dCQVFJLG9CQUFDLDBCQUFELElBQTRCLFFBQVEsSUFBUixFQUFjLFNBQVMsS0FBSyxRQUFMLEVBQW5ELENBUko7YUFESixDQUZLOzs7O1dBN0JBO0VBQXlCLE1BQU0sU0FBTiIsImZpbGUiOiJDb25zb2xlQ29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcclxuXHJcbmNvbnN0IENvbnNvbGVPdXRwdXRDb21wb25lbnQgPSByZXF1aXJlKGAuL0NvbnNvbGVPdXRwdXRDb21wb25lbnQuanNgKS5Db25zb2xlT3V0cHV0Q29tcG9uZW50O1xyXG5jb25zdCBDb25zb2xlSW5wdXRDb21wb25lbnQgPSByZXF1aXJlKGAuL0NvbnNvbGVJbnB1dENvbXBvbmVudC5qc2ApLkNvbnNvbGVJbnB1dENvbXBvbmVudDtcclxuY29uc3QgU25pcHBldHNDb250YWluZXJDb21wb25lbnQgPSByZXF1aXJlKGAuLi9TbmlwcGV0cy9TbmlwcGV0c0NvbnRhaW5lckNvbXBvbmVudC5qc2ApLlNuaXBwZXRzQ29udGFpbmVyQ29tcG9uZW50O1xyXG5jb25zdCBUcmVlVmlld0NvbXBvbmVudCA9IHJlcXVpcmUoYC4uL1RyZWVWaWV3L1RyZWVWaWV3Q29tcG9uZW50LmpzYCkuVHJlZVZpZXdDb21wb25lbnQ7XHJcbmNvbnN0IFByb2Nlc3MgPSByZXF1aXJlKGAuLi8uLi9zZXJ2aWNlcy9Qcm9jZXNzYCkuUHJvY2VzcztcclxuY29uc3QgQmFzaCA9IHJlcXVpcmUoYC4uLy4uL21vZGVsL0Jhc2hgKS5CYXNoO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbnNvbGVDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuX2tleT0wO1xyXG4gICAgICAgIHRoaXMuX3BhdGggPSBwcm9wcy5wYXRoO1xyXG4gICAgICAgIHRoaXMuX291dHB1dHMgPSBbPENvbnNvbGVPdXRwdXRDb21wb25lbnQga2V5PVwiMFwiICBjb25zb2xlPXt0aGlzfSB0ZXh0PXtcIiMgQmllbnZlbnVlIGRhbnMgbGUgdGVybWluYWxcIn0gLz5dO1xyXG4gICAgICAgIHRoaXMuX3Byb2Nlc3MgPSBuZXcgUHJvY2VzcyhuZXcgQmFzaCh0aGlzKSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIHVwZGF0ZXMgdGhlIGlucHV0XHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZVBhdGgoKXtcclxuICAgICAgICB0aGlzLnJlZnMuQ29uc29sZUlucHV0Q29tcG9uZW50LmNoYW5nZVBhdGgocHJvY2Vzcy5jd2QoKSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEBtZXRob2QgaW5zZXJ0T3V0cHV0IC0gY3JlYXRlcyBhIG5ldyBDb25zb2xlT3V0cHV0IHdpdGggdGhlIHByb3ZpZGVkIHRleHRcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0IC0gdGhlIHRleHQgdGhhdCBuZWVkIHRvIGJlIGEgbmV3IGNvbnNvbGUgaW5wdXRcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgLSB0aGUgc3RyaW5nIHRvIGdpdmUgY2xhc3MgdG8gdGhlIGNvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBpbnNlcnRPdXRwdXQodGV4dCwgY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgdGhpcy5fa2V5ICs9IDE7XHJcbiAgICAgICAgdGhpcy5fb3V0cHV0cy5wdXNoKDxDb25zb2xlT3V0cHV0Q29tcG9uZW50IGtleSA9IHt0aGlzLl9rZXl9ICBjb25zb2xlPXt0aGlzfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gdGV4dD17dGV4dC50b1N0cmluZygpIH0gLz4pO1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbnNlcnRJbnB1dChpbnB1dCl7XHJcbiAgICAgICAgdGhpcy5yZWZzLkNvbnNvbGVJbnB1dENvbXBvbmVudC5pbnNlcnRJbnB1dChpbnB1dCk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uc29sZVdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlZVZpZXdXcmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyZWVWaWV3Q29tcG9uZW50IHBhdGg9e3RoaXMuX3BhdGh9IHJlZj1cInRyZWVWaWV3XCIgcGFyZW50PXt0aGlzfSBwcm9jZXNzPXt0aGlzLl9wcm9jZXNzfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNvbnNvbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5fb3V0cHV0cy5tYXAob3V0cHV0ID0+IG91dHB1dCkgfVxyXG4gICAgICAgICAgICAgICAgICAgIDxDb25zb2xlSW5wdXRDb21wb25lbnQgcmVmPVwiQ29uc29sZUlucHV0Q29tcG9uZW50XCIgcGFyZW50PXt0aGlzfSBwcm9jZXNzPXt0aGlzLl9wcm9jZXNzfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxTbmlwcGV0c0NvbnRhaW5lckNvbXBvbmVudCBwYXJlbnQ9e3RoaXN9IHByb2Nlc3M9e3RoaXMuX3Byb2Nlc3N9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIl19
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

        _this.state = {
            key: 0,
            path: props.path,
            outputs: [React.createElement(ConsoleOutputComponent, { key: "0", console: _this, text: "# Bienvenue dans le terminal" })]
        };
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
            this.state.key += 1;
            this.state.outputs.push(React.createElement(ConsoleOutputComponent, { key: this.state.key, console: this, className: className, text: text.toString() }));
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
                    React.createElement(TreeViewComponent, { path: this.state.path, ref: "treeView", parent: this, process: this._process })
                ),
                React.createElement(
                    "div",
                    { className: "Console" },
                    this.state.outputs.map(function (output) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvbnNvbGUvQ29uc29sZUNvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLFFBQVEsUUFBUSxPQUFSLENBQVI7O0FBRU4sSUFBTSx5QkFBeUIsdUNBQXVDLHNCQUF2QztBQUMvQixJQUFNLHdCQUF3QixzQ0FBc0MscUJBQXRDO0FBQzlCLElBQU0sNkJBQTZCLHFEQUFxRCwwQkFBckQ7QUFDbkMsSUFBTSxvQkFBb0IsNENBQTRDLGlCQUE1QztBQUMxQixJQUFNLFVBQVUsa0NBQWtDLE9BQWxDO0FBQ2hCLElBQU0sT0FBTyw0QkFBNEIsSUFBNUI7O0lBRUE7OztBQUVULGFBRlMsZ0JBRVQsQ0FBWSxLQUFaLEVBQW1COzhCQUZWLGtCQUVVOzsyRUFGViw2QkFHQyxRQURTOztBQUVmLGNBQUssS0FBTCxHQUFhO0FBQ1QsaUJBQUssQ0FBTDtBQUNBLGtCQUFLLE1BQU0sSUFBTjtBQUNMLHFCQUFTLENBQUMsb0JBQUMsc0JBQUQsSUFBd0IsS0FBSSxHQUFKLEVBQVMsZ0JBQWUsTUFBTSw4QkFBTixFQUFoRCxDQUFELENBQVQ7U0FISixDQUZlO0FBT2YsY0FBSyxRQUFMLEdBQWdCLElBQUksT0FBSixDQUFZLElBQUksSUFBSixPQUFaLENBQWhCLENBUGU7O0tBQW5COzs7Ozs7aUJBRlM7O3FDQWNHO0FBQ1IsaUJBQUssSUFBTCxDQUFVLHFCQUFWLENBQWdDLFVBQWhDLENBQTJDLFFBQVEsR0FBUixFQUEzQyxFQURROzs7Ozs7Ozs7O3FDQVFDLE1BQU0sV0FBVztBQUMxQixpQkFBSyxLQUFMLENBQVcsR0FBWCxJQUFrQixDQUFsQixDQUQwQjtBQUUxQixpQkFBSyxLQUFMLENBQVcsT0FBWCxDQUFtQixJQUFuQixDQUF3QixvQkFBQyxzQkFBRCxJQUF3QixLQUFPLEtBQUssS0FBTCxDQUFXLEdBQVgsRUFBaUIsU0FBUyxJQUFULEVBQWUsV0FBVyxTQUFYLEVBQXNCLE1BQU0sS0FBSyxRQUFMLEVBQU4sRUFBckYsQ0FBeEIsRUFGMEI7QUFHMUIsaUJBQUssV0FBTCxHQUgwQjs7OztvQ0FNbEIsT0FBTTtBQUNkLGlCQUFLLElBQUwsQ0FBVSxxQkFBVixDQUFnQyxXQUFoQyxDQUE0QyxLQUE1QyxFQURjOzs7O2lDQUdUOztBQUVMLG1CQUNJOztrQkFBSyxXQUFVLGdCQUFWLEVBQUw7Z0JBQ0k7O3NCQUFLLFdBQVUsaUJBQVYsRUFBTDtvQkFDSSxvQkFBQyxpQkFBRCxJQUFtQixNQUFNLEtBQUssS0FBTCxDQUFXLElBQVgsRUFBaUIsS0FBSSxVQUFKLEVBQWUsUUFBUSxJQUFSLEVBQWMsU0FBUyxLQUFLLFFBQUwsRUFBaEYsQ0FESjtpQkFESjtnQkFJSTs7c0JBQUssV0FBVSxTQUFWLEVBQUw7b0JBQ0ssS0FBSyxLQUFMLENBQVcsT0FBWCxDQUFtQixHQUFuQixDQUF1QjsrQkFBVTtxQkFBVixDQUQ1QjtvQkFFSSxvQkFBQyxxQkFBRCxJQUF1QixLQUFJLHVCQUFKLEVBQTRCLFFBQVEsSUFBUixFQUFjLFNBQVMsS0FBSyxRQUFMLEVBQTFFLENBRko7aUJBSko7Z0JBUUksb0JBQUMsMEJBQUQsSUFBNEIsUUFBUSxJQUFSLEVBQWMsU0FBUyxLQUFLLFFBQUwsRUFBbkQsQ0FSSjthQURKLENBRks7Ozs7V0EvQkE7RUFBeUIsTUFBTSxTQUFOIiwiZmlsZSI6IkNvbnNvbGVDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xyXG5cclxuY29uc3QgQ29uc29sZU91dHB1dENvbXBvbmVudCA9IHJlcXVpcmUoYC4vQ29uc29sZU91dHB1dENvbXBvbmVudC5qc2ApLkNvbnNvbGVPdXRwdXRDb21wb25lbnQ7XHJcbmNvbnN0IENvbnNvbGVJbnB1dENvbXBvbmVudCA9IHJlcXVpcmUoYC4vQ29uc29sZUlucHV0Q29tcG9uZW50LmpzYCkuQ29uc29sZUlucHV0Q29tcG9uZW50O1xyXG5jb25zdCBTbmlwcGV0c0NvbnRhaW5lckNvbXBvbmVudCA9IHJlcXVpcmUoYC4uL1NuaXBwZXRzL1NuaXBwZXRzQ29udGFpbmVyQ29tcG9uZW50LmpzYCkuU25pcHBldHNDb250YWluZXJDb21wb25lbnQ7XHJcbmNvbnN0IFRyZWVWaWV3Q29tcG9uZW50ID0gcmVxdWlyZShgLi4vVHJlZVZpZXcvVHJlZVZpZXdDb21wb25lbnQuanNgKS5UcmVlVmlld0NvbXBvbmVudDtcclxuY29uc3QgUHJvY2VzcyA9IHJlcXVpcmUoYC4uLy4uL3NlcnZpY2VzL1Byb2Nlc3NgKS5Qcm9jZXNzO1xyXG5jb25zdCBCYXNoID0gcmVxdWlyZShgLi4vLi4vbW9kZWwvQmFzaGApLkJhc2g7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uc29sZUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAga2V5OiAwLFxyXG4gICAgICAgICAgICBwYXRoOnByb3BzLnBhdGgsXHJcbiAgICAgICAgICAgIG91dHB1dHM6IFs8Q29uc29sZU91dHB1dENvbXBvbmVudCBrZXk9XCIwXCIgIGNvbnNvbGU9e3RoaXN9IHRleHQ9e1wiIyBCaWVudmVudWUgZGFucyBsZSB0ZXJtaW5hbFwifSAvPl1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX3Byb2Nlc3MgPSBuZXcgUHJvY2VzcyhuZXcgQmFzaCh0aGlzKSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIHVwZGF0ZXMgdGhlIGlucHV0XHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZVBhdGgoKXtcclxuICAgICAgICB0aGlzLnJlZnMuQ29uc29sZUlucHV0Q29tcG9uZW50LmNoYW5nZVBhdGgocHJvY2Vzcy5jd2QoKSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEBtZXRob2QgaW5zZXJ0T3V0cHV0IC0gY3JlYXRlcyBhIG5ldyBDb25zb2xlT3V0cHV0IHdpdGggdGhlIHByb3ZpZGVkIHRleHRcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0IC0gdGhlIHRleHQgdGhhdCBuZWVkIHRvIGJlIGEgbmV3IGNvbnNvbGUgaW5wdXRcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgLSB0aGUgc3RyaW5nIHRvIGdpdmUgY2xhc3MgdG8gdGhlIGNvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBpbnNlcnRPdXRwdXQodGV4dCwgY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5rZXkgKz0gMTtcclxuICAgICAgICB0aGlzLnN0YXRlLm91dHB1dHMucHVzaCg8Q29uc29sZU91dHB1dENvbXBvbmVudCBrZXkgPSB7dGhpcy5zdGF0ZS5rZXl9ICBjb25zb2xlPXt0aGlzfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gdGV4dD17dGV4dC50b1N0cmluZygpIH0gLz4pXHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluc2VydElucHV0KGlucHV0KXtcclxuICAgICAgICB0aGlzLnJlZnMuQ29uc29sZUlucHV0Q29tcG9uZW50Lmluc2VydElucHV0KGlucHV0KTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb25zb2xlV3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmVlVmlld1dyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VHJlZVZpZXdDb21wb25lbnQgcGF0aD17dGhpcy5zdGF0ZS5wYXRofSByZWY9XCJ0cmVlVmlld1wiIHBhcmVudD17dGhpc30gcHJvY2Vzcz17dGhpcy5fcHJvY2Vzc30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDb25zb2xlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUub3V0cHV0cy5tYXAob3V0cHV0ID0+IG91dHB1dCkgfVxyXG4gICAgICAgICAgICAgICAgICAgIDxDb25zb2xlSW5wdXRDb21wb25lbnQgcmVmPVwiQ29uc29sZUlucHV0Q29tcG9uZW50XCIgcGFyZW50PXt0aGlzfSBwcm9jZXNzPXt0aGlzLl9wcm9jZXNzfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxTbmlwcGV0c0NvbnRhaW5lckNvbXBvbmVudCBwYXJlbnQ9e3RoaXN9IHByb2Nlc3M9e3RoaXMuX3Byb2Nlc3N9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIl19
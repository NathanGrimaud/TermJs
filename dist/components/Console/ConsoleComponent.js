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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvbnNvbGUvQ29uc29sZUNvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLFFBQVEsUUFBUSxPQUFSLENBQVI7O0FBRU4sSUFBTSx5QkFBeUIsdUNBQXVDLHNCQUF2QztBQUMvQixJQUFNLHdCQUF3QixzQ0FBc0MscUJBQXRDO0FBQzlCLElBQU0sNkJBQTZCLHFEQUFxRCwwQkFBckQ7QUFDbkMsSUFBTSxvQkFBb0IsNENBQTRDLGlCQUE1QztBQUMxQixJQUFNLFVBQVUsa0NBQWtDLE9BQWxDO0FBQ2hCLElBQU0sT0FBTyw0QkFBNEIsSUFBNUI7O0lBRUE7OztBQUVULGFBRlMsZ0JBRVQsQ0FBWSxLQUFaLEVBQW1COzhCQUZWLGtCQUVVOzsyRUFGViw2QkFHQyxRQURTOztBQUVmLGNBQUssSUFBTCxHQUFVLENBQVYsQ0FGZTtBQUdmLGNBQUssS0FBTCxHQUFhLE1BQU0sSUFBTixDQUhFO0FBSWYsY0FBSyxRQUFMLEdBQWdCLENBQUMsb0JBQUMsc0JBQUQsSUFBd0IsS0FBSSxHQUFKLEVBQVMsZ0JBQWUsTUFBTSw4QkFBTixFQUFoRCxDQUFELENBQWhCLENBSmU7QUFLZixjQUFLLFFBQUwsR0FBZ0IsSUFBSSxPQUFKLENBQVksSUFBSSxJQUFKLE9BQVosQ0FBaEIsQ0FMZTs7S0FBbkI7Ozs7OztpQkFGUzs7cUNBWUc7QUFDUixpQkFBSyxJQUFMLENBQVUscUJBQVYsQ0FBZ0MsVUFBaEMsQ0FBMkMsUUFBUSxHQUFSLEVBQTNDLEVBRFE7Ozs7Ozs7Ozs7cUNBUUMsTUFBTSxXQUFXO0FBQzFCLGlCQUFLLElBQUwsSUFBYSxDQUFiLENBRDBCO0FBRTFCLGlCQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLG9CQUFDLHNCQUFELElBQXdCLEtBQU8sS0FBSyxJQUFMLEVBQVksU0FBUyxJQUFULEVBQWUsV0FBVyxTQUFYLEVBQXNCLE1BQU0sS0FBSyxRQUFMLEVBQU4sRUFBaEYsQ0FBbkIsRUFGMEI7QUFHMUIsaUJBQUssV0FBTCxHQUgwQjs7OztzQ0FLakI7QUFDWCxtQkFBTyxLQUFLLElBQUwsQ0FBVSxRQUFWLENBQW1CLFdBQW5CLEVBQVAsQ0FEVzs7OztvQ0FHRCxPQUFNO0FBQ2QsaUJBQUssSUFBTCxDQUFVLHFCQUFWLENBQWdDLFdBQWhDLENBQTRDLEtBQTVDLEVBRGM7Ozs7aUNBR1Q7O0FBRUwsbUJBQ0k7O2tCQUFLLFdBQVUsZ0JBQVYsRUFBTDtnQkFDSTs7c0JBQUssV0FBVSxpQkFBVixFQUFMO29CQUNJLG9CQUFDLGlCQUFELElBQW1CLE1BQU0sS0FBSyxLQUFMLEVBQVksS0FBSSxVQUFKLEVBQWUsUUFBUSxJQUFSLEVBQWMsU0FBUyxLQUFLLFFBQUwsRUFBM0UsQ0FESjtpQkFESjtnQkFJSTs7c0JBQUssV0FBVSxTQUFWLEVBQUw7b0JBQ0ssS0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQjsrQkFBVTtxQkFBVixDQUR2QjtvQkFFSSxvQkFBQyxxQkFBRCxJQUF1QixLQUFJLHVCQUFKLEVBQTRCLFFBQVEsSUFBUixFQUFjLFNBQVMsS0FBSyxRQUFMLEVBQTFFLENBRko7aUJBSko7Z0JBUUksb0JBQUMsMEJBQUQsSUFBNEIsS0FBSSxVQUFKLEVBQWUsUUFBUSxJQUFSLEVBQWMsU0FBUyxLQUFLLFFBQUwsRUFBbEUsQ0FSSjthQURKLENBRks7Ozs7V0EvQkE7RUFBeUIsTUFBTSxTQUFOIiwiZmlsZSI6IkNvbnNvbGVDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xyXG5cclxuY29uc3QgQ29uc29sZU91dHB1dENvbXBvbmVudCA9IHJlcXVpcmUoYC4vQ29uc29sZU91dHB1dENvbXBvbmVudC5qc2ApLkNvbnNvbGVPdXRwdXRDb21wb25lbnQ7XHJcbmNvbnN0IENvbnNvbGVJbnB1dENvbXBvbmVudCA9IHJlcXVpcmUoYC4vQ29uc29sZUlucHV0Q29tcG9uZW50LmpzYCkuQ29uc29sZUlucHV0Q29tcG9uZW50O1xyXG5jb25zdCBTbmlwcGV0c0NvbnRhaW5lckNvbXBvbmVudCA9IHJlcXVpcmUoYC4uL1NuaXBwZXRzL1NuaXBwZXRzQ29udGFpbmVyQ29tcG9uZW50LmpzYCkuU25pcHBldHNDb250YWluZXJDb21wb25lbnQ7XHJcbmNvbnN0IFRyZWVWaWV3Q29tcG9uZW50ID0gcmVxdWlyZShgLi4vVHJlZVZpZXcvVHJlZVZpZXdDb21wb25lbnQuanNgKS5UcmVlVmlld0NvbXBvbmVudDtcclxuY29uc3QgUHJvY2VzcyA9IHJlcXVpcmUoYC4uLy4uL3NlcnZpY2VzL1Byb2Nlc3NgKS5Qcm9jZXNzO1xyXG5jb25zdCBCYXNoID0gcmVxdWlyZShgLi4vLi4vbW9kZWwvQmFzaGApLkJhc2g7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uc29sZUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5fa2V5PTA7XHJcbiAgICAgICAgdGhpcy5fcGF0aCA9IHByb3BzLnBhdGg7XHJcbiAgICAgICAgdGhpcy5fb3V0cHV0cyA9IFs8Q29uc29sZU91dHB1dENvbXBvbmVudCBrZXk9XCIwXCIgIGNvbnNvbGU9e3RoaXN9IHRleHQ9e1wiIyBCaWVudmVudWUgZGFucyBsZSB0ZXJtaW5hbFwifSAvPl07XHJcbiAgICAgICAgdGhpcy5fcHJvY2VzcyA9IG5ldyBQcm9jZXNzKG5ldyBCYXNoKHRoaXMpKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogdXBkYXRlcyB0aGUgaW5wdXRcclxuICAgICAqL1xyXG4gICAgdXBkYXRlUGF0aCgpe1xyXG4gICAgICAgIHRoaXMucmVmcy5Db25zb2xlSW5wdXRDb21wb25lbnQuY2hhbmdlUGF0aChwcm9jZXNzLmN3ZCgpKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQG1ldGhvZCBpbnNlcnRPdXRwdXQgLSBjcmVhdGVzIGEgbmV3IENvbnNvbGVPdXRwdXQgd2l0aCB0aGUgcHJvdmlkZWQgdGV4dFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHRleHQgLSB0aGUgdGV4dCB0aGF0IG5lZWQgdG8gYmUgYSBuZXcgY29uc29sZSBpbnB1dFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSAtIHRoZSBzdHJpbmcgdG8gZ2l2ZSBjbGFzcyB0byB0aGUgY29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIGluc2VydE91dHB1dCh0ZXh0LCBjbGFzc05hbWUpIHtcclxuICAgICAgICB0aGlzLl9rZXkgKz0gMTtcclxuICAgICAgICB0aGlzLl9vdXRwdXRzLnB1c2goPENvbnNvbGVPdXRwdXRDb21wb25lbnQga2V5ID0ge3RoaXMuX2tleX0gIGNvbnNvbGU9e3RoaXN9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB0ZXh0PXt0ZXh0LnRvU3RyaW5nKCkgfSAvPik7XHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG4gICAgZ2V0U25pcHBldHMoKXtcclxuICAgICAgcmV0dXJuIHRoaXMucmVmcy5zbmlwcGV0cy5nZXRTbmlwcGV0cygpO1xyXG4gICAgfVxyXG4gICAgaW5zZXJ0SW5wdXQoaW5wdXQpe1xyXG4gICAgICAgIHRoaXMucmVmcy5Db25zb2xlSW5wdXRDb21wb25lbnQuaW5zZXJ0SW5wdXQoaW5wdXQpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnNvbGVXcmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyZWVWaWV3V3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmVlVmlld0NvbXBvbmVudCBwYXRoPXt0aGlzLl9wYXRofSByZWY9XCJ0cmVlVmlld1wiIHBhcmVudD17dGhpc30gcHJvY2Vzcz17dGhpcy5fcHJvY2Vzc30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDb25zb2xlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuX291dHB1dHMubWFwKG91dHB1dCA9PiBvdXRwdXQpIH1cclxuICAgICAgICAgICAgICAgICAgICA8Q29uc29sZUlucHV0Q29tcG9uZW50IHJlZj1cIkNvbnNvbGVJbnB1dENvbXBvbmVudFwiIHBhcmVudD17dGhpc30gcHJvY2Vzcz17dGhpcy5fcHJvY2Vzc30vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8U25pcHBldHNDb250YWluZXJDb21wb25lbnQgcmVmPVwic25pcHBldHNcIiBwYXJlbnQ9e3RoaXN9IHByb2Nlc3M9e3RoaXMuX3Byb2Nlc3N9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIl19
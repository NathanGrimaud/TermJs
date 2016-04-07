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

var ConsoleInputComponent = exports.ConsoleInputComponent = function (_React$Component) {
    _inherits(ConsoleInputComponent, _React$Component);

    /**
     * @constructor
     * @param {Object} props - contains { process: Process, parent : ConsoleComponent }
     */

    function ConsoleInputComponent(props) {
        _classCallCheck(this, ConsoleInputComponent);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ConsoleInputComponent).call(this, props));

        _this._process = props.process;
        _this._parent = props.parent;

        _this.state = {
            inputText: "",
            currentLine: "",
            history: [],
            historyIndex: 0
        };
        return _this;
    }

    _createClass(ConsoleInputComponent, [{
        key: "insertInput",
        value: function insertInput(input) {
            this.refs.input.textContent = input;
        }
    }, {
        key: "handleTouch",
        value: function handleTouch(evt) {

            if (evt.key === "Enter") this.handleEnterTouch(evt);else if (evt.key === "ArrowUp") this.handleArrowTouch(-1);else if (evt.key === "ArrowDown") this.handleArrowTouch(+1);
            // c = 67   
            else if (evt.keyCode === 67 && evt.ctrlKey) this.handleCtrlCTouch();
        }
    }, {
        key: "handleCtrlCTouch",
        value: function handleCtrlCTouch() {

            this.refs.input.textContent = "";
            this._parent.insertOutput("command stopped by keyboard");
            this._process.stopCommand();
        }
    }, {
        key: "handleArrowTouch",
        value: function handleArrowTouch(i) {

            var nextIndex = this.state.historyIndex + i;
            if (nextIndex >= 0 && nextIndex <= this.state.history.length) {

                this.state.historyIndex += i;
                this.refs.input.textContent = this.state.history[nextIndex];
            }
        }
    }, {
        key: "handleEnterTouch",
        value: function handleEnterTouch(evt) {

            var command = evt.target.textContent;
            this.state.historyIndex += 1;
            this.state.history.push(command);
            evt.target.textContent = "";
            this.changePath(process.cwd());
            this._process.exec(command);
        }
    }, {
        key: "changePath",
        value: function changePath(path) {

            this.state.path = path;
            this.forceUpdate();
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "div",
                { className: "inputWrapper" },
                React.createElement(
                    "span",
                    { className: "inputPath" },
                    process.cwd() + " > ",
                    " "
                ),
                React.createElement("div", { ref: "input", onKeyDown: function onKeyDown(evt) {
                        return _this2.handleTouch(evt);
                    }, className: "inputDiv", contentEditable: "True", id: "ConsoleInput", type: "text" })
            );
        }
    }]);

    return ConsoleInputComponent;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvbnNvbGUvQ29uc29sZUlucHV0Q29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU0sUUFBUSxRQUFRLE9BQVIsQ0FBUjs7QUFFTixJQUFNLHlCQUF5Qix1Q0FBdUMsc0JBQXZDOztJQUVsQjs7Ozs7Ozs7QUFNVCxhQU5TLHFCQU1ULENBQVksS0FBWixFQUFtQjs4QkFOVix1QkFNVTs7MkVBTlYsa0NBUUMsUUFGUzs7QUFHZixjQUFLLFFBQUwsR0FBZ0IsTUFBTSxPQUFOLENBSEQ7QUFJZixjQUFLLE9BQUwsR0FBZSxNQUFNLE1BQU4sQ0FKQTs7QUFNZixjQUFLLEtBQUwsR0FBYTtBQUNULHVCQUFZLEVBQVo7QUFDQSx5QkFBYSxFQUFiO0FBQ0EscUJBQVMsRUFBVDtBQUNBLDBCQUFjLENBQWQ7U0FKSixDQU5lOztLQUFuQjs7aUJBTlM7O29DQW1CRyxPQUFNO0FBQ2QsaUJBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsV0FBaEIsR0FBOEIsS0FBOUIsQ0FEYzs7OztvQ0FHTixLQUFLOztBQUViLGdCQUFJLElBQUksR0FBSixLQUFZLE9BQVosRUFDQSxLQUFLLGdCQUFMLENBQXNCLEdBQXRCLEVBREosS0FHSyxJQUFJLElBQUksR0FBSixLQUFZLFNBQVosRUFDTCxLQUFLLGdCQUFMLENBQXNCLENBQUMsQ0FBRCxDQUF0QixDQURDLEtBR0EsSUFBSSxJQUFJLEdBQUosS0FBWSxXQUFaLEVBQ0wsS0FBSyxnQkFBTCxDQUFzQixDQUFDLENBQUQsQ0FBdEI7O0FBREMsaUJBR0EsSUFBSSxJQUFJLE9BQUosS0FBZ0IsRUFBaEIsSUFBc0IsSUFBSSxPQUFKLEVBQzNCLEtBQUssZ0JBQUwsR0FEQzs7OzsyQ0FJUzs7QUFFZCxpQkFBSyxJQUFMLENBQVUsS0FBVixDQUFnQixXQUFoQixHQUE4QixFQUE5QixDQUZjO0FBR2QsaUJBQUssT0FBTCxDQUFhLFlBQWIsQ0FBMEIsNkJBQTFCLEVBSGM7QUFJZCxpQkFBSyxRQUFMLENBQWMsV0FBZCxHQUpjOzs7O3lDQU1ELEdBQUc7O0FBRWhCLGdCQUFJLFlBQVksS0FBSyxLQUFMLENBQVcsWUFBWCxHQUEwQixDQUExQixDQUZBO0FBR2hCLGdCQUFJLFNBQUUsSUFBYSxDQUFiLElBQXFCLGFBQWEsS0FBSyxLQUFMLENBQVcsT0FBWCxDQUFtQixNQUFuQixFQUE0Qjs7QUFFaEUscUJBQUssS0FBTCxDQUFXLFlBQVgsSUFBMkIsQ0FBM0IsQ0FGZ0U7QUFHaEUscUJBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsV0FBaEIsR0FBOEIsS0FBSyxLQUFMLENBQVcsT0FBWCxDQUFtQixTQUFuQixDQUE5QixDQUhnRTthQUFwRTs7Ozt5Q0FNYSxLQUFLOztBQUVsQixnQkFBSSxVQUFVLElBQUksTUFBSixDQUFXLFdBQVgsQ0FGSTtBQUdsQixpQkFBSyxLQUFMLENBQVcsWUFBWCxJQUEyQixDQUEzQixDQUhrQjtBQUlsQixpQkFBSyxLQUFMLENBQVcsT0FBWCxDQUFtQixJQUFuQixDQUF3QixPQUF4QixFQUprQjtBQUtsQixnQkFBSSxNQUFKLENBQVcsV0FBWCxHQUF5QixFQUF6QixDQUxrQjtBQU1sQixpQkFBSyxVQUFMLENBQWdCLFFBQVEsR0FBUixFQUFoQixFQU5rQjtBQU9sQixpQkFBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixPQUFuQixFQVBrQjs7OzttQ0FVWCxNQUFNOztBQUViLGlCQUFLLEtBQUwsQ0FBVyxJQUFYLEdBQWtCLElBQWxCLENBRmE7QUFHYixpQkFBSyxXQUFMLEdBSGE7Ozs7aUNBS1I7OztBQUVMLG1CQUNJOztrQkFBSyxXQUFVLGNBQVYsRUFBTDtnQkFDSTs7c0JBQU0sV0FBVSxXQUFWLEVBQU47b0JBQThCLFFBQVEsR0FBUixLQUFnQixLQUFoQjt1QkFBOUI7aUJBREo7Z0JBRUksNkJBQUssS0FBSSxPQUFKLEVBQVksV0FBVyxtQkFBQyxHQUFEOytCQUFTLE9BQUssV0FBTCxDQUFpQixHQUFqQjtxQkFBVCxFQUFpQyxXQUFVLFVBQVYsRUFBcUIsaUJBQWdCLE1BQWhCLEVBQXVCLElBQUcsY0FBSCxFQUFrQixNQUFLLE1BQUwsRUFBM0gsQ0FGSjthQURKLENBRks7Ozs7V0FuRUE7RUFBOEIsTUFBTSxTQUFOIiwiZmlsZSI6IkNvbnNvbGVJbnB1dENvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XHJcblxyXG5jb25zdCBDb25zb2xlT3V0cHV0Q29tcG9uZW50ID0gcmVxdWlyZShgLi9Db25zb2xlT3V0cHV0Q29tcG9uZW50LmpzYCkuQ29uc29sZU91dHB1dENvbXBvbmVudDtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb25zb2xlSW5wdXRDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgLSBjb250YWlucyB7IHByb2Nlc3M6IFByb2Nlc3MsIHBhcmVudCA6IENvbnNvbGVDb21wb25lbnQgfVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5fcHJvY2VzcyA9IHByb3BzLnByb2Nlc3M7XHJcbiAgICAgICAgdGhpcy5fcGFyZW50ID0gcHJvcHMucGFyZW50O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlucHV0VGV4dCA6IFwiXCIsXHJcbiAgICAgICAgICAgIGN1cnJlbnRMaW5lOiBcIlwiLFxyXG4gICAgICAgICAgICBoaXN0b3J5OiBbXSxcclxuICAgICAgICAgICAgaGlzdG9yeUluZGV4OiAwXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGluc2VydElucHV0KGlucHV0KXsgICAgICBcclxuICAgICAgICB0aGlzLnJlZnMuaW5wdXQudGV4dENvbnRlbnQgPSBpbnB1dDtcclxuICAgIH1cclxuICAgIGhhbmRsZVRvdWNoKGV2dCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChldnQua2V5ID09PSBcIkVudGVyXCIpXHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRW50ZXJUb3VjaChldnQpXHJcblxyXG4gICAgICAgIGVsc2UgaWYgKGV2dC5rZXkgPT09IFwiQXJyb3dVcFwiKVxyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUFycm93VG91Y2goLTEpO1xyXG5cclxuICAgICAgICBlbHNlIGlmIChldnQua2V5ID09PSBcIkFycm93RG93blwiKVxyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUFycm93VG91Y2goKzEpO1xyXG4gICAgICAgIC8vIGMgPSA2NyAgICBcclxuICAgICAgICBlbHNlIGlmIChldnQua2V5Q29kZSA9PT0gNjcgJiYgZXZ0LmN0cmxLZXkpXHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ3RybENUb3VjaCgpO1xyXG5cclxuICAgIH1cclxuICAgIGhhbmRsZUN0cmxDVG91Y2goKXsgICAgICBcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlZnMuaW5wdXQudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuX3BhcmVudC5pbnNlcnRPdXRwdXQoXCJjb21tYW5kIHN0b3BwZWQgYnkga2V5Ym9hcmRcIik7XHJcbiAgICAgICAgdGhpcy5fcHJvY2Vzcy5zdG9wQ29tbWFuZCgpO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlQXJyb3dUb3VjaChpKSB7XHJcblxyXG4gICAgICAgIGxldCBuZXh0SW5kZXggPSB0aGlzLnN0YXRlLmhpc3RvcnlJbmRleCArIGk7XHJcbiAgICAgICAgaWYgKCggbmV4dEluZGV4ID49IDApICYmICggbmV4dEluZGV4IDw9IHRoaXMuc3RhdGUuaGlzdG9yeS5sZW5ndGgpKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmhpc3RvcnlJbmRleCArPSBpO1xyXG4gICAgICAgICAgICB0aGlzLnJlZnMuaW5wdXQudGV4dENvbnRlbnQgPSB0aGlzLnN0YXRlLmhpc3RvcnlbbmV4dEluZGV4XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoYW5kbGVFbnRlclRvdWNoKGV2dCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBjb21tYW5kID0gZXZ0LnRhcmdldC50ZXh0Q29udGVudDsgIFxyXG4gICAgICAgIHRoaXMuc3RhdGUuaGlzdG9yeUluZGV4ICs9IDE7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5oaXN0b3J5LnB1c2goY29tbWFuZCk7XHJcbiAgICAgICAgZXZ0LnRhcmdldC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VQYXRoKHByb2Nlc3MuY3dkKCkpO1xyXG4gICAgICAgIHRoaXMuX3Byb2Nlc3MuZXhlYyhjb21tYW5kKTtcclxuXHJcbiAgICB9XHJcbiAgICBjaGFuZ2VQYXRoKHBhdGgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5wYXRoID0gcGF0aDtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRXcmFwcGVyXCIgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXRQYXRoXCI+eyBwcm9jZXNzLmN3ZCgpICsgXCIgPiBcIn0gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGRpdiByZWY9XCJpbnB1dFwiIG9uS2V5RG93bj17KGV2dCkgPT4gdGhpcy5oYW5kbGVUb3VjaChldnQpIH0gY2xhc3NOYW1lPVwiaW5wdXREaXZcIiBjb250ZW50RWRpdGFibGU9XCJUcnVlXCIgaWQ9XCJDb25zb2xlSW5wdXRcIiB0eXBlPVwidGV4dFwiLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19
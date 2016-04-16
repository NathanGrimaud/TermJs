"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require("react");

//const ConsoleOutputComponent = require(`./ConsoleOutputComponent.js`).ConsoleOutputComponent;

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
        _this._inputText = "";
        _this._currentLine = "";
        _this._history = [];
        _this._historyIndex = 0;
        //this._snippetsArray = this._parent.getSnippets();
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

            if (evt.key === "Enter") this.handleEnterTouch(evt);else if (evt.key === "Tab") this.handleTabTouch(evt);else if (evt.key === "ArrowUp") this.handleArrowTouch(-1);else if (evt.key === "ArrowDown") this.handleArrowTouch(+1);
            // c = 67 so whe can handle CTRL-C
            else if (evt.keyCode === 67 && evt.ctrlKey) this.handleCtrlCTouch();
                // matching all other possibilities
                else {
                        var currentText = this.refs.input.textContent;
                        this.refs.hint.innerText = currentText + " : " + this.getPossibleCompletion(currentText);
                    }
        }
    }, {
        key: "handleTabTouch",
        value: function handleTabTouch() {
            var currentText = this.refs.input.textContent;
            this.insertInput(this.getPossibleCompletion(currentText));
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

            var nextIndex = this._historyIndex + i;
            if (nextIndex >= 0 && nextIndex <= this._history.length) {

                this._historyIndex += i;
                this.refs.input.textContent = this._history[nextIndex];
            }
        }
    }, {
        key: "handleEnterTouch",
        value: function handleEnterTouch(evt) {

            var command = evt.target.textContent;
            this._historyIndex += 1;
            this._history.push(command);
            evt.target.textContent = "";
            this.changePath(process.cwd());
            this._process.exec(command);
        }
    }, {
        key: "getPossibleCompletion",
        value: function getPossibleCompletion(currentText) {
            var commandNames = this._parent.getSnippets().map(function (val) {
                return val.props.name;
            });
            var commands = this._parent.getSnippets().map(function (val) {
                return val.props.command;
            });
            return commands.filter(function (val, index) {
                return commandNames[index].indexOf(currentText) > -1;
            })[0];
        }
    }, {
        key: "changePath",
        value: function changePath(path) {

            this._path = path;
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
                    }, className: "inputDiv", contentEditable: "True", id: "ConsoleInput", type: "text" }),
                React.createElement("div", { ref: "hint" })
            );
        }
    }]);

    return ConsoleInputComponent;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvbnNvbGUvQ29uc29sZUlucHV0Q29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU0sUUFBUSxRQUFRLE9BQVIsQ0FBUjs7OztJQUlPOzs7Ozs7OztBQU1ULGFBTlMscUJBTVQsQ0FBWSxLQUFaLEVBQW1COzhCQU5WLHVCQU1VOzsyRUFOVixrQ0FRQyxRQUZTOztBQUdmLGNBQUssUUFBTCxHQUFnQixNQUFNLE9BQU4sQ0FIRDtBQUlmLGNBQUssT0FBTCxHQUFlLE1BQU0sTUFBTixDQUpBO0FBS2YsY0FBSyxVQUFMLEdBQWtCLEVBQWxCLENBTGU7QUFNZixjQUFLLFlBQUwsR0FBbUIsRUFBbkIsQ0FOZTtBQU9mLGNBQUssUUFBTCxHQUFlLEVBQWYsQ0FQZTtBQVFmLGNBQUssYUFBTCxHQUFvQixDQUFwQjs7QUFSZTtLQUFuQjs7aUJBTlM7O29DQWlCRyxPQUFNO0FBQ2QsaUJBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsV0FBaEIsR0FBOEIsS0FBOUIsQ0FEYzs7OztvQ0FHTixLQUFLOztBQUViLGdCQUFJLElBQUksR0FBSixLQUFZLE9BQVosRUFDQSxLQUFLLGdCQUFMLENBQXNCLEdBQXRCLEVBREosS0FHSyxJQUFJLElBQUksR0FBSixLQUFZLEtBQVosRUFDTCxLQUFLLGNBQUwsQ0FBb0IsR0FBcEIsRUFEQyxLQUdBLElBQUksSUFBSSxHQUFKLEtBQVksU0FBWixFQUNMLEtBQUssZ0JBQUwsQ0FBc0IsQ0FBQyxDQUFELENBQXRCLENBREMsS0FHQSxJQUFJLElBQUksR0FBSixLQUFZLFdBQVosRUFDTCxLQUFLLGdCQUFMLENBQXNCLENBQUMsQ0FBRCxDQUF0Qjs7QUFEQyxpQkFHQSxJQUFJLElBQUksT0FBSixLQUFnQixFQUFoQixJQUFzQixJQUFJLE9BQUosRUFDM0IsS0FBSyxnQkFBTDs7QUFEQyxxQkFHRDtBQUNGLDRCQUFJLGNBQWMsS0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixXQUFoQixDQURoQjtBQUVGLDZCQUFLLElBQUwsQ0FBVSxJQUFWLENBQWUsU0FBZixHQUEyQixjQUFjLEtBQWQsR0FBb0IsS0FBSyxxQkFBTCxDQUEyQixXQUEzQixDQUFwQixDQUZ6QjtxQkFIQzs7Ozt5Q0FTTztBQUNaLGdCQUFJLGNBQWMsS0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixXQUFoQixDQUROO0FBRVosaUJBQUssV0FBTCxDQUFpQixLQUFLLHFCQUFMLENBQTJCLFdBQTNCLENBQWpCLEVBRlk7Ozs7MkNBSUU7O0FBRWQsaUJBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsV0FBaEIsR0FBOEIsRUFBOUIsQ0FGYztBQUdkLGlCQUFLLE9BQUwsQ0FBYSxZQUFiLENBQTBCLDZCQUExQixFQUhjO0FBSWQsaUJBQUssUUFBTCxDQUFjLFdBQWQsR0FKYzs7Ozt5Q0FNRCxHQUFHOztBQUVoQixnQkFBSSxZQUFZLEtBQUssYUFBTCxHQUFxQixDQUFyQixDQUZBO0FBR2hCLGdCQUFJLFNBQUUsSUFBYSxDQUFiLElBQXFCLGFBQWEsS0FBSyxRQUFMLENBQWMsTUFBZCxFQUF1Qjs7QUFFM0QscUJBQUssYUFBTCxJQUFzQixDQUF0QixDQUYyRDtBQUczRCxxQkFBSyxJQUFMLENBQVUsS0FBVixDQUFnQixXQUFoQixHQUE4QixLQUFLLFFBQUwsQ0FBYyxTQUFkLENBQTlCLENBSDJEO2FBQS9EOzs7O3lDQU1hLEtBQUs7O0FBRWxCLGdCQUFJLFVBQVUsSUFBSSxNQUFKLENBQVcsV0FBWCxDQUZJO0FBR2xCLGlCQUFLLGFBQUwsSUFBc0IsQ0FBdEIsQ0FIa0I7QUFJbEIsaUJBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsT0FBbkIsRUFKa0I7QUFLbEIsZ0JBQUksTUFBSixDQUFXLFdBQVgsR0FBeUIsRUFBekIsQ0FMa0I7QUFNbEIsaUJBQUssVUFBTCxDQUFnQixRQUFRLEdBQVIsRUFBaEIsRUFOa0I7QUFPbEIsaUJBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsT0FBbkIsRUFQa0I7Ozs7OENBVUEsYUFBWTtBQUNoQyxnQkFBSSxlQUFlLEtBQUssT0FBTCxDQUFhLFdBQWIsR0FBMkIsR0FBM0IsQ0FBK0IsVUFBQyxHQUFEO3VCQUFRLElBQUksS0FBSixDQUFVLElBQVY7YUFBUixDQUE5QyxDQUQ0QjtBQUVoQyxnQkFBSSxXQUFXLEtBQUssT0FBTCxDQUFhLFdBQWIsR0FBMkIsR0FBM0IsQ0FBK0IsVUFBQyxHQUFEO3VCQUFRLElBQUksS0FBSixDQUFVLE9BQVY7YUFBUixDQUExQyxDQUY0QjtBQUdoQyxtQkFBTyxTQUFTLE1BQVQsQ0FBZ0IsVUFBQyxHQUFELEVBQUssS0FBTDt1QkFBYSxhQUFhLEtBQWIsRUFBb0IsT0FBcEIsQ0FBNEIsV0FBNUIsSUFBeUMsQ0FBQyxDQUFEO2FBQXRELENBQWhCLENBQTBFLENBQTFFLENBQVAsQ0FIZ0M7Ozs7bUNBS3ZCLE1BQU07O0FBRWIsaUJBQUssS0FBTCxHQUFhLElBQWIsQ0FGYTtBQUdiLGlCQUFLLFdBQUwsR0FIYTs7OztpQ0FLUjs7O0FBRUwsbUJBQ0k7O2tCQUFLLFdBQVUsY0FBVixFQUFMO2dCQUNJOztzQkFBTSxXQUFVLFdBQVYsRUFBTjtvQkFBOEIsUUFBUSxHQUFSLEtBQWdCLEtBQWhCO3VCQUE5QjtpQkFESjtnQkFFSSw2QkFBSyxLQUFJLE9BQUosRUFBWSxXQUFXLG1CQUFDLEdBQUQ7K0JBQVMsT0FBSyxXQUFMLENBQWlCLEdBQWpCO3FCQUFULEVBQWlDLFdBQVUsVUFBVixFQUFxQixpQkFBZ0IsTUFBaEIsRUFBdUIsSUFBRyxjQUFILEVBQWtCLE1BQUssTUFBTCxFQUEzSCxDQUZKO2dCQUdJLDZCQUFLLEtBQUksTUFBSixFQUFMLENBSEo7YUFESixDQUZLOzs7O1dBbEZBO0VBQThCLE1BQU0sU0FBTiIsImZpbGUiOiJDb25zb2xlSW5wdXRDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xyXG5cclxuLy9jb25zdCBDb25zb2xlT3V0cHV0Q29tcG9uZW50ID0gcmVxdWlyZShgLi9Db25zb2xlT3V0cHV0Q29tcG9uZW50LmpzYCkuQ29uc29sZU91dHB1dENvbXBvbmVudDtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb25zb2xlSW5wdXRDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgLSBjb250YWlucyB7IHByb2Nlc3M6IFByb2Nlc3MsIHBhcmVudCA6IENvbnNvbGVDb21wb25lbnQgfVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5fcHJvY2VzcyA9IHByb3BzLnByb2Nlc3M7XHJcbiAgICAgICAgdGhpcy5fcGFyZW50ID0gcHJvcHMucGFyZW50O1xyXG4gICAgICAgIHRoaXMuX2lucHV0VGV4dCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudExpbmU9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5faGlzdG9yeT0gW107XHJcbiAgICAgICAgdGhpcy5faGlzdG9yeUluZGV4PSAwO1xyXG4gICAgICAgIC8vdGhpcy5fc25pcHBldHNBcnJheSA9IHRoaXMuX3BhcmVudC5nZXRTbmlwcGV0cygpO1xyXG4gICAgfVxyXG4gICAgaW5zZXJ0SW5wdXQoaW5wdXQpe1xyXG4gICAgICAgIHRoaXMucmVmcy5pbnB1dC50ZXh0Q29udGVudCA9IGlucHV0O1xyXG4gICAgfVxyXG4gICAgaGFuZGxlVG91Y2goZXZ0KSB7XHJcblxyXG4gICAgICAgIGlmIChldnQua2V5ID09PSBcIkVudGVyXCIpXHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRW50ZXJUb3VjaChldnQpO1xyXG5cclxuICAgICAgICBlbHNlIGlmIChldnQua2V5ID09PSBcIlRhYlwiKVxyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVRhYlRvdWNoKGV2dCk7XHJcblxyXG4gICAgICAgIGVsc2UgaWYgKGV2dC5rZXkgPT09IFwiQXJyb3dVcFwiKVxyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUFycm93VG91Y2goLTEpO1xyXG5cclxuICAgICAgICBlbHNlIGlmIChldnQua2V5ID09PSBcIkFycm93RG93blwiKVxyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUFycm93VG91Y2goKzEpO1xyXG4gICAgICAgIC8vIGMgPSA2NyBzbyB3aGUgY2FuIGhhbmRsZSBDVFJMLUNcclxuICAgICAgICBlbHNlIGlmIChldnQua2V5Q29kZSA9PT0gNjcgJiYgZXZ0LmN0cmxLZXkpXHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ3RybENUb3VjaCgpO1xyXG4gICAgICAgIC8vIG1hdGNoaW5nIGFsbCBvdGhlciBwb3NzaWJpbGl0aWVzXHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgIGxldCBjdXJyZW50VGV4dCA9IHRoaXMucmVmcy5pbnB1dC50ZXh0Q29udGVudDtcclxuICAgICAgICAgIHRoaXMucmVmcy5oaW50LmlubmVyVGV4dCA9IGN1cnJlbnRUZXh0ICsgXCIgOiBcIit0aGlzLmdldFBvc3NpYmxlQ29tcGxldGlvbihjdXJyZW50VGV4dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGhhbmRsZVRhYlRvdWNoKCl7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRUZXh0ID0gdGhpcy5yZWZzLmlucHV0LnRleHRDb250ZW50O1xyXG4gICAgICAgIHRoaXMuaW5zZXJ0SW5wdXQodGhpcy5nZXRQb3NzaWJsZUNvbXBsZXRpb24oY3VycmVudFRleHQpKTtcclxuICAgIH1cclxuICAgIGhhbmRsZUN0cmxDVG91Y2goKXtcclxuXHJcbiAgICAgICAgdGhpcy5yZWZzLmlucHV0LnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgICB0aGlzLl9wYXJlbnQuaW5zZXJ0T3V0cHV0KFwiY29tbWFuZCBzdG9wcGVkIGJ5IGtleWJvYXJkXCIpO1xyXG4gICAgICAgIHRoaXMuX3Byb2Nlc3Muc3RvcENvbW1hbmQoKTtcclxuICAgIH1cclxuICAgIGhhbmRsZUFycm93VG91Y2goaSkge1xyXG5cclxuICAgICAgICBsZXQgbmV4dEluZGV4ID0gdGhpcy5faGlzdG9yeUluZGV4ICsgaTtcclxuICAgICAgICBpZiAoKCBuZXh0SW5kZXggPj0gMCkgJiYgKCBuZXh0SW5kZXggPD0gdGhpcy5faGlzdG9yeS5sZW5ndGgpKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9oaXN0b3J5SW5kZXggKz0gaTtcclxuICAgICAgICAgICAgdGhpcy5yZWZzLmlucHV0LnRleHRDb250ZW50ID0gdGhpcy5faGlzdG9yeVtuZXh0SW5kZXhdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGhhbmRsZUVudGVyVG91Y2goZXZ0KSB7XHJcblxyXG4gICAgICAgIGxldCBjb21tYW5kID0gZXZ0LnRhcmdldC50ZXh0Q29udGVudDtcclxuICAgICAgICB0aGlzLl9oaXN0b3J5SW5kZXggKz0gMTtcclxuICAgICAgICB0aGlzLl9oaXN0b3J5LnB1c2goY29tbWFuZCk7XHJcbiAgICAgICAgZXZ0LnRhcmdldC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VQYXRoKHByb2Nlc3MuY3dkKCkpO1xyXG4gICAgICAgIHRoaXMuX3Byb2Nlc3MuZXhlYyhjb21tYW5kKTtcclxuXHJcbiAgICB9XHJcbiAgICBnZXRQb3NzaWJsZUNvbXBsZXRpb24oY3VycmVudFRleHQpe1xyXG4gICAgICBsZXQgY29tbWFuZE5hbWVzID0gdGhpcy5fcGFyZW50LmdldFNuaXBwZXRzKCkubWFwKCh2YWwpPT4gdmFsLnByb3BzLm5hbWUpO1xyXG4gICAgICBsZXQgY29tbWFuZHMgPSB0aGlzLl9wYXJlbnQuZ2V0U25pcHBldHMoKS5tYXAoKHZhbCk9PiB2YWwucHJvcHMuY29tbWFuZCk7XHJcbiAgICAgIHJldHVybiBjb21tYW5kcy5maWx0ZXIoKHZhbCxpbmRleCk9PmNvbW1hbmROYW1lc1tpbmRleF0uaW5kZXhPZihjdXJyZW50VGV4dCk+LTEpWzBdO1xyXG4gICAgfVxyXG4gICAgY2hhbmdlUGF0aChwYXRoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuX3BhdGggPSBwYXRoO1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dFdyYXBwZXJcIiA+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dFBhdGhcIj57IHByb2Nlc3MuY3dkKCkgKyBcIiA+IFwifSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHJlZj1cImlucHV0XCIgb25LZXlEb3duPXsoZXZ0KSA9PiB0aGlzLmhhbmRsZVRvdWNoKGV2dCkgfSBjbGFzc05hbWU9XCJpbnB1dERpdlwiIGNvbnRlbnRFZGl0YWJsZT1cIlRydWVcIiBpZD1cIkNvbnNvbGVJbnB1dFwiIHR5cGU9XCJ0ZXh0XCIvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiByZWY9XCJoaW50XCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
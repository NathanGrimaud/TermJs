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
            var commands = this._parent.getSnippets().map(function (val) {
                return val.props.command;
            });
            return commands.filter(function (val) {
                return val.indexOf(currentText) > -1;
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
                    }, className: "inputDiv", contentEditable: "True", id: "ConsoleInput", type: "text" })
            );
        }
    }]);

    return ConsoleInputComponent;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvbnNvbGUvQ29uc29sZUlucHV0Q29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU0sUUFBUSxRQUFRLE9BQVIsQ0FBUjs7OztJQUlPOzs7Ozs7OztBQU1ULGFBTlMscUJBTVQsQ0FBWSxLQUFaLEVBQW1COzhCQU5WLHVCQU1VOzsyRUFOVixrQ0FRQyxRQUZTOztBQUdmLGNBQUssUUFBTCxHQUFnQixNQUFNLE9BQU4sQ0FIRDtBQUlmLGNBQUssT0FBTCxHQUFlLE1BQU0sTUFBTixDQUpBO0FBS2YsY0FBSyxVQUFMLEdBQWtCLEVBQWxCLENBTGU7QUFNZixjQUFLLFlBQUwsR0FBbUIsRUFBbkIsQ0FOZTtBQU9mLGNBQUssUUFBTCxHQUFlLEVBQWYsQ0FQZTtBQVFmLGNBQUssYUFBTCxHQUFvQixDQUFwQjs7QUFSZTtLQUFuQjs7aUJBTlM7O29DQWlCRyxPQUFNO0FBQ2QsaUJBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsV0FBaEIsR0FBOEIsS0FBOUIsQ0FEYzs7OztvQ0FHTixLQUFLOztBQUViLGdCQUFJLElBQUksR0FBSixLQUFZLE9BQVosRUFDQSxLQUFLLGdCQUFMLENBQXNCLEdBQXRCLEVBREosS0FHSyxJQUFJLElBQUksR0FBSixLQUFZLEtBQVosRUFDTCxLQUFLLGNBQUwsQ0FBb0IsR0FBcEIsRUFEQyxLQUdBLElBQUksSUFBSSxHQUFKLEtBQVksU0FBWixFQUNMLEtBQUssZ0JBQUwsQ0FBc0IsQ0FBQyxDQUFELENBQXRCLENBREMsS0FHQSxJQUFJLElBQUksR0FBSixLQUFZLFdBQVosRUFDTCxLQUFLLGdCQUFMLENBQXNCLENBQUMsQ0FBRCxDQUF0Qjs7QUFEQyxpQkFHQSxJQUFJLElBQUksT0FBSixLQUFnQixFQUFoQixJQUFzQixJQUFJLE9BQUosRUFDM0IsS0FBSyxnQkFBTCxHQURDOzs7O3lDQUlPO0FBQ1osZ0JBQUksY0FBYyxLQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLFdBQWhCLENBRE47QUFFWixpQkFBSyxXQUFMLENBQWlCLEtBQUsscUJBQUwsQ0FBMkIsV0FBM0IsQ0FBakIsRUFGWTs7OzsyQ0FJRTs7QUFFZCxpQkFBSyxJQUFMLENBQVUsS0FBVixDQUFnQixXQUFoQixHQUE4QixFQUE5QixDQUZjO0FBR2QsaUJBQUssT0FBTCxDQUFhLFlBQWIsQ0FBMEIsNkJBQTFCLEVBSGM7QUFJZCxpQkFBSyxRQUFMLENBQWMsV0FBZCxHQUpjOzs7O3lDQU1ELEdBQUc7O0FBRWhCLGdCQUFJLFlBQVksS0FBSyxhQUFMLEdBQXFCLENBQXJCLENBRkE7QUFHaEIsZ0JBQUksU0FBRSxJQUFhLENBQWIsSUFBcUIsYUFBYSxLQUFLLFFBQUwsQ0FBYyxNQUFkLEVBQXVCOztBQUUzRCxxQkFBSyxhQUFMLElBQXNCLENBQXRCLENBRjJEO0FBRzNELHFCQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLFdBQWhCLEdBQThCLEtBQUssUUFBTCxDQUFjLFNBQWQsQ0FBOUIsQ0FIMkQ7YUFBL0Q7Ozs7eUNBTWEsS0FBSzs7QUFFbEIsZ0JBQUksVUFBVSxJQUFJLE1BQUosQ0FBVyxXQUFYLENBRkk7QUFHbEIsaUJBQUssYUFBTCxJQUFzQixDQUF0QixDQUhrQjtBQUlsQixpQkFBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixPQUFuQixFQUprQjtBQUtsQixnQkFBSSxNQUFKLENBQVcsV0FBWCxHQUF5QixFQUF6QixDQUxrQjtBQU1sQixpQkFBSyxVQUFMLENBQWdCLFFBQVEsR0FBUixFQUFoQixFQU5rQjtBQU9sQixpQkFBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixPQUFuQixFQVBrQjs7Ozs4Q0FVQSxhQUFZO0FBQ2hDLGdCQUFJLFdBQVcsS0FBSyxPQUFMLENBQWEsV0FBYixHQUEyQixHQUEzQixDQUErQixVQUFDLEdBQUQ7dUJBQVEsSUFBSSxLQUFKLENBQVUsT0FBVjthQUFSLENBQTFDLENBRDRCO0FBRWhDLG1CQUFPLFNBQVMsTUFBVCxDQUFnQixVQUFDLEdBQUQ7dUJBQU8sSUFBSSxPQUFKLENBQVksV0FBWixJQUF5QixDQUFDLENBQUQ7YUFBaEMsQ0FBaEIsQ0FBb0QsQ0FBcEQsQ0FBUCxDQUZnQzs7OzttQ0FJdkIsTUFBTTs7QUFFYixpQkFBSyxLQUFMLEdBQWEsSUFBYixDQUZhO0FBR2IsaUJBQUssV0FBTCxHQUhhOzs7O2lDQUtSOzs7QUFFTCxtQkFDSTs7a0JBQUssV0FBVSxjQUFWLEVBQUw7Z0JBQ0k7O3NCQUFNLFdBQVUsV0FBVixFQUFOO29CQUE4QixRQUFRLEdBQVIsS0FBZ0IsS0FBaEI7dUJBQTlCO2lCQURKO2dCQUVJLDZCQUFLLEtBQUksT0FBSixFQUFZLFdBQVcsbUJBQUMsR0FBRDsrQkFBUyxPQUFLLFdBQUwsQ0FBaUIsR0FBakI7cUJBQVQsRUFBaUMsV0FBVSxVQUFWLEVBQXFCLGlCQUFnQixNQUFoQixFQUF1QixJQUFHLGNBQUgsRUFBa0IsTUFBSyxNQUFMLEVBQTNILENBRko7YUFESixDQUZLOzs7O1dBNUVBO0VBQThCLE1BQU0sU0FBTiIsImZpbGUiOiJDb25zb2xlSW5wdXRDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xyXG5cclxuLy9jb25zdCBDb25zb2xlT3V0cHV0Q29tcG9uZW50ID0gcmVxdWlyZShgLi9Db25zb2xlT3V0cHV0Q29tcG9uZW50LmpzYCkuQ29uc29sZU91dHB1dENvbXBvbmVudDtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb25zb2xlSW5wdXRDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgLSBjb250YWlucyB7IHByb2Nlc3M6IFByb2Nlc3MsIHBhcmVudCA6IENvbnNvbGVDb21wb25lbnQgfVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5fcHJvY2VzcyA9IHByb3BzLnByb2Nlc3M7XHJcbiAgICAgICAgdGhpcy5fcGFyZW50ID0gcHJvcHMucGFyZW50O1xyXG4gICAgICAgIHRoaXMuX2lucHV0VGV4dCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudExpbmU9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5faGlzdG9yeT0gW107XHJcbiAgICAgICAgdGhpcy5faGlzdG9yeUluZGV4PSAwO1xyXG4gICAgICAgIC8vdGhpcy5fc25pcHBldHNBcnJheSA9IHRoaXMuX3BhcmVudC5nZXRTbmlwcGV0cygpO1xyXG4gICAgfVxyXG4gICAgaW5zZXJ0SW5wdXQoaW5wdXQpe1xyXG4gICAgICAgIHRoaXMucmVmcy5pbnB1dC50ZXh0Q29udGVudCA9IGlucHV0O1xyXG4gICAgfVxyXG4gICAgaGFuZGxlVG91Y2goZXZ0KSB7XHJcblxyXG4gICAgICAgIGlmIChldnQua2V5ID09PSBcIkVudGVyXCIpXHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRW50ZXJUb3VjaChldnQpO1xyXG5cclxuICAgICAgICBlbHNlIGlmIChldnQua2V5ID09PSBcIlRhYlwiKVxyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVRhYlRvdWNoKGV2dCk7XHJcblxyXG4gICAgICAgIGVsc2UgaWYgKGV2dC5rZXkgPT09IFwiQXJyb3dVcFwiKVxyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUFycm93VG91Y2goLTEpO1xyXG5cclxuICAgICAgICBlbHNlIGlmIChldnQua2V5ID09PSBcIkFycm93RG93blwiKVxyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUFycm93VG91Y2goKzEpO1xyXG4gICAgICAgIC8vIGMgPSA2NyBzbyB3aGUgY2FuIGhhbmRsZSBDVFJMLUNcclxuICAgICAgICBlbHNlIGlmIChldnQua2V5Q29kZSA9PT0gNjcgJiYgZXZ0LmN0cmxLZXkpXHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ3RybENUb3VjaCgpO1xyXG5cclxuICAgIH1cclxuICAgIGhhbmRsZVRhYlRvdWNoKCl7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRUZXh0ID0gdGhpcy5yZWZzLmlucHV0LnRleHRDb250ZW50O1xyXG4gICAgICAgIHRoaXMuaW5zZXJ0SW5wdXQodGhpcy5nZXRQb3NzaWJsZUNvbXBsZXRpb24oY3VycmVudFRleHQpKTtcclxuICAgIH1cclxuICAgIGhhbmRsZUN0cmxDVG91Y2goKXtcclxuXHJcbiAgICAgICAgdGhpcy5yZWZzLmlucHV0LnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgICB0aGlzLl9wYXJlbnQuaW5zZXJ0T3V0cHV0KFwiY29tbWFuZCBzdG9wcGVkIGJ5IGtleWJvYXJkXCIpO1xyXG4gICAgICAgIHRoaXMuX3Byb2Nlc3Muc3RvcENvbW1hbmQoKTtcclxuICAgIH1cclxuICAgIGhhbmRsZUFycm93VG91Y2goaSkge1xyXG5cclxuICAgICAgICBsZXQgbmV4dEluZGV4ID0gdGhpcy5faGlzdG9yeUluZGV4ICsgaTtcclxuICAgICAgICBpZiAoKCBuZXh0SW5kZXggPj0gMCkgJiYgKCBuZXh0SW5kZXggPD0gdGhpcy5faGlzdG9yeS5sZW5ndGgpKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9oaXN0b3J5SW5kZXggKz0gaTtcclxuICAgICAgICAgICAgdGhpcy5yZWZzLmlucHV0LnRleHRDb250ZW50ID0gdGhpcy5faGlzdG9yeVtuZXh0SW5kZXhdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGhhbmRsZUVudGVyVG91Y2goZXZ0KSB7XHJcblxyXG4gICAgICAgIGxldCBjb21tYW5kID0gZXZ0LnRhcmdldC50ZXh0Q29udGVudDtcclxuICAgICAgICB0aGlzLl9oaXN0b3J5SW5kZXggKz0gMTtcclxuICAgICAgICB0aGlzLl9oaXN0b3J5LnB1c2goY29tbWFuZCk7XHJcbiAgICAgICAgZXZ0LnRhcmdldC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VQYXRoKHByb2Nlc3MuY3dkKCkpO1xyXG4gICAgICAgIHRoaXMuX3Byb2Nlc3MuZXhlYyhjb21tYW5kKTtcclxuXHJcbiAgICB9XHJcbiAgICBnZXRQb3NzaWJsZUNvbXBsZXRpb24oY3VycmVudFRleHQpe1xyXG4gICAgICBsZXQgY29tbWFuZHMgPSB0aGlzLl9wYXJlbnQuZ2V0U25pcHBldHMoKS5tYXAoKHZhbCk9PiB2YWwucHJvcHMuY29tbWFuZCk7XHJcbiAgICAgIHJldHVybiBjb21tYW5kcy5maWx0ZXIoKHZhbCk9PnZhbC5pbmRleE9mKGN1cnJlbnRUZXh0KT4tMSlbMF07XHJcbiAgICB9XHJcbiAgICBjaGFuZ2VQYXRoKHBhdGgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5fcGF0aCA9IHBhdGg7XHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0V3JhcHBlclwiID5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0UGF0aFwiPnsgcHJvY2Vzcy5jd2QoKSArIFwiID4gXCJ9IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgcmVmPVwiaW5wdXRcIiBvbktleURvd249eyhldnQpID0+IHRoaXMuaGFuZGxlVG91Y2goZXZ0KSB9IGNsYXNzTmFtZT1cImlucHV0RGl2XCIgY29udGVudEVkaXRhYmxlPVwiVHJ1ZVwiIGlkPVwiQ29uc29sZUlucHV0XCIgdHlwZT1cInRleHRcIi8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
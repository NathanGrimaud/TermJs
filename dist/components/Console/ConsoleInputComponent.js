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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvbnNvbGUvQ29uc29sZUlucHV0Q29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU0sUUFBUSxRQUFRLE9BQVIsQ0FBUjs7OztJQUlPOzs7Ozs7OztBQU1ULGFBTlMscUJBTVQsQ0FBWSxLQUFaLEVBQW1COzhCQU5WLHVCQU1VOzsyRUFOVixrQ0FRQyxRQUZTOztBQUdmLGNBQUssUUFBTCxHQUFnQixNQUFNLE9BQU4sQ0FIRDtBQUlmLGNBQUssT0FBTCxHQUFlLE1BQU0sTUFBTixDQUpBO0FBS2YsY0FBSyxVQUFMLEdBQWtCLEVBQWxCLENBTGU7QUFNZixjQUFLLFlBQUwsR0FBbUIsRUFBbkIsQ0FOZTtBQU9mLGNBQUssUUFBTCxHQUFlLEVBQWYsQ0FQZTtBQVFmLGNBQUssYUFBTCxHQUFvQixDQUFwQixDQVJlOzs7S0FBbkI7O2lCQU5TOztvQ0FpQkcsT0FBTTtBQUNkLGlCQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLFdBQWhCLEdBQThCLEtBQTlCLENBRGM7Ozs7b0NBR04sS0FBSzs7QUFFYixnQkFBSSxJQUFJLEdBQUosS0FBWSxPQUFaLEVBQ0EsS0FBSyxnQkFBTCxDQUFzQixHQUF0QixFQURKLEtBR0ssSUFBSSxJQUFJLEdBQUosS0FBWSxTQUFaLEVBQ0wsS0FBSyxnQkFBTCxDQUFzQixDQUFDLENBQUQsQ0FBdEIsQ0FEQyxLQUdBLElBQUksSUFBSSxHQUFKLEtBQVksV0FBWixFQUNMLEtBQUssZ0JBQUwsQ0FBc0IsQ0FBQyxDQUFELENBQXRCOztBQURDLGlCQUdBLElBQUksSUFBSSxPQUFKLEtBQWdCLEVBQWhCLElBQXNCLElBQUksT0FBSixFQUMzQixLQUFLLGdCQUFMLEdBREM7Ozs7MkNBSVM7O0FBRWQsaUJBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsV0FBaEIsR0FBOEIsRUFBOUIsQ0FGYztBQUdkLGlCQUFLLE9BQUwsQ0FBYSxZQUFiLENBQTBCLDZCQUExQixFQUhjO0FBSWQsaUJBQUssUUFBTCxDQUFjLFdBQWQsR0FKYzs7Ozt5Q0FNRCxHQUFHOztBQUVoQixnQkFBSSxZQUFZLEtBQUssYUFBTCxHQUFxQixDQUFyQixDQUZBO0FBR2hCLGdCQUFJLFNBQUUsSUFBYSxDQUFiLElBQXFCLGFBQWEsS0FBSyxRQUFMLENBQWMsTUFBZCxFQUF1Qjs7QUFFM0QscUJBQUssYUFBTCxJQUFzQixDQUF0QixDQUYyRDtBQUczRCxxQkFBSyxJQUFMLENBQVUsS0FBVixDQUFnQixXQUFoQixHQUE4QixLQUFLLFFBQUwsQ0FBYyxTQUFkLENBQTlCLENBSDJEO2FBQS9EOzs7O3lDQU1hLEtBQUs7O0FBRWxCLGdCQUFJLFVBQVUsSUFBSSxNQUFKLENBQVcsV0FBWCxDQUZJO0FBR2xCLGlCQUFLLGFBQUwsSUFBc0IsQ0FBdEIsQ0FIa0I7QUFJbEIsaUJBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsT0FBbkIsRUFKa0I7QUFLbEIsZ0JBQUksTUFBSixDQUFXLFdBQVgsR0FBeUIsRUFBekIsQ0FMa0I7QUFNbEIsaUJBQUssVUFBTCxDQUFnQixRQUFRLEdBQVIsRUFBaEIsRUFOa0I7QUFPbEIsaUJBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsT0FBbkIsRUFQa0I7Ozs7bUNBVVgsTUFBTTs7QUFFYixpQkFBSyxLQUFMLEdBQWEsSUFBYixDQUZhO0FBR2IsaUJBQUssV0FBTCxHQUhhOzs7O2lDQUtSOzs7QUFFTCxtQkFDSTs7a0JBQUssV0FBVSxjQUFWLEVBQUw7Z0JBQ0k7O3NCQUFNLFdBQVUsV0FBVixFQUFOO29CQUE4QixRQUFRLEdBQVIsS0FBZ0IsS0FBaEI7dUJBQTlCO2lCQURKO2dCQUVJLDZCQUFLLEtBQUksT0FBSixFQUFZLFdBQVcsbUJBQUMsR0FBRDsrQkFBUyxPQUFLLFdBQUwsQ0FBaUIsR0FBakI7cUJBQVQsRUFBaUMsV0FBVSxVQUFWLEVBQXFCLGlCQUFnQixNQUFoQixFQUF1QixJQUFHLGNBQUgsRUFBa0IsTUFBSyxNQUFMLEVBQTNILENBRko7YUFESixDQUZLOzs7O1dBakVBO0VBQThCLE1BQU0sU0FBTiIsImZpbGUiOiJDb25zb2xlSW5wdXRDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xyXG5cclxuLy9jb25zdCBDb25zb2xlT3V0cHV0Q29tcG9uZW50ID0gcmVxdWlyZShgLi9Db25zb2xlT3V0cHV0Q29tcG9uZW50LmpzYCkuQ29uc29sZU91dHB1dENvbXBvbmVudDtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb25zb2xlSW5wdXRDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgLSBjb250YWlucyB7IHByb2Nlc3M6IFByb2Nlc3MsIHBhcmVudCA6IENvbnNvbGVDb21wb25lbnQgfVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5fcHJvY2VzcyA9IHByb3BzLnByb2Nlc3M7XHJcbiAgICAgICAgdGhpcy5fcGFyZW50ID0gcHJvcHMucGFyZW50O1xyXG4gICAgICAgIHRoaXMuX2lucHV0VGV4dCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudExpbmU9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5faGlzdG9yeT0gW107XHJcbiAgICAgICAgdGhpcy5faGlzdG9yeUluZGV4PSAwO1xyXG5cclxuICAgIH1cclxuICAgIGluc2VydElucHV0KGlucHV0KXtcclxuICAgICAgICB0aGlzLnJlZnMuaW5wdXQudGV4dENvbnRlbnQgPSBpbnB1dDtcclxuICAgIH1cclxuICAgIGhhbmRsZVRvdWNoKGV2dCkge1xyXG5cclxuICAgICAgICBpZiAoZXZ0LmtleSA9PT0gXCJFbnRlclwiKVxyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUVudGVyVG91Y2goZXZ0KTtcclxuXHJcbiAgICAgICAgZWxzZSBpZiAoZXZ0LmtleSA9PT0gXCJBcnJvd1VwXCIpXHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQXJyb3dUb3VjaCgtMSk7XHJcblxyXG4gICAgICAgIGVsc2UgaWYgKGV2dC5rZXkgPT09IFwiQXJyb3dEb3duXCIpXHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQXJyb3dUb3VjaCgrMSk7XHJcbiAgICAgICAgLy8gYyA9IDY3XHJcbiAgICAgICAgZWxzZSBpZiAoZXZ0LmtleUNvZGUgPT09IDY3ICYmIGV2dC5jdHJsS2V5KVxyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUN0cmxDVG91Y2goKTtcclxuXHJcbiAgICB9XHJcbiAgICBoYW5kbGVDdHJsQ1RvdWNoKCl7XHJcblxyXG4gICAgICAgIHRoaXMucmVmcy5pbnB1dC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5fcGFyZW50Lmluc2VydE91dHB1dChcImNvbW1hbmQgc3RvcHBlZCBieSBrZXlib2FyZFwiKTtcclxuICAgICAgICB0aGlzLl9wcm9jZXNzLnN0b3BDb21tYW5kKCk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVBcnJvd1RvdWNoKGkpIHtcclxuXHJcbiAgICAgICAgbGV0IG5leHRJbmRleCA9IHRoaXMuX2hpc3RvcnlJbmRleCArIGk7XHJcbiAgICAgICAgaWYgKCggbmV4dEluZGV4ID49IDApICYmICggbmV4dEluZGV4IDw9IHRoaXMuX2hpc3RvcnkubGVuZ3RoKSkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5faGlzdG9yeUluZGV4ICs9IGk7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcy5pbnB1dC50ZXh0Q29udGVudCA9IHRoaXMuX2hpc3RvcnlbbmV4dEluZGV4XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoYW5kbGVFbnRlclRvdWNoKGV2dCkge1xyXG5cclxuICAgICAgICBsZXQgY29tbWFuZCA9IGV2dC50YXJnZXQudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgdGhpcy5faGlzdG9yeUluZGV4ICs9IDE7XHJcbiAgICAgICAgdGhpcy5faGlzdG9yeS5wdXNoKGNvbW1hbmQpO1xyXG4gICAgICAgIGV2dC50YXJnZXQudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlUGF0aChwcm9jZXNzLmN3ZCgpKTtcclxuICAgICAgICB0aGlzLl9wcm9jZXNzLmV4ZWMoY29tbWFuZCk7XHJcblxyXG4gICAgfVxyXG4gICAgY2hhbmdlUGF0aChwYXRoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuX3BhdGggPSBwYXRoO1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dFdyYXBwZXJcIiA+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dFBhdGhcIj57IHByb2Nlc3MuY3dkKCkgKyBcIiA+IFwifSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHJlZj1cImlucHV0XCIgb25LZXlEb3duPXsoZXZ0KSA9PiB0aGlzLmhhbmRsZVRvdWNoKGV2dCkgfSBjbGFzc05hbWU9XCJpbnB1dERpdlwiIGNvbnRlbnRFZGl0YWJsZT1cIlRydWVcIiBpZD1cIkNvbnNvbGVJbnB1dFwiIHR5cGU9XCJ0ZXh0XCIvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
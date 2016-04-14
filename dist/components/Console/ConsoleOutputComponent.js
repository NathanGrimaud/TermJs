"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require("react");
var HIGHLIGHT = require("react-highlight");

var ConsoleOutputComponent = exports.ConsoleOutputComponent = function (_React$Component) {
    _inherits(ConsoleOutputComponent, _React$Component);

    function ConsoleOutputComponent(props) {
        _classCallCheck(this, ConsoleOutputComponent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ConsoleOutputComponent).call(this, props));
    }

    _createClass(ConsoleOutputComponent, [{
        key: "render",
        value: function render() {
            var className = "bash " + this.props.className;
            return React.createElement(
                HIGHLIGHT,
                { className: className },
                this.props.text
            );
        }
    }]);

    return ConsoleOutputComponent;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvbnNvbGUvQ29uc29sZU91dHB1dENvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLFFBQVEsUUFBUSxPQUFSLENBQVI7QUFDTixJQUFNLFlBQVksUUFBUSxpQkFBUixDQUFaOztJQUdPOzs7QUFDVCxhQURTLHNCQUNULENBQVksS0FBWixFQUFtQjs4QkFEVix3QkFDVTs7c0VBRFYsbUNBRUMsUUFEUztLQUFuQjs7aUJBRFM7O2lDQUlBO0FBQ0wsZ0JBQUksc0JBQW9CLEtBQUssS0FBTCxDQUFXLFNBQVgsQ0FEbkI7QUFFTCxtQkFDSTtBQUFDLHlCQUFEO2tCQUFXLFdBQVksU0FBWixFQUFYO2dCQUNLLEtBQUssS0FBTCxDQUFXLElBQVg7YUFGVCxDQUZLOzs7O1dBSkE7RUFBK0IsTUFBTSxTQUFOIiwiZmlsZSI6IkNvbnNvbGVPdXRwdXRDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xyXG5jb25zdCBISUdITElHSFQgPSByZXF1aXJlKFwicmVhY3QtaGlnaGxpZ2h0XCIpO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDb25zb2xlT3V0cHV0Q29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCBjbGFzc05hbWUgPSBgYmFzaCAke3RoaXMucHJvcHMuY2xhc3NOYW1lfWA7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEhJR0hMSUdIVCBjbGFzc05hbWU9IHtjbGFzc05hbWV9PlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMudGV4dH1cclxuICAgICAgICAgICAgPC9ISUdITElHSFQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iXX0=
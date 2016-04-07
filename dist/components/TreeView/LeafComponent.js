
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require("react");
/**
 * class that represent a file in tree view
 */

var LeafComponent = exports.LeafComponent = function (_React$Component) {
    _inherits(LeafComponent, _React$Component);

    /**
     * @constructor
     * @param {Object} props - contains {parent , name}
     */

    function LeafComponent(props) {
        _classCallCheck(this, LeafComponent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(LeafComponent).call(this, props));
    }

    _createClass(LeafComponent, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "leaf" },
                this.props.name
            );
        }
    }]);

    return LeafComponent;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RyZWVWaWV3L0xlYWZDb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU0sUUFBUSxRQUFRLE9BQVIsQ0FBUjs7Ozs7SUFJTzs7Ozs7Ozs7QUFLVCxhQUxTLGFBS1QsQ0FBWSxLQUFaLEVBQW1COzhCQUxWLGVBS1U7O3NFQUxWLDBCQU1DLFFBRFM7S0FBbkI7O2lCQUxTOztpQ0FRQTtBQUNMLG1CQUNJOztrQkFBSyxXQUFVLE1BQVYsRUFBTDtnQkFBdUIsS0FBSyxLQUFMLENBQVcsSUFBWDthQUQzQixDQURLOzs7O1dBUkE7RUFBc0IsTUFBTSxTQUFOIiwiZmlsZSI6IkxlYWZDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcclxuLyoqXHJcbiAqIGNsYXNzIHRoYXQgcmVwcmVzZW50IGEgZmlsZSBpbiB0cmVlIHZpZXdcclxuICovXHJcbmV4cG9ydCBjbGFzcyBMZWFmQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIC8qKlxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgLSBjb250YWlucyB7cGFyZW50ICwgbmFtZX1cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7ICAgICAgIFxyXG4gICAgfSAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVhZlwiPnt0aGlzLnByb3BzLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iXX0=
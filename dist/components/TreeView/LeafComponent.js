
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
                React.createElement(
                    "i",
                    { ref: "icon", className: "material-icons md-16 md-light" },
                    "description"
                ),
                React.createElement(
                    "span",
                    { className: "nameText" },
                    this.props.name
                )
            );
        }
    }]);

    return LeafComponent;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RyZWVWaWV3L0xlYWZDb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU0sUUFBUSxRQUFRLE9BQVIsQ0FBUjs7Ozs7SUFJTzs7Ozs7Ozs7QUFLVCxhQUxTLGFBS1QsQ0FBWSxLQUFaLEVBQW1COzhCQUxWLGVBS1U7O3NFQUxWLDBCQU1DLFFBRFM7S0FBbkI7O2lCQUxTOztpQ0FRQTtBQUNMLG1CQUNJOztrQkFBSyxXQUFVLE1BQVYsRUFBTDtnQkFDQzs7c0JBQUcsS0FBSSxNQUFKLEVBQVcsV0FBVSwrQkFBVixFQUFkOztpQkFERDtnQkFFRTs7c0JBQU0sV0FBVSxVQUFWLEVBQU47b0JBQTRCLEtBQUssS0FBTCxDQUFXLElBQVg7aUJBRjlCO2FBREosQ0FESzs7OztXQVJBO0VBQXNCLE1BQU0sU0FBTiIsImZpbGUiOiJMZWFmQ29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XHJcbi8qKlxyXG4gKiBjbGFzcyB0aGF0IHJlcHJlc2VudCBhIGZpbGUgaW4gdHJlZSB2aWV3XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTGVhZkNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICAvKipcclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzIC0gY29udGFpbnMge3BhcmVudCAsIG5hbWV9XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVhZlwiPlxyXG4gICAgICAgICAgICAgPGkgcmVmPVwiaWNvblwiIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIG1kLTE2IG1kLWxpZ2h0XCIgPmRlc2NyaXB0aW9uPC9pPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVUZXh0XCI+e3RoaXMucHJvcHMubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIl19
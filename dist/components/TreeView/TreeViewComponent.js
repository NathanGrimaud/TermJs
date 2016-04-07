"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require("react");
var fs = require("fs");

var BranchComponent = require("./BranchComponent.js").BranchComponent;
var LeafComponent = require("./LeafComponent").LeafComponent;
/**
 * component that represent the file system architecture
 */

var TreeViewComponent = exports.TreeViewComponent = function (_React$Component) {
    _inherits(TreeViewComponent, _React$Component);

    function TreeViewComponent(props) {
        _classCallCheck(this, TreeViewComponent);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TreeViewComponent).call(this, props));

        _this.state = {
            path: props.path
        };
        _this._parent = props.parent;
        _this._process = props.process;

        return _this;
    }
    /**
     * returns an array of LeafComponent
     * @param {string} path - the fs level to explore
     */


    _createClass(TreeViewComponent, [{
        key: "makeLeaves",
        value: function makeLeaves(path) {
            var _this2 = this;

            return this.findFiles(path).map(function (value, index) {
                return React.createElement(LeafComponent, { process: _this2._process, name: value, key: index });
            });
        }
        /**
         * returns an array of BranchComponent
         * @param {string} path - the fs level to explore
         */

    }, {
        key: "makeBranches",
        value: function makeBranches(path) {
            var _this3 = this;

            return this.findFolders(path).map(function (value, index) {
                return React.createElement(BranchComponent, { path: path, process: _this3._process, parent: _this3, name: value, key: index });
            });
        }
        /**
         * returns an array of string that represent directories
         * @param {string} path - the fs level to explore
         */

    }, {
        key: "findFolders",
        value: function findFolders(path) {

            return fs.readdirSync(path).filter(function (file) {
                return fs.statSync(path + "/" + file).isDirectory();
            });
        }
        /**
         * returns an array of string that represent files
         * @param {string} path - the fs level to explore
         */

    }, {
        key: "findFiles",
        value: function findFiles(path) {
            return fs.readdirSync(path).filter(function (file) {
                return fs.statSync(path + "/" + file).isFile();
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "treeView" },
                this.makeBranches(this.state.path),
                this.makeLeaves(this.state.path)
            );
        }
    }]);

    return TreeViewComponent;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RyZWVWaWV3L1RyZWVWaWV3Q29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU0sUUFBUSxRQUFRLE9BQVIsQ0FBUjtBQUNOLElBQUksS0FBSyxRQUFRLElBQVIsQ0FBTDs7QUFFSixJQUFNLGtCQUFrQixRQUFRLHNCQUFSLEVBQWdDLGVBQWhDO0FBQ3hCLElBQU0sZ0JBQWdCLFFBQVEsaUJBQVIsRUFBMkIsYUFBM0I7Ozs7O0lBSVQ7OztBQUNULGFBRFMsaUJBQ1QsQ0FBWSxLQUFaLEVBQW1COzhCQURWLG1CQUNVOzsyRUFEViw4QkFFQyxRQURTOztBQUVmLGNBQUssS0FBTCxHQUFhO0FBQ1Qsa0JBQU8sTUFBTSxJQUFOO1NBRFgsQ0FGZTtBQUtmLGNBQUssT0FBTCxHQUFlLE1BQU0sTUFBTixDQUxBO0FBTWYsY0FBSyxRQUFMLEdBQWdCLE1BQU0sT0FBTixDQU5EOzs7S0FBbkI7Ozs7Ozs7aUJBRFM7O21DQWNFLE1BQUs7OztBQUVaLG1CQUFPLEtBQUssU0FBTCxDQUFlLElBQWYsRUFBcUIsR0FBckIsQ0FBeUIsVUFBQyxLQUFELEVBQU8sS0FBUCxFQUFlO0FBQzNDLHVCQUFPLG9CQUFDLGFBQUQsSUFBZ0IsU0FBUyxPQUFLLFFBQUwsRUFBZSxNQUFNLEtBQU4sRUFBYSxLQUFLLEtBQUwsRUFBckQsQ0FBUCxDQUQyQzthQUFmLENBQWhDLENBRlk7Ozs7Ozs7OztxQ0FVSixNQUFLOzs7QUFFYixtQkFBTyxLQUFLLFdBQUwsQ0FBaUIsSUFBakIsRUFBdUIsR0FBdkIsQ0FBMkIsVUFBQyxLQUFELEVBQU8sS0FBUCxFQUFlO0FBQzdDLHVCQUFPLG9CQUFDLGVBQUQsSUFBaUIsTUFBTSxJQUFOLEVBQVksU0FBUyxPQUFLLFFBQUwsRUFBZSxnQkFBYyxNQUFNLEtBQU4sRUFBYSxLQUFLLEtBQUwsRUFBaEYsQ0FBUCxDQUQ2QzthQUFmLENBQWxDLENBRmE7Ozs7Ozs7OztvQ0FVTCxNQUFNOztBQUVkLG1CQUFPLEdBQUcsV0FBSCxDQUFlLElBQWYsRUFBcUIsTUFBckIsQ0FBNEIsVUFBVSxJQUFWLEVBQWdCO0FBQy9DLHVCQUFPLEdBQUcsUUFBSCxDQUFZLE9BQUssR0FBTCxHQUFTLElBQVQsQ0FBWixDQUEyQixXQUEzQixFQUFQLENBRCtDO2FBQWhCLENBQW5DLENBRmM7Ozs7Ozs7OztrQ0FVUixNQUFNO0FBQ1osbUJBQU8sR0FBRyxXQUFILENBQWUsSUFBZixFQUFxQixNQUFyQixDQUE0QixVQUFVLElBQVYsRUFBZ0I7QUFDL0MsdUJBQU8sR0FBRyxRQUFILENBQVksT0FBSyxHQUFMLEdBQVMsSUFBVCxDQUFaLENBQTJCLE1BQTNCLEVBQVAsQ0FEK0M7YUFBaEIsQ0FBbkMsQ0FEWTs7OztpQ0FLUDtBQUNMLG1CQUNJOztrQkFBSyxXQUFVLFVBQVYsRUFBTDtnQkFDSyxLQUFLLFlBQUwsQ0FBa0IsS0FBSyxLQUFMLENBQVcsSUFBWCxDQUR2QjtnQkFFSyxLQUFLLFVBQUwsQ0FBZ0IsS0FBSyxLQUFMLENBQVcsSUFBWCxDQUZyQjthQURKLENBREs7Ozs7V0FqREE7RUFBMEIsTUFBTSxTQUFOIiwiZmlsZSI6IlRyZWVWaWV3Q29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcclxubGV0IGZzID0gcmVxdWlyZShcImZzXCIpO1xyXG5cclxuY29uc3QgQnJhbmNoQ29tcG9uZW50ID0gcmVxdWlyZShcIi4vQnJhbmNoQ29tcG9uZW50LmpzXCIpLkJyYW5jaENvbXBvbmVudDtcclxuY29uc3QgTGVhZkNvbXBvbmVudCA9IHJlcXVpcmUoXCIuL0xlYWZDb21wb25lbnRcIikuTGVhZkNvbXBvbmVudDtcclxuLyoqXHJcbiAqIGNvbXBvbmVudCB0aGF0IHJlcHJlc2VudCB0aGUgZmlsZSBzeXN0ZW0gYXJjaGl0ZWN0dXJlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVHJlZVZpZXdDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcGF0aCA6IHByb3BzLnBhdGhcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcGFyZW50ID0gcHJvcHMucGFyZW50O1xyXG4gICAgICAgIHRoaXMuX3Byb2Nlc3MgPSBwcm9wcy5wcm9jZXNzO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm5zIGFuIGFycmF5IG9mIExlYWZDb21wb25lbnRcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIC0gdGhlIGZzIGxldmVsIHRvIGV4cGxvcmVcclxuICAgICAqL1xyXG4gICAgbWFrZUxlYXZlcyhwYXRoKXtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5maW5kRmlsZXMocGF0aCkubWFwKCh2YWx1ZSxpbmRleCk9PntcclxuICAgICAgICAgICAgcmV0dXJuIDxMZWFmQ29tcG9uZW50ICBwcm9jZXNzPXt0aGlzLl9wcm9jZXNzfSBuYW1lPXt2YWx1ZX0ga2V5PXtpbmRleH0gLz4gO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm5zIGFuIGFycmF5IG9mIEJyYW5jaENvbXBvbmVudFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggLSB0aGUgZnMgbGV2ZWwgdG8gZXhwbG9yZVxyXG4gICAgICovXHJcbiAgIG1ha2VCcmFuY2hlcyhwYXRoKXtcclxuICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLmZpbmRGb2xkZXJzKHBhdGgpLm1hcCgodmFsdWUsaW5kZXgpPT57XHJcbiAgICAgICAgICAgIHJldHVybiA8QnJhbmNoQ29tcG9uZW50IHBhdGg9e3BhdGh9IHByb2Nlc3M9e3RoaXMuX3Byb2Nlc3N9IHBhcmVudD17dGhpc30gbmFtZT17dmFsdWV9IGtleT17aW5kZXh9IC8+IDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogcmV0dXJucyBhbiBhcnJheSBvZiBzdHJpbmcgdGhhdCByZXByZXNlbnQgZGlyZWN0b3JpZXNcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIC0gdGhlIGZzIGxldmVsIHRvIGV4cGxvcmVcclxuICAgICAqL1xyXG4gICAgZmluZEZvbGRlcnMocGF0aCkge1xyXG4gICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGZzLnJlYWRkaXJTeW5jKHBhdGgpLmZpbHRlcihmdW5jdGlvbiAoZmlsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZnMuc3RhdFN5bmMocGF0aCtcIi9cIitmaWxlKS5pc0RpcmVjdG9yeSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm5zIGFuIGFycmF5IG9mIHN0cmluZyB0aGF0IHJlcHJlc2VudCBmaWxlc1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggLSB0aGUgZnMgbGV2ZWwgdG8gZXhwbG9yZVxyXG4gICAgICovXHJcbiAgICBmaW5kRmlsZXMocGF0aCkge1xyXG4gICAgICAgIHJldHVybiBmcy5yZWFkZGlyU3luYyhwYXRoKS5maWx0ZXIoZnVuY3Rpb24gKGZpbGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZzLnN0YXRTeW5jKHBhdGgrXCIvXCIrZmlsZSkuaXNGaWxlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmVlVmlld1wiPlxyXG4gICAgICAgICAgICAgICAge3RoaXMubWFrZUJyYW5jaGVzKHRoaXMuc3RhdGUucGF0aCl9XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5tYWtlTGVhdmVzKHRoaXMuc3RhdGUucGF0aCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIl19
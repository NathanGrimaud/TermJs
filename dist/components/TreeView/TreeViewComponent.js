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
var Windows = require("../../tools.js").isWindows;
/**
 * component that represent the file system architecture
 */

var TreeViewComponent = exports.TreeViewComponent = function (_React$Component) {
    _inherits(TreeViewComponent, _React$Component);

    function TreeViewComponent(props) {
        _classCallCheck(this, TreeViewComponent);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TreeViewComponent).call(this, props));

        _this._parent = props.parent;
        _this._process = props.process;
        _this._fullPath = props.path;
        _this._separator = Windows() ? "\\" : "/";
        return _this;
    }

    _createClass(TreeViewComponent, [{
        key: "getName",
        value: function getName() {
            var path = this._fullPath.split("\\");
            return path[path.length - 1];
        }
    }, {
        key: "getPath",
        value: function getPath() {
            var path = this._fullPath.split(this._separator);
            return path.filter(function (value, index) {
                return index !== path.length - 1;
            }).join(this._separator);
        }
        /**
         * returns an array of LeafComponent
         * @param {string} path - the fs level to explore
         */

    }, {
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
                React.createElement(BranchComponent, {
                    path: this.getPath(),
                    process: this._process,
                    parent: this,
                    name: this.getName(),
                    key: -1 })
            );
        }
    }]);

    return TreeViewComponent;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RyZWVWaWV3L1RyZWVWaWV3Q29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU0sUUFBUSxRQUFRLE9BQVIsQ0FBUjtBQUNOLElBQUksS0FBSyxRQUFRLElBQVIsQ0FBTDs7QUFFSixJQUFNLGtCQUFrQixRQUFRLHNCQUFSLEVBQWdDLGVBQWhDO0FBQ3hCLElBQU0sZ0JBQWdCLFFBQVEsaUJBQVIsRUFBMkIsYUFBM0I7QUFDdEIsSUFBTSxVQUFVLFFBQVEsZ0JBQVIsRUFBMEIsU0FBMUI7Ozs7O0lBSUg7OztBQUNULGFBRFMsaUJBQ1QsQ0FBWSxLQUFaLEVBQW1COzhCQURWLG1CQUNVOzsyRUFEViw4QkFFQyxRQURTOztBQUVmLGNBQUssT0FBTCxHQUFlLE1BQU0sTUFBTixDQUZBO0FBR2YsY0FBSyxRQUFMLEdBQWdCLE1BQU0sT0FBTixDQUhEO0FBSWYsY0FBSyxTQUFMLEdBQWlCLE1BQU0sSUFBTixDQUpGO0FBS2YsY0FBSyxVQUFMLEdBQWtCLFlBQVksSUFBWixHQUFtQixHQUFuQixDQUxIOztLQUFuQjs7aUJBRFM7O2tDQVFBO0FBQ0wsZ0JBQUksT0FBTyxLQUFLLFNBQUwsQ0FBZSxLQUFmLENBQXFCLElBQXJCLENBQVAsQ0FEQztBQUVMLG1CQUFPLEtBQUssS0FBSyxNQUFMLEdBQVksQ0FBWixDQUFaLENBRks7Ozs7a0NBSUE7QUFDTCxnQkFBSSxPQUFPLEtBQUssU0FBTCxDQUFlLEtBQWYsQ0FBcUIsS0FBSyxVQUFMLENBQTVCLENBREM7QUFFTCxtQkFBTyxLQUFLLE1BQUwsQ0FBWSxVQUFDLEtBQUQsRUFBTyxLQUFQO3VCQUFlLFVBQVUsS0FBSyxNQUFMLEdBQVksQ0FBWjthQUF6QixDQUFaLENBQW9ELElBQXBELENBQXlELEtBQUssVUFBTCxDQUFoRSxDQUZLOzs7Ozs7Ozs7bUNBUUUsTUFBSzs7O0FBRVosbUJBQU8sS0FBSyxTQUFMLENBQWUsSUFBZixFQUFxQixHQUFyQixDQUF5QixVQUFDLEtBQUQsRUFBTyxLQUFQLEVBQWU7QUFDM0MsdUJBQU8sb0JBQUMsYUFBRCxJQUFnQixTQUFTLE9BQUssUUFBTCxFQUFlLE1BQU0sS0FBTixFQUFhLEtBQUssS0FBTCxFQUFyRCxDQUFQLENBRDJDO2FBQWYsQ0FBaEMsQ0FGWTs7Ozs7Ozs7O3FDQVVKLE1BQUs7OztBQUViLG1CQUFPLEtBQUssV0FBTCxDQUFpQixJQUFqQixFQUF1QixHQUF2QixDQUEyQixVQUFDLEtBQUQsRUFBTyxLQUFQLEVBQWU7QUFDN0MsdUJBQU8sb0JBQUMsZUFBRCxJQUFpQixNQUFNLElBQU4sRUFBWSxTQUFTLE9BQUssUUFBTCxFQUFlLGdCQUFjLE1BQU0sS0FBTixFQUFhLEtBQUssS0FBTCxFQUFoRixDQUFQLENBRDZDO2FBQWYsQ0FBbEMsQ0FGYTs7Ozs7Ozs7O29DQVVMLE1BQU07O0FBRWQsbUJBQU8sR0FBRyxXQUFILENBQWUsSUFBZixFQUFxQixNQUFyQixDQUE0QixVQUFVLElBQVYsRUFBZ0I7QUFDL0MsdUJBQU8sR0FBRyxRQUFILENBQVksT0FBSyxHQUFMLEdBQVMsSUFBVCxDQUFaLENBQTJCLFdBQTNCLEVBQVAsQ0FEK0M7YUFBaEIsQ0FBbkMsQ0FGYzs7Ozs7Ozs7O2tDQVVSLE1BQU07QUFDWixtQkFBTyxHQUFHLFdBQUgsQ0FBZSxJQUFmLEVBQXFCLE1BQXJCLENBQTRCLFVBQVUsSUFBVixFQUFnQjtBQUMvQyx1QkFBTyxHQUFHLFFBQUgsQ0FBWSxPQUFLLEdBQUwsR0FBUyxJQUFULENBQVosQ0FBMkIsTUFBM0IsRUFBUCxDQUQrQzthQUFoQixDQUFuQyxDQURZOzs7O2lDQUtQO0FBQ0wsbUJBQ0k7O2tCQUFLLFdBQVUsVUFBVixFQUFMO2dCQUNLLG9CQUFDLGVBQUQ7QUFDQSwwQkFBTSxLQUFLLE9BQUwsRUFBTjtBQUNBLDZCQUFTLEtBQUssUUFBTDtBQUNULDRCQUFRLElBQVI7QUFDQSwwQkFBTSxLQUFLLE9BQUwsRUFBTjtBQUNBLHlCQUFLLENBQUMsQ0FBRCxFQUxMLENBREw7YUFESixDQURLOzs7O1dBdkRBO0VBQTBCLE1BQU0sU0FBTiIsImZpbGUiOiJUcmVlVmlld0NvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XHJcbmxldCBmcyA9IHJlcXVpcmUoXCJmc1wiKTtcclxuXHJcbmNvbnN0IEJyYW5jaENvbXBvbmVudCA9IHJlcXVpcmUoXCIuL0JyYW5jaENvbXBvbmVudC5qc1wiKS5CcmFuY2hDb21wb25lbnQ7XHJcbmNvbnN0IExlYWZDb21wb25lbnQgPSByZXF1aXJlKFwiLi9MZWFmQ29tcG9uZW50XCIpLkxlYWZDb21wb25lbnQ7XHJcbmNvbnN0IFdpbmRvd3MgPSByZXF1aXJlKFwiLi4vLi4vdG9vbHMuanNcIikuaXNXaW5kb3dzO1xyXG4vKipcclxuICogY29tcG9uZW50IHRoYXQgcmVwcmVzZW50IHRoZSBmaWxlIHN5c3RlbSBhcmNoaXRlY3R1cmVcclxuICovXHJcbmV4cG9ydCBjbGFzcyBUcmVlVmlld0NvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLl9wYXJlbnQgPSBwcm9wcy5wYXJlbnQ7XHJcbiAgICAgICAgdGhpcy5fcHJvY2VzcyA9IHByb3BzLnByb2Nlc3M7XHJcbiAgICAgICAgdGhpcy5fZnVsbFBhdGggPSBwcm9wcy5wYXRoO1xyXG4gICAgICAgIHRoaXMuX3NlcGFyYXRvciA9IFdpbmRvd3MoKSA/IFwiXFxcXFwiIDogXCIvXCJcclxuICAgIH1cclxuICAgIGdldE5hbWUoKXtcclxuICAgICAgICBsZXQgcGF0aCA9IHRoaXMuX2Z1bGxQYXRoLnNwbGl0KFwiXFxcXFwiKTtcclxuICAgICAgICByZXR1cm4gcGF0aFtwYXRoLmxlbmd0aC0xXTtcclxuICAgIH1cclxuICAgIGdldFBhdGgoKXsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBsZXQgcGF0aCA9IHRoaXMuX2Z1bGxQYXRoLnNwbGl0KHRoaXMuX3NlcGFyYXRvcik7ICAgICAgIFxyXG4gICAgICAgIHJldHVybiBwYXRoLmZpbHRlcigodmFsdWUsaW5kZXgpPT5pbmRleCAhPT0gcGF0aC5sZW5ndGgtMSkuam9pbih0aGlzLl9zZXBhcmF0b3IpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm5zIGFuIGFycmF5IG9mIExlYWZDb21wb25lbnRcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIC0gdGhlIGZzIGxldmVsIHRvIGV4cGxvcmVcclxuICAgICAqL1xyXG4gICAgbWFrZUxlYXZlcyhwYXRoKXtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5maW5kRmlsZXMocGF0aCkubWFwKCh2YWx1ZSxpbmRleCk9PntcclxuICAgICAgICAgICAgcmV0dXJuIDxMZWFmQ29tcG9uZW50ICBwcm9jZXNzPXt0aGlzLl9wcm9jZXNzfSBuYW1lPXt2YWx1ZX0ga2V5PXtpbmRleH0gLz4gO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm5zIGFuIGFycmF5IG9mIEJyYW5jaENvbXBvbmVudFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggLSB0aGUgZnMgbGV2ZWwgdG8gZXhwbG9yZVxyXG4gICAgICovXHJcbiAgIG1ha2VCcmFuY2hlcyhwYXRoKXtcclxuICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLmZpbmRGb2xkZXJzKHBhdGgpLm1hcCgodmFsdWUsaW5kZXgpPT57XHJcbiAgICAgICAgICAgIHJldHVybiA8QnJhbmNoQ29tcG9uZW50IHBhdGg9e3BhdGh9IHByb2Nlc3M9e3RoaXMuX3Byb2Nlc3N9IHBhcmVudD17dGhpc30gbmFtZT17dmFsdWV9IGtleT17aW5kZXh9IC8+IDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogcmV0dXJucyBhbiBhcnJheSBvZiBzdHJpbmcgdGhhdCByZXByZXNlbnQgZGlyZWN0b3JpZXNcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIC0gdGhlIGZzIGxldmVsIHRvIGV4cGxvcmVcclxuICAgICAqL1xyXG4gICAgZmluZEZvbGRlcnMocGF0aCkge1xyXG4gICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGZzLnJlYWRkaXJTeW5jKHBhdGgpLmZpbHRlcihmdW5jdGlvbiAoZmlsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZnMuc3RhdFN5bmMocGF0aCtcIi9cIitmaWxlKS5pc0RpcmVjdG9yeSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm5zIGFuIGFycmF5IG9mIHN0cmluZyB0aGF0IHJlcHJlc2VudCBmaWxlc1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggLSB0aGUgZnMgbGV2ZWwgdG8gZXhwbG9yZVxyXG4gICAgICovXHJcbiAgICBmaW5kRmlsZXMocGF0aCkge1xyXG4gICAgICAgIHJldHVybiBmcy5yZWFkZGlyU3luYyhwYXRoKS5maWx0ZXIoZnVuY3Rpb24gKGZpbGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZzLnN0YXRTeW5jKHBhdGgrXCIvXCIrZmlsZSkuaXNGaWxlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmVlVmlld1wiPlxyXG4gICAgICAgICAgICAgICAgIDxCcmFuY2hDb21wb25lbnQgXHJcbiAgICAgICAgICAgICAgICAgcGF0aD17dGhpcy5nZXRQYXRoKCl9IFxyXG4gICAgICAgICAgICAgICAgIHByb2Nlc3M9e3RoaXMuX3Byb2Nlc3N9IFxyXG4gICAgICAgICAgICAgICAgIHBhcmVudD17dGhpc30gXHJcbiAgICAgICAgICAgICAgICAgbmFtZT17dGhpcy5nZXROYW1lKCl9IFxyXG4gICAgICAgICAgICAgICAgIGtleT17LTF9IC8+IFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
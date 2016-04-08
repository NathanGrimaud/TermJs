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

        _this._parent = props.parent;
        _this._process = props.process;
        _this._fullPath = props.path;
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
            var path = this._fullPath.split("\\");
            return path.filter(function (value, index) {
                return index !== path.length - 1;
            }).join("\\");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RyZWVWaWV3L1RyZWVWaWV3Q29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU0sUUFBUSxRQUFRLE9BQVIsQ0FBUjtBQUNOLElBQUksS0FBSyxRQUFRLElBQVIsQ0FBTDs7QUFFSixJQUFNLGtCQUFrQixRQUFRLHNCQUFSLEVBQWdDLGVBQWhDO0FBQ3hCLElBQU0sZ0JBQWdCLFFBQVEsaUJBQVIsRUFBMkIsYUFBM0I7Ozs7O0lBSVQ7OztBQUNULGFBRFMsaUJBQ1QsQ0FBWSxLQUFaLEVBQW1COzhCQURWLG1CQUNVOzsyRUFEViw4QkFFQyxRQURTOztBQUVmLGNBQUssT0FBTCxHQUFlLE1BQU0sTUFBTixDQUZBO0FBR2YsY0FBSyxRQUFMLEdBQWdCLE1BQU0sT0FBTixDQUhEO0FBSWYsY0FBSyxTQUFMLEdBQWlCLE1BQU0sSUFBTixDQUpGOztLQUFuQjs7aUJBRFM7O2tDQU9BO0FBQ0wsZ0JBQUksT0FBTyxLQUFLLFNBQUwsQ0FBZSxLQUFmLENBQXFCLElBQXJCLENBQVAsQ0FEQztBQUVMLG1CQUFPLEtBQUssS0FBSyxNQUFMLEdBQVksQ0FBWixDQUFaLENBRks7Ozs7a0NBSUE7QUFDTCxnQkFBSSxPQUFPLEtBQUssU0FBTCxDQUFlLEtBQWYsQ0FBcUIsSUFBckIsQ0FBUCxDQURDO0FBRUwsbUJBQU8sS0FBSyxNQUFMLENBQVksVUFBQyxLQUFELEVBQU8sS0FBUDt1QkFBZSxVQUFVLEtBQUssTUFBTCxHQUFZLENBQVo7YUFBekIsQ0FBWixDQUFvRCxJQUFwRCxDQUF5RCxJQUF6RCxDQUFQLENBRks7Ozs7Ozs7OzttQ0FRRSxNQUFLOzs7QUFFWixtQkFBTyxLQUFLLFNBQUwsQ0FBZSxJQUFmLEVBQXFCLEdBQXJCLENBQXlCLFVBQUMsS0FBRCxFQUFPLEtBQVAsRUFBZTtBQUMzQyx1QkFBTyxvQkFBQyxhQUFELElBQWdCLFNBQVMsT0FBSyxRQUFMLEVBQWUsTUFBTSxLQUFOLEVBQWEsS0FBSyxLQUFMLEVBQXJELENBQVAsQ0FEMkM7YUFBZixDQUFoQyxDQUZZOzs7Ozs7Ozs7cUNBVUosTUFBSzs7O0FBRWIsbUJBQU8sS0FBSyxXQUFMLENBQWlCLElBQWpCLEVBQXVCLEdBQXZCLENBQTJCLFVBQUMsS0FBRCxFQUFPLEtBQVAsRUFBZTtBQUM3Qyx1QkFBTyxvQkFBQyxlQUFELElBQWlCLE1BQU0sSUFBTixFQUFZLFNBQVMsT0FBSyxRQUFMLEVBQWUsZ0JBQWMsTUFBTSxLQUFOLEVBQWEsS0FBSyxLQUFMLEVBQWhGLENBQVAsQ0FENkM7YUFBZixDQUFsQyxDQUZhOzs7Ozs7Ozs7b0NBVUwsTUFBTTs7QUFFZCxtQkFBTyxHQUFHLFdBQUgsQ0FBZSxJQUFmLEVBQXFCLE1BQXJCLENBQTRCLFVBQVUsSUFBVixFQUFnQjtBQUMvQyx1QkFBTyxHQUFHLFFBQUgsQ0FBWSxPQUFLLEdBQUwsR0FBUyxJQUFULENBQVosQ0FBMkIsV0FBM0IsRUFBUCxDQUQrQzthQUFoQixDQUFuQyxDQUZjOzs7Ozs7Ozs7a0NBVVIsTUFBTTtBQUNaLG1CQUFPLEdBQUcsV0FBSCxDQUFlLElBQWYsRUFBcUIsTUFBckIsQ0FBNEIsVUFBVSxJQUFWLEVBQWdCO0FBQy9DLHVCQUFPLEdBQUcsUUFBSCxDQUFZLE9BQUssR0FBTCxHQUFTLElBQVQsQ0FBWixDQUEyQixNQUEzQixFQUFQLENBRCtDO2FBQWhCLENBQW5DLENBRFk7Ozs7aUNBS1A7QUFDTCxtQkFDSTs7a0JBQUssV0FBVSxVQUFWLEVBQUw7Z0JBQ0ssb0JBQUMsZUFBRDtBQUNBLDBCQUFNLEtBQUssT0FBTCxFQUFOO0FBQ0EsNkJBQVMsS0FBSyxRQUFMO0FBQ1QsNEJBQVEsSUFBUjtBQUNBLDBCQUFNLEtBQUssT0FBTCxFQUFOO0FBQ0EseUJBQUssQ0FBQyxDQUFELEVBTEwsQ0FETDthQURKLENBREs7Ozs7V0F0REE7RUFBMEIsTUFBTSxTQUFOIiwiZmlsZSI6IlRyZWVWaWV3Q29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcclxubGV0IGZzID0gcmVxdWlyZShcImZzXCIpO1xyXG5cclxuY29uc3QgQnJhbmNoQ29tcG9uZW50ID0gcmVxdWlyZShcIi4vQnJhbmNoQ29tcG9uZW50LmpzXCIpLkJyYW5jaENvbXBvbmVudDtcclxuY29uc3QgTGVhZkNvbXBvbmVudCA9IHJlcXVpcmUoXCIuL0xlYWZDb21wb25lbnRcIikuTGVhZkNvbXBvbmVudDtcclxuLyoqXHJcbiAqIGNvbXBvbmVudCB0aGF0IHJlcHJlc2VudCB0aGUgZmlsZSBzeXN0ZW0gYXJjaGl0ZWN0dXJlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVHJlZVZpZXdDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5fcGFyZW50ID0gcHJvcHMucGFyZW50O1xyXG4gICAgICAgIHRoaXMuX3Byb2Nlc3MgPSBwcm9wcy5wcm9jZXNzO1xyXG4gICAgICAgIHRoaXMuX2Z1bGxQYXRoID0gcHJvcHMucGF0aDtcclxuICAgIH1cclxuICAgIGdldE5hbWUoKXtcclxuICAgICAgICBsZXQgcGF0aCA9IHRoaXMuX2Z1bGxQYXRoLnNwbGl0KFwiXFxcXFwiKTtcclxuICAgICAgICByZXR1cm4gcGF0aFtwYXRoLmxlbmd0aC0xXTtcclxuICAgIH1cclxuICAgIGdldFBhdGgoKXsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBsZXQgcGF0aCA9IHRoaXMuX2Z1bGxQYXRoLnNwbGl0KFwiXFxcXFwiKTsgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHBhdGguZmlsdGVyKCh2YWx1ZSxpbmRleCk9PmluZGV4ICE9PSBwYXRoLmxlbmd0aC0xKS5qb2luKFwiXFxcXFwiKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogcmV0dXJucyBhbiBhcnJheSBvZiBMZWFmQ29tcG9uZW50XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAtIHRoZSBmcyBsZXZlbCB0byBleHBsb3JlXHJcbiAgICAgKi9cclxuICAgIG1ha2VMZWF2ZXMocGF0aCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmluZEZpbGVzKHBhdGgpLm1hcCgodmFsdWUsaW5kZXgpPT57XHJcbiAgICAgICAgICAgIHJldHVybiA8TGVhZkNvbXBvbmVudCAgcHJvY2Vzcz17dGhpcy5fcHJvY2Vzc30gbmFtZT17dmFsdWV9IGtleT17aW5kZXh9IC8+IDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogcmV0dXJucyBhbiBhcnJheSBvZiBCcmFuY2hDb21wb25lbnRcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIC0gdGhlIGZzIGxldmVsIHRvIGV4cGxvcmVcclxuICAgICAqL1xyXG4gICBtYWtlQnJhbmNoZXMocGF0aCl7XHJcbiAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5maW5kRm9sZGVycyhwYXRoKS5tYXAoKHZhbHVlLGluZGV4KT0+e1xyXG4gICAgICAgICAgICByZXR1cm4gPEJyYW5jaENvbXBvbmVudCBwYXRoPXtwYXRofSBwcm9jZXNzPXt0aGlzLl9wcm9jZXNzfSBwYXJlbnQ9e3RoaXN9IG5hbWU9e3ZhbHVlfSBrZXk9e2luZGV4fSAvPiA7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIHJldHVybnMgYW4gYXJyYXkgb2Ygc3RyaW5nIHRoYXQgcmVwcmVzZW50IGRpcmVjdG9yaWVzXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAtIHRoZSBmcyBsZXZlbCB0byBleHBsb3JlXHJcbiAgICAgKi9cclxuICAgIGZpbmRGb2xkZXJzKHBhdGgpIHtcclxuICAgICAgIFxyXG4gICAgICAgIHJldHVybiBmcy5yZWFkZGlyU3luYyhwYXRoKS5maWx0ZXIoZnVuY3Rpb24gKGZpbGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZzLnN0YXRTeW5jKHBhdGgrXCIvXCIrZmlsZSkuaXNEaXJlY3RvcnkoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogcmV0dXJucyBhbiBhcnJheSBvZiBzdHJpbmcgdGhhdCByZXByZXNlbnQgZmlsZXNcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIC0gdGhlIGZzIGxldmVsIHRvIGV4cGxvcmVcclxuICAgICAqL1xyXG4gICAgZmluZEZpbGVzKHBhdGgpIHtcclxuICAgICAgICByZXR1cm4gZnMucmVhZGRpclN5bmMocGF0aCkuZmlsdGVyKGZ1bmN0aW9uIChmaWxlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmcy5zdGF0U3luYyhwYXRoK1wiL1wiK2ZpbGUpLmlzRmlsZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlZVZpZXdcIj5cclxuICAgICAgICAgICAgICAgICA8QnJhbmNoQ29tcG9uZW50IFxyXG4gICAgICAgICAgICAgICAgIHBhdGg9e3RoaXMuZ2V0UGF0aCgpfSBcclxuICAgICAgICAgICAgICAgICBwcm9jZXNzPXt0aGlzLl9wcm9jZXNzfSBcclxuICAgICAgICAgICAgICAgICBwYXJlbnQ9e3RoaXN9IFxyXG4gICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMuZ2V0TmFtZSgpfSBcclxuICAgICAgICAgICAgICAgICBrZXk9ey0xfSAvPiBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iXX0=
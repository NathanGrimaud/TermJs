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

var TreeViewComponent = exports.TreeViewComponent = function (_React$Component) {
    _inherits(TreeViewComponent, _React$Component);

    function TreeViewComponent(props) {
        _classCallCheck(this, TreeViewComponent);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TreeViewComponent).call(this, props));

        _this._parent = props.parent;
        return _this;
    }

    _createClass(TreeViewComponent, [{
        key: "makeLeaves",
        value: function makeLeaves(path) {
            return this.findFiles(path).map(function (value, index) {
                return React.createElement(LeafComponent, { name: value, key: index });
            });
        }
    }, {
        key: "makeBranches",
        value: function makeBranches(path) {
            var _this2 = this;

            return this.findFolders(path).map(function (value, index) {
                return React.createElement(BranchComponent, { path: path, parent: _this2, name: value, key: index });
            });
        }
    }, {
        key: "findFolders",
        value: function findFolders(path) {
            return fs.readdirSync(path).filter(function (file) {
                return fs.statSync(path + "/" + file).isDirectory();
            });
        }
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
                this.makeBranches(process.cwd()),
                this.makeLeaves(process.cwd())
            );
        }
    }]);

    return TreeViewComponent;
}(React.Component);
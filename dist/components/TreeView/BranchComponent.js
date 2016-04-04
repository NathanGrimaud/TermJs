
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require("react");
var LeafComponent = require("./LeafComponent").LeafComponent;

var BranchComponent = exports.BranchComponent = function (_React$Component) {
  _inherits(BranchComponent, _React$Component);

  function BranchComponent(props) {
    _classCallCheck(this, BranchComponent);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BranchComponent).call(this, props));

    _this.state = {
      children: [],
      path: props.path,
      name: props.name
    };

    _this._parent = props.parent;
    _this._beenClicked = false;
    _this._isLoaded = false;
    return _this;
  }

  _createClass(BranchComponent, [{
    key: "show",
    value: function show() {
      console.log("show :", this.refs.children);
      console.log("show :", this.state.children);
    }
  }, {
    key: "hide",
    value: function hide() {
      console.log("hide :", this.refs.children);
    }
  }, {
    key: "loadChildren",
    value: function loadChildren(path) {
      var _this2 = this;

      var index = 0;
      console.log(path);
      this._parent.makeBranches(path).map(function (value) {
        _this2.state.children.push(React.createElement(BranchComponent, { path: path, parent: _this2._parent, name: value, key: index }));
        index++;
      });
      this._parent.makeLeaves(path).map(function (value) {
        _this2.state.children.push(React.createElement(LeafComponent, { name: value, key: index }));
        index++;
      });
    }
  }, {
    key: "handleClick",
    value: function handleClick() {

      if (this._beenClicked === false && this._isLoaded === false) {
        var path = this.state.path + "\\" + this.state.name;
        this.loadChildren(path);
        this._isLoaded = true;
        this.forceUpdate();
      } else if (this._beenClicked === false) {
        this.show();
      } else {
        this.hide();
      }
      this._beenClicked = !this._beenClicked;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "branch", onClick: function onClick() {
              return _this3.handleClick();
            } },
          " ",
          this.props.name,
          " "
        ),
        React.createElement(
          "div",
          { className: "children", ref: "children" },
          this.state.children
        )
      );
    }
  }]);

  return BranchComponent;
}(React.Component);